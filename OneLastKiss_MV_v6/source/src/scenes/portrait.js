// S2 Portrait 25.1 -> 29.02: "私だけのモナリザ" - warm dust swirls into a portrait inside a gilded frame;
// "もうとっくに出会ってたから" - two small lights (warm = me, cold = you) find each other at its heart.
import * as THREE from 'three';
import { Scene, bgQuad, pointsMat } from './base.js';
import { NOISE, POINT_FRAG } from '../core/glsl.js';
import { StrokeSet, circlePts } from '../core/stroke.js';
import { bustCanvas } from '../core/textures.js';
import { sampleCanvas } from '../core/figures.js';
import { audio } from '../core/audio.js';
import { range, ease, rng, lerp } from '../core/util.js';

const CX = 0.42, CY = 0.02;

const BG = `uniform float uT, uAspect, uWarm; uniform vec2 uC; varying vec2 vUv; ${NOISE}
void main(){
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0) * 2.0, d = p - uC;
  float spot = exp(-dot(d * vec2(0.8, 0.55), d * vec2(0.8, 0.55)) * 1.4);
  float cone = smoothstep(0.7, 0.0, abs(d.x) - (1.2 - p.y) * 0.3) * smoothstep(-1.4, 1.0, p.y) * 0.6;
  float n = fbm(p * 2.5 + 3.0), dam = 0.5 + 0.5 * sin(p.x * 34.0 + sin(p.y * 17.0) * 2.0) * sin(p.y * 34.0);
  vec3 col = vec3(0.01, 0.006, 0.004) + vec3(0.075, 0.042, 0.022) * (spot * (0.75 + 0.35 * n) + cone) * (0.85 + 0.15 * dam) * uWarm;
  gl_FragColor = vec4(col, 1.0);
}`;

const PV = `attribute vec2 aTgt; attribute vec4 aR; uniform float uT, uPulse, uRot, uAlpha; uniform vec2 uC, uRes;
varying vec3 vCol; varying float vA; ${NOISE}
void main(){
  float k = clamp((uT - 24.7 - aR.z * 1.8) / 1.7, 0.0, 1.0), e = k * k * (3.0 - 2.0 * k);
  float ang = aR.x + (1.0 - e) * (3.2 + uT * 0.25);
  vec2 p = mix(uC + vec2(cos(ang), sin(ang)) * aR.y * (1.0 - e), uC + aTgt, e);
  p += (vec2(vnoise(aTgt * 11.0 + uT * 0.5), vnoise(aTgt * 11.0 - uT * 0.5 + 20.0)) - 0.5) * 0.01;
  vec2 r = p - uC; float c = cos(uRot), s = sin(uRot); p = uC + vec2(c * r.x - s * r.y, s * r.x + c * r.y);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 0.0, 1.0);
  float tw = 0.6 + 0.4 * sin(uT * (1.5 + aR.w * 3.0) + aR.w * 40.0);
  gl_PointSize = (1.8 + aR.w * 2.4) * (1.0 + uPulse * 0.3 + (1.0 - e) * 1.2) * uRes.y / 1080.0;
  vec3 gold = vec3(1.0, 0.6, 0.26), rose = vec3(1.0, 0.34, 0.28), cream = vec3(1.0, 0.85, 0.62);
  vCol = aR.w < 0.5 ? mix(gold, cream, aR.w * 2.0) : mix(gold, rose, aR.w * 2.0 - 1.0);
  vA = (0.3 + 0.25 * tw) * (0.35 + 0.65 * e) * uAlpha;
}`;

function frame(S) {
  const gold = [1.35, 0.85, 0.4], deep = [0.8, 0.46, 0.2], t0 = 24.75;
  const rect = (hw, hh, ch, o) => {
    for (const sd of [-1, 1]) S.add([[CX, CY + hh], [CX + sd * (hw - ch), CY + hh], [CX + sd * hw, CY + hh - ch],
      [CX + sd * hw, CY - hh + ch], [CX + sd * (hw - ch), CY - hh], [CX, CY - hh]], o);
  };
  rect(0.61, 0.78, 0.05, { start: t0, dur: 1.3, width: 3.2, color: gold });
  rect(0.55, 0.71, 0.03, { start: t0 + 0.2, dur: 1.3, width: 1.3, color: deep });
  rect(0.49, 0.645, 0.001, { start: t0 + 0.4, dur: 1.2, width: 2.0, color: gold });
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) {
    const x = CX + sx * 0.61, y = CY + sy * 0.78, pts = [];
    for (let i = 0; i <= 40; i++) {
      const u = i / 40, a = u * Math.PI * 2.4, r = 0.075 * (1 - 0.8 * u);
      pts.push([x + sx * r * Math.cos(a), y + sy * (0.02 + r * Math.sin(a))]);
    }
    S.add(pts, { start: t0 + 1.1, dur: 0.7, width: 1.8, color: gold });
  }
  S.add(circlePts(CX, CY + 0.78, 0.11, 30, 0, Math.PI), { start: t0 + 1.2, dur: 0.6, width: 2.2, color: gold });
  S.add(circlePts(CX, CY + 0.78, 0.06, 20, 0, Math.PI), { start: t0 + 1.35, dur: 0.5, width: 1.4, color: deep });
}

export class Portrait extends Scene {
  constructor(ctx) {
    super(ctx, { ortho: true });
    this.U = { uT: { value: 0 }, uAspect: { value: ctx.aspect }, uWarm: { value: 1 }, uC: { value: new THREE.Vector2(CX, CY) } };
    this.scene.add(bgQuad(BG, this.U));
    const gm = (c) => new THREE.MeshBasicMaterial({ map: ctx.shared.glow, color: new THREE.Color(...c), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false });
    const quad = new THREE.PlaneGeometry(1, 1);
    this.halo = new THREE.Mesh(quad, gm([0.5, 0.3, 0.14])); this.halo.position.set(CX, CY, 0); this.halo.scale.set(2.2, 2.6, 1);
    this.scene.add(this.halo);
    const N = Math.round(42000 * Math.max(0.6, ctx.quality || 1));
    const tg = sampleCanvas(bustCanvas(300, 400), N, 11), R = rng(5);
    const aT = new Float32Array(N * 2), aR = new Float32Array(N * 4);
    for (let i = 0; i < N; i++) {
      aT[i * 2] = tg[i * 2] * 0.62; aT[i * 2 + 1] = tg[i * 2 + 1] * 0.62;
      aR[i * 4] = R() * Math.PI * 2; aR[i * 4 + 1] = 0.7 + R() * 2.4; aR[i * 4 + 2] = R(); aR[i * 4 + 3] = R();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    g.setAttribute('aTgt', new THREE.BufferAttribute(aT, 2)); g.setAttribute('aR', new THREE.BufferAttribute(aR, 4));
    this.PU = { uT: { value: 0 }, uPulse: { value: 0 }, uRot: { value: 0 }, uAlpha: { value: 1 }, uC: this.U.uC, uRes: { value: new THREE.Vector2() } };
    this.pts = new THREE.Points(g, pointsMat(PV, POINT_FRAG, this.PU, { depthTest: false }));
    this.pts.frustumCulled = false; this.scene.add(this.pts);
    this.S = new StrokeSet(); frame(this.S);
    this.scene.add(this.S.build({ uBoil: { value: 0.5 }, uTip: { value: 4 } }));
    this.me = new THREE.Mesh(quad, gm([1.5, 0.75, 0.3])); this.you = new THREE.Mesh(quad, gm([0.4, 0.7, 1.6]));
    this.scene.add(this.me, this.you);
  }
  update(t) {
    const P = this.PU; P.uT.value = t; P.uPulse.value = audio.beatPulse(t, 8); P.uRes.value.copy(this.ctx.res);
    P.uRot.value = -ease.inOut(range(t, 28.0, 29.6)) * 1.1;
    this.U.uT.value = t; this.U.uAspect.value = this.ctx.aspect;
    this.U.uWarm.value = 0.6 + 0.4 * ease.out(range(t, 24.8, 26.5)) + 0.25 * ease.out(range(t, 26.9, 27.6));
    this.S.set(t, this.ctx.res);
    this.halo.material.opacity = 0.35 * ease.out(range(t, 25.3, 26.8)) + 0.3 * ease.out(range(t, 26.9, 27.6));
    const on = ease.out(range(t, 26.9, 27.7)), a = t * 1.9, r = lerp(0.35, 0.07, ease.inOut(range(t, 26.9, 28.2)));
    const hx = CX - 0.02, hy = CY - 0.3;
    this.me.position.set(hx + Math.cos(a) * r, hy + Math.sin(a) * r * 0.6, 0);
    this.you.position.set(hx - Math.cos(a) * r, hy - Math.sin(a) * r * 0.6, 0);
    for (const m of [this.me, this.you]) { m.material.opacity = on; m.scale.setScalar(0.16 + 0.04 * P.uPulse.value); }
    const cam = this.camera, z = 1 + 0.06 * ease.sine(range(t, 24.6, 29.4));
    if (cam.zoom !== z) { cam.zoom = z; cam.position.x = (z - 1) * CX * 2; cam.updateProjectionMatrix(); }
  }
  post() {
    return { tint: [1.12, 0.97, 0.8], sat: 1.05, bloom: 1.0, bloomThr: 0.55, vig: 0.85, grain: 0.05, dust: 0.45, dustCol: [1, 0.8, 0.55], ca: 0.35 };
  }
}
