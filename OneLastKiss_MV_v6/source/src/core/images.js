// Generated artwork (assets/images.js -> window.OLK_IMG, data: URIs so WebGL accepts them from file://)
// + reusable materials that bring still images to life:
//   plateMat  : full-screen 2.5D depth-parallax plate with dolly, focus blur and per-scene GLSL hooks
//   cutMat    : character cut-out with wind sway, rim light and dissolve
import * as THREE from 'three';
import { NOISE } from './glsl.js';

/** decode every image once; returns { name: { tex, img, w, h } } (empty object if images.js is missing) */
export async function loadImages() {
  const D = window.OLK_IMG || {}, out = {};
  await Promise.all(Object.entries(D).map(async ([k, v]) => {
    const img = new Image();
    img.src = v.src;
    try { await img.decode(); } catch (e) { console.warn('image decode failed', k); return; }
    const t = new THREE.Texture(img);
    const lin = k.endsWith('_d');
    t.colorSpace = lin ? THREE.NoColorSpace : THREE.SRGBColorSpace;
    t.anisotropy = 4;
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    t.needsUpdate = true;
    out[k] = { tex: t, img, w: v.w, h: v.h };
  }));
  return out;
}

/** read pixels of a decoded image (for particle sampling) */
export function pixels(entry, w, h) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d', { willReadFrequently: true });
  g.drawImage(entry.img, 0, 0, w, h);
  return g.getImageData(0, 0, w, h).data;
}

const PLATE_VERT = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }`;

/**
 * Depth-parallax plate. Camera is expressed in image space:
 *   uCam = (panX, panY, zoom)   uPar = parallax strength (uv units per unit depth offset)
 *   uDolly = extra magnification of near pixels (push-in feeling)   uFocus/uBlur = depth of field
 * opt.warp : GLSL body of `vec2 warp(vec2 uv, float d)`   (runs before colour lookup; e.g. water ripples)
 * opt.hook : GLSL body of `vec3 hook(vec3 col, vec2 uv, float d, vec2 suv)` (colour grading, animated light...)
 * opt.head : extra uniforms / functions
 */
export function plateMat(img, dep, opt = {}) {
  const uniforms = {
    uImg: { value: img.tex }, uDep: { value: dep ? dep.tex : null }, uHasDep: { value: dep ? 1 : 0 },
    uAspect: { value: 16 / 9 }, uImgAspect: { value: img.w / img.h },
    uCam: { value: new THREE.Vector3(0, 0, 1) }, uPar: { value: new THREE.Vector2(0, 0) }, uDolly: { value: 0 },
    uFocus: { value: 0.5 }, uBlur: { value: 0 }, uT: { value: 0 }, uGain: { value: 1 }, uTint: { value: new THREE.Vector3(1, 1, 1) },
    uAlpha: { value: 1 },
    ...(opt.uniforms || {}),
  };
  const frag = /* glsl */ `
uniform sampler2D uImg, uDep; uniform float uHasDep, uAspect, uImgAspect, uDolly, uFocus, uBlur, uT, uGain, uAlpha;
uniform vec3 uCam, uTint; uniform vec2 uPar; varying vec2 vUv;
${NOISE}
${opt.head || ''}
vec2 warp(vec2 uv, float d){ ${opt.warp || 'return uv;'} }
vec3 hook(vec3 col, vec2 uv, float d, vec2 suv){ ${opt.hook || 'return col;'} }
float dep(vec2 uv){ return uHasDep > 0.5 ? texture2D(uDep, uv).r : 0.5; }
void main(){
  // cover-fit screen -> image uv, then camera pan/zoom
  vec2 s = vUv - 0.5;
  float ra = uAspect / uImgAspect;
  vec2 sc = ra > 1.0 ? vec2(1.0, 1.0 / ra) : vec2(ra, 1.0);
  vec2 base = 0.5 + s * sc / uCam.z + uCam.xy;
  // fixed-point parallax: near pixels (d->1) shift against the camera move, and grow with dolly
  vec2 uv = base; float d = 0.5;
  for (int i = 0; i < 6; i++) {
    d = dep(uv);
    uv = base - uPar * (d - 0.5);
    uv = 0.5 + uCam.xy + (uv - 0.5 - uCam.xy) / (1.0 + uDolly * d);
  }
  uv = warp(uv, d);
  // depth of field through mip bias + 6 tap rotated disc
  float coc = uBlur * abs(d - uFocus);
  vec3 col;
  if (coc < 0.02) col = texture2D(uImg, uv).rgb;
  else {
    float lod = log2(1.0 + coc * 7.0); vec2 r = vec2(coc * 0.006, coc * 0.006 * uImgAspect);
    col = texture2D(uImg, uv, lod).rgb * 0.25;
    for (int k = 0; k < 6; k++) { float a = float(k) * 1.0472 + hash12(vUv * 91.0) * 1.0; col += texture2D(uImg, uv + vec2(cos(a), sin(a)) * r, lod).rgb * 0.125; }
  }
  col = hook(col * uGain * uTint, uv, d, vUv);
  gl_FragColor = vec4(col, uAlpha);
}`;
  return new THREE.ShaderMaterial({
    vertexShader: PLATE_VERT, fragmentShader: frag, uniforms,
    depthWrite: false, depthTest: false, transparent: !!opt.blend, blending: opt.blend || THREE.NormalBlending,
  });
}

/**
 * image uv (v up) at depth d on a plateMat -> ortho-scene world [x, y, worldUnitsPerImageV]
 * (inverse of the plate's cover-fit + pan/zoom + parallax + dolly, so cut-outs stick to the plate)
 */
export function plateToWorld(M, aspect, u, v, d) {
  const U = M.uniforms, c = U.uCam.value, p = U.uPar.value, dl = U.uDolly.value;
  const ra = aspect / U.uImgAspect.value, sx = ra > 1 ? 1 : ra, sy = ra > 1 ? 1 / ra : 1, k = 1 + dl * d;
  const bx = 0.5 + c.x + (u - 0.5 - c.x) * k + p.x * (d - 0.5), by = 0.5 + c.y + (v - 0.5 - c.y) * k + p.y * (d - 0.5);
  return [(bx - 0.5 - c.x) * c.z / sx * 2 * aspect, (by - 0.5 - c.y) * c.z / sy * 2, k * c.z / sy * 2];
}

/** full-screen plate mesh (drawn first in a 3D scene unless order is given) */
export function plateMesh(mat, order = -100) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  m.frustumCulled = false; m.renderOrder = order;
  return m;
}

/**
 * Cut-out character material (quad with its own aspect). Wind moves hair (top) and hem (bottom) sideways,
 * uRim adds a back-light rim from the alpha edge, uDis dissolves into glowing dust (0..1).
 */
export function cutMat(entry, opt = {}) {
  const uniforms = {
    uTex: { value: entry.tex }, uT: { value: 0 }, uWind: { value: opt.wind ?? 1 }, uAlpha: { value: 1 },
    uRim: { value: new THREE.Vector4(1, 0.8, 0.55, opt.rim ?? 0.6) }, uTint: { value: new THREE.Vector3(1, 1, 1) },
    uDis: { value: 0 }, uTexel: { value: new THREE.Vector2(1 / entry.w, 1 / entry.h) }, uSeed: { value: opt.seed ?? 0 },
    // waterline: x = cut height (quad v), y = ripple amp, z = reflection fade length, w = 1 for the mirrored copy
    uClip: { value: new THREE.Vector4(-1, 0, 1, 0) },
  };
  const vert = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
  const frag = /* glsl */ `
uniform sampler2D uTex; uniform float uT, uWind, uAlpha, uDis, uSeed; uniform vec4 uRim; uniform vec3 uTint; uniform vec2 uTexel; uniform vec4 uClip;
varying vec2 vUv; ${NOISE}
void main(){
  vec2 uv = vUv;
  float wl = uClip.x + uClip.y * (sin(uv.x * 40.0 + uT * 2.1 + uSeed) * 0.6 + sin(uv.x * 83.0 - uT * 3.3) * 0.4);
  if (uClip.w > 0.5) uv.x += (vnoise(vec2(uv.y * 60.0 - uT * 2.0, uT * 0.5 + uSeed)) - 0.5) * 0.03 * smoothstep(wl, wl + 0.05, uv.y);
  float hair = smoothstep(0.62, 0.9, uv.y), hem = smoothstep(0.52, 0.28, uv.y) * smoothstep(0.08, 0.3, uv.y);
  float w = sin(uT * 2.3 + uv.y * 9.0 + uSeed) * 0.6 + sin(uT * 3.7 + uv.y * 17.0 + uSeed * 2.0) * 0.4;
  uv.x += uWind * w * (hair * 0.012 + hem * 0.008) * (0.6 + 0.4 * vnoise(vec2(uT * 0.7, uv.y * 3.0)));
  vec4 c = texture2D(uTex, uv);
  // rim: alpha gradient toward the light side
  float aL = texture2D(uTex, uv + vec2(-6.0, 3.0) * uTexel).a, aR = texture2D(uTex, uv + vec2(6.0, 3.0) * uTexel).a;
  float edge = clamp(c.a - min(aL, aR), 0.0, 1.0);
  vec3 col = c.rgb * uTint + uRim.rgb * edge * uRim.a * 2.0;
  float a = c.a;
  if (uDis > 0.0) {
    float n = fbm(uv * vec2(9.0, 14.0) + uSeed) * 0.8 + (1.0 - uv.y) * 0.3;
    float th = uDis * 1.25;
    col += vec3(1.6, 0.9, 0.5) * smoothstep(th + 0.1, th, n) * step(th, n) * 3.0 * step(0.001, uDis);
    a *= smoothstep(th - 0.02, th + 0.02, n);
  }
  if (uClip.x > -0.5) a *= uClip.w > 0.5 ? smoothstep(wl, wl + 0.01, uv.y) * exp(-(uv.y - wl) / uClip.z) : smoothstep(wl - 0.004, wl + 0.004, uv.y);
  a *= uAlpha;
  if (a < 0.003) discard;
  gl_FragColor = vec4(col, a);
}`;
  return new THREE.ShaderMaterial({ vertexShader: vert, fragmentShader: frag, uniforms, transparent: true, depthWrite: false });
}

/** quad geometry of height h with the image's aspect, pivot at the feet (bottom centre) */
export function cutGeo(entry, h = 1) {
  const g = new THREE.PlaneGeometry(h * entry.w / entry.h, h);
  g.translate(0, h / 2, 0);
  return g;
}
