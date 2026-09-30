// Plate: the v2 workhorse shot. One generated image brought to life as a 2.5D depth plate:
// keyframed camera (pan / zoom / parallax / dolly, in shot-relative time 0..1), beat punch-ins,
// and a composable library of GLSL effects (fx) - light sweeps, embers, LCL droplets, heat haze,
// red / blue world-rewrite waves, line-art dissolve, god rays, glints, rain of light, train-window
// light bands... Extra 3D / cut-out layers can be added with o.build / o.tick.
import * as THREE from 'three';
import { Scene } from './base.js';
import { plateMat, plateMesh, cutMat, cutGeo } from '../core/images.js';
import { clamp, range, keys, ease } from '../core/util.js';
import { audio } from '../core/audio.js';

// ---- effect library: each entry = { head?, warp?, hook? } (hook code mutates `col`) ----
const FX = {
  // bright pixels flare on every kick
  kick: { hook: `col *= 1.0 + uK * 0.35 * smoothstep(0.35, 1.0, dot(col, vec3(0.33)));` },
  // a diagonal band of light crosses the frame once per shot (uFx.x = strength)
  sweep: { hook: `{ float b = suv.x * 0.8 + suv.y * 0.35 - (uU * 1.8 - 0.45); col += uFxCol * exp(-b * b * 60.0) * (0.25 + 0.75 * d) * uFx.x; }` },
  // light rays from uLight (screen uv) - radial blur of the bright parts of the image
  rays: { hook: `{ vec2 L = uLight.xy; vec3 acc = vec3(0.0); vec2 p = uv; vec2 st = (vec2(L.x, L.y) - suv) * 0.035;
      for (int i = 0; i < 14; i++) { p += st * vec2(1.0 / uCam.z); vec3 s = texture2D(uImg, p).rgb; acc += max(s - 0.62, 0.0); }
      col += acc * uLight.z * uFxCol * 0.22; }` },
  // rising sparks / embers (screen space, 3 parallax layers)
  sparkfn: { head: `vec3 sparks(vec2 p, float t, float up, vec3 c1, float dens){ vec3 acc = vec3(0.0);
      for (int L = 0; L < 3; L++) { float fl = float(L); float s = 7.0 + fl * 6.0; vec2 q = p * vec2(s * uAspect, s);
        q.y -= t * up * (0.7 + fl * 0.45); q.x += sin(q.y * 0.6 + fl * 3.0 + t * 0.7) * 0.35;
        vec2 id = floor(q), f = fract(q) - 0.5; float h = hash12(id + fl * 17.0);
        if (h > 1.0 - dens) { vec2 o = (hash22(id) - 0.5) * 0.6; float r = length(f - o);
          acc += c1 * smoothstep(0.1 - fl * 0.02, 0.0, r) * (0.55 + 0.45 * sin(t * 5.0 + h * 50.0)) * (1.2 - fl * 0.3); } }
      return acc; }` },
  embers: { hook: `col += sparks(suv, uL, 1.0, vec3(1.6, 0.55, 0.14), 0.22) * uFx.y;`, needs: 'sparkfn' },
  // slow warm fireflies
  fireflies: { hook: `col += sparks(suv + vec2(sin(uL * 0.3) * 0.02, 0.0), uL * 0.35, 0.6, vec3(1.0, 0.9, 0.45), 0.12) * uFx.y;`, needs: 'sparkfn' },
  // falling sparks (industrial)
  fall: { hook: `col += sparks(vec2(suv.x, 1.0 - suv.y), uL, 1.8, vec3(1.8, 1.1, 0.5), 0.1) * uFx.y;`, needs: 'sparkfn' },
  // big soft orange LCL droplets rising (bokeh)
  lcl: { head: `vec3 drops(vec2 p, float t){ vec3 acc = vec3(0.0);
      for (int L = 0; L < 2; L++) { float fl = float(L); float s = 3.0 + fl * 3.0; vec2 q = p * vec2(s * uAspect, s);
        q.y -= t * (0.25 + fl * 0.2); vec2 id = floor(q), f = fract(q) - 0.5; float h = hash12(id + 3.0 + fl * 7.0);
        if (h > 0.45) { vec2 o = (hash22(id + 1.0) - 0.5) * 0.5; float r = length(f - o); float R = 0.1 + 0.12 * h;
          acc += vec3(1.5, 0.52, 0.12) * (smoothstep(R, R * 0.7, r) * 0.35 + smoothstep(R, R * 0.92, r) * smoothstep(R * 0.8, R * 0.92, r) * 0.6) * (1.0 - fl * 0.4); } }
      return acc; }`, hook: `col += drops(suv, uL) * uFx.z;` },
  // heat haze (far pixels shimmer)
  heat: { warp: `uv.x += (vnoise(uv * vec2(9.0, 26.0) - vec2(0.0, uT * 2.4)) - 0.5) * 0.005 * (1.2 - d); uv.y += (vnoise(uv * 14.0 + uT) - 0.5) * 0.002;` },
  // sky / far layer drifts (clouds)
  drift: { warp: `uv.x -= uL * 0.0035 * smoothstep(0.35, 0.05, d);` },
  // water ripple below uWater (image v, 0 = off)
  water: { warp: `if (uWater > 0.0 && uv.y < uWater) { float k = (uWater - uv.y); uv += vec2(sin(uv.y * 380.0 / (k + 0.05) + uT * 2.0), cos(uv.x * 90.0 + uT * 1.4)) * 0.0012 * smoothstep(0.0, 0.02, k); }` },
  // sparkle on bright details (crystal / glass / sea)
  glint: { hook: `{ vec2 g = floor(suv * vec2(190.0, 107.0)); float h = hash12(g + floor(uL * 0.5)); float l = dot(col, vec3(0.33));
      col += vec3(1.3, 1.1, 0.9) * step(0.993, h) * pow(0.5 + 0.5 * sin(uT * 4.0 + h * 90.0), 10.0) * smoothstep(0.35, 0.9, l) * 2.5 * uFx.x; }` },
  // world turns red from uWave.xy outwards (uWave.z = radius 0..2, uWave.w = 1 red / -1 blue restore)
  wave: { hook: `{ vec2 q = (suv - uWave.xy) * vec2(uAspect, 1.0); float r = length(q) + (fbm(suv * 6.0 + 3.0) - 0.5) * 0.18;
      float ins = smoothstep(uWave.z, uWave.z - 0.08, r); float edge = exp(-pow((r - uWave.z) * 45.0, 2.0));
      float l = dot(col, vec3(0.3, 0.55, 0.15));
      vec3 red = vec3(l * 1.5 + 0.05, l * 0.12, l * 0.1) + vec3(0.25, 0.0, 0.02) * (1.0 - d);
      vec3 blue = col * vec3(0.85, 1.0, 1.1) + vec3(0.0, 0.05, 0.1);
      vec3 tgt = uWave.w > 0.0 ? red : blue;
      if (uWave.w > 0.0) col = mix(col, tgt, ins); else col = mix(tgt * 0.35 + vec3(l * 1.3, l * 0.1, l * 0.1) * 0.65, col, ins);
      col += (uWave.w > 0.0 ? vec3(2.2, 0.4, 0.2) : vec3(0.15, 0.3, 0.55)) * edge * step(0.001, uWave.z) * step(uWave.z, 2.1) * (0.5 + 0.5 * vnoise(suv * 40.0 + uT)); }` },
  // anime frame -> genga line art on paper (uFx.w = 0..1)
  lineart: { hook: `if (uFx.w > 0.001) { vec2 px = vec2(1.0 / 1600.0, 1.0 / 900.0) * 1.3;
      float gx = 0.0, gy = 0.0;
      for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) { float l = dot(texture2D(uImg, uv + vec2(float(i), float(j)) * px).rgb, vec3(0.3, 0.59, 0.11));
        gx += l * float(i) * (j == 0 ? 2.0 : 1.0); gy += l * float(j) * (i == 0 ? 2.0 : 1.0); }
      float e = smoothstep(0.1, 0.45, length(vec2(gx, gy)));
      vec3 paper = vec3(0.93, 0.9, 0.82) * (0.94 + 0.06 * vnoise(suv * 300.0));
      float wob = vnoise(suv * vec2(12.0, 7.0) + 4.0);
      float reveal = smoothstep(uFx.w * 1.3 - 0.3, uFx.w * 1.3, 1.0 - wob * 0.6 - suv.x * 0.4);
      vec3 ink = mix(paper, vec3(0.2, 0.18, 0.2), e);
      ink = mix(ink, vec3(0.85, 0.2, 0.18), e * step(0.8, vnoise(uv * 5.0)) * 0.7);
      col = mix(col, ink, 1.0 - reveal); }` },
  // flickering light bands (sun through train windows)
  bands: { hook: `{ float s = fract(suv.x * 2.6 + suv.y * 0.35 - uL * 0.9); float w = smoothstep(0.0, 0.08, s) * smoothstep(0.55, 0.42, s);
      col *= mix(0.55, 1.35, w); col += vec3(1.0, 0.5, 0.2) * w * 0.12 * (1.0 - d * 0.5); }` },
  // falling rain of light
  lightrain: { hook: `{ vec2 q = suv * vec2(70.0 * uAspect, 3.0); q.y += uL * 1.6 + hash12(vec2(floor(q.x), 0.0)) * 10.0; float h = hash12(vec2(floor(q.x), floor(q.y)));
      col += uFxCol * step(0.86, h) * smoothstep(0.5, 0.0, abs(fract(q.x) - 0.5)) * pow(fract(q.y), 6.0) * 0.8 * uFx.z; }` },
  // CRT / HUD monitor look
  crt: { hook: `col = mix(col, vec3(dot(col, vec3(0.2, 0.7, 0.1))) * vec3(0.5, 1.3, 0.6), uFx.w); col *= 0.8 + 0.2 * sin(suv.y * 900.0);` },
  // a local train rushing across the foreground: uA = (head x, tail x, _, on) in aspect-scaled screen units.
  // Cream body, blue stripe, bright windows, dark gaps between cars through which the plate strobes.
  train: { hook: `if (uA.w > 0.001) { float x = (suv.x - 0.5) * uAspect * 2.0; float yy = (suv.y - 0.06) / 0.8;
      if (x < uA.x && x > uA.y && yy > 0.0 && yy < 1.0) {
        float lx = uA.x - x; float car = mod(lx, 2.6); float gap = step(2.5, car) + step(car, 0.02);
        float nose = smoothstep(0.0, 0.12, lx);
        vec3 body = vec3(0.5, 0.47, 0.4) * (0.75 + 0.25 * smoothstep(0.0, 0.2, yy)) * (1.0 - 0.35 * smoothstep(0.9, 1.0, yy));
        body = mix(body, vec3(0.1, 0.32, 0.6), step(0.26, yy) * step(yy, 0.31));
        float wx = mod(car, 0.42); float win = step(0.5, yy) * step(yy, 0.8) * step(0.06, wx) * step(wx, 0.36) * step(0.2, car) * step(car, 2.3);
        vec3 glass = mix(vec3(0.62, 0.5, 0.36), vec3(0.3, 0.42, 0.55), yy) * 0.9;
        glass = mix(glass, texture2D(uImg, vec2(fract(suv.x * 0.3 + uA.x * 0.2), suv.y)).rgb * 0.9, 0.35);
        vec3 tr = mix(body, glass, win);
        tr *= 0.85 + 0.3 * vnoise(vec2(x * 1.5 - uT * 9.0, yy * 90.0));
        col = mix(col, tr, (1.0 - clamp(gap, 0.0, 1.0)) * nose * uA.w);
      } }` },
  // hex AT-field pulse centred at uLight.xy, radius uLight.w
  hex: { head: `float hexd(vec2 p){ p = abs(p); return max(dot(p, vec2(0.866, 0.5)), p.y); }
      float hexgrid(vec2 p){ vec2 r = vec2(1.0, 1.732); vec2 h = r * 0.5; vec2 a = mod(p, r) - h, b = mod(p - h, r) - h; vec2 g = dot(a, a) < dot(b, b) ? a : b; return 0.5 - hexd(g); }`,
    hook: `if (uLight.w > 0.001) { vec2 q = (suv - uLight.xy) * vec2(uAspect, 1.0); float r = length(q);
      float ring = exp(-pow((r - uLight.w) * 14.0, 2.0)); float g = smoothstep(0.06, 0.0, hexgrid(q * 16.0));
      col += vec3(1.6, 0.7, 0.2) * (g * 0.8 + 0.3) * ring * (1.0 - smoothstep(0.6, 1.2, uLight.w)); }` },
};

const DEFAULT_CAM = [[0, 0, 0, 1.04, 0, 0, 0], [1, 0, 0, 1.12, 0.012, 0, 0.05]];

/**
 * o: { img, dep?, cam?: [[u, panX, panY, zoom, parX, parY, dolly]...], fx?: [], fxAmt?: [x,y,z,w], fxCol?, light?: [x,y,amt,hexR],
 *      water?, wave?: fn(t,u)->[x,y,r,dir], punch?: kick punch-in amount, hook?, warp?, head?,
 *      post?: obj | fn(t,u,S), build?(S), tick?(t,u,S), gain?, tint?, blur?, focus?, e? easing }
 */
export class Plate extends Scene {
  constructor(ctx, o, t0 = 0, t1 = 1) {
    super(ctx, { ortho: true });
    this.o = o; this.t0 = t0; this.t1 = t1;
    const img = ctx.img[o.img];
    if (!img) throw new Error('missing image ' + o.img);
    const dep = o.dep === false ? null : ctx.img[o.dep || o.img + '_d'] || null;
    const names = new Set();
    (o.fx || []).forEach((f) => { if (FX[f] && FX[f].needs) names.add(FX[f].needs); names.add(f); });
    const list = [...names].map((n) => FX[n]).filter(Boolean);
    const U = {
      uU: { value: 0 }, uL: { value: 0 }, uK: { value: 0 }, uS: { value: 0 }, uH: { value: 0 }, uE: { value: 0 },
      uFx: { value: new THREE.Vector4(...(o.fxAmt || [1, 1, 1, 0])) }, uFxCol: { value: new THREE.Vector3(...(o.fxCol || [1.0, 0.75, 0.5])) },
      uLight: { value: new THREE.Vector4(...(o.light || [0.5, 0.8, 0, 0])) }, uWave: { value: new THREE.Vector4(0.5, 0.5, 0, 1) },
      uWater: { value: o.water || 0 }, uA: { value: new THREE.Vector4() }, uB: { value: new THREE.Vector4() },
    };
    const head = `uniform float uU, uL, uK, uS, uH, uE, uWater; uniform vec4 uFx, uLight, uWave, uA, uB; uniform vec3 uFxCol;\n` +
      list.map((f) => f.head || '').join('\n') + (o.head || '');
    this.M = plateMat(img, dep, {
      uniforms: U, head,
      warp: list.map((f) => f.warp || '').join('\n') + (o.warp || '') + '\nreturn uv;',
      hook: list.map((f) => f.hook || '').join('\n') + (o.hook || '') + '\nreturn col;',
    });
    this.U = this.M.uniforms;
    if (o.gain) this.U.uGain.value = o.gain;
    if (o.tint) this.U.uTint.value.set(...o.tint);
    this.U.uBlur.value = o.blur ?? 0; this.U.uFocus.value = o.focus ?? 0.7;
    this.scene.add(plateMesh(this.M));
    // cut-out layers: { img, h, fn(t,u) -> { x, y, s, r, a, dis, flip }, wind, rim, rimCol, blend }
    this.cuts = (o.cuts || []).map((c, i) => {
      const e = ctx.img[c.img]; if (!e) throw new Error('missing cut ' + c.img);
      const m = cutMat(e, { wind: c.wind ?? 0.5, rim: c.rim ?? 0.6, seed: i * 3.1 });
      if (c.rimCol) m.uniforms.uRim.value.set(...c.rimCol, c.rim ?? 0.6);
      if (c.blend) m.blending = THREE.AdditiveBlending;
      const mesh = new THREE.Mesh(cutGeo(e, c.h || 1), m); mesh.renderOrder = 10 + i; mesh.frustumCulled = false;
      this.scene.add(mesh);
      return { c, m, mesh };
    });
    if (o.build) o.build(this, ctx);
  }
  u(t) { return clamp((t - this.t0) / Math.max(0.001, this.t1 - this.t0)); }
  update(t, dt) {
    const o = this.o, U = this.U, u = this.u(t);
    const c = keys(u, o.cam || DEFAULT_CAM, o.e || ease.sine);
    const pk = (o.punch ?? 0.6) * audio.hitPulse('kick', t, 9);
    U.uCam.value.set(c[0] || 0, c[1] || 0, (c[2] || 1) * (1 + pk * 0.018));
    U.uPar.value.set(c[3] || 0, c[4] || 0); U.uDolly.value = c[5] || 0;
    U.uAspect.value = this.ctx.aspect;
    U.uT.value = t; U.uU.value = u; U.uL.value = t - this.t0;
    U.uK.value = audio.hitPulse('kick', t, 7); U.uS.value = audio.hitPulse('snare', t, 8); U.uH.value = audio.hitPulse('hit', t, 5);
    U.uE.value = audio.get('energy', t);
    if (o.wave) U.uWave.value.set(...o.wave(t, u));
    if (o.lightFn) U.uLight.value.set(...o.lightFn(t, u));
    if (o.fxFn) U.uFx.value.set(...o.fxFn(t, u));
    if (o.trainFn) U.uA.value.set(...o.trainFn(t, u));
    for (const { c, m, mesh } of this.cuts) {
      const s = c.fn(t, u, this);
      mesh.visible = (s.a ?? 1) > 0.002;
      mesh.position.set(s.x ?? 0, s.y ?? -1, 1);
      const k = s.s ?? 1; mesh.scale.set(k * (s.flip ? -1 : 1), k, 1); mesh.rotation.z = s.r || 0;
      m.uniforms.uT.value = t; m.uniforms.uAlpha.value = s.a ?? 1; m.uniforms.uDis.value = s.dis || 0;
      if (s.tint) m.uniforms.uTint.value.set(...s.tint);
    }
    if (o.tick) o.tick(t, u, this);
  }
  post(t) {
    const o = this.o, u = this.u(t);
    const base = { bloom: 0.75, bloomThr: 0.72, grain: 0.07, vig: 0.5, ca: 0.7, dust: 0.15, punch: (o.punch ?? 0.6) * audio.hitPulse('kick', t, 10) * 0.6 };
    const p = typeof o.post === 'function' ? o.post(t, u, this) : o.post || {};
    return { ...base, ...p };
  }
}

/** convenience for story.js */
export const plate = (o) => (ctx, t0, t1) => new Plate(ctx, o, t0, t1);
export { range, ease };
