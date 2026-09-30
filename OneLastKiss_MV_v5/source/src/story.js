// v2 storyboard. A retelling of "Thrice Upon a Time" through the song:
//   the S-DAT clicks from track 26 to 27 -> Earth drowning in red (Instrumentality) -> the world is written back
//   blue, memory by memory (Paris, the Louvre, Unit-01's awakening, Village-3's small life) -> the Wunder flies,
//   the Oh-choruses are faces we don't want to forget -> Lilith / the red canyon -> the "film set" of memory and
//   the train carriage of the heart -> fire, Misato's last kiss, the Wunder becomes the Lance of Gaius ->
//   the Evas are laid to rest one per "oh" -> the anti-universe rewinds into line art (genga) -> red is rewritten
//   blue on the shore, Unit-08 descends -> Ube station, grown up, the train passes and everyone is there ->
//   the memory helix, Earth blue again -> rewind -> a pencil drawing of the afternoon they ran into.
// Shot factory signature: (ctx, t0, t1) -> Scene. `share(key, f)` reuses one scene across interleaved shots.
// Bar grid: bar n = 1.952 + 2.1429 n (112 BPM).  Beat = 0.5357.
import { Scene } from './scenes/base.js';
import { plate, Plate } from './scenes/plate.js';
import { TitleCard } from './scenes/titlecard.js';
import { Montage } from './scenes/montage.js';
import * as BESPOKE from './scenes/v2.js';
import { glowTex } from './core/textures.js';
import { loadImages } from './core/images.js';
import { audio } from './core/audio.js';
import { clamp, range, ease, smooth, lerp } from './core/util.js';

const B = (n) => 1.952 + 2.1429 * n;       // bar start
const BT = 0.5357;                          // beat
const K = (t, d = 9) => audio.hitPulse('kick', t, d);
const H = (t, d = 5) => audio.hitPulse('hit', t, d);
const cam = (...k) => k;                    // [u, panX, panY, zoom, parX, parY, dolly]

// bespoke 3D scenes (scenes/v2.js); until a scene exists, a depth plate of `fb` stands in so the cut still plays
const bespoke = (name, fb, o = {}) => (ctx, t0, t1) =>
  BESPOKE[name] ? new BESPOKE[name](ctx, t0, t1, o) : new Plate(ctx, { img: fb, fx: ['kick'] }, t0, t1);
const share = (key, f) => (ctx, t0, t1) => (ctx.memo[key] ||= f(ctx, t0, t1));

// ---------- shared plate definitions ----------
const WAVE_BLUE = (x, y, t0, dur) => (t) => [x, y, ease.inOut(range(t, t0, t0 + dur)) * 2.2, -1];

// S-DAT / Earth are shared: they return at the rewind and the instrumental
const sdat = share('sdat', bespoke('SDAT', 'm_misato'));
const earth = share('earth', bespoke('Earth', 'red_crosses'));
const sky = share('sky', bespoke('Sky', 'wunder'));
const redsea = share('redsea', bespoke('RedSea2', 'red_crosses'));
const train = share('train', bespoke('Train', 'gendo_train'));
const helix = share('helix', bespoke('Helix2', 'ube_air'));
const city = share('city', bespoke('City', 'nti'));
const rails = share('rails', bespoke('Rails', 'ube_platform'));

// the local train that crosses the platform (160.2 -> 166.1); both platform plates share it so the cut hides behind it
const TRAIN = (t) => { const u = range(t, 162.8, 166.1), h = lerp(-2, 14, ease.inOut(u) * 0.3 + u * 0.7); return [h, h - 12, 0, u > 0 && u < 1 ? 1 : 0]; };

// ---------- montage cards ----------
const OH1 = 55.22, OH2 = 63.79, ST = 2 * BT;
const MONT1 = [
  { t: OH1, img: 'm_misato', dir: [1, 0], z: [1.2, 1.06] },
  { t: OH1 + ST, img: 'm_asuka', dir: [-1, 0.2], z: [1.25, 1.08] },
  { t: OH1 + 2 * ST, img: 'm_ritsuko', dir: [0, 1], z: [1.18, 1.05] },
  { t: OH1 + 3 * ST, img: 'm_mari', dir: [1, -0.3], z: [1.22, 1.06] },
  { t: OH1 + 4 * ST, img: 'm_guns', dir: [-1, 0], z: [1.1, 1.24], pan: 0.06 },
];
const MONT2 = [
  { t: OH2, img: 'm_toji', dir: [1, 0], z: [1.18, 1.06] },
  { t: OH2 + ST, img: 'm_kensuke', dir: [-1, 0], z: [1.2, 1.07] },
  { t: OH2 + 2 * ST, img: 'm_sakura', dir: [0, -1], z: [1.25, 1.1] },
  { t: OH2 + 3 * ST, img: 'm_swarm', dir: [1, 0.3], z: [1.08, 1.2], pan: 0.07 },
  { t: OH2 + 4 * ST, img: 'm_u02', dir: [-1, 0], z: [1.3, 1.05], pan: 0.08 },
];
// final chorus: the snapshots flash back while "忘れられない人" (189.7)
const SNAPS = [
  { t: 189.7, img: 'snap1', dir: [1, 0], z: [1.15, 1.03] },
  { t: 190.24, img: 'snap3', dir: [-1, 0], z: [1.15, 1.03] },
  { t: 190.77, img: 'snap2', dir: [0, 1], z: [1.15, 1.03] },
  { t: 191.31, img: 'snap4', dir: [1, 0], z: [1.15, 1.03] },
  { t: 191.85, img: 'm_toji', dir: [-1, 0], z: [1.12, 1.04] },
];
// rewind 218.38 -> 222.6: the whole film flicks backwards, accelerating then slowing to a stop
const REW_IMG = ['ube_air', 'ube_pilots', 'shinji_blue', 'shinji_red', 'genga', 'gendo_yui', 'kaworu', 'rei_white', 'red_crosses',
  'lance', 'misato_last', 'fire_fight', 'gendo_train', 'asuka_beach', 'set_fight', 'shinji_cam', 'lilith', 'fleet', 'wunder',
  'rei_dusk', 'snap3', 'rei_paddy', 'village', 'nti', 'eva01_eye', 'eva01_cage', 'yui_lisa', 'louvre', 'paris_blue', 'paris_red'];
const REWIND = (() => { const out = []; let t = 218.38; const n = REW_IMG.length;
  REW_IMG.forEach((img, i) => { const u = i / (n - 1); out.push({ t, img, dir: [-1, 0], z: [1.08, 1.02], whip: 1.4, rev: 1, pan: 0.02 });
    t += 0.075 + 0.2 * Math.pow(Math.abs(u - 0.35) / 0.65, 2.2); });
  return out; })();

// ---------- title cards (Eva episode card: the tape moves from 26 to 27) ----------
const TITLE = [
  { t: 16.95, lines: [{ s: '最終話', x: 0.5, y: 0.47, size: 150, sx: 0.8, sy: 1.25, align: 'center', track: 30 },
    { s: 'EPISODE:27', x: 0.5, y: 0.62, size: 44, font: 'mono', weight: 500, align: 'center', track: 18, color: '#d9d4c8' }] },
  { t: 17.49, inv: 1, flash: 0.9, lines: [{ s: '世界の', x: 0.08, y: 0.4, size: 210, sx: 0.66, sy: 1.3 },
    { s: '中心で', x: 0.08, y: 0.72, size: 210, sx: 0.66, sy: 1.3 }] },
  { t: 18.02, red: 1, lines: [{ s: 'さよなら、', x: 0.93, y: 0.46, size: 190, sx: 0.7, sy: 1.25, align: 'right' },
    { s: 'すべてのエヴァンゲリオン', x: 0.93, y: 0.66, size: 96, sx: 0.62, sy: 1.25, align: 'right', track: 4 }] },
  { t: 18.56, lines: [{ s: 'One Last Kiss', x: 0.5, y: 0.55, size: 150, font: 'serif', weight: 500, align: 'center', track: 6 },
    { s: '', x: 0.3, y: 0.62, size: 10, rule: [0, 0, 1920 * 0.4, 3] }] },
];
// ---------- plate GLSL snippets ----------
// clockwork drawn in orange light over Unit-01's cage (uB.x = on, uB.y = spin)
const GEARS_HEAD = `float gear(vec2 p, float r, float n, float a){ float ang = atan(p.y, p.x) + a; float rr = length(p);
  float tooth = smoothstep(0.2, 0.0, abs(fract(ang * n / 6.2832) - 0.5) - 0.18) * r * 0.12;
  float ring = abs(rr - r - tooth) ; float hub = abs(rr - r * 0.35); float sp = abs(sin(ang * 3.0)) * rr; float ann = step(rr, r * 0.95) * step(r * 0.37, rr);
  return smoothstep(0.004, 0.0, ring - 0.002) + smoothstep(0.003, 0.0, hub - 0.0015) * 0.8 + smoothstep(0.006, 0.0, sp) * 0.5 * ann; }`;
const GEARS_HOOK = `if (uB.x > 0.001) { vec2 q = (suv - 0.5) * vec2(uAspect, 1.0); float s = uB.y;
  float g = gear(q - vec2(-0.55, 0.12), 0.26, 16.0, s) + gear(q - vec2(-0.14, -0.19), 0.17, 10.0, -s * 1.6 + 0.3) + gear(q - vec2(0.62, 0.24), 0.33, 20.0, -s * 0.8)
    + gear(q - vec2(0.27, -0.33), 0.12, 8.0, s * 2.1);
  col += vec3(1.3, 0.45, 0.1) * g * uB.x * (0.35 + 0.4 * uK); }`;
// Rei dissolving into orange LCL light (uB.x = 0..1)
const DISSOLVE_HOOK = `if (uB.x > 0.001) { float n = fbm(uv * vec2(7.0, 11.0) + 2.0) + (uv.y - 0.5) * 0.5; float th = 1.15 - uB.x * 1.1;
  float e = smoothstep(th - 0.06, th, n) * (1.0 - smoothstep(th, th + 0.02, n)); float gone = smoothstep(th, th + 0.02, n) * smoothstep(0.35, 0.9, d);
  col = mix(col, vec3(1.3, 0.55, 0.2) * (0.6 + 0.4 * dot(col, vec3(0.33))), gone * 0.85); col += vec3(2.2, 0.9, 0.3) * e * smoothstep(0.35, 0.8, d); }`;
// rain washes off the lens then the sun breaks (uB.x = rain)
const RAIN_HOOK = `if (uB.x > 0.001) { vec2 q = suv * vec2(38.0 * uAspect, 2.0); q.y += uT * 3.5 + hash12(vec2(floor(q.x), 1.0)) * 7.0;
  float h = hash12(floor(q)); float st = step(0.7, h) * smoothstep(0.4, 0.0, abs(fract(q.x) - 0.5)) * smoothstep(0.0, 1.0, fract(q.y));
  col = mix(col, col * vec3(0.72, 0.8, 0.9), uB.x * 0.55); col += vec3(0.7, 0.8, 0.9) * st * 0.25 * uB.x; }`;

const INTER = [ // instrumental rupture card before the flipbook (anti-universe)
  { t: B(65) - 0.02, red: 1, lines: [{ s: 'マイナス宇宙', x: 0.5, y: 0.52, size: 200, sx: 0.62, sy: 1.35, align: 'center', track: 12 },
    { s: 'ANTI-UNIVERSE', x: 0.5, y: 0.66, size: 40, font: 'mono', weight: 500, align: 'center', track: 26, color: '#ffb3a0' }] },
  { t: B(65) + BT, inv: 1, lines: [{ s: '想像', x: 0.25, y: 0.62, size: 300, sx: 0.66, sy: 1.3, align: 'center' },
    { s: 'イマジナリー', x: 0.72, y: 0.58, size: 120, sx: 0.66, sy: 1.3, align: 'center' }] },
];

// transitions
const tr = (type, dur, align = 0.5, x = {}) => ({ type, dur, align, ...x });
const u08 = (t) => { // Unit-08 leaps across Paris on the 24.47 hit
  const u = range(t, 23.9, 25.2), a = 2.2;
  return { x: lerp(-a * 1.1, a * 1.25, ease.inOut(u)), y: lerp(-1.3, 0.25, Math.sin(u * Math.PI) * 0.9 + u * 0.1) - 0.5, s: 0.8 + u * 0.45, r: lerp(0.35, -0.25, u), a: u > 0 && u < 1 ? 1 : 0 };
};

const SHOTS = [
  // id, start, factory(ctx, t0, t1), transition in
  ['sdat', 0, sdat, null],
  ['earth', 10.52, earth, tr('zoom', 1.1, 0.5, { c: [0.5, 0.5] })],
  ['title', 16.95, (c) => new TitleCard(c, TITLE), tr('flash', 0.3)],
  // breakdown: the red city, quiet, souls rising
  ['pred', 19.09, plate({ img: 'paris_red', fx: ['kick', 'drift', 'heat', 'glint', 'fireflies'], fxAmt: [0.6, 0.8, 0, 0], punch: 0.2,
    cam: [cam(0, 0.02, 0.03, 1.12, 0, 0, 0), cam(1, -0.02, 0, 1.03, -0.012, 0, 0.06)] }), tr('dip', 0.5)],
  ['louvre', 20.71, plate({ img: 'louvre', fx: ['kick', 'rays', 'glint', 'wave'], light: [0.55, 0.72, 0.9, 0], fxAmt: [1, 1, 1, 0], fxCol: [1.2, 0.3, 0.2],
    wave: WAVE_BLUE(0.52, 0.42, 21.3, 1.6), cam: [cam(0, 0, -0.02, 1.2, 0, 0, 0), cam(1, 0, 0.02, 1.06, 0.01, -0.006, 0.08)], e: ease.out }), tr('flash', 0.3)],
  ['pblue', 22.61, plate({ img: 'paris_blue', fx: ['kick', 'drift', 'glint', 'wave', 'sweep'], fxAmt: [0.7, 0, 0, 0], fxCol: [0.8, 0.9, 1.1],
    wave: WAVE_BLUE(0.2, 0.55, 22.61, 2.2), cam: [cam(0, -0.04, 0, 1.08, 0, 0, 0), cam(1, 0.05, 0.01, 1.18, 0.02, 0, 0.05)],
    cuts: [{ img: 'u08_cut', h: 1.1, wind: 0.2, rimCol: [0.9, 0.9, 1.2], fn: u08 }] }), tr('light', 0.5, 0.3)],
  ['gallery', 25.02, bespoke('Gallery', 'yui_lisa'), tr('fade', 0.5)],
  ['cage', 29.30, plate({ img: 'eva01_cage', fx: ['kick', 'rays', 'glint'], light: [0.5, 0.95, 0.6, 0], fxCol: [0.5, 1.4, 0.4], head: GEARS_HEAD, hook: GEARS_HOOK,
    cam: [cam(0, 0, -0.05, 1.25, 0, 0, 0), cam(0.5, 0, 0, 1.12, 0.01, 0, 0.04), cam(1, 0, 0.03, 1.02, 0.02, 0, 0.1)],
    tick: (t, u, S) => S.U.uB.value.set(smooth(30.9, 31.3, t) * (1 - smooth(32.7, 33.05, t)), (t - 31.18) * 0.9 + 0.6 * K(t, 6)) }), tr('flash', 0.35)],
  ['eye', 33.05, plate({ img: 'eva01_eye', fx: ['kick', 'glint', 'rays'], light: [0.5, 0.62, 1.4, 0], fxCol: [0.6, 1.6, 0.3], punch: 1.2,
    cam: [cam(0, 0, 0, 1.08, 0, 0, 0), cam(1, 0, 0.02, 1.32, 0, 0, 0.12)], e: ease.out, post: (t) => ({ shake: K(t, 10) * 0.6, bloom: 0.9 }) }), tr('flash', 0.25)],
  // Near Third Impact: Tokyo-3 retracts into the ground, the crosses erupt on the beat (scenes/city.js)
  ['city', 34.17, city, tr('glitch', 0.3)],
  // Village-3: the small life of people who survived
  ['village', 38.38, plate({ img: 'village', fx: ['kick', 'fireflies', 'drift', 'sweep'], fxAmt: [0.5, 0.9, 0, 0], punch: 0.3,
    cam: [cam(0, -0.04, -0.03, 1.15, 0, 0, 0), cam(1, 0.03, 0, 1.05, 0.015, 0, 0.05)] }), tr('cut', 0)],
  ['paddy', 40.03, plate({ img: 'rei_paddy', fx: ['kick', 'water', 'fireflies', 'glint'], water: 0.36, fxAmt: [0.5, 0.5, 0, 0], punch: 0.3,
    cam: [cam(0, 0.03, 0, 1.1, 0, 0, 0), cam(1, -0.02, 0.01, 1.18, -0.012, 0, 0.06)] }), tr('fade', 0.4)],
  ['clothes', 41.34, bespoke('Clothes', 'snap3'), tr('flash', 0.3)],
  ['dusk', 47.75, plate({ img: 'rei_dusk', fx: ['kick', 'lcl', 'fireflies'], fxAmt: [0, 0.4, 1, 0], punch: 0.2, hook: DISSOLVE_HOOK,
    cam: [cam(0, 0, -0.02, 1.08, 0, 0, 0), cam(1, 0, 0.02, 1.24, 0, 0, 0.1)],
    tick: (t, u, S) => S.U.uB.value.set(ease.in(range(t, 49.3, 52.34)), 0, 0, 0),
    post: (t) => ({ fadeW: smooth(51.6, 52.34, t) * 0.8, bloom: 0.8 + smooth(50, 52.3, t) }) }), tr('fade', 0.8, 0.3)],
  // chorus 1 - the Wunder flies; the "Oh"s are faces we don't want to forget
  ['sky', 52.34, sky, tr('flash', 0.4)],
  ['mont1', OH1, (c) => new Montage(c, MONT1), tr('flash', 0.12)],
  ['sky2', 61.07, sky, tr('zoom', 0.35, 0.5, { c: [0.5, 0.5] })],
  ['mont2', OH2, (c) => new Montage(c, MONT2), tr('flash', 0.12)],
  ['canyon', 69.63, bespoke('Canyon', 'm_swarm'), tr('light', 0.7, 0.4)],
  ['lilith', 74.03, plate({ img: 'lilith', fx: ['kick', 'rays', 'hex', 'glint', 'heat'], fxCol: [1.4, 0.35, 0.25],
    lightFn: (t) => [0.52, 0.84, 1.0 + H(t) * 2, t > 78.31 ? range(t, 78.31, 79.8) * 1.4 : t > 76.17 ? range(t, 76.17, 77.6) : 0],
    cam: [cam(0, 0, -0.03, 1.02, 0, 0, 0), cam(1, 0, 0.05, 1.3, 0, -0.01, 0.14)],
    post: (t) => ({ fadeW: smooth(79.4, 80.8, t), shake: H(t, 7) * 0.6 }) }), tr('burn', 0.8)],
  // verse 2 - memory as film
  ['cam1', 80.84, plate({ img: 'shinji_cam', fx: ['kick'], punch: 0.2,
    cam: [cam(0, 0, 0, 1.16, 0, 0, 0), cam(0.45, 0.04, 0.02, 1.3, 0.005, 0, 0.02), cam(1, 0.13, 0.085, 1.8, 0.01, 0, 0.05)],
    post: (t) => ({ tone: 0.3 * (1 - smooth(82.3, 83.2, t)), scan: 0.25 * (1 - smooth(82.3, 83.2, t)) }) }), tr('glitch', 0.3)],
  ['studio', 84.92, bespoke('Studio', 'set_fight'), tr('burn', 1.0)],
  ['beach', 89.26, plate({ img: 'asuka_beach', fx: ['kick', 'glint', 'rays', 'water'], light: [0.72, 0.6, 0.6, 0], water: 0.3, fxCol: [1.3, 0.6, 0.3], punch: 0.3,
    cam: [cam(0, 0.05, 0, 1.12, 0, 0, 0), cam(1, -0.03, 0, 1.2, -0.015, 0, 0.05)], post: { letter: 0.12 } }), tr('burn', 0.9)],
  ['train', 91.35, train, tr('fade', 0.5)],
  ['gendo', 93.57, plate({ img: 'gendo_train', fx: ['kick', 'bands'], punch: 0.3,
    cam: [cam(0, -0.04, 0, 1.12, 0, 0, 0), cam(1, 0.03, 0, 1.2, 0.015, 0, 0.06)], post: { letter: 0.12 } }), tr('cut', 0)],
  ['train2', 95.57, train, tr('cut', 0)],
  // chorus 2 - fire
  ['cityF', 98.19, city, tr('shatter', 1.3, 0.35, { c: [0.52, 0.5] })],
  // Unit-01 vs Unit-13: the AT-fields collide - a hex shockwave rolls out of the impact on every other beat
  ['fire2', 100.9, plate({ img: 'at_clash', fx: ['kick', 'embers', 'heat', 'hex'], fxAmt: [1, 0.7, 0, 0], fxCol: [1.5, 0.6, 0.25], punch: 1.2, gain: 0.82,
    lightFn: (t) => { const ph = ((t - 100.9) / (2 * BT)) % 1; return [0.48, 0.62, 0, 0.02 + ph * 1.15]; },
    cam: [cam(0, -0.01, 0.1, 1.75, 0, 0, 0), cam(0.35, 0, 0.06, 1.3, 0.01, 0, 0.04), cam(1, 0.01, 0.03, 1.12, 0.02, 0, 0.1)], e: ease.out,
    post: (t) => ({ shake: K(t, 9) * 0.9, rgb: K(t, 12) * 0.35, bloom: 0.45, bloomThr: 0.9, contrast: 1.12, sat: 1.1, fadeW: Math.exp(-(t - 100.9) * 6) * 0.35 }) }), tr('zoom', 0.3, 0.5, { c: [0.6, 0.5] })],
  ['cityF2', 102.4, city, tr('flash', 0.2)],
  ['misato', 103.72, plate({ img: 'misato_last', fx: ['kick', 'embers', 'heat', 'rays', 'sweep'], light: [0.5, 1.0, 0.38, 0], fxAmt: [0.8, 0.8, 0, 0], fxCol: [1.4, 0.6, 0.25],
    cam: [cam(0, 0, -0.05, 1.05, 0, 0, 0), cam(1, 0, 0.04, 1.3, 0, 0, 0.1)], post: (t) => ({ fadeW: smooth(107.4, 108.05, t) * 0.7 }) }), tr('burn', 0.9)],
  ['lance', 108.05, earth, tr('burn', 0.9)],
  ['lance2', 112.44, plate({ img: 'lance', fx: ['kick', 'rays', 'glint', 'lightrain'], light: [0.9, 0.9, 2, 0], fxAmt: [1, 0, 0.8, 0], fxCol: [1.4, 1.0, 0.8], punch: 0.8,
    cam: [cam(0, 0.28, 0.2, 1.9, 0, 0, 0), cam(1, 0.33, 0.24, 2.3, 0.01, 0, 0.08)], e: ease.out,
    post: (t) => ({ fadeW: smooth(113.05, 113.3, t) * 0.6, shake: K(t, 9) * 0.5 }) }), tr('zoom', 0.4, 0.5, { c: [0.7, 0.7] })],
  // flashback: the blue planet adrift in the red sea (忘れられないほど)
  ['globe', 113.3, earth, tr('flash', 0.25)],
  // the Evas are laid to rest, one per "oh"
  ['redsea', 115.19, redsea, tr('cut', 0)],
  ['reiw', 121.0, plate({ img: 'rei_white', fx: ['kick', 'rays', 'lightrain'], light: [0.5, 1.0, 0.6, 0], fxAmt: [1, 0, 0.35, 0], fxCol: [1.2, 1.1, 1.0], punch: 0.3,
    cam: [cam(0, 0, 0, 1.06, 0, 0, 0), cam(1, 0, 0.02, 1.2, 0, 0, 0.1)],
    post: { bloom: 0.3, bloomThr: 0.95, contrast: 1.15, sat: 1.15, exposure: 0.95, tone: 0.6, lift: [-0.04, -0.035, -0.02], vig: 0.55 } }), tr('light', 0.6)],
  ['redsea2', 123.76, redsea, tr('flash', 0.3)],
  ['kaworu', 129.61, plate({ img: 'kaworu', fx: ['kick', 'rays', 'fireflies', 'drift'], light: [0.3, 0.95, 0.4, 0], post: { contrast: 1.14, lift: [-0.03, -0.03, -0.02], bloom: 0.5 }, fxAmt: [1, 0.5, 0, 0], fxCol: [1.2, 1.1, 0.8], punch: 0.3,
    cam: [cam(0, -0.04, 0, 1.12, 0, 0, 0), cam(1, 0.03, 0, 1.2, 0.015, 0, 0.06)] }), tr('light', 0.6)],
  ['gyui', B(61), plate({ img: 'gendo_yui', fx: ['kick', 'lightrain'], light: [0.6, 0.9, 0, 0], fxAmt: [0.6, 0, 0.3, 0], fxCol: [1.0, 0.95, 0.85], punch: 0.3,
    cam: [cam(0, 0, 0, 1.08, 0, 0, 0), cam(1, 0, 0.02, 1.2, 0, 0, 0.08)], post: (t) => ({ bloom: 0.2, bloomThr: 0.95, exposure: 0.92, contrast: 1.3, sat: 1.1, lift: [-0.06, -0.06, -0.05], dust: 0.05, fadeW: smooth(135.6, 136.17, t) * 0.55 }) }), tr('fade', 0.7)],
  // instrumental - Earth written back blue, then the anti-universe collapses into drawings
  ['earth2', 136.17, earth, tr('hex', 1.0, 0.5, { c: [0.5, 0.5] })],
  ['inter', B(65) - 0.02, (c) => new TitleCard(c, INTER), tr('glitch', 0.2)],
  ['flip', B(65) + 2 * BT, bespoke('Flipbook', 'genga'), tr('cut', 0)],
  // bridge - red rewritten blue on the shore
  ['shred', 149.52, plate({ img: 'shinji_red', fx: ['kick', 'lineart', 'wave', 'glint', 'water'], water: 0.35, punch: 0.2,
    fxFn: (t) => [0.6, 0, 0, 1 - ease.inOut(range(t, 149.7, 153.6))], wave: WAVE_BLUE(0.72, 0.55, 152.4, 2.6),
    cam: [cam(0, -0.04, 0, 1.1, 0, 0, 0), cam(1, 0.03, 0.01, 1.2, 0.012, 0, 0.06)] }), tr('fade', 0.8)],
  ['sblue', 155.05, plate({ img: 'shinji_blue', fx: ['kick', 'rays', 'lightrain', 'glint', 'water'], light: [0.55, 0.95, 0.8, 0], water: 0.3, fxAmt: [0.6, 0, 1, 0], fxCol: [1.0, 1.1, 1.3], punch: 0.3,
    cam: [cam(0, 0, 0.05, 1.05, 0, 0, 0), cam(1, 0, -0.02, 1.16, 0, 0.01, 0.07)],
    cuts: [{ img: 'u08_desc', h: 0.7, wind: 0.3, rim: 0.9, rimCol: [1, 0.9, 1.1], fn: (t) => { const u = ease.out(range(t, 155.05, 159.6)); return { x: 0.2, y: lerp(1.5, 0.12, u), s: 1 + u * 0.15, a: smooth(155.05, 155.8, t) }; } }] }), tr('light', 0.7)],
  ['bench', 159.63, plate({ img: 'ube_bench', fx: ['kick', 'rays', 'glint', 'water', 'train'], light: [0.72, 0.8, 0.0, 0], water: 0.22, fxCol: [1.3, 1.1, 0.9], punch: 0.2,
    head: '', hook: RAIN_HOOK, trainFn: TRAIN,
    lightFn: (t) => [0.72, 0.8, smooth(160.5, 162.5, t) * 1.2, 0],
    tick: (t, u, S) => S.U.uB.value.set(1 - smooth(160.2, 162.2, t), 0, 0, 0),
    cam: [cam(0, 0.03, 0, 1.08, 0, 0, 0), cam(1, -0.02, 0, 1.18, -0.012, 0, 0.05)] }), tr('dip', 0.8)],
  ['pilots', 164.05, plate({ img: 'ube_pilots', fx: ['kick', 'glint', 'train', 'sweep'], trainFn: TRAIN, fxAmt: [0.6, 0, 0, 0], punch: 0.3,
    cam: [cam(0, 0, 0, 1.12, 0, 0, 0), cam(1, 0, 0.01, 1.06, 0.01, 0, 0.04)] }), tr('cut', 0)],
  // final chorus
  ['rails', 166.14, rails, tr('flash', 0.3)],
  ['pilots2', 170.67, plate({ img: 'ube_pilots', fx: ['kick', 'glint', 'sweep'], fxAmt: [0.8, 0, 0, 0], punch: 0.4,
    cam: [cam(0, -0.08, -0.04, 1.45, 0, 0, 0), cam(1, 0.06, -0.02, 1.3, 0.02, 0, 0.06)] }), tr('zoom', 0.4, 0.5, { c: [0.5, 0.5] })],
  ['rails2', 175.47, rails, tr('zoom', 0.35, 0.5, { c: [0.5, 0.5] })],
  ['helix', 181.25, helix, tr('flash', 0.5)],
  ['snaps', 189.7, (c) => new Montage(c, SNAPS, { post: { tone: 0.2 } }), tr('flash', 0.15)],
  ['helix2', 192.56, helix, tr('flash', 0.3)],
  ['earth3', 207.5, earth, tr('light', 1.0)],
  // outro
  ['rewind', 218.38, (c) => new Montage(c, REWIND, { flash: 0.35, post: { scan: 0.3, glitch: 0.12, tone: 0.2, bloom: 0.45, bloomThr: 0.85, contrast: 1.1 } }), tr('glitch', 0.3)],
  ['sdat2', 222.6, sdat, tr('glitch', 0.4)],
  ['sketch', 226.2, bespoke('Sketch2', 'p_town'), tr('pencil', 2.2, 0.35)],
];

// HUD overlay moments (NERV / WILLE displays)
export const HUD_ITEMS = [
  { t0: 1.2, t1: 10.2, kind: 'code', text: 'S-DAT', track: '26 ▸ 27', base: 1.2 },
  { t0: 29.5, t1: 33.0, kind: 'sync', label: 'EVA-01  SYNCHRO RATIO', from: 0, to: 400, pow: 2.4, max: 400, warn: 100 },
  { t0: 33.08, t1: 34.1, kind: 'alert', text: '起動', sub: 'EVA-01  ACTIVATION', color: '#ff8a1e', rate: 2 },
  { t0: 61.2, t1: 63.7, kind: 'magi', result: [1, 1, 1], style: { top: '9%', bottom: 'auto' } },
  { t0: 80.9, t1: 84.8, kind: 'frame', text: '● REC', color: '#f4efe6' },
  { t0: 108.2, t1: 111.3, kind: 'count', from: 16 },
  { t0: 108.2, t1: 111.3, kind: 'alert', text: 'ガイウスの槍', sub: 'LANCE OF GAIUS', color: '#ffd6a0', rate: 1, style: { top: '22%' } },
  { t0: 218.4, t1: 222.5, kind: 'code', text: '◀◀ REW', track: '27', base: 226, rev: 12 },
  { t0: 222.6, t1: 226.0, kind: 'code', text: 'S-DAT', track: '27  END', base: 222.6 },
];

// Eva EMERGENCY boards (core/emergency.js): fill the screen across the Eva moments, strobe, then retract into the next shot
export const EMERG = [
  { t0: 15.0, t1: 16.95, o: [0.5, 0.5], head: '人類補完', sub: 'HUMAN INSTRUMENTALITY', band: '人類補完計画', tag: '警報', level: 5,
    ticker: 'HUMAN INSTRUMENTALITY PROJECT  //  ANTI-AT FIELD EXPANDING  //  ALL LIFE-FORMS RETURNING TO LCL  //  ',
    code: ['ANTI-AT FIELD', 'LCL CONV.', 'SEELE 01', 'GAUGE +', 'LILITH'], code2: 'CODE : 000', line2: 'SEELE  PROTOCOL', strobe: 0.8 },
  { t0: 36.45, t1: 38.38, out: 0.9, o: [0.5, 0.42], head: '覚醒', sub: 'EVA-01  AWAKENING', band: '初号機覚醒', tag: '緊急', level: 4,
    ticker: 'EVA-01 SYNCHRO RATIO 400%  //  PATTERN BLUE  //  NEAR THIRD IMPACT WARNING  //  ',
    code: ['SYNC 400%', 'PLUG DEPTH', 'S2 ENGINE', 'BERSERK', 'PATTERN BLUE'], code2: 'SYNC : 400%', line2: 'EVA-01  UNCONTROLLED', strobe: 0.8 },
  { t0: 52.34, t1: 55.0, out: 0.35, lite: 1, hue: 'orange', head: '発進', sub: 'AAA WUNDER  LAUNCH', tag: '発進', level: 1,
    ticker: 'AAA WUNDER  //  MAIN ENGINE IGNITION  //  ALL HANDS TO BATTLE STATIONS  //  ' },
  { t0: 111.3, t1: 112.95, out: 0.35, o: [0.62, 0.62], head: '緊急事態', sub: 'THIRD IMPACT', band: '第三衝撃', tag: '警報', level: 5,
    ticker: 'ANTI-AT FIELD CRITICAL  //  LANCE OF GAIUS IN CONTACT  //  ALL LIFE RETURNING TO LCL  //  ',
    code: ['IMPACT', 'ANTI-AT', 'LCL 99%', 'GAIUS', 'W-CROSS'], code2: 'CODE : 999', line2: 'AAA WUNDER  BRIDGE', strobe: 0.5 },
];

// runtime atlas of v2 images for the helix (4x3 cells, 256x192 each)
function atlas(img, names, cw = 256, ch = 192) {
  const cv = document.createElement('canvas'); cv.width = cw * 4; cv.height = ch * 3; const g = cv.getContext('2d');
  names.forEach((n, i) => { const e = img[n]; if (!e) return; const x = (i % 4) * cw, y = Math.floor(i / 4) * ch;
    const s = Math.max(cw / e.w, ch / e.h), w = e.w * s, h = e.h * s; g.save(); g.beginPath(); g.rect(x, y, cw, ch); g.clip();
    g.drawImage(e.img, x + (cw - w) / 2, y + (ch - h) / 2, w, h); g.restore(); });
  return cv;
}

/**
 * Build every shot (yielding so the loading bar paints). around: only build shots near that time (debug / stills).
 */
export async function buildStory(ctx, progress, around = null) {
  const img = await loadImages();
  ctx.img = img; ctx.memo = {};
  ctx.shared = { glow: glowTex(128), atlas };
  const out = [];
  for (let i = 0; i < SHOTS.length; i++) {
    const [id, start, make, trn] = SHOTS[i];
    const end = i + 1 < SHOTS.length ? SHOTS[i + 1][1] : 252.03;
    const need = around === null || (end > around - 3 && start < around + 3);
    const scene = need ? make(ctx, start, end) : new Scene(ctx);
    out.push({ id, start, scene, tr: trn || { type: 'cut' } });
    progress((i + 1) / SHOTS.length);
    await new Promise((r) => setTimeout(r, 0));
  }
  return out;
}
