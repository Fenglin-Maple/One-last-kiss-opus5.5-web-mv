// 手書き (tegaki) motion-graphics layer: hand-drawn strokes, rings, marks, speed lines and paper-cut wipes that
// "boil" at 8 fps like hand animation and carry across cuts (a thread that becomes a ring, a gear that becomes an iris,
// a route line that runs through three shots). Drawn on a 2D canvas only while an item is live and composited over
// the HDR frame before bloom/grain, like the EMERGENCY boards. Items: { t0, t1, fn(T, t, u, item) } (tegaki-data.js).
import * as THREE from 'three';
import { fsMat } from './post.js';
import { FONTS } from './textures.js';
import { clamp, lerp } from './util.js';

const FRAG = `uniform sampler2D tOv; uniform float uGain; varying vec2 vUv;
void main(){ vec4 c = texture2D(tOv, vUv); vec3 lin = pow(c.rgb, vec3(2.2)) * uGain; gl_FragColor = vec4(lin * c.a, c.a); }`;
const hash = (a, b) => { const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return s - Math.floor(s); };
/** smooth 1D value noise in [-1, 1] */
export const n1 = (x, s) => { const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f); return lerp(hash(i, s), hash(i + 1, s), u) * 2 - 1; };

export class Tegaki {
  constructor(items) {
    this.I = items.slice().sort((a, b) => a.t0 - b.t0);
    this.cv = document.createElement('canvas'); this.g = this.cv.getContext('2d');
    this.mat = fsMat(FRAG, { tOv: { value: null }, uGain: { value: 0.92 } },
      { transparent: true, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
    this.on = false; this.enabled = true; this.hash = hash;
    this.resize(1280, 720);
  }
  resize(w, h) {
    const cw = Math.min(1280, w); this.cv.width = cw; this.cv.height = Math.round((cw * h) / w); this.aspect = w / h;
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
    this.VW = 1080 * this.aspect; this.H = 1080; this.t = t; this.fb = Math.floor(t * 8);
    for (const it of act) { g.save(); it.fn(this, t, (t - it.t0) / (it.t1 - it.t0), it); g.restore(); g.globalAlpha = 1; }
    this.on = true; this.tex.needsUpdate = true;
  }
  render(fs, target) { if (this.on) fs.run(this.mat, target, false); }

  // ---- geometry (inputs in screen fractions, radius in fractions of height; outputs px) ----
  /** Catmull-Rom through control points, boiled */
  path(ctrl, n = 64, boil = 3, seed = 0) {
    const P = ctrl.map(([x, y]) => [x * this.VW, y * this.H]), m = P.length - 1, out = [];
    for (let i = 0; i <= n; i++) {
      const s = (i / n) * m, k = Math.min(m - 1, Math.floor(s)), u = s - k;
      const a = P[Math.max(0, k - 1)], b = P[k], c = P[k + 1], d = P[Math.min(m, k + 2)];
      const cr = (j) => 0.5 * (2 * b[j] + (-a[j] + c[j]) * u + (2 * a[j] - 5 * b[j] + 4 * c[j] - d[j]) * u * u + (-a[j] + 3 * b[j] - 3 * c[j] + d[j]) * u * u * u);
      const q = (i / n) * 6 + seed * 13;
      out.push([cr(0) + n1(q, this.fb * 7 + seed) * boil, cr(1) + n1(q + 50, this.fb * 7 + seed) * boil]);
    }
    return out;
  }
  /** hand-drawn circle that doesn't quite close; o.rf(angle) shapes the radius (gears) */
  ring(cx, cy, r, o = {}) {
    const turns = o.turns ?? 1.1, n = Math.ceil((o.n ?? 90) * turns), out = [], rot = o.rot ?? -1.9, seed = o.seed ?? 0, b = o.boil ?? 3;
    for (let i = 0; i <= n; i++) {
      const s = i / n, a = rot + s * turns * 6.2832;
      const rr = r * this.H * (1 + (o.grow ?? 0.07) * (s - 0.5) + 0.02 * Math.sin(a * 2 + seed)) * (o.rf ? o.rf(a) : 1) + n1(s * 8 + seed * 5, this.fb * 3 + seed) * b;
      out.push([cx * this.VW + Math.cos(a) * rr * (o.sx ?? 1), cy * this.H + Math.sin(a) * rr]);
    }
    return out;
  }
  // ---- drawing ----
  /** tapered ink stroke drawn from o.from..prog of its length; o: w, col, a, taper, glow, tip, dbl, dash */
  stroke(pts, prog = 1, o = {}) {
    const g = this.g, cum = [0]; let L = 0;
    for (let i = 1; i < pts.length; i++) { L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); cum.push(L); }
    const p0 = clamp(o.from ?? 0) * L, p1 = clamp(prog) * L;
    if (p1 <= p0 + 0.5) return;
    const w = o.w ?? 4, taper = o.taper ?? 0.8, A = o.a ?? 1;
    const pass = (col, wk, al, off) => {
      g.strokeStyle = col; g.lineCap = 'round'; g.lineJoin = 'round'; g.globalAlpha = al;
      for (let i = 1; i < pts.length; i++) {
        if (cum[i] < p0) continue; if (cum[i - 1] > p1) break;
        if (o.dash && Math.floor(cum[i] / o.dash) % 2) continue;
        const s = cum[i] / L, ww = w * wk * (1 - taper + taper * Math.pow(Math.sin(Math.PI * clamp(s * 0.98 + 0.01)), 0.5));
        let a = pts[i - 1], b = pts[i];
        if (cum[i] > p1) { const f = (p1 - cum[i - 1]) / (cum[i] - cum[i - 1]); b = [lerp(a[0], b[0], f), lerp(a[1], b[1], f)]; }
        if (cum[i - 1] < p0) { const f = (p0 - cum[i - 1]) / (cum[i] - cum[i - 1]); a = [lerp(a[0], pts[i][0], f), lerp(a[1], pts[i][1], f)]; }
        g.lineWidth = Math.max(0.7, ww); g.beginPath(); g.moveTo(a[0] + off, a[1] - off); g.lineTo(b[0] + off, b[1] - off); g.stroke();
      }
    };
    if (o.glow) pass(o.glow, 3.2, 0.16 * A, 0);
    pass(o.col ?? '#fff', 1, A, 0);
    if (o.dbl) pass(o.col ?? '#fff', 0.35, 0.5 * A, 2.2 + n1(this.fb, 9) * 1.2); // sketchy second line
    if (o.tip && prog < 1) {
      let i = cum.findIndex((c) => c >= p1); if (i < 0) i = pts.length - 1;
      this.dot(pts[i][0] / this.VW, pts[i][1] / this.H, w * 1.6, o.col ?? '#fff', A, o.glow);
    }
    g.globalAlpha = 1;
  }
  dot(x, y, r, col, a = 1, glow) {
    const g = this.g, X = x * this.VW, Y = y * this.H;
    if (glow) { g.globalAlpha = a * 0.25; g.fillStyle = glow; g.beginPath(); g.arc(X, Y, r * 3, 0, 7); g.fill(); }
    g.globalAlpha = a; g.fillStyle = col; g.beginPath(); g.arc(X, Y, r, 0, 7); g.fill(); g.globalAlpha = 1;
  }
  /** 4-point sparkle */
  spark(x, y, s, col, a = 1, rot = 0) {
    const g = this.g; if (s <= 0.2) return;
    g.save(); g.translate(x * this.VW, y * this.H); g.rotate(rot);
    const star = (k) => { g.beginPath(); for (let i = 0; i < 8; i++) { const r = (i & 1 ? 0.16 : 1) * s * k, an = (i / 8) * 6.2832; g[i ? 'lineTo' : 'moveTo'](Math.cos(an) * r, Math.sin(an) * r); } g.closePath(); g.fill(); };
    g.fillStyle = col; g.globalAlpha = a * 0.25; star(1.8); g.globalAlpha = a; star(1); g.restore(); g.globalAlpha = 1;
  }
  /** hand-drawn ✕ stamp */
  cross(x, y, s, prog, o = {}) {
    const d = s / 1080, e = d / this.aspect, A = [[x - e, y - d], [x + e * 1.1, y + d * 0.9]], B = [[x + e, y - d * 1.05], [x - e * 0.9, y + d]];
    const sd = o.seed ?? 0;
    this.stroke(this.path(A, 12, 2, sd), clamp(prog * 2), o);
    this.stroke(this.path(B, 12, 2, sd + 1), clamp(prog * 2 - 1), o);
  }
  /** manga speed lines converging on (cx, cy); regenerated each boil frame */
  speed(cx, cy, r0, n, a, col) {
    if (a <= 0.01) return;
    const g = this.g, X = cx * this.VW, Y = cy * this.H, far = Math.hypot(this.VW, this.H);
    g.fillStyle = col; g.globalAlpha = a;
    for (let i = 0; i < n; i++) {
      const an = hash(i, this.fb) * 6.2832, r = (r0 + hash(i + 7, this.fb) * 0.25) * this.H, w = 0.004 + hash(i + 3, this.fb) * 0.012;
      g.beginPath(); g.moveTo(X + Math.cos(an) * r, Y + Math.sin(an) * r);
      g.lineTo(X + Math.cos(an - w) * far, Y + Math.sin(an - w) * far); g.lineTo(X + Math.cos(an + w) * far, Y + Math.sin(an + w) * far); g.fill();
    }
    g.globalAlpha = 1;
  }
  /** paper-cut band sweeping across the frame (u 0..1), covers the cut at u = 0.5 */
  wipe(u, o = {}) {
    const g = this.g, VW = this.VW, H = this.H, D = Math.hypot(VW, H), bw = (o.bw ?? 0.36) * H;
    const c = lerp(-D * 0.5 - bw - 60, D * 0.5 + bw + 60, u), N = 22;
    g.save(); g.translate(VW / 2, H / 2); g.rotate(o.ang ?? -0.38);
    const edge = (x0, s) => { const P = []; for (let i = 0; i <= N; i++) P.push([x0 + n1(i * 0.9 + s, this.fb) * 16, -D / 2 + (i / N) * D]); return P; };
    const L = edge(c - bw, 1), R = edge(c + bw, 5).reverse();
    g.fillStyle = o.col ?? '#fff1e2'; g.beginPath(); [...L, ...R].forEach(([x, y], i) => g[i ? 'lineTo' : 'moveTo'](x, y)); g.closePath(); g.fill();
    if (o.line) { // trailing ink lines
      g.strokeStyle = o.line; g.lineWidth = 5;
      for (const k of [1, 2.2]) { const x = c + bw + 26 * k; g.beginPath(); edge(x, 9 + k).forEach(([px, y], i) => g[i ? 'lineTo' : 'moveTo'](px, y)); g.stroke(); g.lineWidth = 2.5; }
    }
    g.restore();
  }
  /** handwritten margin note (script font) */
  note(s, x, y, size, col, a = 1, rot = -0.08) {
    const g = this.g; g.save(); g.globalAlpha = a; g.translate(x * this.VW, y * this.H); g.rotate(rot + n1(this.fb, 4) * 0.015);
    g.font = `400 ${size}px ${FONTS.script}`; g.fillStyle = col; g.textBaseline = 'middle'; g.fillText(s, 0, 0); g.restore(); g.globalAlpha = 1;
  }
}
