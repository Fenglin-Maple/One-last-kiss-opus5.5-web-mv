// Rails (v6): the final chorus, rendered entirely as pure-RGB line drawing.
//   Nothing here is shaded - the whole world is luminous wireframe sitting in black. Two faintly rippling
//   planes (sea / land) are the only surfaces; everything else is a glowing edge.
//   R1 166.40-170.67 "忘れられない人": low on the down track running into the sun, the sleepers streaming
//        under the camera, catenary portals ticking past one per beat, an oncoming line-drawn commuter rushing through.
//   R2 175.47-181.25 "oh...": at the level crossing, the lamps alternate on the beat, the train crosses right
//        in front of us, then the camera cranes up the mast through the wires and into the arc of the sun (-> helix).
// WebGL clamps lineWidth to 1px everywhere (ANGLE/SwiftShader report max 1), so every "line" is really a
// hairline box. That keeps thickness and length under our control and lets bloom do the rest.
import * as THREE from 'three';
import { Scene } from './base.js';
import { NOISE } from '../core/glsl.js';
import { applyCam } from './camkeys.js';
import { smooth, rng, ease } from '../core/util.js';
import { audio, PERIOD, BEAT0 } from '../core/audio.js';

// RGB primaries plus the soft accents the whole segment is graded around
const CY = [0.18, 0.86, 1.0], MG = [1.0, 0.15, 0.72], WH = [0.92, 0.96, 1.0], AM = [1.0, 0.62, 0.18];
const V1 = 22, PITCH = V1 * PERIOD, CZ = -130, TX = 2, CAR = 20, NCAR = 4, VT = 30, POOL = 3800;
const R1 = [166.4, 170.67], R2 = [175.47, 181.25];
const WIN = 130;                                   // half-depth of the streaming window, metres
// train front z(t): R1 meets the camera at 168.72, R2 crosses the crossing camera at 177.0
const trainZ = (t) => (t < 173 ? -56.8 + VT * (t - 168.72) : CZ + 4 + 32 * (t - 177.0));
// beat index measured from the kick grid, driving the crossing lamps
const beatNo = (t) => Math.floor((t - BEAT0) / PERIOD);
const AXZ = new THREE.Vector3(0, 0, 1), SCR = new THREE.Vector3();

// backdrop: black sky, an RGB-split horizon, a hand-drawn sun
const SKY_F = /* glsl */ `varying vec3 vW; uniform vec3 uSun; uniform float uT; ${NOISE}
void main(){
  vec3 d = normalize(vW - cameraPosition);
  float h = d.y;
  vec3 c = mix(vec3(0.005, 0.008, 0.02), vec3(0.02, 0.045, 0.10), pow(max(h, 0.0), 0.55));
  float sd = max(dot(d, uSun), 0.0);
  // RGB split horizon: one thin cyan line through the haze, a magenta filament just above it - not a fog bank
  c += vec3(0.04, 0.26, 0.38) * exp(-pow(abs(h) * 22.0, 1.6)) * (0.30 + 0.70 * sd);
  c += vec3(0.30, 0.04, 0.21) * exp(-pow(abs(h - 0.055) * 34.0, 2.0));
  // sun: hard core, cyan halo, a magenta ring, a warm outer ring - drawn, not photographed
  float r = acos(clamp(sd, -1.0, 1.0));
  c += vec3(0.92, 0.96, 1.0) * smoothstep(0.017, 0.011, r);
  c += vec3(0.30, 0.85, 1.0) * exp(-r * 30.0) * 0.45;
  c += vec3(1.0, 0.25, 0.55) * exp(-pow(abs(r - 0.058) * 90.0, 2.0)) * 0.40;
  c += vec3(1.0, 0.5, 0.2) * exp(-pow(abs(r - 0.088) * 110.0, 2.0)) * 0.18;
  gl_FragColor = vec4(c, 1.0); }`;
const SKY_V = 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }';
// one unlit emissive colour, faded by distance so the wire dissolves into the void instead of aliasing
const LINE_V = /* glsl */ `varying vec3 vW; varying vec3 vC;
void main(){ vec4 p = vec4(position, 1.0); vC = vec3(1.0);
#ifdef USE_INSTANCING
  p = instanceMatrix * p;
#endif
#ifdef USE_INSTANCING_COLOR
  vC = instanceColor;
#endif
  vec4 w = modelMatrix * p; vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;
const LINE_F = /* glsl */ `varying vec3 vW; varying vec3 vC; uniform float uGlow;
void main(){ float d = length(vW - cameraPosition);
  float f = exp(-d * 0.0032) * (0.38 + 0.62 * smoothstep(1.5, 30.0, d));
  gl_FragColor = vec4(vC * uGlow * f, 1.0); }`;
// the sea breathes, the land barely moves
const RIP_F = /* glsl */ `varying vec3 vW; uniform float uT; uniform vec3 uCol; uniform float uRip;
void main(){
  // long low swells only: the previous 0.055 frequency aliased into snow at any distance, so the
  // wave is now metres-wide and the return is a thin crest line rather than a filled band
  vec2 q = vW.xz * (0.012 + uRip * 0.02);
  float w = sin(q.y * 2.3 + uT * 1.5 + sin(q.x * 1.1) * 0.7);
  float d = length(vW - cameraPosition);
  float g = smoothstep(0.986, 1.0, w) * exp(-d * 0.0022);
  gl_FragColor = vec4(uCol * g * (0.35 + 0.65 * uRip), 1.0); }`;
const RIP_V = 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }';
const LAMP_F = /* glsl */ `uniform float uOn; uniform vec3 uCol; varying vec2 vUv;
void main(){ float r = length(vUv - 0.5) * 2.0;
  // a lamp is a core plus a falloff; a flat quad reads as a white sticky note, which is what the first pass looked like
  float core = exp(-r * r * 30.0), halo = exp(-r * 5.0);
  vec3 c = uCol * (core * (0.12 + 1.3 * uOn) + halo * 0.42 * uOn);
  if (max(core, halo * uOn) < 0.006) discard;
  gl_FragColor = vec4(c, 1.0); }`;
const FLAT_V = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }';

export class Rails extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 52, near: 0.1, far: 4000 });
    const S = this.scene, R = rng(9090);
    this.o = new THREE.Object3D();
    this.U = { uSun: { value: new THREE.Vector3(-0.42, 0.30, -0.86).normalize() }, uT: { value: 0 }, uGlow: { value: 1.0 } };
    const lineMat = () => new THREE.ShaderMaterial({ uniforms: this.U, vertexShader: LINE_V, fragmentShader: LINE_F });
    const sky = new THREE.Mesh(new THREE.SphereGeometry(2200, 40, 20),
      new THREE.ShaderMaterial({ uniforms: this.U, vertexShader: SKY_V, fragmentShader: SKY_F, side: THREE.BackSide, depthWrite: false }));
    sky.renderOrder = -10; this.sky = sky; S.add(sky);
    const plane = (col, rip, x) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1386, 4200).rotateX(-Math.PI / 2),
        new THREE.ShaderMaterial({ uniforms: { ...this.U, uCol: { value: new THREE.Color(...col) }, uRip: { value: rip } }, vertexShader: RIP_V, fragmentShader: RIP_F }));
      m.position.set(x, x < 0 ? -3.2 : 0, -300); S.add(m); return m;
    };
    plane([0.10, 0.45, 0.62], 1.0, -707);            // the Seto sea
    plane([0.10, 0.30, 0.22], 0.18, 707);            // paddies on the land side
    // additive glow quads, before the train so buildTrain can share the same lamp shader
    this.LU = [{ uOn: { value: 0 }, uCol: { value: [3.0, 0.16, 0.10] } },
      { uOn: { value: 0 }, uCol: { value: [3.0, 0.16, 0.10] } }];
    const lampMat = (i) => new THREE.ShaderMaterial({ uniforms: this.LU[i], vertexShader: FLAT_V, fragmentShader: LAMP_F, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    // static wire: trackside furniture that never streams
    const A = this.sink(1400);
    this.buildStatic(A, R);
    this.statMesh = this.makeMesh(A, lineMat()); S.add(this.statMesh);
    // the train, built once and moved as a group
    this.train = this.buildTrain(lineMat()); this.train.position.x = TX; S.add(this.train);
    // dynamic pool: rails, sleepers and portals refilled around the camera every frame
    this.pool = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), lineMat(), POOL);
    this.pool.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(POOL * 3), 3);
    this.pool.instanceColor.setUsage(THREE.DynamicDrawUsage);
    this.pool.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.pool.frustumCulled = false; S.add(this.pool);
    this.D = this.sink(POOL);
    // crossing lamps: additive glow quads on the two posts, alternating on the beat
    this.lamps = [];
    for (const [px, pz, s] of [[5.6, CZ - 4, 1], [-5.6, CZ + 4, -1]]) [-0.38, 0.38].forEach((dz, i) => {
      const l = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.6), lampMat(i));
      l.position.set(px + 0.1 * s, 2.9, pz + dz); l.renderOrder = 6; S.add(l); this.lamps.push(l);
    });
  }
  // ---- sinks: preallocated instance buffers, so a frame allocates nothing --------------
  sink(cap) { return { mat: new Float32Array(cap * 16), col: new Float32Array(cap * 3), n: 0, cap }; }
  /** a hairline box spanning a->b, thickness th, written straight into the sink */
  seg(K, ax, ay, az, bx, by, bz, th, col) {
    const i = K.n; if (i >= K.cap) return;
    K.n++;
    const dx = bx - ax, dy = by - ay, dz = bz - az, len = Math.hypot(dx, dy, dz) || 1e-4;
    const o = this.o;
    o.position.set((ax + bx) / 2, (ay + by) / 2, (az + bz) / 2);
    o.quaternion.setFromUnitVectors(AXZ, SCR.set(dx / len, dy / len, dz / len));
    o.scale.set(th, th, len); o.updateMatrix();
    o.matrix.toArray(K.mat, i * 16);
    const j = i * 3; K.col[j] = col[0]; K.col[j + 1] = col[1]; K.col[j + 2] = col[2];
  }
  /** a catenary / telephone wire sagging between two z */
  sag(K, x, y, z0, z1, s, col, th = 0.035, n = 5) {
    for (let k = 0; k < n; k++) {
      const a = k / n, b = (k + 1) / n;
      this.seg(K, x, y - s * 4 * a * (1 - a), z0 + (z1 - z0) * a, x, y - s * 4 * b * (1 - b), z0 + (z1 - z0) * b, th, col);
    }
  }
  /** a rectangle outline standing on y=0: the building primitive */
  box(K, x, z, w, d, h, col, ry = 0) {
    const c = Math.cos(ry), sn = Math.sin(ry), P = (dx, dz, y) => [x + dx * c - dz * sn, y, z + dx * sn + dz * c];
    const q = [P(-w / 2, -d / 2, 0), P(w / 2, -d / 2, 0), P(w / 2, d / 2, 0), P(-w / 2, d / 2, 0),
      P(-w / 2, -d / 2, h), P(w / 2, -d / 2, h), P(w / 2, d / 2, h), P(-w / 2, d / 2, h)];
    for (const [i, j] of [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]]) this.seg(K, ...q[i], ...q[j], 0.06, col);
  }
  /** bake a sink into a fresh InstancedMesh (build-time only) */
  makeMesh(K, mat) {
    const n = Math.min(K.n, K.cap);
    const m = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), mat, n);
    m.instanceMatrix.array.set(K.mat.subarray(0, n * 16));
    m.instanceColor = new THREE.InstancedBufferAttribute(K.col.slice(0, n * 3), 3);
    m.frustumCulled = false;
    m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true;
    return m;
  }
  // ---- static build -------------------------------------------------------------------
  buildStatic(K, R) {
    // telephone poles along the road, each with a sagging wire run
    for (let z = -640; z < 200; z += 28) {
      this.seg(K, 14.3, 0, z, 14.3, 10, z, 0.09, [0.5, 0.44, 0.34]);
      this.seg(K, 13.4, 9.2, z, 15.2, 9.2, z, 0.07, [0.5, 0.44, 0.34]);
      for (const dx of [-0.9, 0, 0.9]) this.sag(K, 14.3 + dx, 9.3, z, z + 28, 0.7, [0.34, 0.30, 0.26], 0.03, 4);
    }
    // paddy dykes: a sparse field grid on the land side. It used to be a 34m lattice over the whole plain,
    // which at any distance collapsed into moire snow - now only the near rows read, and they are dim.
    for (let z = -640; z < 220; z += 68) this.seg(K, 16, 0.05, z, 150, 0.05, z, 0.028, [0.07, 0.20, 0.16]);
    for (let x = 20; x < 150; x += 68) this.seg(K, x, 0.05, -640, x, 0.05, 220, 0.028, [0.07, 0.20, 0.16]);
    // farmhouses: pure outlines, a quarter of them lit warm so the eye has somewhere to rest
    for (let i = 0; i < 46; i++) {
      const x = 26 + Math.pow(R(), 1.5) * 130, z = -600 + R() * 800, w = 6 + R() * 6, d = 7 + R() * 6, h = 3 + R() * 3.5;
      if (Math.abs(z - CZ) < 10) continue;
      const warm = R() < 0.25, col = warm ? [0.85, 0.6, 0.28] : [0.16, 0.28, 0.34];
      this.box(K, x, z, w, d, h, col, (R() - 0.5) * 0.4);
      if (warm) {
        for (const wy of [h * 0.35, h * 0.62]) this.seg(K, x - w * 0.18, wy, z + d / 2, x + w * 0.18, wy, z + d / 2, 0.07, [0.95, 0.78, 0.42]);
      }
    }
    // distant pylons: vertical accents that give the horizon a scale
    for (let i = 0; i < 7; i++) {
      const x = 90 + R() * 220, z = -560 + i * 110 + R() * 50, h = 26 + R() * 16;
      this.seg(K, x, 0, z, x, h, z, 0.1, [0.20, 0.36, 0.44]);
      this.seg(K, x - 4, h * 0.72, z, x + 4, h * 0.72, z, 0.08, [0.20, 0.36, 0.44]);
      this.seg(K, x - 3, h * 0.9, z, x + 3, h * 0.9, z, 0.08, [0.20, 0.36, 0.44]);
    }
    // the level crossing: striped posts, crossbucks, both barriers lowered, lamp housings
    for (const [px, pz, dir] of [[5.6, CZ - 4, 1], [-5.6, CZ + 4, -1]]) {
      const flip = Math.sign(px);
      for (let k = 0; k < 10; k++) this.seg(K, px, k * 0.42, pz, px, k * 0.42 + 0.42, pz, 0.13, k % 2 ? WH : [0.9, 0.18, 0.18]);
      for (const r of [0.6, -0.6]) {                    // crossbuck blades, crossed
        const s = Math.sin(r) * 0.9, cy = Math.cos(r) * 0.9;
        this.seg(K, px, 3.75 - cy, pz + dir * 0.8 - s, px, 3.75 + cy, pz + dir * 0.8 + s, 0.09, WH);
      }
      this.seg(K, px, 1.05, pz - dir * 0.1, px, 1.05, pz + dir * 7.6, 0.11, WH);          // barrier arm, held down
      this.seg(K, px, 1.05, pz + dir * 7.6, px, 0.85, pz + dir * 7.6, 0.11, [0.9, 0.18, 0.18]);
      for (const dz of [-0.38, 0.38]) this.seg(K, px, 2.66, pz + dz, px, 3.14, pz + dz, 0.16, [0.45, 0.45, 0.5]);
      this.seg(K, px + 0.45 * flip, 0, pz, px + 0.45 * flip, 1.0, pz, 0.14, [0.6, 0.6, 0.66]);
    }
  }
  // ---- the train -----------------------------------------------------------------------
  buildTrain(mat) {
    const K = this.sink(900), W2 = 1.45, FZ = -1.55;   // FZ puts the cab nose at the group origin
    for (let i = 0; i < NCAR; i++) {
      const z0 = FZ - i * CAR, z1 = z0 + CAR - 0.6, lead = i === 0, body = lead ? WH : CY;
      for (const z of [z0, z1]) {                      // cross-section rings
        const P = [[-W2, 0.9], [W2, 0.9], [W2, 0.9 + 2.1], [-W2, 0.9 + 2.1]].map(([x, y]) => [x, y, z]);
        for (let k = 0; k < 4; k++) this.seg(K, ...P[k], ...P[(k + 1) % 4], 0.065, body);
      }
      for (const [x, y] of [[-W2, 0.9], [W2, 0.9], [W2, 3.0], [-W2, 3.0]]) this.seg(K, x, y, z0, x, y, z1, 0.06, body);
      // window band: two rails with the window rhythm ticked in between - the one detail that reads as a train
      for (const x of [-W2, W2]) {
        this.seg(K, x, 2.35, z0, x, 2.35, z1, 0.05, [0.5, 0.86, 1.0]);
        this.seg(K, x, 2.9, z0, x, 2.9, z1, 0.05, [0.5, 0.86, 1.0]);
        for (let z = z0 + 0.9; z < z1 - 0.4; z += 1.15) this.seg(K, x, 2.35, z, x, 2.9, z, 0.042, [0.35, 0.66, 0.8]);
        const dz = z0 + CAR * 0.42;                    // one door opening per car, marked magenta
        this.seg(K, x, 0.95, dz, x, 2.75, dz, 0.05, MG);
        this.seg(K, x, 0.95, dz + 0.85, x, 2.75, dz + 0.85, 0.05, MG);
      }
      for (const bz of [z0 + 3.2, z1 - 3.2]) {         // bogies
        for (const s of [-1, 1]) {
          for (const bx of [-1.0, 1.0]) this.seg(K, bx, 0.15, bz + s * 1.1, bx, 1.15, bz + s * 1.1, 0.05, [0.22, 0.3, 0.38]);
          this.seg(K, -1.3, 0.15, bz + s * 1.1, 1.3, 0.15, bz + s * 1.1, 0.05, [0.22, 0.3, 0.38]);
        }
      }
    }
    // cab: a raked front on the leading car
    const fz = FZ, tip = 0;
    for (const x of [-W2, W2]) { this.seg(K, x, 0.9, fz, x * 0.55, 0.9, tip, 0.06, WH); this.seg(K, x, 3.0, fz, x * 0.55, 1.75, tip, 0.06, WH); }
    this.seg(K, -W2, 0.9, fz, W2, 0.9, fz, 0.06, WH); this.seg(K, -W2, 3.0, fz, W2, 3.0, fz, 0.06, WH);
    for (const x of [-0.55, 0.55]) this.seg(K, x, 0.9, tip, x, 1.75, tip, 0.06, WH);
    this.seg(K, -0.55, 1.75, tip, 0.55, 1.75, tip, 0.06, WH);
    const pz = FZ - 6;                                 // pantograph
    this.seg(K, -0.8, 3.0, pz, 0, 4.3, pz - 1.1, 0.055, AM); this.seg(K, 0.8, 3.0, pz, 0, 4.3, pz - 1.1, 0.055, AM);
    this.seg(K, -1.6, 4.3, pz - 1.6, 1.6, 4.3, pz - 1.6, 0.05, AM);
    const g = new THREE.Group(), mesh = this.makeMesh(K, mat); g.add(mesh);
    // headlights: two small glow quads on the cab face, riding the scene's lamp falloff. The train passes
    // within a couple of metres of the camera, so the quad has to be much tighter than a crossing lamp.
    this.headMat = new THREE.ShaderMaterial({ uniforms: { uOn: { value: 1 }, uCol: { value: [2.2, 2.0, 1.6] } }, vertexShader: FLAT_V, fragmentShader: LAMP_F, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    this.headSprites = [];
    for (const x of [-0.95, 0.95]) {
      const s = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.9), this.headMat);
      s.position.set(x, 1.35, 0.3); s.renderOrder = 7; g.add(s); this.headSprites.push(s);
    }
    return g;
  }
  // ---- streaming geometry ---------------------------------------------------------------
  /** refill the dynamic pool around the camera's z so the line always looks infinite */
  stream(t, camZ) {
    const K = this.D; K.n = 0;
    const z0 = camZ - WIN, z1 = camZ + WIN, pulse = audio.hitPulse('kick', t, 9);
    // rails: long segments per railtop, warm on the near track and cold on the far one
    for (const sx of [-5.9, -4.5, 4.5, 5.9]) {
      const col = sx < 0 ? [0.85, 0.9, 1.0] : [1.0, 0.72, 0.45];
      for (let z = z0; z < z1; z += 26) this.seg(K, sx, 0.16, z, sx, 0.16, Math.min(z + 26, z1), 0.07, col);
    }
    // sleepers: the beat clock made visible - bands of light travel down the track
    const sB = 0.62;
    for (let z = z0 + ((camZ * 0.5) % sB); z < z1; z += sB) {
      const w = Math.sin((z - camZ) * 0.42 - t * 7.2);
      const lit = 0.20 + 0.85 * Math.pow(Math.max(0, w), 6) + 0.3 * pulse;
      for (const sx of [-5.75, -4.65]) this.seg(K, sx - 0.45, 0.12, z, sx + 0.45, 0.12, z, 0.05, [0.28 * lit, 0.5 * lit, 0.72 * lit]);
      for (const sx of [4.65, 5.75]) this.seg(K, sx - 0.45, 0.12, z, sx + 0.45, 0.12, z, 0.05, [0.72 * lit, 0.36 * lit, 0.2 * lit]);
    }
    // catenary portals: one every PITCH, so they tick past exactly on the beat; the nearest one flares
    const b0 = Math.ceil((z0 + 700) / PITCH) * PITCH - 700;
    for (let z = b0; z < z1; z += PITCH) {
      const near = Math.max(0, 1 - Math.abs(z - camZ) / 9.0), fl = 0.4 + 0.6 * near + pulse * 0.5;
      const col = [0.24 * fl, 0.5 * fl, 0.72 * fl], col2 = [0.62 * fl, 0.22 * fl, 0.5 * fl], hot = near > 0.2 ? WH : col;
      for (const sx of [-4.9, 4.9]) this.seg(K, sx, 0, z, sx, 7.6, z, 0.13, hot);
      this.seg(K, -4.9, 7.35, z, 4.9, 7.35, z, 0.12, hot);
      this.seg(K, -4.9, 6.55, z, 4.9, 6.55, z, 0.07, col2);
      for (const tx of [-TX, TX]) {
        this.seg(K, tx, 6.9, z, tx, 6.9, z, 0.07, AM);
        this.sag(K, tx, 7.05, z, z + PITCH, 0.38, [0.55, 0.38, 0.2], 0.045, 5);
        this.sag(K, tx, 5.85, z, z + PITCH, 0.03, [0.45, 0.3, 0.16], 0.04, 2);
      }
    }
    const n = Math.min(K.n, POOL);
    this.pool.instanceMatrix.array.set(K.mat.subarray(0, n * 16));
    this.pool.instanceColor.array.set(K.col.subarray(0, n * 3));
    this.pool.count = n;
    this.pool.instanceMatrix.needsUpdate = true; this.pool.instanceColor.needsUpdate = true;
  }
  update(t) {
    this.U.uT.value = t;
    const inR1 = t < 173, tz = trainZ(t), c = this.camera;
    applyCam(c, inR1 ? K1 : K2, t, 0, inR1 ? (u) => u : ease.inOut);
    this.train.position.z = tz;
    this.U.uGlow.value = 1.0 + audio.hitPulse('kick', t, 8) * 0.25;
    this.stream(t, c.position.z);
    // shake while the train is alongside
    const cz = c.position.z, along = smooth(-2, 2, tz - cz) * smooth(-NCAR * CAR - 2, -NCAR * CAR + 2, cz - tz);
    this.near = along;
    c.position.x += Math.sin(t * 83) * 0.05 * along; c.position.y += Math.sin(t * 97 + 2) * 0.06 * along;
    this.sky.position.copy(c.position);
    // crossing lamps alternate on the beat
    const bk = beatNo(t) % 2;
    this.LU[0].uOn.value = bk === 0 ? 1 : 0; this.LU[1].uOn.value = bk === 1 ? 1 : 0;
    for (const l of this.lamps) l.quaternion.copy(c.quaternion);
    for (const s of this.headSprites) s.quaternion.copy(c.quaternion);
  }
  post(t) {
    const K = audio.hitPulse('kick', t, 10), n = this.near || 0, crane = smooth(179.3, 181.2, t);
    // bloom threshold sits high and bloom low: the point of line art is that the lines stay lines
    return { exposure: 0.92 + 0.04 * K, bloom: 0.26 + n * 0.16 + crane * 0.3, bloomThr: 0.78 - crane * 0.06,
      sat: 1.14, contrast: 1.26, vig: 0.58, grain: 0.035, ca: 0.35 + n * 0.8 + crane * 0.3, lift: [-0.03, -0.02, -0.006],
      dust: 0.04, dustCol: [0.6, 0.9, 1.0], shake: n * 0.26 + K * 0.1, leak: 0.04 + crane * 0.22,
      fadeW: smooth(180.74, 181.14, t) * 0.7 };
  }
}
// R1: low on the down track running into the sun, portals ticking past on the beat
const K1 = [[R1[0], -2, 1.7, 0, 0.6, 2.5, -40, 58, 0.03],
  [R1[1] + 0.05, -2, 1.9, -V1 * (R1[1] + 0.05 - R1[0]), 0.9, 2.9, -V1 * (R1[1] - R1[0]) - 40, 56, -0.01]];
// R2: the crossing, then the crane up the mast into the wires and the sun
const K2 = [
  [R2[0], 8.2, 1.2, CZ + 7, 1.5, 2.4, CZ - 40, 48, 0.0], [176.9, 7.9, 1.25, CZ + 6.2, 1.0, 2.3, CZ - 40, 46, 0.01],
  [179.4, 7.4, 1.4, CZ + 5.6, 0.6, 2.8, CZ - 40, 44, -0.01], [181.3, 5.5, 11.5, CZ + 11, -14, 21, CZ - 40, 64, -0.08],
];
