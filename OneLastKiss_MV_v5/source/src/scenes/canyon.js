// Canyon (v2) 69.63-74.03 "I love you more than you'll ever know": a fast flight low over the LCL sea through
// a canyon of giant red core crystals (instanced, mirrored in the sea). Kick waves run along the crystals.
// The mass-produced Evas descend in the sky (the swarm painting as a far layer + 3D motes); at the hit the camera
// breaks out of the canyon toward the ring of light on the horizon (-> Lilith).
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Scene, bgQuad } from './base.js';
import { NOISE } from '../core/glsl.js';
import { applyCam } from './camkeys.js';
import { smooth, clamp, lerp, rng } from '../core/util.js';
import { audio } from '../core/audio.js';

const V = 14; // flight speed
const zAt = (t) => -(t - 69.4) * V;
const SEA_F = /* glsl */ `uniform float uT, uK; varying vec3 vW; ${NOISE}
void main(){ vec3 V = normalize(cameraPosition - vW); float fr = pow(1.0 - max(V.y, 0.0), 4.0);
  float n = 0.6 * fbm(vW.xz * 0.18 + vec2(0.0, uT * 0.3)) + 0.4 * vnoise(vec2(vW.x * 1.2, vW.z * 4.0) - uT);
  vec3 deep = vec3(0.05, 0.0, 0.006), sky = vec3(0.75, 0.16, 0.1);
  vec3 c = mix(deep, sky, fr * 0.6) * (0.7 + 0.5 * n) + vec3(1.0, 0.5, 0.35) * pow(n, 7.0) * 0.5 * (0.15 + 0.85 * fr) * (1.0 + uK);
  gl_FragColor = vec4(c, 0.78 + 0.2 * (1.0 - fr)); }`;
const SKY_F = /* glsl */ `uniform float uT; varying vec2 vUv; ${NOISE}
void main(){ float y = vUv.y; vec3 c = mix(vec3(0.85, 0.28, 0.16), vec3(0.1, 0.0, 0.03), smoothstep(0.3, 0.9, y));
  float sp = fbm(vec2(atan(vUv.x - 0.5, y - 0.1) * 3.0, length(vUv - vec2(0.5, 0.1)) * 4.0 - uT * 0.1));
  c += vec3(0.4, 0.05, 0.02) * sp * smoothstep(0.35, 0.8, y); gl_FragColor = vec4(c, 1.0); }`;
const CAM = [
  [69.4, 0.0, 1.1, zAt(69.4), 0.4, 1.4, zAt(69.4) - 20, 58, 0.12], [70.79, 0.8, 1.3, zAt(70.79), 1.2, 1.5, zAt(70.79) - 20, 58, -0.1],
  [70.84, 0.0, 16.0, zAt(70.84) + 6, 0.0, 0.0, zAt(70.84) - 14, 50, 0.0], [72.94, 0.0, 11.0, zAt(72.94) - 4, 0.0, 0.0, zAt(72.94) - 22, 50, 0.25],
  [72.98, 0.0, 2.0, zAt(72.98) - 8, 0.0, 6.0, -170, 50, 0.0], [74.2, 0.0, 6.5, zAt(74.2) - 12, 0.0, 8.0, -170, 46, 0.0],
];

export class Canyon extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 58, near: 0.1, far: 400 });
    const S = this.scene, R = rng(69);
    S.environment = new THREE.PMREMGenerator(ctx.renderer).fromScene(new RoomEnvironment(), 0.04).texture; S.environmentIntensity = 0.28;
    S.fog = new THREE.Fog(0x3a0a0a, 25, 150);
    this.U = { uT: { value: 0 }, uK: { value: 0 } };
    S.add(bgQuad(SKY_F, this.U));
    // far layer: the mass-produced Eva swarm painting, slowly parallaxing
    const sw = ctx.img.m_swarm;
    if (sw) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(260, 260 * sw.h / sw.w), new THREE.MeshBasicMaterial({ map: sw.tex, fog: false, transparent: true, opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending }));
      m.position.set(0, 60, -250); m.renderOrder = -50; S.add(m); this.swarm = m;
    }
    // crystals
    const prof = [new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 0.78), new THREE.Vector2(0, 1)];
    const geo = new THREE.LatheGeometry(prof, 6); geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({ color: 0xc8102a, emissive: 0x70000c, emissiveIntensity: 1.0, metalness: 0.3, roughness: 0.14, flatShading: true });
    const n = 420; this.cry = new THREE.InstancedMesh(geo, mat, n); this.cry.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = new THREE.Vector3(), p = new THREE.Vector3();
    this.cz = [];
    for (let i = 0; i < n; i++) {
      const side = R() < 0.5 ? -1 : 1, near = R() < 0.3;
      const x = side * (near ? 2.6 + R() * 3.5 : 7 + R() * 28), z = 10 - R() * 150;
      const h = near ? 0.8 + R() * 2.4 : 5 + R() * R() * 26, r = Math.min(h * (0.05 + R() * 0.05), 1.4);
      e.set((R() - 0.5) * 0.5, R() * 6.28, -side * (R() * 0.3)); q.setFromEuler(e);
      m4.compose(p.set(x, -0.5, z), q, s.set(r, h, r)); this.cry.setMatrixAt(i, m4); this.cz.push(z);
    }
    S.add(this.cry);
    const mir = new THREE.InstancedMesh(geo, mat.clone(), n); mir.instanceMatrix = this.cry.instanceMatrix; mir.instanceColor = this.cry.instanceColor;
    mir.material.side = THREE.DoubleSide; mir.scale.y = -1; mir.position.y = -1.0; S.add(mir); this.mir = mir;
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), new THREE.ShaderMaterial({ uniforms: this.U, transparent: true, depthWrite: true,
      vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }', fragmentShader: SEA_F }));
    sea.rotation.x = -Math.PI / 2; sea.position.y = -0.5; S.add(sea);
    // the ring of light on the horizon
    this.RU = { uA: { value: 0 }, uK: this.U.uK };
    const ring = new THREE.Mesh(new THREE.TorusGeometry(40, 0.8, 16, 160), new THREE.ShaderMaterial({ uniforms: this.RU, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false,
      vertexShader: 'varying vec3 vN; void main(){ vN = normal; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: 'uniform float uA, uK; varying vec3 vN; void main(){ gl_FragColor = vec4(vec3(1.0, 0.9, 0.8) * uA * (1.4 + uK), 1.0); }' }));
    ring.position.set(0, 26, -200); S.add(ring);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: ctx.shared.glow, color: 0xffb080, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    halo.position.copy(ring.position); halo.scale.setScalar(120); S.add(halo); this.halo = halo;
    // descending angels (3D motes in front of the painting)
    const an = 600, ap = new Float32Array(an * 3); for (let i = 0; i < an; i++) ap.set([(R() - 0.5) * 240, 10 + R() * 70, -60 - R() * 140], i * 3);
    const ag = new THREE.BufferGeometry(); ag.setAttribute('position', new THREE.BufferAttribute(ap, 3));
    this.ang = new THREE.Points(ag, new THREE.PointsMaterial({ map: ctx.shared.glow, color: 0xfff4ee, size: 1.4, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    S.add(this.ang);
    this.col = new THREE.Color();
  }
  update(t) {
    const K = audio.hitPulse('kick', t, 6), H = audio.hitPulse('hit', t, 4);
    applyCam(this.camera, CAM, t, 0.02 * K);
    this.U.uT.value = t; this.U.uK.value = K;
    // kick wave travelling forward along the canyon from the camera
    const cz = this.camera.position.z, ks = audio.since('kick', t);
    for (let i = 0; i < this.cz.length; i++) {
      const d = cz - this.cz[i], wave = Math.exp(-Math.pow((d - ks * 60) / 6, 2)) * Math.exp(-ks * 1.5);
      const b = 0.55 + 2.2 * wave + 0.6 * H;
      this.cry.instanceColor.setXYZ(i, b, b * 0.9, b * 0.9);
    }
    this.cry.instanceColor.needsUpdate = true;
    const out = smooth(72.96, 73.6, t);
    this.RU.uA.value = 0.3 + out * 1.2; this.halo.material.opacity = 0.25 + out * 0.5;
    this.ang.position.y = -(t - 69.4) * 1.6;
    if (this.swarm) this.swarm.position.y = 60 - (t - 69.4) * 1.2;
  }
  post(t) {
    const K = audio.hitPulse('kick', t, 9), H = audio.hitPulse('hit', t, 8);
    return { bloom: 0.8, bloomThr: 0.8, contrast: 1.12, grain: 0.07, vig: 0.6, ca: 0.9 + 1.5 * H, punch: K * 0.35, shake: 0.004 * K + 0.006 * H,
      tint: [1.04, 0.92, 0.9], dust: 0.25, dustCol: [1, 0.5, 0.4], fadeW: smooth(73.4, 74.03, t) * 0.5 };
  }
}
