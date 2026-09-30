// DOM lyric layer: every line/char is styled per frame as a pure function of t.
import { LYRICS, ohStep } from './lyrics-data.js';
import { LYR_CSS } from './lyrics-css.js';
import { clamp, smooth, ease, hash1, hex } from './core/util.js';
import { audio } from './core/audio.js';

const EXIT = { fade: 0.8, dust: 1.5, shatter: 0.6, blur: 0.45, rise: 1.2 };
const PENCIL = [0xe8875a, 0xdf6f78, 0xc65f97, 0x8c68c4, 0x5c7fd0, 0x5eb6c8].map(hex);
const GRAPHITE = hex(0x3d352f), FIRE0 = [1, 0.45, 0.12], FIRE1 = [1, 0.8, 0.45], WHITE = [1, 1, 1];
const pc = (s) => hex(parseInt(s.slice(1), 16));
const mixc = (a, b, k) => a.map((v, i) => v + (b[i] - v) * k);
const rgb = (c, a) => (a === undefined ? `rgb(${c.map((v) => Math.round(clamp(v) * 255)).join(',')})` : `rgba(${c.map((v) => Math.round(clamp(v) * 255)).join(',')},${a.toFixed(3)})`);

export class Lyrics {
  constructor(root) {
    const st = document.createElement('style'); st.textContent = LYR_CSS; document.head.appendChild(st);
    this.el = document.createElement('div'); this.el.id = 'lyr'; root.appendChild(this.el);
    this.u = 1; this.cineY = 0.93; this.enabled = true; this.blend = ''; this.alpha = ''; this.ohCount = 0;
    this.lines = LYRICS.map((d) => this.make(d));
    this.resize();
  }
  make([t0, t1, jp, zh, style, o, third]) {
    const el = document.createElement('div'); el.className = 'ln l-' + style;
    const J = document.createElement('div'); J.className = 'jp'; el.appendChild(J);
    const words = ['oh', 'en', 'whisper', 'credit'].includes(style);
    const units = words ? jp.split(' ') : Array.from(jp).map((ch) => (ch === ' ' ? ' ' : ch));
    const spans = units.map((txt, k) => {
      const s = document.createElement('span'); s.textContent = txt; J.appendChild(s);
      if (words && style !== 'oh' && k < units.length - 1) J.appendChild(document.createTextNode(' '));
      return s;
    });
    const bases = [];
    if (style === 'oh') {
      const up = this.ohCount++ % 2 === 1;
      spans.forEach((_, k) => {
        const s = Math.sin((k / 4) * Math.PI), x = 0.18 + k * 0.16, y = up ? 0.33 - 0.06 * s : 0.64 + 0.06 * s;
        bases[k] = `left:${(x * 100).toFixed(1)}%;top:${(y * 100).toFixed(1)}%;`;
      });
    }
    // translation block: hairline rule, 中文, third language (English, or Japanese for English lines)
    let Z = null, R = null, ZH = null, X = null;
    const div = (cls, txt) => { const d = document.createElement('div'); d.className = cls; if (txt) d.textContent = txt; return d; };
    if (zh || third) {
      Z = div('tr'); Z.style.opacity = '1'; R = div('rule'); Z.appendChild(R);
      const soft = style === 'pencil' ? null : mixc(o.c ? pc(o.c) : [0.957, 0.937, 0.902], [0.93, 0.9, 0.86], 0.45);
      if (zh) { ZH = div('zh', zh); Z.appendChild(ZH); if (soft) ZH.style.color = rgb(soft); }
      if (third) {
        X = div('x ' + (['en', 'whisper', 'credit'].includes(style) ? 'ja' : 'en'), third); Z.appendChild(X);
        if (soft) X.style.color = rgb(soft, style === 'en' ? 0.92 : 0.78);
      }
      el.appendChild(Z);
    }
    const S = el.style, x = o.x ?? 0.5, y = o.y ?? 0.5;
    if (style === 'v') { S.left = x * 100 + '%'; S.top = '15%'; }
    else if (style === 'h' || style === 'pencil') { S.left = x * 100 + '%'; S.top = y * 100 + '%'; }
    else if (style === 'center' || style === 'credit') { S.left = '50%'; S.top = y * 100 + '%'; }
    else if (style === 'en') { S.left = '50%'; S.top = (o.y ?? 0.47) * 100 + '%'; }
    else if (style === 'whisper') { S.left = '50%'; S.top = '82%'; }
    else if (style === 'cine') S.left = '50%';
    this.el.appendChild(el);
    const n = spans.length, dur = t1 - t0;
    const rd = style === 'oh' ? ohStep() * 4 : o.rd ?? (style === 'credit' ? 0.6 : style === 'whisper' ? 3.0 : style === 'pencil' ? Math.min(dur * 0.6, 3.2) : clamp(dur * 0.5, 0.5, 2.4));
    const out = o.out || 'fade';
    return {
      t0, t1, el, spans, Z, R, ZH, X, style, o, bases, vis: false, cache: [], lcache: '', zc: '',
      ut: spans.map((_, k) => t0 + (n > 1 ? (rd * k) / (n - 1) : 0)),
      c: o.c ? pc(o.c) : [0.957, 0.937, 0.902],
      in: o.in || (style === 'pencil' ? 'ink' : style === 'cine' ? 'type' : 'glow'),
      out, exitDur: EXIT[out], fd: style === 'pencil' ? 1.0 : 0.7,
    };
  }
  resize() {
    const w = innerWidth, h = innerHeight;
    this.u = Math.min(w / 1920, h / 1080);
    this.el.style.setProperty('--u', this.u + 'px');
    const lb = Math.max(0, 1 - w / h / 2.39);
    this.cineY = lb * h * 0.5 > 90 * this.u ? 1 - lb / 4 : 0.9;
    this.lines.forEach((L) => { L.cache = []; L.lcache = ''; });
  }
  toggle() { this.enabled = !this.enabled; }
  update(t, alpha = 1) {
    const mode = t > 224 ? 'multiply' : 'screen';
    if (mode !== this.blend) { this.el.style.mixBlendMode = mode; this.blend = mode; }
    const a = clamp(alpha).toFixed(3);
    if (a !== this.alpha) { this.el.style.opacity = a; this.alpha = a; }
    for (const L of this.lines) {
      const vis = this.enabled && t >= L.t0 - 0.05 && t < L.t1 + L.exitDur;
      if (vis !== L.vis) { L.el.style.display = vis ? 'block' : 'none'; L.vis = vis; L.cache = []; L.lcache = ''; }
      if (vis) this.frame(L, t);
    }
  }
  frame(L, t) {
    const u = this.u, age = t - L.t0, ex = t - L.t1, xk = ex > 0 ? clamp(ex / L.exitDur) : 0, loud = audio.get('loud', t);
    let tr = '', op = 1, blur = 0;
    switch (L.style) {
      case 'v': tr = `translate(-50%,${(age * 3 * u).toFixed(1)}px)`; break;
      case 'h': tr = `translate(${(age * 3 * u).toFixed(1)}px,-50%)`; break;
      case 'center': case 'credit': case 'whisper': tr = `translate(-50%,-50%) scale(${(1 + age * 0.006).toFixed(4)})`; break;
      case 'en': tr = `translate(-50%,-50%) scale(${(0.97 + age * 0.005).toFixed(4)})`; break;
      case 'cine': tr = 'translate(-50%,-50%)'; break;
      case 'pencil': tr = 'translate(0,-50%)'; break;
    }
    if (L.out === 'fade') op = 1 - ease.inOut(xk);
    else if (L.out === 'blur') { op = 1 - xk; blur = xk * 12 * u; tr += ` scale(${(1 + xk * 0.08).toFixed(3)})`; }
    else if (L.out === 'rise') { op = 1 - ease.in(xk); blur = xk * 4 * u; tr += ` translateY(${(-xk * 50 * u).toFixed(1)}px)`; }
    const key = tr + op.toFixed(3) + blur.toFixed(1) + this.cineY;
    if (key !== L.lcache) {
      L.lcache = key; const S = L.el.style;
      S.transform = tr; S.opacity = op.toFixed(3); S.filter = blur > 0.1 ? `blur(${blur.toFixed(1)}px)` : '';
      if (L.style === 'cine') S.top = (this.cineY * 100).toFixed(2) + '%';
    }
    if (L.Z) {
      // staggered reveal: hairline draws out, 中文 settles in, third language follows
      const kx = 1 - clamp(ex / 0.6), pk = L.style === 'pencil' ? 1 : 0.9;
      const a = ease.out(smooth(L.t0 + 0.15, L.t0 + 1.0, t)) * kx, b = ease.out(smooth(L.t0 + 0.5, L.t0 + 1.5, t)) * kx;
      const zs = a.toFixed(3) + b.toFixed(3);
      if (zs !== L.zc) {
        L.zc = zs; const vert = L.style === 'v', ax = vert ? 'X' : 'Y';
        const sh = (k) => `translate${ax}(${((vert ? -1 : 1) * (1 - k) * 8 * u).toFixed(1)}px)`;
        L.R.style.transform = `scale${vert ? 'Y' : 'X'}(${a.toFixed(3)})`; L.R.style.opacity = (a * 0.9).toFixed(3);
        if (L.ZH) { L.ZH.style.opacity = (a * pk).toFixed(3); L.ZH.style.transform = sh(a); }
        if (L.X) { L.X.style.opacity = b.toFixed(3); L.X.style.transform = sh(b); }
      }
    }
    for (let k = 0; k < L.spans.length; k++) {
      const css = L.style === 'oh' ? this.ohUnit(L, k, t, u) : this.unit(L, k, t, u, loud, ex);
      if (css !== L.cache[k]) { L.cache[k] = css; L.spans[k].style.cssText = css; }
    }
  }
  unit(L, k, t, u, loud, ex) {
    const tk = t - L.ut[k], n = L.spans.length;
    if (tk < 0) return 'opacity:0';
    const e = clamp(tk / L.fd);
    let op = 1, tx = 0, ty = 0, sc = 1, rot = 0, bl = 0, col = L.c, gcol = L.c, glow = 0.55, gr = 14;
    if (L.o.rainbow) { gcol = PENCIL[k % 6]; col = mixc(gcol, WHITE, 0.5); }
    switch (L.in) {
      case 'type': { const f = Math.exp(-tk * 10); tx = (hash1(k * 13 + Math.floor(t * 40)) - 0.5) * 3 * u * f; glow = 0.4 + f; gr = 6 + 16 * f; break; }
      case 'burn': { const b = clamp(tk / 1.1); op = ease.out(clamp(tk / 0.3)); col = b < 0.5 ? mixc(FIRE0, FIRE1, b * 2) : mixc(FIRE1, L.c, b * 2 - 1); gcol = FIRE0; glow = 1 - 0.55 * b; gr = 10 + 26 * (1 - b); ty = (1 - e) * 8 * u; break; }
      case 'ink': { const ee = ease.out(clamp(tk / 1.2)); op = ee; bl = (1 - ee) * 3 * u; sc = 1.08 - 0.08 * ee; col = mixc(PENCIL[k % 6], GRAPHITE, smooth(0.2, 1.8, tk) * 0.6); glow = 0; break; }
      default: { const ee = ease.out(e); op = ee; bl = (1 - ee) * 9 * u; ty = (1 - ee) * 12 * u; glow = 0.45 + 0.6 * (1 - ee); gr = 12 + 24 * (1 - ee); }
    }
    if (L.in !== 'ink') glow = glow * (0.8 + 0.5 * loud) + Math.exp(-tk * 2.5) * 0.35;
    if (ex > 0 && L.out === 'dust') {
      const d = clamp((ex - (k / n) * L.exitDur * 0.45) / (L.exitDur * 0.55));
      op *= 1 - d; ty -= (d * 36 + d * d * 20) * u; tx += (hash1(k * 7.3 + L.t0) - 0.5) * 50 * u * d; bl += d * 7 * u; sc *= 1 + d * 0.25;
    } else if (ex > 0 && L.out === 'shatter') {
      const d = clamp(ex / L.exitDur), h1 = hash1(k * 3.1 + L.t0), h2 = hash1(k * 5.7 + 1), h3 = hash1(k * 9.2 + 2);
      tx += (h1 - 0.5) * 240 * u * d; ty += (-60 * h2 + 320 * d) * d * u; rot = (h3 - 0.5) * 220 * d; op *= 1 - d * d; sc *= 1 - 0.3 * d;
    }
    let s = `opacity:${op.toFixed(3)};color:${rgb(col)}`;
    if (tx || ty || sc !== 1 || rot) s += `;transform:translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px) rotate(${rot.toFixed(1)}deg) scale(${sc.toFixed(3)})`;
    if (bl > 0.15) s += `;filter:blur(${bl.toFixed(1)}px)`;
    if (glow > 0.01) { const g = Math.min(glow, 1); s += `;text-shadow:0 0 ${(gr * u).toFixed(1)}px ${rgb(gcol, g)},0 0 ${(gr * 3 * u).toFixed(1)}px ${rgb(gcol, g * 0.35)}`; }
    return s;
  }
  ohUnit(L, k, t, u) {
    const tk = t - L.ut[k], base = L.bases[k];
    if (tk < 0) return base + 'opacity:0';
    const p = ease.out(clamp(tk / 0.5)), f = Math.exp(-tk * 4), c = L.c;
    const op = smooth(0, 0.06, tk) * (1 - 0.5 * smooth(0.5, 2.5, tk)) * (1 - clamp((t - L.t1) / L.exitDur));
    return base + `opacity:${op.toFixed(3)};color:${rgb(mixc(c, WHITE, f * 0.5))};transform:translate(-50%,-50%) translateY(${(-tk * 5 * u).toFixed(1)}px) scale(${(1.45 - 0.45 * p).toFixed(3)});text-shadow:0 0 ${((10 + 40 * f) * u).toFixed(1)}px ${rgb(c, 0.6 + 0.4 * f)},0 0 ${(80 * f * u + 1).toFixed(1)}px ${rgb([1, 0.7, 0.5], 0.5 * f)}`;
  }
}
