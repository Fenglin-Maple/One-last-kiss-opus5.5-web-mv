"""Generate MV image assets through an OpenAI/new-api compatible images endpoint.

usage: python gen_images.py [name ...] [--force] [--quality high|xhigh|max]
  - prompts live in prompts.json next to this file: {name: {prompt, quality?, refs?[]}}
  - key is read from env OLK_IMG_KEY or /tmp/img/key (never stored in the project)
  - raw results are written to ../gen/raw/<name>.<ext>; existing files are skipped unless --force
"""
import base64, json, os, sys, time, uuid, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(HERE, '..', 'gen', 'raw')
BASE = os.environ.get('OLK_IMG_BASE', 'https://ai-pixel.online').rstrip('/')
MODEL = os.environ.get('OLK_IMG_MODEL', 'gpt-image-2.5-sunburst')
TIMEOUT = float(os.environ.get('OLK_IMG_TIMEOUT', '165'))


def key():
    k = os.environ.get('OLK_IMG_KEY')
    if not k and os.path.exists('/tmp/img/key'):
        k = open('/tmp/img/key').read().strip()
    if not k:
        sys.exit('no API key (set OLK_IMG_KEY)')
    return k


def ext_of(b):
    if b[:8] == b'\x89PNG\r\n\x1a\n': return 'png'
    if b[:3] == b'\xff\xd8\xff': return 'jpg'
    if b[:4] == b'RIFF' and b[8:12] == b'WEBP': return 'webp'
    return 'bin'


def post_json(path, body):
    req = urllib.request.Request(BASE + path, data=json.dumps(body).encode(), method='POST',
                                 headers={'Authorization': 'Bearer ' + key(), 'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
        return json.loads(r.read())


def post_multipart(path, fields, files):
    bnd = uuid.uuid4().hex
    out = []
    for k, v in fields.items():
        out += [f'--{bnd}\r\nContent-Disposition: form-data; name="{k}"\r\n\r\n{v}\r\n'.encode()]
    for k, fp in files:
        mime = 'image/png' if fp.endswith('.png') else 'image/jpeg' if fp.endswith('.jpg') else 'image/webp'
        out += [f'--{bnd}\r\nContent-Disposition: form-data; name="{k}"; filename="{os.path.basename(fp)}"\r\nContent-Type: {mime}\r\n\r\n'.encode(),
                open(fp, 'rb').read(), b'\r\n']
    out.append(f'--{bnd}--\r\n'.encode())
    req = urllib.request.Request(BASE + path, data=b''.join(out), method='POST',
                                 headers={'Authorization': 'Bearer ' + key(), 'Content-Type': f'multipart/form-data; boundary={bnd}'})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
        return json.loads(r.read())


def fetch_image(item):
    if item.get('b64_json'):
        return base64.b64decode(item['b64_json'])
    with urllib.request.urlopen(item['url'], timeout=60) as r:
        return r.read()


DEADLINE = time.time() + float(os.environ.get('OLK_IMG_BUDGET', '170'))


def run(name, spec, quality):
    """retry while the remaining budget allows another ~62 s attempt (gateway drops calls at 60 s)"""
    while True:
        r = run_once(name, spec, quality)
        if r.startswith('OK') or DEADLINE - time.time() < 62:
            return r
        print('retry', r[:60], flush=True)


def run_once(name, spec, quality):
    t0 = time.time()
    q = spec.get('quality', quality)
    refs = [os.path.join(RAW, r) for r in spec.get('refs', [])]
    try:
        extra = spec.get('params', {})
        if refs:
            fields = {'model': MODEL, 'prompt': spec['prompt'], 'size': 'auto', 'quality': q, 'n': '1', **{k: str(v) for k, v in extra.items()}}
            res = post_multipart('/v1/images/edits', fields, [('image[]', r) for r in refs])
        else:
            res = post_json('/v1/images/generations', {'model': MODEL, 'prompt': spec['prompt'], 'size': 'auto', 'quality': q, 'n': 1, **extra})
        b = fetch_image(res['data'][0])
        fp = os.path.join(RAW, f'{name}.{ext_of(b)}')
        open(fp, 'wb').write(b)
        return f'OK   {name:12s} {time.time() - t0:6.1f}s {len(b) // 1024}KB -> {os.path.basename(fp)}'
    except urllib.error.HTTPError as e:
        return f'FAIL {name:12s} {time.time() - t0:6.1f}s HTTP {e.code}: {e.read()[:300]!r}'
    except Exception as e:  # noqa: BLE001 - report and continue with other jobs
        return f'FAIL {name:12s} {time.time() - t0:6.1f}s {type(e).__name__}: {str(e)[:300]}'


def main():
    args = sys.argv[1:]
    force = '--force' in args
    quality = 'max'
    if '--quality' in args:
        quality = args[args.index('--quality') + 1]
    names = [a for a in args if not a.startswith('--') and a != quality]
    prompts = json.load(open(os.path.join(HERE, 'prompts.json'), encoding='utf-8'))
    style = prompts.pop('_style', {})
    os.makedirs(RAW, exist_ok=True)
    jobs = {}
    for n, s in prompts.items():
        if names and n not in names: continue
        if not force and any(os.path.exists(os.path.join(RAW, f'{n}.{e}')) for e in ('png', 'jpg', 'webp')): continue
        s = dict(s); s['prompt'] = s['prompt'] + ' ' + style.get(s.get('style', ''), '')
        jobs[n] = s
    print(f'{len(jobs)} job(s): {", ".join(jobs)}', flush=True)
    with ThreadPoolExecutor(max_workers=max(1, len(jobs))) as ex:
        futs = [ex.submit(run, n, s, quality) for n, s in jobs.items()]
        for f in as_completed(futs):
            print(f.result(), flush=True)


if __name__ == '__main__':
    main()
