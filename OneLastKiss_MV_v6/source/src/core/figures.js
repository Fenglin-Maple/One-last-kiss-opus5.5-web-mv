// Human figures from a tiny 2D skeleton: canvas silhouettes, pencil stroke polylines,
// and a Mona-Lisa-like bust luminance map for particle sampling.
import { rng } from './util.js';

const POSES = {
  stand: { lean: 0, arm: [0.08, 0.05, -0.08, -0.05], leg: [0.035, 0, -0.035, 0] },
  reach: { lean: 0.03, arm: [1.15, 1.35, -0.1, -0.05], leg: [0.05, 0, -0.03, 0] },
  wait: { lean: -0.02, arm: [0.25, 1.6, -0.25, -1.6], leg: [0.02, 0, -0.04, 0] },
  look: { lean: 0.05, arm: [0.12, 0.2, -0.05, 0.1], leg: [0.12, 0.02, -0.06, 0] },
};
/** run cycle, ph in [0,1) */
export function runPose(ph) {
  const s = Math.sin(ph * Math.PI * 2), c = Math.cos(ph * Math.PI * 2);
  return {
    lean: 0.22,
    arm: [0.9 * s, 0.9 * s + 1.4, -0.9 * s, -0.9 * s + 1.4],
    leg: [0.75 * s + 0.15, 0.75 * s + 0.15 - (0.9 + 0.6 * c), -0.75 * s + 0.15, -0.75 * s + 0.15 - (0.9 - 0.6 * c)],
  };
}
export const getPose = (p) => (typeof p === 'object' ? p : POSES[p] || POSES.stand);

/** joints in units of figure height, feet at y=0, facing +x */
export function skeleton(pose) {
  const P = getPose(pose), L = P.lean;
  const rot = (x, y) => [x * Math.cos(L) + y * Math.sin(L), -x * Math.sin(L) + y * Math.cos(L)];
  const hip = [0, 0.52], j = {};
  const up = (x, y) => { const r = rot(x, y - hip[1]); return [hip[0] + r[0], hip[1] + r[1]]; };
  j.head = up(0.01, 0.925); j.neck = up(0, 0.855); j.sh = up(0, 0.815); j.hip = hip;
  const seg = (o, a, len) => [o[0] + Math.sin(a) * len, o[1] - Math.cos(a) * len];
  j.arms = [0, 2].map((k, i) => {
    const s = up(i ? -0.012 : 0.012, 0.815);
    const e = seg(s, P.arm[k] + L, 0.165); return [s, e, seg(e, P.arm[k + 1] + L, 0.15)];
  });
  j.legs = [0, 2].map((k, i) => {
    const h = [hip[0] + (i ? -0.02 : 0.02), hip[1]];
    const kn = seg(h, P.leg[k], 0.255); return [h, kn, seg(kn, P.leg[k + 1], 0.25)];
  });
  return j;
}

/** filled silhouette on a 2D canvas. o: {pose, hair:'short'|'long', coat, color, flip} */
export function drawFigure(g, x, y, h, o = {}) {
  const j = skeleton(o.pose || 'stand'), f = o.flip ? -1 : 1;
  const X = (p) => x + p[0] * h * f, Y = (p) => y - p[1] * h;
  g.save();
  g.fillStyle = g.strokeStyle = o.color || '#000';
  g.lineCap = 'round'; g.lineJoin = 'round';
  const limb = (pts, w) => { g.lineWidth = w * h; g.beginPath(); g.moveTo(X(pts[0]), Y(pts[0])); pts.slice(1).forEach((p) => g.lineTo(X(p), Y(p))); g.stroke(); };
  j.legs.forEach((l) => limb(l, 0.052));
  j.arms.forEach((a) => limb(a, 0.036));
  const sh = j.sh, hp = j.hip;
  g.beginPath();
  g.moveTo(X([sh[0] - 0.1, sh[1]]), Y(sh)); g.lineTo(X([sh[0] + 0.1, sh[1]]), Y(sh));
  g.quadraticCurveTo(X([sh[0] + 0.1, 0.66]), Y([0, 0.66]), X([hp[0] + 0.075, hp[1]]), Y(hp));
  g.lineTo(X([hp[0] - 0.075, hp[1]]), Y(hp));
  g.quadraticCurveTo(X([sh[0] - 0.1, 0.66]), Y([0, 0.66]), X([sh[0] - 0.1, sh[1]]), Y(sh));
  g.fill();
  if (o.coat) { // A-line coat / dress down to the knees
    g.beginPath(); g.moveTo(X([sh[0] - 0.09, sh[1] - 0.02]), Y([0, sh[1] - 0.02])); g.lineTo(X([sh[0] + 0.09, sh[1] - 0.02]), Y([0, sh[1] - 0.02]));
    g.lineTo(X([hp[0] + 0.13, 0.3]), Y([0, 0.3])); g.lineTo(X([hp[0] - 0.12, 0.3]), Y([0, 0.3])); g.closePath(); g.fill();
  }
  limb([j.neck, j.sh], 0.045);
  g.beginPath(); g.ellipse(X(j.head), Y(j.head), 0.05 * h, 0.064 * h, 0, 0, Math.PI * 2); g.fill();
  if (o.hair === 'long') {
    g.beginPath(); g.ellipse(X([j.head[0] - 0.012, j.head[1] - 0.04]), Y([0, j.head[1] - 0.04]), 0.062 * h, 0.1 * h, 0, 0, Math.PI * 2); g.fill();
  }
  g.restore();
}

export function figureCanvas(o = {}, w = 160, h = 480) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  drawFigure(c.getContext('2d'), w / 2, h * 0.98, h * 0.94, { color: '#fff', ...o });
  return c;
}

/** pencil gesture polylines, units of height, feet at origin */
export function figureStrokes(pose, o = {}) {
  const j = skeleton(pose), out = [];
  const hd = j.head, ring = [];
  for (let i = 0; i <= 28; i++) { const a = (i / 28) * Math.PI * 2.15 + 0.4; ring.push([hd[0] + Math.cos(a) * 0.05, hd[1] + Math.sin(a) * 0.062]); }
  out.push(ring);
  out.push([j.neck, [j.sh[0], j.sh[1]], [(j.sh[0] + j.hip[0]) / 2 + 0.012, (j.sh[1] + j.hip[1]) / 2], j.hip]);
  out.push([[j.sh[0] - 0.09, j.sh[1] - 0.01], [j.sh[0], j.sh[1] + 0.008], [j.sh[0] + 0.09, j.sh[1] - 0.01]]);
  j.arms.forEach((a) => out.push(a));
  j.legs.forEach((l) => out.push(l));
  if (o.hair === 'long') out.push([[hd[0] - 0.04, hd[1] + 0.05], [hd[0] - 0.07, hd[1] - 0.02], [hd[0] - 0.06, hd[1] - 0.12]]);
  return out;
}

/** rejection-sample n points from a canvas' luminance*alpha -> Float32Array [x,y,...] in [-a..a]x[-1..1] */
export function sampleCanvas(c, n, seed = 7) {
  const g = c.getContext('2d'), { width: w, height: h } = c, d = g.getImageData(0, 0, w, h).data, R = rng(seed);
  const out = new Float32Array(n * 2), a = w / h;
  let k = 0, guard = 0;
  while (k < n && guard++ < n * 400) {
    const x = Math.floor(R() * w), y = Math.floor(R() * h), i = (y * w + x) * 4;
    const v = (d[i] / 255) * (d[i + 3] / 255);
    if (R() < v) { out[k * 2] = ((x + R()) / w * 2 - 1) * a; out[k * 2 + 1] = 1 - (y + R()) / h * 2; k++; }
  }
  return out;
}
