// Studio (v2) 84.92-89.26 "あなたが焼きついたまま / 私の心のプロジェクター": the Tokyo-3 fight turns out to be a
// tokusatsu miniature set on a soundstage. A projector throws the fight onto a cinema screen behind the miniature
// city, Unit-01 / Unit-13 cut-outs stand among the models, scaffolding and studio lamps slam on with the kicks
// after the hit, the reels spin in macro, and at 88.64 the film burns through ("焼きついた") into white.
import * as THREE from 'three';
import { Scene } from './base.js';
import { NOISE } from '../core/glsl.js';
import { applyCam } from './camkeys.js';
import { canvas, tex } from '../core/textures.js';
import { cutMat, cutGeo } from '../core/images.js';
import { smooth, clamp, rng } from '../core/util.js';
import { audio } from '../core/audio.js';

const HIT1 = 86.89, BURN = 88.64;
const SCR = { w: 9.6, h: 5.4, y: 3.2, z: -10 }, PJ = new THREE.Vector3(0, 2.6, 7.5);
const SCREEN_F = /* glsl */ `uniform sampler2D uTex; uniform float uT, uFl, uBurn, uHeat; varying vec2 vUv; ${NOISE}
void main(){ vec2 uv = vUv + vec2(0.0, (vnoise(vec2(uT * 9.0, 0.0)) - 0.5) * 0.004);
  vec3 c = texture2D(uTex, uv).rgb;
  c *= 1.15 - 0.55 * length(vUv - 0.5) ; c *= uFl;
  float sx = hash12(vec2(floor(uT * 24.0), 3.0)); c *= 1.0 - 0.5 * smoothstep(0.003, 0.0, abs(vUv.x - sx)) * step(0.6, hash12(vec2(floor(uT * 24.0), 7.0)));
  // burn: the frame melts from a hot spot (film stuck in the gate)
  float d = length((vUv - vec2(0.56, 0.52)) * vec2(1.6, 1.0)) + 0.18 * fbm(vUv * 7.0 + uT * 0.6);
  float th = uBurn * 1.3, edge = smoothstep(th + 0.12, th, d);
  c = mix(c, c * vec3(1.4, 0.7, 0.3), uHeat * 0.6 + edge * 0.8);
  c += vec3(2.2, 0.9, 0.3) * smoothstep(0.08, 0.0, abs(d - th)) * step(0.001, uBurn);
  c = mix(c, vec3(1.25, 1.15, 1.0) * uFl, smoothstep(th - 0.03, th - 0.06, d) * step(0.001, uBurn));
  gl_FragColor = vec4(c, 1.0); }`;
const BEAM_V = 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }';
const BEAM_F = /* glsl */ `uniform float uT, uA; uniform vec3 uO, uE, uCol; uniform vec2 uH; varying vec3 vW; ${NOISE}
void main(){ vec3 ax = uE - uO; float L = length(ax); ax /= L; vec3 r = vW - uO; float s = max(dot(r, ax), 0.001);
  vec3 lat = r - ax * s; vec2 q = vec2(lat.x, lat.y) / (uH * s / L);                     // -1..1 across the frame
  float edge = smoothstep(1.0, 0.55, abs(q.x)) * smoothstep(1.0, 0.5, abs(q.y));
  float rays = 0.55 + 0.45 * vnoise(q * 7.0 + 3.0) + 0.25 * vnoise(q * 23.0);
  float n = 0.6 + 0.4 * fbm3(vW * 0.7 + vec3(0.0, uT * 0.15, uT * 0.1));
  float a = uA * n * rays * edge * (0.08 + 0.92 * exp(-s * 0.14)) * 0.14; gl_FragColor = vec4(uCol * a, 1.0); }`;
const CONE_F = /* glsl */ `uniform float uA; uniform vec3 uO; varying vec3 vW;
void main(){ float d = length(vW - uO); gl_FragColor = vec4(vec3(1.0, 0.86, 0.66) * uA * exp(-d * 0.35) * 0.22, 1.0); }`;
const CAM = [
  [84.9, -1.7, 0.45, 2.6, -0.6, 1.4, -10, 42, 0.03], [86.87, -0.9, 0.75, -0.6, 0.4, 2.2, -10, 42, -0.02],
  [86.9, -1.3, 2.3, 9.9, 0.9, 2.9, 1.0, 46, 0.05], [87.9, -1.0, 2.5, 9.3, 0.7, 2.9, 1.0, 42, 0.02],
  [87.93, -1.75, 2.95, 8.15, -0.05, 2.8, 7.2, 34, -0.05], [88.62, -1.55, 2.9, 8.05, -0.05, 2.75, 7.25, 30, -0.05],
  [88.65, 2.6, 5.4, 12.5, 0.0, 2.9, -10, 46, 0.0], [89.4, 2.2, 5.0, 11.5, 0.0, 3.0, -10, 44, 0.0],
];

function windowsTex() {
  const c = canvas(256, 512), g = c.getContext('2d'), R = rng(8);
  g.fillStyle = '#4a4a52'; g.fillRect(0, 0, 256, 512);
  for (let y = 8; y < 504; y += 22) for (let x = 10; x < 246; x += 26) {
    const on = R() < 0.35; g.fillStyle = on ? `rgb(255,${190 + R() * 50 | 0},${120 + R() * 60 | 0})` : `rgb(${30 + R() * 25 | 0},${34 + R() * 25 | 0},${44 + R() * 25 | 0})`;
    g.fillRect(x, y, 16, 12);
  }
  return tex(c);
}
function reelTex() {
  const c = canvas(256, 256), g = c.getContext('2d');
  g.fillStyle = '#2a2a2e'; g.beginPath(); g.arc(128, 128, 126, 0, 7); g.fill();
  g.fillStyle = '#141416'; g.beginPath(); g.arc(128, 128, 100, 0, 7); g.fill();          // wound film
  g.fillStyle = '#8c8c92'; g.beginPath(); g.arc(128, 128, 60, 0, 7); g.fill();
  g.fillStyle = '#0a0a0a'; for (let i = 0; i < 5; i++) { const a = i * 1.2566; g.beginPath(); g.arc(128 + Math.cos(a) * 38, 128 + Math.sin(a) * 38, 15, 0, 7); g.fill(); }
  g.beginPath(); g.arc(128, 128, 7, 0, 7); g.fill();
  return tex(c);
}
function stripTex(img) {
  const c = canvas(256, 1024), g = c.getContext('2d'); g.fillStyle = '#120c08'; g.fillRect(0, 0, 256, 1024);
  for (let i = 0; i < 6; i++) {
    const y = i * 170 + 8; if (img) { const sw = img.width * 0.55, sx = img.width * (0.1 + 0.06 * i); g.drawImage(img, sx, img.height * 0.2, sw, sw * 0.62, 36, y, 184, 150); }
    g.fillStyle = 'rgba(255,170,80,0.25)'; g.fillRect(36, y, 184, 150);
  }
  g.fillStyle = '#e8d8b8'; for (let y = 4; y < 1024; y += 28) { g.fillRect(8, y, 16, 14); g.fillRect(232, y, 16, 14); }
  const t = tex(c); t.wrapT = THREE.RepeatWrapping; return t;
}

export class Studio extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 42, near: 0.05, far: 200 });
    const S = this.scene, R = rng(85), I = ctx.img, fight = I.set_fight;
    S.fog = new THREE.FogExp2(0x07050a, 0.035);
    this.clear.set(0x040306);
    S.add(new THREE.AmbientLight(0x3a3040, 0.5));
    this.U = { uTex: { value: fight?.tex }, uT: { value: 0 }, uFl: { value: 1 }, uBurn: { value: 0 }, uHeat: { value: 0 } };
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(SCR.w, SCR.h), new THREE.ShaderMaterial({ uniforms: this.U, vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }', fragmentShader: SCREEN_F, fog: false }));
    scr.position.set(0, SCR.y, SCR.z); S.add(scr);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(SCR.w + 0.6, SCR.h + 0.6, 0.1), new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.9 }));
    frame.position.set(0, SCR.y, SCR.z - 0.08); S.add(frame);
    this.screenLight = new THREE.PointLight(0xff9a70, 8, 0, 1.2); this.screenLight.position.set(0, 3, SCR.z + 2.5); S.add(this.screenLight);
    // floor
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ color: 0x1a1618, roughness: 0.35, metalness: 0.2 }));
    floor.rotation.x = -Math.PI / 2; S.add(floor);
    // miniature Tokyo-3 (between z -9 and -3; a street down the middle)
    const wt = windowsTex(), bm = new THREE.MeshStandardMaterial({ map: wt, emissive: 0xffffff, emissiveMap: wt, emissiveIntensity: 0.35, roughness: 0.6, color: 0x9a96a0 }); const bg = new THREE.BoxGeometry(1, 1, 1); bg.translate(0, 0.5, 0);
    const N = 90, city = new THREE.InstancedMesh(bg, bm, N), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
    let k = 0;
    for (let i = 0; i < N * 3 && k < N; i++) {
      const x = (R() - 0.5) * 11, z = -9 + R() * 5.8; if (Math.abs(x) < 0.7) continue;
      const h = 0.4 + R() * R() * 2.6, w = 0.25 + R() * 0.35;
      e.set(0, (R() - 0.5) * 0.2, k === 7 ? 0.5 : 0); q.setFromEuler(e);
      m4.compose(new THREE.Vector3(x, 0, z), q, new THREE.Vector3(w, h, w * (0.8 + R() * 0.5))); city.setMatrixAt(k++, m4);
    }
    city.count = k; S.add(city);
    // the two Evas (backlit cut-outs)
    this.evas = [];
    [['cut_e01', -1.6, -7.2, 3.1, 0.2], ['cut_e13', 1.9, -7.6, 3.3, -0.25]].forEach(([n, x, z, h, ry], i) => {
      const en = I[n]; if (!en) return; const m = cutMat(en, { wind: 0, rim: 1.2, seed: i * 2.3 });
      m.uniforms.uTint.value.set(0.42, 0.34, 0.4); m.uniforms.uRim.value.set(1, 0.72, 0.5, 0.5);
      const me = new THREE.Mesh(cutGeo(en, h), m); me.position.set(x, 0, z); me.rotation.y = ry; me.renderOrder = 5; S.add(me); this.evas.push(me);
    });
    // scaffolding towers + catwalk truss
    const pm = new THREE.MeshStandardMaterial({ color: 0x6a6a70, metalness: 0.8, roughness: 0.4 }), pg = new THREE.CylinderGeometry(0.035, 0.035, 1, 6);
    const pipes = []; const P = (a, b) => pipes.push([a, b]);
    for (const sx of [-1, 1]) for (let z = -10; z <= 4; z += 2) {
      const x0 = sx * 6.2, x1 = sx * 7.4;
      P([x0, 0, z], [x0, 8, z]); P([x1, 0, z], [x1, 8, z]);
      for (let y = 1.5; y <= 7.5; y += 2) { P([x0, y, z], [x1, y, z]); if (z < 4) { P([x0, y, z], [x0, y, z + 2]); P([x1, y, z], [x1, y + 2 > 8 ? y : y + 2, z + 2]); } }
    }
    for (let x = -6; x <= 6; x += 2) P([x, 8, -4], [x, 8, 2]);
    P([-6.2, 8, -4], [6.2, 8, -4]); P([-6.2, 8, 2], [6.2, 8, 2]);
    const sc = new THREE.InstancedMesh(pg, pm, pipes.length), up = new THREE.Vector3(0, 1, 0);
    pipes.forEach(([a, b], i) => { const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A);
      m4.compose(A.clone().add(B).multiplyScalar(0.5), q.setFromUnitVectors(up, d.clone().normalize()), new THREE.Vector3(1, d.length(), 1)); sc.setMatrixAt(i, m4); });
    S.add(sc);
    // studio lamps on the truss: switch on one by one with the kicks after the hit
    this.lamps = []; const cg = new THREE.ConeGeometry(2.2, 8, 24, 1, true); cg.translate(0, -4, 0);
    for (let i = 0; i < 6; i++) {
      const x = -5 + i * 2, o = new THREE.Vector3(x, 7.9, -1 + (i % 2) * 1.5);
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.3, 0.5, 12), new THREE.MeshStandardMaterial({ color: 0x151515, metalness: 0.6, roughness: 0.5 }));
      body.position.copy(o); S.add(body);
      const u = { uA: { value: 0 }, uO: { value: o } };
      const cone = new THREE.Mesh(cg, new THREE.ShaderMaterial({ uniforms: u, vertexShader: BEAM_V, fragmentShader: CONE_F, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      cone.position.copy(o); cone.lookAt(x * 0.3, 0, -5); cone.rotateX(-Math.PI / 2); S.add(cone);
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ctx.shared.glow, color: 0xffe0b0, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
      sp.position.copy(o).add(new THREE.Vector3(0, -0.3, 0)); sp.scale.setScalar(1.6); S.add(sp);
      this.lamps.push({ u, sp, on: HIT1 + 0.1 + i * 0.25 });
    }
    this.stage = new THREE.SpotLight(0xffe2c0, 0, 0, 0.7, 0.6, 0); this.stage.position.set(0, 8, -1); this.stage.target.position.set(0, 0, -6); S.add(this.stage, this.stage.target);
    // projector: body, lens, two reels, a viewer window with the running strip
    const pj = new THREE.Group(); pj.position.copy(PJ); S.add(pj); this.pj = pj;
    const pr = new THREE.PointLight(0xffb070, 1.5, 4, 1); pr.position.set(0.8, 1.4, 1.2); pj.add(pr);
    const pr2 = new THREE.PointLight(0x8090ff, 0.8, 4, 1); pr2.position.set(-1, 0.3, 0.8); pj.add(pr2);
    const dark = new THREE.MeshStandardMaterial({ color: 0x2b2a2e, metalness: 0.7, roughness: 0.35 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.9), dark); pj.add(body);
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.3, 24), dark); lens.rotation.x = Math.PI / 2; lens.position.set(0, 0.05, -0.58); pj.add(lens);
    const glass = new THREE.Sprite(new THREE.SpriteMaterial({ map: ctx.shared.glow, color: 0xfff0d8, blending: THREE.AdditiveBlending, depthWrite: false })); glass.position.set(0, 0.05, -0.75); glass.scale.setScalar(0.9); pj.add(glass); this.glass = glass;
    const rt = reelTex(), rm = [new THREE.MeshStandardMaterial({ color: 0x3a3a40, metalness: 0.8, roughness: 0.3 }), new THREE.MeshStandardMaterial({ map: rt, metalness: 0.5, roughness: 0.4 }), new THREE.MeshStandardMaterial({ map: rt, metalness: 0.5, roughness: 0.4 })];
    this.reels = [[-0.35, 0.62, 0.42], [0.3, 0.6, 0.38]].map(([z, y, r]) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.06, 40), rm); m.rotation.z = Math.PI / 2; m.position.set(0, y + 0.3, z); pj.add(m); return m; });
    this.strip = stripTex(fight?.img); this.strip.repeat.set(1, 0.5);
    const win = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.4), new THREE.MeshBasicMaterial({ map: this.strip, color: 0xffd8a8 }));
    win.position.set(-0.252, 0.02, -0.1); win.rotation.y = -Math.PI / 2; pj.add(win);
    const film = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.95, -0.7), new THREE.Vector3(0, 0.5, -0.5), new THREE.Vector3(0, 0.25, -0.2), new THREE.Vector3(0, 0.3, 0.2), new THREE.Vector3(0, 0.6, 0.62)]), 40, 0.012, 4), new THREE.MeshStandardMaterial({ color: 0x3a2418, roughness: 0.3 }));
    pj.add(film);
    // beam: pyramid from the lens to the screen corners
    const o = PJ.clone().add(new THREE.Vector3(0, 0.05, -0.75)), cs = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => [a * SCR.w / 2, SCR.y + b * SCR.h / 2, SCR.z + 0.02]);
    const pos = []; for (let i = 0; i < 4; i++) { const a = cs[i], b = cs[(i + 1) % 4]; pos.push(o.x, o.y, o.z, ...a, ...b); }
    const bgeo = new THREE.BufferGeometry(); bgeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    this.BU = { uT: this.U.uT, uA: { value: 1 }, uO: { value: o }, uE: { value: new THREE.Vector3(0, SCR.y, SCR.z) }, uH: { value: new THREE.Vector2(SCR.w / 2, SCR.h / 2) }, uCol: { value: new THREE.Color(1, 0.86, 0.7) } };
    S.add(new THREE.Mesh(bgeo, new THREE.ShaderMaterial({ uniforms: this.BU, vertexShader: BEAM_V, fragmentShader: BEAM_F, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false })));
    // dust in the beam
    const dn = 1400, dp = new Float32Array(dn * 3);
    for (let i = 0; i < dn; i++) { const u = R(), a = (R() - 0.5) * 0.9, b = (R() - 0.5) * 0.9; dp.set([o.x + a * SCR.w * u, o.y + (SCR.y + b * SCR.h - o.y) * u, o.z + (SCR.z - o.z) * u], i * 3); }
    const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(dp, 3));
    this.dust = new THREE.Points(dg, new THREE.PointsMaterial({ map: ctx.shared.glow, color: 0xffdcb4, size: 0.05, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false }));
    S.add(this.dust);
  }
  update(t) {
    const K = audio.hitPulse('kick', t, 8), H = audio.hitPulse('hit', t, 5);
    applyCam(this.camera, CAM, t, 0.01 * H);
    const fl = 0.9 + 0.1 * Math.sin(t * 150.8) * Math.sin(t * 47) + 0.15 * K;
    const burn = smooth(BURN - 0.05, 89.3, t), heat = smooth(87.8, BURN, t);
    this.U.uT.value = t; this.U.uFl.value = fl; this.U.uBurn.value = burn; this.U.uHeat.value = heat;
    this.BU.uA.value = fl * (1 + H * 0.8 + burn * 2);
    this.screenLight.intensity = (7 + 5 * K + 12 * burn) * fl;
    let lit = 0;
    for (const L of this.lamps) { const a = smooth(L.on, L.on + 0.06, t); lit += a; L.u.uA.value = a * (1 + 0.4 * K); L.sp.material.opacity = a; }
    this.stage.intensity = lit * 1.6;
    this.reels.forEach((r, i) => { r.rotation.x = -t * (i ? 5.2 : 4.1); });
    this.strip.offset.y = Math.floor(t * 24) * (170 / 1024);
    this.glass.scale.setScalar(0.8 + 0.3 * fl + 0.8 * burn);
    for (const e of this.evas) { e.material.uniforms.uT.value = t; e.material.uniforms.uRim.value.w = 0.45 + 0.6 * K; }
    this.dust.position.y = Math.sin(t * 0.3) * 0.05;
  }
  post(t) {
    const K = audio.hitPulse('kick', t, 10), H = audio.hitPulse('hit', t, 7);
    return { bloom: 0.9, bloomThr: 0.74, grain: 0.1, vig: 0.7, ca: 0.8 + H, flicker: 0.12, scratch: 0.25, weave: 0.3, punch: 0.3 * K,
      shake: 0.004 * H, tint: [1.05, 0.95, 0.86], dust: 0.35, dustCol: [1, 0.8, 0.6], fadeW: smooth(88.9, 89.3, t) * 0.7 };
  }
}
