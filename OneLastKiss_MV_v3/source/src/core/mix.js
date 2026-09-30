// Transition compositor: blends two HDR scene renders with a stylised wipe.
import * as THREE from 'three';
import { NOISE } from './glsl.js';
import { fsMat } from './post.js';

export const MODES = { fade: 0, flash: 1, dip: 2, zoom: 3, burn: 4, shatter: 5, iris: 6, pencil: 7, glitch: 8, light: 9, hex: 10 };

const FRAG = `uniform sampler2D tA, tB; uniform float uP, uMode, uAspect, uTime, uAmt; uniform vec2 uC; varying vec2 vUv; ${NOISE}
vec3 A(vec2 uv){ return texture2D(tA, uv).rgb; }
vec3 B(vec2 uv){ return texture2D(tB, uv).rgb; }
vec3 zoomA(vec2 uv, float k){ vec3 s = vec3(0.0); for (int i = 0; i < 12; i++){ float f = float(i) / 11.0; s += A(uC + (uv - uC) / (1.0 + k * f)); } return s / 12.0; }
float lum(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
// voronoi on aspect-corrected coords; returns owner cell id and edge distance
vec3 vor(vec2 q){ vec2 i = floor(q), f = fract(q); float d1 = 9.0, d2 = 9.0; vec2 id = vec2(0.0);
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++){ vec2 g = vec2(float(x), float(y)); vec2 o = hash22(i + g) * 0.8 + 0.1;
    float d = length(g + o - f); if (d < d1){ d2 = d1; d1 = d; id = i + g; } else if (d < d2) d2 = d; }
  return vec3(id, d2 - d1); }
void main(){
  vec2 uv = vUv; float p = clamp(uP, 0.0, 1.0); int m = int(uMode + 0.5); vec3 col;
  if (m == 1){ // flash: white bloom spike, cut at peak
    float k = 1.0 - abs(p - 0.5) * 2.0; col = (p < 0.5 ? A(uv) : B(uv)) + vec3(1.0, 0.96, 0.9) * pow(k, 1.6) * 6.0 * uAmt;
  } else if (m == 2){ // dip to black
    col = p < 0.5 ? A(uv) * smoothstep(0.5, 0.0, p) : B(uv) * smoothstep(0.5, 1.0, p);
  } else if (m == 3){ // radial zoom-through
    float k = smoothstep(0.0, 1.0, p); vec3 za = zoomA(uv, k * 2.5);
    vec2 ub = uC + (uv - uC) * (1.0 + (1.0 - k) * 0.35);
    col = mix(za * (1.0 + k * 2.0), B(ub), smoothstep(0.35, 0.9, p));
  } else if (m == 4){ // film burn from uC
    vec2 q = (uv - uC) * vec2(uAspect, 1.0);
    float f = fbm(q * 3.0 + 4.0) * 0.55 + length(q) * 0.9;
    float th = p * 1.9 - 0.25; float e = f - th;
    vec3 a = A(uv) * smoothstep(-0.02, 0.12, e);
    col = mix(B(uv), a, smoothstep(-0.015, 0.0, e));
    col += vec3(1.0, 0.45, 0.12) * smoothstep(0.06, 0.0, abs(e)) * 5.0 + vec3(1.0, 0.85, 0.5) * smoothstep(0.012, 0.0, abs(e)) * 8.0;
  } else if (m == 5){ // shatter: cracks, then shards shrink/spin/fall revealing B
    float S = 7.0; vec2 q = vec2(uv.x * uAspect, uv.y) * S; vec2 cq = vec2(uC.x * uAspect, uC.y) * S;
    float crack = smoothstep(0.0, 0.28, p);
    vec3 v0 = vor(q); float rd = length(v0.xy + 0.5 - cq) / S;
    col = B(uv); bool hit = false;
    for (int y = -1; y <= 2; y++) for (int x = -1; x <= 1; x++){
      if (hit) continue;
      vec2 id = floor(q) + vec2(float(x), float(y)); vec2 ctr = id + hash22(id) * 0.8 + 0.1;
      float h = hash12(id + 3.7); float dd = length(ctr - cq) / S;
      float fall = clamp((p - 0.28 - dd * 0.45 - h * 0.18) / 0.4, 0.0, 1.0); fall *= fall;
      float sc = 1.0 - fall * 0.85; float an = (h - 0.5) * 3.0 * fall;
      vec2 off = vec2((h - 0.5) * 0.8, -2.2 * fall) * fall;
      vec2 lq = q - ctr - off; lq = mat2(cos(an), -sin(an), sin(an), cos(an)) * lq / sc; vec2 src = ctr + lq;
      vec3 vv = vor(src);
      if (vv.x == id.x && vv.y == id.y && fall < 0.999){
        vec2 suv = vec2(src.x / uAspect, src.y) / S + (hash22(id * 1.3) - 0.5) * 0.006 * crack;
        vec3 a = A(suv) * (1.0 - fall * 0.6);
        a += vec3(0.9, 0.95, 1.0) * smoothstep(0.035, 0.0, vv.z) * crack * step(rd, crack * 1.2 + 0.05) * 2.5;
        col = a; hit = true;
      }
    }
  } else if (m == 6){ // hexagonal aperture close then open
    vec2 q = (uv - uC) * vec2(uAspect, 1.0); float an = atan(q.y, q.x) + p * 1.2;
    float hx = length(q) * cos(3.14159 / 6.0) / cos(mod(an, 1.0472) - 0.5236);
    float r = abs(p - 0.5) * 2.0 * 1.25;
    vec3 src = p < 0.5 ? A(uv) : B(uv);
    col = src * smoothstep(r, r - 0.01, hx) + vec3(0.8, 0.7, 0.5) * smoothstep(0.012, 0.0, abs(hx - r)) * step(0.02, r) * 1.5;
  } else if (m == 7){ // pencil hatching reveal
    vec2 q = vec2(uv.x * uAspect, uv.y);
    float h1 = abs(fract((q.x + q.y) * 60.0) - 0.5), h2 = abs(fract((q.x - q.y) * 45.0) - 0.5);
    float n = fbm(q * 4.0) * 0.6 + hash12(floor(q * 60.0)) * 0.1 + (h1 + h2) * 0.25;
    float k = smoothstep(n - 0.05, n + 0.05, p * 1.3 - 0.1);
    col = mix(A(uv), B(uv), k) + vec3(0.6) * smoothstep(0.5, 0.0, abs(k - 0.5)) * step(0.001, p) * step(p, 0.999);
  } else if (m == 8){ // glitch cut with rgb split and slice jitter
    float k = 1.0 - abs(p - 0.5) * 2.0; float sl = floor(uv.y * 24.0);
    float j = (hash12(vec2(sl, floor(uTime * 30.0))) - 0.5) * 0.12 * k * step(0.55, hash12(vec2(sl * 1.7, floor(uTime * 20.0))));
    vec2 u2 = uv + vec2(j, 0.0); float ca = 0.012 * k;
    vec3 a = vec3(A(u2 + vec2(ca, 0.)).r, A(u2).g, A(u2 - vec2(ca, 0.)).b);
    vec3 b = vec3(B(u2 + vec2(ca, 0.)).r, B(u2).g, B(u2 - vec2(ca, 0.)).b);
    col = p < 0.5 ? a : b;
  } else if (m == 9){ // light-led: brightest parts of B arrive first
    vec3 b = B(uv); float k = smoothstep(0.0, 1.0, p * 1.6 - (1.0 - clamp(lum(b), 0.0, 1.0)) * 0.6);
    col = mix(A(uv), b, k) + b * sin(p * 3.14159) * 0.6;
  } else if (m == 10){ // AT-field hex wipe: hexagonal cells flip outward from uC, each edge flaring orange as it turns
    vec2 q = (uv - uC) * vec2(uAspect, 1.0) * 9.0; const vec2 s = vec2(1.0, 1.7320508);
    vec4 c = floor(vec4(q, q - vec2(0.5, 1.0)) / s.xyxy) + 0.5;
    vec4 h = vec4(q - c.xy * s, q - (c.zw + 0.5) * s);
    vec4 hc = dot(h.xy, h.xy) < dot(h.zw, h.zw) ? vec4(h.xy, c.xy * s) : vec4(h.zw, (c.zw + 0.5) * s);
    vec2 a2 = abs(hc.xy); float e = 0.5 - max(dot(a2, vec2(0.5, 0.8660254)), a2.x);
    float d = length(hc.zw) / (9.0 * max(uAspect, 1.0)) + hash12(hc.zw) * 0.12;
    float k = clamp((p * 1.35 - d) / 0.18, 0.0, 1.0);          // this cell's flip progress
    float sc = abs(1.0 - 2.0 * k);                                // cell squashes to a line and back
    bool inside = e > (1.0 - sc) * 0.5;
    col = (k < 0.5 ? A(uv) : B(uv)) * (inside ? 1.0 : 0.0);
    float rim = smoothstep(0.06, 0.0, abs(e - (1.0 - sc) * 0.5)) * step(0.001, k) * step(k, 0.999);
    col += vec3(1.0, 0.42, 0.1) * rim * 3.0 + vec3(1.0, 0.7, 0.4) * exp(-pow(k - 0.5, 2.0) * 40.0) * 0.6 * step(0.001, k) * step(k, 0.999);
  } else col = mix(A(uv), B(uv), smoothstep(0.0, 1.0, p));
  gl_FragColor = vec4(col, 1.0);
}`;

export class Mixer {
  constructor() {
    this.mat = fsMat(FRAG, {
      tA: { value: null }, tB: { value: null }, uP: { value: 0 }, uMode: { value: 0 }, uAspect: { value: 1 },
      uTime: { value: 0 }, uAmt: { value: 1 }, uC: { value: new THREE.Vector2(0.5, 0.5) },
    });
  }
  set(a, b, p, mode, aspect, time, c = [0.5, 0.5], amt = 1) {
    const U = this.mat.uniforms;
    U.tA.value = a.texture; U.tB.value = b.texture; U.uP.value = p;
    U.uMode.value = typeof mode === 'number' ? mode : (MODES[mode] ?? 0);
    U.uAspect.value = aspect; U.uTime.value = time; U.uC.value.set(c[0], c[1]); U.uAmt.value = amt;
    return this.mat;
  }
}
