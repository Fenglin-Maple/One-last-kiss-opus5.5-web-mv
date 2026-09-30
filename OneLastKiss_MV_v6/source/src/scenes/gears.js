// S3 Gears 29.02 -> 37.6: "初めてあなたを見た / あの日動き出した歯車 / 止められない喪失の予感"
// A clockwork drawn in light. Gear A carries a warm light (me), gear B a cold one (you); they touch at the
// mesh point, the machine starts ticking on the beat, then runs away - and just before the two lights can
// meet again a tooth snaps, B tears loose and cracks, and the cold spreads through everything.
import * as THREE from 'three';
import { Scene, bgQuad } from './base.js';
import { NOISE } from '../core/glsl.js';
import { audio } from '../core/audio.js';
import { range, ease, clamp, lerp, smooth, keys, hash1 } from '../core/util.js';

const NG = 8, MOD = 0.03, PI = Math.PI;
// [teeth, parent, mesh angle deg, spokes, intensity, reveal start, reveal dur]
const LAYOUT = [
  [24, -1, 0, 6, 1.0, 28.85, 1.2],   // A  me
  [24, 0, 12, 6, 1.0, 29.37, 1.1],   // B  you
  [40, 1, -20, 8, 0.8, 29.8, 1.5],   // C
  [16, 0, 145, 4, 0.75, 30.1, 1.0],  // D
  [12, 3, 200, 0, 0.6, 30.45, 0.9],  // E
  [20, 2, -110, 5, 0.65, 30.6, 1.1], // F
  [10, 1, -100, 0, 0.8, 30.3, 0.8],  // G
  [72, -1, 0, 10, 0.2, 28.8, 2.6],   // Z  faint background
];
const SUB_B = [1, 2, 5, 6];
const T_GO = 31.6, T_RUN = 33.67, T_BRK = 35.45, STEP = PI / 6, TICK = 0.14;
const TICKS = [];
for (let b = Math.ceil(audio.beat(T_GO) - 0.05); audio.beatTime(b) < T_RUN - 0.1; b++) TICKS.push(audio.beatTime(b));
const ACC = (2 * (2 * PI - 0.45 - STEP * TICKS.length)) / (T_BRK - T_RUN) ** 2, ACC2 = 4.0;
const meshTh = (phi, Np, thp, Nj) => phi + PI + (Np * (phi - thp) - PI) / Nj;
function thA(t) {
  let th = 0;
  for (const bt of TICKS) th += STEP * ease.outBack(range(t, bt, bt + TICK));
  if (t > T_RUN) th += 0.5 * ACC * (t - T_RUN) ** 2;
  if (t > T_BRK) th += 0.5 * ACC2 * (t - T_BRK) ** 2;
  return -th;
}

const FRAG = `#define NG ${NG}
uniform float uT, uAspect, uPx, uM, uGrid; uniform vec3 uCam;
uniform vec4 uG[NG], uP[NG], uQ[NG], uL[2], uS[4], uTooth, uCrack;
varying vec2 vUv; ${NOISE}
vec2 rot(vec2 p, float a){ float c = cos(a), s = sin(a); return vec2(c * p.x - s * p.y, s * p.x + c * p.y); }
float sdTrap(vec2 p, float r1, float r2, float he){
  vec2 k1 = vec2(r2, he), k2 = vec2(r2 - r1, 2.0 * he); p.x = abs(p.x);
  vec2 ca = vec2(p.x - min(p.x, (p.y < 0.0) ? r1 : r2), abs(p.y) - he);
  vec2 cb = p - k1 + k2 * clamp(dot(k1 - p, k2) / dot(k2, k2), 0.0, 1.0);
  float s = (cb.x < 0.0 && ca.y < 0.0) ? -1.0 : 1.0;
  return s * sqrt(min(dot(ca, ca), dot(cb, cb)));
}
float tooth(vec2 tq){ float m = uM; return sdTrap(vec2(tq.x, tq.y + 0.15 * m), 0.95 * m, 0.5 * m, 1.275 * m); }
void main(){
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0) * 2.0 / uCam.z + uCam.xy;
  float px = uPx / uCam.z;
  vec3 col = mix(vec3(0.004, 0.006, 0.016), vec3(0.014, 0.017, 0.036), vUv.y);
  vec2 g1 = (0.5 - abs(fract(p * 5.0) - 0.5)) / 5.0, g2 = 0.5 - abs(fract(p) - 0.5);
  col += vec3(0.04, 0.06, 0.12) * ((1.0 - smoothstep(0.0, px * 1.2, min(g1.x, g1.y))) * 0.3 + (1.0 - smoothstep(0.0, px * 1.6, min(g2.x, g2.y))) * 0.5) * uGrid;
  vec3 acc = vec3(0.0);
  for (int i = 0; i < NG; i++) {
    vec4 G = uG[i], P = uP[i], Q = uQ[i];
    vec2 d0 = p - G.xy; float R = G.w;
    if (P.y <= 0.0 || length(d0) > R + uM * 2.0 + 0.2) continue;
    vec2 q = rot(d0, -G.z); float r = length(q), ang = atan(q.y, q.x);
    float seg = 6.2831853 / P.x, idr = floor(ang / seg + 0.5), a = ang - idr * seg, id = mod(idr, P.x);
    float m = uM, Rr = R - 1.25 * m, Ro = R + m;
    float th = tooth(vec2(r * sin(a), r * cos(a) - (Rr + Ro) * 0.5));
    if (abs(id - Q.z) < 0.5) th = 1e3;
    float o = mix(abs(min(r - Rr, th)), min(abs(r - Ro), abs(r - Rr)), Q.y);
    float rim = Rr - max(0.035, R * 0.12), hub = R * 0.24, axl = R * 0.09;
    float dt = min(abs(r - rim), min(abs(r - hub), abs(r - axl)));
    if (Q.w > 0.5) {
      float sa = 6.2831853 / Q.w, b = ang - sa * floor(ang / sa + 0.5);
      if (r > hub && r < rim) dt = min(dt, abs(abs(r * sin(b)) - R * 0.06));
    }
    float ra = fract((atan(d0.y, d0.x) - P.z) / 6.2831853), rv = P.y, rv2 = clamp(P.y * 1.3 - 0.3, 0.0, 1.0);
    float mk = rv >= 1.0 ? 1.0 : 1.0 - smoothstep(rv - 0.015, rv, ra);
    float mk2 = rv2 >= 1.0 ? 1.0 : 1.0 - smoothstep(rv2 - 0.015, rv2, ra);
    float tip = rv < 1.0 ? exp(-abs(ra - rv) * 90.0) * smoothstep(0.03, 0.0, abs(r - Ro)) : 0.0;
    float w = px * 0.8 + R * 0.004;
    float lo = 1.0 - smoothstep(w, w + px * 1.5, o), ld = 1.0 - smoothstep(w * 0.7, w * 0.7 + px * 1.5, dt);
    vec3 c = mix(vec3(1.2, 0.72, 0.32), vec3(0.5, 0.66, 1.15), Q.x);
    float dash = step(0.5, fract(ang / 6.2831853 * P.x * 2.0));
    acc += c * P.w * ((lo + exp(-o / 0.01) * 0.22) * mk + tip * 6.0 + ld * mk2 * 0.55
      + 0.16 * (1.0 - smoothstep(px * 0.6, px * 2.0, abs(r - R))) * dash * mk2);
  }
  col += acc;
  if (uCrack.w > 0.0) {
    vec4 G = uG[1]; vec2 q = rot(p - G.xy, -G.z);
    if (length(q) < G.w + uM) {
      vec2 cp = q * 6.5, ci = floor(cp), cf = fract(cp); float f1 = 8.0, f2 = 8.0;
      for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
        vec2 o = vec2(float(x), float(y)); float dd = length(o + hash22(ci + o) - cf);
        if (dd < f1) { f2 = f1; f1 = dd; } else if (dd < f2) f2 = dd;
      }
      float front = 1.0 - smoothstep(uCrack.z - 0.06, uCrack.z, length(q - uCrack.xy));
      col += vec3(0.8, 0.92, 1.35) * (1.0 - smoothstep(px, px * 3.0, (f2 - f1) / 18.0)) * front * uCrack.w * 1.8;
    }
  }
  if (uTooth.w > 0.0) {
    vec2 q = rot(p - uTooth.xy, -uTooth.z);
    float dd = abs(tooth(vec2(q.y, q.x)));
    col += vec3(0.75, 0.85, 1.25) * ((1.0 - smoothstep(px, px * 2.5, dd)) * 1.4 + exp(-dd / 0.008) * 0.4) * uTooth.w;
  }
  for (int i = 0; i < 2; i++) {
    vec4 L = uL[i]; if (L.z <= 0.0) continue;
    float d2 = dot(p - L.xy, p - L.xy);
    vec3 lc = i == 0 ? vec3(1.9, 0.75, 0.25) : vec3(0.3, 0.6, 2.0);
    col += L.z * (mix(lc, vec3(1.6), exp(-d2 / (0.00025 * L.w))) * exp(-d2 / (0.0014 * L.w)) * 3.2 + lc * 0.012 * L.w / (d2 + 0.012 * L.w) * 0.3);
  }
  for (int i = 0; i < 4; i++) {
    vec4 S = uS[i]; if (S.z <= 0.0) continue;
    vec2 d = p - S.xy; float dl = length(d);
    col += vec3(1.3, 1.1, 0.9) * S.z * (exp(-dl * dl / 0.0002) * 2.0 + (exp(-abs(d.x) * 500.0) + exp(-abs(d.y) * 500.0)) * exp(-dl * 14.0));
  }
  gl_FragColor = vec4(col, 1.0);
}`;

const V4 = (n) => Array.from({ length: n }, () => new THREE.Vector4());
const dir = (a) => [Math.cos(a), Math.sin(a)];

export class Gears extends Scene {
  constructor(ctx) {
    super(ctx, { ortho: true });
    this.U = {
      uT: { value: 0 }, uAspect: { value: ctx.aspect }, uPx: { value: 0.002 }, uM: { value: MOD }, uGrid: { value: 0 },
      uCam: { value: new THREE.Vector3(0, 0, 1) }, uG: { value: V4(NG) }, uP: { value: V4(NG) }, uQ: { value: V4(NG) },
      uL: { value: V4(2) }, uS: { value: V4(4) }, uTooth: { value: new THREE.Vector4() }, uCrack: { value: new THREE.Vector4() },
    };
    this.scene.add(bgQuad(FRAG, this.U));
    this.g = LAYOUT.map(([N, par, deg, sp, k, s, d]) => ({ N, par, phi: (deg * PI) / 180, sp, k, s, d, R: (N * MOD) / 2, c: [0, 0] }));
    const g = this.g;
    g[0].c = [-0.52, 0.22]; g[7].c = [0.2, -1.47];
    for (const q of g) if (q.par >= 0) { const p = g[q.par], [dx, dy] = dir(q.phi); q.c = [p.c[0] + (p.R + q.R) * dx, p.c[1] + (p.R + q.R) * dy]; }
    for (const q of g) q.start = q.par >= 0 ? q.phi + PI : q === g[0] ? g[1].phi : PI / 2;
    this.th0B = meshTh(g[1].phi, 24, 0, 24);
    const tb = meshTh(g[1].phi, 24, thA(T_BRK), 24), seg = (2 * PI) / 24, cl = g[1].phi + PI - tb;
    this.miss = (((Math.round(cl / seg) % 24) + 24) % 24);
    this.crackO = dir(this.miss * seg).map((v) => v * (g[1].R - 0.03));
  }
  calc(t) {
    const g = this.g, th = new Array(NG).fill(0), off = [0, 0];
    th[0] = thA(t); th[7] = t * 0.05;
    if (t > T_BRK) {
      const u = t - T_BRK, wA = ACC * (T_BRK - T_RUN);
      th[1] = meshTh(g[1].phi, 24, thA(T_BRK), 24) + wA * 0.45 * (1 - Math.exp(-u / 0.45)) + 0.25 * ease.out(range(u, 0, 0.15));
      const [dx, dy] = dir(g[1].phi), k = 0.075 * ease.outBack(range(u, 0, 0.35));
      off[0] = dx * k; off[1] = dy * k - 0.035 * ease.inOut(range(u, 0, 2));
    }
    for (let i = 1; i < NG - 1; i++) { if (i === 1 && t > T_BRK) continue; const q = g[i], p = g[q.par]; th[i] = meshTh(q.phi, p.N, th[q.par], q.N); }
    return { th, off };
  }
  update(t) {
    const U = this.U, g = this.g, { th, off } = this.calc(t), prev = this.calc(t - 0.01).th;
    U.uT.value = t; U.uAspect.value = this.ctx.aspect; U.uPx.value = 2 / this.ctx.res.y;
    U.uGrid.value = ease.out(range(t, 28.8, 30.2)) * (1 - 0.5 * smooth(33.6, 36, t));
    const brk = t > T_BRK, wave = (t - 33.67) * 1.2;
    const C = (i) => (SUB_B.includes(i) ? [g[i].c[0] + off[0], g[i].c[1] + off[1]] : g[i].c);
    for (let i = 0; i < NG; i++) {
      const q = g[i], c = C(i), w = Math.abs(th[i] - prev[i]) / 0.01;
      let cold = clamp(wave - Math.hypot(c[0] - g[1].c[0], c[1] - g[1].c[1]) * 0.6);
      if (i === 0) cold = Math.min(cold, 0.55); if (i === 1) cold = Math.max(cold, 0.85);
      U.uG.value[i].set(c[0], c[1], th[i], q.R);
      U.uP.value[i].set(q.N, ease.inOut(range(t, q.s, q.s + q.d)), q.start, q.k * (i === 1 && brk ? 1 - 0.5 * smooth(T_BRK + 0.5, 37.4, t) : 1));
      U.uQ.value[i].set(cold, clamp((w - 7) / 7), i === 1 && brk ? this.miss : -1, q.sp);
    }
    // two lights riding the rims
    const cA = C(0), cB = C(1), aA = g[1].phi + th[0], aB = g[1].phi + PI + th[1] - this.th0B, beat = audio.beatPulse(t, 7);
    const flick = brk ? (1 - ease.in(range(t, T_BRK + 0.3, T_BRK + 1.9))) * (0.55 + 0.45 * hash1(Math.floor(t * 24))) : 1;
    U.uL.value[0].set(cA[0] + (g[0].R - 0.035) * Math.cos(aA), cA[1] + (g[0].R - 0.035) * Math.sin(aA), ease.out(range(t, 28.95, 29.5)) * (1 + 0.3 * beat), 1 + 0.4 * beat);
    U.uL.value[1].set(cB[0] + (g[1].R - 0.035) * Math.cos(aB), cB[1] + (g[1].R - 0.035) * Math.sin(aB), ease.out(range(t, 29.37, 29.8)) * flick, 1 + 0.4 * beat);
    // contact sparks: first touch, escapement ticks, run-away chatter, the break
    const tick = TICKS.reduce((s, bt) => s + (t > bt ? Math.exp(-(t - bt) * 12) : 0), 0);
    const run = t > T_RUN && !brk ? audio.get('onset', t) * 0.9 : 0;
    const ct = (i, j) => { const a = C(i), [dx, dy] = dir(g[j].phi); return [a[0] + g[i].R * dx, a[1] + g[i].R * dy]; };
    const S = [[ct(0, 1), (t > 29.6 ? 2 * Math.exp(-(t - 29.6) * 2.5) : 0) + tick * 1.2 + run + (brk ? 5 * Math.exp(-(t - T_BRK) * 4) : 0)],
      [ct(1, 2), brk ? 0 : tick * 0.7 + run * 0.6], [ct(0, 3), tick * 0.7 + run * 0.6 + (brk ? 0.4 * audio.get('onset', t) : 0)], [ct(2, 5), brk ? 0 : tick * 0.6]];
    S.forEach(([p, v], i) => U.uS.value[i].set(p[0], p[1], v, 0));
    if (brk) {
      const u = t - T_BRK, [dx, dy] = dir(g[1].phi + PI), p0 = [g[1].c[0] + g[1].R * dx, g[1].c[1] + g[1].R * dy];
      U.uTooth.value.set(p0[0] + 0.3 * u, p0[1] + 0.9 * u - 1.3 * u * u, g[1].phi + PI + u * 9, 1 - range(u, 1.2, 1.8));
      U.uCrack.value.set(this.crackO[0], this.crackO[1], 0.9 * ease.out(range(u, 0, 1.4)), (0.6 + 0.4 * hash1(Math.floor(t * 18) + 3)) * (1 - 0.6 * range(u, 1.2, 2.2)));
    } else { U.uTooth.value.w = 0; U.uCrack.value.w = 0; }
    const [z, x, y] = keys(t, [[28.8, 1.0, -0.05, 0.15], [31.2, 1.07, -0.12, 0.24], [33.6, 1.0, 0.0, 0.1], [35.45, 1.16, -0.14, 0.27], [35.75, 0.97, -0.05, 0.18], [37.6, 1.03, 0.0, 0.1]], ease.inOut);
    const sh = (brk ? 0.03 * Math.exp(-(t - T_BRK) * 2.5) : 0) + (t > T_RUN ? 0.004 : 0);
    U.uCam.value.set(x + sh * Math.sin(t * 73.1) * Math.sin(t * 17.3), y + sh * Math.sin(t * 61.7 + 1), z);
  }
  post(t) {
    const c = smooth(33.6, 35.6, t), b = t > T_BRK ? Math.exp(-(t - T_BRK) * 3) : 0;
    return { tint: [lerp(1.08, 0.86, c), lerp(0.97, 0.95, c), lerp(0.86, 1.14, c)], sat: lerp(1, 0.82, c), bloom: 1.0 + b, bloomThr: 0.6,
      vig: 0.8, grain: 0.05, ca: 0.4 + 1.5 * b, dust: 0.25, dustCol: c > 0.5 ? [0.7, 0.8, 1] : [1, 0.85, 0.6], exposure: 1 + 0.5 * smooth(37.1, 37.6, t) };
  }
}
