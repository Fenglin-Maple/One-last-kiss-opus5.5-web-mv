// Instrumental bridge (136.17-149.03). A: the empty night train - city lights streak past the glass, then it
// dives into a tunnel and sodium lamps sweep the carriage faster and faster. B: flash cut into a tunnel of
// memories - polaroids line the walls and rush past, rings of light pulse on every kick, two EVA-style title
// cards slam in between beats, and the far end opens into white (-> red sea).
import * as THREE from 'three';
import { Scene } from './base.js';
import { plateMat, plateMesh } from '../core/images.js';
import { NOISE } from '../core/glsl.js';
import { canvas, tex, FONTS } from '../core/textures.js';
import { clamp, smooth, range, ease, lerp, rng } from '../core/util.js';
import { audio } from '../core/audio.js';

const T0 = 136.17, TB = 141.17, TIN = 139.4, T1 = 149.03, NC = 72, SPAN = 36;
const CARDS = [[144.74, 0.42, '忘れられない', 'THE ONE I CAN’T FORGET'], [146.88, 0.42, '最後のキス', 'ONE LAST KISS']];

const WIN_HEAD = /* glsl */ `uniform float uTun, uLampS, uLampP, uKick;`;
const WIN_HOOK = /* glsl */ `
  vec2 iu = vec2(uv.x, 1.0 - uv.y);
  float glass = smoothstep(0.25, 0.28, iu.x) * smoothstep(0.03, 0.06, iu.y) * smoothstep(0.93, 0.9, iu.y);
  // city lights streaking past (scenery moves left)
  vec3 st = vec3(0.0);
  for (int k = 0; k < 3; k++) {
    float rows = 70.0 + float(k) * 40.0, row = floor(iu.y * rows), h = hash12(vec2(row, float(k)));
    float spd = 1.2 + 2.5 * h, x = iu.x + uT * spd + h * 13.0, cell = floor(x * 2.0);
    float hc = hash12(vec2(cell, row + float(k) * 91.0)); if (hc < 0.7) continue;
    float fx = fract(x * 2.0), len = 0.15 + 0.5 * hash12(vec2(cell, row + 7.0));
    float s = smoothstep(0.0, 0.03, fx) * smoothstep(len, len * 0.4, fx) * exp(-pow((fract(iu.y * rows) - 0.5) * 3.2, 2.0));
    vec3 c = hc > 0.9 ? vec3(0.5, 0.9, 1.0) : hc > 0.78 ? vec3(1.0, 0.95, 0.85) : vec3(1.0, 0.55, 0.2);
    st += c * s * (0.5 + 0.5 * hash12(vec2(row, 3.0))) * smoothstep(0.35, 0.6, iu.y) * smoothstep(0.95, 0.75, iu.y);
  }
  col = mix(col, col * vec3(0.25, 0.2, 0.2), glass * uTun);                            // tunnel: city goes dark
  col += st * glass * (1.0 - uTun) * 0.8;
  // sodium lamps sweep the carriage right -> left
  float lx = fract(iu.x * 1.4 + uLampP), lamp = exp(-pow((lx - 0.5) * 18.0, 2.0)) * uTun;
  col += vec3(1.0, 0.48, 0.12) * lamp * (0.25 + 0.55 * glass) * 0.7 + vec3(1.0, 0.6, 0.3) * col * lamp * 1.2;
  col *= 1.0 + 0.18 * uKick;
  return col;`;

const TUN_FRAG = /* glsl */ `
uniform float uZ, uRoll, uKick, uExit, uAspect, uFov, uT; varying vec2 vUv;
${NOISE}
void main(){
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0) * 2.0 * tan(uFov * 0.5);
  float cr = cos(uRoll), sr = sin(uRoll); p = mat2(cr, sr, -sr, cr) * p;
  float r = length(p), z = 1.0 / max(r, 1e-3), a = atan(p.y, p.x), wz = z + uZ;
  float fog = exp(-z * 0.09);
  vec3 col = vec3(0.012, 0.014, 0.03) * (0.4 + 0.6 * fog);
  float strip = pow(abs(cos(a * 6.0)), 400.0) * fog * (0.6 + 0.4 * sin(wz * 0.8));
  col += vec3(0.55, 0.75, 1.0) * strip * 0.35;
  float ring = exp(-pow((fract(wz / 4.0) - 0.5) * 30.0, 2.0)) * fog;
  col += vec3(1.0, 0.62, 0.28) * ring * (0.25 + 1.3 * uKick);
  vec2 hx = vec2(a * 3.0, wz * 0.9); float hc = hash12(floor(hx));
  col += vec3(0.4, 0.5, 0.9) * step(0.93, hc) * fog * 0.12 * (0.5 + 0.5 * sin(uT * 3.0 + hc * 40.0));
  col += vec3(1.0, 0.95, 0.9) * (exp(-r * 18.0) * 0.4 + uExit * exp(-r * mix(10.0, 1.2, uExit)) * 3.0);
  gl_FragColor = vec4(col, 1.0);
}`;

const CARD_VERT = /* glsl */ `
attribute vec4 aC; uniform float uZ, uRoll, uT; varying vec2 vUv; varying float vF, vCell, vRing;
void main(){
  float dz = mod(aC.y - uZ, ${SPAN}.0), z = -dz;
  float ang = aC.x + aC.w * 0.3 * sin(uT * 0.3 + aC.w * 6.0);
  vec3 N = -vec3(cos(ang), sin(ang), 0.0), T = vec3(-sin(ang), cos(ang), 0.0);
  vec3 B = normalize(N * 0.94 + vec3(0.0, 0.0, 1.0) * 0.35);
  float rot = (aC.w - 0.5) * 0.5; vec2 q = position.xy * vec2(0.34, 0.41);
  q = mat2(cos(rot), sin(rot), -sin(rot), cos(rot)) * q;
  vec3 wp = -N * 0.9 + vec3(0.0, 0.0, z) + T * q.x + B * (q.y + 0.2);
  float cr = cos(uRoll), sr = sin(uRoll); wp.xy = mat2(cr, -sr, sr, cr) * wp.xy;
  vUv = uv; vCell = aC.z; vF = smoothstep(${SPAN}.0, ${SPAN - 12}.0, dz) * smoothstep(0.2, 1.5, dz);
  vRing = exp(-pow((fract((dz + uZ) / 4.0) - 0.5) * 6.0, 2.0));
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`;
const CARD_FRAG = /* glsl */ `
uniform sampler2D uAtlas; uniform float uKick; varying vec2 vUv; varying float vF, vCell, vRing;
void main(){
  vec2 ph = (vUv - vec2(0.06, 0.2)) / vec2(0.88, 0.74);
  vec3 c = vec3(0.93, 0.9, 0.84);
  if (ph.x > 0.0 && ph.x < 1.0 && ph.y > 0.0 && ph.y < 1.0)
    c = texture2D(uAtlas, vec2(mod(vCell, 4.0) / 4.0, 1.0 - (floor(vCell / 4.0) + 1.0) / 3.0) + ph * vec2(0.25, 1.0 / 3.0)).rgb;
  c *= 0.55 + 0.35 * vRing + 0.5 * uKick;
  gl_FragColor = vec4(c * vF, 1.0);
}`;
const TITLE_FRAG = /* glsl */ `uniform sampler2D uA, uB; uniform float uI, uAl, uInv, uAspect, uJit; varying vec2 vUv;
void main(){
  vec2 uv = 0.5 + (vUv - 0.5) * vec2(uAspect / (16.0 / 9.0), 1.0) / (1.0 + uJit);
  float m = (uI < 0.5 ? texture2D(uA, uv) : texture2D(uB, uv)).r * step(0.0, uv.x) * step(uv.x, 1.0);
  vec3 c = mix(vec3(m) * vec3(1.0, 0.97, 0.94), vec3(1.0 - m) * vec3(0.9, 0.05, 0.08) + vec3(m * 0.02), uInv);
  gl_FragColor = vec4(c, uAl);
}`;
function titleTex(jp, en) {
  const W = 1920, H = 1080, c = canvas(W, H), g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, W, H); g.fillStyle = '#fff';
  g.save(); g.translate(250, 520); g.scale(0.84, 1.0);
  g.font = `500 250px ${FONTS.mincho}`; g.textBaseline = 'alphabetic'; g.fillText(jp, 0, 0); g.restore();
  g.fillRect(256, 590, 1080, 3);
  g.font = `500 58px ${FONTS.serif}`; if ('letterSpacing' in g) g.letterSpacing = '14px';
  g.fillText(en, 256, 680);
  g.font = `400 30px ${FONTS.serif}`; if ('letterSpacing' in g) g.letterSpacing = '8px';
  g.fillText('ONE LAST KISS', 1440, 960);
  return tex(c, { linear: true });
}

export class Tunnel extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 72, near: 0.05, far: 60 });
    const I = ctx.img, V = (v) => ({ value: v });
    // A: train window
    this.sA = new THREE.Scene();
    this.W = plateMat(I.trainwin, null, { head: WIN_HEAD, hook: WIN_HOOK, uniforms: { uTun: V(0), uLampS: V(0), uLampP: V(0), uKick: V(0) } });
    this.sA.add(plateMesh(this.W));
    // B: tunnel
    this.TU = { uZ: V(0), uRoll: V(0), uKick: V(0), uExit: V(0), uAspect: V(16 / 9), uFov: V(72 * Math.PI / 180), uT: V(0) };
    const clip = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
    this.scene.add(plateMesh(new THREE.ShaderMaterial({ vertexShader: clip, fragmentShader: TUN_FRAG, uniforms: this.TU, depthTest: false, depthWrite: false })));
    const base = new THREE.PlaneGeometry(1, 1), g = new THREE.InstancedBufferGeometry();
    g.index = base.index; g.setAttribute('position', base.attributes.position); g.setAttribute('uv', base.attributes.uv);
    const R = rng(141), aC = new Float32Array(NC * 4);
    for (let i = 0; i < NC; i++) aC.set([(i % 6) / 6 * Math.PI * 2 + (R() - 0.5) * 0.5 + Math.floor(i / 6) * 0.5, (i / NC) * SPAN + R() * 0.3, Math.floor(R() * 11), R()], i * 4);
    g.setAttribute('aC', new THREE.InstancedBufferAttribute(aC, 4)); g.instanceCount = NC;
    this.CU = { uZ: this.TU.uZ, uRoll: this.TU.uRoll, uT: this.TU.uT, uKick: this.TU.uKick, uAtlas: V(ctx.shared.photos) };
    const cards = new THREE.Mesh(g, new THREE.ShaderMaterial({ vertexShader: CARD_VERT, fragmentShader: CARD_FRAG, uniforms: this.CU, side: THREE.DoubleSide }));
    cards.frustumCulled = false; this.scene.add(cards);
    this.TT = { uA: V(titleTex(CARDS[0][2], CARDS[0][3])), uB: V(titleTex(CARDS[1][2], CARDS[1][3])), uI: V(0), uAl: V(0), uInv: V(0), uAspect: V(16 / 9), uJit: V(0) };
    const tm = plateMesh(new THREE.ShaderMaterial({ vertexShader: clip, fragmentShader: TITLE_FRAG, uniforms: this.TT, transparent: true, depthTest: false, depthWrite: false }), 50);
    this.scene.add(tm);
    this.t = T0;
  }
  update(t) {
    this.t = t; const a = this.ctx.aspect, kick = clamp(Math.max(audio.get('kick', t) * 1.2, audio.beatPulse(t, 7) * 0.5));
    if (t < TB) {
      const U = this.W.uniforms; U.uT.value = t; U.uAspect.value = a;
      U.uCam.value.set(0.004 * Math.sin(t * 1.1), 0.003 * Math.sin(t * 8.5) * (1 + smooth(TIN, TB, t)), 1.04 + 0.06 * range(t, T0, TB));
      U.uTun.value = smooth(TIN - 0.08, TIN + 0.12, t);
      const u = Math.max(0, t - TIN); U.uLampP.value = 1.6 * u + 0.6 * u * u;
      U.uKick.value = kick; U.uGain.value = smooth(T0 - 0.1, T0 + 0.3, t);
      return;
    }
    const u = t - TB, U = this.TU; U.uT.value = t; U.uAspect.value = a; U.uKick.value = kick;
    U.uZ.value = 4 * u + 0.35 * u * u + 10 * Math.pow(range(t, 147.4, T1), 2);
    U.uRoll.value = 0.12 * u + 0.08 * Math.sin(u * 0.7);
    U.uExit.value = ease.in(range(t, 147.2, T1));
    const TT = this.TT; TT.uAspect.value = a; TT.uAl.value = 0;
    CARDS.forEach(([tc, dur], i) => {
      if (t >= tc && t < tc + dur) {
        TT.uAl.value = 1; TT.uI.value = i; TT.uInv.value = t > tc + dur - 0.1 ? 1 : 0;
        TT.uJit.value = t < tc + 0.05 ? 0.06 : 0.01 * (t - tc);
      }
    });
  }
  render(r, target) {
    r.setRenderTarget(target); r.setClearColor(this.clear, 1); r.clear();
    r.render(this.t < TB ? this.sA : this.scene, this.camera);
  }
  post(t) {
    if (t < TB) {
      const f = t >= TIN ? 0.5 * Math.exp(-(t - TIN) * 6) : 0;
      return { tint: [0.95, 0.97, 1.08], sat: 1.05, bloom: 0.75, bloomThr: 0.7, vig: 0.5, grain: 0.07, ca: 0.5, fadeW: f + 0.9 * smooth(TB - 0.18, TB, t), dust: 0.15 };
    }
    const k = clamp(audio.get('kick', t)), card = CARDS.some(([tc, d]) => t >= tc && t < tc + d);
    return { tint: [1.0, 0.98, 1.03], sat: 1.05, bloom: card ? 0.3 : 0.85 + 0.4 * k, bloomThr: 0.65, vig: card ? 0 : 0.6, grain: card ? 0.12 : 0.07,
      ca: card ? 0.2 : 0.5 + 0.9 * k, fadeW: 0.8 * Math.exp(-(t - TB) * 5), dust: card ? 0 : 0.2, dustCol: [0.8, 0.9, 1] };
  }
}
