// City (v6): Tokyo-3, as a real 3D city of instanced towers. Two moods share one set:
//   RED  34.17-38.38 "止められない喪失の予感" - Near Third Impact. Unit-01 rises haloed in front of a red moon; the city
//        retracts into the ground in a wave rolling out from it, and cross-shaped light pillars erupt on the beat.
//   FIRE 98.19-100.9 / 102.4-103.72 "Oh can you give me one last kiss?" - the burning city at dusk. A low fly-through down
//        the avenue to Unit-01 and Unit-13 at an AT-field clash; crosses erupt on the beat, then a wide aerial where a
//        giant cross and a shockwave bend the towers.
// Pure function of t. All lighting is toon-banded (hard terminator + rim) so it sits with the cel-painted plates.
import * as THREE from 'three';
import { Scene } from './base.js';
import { NOISE } from '../core/glsl.js';
import { applyCam } from './camkeys.js';
import { cutMat, cutGeo } from '../core/images.js';
import { smooth, clamp, rng, range, ease, lerp } from '../core/util.js';
import { audio } from '../core/audio.js';

const BT = 0.5357, BEAT = (k) => 1.952 + BT * k;           // beat grid (k from bar 0)
const EVA = [0, -73];                                        // clearing where the Evas stand
const MODE_T = 60;                                           // t < 60 -> RED, else FIRE

const SKY = /* glsl */ `
uniform float uMode, uT;
vec3 skyBase(vec3 d){
  float h = d.y;
  vec3 zr = vec3(0.03, 0.0, 0.006), hr = vec3(0.7, 0.05, 0.03);
  vec3 zf = vec3(0.03, 0.018, 0.045), hf = vec3(0.7, 0.2, 0.05);
  vec3 z = mix(zr, zf, uMode), hz = mix(hr, hf, uMode);
  vec3 c = mix(hz, z, smoothstep(-0.04, 0.42, h));
  float back = smoothstep(0.2, -1.0, d.z);                   // glow is behind the city (-z)
  c += mix(vec3(0.8, 0.06, 0.03), vec3(0.9, 0.32, 0.07), uMode) * exp(-abs(h) * 11.0) * (0.3 + 0.7 * back);
  return c;
}`;
const SKY_V = 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }';
const SKY_F = /* glsl */ `varying vec3 vW; ${NOISE} ${SKY}
void main(){ vec3 d = normalize(vW - cameraPosition), c = skyBase(d);
  vec2 q = d.xz / (max(d.y, 0.0) + 0.12);
  float cl = fbm(q * vec2(0.9, 2.2) + vec2(uT * 0.03, 0.0)), cl2 = fbm(q * 2.6 - vec2(uT * 0.05, 3.0));
  float band = smoothstep(0.45, 0.8, cl) * smoothstep(0.0, 0.12, d.y) * smoothstep(0.9, 0.2, d.y);
  vec3 cloudC = mix(vec3(0.08, 0.0, 0.01), vec3(0.09, 0.04, 0.05), uMode);
  vec3 lit = mix(vec3(1.1, 0.12, 0.05), vec3(1.4, 0.55, 0.18), uMode) * smoothstep(0.55, 0.9, cl2);
  c = mix(c, cloudC + lit * 0.5, band * 0.85);
  // red moon (RED) / low sun (FIRE)
  vec3 md = normalize(vec3(0.0, 0.34, -1.0)); float a = acos(clamp(dot(d, md), -1.0, 1.0));
  float disc = smoothstep(0.205, 0.198, a) * (1.0 - uMode);
  vec3 moon = vec3(1.25, 0.12, 0.06) * (0.55 + 0.6 * fbm(d.xy * 18.0 + 3.0)) * (0.7 + 0.3 * smoothstep(0.2, 0.0, a));
  c = mix(c, moon, disc); c += vec3(1.0, 0.08, 0.04) * exp(-max(a - 0.2, 0.0) * 9.0) * 0.35 * (1.0 - uMode);
  vec3 sd = normalize(vec3(-0.55, 0.05, -1.0)); float sa = acos(clamp(dot(d, sd), -1.0, 1.0));
  c += vec3(2.2, 1.0, 0.35) * (smoothstep(0.035, 0.03, sa) * 2.0 + exp(-sa * 7.0) * 0.5) * uMode;
  gl_FragColor = vec4(c, 1.0); }`;

// shared fog/wave uniforms: uWave (x = radius of the retract wave, y = shock radius, z = shock amp), uEva (clearing xz)
// v6: the old fog used a bright sky-coloured constant and a 0.0042 coefficient, which turned the whole frame into pink
// milk - the distant towers had no silhouette left. Density is halved and the far term now settles toward black so the
// far towers read as dark cut-outs against a bright sky, which is the whole point of a dusk long shot.
const FOG = /* glsl */ `
uniform vec3 uWave; uniform vec2 uEva;
vec3 fog(vec3 c, vec3 w){ vec3 v = w - cameraPosition; float d = length(v);
  float f = 1.0 - exp(-d * mix(0.0021, 0.0026, uMode));
  vec3 fc = skyBase(normalize(v)) * 0.26 + mix(vec3(0.006, 0.0, 0.001), vec3(0.02, 0.007, 0.004), uMode);
  fc = max(fc, vec3(0.0));
  f *= mix(1.0, 0.45, smoothstep(15.0, 70.0, cameraPosition.y)); return mix(c, fc, f * 0.82); }`;

const BLD_V = /* glsl */ `
attribute vec4 aB; attribute vec4 aH; attribute float aY; uniform float uMode, uT; uniform vec3 uWave; uniform vec2 uEva;
varying vec3 vW, vN, vL; varying float vSeed;
void main(){
  // aY is the height this piece starts at: the ground shaft starts at 0, a setback shaft at ~2/3 height, a roof mast
  // at the top. h is the height of the piece itself, so the piece occupies aY .. aY + h.
  vec3 p = position; float h = aH.x * mix(1.0, aH.z, uMode);                 // FIRE: broken tops
  float lo = aY, hi = aY + h;
  float r = length(vec2(aB.x, aB.y) - uEva);
  float drop = (1.0 - uMode) * smoothstep(0.0, 1.0, (uWave.x - r) / 26.0) * hi * 1.02;   // RED: retract into the ground
  vec3 w = vec3(aB.x + p.x * aB.z, aY + p.y * h - drop, aB.y + p.z * aB.w);
  vec2 away = normalize(vec2(aB.x, aB.y) - uEva + 1e-3);
  float sh = uWave.z * exp(-pow((r - uWave.y) / 12.0, 2.0));                // shockwave shears the towers outward
  w.xz += away * w.y * sh * 0.22;
  vW = w; vN = normal; vL = vec3(p.x * aB.z, p.y * h, p.z * aB.w); vL.y = p.y * h; vSeed = aH.y;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`;
const BLD_F = /* glsl */ `varying vec3 vW, vN, vL; varying float vSeed; ${NOISE} ${SKY} ${FOG}
void main(){ vec3 N = normalize(vN);
  vec3 L = normalize(mix(vec3(0.15, 0.32, -1.0), vec3(-0.45, 0.3, -1.0), uMode));
  vec3 Lc = mix(vec3(1.05, 0.1, 0.05), vec3(1.25, 0.5, 0.16), uMode);
  float nl = dot(N, L), band = smoothstep(0.02, 0.1, nl) * mix(1.0, 0.35, step(0.5, N.y));
  // v6: darker and more varied than v5's flat 0.05-0.07, so the lit facades have something to read against
  vec3 base = mix(vec3(0.022, 0.016, 0.020), vec3(0.040, 0.030, 0.032), fract(vSeed * 7.3));
  vec3 c = base * (0.18 + 0.1 * N.y) + base * Lc * band * 1.7;
  c += Lc * 0.5 * pow(1.0 - abs(dot(N, normalize(cameraPosition - vW))), 4.0) * step(N.y, 0.5) * 0.42;  // rim
  if (N.y < 0.5) {                                                      // facade
    // v6: this was the "RGB confetti" defect. v5 used 0.42 x 0.55 world units as a window cell - four storeys per
    // cell - and lit only 5% of them, so at any distance you got isolated coloured squares on a flat box.
    // The facade is now built the way a real one is: the face is divided into LANES of ~2 m, each lane is a vertical
    // stack of storeys (2.0 m), and each lane carries its own occupancy pattern down its own stack. That gives
    // vertical runs of lit windows with dark gaps between them, which is what a tower at dusk actually looks like,
    // instead of a uniform grid of dots.
    float u = abs(N.x) > 0.5 ? vL.z : vL.x;
    vec2 g = vec2(u / 0.95, vL.y / 1.3), cell = floor(g), f = fract(g);   // scene scale: 1 unit ~ 2.3 m (Unit-01 is 34)
    float hs = hash12(vec2(cell.x, vSeed * 91.0));
    // per-lane occupancy: a run of lit floors, offset per lane, so stacks don't line up across the building
    float run = hash12(vec2(cell.x * 1.3 + vSeed * 7.0, 3.7));
    float lit = step(0.34, fract((cell.y + run * 53.0) / mix(4.0, 11.0, run)));
    float busy = mix(0.18, 0.86, step(0.30, hs));
    float on = lit * step(1.0 - busy, hash12(vec2(cell.x * 0.7, cell.y * 5.3 + vSeed * 19.0)));
    on *= 0.72 + 0.28 * sin(uT * (1.2 + hs * 5.0) + run * 40.0) * uMode;
    // pane mask: window opening inside the bay, mullion + spandrel left dark
    float pane = smoothstep(0.08, 0.16, f.x) * smoothstep(0.92, 0.84, f.x) *
                 smoothstep(0.14, 0.22, f.y) * smoothstep(0.88, 0.80, f.y);
    vec3 wc = mix(vec3(1.30, 0.68, 0.32), vec3(0.52, 0.75, 1.20), step(0.80, fract(hs * 13.0))) * mix(0.55, 0.80, uMode);
    float dist = length(vW - cameraPosition), aa = 1.0 - smoothstep(22.0, 70.0, dist);
    c += wc * on * mix(0.16, pane, aa) * 0.62;
    // unlit structure: a *very* faint cool tint in the opening (a bright one flatlights the tower into a checkerboard)
    // plus a warm slab edge per storey, which is the detail that actually gives the wall its scale
    c += vec3(0.012, 0.017, 0.027) * pane * mix(0.4, 1.0, aa) * (1.0 - on);
    c += vec3(0.075, 0.042, 0.033) * smoothstep(0.03, 0.0, abs(f.y - 0.02)) * mix(0.30, 1.0, aa);
    c *= 1.0 - 0.35 * (1.0 - pane) * aa * 0.4;
  }
  float fire = uMode * exp(-max(vW.y, 0.0) / 4.0) * smoothstep(0.58, 0.8, fbm(vW.xz * 0.06 + 4.0)) * (0.7 + 0.3 * sin(uT * 13.0 + vW.x));
  c += vec3(1.5, 0.45, 0.1) * fire * 0.8;
  c *= mix(0.55, 1.0, smoothstep(0.0, 4.0, vW.y));                      // contact AO
  gl_FragColor = vec4(fog(c, vW), 1.0); }`;
const GND_F = /* glsl */ `varying vec3 vW; ${NOISE} ${SKY} ${FOG}
void main(){ vec3 V = normalize(vW - cameraPosition);
  vec2 q = vW.xz; float road = step(abs(q.x), 5.0) + step(abs(fract(q.y / 18.0) - 0.5) * 18.0, 2.2);
  vec3 c = mix(vec3(0.018, 0.012, 0.014), vec3(0.03, 0.022, 0.024), clamp(road, 0.0, 1.0));
  float lane = step(abs(q.x), 5.0) * step(abs(abs(q.x) - 2.5), 0.06) * step(0.5, fract(q.y / 4.0));
  c += vec3(0.5, 0.45, 0.4) * lane * 0.25;
  vec3 R = reflect(V, vec3(0.0, 1.0, 0.0)); float fr = pow(1.0 - max(-V.y, 0.0), 5.0);
  c += skyBase(R) * (0.05 + 0.35 * fr) * mix(0.5, 0.18, uMode) * (0.7 + 0.3 * vnoise(q * 0.7));
  float r = length(q - uEva);
  c += vec3(2.2, 0.15, 0.06) * exp(-abs(r - uWave.x) * 0.35) * (1.0 - uMode) * step(1.0, uWave.x);   // retract wave front
  c += vec3(2.4, 1.1, 0.45) * exp(-abs(r - uWave.y) * 0.18) * uWave.z * 2.0;                               // shock ring
  float fire = smoothstep(0.68, 0.84, fbm(q * 0.06 + 4.0)) * uMode * (0.75 + 0.25 * sin(uT * 11.0 + q.x * 0.3));
  c += vec3(1.3, 0.35, 0.06) * fire * (0.4 + 0.6 * vnoise(q * 1.5 + uT * 2.0));
  gl_FragColor = vec4(fog(c, vW), 1.0); }`;

// cross-shaped light pillars (camera-facing around the vertical axis). aC = (x, z, t0, h), aD = (hue, seed, -, -)
const CROSS_V = /* glsl */ `
attribute vec4 aC; attribute vec4 aD; uniform float uT; varying vec2 vP; varying float vH, vA, vGrow, vHue;
void main(){ float u = uT - aC.z; vA = step(0.0, u) * smoothstep(3.2, 1.6, u); u = max(u, 0.0);
  vGrow = 1.0 - exp(-u * 5.0); vH = aC.w; vHue = aD.x;
  vec3 c = vec3(aC.x, 0.0, aC.y), to = cameraPosition - c; vec3 right = normalize(vec3(to.z, 0.0, -to.x));
  float W = aC.w * 0.55; vP = vec2(position.x * W, (position.y + 0.5) * aC.w * 1.05);
  vec3 w = c + right * vP.x + vec3(0.0, vP.y, 0.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0) * vA; }`;
const CROSS_F = /* glsl */ `varying vec2 vP; varying float vH, vA, vGrow, vHue;
void main(){ if (vA <= 0.0) discard;
  float bw = vH * 0.006 + 0.08, top = vH * vGrow, arm = vH * 0.27 * smoothstep(0.55, 1.0, vGrow);
  float yb = vH * 0.76, x = abs(vP.x), y = vP.y;
  float vert = exp(-x / bw) * step(y, top) * smoothstep(top, top - bw * 6.0, y);
  float hor = exp(-abs(y - yb) / bw) * smoothstep(arm, arm - bw * 4.0, x) * step(yb, top);
  float g = max(vert, hor), core = pow(g, 6.0);
  float glow = exp(-x / (bw * 6.0)) * step(y, top) * 0.1 + exp(-length(vec2(x, y) / (bw * vec2(9.0, 4.0)))) * 0.6;
  vec3 col = mix(vec3(1.6, 0.35, 0.18), vec3(1.7, 0.95, 0.5), vHue);
  vec3 c = col * (g * 0.9 + glow) + vec3(1.6, 1.4, 1.3) * core;
  gl_FragColor = vec4(c * vA, 1.0); }`;

const EMB_V = /* glsl */ `attribute vec4 aR; uniform float uT, uPx, uMode; varying vec3 vCol; varying float vA;
void main(){ vec3 b = vec3((aR.x - 0.5) * 90.0, aR.y * 36.0, 18.0 - aR.z * 150.0);
  float rise = mix(0.8, 2.4, uMode) * (0.5 + aR.w);
  b.y = mod(b.y + uT * rise, 36.0); b.x += sin(uT * 0.7 + aR.w * 30.0) * 1.5; b.z += cos(uT * 0.5 + aR.x * 20.0) * 1.0;
  vec4 mv = viewMatrix * vec4(b, 1.0); gl_Position = projectionMatrix * mv;
  gl_PointSize = uPx * (0.08 + 0.1 * aR.w) / max(-mv.z, 0.5);
  vA = (0.5 + 0.5 * sin(uT * (3.0 + aR.w * 7.0) + aR.x * 50.0)) * smoothstep(0.0, 3.0, b.y) * smoothstep(36.0, 30.0, b.y);
  vCol = mix(vec3(1.6, 0.2, 0.08), vec3(2.0, 0.8, 0.25), uMode); }`;
const EMB_F = `varying vec3 vCol; varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = exp(-dot(d, d) * 16.0) * vA; if (a < 0.003) discard; gl_FragColor = vec4(vCol * a, 1.0); }`;

// FIRE: smoke billboards (normal blend), AT-field hex disc between the Evas
// v6: v5 billboards were 18-44 m wide at 46 of them, which stacked into a single pink wash over the avenue. They are
// now 9-20 m and thinner, so they read as individual columns rising off the district instead of a wall of haze.
const SMOKE_V = /* glsl */ `attribute vec4 aS; uniform float uT; varying vec2 vUv; varying float vS, vY;
void main(){ vUv = uv; vS = aS.w; vec3 c = vec3(aS.x + sin(uT * 0.2 + aS.w * 9.0) * 3.0, aS.y + mod(uT * 1.5 + aS.w * 20.0, 12.0), aS.z);
  float s = 9.0 + aS.w * 11.0; vec4 mv = viewMatrix * vec4(c, 1.0); mv.xy += position.xy * s; vY = c.y;
  gl_Position = projectionMatrix * mv; }`;
const SMOKE_F = /* glsl */ `uniform float uT, uMode; varying vec2 vUv; varying float vS, vY; ${NOISE}
void main(){ vec2 q = vUv - 0.5; float n = fbm(vUv * 3.0 + vS * 11.0 + vec2(0.0, -uT * 0.08));
  float a = smoothstep(0.5, 0.1, length(q)) * smoothstep(0.42, 0.72, n) * 0.42 * uMode;
  if (a < 0.01) discard;
  vec3 c = mix(vec3(0.035, 0.022, 0.022), vec3(0.42, 0.13, 0.04), smoothstep(0.1, -0.4, q.y) * 0.8) * (0.7 + 0.6 * n);
  gl_FragColor = vec4(c, a); }`;
const HEX_F = /* glsl */ `uniform float uT, uA, uPh; varying vec2 vUv; ${NOISE}
float hexd(vec2 p){ p = abs(p); return max(p.x * 0.866 + p.y * 0.5, p.y); }
void main(){ vec2 q = (vUv - 0.5) * 2.0; float r = length(q);
  // v6: this used to draw 6 cells and then fade only at r>0.55, and the low fly-through passes right through the
  // disc, so the frame filled edge to edge with white hexagons and the Evas vanished behind them. Finer cells (11),
  // a much earlier and harsher radial falloff, and the glass wash cut to a third - it now reads as a field hanging
  // between the two units, not as a screen door over the lens.
  vec2 g = q * 11.0; vec2 a = mod(g, vec2(1.732, 1.0)) - vec2(0.866, 0.5), b = mod(g - vec2(0.866, 0.5), vec2(1.732, 1.0)) - vec2(0.866, 0.5);
  vec2 h = dot(a, a) < dot(b, b) ? a : b; float e = smoothstep(0.44, 0.5, hexd(h));
  float ring = exp(-abs(r - uPh * 1.1) * 14.0) * (1.0 - uPh);
  float fade = smoothstep(0.82, 0.16, r);
  vec3 c = vec3(1.6, 0.66, 0.22) * (e * (0.10 + 1.4 * ring) + ring * 0.5) * fade + vec3(2.0, 1.2, 0.6) * exp(-r * 9.0) * 0.22;
  gl_FragColor = vec4(c * uA, 1.0); }`;
const FLAT_V = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }';
const HALO_F = /* glsl */ `uniform float uA, uT; varying vec2 vUv;
void main(){ vec2 q = (vUv - 0.5) * vec2(2.0, 2.0 / 0.28); float r = length(q);
  float ring = exp(-abs(r - 0.8) * 26.0) + exp(-abs(r - 0.8) * 5.0) * 0.25;
  gl_FragColor = vec4(vec3(2.2, 1.3, 1.1) * ring * uA * (0.9 + 0.1 * sin(uT * 7.0)), 1.0); }`;
const PILLAR_F = /* glsl */ `uniform float uA; varying vec2 vUv;
void main(){ float x = abs(vUv.x - 0.5) * 2.0; float g = exp(-x * 9.0) * 0.5 + exp(-x * 40.0) * 1.4;
  gl_FragColor = vec4(vec3(1.6, 0.22, 0.12) * g * uA * smoothstep(0.0, 0.05, vUv.y), 1.0); }`;

// camera keys [t, px,py,pz, qx,qy,qz, fov, roll]
const CAM = [
  // RED: street-level canyon, the avenue frames Unit-01 against the moon
  [34.1, 1.6, 1.4, -14, 0, 15, -73, 58, 0.03], [36.3, 1.0, 1.9, -22, 0, 18, -73, 54, 0.0], [38.45, 0.4, 2.6, -30, 0, 21, -73, 50, -0.02],
  // FIRE: low fast fly-through down the avenue to the clash
  [98.1, -1.0, 3.2, 22, 0, 7, -73, 60, 0.04], [99.4, 1.2, 4.6, -12, -1, 9, -73, 54, -0.05], [100.95, 3.4, 7.5, -44, -2.5, 11, -73, 50, -0.1],
  // FIRE: wide aerial over the district, the giant cross standing in the clearing and the shockwave bending the towers
  // v6: v5 put the camera at y=78 and z=14, i.e. 90 m above and almost on top of the impact, aimed downward - the
  // frame became a full-screen field of rooftops with the cross buried inside it. Pulled back and lowered, it is now a
  // proper aerial: the towers are a silhouette along the bottom against the burning sky, and the cross reads as a
  // vertical bar standing up in front of the horizon.
  [101.0, 30, 62, 128, 0.5, 11, -73, 52, 0.04], [103.8, 26, 54, 116, 0.5, 13, -73, 50, 0.08],
];

export class City extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 50, near: 0.3, far: 2000 });
    const S = this.scene, R = rng(303), I = ctx.img;
    this.U = { uMode: { value: 0 }, uT: { value: 0 }, uWave: { value: new THREE.Vector3() }, uEva: { value: new THREE.Vector2(...EVA) } };
    // sky
    const sky = new THREE.Mesh(new THREE.SphereGeometry(900, 48, 24), new THREE.ShaderMaterial({ uniforms: this.U, vertexShader: SKY_V, fragmentShader: SKY_F, side: THREE.BackSide, depthWrite: false }));
    sky.renderOrder = -10; this.sky = sky; S.add(sky);
    // ground
    const gnd = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400).rotateX(-Math.PI / 2), new THREE.ShaderMaterial({ uniforms: this.U, vertexShader: SKY_V, fragmentShader: GND_F }));
    S.add(gnd);
    // towers
    const B = [], H = [], Y = [];
    for (let gx = -150; gx <= 150; gx += 6) for (let gz = -300; gz <= 30; gz += 6) {
      const x = gx + (R() - 0.5) * 1.5, z = gz + (R() - 0.5) * 1.5;
      if (Math.abs(x) < 7.5 || Math.abs(((z % 18) + 18) % 18 - 9) > 7) continue;        // avenue + cross streets
      if (Math.hypot(x - EVA[0], z - EVA[1]) < 13) continue;                            // the clearing
      const n = R() < 0.35 ? 2 : 1;
      for (let k = 0; k < n; k++) {
        const w = 2.2 + R() * 2.6, d = 2.2 + R() * 2.6, ox = n > 1 ? (k - 0.5) * 2.6 : 0;
        const core = Math.exp(-Math.abs(x) / 40), far = smooth(-60, -200, z);
        const h = (3 + Math.pow(R(), 2.2) * 26) * (0.8 + 0.8 * core) * (1 + far * 0.35) + (Math.abs(x) < 20 && R() < 0.25 ? 12 : 0);
        const brk = R() < 0.3 ? 0.35 + R() * 0.4 : 1;
        const step = brk === 1 && h > 12 && R() < 0.65, top = h * (0.6 + R() * 0.1);
        B.push(x + ox, z, w, d); H.push(step ? top : h, R(), brk, 0); Y.push(0);
        // v6: v5 built each tower as a single unbroken box, which is the other half of why the city read as "extruded
        // rectangles". A tall tower now steps back: the base shaft stops at ~60% and a narrower shaft carries on to the
        // full height, sometimes with a short rooftop plant box. Masts are kept short and sparse - long thin ones
        // turned the aerial into a field of needles. The upper pieces carry their base height in aY.
        if (step) {
          const s = 0.56 + R() * 0.2, h2 = h - top;
          B.push(x + ox, z, w * s, d * s); H.push(h2, R(), 1, 0); Y.push(top);
          if (h > 18 && R() < 0.35) {
            B.push(x + ox + (R() - 0.5) * w * 0.2, z, w * s * 0.45, d * s * 0.45); H.push(h * (0.03 + R() * 0.04), R(), 1, 0); Y.push(h);
          }
        }
      }
    }
    const n = B.length / 4, g = new THREE.InstancedBufferGeometry();
    const box = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
    g.index = box.index; g.setAttribute('position', box.getAttribute('position')); g.setAttribute('normal', box.getAttribute('normal'));
    g.setAttribute('aB', new THREE.InstancedBufferAttribute(new Float32Array(B), 4)); g.setAttribute('aH', new THREE.InstancedBufferAttribute(new Float32Array(H), 4));
    g.setAttribute('aY', new THREE.InstancedBufferAttribute(new Float32Array(Y), 1));
    g.instanceCount = n;
    const bld = new THREE.Mesh(g, new THREE.ShaderMaterial({ uniforms: this.U, vertexShader: BLD_V, fragmentShader: BLD_F })); bld.frustumCulled = false; S.add(bld);
    this.nBld = n;
    // crosses
    const C = [];
    const cross = (x, z, t0, h, hue = 0) => C.push([x, z, t0, h, hue, R()]);
    // RED: the eruptions on the beats, then the field of far crosses on the horizon
    [[-24, -42, 34.17, 62], [30, -56, BEAT(61), 74], [-44, -98, BEAT(62), 95], [16, -26, BEAT(63), 44], [-12, -60, BEAT(64), 58],
     [0, -130, 36.5, 170], [42, -110, BEAT(66), 90], [-30, -150, BEAT(67), 120], [22, -80, BEAT(68), 66]].forEach((c) => cross(...c));
    for (let i = 0; i < 16; i++) cross((R() - 0.5) * 420, -170 - R() * 160, 34.3 + R() * 1.8, 120 + R() * 110);
    // FIRE: on the beats around Unit-13 and along the avenue, the giant one at the clash in the aerial
    [[26, -86, BEAT(voidK(98.38)), 48, 1], [-20, -30, BEAT(voidK(98.92)), 36, 1], [34, -58, BEAT(voidK(99.45)), 55, 1], [14, -110, 99.99, 90, 1],
     [-34, -80, BEAT(voidK(100.52)), 52, 1], [18, -12, BEAT(voidK(100.52)) + 0.1, 30, 1]].forEach((c) => cross(...c));
    cross(0.5, -73, BEAT(voidK(102.67)), 150, 1); cross(-40, -120, BEAT(voidK(103.2)), 80, 1); cross(46, -40, BEAT(voidK(103.2)) + 0.12, 60, 1);
    const cg = new THREE.InstancedBufferGeometry(), q = new THREE.PlaneGeometry(1, 1);
    cg.index = q.index; cg.setAttribute('position', q.getAttribute('position'));
    cg.setAttribute('aC', new THREE.InstancedBufferAttribute(new Float32Array(C.flatMap((c) => [c[0], c[1], c[2], c[3]])), 4));
    cg.setAttribute('aD', new THREE.InstancedBufferAttribute(new Float32Array(C.flatMap((c) => [c[4], c[5], 0, 0])), 4));
    cg.instanceCount = C.length;
    const cm = new THREE.Mesh(cg, new THREE.ShaderMaterial({ uniforms: this.U, vertexShader: CROSS_V, fragmentShader: CROSS_F, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
    cm.frustumCulled = false; cm.renderOrder = 5; S.add(cm);
    // embers
    const ne = 2200, eg = new THREE.BufferGeometry(), ea = new Float32Array(ne * 4);
    for (let i = 0; i < ne * 4; i++) ea[i] = R();
    eg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ne * 3), 3)); eg.setAttribute('aR', new THREE.BufferAttribute(ea, 4));
    this.EU = { ...this.U, uPx: { value: 720 } };
    const em = new THREE.Points(eg, new THREE.ShaderMaterial({ uniforms: this.EU, vertexShader: EMB_V, fragmentShader: EMB_F, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    em.frustumCulled = false; em.renderOrder = 8; S.add(em);
    // smoke
    const ns = 46, sg = new THREE.InstancedBufferGeometry(), sq = new THREE.PlaneGeometry(1, 1), sa = [];
    for (let i = 0; i < ns; i++) sa.push((R() - 0.5) * 160, 8 + R() * 14, -20 - R() * 160, R());
    sg.index = sq.index; sg.setAttribute('position', sq.getAttribute('position')); sg.setAttribute('uv', sq.getAttribute('uv'));
    sg.setAttribute('aS', new THREE.InstancedBufferAttribute(new Float32Array(sa), 4)); sg.instanceCount = ns;
    this.smoke = new THREE.Mesh(sg, new THREE.ShaderMaterial({ uniforms: this.U, vertexShader: SMOKE_V, fragmentShader: SMOKE_F, transparent: true, depthWrite: false }));
    this.smoke.frustumCulled = false; this.smoke.renderOrder = 4; S.add(this.smoke);
    // RED: light pillar behind Unit-01 and its halo
    this.PU = { uA: { value: 1 }, uT: { value: 0 }, uPh: { value: 0 } };
    this.pillar = new THREE.Mesh(new THREE.PlaneGeometry(9, 400).translate(0, 200, 0), new THREE.ShaderMaterial({ uniforms: this.PU, vertexShader: FLAT_V, fragmentShader: PILLAR_F, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.pillar.position.set(0, 0, -95); this.pillar.renderOrder = 3; S.add(this.pillar);
    this.halo = new THREE.Mesh(new THREE.PlaneGeometry(14, 14 * 0.28), new THREE.ShaderMaterial({ uniforms: this.PU, vertexShader: FLAT_V, fragmentShader: HALO_F, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.halo.renderOrder = 7; S.add(this.halo);
    this.HU = { uA: { value: 0 }, uT: { value: 0 }, uPh: { value: 0 } };
    this.hex = new THREE.Mesh(new THREE.PlaneGeometry(9.5, 9.5), new THREE.ShaderMaterial({ uniforms: this.HU, vertexShader: FLAT_V, fragmentShader: HEX_F, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
    // v6: was 18 m across at z = -72, i.e. a wall the low fly-through filled the frame with. It is now a 9.5 m field
    // sitting between the two units at their own height.
    this.hex.position.set(0.5, 9, -73); this.hex.renderOrder = 6; S.add(this.hex);
    // the Evas
    const eva = (nm, h, rim) => { const e = I[nm]; if (!e) return null; const m = cutMat(e, { wind: 0, rim: 1 });
      m.uniforms.uRim.value.set(...rim, 1.4); m.depthWrite = true; const me = new THREE.Mesh(cutGeo(e, h), m); me.renderOrder = 2; S.add(me); return me; };
    this.e01 = eva('cut_e01', 34, [1.2, 0.2, 0.1]); this.e01f = eva('cut_e01', 19, [1.4, 0.6, 0.2]); this.e13 = eva('cut_e13', 20, [1.4, 0.3, 0.12]);
    if (this.e01f) { this.e01f.position.set(-7.5, 0, -72); this.e01f.rotation.y = 0.5; this.e01f.material.uniforms.uTint.value.set(0.6, 0.42, 0.36); }
    if (this.e13) { this.e13.position.set(8, 0, -74); this.e13.rotation.y = -0.5; this.e13.material.uniforms.uTint.value.set(0.45, 0.3, 0.34); }
    if (this.e01) { this.e01.position.set(0, 3, -73); this.e01.material.uniforms.uTint.value.set(0.3, 0.1, 0.11); }
  }
  resize(w, h) { super.resize(w, h); this.EU.uPx.value = h; }
  update(t) {
    const fire = t > MODE_T ? 1 : 0, U = this.U, K = audio.hitPulse('kick', t, 9), Hh = audio.hitPulse('hit', t, 6);
    U.uMode.value = fire; U.uT.value = t; this.PU.uT.value = t; this.HU.uT.value = t;
    applyCam(this.camera, CAM, t, fire ? 0.08 * K + 0.25 * Hh : 0.05 * Hh);
    this.sky.position.copy(this.camera.position);
    // RED: the retract wave rolls out from Unit-01; FIRE: the shockwave from the giant cross
    const tb = BEAT(voidK(102.67));
    U.uWave.value.set(fire ? 0 : Math.max(0, t - 34.5) * 16, fire ? Math.max(0, t - tb) * 55 : 0, fire ? smooth(tb, tb + 0.15, t) * Math.exp(-Math.max(0, t - tb) * 0.9) : 0);
    const rise = ease.inOut(range(t, 34.1, 38.4));
    if (this.e01) { this.e01.visible = !fire; this.e01.position.y = -4 + rise * 8; this.e01.material.uniforms.uT.value = t; }
    this.halo.visible = this.pillar.visible = !fire;
    if (this.e01) this.halo.position.set(0, this.e01.position.y + 35.5, -73);
    this.halo.quaternion.copy(this.camera.quaternion);
    this.PU.uA.value = smooth(34.1, 34.8, t) * (0.8 + 0.3 * K);
    [this.e01f, this.e13].forEach((m) => { if (m) { m.visible = !!fire; m.material.uniforms.uT.value = t; } });
    this.smoke.visible = !!fire;
    this.hex.visible = !!fire && t < 101;
    const ph = ((t - 98.38) / (2 * BT)) % 1; this.HU.uPh.value = ph < 0 ? ph + 1 : ph;
    // v6: the fly-through at 100.9 ends 30 m from the plane, so a fixed-size disc still swells to fill the frame.
    // Fade it out on proximity instead of relying on the radial term, which a plane camera can never see.
    const hd = this.camera.position.distanceTo(this.hex.position);
    this.HU.uA.value = (0.6 + 0.6 * K) * smooth(0.0, 1.0, clamp((hd - 22) / 26));
  }
  post(t) {
    const K = audio.hitPulse('kick', t, 10), Hh = audio.hitPulse('hit', t, 6);
    if (t < MODE_T) return { bloom: 0.75, bloomThr: 0.8, contrast: 1.1, sat: 1.1, exposure: 0.88 + 0.25 * Hh, vig: 0.65, grain: 0.07, ca: 0.4 + 2 * Hh,
      shake: 0.4 * Hh, rgb: 0.25 * Hh, tint: [1.04, 0.95, 0.96], dust: 0.15, dustCol: [1, 0.4, 0.3], fadeW: Math.exp(-Math.max(0, t - 34.17) * 7) * 0.4 };
    const tb = BEAT(voidK(102.67)), fl = t > tb ? Math.exp(-(t - tb) * 5) : 0;
    return { bloom: 0.6, bloomThr: 0.82, contrast: 1.16, sat: 1.05, exposure: 0.86 + 0.1 * K, vig: 0.65, grain: 0.07, ca: 0.4 + 0.6 * K, lift: [-0.02, -0.02, -0.01], shake: 0.5 * K + 0.8 * fl,
      tint: [1.0, 0.95, 0.94], dust: 0.12, dustCol: [1, 0.6, 0.3], fadeW: fl * 0.35 };
  }
}
/** beat index nearest to time t */
function voidK(t) { return Math.round((t - 1.952) / BT); }
