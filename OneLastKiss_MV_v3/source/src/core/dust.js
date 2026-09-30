// Global floating dust / light motes, drawn additively over the scene (before bloom).
import * as THREE from 'three';
import { POINT_FRAG } from './glsl.js';
import { rng } from './util.js';

const VERT = `attribute vec3 aSeed; uniform float uT, uAmt, uAspect, uH; uniform vec3 uCol, uWind;
varying vec3 vCol; varying float vA;
void main(){
  vec3 s = aSeed;
  vec3 p = fract(s + uWind * uT * (0.4 + s.z) + vec3(sin(uT * 0.31 + s.x * 20.0), sin(uT * 0.23 + s.y * 17.0), 0.0) * 0.012);
  float depth = 0.6 + p.z * 6.0, k = 0.47 * 1.1;
  vec3 pos = vec3((p.x - 0.5) * 2.0 * uAspect * k * depth, (p.y - 0.5) * 2.0 * k * depth, -depth);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  float focus = abs(depth - 2.2);
  gl_PointSize = (3.0 + focus * 9.0) / depth * uH / 1080.0 * (0.6 + s.x);
  float tw = 0.5 + 0.5 * sin(uT * (0.8 + s.x * 2.5) + s.y * 40.0);
  vA = uAmt * (0.2 + 0.8 * tw) / (1.0 + focus * focus * 1.5) * smoothstep(0.0, 0.05, p.y) * smoothstep(1.0, 0.95, p.y);
  vCol = uCol * (0.6 + 0.4 * s.y);
}`;

export class Dust {
  constructor(n = 1400) {
    const R = rng(99), a = new Float32Array(n * 3);
    for (let i = 0; i < a.length; i++) a[i] = R();
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    g.setAttribute('aSeed', new THREE.BufferAttribute(a, 3));
    this.u = {
      uT: { value: 0 }, uAmt: { value: 0 }, uAspect: { value: 1.78 }, uH: { value: 1080 },
      uCol: { value: new THREE.Vector3(1.0, 0.85, 0.65) }, uWind: { value: new THREE.Vector3(0.004, 0.009, 0) },
    };
    const m = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: POINT_FRAG, uniforms: this.u, transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending });
    this.pts = new THREE.Points(g, m);
    this.pts.frustumCulled = false;
    this.scene = new THREE.Scene();
    this.scene.add(this.pts);
    this.cam = new THREE.PerspectiveCamera(50, 1.78, 0.1, 50);
  }
  render(r, target, t, amt, w, h, col) {
    if (amt < 0.005) return;
    const u = this.u;
    u.uT.value = t; u.uAmt.value = amt; u.uAspect.value = w / h; u.uH.value = h;
    if (col) u.uCol.value.fromArray(col);
    r.setRenderTarget(target);
    r.render(this.scene, this.cam);
  }
}
