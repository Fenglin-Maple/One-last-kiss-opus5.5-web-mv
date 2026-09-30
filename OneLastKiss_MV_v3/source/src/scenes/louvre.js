// S1 Louvre 20.45 -> 25.1: the glass pyramid at night, drawn in cold light over wet stone.
// "My first Louvre was nothing special" - beautiful, but cold and distant.
import * as THREE from 'three';
import { Scene, bgQuad, addMat } from './base.js';
import { NOISE } from '../core/glsl.js';
import { StrokeSet } from '../core/stroke.js';
import { audio } from '../core/audio.js';
import { lerp, range, ease, rng } from '../core/util.js';

const SKY = `uniform float uT, uAspect, uHz; varying vec2 vUv; ${NOISE}
void main(){
  vec2 q = vUv; float hz = uHz;
  vec3 top = vec3(0.001, 0.002, 0.012), mid = vec3(0.007, 0.009, 0.036), low = vec3(0.07, 0.05, 0.14);
  vec3 col = q.y > hz ? mix(mid, top, smoothstep(hz, 1.0, q.y)) : mix(vec3(0.004, 0.005, 0.018), low * 0.3, smoothstep(0.0, hz, q.y));
  col += low * exp(-abs(q.y - hz) * 22.0) * 0.55;
  vec2 g = q * vec2(uAspect, 1.0) * 150.0; vec2 id = floor(g); float h = hash12(id);
  float st = step(0.986, h) * smoothstep(0.4, 0.0, length(fract(g) - 0.5)) * (0.55 + 0.45 * sin(uT * (1.0 + h * 3.0) + h * 50.0));
  col += vec3(0.75, 0.82, 1.0) * st * smoothstep(hz + 0.04, hz + 0.3, q.y) * 1.3;
  if (q.y < hz) {
    float rip = fbm(vec2(q.x * 2.5 * uAspect, (hz - q.y) * 60.0 / (0.2 + hz - q.y) - uT * 0.6));
    col += vec3(0.025, 0.028, 0.07) * rip * smoothstep(0.0, hz, q.y) * 1.4;
  }
  gl_FragColor = vec4(col, 1.0);
}`;

const T0 = 20.3;

function build(S) {
  const B = 1.0, H = 1.24, N = 9, A = [0, H, 0];
  const C = [[-B, 0, -B], [B, 0, -B], [B, 0, B], [-B, 0, B]];
  const edge = [0.9, 0.95, 1.25];
  for (let i = 0; i < 4; i++) {
    S.add([C[i], C[(i + 1) % 4]], { start: T0 + i * 0.12, dur: 0.6, width: 2.4, color: edge });
    S.add([C[i], A], { start: T0 + 0.3 + i * 0.12, dur: 0.8, width: 2.4, color: edge });
  }
  const faceK = [0.35, 0.7, 1.0, 0.7];
  for (let f = 0; f < 4; f++) {
    const P0 = C[f], P1 = C[(f + 1) % 4], k = faceK[f];
    const pt = (u, v) => [0, 1, 2].map((j) => P0[j] * (1 - u - v) + P1[j] * u + A[j] * v);
    const col = [0.6 * k, 0.7 * k, 1.15 * k];
    for (let i = 1; i < N; i++) {
      const s = i / N, st = T0 + 0.8 + s * 0.9 + f * 0.06;
      S.add([pt(s, 0), pt(s, 1 - s)], { start: st, dur: 0.55, width: 1.4, color: col });
      S.add([pt(1 - s, 0), pt(0, 1 - s)], { start: st + 0.04, dur: 0.55, width: 1.4, color: col });
    }
  }
  // palace wings behind, a few lit windows
  const R = rng(4), wing = [0.2, 0.23, 0.42];
  for (const sx of [-1, 1]) {
    const x0 = sx * 2.2, x1 = sx * 7.5, z = -4.5, top = 0.95;
    S.add([[x0, 0, z], [x0, top, z], [x1, top, z]], { start: T0 + 0.6, dur: 1.2, width: 1.3, color: wing });
    S.add([[x0, top + 0.28, z - 0.2], [x1, top + 0.28, z - 0.2]], { start: T0 + 0.9, dur: 1.2, width: 1.0, color: wing });
    for (let i = 0; i < 16; i++) {
      const x = lerp(x0, x1, (i + 0.5) / 16), lit = R() < 0.3;
      S.add([[x, 0.3, z], [x, 0.66, z]], { start: T0 + 1.0 + i * 0.05, dur: 0.4, width: lit ? 2.6 : 1.0, color: lit ? [1.2, 0.8, 0.45] : wing });
    }
  }
}

export class Louvre extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 38 });
    this.U = { uT: { value: 0 }, uAspect: { value: ctx.aspect }, uHz: { value: 0.42 } };
    this.scene.add(bgQuad(SKY, this.U));
    this.S = new StrokeSet(); build(this.S);
    const mesh = this.S.build({ uTip: { value: 4 } });
    this.pyr = new THREE.Group(); this.pyr.position.x = -0.45; this.scene.add(this.pyr);
    this.pyr.add(mesh);
    this.mirror = new THREE.Mesh(mesh.geometry, mesh.material.clone());
    this.mirror.scale.y = -1; this.mirror.frustumCulled = false; this.pyr.add(this.mirror);
    const MU = this.mirror.material.uniforms;
    MU.uAlpha.value = 0.28; MU.uBoil.value = 2.2; MU.uTip.value = 1;
    const glass = new THREE.Mesh(new THREE.ConeGeometry(Math.SQRT2, 1.24, 4, 1, true), addMat(new THREE.Color(0.006, 0.009, 0.022), 1));
    glass.rotation.y = Math.PI / 4; glass.position.y = 0.62; this.glass = glass; this.pyr.add(glass);
    const gm = new THREE.MeshBasicMaterial({ map: ctx.shared.glow, color: new THREE.Color(0.45, 0.55, 1.1), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false });
    this.inner = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), gm); this.inner.position.set(0, 0.35, 0.2); this.inner.scale.setScalar(3.2); this.pyr.add(this.inner);
    this.innerM = new THREE.Mesh(this.inner.geometry, gm); this.innerM.position.set(0, -0.35, 0.2); this.innerM.scale.set(3.2, 1.6, 1); this.pyr.add(this.innerM);
    this.v = new THREE.Vector3();
  }
  update(t) {
    const u = range(t, 20.0, 25.8), cam = this.camera;
    cam.position.set(lerp(1.3, 0.25, ease.sine(u)), lerp(0.3, 0.42, u), lerp(7.6, 5.3, ease.out(u)));
    cam.lookAt(-0.12, 0.66, 0);
    cam.updateMatrixWorld();
    this.v.set(cam.position.x, 0, cam.position.z - 1e4).project(cam);
    this.U.uHz.value = this.v.y * 0.5 + 0.5;
    this.U.uT.value = t; this.U.uAspect.value = this.ctx.aspect;
    this.S.set(t, this.ctx.res);
    const MU = this.mirror.material.uniforms;
    MU.uT.value = t; MU.uBoilT.value = t; MU.uRes.value.copy(this.ctx.res);
    const on = ease.out(range(t, T0 + 0.5, T0 + 2.2));
    this.glass.material.opacity = on;
    this.inner.material.opacity = on * (0.07 + 0.03 * audio.get('mid', t));
    this.pyr.rotation.y = -0.18 + u * 0.12;
  }
  post() {
    return { tint: [0.86, 0.94, 1.2], sat: 0.85, bloom: 0.95, bloomThr: 0.7, vig: 0.8, grain: 0.05, dust: 0.3, dustCol: [0.6, 0.72, 1.0], ca: 0.5 };
  }
}
