// 「写真は苦手なんだ」 - seen through an SLR viewfinder: handheld sway, the lens hunts for focus but never locks
// on her; she laughs behind her raised hand. Split-prism + microprism collar, AF brackets, green LCD readout,
// window sun flare and floating dust, then the aperture blades stop down into the projector's iris.
import * as THREE from 'three';
import { Scene } from './base.js';
import { plateMat, plateMesh } from '../core/images.js';
import { canvas, tex, FONTS } from '../core/textures.js';
import { clamp, smooth, range, ease } from '../core/util.js';

const T0 = 80.46, T1 = 82.78, SUBJ = 0.32;
const HUD_ROWS = ['1/250   F2.0   ISO 400   [ AF ]   +0.3', '1/125   F2.8   ISO 400   [ AF ]   +0.0',
  '1/125   F2.8   ISO 400   [ -- ]   NO FOCUS', '1/60    F4.0   ISO 800   [ -- ]   NO FOCUS'];

function hudTex() {
  const W = 1024, H = 64, c = canvas(W, H * HUD_ROWS.length), g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, c.width, c.height);
  g.font = `34px ${FONTS.mono}`; g.textBaseline = 'middle'; g.textAlign = 'center'; g.fillStyle = '#fff';
  HUD_ROWS.forEach((s, i) => g.fillText(s, W / 2, H * i + H / 2));
  return tex(c, { linear: true });
}

const HEAD = /* glsl */ `
uniform float uMis, uAF, uBlade, uBladeRot, uFlare, uRow; uniform sampler2D uHud; uniform vec2 uSway;
float sdBox(vec2 p, vec2 b){ vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
float hexA(vec2 p, float r, float rot){ float a = atan(p.y, p.x) + rot, s = 1.0471976; a = mod(a, s) - s * 0.5; return length(p) * cos(a) - r; }
`;
const HOOK = /* glsl */ `
  vec2 p = suv - 0.5, q = vec2(p.x * uAspect, p.y);
  float rq = length(q);
  // split-prism: the two halves disagree until focus is right
  if (rq < 0.085) {
    float sh = uMis * 0.03 * (q.y > 0.0 ? 1.0 : -1.0);
    col = texture2D(uImg, uv + vec2(sh, 0.0)).rgb * uGain * uTint;
    col *= 1.0 - 0.5 * exp(-abs(q.y) * 900.0) * step(0.02, abs(uMis));
  } else if (rq < 0.13) {                            // microprism collar shimmers when out of focus
    vec2 cell = floor(q * 260.0), o = (hash22(cell) - 0.5) * uMis * 0.03;
    col = mix(col, texture2D(uImg, uv + o, 2.0 * abs(uMis)).rgb * uGain * uTint, 0.85) * 0.93;
  }
  col *= 1.0 - 0.35 * smoothstep(0.004, 0.0, abs(rq - 0.085)) - 0.25 * smoothstep(0.003, 0.0, abs(rq - 0.13));
  // ground-glass texture
  col *= 0.97 + 0.06 * hash12(floor(suv * vec2(900.0, 506.0)));
  // window sun: glare, anamorphic streak and ghosts that swing with the handheld camera
  vec2 sun = vec2(0.67, 0.93) - uSway * 2.0, sp = vec2((suv.x - sun.x) * uAspect, suv.y - sun.y);
  float gl = exp(-length(sp) * 9.0) * 0.55 + exp(-abs(sp.y) * 160.0) * exp(-abs(sp.x) * 2.2) * 0.25;
  for (int i = 1; i < 4; i++) { vec2 gp = mix(sun, vec2(0.5), 1.0 + float(i) * 0.45); gp = vec2((suv.x - gp.x) * uAspect, suv.y - gp.y);
    gl += smoothstep(0.05 + 0.03 * float(i), 0.0, length(gp)) * 0.06; }
  col += vec3(1.0, 0.78, 0.5) * gl * uFlare;
  // dust in the window light
  vec2 dq = suv * vec2(uAspect, 1.0) * 14.0 + vec2(uT * 0.08, -uT * 0.05); vec2 di = floor(dq);
  float dh = hash12(di); vec2 dc = hash22(di + 3.1);
  col += vec3(1.0, 0.85, 0.6) * step(0.86, dh) * smoothstep(0.08, 0.0, length(fract(dq) - dc)) * 0.5 * smoothstep(0.2, 0.9, suv.x) * uFlare;
  // AF brackets (centre + two sides), red blink while hunting, green on the brief lock
  vec3 afc = mix(vec3(1.0, 0.25, 0.15), vec3(0.4, 1.0, 0.5), uAF);
  for (int i = -1; i <= 1; i++) {
    vec2 bp = q - vec2(float(i) * 0.28, 0.0); float b = abs(sdBox(bp, vec2(0.035, 0.025)));
    float cornerMask = step(0.018, abs(bp.x)) * step(0.012, abs(bp.y)) + step(0.03, abs(bp.x)) + step(0.02, abs(bp.y));
    float on = (i == 0 ? 1.0 : 0.45) * (0.4 + 0.6 * step(0.5, fract(uT * 6.0)) * (1.0 - uAF) + uAF);
    col = mix(col, afc, smoothstep(0.0022, 0.0, b) * clamp(cornerMask, 0.0, 1.0) * on * 0.9);
  }
  // viewfinder frame + LCD strip
  float fr = sdBox(p * vec2(uAspect, 1.0), vec2(0.5 * uAspect - 0.05, 0.43)) - 0.02;
  col *= smoothstep(0.01, -0.02, fr) * (1.0 - 0.35 * smoothstep(-0.18, 0.0, fr));
  if (suv.y < 0.06) {
    vec2 hu = vec2((suv.x - 0.14) / 0.72, (uRow + 1.0 - clamp(suv.y / 0.06, 0.0, 1.0)) / 4.0);
    float h = (hu.x > 0.0 && hu.x < 1.0) ? texture2D(uHud, vec2(hu.x, 1.0 - hu.y)).r : 0.0;
    col += vec3(0.45, 1.0, 0.55) * h * 0.9;
  }
  // aperture blades stop down
  float ha = hexA(q, uBlade, uBladeRot);
  vec3 blade = vec3(0.02, 0.022, 0.025) + vec3(0.05) * smoothstep(0.06, 0.0, abs(ha - 0.03)) * (0.5 + 0.5 * sin(atan(q.y, q.x) * 6.0 + uBladeRot * 3.0));
  col = mix(col, blade, smoothstep(-0.004, 0.004, ha));
  return col;
`;

export class Viewfinder extends Scene {
  constructor(ctx) {
    super(ctx, { ortho: true });
    const I = ctx.img, V = (v) => ({ value: v });
    this.M = plateMat(I.viewfinder, I.viewfinder_d, { head: HEAD, hook: HOOK,
      uniforms: { uMis: V(0), uAF: V(0), uBlade: V(2), uBladeRot: V(0), uFlare: V(1), uRow: V(0), uHud: V(hudTex()), uSway: V(new THREE.Vector2()) } });
    this.scene.add(plateMesh(this.M));
  }
  update(t) {
    const U = this.M.uniforms, u = t - T0;
    U.uT.value = t; U.uAspect.value = this.ctx.aspect;
    // handheld: breath + micro tremor, slow push-in
    const sx = 0.008 * Math.sin(t * 1.7) + 0.004 * Math.sin(t * 4.3 + 1), sy = 0.006 * Math.sin(t * 1.3 + 2) + 0.003 * Math.sin(t * 5.1);
    U.uSway.value.set(sx, sy);
    U.uCam.value.set(sx, sy, 1.05 + 0.08 * ease.inOut(range(t, T0, T1)));
    U.uPar.value.set(-sx * 1.6, -sy * 1.2); U.uDolly.value = 0.04 + 0.05 * range(t, T0, T1);
    // focus hunts: far wall -> overshoot past her hand -> nearly locks (81.55) -> slips away again
    const lock = smooth(81.35, 81.55, t) * (1 - smooth(81.85, 82.05, t));
    const hunt = 0.62 + 0.3 * Math.sin(u * 4.2 - 1.2) * Math.exp(-u * 0.3);
    const f = hunt + (SUBJ - hunt) * lock * 0.99;
    U.uFocus.value = f; U.uBlur.value = 5.0;
    U.uMis.value = (f - SUBJ) * 1.6;
    U.uAF.value = lock;
    U.uRow.value = t < 81.2 ? (Math.floor(t * 5) % 2) : t < 81.95 ? 1 : (Math.floor(t * 4) % 2 ? 2 : 3);
    U.uFlare.value = 0.8 + 0.2 * Math.sin(t * 2.1);
    U.uGain.value = 0.9 * smooth(T0 - 0.05, T0 + 0.25, t) * (1 - 0.35 * smooth(82.2, 82.78, t));
    U.uBlade.value = 1.4 * (1 - ease.in(range(t, 82.1, 82.8)));
    U.uBladeRot.value = 0.4 * range(t, 82.05, 82.78);
  }
  post(t) {
    return { tint: [1.08, 1.0, 0.9], sat: 0.95, contrast: 1.08, bloom: 0.55, bloomThr: 0.75, vig: 0.4, grain: 0.06, ca: 0.6, dust: 0.3, dustCol: [1, 0.85, 0.65] };
  }
}
