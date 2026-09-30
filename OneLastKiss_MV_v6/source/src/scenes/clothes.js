// Clothes (v2) 41.34-47.75 "写真は苦手なの / もう一つ増やしましょう": Village 3 at sunset, a washing line in the wind.
// Sheets and shirts billow (vertex cloth), instant photos are pinned between them; on "もう一つ" a new photo is
// clipped on and develops from white. Low-angle shot of the line against the sky, then a wide pull-back.
import * as THREE from 'three';
import { Scene, bgQuad } from './base.js';
import { NOISE } from '../core/glsl.js';
import { applyCam } from './camkeys.js';
import { smooth, clamp, rng } from '../core/util.js';
import { audio } from '../core/audio.js';

const Y0 = 2.3, SAG = 0.3, HALF = 6;
const lineY = (x) => Y0 - SAG * (1 - (x / HALF) ** 2);
const NEW = 44.35;
const CAM = [
  [41.3, -1.3, 1.78, 1.25, -0.95, 1.74, 0, 32], [42.62, -0.2, 1.82, 1.4, 0.2, 1.76, 0, 32],
  [42.67, 0.5, 0.55, 2.3, 0.3, 2.4, 0, 48, 0.08], [44.3, -0.4, 0.65, 2.4, 0.6, 2.3, 0, 48, 0.03],
  [44.35, 1.05, 1.8, 1.05, 1.05, 1.76, 0, 30], [46.9, 1.05, 1.79, 0.78, 1.05, 1.78, 0, 30],
  [46.95, 3.6, 1.4, 5.2, 0.4, 1.8, 0, 42], [48.6, 5.0, 1.65, 7.4, 0.4, 2.05, 0, 42],
];

const CLOTH_V = /* glsl */ `
uniform float uT, uWind, uAmp, uSeed, uH, uDrop; varying vec2 vUv; varying vec3 vW; ${NOISE}
void main(){ vUv = uv; vec3 p = position; float a = clamp(-p.y / uH, 0.0, 1.0), a2 = pow(a, 1.3);
  float w = uWind * (0.6 + 0.4 * vnoise(vec2(uT * 0.7 + uSeed, p.x)));
  p.z += a2 * uAmp * (sin(p.x * 3.0 + uT * 4.2 + uSeed) * 0.16 + sin(p.y * 5.0 - uT * 5.3 + uSeed * 2.0) * 0.1 + sin(p.x * 7.0 + p.y * 4.0 + uT * 7.0) * 0.035 + w * 0.55);
  p.y += a2 * uAmp * w * 0.08; p.x += a * uAmp * sin(uT * 2.3 + p.y * 2.0 + uSeed) * 0.03;
  p.y += uDrop;
  vec4 wp = modelMatrix * vec4(p, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`;
const CLOTH_F = /* glsl */ `
uniform sampler2D uMap; uniform float uHas, uDev, uPhotoA; uniform vec3 uCol, uSun; varying vec2 vUv; varying vec3 vW; ${NOISE}
void main(){ vec3 n = normalize(cross(dFdx(vW), dFdy(vW))); vec3 V = normalize(cameraPosition - vW);
  if (dot(n, V) < 0.0) n = -n;
  vec3 base = uCol;
  if (uHas > 0.5) { // instant photo: white frame, wider bottom margin, image develops from milky white
    vec2 q = (vUv - vec2(0.07, 0.2)) / vec2(0.86, 0.73);
    bool inside = q.x > 0.0 && q.x < 1.0 && q.y > 0.0 && q.y < 1.0;
    vec3 img = texture2D(uMap, clamp(q, 0.0, 1.0)).rgb;
    vec3 dev = mix(vec3(0.82, 0.83, 0.78), mix(img * vec3(0.6, 0.5, 0.7), img, smoothstep(0.5, 1.0, uDev)), smoothstep(0.0, 0.6, uDev));
    base = inside ? dev : vec3(0.93, 0.91, 0.86);
  }
  base *= 0.93 + 0.07 * vnoise(vUv * 80.0);
  float dif = max(dot(n, uSun), 0.0), back = max(dot(-V, uSun), 0.0);
  vec3 c = base * (0.3 + 0.75 * dif) + base * vec3(1.0, 0.65, 0.4) * pow(back, 3.0) * 0.55 * (1.0 - uHas * 0.6);
  gl_FragColor = vec4(c * vec3(1.08, 0.95, 0.85), 1.0); }`;
const BACK_F = /* glsl */ `uniform sampler2D uMap; uniform float uT; varying vec2 vUv; ${NOISE}
void main(){ vec2 uv = vUv + vec2(vnoise(vUv * 40.0 + uT) - 0.5, 0.0) * 0.002;
  vec3 c = texture2D(uMap, uv, 2.2).rgb; gl_FragColor = vec4(c * 0.95, smoothstep(1.0, 0.8, vUv.y) * smoothstep(0.0, 0.05, vUv.x) * smoothstep(1.0, 0.95, vUv.x)); }`;
const SKY_F = /* glsl */ `varying vec2 vUv; uniform float uT; ${NOISE}
void main(){ float y = vUv.y; vec3 c = mix(vec3(0.95, 0.52, 0.32), vec3(0.12, 0.1, 0.26), smoothstep(0.05, 0.75, y));
  float cl = smoothstep(0.5, 0.8, fbm(vUv * vec2(3.0, 6.0) + vec2(uT * 0.02, 0.0)));
  c = mix(c, vec3(0.9, 0.5, 0.42), cl * 0.45); gl_FragColor = vec4(c, 1.0); }`;

export class Clothes extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 34, near: 0.05, far: 80 });
    const S = this.scene, R = rng(41);
    S.fog = new THREE.Fog(0x9a5a40, 12, 40);
    this.T = { uT: { value: 0 }, uWind: { value: 0.5 } };
    S.add(bgQuad(SKY_F, { uT: this.T.uT }));
    this.sun = new THREE.Vector3(-0.5, 0.35, -0.8).normalize();
    // distant village (the painting, slightly out of focus, heat haze)
    const v = ctx.img.village;
    if (v) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(50, 50 * v.h / v.w), new THREE.ShaderMaterial({ uniforms: { uMap: { value: v.tex }, uT: this.T.uT },
        vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }', fragmentShader: BACK_F, depthWrite: false, transparent: true }));
      m.position.set(1, 5.2, -30); m.scale.setScalar(1.9); m.renderOrder = -10; S.add(m);
    }
    // near ground only (grass, fading out) so the painted paddies/village continue it
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(24, 9), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: { uSun: { value: this.sun } },
      vertexShader: 'varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `varying vec2 vP; ${NOISE} void main(){ float n = fbm(vP * 1.5), g = vnoise(vP * 30.0);
        vec3 c = mix(vec3(0.05, 0.06, 0.02), vec3(0.22, 0.18, 0.07), n * 0.8 + g * 0.3);
        gl_FragColor = vec4(c, smoothstep(1.0, 0.45, length(vP / vec2(12.0, 4.5)))); }` }));
    ground.rotation.x = -Math.PI / 2; ground.position.z = 1; ground.renderOrder = -5; S.add(ground);
    S.add(new THREE.HemisphereLight(0xffc49a, 0x2a3018, 1.2));
    const dl = new THREE.DirectionalLight(0xffb070, 2.2); dl.position.copy(this.sun).multiplyScalar(10); S.add(dl);
    // poles + line
    const wood = new THREE.MeshStandardMaterial({ color: 0x5a3c26, roughness: 0.9 });
    for (const x of [-HALF, HALF]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, Y0 + 0.3, 10), wood); p.position.set(x, (Y0 + 0.3) / 2, 0); S.add(p); }
    const pts = []; for (let i = 0; i <= 40; i++) { const x = -HALF + (i / 40) * 2 * HALF; pts.push(new THREE.Vector3(x, lineY(x), 0)); }
    S.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 120, 0.008, 6), new THREE.MeshStandardMaterial({ color: 0xddd5c8 })));
    // washing
    const pin = new THREE.MeshStandardMaterial({ color: 0xc9a27a, roughness: 0.7 });
    const items = [
      { x: -4.2, w: 1.6, h: 1.45, col: 0xf2eee6, amp: 1 }, { x: -2.6, w: 0.42, h: 0.5, img: 'snap2', amp: 0.35 },
      { x: -1.9, w: 0.72, h: 0.82, col: 0x8fa3b8, amp: 0.9 }, { x: -0.95, w: 0.42, h: 0.5, img: 'snap1', amp: 0.35 },
      { x: -0.4, w: 0.42, h: 0.5, img: 'snap3', amp: 0.35 }, { x: 0.3, w: 0.5, h: 0.9, col: 0xf0d890, amp: 0.9 },
      { x: 1.05, w: 0.42, h: 0.5, img: 'snap4', amp: 0.35, isNew: true }, { x: 1.85, w: 0.62, h: 1.0, col: 0xfafafa, amp: 0.9 },
      { x: 3.3, w: 1.5, h: 1.35, col: 0xbfd4e6, amp: 1 },
    ];
    this.cloth = [];
    items.forEach((it, i) => {
      const e = it.img ? ctx.img[it.img] : null;
      const U = { ...this.T, uAmp: { value: it.amp }, uSeed: { value: R() * 10 }, uH: { value: it.h }, uDrop: { value: 0 },
        uMap: { value: e ? e.tex : null }, uHas: { value: e ? 1 : 0 }, uDev: { value: 1 }, uPhotoA: { value: 1 },
        uCol: { value: new THREE.Color(it.col ?? 0xffffff) }, uSun: { value: this.sun } };
      const g = new THREE.PlaneGeometry(it.w, it.h, it.img ? 8 : 24, it.img ? 10 : 30); g.translate(0, -it.h / 2, 0);
      const m = new THREE.Mesh(g, new THREE.ShaderMaterial({ vertexShader: CLOTH_V, fragmentShader: CLOTH_F, uniforms: U, side: THREE.DoubleSide }));
      m.position.set(it.x, lineY(it.x) + 0.01, 0); m.rotation.z = -Math.atan(2 * SAG * it.x / (HALF * HALF)) * 0.7; S.add(m);
      const pins = [];
      for (const s of it.w > 0.5 ? [-0.42, 0.42] : [0]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.09, 0.03), pin); p.position.set(it.x + s * it.w, lineY(it.x + s * it.w) - 0.02, 0.012); S.add(p); pins.push(p); }
      this.cloth.push({ it, U, m, pins });
    });
    // pollen / seeds drifting in the wind
    const n = 500, P = new Float32Array(n * 3); for (let i = 0; i < n; i++) P.set([(R() - 0.5) * 16, R() * 4, (R() - 0.5) * 8], i * 3);
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(P, 3));
    this.pol = new THREE.Points(pg, new THREE.PointsMaterial({ map: ctx.shared.glow, color: 0xffe0b0, size: 0.035, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }));
    S.add(this.pol);
  }
  update(t) {
    const K = audio.hitPulse('kick', t, 6);
    applyCam(this.camera, CAM, t, 0.002 * K);
    this.T.uT.value = t; this.T.uWind.value = 0.45 + 0.35 * Math.sin(t * 0.9) + 0.4 * K + 0.5 * audio.hitPulse('hit', t, 3);
    for (const c of this.cloth) {
      if (!c.it.isNew) continue;
      const on = t >= NEW, u = clamp((t - NEW) / 0.28);
      const drop = on ? (1 - u) * 0.6 - Math.sin(u * Math.PI) * 0.0 + (u >= 1 ? Math.exp(-(t - NEW - 0.28) * 9) * Math.sin((t - NEW - 0.28) * 40) * 0.015 : 0) : 5;
      c.U.uDrop.value = drop; c.m.visible = on;
      c.pins.forEach((p) => { p.visible = t >= NEW + 0.26; });
      c.U.uDev.value = smooth(NEW + 0.35, NEW + 2.3, t);
    }
    this.pol.position.set(((t * 0.6) % 4) - 2, Math.sin(t * 0.5) * 0.1, 0);
  }
  post(t) {
    const K = audio.hitPulse('kick', t, 9), H = audio.hitPulse('hit', t, 10);
    return { bloom: 0.95, bloomThr: 0.72, grain: 0.05, vig: 0.6, contrast: 1.08, ca: 0.6 + H, dust: 0.35, punch: K * 0.2, leak: 0.15,
      tint: [1.05, 0.97, 0.9], fadeW: H * 0.25 + smooth(47.3, 47.8, t) * 0.0 };
  }
}
