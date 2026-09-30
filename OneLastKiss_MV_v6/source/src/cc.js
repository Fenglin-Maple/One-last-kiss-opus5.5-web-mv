// Video-site style closed captions (independent of the artistic in-scene lyrics).
// CC button toggles on/off, the menu picks the track: 中文 / 日本語 / English / bilingual combos.
// Keys: c = on/off, v = next track.
import { LYRICS } from './lyrics-data.js';

const TRACKS = [
  { id: 'zh', label: '中文', langs: ['zh'] },
  { id: 'ja', label: '日本語', langs: ['ja'] },
  { id: 'en', label: 'English', langs: ['en'] },
  { id: 'zh-ja', label: '中文 + 日本語', langs: ['zh', 'ja'] },
  { id: 'ja-en', label: '日本語 + English', langs: ['ja', 'en'] },
  { id: 'zh-en', label: '中文 + English', langs: ['zh', 'en'] },
];

const CSS = `
#cc{position:fixed;left:50%;bottom:6.5%;transform:translateX(-50%);z-index:14;display:flex;flex-direction:column;align-items:center;gap:2px;pointer-events:none;transition:bottom .35s ease;max-width:86vw}
#cc.up{bottom:calc(6.5% + 46px)}
#cc span{display:inline-block;background:rgba(8,8,8,.75);color:#fff;padding:.08em .45em .12em;border-radius:3px;line-height:1.35;
  font:500 clamp(15px,2.35vw,34px)/1.35 "Microsoft YaHei","PingFang SC","Yu Gothic UI","Hiragino Sans","Noto Sans CJK SC","OLK SC",system-ui,sans-serif;
  text-align:center;white-space:pre-wrap;letter-spacing:.02em}
#cc span.s2{font-size:clamp(12px,1.75vw,25px);color:#e8e8e8}
#cc.off{display:none}
.cc-btn{position:relative;font:700 11px/1 "OLK Mono",monospace!important;border:1.5px solid #eee!important;border-radius:3px;height:18px!important;min-width:26px!important;padding:0 4px;margin:0 2px}
.cc-btn.on{box-shadow:inset 0 -3px 0 #e53935}
#cc-menu{position:fixed;right:18px;bottom:58px;z-index:16;background:rgba(20,20,20,.92);border-radius:8px;padding:6px 0;min-width:190px;font:13px "Microsoft YaHei","Yu Gothic UI","OLK SC",sans-serif;color:#eee;box-shadow:0 6px 30px rgba(0,0,0,.5)}
#cc-menu.hide{display:none}
#cc-menu .hd{padding:8px 16px 6px;opacity:.6;font-size:12px;letter-spacing:.1em}
#cc-menu button{display:flex;align-items:center;gap:10px;width:100%;background:none;border:0;color:#eee;padding:9px 16px;cursor:pointer;font:inherit;text-align:left}
#cc-menu button:hover,#cc-menu button:focus-visible{background:rgba(255,255,255,.1);outline:none}
#cc-menu button i{width:14px;font-style:normal;color:#e7c58f}`;

const ASCII = /^[\x20-\x7e’‘“”—…]+$/;

/** one cue per lyric line, ended at the next cue so captions never stack like the artistic layer does */
function buildCues() {
  const rows = LYRICS.filter((l) => l[4] !== 'credit').slice().sort((a, b) => a[0] - b[0]);
  const cues = [];
  for (let i = 0; i < rows.length; i++) {
    const [t0, t1, orig, zh, style, , third] = rows[i];
    if (cues.length && Math.abs(cues[cues.length - 1].t0 - t0) < 0.01) continue; // duplicate row
    const en = ASCII.test(orig);
    const oh = style === 'oh';
    cues.push({
      t0, t1: Math.min(t1, i + 1 < rows.length ? rows[i + 1][0] - 0.02 : t1),
      ja: oh ? orig : en ? (third || orig) : orig,
      en: oh ? orig : en ? orig : (third || ''),
      zh: oh ? '哦——' : (zh || orig),
    });
  }
  return cues;
}

export class Captions {
  constructor(root, bar) {
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    this.cues = buildCues();
    this.on = true; this.track = TRACKS[3]; this.cur = null;
    this.el = document.createElement('div'); this.el.id = 'cc';
    this.el.setAttribute('aria-live', 'polite');
    root.appendChild(this.el);
    // CC button + language menu inside the control bar
    this.btn = document.createElement('button'); this.btn.className = 'cc-btn'; this.btn.textContent = 'CC';
    this.btn.setAttribute('aria-label', '字幕 Subtitles'); this.btn.setAttribute('aria-pressed', String(this.on));
    this.lang = document.createElement('button'); this.lang.textContent = '⚙'; this.lang.setAttribute('aria-label', '字幕语言 Subtitle language');
    const fs = bar.querySelector('[data-k=fs]');
    bar.insertBefore(this.btn, fs); bar.insertBefore(this.lang, fs);
    this.menu = document.createElement('div'); this.menu.id = 'cc-menu'; this.menu.className = 'hide';
    this.menu.setAttribute('role', 'menu');
    this.menu.innerHTML = '<div class="hd">字幕 · 字幕 · Subtitles</div>' +
      '<button data-t="off" role="menuitemradio"><i></i>关闭 / オフ / Off</button>' +
      TRACKS.map((t) => `<button data-t="${t.id}" role="menuitemradio"><i></i>${t.label}</button>`).join('');
    root.appendChild(this.menu);
    this.btn.addEventListener('click', (e) => { e.stopPropagation(); this.toggle(); });
    this.lang.addEventListener('click', (e) => { e.stopPropagation(); this.menu.classList.toggle('hide'); this.paintMenu(); });
    this.menu.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      const id = b.dataset.t;
      if (id === 'off') this.set(false); else { this.track = TRACKS.find((t) => t.id === id); this.set(true); }
      this.menu.classList.add('hide');
    });
    addEventListener('click', (e) => { if (!this.menu.contains(e.target)) this.menu.classList.add('hide'); });
    addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (k === 'c') this.toggle();
      else if (k === 'v') { this.track = TRACKS[(TRACKS.indexOf(this.track) + 1) % TRACKS.length]; this.set(true); }
    });
  }
  toggle() { this.set(!this.on); }
  /** pick a track by id ('zh', 'ja', 'en', 'zh-ja', ...) or by index; 'off' hides captions */
  setTrack(id) {
    if (id === 'off' || id === false) return this.set(false);
    const t = typeof id === 'number' ? TRACKS[id] : TRACKS.find((x) => x.id === id);
    if (t) { this.track = t; this.set(true); }
  }
  set(on) {
    this.on = on; this.cur = null;
    this.el.classList.toggle('off', !on);
    this.btn.classList.toggle('on', on); this.btn.setAttribute('aria-pressed', String(on));
    this.paintMenu();
  }
  paintMenu() {
    this.menu.querySelectorAll('button').forEach((b) => {
      const sel = this.on ? b.dataset.t === this.track.id : b.dataset.t === 'off';
      b.querySelector('i').textContent = sel ? '✓' : ''; b.setAttribute('aria-checked', String(sel));
    });
  }
  /** the cue live at t for the current track, or null */
  cue(t) { return this.cues.find((q) => t >= q.t0 && t < q.t1) || null; }
  /** barVisible: lift captions above the control bar like video sites do */
  update(t, barVisible) {
    this.el.classList.toggle('up', !!barVisible);
    if (!this.on) return;
    const c = this.cue(t);
    const key = c ? c.t0 + this.track.id : '';
    if (key === this.cur) return;
    this.cur = key;
    this.el.textContent = '';
    if (!c) return;
    this.track.langs.forEach((l, i) => {
      if (!c[l]) return;
      const s = document.createElement('span'); s.textContent = c[l]; if (i > 0) s.className = 's2';
      this.el.appendChild(s);
    });
  }

  /** burn the live cue onto a 2D canvas sized w x h, video-site style (offline 2K capture) */
  drawTo(g, t, w, h) {
    if (!this.on) return;
    const c = this.cue(t); if (!c) return;
    const rows = this.track.langs.map((l) => c[l]).filter(Boolean);
    if (!rows.length) return;
    const s = h / 1080, pad = 9 * s, lead = 8 * s;
    g.textBaseline = 'middle'; g.textAlign = 'center';
    const F = rows.map((txt, i) => (i ? 27 : 36) * s);
    const W = rows.map((txt, i) => { g.font = `500 ${F[i]}px "OLK SC","Noto Sans CJK SC","Yu Gothic UI",sans-serif`; return g.measureText(txt).width; });
    const bw = Math.max(...W) + pad * 2, bh = F.reduce((a, b) => a + b, 0) + lead * (rows.length - 1) + pad * 1.7;
    const bx = (w - bw) / 2, by = h * 0.935 - bh;
    g.fillStyle = 'rgba(8,8,8,0.72)';
    const r = Math.min(4 * s, bh / 2 + 2);
    g.beginPath(); g.roundRect(bx, by, bw, bh, r); g.fill();
    let y = by + pad * 0.85;
    rows.forEach((txt, i) => {
      g.fillStyle = i ? '#e8e8e8' : '#fff';
      g.font = `500 ${F[i]}px "OLK SC","Noto Sans CJK SC","Yu Gothic UI",sans-serif`;
      y += F[i] / 2; g.fillText(txt, w / 2, y); y += F[i] / 2 + lead;
    });
  }
}
