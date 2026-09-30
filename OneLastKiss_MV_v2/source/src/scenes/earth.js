// Earth (v2): three uses, self-timed by absolute t.
//  A 10.52-16.95  Instrumentality: the planet turns red, crosses of light rise, souls stream up, the tree of life.
//  B 136.17-141.2 Restoration: a blue front sweeps across the red planet, souls fall back to the surface.
//  C 207.5-218.38 The luminous blue earth: sunrise over the limb, city lights, the camera leaves.
import * as THREE from 'three';
import { Scene, bgQuad } from './base.js';
import * as G from './earth-glsl.js';
import { applyCam } from './camkeys.js';
import { canvas, tex } from '../core/textures.js';
import { clamp, smooth, lerp, ease, rng } from '../core/util.js';
import { audio } from '../core/audio.js';

const CAM = {
  A: [[10.4, 0.0, 0.35, 1.62, 0.0, 1.05, 0.0, 40, -0.12], [12.67, 0.12, 0.42, 1.45, 0.0, 1.1, 0.0, 40, -0.05],
    [12.72, 0.0, 0.3, 4.3, 0.0, 0.2, 0.0, 38], [14.81, 0.6, 0.5, 3.9, 0.0, 0.25, 0.0, 38],
    [14.86, 0.3, 2.7, 0.8, 0.0, 0.0, 0.0, 46], [17.0, 0.2, 2.25, 0.55, 0.0, 0.0, 0.0, 46]],
  B: [[136.1, 0.2, 0.3, 3.5, 0.0, 0.0, 0.0, 38], [137.24, 0.28, 0.32, 3.25, 0.0, 0.0, 0.0, 38],
    [137.29, 1.35, 0.5, -1.45, 0.0, 0.2, 0.0, 42, 0.1], [139.38, 1.15, 0.7, -1.75, 0.0, 0.25, 0.0, 42, 0.05],
    [139.43, -1.2, 0.4, -3.1, 0.0, 0.0, 0.0, 38], [141.3, -1.45, 0.55, -3.35, 0.0, 0.0, 0.0, 38]],
  C: [[207.4, 0.0, 0.3, 2.3, 0.0, 0.95, 0.0, 36], [211.95, 0.06, 0.34, 2.12, 0.0, 0.97, 0.0, 36],
    [212.0, 2.2, 1.0, 2.0, 0.0, 0.0, 0.0, 38], [216.24, 1.9, 1.1, 2.5, 0.0, 0.0, 0.0, 38],
    [216.29, 1.2, 0.5, 2.6, 0.0, 0.0, 0.0, 36], [218.5, 3.6, 1.6, 8.8, 0.0, 0.0, 0.0, 36]],
};
const SEC = (t) => (t < 100 ? 'A' : t < 180 ? 'B' : 'C');
const AXIS = new THREE.Vector3(0.3, 0.2, 1).normalize();

// tree of life (sephirot) drawn once
function sephirot() {
  const c = canvas(512, 1024), g = c.getContext('2d');
  const P = [[0, 0], [1, 1], [-1, 1], [1, 2.6], [-1, 2.6], [0, 3.3], [1, 4.2], [-1, 4.2], [0, 5], [0, 6]]
    .map(([x, y]) => [256 + x * 150, 90 + y * 140]);
  const E = [[0, 1], [0, 2], [0, 5], [1, 2], [1, 3], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5], [3, 6], [4, 5], [4, 7],
    [5, 6], [5, 7], [5, 8], [6, 7], [6, 8], [6, 9], [7, 8], [7, 9], [8, 9]];
  g.shadowColor = '#ff4020'; g.shadowBlur = 18; g.strokeStyle = '#ff6a3a'; g.lineWidth = 5;
  for (const [a, b] of E) { g.beginPath(); g.moveTo(...P[a]); g.lineTo(...P[b]); g.stroke(); }
  for (const p of P) {
    g.fillStyle = '#1a0000'; g.beginPath(); g.arc(p[0], p[1], 44, 0, 7); g.fill();
    g.lineWidth = 6; g.strokeStyle = '#ffb080'; g.stroke(); g.lineWidth = 2; g.beginPath(); g.arc(p[0], p[1], 32, 0, 7); g.stroke();
  }
  return tex(c);
}

export class Earth extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 40, near: 0.02, far: 200 });
    const S = this.scene, R = rng(27);
    this.U = { uT: { value: 0 }, uRot: { value: 0 }, uRed: { value: 1 }, uFront: { value: -1 }, uEdge: { value: 0 }, uCloud: { value: 1 },
      uLights: { value: 0 }, uK: { value: 0 }, uSun: { value: new THREE.Vector3(1, 0.3, 0).normalize() }, uAxis: { value: AXIS },
      uCross: { value: 0 }, uSoul: { value: 0 }, uDir: { value: 1 }, uPx: { value: 6 }, uQ: { value: new THREE.Vector3(0, 2.6, 0) },
      uCol: { value: new THREE.Color(1, 0.45, 0.2) }, uA: { value: 0 }, uRev: { value: 0 } };
    const U = this.U;
    this.NU = { uT: U.uT, uRed: { value: 1 }, uA: { value: 1 } };
    S.add(bgQuad(G.NEB_F, this.NU));
    // stars
    const sn = 3000, sp = new Float32Array(sn * 3), sc = new Float32Array(sn * 3);
    for (let i = 0; i < sn; i++) {
      const v = new THREE.Vector3(R() * 2 - 1, R() * 2 - 1, R() * 2 - 1).normalize().multiplyScalar(60);
      sp.set([v.x, v.y, v.z], i * 3); const b = 0.25 + R() ** 3 * 1.4, w = R(); sc.set([b, b * (0.85 + 0.15 * w), b * (0.8 + 0.3 * w)], i * 3);
    }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(sp, 3)); sg.setAttribute('color', new THREE.BufferAttribute(sc, 3));
    S.add(new THREE.Points(sg, new THREE.PointsMaterial({ size: 0.14, vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })));
    // globe + atmosphere
    S.add(new THREE.Mesh(new THREE.SphereGeometry(1, 160, 100), new THREE.ShaderMaterial({ vertexShader: G.WORLD_V, fragmentShader: G.GLOBE_F, uniforms: U })));
    this.AU = { uSun: U.uSun, uCol: { value: new THREE.Color() }, uA: { value: 1 } };
    S.add(new THREE.Mesh(new THREE.SphereGeometry(1.07, 96, 64), new THREE.ShaderMaterial({ vertexShader: G.WORLD_V, fragmentShader: G.ATMO_F, uniforms: this.AU,
      side: THREE.BackSide, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })));
    // crosses of light
    const cn = 64, cg = new THREE.InstancedBufferGeometry(); cg.copy(new THREE.PlaneGeometry(1, 1)); cg.instanceCount = cn;
    const aP = new Float32Array(cn * 4), aT = new Float32Array(cn * 2);
    for (let i = 0; i < cn; i++) {
      const v = i < 14 ? new THREE.Vector3(R() * 0.8 - 0.4, 0.55 + R() * 0.3, 0.8 + R() * 0.2 - 0.1).normalize() : new THREE.Vector3(R() * 2 - 1, R() * 1.6 - 0.5, R() * 2 - 1).normalize();
      aP.set([v.x, v.y, v.z, 0], i * 4); aT.set([i < 14 ? 10.6 + i * 0.13 : 11.9 + ((i - 14) / cn) * 4.2 + R() * 0.3, R() < 0.12 ? 0.35 + R() * 0.2 : 0.05 + R() * 0.16], i * 2);
    }
    cg.setAttribute('aP', new THREE.InstancedBufferAttribute(aP, 4)); cg.setAttribute('aT', new THREE.InstancedBufferAttribute(aT, 2));
    const cm = new THREE.Mesh(cg, new THREE.ShaderMaterial({ vertexShader: G.CROSS_V, fragmentShader: G.CROSS_F, uniforms: U,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    cm.frustumCulled = false; S.add(cm);
    // souls
    const n = 9000, pg = new THREE.BufferGeometry(), P = new Float32Array(n * 4), Rr = new Float32Array(n * 4);
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3(R() * 2 - 1, R() * 2 - 1, R() * 2 - 1).normalize();
      P.set([v.x, v.y, v.z, 0.55 + R() * 0.45], i * 4); Rr.set([R(), R(), R(), R()], i * 4);
    }
    pg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    pg.setAttribute('aP', new THREE.BufferAttribute(P, 4)); pg.setAttribute('aR', new THREE.BufferAttribute(Rr, 4));
    const pts = new THREE.Points(pg, new THREE.ShaderMaterial({ vertexShader: G.SOUL_V, fragmentShader: G.DOT_F, uniforms: U,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    pts.frustumCulled = false; S.add(pts);
    // halo ring + tree of life
    this.RU = { uT: U.uT, uA: { value: 0 }, uK: U.uK };
    this.ring = new THREE.Mesh(new THREE.RingGeometry(1.4, 1.8, 256, 1), new THREE.ShaderMaterial({ vertexShader: G.RING_V, fragmentShader: G.RING_F,
      uniforms: this.RU, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    this.ring.rotation.set(1.22, 0.25, 0); S.add(this.ring);
    this.SU = { tMap: { value: sephirot() }, uT: U.uT, uA: { value: 0 }, uRev: { value: 0 } };
    this.seph = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 4.6), new THREE.ShaderMaterial({ vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: G.SEPH_F, uniforms: this.SU, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.seph.position.set(0, 0.45, -2.8); S.add(this.seph);
    // sun
    const glow = ctx.shared.glow;
    this.sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: 0xfff1d8, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    this.streak = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: 0x9fc4ff, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    S.add(this.sun, this.streak);
    this._v = new THREE.Vector3(); this._d = new THREE.Vector3(); this._u = new THREE.Vector3();
  }
  update(t) {
    const U = this.U, s = SEC(t), K = audio.hitPulse('kick', t, 7);
    const c = applyCam(this.camera, CAM[s], t);
    const cp = this.camera.position;
    U.uT.value = t; U.uK.value = K; U.uPx.value = this.ctx.h * 0.012;
    U.uRot.value = t * 0.02 + (s === 'C' ? 1.4 : s === 'B' ? 0.6 : 0);
    let sunScale = 0; const sun = U.uSun.value;
    this.RU.uA.value = 0; this.SU.uA.value = 0;
    if (s === 'A') {
      U.uRed.value = 1; U.uFront.value = -1; U.uEdge.value = 0; U.uCloud.value = 0.3; U.uLights.value = 0;
      U.uCross.value = 1; U.uSoul.value = smooth(10.9, 12.5, t); U.uDir.value = 1; U.uCol.value.setRGB(1, 0.45, 0.2);
      U.uQ.value.set(0, t < 12.7 ? 2.4 : t < 14.83 ? 2.6 : 5.0, t < 12.7 ? -0.6 : t < 14.83 ? 0 : 1.6);
      sun.set(0.8, 0.5, 0.6).normalize();
      this.RU.uA.value = smooth(12.8, 14.6, t);
      this.SU.uA.value = smooth(12.72, 13.3, t) * (1 - smooth(14.8, 14.86, t)) * (0.8 + 0.4 * K); this.SU.uRev.value = smooth(12.8, 14.6, t);
      this.AU.uCol.value.setRGB(1, 0.25, 0.1);
    } else if (s === 'B') {
      const f = ease.inOut(clamp((t - 136.3) / 4.3));
      U.uRed.value = 1; U.uFront.value = lerp(-0.05, 3.4, f); U.uEdge.value = 1 - smooth(140.3, 141, t);
      U.uCloud.value = 1; U.uLights.value = 0.3; U.uCross.value = 1;
      U.uSoul.value = 1 - smooth(139.2, 141, t); U.uDir.value = -1; U.uQ.value.set(0, 2.6, 0); U.uCol.value.setRGB(1, 0.6, 0.35);
      this._d.copy(cp).normalize().add(this._u.set(0.6, 0.5, 0)).normalize(); sun.copy(this._d);
      this.AU.uCol.value.setRGB(1, 0.25, 0.1).lerp(new THREE.Color(0.35, 0.6, 1), f);
    } else {
      U.uRed.value = 0; U.uFront.value = 4; U.uEdge.value = 0; U.uCloud.value = 1; U.uLights.value = 1; U.uCross.value = 0;
      U.uSoul.value = 0.45 * smooth(208, 210, t) * (1 - smooth(216, 216.3, t)); U.uDir.value = -1; U.uQ.value.set(0, 3, 1.5); U.uCol.value.setRGB(0.6, 0.8, 1);
      this.AU.uCol.value.setRGB(0.35, 0.6, 1);
      if (t < 211.97) {
        // sunrise exactly over the limb as seen from the camera
        const dist = cp.length(), ar = Math.asin(1 / dist);
        this._d.copy(cp).negate().normalize();
        this._u.crossVectors(this._d, this.camera.up).normalize();
        const off = lerp(-0.07, 0.1, ease.inOut(clamp((t - 208.2) / 3.4)));
        sun.copy(this._d).applyAxisAngle(this._u, ar + off);
        sunScale = 1;
      } else sun.set(t < 216.27 ? 0.3 : -0.45, t < 216.27 ? 0.45 : 0.3, t < 216.27 ? 0.85 : 0.6).normalize();
    }
    this.sun.position.copy(cp).addScaledVector(sun, 40); this.streak.position.copy(this.sun.position);
    this.sun.scale.setScalar(sunScale * (7 + 2 * K)); this.streak.scale.set(sunScale * 30, sunScale * 0.5, 1);
    this.seph.visible = this.SU.uA.value > 0; this.ring.visible = this.RU.uA.value > 0;
    this.ring.rotation.z = t * 0.05;
    this.NU.uA.value = s === 'C' ? 0.6 : 0.9;
    this.NU.uRed.value = s === 'A' ? 1 : s === 'B' ? 1 - smooth(137.5, 140.8, t) : 0;
  }
  post(t) {
    const s = SEC(t), K = audio.hitPulse('kick', t, 9);
    const base = { bloom: 1.0, bloomThr: 0.7, grain: 0.07, vig: 0.6, ca: 0.8, dust: 0.15, punch: K * 0.25 };
    if (s === 'A') return { ...base, tint: [1.06, 0.9, 0.86], dustCol: [1, 0.4, 0.3], shake: 0.002 * K, flicker: 0.04 };
    if (s === 'B') return { ...base, bloom: 1.1 + 0.6 * audio.hitPulse('hit', t, 5), sat: 1.05 };
    return { ...base, bloom: 1.15, bloomThr: 0.62, lift: [0, 0.004, 0.012], exposure: 1.02, fadeB: smooth(217.6, 218.4, t) * 0.4 };
  }
}
