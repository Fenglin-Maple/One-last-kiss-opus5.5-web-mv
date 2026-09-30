// S4 Polaroids 37.6 -> 52.6: "もういっぱいあるけど / もう一つ増やしましょう / (Can you give me one last kiss?)"
// Drifting through a warm dark room of floating memories; a shutter flash ejects one new polaroid which
// slowly develops into the two of us in the light; then every memory is pulled into a vortex around it.
import * as THREE from 'three';
import { Scene, bgQuad } from './base.js';
import { NOISE } from '../core/glsl.js';
import { photoUV } from '../core/photos.js';
import { range, ease, rng, lerp, smooth, keys } from '../core/util.js';

const PW = 0.88, PH = 1.07, N = 84, HX = -0.25, HY = 0, HZ = 1.5, T_SNAP = 43.79, T_VORTEX = 47.75;

const BG = `uniform float uT, uAspect; varying vec2 vUv; ${NOISE}
void main(){
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
  vec3 col = mix(vec3(0.01, 0.006, 0.005), vec3(0.032, 0.02, 0.015), smoothstep(-0.6, 0.6, p.y + 0.15));
  for (int i = 0; i < 14; i++) {
    float fi = float(i);
    vec2 c = (vec2(hash12(vec2(fi, 1.0)), hash12(vec2(fi, 2.0))) - 0.5) * vec2(uAspect, 1.0) * 1.1;
    c += vec2(sin(uT * 0.1 + fi), cos(uT * 0.13 + fi * 2.0)) * 0.05;
    float r = 0.04 + 0.08 * hash12(vec2(fi, 3.0)), d = length(p - c);
    col += mix(vec3(1.0, 0.5, 0.22), vec3(1.0, 0.78, 0.5), hash12(vec2(fi, 4.0))) * (1.0 - smoothstep(r * 0.82, r, d)) * (0.6 + 0.4 * smoothstep(r * 0.5, r, d)) * 0.03;
  }
  gl_FragColor = vec4(col, 1.0);
}`;

const VERT = `attribute vec4 aUV, aR; uniform vec3 uLight; uniform float uLitK;
varying vec2 vUv; varying vec4 vUVr, vR; varying float vLit, vFog;
void main(){
  vUv = uv; vUVr = aUV; vR = aR;
  mat4 m = modelMatrix;
  #ifdef USE_INSTANCING
  m = m * instanceMatrix;
  #endif
  vec4 w = m * vec4(position, 1.0), mv = viewMatrix * w;
  float d = length(w.xyz - uLight);
  vLit = (0.13 + 0.85 / (1.0 + d * d * 0.1)) * uLitK;
  vFog = exp(-max(-mv.z - 4.0, 0.0) * 0.06);
  gl_Position = projectionMatrix * mv;
}`;

const cardFrag = (uni, img) => `${uni} uniform float uT, uFlash; varying vec2 vUv; varying vec4 vUVr, vR; varying float vLit, vFog; ${NOISE}
void main(){
  vec2 c = vUv * vec2(${PW}, ${PH}), im = (c - vec2(0.045, 0.235)) / 0.79;
  vec3 col = vec3(0.84, 0.82, 0.78) * (0.92 + 0.08 * vnoise(c * 70.0 + vR.x * 9.0));
  if (!gl_FrontFacing) col *= vec3(0.42, 0.42, 0.45);
  else if (im.x > 0.0 && im.x < 1.0 && im.y > 0.0 && im.y < 1.0) {
    ${img}
    vec2 e = min(im, 1.0 - im); col *= 0.7 + 0.3 * smoothstep(0.0, 0.04, min(e.x, e.y));
  } else if (vR.x > 0.35 && c.y < 0.2) {
    float y = 0.11 + 0.012 * sin(c.x * 47.0 + vR.y * 20.0) + 0.006 * sin(c.x * 131.0 + vR.z * 9.0);
    float ink = (1.0 - smoothstep(0.002, 0.006, abs(c.y - y))) * step(0.1, c.x) * step(c.x, 0.3 + vR.z * 0.45) * (0.5 + 0.5 * vnoise(c * vec2(40.0, 200.0)));
    col = mix(col, vec3(0.08, 0.1, 0.22), ink * 0.85);
  }
  float sh = pow(max(0.0, sin((c.x * 0.8 + c.y) * 2.6 - uT * 0.6 + vR.w * 6.28)), 30.0) * 0.28;
  gl_FragColor = vec4((col + sh) * (vLit + uFlash) * vFog, 1.0);
}`;

const ATLAS = cardFrag('uniform sampler2D uAtlas;', 'col = texture2D(uAtlas, vUVr.xy + im * vUVr.zw).rgb;');
const HERO = cardFrag('uniform sampler2D uBig; uniform float uDev;', `
    vec3 ph = texture2D(uBig, im).rgb; float l = dot(ph, vec3(0.3, 0.5, 0.2));
    vec3 und = vec3(0.05, 0.065, 0.07) + vec3(0.02, 0.03, 0.02) * vnoise(im * 9.0);
    float k = smoothstep(0.0, 1.0, uDev * 1.7 - (1.0 - l) * 0.7);
    col = mix(und, ph, k); col.b = mix(und.b, ph.b, smoothstep(0.0, 1.0, uDev * 1.5 - (1.0 - l) * 0.7 - 0.12));`);

const CAM = [[37.6, 0.4, 0.3, 17, 0], [43.5, 0.1, 0.05, 7.8, 0.02], [45.2, -0.1, 0, 4.3, 0], [47.7, -0.12, 0, 3.9, 0], [50.5, -0.2, -0.4, 7.2, 0.4], [53.3, -0.25, -0.45, 11.5, 1.2]];

export class Polaroids extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 40, near: 0.05, far: 200 });
    this.U = { uT: { value: 0 }, uAspect: { value: ctx.aspect } };
    this.scene.add(bgQuad(BG, this.U));
    const light = { value: new THREE.Vector3() }, flash = { value: 0 }, T = this.U.uT, R = rng(21);
    const geo = new THREE.PlaneGeometry(PW, PH), aUV = new Float32Array(N * 4), aR = new Float32Array(N * 4);
    this.cards = Array.from({ length: N }, (_, i) => {
      aUV.set(photoUV(i % 11), i * 4); for (let j = 0; j < 4; j++) aR[i * 4 + j] = R();
      const depth = R();
      return { r: 1.25 + R() * 3.0, a: R() * 6.283, w: (R() - 0.5) * 0.04, z: lerp(-24, 13, (i + R()) / N), ph: R() * 6.28,
        rx: (R() - 0.5) * 0.7, ry: (R() - 0.5) * 0.9, rz: (R() - 0.5) * 0.6, oa: R() * 6.283, or: 1.0 + depth * 2.6 + R() * 0.4, oz: HZ - 0.4 - depth * 7.5, os: 1.5 - depth * 0.7 };
    });
    geo.setAttribute('aUV', new THREE.InstancedBufferAttribute(aUV, 4)); geo.setAttribute('aR', new THREE.InstancedBufferAttribute(aR, 4));
    const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: ATLAS, side: THREE.DoubleSide,
      uniforms: { uAtlas: { value: ctx.shared.photos }, uLight: light, uLitK: { value: 1 }, uT: T, uFlash: flash } });
    this.inst = new THREE.InstancedMesh(geo, mat, N); this.inst.frustumCulled = false; this.scene.add(this.inst);
    const hg = new THREE.PlaneGeometry(PW, PH);
    hg.setAttribute('aUV', new THREE.Float32BufferAttribute(new Array(16).fill(0), 4));
    hg.setAttribute('aR', new THREE.Float32BufferAttribute([0.9, 0.3, 0.5, 0.2, 0.9, 0.3, 0.5, 0.2, 0.9, 0.3, 0.5, 0.2, 0.9, 0.3, 0.5, 0.2], 4));
    this.HU = { uBig: { value: ctx.shared.big }, uDev: { value: 0 }, uLight: light, uLitK: { value: 1.15 }, uT: T, uFlash: flash };
    this.hero = new THREE.Mesh(hg, new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: HERO, uniforms: this.HU, side: THREE.DoubleSide }));
    this.hero.frustumCulled = false; this.scene.add(this.hero);
    this.halo = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: ctx.shared.glow, color: new THREE.Color(1.0, 0.62, 0.3),
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.scene.add(this.halo);
    this.light = light; this.flash = flash; this.D = new THREE.Object3D();
  }
  update(t) {
    const cam = this.camera, [x, y, z, roll] = keys(t, CAM, ease.inOut), D = this.D;
    cam.position.set(x, y, z); cam.lookAt(x * 0.5 + HX * 0.5, 0, z - 10); cam.rotateZ(roll); cam.updateMatrixWorld();
    this.U.uT.value = t; this.U.uAspect.value = this.ctx.aspect;
    this.light.value.set(lerp(x + 0.6, HX + 0.3, smooth(43.5, 45, t)), lerp(1.2, 0.8, smooth(43.5, 45, t)), lerp(z - 5, HZ + 1.2, smooth(43.5, 45, t)));
    this.flash.value = t > T_SNAP ? 1.4 * Math.exp(-(t - T_SNAP) * 5) : 0;
    const v = ease.inOut(range(t, T_VORTEX, 50.4)), u = Math.max(0, t - T_VORTEX), spin = 0.3 * u + 0.28 * u * u;
    this.cards.forEach((c, i) => {
      const a = c.a + t * c.w;
      let px = HX + c.r * Math.cos(a), py = HY + c.r * Math.sin(a) * 0.72, pz = c.z + Math.sin(t * 0.3 + c.ph) * 0.25;
      let rx = c.rx + Math.sin(t * 0.21 + c.ph) * 0.15, ry = c.ry + Math.cos(t * 0.17 + c.ph) * 0.2, rz = c.rz;
      if (v > 0) {
        const oa = c.oa + spin * c.os;
        px = lerp(px, HX + c.or * Math.cos(oa), v); py = lerp(py, HY + c.or * Math.sin(oa), v); pz = lerp(pz, c.oz, v);
        rx = lerp(rx, 0.2 * Math.sin(oa), v); ry = lerp(ry, 0.2 * Math.cos(oa), v); rz = lerp(rz, oa + Math.PI / 2, v);
      }
      D.position.set(px, py, pz); D.rotation.set(rx, ry, rz); D.updateMatrix(); this.inst.setMatrixAt(i, D.matrix);
    });
    this.inst.instanceMatrix.needsUpdate = true;
    const hu = range(t, T_SNAP, 44.75), he = ease.out(hu);
    const pre = t < T_SNAP - 0.05; // keep the hero in the scene graph (shader warm-up), parked off-screen
    this.hero.position.set(HX, pre ? 60 : HY + (1 - he) * 1.8 + 0.02 * Math.sin(t * 0.8), HZ);
    this.hero.rotation.set((1 - he) * 0.5, 0.04 * Math.sin(t * 0.5), (1 - he) * 0.35 + 0.02 * Math.sin(t * 0.37));
    this.HU.uDev.value = ease.inOut(range(t, 44.4, 47.4));
    const end = smooth(49, 52.8, t);
    this.halo.visible = !pre;
    this.halo.position.set(HX, this.hero.position.y, HZ - 0.08); this.halo.scale.setScalar(lerp(2.6, 6.5, end));
    this.halo.material.opacity = 0.12 + 0.3 * this.HU.uDev.value + 0.45 * end;
  }
  post(t) {
    const f = t > T_SNAP ? Math.exp(-(t - T_SNAP) * 9) : 0;
    return { tint: [1.1, 0.98, 0.86], sat: 0.95, bloom: 0.85, bloomThr: 0.7, vig: 0.85, grain: 0.07, dust: 0.5, dustCol: [1, 0.82, 0.6], ca: 0.4, fadeW: 0.6 * f, exposure: 1 + 0.25 * smooth(50.5, 52.8, t) };
  }
}
