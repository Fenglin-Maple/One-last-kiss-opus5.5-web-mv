// Oh can you give me one last kiss? / 燃えるようなキスをしよう / 忘れたくても
// Above a sea of dusk clouds two comets - his gold, her red - spiral in toward the setting sun, circling
// tighter and tighter until they meet (103.72, "燃えるような"): a flash, a shock ring, and the fire spreads
// across the cloud tops from that point. Embers pour upward past the camera as we push into the burning sky.
import * as THREE from 'three';
import { Scene } from './base.js';
import { plateMat, plateMesh } from '../core/images.js';
import { clamp, smooth, range, ease, lerp } from '../core/util.js';
import { audio } from '../core/audio.js';

const T0 = 97.6, T1 = 112.6, TK = 103.72, TC = 98.2;       // start, kiss, comets appear
const KP = [0.8, 0.515];                                     // sun in image uv (v up)
const NS = 110, NE = 2600;

const HEAD = /* glsl */ `uniform float uFire, uFireR, uKiss, uBeat; uniform vec2 uKP;`;
const WARP = /* glsl */ `
  // heat shimmer over burning cloud tops
  float hs = uFire * smoothstep(uFireR, uFireR - 0.3, length((uv - uKP) * vec2(uImgAspect, 1.0))) * 0.004;
  return uv + vec2(vnoise(uv * 30.0 + vec2(0.0, uT * 2.0)) - 0.5, vnoise(uv * 30.0 - vec2(uT * 2.0, 0.0)) - 0.5) * hs;`;
const HOOK = /* glsl */ `
  vec2 q = (uv - uKP) * vec2(uImgAspect, 1.0); float r = length(q);
  // sun: breathes with the beat, brightens toward the kiss
  col += vec3(1.0, 0.7, 0.4) * exp(-r * 9.0) * (0.2 + 0.25 * uBeat + 0.35 * uKiss);
  // fire front: noisy radius spreading from the kiss point, flames boil on the lit side of each cloud
  float n = fbm3(vec3(uv * vec2(uImgAspect, 1.0) * 5.0, uT * 0.35)), front = uFireR + (n - 0.5) * 0.35;
  float burn = smoothstep(front, front - 0.12, r) * uFire;
  float rim = smoothstep(0.05, 0.0, abs(r - front)) * uFire * step(0.02, uFireR);
  float lum = dot(col, vec3(0.3, 0.55, 0.15));
  vec3 fire = mix(vec3(0.16, 0.012, 0.02), vec3(1.25, 0.42, 0.08), smoothstep(0.1, 0.65, lum));
  fire += vec3(1.3, 0.55, 0.12) * pow(fbm3(vec3(uv * 14.0, uT * 1.2) - vec3(0.0, uT * 0.6, 0.0)), 3.0) * 2.2 * smoothstep(0.05, 0.3, d);
  fire *= 0.85 + 0.3 * uBeat;
  col = mix(col, fire, burn);
  col += vec3(1.1, 0.35, 0.05) * rim * (0.3 + n) * 0.6;
  // the sky above the fire turns to smoke-red
  col = mix(col, col * vec3(0.7, 0.25, 0.22) + vec3(0.06, 0.0, 0.01), burn * smoothstep(0.1, 0.0, d) * 0.6);
  // shock ring
  float ring = uKiss * exp(-pow((r - (1.0 - uKiss) * 1.4) * 30.0, 2.0));
  col += vec3(1.2, 0.7, 0.45) * ring * 0.45;
  return col;`;

const TRAIL_VERT = /* glsl */ `attribute float aV, aS; varying float vV, vS; void main(){ vV = aV; vS = aS; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const TRAIL_FRAG = /* glsl */ `uniform vec3 uCol; uniform float uA; varying float vV, vS;
void main(){
  float f = pow(1.0 - vS, 1.6);
  float core = exp(-vV * vV * 18.0), glow = exp(-vV * vV * 3.0) * 0.5;
  gl_FragColor = vec4((uCol * (glow + core) + vec3(1.0) * core * core * 0.25 * f) * f * uA, 1.0);
}`;
const EMBER_VERT = /* glsl */ `
attribute vec4 aR; uniform float uT, uAspect, uPx, uDen, uSpd, uFire;
varying float vB, vH;
float h1(float n){ return fract(sin(n * 91.3) * 43758.5); }
void main(){
  float z = mix(0.35, 1.6, aR.z), up = uSpd * (0.25 + 0.3 * aR.w) * z;
  float y = mod(aR.y * 2.6 + uT * up, 2.6) - 1.3;
  float x = (aR.x * 2.0 - 1.0) * (uAspect + 0.3) + 0.06 * sin(uT * (0.8 + aR.w) + aR.x * 40.0) * z + uT * 0.02 * z;
  x = mod(x + uAspect + 0.3, 2.0 * (uAspect + 0.3)) - uAspect - 0.3;
  float flick = 0.55 + 0.45 * sin(uT * (6.0 + 9.0 * aR.w) + aR.x * 70.0);
  vB = step(aR.w, uDen) * flick * mix(0.5, 1.0, aR.z); vH = aR.z;
  gl_PointSize = uPx * z * z * (0.7 + 0.6 * h1(aR.x * 13.0));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(x, y, 0.0, 1.0);
}`;
const EMBER_FRAG = /* glsl */ `uniform float uFire; varying float vB, vH;
void main(){ float r = length(gl_PointCoord - 0.5); if (vB < 0.01) discard;
  vec3 c = mix(vec3(1.0, 0.75, 0.4), mix(vec3(1.0, 0.3, 0.05), vec3(1.0, 0.65, 0.25), vH), uFire);
  gl_FragColor = vec4(c * smoothstep(0.5, 0.05, r) * vB * (0.6 + 0.8 * smoothstep(0.2, 0.0, r)), 1.0); }`;
function strip() {
  const g = new THREE.BufferGeometry(), n = (NS + 1) * 2, aV = new Float32Array(n), aS = new Float32Array(n), idx = [];
  for (let i = 0; i <= NS; i++) { aV[i * 2] = -1; aV[i * 2 + 1] = 1; aS[i * 2] = aS[i * 2 + 1] = i / NS; }
  for (let i = 0; i < NS; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  g.setAttribute('aV', new THREE.BufferAttribute(aV, 1)); g.setAttribute('aS', new THREE.BufferAttribute(aS, 1));
  g.setIndex(idx); return g;
}

export class Embers extends Scene {
  constructor(ctx) {
    super(ctx, { ortho: true });
    const I = ctx.img, V = (v) => ({ value: v });
    this.M = plateMat(I.clouds, I.clouds_d, { head: HEAD, hook: HOOK, warp: WARP,
      uniforms: { uFire: V(0), uFireR: V(0), uKiss: V(0), uBeat: V(0), uKP: V(new THREE.Vector2(...KP)) } });
    this.scene.add(plateMesh(this.M));
    const blend = { transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending };
    this.cols = [new THREE.Color(1.0, 0.62, 0.16), new THREE.Color(1.0, 0.08, 0.12)];
    this.tr = this.cols.map((c) => {
      const m = new THREE.Mesh(strip(), new THREE.ShaderMaterial({ vertexShader: TRAIL_VERT, fragmentShader: TRAIL_FRAG,
        uniforms: { uCol: V(new THREE.Vector3(c.r, c.g, c.b)), uA: V(0) }, side: THREE.DoubleSide, ...blend }));
      m.frustumCulled = false; m.renderOrder = 2; return m;
    });
    const spr = (c) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: ctx.shared.glow, color: c, ...blend }));
      m.renderOrder = 3; return m; };
    this.heads = this.cols.map((c) => spr(c));
    this.flash = spr(new THREE.Color(1, 0.8, 0.6));
    const aR = new Float32Array(NE * 4); for (let i = 0; i < aR.length; i++) aR[i] = Math.random();
    const eg = new THREE.BufferGeometry();
    eg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NE * 3), 3));
    eg.setAttribute('aR', new THREE.BufferAttribute(aR, 4));
    this.EU = { uT: V(0), uAspect: V(16 / 9), uPx: V(6), uDen: V(0), uSpd: V(0.1), uFire: V(0) };
    this.emb = new THREE.Points(eg, new THREE.ShaderMaterial({ vertexShader: EMBER_VERT, fragmentShader: EMBER_FRAG, uniforms: this.EU, ...blend }));
    this.emb.frustumCulled = false; this.emb.renderOrder = 4;
    this.scene.add(...this.tr, ...this.heads, this.flash, this.emb);
  }
  toWorld(u, v, d) {
    const U = this.M.uniforms, c = U.uCam.value, p = U.uPar.value, dl = U.uDolly.value, a = this.ctx.aspect;
    const ra = a / U.uImgAspect.value, sx = ra > 1 ? 1 : ra, sy = ra > 1 ? 1 / ra : 1, k = 1 + dl * d;
    const bx = 0.5 + c.x + (u - 0.5 - c.x) * k + p.x * (d - 0.5), by = 0.5 + c.y + (v - 0.5 - c.y) * k + p.y * (d - 0.5);
    return [(bx - 0.5 - c.x) * c.z / sx * 2 * a, (by - 0.5 - c.y) * c.z / sy * 2];
  }
  // comet k at time t: a tightening, tilted spiral around a centre that drifts into the sun
  head(k, t, M) {
    const u = range(t, TC - 0.4, TK), c0 = [-0.25, 0.05];
    const cx = lerp(c0[0], M[0], ease.inOut(u)), cy = lerp(c0[1], M[1], ease.inOut(u));
    const R = 1.25 * Math.pow(1 - u, 0.9), a = 2 * Math.PI * (0.15 + 3.4 * Math.pow(u, 1.25)) * (k ? 1.08 : 1) + k * 2.2;
    const ex = R * Math.cos(a) * 1.25, ey = R * Math.sin(a) * 0.42, tl = k ? -0.42 : 0.3, ct = Math.cos(tl), st = Math.sin(tl);
    return [cx + ex * ct - ey * st, cy + ex * st + ey * ct, 1 + 0.35 * Math.sin(a)];
  }
  update(t) {
    const U = this.M.uniforms, a = this.ctx.aspect, kiss = t >= TK;
    U.uT.value = t; U.uAspect.value = a;
    const pk = ease.inOut(range(t, TK - 0.3, T1));
    U.uCam.value.set(lerp(0, 0.1, pk) + 0.006 * Math.sin(t * 0.5), lerp(0.02, 0.01, pk), lerp(1.0, 1.1, range(t, T0, TK)) + 0.3 * pk);
    U.uPar.value.set(0.02 * Math.sin(t * 0.37), 0.012 * Math.sin(t * 0.29 + 1)); U.uDolly.value = 0.03 + 0.12 * range(t, T0, T1);
    U.uGain.value = smooth(T0 - 0.1, T0 + 0.4, t);
    const beat = audio.beatPulse(t, 4); U.uBeat.value = beat;
    U.uKiss.value = kiss ? 1 - ease.out(range(t, TK, TK + 1.6)) : 0;
    U.uFire.value = smooth(TK, TK + 0.3, t);
    U.uFireR.value = kiss ? 1.9 * ease.out(range(t, TK, TK + 5.0)) : 0;
    // comets + trails in world space
    const M = this.toWorld(KP[0], KP[1], 0.05), s = this.ctx.h / 720;
    const vis = smooth(TC - 0.4, TC + 0.5, t), fade = 1 - smooth(TK, TK + 1.0, t);
    this.tr.forEach((m, k) => {
      m.material.uniforms.uA.value = vis * fade;
      const pos = m.geometry.attributes.position.array, pts = [];
      for (let i = 0; i <= NS; i++) pts.push(this.head(k, t - (i / NS) * 1.3, M));
      for (let i = 0; i <= NS; i++) {
        const p0 = pts[Math.max(0, i - 1)], p1 = pts[Math.min(NS, i + 1)];
        let tx = p1[0] - p0[0], ty = p1[1] - p0[1]; const l = Math.hypot(tx, ty) || 1; tx /= l; ty /= l;
        const [x, y, z] = pts[i], W = 0.045 * z * (1 - 0.8 * i / NS);
        pos.set([x - ty * W, y + tx * W, 0, x + ty * W, y - tx * W, 0], i * 6);
      }
      m.geometry.attributes.position.needsUpdate = true;
      const [hx, hy, hz] = pts[0], hs = (0.22 + 0.06 * beat) * hz;
      this.heads[k].position.set(hx, hy, 0); this.heads[k].scale.set(hs, hs, 1);
      this.heads[k].material.opacity = vis * fade;
    });
    const fl = kiss ? Math.exp(-(t - TK) * 2.2) : smooth(TK - 0.8, TK, t) * 0.4;
    this.flash.position.set(M[0], M[1], 0); this.flash.scale.setScalar(0.2 + 0.9 * fl + 0.2 * U.uFire.value);
    this.flash.material.opacity = 0.12 * U.uFire.value + 0.45 * fl;
    // embers
    const E = this.EU; E.uT.value = t; E.uAspect.value = a; E.uPx.value = 6 * s; E.uFire.value = U.uFire.value;
    E.uDen.value = 0.06 + 0.55 * smooth(TK, TK + 2.5, t) + 0.35 * smooth(107.5, 110.5, t);
    E.uSpd.value = 0.1 + 0.25 * smooth(TK, TK + 1.5, t) + 0.25 * smooth(108, 112, t);
  }
  post(t) {
    const f = smooth(TK, TK + 1.2, t), k = t >= TK ? Math.exp(-(t - TK) * 4) : 0;
    return { tint: [lerp(1.0, 1.1, f), lerp(0.96, 0.9, f), lerp(1.05, 0.8, f)], sat: 1.0 + 0.1 * f, contrast: 1.05, bloom: 0.7 + 0.35 * f + 0.3 * k,
      bloomThr: lerp(0.75, 0.6, f), vig: 0.5 + 0.2 * f, leak: 0.2 * f, grain: 0.06, fadeW: 0.2 * k, dust: 0.25, dustCol: [1, 0.7, 0.45], ca: 0.4 + 0.6 * k };
  }
}
