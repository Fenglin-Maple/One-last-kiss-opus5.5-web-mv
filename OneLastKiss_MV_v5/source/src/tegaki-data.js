// 手書き motion-graphics timeline (core/tegaki.js). Each item carries a hand-drawn motif ACROSS cuts so the
// image shots read as one continuous hand-animated piece. Kept out of the lyric zones of each shot.
import { audio } from './core/audio.js';
import { clamp, smooth, ease, lerp } from './core/util.js';

const PAPER = '#fff4e6', RED = '#ff4a2a', EMBER = '#ffb46a', BLUE = '#a8ccff', INK = '#07030a', GOLD = '#ffe0a0';
const r = (t, a, b) => clamp((t - a) / (b - a));
const K = (t, d = 8) => audio.hitPulse('kick', t, d);
const pop = (t, t0, d = 0.25) => (t < t0 ? 0 : ease.out(clamp((t - t0) / d)));

export const TEGAKI = [
  // 1. the red thread: runs across the red city, curls into a ring around the pyramid, turns blue and
  //    breaks open with the restoration wave (pred -> louvre -> pblue)
  { t0: 19.3, t1: 23.4, fn: (T, t) => {
    const out = smooth(22.9, 23.4, t), blue = smooth(22.4, 22.75, t);
    const col = blue > 0.5 ? BLUE : RED, glow = blue > 0.5 ? '#4a8cff' : '#ff2a10';
    if (t < 20.71) { // thread crossing the red city
      const pts = T.path([[-0.05, 0.38], [0.18, 0.3], [0.36, 0.42], [0.52, 0.34], [0.6, 0.47]], 90, 3, 1);
      T.stroke(pts, ease.inOut(r(t, 19.3, 20.6)), { w: 4, col, glow, tip: 1, from: smooth(20.2, 20.7, t) * 0.8, dbl: 1 });
    } else { // the ring around the glass pyramid
      const ro = ease.out(r(t, 20.71, 21.5)), rr = 0.16 + 0.02 * K(t) + smooth(22.61, 23.3, t) * 0.5;
      T.stroke(T.ring(0.5, 0.47, rr, { turns: 1.15, seed: 2, sx: 1.25 }), ro, { w: 4.5 * (1 - out), col, glow, tip: 1, dbl: 1, a: 1 - out });
      if (t > 21.3) for (let i = 0; i < 5; i++) {
        const an = -2.2 + i * 1.25, s = 16 * pop(t, 21.3 + i * 0.27) * (1 - out) * (0.7 + 0.5 * K(t + i));
        T.spark(0.5 + Math.cos(an) * rr * 1.25 / T.aspect, 0.47 + Math.sin(an) * rr, s, blue > 0.5 ? '#eaf3ff' : PAPER, 0.9, t * 0.5);
      }
    }
  } },
  // 2. gear -> iris: a hand-drawn gear turns with the kicks beside the cage, then flies in and becomes the ring of
  //    the Eva's eye; speed lines on the activation (cage -> eye -> nti)
  { t0: 29.6, t1: 34.3, fn: (T, t) => {
    const fly = ease.inOut(r(t, 32.6, 33.15)), shrink = smooth(33.9, 34.3, t);
    const cx = lerp(0.8, 0.5, fly), cy = lerp(0.3, 0.5, fly), rad = lerp(0.12, 0.36, fly) * (1 - shrink * 0.6);
    const rot = audio.count ? audio.count('kick', 29.3, t) * 0.26 : t * 0.9;
    const gear = (a) => 1 + 0.09 * clamp(Math.sin((a - rot) * 12) * 3, -1, 1) * (1 - fly);
    const col = t < 33.05 ? GOLD : '#b8ff9a', glow = t < 33.05 ? '#ff9a30' : '#40ff60';
    T.stroke(T.ring(cx, cy, rad, { turns: 1.03, n: 240, rf: gear, seed: 5, grow: 0.02, rot }), ease.out(r(t, 29.6, 30.8)), { w: 3.5, col, glow, taper: 0.3, a: 1 - shrink, dbl: 1 });
    T.stroke(T.ring(cx, cy, rad * 0.42, { turns: 1.1, seed: 6, rot: -rot }), ease.out(r(t, 30.2, 31.2)), { w: 2.5, col, glow, a: 1 - shrink });
    if (t > 33.05) T.speed(0.5, 0.5, 0.33, 70, 0.55 * (1 - smooth(33.7, 34.15, t)) + 0.3 * K(t, 10), INK);
  } },
  // 3. NTI: red ✕ stamps slammed on the kicks
  { t0: 34.25, t1: 35.35, fn: (T, t) => {
    [[34.3, 0.18, 0.3, 95], [34.62, 0.83, 0.24, 70], [34.95, 0.74, 0.6, 80]].forEach(([at, x, y, s], i) => {
      if (t < at) return; const k = ease.out(r(t, at, at + 0.12)), sc = 1 + 0.5 * (1 - k);
      T.cross(x, y, s * sc, k, { w: 14, col: '#ff6a4a', glow: '#ff1a00', seed: i * 3, a: 1 - smooth(35.1, 35.35, t) });
    });
  } },
  // 4. Village-3: a dashed route drawn across the sky of both shots, ending in a circled "home" (village -> paddy)
  { t0: 38.6, t1: 41.3, fn: (T, t) => {
    const a = 1 - smooth(41.0, 41.3, t);
    const pts = T.path([[0.04, 0.2], [0.2, 0.12], [0.34, 0.24], [0.5, 0.15], [0.63, 0.22]], 110, 1.5, 3);
    T.stroke(pts, ease.inOut(r(t, 38.6, 40.4)), { w: 3, col: PAPER, dash: 14, a: 0.85 * a, taper: 0, tip: 1 });
    if (t > 40.3) {
      T.stroke(T.ring(0.63, 0.22, 0.035, { turns: 1.25, seed: 8 }), ease.out(r(t, 40.3, 40.65)), { w: 3, col: EMBER, a });
      T.note('home', 0.655, 0.155, 44, PAPER, pop(t, 40.55, 0.3) * a);
    }
  } },
  // 5. the line we ride on: a hand-drawn route map with four stations, one per cut (beach -> train -> gendo -> train2)
  { t0: 89.5, t1: 98.05, fn: (T, t) => {
    const a = 0.85 * smooth(89.5, 90.0, t) * (1 - smooth(97.6, 98.05, t)), Y = 0.085;
    const X = [0.18, 0.38, 0.6, 0.82], C = [89.26, 91.35, 93.57, 95.57];
    T.stroke(T.path([[0.12, Y], [0.88, Y]], 60, 1.2, 11), ease.inOut(r(t, 89.5, 90.6)), { w: 2.5, col: PAPER, a, taper: 0.2 });
    X.forEach((x, i) => {
      const on = t >= C[i] + 0.1, s = pop(t, C[i] + 0.1, 0.3);
      T.stroke(T.ring(x, Y, 0.012, { turns: 1.1, seed: 20 + i, boil: 1 }), 1, { w: 2.2, col: PAPER, a, taper: 0 });
      if (on) T.dot(x, Y, 7 * s, i === 2 ? RED : EMBER, a);
    });
    let k = 0; while (k < 3 && t > C[k + 1]) k++;
    const tx = lerp(X[k], X[Math.min(3, k + 1)], ease.inOut(r(t, C[k] + 0.3, (C[k + 1] ?? 98.19) - 0.1)));
    T.spark(tx, Y, 14 + 6 * K(t), '#fff', a, t);
  } },
  // 6. fire: a hand-drawn target locks on with the kicks, then blows open into speed lines on the zoom cut (fire -> fire2)
  { t0: 98.35, t1: 101.9, fn: (T, t) => {
    const lock = ease.out(r(t, 98.35, 99.6)), blow = ease.in(r(t, 100.6, 101.1)), a = 1 - smooth(100.95, 101.2, t);
    const cx = 0.7, cy = 0.34, rr = lerp(0.22, 0.09, lock) * (1 + blow * 5) * (1 + 0.08 * K(t));
    if (a > 0) {
      T.stroke(T.ring(cx, cy, rr, { turns: 1.08, seed: 30 }), ease.out(r(t, 98.35, 98.9)), { w: 4, col: PAPER, glow: '#ff6a20', a, dbl: 1 });
      const d = rr * 1.5, e = d / T.aspect;
      [[[cx - e * 1.3, cy], [cx - e * 0.55, cy]], [[cx + e * 0.55, cy], [cx + e * 1.3, cy]], [[cx, cy - d * 1.3], [cx, cy - d * 0.55]], [[cx, cy + d * 0.55], [cx, cy + d * 1.3]]]
        .forEach((P, i) => T.stroke(T.path(P, 8, 1.5, 31 + i), ease.out(r(t, 98.6 + i * 0.08, 98.9 + i * 0.08)), { w: 3, col: PAPER, a, taper: 0.3 }));
    }
    T.speed(0.5, 0.5, 0.28, 90, smooth(100.8, 100.95, t) * (1 - smooth(101.3, 101.9, t)) * 0.7, INK);
  } },
  // 8. Kaworu: a few slow gold sparkles drift on the second "I love you"
  { t0: 130.2, t1: 135.4, fn: (T, t, u) => {
    for (let i = 0; i < 7; i++) {
      const h = T.hash(i, 1), ph = clamp((t - 130.2 - i * 0.6) / 3.2);
      if (ph <= 0 || ph >= 1) continue;
      T.spark(0.1 + h * 0.8, 0.62 - ph * 0.4 - T.hash(i, 2) * 0.1, 12 * Math.sin(ph * 3.1416), GOLD, 0.8, t * 0.4 + i);
    }
  } },
  // 9. the shoreline redrawn: a red wave line rolls with the blue rewrite wave, flattens into the horizon of the next
  //    shot and turns blue (shred -> sblue)
  { t0: 151.6, t1: 157.2, fn: (T, t) => {
    const flat = ease.inOut(r(t, 154.4, 155.4)), blue = smooth(153.0, 154.6, t), a = 1 - smooth(156.6, 157.2, t);
    const P = []; for (let i = 0; i <= 12; i++) { const u = i / 12; P.push([u * 1.06 - 0.03, lerp(0.5, 0.44, flat) + Math.sin(u * 14 - t * 3.5) * 0.03 * (1 - flat)]); }
    T.stroke(T.path(P, 140, 2, 50), ease.inOut(r(t, 151.6, 153.0)), { w: 3.5, col: blue > 0.5 ? BLUE : RED, glow: blue > 0.5 ? '#4a8cff' : '#ff2a10', a, tip: 1, dbl: 1 });
    if (t > 155.1) for (let i = 0; i < 6; i++) T.spark(0.12 + i * 0.15 + T.hash(i, 5) * 0.05, 0.44 - T.hash(i, 6) * 0.02, 11 * pop(t, 155.1 + i * 0.15) * a, '#eaf3ff', 0.9, t);
  } },
  // 10. final chorus: paper-cut wipes cover the cuts
  { t0: 163.87, t1: 164.23, fn: (T, t, u) => T.wipe(u, { col: '#fff1e2', line: RED, ang: -0.38 }) },
  { t0: 165.96, t1: 166.32, fn: (T, t, u) => T.wipe(u, { col: '#e8261c', line: '#fff1e2', ang: 0.3, bw: 0.3 }) },
  { t0: 170.49, t1: 170.85, fn: (T, t, u) => T.wipe(u, { col: '#bcd6ff', line: '#fff1e2', ang: -0.5 }) },
  // 11. "air": sparkles rise under the flight into the helix
  { t0: 175.7, t1: 181.1, fn: (T, t) => {
    const a = 1 - smooth(180.6, 181.1, t);
    for (let i = 0; i < 12; i++) {
      const ph = ((t - 175.7) * (0.25 + T.hash(i, 3) * 0.2) + T.hash(i, 4)) % 1;
      T.spark(0.05 + T.hash(i, 7) * 0.9, 0.95 - ph * 0.7, 24 * Math.sin(ph * 3.1416) * (1 + 0.4 * K(t)), i % 3 ? PAPER : GOLD, 0.85 * a, t * 0.3 + i);
      T.dot(0.05 + T.hash(i, 7) * 0.9, 0.95 - ph * 0.7, 4 * Math.sin(ph * 3.1416), '#fff', a, GOLD);
    }
  } },
];
