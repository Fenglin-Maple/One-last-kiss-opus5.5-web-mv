// HDR post chain: scene -> (transition mix) -> bloom mip chain -> filmic composite.
import * as THREE from 'three';
import { FS_VERT, NOISE } from './glsl.js';

export const makeRT = (w, h, depth = true) => new THREE.WebGLRenderTarget(w, h, {
  type: THREE.HalfFloatType, format: THREE.RGBAFormat, depthBuffer: depth,
  minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false,
});
export const fsMat = (frag, uniforms, extra = {}) => new THREE.ShaderMaterial({
  vertexShader: FS_VERT, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false, ...extra,
});

export class FSPass {
  constructor(r) {
    this.r = r;
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.scene = new THREE.Scene();
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
    this.mesh.frustumCulled = false;
    this.scene.add(this.mesh);
  }
  run(mat, target, clear = true) {
    this.mesh.material = mat;
    this.r.setRenderTarget(target);
    if (clear) this.r.clear();
    this.r.render(this.scene, this.cam);
  }
}

const TAP4 = `vec3 tap4(sampler2D t, vec2 uv, vec2 o){ return (texture2D(t, uv+o*vec2(-1.,-1.)).rgb + texture2D(t, uv+o*vec2(1.,-1.)).rgb + texture2D(t, uv+o*vec2(-1.,1.)).rgb + texture2D(t, uv+o*vec2(1.,1.)).rgb) * 0.25; }`;
const PRE = `uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThr, uKnee; varying vec2 vUv; ${TAP4}
void main(){ vec3 c = tap4(tSrc, vUv, uTexel); float br = max(c.r, max(c.g, c.b));
  float s = clamp(br - uThr + uKnee, 0.0, 2.0 * uKnee); s = s * s / (4.0 * uKnee + 1e-4);
  gl_FragColor = vec4(min(c * max(s, br - uThr) / max(br, 1e-4), vec3(60.0)), 1.0); }`;
const DOWN = `uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv; ${TAP4}
void main(){ gl_FragColor = vec4(texture2D(tSrc, vUv).rgb * 0.5 + tap4(tSrc, vUv, uTexel) * 0.5, 1.0); }`;
const UP = `uniform sampler2D tSrc, tAdd; uniform vec2 uTexel; varying vec2 vUv; ${TAP4}
void main(){ vec2 o = uTexel; vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
  c += (texture2D(tSrc, vUv + vec2(o.x, 0.)).rgb + texture2D(tSrc, vUv - vec2(o.x, 0.)).rgb + texture2D(tSrc, vUv + vec2(0., o.y)).rgb + texture2D(tSrc, vUv - vec2(0., o.y)).rgb) * 2.0;
  c += tap4(tSrc, vUv, o) * 4.0;
  gl_FragColor = vec4(c / 16.0 + texture2D(tAdd, vUv).rgb, 1.0); }`;

const FINAL = `uniform sampler2D tScene, tBloom; uniform vec2 uRes; uniform float uTime;
uniform float uExposure, uBloom, uSat, uContrast, uVig, uGrain, uCA, uLetter, uFlicker, uFadeB, uFadeW, uLeak, uScratch, uWeave, uTone, uShake, uPunch, uGlitch, uInvert, uScan, uRgb;
uniform vec3 uTint, uLift; varying vec2 vUv; ${NOISE}
vec3 aces(vec3 x){ return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
void main(){
  float fr = floor(uTime * 24.0);
  vec2 uv = vUv + uWeave * (vec2(hash12(vec2(fr, 1.3)), hash12(vec2(fr, 7.1))) - 0.5) * 0.004;
  // beat punch-in + camera shake (per 60fps frame noise)
  float f6 = floor(uTime * 60.0);
  uv = 0.5 + (uv - 0.5) / (1.0 + uPunch * 0.06) + uShake * 0.012 * (vec2(hash12(vec2(f6, 2.1)), hash12(vec2(f6, 8.3))) - 0.5);
  // glitch: horizontal slices jump sideways
  if (uGlitch > 0.001) {
    float sl = floor(uv.y * 38.0 + hash12(vec2(f6, 4.0)) * 5.0);
    float on = step(1.0 - uGlitch * 0.45, hash12(vec2(sl, f6)));
    uv.x += on * (hash12(vec2(sl, f6 + 1.0)) - 0.5) * 0.12 * uGlitch;
  }
  vec2 d = uv - 0.5; float r2 = dot(d, d);
  vec2 off = d * r2 * uCA * 0.05 + vec2(uRgb * 0.006, 0.0);
  vec3 col = vec3(texture2D(tScene, uv + off).r, texture2D(tScene, uv).g, texture2D(tScene, uv - off).b);
  col += texture2D(tBloom, uv).rgb * uBloom;
  if (uLeak > 0.001) {
    float lk = fbm(vec2(uv.x * 1.3 + uTime * 0.07, uv.y * 0.7 - uTime * 0.04));
    col += vec3(1.0, 0.42, 0.14) * smoothstep(0.5, 0.95, lk) * (0.35 + 0.65 * smoothstep(0.7, 0.0, uv.x)) * uLeak;
    col += vec3(0.9, 0.3, 0.5) * smoothstep(0.6, 1.0, fbm(uv * 1.1 - uTime * 0.05 + 9.0)) * smoothstep(0.3, 1.0, uv.x) * uLeak * 0.6;
  }
  col *= uExposure * (1.0 - uFlicker * 0.35 * hash12(vec2(fr, 3.0))) * uTint;
  col = mix(aces(col), clamp(col, 0.0, 1.0), uTone);
  col = pow(col, vec3(1.0 / 2.2));
  float l = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(l), col, uSat);
  col = clamp((col - 0.5) * uContrast + 0.5, 0.0, 1.0);
  col += uLift * (1.0 - col);
  col = mix(col, 1.0 - col, uInvert);
  if (uScan > 0.001) col *= 1.0 - uScan * 0.22 * (0.5 + 0.5 * sin(vUv.y * uRes.y * 1.57));
  if (uScratch > 0.001) {
    float sx = hash12(vec2(fr, 11.0));
    col = mix(col, vec3(0.92, 0.86, 0.74), smoothstep(0.0016, 0.0, abs(uv.x - sx)) * step(0.55, hash12(vec2(fr, 5.0))) * uScratch * 0.45);
    float dn = hash12(floor(uv * vec2(uRes.x / uRes.y, 1.0) * 160.0) + fr * 1.7);
    col *= 1.0 - step(0.9986, dn) * uScratch * 0.85;
  }
  col *= mix(1.0, smoothstep(1.1, 0.2, length(d * vec2(1.0, 0.8)) * 1.3), uVig);
  float g = hash12(floor(uv * uRes / 1.5) + fract(uTime * 7.13) * 91.0) - 0.5;
  col += g * uGrain * (0.3 + 0.7 * (1.0 - abs(l - 0.5) * 2.0));
  col = mix(col, vec3(0.0), uFadeB);
  col = mix(col, vec3(1.0), uFadeW);
  float lb = uLetter * 0.5;
  col *= smoothstep(lb - 0.001, lb + 0.001, vUv.y) * smoothstep(1.0 - lb + 0.001, 1.0 - lb - 0.001, vUv.y);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;

export const DEFAULT_POST = {
  exposure: 1, bloom: 0.9, bloomThr: 0.8, sat: 1, contrast: 1.02, vig: 0.55, grain: 0.06, ca: 0.6,
  letter: 0, flicker: 0, fadeB: 0, fadeW: 0, leak: 0, scratch: 0, weave: 0, tone: 0,
  tint: [1, 1, 1], lift: [0, 0, 0], dust: 0.3, dustCol: [1, 0.85, 0.65],
  shake: 0, punch: 0, glitch: 0, invert: 0, scan: 0, rgb: 0,
};

export class Post {
  constructor(renderer) {
    this.r = renderer;
    this.fs = new FSPass(renderer);
    this.levels = 6;
    const u = () => ({ tSrc: { value: null }, uTexel: { value: new THREE.Vector2() } });
    this.pre = fsMat(PRE, { ...u(), uThr: { value: 0.8 }, uKnee: { value: 0.5 } });
    this.down = fsMat(DOWN, u());
    this.up = fsMat(UP, { ...u(), tAdd: { value: null } });
    const U = { tScene: { value: null }, tBloom: { value: null }, uRes: { value: new THREE.Vector2() }, uTime: { value: 0 } };
    for (const k of ['Exposure', 'Bloom', 'Sat', 'Contrast', 'Vig', 'Grain', 'CA', 'Letter', 'Flicker', 'FadeB', 'FadeW', 'Leak', 'Scratch', 'Weave', 'Tone', 'Shake', 'Punch', 'Glitch', 'Invert', 'Scan', 'Rgb']) U['u' + k] = { value: 0 };
    U.uTint = { value: new THREE.Vector3(1, 1, 1) };
    U.uLift = { value: new THREE.Vector3() };
    this.final = fsMat(FINAL, U);
    this.A = null;
  }
  resize(w, h) {
    [this.A, this.B, this.M, ...(this.dn || []), ...(this.upT || [])].forEach((t) => t && t.dispose());
    this.w = w; this.h = h;
    this.A = makeRT(w, h); this.B = makeRT(w, h); this.M = makeRT(w, h);
    this.dn = []; this.upT = [];
    let bw = w >> 1, bh = h >> 1;
    for (let i = 0; i < this.levels; i++) {
      this.dn.push(makeRT(Math.max(bw, 2), Math.max(bh, 2), false));
      this.upT.push(makeRT(Math.max(bw, 2), Math.max(bh, 2), false));
      bw >>= 1; bh >>= 1;
    }
  }
  bloom(src, thr) {
    const { pre, down, up, dn, upT, fs } = this;
    pre.uniforms.tSrc.value = src.texture; pre.uniforms.uThr.value = thr;
    pre.uniforms.uTexel.value.set(1 / src.width, 1 / src.height);
    fs.run(pre, dn[0]);
    for (let i = 1; i < dn.length; i++) {
      down.uniforms.tSrc.value = dn[i - 1].texture;
      down.uniforms.uTexel.value.set(1 / dn[i - 1].width, 1 / dn[i - 1].height);
      fs.run(down, dn[i]);
    }
    let prev = dn[dn.length - 1];
    for (let i = dn.length - 2; i >= 0; i--) {
      up.uniforms.tSrc.value = prev.texture; up.uniforms.tAdd.value = dn[i].texture;
      up.uniforms.uTexel.value.set(1 / prev.width, 1 / prev.height);
      fs.run(up, upT[i]);
      prev = upT[i];
    }
    return prev;
  }
  composite(src, p, time, outW, outH) {
    const bl = this.bloom(src, p.bloomThr);
    const U = this.final.uniforms;
    U.tScene.value = src.texture; U.tBloom.value = bl.texture;
    U.uRes.value.set(outW, outH); U.uTime.value = time;
    const map = { Exposure: 'exposure', Bloom: 'bloom', Sat: 'sat', Contrast: 'contrast', Vig: 'vig', Grain: 'grain', CA: 'ca', Letter: 'letter', Flicker: 'flicker', FadeB: 'fadeB', FadeW: 'fadeW', Leak: 'leak', Scratch: 'scratch', Weave: 'weave', Tone: 'tone', Shake: 'shake', Punch: 'punch', Glitch: 'glitch', Invert: 'invert', Scan: 'scan', Rgb: 'rgb' };
    for (const k in map) U['u' + k].value = p[map[k]];
    // letter = 0..1 amount of 2.39:1 cinemascope bars relative to current aspect
    U.uLetter.value = p.letter * Math.max(0, 1 - (outW / outH) / 2.39);
    U.uTint.value.fromArray(p.tint); U.uLift.value.fromArray(p.lift);
    this.fs.run(this.final, null);
  }
}
