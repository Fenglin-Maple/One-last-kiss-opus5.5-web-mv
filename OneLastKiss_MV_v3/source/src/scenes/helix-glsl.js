// GLSL for the helix climax (166.17-217.6)
import { NOISE, PALETTE } from '../core/glsl.js';

// shared helix curve: two strands (s = 0 gold, 1 red), one turn per 8 units, the crown opens like a flower
export const HELIX = /* glsl */ `
uniform float uT, uSpin, uGrow, uOpen, uCrown, uRad, uGone;
vec3 helixP(float y, float s){
  float o = uOpen * smoothstep(uCrown - 16.0, uCrown, y);
  float R = uRad * (1.0 + 0.06 * sin(y * 0.7 - uT * 1.3)) * (1.0 + o * o * 5.0);
  float a = y * 0.785 + uSpin + s * 3.14159 + o * 2.0;
  return vec3(cos(a) * R, y + o * o * 5.0, sin(a) * R);
}`;

export const SKY_VERT = /* glsl */ `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;
export const SKY_FRAG = /* glsl */ `
uniform float uT, uAlt, uRain, uGlow, uBright; varying vec3 vW;
${NOISE}
${PALETTE}
vec3 sky(vec3 d){
  float hz = d.y;
  vec3 zen = mix(vec3(0.05, 0.012, 0.03), vec3(0.006, 0.008, 0.028), uAlt);
  vec3 hor = mix(vec3(0.26, 0.018, 0.022), vec3(0.1, 0.012, 0.035), uAlt);
  vec3 col = mix(hor, zen, smoothstep(-0.02, 0.55, hz));
  col += vec3(0.3, 0.02, 0.02) * fbm3(d * vec3(3.0, 14.0, 3.0) + uT * 0.02) * exp(-abs(hz) * 9.0) * 0.6;
  // stars
  vec3 g = d * 170.0, gi = floor(g); float h = hash13(gi);
  col += vec3(0.8, 0.85, 1.0) * step(0.982, h) * smoothstep(0.4, 0.0, length(fract(g) - 0.5)) * (0.55 + 0.45 * sin(uT * 3.0 + h * 50.0))
    * smoothstep(0.0, 0.3, hz) * (0.4 + uAlt);
  // milky band
  float band = exp(-pow(dot(d, normalize(vec3(0.6, 0.7, 0.35))) * 5.0, 2.0));
  col += vec3(0.25, 0.18, 0.4) * band * fbm(d.xy * 6.0 + d.z * 3.0) * smoothstep(0.05, 0.4, hz) * (0.3 + 0.7 * uAlt);
  // the pale planet from the red sea
  vec3 P = normalize(vec3(0.0, 0.3, -1.0)), e1 = normalize(cross(P, vec3(0.0, 1.0, 0.0))), e2 = cross(e1, P);
  vec2 q = vec2(dot(d, e1), dot(d, e2)) / 0.13; float r = length(q);
  if (dot(d, P) > 0.0) {
    if (r < 1.0) {
      float z = sqrt(1.0 - r * r), s = fbm(q / (z + 0.3) * 1.8 + vec2(uT * 0.02, 0.0));
      col = mix(vec3(0.2, 0.3, 0.5), vec3(0.95, 0.93, 0.9), smoothstep(0.35, 0.65, s)) * (0.35 + 0.65 * z) * (0.8 - 0.4 * uAlt);
    }
    col += vec3(0.5, 0.65, 1.0) * exp(-max(r - 1.0, 0.0) * 9.0) * smoothstep(0.92, 1.0, r) * 0.35;
  }
  // rainbow aurora curtains (finale)
  if (uRain > 0.0) {
    float cur = pow(fbm3(vec3(d.x * 3.0, d.y * 1.5 - uT * 0.15, d.z * 3.0)), 2.0) * 1.6 * smoothstep(0.05, 0.5, hz) * smoothstep(1.0, 0.6, hz);
    col += pencil(0.5 + 0.5 * sin(d.x * 2.0 + d.z * 1.3 + hz * 3.0 + uT * 0.25)) * cur * uRain * 1.4;
  }
  return col;
}
void main(){
  vec3 d = normalize(vW - cameraPosition), col;
  if (d.y >= 0.0) col = sky(d);
  else {
    // analytic LCL sea: ripples + rings from the helix root, reflects the sky
    float k = -cameraPosition.y / d.y; vec3 p = cameraPosition + d * k; float rr = length(p.xz);
    vec2 n = (vec2(vnoise(p.xz * 0.7 + uT * 0.3), vnoise(p.zx * 0.7 - uT * 0.25)) - 0.5) * 0.18;
    n += normalize(p.xz + 1e-4) * sin(rr * 2.4 - uT * 3.0) * exp(-rr * 0.07) * 0.1;
    vec3 rd = reflect(d, normalize(vec3(n.x, 1.0, n.y))); rd.y = abs(rd.y);
    float fr = 0.25 + 0.75 * pow(1.0 - abs(d.y), 4.0);
    col = vec3(0.07, 0.004, 0.006) + sky(rd) * vec3(1.0, 0.4, 0.35) * fr;
    col += mix(vec3(1.0, 0.6, 0.2), vec3(1.0, 0.1, 0.12), 0.5 + 0.5 * sin(rr * 0.3)) * exp(-rr * 0.22) * 0.35 * uGlow;
    col *= mix(1.0, 0.3, uAlt);
    col = mix(col, sky(normalize(vec3(d.x, 0.0, d.z))), 1.0 - exp(-k * 0.004));
  }
  gl_FragColor = vec4(col * uBright, 1.0);
}`;

// strand tube: aP = (y, angle around tube, strand)
export const STRAND_VERT = /* glsl */ `
${HELIX}
attribute vec3 aP; varying float vY, vS, vF; varying vec3 vN, vV;
void main(){
  float y = aP.x, s = aP.z;
  vec3 c = helixP(y, s), T = normalize(helixP(y + 0.05, s) - c), N = normalize(cross(T, vec3(0.0, 1.0, 0.0)) + 1e-4), B = cross(T, N);
  float th = 0.085 * (1.0 + 0.8 * exp(-pow((uGrow - y) * 1.5, 2.0)));
  vN = cos(aP.y) * N + sin(aP.y) * B;
  vec3 w = c + vN * th;
  vY = y; vS = s; vV = normalize(cameraPosition - w);
  vF = smoothstep(0.4, 2.2, distance(w, cameraPosition)) * smoothstep(uGrow, uGrow - 0.6, y) * smoothstep(uGone - 3.0, uGone + 3.0, y);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}`;
export const STRAND_FRAG = /* glsl */ `
uniform float uT, uGrow, uRain, uBeat; uniform float uPulse[8], uPulseY[8];
varying float vY, vS, vF; varying vec3 vN, vV;
${PALETTE}
void main(){
  if (vF < 0.002) discard;
  float f = abs(dot(normalize(vN), vV));
  vec3 base = mix(vec3(1.0, 0.62, 0.18), vec3(1.0, 0.08, 0.1), vS);
  base = mix(base, pencil(fract(vY * 0.035 + vS * 0.5 - uT * 0.12)) * 1.5, uRain);
  float pul = 0.0;
  for (int i = 0; i < 8; i++) { float a = uT - uPulse[i]; if (a > 0.0 && a < 3.0) pul += exp(-pow(vY - uPulseY[i] - a * 22.0, 2.0) * 0.08) * (1.0 - a / 3.0); }
  float dash = 0.5 + 0.5 * sin(vY * 6.0 - uT * 9.0 + vS * 3.0);
  float tip = exp(-(uGrow - vY) * 2.0) * 2.0;
  vec3 col = base * (0.22 + 0.6 * pow(f, 3.0) + 0.25 * dash * pow(f, 2.0) + 0.2 * uBeat) + vec3(1.0, 0.9, 0.8) * (pul * 1.8 + tip * 0.7) * pow(f, 2.0);
  gl_FragColor = vec4(col * vF, 1.0);
}`;

// rungs: instanced camera-facing bars between the strands, aR = (y, seed)
export const RUNG_VERT = /* glsl */ `
${HELIX}
attribute vec2 aR; varying vec2 vUv; varying float vA, vSeed;
void main(){
  float y = aR.x; vec3 a = helixP(y, 0.0), b = helixP(y, 1.0);
  vec3 p = mix(a, b, uv.x), side = normalize(cross(b - a, cameraPosition - p)) * 0.035;
  vUv = uv; vSeed = aR.y;
  vA = smoothstep(uGrow - 0.5, uGrow - 2.5, y) * smoothstep(uGone - 2.0, uGone + 2.0, y) * (1.0 - smoothstep(0.0, 0.6, uOpen * smoothstep(uCrown - 16.0, uCrown, y)));
  gl_Position = projectionMatrix * viewMatrix * vec4(p + side * (uv.y * 2.0 - 1.0), 1.0);
}`;
export const RUNG_FRAG = /* glsl */ `
uniform float uT, uBeat; varying vec2 vUv; varying float vA, vSeed;
void main(){
  float g = exp(-pow(vUv.y * 2.0 - 1.0, 2.0) * 4.0);
  vec3 c = mix(vec3(1.0, 0.62, 0.18), vec3(1.0, 0.08, 0.1), vUv.x) * (0.25 + 0.3 * uBeat);
  float sp = fract(uT * 0.6 + vSeed); c += vec3(1.0, 0.9, 0.8) * exp(-abs(vUv.x - sp) * 30.0) * 1.2;
  gl_FragColor = vec4(c * g * vA, 1.0);
}`;

// memory cards hung on the rungs, aC = (y, side -1/1, atlas cell, seed)
export const CARD_VERT = /* glsl */ `
${HELIX}
uniform float uPart, uBurst, uHeroY, uHeroOn;
attribute vec4 aC; varying vec2 vUv; varying float vCell, vA, vB, vSeed;
void main(){
  float y = aC.x, sd = aC.y, sd01 = sd * 0.5 + 0.5;
  vec3 a = helixP(y, 0.0), b = helixP(y, 1.0), X = normalize(b - a);
  vec3 c = mix(a, b, 0.5 + sd * (0.2 + 0.2 * uPart));
  float sc = smoothstep(uGrow - 1.0, uGrow - 3.0, y) * mix(1.0, smoothstep(1.8, 4.5, abs(y - uHeroY)), uHeroOn);
  vec3 Y = vec3(0.0, 1.0, 0.0), Z = cross(X, Y);
  // finale: the crown's cards burst outward, tumbling
  float bk = uBurst * smoothstep(uCrown - 26.0, uCrown - 8.0, y) * (0.6 + 0.8 * aC.w);
  vec3 rad = normalize(vec3(c.x, 0.0, c.z) + 1e-3);
  c += rad * bk * (4.0 + 8.0 * aC.w) + vec3(0.0, bk * (2.0 + 4.0 * fract(aC.w * 7.0)) - bk * bk * 0.8, 0.0);
  float r1 = bk * (2.0 + 5.0 * aC.w) + 0.12 * sin(uT * 0.8 + aC.w * 30.0), r2 = bk * 3.0 * fract(aC.w * 13.0);
  vec3 X2 = X * cos(r1) + Z * sin(r1), Z2 = cross(X2, Y); vec3 Y2 = Y * cos(r2) + Z2 * sin(r2);
  vec3 w = c + (position.x * X2 + position.y * Y2) * sc;
  vUv = uv; vCell = aC.z; vSeed = aC.w;
  vA = sc; vB = clamp((uGone + 6.0 - y) / 6.0, 0.0, 1.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}`;
export const CARD_FRAG = /* glsl */ `
uniform sampler2D uAtlas; uniform float uT, uBeat, uRain; varying vec2 vUv; varying float vCell, vA, vB, vSeed;
${NOISE}
${PALETTE}
void main(){
  if (vA < 0.01) discard;
  vec2 pu = (vUv - vec2(0.068, 0.18)) / vec2(0.864, 0.76);
  vec3 col = vec3(0.86, 0.83, 0.78);
  if (!gl_FrontFacing) { col = vec3(0.5, 0.44, 0.38) * (0.8 + 0.2 * fbm(vUv * 9.0));
    if (pu.x >= 0.0 && pu.y >= 0.0 && pu.x <= 1.0 && pu.y <= 1.0) col += 0.3 * texture2D(uAtlas, vec2(mod(vCell, 4.0) / 4.0, 1.0 - (floor(vCell / 4.0) + 1.0) / 3.0) + vec2(1.0 - pu.x, pu.y) * vec2(0.25, 1.0 / 3.0)).rgb; }
  else if (pu.x >= 0.0 && pu.y >= 0.0 && pu.x <= 1.0 && pu.y <= 1.0)
    col = texture2D(uAtlas, vec2(mod(vCell, 4.0) / 4.0, 1.0 - (floor(vCell / 4.0) + 1.0) / 3.0) + pu * vec2(0.25, 1.0 / 3.0)).rgb;
  col *= mix(vec3(1.0, 0.8, 0.7), pencil(fract(vSeed * 3.0 + uT * 0.1)) * 1.3, uRain * 0.5) * (0.75 + 0.2 * uBeat);
  // burn away from below
  float n = fbm(vUv * vec2(3.5, 4.0) + vSeed * 20.0) + (1.0 - vUv.y) * 0.25, th = vB * 1.35 - 0.1, on = step(0.001, vB);
  if (n < th) discard;
  col += vec3(3.0, 1.4, 0.4) * smoothstep(th + 0.05, th, n) * on;
  gl_FragColor = vec4(col, 1.0);
}`;

export const HERO_FRAG = /* glsl */ `
uniform sampler2D uTex; uniform float uA, uT, uDis; varying vec2 vUv;
${NOISE}
void main(){
  vec2 pu = (vUv - vec2(0.05, 0.12)) / vec2(0.9, 0.83);
  vec3 col = vec3(0.9, 0.86, 0.8);
  if (pu.x >= 0.0 && pu.y >= 0.0 && pu.x <= 1.0 && pu.y <= 1.0) col = texture2D(uTex, pu).rgb * 1.05;
  float n = fbm(vUv * 5.0 + 3.0), th = 1.2 - uDis * 1.4;
  if (n < th - 0.0 && uDis < 1.0) discard;
  col += vec3(3.0, 1.6, 0.5) * smoothstep(th + 0.06, th, n) * step(uDis, 0.999);
  col += vec3(1.0, 0.7, 0.4) * 0.15 * (1.0 - smoothstep(0.0, 0.04, min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y))));
  gl_FragColor = vec4(col * uA, uA);
}`;

export const FLAT_VERT = /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
// expanding shock ring on a horizontal plane
export const RING_FRAG = /* glsl */ `
uniform float uAge, uR; uniform vec3 uCol; varying vec2 vUv;
void main(){
  float r = length(vUv - 0.5) * 2.0, R = uR;
  float g = exp(-pow((r - R) * 40.0, 2.0)) + 0.35 * exp(-abs(r - R) * 12.0) * step(r, R);
  gl_FragColor = vec4(uCol * g * (1.0 - uAge) * (1.0 - uAge), 1.0);
}`;
// segmented rainbow halo above the crown
export const HALO_FRAG = /* glsl */ `
uniform float uT, uA; varying vec2 vUv;
${PALETTE}
void main(){
  vec2 q = vUv - 0.5; float r = length(q) * 2.0, a = atan(q.y, q.x) / 6.2832 + 0.5;
  float seg = step(0.12, fract(a * 24.0 + uT * 0.3));
  float band = exp(-pow((r - 0.86) * 30.0, 2.0)) * seg + exp(-pow((r - 0.72) * 90.0, 2.0)) * 0.6 + exp(-pow((r - 0.95) * 120.0, 2.0)) * 0.5;
  band += exp(-abs(r - 0.86) * 8.0) * 0.12;
  gl_FragColor = vec4(pencil(fract(a + uT * 0.05)) * 1.6 * band * uA, 1.0);
}`;
// motes swirling up the column, always around the camera height
export const MOTE_VERT = /* glsl */ `
uniform float uT, uCamY, uPx, uA, uRain, uRise; attribute vec4 aM; varying vec3 vCol; varying float vA;
${PALETTE}
void main(){
  float span = 60.0, yy = mod(aM.y * span + uRise * (0.6 + 1.4 * aM.w) - uCamY + 30.0, span);
  float y = uCamY - 30.0 + yy, ang = aM.x * 6.2832 + uT * 0.15 * (1.0 + aM.w) + y * 0.08, R = 1.2 + aM.z * aM.z * 16.0;
  vec3 p = vec3(cos(ang) * R, y, sin(ang) * R);
  vec4 mv = viewMatrix * vec4(p, 1.0);
  vA = uA * smoothstep(0.0, 6.0, yy) * smoothstep(span, span - 6.0, yy) * (0.4 + 0.6 * fract(aM.w * 17.0 + uT * 0.5)) * step(0.0, y);
  vCol = mix(mix(vec3(1.0, 0.6, 0.2), vec3(1.0, 0.12, 0.12), step(0.5, fract(aM.w * 5.0))), vec3(1.0, 0.9, 0.85), step(0.85, aM.w));
  vCol = mix(vCol, pencil(fract(aM.x + uT * 0.1)) * 1.4, uRain);
  gl_PointSize = uPx * (1.5 + 3.5 * aM.w) * 12.0 / max(-mv.z, 0.5);
  gl_Position = projectionMatrix * mv;
}`;
