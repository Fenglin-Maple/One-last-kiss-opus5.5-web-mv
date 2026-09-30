// RedSea2 (v2) 115.19-121 / 123.76-129.61 "Oh oh oh oh oh" x2: the five Evangelions stand knee-deep in the red
// sea of Third Impact under the black moon. First "Oh" line: on every "Oh" a cross of light erupts behind one
// of them while crosses rise all the way to the horizon (hit 120.11: all flare). Second line: on every "Oh" one
// Eva dissolves top-down into souls that rise to the moon - Shinji's farewell to every Evangelion - Unit-01 last.
import * as THREE from 'three';
import { Scene } from './base.js';
import { NOISE } from '../core/glsl.js';
import { applyCam } from './camkeys.js';
import { canvas, tex } from '../core/textures.js';
import { cutMat, cutGeo, pixels } from '../core/images.js';
import { smooth, clamp, rng } from '../core/util.js';
import { audio, PERIOD } from '../core/audio.js';

const OH1 = 115.38, OH2 = 123.95, STEP = 2 * PERIOD, EZ = -40, EH = 15, CLIP = 0.17;
const EVAS = [['cut_e00', -26], ['cut_e02', -13], ['cut_e01', 0], ['cut_e08', 13], ['cut_e13', 26]];
const CROSS_ORDER = [0, 4, 1, 3, 2], DIS_ORDER = [4, 3, 1, 0, 2];                // e01 (centre) is always last
const SKY_V = 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }';
const SKY_F = /* glsl */ `uniform float uT, uK, uFlare; varying vec3 vD; ${NOISE}
void main(){ vec3 d = normalize(vD); float y = d.y;
  vec3 c = mix(vec3(0.78, 0.2, 0.1), vec3(0.3, 0.02, 0.05), smoothstep(0.0, 0.2, y)); c = mix(c, vec3(0.06, 0.0, 0.03), smoothstep(0.2, 0.7, y));
  c = mix(c, vec3(0.25, 0.02, 0.03), smoothstep(0.0, -0.1, y));
  float cl = fbm(vec2(atan(d.x, -d.z) * 4.0 + uT * 0.01, y * 14.0)); c *= 0.75 + 0.5 * cl * smoothstep(0.35, 0.05, y);
  vec3 M = normalize(vec3(0.0, 0.16, -1.0)); float r = acos(clamp(dot(d, M), -1.0, 1.0));                     // black moon
  c += vec3(1.3, 0.35, 0.2) * exp(-max(r - 0.13, 0.0) * 12.0) * (0.7 + 0.3 * uK + uFlare);
  c = mix(c, vec3(0.01, 0.0, 0.0), smoothstep(0.132, 0.126, r));
  c += vec3(1.4, 0.6, 0.4) * smoothstep(0.004, 0.0, abs(r - 0.2 - 0.004 * sin(uT))) * 0.6;                    // thin halo ring
  gl_FragColor = vec4(c, 1.0); }`;
const SEA_F = /* glsl */ `uniform float uT, uK, uFlare; varying vec3 vW; ${NOISE}
void main(){ vec3 V = normalize(cameraPosition - vW); float fr = pow(1.0 - max(V.y, 0.0), 5.0);
  float n = fbm(vW.xz * vec2(0.12, 0.3) + vec2(uT * 0.05, uT * 0.12)) + 0.35 * vnoise(vW.xz * vec2(1.0, 3.0) - uT * 0.6);
  vec3 c = mix(vec3(0.12, 0.0, 0.01), vec3(0.8, 0.2, 0.1), fr * 0.7) * (0.75 + 0.45 * n);
  float mx = exp(-abs(vW.x) * 0.01) * smoothstep(-300.0, -60.0, vW.z) * pow(n * 0.85, 6.0);                        // moon path glitter
  c += vec3(1.4, 0.5, 0.3) * mx * (0.5 + uK + 2.0 * uFlare);
  gl_FragColor = vec4(c, 0.7 + 0.25 * (1.0 - fr)); }`;
const SOUL_V = /* glsl */ `attribute vec4 aB; uniform float uT, uPx; varying float vA; varying vec3 vC;
void main(){ float u = uT - aB.x; vec3 p = position;
  float r = u * (1.6 + aB.y * 2.5) + u * u * 0.35; p.y += r; p.x += sin(u * 1.1 + aB.y * 40.0) * u * 0.7; p.z += cos(u * 0.9 + aB.y * 17.0) * u * 0.5 - u * u * 0.3;
  vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  vA = step(0.0, u) * smoothstep(0.0, 0.15, u) * exp(-u * 0.22) * smoothstep(0.4, 1.5, -mv.z);
  vC = mix(vec3(1.0, 0.45, 0.25), vec3(1.0, 0.9, 0.8), aB.z);
  gl_PointSize = min((0.5 + aB.y * 1.2) * (1.0 + aB.z) * uPx / -mv.z, 9.0); }`;
const SOUL_F = 'varying float vA; varying vec3 vC; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a *= a; if (vA * a < 0.003) discard; gl_FragColor = vec4(vC * vA * a * 0.4, 1.0); }';
const cam = (t, p, q, f, r = 0) => [t, ...p, ...q, f, r];
const CAM = [
  cam(115.1, [0, 2.4, 18], [0, 7.5, -40], 50), cam(116.23, [1, 2.2, 12], [0, 7.5, -40], 48),
  cam(116.26, [21, 0.6, -18], [27, 5.5, -40], 40, 0.03), cam(117.3, [18, 0.7, -19], [26, 6, -40], 40, 0.02),
  cam(117.33, [-9, 1.0, -25], [-13, 11, -40], 44, -0.04), cam(118.37, [-9.6, 1.4, -27], [-13, 12, -40], 42, -0.03),
  cam(118.4, [8, 3.2, -18], [13, 9, -40], 42, 0.02), cam(119.45, [7, 3.8, -20], [13, 9.5, -40], 40, 0.0),
  cam(119.48, [0, 2.5, -14], [0, 11, -40], 44), cam(121.1, [0, 12, 26], [0, 6, -70], 46),
  cam(123.7, [-3, 1.5, 12], [0, 8, -40], 46, 0.02), cam(124.8, [-2, 1.8, 5], [2, 8, -40], 44, 0.01),
  cam(124.83, [9, 5, -24], [13, 10.5, -40], 40, 0.03), cam(125.87, [9.5, 5.5, -25.5], [13, 11, -40], 38, 0.03),
  cam(125.9, [-8, 2, -26], [-13, 9.5, -40], 42, -0.03), cam(126.94, [-8.8, 2.4, -27.5], [-13, 10, -40], 40, -0.03),
  cam(126.97, [-18, 3, -25], [-26, 9, -40], 42, 0.02), cam(128.02, [-18.5, 3.5, -26.5], [-26, 9.5, -40], 40, 0.02),
  cam(128.05, [0, 3, -22], [0, 10, -40], 40), cam(128.3, [0, 3.2, -21], [0, 10.5, -40], 40), cam(129.7, [0, 7, 12], [0, 12, -70], 48),
];

function crossTex() {
  const c = canvas(256, 512), g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, 256, 512); g.shadowColor = '#fff'; g.fillStyle = '#fff';
  for (const [b, w] of [[40, 0.35], [18, 0.8], [5, 1]]) { g.shadowBlur = b; g.globalAlpha = w; g.fillRect(118, 20, 20, 492); g.fillRect(40, 120, 176, 18); }
  return tex(c);
}

export class RedSea2 extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 48, near: 0.2, far: 700 });
    const S = this.scene, R = rng(115), I = ctx.img;
    this.U = { uT: { value: 0 }, uK: { value: 0 }, uFlare: { value: 0 } };
    S.add(new THREE.Mesh(new THREE.SphereGeometry(500, 48, 24), new THREE.ShaderMaterial({ uniforms: this.U, vertexShader: SKY_V, fragmentShader: SKY_F, side: THREE.BackSide, depthWrite: false })));
    // crosses: 5 hero crosses behind the Evas + a field to the horizon (one instanced set + its reflection)
    this.cr = [];
    CROSS_ORDER.forEach((e, k) => this.cr.push({ x: EVAS[e][1] * 1.05, z: EZ - 9, h: 58, at: OH1 + k * STEP }));
    for (let i = 0; i < 30; i++) { const z = -110 - R() * 240; this.cr.push({ x: (R() - 0.5) * (120 + -z * 1.4), z, h: 30 + R() * 60, at: OH1 + 0.3 + R() * 4.6 }); }
    const cg = new THREE.PlaneGeometry(0.5, 1).translate(0, 0.5, 0), cm = new THREE.MeshBasicMaterial({ map: crossTex(), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: false });
    this.crM = new THREE.InstancedMesh(cg, cm, this.cr.length); this.crR = new THREE.InstancedMesh(cg, cm, this.cr.length);
    for (const m of [this.crM, this.crR]) { m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(this.cr.length * 3), 3); m.frustumCulled = false; }
    this.crR.renderOrder = 1; this.crM.renderOrder = 4; S.add(this.crM, this.crR);
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), new THREE.ShaderMaterial({ uniforms: this.U, transparent: true,
      vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }', fragmentShader: SEA_F }));
    sea.rotation.x = -Math.PI / 2; sea.renderOrder = 2; S.add(sea);
    // the Evas + mirrored reflections; soul particles sampled from each silhouette
    this.evas = []; const pos = [], aB = [];
    EVAS.forEach(([n, x], i) => {
      const e = I[n]; if (!e) return; const g = cutGeo(e, 1), mk = () => { const m = cutMat(e, { wind: 0, rim: 1, seed: i * 1.7 }); m.uniforms.uTint.value.set(0.62, 0.46, 0.46); m.uniforms.uRim.value.set(1, 0.42, 0.25, 1); return m; };
      const m = new THREE.Mesh(g, mk()), r = new THREE.Mesh(g, mk()), h = EH * (i === 2 ? 1.08 : 1);
      m.position.set(x, -CLIP * h, EZ + Math.abs(x) * 0.12); m.scale.set(h, h, 1); r.position.set(x, CLIP * h, m.position.z); r.scale.set(h, -h, 1);
      m.material.uniforms.uClip.value.set(CLIP, 0.004, 1, 0); r.material.uniforms.uClip.value.set(CLIP, 0.004, 0.3, 1); r.material.uniforms.uTint.value.multiplyScalar(0.55);
      m.rotation.y = r.rotation.y = -x * 0.012; m.renderOrder = 3; r.renderOrder = 1; S.add(m, r);
      const td = OH2 + DIS_ORDER.indexOf(i) * STEP; this.evas.push({ m, r, td });
      const W = 40, Hh = Math.round(W * e.h / e.w), px = pixels(e, W, Hh), w = h * e.w / e.h;
      for (let k = 0; k < 1500; k++) { const u = R(), v = R(); if (v < CLIP) continue;
        if (px[(Math.floor((1 - v) * Hh) * W + Math.floor(u * W)) * 4 + 3] < 128) continue;
        pos.push(x + (u - 0.5) * w * Math.cos(m.rotation.y), m.position.y + v * h, m.position.z + (u - 0.5) * w * Math.sin(m.rotation.y) + (R() - 0.5) * 0.6);
        aB.push(td + (1 - v) * 0.75 + R() * 0.12, R(), 0.7 + R() * 0.3, 0); }
    });
    for (let k = 0; k < 1500; k++) { pos.push((R() - 0.5) * 160, 0, -8 - R() * 140); aB.push(108 + R() * 22, R(), R() * 0.3, 0); }   // ambient souls from the sea
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('aB', new THREE.Float32BufferAttribute(aB, 4));
    this.PU = { uT: this.U.uT, uPx: { value: ctx.h * 0.9 } };
    const pts = new THREE.Points(g, new THREE.ShaderMaterial({ uniforms: this.PU, vertexShader: SOUL_V, fragmentShader: SOUL_F, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    pts.frustumCulled = false; pts.renderOrder = 6; S.add(pts);
    this.m4 = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.v = new THREE.Vector3(); this.s = new THREE.Vector3(); this.Y = new THREE.Vector3(0, 1, 0);
  }
  update(t) {
    const K = audio.hitPulse('kick', t, 7), H = audio.hitPulse('hit', t, 3);
    applyCam(this.camera, CAM, t, 0.03 * H);
    const flare = Math.exp(-Math.max(0, t - 120.11) * 1.4) * (t > 120.11 ? 1 : 0) + 0.6 * (t > 128.28 ? Math.exp(-(t - 128.28) * 1.2) : 0);
    this.U.uT.value = t; this.U.uK.value = K; this.U.uFlare.value = flare;
    const cp = this.camera.position;
    this.cr.forEach((c, i) => {
      const u = t - c.at, grow = u < 0 ? 0 : 1 - Math.pow(1 - clamp(u / 0.45), 3), hero = i < 5;
      const b = u < 0 ? 0 : (hero ? 0.42 : 0.16) * (1 + 2.5 * Math.exp(-u * 4)) * (0.85 + 0.15 * Math.sin(t * 9 + i) + 0.25 * K) * (1 + flare * 0.8) * (1 - 0.35 * smooth(122, 130, t));
      this.q.setFromAxisAngle(this.Y, Math.atan2(cp.x - c.x, cp.z - c.z));
      this.m4.compose(this.v.set(c.x, 0, c.z), this.q, this.s.set(c.h * 0.36, c.h * Math.max(grow, 0.001), 1)); this.crM.setMatrixAt(i, this.m4);
      this.m4.compose(this.v, this.q, this.s.set(c.h * 0.36, -c.h * Math.max(grow, 0.001) * 0.8, 1)); this.crR.setMatrixAt(i, this.m4);
      this.crM.instanceColor.setXYZ(i, b, b * 0.93, b * 0.88); this.crR.instanceColor.setXYZ(i, b * 0.3, b * 0.2, b * 0.18);
    });
    for (const m of [this.crM, this.crR]) { m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true; }
    for (const E of this.evas) for (const m of [E.m, E.r]) { const u = m.material.uniforms; u.uT.value = t; u.uDis.value = clamp((t - E.td) / 0.9); u.uRim.value.w = 0.45 + 0.4 * K + 0.8 * flare; }
  }
  post(t) {
    const K = audio.hitPulse('kick', t, 9), H = audio.hitPulse('hit', t, 5);
    return { bloom: 0.7, bloomThr: 0.82, contrast: 1.1, grain: 0.07, vig: 0.62, ca: 0.8 + 1.2 * H, punch: 0.3 * K, shake: 0.004 * H, tint: [1.05, 0.93, 0.9],
      dust: 0.2, dustCol: [1, 0.5, 0.35], fadeW: 0.35 * Math.exp(-Math.abs(t - 120.11) * 6) + smooth(120.75, 121.15, t) * 0.35 * (t < 122 ? 1 : 0) };
  }
}
