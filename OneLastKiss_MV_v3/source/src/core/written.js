// "Handwritten" text: script text revealed along x with a glowing pen tip that
// follows the ink's centre line (per-column centroid of the rendered glyphs).
import * as THREE from 'three';
import { textCanvas, tex, glowTex, FONTS } from './textures.js';

const VERT = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const FRAG = `uniform sampler2D tMap; uniform float uReveal, uAlpha, uSoft, uMode, uHot; uniform vec3 uCol; varying vec2 vUv;
void main(){
  float a = texture2D(tMap, vUv).a;
  float r = smoothstep(uReveal + 0.002, uReveal - uSoft, vUv.x);
  float hot = smoothstep(uSoft * 3.0, 0.0, uReveal - vUv.x) * step(vUv.x, uReveal) * step(uReveal, 0.999);
  if (uMode < 0.5) gl_FragColor = vec4(uCol * (1.0 + hot * uHot) * a * r * uAlpha, 1.0);
  else gl_FragColor = vec4(uCol * (1.0 - hot * 0.25), a * r * uAlpha);
}`;

let GLOW = null;

export class WrittenText {
  /** o: {font, size, height (world), color:[lin rgb], paper:bool, soft} */
  constructor(str, o = {}) {
    const { c, w, h } = textCanvas(str, { font: o.font || FONTS.script, size: o.size || 220, color: '#fff', pad: 60 });
    this.aspect = w / h;
    this.H = o.height || 0.6; this.W = this.H * this.aspect;
    this.cy = centroids(c, 160);
    this.u = {
      tMap: { value: tex(c) }, uReveal: { value: 0 }, uAlpha: { value: 1 }, uSoft: { value: o.soft ?? 0.025 },
      uMode: { value: o.paper ? 1 : 0 }, uHot: { value: o.hot ?? 3 }, uCol: { value: new THREE.Vector3(...(o.color || [1, 0.7, 0.35])) },
    };
    const m = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, uniforms: this.u, transparent: true, depthWrite: false, depthTest: false,
      blending: o.paper ? THREE.NormalBlending : THREE.AdditiveBlending,
    });
    this.group = new THREE.Group();
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(this.W, this.H), m);
    this.group.add(this.mesh);
    GLOW = GLOW || glowTex(128);
    this.tipMat = new THREE.MeshBasicMaterial({ map: GLOW, color: new THREE.Color(...(o.tipColor || [3, 2.2, 1.2])), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false });
    this.tip = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.tipMat);
    this.tip.scale.setScalar(this.H * 0.5);
    this.group.add(this.tip);
  }
  /** p: reveal progress 0..1, alpha, tipAmt */
  set(p, alpha = 1, tipAmt = 1) {
    this.u.uReveal.value = p; this.u.uAlpha.value = alpha;
    const n = this.cy.length, x = Math.min(n - 1, Math.max(0, p * (n - 1))), i = Math.floor(x), f = x - i;
    const cy = this.cy[i] * (1 - f) + this.cy[Math.min(n - 1, i + 1)] * f;
    this.tip.position.set((p - 0.5) * this.W, (0.5 - cy) * this.H, 0.01);
    const on = p > 0.002 && p < 0.998 ? 1 : 0;
    this.tipMat.opacity = on * alpha * tipAmt * (0.75 + 0.25 * Math.sin(p * 90));
    this.tip.visible = this.tipMat.opacity > 0.01;
  }
}

function centroids(c, n) {
  const g = c.getContext('2d'), { width: w, height: h } = c, d = g.getImageData(0, 0, w, h).data, out = new Float32Array(n);
  let last = 0.5;
  for (let k = 0; k < n; k++) {
    const x0 = Math.floor((k / n) * w), x1 = Math.max(x0 + 1, Math.floor(((k + 1) / n) * w));
    let sy = 0, sa = 0;
    for (let x = x0; x < x1; x++) for (let y = 0; y < h; y += 2) { const a = d[(y * w + x) * 4 + 3]; sy += a * y; sa += a; }
    last = sa > 0 ? sy / sa / h : last;
    out[k] = last;
  }
  for (let k = 1; k < n - 1; k++) out[k] = (out[k - 1] + out[k] * 2 + out[k + 1]) / 4;
  return out;
}
