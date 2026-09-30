// S-DAT (0 -> 10.52, reprise 222.6 -> 226.2). Shinji's old portable tape player, built in 3D.
// v3 opening, one idea: a memory being re-assembled.  Black. A few specks of light wake up and drift; more arrive and
// gather; they land as the RGB sub-pixels of a screen, shimmering in every colour; the camera pulls back and the
// pixels resolve into the green "26" of the LCD (stuck on repeat, 26 -> 25 -> 26), then out to the whole player - on
// the bedside table of the hospital room. Then, one beat each, the same player lies forgotten in the corner of the
// famous places: the sunset train seat, the lunar surface under the Earth, the red sea shore. Each place is a
// procedural 360 environment (sky dome + ground + light rig + its own reflection map), so the reflections on the
// metal change with it. On the red shore FF is pressed, TR 27, and the digits lift off as sparks into the red Earth.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { Scene } from './base.js';
import { NOISE } from '../core/glsl.js';
import { canvas, tex, FONTS } from '../core/textures.js';
import { clamp, range, ease, smooth, lerp, keys, rng } from '../core/util.js';
import { audio } from '../core/audio.js';

const PRESS = 8.92, JUMP = 9.2, TD = 9.72; // FF press on the beat; LCD flips; the digits lift off
const LX = -0.05, LY = 0.03, LZ = -0.03, LS = 0.0305; // LCD centre / surface
const DX = -0.08, DZ = -0.024;                 // the big track digits on the LCD
const RX = 0.085, RY = 0.034, RZ = -0.03;      // tape window
const C_TRAIN = 6.238, C_MOON = 7.31, C_RED = 8.381, CUTS = [C_TRAIN, C_MOON, C_RED];
// camera: segments of C1 splines, hard cuts between the places. rows [t, px, py, pz, tx, ty, tz, fov]
const SEGS = [
  [-1, C_TRAIN, [
    [0.0, DX + 0.005, 0.0505, DZ + 0.013, DX, LS, DZ, 34],
    [1.95, DX + 0.003, 0.048, DZ + 0.011, DX - 0.001, LS, DZ, 34],
    [3.4, DX - 0.001, 0.056, DZ + 0.014, DX, LS, DZ, 32],
    [4.5, LX - 0.004, 0.097, LZ + 0.05, LX, LS, LZ, 32],
    [5.5, -0.045, 0.15, 0.27, -0.01, 0.02, -0.02, 34],
    [6.3, -0.02, 0.1, 0.36, 0.0, 0.03, -0.03, 33]]],
  [C_TRAIN, C_MOON, [[C_TRAIN, 0.6, 0.075, 0.66, 0.04, 0.035, -0.06, 30], [C_MOON, 0.5, 0.068, 0.55, 0.04, 0.03, -0.06, 29]]],
  [C_MOON, C_RED, [[C_MOON, -0.78, 0.05, 0.58, 0.05, 0.12, -0.1, 32], [C_RED, -0.68, 0.047, 0.5, 0.05, 0.115, -0.1, 31]]],
  [C_RED, 100, [
    [C_RED, 0.62, 0.06, 0.58, -0.05, 0.06, -0.1, 30],
    [8.6, 0.42, 0.07, 0.4, -0.02, 0.05, -0.02, 30],
    [8.85, 0.045, 0.1, 0.17, 0.0, 0.034, 0.05, 28],
    [9.45, -0.035, 0.15, 0.06, DX, LY, DZ, 30],
    [10.0, DX, 0.13, DZ + 0.022, DX, LY, DZ, 32],
    [10.6, DX, 0.085, DZ + 0.012, DX, LY, DZ, 40]]],
  [200, 999, [
    [222.6, 0.155, 0.07, 0.075, 0.07, RY, RZ, 28],
    [224.4, 0.02, 0.11, 0.12, -0.04, 0.03, -0.03, 30],
    [226.3, 0.12, 0.9, 0.45, 0.0, 0.0, 0.0, 34]]],
];
const envAt = (t) => (t > 200 ? 2 : t < C_TRAIN ? 1 : t < C_MOON ? 2 : t < C_RED ? 3 : 4);
// light rigs per place: key spot (pos, colour, intensity), rim, env-map intensity, floor ambient, shadow softness
const RIG = {
  1: { kp: [-0.8, 0.9, -0.7], kc: 0xa8c0ff, ki: 1.5, rp: [0.7, 0.25, -0.6], rc: 0x40ff90, ri: 0.3, ei: 0.6, amb: 0.05 },
  2: { kp: [1.3, 0.35, -0.5], kc: 0xffa050, ki: 3.2, rp: [-1, 0.4, 0.6], rc: 0x6080ff, ri: 0.25, ei: 0.7, amb: 0.08 },
  3: { kp: [-0.9, 0.3, 0.9], kc: 0xffffff, ki: 5.0, rp: [1, 0.2, -0.8], rc: 0x4070ff, ri: 0.15, ei: 0.35, amb: 0.012 },
  4: { kp: [-0.9, 0.16, -0.7], kc: 0xff5030, ki: 3.5, rp: [0.8, 0.3, 0.6], rc: 0xff6040, ri: 0.6, ei: 0.8, amb: 0.12 },
};
const trainLight = (x, z, t) => { const f = (((x * 1.2 + z * 0.6 - t * 1.1) / 0.8) % 1 + 1) % 1; return smooth(0.05, 0.1, f) * (1 - smooth(0.55, 0.6, f)); };
function spline(t, K) {
  const n = K.length; if (t <= K[0][0]) return K[0].slice(1); if (t >= K[n - 1][0]) return K[n - 1].slice(1);
  let i = 0; while (K[i + 1][0] < t) i++;
  const t0 = K[i][0], t1 = K[i + 1][0], dt = t1 - t0, u = (t - t0) / dt, u2 = u * u, u3 = u2 * u;
  const h00 = 2 * u3 - 3 * u2 + 1, h10 = u3 - 2 * u2 + u, h01 = -2 * u3 + 3 * u2, h11 = u3 - u2;
  const m = (k, j) => (k <= 0 || k >= n - 1 ? 0 : (K[k + 1][j] - K[k - 1][j]) / (K[k + 1][0] - K[k - 1][0]));
  const out = []; for (let j = 1; j < K[0].length; j++) out.push(h00 * K[i][j] + h10 * dt * m(i, j) + h01 * K[i + 1][j] + h11 * dt * m(i + 1, j));
  return out;
}
// the reels: creep forward 0.9 s, snap back (the repeat) - stuck; after the jump they run; the reprise rewinds
function reelAngle(t) {
  if (t > 200) return t < 224.4 ? -(t - 222.6) * 38 - (t - 222.6) ** 2 * 6 : -(224.4 - 222.6) * 38 - 1.8 ** 2 * 6;
  if (t < JUMP) { const f = t % 1.07; return f < 0.9 ? f * 3 : 2.7 * (1 - (f - 0.9) / 0.17); }
  return (JUMP % 1.07) * 3 + (t - JUMP) * 5 + (t - JUMP) ** 2 * 3;
}
const SPARK_V = /* glsl */ `attribute vec3 aR; attribute float aE; uniform float uT, uS; varying float vA; varying vec3 vC;
void main(){ float u = uT - aR.x * 0.38 - aR.y * 0.22 - aE * 0.035; vA = step(0.0, u) * step(u, 2.4);
  u = max(u, 0.0); vec3 p = position; vec2 dir = normalize(p.xz - vec2(${DX}, ${DZ}) + 1e-4);
  float sw = sin(u * 6.0 + aR.z * 20.0) * 0.006 * u;
  p.xz += dir * (0.02 * u + 0.06 * u * u) * (0.4 + aR.z) + vec2(sw, -sw);
  p.y += 0.012 * u + (0.35 + aR.z * 0.5) * u * u;
  vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(uS * (0.5 + aR.z) / -mv.z, 1.0, 9.0);
  vC = mix(vec3(0.35, 1.8, 0.75), vec3(1.6, 1.8, 1.5), smoothstep(0.1, 0.9, u)) * (1.0 - smoothstep(1.4, 2.4, u)) * (aE > 0.5 ? 0.25 : 0.8); }`;
const SPARK_F = /* glsl */ `varying float vA; varying vec3 vC; void main(){ vec2 q = gl_PointCoord - 0.5; float d = dot(q, q);
  if (vA < 0.5 || d > 0.25) discard; gl_FragColor = vec4(vC * exp(-d * 14.0), 1.0); }`;

// ---- the four places: one sky function shared by the visible dome and the reflection-map bake ----
const SKY = /* glsl */ `
uniform float uEnv, uT, uK; uniform vec3 uSun;
float bandm(float x, float a, float b, float s){ return smoothstep(a - s, a, x) * (1.0 - smoothstep(b, b + s, x)); }
vec3 skyHosp(vec3 d){
  float az = atan(d.x, d.z), el = asin(clamp(d.y, -1.0, 1.0));
  vec3 c = vec3(0.012, 0.016, 0.022) * (0.6 + 0.4 * d.y);
  // window with blinds (behind the table), night-blue light through the slats
  float win = bandm(az, 2.35, 3.6, 0.02) * bandm(el, 0.08, 0.75, 0.02);
  float sl = smoothstep(0.35, 0.5, fract(el * 34.0)) * (0.75 + 0.25 * vnoise(vec2(az * 30.0, el * 34.0)));
  c = mix(c, vec3(0.12, 0.17, 0.26) * sl + vec3(0.01, 0.015, 0.03), win);
  c *= 1.0 - bandm(az, 2.93, 2.97, 0.004) * bandm(el, 0.08, 0.75, 0.01) * 0.9;           // window mullion
  // IV pole + bag silhouetted in the window
  float iv = bandm(az, 2.62, 2.635, 0.003) * bandm(el, -0.1, 0.62, 0.01) + bandm(az, 2.57, 2.69, 0.01) * bandm(el, 0.5, 0.62, 0.01) * 0.9;
  c = mix(c, vec3(0.004), clamp(iv, 0.0, 1.0));
  // the bed: pale sheet mass on the left
  float bed = bandm(az, -2.9, -1.2, 0.08) * bandm(el, -0.2, 0.1 + 0.05 * sin(az * 3.0), 0.03);
  c = mix(c, vec3(0.05, 0.06, 0.075) * (0.6 + 0.4 * vnoise(vec2(az * 6.0, el * 20.0))), bed);
  // ECG monitor on the right: dark screen, green trace
  float mon = bandm(az, 1.5, 2.0, 0.01) * bandm(el, 0.2, 0.45, 0.01);
  float x = (az - 1.5) / 0.5, ph = fract(x * 1.5 - uT * 0.55);
  float ecg = 0.5 + 0.35 * exp(-pow((ph - 0.5) * 40.0, 2.0)) - 0.12 * exp(-pow((ph - 0.54) * 40.0, 2.0)) + 0.05 * exp(-pow((ph - 0.7) * 12.0, 2.0));
  float ey = (el - 0.2) / 0.25, tr = exp(-pow((ey - ecg) * 60.0, 2.0)) * smoothstep(0.0, 0.15, fract(uT * 0.55 - x * 1.5 + 0.9));
  c = mix(c, vec3(0.005, 0.012, 0.008) + vec3(0.1, 1.2, 0.4) * tr, mon);
  return c;
}
vec3 skyTrain(vec3 d){
  float az = atan(d.x, d.z), el = asin(clamp(d.y, -1.0, 1.0));
  vec3 wall = vec3(0.035, 0.05, 0.05), c = wall * (0.7 + 0.3 * d.y);
  c += vec3(0.25, 0.24, 0.2) * bandm(el, 1.05, 1.12, 0.01);                               // ceiling light strip
  float win = bandm(el, -0.02, 0.5, 0.012);
  vec3 sun = mix(vec3(0.75, 0.2, 0.05), vec3(0.08, 0.025, 0.07), smoothstep(0.0, 0.35, el)) + vec3(2.2, 0.8, 0.25) * exp(-pow(length(vec2(az + 1.2, el - 0.06) * vec2(1.0, 2.2)) * 6.0, 2.0));
  float fx = az * 22.0 + uT * 0.35, fh = 0.015 + 0.05 * hash12(vec2(floor(fx), 2.0));              // far skyline, slow, hazy
  sun = mix(sun, sun * 0.35 + vec3(0.03, 0.008, 0.015), step(el, fh));
  float bx = az * 9.0 + uT * 1.4, bh = (0.03 + 0.11 * hash12(vec2(floor(bx), 1.0))) * step(0.35, hash12(vec2(floor(bx), 3.0)));
  sun = mix(sun, vec3(0.018, 0.008, 0.012) + vec3(0.25, 0.08, 0.02) * step(0.93, fract(bx)), step(el, bh));   // near buildings, fast
  float pole = bandm(fract(az * 2.0 + uT * 3.0), 0.0, 0.012, 0.003) * step(el, 0.42); sun = mix(sun, vec3(0.01), pole);
  sun += vec3(0.3, 0.12, 0.03) * bandm(el, 0.33, 0.335, 0.002);                                     // overhead wire
  c = mix(c, sun, win);
  c *= 1.0 - bandm(fract(az * 1.2), 0.0, 0.025, 0.004) * win;                                // window posts
  float strap = bandm(fract(az * 4.0), 0.49, 0.51, 0.004) * bandm(el, 0.55, 0.95, 0.01);
  float ring = bandm(abs(length(vec2((fract(az * 4.0) - 0.5) * 3.0, el - 0.52) * vec2(1.0, 1.0)) - 0.035), 0.0, 0.008, 0.004);
  c = mix(c, vec3(0.01), clamp(strap + ring * bandm(el, 0.45, 0.6, 0.0), 0.0, 1.0));
  c = mix(c, vec3(0.02, 0.07, 0.07) + vec3(0.9, 0.4, 0.12) * 0.25 * step(0.6, fract(az * 1.2 - uT * 0.5)), bandm(el, -0.4, -0.02, 0.01));  // seat backs across the aisle
  return c;
}
vec3 skyMoon(vec3 d){
  float el = asin(clamp(d.y, -1.0, 1.0));
  vec3 c = vec3(0.0005) + vec3(1.0) * step(0.9975, hash13(floor(d * 420.0))) * 0.6 * smoothstep(0.0, 0.1, el);
  vec3 E = normalize(vec3(0.55, 0.26, -0.8)); float r = acos(clamp(dot(d, E), -1.0, 1.0)), R = 0.07;
  if (r < R) { vec3 T = normalize(cross(E, vec3(0, 1, 0))), B = cross(T, E); vec2 q = vec2(dot(d - E, T), dot(d - E, B)) / R;
    vec3 n = normalize(vec3(q, sqrt(max(0.0, 1.0 - dot(q, q))))); vec3 w = n.x * T + n.y * B + n.z * (-E);
    float l = max(dot(w, normalize(uSun)), 0.0) * 0.8 + 0.2 * max(-n.x, 0.0);
    float land = smoothstep(0.52, 0.56, fbm3(w * 3.0 + 2.0)), cl = smoothstep(0.55, 0.7, fbm3(w * 5.0 + 9.0));
    vec3 e = mix(mix(vec3(0.02, 0.07, 0.25), vec3(0.18, 0.2, 0.08), land), vec3(1.0), cl) * l * 1.6;
    c = mix(e, vec3(0.3, 0.55, 1.0) * 0.6, pow(dot(q, q), 3.0)); }
  c += vec3(0.2, 0.4, 1.0) * 0.2 * exp(-max(r - R, 0.0) * 120.0) * step(R, r);
  float hz = 0.012 * vnoise(vec2(atan(d.x, d.z) * 14.0, 0.0)) + 0.006 * vnoise(vec2(atan(d.x, d.z) * 60.0, 3.0));
  c = mix(c, vec3(0.1, 0.1, 0.105) * (0.6 + 0.4 * vnoise(vec2(atan(d.x, d.z) * 30.0, el * 80.0))), step(el, hz));
  return c;
}
vec3 skyRed(vec3 d){
  float az = atan(d.x, d.z), el = asin(clamp(d.y, -1.0, 1.0));
  vec3 c = mix(vec3(0.45, 0.04, 0.03), vec3(0.03, 0.0, 0.005), smoothstep(0.0, 0.8, el));
  c += vec3(1.0, 0.85, 0.8) * 0.5 * exp(-pow((acos(clamp(dot(d, normalize(vec3(-0.55, 0.62, -0.56))), -1.0, 1.0)) - 0.32) * 60.0, 2.0)); // the halo ring
  vec3 S = normalize(uSun); float sd = acos(clamp(dot(d, S), -1.0, 1.0));
  c += vec3(2.4, 0.4, 0.2) * exp(-sd * sd * 900.0) + vec3(0.6, 0.06, 0.03) * exp(-sd * 5.0);
  for (int i = 0; i < 5; i++) { float fa = -2.6 + float(i) * 0.33 + 0.1 * sin(float(i) * 7.0), s = 1.0 - 0.15 * float(i % 3);
    float cr = bandm(az, fa - 0.004 * s, fa + 0.004 * s, 0.002) * bandm(el, 0.0, 0.14 * s, 0.003) + bandm(az, fa - 0.03 * s, fa + 0.03 * s, 0.003) * bandm(el, 0.095 * s, 0.108 * s, 0.003);
    c += vec3(1.6, 1.1, 1.0) * clamp(cr, 0.0, 1.0) * (0.8 + 0.4 * uK); }
  float sea = step(el, 0.0), wv = vnoise(vec2(az * 14.0, el * 1600.0 + uT * 3.0));
  vec3 sc = vec3(0.12, 0.005, 0.01) * (0.6 + 0.4 * wv) + vec3(1.5, 0.3, 0.15) * pow(wv, 6.0) * exp(-abs(az - atan(S.x, S.z)) * 6.0) * 0.5;
  return mix(c, sc, sea);
}
vec3 sky(vec3 d){ int e = int(uEnv + 0.5); return e == 1 ? skyHosp(d) : e == 2 ? skyTrain(d) : e == 3 ? skyMoon(d) : e == 4 ? skyRed(d) : vec3(0.0); }`;
const DOME_V = /* glsl */ `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;
const DOME_F = /* glsl */ `uniform float uRev; varying vec3 vW; ${NOISE} ${SKY}
void main(){ vec3 d = normalize(vW - cameraPosition); gl_FragColor = vec4(sky(d) * uRev, 1.0); }`;
// ground: table / train seat / regolith / red wet sand, with the player's soft shadow from its box and the light masks
const FLOOR_F = /* glsl */ `uniform float uRev, uAmb, uKi, uMir; uniform vec3 uKc, uKp; varying vec3 vW; ${NOISE} ${SKY}
float boxS(vec3 p){ vec3 q = abs(p - vec3(0.0, 0.0, 0.0)) - vec3(0.16, 0.03, 0.1); return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0); }
float shadow(vec3 p, vec3 L, float k){ float r = 1.0, s = 0.004; for (int i = 0; i < 28; i++){ float h = boxS(p + L * s); r = min(r, k * h / s); s += clamp(h, 0.004, 0.06); if (r < 0.01 || s > 1.2) break; } return clamp(r, 0.0, 1.0); }
void main(){
  int e = int(uEnv + 0.5); vec2 P = vW.xz; vec3 L = normalize(uKp - vW); float dist = length(vW - cameraPosition);
  vec3 alb; float mask = 1.0, a = 1.0, k = 18.0, rough = 1.0;
  if (e == 1) {            // hospital bedside table: pale laminate, blind stripes across it
    alb = vec3(0.42, 0.44, 0.46) * (0.9 + 0.1 * vnoise(P * vec2(8.0, 90.0)));
    mask = 0.25 + 0.75 * smoothstep(0.35, 0.5, fract((P.x * 0.6 - P.y * 0.8) * 18.0));
    a = (1.0 - smoothstep(0.45, 0.47, P.y)) * (1.0 - smoothstep(0.6, 0.62, abs(P.x))) * (1.0 - smoothstep(-0.5, -0.52, P.y)); k = 10.0; rough = 0.5;
  } else if (e == 2) {     // train seat: teal velvet, the sunset windows sliding over it
    float fab = vnoise(P * 700.0) * 0.5 + vnoise(P * vec2(60.0, 300.0)) * 0.5;
    alb = vec3(0.03, 0.11, 0.11) * (0.75 + 0.5 * fab);
    float f = fract((P.x * 1.2 + P.y * 0.6 - uT * 1.1) / 0.8); mask = 0.1 + 0.9 * smoothstep(0.05, 0.1, f) * (1.0 - smoothstep(0.55, 0.6, f));
    a = (1.0 - smoothstep(0.5, 0.52, P.y)) * (1.0 - smoothstep(-0.55, -0.57, P.y)); k = 6.0;
  } else if (e == 3) {     // lunar regolith, hard black shadow
    float cr = 0.0; vec2 g = P * 6.0; vec2 id = floor(g), fg = fract(g) - 0.5; float cd = length(fg - (hash22(id) - 0.5) * 0.5);
    cr = smoothstep(0.28, 0.2, cd) * step(0.6, hash12(id)) * (smoothstep(0.1, 0.24, cd) - 0.5);
    alb = vec3(0.34, 0.33, 0.32) * (0.7 + 0.35 * fbm(P * 20.0) + 0.15 * vnoise(P * 400.0) + cr * 0.6);
    k = 60.0;
  } else {                 // red shore: wet sand with ripples, then the LCL sea
    float rip = sin(P.x * 90.0 + vnoise(P * 12.0) * 6.0) * 0.5 + 0.5;
    alb = mix(vec3(0.18, 0.1, 0.09), vec3(0.3, 0.2, 0.18), rip) * (0.8 + 0.3 * vnoise(P * 300.0));
    alb = mix(alb, vec3(0.08, 0.0, 0.005), smoothstep(-0.7, -0.9, P.y)); rough = 0.35; k = 12.0;
  }
  float sh = shadow(vW + vec3(0.0, 0.001, 0.0), L, k);
  float nl = max(L.y, 0.0), fall = uKi * 0.35 / (1.0 + dot(uKp - vW, uKp - vW) * 0.4);
  vec3 c = alb * (uAmb * vec3(0.8, 0.9, 1.0) + uKc * nl * fall * mask * sh * 1.4);
  if (e == 4) c += vec3(0.6, 0.03, 0.02) * 0.06 * smoothstep(-0.6, -0.9, P.y);
  // specular sheen toward the light
  vec3 V = normalize(cameraPosition - vW), H = normalize(L + V);
  c += uKc * pow(max(H.y, 0.0), mix(12.0, 60.0, 1.0 - rough)) * fall * mask * sh * (1.0 - rough) * 0.3;
  // far ground fades into the horizon colour of the dome
  vec3 d = normalize(vW - cameraPosition); vec3 hz = sky(normalize(vec3(d.x, -0.004, d.z)));
  c = mix(c, hz, smoothstep(0.5, 3.0, dist) * (e == 3 || e == 4 ? 1.0 : 0.0));
  float alpha = a * (1.0 - uMir * (1.0 - smoothstep(0.1, 0.35, dist)) * 0.35);
  gl_FragColor = vec4(c * uRev, alpha); }`;
// the pixel swarm: every cell of the LCD as an instanced quad (RGB sub-pixel stripes when settled)
const PIX_V = /* glsl */ `attribute vec3 aCell; attribute vec4 aR; uniform float uT, uCell, uAlt; varying vec2 vQ; varying float vFly, vOn, vH, vA, vSp;
void main(){
  float r1 = aR.x, r2 = aR.y, sparse = aR.z, fd = aR.w;
  float spawn = sparse > 0.5 ? 0.25 + r1 * 1.6 : 2.0 + fd * 1.4 + r1 * 0.9;
  float arrive = spawn + (sparse > 0.5 ? 1.6 + r2 * 0.8 : 0.6 + r2 * 0.5);
  float u = smoothstep(spawn + 0.1, arrive, uT); u = u * u * (3.0 - 2.0 * u);
  vec3 off = vec3((r1 - 0.5) * 0.06, 0.001 + r2 * 0.005, (fract(r1 * 7.3) - 0.5) * 0.05) * (sparse > 0.5 ? 0.35 : 1.0);
  off.xz += vec2(sin(uT * 1.3 + r1 * 30.0), cos(uT * 1.1 + r2 * 30.0)) * 0.002 * (1.0 - u);
  vFly = 1.0 - smoothstep(0.88, 1.0, u); vA = smoothstep(spawn, spawn + 0.35, uT);
  vOn = uAlt > 0.5 ? step(1.5, aCell.z) : mod(aCell.z, 2.0); vH = r1; vSp = r2;
  float s = mix(uCell * 0.92, uCell * 1.8, vFly);
  vec3 p = vec3(aCell.x, ${LS + 0.0003}, aCell.y) + off * (1.0 - u) + vec3(position.x, 0.0, -position.y) * s;
  vQ = position.xy + 0.5; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`;
const PIX_F = /* glsl */ `uniform float uT, uMode, uFade; varying vec2 vQ; varying float vFly, vOn, vH, vA, vSp;
vec3 hue(float h){ return clamp(abs(fract(h + vec3(0.0, 0.667, 0.333)) * 6.0 - 3.0) - 1.0, 0.0, 1.0); }
void main(){
  vec2 q = vQ - 0.5; float d = dot(q, q);
  vec3 spk = hue(vH + uT * 0.05) * 0.6 + 0.4; spk *= exp(-d * 18.0) * 0.9;
  float sx = fract(vQ.x * 3.0); int ch = int(vQ.x * 3.0);
  vec3 sub = vec3(ch == 0 ? 1.0 : 0.0, ch == 1 ? 1.0 : 0.0, ch == 2 ? 1.0 : 0.0) * smoothstep(0.0, 0.15, sx) * smoothstep(1.0, 0.85, sx) * smoothstep(0.0, 0.08, vQ.y) * smoothstep(1.0, 0.92, vQ.y);
  float fl = 0.5 + 0.5 * sin(uT * (6.0 + vSp * 9.0) + vH * 40.0);
  vec3 rainbow = hue(vH * 0.7 + uT * 0.12 + vQ.y * 0.1) * (0.35 + 0.9 * fl) + vec3(0.3) * vOn * smoothstep(3.3, 4.0, uT);
  vec3 lcdc = vOn > 0.5 ? vec3(0.9, 2.6, 1.6) : vec3(0.02, 0.06, 0.035);
  vec3 cellc = mix(rainbow * 0.55, lcdc * 0.8, uMode) * sub * 1.6;
  vec3 c = mix(cellc, spk, vFly) * vA * uFade;
  if (dot(c, c) < 1e-6) discard; gl_FragColor = vec4(c, 1.0); }`;

function lcd(g, s, o) {
  const W = 512, Hh = 192;
  g.fillStyle = '#0d1a10'; g.fillRect(0, 0, W, Hh);
  g.fillStyle = 'rgba(120,255,170,0.06)'; for (let y = 0; y < Hh; y += 4) g.fillRect(0, y, W, 1);
  g.fillStyle = '#8dffbf'; g.shadowColor = '#5dff9a'; g.shadowBlur = 14;
  g.font = `700 30px ${FONTS.mono}`; g.fillText(o.mode, 22, 46);
  g.font = `700 22px ${FONTS.mono}`; g.fillText('TR', 22, 128);
  g.font = `700 104px ${FONTS.mono}`; g.fillText(s, 70, 160);
  g.font = `700 40px ${FONTS.mono}`; g.fillText(o.time, 260, 160);
  g.font = `500 20px ${FONTS.mono}`; g.fillText(o.sub, 262, 96);
  // battery
  g.strokeStyle = '#8dffbf'; g.lineWidth = 3; g.strokeRect(430, 22, 56, 24); g.fillRect(434, 26, 20 + 28 * o.bat, 16);
}

export class SDAT extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 30, near: 0.004, far: 60 });
    const S = this.scene, r = ctx.renderer;
    this.U = { uEnv: { value: 1 }, uT: { value: 0 }, uK: { value: 0 }, uSun: { value: new THREE.Vector3(0, 1, 0) }, uRev: { value: 1 } };
    // sky dome (follows the camera) + one baked reflection map per place
    const domeM = new THREE.ShaderMaterial({ vertexShader: DOME_V, fragmentShader: DOME_F, uniforms: this.U, side: THREE.BackSide, depthWrite: false });
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(20, 64, 32), domeM); this.dome.renderOrder = -100; this.dome.frustumCulled = false; S.add(this.dome);
    const pm = new THREE.PMREMGenerator(r), bs = new THREE.Scene(); bs.add(new THREE.Mesh(this.dome.geometry, domeM));
    this.envs = {};
    for (const e of [1, 2, 3, 4]) { this.U.uEnv.value = e; this.U.uSun.value.set(...RIG[e].kp).normalize(); this.U.uT.value = 3; this.envs[e] = pm.fromScene(bs, 0.02, 0.1, 40).texture; }
    pm.dispose();
    // --- body ---
    const dev = this.dev = new THREE.Group(); S.add(dev);
    const metal = new THREE.MeshStandardMaterial({ color: 0x9aa0a8, metalness: 0.9, roughness: 0.32 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x1a1c20, metalness: 0.5, roughness: 0.5 });
    const body = new THREE.Mesh(new RoundedBoxGeometry(0.32, 0.06, 0.2, 5, 0.018), metal); dev.add(body);
    // brushed texture on the top face
    const bc = canvas(512, 320), bg = bc.getContext('2d'); bg.fillStyle = '#888'; bg.fillRect(0, 0, 512, 320);
    const R = rng(4); for (let i = 0; i < 900; i++) { bg.fillStyle = `rgba(${R() > 0.5 ? 255 : 0},${R() > 0.5 ? 255 : 0},255,${0.03 + R() * 0.05})`; bg.fillRect(0, R() * 320, 512, 1); }
    bg.font = `700 26px ${FONTS.mono}`; bg.fillStyle = '#2a2c30'; bg.fillText('S-DAT', 380, 296);
    bg.font = `500 13px ${FONTS.mono}`; bg.fillText('DIGITAL AUDIO TAPE  WM-D3', 22, 300);
    bg.strokeStyle = '#555'; bg.lineWidth = 2; bg.strokeRect(14, 14, 484, 292);
    const top = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.185), new THREE.MeshStandardMaterial({ map: tex(bc), metalness: 0.85, roughness: 0.38 }));
    top.rotation.x = -Math.PI / 2; top.position.y = 0.0301; dev.add(top);
    // LCD
    this.lc = canvas(512, 192); this.lg = this.lc.getContext('2d'); this.lt = tex(this.lc);
    const lcdM = new THREE.MeshBasicMaterial({ map: this.lt, toneMapped: false });
    const lcdMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.128, 0.048), lcdM);
    lcdMesh.rotation.x = -Math.PI / 2; lcdMesh.position.set(-0.05, 0.0305, -0.03); dev.add(lcdMesh);
    const bez = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 0.058), dark); bez.rotation.x = -Math.PI / 2; bez.position.set(-0.05, 0.03025, -0.03); dev.add(bez);
    this.lcdLight = new THREE.PointLight(0x5dff9a, 0.02, 0.4); this.lcdLight.position.set(-0.05, 0.06, -0.03); dev.add(this.lcdLight);
    // buttons (play, stop, ff, rew, rec)
    this.btn = [];
    for (let i = 0; i < 5; i++) {
      const b = new THREE.Mesh(new RoundedBoxGeometry(0.03, 0.012, 0.018, 3, 0.004), i === 0 ? metal : dark);
      b.position.set(-0.07 + i * 0.036, 0.034, 0.055); dev.add(b); this.btn.push(b);
    }
    const tri = new THREE.Mesh(new THREE.CircleGeometry(0.004, 3), new THREE.MeshBasicMaterial({ color: 0x2bff88 }));
    tri.rotation.x = -Math.PI / 2; tri.position.set(-0.07, 0.0405, 0.055); dev.add(tri); this.tri = tri;
    // jack + cord (curling across the floor to the earbuds)
    const jack = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.02, 12), metal); jack.rotation.z = Math.PI / 2; jack.position.set(0.17, 0.01, -0.06); dev.add(jack);
    const pts = [new THREE.Vector3(0.18, 0.01, -0.06), new THREE.Vector3(0.26, -0.02, -0.08), new THREE.Vector3(0.34, -0.029, 0.02), new THREE.Vector3(0.22, -0.029, 0.16),
      new THREE.Vector3(-0.05, -0.029, 0.22), new THREE.Vector3(-0.3, -0.029, 0.12), new THREE.Vector3(-0.42, -0.029, -0.1), new THREE.Vector3(-0.3, -0.029, -0.28),
      new THREE.Vector3(-0.1, -0.029, -0.32)];
    const curve = new THREE.CatmullRomCurve3(pts);
    const cordM = new THREE.MeshStandardMaterial({ color: 0x15161a, metalness: 0.3, roughness: 0.35 });
    S.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 200, 0.0022, 8), cordM));
    const b1 = new THREE.CatmullRomCurve3([pts[8], new THREE.Vector3(0.02, -0.029, -0.36), new THREE.Vector3(0.1, -0.024, -0.3)]);
    const b2 = new THREE.CatmullRomCurve3([pts[8], new THREE.Vector3(-0.02, -0.029, -0.42), new THREE.Vector3(0.04, -0.024, -0.48)]);
    for (const c of [b1, b2]) {
      S.add(new THREE.Mesh(new THREE.TubeGeometry(c, 40, 0.0018, 8), cordM));
      const bud = new THREE.Mesh(new THREE.SphereGeometry(0.014, 24, 16), metal); bud.scale.set(1, 0.6, 1); bud.position.copy(c.getPoint(1)); S.add(bud);
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.006, 24), new THREE.MeshStandardMaterial({ color: 0x0c0c0c, roughness: 0.9 }));
      pad.position.copy(c.getPoint(1)).add(new THREE.Vector3(0, 0.006, 0)); S.add(pad);
    }
    // tape window: dark cassette shell, two reels with wound tape, glass lid (added before the mirror clone)
    const shellC = canvas(256, 160), sg = shellC.getContext('2d'); sg.fillStyle = '#16171a'; sg.fillRect(0, 0, 256, 160);
    sg.fillStyle = '#d9d2c2'; sg.fillRect(18, 112, 220, 30); sg.fillStyle = '#16171a'; sg.font = `700 16px ${FONTS.mono}`; sg.fillText('DAT  120', 30, 133);
    sg.fillStyle = '#b8b0a0'; sg.font = `500 11px ${FONTS.mono}`; sg.fillText('SIDE A', 176, 133);
    const shell = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.062), new THREE.MeshStandardMaterial({ map: tex(shellC), metalness: 0.2, roughness: 0.6 }));
    shell.rotation.x = -Math.PI / 2; shell.position.set(RX, 0.0303, RZ); dev.add(shell);
    const frame = new THREE.Mesh(new RoundedBoxGeometry(0.108, 0.006, 0.07, 2, 0.002), dark); frame.position.set(RX, 0.0315, RZ); frame.scale.set(1, 1, 1); dev.add(frame);
    const white = new THREE.MeshStandardMaterial({ color: 0xe8e4da, metalness: 0.05, roughness: 0.5 });
    const tapeM = new THREE.MeshStandardMaterial({ color: 0x2a1a12, metalness: 0.55, roughness: 0.28 });
    this.reels = [];
    [-0.024, 0.024].forEach((ox, k) => {
      const r = new THREE.Group(); r.position.set(RX + ox, 0.0352, RZ - 0.004);
      r.add(new THREE.Mesh(new THREE.CylinderGeometry(k ? 0.0125 : 0.0175, k ? 0.0125 : 0.0175, 0.0022, 40), tapeM));
      r.add(new THREE.Mesh(new THREE.CylinderGeometry(0.0072, 0.0072, 0.0034, 24), white));
      for (let i = 0; i < 6; i++) { const tth = new THREE.Mesh(new THREE.BoxGeometry(0.0022, 0.0038, 0.0014), dark); const an = (i / 6) * Math.PI * 2;
        tth.position.set(Math.cos(an) * 0.0046, 0, Math.sin(an) * 0.0046); tth.rotation.y = -an; r.add(tth); }
      const sp = new THREE.Mesh(new THREE.BoxGeometry(0.0115, 0.0036, 0.0016), white); r.add(sp);
      dev.add(r); this.reels.push(r);
    });
    const tapeLine = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.002, 0.0006), tapeM); tapeLine.position.set(RX, 0.0352, RZ + 0.018); dev.add(tapeLine);
    this.reelIdx = this.reels.map((r) => dev.children.indexOf(r));
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(0.104, 0.066), new THREE.MeshStandardMaterial({ color: 0x223040, metalness: 0.4, roughness: 0.22, transparent: true, opacity: 0.18, depthWrite: false }));
    glass.rotation.x = -Math.PI / 2; glass.position.set(RX, 0.0372, RZ); dev.add(glass);
    // glossy floor with a mirrored copy of the device (cheap reflection)
    const mir = dev.clone(); mir.scale.y = -1; mir.position.y = -0.06; S.add(mir); this.mir = mir;
    // ground (own shader: material per place, soft box shadow, light masks); translucent near the camera over the mirror clone
    this.FU = { ...this.U, uAmb: { value: 0.05 }, uKi: { value: 1 }, uMir: { value: 1 }, uKc: { value: new THREE.Color() }, uKp: { value: new THREE.Vector3() } };
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.ShaderMaterial({ vertexShader: DOME_V, fragmentShader: FLOOR_F, uniforms: this.FU, transparent: true, depthWrite: false }));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -0.03; S.add(floor);
    // lights
    this.key = new THREE.SpotLight(0xffffff, 0, 8, 0.6, 0.5, 1.0); S.add(this.key); S.add(this.key.target);
    this.rim = new THREE.DirectionalLight(0xffffff, 0); S.add(this.rim);
    this.amb = new THREE.AmbientLight(0xffffff, 0); S.add(this.amb);
    // dust motes (hospital / train)
    const n = 400, g = new THREE.BufferGeometry(), P = new Float32Array(n * 3), R2 = rng(9);
    for (let i = 0; i < n; i++) { P[i * 3] = (R2() - 0.5) * 1.4; P[i * 3 + 1] = R2() * 0.8; P[i * 3 + 2] = (R2() - 0.5) * 1.4; }
    g.setAttribute('position', new THREE.BufferAttribute(P, 3));
    this.dust = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffe8c8, size: 0.004, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
    S.add(this.dust);
    // the pixel swarm: one quad per LCD cell (128 x 48 over the 0.128 x 0.048 glass), lit states of "26" and "25"
    { const CW = 128, CH = 48, cell = 0.128 / CW, sample = (s) => { const c = canvas(512, 192), g2 = c.getContext('2d');
        lcd(g2, s, { mode: '▶ PLAY', time: '03:43', sub: 'REPEAT 1', bat: 1 }); return g2.getImageData(0, 0, 512, 192).data; };
      const A = sample('26'), B = sample('25'), cells = [], rs = [], R = rng(33);
      const lit = (d, i, j) => { let m = 0; for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) m = Math.max(m, d[((j * 4 + y) * 512 + i * 4 + x) * 4 + 1]); return m > 150 ? 1 : 0; };
      for (let j = 0; j < CH; j++) for (let i = 0; i < CW; i++) {
        const x = LX + ((i + 0.5) / CW - 0.5) * 0.128, z = LZ + ((j + 0.5) / CH - 0.5) * 0.048;
        const fd = Math.min(1, Math.hypot(x - DX, z - DZ) / 0.07), sparse = R() < 0.04 * (1 - fd) + 0.004 ? 1 : 0;
        cells.push(x, z, lit(A, i, j) + 2 * lit(B, i, j)); rs.push(R(), R(), sparse, fd); }
      const q = new THREE.InstancedBufferGeometry(); q.index = new THREE.BufferAttribute(new Uint16Array([0, 1, 2, 0, 2, 3]), 1);
      q.setAttribute('position', new THREE.Float32BufferAttribute([-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], 3));
      q.setAttribute('aCell', new THREE.InstancedBufferAttribute(new Float32Array(cells), 3));
      q.setAttribute('aR', new THREE.InstancedBufferAttribute(new Float32Array(rs), 4)); q.instanceCount = CW * CH;
      this.PU = { uT: { value: 0 }, uCell: { value: cell }, uAlt: { value: 0 }, uMode: { value: 0 }, uFade: { value: 1 } };
      this.pix = new THREE.Mesh(q, new THREE.ShaderMaterial({ vertexShader: PIX_V, fragmentShader: PIX_F, uniforms: this.PU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      this.pix.frustumCulled = false; this.pix.renderOrder = 5; S.add(this.pix); }
    // "27" lifting off the LCD as sparks: sample the lit digit pixels of the post-jump display
    { const c = canvas(512, 192), g2 = c.getContext('2d'); lcd(g2, '27', { mode: '▶▶|', time: '00:00', sub: 'NEXT', bat: 1 });
      const d = g2.getImageData(0, 0, 512, 192).data, P2 = [], A = [], E = [], R3 = rng(21);
      for (let y = 60; y < 176; y += 2) for (let x = 60; x < 250; x += 2) if (d[(y * 512 + x) * 4 + 1] > 200) {
        P2.push(LX + (x / 512 - 0.5) * 0.128, 0.0312, LZ + (y / 192 - 0.5) * 0.048); A.push(x / 512, R3(), R3()); E.push(0); }
      for (let i = 0; i < 500; i++) { P2.push(LX + (R3() - 0.5) * 0.13, 0.0312, LZ + (R3() - 0.5) * 0.05); A.push(R3() * 0.5, R3(), R3() * 0.6); E.push(1); }
      const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(P2, 3));
      gg.setAttribute('aR', new THREE.Float32BufferAttribute(A, 3)); gg.setAttribute('aE', new THREE.Float32BufferAttribute(E, 1));
      this.SU = { uT: { value: -1 }, uS: { value: 1 } };
      this.sparks = new THREE.Points(gg, new THREE.ShaderMaterial({ vertexShader: SPARK_V, fragmentShader: SPARK_F, uniforms: this.SU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      this.sparks.frustumCulled = false; S.add(this.sparks); }
    this.lcdM = lcdM; this.metal = metal;
    this._s = '';
  }
  draw(t) {
    let tr = '26', mode = '▶ PLAY', sub = 'REPEAT 1', time;
    const rep = t > 200;
    if (!rep) {
      // before the jump it is stuck: 26 -> 25 -> 26 loop (flickers), after: 27
      tr = t < JUMP ? (Math.floor(t / 1.07) % 4 === 3 ? '25' : '26') : '27';
      if (t < PRESS) mode = Math.floor(t * 2) % 2 ? '▶ PLAY' : '▶';
      else if (t < JUMP) mode = '▶▶|';
      sub = t < JUMP ? 'REPEAT 1' : 'NEXT';
      const tc = t < JUMP ? (t % 4.3) + 3 * 60 + 41 : t - JUMP;
      time = `${String(Math.floor(tc / 60)).padStart(2, '0')}:${String(Math.floor(tc % 60)).padStart(2, '0')}`;
    } else {
      const stop = t > 224.4;
      tr = '27'; mode = stop ? '■ STOP' : '◀◀ REW'; sub = stop ? 'END' : 'REW';
      const tc = stop ? 0 : Math.max(0, (224.4 - t) * 40);
      time = `${String(Math.floor(tc / 60)).padStart(2, '0')}:${String(Math.floor(tc % 60)).padStart(2, '0')}`;
    }
    const s = tr + mode + time + sub;
    if (s === this._s) return;
    this._s = s; this.lg.clearRect(0, 0, 512, 192); lcd(this.lg, tr, { mode, time, sub, bat: rep ? 0.2 : 1 }); this.lt.needsUpdate = true;
  }
  update(t) {
    const rep = t > 200, seg = SEGS.find((s) => t >= s[0] && t < s[1]), c = spline(t, seg[2]);
    const kick = audio.hitPulse('kick', t, 8), sh = !rep && t > JUMP ? 0.0015 * kick : 0;
    const br = 0.0012 * Math.sin(t * 0.9) + 0.0008 * Math.sin(t * 1.7 + 1); // hand-held breath
    const macro = !rep && t < 4.6 ? 1 - smooth(3.4, 4.6, t) : 0;
    this.camera.position.set(c[0] + sh + br * (1 - macro), c[1] + br * 0.6 * (1 - macro), c[2]);
    this.camera.up.set(0, 1, 0); if (Math.abs(c[0] - c[3]) < 1e-3 && Math.abs(c[2] - c[5]) < 0.03) this.camera.up.set(0, 0, -1);
    this.camera.lookAt(c[3], c[4], c[5]);
    this.camera.fov = c[6]; this.camera.updateProjectionMatrix();
    this.dome.position.copy(this.camera.position);
    // place + reveal (black until the pull-back, then the hospital room fades in)
    const e = envAt(t), rig = RIG[e], rev = rep ? 1 - smooth(225.4, 226.3, t) * 0.7 : e === 1 ? smooth(4.7, 6.0, t) : 1;
    this.U.uEnv.value = e; this.U.uT.value = t; this.U.uK.value = kick; this.U.uRev.value = rev; this.FU.uMir.value = e === 3 ? 0 : 1;
    this.key.position.set(...rig.kp); this.key.target.position.set(0, 0, 0); this.key.color.setHex(rig.kc);
    let ki = rig.ki * rev * (1 + 0.2 * kick);
    if (e === 2) ki *= 0.25 + 0.75 * trainLight(0, 0, t);           // sunset windows sweeping over the player
    if (e === 1) ki *= 0.8 + 0.2 * Math.sin(t * 1.3);
    if (e === 4 && !rep) ki *= 1 + 1.2 * smooth(JUMP - 0.05, JUMP + 0.2, t);
    this.key.intensity = ki; this.rim.position.set(...rig.rp); this.rim.color.setHex(rig.rc); this.rim.intensity = rig.ri * rev;
    this.amb.intensity = rig.amb * 3 * rev;
    this.scene.environment = this.envs[e]; this.scene.environmentIntensity = rig.ei * rev;
    this.U.uSun.value.set(...rig.kp).normalize();
    this.FU.uKi.value = ki; this.FU.uKc.value.setHex(rig.kc); this.FU.uKp.value.set(...rig.kp); this.FU.uAmb.value = rig.amb;
    this.dust.visible = e <= 2; this.dust.rotation.y = t * 0.03; this.dust.position.y = -((t * 0.01) % 0.2);
    // pixels -> LCD
    const pixOn = !rep && t < 6.3; this.pix.visible = pixOn;
    this.PU.uT.value = t; this.PU.uMode.value = smooth(3.6, 4.6, t); this.PU.uFade.value = 1 - smooth(5.0, 5.9, t);
    this.PU.uAlt.value = Math.floor(t / 1.07) % 4 === 3 ? 1 : 0;
    const ra = reelAngle(t);
    this.reels.forEach((rr, k) => { rr.rotation.y = -ra * (k ? 1.4 : 1); this.mir.children[this.reelIdx[k]].rotation.y = rr.rotation.y; });
    const su = rep ? -1 : t - TD; this.SU.uT.value = su; this.SU.uS.value = this.ctx.h * 0.012;
    this.sparks.visible = su > -0.05;
    const gone = rep ? 0 : smooth(TD, TD + 0.5, t), lcdIn = rep ? 1 : smooth(4.9, 5.9, t);
    this.lcdM.color.setScalar(lcdIn * (1 - gone * 0.9));
    this.draw(t);
    this.lcdLight.intensity = (0.004 + 0.002 * Math.sin(t * 40)) * lcdIn + (rep ? 0 : 0.05 * smooth(TD - 0.1, TD + 0.2, t) * (1 - smooth(TD + 0.3, 10.5, t)));
    // press
    const pr = rep ? smooth(224.2, 224.4, t) : smooth(PRESS - 0.08, PRESS, t) * (1 - smooth(JUMP + 0.05, JUMP + 0.3, t));
    this.btn[2].position.y = 0.034 - pr * 0.005; this.mir.children[this.dev.children.indexOf(this.btn[2])].position.y = this.btn[2].position.y;
    this.tri.material.color.setHex(Math.floor(t * 2) % 2 || t > JUMP ? 0x2bff88 : 0x0a3a1e);
  }
  post(t) {
    const rep = t > 200, jump = rep ? 0 : smooth(JUMP - 0.05, JUMP + 0.3, t);
    let cut = 0; if (!rep) for (const c of CUTS) if (t >= c) cut = Math.max(cut, Math.exp(-(t - c) * 14));
    const macro = rep ? 0 : 1 - smooth(4.4, 5.6, t);
    return { exposure: 1.05, bloom: 0.55 + macro * 0.1 + jump * 0.3 + (rep ? 0 : smooth(TD, TD + 0.6, t) * 0.5), bloomThr: 0.78 + macro * 0.1, grain: 0.09, vig: 0.65, ca: 0.6 + macro * 0.8 + cut * 2, dust: 0.25, letter: 0.12,
      fadeB: rep ? smooth(225.2, 226.2, t) * 0.6 : 0, fadeW: 0,
      glitch: (rep && t < 224.4 ? 0.25 : 0) + cut * 0.6, scan: rep ? 0.2 : cut * 0.5, punch: audio.hitPulse('kick', t, 10) * 0.3 * (t > JUMP ? 1 : 0.3) };
  }
}
