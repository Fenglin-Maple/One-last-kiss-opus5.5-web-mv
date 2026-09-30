// Sky (v2): 52.34-55.22 "発進" - the Wunder / 61.07-63.79 the WILLE fleet.
// The painting becomes a real 3D relief (depth-displaced mesh along the rays of the rest camera, so the rest view is
// exact and any camera move produces true parallax); volumetric-looking sunset clouds and speed streaks fly through it.
import * as THREE from 'three';
import { Scene } from './base.js';
import { NOISE } from '../core/glsl.js';
import { applyCam } from './camkeys.js';
import { smooth, rng } from '../core/util.js';
import { audio } from '../core/audio.js';

const FOV = 40, DIST = 10, COVER = 1.12;
const RELIEF_V = /* glsl */ `
uniform sampler2D uDepT; uniform float uDep; varying vec2 vUv; varying float vD;
void main(){ vUv = uv; float d = texture2D(uDepT, uv).r; vD = d;
  vec3 p = position * (1.0 - uDep * d);                       // slide toward the rest camera (origin)
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`;
const RELIEF_F = /* glsl */ `
uniform sampler2D uMap; uniform float uK, uT; varying vec2 vUv; varying float vD; ${NOISE}
void main(){ vec3 c = texture2D(uMap, vUv).rgb;
  float l = dot(c, vec3(0.3, 0.55, 0.15)), hot = smoothstep(0.62, 0.9, l) * smoothstep(0.0, 0.25, c.r - c.b);
  c += c * hot * (0.35 + 0.9 * uK);                              // engines / sun glints pulse on the kick
  c *= 0.92 + 0.08 * vnoise(vUv * 6.0 + uT * 0.4);
  gl_FragColor = vec4(c, 1.0); }`;
const CLOUD_V = /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const CLOUD_F = /* glsl */ `
uniform float uSeed, uA, uT; uniform vec2 uSun; uniform vec3 uLit, uShade; varying vec2 vUv; ${NOISE}
void main(){ vec2 q = vUv - 0.5;
  float f = fbm(vUv * 3.2 + uSeed * 7.0 + vec2(uT * 0.05, 0.0));
  float sh = 1.0 - smoothstep(0.1, 0.5, length(q * vec2(1.0, 1.6)));
  float a = smoothstep(0.35, 0.75, f * 0.9 + sh * 0.55) * sh;
  float lit = clamp(0.5 + dot(normalize(q + 1e-4), uSun) * 0.6 + (f - 0.5) * 1.2, 0.0, 1.0);
  vec3 c = mix(uShade, uLit, lit);
  gl_FragColor = vec4(c, a * uA); }`;
const STREAK_V = /* glsl */ `
uniform float uT, uA; uniform vec3 uVel; attribute vec4 aR; varying float vA; varying vec2 vUv;
void main(){ vUv = uv;
  vec3 base = vec3((aR.x - 0.5) * 16.0, (aR.y - 0.5) * 9.0, -1.0 - aR.z * 11.0);
  float s = fract(aR.w + uT * (0.6 + aR.z * 0.5));
  vec3 p = base + uVel * (s - 0.5) * 18.0;
  vec3 dir = normalize(uVel);
  vec3 side = normalize(cross(dir, vec3(0.0, 0.0, 1.0) + vec3(0.001)));
  p += dir * position.x * (1.2 + aR.z * 2.0) + side * position.y * 0.012;
  vA = sin(s * 3.1416) * uA * (0.4 + 0.6 * aR.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`;
const STREAK_F = /* glsl */ `varying float vA; varying vec2 vUv; void main(){ float a = (1.0 - abs(vUv.y - 0.5) * 2.0) * smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.6, vUv.x);
  gl_FragColor = vec4(vec3(1.0, 0.86, 0.7) * a * vA, 1.0); }`;

const SHOTS = {
  wunder: { t0: 52.34, t1: 55.5, cam: [[52.3, 0.12, -0.08, 0.2, 0.06, -0.04, -10, FOV, 0.03], [55.5, -0.15, 0.08, -1.3, -0.06, 0.03, -10, FOV, -0.02]],
    vel: [0.15, -0.02, 1], sun: [0.8, 0.1] },
  fleet: { t0: 61.07, t1: 64.05, cam: [[61.0, 0.35, 0.02, 0.1, 0.2, 0.02, -10, FOV, -0.015], [64.05, -0.35, 0.12, -0.6, -0.2, 0.05, -10, FOV, 0.02]],
    vel: [1, 0.05, 0.25], sun: [0.9, 0.0] },
};

export class Sky extends Scene {
  constructor(ctx) {
    super(ctx, { fov: FOV, near: 0.05, far: 100 });
    const S = this.scene, R = rng(52);
    this.U = { uK: { value: 0 }, uT: { value: 0 } };
    const H = 2 * DIST * Math.tan((FOV / 2) * Math.PI / 180) * COVER;
    this.planes = {};
    for (const n of ['wunder', 'fleet']) {
      const e = ctx.img[n], d = ctx.img[n + '_d'];
      const m = new THREE.ShaderMaterial({ vertexShader: RELIEF_V, fragmentShader: RELIEF_F,
        uniforms: { uMap: { value: e.tex }, uDepT: { value: d ? d.tex : e.tex }, uDep: { value: d ? 0.38 : 0 }, ...this.U } });
      const g = new THREE.PlaneGeometry(H * e.w / e.h, H, 256, 144);
      const mesh = new THREE.Mesh(g, m); mesh.position.z = -DIST; mesh.renderOrder = -50;
      // displacement is relative to the origin: bake the offset into geometry instead of the object position
      g.translate(0, 0, -DIST); mesh.position.z = 0;
      S.add(mesh); this.planes[n] = mesh;
    }
    // clouds
    this.cl = [];
    for (let i = 0; i < 30; i++) {
      const u = { uSeed: { value: R() * 10 }, uA: { value: 0 }, uT: this.U.uT, uSun: { value: new THREE.Vector2(0.8, 0.1) },
        uLit: { value: new THREE.Color(1.0, 0.62, 0.4) }, uShade: { value: new THREE.Color(0.12, 0.06, 0.13) } };
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({ vertexShader: CLOUD_V, fragmentShader: CLOUD_F, uniforms: u,
        transparent: true, depthWrite: false }));
      m.userData = { u, r: [R(), R(), R(), R(), R()] }; S.add(m); this.cl.push(m);
    }
    // speed streaks
    const n = 160, g = new THREE.InstancedBufferGeometry(); g.copy(new THREE.PlaneGeometry(1, 1)); g.instanceCount = n;
    const a = new Float32Array(n * 4); for (let i = 0; i < n * 4; i++) a[i] = R();
    g.setAttribute('aR', new THREE.InstancedBufferAttribute(a, 4));
    this.SU = { uT: this.U.uT, uA: { value: 0 }, uVel: { value: new THREE.Vector3() } };
    const st = new THREE.Mesh(g, new THREE.ShaderMaterial({ vertexShader: STREAK_V, fragmentShader: STREAK_F, uniforms: this.SU,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    st.frustumCulled = false; S.add(st);
  }
  update(t) {
    const k = t < 58 ? 'wunder' : 'fleet', sh = SHOTS[k], K = audio.hitPulse('kick', t, 8);
    this.U.uK.value = K; this.U.uT.value = t;
    for (const n in this.planes) this.planes[n].visible = n === k;
    applyCam(this.camera, sh.cam, t, 0.004 * K);
    const v = new THREE.Vector3(...sh.vel).normalize();
    this.SU.uVel.value.copy(v); this.SU.uA.value = 0.5 + 0.5 * K;
    // clouds fly along -vel (camera flies along +vel into -z for the Wunder, sideways for the fleet)
    this.cl.forEach((m, i) => {
      const [a, b, c, d, e] = m.userData.r;
      const s = (a + (t - sh.t0) * (0.22 + 0.25 * e)) % 1;
      const z = -1.2 - c * 8.5;
      const along = (s - 0.5) * 14;
      if (k === 'wunder') m.position.set((b - 0.5) * 12 - v.x * along * 0.3, (d < 0.6 ? -2.4 - d * 1.5 : 2.2 + d) , z + along * 0.7);
      else m.position.set(-along * 1.2, (d < 0.65 ? -2.2 - d * 2.2 : 2.2 + d * 1.2) + (b - 0.5), z);
      const sz = 2.2 + e * 3.5; m.scale.set(sz * 1.6, sz, 1);
      m.lookAt(this.camera.position);
      const zf = -m.position.z;
      m.userData.u.uA.value = 0.6 * Math.sin(s * Math.PI) * smooth(0.6, 2.2, zf) * (k === 'wunder' ? 1 : 0.9);
      m.userData.u.uSun.value.set(...sh.sun);
    });
  }
  post(t) {
    const K = audio.hitPulse('kick', t, 9), fleet = t > 58;
    return { bloom: 1.05, bloomThr: 0.7, sat: 1.08, grain: 0.06, vig: 0.55, ca: 0.9 + K, punch: K * 0.4, shake: 0.003 * K,
      contrast: 1.1, tint: [1.03, 0.97, 0.95], dust: 0.2, fadeW: fleet ? 0 : (1 - smooth(52.34, 52.6, t)) * 0.4 };
  }
}
