"""v2 audio analysis -> assets/audio-data.js (window.OLK_AUDIO)
Beat grid was fitted to the kick onsets (see notes at bottom): period 0.5357 s, beat0 0.345 s (kick),
bar0 1.952 s (from structural novelty; every section boundary lands on it).
Adds to v1: separated drum event lists (kick / snare / hat / hit), a vocal melody contour (pitch + voicing),
per-bar energy + drum density, harmonic/percussive loudness, and a 'riser' channel (energy build-ups).
usage: python3 analyze_v2.py <song.flac> <out audio-data.js> <out report.json>"""
import numpy as np, librosa, soundfile as sf, json, base64, sys, subprocess, os

SRC, OUT, REP = sys.argv[1], sys.argv[2], sys.argv[3]
sr = 22050
if not os.path.exists('/tmp/an/st.wav'):
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', SRC, '-ac', '2', '-ar', str(sr), '/tmp/an/st.wav'], check=True)
y2, _ = sf.read('/tmp/an/st.wav'); y = y2.mean(1).astype(np.float32)
dur = len(y) / sr
if os.path.exists('/tmp/an/H.npy'):
    H, P = np.load('/tmp/an/H.npy'), np.load('/tmp/an/P.npy')
else:
    H, P = librosa.effects.hpss(y, margin=(1.0, 3.0))

PER, BEAT0, BAR0 = 0.5357, 0.345, 0.345 + 3 * 0.5357
FPS = 60; hop = sr / FPS                       # fractional hop -> resample envelopes to exactly 60 fps
n = int(dur * FPS)
tt = np.arange(n) / FPS

def to60(x, fps_in):
    return np.interp(tt, np.arange(len(x)) / fps_in, x)

def norm_db(x, lo=3, hi=99.7):
    d = 10 * np.log10(x + 1e-12); a, b = np.percentile(d, lo), np.percentile(d, hi)
    return np.clip((d - a) / (b - a), 0, 1)

def follow(x, att, rel):
    ka, kr = np.exp(-1 / (att * FPS)), np.exp(-1 / (rel * FPS)); o = np.zeros_like(x); v = 0.0
    for i, s in enumerate(x):
        k = ka if s > v else kr; v = k * v + (1 - k) * s; o[i] = v
    return o

# ---- spectral envelopes
h1 = 367
S = np.abs(librosa.stft(y, n_fft=2048, hop_length=h1)) ** 2; f = librosa.fft_frequencies(sr=sr, n_fft=2048); fps1 = sr / h1
band = lambda lo, hi: to60(S[(f >= lo) & (f < hi)].sum(0), fps1)
rms = to60(librosa.feature.rms(y=y, frame_length=2048, hop_length=h1)[0] ** 2, fps1)
loud = follow(norm_db(rms, 2, 99.8), 0.03, 0.25)
low = follow(norm_db(band(25, 140)), 0.02, 0.18)
mid = follow(norm_db(band(140, 2200)), 0.03, 0.22)
high = follow(norm_db(band(2200, 11000)), 0.02, 0.15)
energy = follow(norm_db(rms, 2, 99.8), 1.2, 1.8)
harm = follow(norm_db(to60(librosa.feature.rms(y=H, hop_length=h1)[0] ** 2, fps1), 3, 99.8), 0.05, 0.4)
perc = follow(norm_db(to60(librosa.feature.rms(y=P, hop_length=h1)[0] ** 2, fps1), 3, 99.8), 0.02, 0.2)
onset = librosa.onset.onset_strength(y=y, sr=sr, hop_length=h1); onset = follow(np.clip(to60(onset, fps1) / np.percentile(onset, 99.5), 0, 1), 0.01, 0.12)

# ---- drum events from the percussive part
h2 = 256; fps2 = sr / h2
SP = np.abs(librosa.stft(P, n_fft=1024, hop_length=h2)); f2 = librosa.fft_frequencies(sr=sr, n_fft=1024)
def bflux(lo, hi):
    m = (f2 >= lo) & (f2 < hi); x = np.log1p(100 * SP[m]); d = np.maximum(0, np.diff(x, axis=1, prepend=x[:, :1])).sum(0)
    return d / (np.percentile(d, 99.5) + 1e-9)
fx = {'kick': bflux(30, 140), 'snare': 0.6 * bflux(1500, 5000) + 0.4 * bflux(180, 400), 'hat': bflux(7000, 11000)}
full = librosa.onset.onset_strength(y=y, sr=sr, hop_length=h2); full = full / np.percentile(full, 99.5)
ev, env = {}, {}
for k, x in list(fx.items()) + [('hit', full)]:
    delta = {'kick': 0.18, 'snare': 0.16, 'hat': 0.2, 'hit': 0.55}[k]
    pk = librosa.util.peak_pick(x, pre_max=3, post_max=3, pre_avg=12, post_avg=12, delta=delta, wait={'hit': 40}.get(k, 5))
    # hits: strongest broadband onsets that also stand above the local loudness (accents / crashes / drops)
    if k == 'hit':
        pk = [p for p in pk if x[p] > 0.85]
    ev[k] = [[round(p / fps2, 3), round(float(min(1, x[p])), 2)] for p in pk]
    a = np.zeros(n); tau = {'kick': 0.16, 'snare': 0.12, 'hat': 0.06, 'hit': 0.6}[k]; kk = np.exp(-1 / (tau * FPS))
    for p in pk:
        i = int(round(p / fps2 * FPS))
        if i < n: a[i] = max(a[i], min(1, x[p]))
    v = 0.0
    for i in range(n): v = max(v * kk, a[i]); a[i] = v
    env[k] = a

# ---- vocal melody (pyin on the harmonic part, 11 kHz)
hh = librosa.resample(H, orig_sr=sr, target_sr=11025)
f0, vf, vp = librosa.pyin(hh, fmin=150, fmax=1000, sr=11025, frame_length=1024, hop_length=256, resolution=0.1, n_thresholds=50)
fps3 = 11025 / 256
midi = librosa.hz_to_midi(np.where(vp > 0.12, f0, np.nan))
ok = ~np.isnan(midi)
mf = np.interp(np.arange(len(midi)), np.where(ok)[0], midi[ok]) if ok.any() else np.zeros(len(midi))
pitch = to60(np.clip((mf - 52) / 28, 0, 1), fps3)                  # E3..G#5 -> 0..1
pitch = follow(pitch, 0.04, 0.04)
voice = follow(to60(np.clip(vp * 2.2, 0, 1), fps3), 0.05, 0.3)

# ---- riser: slow rise of energy (positive derivative over ~2 s)
e2 = follow(norm_db(rms, 2, 99.8), 0.8, 0.8); d = np.maximum(0, e2 - np.roll(e2, int(2 * FPS))); riser = np.clip(d / (np.percentile(d, 99) + 1e-9), 0, 1)

# ---- per-bar table
nb = int((dur - BAR0) / (4 * PER)) + 1
bars = []
for b in range(-1, nb):
    t0 = BAR0 + b * 4 * PER; t1 = t0 + 4 * PER
    i0, i1 = max(0, int(t0 * FPS)), min(n, int(t1 * FPS))
    if i1 <= i0: continue
    cnt = {k: sum(1 for e in ev[k] if t0 <= e[0] < t1) for k in ('kick', 'snare', 'hat')}
    bars.append(dict(i=b, t=round(t0, 3), e=round(float(loud[i0:i1].mean()), 3), low=round(float(low[i0:i1].mean()), 3),
                     voice=round(float(voice[i0:i1].mean()), 3), p=round(float(pitch[i0:i1].mean()), 3), **cnt))

# ---- 32 band spectrum at 30 fps (same as v1)
hop2 = 735
M = librosa.feature.melspectrogram(y=y, sr=sr, n_fft=2048, hop_length=hop2, n_mels=32, fmin=40, fmax=11000, power=2.0)
Md = 10 * np.log10(M + 1e-12)
lo_, hi_ = np.percentile(Md, 5, axis=1, keepdims=True), np.percentile(Md, 99.6, axis=1, keepdims=True)
spec = 0.55 * np.clip((Md - lo_) / (hi_ - lo_), 0, 1) + 0.45 * np.clip((Md - np.percentile(Md, 5)) / (np.percentile(Md, 99.8) - np.percentile(Md, 5)), 0, 1)
spec = spec.T

b64 = lambda a: base64.b64encode(np.round(np.clip(a, 0, 1) * 255).astype(np.uint8).tobytes()).decode()
chans = dict(loud=loud, low=low, mid=mid, high=high, kick=env['kick'], snare=env['snare'], hat=env['hat'], hit=env['hit'],
             onset=onset, energy=energy, harm=harm, perc=perc, pitch=pitch, voice=voice, riser=riser)
data = dict(fps=FPS, n=n, duration=round(dur, 4), bpm=round(60 / PER, 3), period=PER, beat0=BEAT0, bar0=BAR0,
            ch={k: b64(v[:n]) for k, v in chans.items()},
            specFps=sr / hop2, specBands=32, specN=int(spec.shape[0]), spec=b64(spec.reshape(-1)),
            ev={k: [e[0] for e in v] for k, v in ev.items()}, evA={k: [e[1] for e in v] for k, v in ev.items()},
            bars=[[b['t'], b['e']] for b in bars])
with open(OUT, 'w') as fo:
    fo.write('/* One Last Kiss MV v2 - precomputed audio features (tools/analyze_v2.py) */\n')
    fo.write('window.OLK_AUDIO=' + json.dumps(data, separators=(',', ':')) + ';\n')
json.dump(dict(bars=bars, hits=ev['hit'], counts={k: len(v) for k, v in ev.items()}), open(REP, 'w'), indent=0)
np.savez('/tmp/an/curves.npz', loud=loud, low=low, pitch=pitch, voice=voice, riser=riser, kick=env['kick'], snare=env['snare'], hat=env['hat'], hit=env['hit'], energy=energy)
print('frames', n, {k: len(v) for k, v in ev.items()}, 'bytes', os.path.getsize(OUT))
