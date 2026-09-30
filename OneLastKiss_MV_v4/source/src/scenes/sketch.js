// Pencil epilogue (226.18-252.03): 吹いていった風の後を / 追いかけた　眩しい午後
// On blank paper the meadow is drawn in graphite, following the wind from left to right; colour pencil then
// hatches it in. Pencil wind-lines and petals sweep across, the grass sways, and she comes running into the
// dazzling afternoon with her arms open. She runs on out of frame toward the sun, the camera lifts to the
// sky and "One Last Kiss" is written there by hand.
import * as THREE from 'three';
import { Scene } from './base.js';
import { plateMat, plateMesh, plateToWorld } from '../core/images.js';
import { NOISE } from '../core/glsl.js';
import { WrittenText } from '../core/written.js';
import { FONTS } from '../core/textures.js';
import { clamp, smooth, range, ease, lerp, keys, rng } from '../core/util.js';
import { audio, PERIOD } from '../core/audio.js';

const T0 = 226.18, T1 = 252.03, SUN = [0.8, 0.833];
const HEAD = /* glsl */ `uniform float uDraw, uColor, uWindA; uniform vec2 uTexel;
float lumA(vec2 p){ return dot(texture2D(uImg, p).rgb, vec3(0.3, 0.55, 0.15)); }`;
const WARP = /* glsl */ `
  // grass sways in travelling gusts; clouds breathe
  float g = 0.5 + 0.5 * sin(uv.x * 7.0 - uT * 2.0);
  uv.x += (sin(uv.x * 55.0 + uT * 3.1) * 0.35 + g) * 0.006 * d * smoothstep(0.55, 0.2, uv.y) * uWindA;
  uv.x += 0.004 * sin(uT * 0.25 + uv.y * 4.0) * smoothstep(0.55, 0.8, uv.y);
  return uv;
`;
const HOOK = /* glsl */ `
  vec2 q = vec2(uv.x * uImgAspect, uv.y);
  vec3 paper = vec3(0.975, 0.962, 0.935) * (0.965 + 0.05 * vnoise(q * 420.0) + 0.02 * vnoise(q * 30.0));
  // graphite line drawing of the plate (sobel on luminance)
  float gx = lumA(uv + vec2(uTexel.x, 0.0)) - lumA(uv - vec2(uTexel.x, 0.0)), gy = lumA(uv + vec2(0.0, uTexel.y)) - lumA(uv - vec2(0.0, uTexel.y));
  float edge = clamp(length(vec2(gx, gy)) * 5.5, 0.0, 1.0);
  float hatch = abs(fract((q.x + q.y) * 140.0) - 0.5);
  float shade = (1.0 - lumA(uv)) * smoothstep(0.2, 0.0, hatch) * 0.5;
  vec3 graphite = paper * (1.0 - 0.75 * clamp(edge + shade, 0.0, 1.0)) * vec3(0.98, 0.98, 1.0);
  // reveal fronts follow the wind (left -> right), ragged like strokes
  float n = uv.x * 0.8 + fbm(q * 3.0) * 0.25 + (1.0 - uv.y) * 0.05;
  float drawn = smoothstep(n - 0.04, n, uDraw * 1.15 - 0.05);
  float h1 = abs(fract((q.x + q.y) * 60.0) - 0.5), h2 = abs(fract((q.x - q.y) * 45.0) - 0.5);
  float nc = uv.x * 0.7 + fbm(q * 4.0 + 7.0) * 0.35 + (h1 + h2) * 0.18;
  float cfr = uColor * 1.3 - 0.12, colored = smoothstep(nc - 0.03, nc + 0.03, cfr);
  vec3 c = mix(paper, graphite, drawn);
  c = mix(c, col, colored);
  // the live pencil at the colour front: a darker band of fresh strokes
  c *= 1.0 - 0.12 * exp(-pow((cfr - nc) * 14.0, 2.0)) * step(0.01, uColor) * step(uColor, 0.99);
  // dazzling sun: pulsing bloom and pencil rays
  vec2 sq = (uv - vec2(${SUN[0]}, ${SUN[1]})) * vec2(uImgAspect, 1.0); float sr = length(sq), sa = atan(sq.y, sq.x);
  float rays = pow(0.5 + 0.5 * sin(sa * 14.0 + uT * 0.3), 6.0) * exp(-sr * 4.0) * smoothstep(0.06, 0.12, sr);
  c += vec3(1.0, 0.92, 0.65) * (exp(-sr * 9.0) * (0.25 + 0.06 * sin(uT * 2.0)) + rays * 0.12) * colored;
  // pencil wind lines sweeping through in gusts
  for (int i = 0; i < 5; i++) {
    float fi = float(i), y0 = 0.28 + fi * 0.13 + 0.035 * sin(uv.x * 6.0 + fi * 2.1 + uT * 0.6);
    float along = fract(uv.x * 0.7 - uT * (0.16 + 0.03 * fi) + fi * 0.37);
    float seg = smoothstep(0.0, 0.08, along) * smoothstep(0.34, 0.2, along);
    float curl = y0 + 0.02 * sin(along * 30.0) * smoothstep(0.22, 0.34, along);
    c *= 1.0 - 0.3 * smoothstep(0.0022, 0.0, abs(uv.y - curl)) * seg * uWindA * drawn;
  }
  return c;
`;
const HER_VERT = /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const HER_FRAG = /* glsl */ `
uniform sampler2D uTex, uMask; uniform float uT, uReveal, uAlpha; varying vec2 vUv;
${NOISE}
void main(){
  vec2 uv = vUv;
  float hair = smoothstep(0.72, 0.95, uv.y) * smoothstep(0.62, 0.25, uv.x), dress = smoothstep(0.7, 0.5, uv.y) * smoothstep(0.35, 0.55, uv.y);
  uv.x += sin(uT * 7.0 + uv.y * 12.0 + uv.x * 5.0) * (0.008 * hair + 0.004 * dress);
  uv.y += sin(uT * 6.0 + uv.x * 14.0) * 0.004 * dress;
  vec3 c = texture2D(uTex, uv).rgb; float a = texture2D(uMask, uv).r;
  vec2 q = vUv * vec2(0.7, 1.0);
  float h = abs(fract((q.x + q.y) * 50.0) - 0.5) * 0.3 + fbm(q * 5.0) * 0.6 + vUv.x * 0.2;
  a *= smoothstep(h - 0.05, h + 0.05, uReveal * 1.3 - 0.1) * uAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(c, a);
}`;
const PETAL_VERT = /* glsl */ `attribute vec4 aR; uniform float uT, uAsp, uPx, uA; varying vec3 vCol; varying float vA, vRot;
void main(){
  float sp = 0.25 + 0.4 * aR.z, x = fract(aR.x + uT * sp * 0.12) ;
  vec3 p = vec3((x * 2.4 - 1.2) * uAsp, (aR.y * 2.0 - 1.0) * 0.9 + 0.15 * sin(uT * 1.3 + aR.w * 20.0 + x * 6.0), 0.0);
  vRot = uT * (2.0 + 4.0 * aR.w) + aR.w * 10.0;
  vA = uA * smoothstep(0.0, 0.08, x) * smoothstep(1.0, 0.9, x);
  float k = fract(aR.w * 7.0);
  vCol = k < 0.3 ? vec3(0.96, 0.62, 0.7) : k < 0.55 ? vec3(0.98, 0.72, 0.45) : k < 0.8 ? vec3(0.99, 0.95, 0.85) : vec3(0.98, 0.86, 0.35);
  gl_PointSize = uPx * (12.0 + 18.0 * aR.z);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`;
const PETAL_FRAG = /* glsl */ `varying vec3 vCol; varying float vA, vRot;
void main(){
  vec2 d = gl_PointCoord - 0.5; float c = cos(vRot), s = sin(vRot); d = mat2(c, s, -s, c) * d;
  d.x *= 0.45 + 0.4 * abs(sin(vRot * 0.7));
  float e = length(d * vec2(1.0, 2.2)); float a = smoothstep(0.24, 0.2, e) * vA;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vCol * (0.9 + 0.1 * d.y), a * 0.9);
}`;

// white-background drawing -> alpha mask by flood fill from the borders (keeps her white shirt)
function floodMask(entry) {
  const w = Math.round(entry.w / 2), h = Math.round(entry.h / 2);
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d', { willReadFrequently: true }); g.drawImage(entry.img, 0, 0, w, h);
  const d = g.getImageData(0, 0, w, h), px = d.data, bg = new Uint8Array(w * h), st = [];
  const white = (i) => { const r = px[i * 4], gg = px[i * 4 + 1], b = px[i * 4 + 2]; return Math.min(r, gg, b) > 222 && Math.max(r, gg, b) - Math.min(r, gg, b) < 26; };
  for (let x = 0; x < w; x++) st.push(x, (h - 1) * w + x);
  for (let y = 0; y < h; y++) st.push(y * w, y * w + w - 1);
  while (st.length) {
    const i = st.pop(); if (bg[i] || !white(i)) continue; bg[i] = 1;
    const x = i % w; if (x > 0) st.push(i - 1); if (x < w - 1) st.push(i + 1); if (i >= w) st.push(i - w); if (i < w * (h - 1)) st.push(i + w);
  }
  for (let i = 0; i < w * h; i++) { const v = bg[i] ? 0 : 255; px[i * 4] = px[i * 4 + 1] = px[i * 4 + 2] = v; px[i * 4 + 3] = 255; }
  g.putImageData(d, 0, 0);
  const o = document.createElement('canvas'); o.width = w; o.height = h;
  const og = o.getContext('2d'); og.filter = 'blur(1px)'; og.drawImage(c, 0, 0);
  const t = new THREE.CanvasTexture(o); t.colorSpace = THREE.NoColorSpace; return t;
}

const NP = 140, TH = 233.2, TX = 244.8, TT = 243.6;   // her entrance / exit, the title
export class Sketch extends Scene {
  constructor(ctx) {
    super(ctx, { ortho: true });
    const I = ctx.img, V = (v) => ({ value: v });
    this.M = plateMat(I.meadow, I.meadow_d, { head: HEAD, warp: WARP, hook: HOOK,
      uniforms: { uDraw: V(0), uColor: V(0), uWindA: V(1), uTexel: V(new THREE.Vector2(1.2 / I.meadow.w, 1.2 / I.meadow.h)) } });
    this.scene.add(plateMesh(this.M));
    // her, running
    const R = I.run_her, asp = R.w / R.h;
    this.HU = { uTex: V(R.tex), uMask: V(floodMask(R)), uT: V(0), uReveal: V(0), uAlpha: V(1) };
    const g = new THREE.PlaneGeometry(asp, 1); g.translate(0, 0.5, 0);
    this.her = new THREE.Mesh(g, new THREE.ShaderMaterial({ vertexShader: HER_VERT, fragmentShader: HER_FRAG, uniforms: this.HU, transparent: true, depthTest: false, depthWrite: false }));
    this.her.renderOrder = 2; this.her.frustumCulled = false;
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: ctx.shared.glow, color: new THREE.Color(0.2, 0.25, 0.12), transparent: true, depthTest: false, depthWrite: false }));
    this.shadow.renderOrder = 1;
    // petals on the wind
    const RR = rng(226), aR = new Float32Array(NP * 4); for (let i = 0; i < aR.length; i++) aR[i] = RR();
    const pg = new THREE.BufferGeometry();
    pg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NP * 3), 3));
    pg.setAttribute('aR', new THREE.BufferAttribute(aR, 4));
    this.PU = { uT: V(0), uA: V(0), uPx: V(1), uAsp: V(16 / 9) };
    this.petals = new THREE.Points(pg, new THREE.ShaderMaterial({ vertexShader: PETAL_VERT, fragmentShader: PETAL_FRAG, uniforms: this.PU, transparent: true, depthTest: false, depthWrite: false }));
    this.petals.renderOrder = 3; this.petals.frustumCulled = false;
    // the end title, written by hand in red pencil, and the credit in graphite
    this.title = new WrittenText('One Last Kiss', { font: FONTS.script, size: 220, height: 0.62, color: [0.2, 0.008, 0.015], paper: true, soft: 0.03 });
    this.credit = new WrittenText('宇多田ヒカル  ·  Hikaru Utada', { font: FONTS.mincho, size: 140, height: 0.13, color: [0.03, 0.03, 0.035], paper: true, soft: 0.05 });
    this.title.tip.visible = false; this.credit.tip.visible = false;
    this.title.group.renderOrder = 4; this.title.mesh.renderOrder = 4; this.credit.mesh.renderOrder = 4;
    this.scene.add(this.shadow, this.her, this.petals, this.title.group, this.credit.group);
  }
  update(t) {
    const U = this.M.uniforms, a = this.ctx.aspect;
    U.uT.value = t; U.uAspect.value = a; this.PU.uAsp.value = a; this.PU.uT.value = t; this.PU.uPx.value = this.ctx.h / 720;
    // drawing: lines follow the wind, colour hatches in on 追いかけた; at the very end the colour lifts off again
    U.uDraw.value = ease.inOut(range(t, T0 + 0.2, 231.4));
    U.uColor.value = ease.inOut(range(t, 229.4, 236.2)) * (1 - 0.85 * ease.inOut(range(t, 247.2, 251.2)));
    U.uWindA.value = 0.55 + 0.45 * Math.sin(t * 0.7) ** 2 - 0.3 * range(t, 240, T1);
    // camera: from the flowers at her feet across the meadow, then lifts to the sun and the sky
    const [cx, cy, z] = keys(t, [[T0, -0.1, -0.12, 1.4], [233, -0.08, -0.08, 1.25], [239.5, 0.01, -0.03, 1.12], [244.5, 0.05, 0.06, 1.2], [T1, 0.04, 0.085, 1.26]]);
    const sw = 0.004 * Math.sin(t * 0.31);
    U.uCam.value.set(cx, cy + sw, z); U.uPar.value.set(0.05 * (cx + 0.1), 0.02 * cy);
    // her run: in from the left, slows on the bright afternoon, runs out to the right toward the sun
    const p = range(t, TH, TX), xn = lerp(-1.25, 1.3, 0.5 * p + 0.5 * ease.inOut(p) + 0.12 * Math.sin(p * Math.PI) * 0);
    const H = 1.24, st = t / (PERIOD * 1.0) * Math.PI;
    const bob = 0.022 * Math.abs(Math.sin(st)), gy = -0.98 - 0.08 * (1 - Math.cos(p * Math.PI)) * 0 + 0.03 * ease.inOut(p);
    this.her.position.set(xn * a, gy + bob, 0); this.her.scale.set(H, H, 1);
    this.her.rotation.z = -0.03 + 0.025 * Math.sin(st);
    this.HU.uT.value = t; this.HU.uReveal.value = ease.out(range(t, TH, TH + 2.6));
    this.her.visible = t > TH && t < TX + 0.2;
    this.shadow.position.set(xn * a + 0.05, gy + 0.02, 0); this.shadow.scale.set(0.8 * (1 - bob * 5), 0.09, 1);
    this.shadow.material.opacity = 0.5 * this.HU.uReveal.value; this.shadow.visible = this.her.visible;
    this.PU.uA.value = smooth(228.5, 232, t) * (1 - 0.6 * smooth(244, 250, t));
    // title in the sky, left of the sun
    const tp = ease.inOut(range(t, TT, TT + 3.4)), cp = ease.inOut(range(t, TT + 3.0, TT + 4.6));
    const out = 1 - smooth(250.4, T1 - 0.1, t);
    this.title.group.position.set(-0.22 * a, 0.42, 0); this.title.group.rotation.z = 0.04;
    this.credit.group.position.set(-0.22 * a + 0.02, 0.15, 0);
    this.title.set(tp, out, 0); this.credit.set(cp, 0.85 * out, 0);
    this.title.group.visible = t > TT; this.credit.group.visible = t > TT + 3;
  }
  post(t) {
    const w = smooth(249.6, T1, t);
    return { tone: 1, bloom: 0.22, bloomThr: 0.92, sat: 1.02, contrast: 1.0, vig: 0.22, grain: 0.035, ca: 0, letter: 0,
      exposure: 1.0, fadeW: 0.9 * w, dust: 0 };
  }
}
