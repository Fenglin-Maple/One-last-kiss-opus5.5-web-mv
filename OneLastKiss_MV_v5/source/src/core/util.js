export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export const range = (t, a, b) => clamp((t - a) / (b - a));
export const smooth = (a, b, x) => { const t = range(x, a, b); return t * t * (3 - 2 * t); };
/** 1 inside [a,b] with soft edges of width fin/fout */
export const window01 = (t, a, b, fin = 0.5, fout = 0.5) => smooth(a - fin, a, t) * (1 - smooth(b, b + fout, t));
export const ease = {
  inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  out: (t) => 1 - Math.pow(1 - t, 3),
  in: (t) => t * t * t,
  outExpo: (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  inExpo: (t) => (t <= 0 ? 0 : Math.pow(2, 10 * t - 10)),
  sine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  outBack: (t) => { const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); },
};
/** deterministic xorshift PRNG */
export function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return (s >>> 0) / 4294967296; };
}
export const hash1 = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
/** keyframe interpolation: keys = [[t, value(s)...], ...] sorted by t, eased */
export function keys(t, ks, e = ease.sine) {
  if (t <= ks[0][0]) return ks[0].slice(1);
  for (let i = 0; i < ks.length - 1; i++) {
    const a = ks[i], b = ks[i + 1];
    if (t <= b[0]) {
      const f = e((t - a[0]) / (b[0] - a[0]));
      const out = [];
      for (let j = 1; j < a.length; j++) out.push(a[j] + (b[j] - a[j]) * f);
      return out;
    }
  }
  return ks[ks.length - 1].slice(1);
}
export const hex = (h) => [((h >> 16) & 255) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
/** sRGB hex -> linear rgb array */
export const lin = (h) => hex(h).map((c) => Math.pow(c, 2.2));

const PEN = [[0.96, 0.56, 0.32], [0.93, 0.42, 0.40], [0.86, 0.36, 0.58], [0.62, 0.40, 0.80], [0.36, 0.52, 0.88], [0.40, 0.78, 0.86]]
  .map((c) => c.map((v) => Math.pow(v, 2.2)));
/** rainbow colored-pencil palette from the cover (linear rgb), x: 0 orange -> 1 cyan, k: intensity */
export function pencil(x, k = 1) {
  x = clamp(x) * 5;
  const i = Math.min(4, Math.floor(x)), f = x - i;
  return PEN[i].map((v, j) => (v + (PEN[i + 1][j] - v) * f) * k);
}
