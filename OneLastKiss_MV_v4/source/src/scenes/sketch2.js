// v2 pencil epilogue (226.2-252.03): 吹いていった風の後を / 追いかけた　眩しい午後
// A genga sheet again, but this time of the world after: the seaside town with the station and the road down to
// the sea. Graphite lines draw in with the wind (and "boil" at 12 fps like hand-drawn animation), the
// animator's blue frame guide and timing ladder sit on the sheet, then colour pencil hatches in and the marks
// fade. The camera slides down the road to the sea; the two of them run in hand in hand, drawn first in
// graphite, then coloured. A cut to a tracking close-up (the town streaks past), back wide, they run out to
// the right, the camera lifts to the sky and "One Last Kiss" is written there in red pencil.
import * as THREE from 'three';
import { Scene } from './base.js';
import { plateMat, plateMesh } from '../core/images.js';
import { NOISE } from '../core/glsl.js';
import { WrittenText } from '../core/written.js';
import { FONTS } from '../core/textures.js';
import { smooth, range, ease, lerp, keys, rng } from '../core/util.js';
import { audio, PERIOD } from '../core/audio.js';

const T0 = 226.2, T1 = 252.03, SUN = [0.62, 0.86];
const TC = 237.72, TW = 241.96;          // tracking close-up in / back to wide (on the bar)
const TH = 232.9, TX = 245.2, TT = 245.0; // couple in / out, title
const HEAD = /* glsl */ `uniform float uDraw, uColor, uWindA, uMarks, uBoil, uStreak; uniform vec2 uTexel;
float lumA(vec2 p){ return dot(texture2D(uImg, p).rgb, vec3(0.3, 0.55, 0.15)); }
float box(vec2 p, vec2 a, vec2 b, float w){ vec2 q = min(p - a, b - p); float i = min(q.x, q.y);
  return (i > -w && i < w) ? 1.0 : 0.0; }`;
const WARP = /* glsl */ `
  // clouds drift and breathe, grass and hedges sway in gusts, the sea breathes; streak = speed blur of the close-up
  float sky = smoothstep(0.62, 0.72, uv.y);
  uv.x -= 0.012 * sin((uT - 226.0) * 0.09) * sky + 0.003 * sin(uT * 0.3 + uv.y * 5.0) * sky;
  float g = 0.5 + 0.5 * sin(uv.x * 8.0 - uT * 2.2);
  uv.x += (sin(uv.x * 60.0 + uT * 3.3) * 0.35 + g) * 0.004 * smoothstep(0.45, 0.2, uv.y) * uWindA * (0.5 + d);
  float sea = smoothstep(0.66, 0.6, uv.y) * smoothstep(0.38, 0.45, uv.y) * smoothstep(0.1, 0.35, uv.x) * smoothstep(0.92, 0.8, uv.x);
  uv.y += 0.0015 * sin(uv.x * 90.0 + uT * 2.0) * sea;
  return uv;
`;
const HOOK = /* glsl */ `
  vec2 q = vec2(uv.x * uImgAspect, uv.y);
  vec3 paper = vec3(0.975, 0.962, 0.935) * (0.965 + 0.05 * vnoise(suv * vec2(1600.0, 900.0)) + 0.02 * vnoise(suv * 60.0));
  // graphite (sobel), jittered per drawing so the lines boil like hand-drawn frames
  vec2 bj = (hash22(vec2(uBoil, 3.1)) - 0.5) * uTexel * 1.3;
  vec2 u2 = uv + bj;
  float gx = lumA(u2 + vec2(uTexel.x, 0.0)) - lumA(u2 - vec2(uTexel.x, 0.0)), gy = lumA(u2 + vec2(0.0, uTexel.y)) - lumA(u2 - vec2(0.0, uTexel.y));
  float edge = clamp(length(vec2(gx, gy)) * 6.0, 0.0, 1.0);
  float hatch = abs(fract((q.x + q.y) * 150.0 + uBoil * 0.37) - 0.5);
  float shade = (1.0 - lumA(uv)) * smoothstep(0.2, 0.0, hatch) * 0.55;
  vec3 graphite = paper * (1.0 - 0.78 * clamp(edge + shade, 0.0, 1.0)) * vec3(0.98, 0.98, 1.0);
  // reveal fronts follow the wind (left -> right), ragged like strokes
  float n = uv.x * 0.8 + fbm(q * 3.0) * 0.25 + (1.0 - uv.y) * 0.05;
  float drawn = smoothstep(n - 0.04, n, uDraw * 1.15 - 0.05);
  float h1 = abs(fract((q.x + q.y) * 60.0) - 0.5), h2 = abs(fract((q.x - q.y) * 45.0) - 0.5);
  float nc = (1.0 - uv.y) * 0.45 + uv.x * 0.35 + fbm(q * 4.0 + 7.0) * 0.3 + (h1 + h2) * 0.18;
  float cfr = uColor * 1.35 - 0.12, colored = smoothstep(nc - 0.03, nc + 0.03, cfr);
  vec3 c = mix(paper, graphite, drawn);
  // sea glitter + sun only once coloured
  float sea = smoothstep(0.64, 0.6, uv.y) * smoothstep(0.42, 0.5, uv.y) * smoothstep(0.15, 0.3, uv.x) * smoothstep(0.85, 0.7, uv.x);
  float gl = pow(vnoise(vec2(q.x * 260.0, q.y * 900.0) + vec2(uT * 1.5, 0.0)), 20.0) * 2.0 * sea;
  vec3 cc = col + vec3(1.0, 0.95, 0.8) * gl;
  vec2 sq = (uv - vec2(${SUN[0]}, ${SUN[1]})) * vec2(uImgAspect, 1.0); float sr = length(sq), sa = atan(sq.y, sq.x);
  float rays = pow(0.5 + 0.5 * sin(sa * 14.0 + uT * 0.3), 6.0) * exp(-sr * 3.5) * smoothstep(0.05, 0.12, sr);
  cc += vec3(1.0, 0.93, 0.7) * (exp(-sr * 8.0) * (0.2 + 0.05 * sin(uT * 2.0)) + rays * 0.1);
  c = mix(c, cc, colored);
  // the live pencil at the colour front: a darker band of fresh strokes
  c *= 1.0 - 0.14 * exp(-pow((cfr - nc) * 14.0, 2.0)) * step(0.01, uColor) * step(uColor, 0.99);
  // gulls: little pencil Vs flapping across the sky
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    vec2 gp = vec2(fract(0.15 + fi * 0.21 + (uT - 226.0) * (0.006 + 0.002 * fi)), 0.76 + 0.07 * sin(fi * 2.7) + 0.01 * sin(uT * 0.7 + fi));
    vec2 d2 = (uv - gp) * vec2(uImgAspect, 1.0) / (0.011 + 0.004 * fract(fi * 0.61));
    float fl = 0.55 * sin(uT * (7.0 + fi) + fi * 1.3);
    float wing = abs(abs(d2.x) * (0.45 + fl * 0.5) - (d2.y + 0.1 * d2.x * d2.x));
    c *= 1.0 - 0.55 * smoothstep(0.16, 0.05, wing) * step(abs(d2.x), 1.0) * drawn;
  }
  // wind lines (stronger in the tracking shot)
  for (int i = 0; i < 5; i++) {
    float fi = float(i), y0 = 0.22 + fi * 0.14 + 0.035 * sin(uv.x * 6.0 + fi * 2.1 + uT * 0.6);
    float along = fract(uv.x * 0.7 - uT * (0.16 + 0.03 * fi + 0.5 * uStreak) + fi * 0.37);
    float seg = smoothstep(0.0, 0.08, along) * smoothstep(0.34, 0.2, along);
    float curl = y0 + 0.02 * sin(along * 30.0) * smoothstep(0.22, 0.34, along);
    c *= 1.0 - (0.28 + 0.2 * uStreak) * smoothstep(0.0022, 0.0, abs(uv.y - curl)) * seg * uWindA * drawn;
  }
  // animator marks on the sheet (screen space): blue frame guide, crop ticks, timing ladder, red cut number box
  vec2 s = suv * vec2(uAspect, 1.0);
  float m = box(s, vec2(0.07, 0.07), vec2(uAspect - 0.07, 0.93), 0.0016) * step(0.5, fract(s.x * 60.0 + s.y * 60.0) + 0.3);
  m += box(s, vec2(0.12, 0.12), vec2(uAspect - 0.12, 0.88), 0.0012) * 0.6;
  float lad = step(uAspect - 0.055, s.x) * step(s.x, uAspect - 0.03) * step(0.2, s.y) * step(s.y, 0.8);
  m += lad * smoothstep(0.004, 0.0, abs(fract(s.y * 24.0) - 0.5) * 0.04) * 0.8 + step(abs(s.x - (uAspect - 0.03)), 0.001) * step(0.2, s.y) * step(s.y, 0.8);
  float red = box(s, vec2(uAspect - 0.36, 0.1), vec2(uAspect - 0.2, 0.16), 0.0018);
  c = mix(c, vec3(0.2, 0.38, 0.75), clamp(m, 0.0, 1.0) * 0.55 * uMarks);
  c = mix(c, vec3(0.75, 0.12, 0.1), red * 0.6 * uMarks);
  return c;
`;
const RUN_VERT = /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const RUN_FRAG = /* glsl */ `
uniform sampler2D uTex; uniform float uT, uLine, uColor, uAlpha, uBoil; uniform vec2 uTexel; varying vec2 vUv;
${NOISE}
float lum(vec2 p){ vec4 c = texture2D(uTex, p); return mix(1.0, dot(c.rgb, vec3(0.3, 0.55, 0.15)), c.a); }
void main(){
  vec2 uv = vUv;
  // her hair streams and the skirt flutters (left part of the cut-out), his shirt ripples a little
  float hair = smoothstep(0.55, 0.8, uv.y) * smoothstep(0.34, 0.0, uv.x), skirt = smoothstep(0.58, 0.4, uv.y) * smoothstep(0.12, 0.3, uv.y) * smoothstep(0.45, 0.25, uv.x);
  float shirt = smoothstep(0.45, 0.6, uv.x) * smoothstep(0.35, 0.5, uv.y) * smoothstep(0.85, 0.7, uv.y);
  uv.x += sin(uT * 8.0 + uv.y * 14.0 + uv.x * 9.0) * (0.01 * hair * (1.0 - uv.x * 2.0) + 0.005 * skirt + 0.002 * shirt);
  uv.y += sin(uT * 7.0 + uv.x * 16.0) * (0.006 * hair + 0.005 * skirt);
  vec4 tx = texture2D(uTex, uv);
  vec2 bj = (hash22(vec2(uBoil, 1.7)) - 0.5) * uTexel;
  vec2 u2 = uv + bj;
  float gx = lum(u2 + vec2(uTexel.x, 0.0)) - lum(u2 - vec2(uTexel.x, 0.0)), gy = lum(u2 + vec2(0.0, uTexel.y)) - lum(u2 - vec2(0.0, uTexel.y));
  float edge = clamp(length(vec2(gx, gy)) * 5.0, 0.0, 1.0);
  vec2 q = vUv * vec2(1.8, 1.0);
  float h = abs(fract((q.x + q.y) * 50.0) - 0.5) * 0.3 + fbm(q * 5.0) * 0.6 + vUv.x * 0.2;
  float line = smoothstep(h - 0.05, h + 0.05, uLine * 1.3 - 0.1), colr = smoothstep(h - 0.05, h + 0.05, uColor * 1.3 - 0.1);
  vec3 paper = vec3(0.975, 0.962, 0.935);
  vec3 c = mix(paper * (1.0 - 0.8 * edge), tx.rgb, colr);
  float a = mix(edge * line, tx.a * line, max(colr, 0.35 * line * tx.a)) * uAlpha;
  a = max(a, edge * line * uAlpha);
  if (a < 0.01) discard;
  gl_FragColor = vec4(c, a);
}`;
const PETAL_VERT = /* glsl */ `attribute vec4 aR; uniform float uT, uAsp, uPx, uA, uSp; varying vec3 vCol; varying float vA, vRot;
void main(){
  float sp = 0.25 + 0.4 * aR.z, x = fract(aR.x + uT * sp * 0.12 * uSp);
  vec3 p = vec3((x * 2.4 - 1.2) * uAsp, (aR.y * 2.0 - 1.0) * 0.9 + 0.15 * sin(uT * 1.3 + aR.w * 20.0 + x * 6.0), 0.0);
  vRot = uT * (2.0 + 4.0 * aR.w) + aR.w * 10.0;
  vA = uA * smoothstep(0.0, 0.08, x) * smoothstep(1.0, 0.9, x);
  float k = fract(aR.w * 7.0);
  vCol = k < 0.3 ? vec3(0.96, 0.62, 0.7) : k < 0.5 ? vec3(0.55, 0.72, 0.35) : k < 0.75 ? vec3(0.99, 0.95, 0.85) : vec3(0.98, 0.86, 0.35);
  gl_PointSize = uPx * (10.0 + 16.0 * aR.z);
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

// plate camera [t, x, y, zoom, parallax]; a cut is two keys < .1 s apart
const CAM = [[T0, 0.0, 0.165, 1.55, 0], [229.4, 0.01, 0.15, 1.5, 0], [233.2, 0.0, 0.02, 1.2, 0.02], [237.7, 0.02, -0.06, 1.22, 0.04],
  [TC, -0.12, -0.13, 2.1, 0.0], [TW - 0.02, 0.1, -0.12, 2.1, 0.0],
  [TW, 0.0, -0.05, 1.22, 0.04], [243.8, 0.02, -0.03, 1.2, 0.05], [246.6, 0.0, 0.135, 1.4, 0.02], [T1, -0.01, 0.15, 1.46, 0]];
const NP = 150;
export class Sketch2 extends Scene {
  constructor(ctx) {
    super(ctx, { ortho: true });
    const I = ctx.img, V = (v) => ({ value: v }), P = I.p_town;
    this.M = plateMat(P, I.p_town_d, { head: HEAD, warp: WARP, hook: HOOK,
      uniforms: { uDraw: V(0), uColor: V(0), uWindA: V(1), uMarks: V(1), uBoil: V(0), uStreak: V(0), uTexel: V(new THREE.Vector2(1.1 / P.w, 1.1 / P.h)) } });
    this.scene.add(plateMesh(this.M));
    const R = I.p_run, asp = R.w / R.h;
    this.RU = { uTex: V(R.tex), uT: V(0), uLine: V(0), uColor: V(0), uAlpha: V(1), uBoil: V(0), uTexel: V(new THREE.Vector2(1.2 / R.w, 1.2 / R.h)) };
    const g = new THREE.PlaneGeometry(asp, 1); g.translate(0, 0.5, 0);
    this.run = new THREE.Mesh(g, new THREE.ShaderMaterial({ vertexShader: RUN_VERT, fragmentShader: RUN_FRAG, uniforms: this.RU, transparent: true, depthTest: false, depthWrite: false }));
    this.run.renderOrder = 2; this.run.frustumCulled = false;
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: ctx.shared.glow, color: new THREE.Color(0.25, 0.22, 0.2), transparent: true, depthTest: false, depthWrite: false }));
    this.shadow.renderOrder = 1;
    const RR = rng(2262), aR = new Float32Array(NP * 4); for (let i = 0; i < aR.length; i++) aR[i] = RR();
    const pg = new THREE.BufferGeometry();
    pg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NP * 3), 3));
    pg.setAttribute('aR', new THREE.BufferAttribute(aR, 4));
    this.PU = { uT: V(0), uA: V(0), uPx: V(1), uAsp: V(16 / 9), uSp: V(1) };
    this.petals = new THREE.Points(pg, new THREE.ShaderMaterial({ vertexShader: PETAL_VERT, fragmentShader: PETAL_FRAG, uniforms: this.PU, transparent: true, depthTest: false, depthWrite: false }));
    this.petals.renderOrder = 3; this.petals.frustumCulled = false;
    this.title = new WrittenText('One Last Kiss', { font: FONTS.script, size: 220, height: 0.6, color: [0.2, 0.008, 0.015], paper: true, soft: 0.03 });
    this.credit = new WrittenText('宇多田ヒカル  ·  Hikaru Utada', { font: FONTS.mincho, size: 140, height: 0.12, color: [0.03, 0.03, 0.035], paper: true, soft: 0.05 });
    this.title.tip.visible = false; this.credit.tip.visible = false;
    this.title.group.renderOrder = 4; this.title.mesh.renderOrder = 4; this.credit.mesh.renderOrder = 4;
    this.scene.add(this.shadow, this.run, this.petals, this.title.group, this.credit.group);
  }
  update(t) {
    const U = this.M.uniforms, a = this.ctx.aspect;
    U.uT.value = t; U.uAspect.value = a; this.PU.uAsp.value = a; this.PU.uT.value = t; this.PU.uPx.value = this.ctx.h / 720;
    const boil = Math.floor(t * 8); U.uBoil.value = boil % 97; this.RU.uBoil.value = boil % 89;
    U.uDraw.value = ease.inOut(range(t, T0 + 0.1, 230.6));
    U.uColor.value = ease.inOut(range(t, 229.4, 236.4)) * (1 - 0.8 * ease.inOut(range(t, 248.2, 251.6)));
    U.uMarks.value = 1 - 0.85 * smooth(231.5, 235.5, t) + 0.5 * smooth(248.4, 251, t);
    const close = t >= TC && t < TW ? 1 : 0;
    U.uStreak.value = close; this.PU.uSp.value = 1 + 2.5 * close;
    U.uWindA.value = 0.6 + 0.4 * Math.sin(t * 0.7) ** 2 + 0.6 * close - 0.3 * range(t, 244, T1);
    const [cx, cy, z, par] = keys(t, CAM), sw = 0.003 * Math.sin(t * 0.31);
    // tracking shot: the town slides past behind them
    const trk = close ? (t - TC) * 0.055 : 0;
    U.uCam.value.set(cx + trk, cy + sw, z); U.uPar.value.set(par + close * 0.06 * Math.sin((t - TC) * 0.8), 0.01);
    // the two of them: in from the left along the road, (close-up: held mid-frame), out to the right
    const st = t / PERIOD * Math.PI, bob = Math.abs(Math.sin(st));
    let x, y, H;
    if (close) { x = lerp(-0.16, 0.14, range(t, TC, TW)) * a; y = -1.06; H = 1.75; }
    else if (t < TC) { const p = range(t, TH, TC); x = lerp(-1.3, -0.12, ease.out(p)) * a; y = -0.9; H = 0.95; }
    else { const p = range(t, TW, TX); x = lerp(0.05, 1.35, ease.in(p)) * a; y = -0.9 - 0.25 * ease.in(range(t, 243.8, TX)); H = 0.95; }
    this.run.position.set(x, y + (close ? 0.035 : 0.022) * bob, 0); this.run.scale.set(H, H, 1);
    this.run.rotation.z = -0.02 + 0.02 * Math.sin(st);
    this.RU.uT.value = t;
    this.RU.uLine.value = ease.out(range(t, TH, TH + 1.6));
    this.RU.uColor.value = ease.inOut(range(t, TH + 1.4, TH + 3.6));
    this.run.visible = t > TH && t < TX + 0.1;
    this.shadow.position.set(x, y + 0.02, 0); this.shadow.scale.set(H * 1.6 * (1 - bob * 0.15), 0.1 * H, 1);
    this.shadow.material.opacity = 0.45 * this.RU.uColor.value; this.shadow.visible = this.run.visible;
    this.PU.uA.value = smooth(229, 232, t) * (1 - 0.6 * smooth(246, 250, t));
    // title in the sky
    const tp = ease.inOut(range(t, TT, TT + 3.2)), cp = ease.inOut(range(t, TT + 2.8, TT + 4.4));
    const out = 1 - smooth(250.6, T1 - 0.1, t);
    this.title.group.position.set(-0.2 * a, 0.4, 0); this.title.group.rotation.z = 0.04;
    this.credit.group.position.set(-0.2 * a + 0.02, 0.14, 0);
    this.title.set(tp, out, 0); this.credit.set(cp, 0.85 * out, 0);
    this.title.group.visible = t > TT; this.credit.group.visible = t > TT + 2.8;
  }
  post(t) {
    const w = smooth(249.8, T1, t), k = audio.hitPulse('kick', t, 10) * smooth(233, 236, t) * (1 - smooth(244, 247, t));
    return { tone: 1, bloom: 0.22, bloomThr: 0.92, sat: 1.04, contrast: 1.0, vig: 0.22, grain: 0.035, ca: 0, letter: 0,
      exposure: 1.0 + 0.03 * k, fadeW: 0.9 * w, dust: 0 };
  }
}
