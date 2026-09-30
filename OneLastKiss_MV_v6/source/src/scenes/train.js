// Train (v2) 91.35-93.57 "まあ そんなのお互い様か" / 95.57-98.19 "即ち傷つくことだった": the empty sunset commuter car
// of Shinji's inner world. A 3D car interior; the low sun pours through the left windows and the telephone poles
// flick shadows across it on the beat (pole pitch = train speed * beat). Shinji and Gendo sit on opposite benches;
// when the car returns Gendo's seat is empty. On 97.09 the pane in front of Shinji cracks and bursts inward, on
// 97.61 every window on the sun side follows in a wave, and the shards hang in the light shafts (-> fire, shatter).
import * as THREE from 'three';
import { Scene } from './base.js';
import { NOISE } from '../core/glsl.js';
import { applyCam } from './camkeys.js';
import { cutMat, cutGeo } from '../core/images.js';
import { smooth, clamp, rng } from '../core/util.js';
import { audio, PERIOD } from '../core/audio.js';

const SPD = 18, PITCH = SPD * PERIOD, HW = 1.4, WIN = { y0: 1.05, y1: 1.95 }, NP = 12, P0 = 1.0, DZ = 1.6; // panes at z = P0 - i*DZ
const SUN = new THREE.Vector3(1, -0.8, -0.35).normalize();                   // light travels +x (enters from the left wall)
const SHOT1 = 97.09, SHOT2 = 97.61, FOCUS = 5;                                 // pane that breaks first (in front of Shinji)
const SUNF = /* glsl */ `
uniform vec3 uSun; uniform float uS, uPitch, uBreak;
float sunAt(vec3 p){                                   // 0..1 sun reaching p through the left windows
  float k = (p.x + ${HW.toFixed(2)}) / uSun.x; vec3 w = p - uSun * k;           // hit on the left wall plane (x = -HW)
  if (k < 0.0) return 0.0;
  float z = w.z - ${P0.toFixed(2)} + ${(DZ / 2).toFixed(2)}, cell = fract(z / ${DZ.toFixed(2)} + 0.5);
  float win = smoothstep(0.08, 0.14, cell) * smoothstep(0.92, 0.86, cell) * smoothstep(${WIN.y0.toFixed(2)}, ${(WIN.y0 + 0.05).toFixed(2)}, w.y) * smoothstep(${WIN.y1.toFixed(2)}, ${(WIN.y1 - 0.05).toFixed(2)}, w.y);
  win *= step(-18.0, w.z) * step(w.z, 1.9);
  float oz = w.z + uS + p.x * 0.0;                                             // scenery coordinate along the track
  float pole = smoothstep(0.02, 0.14, abs(fract(oz / uPitch) - 0.5) * uPitch * 0.5 - 0.05);
  float tree = mix(1.0, smoothstep(0.35, 0.7, vnoise(vec2(oz * 0.35, w.y * 1.5))), step(0.55, vnoise(vec2(oz * 0.05, 3.0))));
  return win * mix(pole * tree, 1.0, uBreak * 0.4);
}`;
const IN_V = 'varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }';
const IN_F = /* glsl */ `uniform vec3 uCol; uniform float uSpec, uGrain, uAmb; varying vec3 vW, vN; ${NOISE} ${SUNF}
void main(){ vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float s = sunAt(vW) * max(dot(N, -uSun), 0.0);
  vec3 amb = mix(vec3(0.07, 0.045, 0.07), vec3(0.17, 0.09, 0.08), N.y * 0.5 + 0.5) * uAmb;
  amb += vec3(0.25, 0.12, 0.2) * smoothstep(0.5, -1.0, N.x) * 0.3;             // dusk glow from the right windows
  vec3 c = uCol * (amb + vec3(2.4, 1.2, 0.5) * s);
  float ax = abs(vW.x), ao = 1.0;
  if (N.y > 0.5) ao = mix(0.45, 1.0, smoothstep(${HW.toFixed(2)} - 0.05, ${(HW - 0.7).toFixed(2)}, ax)) * (1.0 - 0.25 * smoothstep(0.02, 0.0, abs(ax - 0.35)));
  if (N.y < -0.5) ao = mix(0.55, 1.0, smoothstep(${HW.toFixed(2)}, ${(HW - 0.5).toFixed(2)}, ax));
  if (abs(N.x) > 0.5) { ao = mix(0.6, 1.0, smoothstep(0.0, 0.5, vW.y)) * mix(0.7, 1.0, smoothstep(2.3, 2.1, vW.y));
    ao *= 1.0 - 0.3 * smoothstep(0.012, 0.0, abs(fract(vW.y * 2.5) - 0.5) - 0.48); }
  c *= ao;
  c += vec3(1.6, 0.9, 0.5) * uSpec * pow(max(dot(reflect(uSun, N), V), 0.0), 30.0) * sunAt(vW + N * 0.02);
  c *= 1.0 + uGrain * (vnoise(vW.xz * 90.0 + vW.y * 40.0) - 0.5);
  gl_FragColor = vec4(c, 1.0); }`;
const RAY_F = /* glsl */ `uniform float uT; varying vec3 vW, vN; ${NOISE} ${SUNF}
void main(){ vec3 ro = cameraPosition, rd = normalize(vW - ro); float L = min(length(vW - ro), 14.0);
  float j = hash12(gl_FragCoord.xy + uT), acc = 0.0;
  for (int i = 0; i < 28; i++) { vec3 p = ro + rd * L * (float(i) + j) / 28.0; if (p.y < 0.0 || p.y > 2.3 || abs(p.x) > ${HW.toFixed(2)}) continue;
    acc += sunAt(p) * (0.6 + 0.4 * vnoise3(p * 3.0 + vec3(0.0, uT * 0.2, uT * 0.4))); }
  acc *= L / 28.0; gl_FragColor = vec4(vec3(1.0, 0.62, 0.32) * acc * 0.05, 1.0); }`;
const OUT_F = /* glsl */ `uniform float uS, uSide, uPitch; varying vec3 vW, vN; ${NOISE}
void main(){ float z = vW.z, y = vW.y; vec3 c;
  if (uSide < 0.0) { c = mix(vec3(0.95, 0.5, 0.22), vec3(0.42, 0.16, 0.26), smoothstep(0.9, 3.0, y)) * 0.8;
    c += vec3(0.9, 0.45, 0.25) * smoothstep(0.55, 0.8, fbm(vec2(z * 0.08 + uS * 0.004, y * 1.8))) * smoothstep(1.6, 2.6, y) * 0.5;  // lit clouds
    c += vec3(1.6, 0.9, 0.5) * exp(-length(vec2(z - 2.0, y - 1.7) * vec2(0.18, 0.5)) * 2.4) * 0.9;           // low sun
  } else c = mix(vec3(0.5, 0.24, 0.3), vec3(0.08, 0.06, 0.16), smoothstep(0.9, 2.6, y));
  float fz = (z + uS * 0.05) * 0.4, far = 0.9 + 0.35 * fbm(vec2(fz, 1.0));                                        // far hills
  c = mix(c, uSide < 0.0 ? vec3(0.42, 0.16, 0.14) : vec3(0.1, 0.06, 0.1), step(y, far) * 0.85);
  float mz = (z + uS * 0.4) * 0.9, bld = 0.75 + 0.4 * step(0.5, vnoise(vec2(floor(mz), 2.0))) * vnoise(vec2(floor(mz * 2.0), 5.0));
  c = mix(c, uSide < 0.0 ? vec3(0.18, 0.06, 0.07) : vec3(0.05, 0.03, 0.06), step(y, bld));
  float pz = z + uS, pole = step(abs(fract(pz / uPitch) - 0.5) * uPitch, 0.07) * step(y, 3.0);
  float d = fract(pz / uPitch) - 0.5, wire = step(abs(y - (2.45 - 0.12 * (1.0 - 4.0 * d * d))), 0.012);
  c = mix(c, vec3(0.03, 0.01, 0.02), max(pole, wire));
  gl_FragColor = vec4(c, 1.0); }`;
const PANE_F = /* glsl */ `uniform float uCrack, uSide, uT; varying vec3 vW, vN; varying vec2 vUv; ${NOISE}
void main(){ vec2 q = (vUv - vec2(0.45, 0.4)) * vec2(1.4, 1.0); float r = length(q), a = atan(q.y, q.x);
  float rad = smoothstep(0.03, 0.0, abs(fract(a * 2.2 + vnoise(vec2(r * 6.0, a)) * 0.6) - 0.5) * r * 3.0);
  float ring = smoothstep(0.02, 0.0, abs(fract(r * 7.0 + vnoise(vec2(a * 3.0, 1.0)) * 0.5) - 0.5) * 0.3) * step(r, 0.45);
  float crack = (rad + ring * 0.6) * step(r, uCrack * 0.9);
  float streak = 0.03 * smoothstep(0.3, 0.9, vnoise(vec2(vUv.x * 3.0 + vUv.y * 2.0, uT * 0.5)));
  vec3 c = vec3(1.0, 0.85, 0.7) * (crack * 1.2 + streak); gl_FragColor = vec4(c, 0.04 + crack * 0.6 + streak); }`;
const SH_V = `attribute vec4 aS; attribute vec3 aV, aR; uniform float uT; varying vec3 vN, vW; varying float vA;
mat3 rot(vec3 a){ vec3 c = cos(a), s = sin(a); return mat3(c.y*c.z, c.y*s.z, -s.y, s.x*s.y*c.z - c.x*s.z, s.x*s.y*s.z + c.x*c.z, s.x*c.y, c.x*s.y*c.z + s.x*s.z, c.x*s.y*s.z - s.x*c.z, c.x*c.y); }
void main(){ float u = uT - aS.w; vA = step(0.0, u); u = max(u, 0.0); float sl = u < 0.25 ? u : 0.25 + (u - 0.25) * 0.22;  // bullet-time after the burst
  mat3 R = rot(aR * sl * 3.0); vec3 p = aS.xyz + aV * sl + vec3(0.0, -1.2, 0.0) * sl * sl; vN = R * normal;
  vec4 w = vec4(p + R * position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w * vA; }`;
const SH_F = /* glsl */ `varying vec3 vN, vW; varying float vA; ${NOISE} ${SUNF}
void main(){ if (vA < 0.5) discard; vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float g = pow(abs(dot(reflect(uSun, N), V)), 12.0), f = pow(1.0 - abs(dot(N, V)), 3.0), s = 0.25 + sunAt(vW);
  gl_FragColor = vec4(vec3(1.6, 1.0, 0.6) * (g * 2.5 + f * 0.5 + 0.08) * s, 1.0); }`;
const CAM = [
  [91.2, 0.35, 1.45, 1.95, -0.1, 1.05, -6, 38, 0.0], [92.08, 0.3, 1.4, 1.2, -0.1, 1.05, -6, 38, 0.01],
  [92.11, -0.55, 1.1, -3.2, 0.9, 0.95, -4.3, 30, -0.02], [93.6, -0.5, 1.12, -3.35, 0.9, 0.97, -4.3, 28, -0.02],
  [95.5, 0.8, 1.6, 1.95, -0.3, 1.0, -8, 40, 0.03], [96.9, 0.7, 1.5, 0.9, -0.3, 1.0, -8, 38, 0.03],
  [96.92, 0.55, 1.4, -5.3, -1.4, 1.45, -7.0, 34, -0.04], [97.58, 0.45, 1.38, -5.45, -1.4, 1.45, -7.0, 32, -0.04],
  [97.61, 1.1, 2.15, 1.9, -0.6, 0.9, -9, 50, 0.06], [98.3, 1.0, 2.05, 1.2, -0.6, 0.9, -9, 48, 0.06],
];

export class Train extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 38, near: 0.03, far: 80 });
    const S = this.scene, R = rng(91), I = ctx.img;
    this.clear.set(0x100608);
    this.SU = { uSun: { value: SUN }, uS: { value: 0 }, uPitch: { value: PITCH }, uBreak: { value: 0 } };
    const mk = (col, o = {}) => new THREE.ShaderMaterial({ uniforms: { ...this.SU, uCol: { value: new THREE.Color(col) }, uSpec: { value: o.spec ?? 0 }, uGrain: { value: o.grain ?? 0.08 }, uAmb: { value: o.amb ?? 1 } },
      vertexShader: IN_V, fragmentShader: IN_F, side: o.side ?? THREE.FrontSide });
    const box = (w, h, d, x, y, z, m) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); S.add(b); return b; };
    const L = 22, ZC = -8, wall = mk(0xcfc2a8), dark = mk(0x6d5b4a), seat = mk(0x3f7a5e, { grain: 0.5 }), metal = mk(0x9a9aa2, { spec: 1.4 }), floor = mk(0x5a463a, { spec: 0.25, grain: 0.25 });
    box(2 * HW, 0.02, L, 0, -0.01, ZC, floor);
    box(2 * HW, 0.02, L, 0, 2.31, ZC, mk(0xe8e0d0, { amb: 1.3 }));
    for (const sx of [-1, 1]) {
      const x = sx * (HW + 0.03);
      box(0.06, WIN.y0, L, x, WIN.y0 / 2, ZC, wall); box(0.06, 2.3 - WIN.y1, L, x, (2.3 + WIN.y1) / 2, ZC, wall);
      for (let i = -1; i <= NP; i++) box(0.07, WIN.y1 - WIN.y0, DZ * 0.2, x, (WIN.y0 + WIN.y1) / 2, P0 - i * DZ + DZ / 2, wall);
      box(0.5, 0.1, L - 1, sx * (HW - 0.27), 0.42, ZC, seat); box(0.1, 0.45, L - 1, sx * (HW - 0.04), 0.66, ZC, seat);   // bench + backrest
      box(0.45, 0.36, L - 1, sx * (HW - 0.3), 0.18, ZC, dark);
      box(0.35, 0.02, L - 1, sx * (HW - 0.2), 2.02, ZC, metal);                                                         // luggage rack
      const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, L, 8), metal); rail.rotation.x = Math.PI / 2; rail.position.set(sx * 0.62, 2.12, ZC); S.add(rail);
      const out = new THREE.Mesh(new THREE.PlaneGeometry(60, 5), new THREE.ShaderMaterial({ uniforms: { ...this.SU, uSide: { value: sx } }, vertexShader: IN_V, fragmentShader: OUT_F }));
      out.position.set(sx * (HW + 1.2), 1.5, ZC); out.rotation.y = sx * -Math.PI / 2; S.add(out);
    }
    const frame = mk(0x5c5c62, { spec: 0.8 });
    const adCols = [0xd9a86c, 0x7fa7c9, 0xc97f7f, 0x9cc28a, 0xe0d7c0, 0xb89ac9];
    for (const sx of [-1, 1]) {
      const x = sx * (HW - 0.01);
      box(0.1, 0.05, L, x, WIN.y0 + 0.01, ZC, frame); box(0.05, 0.035, L, x, WIN.y1 - 0.01, ZC, frame);                 // sill + head rails
      for (let i = -1; i <= NP; i++) box(0.05, WIN.y1 - WIN.y0, 0.035, x, (WIN.y0 + WIN.y1) / 2, P0 - i * DZ + DZ * 0.41, frame);
      for (let i = 0; i < NP; i++) { if (R() < 0.3) continue;                                                              // hanging ad cards
        const ad = box(0.012, 0.2, 0.5, x - sx * 0.02, 2.13, P0 - i * DZ + (R() - 0.5) * 0.4, mk(adCols[Math.floor(R() * adCols.length)], { amb: 1.4, grain: 0.3 })); ad.rotation.z = sx * 0.12; }
    }
    for (const z of [2.2, ZC - L / 2 + 0.3]) { box(2 * HW, 2.3, 0.08, 0, 1.15, z, wall); }
    for (let i = 0; i < 6; i++) box(0.5, 0.015, 1.4, 0, 2.29, 1 - i * 3.2, mk(0xfff4e0, { amb: 2.6, grain: 0 }));
    for (const z of [-1.5, -9.5, -17.5]) for (const sx of [-1, 1]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 2.3, 8), metal); p.position.set(sx * 0.95, 1.15, z); S.add(p); }
    // hanging straps
    const ns = 2 * 22; this.straps = new THREE.InstancedMesh(new THREE.BoxGeometry(0.03, 0.26, 0.008).translate(0, -0.13, 0), dark, ns);
    this.rings = new THREE.InstancedMesh(new THREE.TorusGeometry(0.06, 0.009, 6, 20), mk(0xefe8d8), ns);
    this.sp = []; for (let i = 0; i < ns; i++) this.sp.push([(i % 2 ? 1 : -1) * 0.62, 1.5 - Math.floor(i / 2) * 0.5, R() * 6]);
    S.add(this.straps, this.rings);
    // windows: glass panes (one per window, left side can crack), volumetric sun
    this.panes = [];
    for (const sx of [-1, 1]) for (let i = 0; i < NP; i++) {
      const u = { uCrack: { value: 0 }, uSide: { value: sx }, uT: { value: 0 } };
      const m = new THREE.Mesh(new THREE.PlaneGeometry(DZ * 0.8, WIN.y1 - WIN.y0), new THREE.ShaderMaterial({ uniforms: u, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        vertexShader: 'varying vec3 vW, vN; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normal; gl_Position = projectionMatrix * viewMatrix * w; }', fragmentShader: PANE_F }));
      m.position.set(sx * HW, (WIN.y0 + WIN.y1) / 2, P0 - i * DZ); m.rotation.y = sx * -Math.PI / 2; S.add(m);
      if (sx < 0) this.panes.push({ u, m, at: i === FOCUS ? SHOT1 : SHOT2 + Math.abs(i - FOCUS) * 0.045 });
    }
    this.RU = { ...this.SU, uT: { value: 0 } };
    const ray = new THREE.Mesh(new THREE.BoxGeometry(2 * HW - 0.02, 2.3, L), new THREE.ShaderMaterial({ uniforms: this.RU, vertexShader: IN_V, fragmentShader: RAY_F, side: THREE.BackSide, transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending }));
    ray.position.set(0, 1.15, ZC); ray.renderOrder = 20; S.add(ray);
    // shards
    const n = 1500, g = new THREE.InstancedBufferGeometry(), tri = new THREE.BufferGeometry();
    tri.setAttribute('position', new THREE.Float32BufferAttribute([0, 0.05, 0, -0.04, -0.03, 0, 0.045, -0.035, 0], 3)); tri.computeVertexNormals();
    g.index = null; g.setAttribute('position', tri.getAttribute('position')); g.setAttribute('normal', tri.getAttribute('normal'));
    const aS = new Float32Array(n * 4), aV = new Float32Array(n * 3), aR = new Float32Array(n * 3);
    for (let k = 0; k < n; k++) {
      const i = k < 420 ? FOCUS : Math.floor(R() * NP), P = this.panes[i], zc = P0 - i * DZ, u = R() - 0.5, v = R() - 0.5;
      const sc = 0.4 + R() * 1.6;
      aS.set([-HW + 0.01, (WIN.y0 + WIN.y1) / 2 + v * (WIN.y1 - WIN.y0), zc + u * DZ * 0.8, P.at + R() * 0.03], k * 4);
      aV.set([(1.2 + R() * 3.2) * (i === FOCUS ? 1.3 : 1), v * 1.6 + (R() - 0.3) * 1.2, u * 2.2 + (R() - 0.5) * 1.2 + (i === FOCUS ? 1.2 : 0)], k * 3);
      aR.set([(R() - 0.5) * 6 * sc, (R() - 0.5) * 6, (R() - 0.5) * 6], k * 3);
    }
    g.setAttribute('aS', new THREE.InstancedBufferAttribute(aS, 4)); g.setAttribute('aV', new THREE.InstancedBufferAttribute(aV, 3)); g.setAttribute('aR', new THREE.InstancedBufferAttribute(aR, 3));
    g.instanceCount = n; this.SHU = { ...this.SU, uT: { value: 0 } };
    const sh = new THREE.Mesh(g, new THREE.ShaderMaterial({ uniforms: this.SHU, vertexShader: SH_V, fragmentShader: SH_F, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
    sh.frustumCulled = false; sh.renderOrder = 30; S.add(sh);
    // the two of them
    this.ppl = [];
    [['cut_shinji_seat', 0.98, -4.3, -1, [1.05, 0.88, 0.8]], ['cut_gendo_seat', -1.0, -6.9, 1, [0.42, 0.3, 0.3]]].forEach(([nm, x, z, fx, tint], i) => {
      const e = I[nm]; if (!e) return; const m = cutMat(e, { wind: 0, rim: i ? 1.1 : 0.5, seed: i * 5 });
      m.uniforms.uTint.value.set(...tint); m.uniforms.uRim.value.set(1, 0.62, 0.3, i ? 1.1 : 0.5);
      const me = new THREE.Mesh(cutGeo(e, 1.42), m); me.position.set(x, -0.02, z); me.renderOrder = 10; S.add(me);
      this.ppl.push({ me, fx, tint, gendo: i === 1 });
    });
    this.m4 = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.e = new THREE.Euler(); this.v = new THREE.Vector3(); this.one = new THREE.Vector3(1, 1, 1);
  }
  update(t) {
    const K = audio.hitPulse('kick', t, 9), H = audio.hitPulse('hit', t, 5), sway = Math.sin(t * 1.7) * 0.6 + Math.sin(t * 4.3) * 0.2;
    const c = applyCam(this.camera, CAM, t, 0.004 * K + 0.006 * H);
    this.camera.position.y += Math.sin(t * 23) * 0.002 + K * 0.004;
    this.SU.uS.value = t * SPD; this.SU.uBreak.value = smooth(SHOT1, SHOT2 + 0.3, t);
    this.RU.uT.value = t; this.SHU.uT.value = t;
    for (const P of this.panes) { P.u.uT.value = t; P.u.uCrack.value = P.at === SHOT1 ? smooth(96.35, SHOT1, t) * (0.4 + 0.6 * smooth(96.9, SHOT1, t)) + 0.15 * K * (t > 96.3 ? 1 : 0) : smooth(SHOT2 - 0.25, P.at, t);
      P.m.visible = t < P.at; }
    for (let i = 0; i < this.sp.length; i++) {
      const [x, z, ph] = this.sp[i]; this.e.set(0.12 * sway + 0.05 * Math.sin(t * 3 + ph), 0, 0.08 * Math.sin(t * 2.1 + ph)); this.q.setFromEuler(this.e);
      this.m4.compose(this.v.set(x, 2.12, z), this.q, this.one); this.straps.setMatrixAt(i, this.m4);
      this.v.set(x, 2.12, z).add(new THREE.Vector3(0, -0.32, 0).applyQuaternion(this.q)); this.m4.compose(this.v, this.q, this.one); this.rings.setMatrixAt(i, this.m4);
    }
    this.straps.instanceMatrix.needsUpdate = this.rings.instanceMatrix.needsUpdate = true;
    // people: yaw toward the lens (cut-outs), flicker with the pole shadows
    const oz = -4.3 + t * SPD, pole = Math.abs(((oz / PITCH) % 1 + 1) % 1 - 0.5) * PITCH * 0.5 < 0.12 ? 0.55 : 1;
    for (const p of this.ppl) {
      const cp = this.camera.position, a = Math.atan2(cp.x - p.me.position.x, cp.z - p.me.position.z);
      p.me.rotation.y = clamp(a, p.fx > 0 ? 0.25 : -1.9, p.fx > 0 ? 1.9 : -0.25);
      p.me.visible = !(p.gendo && t > 94.5);
      const f = p.gendo ? 1 : pole, u = p.me.material.uniforms; u.uT.value = t;
      u.uTint.value.set(p.tint[0] * f, p.tint[1] * f, p.tint[2] * f); u.uRim.value.w = (p.gendo ? 1.1 : 0.5) * (0.7 + 0.3 * pole + K * 0.4);
    }
  }
  post(t) {
    const K = audio.hitPulse('kick', t, 10), H = audio.hitPulse('hit', t, 6), br = smooth(SHOT1 - 0.02, SHOT1 + 0.05, t) * Math.exp(-Math.max(0, t - SHOT1) * 5);
    return { bloom: 0.7, bloomThr: 0.85, contrast: 1.12, exposure: 0.94 + 0.15 * H, grain: 0.08, vig: 0.62, ca: 0.7 + 1.8 * H, tint: [1.06, 0.95, 0.86], letter: 0.12, punch: 0.25 * K,
      shake: 0.003 * H, dust: 0.3, dustCol: [1, 0.7, 0.45], fadeW: br * 0.6 + smooth(97.95, 98.2, t) * 0.35 };
  }
}
