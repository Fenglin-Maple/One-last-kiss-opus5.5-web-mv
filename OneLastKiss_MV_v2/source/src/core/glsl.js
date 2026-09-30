// Shared GLSL snippets.
export const NOISE = /* glsl */ `
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float hash13(vec3 p3){ p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i+vec2(1,0)), u.x), mix(hash12(i+vec2(0,1)), hash12(i+vec2(1,1)), u.x), u.y); }
float vnoise3(vec3 p){ vec3 i = floor(p), f = fract(p); vec3 u = f*f*(3.0-2.0*f);
  float a = mix(mix(hash13(i), hash13(i+vec3(1,0,0)), u.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), u.x), u.y);
  float b = mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), u.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), u.x), u.y);
  return mix(a, b, u.z); }
float fbm(vec2 p){ float s = 0.0, a = 0.5; mat2 m = mat2(1.6, 1.2, -1.2, 1.6); for(int i=0;i<5;i++){ s += a*vnoise(p); p = m*p; a *= 0.5; } return s; }
float fbm3(vec3 p){ float s = 0.0, a = 0.5; for(int i=0;i<4;i++){ s += a*vnoise3(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
vec3 curl3(vec3 p){ return vec3(vnoise3(p+vec3(0.,13.,7.)), vnoise3(p+vec3(31.,5.,19.)), vnoise3(p+vec3(3.,41.,23.)))*2.0-1.0; }
`;

// Rainbow colored-pencil palette sampled from the single's cover (sRGB -> linear).
export const PALETTE = /* glsl */ `
vec3 srgb2lin(vec3 c){ return pow(c, vec3(2.2)); }
vec3 pencil(float x){
  x = clamp(x, 0.0, 1.0) * 5.0;
  vec3 c0 = vec3(0.96,0.56,0.32), c1 = vec3(0.93,0.42,0.40), c2 = vec3(0.86,0.36,0.58),
       c3 = vec3(0.62,0.40,0.80), c4 = vec3(0.36,0.52,0.88), c5 = vec3(0.40,0.78,0.86);
  vec3 c = x < 1.0 ? mix(c0,c1,x) : x < 2.0 ? mix(c1,c2,x-1.0) : x < 3.0 ? mix(c2,c3,x-2.0) : x < 4.0 ? mix(c3,c4,x-3.0) : mix(c4,c5,x-4.0);
  return srgb2lin(c);
}
`;

export const FS_VERT = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

// soft round sprite for gl_Points
export const POINT_FRAG = /* glsl */ `
varying vec3 vCol; varying float vA;
void main(){
  vec2 d = gl_PointCoord - 0.5; float r = dot(d, d) * 4.0;
  float a = exp(-r * 4.0) + 0.35 * exp(-r * 16.0);
  if (a * vA < 0.002) discard;
  gl_FragColor = vec4(vCol * a * vA, 1.0);
}
`;
