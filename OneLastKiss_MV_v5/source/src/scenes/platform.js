// 寂しくないふりしてた / お互い様か / 誰かを求めることは / 即ち傷つくことだった
// Dusk platform, cinemascope. She waits across the tracks under the flickering shelter light; he stands with
// his back to us on the near side. An express tears through between them (she strobes through its windows,
// wind whips her hair, the wet platform mirrors the lit cars). When it's gone a red thread spins out from his
// hand to hers, sways, pulls taut - and snaps: sparks, the lamp dies, the frame is about to shatter.
import * as THREE from 'three';
import { Scene } from './base.js';
import { plateMat, plateMesh, cutMat, cutGeo } from '../core/images.js';
import { NOISE } from '../core/glsl.js';
import { clamp, smooth, range, ease, lerp, rng } from '../core/util.js';

const T0 = 89.26, T1 = 97.6, TR0 = 91.15, TR1 = 93.5, TG = 93.57, TS = 95.57;
const TRAIN_L = 5.4, TRAIN_D = 0.42;          // length in image-u, depth of the track
const HER = { u: 0.37, v: 0.415, d: 0.31, h: 0.13 }, HIM = { u: 0.86, v: -0.3, d: 0.97, h: 1.02 };

const HEAD = /* glsl */ `uniform float uLamp;`;
const HOOK = /* glsl */ `
  // stars appear in the deepening sky
  if (d < 0.06 && uv.y > 0.7) {
    vec2 g = uv * vec2(uImgAspect, 1.0) * 150.0, gi = floor(g); float h = hash12(gi);
    if (h > 0.982) col += vec3(0.8, 0.85, 1.0) * smoothstep(0.22, 0.0, length(fract(g) - hash22(gi))) *
      (0.4 + 0.6 * sin(uT * (2.0 + h * 5.0) + h * 40.0)) * smoothstep(0.7, 0.95, uv.y) * 0.9;
  }
  // shelter fluorescent: the pool of light breathes with the tube
  float lm = exp(-length((uv - vec2(0.33, 0.55)) * vec2(1.4, 2.4)) * 4.0) * step(0.15, d);
  col *= mix(1.0, 0.35 + 0.65 * uLamp, lm);
  col += vec3(0.85, 1.0, 0.95) * exp(-length((uv - vec2(0.365, 0.618)) * vec2(3.0, 18.0)) * 6.0) * 0.5 * uLamp;
  // vending machine hum, street lamp
  col += vec3(0.35, 0.55, 0.9) * exp(-length((uv - vec2(0.5, 0.49)) * vec2(3.0, 1.6)) * 14.0) * (0.12 + 0.05 * sin(uT * 3.0));
  col += vec3(1.0, 0.8, 0.5) * exp(-length((uv - vec2(0.9, 0.73)) * vec2(1.0, 1.0)) * 40.0) * 0.4;
  return col;
`;

const TRAIN_FRAG = /* glsl */ `
uniform vec3 uCam; uniform vec2 uPar; uniform float uDolly, uAspect, uImgAspect, uHead, uT; varying vec2 vUv;
${NOISE}
const float L = ${TRAIN_L.toFixed(2)}, CAR = 1.8;
// train colour/alpha at image uv (v down). premultiplied rgb in .rgb, coverage in .a; w = window light only
vec4 train(vec2 iu, out float wl){
  wl = 0.0;
  float x = uHead - iu.x, y = (iu.y - 0.39) / 0.365;
  if (x < 0.0 || x > L || y < 0.0 || y > 1.0) return vec4(0.0);
  if (x < 0.07 && y < 0.14 * (1.0 - x / 0.07)) return vec4(0.0);             // slanted nose
  float cx = mod(x, CAR), ci = floor(x / CAR);
  if (cx > CAR - 0.06) return (y > 0.14 && y < 0.84 && abs(cx - CAR + 0.03) < 0.015) ? vec4(vec3(0.02), 1.0) : vec4(0.0);
  // stainless body reflecting dusk: violet above, orange low; ribs; orange line; dark skirt
  vec3 body = mix(vec3(0.3, 0.26, 0.45), vec3(0.42, 0.3, 0.28), y) * (0.92 + 0.08 * sin(y * 90.0));
  body = mix(body, vec3(0.9, 0.42, 0.08), step(0.64, y) * step(y, 0.69));
  body = mix(body, vec3(0.03, 0.03, 0.04), step(0.86, y));
  if (y > 0.88) { float wx = mod(cx, 0.9) - 0.3; body += vec3(1.0, 0.6, 0.3) * step(0.985, hash12(vec2(floor(uT * 30.0), ci))) * exp(-abs(wx) * 40.0); }
  float roof = step(y, 0.06); body = mix(body, vec3(0.08, 0.08, 0.1), roof);
  // doors and windows
  float dx = mod(cx + 0.3, 0.45) - 0.225;                                     // 4 doors per car
  float door = step(abs(dx), 0.07), win;
  if (door > 0.5) { body *= 0.8; win = step(abs(dx), 0.04) * step(0.26, y) * step(y, 0.5); body *= 1.0 - 0.6 * step(abs(abs(dx) - 0.07), 0.004); }
  else { float wx = mod(dx + 0.225, 0.075); win = step(0.26, y) * step(y, 0.52) * step(0.01, wx); }
  if (x < 0.07) { win = step(0.22, y) * step(y, 0.46) * step(0.012, x); body = mix(body, vec3(0.05), 0.5); }
  vec3 lit = vec3(1.0, 0.93, 0.78) * (0.95 + 0.2 * hash12(vec2(ci, 3.0)));
  // interior: straps, seat backs, a few passengers
  float strap = step(length(vec2(mod(x, 0.05) - 0.025, (y - 0.3) * 0.5)), 0.006);
  float seat = step(0.44, y);
  float ph = hash12(floor(vec2(x / 0.075, ci)));
  float pas = step(0.8, ph) * step(length(vec2((mod(x, 0.075) - 0.037) * 1.2, y - 0.4)), 0.022 + 0.02 * step(0.43, y));
  float solid = max(strap, max(seat * 0.85, pas));
  vec3 wcol = lit * (1.0 - solid) + vec3(0.04, 0.035, 0.03) * solid;
  float wa = mix(0.42, 1.0, solid);
  wl = win * (1.0 - solid);
  vec3 headl = x < 0.02 && y > 0.74 && y < 0.8 ? vec3(6.0, 5.5, 4.5) : vec3(0.0);
  return win > 0.5 ? vec4(wcol * wa, wa) : vec4(body + headl, 1.0);
}
void main(){
  vec2 s = vUv - 0.5; float ra = uAspect / uImgAspect; vec2 sc = ra > 1.0 ? vec2(1.0, 1.0 / ra) : vec2(ra, 1.0);
  vec2 base = 0.5 + s * sc / uCam.z + uCam.xy;
  vec2 uv = base - uPar * (${TRAIN_D} - 0.5); uv = 0.5 + uCam.xy + (uv - 0.5 - uCam.xy) / (1.0 + uDolly * ${TRAIN_D});
  vec2 iu = vec2(uv.x, 1.0 - uv.y);
  vec4 acc = vec4(0.0); float wl = 0.0, w;
  for (int i = 0; i < 7; i++) { acc += train(iu + vec2((float(i) / 6.0 - 0.5) * 0.06, 0.0), w); }
  acc /= 7.0;
  vec3 add = vec3(0.0);
  // headlight: glow ahead of the nose + light racing along the rails
  vec2 hp = vec2(uHead - 0.01, 0.68); vec2 dh = (iu - hp) * vec2(uImgAspect, 1.0);
  add += vec3(1.0, 0.92, 0.75) * (exp(-length(dh) * 16.0) * 0.8 + exp(-length(dh * vec2(0.5, 8.0)) * 5.0) * 0.3) * step(-0.2, uHead) * step(uHead, L + 1.5);
  float rail = step(0.71, iu.y) * step(iu.y, 0.79) * smoothstep(0.8, 0.0, iu.x - uHead) * step(uHead, iu.x);
  add += vec3(1.0, 0.85, 0.6) * rail * 0.25 * step(0.0, uHead);
  // wet near platform mirrors the lit windows
  if (iu.y > 0.82) {
    float my = 0.745 - (iu.y - 0.82) * 1.6; float rw = 0.0;
    for (int i = 0; i < 4; i++) { train(vec2(iu.x + (float(i) / 3.0 - 0.5) * 0.06 + (vnoise(iu * vec2(8.0, 60.0)) - 0.5) * 0.02, my), w); rw += w; }
    add += vec3(1.0, 0.9, 0.7) * rw * 0.25 * 0.35 * smoothstep(1.0, 0.84, iu.y);
  }
  gl_FragColor = vec4(acc.rgb + add, acc.a);
}`;

const THREAD_VERT = /* glsl */ `attribute float aV, aS; varying float vV, vS; void main(){ vV = aV; vS = aS; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const THREAD_FRAG = /* glsl */ `uniform float uGrow, uA, uT, uTaut, uPulse; varying float vV, vS;
void main(){
  if (vS > uGrow) discard;
  float core = exp(-vV * vV * 60.0), glow = exp(-vV * vV * 6.0) * 0.35;
  float wave = 0.5 + 0.5 * sin(vS * 18.0 - uT * 7.0);
  vec3 c = vec3(1.0, 0.06, 0.08) * (glow + core * (1.2 + 0.4 * wave * uPulse)) + vec3(1.0, 0.6, 0.6) * core * (0.25 + 0.8 * uTaut);
  c += vec3(1.0, 0.7, 0.6) * exp(-(uGrow - vS) * 60.0) * core * 3.0 * step(uGrow, 0.999);
  gl_FragColor = vec4(c * uA, 1.0);
}`;
const SPARK_VERT = /* glsl */ `attribute float aL; uniform float uPx; varying float vL; void main(){ vL = aL; gl_PointSize = uPx * (0.4 + aL); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const SPARK_FRAG = /* glsl */ `varying float vL; void main(){ float r = length(gl_PointCoord - 0.5); gl_FragColor = vec4(vec3(1.0, 0.45, 0.3) * smoothstep(0.5, 0.0, r) * vL * 2.0, 1.0); }`;
const NS = 90, NSP = 70;
function strip(s0, s1) {
  const g = new THREE.BufferGeometry(), n = (NS + 1) * 2;
  const aV = new Float32Array(n), aS = new Float32Array(n), idx = [];
  for (let i = 0; i <= NS; i++) { aV[i * 2] = -1; aV[i * 2 + 1] = 1; aS[i * 2] = aS[i * 2 + 1] = lerp(s0, s1, i / NS); }
  for (let i = 0; i < NS; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  g.setAttribute('aV', new THREE.BufferAttribute(aV, 1)); g.setAttribute('aS', new THREE.BufferAttribute(aS, 1));
  g.setIndex(idx); return g;
}

export class Platform extends Scene {
  constructor(ctx) {
    super(ctx, { ortho: true });
    const I = ctx.img, V = (v) => ({ value: v });
    this.M = plateMat(I.platform, I.platform_d, { head: HEAD, hook: HOOK, uniforms: { uLamp: V(1) } });
    this.scene.add(plateMesh(this.M));
    // her (far platform) - train - him (near, back to us)
    this.her = new THREE.Mesh(cutGeo(I.cut_her, 1), cutMat(I.cut_her, { rim: 0.45, seed: 1 }));
    this.him = new THREE.Mesh(cutGeo(I.cut_him, 1), cutMat(I.cut_him, { rim: 0.9, seed: 4, wind: 0.4 }));
    this.her.renderOrder = 0; this.him.renderOrder = 2;
    this.her.material.uniforms.uRim.value.set(1, 0.62, 0.42, 0.45); this.him.material.uniforms.uRim.value.set(1, 0.55, 0.35, 0.9);
    this.TU = { uCam: this.M.uniforms.uCam, uPar: this.M.uniforms.uPar, uDolly: this.M.uniforms.uDolly, uAspect: V(16 / 9),
      uImgAspect: V(I.platform.w / I.platform.h), uHead: V(-9), uT: V(0) };
    const tm = new THREE.ShaderMaterial({ vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: TRAIN_FRAG, uniforms: this.TU, transparent: true, depthTest: false, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
    this.train = plateMesh(tm, 1);
    this.HU = { uGrow: V(0), uA: V(0), uT: V(0), uTaut: V(0), uPulse: V(0) };
    const thm = new THREE.ShaderMaterial({ vertexShader: THREAD_VERT, fragmentShader: THREAD_FRAG, uniforms: this.HU,
      transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
    this.th = [new THREE.Mesh(strip(0, 0.5), thm), new THREE.Mesh(strip(0.5, 1), thm)];
    this.th.forEach((m) => { m.renderOrder = 3; m.frustumCulled = false; });
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NSP * 3), 3));
    sg.setAttribute('aL', new THREE.BufferAttribute(new Float32Array(NSP), 1));
    this.SU = { uPx: V(6) };
    this.sparks = new THREE.Points(sg, new THREE.ShaderMaterial({ vertexShader: SPARK_VERT, fragmentShader: SPARK_FRAG, uniforms: this.SU,
      transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.sparks.renderOrder = 4; this.sparks.frustumCulled = false;
    const R = rng(95); this.sp = Array.from({ length: NSP }, () => [(R() - 0.5) * 2.2, R() * 1.4 - 0.2, 0.4 + R() * 0.8]);
    this.scene.add(this.her, this.train, this.him, ...this.th, this.sparks);
  }
  // image uv (v up) at depth d -> world position + world units per image-v
  toWorld(u, v, d) {
    const U = this.M.uniforms, c = U.uCam.value, p = U.uPar.value, dl = U.uDolly.value, a = this.ctx.aspect;
    const ra = a / U.uImgAspect.value, sx = ra > 1 ? 1 : ra, sy = ra > 1 ? 1 / ra : 1, k = 1 + dl * d;
    const bx = 0.5 + c.x + (u - 0.5 - c.x) * k + p.x * (d - 0.5), by = 0.5 + c.y + (v - 0.5 - c.y) * k + p.y * (d - 0.5);
    return [(bx - 0.5 - c.x) * c.z / sx * 2 * a, (by - 0.5 - c.y) * c.z / sy * 2, k * c.z / sy * 2];
  }
  place(mesh, P, entry) {
    const [x, y, s] = this.toWorld(P.u, P.v, P.d), h = P.h * s;
    mesh.position.set(x, y, 0); mesh.scale.set(h, h, 1);
    return (lx, ly) => new THREE.Vector2(x + lx * h * entry.w / entry.h, y + ly * h);
  }
  update(t) {
    const U = this.M.uniforms, a = this.ctx.aspect, snap = t >= TS;
    U.uT.value = t; U.uAspect.value = a; this.TU.uAspect.value = a; this.TU.uT.value = t;
    // camera: slow lateral dolly; after the snap it leans in toward her
    const gust = smooth(TR0 + 0.15, TR0 + 0.6, t) * (1 - smooth(TR1 - 0.2, TR1 + 1.4, t));
    const cx = lerp(-0.03, 0.025, ease.inOut(range(t, T0, TS))) - 0.03 * ease.inOut(range(t, TS, T1));
    const shake = 0.0025 * gust * Math.sin(t * 57), z = 1.05 + 0.05 * range(t, T0, TS) + 0.1 * ease.in(range(t, TS, T1));
    U.uCam.value.set(cx, 0.015 + shake, z); U.uPar.value.set(-1.3 * cx, 0); U.uDolly.value = 0.03;
    // lamp: fluorescent stutters, dies after the snap
    const f = (a0, d) => (t > a0 && t < a0 + d ? 0.25 + 0.3 * Math.sin(t * 90) ** 2 : 1);
    let lamp = f(90.35, 0.18) * f(94.1, 0.1) * f(94.35, 0.06);
    if (snap) lamp = t < TS + 0.5 ? (Math.sin(t * 70) > 0.3 ? 0.9 : 0.15) : 0.12;
    U.uLamp.value = lamp;
    U.uGain.value = smooth(T0 - 0.1, T0 + 0.3, t);
    this.TU.uHead.value = t < TR0 ? -0.25 - (TR0 - t) * 2.8 : lerp(-0.25, 6.2, (t - TR0) / (TR1 - TR0));
    // characters
    const hm = this.her.material.uniforms, bm = this.him.material.uniforms;
    hm.uT.value = t; bm.uT.value = t; hm.uWind.value = 0.6 + 3.2 * gust; bm.uWind.value = 0.3 + 1.2 * gust;
    const lk = 0.55 + 0.35 * lamp; hm.uTint.value.set(0.82 * lk, 0.86 * lk, 1.0 * lk);
    bm.uTint.value.set(0.07, 0.065, 0.1); hm.uAlpha.value = bm.uAlpha.value = U.uGain.value;
    const herAt = this.place(this.her, { u: HER.u, v: HER.v, d: 0.27, h: HER.h }, this.ctx.img.cut_her);
    const himAt = this.place(this.him, HIM, this.ctx.img.cut_him);
    this.thread(t, himAt(-0.3, 0.545), herAt(-0.17, 0.53));
  }
  thread(t, A, B) {
    const HU = this.HU, snapK = ease.out(range(t, TS, TS + 0.9));
    HU.uT.value = t; HU.uGrow.value = ease.inOut(range(t, TG, TG + 1.2));
    HU.uA.value = smooth(TG - 0.05, TG + 0.2, t) * (1 - smooth(TS + 0.3, TS + 1.5, t));
    const taut = ease.in(range(t, 94.5, TS)); HU.uTaut.value = taut + (t >= TS ? 1.5 * Math.exp(-(t - TS) * 6) : 0);
    HU.uPulse.value = 1 - taut;
    const sag = lerp(0.3, 0.02, taut), W = 0.035 * (1 + taut * 0.3);
    const cur = (s) => {
      const b = 4 * s * (1 - s);
      return [lerp(A.x, B.x, s) + 0.05 * Math.sin(Math.PI * s) * Math.sin(t * 1.3 + s * 3) * (1 - taut),
        lerp(A.y, B.y, s) - sag * b + taut * taut * 0.012 * Math.sin(s * 40 + t * 95) * b];
    };
    this.th.forEach((m, half) => {
      const pos = m.geometry.attributes.position.array;
      const pts = [];
      for (let i = 0; i <= NS; i++) {
        const sig = half === 0 ? i / NS : 1 - i / NS;                  // 0 at the owner's hand, 1 at the break
        let [x, y] = cur(half === 0 ? sig * 0.5 * (1 - 0.85 * snapK) : 1 - sig * 0.5 * (1 - 0.85 * snapK));
        if (t >= TS) { y -= 0.4 * snapK * sig * sig; x += (half ? 1 : -1) * 0.12 * snapK * Math.sin(sig * 7) * sig; }
        pts.push([x, y]);
      }
      for (let i = 0; i <= NS; i++) {
        const p0 = pts[Math.max(0, i - 1)], p1 = pts[Math.min(NS, i + 1)];
        let tx = p1[0] - p0[0], ty = p1[1] - p0[1]; const l = Math.hypot(tx, ty) || 1; tx /= l; ty /= l;
        const [x, y] = pts[i];
        pos.set([x - ty * W, y + tx * W, 0, x + ty * W, y - tx * W, 0], i * 6);
      }
      m.geometry.attributes.position.needsUpdate = true;
    });
    // sparks from the break
    const g = this.sparks.geometry, P = g.attributes.position.array, L = g.attributes.aL.array, u = t - TS;
    const [bx, by] = cur(0.5);
    this.SU.uPx.value = 5 * this.ctx.h / 720;
    this.sp.forEach(([vx, vy, life], i) => {
      const k = u > 0 ? u : -1;
      P.set([bx + vx * k * 0.9, by + vy * k * 0.9 - 1.2 * k * k, 0], i * 3);
      L[i] = k > 0 ? Math.max(0, 1 - k / life) : 0;
    });
    g.attributes.position.needsUpdate = true; g.attributes.aL.needsUpdate = true;
  }
  post(t) {
    const s = smooth(TS, TS + 1, t);
    return { letter: 1, tint: [0.92, 0.93, 1.08], sat: 0.95 - 0.35 * s, contrast: 1.05, bloom: 0.75, bloomThr: 0.7, vig: 0.55, grain: 0.06,
      ca: 0.4 + 0.8 * s, fadeW: t >= TS ? 0.35 * Math.exp(-(t - TS) * 7) : 0, dust: 0.2, dustCol: [0.8, 0.85, 1] };
  }
}
