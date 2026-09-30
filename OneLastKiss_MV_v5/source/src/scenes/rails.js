// Rails (v5): the final chorus in the real world. Ube line, a summer afternoon, the Seto sea on one side, paddies on the other.
//   R1 166.14-170.67 "忘れられない人": low on the down track, running into the sun. The catenary portals pass one per beat
//        (spacing = speed x beat), an oncoming yellow commuter train blasts past on the next track.
//   R2 175.47-181.25 "oh...": at the level crossing. The lamps alternate on the beat, the barrier is down, the train
//        roars through right in front of us, then the camera cranes up the mast through the wires into the sun (-> helix).
// Toon shading everywhere (hard terminator, blue ambient) to sit with the cel-painted plates around it.
import * as THREE from 'three';
import { Scene } from './base.js';
import { NOISE } from '../core/glsl.js';
import { applyCam } from './camkeys.js';
import { smooth, rng, ease } from '../core/util.js';
import { audio, PERIOD } from '../core/audio.js';

const SUN = new THREE.Vector3(-0.5, 0.42, -0.76).normalize();
const V1 = 22, PITCH = V1 * PERIOD, CZ = -130, TX = 2, CAR = 20, NCAR = 4, VT = 30;
const R1 = [166.14, 170.67], R2 = [175.47, 181.25];
// train front z(t): R1 meets the camera at 168.72, R2 passes the crossing camera at 177.0
const trainZ = (t) => (t < 173 ? -56.8 + VT * (t - 168.72) : CZ + 4 + 32 * (t - 177.0));

const SKY = /* glsl */ `
uniform vec3 uSun; uniform float uT;
vec3 skyCol(vec3 d){ float h = max(d.y, 0.0);
  vec3 c = mix(vec3(0.42, 0.6, 0.86), vec3(0.025, 0.12, 0.5), pow(h, 0.38));
  float s = max(dot(d, uSun), 0.0);
  return c + vec3(1.0, 0.9, 0.7) * pow(s, 10.0) * 0.3 + vec3(1.0, 0.86, 0.6) * pow(s, 160.0) * 1.2; }
vec3 haze(vec3 c, vec3 w){ vec3 v = w - cameraPosition; float f = 1.0 - exp(-length(v) * 0.0017);
  vec3 d = normalize(v); d.y = max(d.y, 0.0) * 0.3; return mix(c, skyCol(normalize(d)) * 0.9, f * 0.85); }`;
const W_V = 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }';
const SKY_F = /* glsl */ `varying vec3 vW; ${NOISE} ${SKY}
void main(){ vec3 d = normalize(vW - cameraPosition); vec3 dh = normalize(vec3(d.x, max(d.y, 0.0), d.z)); vec3 c = skyCol(dh);
  float az = atan(d.x, -d.z);
  // towering cumulus on the horizon, lit on the sun side
  float top = 0.06 + 0.3 * pow(fbm(vec2(az * 2.0, 1.3)), 1.4) + 0.04 * fbm(vec2(az * 9.0, 3.0));
  float edge = (fbm(vec2(az * 16.0, d.y * 16.0)) - 0.5) * 0.05;
  float cu = smoothstep(top, top - 0.015, d.y + edge);
  float sh = fbm(vec2(az * 7.0, d.y * 10.0) + 5.0) + d.y / max(top, 0.01) * 0.35 + dot(d, uSun) * 0.3;
  vec3 cuC = mix(vec3(0.5, 0.58, 0.76), vec3(1.15, 1.12, 1.05), smoothstep(0.45, 0.75, sh));
  c = mix(c, cuC, cu);
  // scattered fair-weather clouds overhead, self-shadowed toward the sun
  vec2 q = d.xz / (d.y + 0.1) + vec2(uT * 0.012, 0.0);
  float n = fbm(q * 0.6), n2 = fbm(q * 0.6 - uSun.xz * 0.2);
  float cl = smoothstep(0.5, 0.6, n) * smoothstep(0.04, 0.16, d.y);
  c = mix(c, mix(vec3(0.5, 0.58, 0.74), vec3(1.12, 1.1, 1.05), clamp((n - n2) * 7.0 + 0.55, 0.0, 1.0)), cl);
  // mountains on the land side (+x), low islands at sea (-x)
  float land = smoothstep(-0.25, 0.3, d.x);
  float mh = (0.015 + 0.07 * fbm(vec2(az * 3.0, 7.0)) + 0.015 * fbm(vec2(az * 14.0, 1.0))) * land + 0.012 * smoothstep(0.55, 0.72, fbm(vec2(az * 7.0, 2.0))) * (1.0 - land);
  float mm = step(d.y, mh);
  vec3 mc = mix(vec3(0.3, 0.45, 0.55), vec3(0.2, 0.34, 0.36), smoothstep(0.0, 0.08, mh - d.y) * land);
  c = mix(c, mc, mm * step(-0.02, d.y));
  c += vec3(3.2, 2.9, 2.4) * smoothstep(0.99935, 0.99965, dot(d, uSun));
  gl_FragColor = vec4(c, 1.0); }`;
const SEA_F = /* glsl */ `varying vec3 vW; ${NOISE} ${SKY}
void main(){ vec3 V = normalize(vW - cameraPosition); vec2 q = vW.xz * 0.3 + uT * vec2(0.25, 0.12);
  float h0 = vnoise(q) + 0.5 * vnoise(q * 2.7 + 3.0), hx = vnoise(q + vec2(0.2, 0.0)) + 0.5 * vnoise((q + vec2(0.2, 0.0)) * 2.7 + 3.0), hz = vnoise(q + vec2(0.0, 0.2)) + 0.5 * vnoise((q + vec2(0.0, 0.2)) * 2.7 + 3.0);
  float fade = exp(-length(vW - cameraPosition) * 0.004);
  vec3 N = normalize(vec3((h0 - hx) * 1.6 * fade, 1.0, (h0 - hz) * 1.6 * fade));
  vec3 R = reflect(V, N); R.y = abs(R.y);
  float fr = 0.03 + 0.97 * pow(1.0 - max(dot(-V, N), 0.0), 5.0);
  vec3 c = mix(vec3(0.015, 0.12, 0.25), skyCol(R), fr);
  float sp = pow(max(dot(R, uSun), 0.0), 350.0), gl = step(0.6, hash12(floor(vW.xz * 3.0) + floor(uT * 9.0)));
  c += vec3(4.0, 3.5, 2.8) * sp * (0.4 + gl);
  gl_FragColor = vec4(haze(c, vW), 1.0); }`;
const GND_F = /* glsl */ `varying vec3 vW; uniform float uCZ; ${NOISE} ${SKY}
void main(){ vec2 q = vW.xz; float x = q.x, fd = smoothstep(8.0, 40.0, length(vW - cameraPosition));
  vec3 grass = mix(vec3(0.08, 0.26, 0.04), vec3(0.22, 0.42, 0.06), vnoise(q * 0.12)) * (0.85 + 0.3 * mix(vnoise(q * 1.7), 0.5, fd));
  vec2 pc = floor(q / vec2(16.0, 11.0)), pf = fract(q / vec2(16.0, 11.0));
  float dyke = max(step(pf.x, 0.035), step(pf.y, 0.05)) * (1.0 - fd * 0.7);
  float wave = sin(q.x * 0.22 - uT * 2.4 + sin(q.y * 0.11) * 2.0) * 0.5 + 0.5;
  vec3 paddy = mix(vec3(0.2, 0.46, 0.07), vec3(0.46, 0.66, 0.16), wave * 0.55 + hash12(pc) * 0.3);
  paddy = mix(paddy, vec3(0.32, 0.3, 0.2), dyke * 0.6);
  vec3 c = mix(grass, paddy, step(15.0, x));
  c = mix(c, vec3(0.16, 0.16, 0.18), step(abs(x - 11.5), 2.4));                         // road beside the line
  vec3 gv = mix(vec3(0.17, 0.16, 0.15), vec3(0.36, 0.33, 0.3), mix(hash12(floor(q * 9.0)), 0.5, fd));
  c = mix(c, gv, smoothstep(4.8, 4.3, abs(x)));                                          // ballast
  float cr = step(abs(q.y - uCZ), 3.6);
  c = mix(c, vec3(0.15, 0.15, 0.17), cr);
  c = mix(c, vec3(0.85, 0.82, 0.72), cr * step(abs(abs(q.y - uCZ) - 3.3), 0.1) * step(4.5, abs(x)));
  c = mix(c, vec3(0.85, 0.72, 0.1), cr * step(abs(abs(q.y - uCZ) - 3.3), 0.1) * step(abs(x), 4.5));
  c *= vec3(1.12, 1.06, 0.96);
  gl_FragColor = vec4(haze(c, vW), 1.0); }`;
// generic toon material. KIND 0 plain (instance colour), 1 train car, 2 yellow/black stripes, 3 rail steel
const TOON_V = /* glsl */ `varying vec3 vW, vN, vC, vO;
void main(){ vec4 p = vec4(position, 1.0); vec3 n = normal; vC = vec3(1.0); vO = position;
#ifdef USE_INSTANCING
  p = instanceMatrix * p; n = mat3(instanceMatrix) * n;
#endif
#ifdef USE_INSTANCING_COLOR
  vC = instanceColor;
#endif
  vec4 w = modelMatrix * p; vW = w.xyz; vN = normalize(mat3(modelMatrix) * n); gl_Position = projectionMatrix * viewMatrix * w; }`;
const TOON_F = /* glsl */ `varying vec3 vW, vN, vC, vO; uniform vec3 uCol; uniform float uLamp; ${NOISE} ${SKY}
void main(){ vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); vec3 base = uCol * vC, em = vec3(0.0); float gloss = 0.0;
#if KIND == 1
  if (N.y > 0.5) base = vec3(0.34, 0.35, 0.37);
  else if (abs(N.z) > 0.5) {
    float win = step(2.55, vO.y) * step(vO.y, 3.75) * step(abs(vO.x), 1.2);
    base = mix(base, vec3(0.03, 0.05, 0.07), win); gloss = win;
    em += vec3(3.2, 2.9, 2.3) * smoothstep(0.26, 0.16, length(vec2(abs(vO.x) - 0.95, vO.y - 1.75))) * uLamp * step(0.0, N.z);
  } else {
    float z = fract(vO.z / 4.85 + 0.5), door = step(abs(z - 0.5), 0.12);
    float win = step(2.4, vO.y) * step(vO.y, 3.5) * (1.0 - door);
    base = mix(base, vec3(0.035, 0.05, 0.07), win); gloss = win;
    base = mix(base, vec3(0.25, 0.22, 0.12), door * step(abs(abs(z - 0.5) - 0.12), 0.012));
    base = mix(base, vec3(0.03, 0.05, 0.07), door * step(2.2, vO.y) * step(vO.y, 3.4) * step(abs(z - 0.5), 0.07));
  }
#elif KIND == 2
  base = mix(vec3(0.95, 0.75, 0.05), vec3(0.03, 0.03, 0.03), step(0.5, fract((vW.y + vW.z + vW.x) * 2.2)));
#elif KIND == 3
  gloss = step(0.5, N.y) * 0.8;
#endif
  float lit = smoothstep(0.0, 0.07, dot(N, uSun));
  vec3 c = base * (vec3(0.28, 0.36, 0.54) * (0.6 + 0.4 * N.y) + vec3(1.3, 1.15, 0.95) * lit * 1.0) + em;
  c += vec3(1.0, 0.95, 0.85) * pow(1.0 - max(dot(N, V), 0.0), 5.0) * 0.12;
  if (gloss > 0.0) { vec3 R = reflect(-V, N); c += skyCol(normalize(vec3(R.x, abs(R.y), R.z))) * gloss * (0.2 + 0.5 * pow(1.0 - max(dot(N, V), 0.0), 3.0)); }
  gl_FragColor = vec4(haze(c, vW), 1.0); }`;
const LAMP_F = /* glsl */ `uniform float uOn; varying vec2 vUv;
void main(){ float r = length(vUv - 0.5) * 2.0; float core = smoothstep(0.2, 0.16, r), g = exp(-r * 3.2);
  vec3 c = vec3(3.0, 0.25, 0.1) * (core * (0.15 + 1.3 * uOn) + g * 0.9 * uOn);
  if (max(core, g * uOn) < 0.01) discard; gl_FragColor = vec4(c, 1.0); }`;
const FLAT_V = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }';

const K1 = [[R1[0], -2, 1.7, 0, 0.6, 2.5, -40, 56, 0.03], [R1[1] + 0.05, -2, 1.9, -V1 * (R1[1] + 0.05 - R1[0]), 0.9, 2.9, -V1 * (R1[1] - R1[0]) - 40, 54, -0.01]];
const K2 = [
  [R2[0], 8.2, 1.2, CZ + 7, 1.5, 2.4, CZ - 40, 46, 0.0], [176.9, 7.9, 1.25, CZ + 6.2, 1.0, 2.3, CZ - 40, 44, 0.01],
  [179.4, 7.4, 1.4, CZ + 5.6, 0.6, 2.8, CZ - 40, 42, -0.01], [181.3, 5.5, 11.5, CZ + 11, -14, 21, CZ - 40, 62, -0.08],
];

export class Rails extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 50, near: 0.1, far: 3000 });
    const S = this.scene, R = rng(606);
    this.U = { uSun: { value: SUN }, uT: { value: 0 }, uCZ: { value: CZ } };
    const toon = (col, kind = 0, lamp = 0) => new THREE.ShaderMaterial({ uniforms: { ...this.U, uCol: { value: new THREE.Color(...col) }, uLamp: { value: lamp } }, vertexShader: TOON_V, fragmentShader: TOON_F, defines: { KIND: kind } });
    const sky = new THREE.Mesh(new THREE.SphereGeometry(1500, 48, 24), new THREE.ShaderMaterial({ uniforms: this.U, vertexShader: W_V, fragmentShader: SKY_F, side: THREE.BackSide, depthWrite: false }));
    sky.renderOrder = -10; this.sky = sky; S.add(sky);
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2400).rotateX(-Math.PI / 2), new THREE.ShaderMaterial({ uniforms: this.U, vertexShader: W_V, fragmentShader: SEA_F }));
    sea.position.set(-714, -3.5, -300); S.add(sea);
    const gnd = new THREE.Mesh(new THREE.PlaneGeometry(1400, 2400).rotateX(-Math.PI / 2), new THREE.ShaderMaterial({ uniforms: this.U, vertexShader: W_V, fragmentShader: GND_F }));
    gnd.position.set(686, 0, -300); S.add(gnd);
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(2400, 3.5).rotateY(-Math.PI / 2), toon([0.55, 0.54, 0.5]));
    wall.position.set(-14, -1.75, -300); S.add(wall);
    // static box instances: sleepers, portals, wires, poles, houses; one InstancedMesh with colours
    const M = [], C = [], o = new THREE.Object3D();
    const box = (x, y, z, sx, sy, sz, col, rx = 0, rz = 0) => { o.position.set(x, y, z); o.rotation.set(rx, 0, rz); o.scale.set(sx, sy, sz); o.updateMatrix(); M.push(o.matrix.clone()); C.push(col); };
    const grey = [0.5, 0.5, 0.47], wire = [0.07, 0.07, 0.08];
    for (const tx of [-TX, TX]) for (let z = -700; z < 260; z += 0.62) box(tx, 0.08, z, 2.3, 0.14, 0.24, [0.36, 0.33, 0.3]);
    const sag = (x, y, z0, z1, s, col, n = 4, th = 0.04) => { for (let k = 0; k < n; k++) {
      const a = k / n, b = (k + 1) / n, ya = y - s * 4 * a * (1 - a), yb = y - s * 4 * b * (1 - b), za = z0 + (z1 - z0) * a, zb = z0 + (z1 - z0) * b;
      const len = Math.hypot(zb - za, yb - ya); box(x, (ya + yb) / 2, (za + zb) / 2, th, th, len, col, Math.atan2(-(yb - ya), zb - za)); } };
    for (let z = -700; z < 260; z += PITCH) {
      for (const sx of [-4.9, 4.9]) box(sx, 3.8, z, 0.32, 7.6, 0.32, grey);
      box(0, 7.35, z, 10.2, 0.26, 0.26, grey); box(0, 6.6, z, 10.2, 0.1, 0.1, grey);
      for (const tx of [-TX, TX]) { box(tx, 6.95, z, 0.08, 0.7, 0.08, wire); sag(tx, 7.1, z, z + PITCH, 0.35, wire); sag(tx, 5.9, z, z + PITCH, 0.03, wire, 1, 0.035); }
    }
    for (let z = -700; z < 260; z += 28) {                                          // telephone poles along the road
      box(14.3, 5, z, 0.3, 10, 0.3, [0.5, 0.48, 0.44]); box(14.3, 9.2, z, 2.2, 0.14, 0.14, [0.4, 0.38, 0.35]);
      for (const dx of [-0.9, 0, 0.9]) sag(14.3 + dx, 9.3, z, z + 28, 0.7, wire, 4, 0.035);
    }
    for (let i = 0; i < 150; i++) {                                                   // houses among the paddies
      const x = 20 + Math.pow(R(), 1.4) * 170, z = -650 + R() * 850, w = 5 + R() * 5, d = 6 + R() * 5, h = 3 + R() * 3.5, ry = (R() - 0.5) * 0.3;
      if (Math.abs(z - CZ) < 8) continue;
      const wc = R() < 0.7 ? [0.82, 0.78, 0.7] : [0.55, 0.5, 0.45], rc = R() < 0.6 ? [0.18, 0.22, 0.3] : [0.55, 0.28, 0.18];
      box(x, h / 2, z, w, h, d, wc); o.rotation.set(0, 0, 0);
      o.position.set(x, h, z); o.rotation.set(0, ry, Math.PI / 4); o.scale.set(w * 0.72, w * 0.72, d * 1.05); o.updateMatrix(); M.push(o.matrix.clone()); C.push(rc);
    }
    for (const tx of [-TX, TX]) for (const rx of [-0.72, 0.72]) box(tx + rx, 0.3, -220, 0.14, 0.18, 960, [0.42, 0.38, 0.36]);
    const inst = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), toon([1, 1, 1]), M.length);
    M.forEach((m, i) => { inst.setMatrixAt(i, m); inst.setColorAt(i, new THREE.Color(...C[i])); });
    inst.frustumCulled = false; S.add(inst);
    // greenery: bushes along the line, trees, and a few giant hills (toon blobs)
    const G = [], GC = [];
    const blob = (x, y, z, sx, sy, sz, col) => { o.position.set(x, y, z); o.rotation.set(0, R() * 6, 0); o.scale.set(sx, sy, sz); o.updateMatrix(); G.push(o.matrix.clone()); GC.push(col); };
    for (let i = 0; i < 260; i++) { const z = -700 + R() * 950, x = R() < 0.5 ? 6.5 + R() * 3 : 16 + R() * 150; if (Math.abs(z - CZ) < 9) continue; const s = 1 + R() * 2.4; blob(x, s * 0.6, z, s, s * 1.1, s, [0.16 + R() * 0.1, 0.36 + R() * 0.12, 0.08]); }
    for (let i = 0; i < 8; i++) blob(180 + R() * 200, -10, -700 + i * 120 + R() * 60, 60 + R() * 60, 26 + R() * 30, 60 + R() * 50, [0.14, 0.3, 0.1]);
    const gm = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 2), toon([1, 1, 1]), G.length);
    G.forEach((m, i) => { gm.setMatrixAt(i, m); gm.setColorAt(i, new THREE.Color(...GC[i])); });
    gm.frustumCulled = false; S.add(gm);
    // the level crossing: striped posts, crossbucks, lowered barriers, alternating lamps
    const stripe = toon([1, 1, 1], 2), dark = toon([0.1, 0.1, 0.1]);
    this.lamps = [];
    const LU = [{ uOn: { value: 0 } }, { uOn: { value: 0 } }];
    const lampMat = LU.map((u) => new THREE.ShaderMaterial({ uniforms: u, vertexShader: FLAT_V, fragmentShader: LAMP_F, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.LU = LU;
    for (const [px, pz, dir] of [[5.6, CZ - 4, 1], [-5.6, CZ + 4, -1]]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.22, 4.2, 0.22), stripe); post.position.set(px, 2.1, pz); S.add(post);
      for (const r of [0.6, -0.6]) { const cb = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.2, 1.6), stripe); cb.position.set(px, 3.75, pz); cb.rotation.x = r; S.add(cb); }
      const hood = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 1.3), dark); hood.position.set(px, 2.9, pz); S.add(hood);
      [-0.38, 0.38].forEach((dz, i) => { const l = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), lampMat[i]); l.position.set(px + 0.07 * Math.sign(px), 2.9, pz + dz); l.renderOrder = 5; S.add(l); this.lamps.push(l); });
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 7.4), stripe); arm.position.set(px, 1.05, pz + dir * 3.7); S.add(arm);
      const bx = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.0, 0.5), toon([0.8, 0.78, 0.7])); bx.position.set(px + 0.45 * Math.sign(px), 0.5, pz); S.add(bx);
    }
    // the train (yellow 105-series style commuter), front at +z
    this.train = new THREE.Group();
    const carG = new THREE.BoxGeometry(2.9, 3.5, CAR - 0.6).translate(0, 2.65, 0);
    const body = toon([0.95, 0.72, 0.08], 1), lead = toon([0.95, 0.72, 0.08], 1, 1), under = toon([0.08, 0.08, 0.09]);
    for (let i = 0; i < NCAR; i++) {
      const c = new THREE.Mesh(carG, i ? body : lead); c.position.z = -CAR / 2 - i * CAR; this.train.add(c);
      const u = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.7, CAR - 3), under); u.position.set(0, 0.6, c.position.z); this.train.add(u);
      const pg = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.06, 0.06), under); pg.position.set(0, 5.9, c.position.z + 5); this.train.add(pg);
    }
    this.train.position.x = TX; S.add(this.train);
  }
  update(t) {
    this.U.uT.value = t;
    const inR1 = t < 173, tz = trainZ(t);
    this.train.position.z = tz;
    const c = this.camera; applyCam(c, inR1 ? K1 : K2, t, 0, inR1 ? (u) => u : ease.inOut);
    // shake while the train is alongside
    const cz = c.position.z, along = smooth(-2, 2, tz - cz) * smooth(-NCAR * CAR - 2, -NCAR * CAR + 2, cz - tz);
    this.near = along;
    c.position.x += Math.sin(t * 83) * 0.04 * along; c.position.y += Math.sin(t * 97 + 2) * 0.05 * along;
    this.sky.position.copy(c.position);
    const k = Math.floor((t - 1.952) / PERIOD) % 2, blink = true;
    this.LU[0].uOn.value = blink && k === 0 ? 1 : 0; this.LU[1].uOn.value = blink && k === 1 ? 1 : 0;
    this.lamps.forEach((l) => l.quaternion.copy(c.quaternion));
  }
  post(t) {
    const K = audio.hitPulse('kick', t, 10), n = this.near || 0, crane = smooth(179.3, 181.2, t);
    return { exposure: 0.95 + 0.04 * K, bloom: 0.22 + crane * 0.6, bloomThr: 0.88 - crane * 0.08, sat: 1.18, contrast: 1.14, vig: 0.5, grain: 0.05, ca: 0.4 + n * 1.0, lift: [-0.015, -0.01, 0],
      dust: 0.06, dustCol: [1, 0.95, 0.8], shake: n * 0.25 + K * 0.1, leak: 0.08 + crane * 0.25, fadeW: smooth(180.85, 181.25, t) * 0.75 };
  }
}
