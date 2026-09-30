// Shaders for the "galaxy of two lights" (normal + fire variants).
import { NOISE, PALETTE } from '../core/glsl.js';

// particle kinds: 0 spiral arm (some also form star-photos), 1 halo / sky, 2 core bulge, 3 kiss bridge, 4 dust / embers
export const STAR_VERT = /* glsl */ `
uniform float uT, uUnf, uSep, uPhase, uFire, uLove, uLoveA, uKiss, uPx, uPhotoPx, uDim;
uniform vec4 uRings[4];            // age, x, z, amp
uniform vec4 uPhoto;               // assemble, burst, atlas cell, -
uniform vec3 uPC, uPR, uPU;        // star-photo centre, half right, half up (world)
uniform sampler2D uAtlas;
attribute vec4 aA;                 // kind, r/u, angle/offset, height
attribute vec4 aB;                 // seeds
attribute vec2 aC;                 // star-photo grid uv (-1 = none)
varying vec3 vCol; varying float vA;
${NOISE}
${PALETTE}
const float K = 3.65, R0 = 0.55, PI = 3.14159265;
vec3 bez(vec3 a, vec3 b, vec3 c, float u){ return mix(mix(a, b, u), mix(b, c, u), u); }
void main(){
  float kind = aA.x, r = aA.y;
  vec3 W = vec3(cos(uPhase), 0.0, sin(uPhase)) * uSep;
  vec3 WARM = vec3(1.0, 0.6, 0.3), COLD = vec3(0.42, 0.64, 1.0);
  vec3 pos, col; float br = 1.0, sz = 0.55 + 1.9 * pow(aB.w, 3.0);
  bool disk = true; float rn = 0.0;
  if (kind < 0.5) {                                   // spiral arms rooted at the two cores
    float arm = step(0.5, aB.x); rn = (r - R0) / 3.45;
    float th = uPhase + arm * PI + K * log(r / R0) - 0.015 * uT * r + (1.0 - uUnf) * 5.0 * (1.0 - rn);
    float R = mix(0.12 + r * 0.07, r - (R0 - uSep) * exp(-(r - R0) * 2.0), uUnf);
    vec2 dir = vec2(cos(th), sin(th)), perp = vec2(-dir.y, dir.x);
    vec2 p2 = dir * R + perp * aA.z * (0.3 + 0.7 * uUnf) * (1.0 + 2.2 * rn);
    pos = vec3(p2.x, aA.w * mix(0.3, 1.0, uUnf), p2.y);
    col = arm < 0.5 ? pencil(0.02 + 0.5 * rn) : pencil(0.98 - 0.5 * rn);
    br = (0.25 + 0.9 * exp(-(r - R0) * 0.9)) * (0.5 + 0.8 * aB.z) * (0.5 + 0.8 * exp(-abs(aA.z) * 9.0));
    if (aB.y > 0.94) { col = mix(col, vec3(1.0), 0.6); br *= 2.0; }
  } else if (kind < 1.5) {
    if (aB.x < 0.55) {                                // faint halo disc
      float th = aA.z + uPhase * 0.6; float R = mix(r * 0.15, r, uUnf); rn = r / 5.5;
      pos = vec3(cos(th) * R, aA.w, sin(th) * R);
      col = mix(vec3(0.5, 0.58, 0.95), vec3(1.0, 0.8, 0.7), aB.y); br = 0.22;
    } else {                                          // sky sphere
      disk = false; float ph = aA.w;
      pos = vec3(cos(aA.z) * cos(ph), sin(ph), sin(aA.z) * cos(ph)) * r;
      col = mix(vec3(0.7, 0.8, 1.0), vec3(1.0, 0.9, 0.8), aB.y);
      br = (0.35 + 0.5 * aB.z) * (0.7 + 0.3 * sin(uT * (1.0 + 3.0 * aB.y) + aB.z * 60.0)); sz *= 1.6;
    }
  } else if (kind < 2.5) {                            // bulges swirling around each light
    float c = step(0.5, aB.x); vec3 core = c < 0.5 ? W : -W;
    float ang = aA.z + uT * (0.55 / (r + 0.12)) * (c < 0.5 ? 1.0 : -1.0);
    pos = core + vec3(cos(ang) * r, aA.w * (1.0 - r * 1.5), sin(ang) * r) * mix(0.4, 1.0, uUnf);
    col = mix(c < 0.5 ? WARM : COLD, vec3(1.0), exp(-r * 10.0) * 0.7);
    br = 0.35 + 1.3 * exp(-r * 7.0); rn = 0.1;
  } else if (kind < 3.5) {                            // twin strands of the kiss bridge
    disk = false; float s = step(0.5, aB.x), u = r;
    float vis = s < 0.5 ? step(u, uLove) : step(1.0 - uLove, u);
    vec3 A = vec3(0.0, 1.35, 0.0), P = bez(W, A, -W, u), T = normalize(mix(A - W, -W - A, u) + 1e-4);
    vec3 side = normalize(cross(T, vec3(0.0, 1.0, 0.0)) + vec3(1e-4)), N = cross(side, T);
    float rr = 0.025 + 0.06 * sin(PI * u), an = u * 10.0 + uT * 1.2 + s * PI;
    pos = P + (cos(an) * side + sin(an) * N) * rr + (aB.yzw - 0.5) * 0.035;
    float lead = s < 0.5 ? uLove - u : u - (1.0 - uLove);
    col = mix(s < 0.5 ? WARM : COLD, vec3(1.0), 0.6 * exp(-abs(u - 0.5) * 7.0) * step(0.5, uLove));
    br = (0.9 + 5.0 * exp(-lead * 22.0)) * vis * uLoveA; sz *= 1.3;
  } else {                                            // dust (normal) / rising embers (fire)
    disk = false;
    if (uFire > 0.5) {
      float life = fract(aB.y + uT * 0.07 * (0.5 + aB.z));
      float th = aA.z + life * 2.2 + uT * 0.12, R = r * 0.7 + life * 1.4;
      pos = vec3(cos(th) * R, -0.6 + life * 4.2, sin(th) * R) + curl3(vec3(aA.z, life * 3.0, uT * 0.2)) * 0.35;
      col = mix(vec3(1.0, 0.78, 0.42), vec3(1.0, 0.22, 0.04), life);
      br = 1.1 * (1.0 - life) * smoothstep(0.0, 0.08, life); sz *= 1.2;
    } else {
      float th = aA.z + uT * 0.02;
      pos = vec3(cos(th) * r, aA.w, sin(th) * r);
      col = vec3(0.6, 0.7, 1.0); br = 0.14 * (0.6 + 0.4 * sin(uT * 2.0 + aB.z * 50.0));
    }
  }
  if (uFire > 0.5 && disk) {                          // the galaxy catches fire
    pos += curl3(pos * 1.3 + vec3(0.0, uT * 0.45, 0.0)) * 0.09 * (0.3 + rn);
    bool cold = kind > 1.5 && kind < 2.5 && aB.x >= 0.5;
    float heat = clamp(1.15 - rn * 1.1 + (vnoise3(pos * 2.0 + uT * 0.7) - 0.5) * 0.8, 0.0, 1.0);
    if (!cold) col = mix(vec3(1.0, 0.16, 0.03), vec3(1.0, 0.74, 0.38), heat);
    br *= 0.25 + 0.75 * vnoise3(pos * 4.0 - vec3(0.0, uT * 3.0, 0.0));
  }
  if (disk) {                                         // shockwaves from the sung "oh"
    for (int i = 0; i < 4; i++) {
      vec4 Rg = uRings[i];
      if (Rg.x >= 0.0) {
        float d = length(pos.xz - Rg.yz), rad = Rg.x * 2.4;
        float b = exp(-pow((d - rad) / (0.12 + Rg.x * 0.12), 2.0)) * exp(-Rg.x * 1.1) * Rg.w;
        br += b * 2.5; pos.y += b * 0.12; col = mix(col, vec3(1.0), b * 0.3);
      }
    }
  }
  br *= 1.0 + uKiss * (kind > 2.5 && kind < 3.5 ? 1.2 : 0.35);
  float ph = 0.0;
  if (aC.x >= 0.0) {                                  // star-photo: arm stars gather into a remembered picture
    ph = clamp((uPhoto.x - aB.y * 0.35) / 0.65, 0.0, 1.0); ph = ph * ph * (3.0 - 2.0 * ph);
    vec3 off = (aC.x * 2.0 - 1.0) * uPR + (aC.y * 2.0 - 1.0) * uPU, tgt = uPC + off;
    tgt += normalize(off + (aB.xyz - 0.5) * length(uPR)) * uPhoto.y * length(uPR) * 1.8;
    pos = mix(pos, tgt, ph);
    vec2 cu = vec2(mod(uPhoto.z, 4.0) / 4.0, 1.0 - (floor(uPhoto.z / 4.0) + 1.0) / 3.0) + aC * vec2(0.25, 1.0 / 3.0);
    vec3 pc = texture2D(uAtlas, cu).rgb;
    col = mix(col, pc + 0.015, ph);
    br = mix(br, 0.5 * (0.85 + 0.3 * sin(uT * 5.0 + aB.z * 40.0)) * (1.0 + 2.0 * step(0.985, aB.y)), ph);
  } else if (kind < 2.5) br *= 1.0 - 0.8 * uPhoto.x;
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  float px = sz * 0.02 * uPx / max(-mv.z, 0.05);
  float a = br * clamp(px * px / 2.25, 0.04, 1.0);
  px = mix(px, uPhotoPx * (0.85 + 0.3 * aB.w), ph);
  gl_PointSize = clamp(px, 1.0, 48.0);
  vCol = col; vA = mv.z < -0.05 ? a * uDim : 0.0;
}`;

export const NEB_FRAG = /* glsl */ `
uniform float uT, uFire, uDim, uKiss; uniform mat3 uRot; uniform vec2 uTan; varying vec2 vUv;
${NOISE}
void main(){
  vec2 p = vUv * 2.0 - 1.0;
  vec3 d = normalize(uRot * vec3(p.x * uTan.x, p.y * uTan.y, -1.0));
  float sp = mix(0.01, 0.05, uFire);
  float n = fbm3(d * 2.2 + vec3(0.0, uT * sp, uT * sp * 0.5)), n2 = fbm3(d * 5.0 - uT * sp * 1.5 + n * 1.5);
  float band = exp(-d.y * d.y * 9.0);
  vec3 neb = mix(vec3(0.05, 0.02, 0.12), vec3(0.02, 0.09, 0.14), smoothstep(0.3, 0.7, n2));
  neb += vec3(0.12, 0.04, 0.1) * pow(smoothstep(0.45, 0.85, n), 2.0);
  vec3 c = vec3(0.004, 0.006, 0.018) + neb * (0.3 + 0.9 * band) * smoothstep(0.25, 0.75, n);
  vec3 f = vec3(0.012, 0.003, 0.002) + vec3(0.2, 0.035, 0.01) * smoothstep(0.3, 0.8, n) * (0.4 + band)
         + vec3(0.3, 0.1, 0.02) * pow(smoothstep(0.5, 0.9, n2), 2.0) * band;
  c = mix(c, f, uFire) * (1.0 + uKiss * 0.6);
  vec3 q = d * 260.0, id = floor(q); float h = hash13(id);
  float st = step(0.9965, h) * smoothstep(0.35, 0.0, length(fract(q) - 0.5)) * (0.6 + 0.4 * sin(uT * 3.0 + h * 100.0));
  c += st * mix(vec3(0.8, 0.85, 1.0), vec3(1.0, 0.6, 0.35), uFire) * 0.9;
  gl_FragColor = vec4(c * uDim, 1.0);
}`;

// memory cards: polaroid billboards orbiting in the disc; in the fire variant they burn away
export const CARD_VERT = /* glsl */ `
uniform float uT, uUnf, uPhase, uBurn; uniform vec3 uCR, uCU;
attribute vec4 aI; attribute vec4 aS;   // r, angle, height, cell | seeds (w = burn order)
varying vec2 vUv; varying float vCell, vB; varying vec4 vS;
void main(){
  float R = mix(0.3, aI.x, uUnf), ang = aI.y + uPhase * 0.5 + uT * 0.04 / (aI.x * 0.3 + 0.2);
  vec3 c = vec3(cos(ang) * R, aI.z + 0.06 * sin(uT * 0.7 + aS.x * 6.0), sin(ang) * R);
  float s = 0.34 * (0.8 + 0.4 * aS.y), rot = (aS.z - 0.5) * 0.6 + 0.15 * sin(uT * 0.5 + aS.w * 6.0);
  vec2 q = vec2(position.x * cos(rot) - position.y * sin(rot), position.x * sin(rot) + position.y * cos(rot));
  vUv = uv; vCell = aI.w; vS = aS; vB = clamp((uBurn - aS.w) * 2.5, 0.0, 1.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(c + (q.x * uCR + q.y * uCU) * s, 1.0);
}`;
export const CARD_FRAG = /* glsl */ `
uniform sampler2D uAtlas; uniform float uCardA, uFire; varying vec2 vUv; varying float vCell, vB; varying vec4 vS;
${NOISE}
void main(){
  vec2 pu = (vUv - vec2(0.068, 0.18)) / vec2(0.864, 0.76);
  vec3 col = vec3(0.86, 0.83, 0.78);
  if (pu.x >= 0.0 && pu.y >= 0.0 && pu.x <= 1.0 && pu.y <= 1.0)
    col = texture2D(uAtlas, vec2(mod(vCell, 4.0) / 4.0, 1.0 - (floor(vCell / 4.0) + 1.0) / 3.0) + pu * vec2(0.25, 1.0 / 3.0)).rgb;
  col *= mix(vec3(0.62, 0.66, 0.8), vec3(1.0, 0.72, 0.5), uFire);
  float n = fbm(vUv * vec2(3.5, 4.0) + vS.xy * 20.0) + (1.0 - vUv.y) * 0.25, th = vB * 1.35 - 0.1, on = step(0.001, vB);
  if (n < th) discard;
  col = mix(col, vec3(0.04, 0.02, 0.01), smoothstep(th + 0.12, th + 0.02, n) * on);
  col += vec3(3.0, 1.2, 0.3) * smoothstep(th + 0.035, th, n) * on;
  gl_FragColor = vec4(col, uCardA);
}`;
