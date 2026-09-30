// Kinetic (v5): web motion-design layer replacing the v4 手書き strokes. "NERV x Swiss editorial": exact hairlines that
// draw on behind a leading dot, masked per-character text reveals with stagger, rolling odometer counters, registration
// crosses, corner brackets, precision rings with tick scales and rotating arc segments, staggered colour panel-stack
// wipes, marquee bands and chapter cards. Everything eases with expo/cubic curves and snaps to the beat - no boil.
// Drawn on a 2D canvas only while an item is live and composited over the HDR frame before bloom/grain.
// Items: { t0, t1, fn(K, t, u, item) } (kinetic-data.js). Coordinates: screen fractions (x of width, y of height),
// sizes in px of a 1080-high virtual frame.
import * as THREE from 'three';
import { fsMat } from './post.js';
import { FONTS } from './textures.js';
import { clamp, lerp } from './util.js';

const FRAG = `uniform sampler2D tOv; uniform float uGain; varying vec2 vUv;
void main(){ vec4 c = texture2D(tOv, vUv); vec3 lin = pow(c.rgb, vec3(2.2)) * uGain; gl_FragColor = vec4(lin * c.a, c.a); }`;
export const hash = (a, b = 0) => { const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return s - Math.floor(s); };
export const E = {
  out: (x) => 1 - Math.pow(1 - clamp(x), 3),
  expo: (x) => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * clamp(x))),
  inOut: (x) => { x = clamp(x); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; },
  in: (x) => Math.pow(clamp(x), 3),
};
/** 0..1 progress of t through [a, a+d] */
export const P = (t, a, d) => clamp((t - a) / d);

export class Kinetic {
  constructor(items) {
    this.I = items.slice().sort((a, b) => a.t0 - b.t0);
    this.cv = document.createElement('canvas'); this.g = this.cv.getContext('2d');
    this.mat = fsMat(FRAG, { tOv: { value: null }, uGain: { value: 0.95 } },
      { transparent: true, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
    this.on = false; this.enabled = true;
    this.resize(1280, 720);
  }
  resize(w, h) {
    const cw = Math.min(1600, w); this.cv.width = cw; this.cv.height = Math.round((cw * h) / w); this.aspect = w / h;
    if (this.tex) this.tex.dispose();
    this.tex = new THREE.CanvasTexture(this.cv);
    Object.assign(this.tex, { colorSpace: THREE.NoColorSpace, generateMipmaps: false, minFilter: THREE.LinearFilter });
    this.mat.uniforms.tOv.value = this.tex;
  }
  update(t) {
    this.on = false;
    if (!this.enabled) return;
    const act = this.I.filter((it) => t >= it.t0 && t < it.t1);
    if (!act.length) return;
    const g = this.g, s = this.cv.height / 1080;
    g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, this.cv.width, this.cv.height); g.setTransform(s, 0, 0, s, 0, 0);
    this.VW = 1080 * this.aspect; this.H = 1080; this.t = t;
    // soft dark halo keeps hairlines legible over bright/busy plates
    for (const it of act) { g.save(); g.shadowColor = 'rgba(0,0,0,0.45)'; g.shadowBlur = it.flat ? 0 : 5 * s; it.fn(this, t, (t - it.t0) / (it.t1 - it.t0), it); g.restore(); g.globalAlpha = 1; }
    this.on = true; this.tex.needsUpdate = true;
  }
  render(fs, target) { if (this.on) fs.run(this.mat, target, false); }
  X(x) { return x * this.VW; }
  Y(y) { return y * this.H; }

  // ---------- lines ----------
  /** hairline a->b drawn to `prog` (from `from`), with a leading dot while drawing */
  line(x0, y0, x1, y1, prog = 1, o = {}) {
    const g = this.g, f = clamp(o.from ?? 0), p = clamp(prog); if (p <= f) return;
    const ax = this.X(lerp(x0, x1, f)), ay = this.Y(lerp(y0, y1, f)), bx = this.X(lerp(x0, x1, p)), by = this.Y(lerp(y0, y1, p));
    g.globalAlpha = o.a ?? 1; g.strokeStyle = o.col ?? '#fff'; g.lineWidth = o.w ?? 1.5; g.setLineDash(o.dash ?? []);
    g.beginPath(); g.moveTo(ax, ay); g.lineTo(bx, by); g.stroke(); g.setLineDash([]);
    if (o.dot !== false && p < 1) { g.fillStyle = o.dotCol ?? o.col ?? '#fff'; g.beginPath(); g.arc(bx, by, (o.w ?? 1.5) * 2.4, 0, 7); g.fill(); }
    g.globalAlpha = 1;
  }
  /** polyline drawn along its length to prog (points in fractions) */
  poly(pts, prog = 1, o = {}) {
    const Q = pts.map(([x, y]) => [this.X(x), this.Y(y)]), cum = [0];
    for (let i = 1; i < Q.length; i++) cum.push(cum[i - 1] + Math.hypot(Q[i][0] - Q[i - 1][0], Q[i][1] - Q[i - 1][1]));
    const L = cum[cum.length - 1], p1 = clamp(prog) * L, p0 = clamp(o.from ?? 0) * L; if (p1 <= p0) return null;
    const g = this.g; g.globalAlpha = o.a ?? 1; g.strokeStyle = o.col ?? '#fff'; g.lineWidth = o.w ?? 1.5; g.setLineDash(o.dash ?? []);
    g.lineJoin = 'miter'; g.beginPath(); let started = false, tip = Q[0];
    for (let i = 1; i < Q.length; i++) {
      if (cum[i] < p0) continue;
      const a0 = cum[i - 1] < p0 ? (p0 - cum[i - 1]) / (cum[i] - cum[i - 1]) : 0, a1 = cum[i] > p1 ? (p1 - cum[i - 1]) / (cum[i] - cum[i - 1]) : 1;
      const A = [lerp(Q[i - 1][0], Q[i][0], a0), lerp(Q[i - 1][1], Q[i][1], a0)], B = [lerp(Q[i - 1][0], Q[i][0], a1), lerp(Q[i - 1][1], Q[i][1], a1)];
      if (!started) { g.moveTo(A[0], A[1]); started = true; } g.lineTo(B[0], B[1]); tip = B;
      if (cum[i] >= p1) break;
    }
    g.stroke(); g.setLineDash([]);
    if (o.dot !== false && prog < 1) { g.fillStyle = o.col ?? '#fff'; g.beginPath(); g.arc(tip[0], tip[1], (o.w ?? 1.5) * 2.4, 0, 7); g.fill(); }
    g.globalAlpha = 1; return [tip[0] / this.VW, tip[1] / this.H];
  }
  /** tick scale along a line: n ticks, every `major`th long */
  ticks(x0, y0, x1, y1, n, prog = 1, o = {}) {
    const g = this.g, dx = this.X(x1) - this.X(x0), dy = this.Y(y1) - this.Y(y0), L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L;
    g.globalAlpha = o.a ?? 1; g.strokeStyle = o.col ?? '#fff'; g.lineWidth = o.w ?? 1.2; g.beginPath();
    const m = Math.floor(n * clamp(prog)), off = o.off ?? 0;
    for (let i = 0; i <= m; i++) {
      const s = ((i / n + off) % 1 + 1) % 1, len = (i % (o.major ?? 5) ? 1 : 2.2) * (o.len ?? 7);
      const px = this.X(x0) + dx * s, py = this.Y(y0) + dy * s; g.moveTo(px, py); g.lineTo(px + nx * len, py + ny * len);
    }
    g.stroke(); g.globalAlpha = 1;
  }

  // ---------- rings ----------
  /** precision ring: r in fractions of height; o.prog draws on, o.seg = [[a0,a1],..] arc segments (radians) instead of a full circle */
  ring(cx, cy, r, o = {}) {
    const g = this.g, X = this.X(cx), Y = this.Y(cy), R = r * this.H, rot = o.rot ?? 0, pr = clamp(o.prog ?? 1);
    g.globalAlpha = o.a ?? 1; g.strokeStyle = o.col ?? '#fff'; g.lineWidth = o.w ?? 1.5; g.setLineDash(o.dash ?? []);
    const segs = o.seg ?? [[0, Math.PI * 2]];
    for (const [a0, a1] of segs) { g.beginPath(); g.arc(X, Y, R, rot + a0 - Math.PI / 2, rot + a0 + (a1 - a0) * pr - Math.PI / 2); g.stroke(); }
    g.setLineDash([]);
    if (o.ticks) { // radial ticks
      const n = o.ticks, m = Math.floor(n * pr), len = o.tlen ?? 10; g.lineWidth = o.tw ?? 1.2; g.beginPath();
      for (let i = 0; i < m; i++) { const a = rot + (i / n) * Math.PI * 2 - Math.PI / 2, L = i % (o.major ?? 5) ? len : len * 2.2;
        g.moveTo(X + Math.cos(a) * R, Y + Math.sin(a) * R); g.lineTo(X + Math.cos(a) * (R - L * (o.tin ?? 1)), Y + Math.sin(a) * (R - L * (o.tin ?? 1))); }
      g.stroke();
    }
    g.globalAlpha = 1;
  }
  /** small filled marker on a ring at angle a */
  pip(cx, cy, r, a, s, col, al = 1) {
    const g = this.g, X = this.X(cx) + Math.cos(a - Math.PI / 2) * r * this.H, Y = this.Y(cy) + Math.sin(a - Math.PI / 2) * r * this.H;
    g.globalAlpha = al; g.fillStyle = col; g.save(); g.translate(X, Y); g.rotate(a); g.beginPath(); g.moveTo(0, -s); g.lineTo(s * 0.7, s * 0.4); g.lineTo(-s * 0.7, s * 0.4); g.closePath(); g.fill(); g.restore(); g.globalAlpha = 1;
  }

  // ---------- marks ----------
  /** registration cross + circle */
  reg(x, y, s, prog = 1, o = {}) {
    const e = s / this.VW, d = s / this.H, p = E.expo(prog);
    this.line(x - e * p, y, x + e * p, y, 1, { ...o, dot: false }); this.line(x, y - d * p, x, y + d * p, 1, { ...o, dot: false });
    if (o.circle !== false) this.ring(x, y, d * 0.55, { ...o, prog: p });
  }
  /** four corner brackets around a box (fractions), l = arm length px */
  brackets(x0, y0, x1, y1, l, prog = 1, o = {}) {
    const g = this.g, p = E.expo(prog), A = [this.X(x0), this.Y(y0)], B = [this.X(x1), this.Y(y1)], L = l * p;
    g.globalAlpha = o.a ?? 1; g.strokeStyle = o.col ?? '#fff'; g.lineWidth = o.w ?? 2; g.beginPath();
    for (const [x, y, sx, sy] of [[A[0], A[1], 1, 1], [B[0], A[1], -1, 1], [A[0], B[1], 1, -1], [B[0], B[1], -1, -1]]) {
      g.moveTo(x + sx * L, y); g.lineTo(x, y); g.lineTo(x, y + sy * L);
    }
    g.stroke(); g.globalAlpha = 1;
  }
  rect(x, y, w, h, col, a = 1) { const g = this.g; g.globalAlpha = a; g.fillStyle = col; g.fillRect(this.X(x), this.Y(y), w * this.VW, h * this.H); g.globalAlpha = 1; }

  // ---------- type ----------
  font(size, kind = 'mono', weight = 400) { return `${weight} ${size}px ${FONTS[kind] || kind}`; }
  /** plain text; o.align, o.base, o.spacing (px), o.font kind */
  text(s, x, y, size, o = {}) {
    const g = this.g; g.globalAlpha = o.a ?? 1; g.fillStyle = o.col ?? '#fff'; g.font = this.font(size, o.font ?? 'mono', o.weight ?? 400);
    g.textBaseline = o.base ?? 'alphabetic'; g.textAlign = o.align ?? 'left';
    if ('letterSpacing' in g) g.letterSpacing = `${o.spacing ?? 0}px`;
    g.fillText(s, this.X(x), this.Y(y));
    if ('letterSpacing' in g) g.letterSpacing = '0px';
    g.globalAlpha = 1;
  }
  /** masked per-character reveal: each glyph slides up out of a clip box, staggered; prog < 0 hides, o.out 0..1 slides them away */
  reveal(s, x, y, size, prog, o = {}) {
    const g = this.g, ch = [...s], font = this.font(size, o.font ?? 'mono', o.weight ?? 400), sp = o.spacing ?? 0;
    g.font = font; g.textBaseline = 'alphabetic';
    const W = ch.map((c) => g.measureText(c).width + sp), tot = W.reduce((a, b) => a + b, 0) - sp;
    let px = this.X(x) - (o.align === 'center' ? tot / 2 : o.align === 'right' ? tot : 0); const py = this.Y(y);
    const st = o.stagger ?? 0.06, n = ch.length, span = 1 + st * (n - 1), out = o.out ?? 0;
    g.save(); g.beginPath(); g.rect(px - 4, py - size * 1.05, tot + 8, size * 1.35); g.clip();
    g.fillStyle = o.col ?? '#fff'; g.globalAlpha = o.a ?? 1;
    for (let i = 0; i < n; i++) {
      const k = E.expo(clamp(prog * span - i * st)), ko = E.in(clamp(out * span - i * st));
      if (k > 0 && ko < 1) g.fillText(ch[i], px, py + (1 - k) * size * 1.2 - ko * size * 1.2);
      px += W[i];
    }
    g.restore(); g.globalAlpha = 1;
    return tot;
  }
  /** vertical Mincho column, per-glyph reveal from the top */
  vreveal(s, x, y, size, prog, o = {}) {
    const g = this.g, ch = [...s], n = ch.length, st = o.stagger ?? 0.08, span = 1 + st * (n - 1), lh = size * (o.lh ?? 1.12);
    g.font = this.font(size, o.font ?? 'mincho', o.weight ?? 600); g.textAlign = 'center'; g.textBaseline = 'top'; g.fillStyle = o.col ?? '#fff';
    const X = this.X(x), Y = this.Y(y);
    g.save(); g.beginPath(); g.rect(X - size, Y - 4, size * 2, lh * n + 8); g.clip();
    for (let i = 0; i < n; i++) {
      const k = E.expo(clamp(prog * span - i * st)), ko = E.in(clamp((o.out ?? 0) * span - i * st));
      if (k <= 0 || ko >= 1) continue;
      g.globalAlpha = (o.a ?? 1); g.fillText(ch[i], X, Y + i * lh - (1 - k) * lh * 0.9 + ko * lh);
    }
    g.restore(); g.textAlign = 'left'; g.globalAlpha = 1;
  }
  /** rolling odometer counter: value v (float), digits d; each digit rolls smoothly */
  odo(v, d, x, y, size, o = {}) {
    const g = this.g; g.font = this.font(size, o.font ?? 'mono', o.weight ?? 500); g.textBaseline = 'alphabetic'; g.fillStyle = o.col ?? '#fff';
    const cw = g.measureText('0').width * (o.cw ?? 1.02); let X = this.X(x); const Y = this.Y(y);
    g.save(); g.globalAlpha = o.a ?? 1; g.beginPath(); g.rect(X - 2, Y - size * 0.95, cw * d + 4, size * 1.2); g.clip();
    for (let i = 0; i < d; i++) {
      const place = Math.pow(10, d - 1 - i), dig = Math.floor(v / place) % 10;
      // each digit rolls only at the end of its cycle (mechanical carry); snap = where the roll starts
      const frac = clamp(((v % place) / place - (o.snap ?? 0.75)) / (1 - (o.snap ?? 0.75)));
      for (let k = 0; k < 2; k++) g.fillText(String((dig + k) % 10), X, Y - frac * size * 1.1 + k * size * 1.1);
      X += cw;
    }
    g.restore(); g.globalAlpha = 1;
    return cw * d;
  }
  /** split-flap style text: each char cycles through random glyphs before settling (time-staggered) */
  flap(s, x, y, size, prog, o = {}) {
    const set = o.set ?? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', ch = [...s], st = o.stagger ?? 0.05, span = 1 + st * (ch.length - 1);
    const out = ch.map((c, i) => { const k = clamp(prog * span - i * st); if (k <= 0) return ' '; if (k >= 1 || c === ' ') return c;
      return set[Math.floor(hash(i, Math.floor(this.t * 30)) * set.length)]; }).join('');
    this.text(out, x, y, size, o);
  }

  // ---------- transitions / bands ----------
  /** staggered colour panel stack sweeping across (u 0..1); fully covers around u = 0.5. dir: 1 = left->right */
  panels(u, cols, o = {}) {
    const g = this.g, VW = this.VW, H = this.H, n = cols.length, st = o.stagger ?? 0.09, ang = o.ang ?? 0;
    g.save(); g.translate(VW / 2, H / 2); g.rotate(ang); const D = Math.hypot(VW, H) * 0.5 + 40;
    const dur = 0.5 - (n - 1) * st;
    for (let i = 0; i < n; i++) { // enter bottom->top, leave top->bottom so each colour is revealed in turn
      const a = E.inOut(clamp((u - i * st) / dur)), b = E.out(clamp((u - 0.5 - (n - 1 - i) * st) / dur));
      const x0 = lerp(-D, D, b), x1 = lerp(-D, D, a); if (x1 <= x0) continue;
      g.fillStyle = cols[i]; g.fillRect(x0, -D, x1 - x0, 2 * D);
      if (o.edge) { g.fillStyle = o.edge; g.fillRect(x1 - 3, -D, 3, 2 * D); }
    }
    g.restore();
  }
  /** marquee band: a strip with repeating text scrolling (speed px/s) */
  marquee(s, y, h, speed, o = {}) {
    const g = this.g, Y = this.Y(y), size = h * 0.56;
    if (o.bg) { g.globalAlpha = o.bga ?? 1; g.fillStyle = o.bg; g.fillRect(0, Y, this.VW, h); }
    g.globalAlpha = o.a ?? 1; g.fillStyle = o.col ?? '#fff'; g.font = this.font(size, o.font ?? 'mono', o.weight ?? 500); g.textBaseline = 'middle';
    const w = g.measureText(s).width; let x = -((this.t * speed) % w + w) % w;
    if (speed < 0) x = -w + ((-this.t * speed) % w);
    for (; x < this.VW; x += w) g.fillText(s, x, Y + h / 2 + 1);
    if (o.rule) { g.fillStyle = o.rule; g.fillRect(0, Y, this.VW, 1.5); g.fillRect(0, Y + h - 1.5, this.VW, 1.5); }
    g.globalAlpha = 1;
  }
}
