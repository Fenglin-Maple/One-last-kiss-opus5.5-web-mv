// 私の心のプロジェクター: a dark screening room. The memories flick past on the screen in a dusty beam, the
// reels slow, the film jams on the frame of the two of them - and burns through. What remains is the image
// burned into the screen in gold, beating like a heart, while the camera pushes into it.
import { Scene } from './base.js';
import { plateMesh } from '../core/images.js';
import { NOISE } from '../core/glsl.js';
import { clamp, smooth, range, ease, rng, lerp } from '../core/util.js';
import { audio, PERIOD } from '../core/audio.js';
import * as THREE from 'three';

const T0 = 82.78, JAM = 84.92, HERO = 12;

const FRAG = /* glsl */ `
uniform sampler2D uAtlas, uHero, uHeroD; uniform float uT, uAspect, uZoom, uCell, uPrev, uRoll, uWeave, uBurn, uGold, uBeat, uReel, uLamp, uHeat, uFade;
uniform vec2 uPar; varying vec2 vUv;
${NOISE}
const vec2 C = vec2(0.51, 0.505), SH = vec2(0.23, 0.305);           // screen centre / half size (screen uv)
vec2 cellUV(float c, vec2 u){ return vec2(mod(c, 4.0) / 4.0, 1.0 - (floor(c / 4.0) + 1.0) / 3.0) + clamp(u, 0.002, 0.998) * vec2(0.25, 1.0 / 3.0); }
vec3 frame(float c, vec2 g, float lod){
  vec2 cu = vec2(g.x, 0.5 + (g.y - 0.5) * 0.75 - (c > 11.5 ? 0.06 : 0.0));
  if (c < 11.5) return texture2D(uAtlas, cellUV(c, cu), lod).rgb;
  float d = texture2D(uHeroD, cu).r; return texture2D(uHero, cu + uPar * (d - 0.5), lod).rgb;
}
float sdBox(vec2 p, vec2 b){ vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
void main(){
  vec2 s = C + (vUv - C) / uZoom, p = vec2(s.x * uAspect, s.y);
  vec2 f = (s - C) / SH * 0.5 + 0.5;                                   // 0..1 inside the screen
  float inS = step(0.0, f.x) * step(f.x, 1.0) * step(0.0, f.y) * step(f.y, 1.0);
  vec3 avg = uCell < 11.5 ? texture2D(uAtlas, cellUV(uCell, vec2(0.5)), 9.0).rgb : texture2D(uHero, vec2(0.5), 10.0).rgb;
  avg = mix(avg, vec3(1.0, 0.85, 0.6), 0.35) * uLamp;
  // room: dark wall lit by the screen, seat silhouettes
  float ds = sdBox(s - C, SH);
  vec3 col = vec3(0.008, 0.007, 0.01) + avg * 0.12 * exp(-max(ds, 0.0) * 11.0) * (1.0 - inS);
  // screen content
  if (inS > 0.5) {
    float pulse = 1.0 + 0.012 * uBeat; vec2 g = (f - 0.5) / pulse + 0.5;
    g.x += uWeave * (vnoise(vec2(uT * 9.0, 1.0)) - 0.5) * 0.02;
    float y2 = g.y + uRoll; float cc = y2 > 1.0 ? uPrev : uCell; g.y = fract(y2);
    // heat blisters on the jammed frame
    vec2 bc = vec2(0.52, 0.55); float hb = uHeat * smoothstep(0.35, 0.0, length((g - bc) * vec2(1.33, 1.0)));
    g += (vec2(vnoise(g * 14.0 + uT), vnoise(g * 14.0 - uT)) - 0.5) * 0.02 * hb;
    vec3 img = frame(cc, g, 0.0) * smoothstep(0.0, 0.012, g.y) * smoothstep(1.0, 0.988, g.y);
    img *= (0.92 + 0.08 * step(0.5, fract(uT * 24.0))) * uLamp;
    img += vec3(0.25, 0.1, 0.02) * hb;
    // burn-through
    float n = 0.8 * fbm(f * vec2(5.0, 3.8) + 3.0) + length((f - bc) * vec2(1.33, 1.0)) * 1.3;
    float th = uBurn > 0.0 ? 0.2 + 1.75 * uBurn : -1.0;
    vec3 hot = vec3(1.05, 0.92, 0.72);
    float hole = smoothstep(th, th - 0.025, n), edge = smoothstep(th + 0.09, th, n) * (1.0 - hole), chr = smoothstep(th + 0.3, th + 0.04, n) * (1.0 - hole);
    vec3 filmC = img * (1.0 - 0.85 * chr) + vec3(2.6, 0.7, 0.1) * edge * (0.7 + 0.5 * vnoise(f * 40.0 + uT * 6.0)) * step(0.001, uBurn);
    // the burned-in afterimage: the frame again, in gold light
    vec3 hi = frame(float(${HERO}), (f - 0.5) / (1.0 + 0.02 * uBeat) + 0.5, 0.0);
    float lum = dot(hi, vec3(0.3, 0.55, 0.15));
    vec3 gold = vec3(1.2, 0.66, 0.26) * pow(lum, 1.7) * 1.7 + vec3(0.07, 0.015, 0.0) * (1.0 - lum);
    gold *= 1.0 - 0.45 * smoothstep(0.25, 0.75, length((f - 0.5) * vec2(1.2, 1.0)));
    gold *= 1.0 + 0.35 * uBeat;
    vec3 inside = mix(hot, gold, uGold);
    col = mix(filmC, inside, hole);
  }
  // the projector beam (lens -> screen), dust in the light
  vec2 L = vec2(0.36, 0.415), S = vec2(C.x * uAspect, C.y), ax = S - L; float len = length(ax); ax /= len;
  vec2 rp = p - L; float sa = dot(rp, ax) / len, h = abs(rp.x * ax.y - rp.y * ax.x);
  float w = mix(0.01, SH.y * 1.05, clamp(sa, 0.0, 1.0));
  float cone = smoothstep(w, w * 0.55, h) * smoothstep(0.0, 0.05, sa) * smoothstep(1.02, 0.85, sa);
  float smoke = 0.35 + 0.9 * fbm(p * 6.0 + vec2(-uT * 0.25, uT * 0.08));
  vec2 dq = p * 40.0 + vec2(uT * 0.6, sin(uT * 0.4) * 2.0); vec2 di = floor(dq);
  float mote = step(0.93, hash12(di)) * smoothstep(0.12, 0.0, length(fract(dq) - hash22(di)));
  col += avg * cone * (0.22 * smoke * smoke + 1.2 * mote) * (1.0 - 0.5 * uGold) * (0.9 + 0.1 * step(0.5, fract(uT * 24.0)));
  col += avg * exp(-length(p - L) * 30.0) * 1.6;                     // lens glow
  // projector + reels silhouette (rim-lit by the beam)
  float body = sdBox(p - vec2(0.2, 0.37), vec2(0.15, 0.06)) - 0.015;
  body = min(body, sdBox(p - vec2(0.34, 0.41), vec2(0.03, 0.022)));
  float sil = 1.0 - step(0.0, body);
  for (int i = 0; i < 2; i++) {
    vec2 rc = i == 0 ? vec2(0.11, 0.56) : vec2(0.29, 0.555); vec2 d = p - rc; float r = length(d);
    float a = atan(d.y, d.x) + uReel * (i == 0 ? 1.0 : 1.3);
    float spokes = step(0.55, abs(sin(a * 1.5))) * step(r, 0.062) * step(0.022, r);
    float reel = step(r, 0.085) * (1.0 - spokes) * (1.0 - step(r, 0.012) * 0.0);
    sil = max(sil, reel);
    col += vec3(1.0, 0.8, 0.55) * smoothstep(0.004, 0.0, abs(r - 0.085)) * 0.05 * uLamp;
  }
  col = mix(col, vec3(0.006, 0.005, 0.006) + avg * 0.02, sil);
  float seats = step(p.y, 0.07 + 0.025 * abs(sin(p.x * 11.0)) + 0.01 * sin(p.x * 37.0));
  col *= 1.0 - 0.9 * seats;
  gl_FragColor = vec4(col * uFade, 1.0);
}`;

export class Projector extends Scene {
  constructor(ctx) {
    super(ctx, { ortho: true });
    const I = ctx.img, V = (v) => ({ value: v });
    this.U = { uAtlas: V(ctx.shared.photos), uHero: V(I.hero ? I.hero.tex : ctx.shared.big), uHeroD: V(I.hero_d ? I.hero_d.tex : ctx.shared.big),
      uT: V(0), uAspect: V(16 / 9), uZoom: V(1), uCell: V(0), uPrev: V(0), uRoll: V(0), uWeave: V(1), uBurn: V(0), uGold: V(0),
      uBeat: V(0), uReel: V(0), uLamp: V(1), uHeat: V(0), uFade: V(1), uPar: V(new THREE.Vector2()) };
    this.scene.add(plateMesh(new THREE.ShaderMaterial({ vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: FRAG, uniforms: this.U, depthTest: false, depthWrite: false })));
    // swap schedule: every half beat, slowing down before the jam
    const R = rng(83); this.sw = []; let t = T0, dt = PERIOD / 2, last = -1;
    while (t < JAM - 0.08) {
      let c; do c = Math.floor(R() * 11); while (c === last || c === 0); last = c;
      this.sw.push([t, c]); if (t > 84.0) dt *= 1.4; t += dt;
    }
    this.sw.push([JAM, HERO]);
  }
  update(t) {
    const U = this.U; U.uT.value = t; U.uAspect.value = this.ctx.aspect;
    let i = 0; while (i < this.sw.length - 1 && this.sw[i + 1][0] <= t) i++;
    const [ts, c] = this.sw[i]; U.uCell.value = c; U.uPrev.value = i > 0 ? this.sw[i - 1][1] : c;
    U.uRoll.value = t >= ts ? 1 - ease.out(clamp((t - ts) / (t > 84.0 ? 0.2 : 0.1))) : 0;
    U.uWeave.value = 1 + 2 * smooth(84.0, 84.9, t) - 2.5 * smooth(84.95, 85.3, t);
    const u = t - T0, sp = 6.5, v = Math.max(0, Math.min(t, JAM) - 84.3);
    U.uReel.value = sp * (Math.min(t, JAM) - T0) - (sp / (2 * (JAM - 84.3))) * v * v;
    U.uHeat.value = smooth(JAM, 85.2, t) * (1 - smooth(85.6, 86.0, t));
    U.uBurn.value = ease.in(range(t, 85.05, 86.35));
    U.uGold.value = ease.inOut(range(t, 86.0, 87.1));
    const bp = audio.beatPulse(t, 5), b2 = audio.beatPulse(t - 0.16, 7) * 0.6;
    U.uBeat.value = smooth(86.6, 87.2, t) * Math.max(bp, b2);
    U.uLamp.value = 1 + 0.25 * smooth(85.0, 86.3, t) * (1 - smooth(86.4, 87.2, t));
    U.uZoom.value = lerp(1.0, 2.3, ease.inOut(range(t, 84.5, 89.3)));
    U.uPar.value.set(0.012 * Math.sin(u * 0.9), 0.006 * Math.sin(u * 0.7 + 1));
    U.uFade.value = smooth(T0 - 0.05, T0 + 0.2, t);
  }
  post(t) {
    const b = smooth(85.0, 86.3, t) * (1 - smooth(86.5, 87.5, t)), g = smooth(86.2, 87.4, t);
    return { tint: [1.1, 0.96, 0.82], sat: 1.0, bloom: 0.8 + 0.25 * b + 0.2 * g, bloomThr: 0.65, vig: 1.0, grain: 0.1, scratch: 0.6 * (1 - g), weave: 0.4 * (1 - g),
      flicker: 0.06 * (1 - g), leak: 0.15 * g, dust: 0.4, dustCol: [1, 0.8, 0.55], ca: 0.4, exposure: 1 + 0.05 * b };
  }
}
