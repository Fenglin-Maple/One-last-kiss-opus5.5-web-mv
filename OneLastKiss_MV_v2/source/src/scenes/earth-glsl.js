// Earth (v2) shaders: procedural globe that can be the red Instrumentality planet (LCL sea, scorched land)
// or the restored blue earth; a restoration front sweeps from red to blue. Crosses of light, rising souls, halo ring.
import { NOISE } from '../core/glsl.js';

export const ROT = /* glsl */ `vec3 rotY(vec3 p, float a){ float c = cos(a), s = sin(a); return vec3(c*p.x + s*p.z, p.y, -s*p.x + c*p.z); }`;

export const WORLD_V = /* glsl */ `varying vec3 vN, vW;
void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w; }`;

export const GLOBE_F = /* glsl */ `
uniform float uT, uRot, uRed, uFront, uEdge, uCloud, uLights, uK;
uniform vec3 uSun, uAxis;
varying vec3 vN, vW;
${NOISE} ${ROT}
void main(){
  vec3 n = normalize(vN), p = rotY(n, -uRot);
  float h = fbm3(p * 1.7 + 3.0) + 0.45 * fbm3(p * 4.3 + 11.0) - 0.66;
  float isLand = smoothstep(0.0, 0.025, h);
  float ice = smoothstep(0.8, 0.88, abs(p.y));
  vec3 V = normalize(cameraPosition - vW);
  float ns = dot(n, uSun), dif = max(ns, 0.0), term = smoothstep(-0.12, 0.2, ns);
  vec3 Hh = normalize(uSun + V);
  // --- blue earth
  vec3 ocean = mix(vec3(0.008, 0.035, 0.11), vec3(0.03, 0.17, 0.4), smoothstep(-0.35, 0.0, h));
  vec3 ground = mix(vec3(0.1, 0.2, 0.07), vec3(0.45, 0.38, 0.24), smoothstep(0.05, 0.32, h));
  vec3 blue = mix(mix(ocean, ground, isLand), vec3(0.72, 0.78, 0.85), ice);
  float cl = smoothstep(0.5, 0.74, fbm3(p * 3.2 + vec3(uT * 0.012, 0.0, 0.0))) * uCloud;
  blue = mix(blue, vec3(0.85), cl * 0.7);
  float spec = pow(max(dot(n, Hh), 0.0), 70.0) * (1.0 - isLand) * (1.0 - cl);
  vec3 cb = blue * (0.02 + 0.9 * dif) + vec3(1.0, 0.9, 0.72) * spec * 0.9;
  float city = pow(smoothstep(0.55, 0.95, vnoise3(p * 190.0)), 2.0) * smoothstep(0.45, 0.75, vnoise3(p * 9.0)) * (0.5 + vnoise3(p * 40.0));
  cb += vec3(1.0, 0.68, 0.32) * city * isLand * (1.0 - ice) * (1.0 - term) * uLights * 0.7;
  // --- red earth (LCL sea glowing from within, scorched land)
  float rs = fbm3(p * 6.0 + vec3(0.0, uT * 0.06, 0.0));
  vec3 rOcean = mix(vec3(0.16, 0.0, 0.015), vec3(0.85, 0.1, 0.04), rs * rs * 1.4);
  vec3 rLand = mix(vec3(0.015, 0.005, 0.005), vec3(0.12, 0.03, 0.02), smoothstep(0.0, 0.3, h));
  vec3 red = mix(mix(rOcean, rLand, isLand), vec3(0.3, 0.06, 0.05), ice * 0.7);
  vec3 cr = red * (0.12 + 0.8 * dif) + vec3(1.0, 0.45, 0.25) * pow(max(dot(n, Hh), 0.0), 60.0) * (1.0 - isLand) * 0.2
          + rOcean * (1.0 - isLand) * 0.22 * (0.7 + 0.6 * uK);
  // --- restoration front
  float ang = acos(clamp(dot(n, uAxis), -1.0, 1.0));
  float wob = (fbm3(p * 5.0 + 7.0) - 0.5) * 0.18;
  float r = uRed * (1.0 - smoothstep(uFront + 0.03, uFront - 0.03, ang + wob));
  vec3 c = mix(cb, cr, r);
  float edge = exp(-pow((ang + wob - uFront) * 16.0, 2.0)) * uEdge;
  c += vec3(0.75, 0.9, 1.0) * edge * (0.5 + 0.9 * fbm3(p * 12.0 + uT * 0.7)) * (1.0 + uK);
  // --- rim atmosphere
  float fr = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  c += mix(vec3(0.3, 0.55, 1.0) * (0.15 + term), vec3(1.0, 0.18, 0.08) * (0.4 + 0.6 * term), r) * fr * 0.9;
  gl_FragColor = vec4(c, 1.0);
}`;

export const ATMO_F = /* glsl */ `
uniform vec3 uSun, uCol; uniform float uA; varying vec3 vN, vW;
void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW);
  float d = dot(n, V);
  float g = pow(smoothstep(0.0, -0.4, d), 2.2);
  float s = 0.2 + 0.8 * pow(max(dot(n, uSun), 0.0), 0.7);
  gl_FragColor = vec4(uCol * g * s * uA, 1.0); }`;

// instanced cross-of-light billboards standing on the surface
export const CROSS_V = /* glsl */ `
uniform float uT, uRot, uFront, uCross; uniform vec3 uAxis;
attribute vec4 aP; attribute vec2 aT;
varying vec2 vUv; varying float vA;
${ROT}
void main(){
  vec3 d = rotY(normalize(aP.xyz), uRot);
  float age = uT - aT.x, g = smoothstep(0.0, 0.5, age);
  float ang = acos(clamp(dot(d, uAxis), -1.0, 1.0));
  vA = g * smoothstep(uFront - 0.02, uFront + 0.3, ang) * uCross * (1.0 + 0.6 * exp(-max(age, 0.0) * 5.0) * step(0.0, age));
  float H = aT.y * (0.2 + 0.8 * g);
  vec3 side = normalize(cross(d, normalize(cameraPosition - d)));
  vec3 pos = d * 0.99 + side * (position.x * H * 0.62) + d * ((position.y + 0.5) * H);
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
}`;
export const CROSS_F = /* glsl */ `
uniform float uK; varying vec2 vUv; varying float vA;
void main(){
  float dv = abs(vUv.x - 0.5), dh = abs(vUv.y - 0.72);
  float fy = smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.86, vUv.y);
  float vert = (exp(-dv * dv * 1600.0) + 0.3 * exp(-dv * dv * 70.0)) * fy;
  float hor = (exp(-dh * dh * 2600.0) + 0.3 * exp(-dh * dh * 120.0)) * smoothstep(0.5, 0.3, dv);
  float a = max(vert, hor);
  vec3 col = mix(vec3(1.0, 0.3, 0.1), vec3(1.0, 0.95, 0.86), clamp(a * 1.4 - 0.35, 0.0, 1.0));
  gl_FragColor = vec4(col * a * vA * (1.0 + 0.5 * uK), 1.0);
}`;

// souls: points rising from the surface and converging (dir = +1) or returning (dir = -1)
export const SOUL_V = /* glsl */ `
uniform float uT, uRot, uSoul, uDir, uPx; uniform vec3 uQ, uCol;
attribute vec4 aP, aR;
varying float vA; varying vec3 vC;
${NOISE} ${ROT}
void main(){
  vec3 b = rotY(normalize(aP.xyz), uRot) * 1.005;
  float s = fract(aR.x + uDir * uT * (0.05 + 0.07 * aR.y));
  float e = s * s * (3.0 - 2.0 * s);
  vec3 p = mix(b, uQ, e * aP.w) + b * sin(s * 3.1416) * (0.35 + 0.6 * aR.z);
  p += curl3(b * 3.0 + uT * 0.1 + aR.w * 10.0) * 0.1 * sin(s * 3.1416);
  vec4 mv = viewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vA = smoothstep(0.25, 0.9, -mv.z) * smoothstep(0.0, 0.06, s) * smoothstep(1.0, 0.8, s) * uSoul * (0.6 + 0.4 * sin(uT * 6.0 + aR.w * 40.0));
  vC = mix(uCol, vec3(1.0), aR.y * 0.5);
  gl_PointSize = clamp(uPx * (0.6 + aR.z) / max(-mv.z, 0.15), 1.0, 12.0);
}`;
export const DOT_F = /* glsl */ `
uniform float uK; varying float vA; varying vec3 vC;
void main(){ vec2 q = gl_PointCoord - 0.5; float a = exp(-dot(q, q) * 18.0) * vA;
  gl_FragColor = vec4(vC * a * (1.0 + 0.6 * uK), 1.0); }`;

export const RING_V = /* glsl */ `varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
export const RING_F = /* glsl */ `
uniform float uT, uA, uK; varying vec2 vP; ${NOISE}
void main(){ float r = length(vP), a = atan(vP.y, vP.x);
  float line = exp(-pow((r - 1.55) * 90.0, 2.0)) + 0.6 * exp(-pow((r - 1.64) * 140.0, 2.0));
  float band = exp(-pow((r - 1.55) * 7.0, 2.0)) * (0.25 + 0.75 * vnoise(vec2(a * 24.0, uT * 0.6)));
  float rev = smoothstep(0.0, 0.05, uA * 6.2832 - (a + 3.1416));
  gl_FragColor = vec4(vec3(1.0, 0.24, 0.1) * (line * 1.3 + band * 0.3) * rev * (1.0 + 0.6 * uK), 1.0); }`;

export const SEPH_F = /* glsl */ `
uniform sampler2D tMap; uniform float uT, uA, uRev; varying vec2 vUv; ${NOISE}
void main(){ vec4 m = texture2D(tMap, vUv);
  float rev = smoothstep(1.0 - uRev * 1.1, 1.0 - uRev * 1.1 + 0.08, vUv.y); // draws top (Keter) -> bottom
  float fl = 0.8 + 0.2 * vnoise(vec2(uT * 12.0, 0.0));
  gl_FragColor = vec4(m.rgb * rev * uA * fl, 1.0); }`;

export const NEB_F = /* glsl */ `
uniform float uT, uRed, uA; varying vec2 vUv; ${NOISE}
void main(){ vec2 p = vUv * vec2(3.0, 1.7);
  float n = fbm(p * 1.3 + vec2(uT * 0.01, 0.0)), m = fbm(p * 3.0 - 4.0);
  vec3 c = mix(vec3(0.02, 0.04, 0.12) * n + vec3(0.05, 0.03, 0.1) * m * m, vec3(0.09, 0.005, 0.01) * n + vec3(0.05, 0.01, 0.0) * m * m, uRed);
  gl_FragColor = vec4(c * uA * smoothstep(0.3, 0.9, n + 0.2), 1.0); }`;
