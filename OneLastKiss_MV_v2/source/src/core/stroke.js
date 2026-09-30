// Animated hand-drawn strokes: screen-space ribbons with per-stroke draw timing,
// pen-tip glow, tapering, pencil tooth and optional "line boil" (hand-animation jitter).
import * as THREE from 'three';
import { NOISE } from './glsl.js';

const VERT = `attribute vec3 aPrev, aNext; attribute float aSide, aS, aW, aSeed; attribute vec2 aTime; attribute vec3 aCol;
uniform vec2 uRes; uniform float uT, uWidth, uBoil, uBoilT, uTaper;
varying float vS, vSide, vLocal, vThin; varying vec3 vCol; ${NOISE}
void main(){
  vec4 c = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vec4 pp = projectionMatrix * modelViewMatrix * vec4(aPrev, 1.0);
  vec4 nn = projectionMatrix * modelViewMatrix * vec4(aNext, 1.0);
  vec2 asp = vec2(uRes.x / uRes.y, 1.0);
  vec2 sc = c.xy / c.w * asp, sp = pp.xy / pp.w * asp, sn = nn.xy / nn.w * asp;
  vec2 d1 = normalize(sc - sp + 1e-7), d2 = normalize(sn - sc + 1e-7);
  vec2 dir = normalize(d1 + d2 + 1e-7); vec2 nrm = vec2(-dir.y, dir.x);
  float miter = 1.0 / max(dot(nrm, vec2(-d1.y, d1.x)), 0.35);
  float local = clamp((uT - aTime.x) / max(aTime.y, 1e-4), 0.0, 1.0); local = local * local * (3.0 - 2.0 * local);
  float taper = mix(1.0, smoothstep(0.0, 0.06, aS) * smoothstep(1.0, 0.9, aS) * 0.8 + 0.2, uTaper);
  float w = aW * uWidth * taper / 1080.0;
  float minW = 1.1 / uRes.y;           // keep >= ~1.1px half-width, trade width for alpha
  vThin = clamp(w / minW, 0.0, 1.0); w = max(w, minW);
  vec2 off = nrm * w * aSide * miter;
  float fr = floor(uBoilT * 10.0);
  off += (vec2(vnoise(vec2(aS * 5.0 + aSeed * 17.0, fr)), vnoise(vec2(aS * 5.0 + aSeed * 29.0, fr + 50.0))) - 0.5) * uBoil / 540.0;
  c.xy += off / asp * c.w;
  gl_Position = c;
  vS = aS; vSide = aSide; vLocal = local; vCol = aCol;
}`;

const FRAG = `uniform float uAlpha, uTip, uMode, uGlow; varying float vS, vSide, vLocal, vThin; varying vec3 vCol; ${NOISE}
void main(){
  if (vS > vLocal || vLocal <= 0.0) discard;
  float edge = 1.0 - abs(vSide);
  float head = smoothstep(0.04, 0.0, vLocal - vS) * step(vLocal, 0.995);
  if (uMode < 0.5) { // glowing ink on dark (additive)
    float a = smoothstep(0.0, 0.5, edge) + pow(edge, 3.0) * uGlow;
    gl_FragColor = vec4(vCol * (a * uAlpha * vThin) * (1.0 + head * uTip), 1.0);
  } else { // pencil on paper (normal blend)
    float tooth = vnoise(gl_FragCoord.xy * 0.55) * 0.6 + vnoise(gl_FragCoord.xy * 1.7) * 0.4;
    float a = smoothstep(0.05, 0.6, edge) * smoothstep(0.18, 0.62, tooth + edge * 0.35);
    gl_FragColor = vec4(vCol, a * uAlpha * 0.92 * vThin);
  }
}`;

export class StrokeSet {
  constructor(opt = {}) {
    this.mode = opt.mode || 'glow';
    this.P = []; this.PR = []; this.NX = []; this.SD = []; this.S = []; this.W = []; this.SE = []; this.TM = []; this.CO = []; this.I = [];
    this.v = 0; this.count = 0;
  }
  /** pts: [[x,y,z?],...]; o: {start, dur, width, color:[r,g,b] | (s)=>[r,g,b], closed, pressure:(s)=>k} */
  add(pts, o = {}) {
    let p = pts.map((q) => [q[0], q[1], q[2] || 0]);
    if (p.length < 2) return this;
    if (o.closed) p.push(p[0]);
    const n = p.length, L = [0];
    for (let i = 1; i < n; i++) L.push(L[i - 1] + Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1], p[i][2] - p[i - 1][2]));
    const tot = L[n - 1] || 1, seed = o.seed ?? this.count * 0.618;
    const ext = (a, b) => [2 * a[0] - b[0], 2 * a[1] - b[1], 2 * a[2] - b[2]];
    for (let i = 0; i < n; i++) {
      const pr = i > 0 ? p[i - 1] : o.closed ? p[n - 2] : ext(p[0], p[1]);
      const nx = i < n - 1 ? p[i + 1] : o.closed ? p[1] : ext(p[n - 1], p[n - 2]);
      const s = L[i] / tot;
      const col = typeof o.color === 'function' ? o.color(s) : o.color || [1, 0.8, 0.5];
      const w = (o.width || 2) * (o.pressure ? o.pressure(s) : 1);
      for (const side of [-1, 1]) {
        this.P.push(...p[i]); this.PR.push(...pr); this.NX.push(...nx);
        this.SD.push(side); this.S.push(s); this.W.push(w); this.SE.push(seed);
        this.TM.push(o.start || 0, o.dur || 1); this.CO.push(...col);
      }
    }
    const b = this.v;
    for (let i = 0; i < n - 1; i++) {
      const k = b + i * 2;
      this.I.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
    }
    this.v += n * 2; this.count++;
    return this;
  }
  build(uniforms = {}) {
    const g = new THREE.BufferGeometry();
    const f = (a, s) => new THREE.Float32BufferAttribute(a, s);
    g.setAttribute('position', f(this.P, 3)); g.setAttribute('aPrev', f(this.PR, 3)); g.setAttribute('aNext', f(this.NX, 3));
    g.setAttribute('aSide', f(this.SD, 1)); g.setAttribute('aS', f(this.S, 1)); g.setAttribute('aW', f(this.W, 1));
    g.setAttribute('aSeed', f(this.SE, 1)); g.setAttribute('aTime', f(this.TM, 2)); g.setAttribute('aCol', f(this.CO, 3));
    g.setIndex(this.I);
    const paper = this.mode === 'paper';
    this.uniforms = {
      uRes: { value: new THREE.Vector2(1920, 1080) }, uT: { value: 0 }, uWidth: { value: 1 }, uBoil: { value: 0 }, uBoilT: { value: 0 },
      uTaper: { value: 1 }, uAlpha: { value: 1 }, uTip: { value: 3 }, uMode: { value: paper ? 1 : 0 }, uGlow: { value: 0.6 }, ...uniforms,
    };
    const m = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, uniforms: this.uniforms, transparent: true, depthWrite: false, depthTest: false,
      side: THREE.DoubleSide, blending: paper ? THREE.NormalBlending : THREE.AdditiveBlending,
    });
    this.mesh = new THREE.Mesh(g, m);
    this.mesh.frustumCulled = false;
    return this.mesh;
  }
  set(t, res) { this.uniforms.uT.value = t; if (res) this.uniforms.uRes.value.copy(res); }
}

// ---- shape helpers (return point arrays) ----
export const circlePts = (cx, cy, r, n = 64, a0 = 0, a1 = Math.PI * 2, z = 0) =>
  Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * (i / n); return [cx + Math.cos(a) * r, cy + Math.sin(a) * r, z]; });
export function wobble(pts, amt, seed = 1) {
  return pts.map((p, i) => [p[0] + Math.sin(i * 0.37 + seed * 3.1) * amt + Math.sin(i * 1.3 + seed) * amt * 0.4, p[1] + Math.cos(i * 0.29 + seed * 1.7) * amt, p[2] || 0]);
}
