// Kinetic motion-design timeline (core/kinetic.js): v5 replaces the 手書き strokes with precise editorial web motion -
// chapter cards, precision rings, counters, route maps, target brackets, panel-stack wipes, timetable boards. Each
// motif still carries ACROSS cuts. Kept out of the lyric zones of each shot.
import { audio, PERIOD } from './core/audio.js';
import { clamp, smooth, lerp } from './core/util.js';
import { E, P } from './core/kinetic.js';

const PAPER = '#f4efe6', RED = '#ff3b24', ORANGE = '#ff8a1e', BLUE = '#9cc4ff', INK = '#08050c', YEL = '#ffd21e', GREEN = '#9dff8a';
const K = (t, d = 8) => audio.hitPulse('kick', t, d);
const kicks = (t0, t) => (audio.count ? audio.count('kick', t0, t) : Math.floor((t - t0) / PERIOD));
const pad = (n, d) => String(Math.floor(n)).padStart(d, '0');
const tc = (t) => `${pad(t / 60, 2)}:${pad(t % 60, 2)}:${pad((t % 1) * 24, 2)}`;
const mixHex = (a, b, u) => {
  const p = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)), A = p(a), B = p(b);
  return '#' + A.map((v, i) => Math.round(lerp(v, B[i], clamp(u))).toString(16).padStart(2, '0')).join('');
};

/** chapter card: index + hairline + timecode, Mincho title (masked reveal), mono subtitle, progress bar */
const card = (t0, t1, no, title, sub, x = 0.055, y = 0.1, col = PAPER, acc = RED) => ({ t0, t1, fn: (T, t) => {
  const a = t - t0, out = E.inOut(P(t, t1 - 0.5, 0.5)), W = 0.2;
  const ln = E.expo(P(a, 0, 0.7));
  T.line(x, y + 0.028, x + W, y + 0.028, ln, { from: out, w: 1.5, col, a: 0.85 });
  T.rect(x, y - 0.012, 0.006, 0.012 * T.aspect, acc, (1 - out) * smooth(0.1, 0.25, a));
  T.reveal(no, x + 0.012, y, 14, P(a, 0.12, 0.5), { col, out, spacing: 3 });
  T.reveal(tc(t), x + W, y, 12, P(a, 0.2, 0.5), { col, out, align: 'right', a: 0.7, spacing: 1 });
  T.reveal(title, x, y + 0.093, 58, P(a, 0.22, 0.8), { font: 'mincho', weight: 600, col, out, spacing: 10, stagger: 0.1 });
  T.reveal(sub, x, y + 0.132, 13, P(a, 0.45, 0.8), { col, out, spacing: 5, a: 0.75, stagger: 0.02 });
  const pb = P(t, t0 + 0.4, t1 - t0 - 0.9);
  T.rect(x, y + 0.148, W * 0.35 * (1 - out), 0.0022, col, 0.25);
  T.rect(x, y + 0.148, W * 0.35 * pb * (1 - out), 0.0022, acc, 0.95);
} });

export const KINETIC = [
  // --- chapter cards (replace the v4 HUD captions) ---
  card(11.0, 13.4, '01', '南極 爆心地', 'ANTARCTICA · GROUND ZERO'),
  card(21.45, 24.3, '02', 'パリ旧市街', 'PARIS · RESTORATION PHASE-1', 0.055, 0.1, PAPER, RED),
  card(34.4, 36.4, '03', '第3新東京市', 'TOKYO-3 · NEAR THIRD IMPACT', 0.055, 0.1, PAPER, RED),
  card(38.6, 41.3, '04', '第3村', 'VILLAGE-3 · SURVIVORS', 0.055, 0.72, PAPER, ORANGE),
  card(136.4, 141.0, '05', '補完 終了', 'INSTRUMENTALITY REVERSED · EARTH RESTORED', 0.055, 0.72, PAPER, BLUE),
  card(159.8, 163.0, '06', '宇部新川駅', 'UBE-SHINKAWA STATION · YAMAGUCHI', 0.055, 0.1, PAPER, ORANGE),

  // 1. scan -> precision ring: a scan hairline sweeps the red city and lands on the pyramid, becomes a precision ring
  //    with a restoration counter that turns blue with the wave (pred -> louvre -> pblue)
  { t0: 19.35, t1: 23.5, fn: (T, t) => {
    if (t < 20.71) {
      const y = lerp(0.18, 0.47, E.inOut(P(t, 19.35, 1.3))), a = 1 - smooth(20.5, 20.71, t);
      T.line(0, y, 1, y, E.expo(P(t, 19.35, 0.8)), { w: 1.2, col: RED, a: 0.8 * a });
      T.ticks(0.05, y, 0.7, y, 64, E.expo(P(t, 19.5, 1)), { col: RED, a: 0.5 * a, len: 5, major: 8 });
      T.reveal('SCAN  48.8566N 2.3522E', 0.05, y - 0.012, 12, P(t, 19.6, 0.6), { col: PAPER, a: 0.8 * a, spacing: 2, stagger: 0.02 });
      T.reveal('RED  ' + pad((t - 19.35) * 777, 4), 0.62, y - 0.012, 12, P(t, 19.8, 0.5), { col: RED, a: a, spacing: 2 });
      return;
    }
    const blue = smooth(22.5, 22.8, t), out = smooth(23.0, 23.5, t), col = mixHex(RED, BLUE, blue);
    const cx = 0.5, cy = 0.47, R = (0.17 + 0.012 * K(t)) * (1 + E.in(P(t, 22.7, 0.8)) * 1.8), rot = kicks(20.71, t) * 0.18 + (t - 20.71) * 0.05;
    const pr = E.expo(P(t, 20.71, 0.9)), a = 1 - out;
    T.ring(cx, cy, R, { prog: pr, col: PAPER, w: 2, a: 0.9 * a, ticks: 120, tlen: 8, tw: 1.5, major: 10, rot });
    T.ring(cx, cy, R * 1.08, { prog: pr, col, w: 6, a, rot: -rot * 1.4, seg: [[0, 0.5], [2.1, 2.9], [3.9, 4.2]] });
    T.ring(cx, cy, R * 0.86, { prog: pr, col: PAPER, w: 1, a: 0.5 * a, dash: [3, 7], rot: rot * 0.6 });
    T.pip(cx, cy, R * 1.14, rot * 2.2, 7, col, a);
    for (const [dx, dy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) T.reg(cx + dx * R * 1.35 / T.aspect, cy + dy * R * 1.25, 18, P(t, 21.0, 0.4), { col: PAPER, w: 1, a: 0.7 * a, circle: false });
    const v = t < 21.3 ? 0 : 100 * E.inOut(P(t, 21.3, 1.55));
    const ra = smooth(21.1, 21.4, t) * a;
    T.reveal('RESTORATION', 0.5, cy + R + 0.07, 12, P(t, 21.1, 0.4), { col: PAPER, align: 'center', spacing: 5, a: 0.8 * a });
    const w = T.odo(v, 3, 0.475, cy + R + 0.125, 44, { col, a: ra });
    T.text('%', 0.475 + w / T.VW + 0.004, cy + R + 0.125, 22, { col, a: ra });
  } },

  // 2. gear bezel -> eye reticle: a tick bezel turns on the kicks beside the cage, then flies in and locks on the
  //    Eva's eye (cage -> eye)
  { t0: 29.6, t1: 34.25, fn: (T, t) => {
    const fly = E.inOut(P(t, 32.7, 0.45)), out = smooth(33.85, 34.2, t), a = 1 - out;
    const cx = lerp(0.8, 0.5, fly), cy = lerp(0.45, 0.5, fly), R = lerp(0.11, 0.3, fly) * (1 + 0.03 * K(t, 10));
    const rot = kicks(29.3, t) * (Math.PI / 12) + fly * 0.8;
    const col = t < 33.05 ? YEL : GREEN, pr = E.expo(P(t, 29.6, 1.1));
    T.ring(cx, cy, R, { prog: pr, col, w: 2, a, ticks: 48, tlen: 10, major: 4, rot });
    T.ring(cx, cy, R * 0.8, { prog: E.expo(P(t, 30.0, 1)), col, w: 5, a: 0.9 * a, rot: -rot, seg: [[0, 1.1], [1.6, 2.7], [3.2, 4.3], [4.8, 5.9]] });
    T.ring(cx, cy, R * 0.45, { prog: E.expo(P(t, 30.3, 1)), col: PAPER, w: 1, a: 0.6 * a, dash: [2, 5], rot: rot * 2 });
    if (fly < 0.5) {
      const la = (1 - fly * 2) * smooth(30.2, 30.6, t);
      T.reveal('S² ENGINE', cx + 0.02 + R / T.aspect * 1.1, cy - 0.02, 12, P(t, 30.2, 0.5), { col: PAPER, spacing: 3, a: 0.8 * la });
      T.text('ROT ' + pad(kicks(29.3, t) * 15 % 360, 3) + '°', cx + 0.02 + R / T.aspect * 1.1, cy + 0.01, 12, { col, a: la, spacing: 2 });
      T.line(cx + R / T.aspect, cy, cx + 0.015 + R / T.aspect * 1.1, cy, 1, { col: PAPER, a: 0.6 * la, dot: false });
    }
    if (t > 33.05) { // reticle: cross-hair gaps and brackets
      const k = E.expo(P(t, 33.05, 0.35)), e = R / T.aspect;
      for (const s of [-1, 1]) {
        T.line(cx + s * e * 1.05, cy, cx + s * e * 1.45, cy, k, { col, w: 1.5, a, dot: false });
        T.line(cx, cy + s * R * 1.05, cx, cy + s * R * 1.3, k, { col, w: 1.5, a, dot: false });
      }
      T.brackets(cx - e * 1.5, cy - R * 1.35, cx + e * 1.5, cy + R * 1.35, 26, P(t, 33.1, 0.4), { col, a });
      T.text('TARGET  EVA-01  EYE', cx + e * 1.5, cy - R * 1.35 - 0.014, 12, { col, align: 'right', spacing: 3, a: a * k });
    }
  } },

  // 3. Village-3: a dashed route drawn across the sky of both shots, ending in a pinned "HOME" (village -> paddy)
  { t0: 38.6, t1: 41.3, fn: (T, t) => {
    const a = 1 - smooth(41.0, 41.3, t);
    const tip = T.poly([[0.04, 0.2], [0.2, 0.2], [0.28, 0.12], [0.46, 0.12], [0.52, 0.22], [0.63, 0.22]], E.inOut(P(t, 38.6, 1.7)),
      { w: 2, col: PAPER, dash: [10, 8], a: 0.85 * a });
    if (tip) T.text(pad((t - 38.6) * 412, 4) + ' m', tip[0] + 0.008, tip[1] - 0.014, 11, { col: PAPER, a: 0.7 * a * (1 - smooth(40.2, 40.4, t)), spacing: 2 });
    if (t > 40.3) {
      T.ring(0.63, 0.22, 0.022, { prog: E.expo(P(t, 40.3, 0.4)), col: ORANGE, w: 2, a });
      T.ring(0.63, 0.22, 0.022 + 0.06 * E.out(P(t, 40.3, 0.9)), { col: ORANGE, w: 1, a: a * (1 - P(t, 40.3, 0.9)) });
      T.reveal('HOME', 0.65, 0.2, 22, P(t, 40.45, 0.5), { col: PAPER, spacing: 6, a });
      T.reveal('第3村', 0.65, 0.235, 16, P(t, 40.55, 0.5), { font: 'mincho', col: PAPER, spacing: 4, a: 0.8 * a });
    }
  } },

  // 4. the line we ride on: a transit line map with four stations, one per cut (beach -> train -> gendo -> train2)
  { t0: 89.5, t1: 98.05, fn: (T, t) => {
    const a = smooth(89.5, 90.0, t) * (1 - smooth(97.6, 98.05, t)), Y = 0.085;
    const X = [0.18, 0.38, 0.6, 0.82], C = [89.26, 91.35, 93.57, 95.57], NM = ['海', '車窓', '父', '傷'], EN = ['SEA', 'WINDOW', 'FATHER', 'WOUND'];
    T.line(0.1, Y, 0.9, Y, E.expo(P(t, 89.5, 1.1)), { w: 2, col: PAPER, a });
    T.ticks(0.1, Y + 0.004, 0.9, Y + 0.004, 80, E.expo(P(t, 89.7, 1.2)), { col: PAPER, a: 0.35 * a, len: 4, major: 10 });
    let k = 0; while (k < 3 && t > C[k + 1]) k++;
    X.forEach((x, i) => {
      const on = t >= C[i] + 0.1, s = E.expo(P(t, C[i] + 0.1, 0.35)), cur = i === k;
      T.ring(x, Y, 0.011, { prog: E.expo(P(t, 89.7 + i * 0.12, 0.5)), col: PAPER, w: 2, a });
      if (on) T.ring(x, Y, 0.006 * s, { col: i === 2 ? RED : ORANGE, w: 7, a });
      T.reveal(NM[i], x, Y - 0.028, 20, P(t, 89.9 + i * 0.12, 0.5), { font: 'mincho', weight: 600, col: cur ? PAPER : '#b9b2a8', align: 'center', spacing: 2, a });
      T.reveal(EN[i], x, Y + 0.045, 10, P(t, 90.0 + i * 0.12, 0.5), { col: PAPER, align: 'center', spacing: 4, a: (cur ? 0.9 : 0.45) * a });
    });
    const tx = lerp(X[k], X[Math.min(3, k + 1)], E.inOut(P(t, C[k] + 0.3, (C[k + 1] ?? 98.19) - 0.4 - C[k])));
    T.rect(tx - 0.012 / T.aspect * 1.2, Y - 0.006, 0.024 / T.aspect * 1.2, 0.012, PAPER, a);
    T.text(tc(t), 0.9, Y + 0.045, 10, { col: PAPER, align: 'right', spacing: 2, a: 0.5 * a });
  } },

  // 5. fire: target brackets snap onto the Evas on the kicks, range counter rolls down, LOCK (cityF)
  { t0: 98.35, t1: 101.0, fn: (T, t) => {
    const a = 1 - smooth(100.8, 101.0, t), lk = t > 99.6, col = lk ? RED : PAPER;
    const cx = 0.5, cy = 0.42, w = lerp(0.3, 0.1, E.expo(P(t, 98.4, 1.2))) * (1 + 0.1 * K(t)), h = w * T.aspect * 0.9;
    T.brackets(cx - w, cy - h, cx + w, cy + h, 30, P(t, 98.4, 0.4), { col, w: 2.5, a });
    T.reg(cx, cy, 16, P(t, 98.6, 0.3), { col, w: 1.2, a: 0.8 * a, circle: false });
    T.text(lk ? 'LOCK' : 'TRACK', cx - w, cy - h - 0.014, 14, { col, spacing: 5, a: a * (lk ? (Math.floor(t * 8) % 2 ? 1 : 0.4) : 0.9) });
    const rng = Math.max(0, 4800 * (1 - E.out(P(t, 98.4, 2.2))));
    T.text('RANGE', cx + w, cy + h + 0.024, 11, { col: PAPER, align: 'right', spacing: 3, a: 0.7 * a });
    T.odo(rng, 4, cx + w - 0.07, cy + h + 0.06, 26, { col, a });
  } },
  // 5b. clash: hazard marquee bands carry across the clash and the aerial (fire2 -> cityF2)
  { t0: 100.9, t1: 102.36, fn: (T, t, u) => {
    const k = E.expo(P(t, 100.9, 0.25)), o = E.in(P(t, 102.1, 0.26)), h = 34 * k * (1 - o);
    T.marquee('▲ WARNING ▲  ANTI-AT FIELD  ▲  EVA-13  ▲  PATTERN BLUE  ', 0.035, h, 260, { bg: ORANGE, col: INK, weight: 700 });
    T.marquee('緊急事態  //  第3新東京市  //  EMERGENCY  //  ', 0.965 - h / 1080, h, -200, { bg: INK, col: ORANGE, font: 'mincho', weight: 600, bga: 0.85 });
  } },

  // 6. Kaworu: a vertical ruler and label, quiet (kaworu)
  { t0: 130.0, t1: 135.4, fn: (T, t) => {
    const a = smooth(130.0, 130.6, t) * (1 - smooth(134.8, 135.4, t)), x = 0.955;
    T.line(x, 0.12, x, 0.88, E.expo(P(t, 130.0, 1.4)), { col: PAPER, w: 1, a: 0.6 * a });
    T.ticks(x, 0.12, x, 0.88, 76, E.expo(P(t, 130.2, 1.6)), { col: PAPER, a: 0.4 * a, len: 5, major: 19, off: (t * 0.01) % 1 });
    const g = T.g; g.save(); g.translate(T.X(x - 0.012), T.Y(0.5)); g.rotate(-Math.PI / 2); g.translate(-T.X(x - 0.012), -T.Y(0.5));
    T.reveal('FIFTH CHILD  ·  NAGISA KAWORU', x - 0.012, 0.5, 12, P(t, 130.6, 1.2), { col: PAPER, align: 'center', spacing: 5, a: 0.8 * a, stagger: 0.02 });
    g.restore();
    const my = lerp(0.2, 0.8, P(t, 130.0, 5.4));
    T.pip(x - 0.008, my, 0, -Math.PI / 2, 6, ORANGE, a);
  } },

  // 7. the shoreline redrawn: a red waveform flattens into the horizon of the next shot and turns blue, with a
  //    REWRITE counter (shred -> sblue)
  { t0: 151.6, t1: 157.2, fn: (T, t) => {
    const flat = E.inOut(P(t, 154.4, 1.0)), blue = smooth(153.0, 154.6, t), a = 1 - smooth(156.6, 157.2, t), col = mixHex(RED, BLUE, blue);
    const pts = []; for (let i = 0; i <= 96; i++) { const u = i / 96; pts.push([u, lerp(0.5, 0.44, flat) + Math.sin(u * 22 - t * 3.5) * 0.028 * (1 - flat) * Math.sin(u * Math.PI)]); }
    T.poly(pts, E.inOut(P(t, 151.6, 1.4)), { w: 1.8, col, a });
    T.ticks(0, lerp(0.5, 0.44, flat) + 0.01, 1, lerp(0.5, 0.44, flat) + 0.01, 100, flat, { col, a: 0.4 * a, len: 4, major: 10 });
    T.reveal('REWRITE', 0.055, 0.1, 12, P(t, 151.8, 0.5), { col: PAPER, spacing: 5, a: 0.8 * a });
    const v = 100 * E.inOut(P(t, 152.2, 3.0)), w = T.odo(v, 3, 0.055, 0.155, 40, { col, a });
    T.text('%', 0.055 + w / T.VW + 0.004, 0.155, 20, { col, a });
    T.text(blue > 0.5 ? 'BLUE  //  RESTORED' : 'RED  //  L-FIELD', 0.055, 0.185, 11, { col, spacing: 3, a: 0.8 * a });
  } },

  // 8. final chorus: staggered colour panel stacks cover the cuts
  { flat: 1, t0: 163.8, t1: 164.3, fn: (T, t, u) => T.panels(u, [PAPER, RED, INK], { ang: -0.12, stagger: 0.07 }) },
  { flat: 1, t0: 165.88, t1: 166.4, fn: (T, t, u) => T.panels(u, [YEL, '#2a6cff', PAPER], { ang: 0.1, stagger: 0.07 }) },
  { flat: 1, t0: 170.42, t1: 170.92, fn: (T, t, u) => T.panels(u, [BLUE, PAPER], { ang: -0.1, stagger: 0.08 }) },

  // 9. rails: departure board + altitude ruler on the crane up into the sky (rails2)
  { t0: 175.7, t1: 181.15, fn: (T, t) => {
    const a = 1 - smooth(180.75, 181.15, t), x = 0.055, y = 0.09;
    T.rect(x - 0.01, y - 0.035, 0.3, 0.17, INK, 0.62 * a);
    T.line(x - 0.01, y - 0.035, x + 0.29, y - 0.035, E.expo(P(t, 175.7, 0.6)), { col: YEL, w: 3, a });
    T.reveal('宇部線', x, y + 0.012, 30, P(t, 175.8, 0.5), { font: 'mincho', weight: 600, col: PAPER, spacing: 3, a });
    T.reveal('UBE LINE', x + 0.1, y + 0.01, 15, P(t, 175.9, 0.5), { col: YEL, spacing: 4, a });
    T.flap('17:48  SHIN-YAMAGUCHI', x, y + 0.06, 19, P(t, 176.0, 1.0), { col: PAPER, a, spacing: 1 });
    T.flap('17:52  UBE-SHINKAWA', x, y + 0.1, 19, P(t, 176.3, 1.0), { col: YEL, a, spacing: 1 });
    T.text(tc(t), x + 0.28, y + 0.01, 13, { col: PAPER, align: 'right', a: 0.6 * a, spacing: 2 });
    // altitude ruler on the crane (matches the camera key 179.4 -> 181.3)
    const c = E.inOut(P(t, 179.4, 1.9)), alt = lerp(1.4, 11.5, c), ra = smooth(179.3, 179.7, t) * a, rx = 0.95;
    if (ra > 0) {
      T.rect(rx - 0.085, 0.2, 0.1, 0.6, INK, 0.6 * ra);
      T.line(rx, 0.22, rx, 0.78, E.expo(P(t, 179.3, 0.5)), { col: PAPER, w: 2, a: 0.9 * ra });
      T.ticks(rx, 0.22, rx, 0.78, 40, 1, { col: PAPER, a: 0.8 * ra, w: 2, len: -9, major: 5, off: (alt * 0.08) % 1 });
      T.pip(rx - 0.012, 0.5, 0, Math.PI / 2, 6, YEL, ra);
      T.text('ALT', rx - 0.02, 0.47, 13, { col: PAPER, align: 'right', spacing: 3, a: 0.7 * ra });
      const w = T.odo(alt, 2, rx - 0.07, 0.515, 30, { col: YEL, a: ra, snap: 0.5 });
      T.text('m', rx - 0.07 + w / T.VW + 0.003, 0.51, 12, { col: YEL, a: ra });
    }
  } },
];
