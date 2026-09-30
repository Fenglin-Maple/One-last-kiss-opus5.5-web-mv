// Loading / start gate / auto-hiding controls / replay.
const CSS = `
.olk-ov{position:fixed;inset:0;z-index:20;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#050507;color:#e9dcc6;transition:opacity 1.4s ease}
.olk-ov.hide{opacity:0;pointer-events:none}
.olk-title{font-family:"OLK Script",cursive;font-size:min(13vw,160px);color:#e7c58f;text-shadow:0 0 34px rgba(231,197,143,.35);line-height:1.25;padding:0 .3em}
.olk-sub{font-family:"OLK Serif",serif;letter-spacing:.6em;font-size:13px;text-transform:uppercase;opacity:.7;margin-top:6px;padding-left:.6em}
.olk-prog{width:min(360px,60vw);height:1px;background:rgba(255,255,255,.12);margin-top:44px;position:relative;overflow:hidden}
.olk-prog i{position:absolute;left:0;top:0;bottom:0;width:0;background:#e7c58f;box-shadow:0 0 8px #e7c58f;transition:width .25s}
.olk-pct{font-family:"OLK Mono",monospace;font-size:11px;opacity:.5;margin-top:12px;letter-spacing:.25em}
.olk-btn{margin-top:46px;font-family:"OLK SC",serif;font-size:15px;letter-spacing:.4em;color:#f3e6cf;background:transparent;border:1px solid rgba(231,197,143,.6);padding:14px 30px 14px 36px;cursor:pointer;border-radius:40px;transition:all .3s}
.olk-btn:hover,.olk-btn:focus-visible{background:rgba(231,197,143,.14);box-shadow:0 0 26px rgba(231,197,143,.3);outline:none}
.olk-hint{font-family:"OLK SC",serif;font-size:12px;opacity:.45;margin-top:22px;letter-spacing:.12em;text-align:center;line-height:2}
#olk-bar{position:fixed;left:0;right:0;bottom:0;z-index:15;display:flex;align-items:center;gap:12px;padding:16px 22px;background:linear-gradient(transparent,rgba(0,0,0,.55));color:#eee;font:12px "OLK Mono",monospace;transition:opacity .6s}
#olk-bar.idle{opacity:0;pointer-events:none}
#olk-bar button{background:none;border:0;color:#eee;cursor:pointer;font:15px "OLK SC",serif;min-width:28px;height:28px;opacity:.8}
#olk-bar button:hover,#olk-bar button:focus-visible{opacity:1;outline:none;text-shadow:0 0 8px #e7c58f}
#olk-track{flex:1;height:18px;cursor:pointer;position:relative}
#olk-track:before{content:"";position:absolute;left:0;right:0;top:8px;height:2px;background:rgba(255,255,255,.2)}
#olk-track i{position:absolute;left:0;top:8px;height:2px;background:#e7c58f}
#olk-end{position:fixed;left:50%;bottom:9%;transform:translateX(-50%);z-index:16;transition:opacity 1.5s}
#olk-end.hide{opacity:0;pointer-events:none}
#olk-end .olk-btn{color:#5a4a3c;border-color:rgba(90,74,60,.5);margin:0}
body.olk-idle{cursor:none}`;

const fmt = (s) => { s = Math.max(0, s); return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`; };
const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };

export class UI {
  constructor(root, cb, duration) {
    this.cb = cb; this.dur = duration; this.clean = false; this.hidden = false;
    const st = h('style'); st.textContent = CSS; document.head.appendChild(st);
    const title = '<div class="olk-title">One Last Kiss</div><div class="olk-sub">Hikaru Utada</div>';
    this.load = h('div', 'olk-ov', title + '<div class="olk-prog"><i></i></div><div class="olk-pct">0%</div>');
    this.gate = h('div', 'olk-ov hide', title + '<button class="olk-btn" aria-label="Play">▶ 点击播放</button><div class="olk-hint">浏览器拦截了带声音的自动播放<br>双击文件夹里的「Play-OneLastKiss.bat」即可全屏自动播放</div>');
    this.bar = h('div', 'idle'); this.bar.id = 'olk-bar';
    this.bar.innerHTML = '<button data-k="play" aria-label="Play or pause">❚❚</button><span class="tm">0:00</span><div id="olk-track" role="slider" aria-label="Seek" tabindex="0"><i></i></div><span class="du"></span><button data-k="lyr" aria-label="Toggle lyrics">词</button><button data-k="fs" aria-label="Fullscreen">⛶</button>';
    this.endEl = h('div', 'hide', '<button class="olk-btn" aria-label="Replay">↻ 重播</button>'); this.endEl.id = 'olk-end';
    [this.load, this.gate, this.bar, this.endEl].forEach((e) => root.appendChild(e));
    this.bar.querySelector('.du').textContent = fmt(duration);
    this.track = this.bar.querySelector('#olk-track'); this.fill = this.track.firstChild;
    this.playBtn = this.bar.querySelector('[data-k=play]'); this.tm = this.bar.querySelector('.tm');
    this.bar.addEventListener('click', (e) => {
      const k = e.target.dataset && e.target.dataset.k;
      if (k === 'play') cb.toggle(); else if (k === 'lyr') cb.lyrics(); else if (k === 'fs') this.fullscreen();
    });
    this.track.addEventListener('click', (e) => { const r = this.track.getBoundingClientRect(); cb.seek(((e.clientX - r.left) / r.width) * duration); });
    this.endEl.querySelector('button').addEventListener('click', () => cb.restart());
    let timer = 0;
    const wake = () => {
      if (this.clean || this.hidden) return;
      this.bar.classList.remove('idle'); document.body.classList.remove('olk-idle');
      clearTimeout(timer);
      timer = setTimeout(() => { this.bar.classList.add('idle'); document.body.classList.add('olk-idle'); }, 2600);
    };
    addEventListener('mousemove', wake); addEventListener('touchstart', wake);
    addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (k === ' ' || k === 'k') { e.preventDefault(); cb.toggle(); }
      else if (k === 'arrowright') cb.seekBy(5); else if (k === 'arrowleft') cb.seekBy(-5);
      else if (k === 'f') this.fullscreen(); else if (k === 'l') cb.lyrics(); else if (k === 'r') cb.restart();
      else if (k === 'h') { this.hidden = !this.hidden; this.bar.classList.add('idle'); }
      else return;
      wake();
    });
  }
  fullscreen() { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(() => {}); }
  loading(p, label) { this.load.querySelector('i').style.width = (p * 100).toFixed(1) + '%'; this.load.querySelector('.olk-pct').textContent = label || Math.round(p * 100) + '%'; }
  ready(instant = false) { if (instant) this.load.style.transition = 'none'; this.load.classList.add('hide'); }
  showGate(onClick) {
    this.gate.classList.remove('hide');
    const b = this.gate.querySelector('button'); b.focus();
    const go = () => { this.gate.classList.add('hide'); onClick(); };
    b.addEventListener('click', go, { once: true });
  }
  update(t, playing, ended) {
    this.fill.style.width = ((t / this.dur) * 100).toFixed(2) + '%';
    this.tm.textContent = fmt(t);
    this.playBtn.textContent = playing ? '❚❚' : '▶';
    this.endEl.classList.toggle('hide', !ended || this.clean);
  }
}
