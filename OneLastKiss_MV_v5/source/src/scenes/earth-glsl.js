// Earth (v2) shaders: procedural globe that can be the red Instrumentality planet (LCL sea, scorched land)
// or the restored blue earth; a restoration front sweeps from red to blue. Crosses of light, rising souls, halo ring.
import { NOISE } from '../core/glsl.js';

export const ROT = /* glsl */ `vec3 rotY(vec3 p, float a){ float c = cos(a), s = sin(a); return vec3(c*p.x + s*p.z, p.y, -s*p.x + c*p.z); }`;

export const WORLD_V = /* glsl */ `varying vec3 vN, vW;
void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w; }`;

// v3: baked high-res maps (equirect 4096x2048), rendered once on the GPU at build.
//  tH: R,G = 16-bit height (split hi/lo, filters linearly), B = moisture, A = city density
//  tC: R = cloud density, G = fine cloud detail
const EQ = /* glsl */ `vec3 dirOf(vec2 uv){ float lon = (uv.x - 0.5) * 6.2831853, lat = (uv.y - 0.5) * 3.1415926; return vec3(cos(lat) * sin(lon), sin(lat), cos(lat) * cos(lon)); }
float fbm6(vec3 p){ float s = 0.0, a = 0.5; for(int i=0;i<6;i++){ s += a*vnoise3(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
float fbm9(vec3 p){ float s = 0.0, a = 0.5; for(int i=0;i<9;i++){ s += a*vnoise3(p); p = p*2.01 + 7.3; a *= 0.5; } return s; }
float ridge(vec3 p){ float s = 0.0, a = 0.5, w = 1.0; for(int i=0;i<7;i++){ float n = 1.0 - abs(vnoise3(p) * 2.0 - 1.0); n *= n * w; w = clamp(n * 1.6, 0.0, 1.0); s += a * n; p = p * 2.07 + 11.3; a *= 0.5; } return s; }`;

export const BAKE_H = /* glsl */ `varying vec2 vUv; ${NOISE} ${EQ}
void main(){
  vec3 p = dirOf(vUv);
  vec3 w = vec3(fbm6(p * 1.2 + 1.0), fbm6(p * 1.2 + 5.2), fbm6(p * 1.2 + 9.7)) - 0.5;
  vec3 q = p * 1.5 + w * 1.1;
  float c = fbm9(q + 3.0) - 0.53;
  float coast = smoothstep(-0.02, 0.12, c);
  float h = c + ridge(q * 2.6 + 4.0) * 0.32 * coast * smoothstep(0.35, 0.7, fbm6(p * 2.0 + 30.0)) + (fbm9(p * 22.0) - 0.5) * 0.05;
  h -= (1.0 - smoothstep(-0.25, 0.0, c)) * 0.15 * fbm6(p * 3.0 + 2.0);   // ocean basins
  float lat = abs(p.y);
  float moist = fbm6(p * 2.4 + 20.0) + 0.35 * (fbm6(q * 7.0 + 50.0) - 0.5) + 0.12 * (ridge(p * 9.0 + 3.0) - 0.4) + 0.25 * cos(lat * 9.0) - 0.1 * smoothstep(0.0, 0.1, h) + 0.15 * (1.0 - coast);
  float city = smoothstep(0.62, 0.92, vnoise3(p * 420.0)) * smoothstep(0.5, 0.8, fbm6(p * 6.0 + 40.0))
             * smoothstep(0.0, 0.02, h) * (0.4 + 0.6 * smoothstep(0.12, 0.0, h)) * (1.0 - smoothstep(0.65, 0.8, lat));
  city = max(city, 0.6 * step(0.985, vnoise3(p * 900.0)) * smoothstep(0.0, 0.02, h) * smoothstep(0.55, 0.7, fbm6(p * 6.0 + 40.0)));
  float hh = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0);
  gl_FragColor = vec4(floor(hh / 256.0) / 255.0, mod(hh, 256.0) / 255.0, clamp(moist, 0.0, 1.0), clamp(city, 0.0, 1.0)); }`;

export const BAKE_C = /* glsl */ `varying vec2 vUv; ${NOISE} ${EQ}
void main(){
  vec3 p = dirOf(vUv); float lat = p.y;
  vec3 w = vec3(fbm6(p * 2.0 + 3.0), fbm6(p * 2.0 + 8.0), fbm6(p * 2.0 + 13.0)) - 0.5;
  vec3 q = p * vec3(2.2, 4.5, 2.2) + w * 1.6 + vec3(0.0, 0.0, sin(lat * 12.0) * 0.4);   // latitude-banded, swirled
  float d = fbm9(q * 1.3) + 0.25 * (fbm6(p * 9.0 + w * 3.0) - 0.5);
  d += 0.12 * cos(lat * 7.5) - 0.06;
  float e = fbm9(p * 30.0 + w * 4.0); d -= (1.0 - e) * 0.18;                   // eroded, wispy edges
  gl_FragColor = vec4(smoothstep(0.36, 0.7, d), e, 0.0, 1.0); }`;

export const GLOBE_F = /* glsl */ `
uniform float uT, uRot, uRed, uFront, uEdge, uCloud, uLights, uK, uBump;
uniform vec3 uSun, uAxis; uniform sampler2D tH, tC; uniform vec2 uTexel;
varying vec3 vN, vW;
${NOISE} ${ROT}
vec2 uvOf(vec3 p){ return vec2(atan(p.x, p.z) / 6.2831853 + 0.5, asin(clamp(p.y, -1.0, 1.0)) / 3.1415926 + 0.5); }
vec2 GX, GY;
void grads(vec2 uv){ vec2 u2 = vec2(fract(uv.x + 0.5), uv.y); vec2 a = dFdx(uv), b = dFdy(uv), c = dFdx(u2), d = dFdy(u2);
  if (dot(c, c) + dot(d, d) < dot(a, a) + dot(b, b)) { a = c; b = d; } GX = a; GY = b; }   // seam-safe mip selection
vec4 S(sampler2D t, vec2 uv){ return textureGrad(t, uv, GX, GY); }
float hOf(vec4 s){ return (s.r * 255.0 * 256.0 + s.g * 255.0) / 65535.0 * 2.0 - 1.0; }
void main(){
  vec3 n = normalize(vN), p = rotY(n, -uRot);
  vec2 uv = uvOf(p); grads(uv);
  vec4 m = S(tH, uv);
  float h = hOf(m), moist = m.b;
  // bump normal from the baked height (tangent frame on the rotated sphere, back to world)
  vec3 E = normalize(vec3(p.z, 0.0, -p.x) + 1e-5), Nn = cross(p, E);
  float cl = max(cos(asin(clamp(p.y, -1.0, 1.0))), 0.05), st = 1.5;
  float hx = hOf(S(tH, uv + vec2(uTexel.x * st, 0.0))), hy = hOf(S(tH, uv + vec2(0.0, uTexel.y * st)));
  float land = smoothstep(0.0, 0.004, h);
  float amp = uBump * mix(0.25, 1.0, land);
  vec3 g = (hx - h) / (uTexel.x * st * 6.2831853 * cl) * E + (hy - h) / (uTexel.y * st * 3.1415926) * Nn;
  vec3 pn = normalize(p - g * amp);
  vec3 nn = rotY(pn, uRot);
  // micro detail when close
  float micro = vnoise3(p * 900.0) - 0.5;
  vec3 V = normalize(cameraPosition - vW);
  float ns = dot(nn, uSun), ns0 = dot(n, uSun), dif = max(ns, 0.0), term = smoothstep(-0.12, 0.2, ns0);
  vec3 Hh = normalize(uSun + V);
  float lat = abs(p.y), ice = smoothstep(0.92, 0.94, lat + (m.b - 0.5) * 0.12 + micro * 0.01) + smoothstep(0.45, 0.6, h) * 0.9;
  ice = clamp(ice, 0.0, 1.0);
  // --- blue earth
  vec3 ocean = mix(vec3(0.002, 0.01, 0.04), vec3(0.006, 0.04, 0.11), smoothstep(-0.3, -0.03, h));
  ocean = mix(ocean, vec3(0.015, 0.12, 0.16), smoothstep(-0.015, 0.0, h) * 0.6);                 // shelves
  vec3 desert = vec3(0.3, 0.2, 0.1), grass = vec3(0.07, 0.1, 0.035), forest = vec3(0.02, 0.05, 0.02), rock = vec3(0.11, 0.09, 0.07);
  vec3 ground = mix(desert, grass, smoothstep(0.28, 0.42, moist)); ground = mix(ground, forest, smoothstep(0.45, 0.6, moist));
  float gd = S(tC, uv * vec2(3.0, 3.0)).g; ground *= 0.55 + 0.9 * gd;               // baked fine noise, tiled: terrain texture
  ground = mix(ground, rock, smoothstep(0.12, 0.3, h)) * (1.0 + micro * 0.25);
  vec3 blue = mix(mix(ocean, ground, land), vec3(0.75, 0.8, 0.86), ice);
  // clouds (drift in longitude; shadow offset toward the sun)
  vec2 cuv = uv + vec2(uT * 0.0025, 0.0);
  vec4 cs = S(tC, cuv); float cdn = smoothstep(0.05, 0.85, cs.r * (0.6 + 0.8 * cs.g)) * uCloud;
  vec3 sT = vec3(dot(uSun, rotY(E, uRot)), dot(uSun, rotY(Nn, uRot)), 0.0);
  float csh = S(tC, cuv - sT.xy * vec2(0.0016, 0.003)).r * uCloud;
  float wet = (1.0 - land) * (1.0 - ice);
  float spec = pow(max(dot(nn, Hh), 0.0), 180.0) * 2.2 + pow(max(dot(n, Hh), 0.0), 18.0) * 0.08;
  float fres = 0.02 + 0.5 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  vec3 cb = blue * (0.012 + 0.95 * dif) * (1.0 - csh * 0.55);
  cb += (vec3(1.0, 0.88, 0.7) * spec + vec3(0.25, 0.45, 0.8) * fres * 0.35) * wet * term * (1.0 - cdn);
  cb *= mix(vec3(1.0, 0.55, 0.32), vec3(1.0), smoothstep(0.0, 0.3, ns0));                     // warm terminator
  vec3 cloudCol = vec3(0.85) * (0.03 + 1.0 * max(dot(n, uSun) * 0.8 + 0.2, 0.0)) * mix(vec3(1.0, 0.6, 0.4), vec3(1.0), smoothstep(0.0, 0.25, ns0));
  cb = mix(cb, cloudCol, cdn * 0.92);
  float city = m.a * (0.6 + 0.4 * vnoise3(p * 1500.0));
  cb += vec3(1.0, 0.62, 0.28) * city * (1.0 - smoothstep(-0.1, 0.12, ns0)) * uLights * 2.2 * (1.0 - cdn * 0.8);
  // --- red earth (LCL sea glowing from within, scorched land with lit ridges)
  float rs = fbm3(p * 6.0 + vec3(0.0, uT * 0.06, 0.0)) + 0.35 * (vnoise3(p * 40.0 + uT * 0.2) - 0.5);
  vec3 rOcean = mix(vec3(0.16, 0.0, 0.015), vec3(0.85, 0.1, 0.04), rs * rs * 1.4);
  rOcean += vec3(1.0, 0.25, 0.08) * smoothstep(-0.03, 0.0, h) * (1.0 - land) * 0.6;           // glowing shore line
  vec3 rLand = mix(vec3(0.02, 0.006, 0.005), vec3(0.14, 0.035, 0.025), smoothstep(0.0, 0.3, h)) * (1.0 + micro * 0.3);
  vec3 red = mix(mix(rOcean, rLand, land), vec3(0.3, 0.06, 0.05), ice * 0.7);
  vec3 cr = red * (0.12 + 0.8 * dif) + vec3(1.0, 0.45, 0.25) * pow(max(dot(nn, Hh), 0.0), 90.0) * wet * 0.35
          + rOcean * wet * 0.22 * (0.7 + 0.6 * uK);
  cr = mix(cr, vec3(0.35, 0.06, 0.04) * (0.1 + 0.7 * dif), cdn * 0.45);
  // --- restoration front
  float ang = acos(clamp(dot(n, uAxis), -1.0, 1.0));
  float wob = (fbm3(p * 5.0 + 7.0) - 0.5) * 0.18;
  float r = uRed * (1.0 - smoothstep(uFront + 0.03, uFront - 0.03, ang + wob));
  vec3 c = mix(cb, cr, r);
  float edge = exp(-pow((ang + wob - uFront) * 16.0, 2.0)) * uEdge;
  c += vec3(0.75, 0.9, 1.0) * edge * (0.5 + 0.9 * fbm3(p * 12.0 + uT * 0.7)) * (1.0 + uK);
  // --- rim atmosphere
  float fr = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  c += mix(vec3(0.3, 0.55, 1.0) * (0.15 + term), vec3(1.0, 0.18, 0.08) * (0.4 + 0.6 * term), r) * fr * 0.55;
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

// ---- v3 Third Impact set piece ----
// hex AT-field shell around the planet: cells ignite in a wave from the south pole (anti-AT field expanding)
export const HEX_F = /* glsl */ `
uniform float uT, uHex, uSpread, uK, uFront; uniform vec3 uAxis; varying vec3 vN, vW; ${NOISE}
vec4 hx(vec2 p){ const vec2 s = vec2(1.0, 1.7320508); vec4 c = floor(vec4(p, p - vec2(0.5, 1.0)) / s.xyxy) + 0.5;
  vec4 h = vec4(p - c.xy * s, p - (c.zw + 0.5) * s); return dot(h.xy, h.xy) < dot(h.zw, h.zw) ? vec4(h.xy, c.xy) : vec4(h.zw, c.zw + 0.5); }
vec2 cell(vec2 uv, out float id){ vec4 h = hx(uv); vec2 a = abs(h.xy); float d = max(dot(a, vec2(0.5, 0.8660254)), a.x);
  id = hash12(h.zw); return vec2(0.5 - d, 0.0); }
void main(){ vec3 n = normalize(vW), V = normalize(cameraPosition - vW);
  vec3 w = pow(abs(n), vec3(6.0)); w /= dot(w, vec3(1.0));
  float i1, i2, i3; float e1 = cell(n.yz * 24.0, i1).x, e2 = cell(n.zx * 24.0, i2).x, e3 = cell(n.xy * 24.0, i3).x;
  float e = e1 * w.x + e2 * w.y + e3 * w.z, id = i1 * w.x + i2 * w.y + i3 * w.z;
  float ang = acos(clamp(-n.y, -1.0, 1.0));                   // 0 at the south pole
  float fr = uSpread * 3.3 - ang + (id - 0.5) * 0.35;         // wave of ignition
  float on = smoothstep(0.0, 0.05, fr), flash = exp(-max(fr, 0.0) * 9.0) * on;
  float fw = fwidth(e) * 1.5 + 0.002; float edge = (1.0 - smoothstep(0.0, fw, e)) + 0.35 * exp(-e * e * 700.0);
  float fill = 0.015 + 0.2 * step(0.95, fract(id * 7.0 + floor(uT * 5.0) * 0.37));
  float fres = pow(1.0 - abs(dot(n, V)), 2.0);
  float ra = acos(clamp(dot(n, uAxis), -1.0, 1.0)), red = smoothstep(uFront - 0.02, uFront + 0.3, ra);
  float a = (edge * (0.12 + 0.7 * fres) + fill * fres + flash * 0.9) * on * uHex * red * (1.0 + 0.8 * uK);
  vec3 col = mix(vec3(1.0, 0.28, 0.06), vec3(1.0, 0.8, 0.5), clamp(flash * 1.5 + edge * 0.3, 0.0, 1.0));
  gl_FragColor = vec4(col * a, 1.0); }`;

// souls spiralling into the Black Moon (vortex column from the pole)
export const VORT_V = /* glsl */ `
uniform float uT, uVort, uPx; uniform vec3 uQ; attribute vec4 aR; varying float vA; varying vec3 vC; ${NOISE}
void main(){
  float s = fract(aR.x + uT * (0.06 + 0.08 * aR.y)), e = s * s;
  float r = mix(0.35 + 0.9 * aR.z, 0.02, pow(s, 0.7));
  float th = aR.w * 6.2832 + s * (9.0 + 5.0 * aR.y) + uT * 0.8;
  vec3 base = vec3(0.0, 0.95, 0.0), p = mix(base, uQ, e);
  p.x += cos(th) * r; p.z += sin(th) * r; p += curl3(p * 4.0 + uT * 0.2) * 0.03 * (1.0 - s);
  vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  vA = smoothstep(0.0, 0.1, s) * smoothstep(1.0, 0.9, s) * uVort * (0.5 + 0.5 * sin(uT * 7.0 + aR.w * 50.0));
  vC = mix(vec3(1.0, 0.3, 0.12), vec3(1.0, 0.92, 0.85), s * s);
  gl_PointSize = clamp(uPx * (0.5 + aR.z) / max(-mv.z, 0.15), 1.0, 10.0); }`;

// the Black Moon: an obsidian sphere with a red rim and glowing fissures
export const MOON_F = /* glsl */ `
uniform float uT, uCrack, uK; varying vec3 vN, vW; ${NOISE}
void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW);
  float fres = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  float r = abs(fbm3(n * 3.0 + 7.0) - 0.5), r2 = abs(fbm3(n * 7.0 - 3.0) - 0.5);
  float cr = exp(-r * r * 4000.0) * smoothstep(0.3, 0.9, uCrack + fbm3(n * 2.0) - 0.4) + exp(-r2 * r2 * 9000.0) * 0.35 * uCrack;
  vec3 c = vec3(0.004, 0.0, 0.002) + vec3(1.0, 0.18, 0.05) * fres * 1.4 + vec3(1.0, 0.4, 0.15) * cr * (0.7 + 0.5 * uK);
  gl_FragColor = vec4(c, 1.0); }`;

// 3D tree of life: glowing node billboards + beams, revealed top (Keter) to bottom
export const NODE_V = /* glsl */ `
uniform float uRev, uSz; attribute vec4 aN; varying vec2 vUv; varying float vA;
void main(){ vUv = uv; vA = smoothstep(aN.w, aN.w + 0.06, uRev);
  vec4 mv = viewMatrix * vec4(aN.xyz, 1.0); mv.xy += position.xy * uSz * (0.6 + 0.4 * vA);
  gl_Position = projectionMatrix * mv; }`;
export const NODE_F = /* glsl */ `
uniform float uA, uK, uT; varying vec2 vUv; varying float vA;
void main(){ float r = length(vUv - 0.5) * 2.0;
  float ring = exp(-pow((r - 0.62) * 22.0, 2.0)) + 0.5 * exp(-pow((r - 0.45) * 40.0, 2.0));
  float core = exp(-r * r * 30.0) * 1.6 + exp(-r * r * 4.0) * 0.25;
  vec3 col = vec3(1.0, 0.35, 0.12) * ring * 1.3 + vec3(1.0, 0.8, 0.6) * core;
  gl_FragColor = vec4(col * vA * uA * (1.0 + 0.7 * uK), 1.0); }`;
export const BEAM_V = /* glsl */ `
uniform float uRev, uW; attribute vec3 aA, aB; attribute float aR; varying float vX, vA;
void main(){ float u = position.y + 0.5; vX = position.x * 2.0;
  vec3 p = mix(aA, aB, u), dir = normalize(aB - aA), side = normalize(cross(dir, normalize(cameraPosition - p)));
  float grow = clamp((uRev - aR) / 0.12, 0.0, 1.0); vA = step(u, grow) * step(0.001, grow);
  gl_Position = projectionMatrix * viewMatrix * vec4(p + side * position.x * uW, 1.0); }`;
export const BEAM_F = /* glsl */ `
uniform float uA, uK; varying float vX, vA;
void main(){ float a = exp(-vX * vX * 30.0) + 0.25 * exp(-vX * vX * 4.0);
  gl_FragColor = vec4(mix(vec3(1.0, 0.3, 0.1), vec3(1.0, 0.85, 0.7), exp(-vX * vX * 60.0)) * a * vA * uA * (0.9 + 0.5 * uK), 1.0); }`;

// Lance: double-helix shaft that splits into two prongs; energy pulses run toward the tip
export const LANCE_V = /* glsl */ `varying vec3 vN, vW; varying float vZ; uniform float uLen;
void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vZ = position.z / uLen + 0.5;
  gl_Position = projectionMatrix * viewMatrix * w; }`;
export const LANCE_F = /* glsl */ `
uniform float uT, uK, uGlow; varying vec3 vN, vW; varying float vZ;
void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW);
  float fres = pow(1.0 - abs(dot(n, V)), 2.5), spec = pow(max(dot(reflect(-V, n), normalize(vec3(0.5, 0.8, 0.3))), 0.0), 40.0);
  float pulse = pow(0.5 + 0.5 * sin(vZ * 40.0 - uT * 18.0), 6.0) * smoothstep(0.1, 0.9, vZ);
  vec3 c = vec3(0.09, 0.005, 0.004) + vec3(1.0, 0.25, 0.08) * fres * 1.6 + vec3(1.0, 0.85, 0.7) * spec * 1.5
    + vec3(1.0, 0.45, 0.15) * pulse * uGlow * (0.6 + 0.6 * uK) + vec3(1.0, 0.7, 0.5) * smoothstep(0.93, 1.0, vZ) * uGlow * 0.6;
  gl_FragColor = vec4(c, 1.0); }`;
// wake of sparks behind the lance
export const WAKE_V = /* glsl */ `
uniform float uT, uPx, uWake; uniform vec3 uP, uD; attribute vec4 aR; varying float vA; varying vec3 vC; ${NOISE}
void main(){ float age = aR.x * 1.6; vec3 side = normalize(cross(uD, vec3(0.0, 1.0, 0.0))), up = cross(side, uD);
  float an = aR.y * 6.2832 + age * 6.0, rad = (0.01 + age * 0.09) * (0.3 + aR.z);
  vec3 p = uP - uD * (0.26 + age * 1.1) + (side * cos(an) + up * sin(an)) * rad + curl3(vec3(aR.w * 20.0, age, uT * 0.3)) * age * 0.04;
  vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  vA = (1.0 - aR.x) * uWake * (0.5 + 0.5 * sin(uT * 9.0 + aR.w * 60.0)); vC = mix(vec3(1.0, 0.85, 0.7), vec3(1.0, 0.25, 0.08), aR.x);
  gl_PointSize = clamp(uPx * (0.4 + aR.z) / max(-mv.z, 0.1), 1.0, 9.0); }`;

// Section G (flashback): the blue planet adrift in the red sea of LCL. Sea is y = uLvl, globe = unit sphere at the origin.
const WAVES = /* glsl */ `
float wv(vec2 p, float t){ float h = 0.0;
  h += 0.035 * sin(dot(p, vec2(0.9, 0.45)) * 2.2 - t * 1.1);
  h += 0.022 * sin(dot(p, vec2(-0.5, 0.85)) * 3.7 - t * 1.6);
  h += 0.012 * sin(dot(p, vec2(0.2, -1.0)) * 7.1 - t * 2.3);
  h += 0.006 * sin(dot(p, vec2(-0.95, -0.3)) * 13.0 - t * 3.1);
  float r = length(p); h += 0.018 * sin(r * 11.0 - t * 2.6) * exp(-max(r - 0.9, 0.0) * 1.3) * smoothstep(0.75, 1.0, r);  // swell rings off the globe
  return h * smoothstep(0.7, 0.95, r); }`;
export const GSEA_V = /* glsl */ `uniform float uT, uLvl; varying vec3 vW; varying float vH; ${WAVES}
void main(){ vec4 w = modelMatrix * vec4(position, 1.0); float h = wv(w.xz, uT); w.y = uLvl + h; vW = w.xyz; vH = h;
  gl_Position = projectionMatrix * viewMatrix * w; }`;
const GSKY = /* glsl */ `
vec3 sky(vec3 d, vec3 S, float t){ float y = d.y;
  vec3 c = mix(vec3(1.1, 0.34, 0.12), vec3(0.42, 0.04, 0.05), smoothstep(-0.02, 0.22, y));
  c = mix(c, vec3(0.07, 0.0, 0.02), smoothstep(0.2, 0.75, y));
  float cl = fbm(vec2(atan(d.x, d.z) * 5.0 + t * 0.01, y * 18.0)); c *= 0.8 + 0.45 * cl * smoothstep(0.4, 0.04, y);
  float s = max(dot(d, S), 0.0); c += vec3(1.6, 0.7, 0.35) * pow(s, 300.0) * 3.0 + vec3(1.0, 0.35, 0.15) * pow(s, 8.0) * 0.5;
  return c; }`;
export const GSKY_F = /* glsl */ `uniform float uT; uniform vec3 uSun; varying vec3 vD; ${NOISE} ${GSKY}
void main(){ gl_FragColor = vec4(sky(normalize(vD), uSun, uT), 1.0); }`;
export const GSEA_F = /* glsl */ `uniform float uT, uLvl, uK; uniform vec3 uSun; varying vec3 vW; varying float vH; ${NOISE} ${WAVES} ${GSKY}
void main(){ vec2 e = vec2(0.004, 0.0);
  vec3 n = normalize(vec3(wv(vW.xz - e.xy, uT) - wv(vW.xz + e.xy, uT), 2.0 * e.x, wv(vW.xz - e.yx, uT) - wv(vW.xz + e.yx, uT)));
  n = normalize(n + 0.06 * vec3(vnoise(vW.xz * 40.0 + uT) - 0.5, 0.0, vnoise(vW.xz * 40.0 - uT + 7.0) - 0.5));
  vec3 V = normalize(cameraPosition - vW), Rf = reflect(-V, n); Rf.y = abs(Rf.y);
  float fr = 0.03 + 0.97 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  vec3 refl = sky(Rf, uSun, uT);
  // reflected globe (ray / unit-sphere hit)
  float b = dot(vW, Rf), c0 = dot(vW, vW) - 1.0, D = b * b - c0;
  if (D > 0.0 && -b - sqrt(D) > 0.0) { vec3 q = vW + Rf * (-b - sqrt(D));
    float lit = 0.35 + 0.65 * max(dot(q, uSun), 0.0), cl = smoothstep(0.55, 0.8, fbm(q.xz * 3.0 + q.y * 2.0));
    refl = (mix(vec3(0.05, 0.2, 0.45), vec3(0.8, 0.8, 0.85), cl) * lit + vec3(0.2, 0.45, 1.0) * pow(1.0 - abs(dot(normalize(q), Rf)), 3.0)) * 0.5; }
  vec3 body = vec3(0.16, 0.005, 0.01) * (0.6 + 0.4 * max(dot(n, uSun), 0.0));
  vec3 sss = vec3(0.9, 0.12, 0.04) * smoothstep(0.0, 0.05, vH) * pow(max(dot(-V, uSun) * 0.5 + 0.5, 0.0), 3.0) * 0.6;  // light through crests
  vec3 col = mix(body + sss, refl * vec3(0.8, 0.5, 0.46), fr * 0.85);
  col += vec3(1.6, 0.8, 0.5) * pow(max(dot(Rf, uSun), 0.0), 400.0) * 6.0;
  // foam hugging the globe + on crests
  float r = length(vW.xz), rim = sqrt(max(1.0 - uLvl * uLvl, 0.0));
  float foam = smoothstep(0.06, 0.0, r - rim - 0.01 * sin(atan(vW.z, vW.x) * 17.0 + uT * 3.0)) * (0.6 + 0.4 * fbm(vW.xz * 30.0 + uT));
  foam += smoothstep(0.035, 0.055, vH) * smoothstep(0.4, 0.8, fbm(vW.xz * 18.0 - uT * 0.6)) * 0.4;
  col += vec3(1.0, 0.55, 0.45) * foam * 0.5;
  float dist = length(vW - cameraPosition); col = mix(col, sky(normalize(vec3(-V.x, 0.01, -V.z)), uSun, uT), smoothstep(3.5, 8.5, dist));
  gl_FragColor = vec4(col * (1.0 + 0.15 * uK), 1.0); }`;
export const GSKY_V = 'varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }';
