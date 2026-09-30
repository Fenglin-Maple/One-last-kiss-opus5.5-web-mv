// Runout (217.6-226.18): after the climax the music empties out. A warm lightbox; the film of this whole MV
// - every memory frame - slides slowly past under a drifting loupe, the loose red thread lying across the glass.
// The strip's clear leader and tail pass and only white light remains: the paper for the pencil epilogue.
import * as THREE from 'three';
import { Scene, bgQuad } from './base.js';
import { NOISE } from '../core/glsl.js';
import { range, smooth, ease, lerp } from '../core/util.js';
import { audio } from '../core/audio.js';

const T0 = 217.6, T1 = 226.18;
const FRAG = /* glsl */ `
uniform float uT, uAspect, uSlide, uZoom, uRot, uLoupe, uBeat; uniform vec2 uLp; uniform sampler2D uAtlas; varying vec2 vUv;
${NOISE}
const float P = 0.96, NF = 9.0;          // frame pitch, photo frames before the clear leader
vec3 cell(float c, vec2 u){ return texture2D(uAtlas, vec2(mod(c, 4.0) / 4.0, 1.0 - (floor(c / 4.0) + 1.0) / 3.0) + clamp(u, 0.002, 0.998) * vec2(0.25, 1.0 / 3.0)).rgb; }
// transmission of the strip at strip coords (x along, y across); a = coverage
vec3 strip(vec2 p, out float a){
  a = 0.0; float x = p.x + uSlide;
  if (abs(p.y) > 0.37 || x < -0.2 || x > (NF + 1.3) * P) return vec3(1.0);
  a = 1.0;
  float fi = floor(x / P), fx = mod(x, P);
  vec3 base = vec3(0.035, 0.025, 0.02);                           // black rebate
  float leader = step(NF, fi);
  base = mix(base, vec3(0.9, 0.72, 0.45), leader);                // clear amber leader
  // sprocket holes both edges
  float hx = mod(x, P / 4.0) - P / 8.0, hy = abs(p.y) - 0.325;
  vec2 hq = abs(vec2(hx, hy)) - vec2(0.05, 0.022);
  if (length(max(hq, 0.0)) - 0.008 < 0.0) { a = 0.0; return vec3(1.0); }
  // photo frame
  vec2 lu = vec2((fx - 0.07) / 0.82, (p.y + 0.27) / 0.54);
  if (leader < 0.5 && lu.x > 0.0 && lu.x < 1.0 && lu.y > 0.0 && lu.y < 1.0) {
    float c = mod(fi * 5.0 + 2.0, 11.0);
    vec3 im = cell(c, vec2(0.5 + (lu.x - 0.5) * 0.9, lu.y));
    im = mix(im, im * vec3(1.08, 0.95, 0.8), 0.4);
    float rr = length((lu - 0.5) * vec2(1.4, 1.0)); im *= 1.0 - 0.35 * rr * rr;
    return im * 1.1;
  }
  // edge dots and tiny frame numbers
  base += vec3(0.9, 0.55, 0.2) * step(length(vec2(fx - 0.48, abs(p.y) - 0.295)), 0.007) * (1.0 - leader) * 0.6;
  return base;
}
void main(){
  vec2 q = (vUv - 0.5) * vec2(uAspect, 1.0);
  float cr = cos(uRot), sr = sin(uRot); vec2 p = mat2(cr, sr, -sr, cr) * q / uZoom;
  // lightbox: warm diffuse white with the milky diffuser grain
  vec3 box = vec3(1.0, 0.965, 0.9) * (0.9 + 0.1 * exp(-dot(q, q) * 1.5)) * (0.97 + 0.03 * vnoise(q * 300.0));
  // loupe magnifies around uLp
  vec2 lq = p - uLp; float lr = length(lq), R = 0.3;
  float inL = uLoupe * smoothstep(R, R - 0.004, lr);
  vec2 sp = mix(p, uLp + lq * (0.58 + 0.12 * lr / R), inL);
  float a; vec3 fs = strip(sp, a);
  // soft contact shadow of the strip lifted a hair off the glass
  float sh0; strip(sp + vec2(0.012, -0.016), sh0);
  vec3 col = box * (1.0 - 0.12 * sh0 * (1.0 - a));
  col = mix(col, fs * box, a);
  // red thread lying loose across the glass (with its shadow)
  float ty = 0.12 * sin(p.x * 2.3 + 0.8) + 0.05 * sin(p.x * 5.1 - 0.4) - 0.1 + 0.004 * sin(uT * 0.7 + p.x * 3.0);
  float td = abs(p.y - ty);
  col *= 1.0 - 0.18 * exp(-pow((p.y - ty + 0.014) / 0.01, 2.0));
  col = mix(col, vec3(0.62, 0.03, 0.05) * (0.8 + 0.4 * smoothstep(0.004, 0.0, abs(p.y - ty - 0.0015))), smoothstep(0.0045, 0.0015, td));
  // loupe body: glass rim, caustic, cool/warm fringes, slight darkening outside
  float rim = smoothstep(0.012, 0.0, abs(lr - R)) * uLoupe;
  col *= 1.0 - 0.25 * uLoupe * smoothstep(R + 0.03, R, lr) * smoothstep(R - 0.02, R, lr);
  col += vec3(1.0, 0.95, 0.85) * rim * 0.5 + vec3(0.3, 0.5, 1.0) * smoothstep(0.02, 0.0, abs(lr - R + 0.02)) * 0.12 * uLoupe;
  col += vec3(1.0) * exp(-length(lq - vec2(-0.12, 0.12)) * 30.0) * 0.25 * uLoupe * inL;
  // floating dust in the backlight
  vec2 dg = q * 22.0 + vec2(uT * 0.08, uT * 0.05), di = floor(dg);
  float h = hash12(di); col *= 1.0 - 0.35 * step(0.93, h) * smoothstep(0.08, 0.0, length(fract(dg) - hash22(di)));
  gl_FragColor = vec4(col * (1.0 + 0.03 * uBeat), 1.0);
}`;

export class Runout extends Scene {
  constructor(ctx) {
    super(ctx, { ortho: true });
    const V = (v) => ({ value: v });
    this.U = { uT: V(0), uAspect: V(16 / 9), uSlide: V(0), uZoom: V(1), uRot: V(0), uLoupe: V(1), uBeat: V(0), uLp: V(new THREE.Vector2()),
      uAtlas: V(ctx.shared.photos) };
    this.scene.add(bgQuad(FRAG, this.U));
  }
  update(t) {
    const U = this.U, u = range(t, T0, T1);
    U.uT.value = t; U.uAspect.value = this.ctx.aspect; U.uBeat.value = audio.beatPulse(t, 5);
    // strip glides left, slowing, then its tail runs out of frame
    U.uSlide.value = 0.6 + 5.6 * ease.out(range(t, T0, 223.2)) + 7.5 * ease.in(range(t, 222.4, 225.2));
    U.uZoom.value = lerp(1.25, 1.02, ease.out(u)) + 0.5 * ease.in(range(t, 224.6, T1));
    U.uRot.value = -0.16 + 0.05 * u;
    U.uLp.value.set(lerp(0.45, -0.05, ease.inOut(range(t, T0, 223))), lerp(-0.02, 0.03, u));
    U.uLoupe.value = 1 - smooth(222.8, 224.4, t);
  }
  post(t) {
    const w = smooth(224.6, T1, t);
    return { bloom: 0.35, bloomThr: 0.9, sat: 0.95, contrast: 1.02, vig: 0.35 * (1 - w), grain: 0.05, tone: 0.5 + 0.5 * w,
      dust: 0.25, dustCol: [0.6, 0.45, 0.3], fadeW: 0.15 * w };
  }
}
