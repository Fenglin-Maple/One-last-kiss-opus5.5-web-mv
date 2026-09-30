// Gallery (v2) 25.02-29.30 "私だけのモナリザ": a 3D Louvre Grande Galerie overgrown with red core crystal.
// Dolly down the vaulted corridor -> tracking whip past the Eva portraits -> Yui as the Mona Lisa at the end wall.
// A blue WILLE restoration front sweeps back from the painting and the crystals collapse; phone flashes on the hits.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Scene } from './base.js';
import { applyCam } from './camkeys.js';
import { canvas, tex } from '../core/textures.js';
import { smooth, clamp, lerp, rng } from '../core/util.js';
import { audio } from '../core/audio.js';

const LEN = 36, W = 3, WH = 5, END = -34;
const CAM = [
  [25.0, 0.0, 1.55, 3.0, 0.0, 1.9, -20, 52, 0.0], [26.6, 0.2, 1.6, -9.0, 0.0, 1.95, -34, 50, -0.02],
  [26.64, 1.3, 1.75, -5.6, -3.0, 1.95, -8.3, 40], [27.14, 1.3, 1.75, -19.5, -3.0, 1.95, -22.2, 40],
  [27.18, -0.5, 2.05, -28.2, -0.5, 2.05, END, 34], [29.4, -0.42, 2.05, -30.9, -0.42, 2.08, END, 34],
];
const HITS = [28.25, 28.76];

function damask() {
  const c = canvas(256, 256), g = c.getContext('2d');
  g.fillStyle = '#6a1418'; g.fillRect(0, 0, 256, 256); g.strokeStyle = 'rgba(255,190,140,0.10)'; g.lineWidth = 3;
  for (const [x, y] of [[64, 64], [192, 192], [192, 64], [64, 192]]) { g.beginPath(); g.ellipse(x, y, 30, 52, 0, 0, 7); g.stroke(); g.beginPath(); g.ellipse(x, y, 12, 26, 0, 0, 7); g.stroke(); }
  g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, 250, 256, 6);
  const t = tex(c, { repeat: true }); t.repeat.set((LEN + 6) / 1.2, WH / 1.2); return t;
}
function parquet() {
  const c = canvas(512, 512), g = c.getContext('2d'), R = rng(3);
  for (let y = 0; y < 16; y++) for (let x = 0; x < 4; x++) {
    const l = 60 + R() * 30; g.fillStyle = `rgb(${l + 40},${l + 10},${l - 20})`;
    g.fillRect(x * 128 + (y % 2) * 64, y * 32, 128, 32); g.fillStyle = 'rgba(0,0,0,.35)'; g.fillRect(x * 128 + (y % 2) * 64, y * 32, 2, 32); g.fillRect(0, y * 32, 512, 1);
  }
  const t = tex(c, { repeat: true }); t.repeat.set(3, LEN / 2); return t;
}

export class Gallery extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 50, near: 0.05, far: 80 });
    const S = this.scene, R = rng(25);
    S.environment = new THREE.PMREMGenerator(ctx.renderer).fromScene(new RoomEnvironment(), 0.04).texture; S.environmentIntensity = 0.12;
    S.fog = new THREE.Fog(0x120406, 12, 42);
    this.clear.set(0x120406);
    const wall = new THREE.MeshStandardMaterial({ map: damask(), color: 0xffffff, roughness: 0.8 });
    const stone = new THREE.MeshStandardMaterial({ color: 0xb8a58a, roughness: 0.7 });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(2 * W, LEN + 6), new THREE.MeshStandardMaterial({ map: parquet(), roughness: 0.28, metalness: 0.1 }));
    floor.rotation.x = -Math.PI / 2; floor.position.z = -LEN / 2 + 3; S.add(floor);
    for (const sx of [-1, 1]) {
      const w = new THREE.Mesh(new THREE.PlaneGeometry(LEN + 6, WH), wall); w.position.set(sx * W, WH / 2, -LEN / 2 + 3); w.rotation.y = -sx * Math.PI / 2; S.add(w);
      for (const y of [0.15, WH - 0.1]) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.16, y < 1 ? 0.3 : 0.25, LEN + 6), stone); b.position.set(sx * (W - 0.05), y, -LEN / 2 + 3); S.add(b); }
    }
    const vault = new THREE.Mesh(new THREE.CylinderGeometry(W, W, LEN + 6, 48, 1, true, -Math.PI / 2, Math.PI), new THREE.MeshStandardMaterial({ color: 0xcdbb9e, roughness: 0.8, side: THREE.BackSide }));
    vault.rotation.x = -Math.PI / 2; vault.position.set(0, WH, -LEN / 2 + 3); S.add(vault);
    const sky = new THREE.Mesh(new THREE.PlaneGeometry(1.2, LEN + 6), new THREE.MeshBasicMaterial({ color: 0xff9a7a, fog: false }));
    sky.rotation.x = Math.PI / 2; sky.position.set(0, WH + W - 0.02, -LEN / 2 + 3); S.add(sky);
    for (let z = 0; z > -LEN; z -= 4.5) { const a = new THREE.Mesh(new THREE.TorusGeometry(W - 0.02, 0.09, 8, 48, Math.PI), stone); a.position.set(0, WH, z); S.add(a); }
    const endW = new THREE.Mesh(new THREE.PlaneGeometry(2 * W, WH + W), wall); endW.position.set(0, (WH + W) / 2, END - 0.01); S.add(endW);
    // paintings: the four Eva portraits (quadrants of the gallery sheet) + Yui / Mona Lisa
    const gal = ctx.img.gallery, lisa = ctx.img.yui_lisa;
    const hang = (e, crop, w, h, pos, ry, glow = 0.35) => {
      const t = e.tex.clone(); t.needsUpdate = true;
      if (crop) { t.repeat.set(crop[2], crop[3]); t.offset.set(crop[0], crop[1]); }
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: glow, roughness: 0.55 }));
      m.position.set(...pos); m.rotation.y = ry; S.add(m); return m;
    };
    if (gal) {
      const Q = [[0.03, 0.51, 0.47, 0.47], [0.5, 0.51, 0.47, 0.47], [0.03, 0.03, 0.47, 0.47], [0.5, 0.03, 0.47, 0.47]];
      [[-1, -8.3], [1, -13.5], [-1, -21.5], [1, -26.5]].forEach(([sx, z], i) => hang(gal, Q[i], 1.5, 1.9, [sx * (W - 0.02), 2.05, z], -sx * Math.PI / 2));
    }
    this.lisa = lisa ? hang(lisa, null, 1.6, 2.4, [0, 2.1, END + 0.02], 0, 0.18) : null;
    for (const [x, z] of [[-1, -8.3], [1, -13.5], [-1, -21.5], [1, -26.5]]) { const l = new THREE.PointLight(0xffd0a0, 2.2, 4, 1.5); l.position.set(x * (W - 1.1), 3.6, z); S.add(l); }
    // lights
    this.lamps = [];
    for (let z = -2; z > -LEN; z -= 7) { const p = new THREE.PointLight(0xffc28a, 3.5, 11, 1.6); p.position.set(0, WH + 0.6, z); S.add(p); this.lamps.push(p); }
    this.spot = new THREE.SpotLight(0xfff0dc, 9, 9, 0.4, 0.6, 1.4); this.spot.position.set(0, 4.8, END + 4); this.spot.target.position.set(0, 2.1, END); S.add(this.spot, this.spot.target);
    this.blue = new THREE.PointLight(0x5aa8ff, 0, 7, 1.4); S.add(this.blue);
    this.flash = new THREE.PointLight(0xffffff, 0, 12, 1.2); this.flash.position.set(0.3, 1.7, -29.5); S.add(this.flash);
    // red core crystals
    const n = 360, geo = new THREE.OctahedronGeometry(1, 0); geo.scale(0.12, 0.6, 0.12); geo.translate(0, 0.35, 0);
    this.cm = new THREE.MeshStandardMaterial({ color: 0xff1a34, emissive: 0x6a0010, emissiveIntensity: 1, metalness: 0.25, roughness: 0.12, flatShading: true });
    this.cry = new THREE.InstancedMesh(geo, this.cm, n); S.add(this.cry);
    this.cd = [];
    for (let i = 0; i < n; i++) {
      const side = R() < 0.5 ? -1 : 1, onWall = R() < 0.35, nearLisa = i < 70;
      const z = nearLisa ? END + 0.2 + R() * 2.6 : -R() * (LEN - 2) + 1;
      const x = nearLisa && R() < 0.6 ? (R() - 0.5) * 2.4 : side * (W - 0.05 - R() * (onWall ? 0.05 : 0.7));
      const y = onWall ? 0.2 + R() * R() * (nearLisa ? 3.4 : 2.4) : 0;
      const e = new THREE.Euler(onWall ? 0 : (R() - 0.5) * 0.9, R() * 6.28, onWall ? side * (0.45 + R() * 0.5) : (R() - 0.5) * 0.9);
      if (nearLisa && y > 0.5) e.set(Math.PI / 2 + (R() - 0.5) * 0.8, 0, (R() - 0.5) * 0.8);
      this.cd.push({ p: new THREE.Vector3(x, y, nearLisa && y > 0.5 ? END + 0.05 : z), q: new THREE.Quaternion().setFromEuler(e), s: (nearLisa ? 0.7 : 0.4) + R() * 1.4 });
    }
    // restoration front: a thin sheet of blue light across the corridor
    this.FU = { uA: { value: 0 } };
    this.front = new THREE.Mesh(new THREE.PlaneGeometry(2 * W, WH + W), new THREE.ShaderMaterial({ uniforms: this.FU, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: 'uniform float uA; varying vec2 vUv; void main(){ float e = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x); gl_FragColor = vec4(vec3(0.25, 0.55, 1.0) * uA * e * e * 0.14, 1.0); }' }));
    this.front.position.y = (WH + W) / 2; S.add(this.front);
    // dust in the light
    const dn = 700, dp = new Float32Array(dn * 3); for (let i = 0; i < dn; i++) dp.set([(R() - 0.5) * 5.6, R() * 5, -R() * LEN], i * 3);
    const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(dp, 3));
    this.dust = new THREE.Points(dg, new THREE.PointsMaterial({ map: ctx.shared.glow, color: 0xffd8b0, size: 0.03, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
    S.add(this.dust);
    this._m = new THREE.Matrix4(); this._s = new THREE.Vector3();
  }
  update(t) {
    const K = audio.hitPulse('kick', t, 7);
    applyCam(this.camera, CAM, t, 0.003 * K);
    // restoration front travels from the painting back toward the camera after the cut onto Lisa
    const fz = END + 0.1 + 14 * smooth(27.3, 29.4, t), on = smooth(27.2, 27.5, t);
    this.front.position.z = fz; this.FU.uA.value = on * (1 - smooth(29.0, 29.4, t));
    this.blue.position.set(0, 2.2, fz + 0.3); this.blue.intensity = on * 3;
    this.cd.forEach((c, i) => {
      const gone = on * smooth(fz - 0.2, fz - 1.4, c.p.z);                    // behind the front -> collapse
      const grow = smooth(25.0, 25.8, t + (i % 7) * 0.05);
      const sc = c.s * grow * (1 - gone) * (1 + 0.08 * K);
      this._m.compose(c.p, c.q, this._s.set(sc, sc, sc)); this.cry.setMatrixAt(i, this._m);
    });
    this.cry.instanceMatrix.needsUpdate = true;
    this.cm.emissiveIntensity = 0.8 + 1.6 * K;
    let f = 0; for (const h of HITS) f = Math.max(f, t >= h ? Math.exp(-(t - h) * 14) : 0);
    this.flash.intensity = f * 40;
    this.lamps.forEach((p, i) => { p.intensity = 3.2 + 0.4 * Math.sin(t * 3 + i); });
    this.dust.position.y = -((t * 0.02) % 0.3);
  }
  post(t) {
    const K = audio.hitPulse('kick', t, 9), H = audio.hitPulse('hit', t, 10);
    let f = 0; for (const h of HITS) f = Math.max(f, t >= h ? Math.exp(-(t - h) * 18) : 0);
    return { bloom: 0.9, bloomThr: 0.72, grain: 0.07, vig: 0.62, ca: 0.7 + H, dust: 0.25, punch: K * 0.25, contrast: 1.06,
      fadeW: f * 0.35, tint: [1.02, 0.97, 0.95] };
  }
}
