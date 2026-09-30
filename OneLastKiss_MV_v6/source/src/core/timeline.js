// Shot list -> which scene(s) are live at time t, plus transition progress.
import { DEFAULT_POST } from './post.js';

const CUT_AT_HALF = new Set(['flash', 'dip', 'glitch', 'iris']);

export class Timeline {
  /** shots: [{ id, start, scene, tr: { type, dur, align(0..1, 0.5=centred), c:[x,y], amt } }] */
  constructor(shots) {
    this.shots = shots.slice().sort((a, b) => a.start - b.start);
    const S = this.shots;
    for (let i = 0; i < S.length; i++) S[i].end = i + 1 < S.length ? S[i + 1].start : Infinity;
  }
  index(t) {
    const S = this.shots;
    let i = 0;
    while (i + 1 < S.length && S[i + 1].start <= t) i++;
    return i;
  }
  static win(s) {
    const d = s.tr.dur || 0, al = s.tr.align ?? 0.5;
    return [s.start - d * al, s.start + d * (1 - al)];
  }
  at(t) {
    const S = this.shots, i = this.index(t);
    for (const k of [i + 1, i]) {
      const s = S[k];
      if (!s || k === 0 || !s.tr || s.tr.type === 'cut') continue;
      const [a, b] = Timeline.win(s);
      if (t >= a && t < b) return { a: S[k - 1], b: s, p: (t - a) / (b - a), tr: s.tr };
    }
    return { a: S[i], b: null, p: 0, tr: null };
  }
  /** scenes that will be needed around time t (for warm-up / seeking) */
  around(t, pad = 3) {
    return this.shots.filter((s) => s.end > t - pad && s.start < t + pad);
  }
}

export const fullPost = (p) => ({ ...DEFAULT_POST, ...p });

export function blendPost(pa, pb, p, type) {
  const k = CUT_AT_HALF.has(type) ? (p < 0.5 ? 0 : 1) : p * p * (3 - 2 * p);
  const o = {};
  for (const key in DEFAULT_POST) {
    const a = pa[key], b = pb[key];
    o[key] = Array.isArray(a) ? a.map((v, j) => v + (b[j] - v) * k) : a + (b - a) * k;
  }
  return o;
}
