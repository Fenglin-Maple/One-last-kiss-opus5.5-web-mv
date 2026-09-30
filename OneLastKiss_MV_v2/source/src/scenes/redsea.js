// もう分かっているよ / この世の終わりでも / 年をとっても
// The end of the world: a blood-red sea under a huge pale planet. The camera sinks from the planet's face
// down its moon-path to two small figures standing knee-deep in the shallows, backs to us. Ripples ring out
// from their feet, painted stars twinkle and slowly draw trails, red LCL bokeh rises from the water.
// On 年をとっても they drift together; where their hands meet a small light is born, rises toward the
// planet, and blooms into the flash that opens the helix.
import * as THREE from 'three';
import { Scene } from './base.js';
import { plateMat, plateMesh, cutMat, cutGeo, plateToWorld } from '../core/images.js';
import { POINT_FRAG } from '../core/glsl.js';
import { clamp, smooth, range, ease, lerp, keys, rng } from '../core/util.js';

const T0 = 149.03, T1 = 166.17, TM0 = 159.6, TM1 = 163.9, TL = 163.7, TR = 164.7;
const HOR = 0.565, PC = [0.51, 0.73], PR = 0.21;         // horizon, planet centre / radius (image v-up)
const FV = 0.37, FD = 0.37;                              // waterline of the couple, its depth
const HER = { h: 0.118, clip: 0.24 }, HIM = { h: 0.134, clip: 0.27 };

const HEAD = /* glsl */ `uniform vec4 uFeet; uniform vec3 uHand; uniform float uTrail, uRot;
const float HOR = ${HOR}; const vec2 PC = vec2(${PC[0]}, ${PC[1]}); const float PR = ${PR};
float ring(vec2 uv, vec2 f){ float e = length((uv - f) * vec2(uImgAspect, 5.5)); return e; }`;

const WARP = /* glsl */ `
  float b = HOR - uv.y;
  if (b <= 0.0) return uv;
  // sea plane coordinates: ripples shrink toward the horizon
  vec2 P = vec2((uv.x - 0.5) * uImgAspect / b, 1.0 / b) * 0.15;
  float n1 = vnoise(P * vec2(2.5, 5.0) + vec2(uT * 0.12, uT * 0.35));
  float n2 = vnoise(P * vec2(6.0, 12.0) - vec2(uT * 0.2, -uT * 0.55));
  vec2 w = vec2(n1 - 0.5, (n2 - 0.5) * 0.6) * 0.01 * smoothstep(0.0, 0.04, b) * (0.35 + b * 2.2);
  for (int i = 0; i < 2; i++) {
    vec2 f = i == 0 ? uFeet.xy : uFeet.zw; float e = ring(uv, f);
    w += normalize((uv - f) * vec2(uImgAspect, 5.5) + 1e-5) * sin(e * 120.0 - uT * 4.0 + float(i) * 2.0) * exp(-e * 14.0) * 0.0016;
  }
  return uv + w;
`;

const HOOK = /* glsl */ `
  vec2 pq = (uv - PC) * vec2(uImgAspect, 1.0) / PR; float pr = length(pq);
  float lum = dot(col, vec3(0.3, 0.55, 0.15));
  if (uv.y > HOR) {
    if (pr < 1.0) {
      // weather drifts across the disc (sphere-mapped fbm shadows) + a breathing limb
      float z = sqrt(1.0 - pr * pr); vec2 sp = pq / (z + 0.35);
      float cs = fbm(sp * 2.2 + vec2(uT * 0.05, uT * 0.01));
      col *= mix(1.0, 0.72 + 0.56 * cs, 0.5 * smoothstep(1.0, 0.75, pr)) * 0.82;
      col *= 1.0 + 0.25 * smoothstep(0.8, 1.0, pr) * (0.5 + 0.5 * sin(uT * 0.9));
    } else if (d < 0.03) {
      // painted stars twinkle; long-exposure trails grow around a pole
      col *= mix(1.0, 0.5 + vnoise(uv * vec2(uImgAspect, 1.0) * 420.0 + uT * 1.7) * 1.1, smoothstep(0.12, 0.4, lum));
      vec2 pp = (uv - vec2(0.2, 1.15)) * vec2(uImgAspect, 1.0); float rr = length(pp) * 90.0, an = atan(pp.y, pp.x);
      float ri = floor(rr), hh = hash12(vec2(ri, 7.0));
      if (hh > 0.55 && pr > 1.06) {
        float len = uTrail * (0.08 + 0.3 * hash12(vec2(ri, 5.0)));
        float da = mod(uRot + hash12(vec2(ri, 3.0)) * 6.2832 - an, 6.2832);
        float line = smoothstep(0.16, 0.0, abs(fract(rr) - 0.5)) * step(da, len);
        col += vec3(0.75, 0.82, 1.0) * line * mix(1.0, 0.25, da / max(len, 1e-3)) * (0.1 + 0.3 * (hh - 0.55) / 0.45);
      }
    }
    // atmosphere halo
    float halo = exp(-max(pr - 1.0, 0.0) * 10.0) * smoothstep(0.94, 1.0, pr);
    col += mix(vec3(0.45, 0.65, 1.0), vec3(1.0, 0.3, 0.3), smoothstep(-0.3, -0.9, pq.y)) * halo * (0.28 + 0.12 * sin(uT * 0.9));
  } else {
    float b = HOR - uv.y;
    // glitter on the moon path
    float path = exp(-pow((uv.x - PC.x) / (0.03 + b * 0.35), 2.0));
    vec2 gg = vec2(uv.x * uImgAspect * 260.0, uv.y * 900.0 / (0.2 + b * 4.0));
    float sp = step(0.95, hash12(floor(gg) + floor(uT * 9.0) * 17.0)) * smoothstep(0.3, 0.75, lum);
    col += vec3(1.0, 0.92, 0.88) * sp * path * 1.2;
    // bright ripple crests round their feet
    for (int i = 0; i < 2; i++) {
      vec2 f = i == 0 ? uFeet.xy : uFeet.zw; float e = ring(uv, f);
      col += vec3(1.0, 0.75, 0.72) * pow(max(sin(e * 120.0 - uT * 4.0 + float(i) * 2.0), 0.0), 10.0) * exp(-e * 11.0) * 0.35 * smoothstep(0.0, 0.01, e);
    }
    // the born light's reflection streak
    col += vec3(1.0, 0.75, 0.5) * exp(-length((uv - uHand.xy) * vec2(uImgAspect * 40.0, 7.0))) * uHand.z;
    // horizon glow line
    col += vec3(1.0, 0.25, 0.2) * exp(-b * 90.0) * 0.12;
  }
  return col;
`;

const BOKEH_VERT = /* glsl */ `attribute vec4 aR; uniform float uT, uA, uPx, uAsp; varying vec3 vCol; varying float vA;
void main(){
  float y = fract(aR.y + uT * (0.006 + 0.014 * aR.z));
  vec3 p = vec3((aR.x * 2.0 - 1.0) * uAsp * 1.05 + 0.04 * sin(uT * 0.3 + aR.w * 6.0), y * 2.4 - 1.2, 0.0);
  vA = uA * smoothstep(0.0, 0.2, y) * smoothstep(1.0, 0.65, y) * (0.3 + 0.7 * aR.w) * 0.3 / (1.0 + aR.z * 2.5);
  vCol = mix(vec3(1.0, 0.12, 0.08), vec3(1.0, 0.55, 0.42), aR.w * aR.w);
  gl_PointSize = uPx * (3.0 + 26.0 * aR.z * aR.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`;
const NB = 170;

export class RedSea extends Scene {
  constructor(ctx) {
    super(ctx, { ortho: true });
    const I = ctx.img, V = (v) => ({ value: v });
    this.M = plateMat(I.redsea, I.redsea_d, { head: HEAD, warp: WARP, hook: HOOK,
      uniforms: { uFeet: V(new THREE.Vector4()), uHand: V(new THREE.Vector3()), uTrail: V(0), uRot: V(0) } });
    this.scene.add(plateMesh(this.M));
    const mk = (entry, seed, refl) => {
      const m = new THREE.Mesh(cutGeo(entry, 1), cutMat(entry, { rim: 0.9, seed, wind: 0.5 }));
      m.material.side = THREE.DoubleSide; m.renderOrder = refl ? 0 : 1; m.frustumCulled = false;
      return m;
    };
    this.her = mk(I.cut_her_back, 2, 0); this.him = mk(I.cut_him, 5, 0);
    this.herR = mk(I.cut_her_back, 2, 1); this.himR = mk(I.cut_him, 5, 1);
    const blend = { transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending };
    this.spark = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: ctx.shared.glow, color: new THREE.Color(1, 0.8, 0.55), ...blend }));
    this.halo = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: ctx.shared.glow, color: new THREE.Color(1, 0.35, 0.25), ...blend }));
    this.spark.renderOrder = 3; this.halo.renderOrder = 3;
    const R = rng(149), aR = new Float32Array(NB * 4); for (let i = 0; i < aR.length; i++) aR[i] = R();
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NB * 3), 3));
    g.setAttribute('aR', new THREE.BufferAttribute(aR, 4));
    this.BU = { uT: V(0), uA: V(0), uPx: V(1), uAsp: V(16 / 9) };
    this.bokeh = new THREE.Points(g, new THREE.ShaderMaterial({ vertexShader: BOKEH_VERT, fragmentShader: POINT_FRAG, uniforms: this.BU, ...blend }));
    this.bokeh.renderOrder = 4; this.bokeh.frustumCulled = false;
    this.scene.add(this.herR, this.himR, this.her, this.him, this.halo, this.spark, this.bokeh);
  }
  // stand a cut-out knee-deep: its clip line sits on image point (u, FV); the mirrored copy hangs below
  stand(m, r, P, u) {
    const [x, y, s] = plateToWorld(this.M, this.ctx.aspect, u, FV, FD), h = P.h * s;
    m.position.set(x, y - P.clip * h, 0); m.scale.set(h, h, 1);
    r.position.set(x, y + P.clip * h, 0); r.scale.set(h, -h, 1);
    m.material.uniforms.uClip.value.set(P.clip, 0.006, 1, 0);
    r.material.uniforms.uClip.value.set(P.clip, 0.006, 0.28, 1);
  }
  update(t) {
    const U = this.M.uniforms, a = this.ctx.aspect;
    U.uT.value = t; U.uAspect.value = a; this.BU.uAsp.value = a; this.BU.uT.value = t;
    // camera: from the planet's face down the moon path to the couple, then a slow push-in toward the light
    const [cx, cy, z] = keys(t, [[T0, 0.01, 0.24, 2.3], [153.6, 0, -0.03, 1.15], [TM0, 0, -0.04, 1.25], [TL, 0, -0.06, 1.45], [T1, 0, -0.02, 1.62]]);
    const sw = 0.006 * Math.sin(t * 0.25);
    U.uCam.value.set(cx + sw, cy, z); U.uPar.value.set(-0.8 * sw, 0); U.uDolly.value = 0.04 * range(t, TM0, T1);
    U.uTrail.value = 0.15 + 0.1 * range(t, T0, TM0) + 1.3 * ease.inOut(range(t, TM0, T1)); U.uRot.value = (t - T0) * 0.03;
    // couple drifts together on 年をとっても
    const m = ease.inOut(range(t, TM0, TM1));
    const hu = lerp(0.452, 0.479, m), bu = lerp(0.552, 0.523, m);
    this.stand(this.her, this.herR, HER, hu); this.stand(this.him, this.himR, HIM, bu);
    U.uFeet.value.set(hu, FV - 0.002, bu, FV - 0.002);
    [this.her, this.him, this.herR, this.himR].forEach((o, i) => {
      const u = o.material.uniforms; u.uT.value = t; u.uWind.value = 0.35 + 0.25 * Math.sin(t * 0.4 + i);
      if (i < 2) { u.uTint.value.set(0.13, 0.1, 0.13); u.uRim.value.set(0.95, 0.88, 1.0, 0.85 + 0.1 * Math.sin(t * 0.9)); }
      else { u.uTint.value.set(0.09, 0.02, 0.03); u.uRim.value.set(0.9, 0.35, 0.35, 0.3); u.uAlpha.value = 0.7; }
    });
    // the light: born between their hands, flickers, then rises to the planet
    const born = smooth(TL - 0.3, TL + 0.6, t), rise = ease.in(range(t, TR, T1 + 0.05));
    const mu = (hu + bu) / 2, hv = FV + 0.021;
    const fl = 0.85 + 0.15 * Math.sin(t * 23) * Math.sin(t * 7.3);
    const pu = lerp(mu, PC[0], rise * 0.85), pv = lerp(hv, PC[1] - 0.05, rise), pd = lerp(FD, 0, rise);
    const [sx, sy, ss] = plateToWorld(this.M, a, pu, pv, pd);
    this.spark.position.set(sx, sy, 0); this.halo.position.set(sx, sy, 0);
    const k = born * fl;
    this.spark.scale.setScalar(ss * (0.035 + 0.03 * k + 0.35 * rise * rise));
    this.halo.scale.setScalar(ss * (0.16 + 0.1 * k + 1.2 * rise * rise));
    this.spark.material.opacity = k * (1.4 + rise); this.halo.material.opacity = 0.55 * k * (1 + rise);
    this.spark.visible = this.halo.visible = born > 0.001;
    U.uGain.value = 1 - 0.35 * rise * (1 - rise * 0.6);
    U.uHand.value.set(mu, FV - 0.03, 0.35 * k * (1 - rise));
    this.BU.uA.value = smooth(T0, T0 + 3, t) * (1 + 0.6 * rise); this.BU.uPx.value = this.ctx.h / 720;
  }
  post(t) {
    const rise = range(t, TR, T1);
    return { sat: 1.05, contrast: 1.06, bloom: 0.5 + 0.6 * rise * rise, bloomThr: 0.82, exposure: 1 + 0.25 * rise * rise, vig: 0.6,
      grain: 0.06, ca: 0.35, tint: [1.02, 0.98, 1.0], dust: 0.15, dustCol: [1, 0.5, 0.45] };
  }
}
