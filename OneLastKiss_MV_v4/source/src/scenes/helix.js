// 忘れられない人 ... I love you more than you'll ever know - the climax.
// Out of the red sea two strands of light (gold = 私, red = あなた) twist up into the sky as a double helix,
// its rungs strung with the memories of the whole film. The camera climbs with it; every "oh" sends a pulse
// racing up the strands and a shock ring across the column. On the first "I love you" the hero photo rises
// from the core; then the helix parts and we fly up the inside of the vortex. On the last "I love you" the
// crown opens like a flower, the cards burst outward, a rainbow halo turns overhead and the sky fills with
// aurora - then the helix burns away from the root into rising light.
import * as THREE from 'three';
import { Scene } from './base.js';
import { clamp, lerp, range, smooth, ease, rng } from '../core/util.js';
import { audio } from '../core/audio.js';
import { OH_TIMES, LOVE_TIMES } from '../lyrics-data.js';
import { SKY_VERT, SKY_FRAG, STRAND_VERT, STRAND_FRAG, RUNG_VERT, RUNG_FRAG, CARD_VERT, CARD_FRAG, HERO_FRAG,
  FLAT_VERT, RING_FRAG, HALO_FRAG, MOTE_VERT } from './helix-glsl.js';
import { POINT_FRAG } from '../core/glsl.js';

const T0 = 166.17, T1 = 217.6, CROWN = 72, HY = 46, RAD = 1.6, NR = 8;
const TH0 = 181.25, TH1 = 184.75, TF = 198.3, TG = 207.5;
// camera: [t, height, orbit radius, azimuth, look height offset]
const CAM = [[T0, 1.2, 9.5, 0.0, 3.5], [168.7, 5, 8.5, 0.6, 4], [170.67, 12, 7.8, 1.3, 4.5], [175.47, 26, 6.8, 2.4, 3.5],
  [179.8, 41, 6.4, 3.1, 2], [TH0, 44.8, 6.0, 3.45, 1.2], [184.3, 47, 5.2, 4.15, 1], [186.2, 50.5, 0.35, 4.9, 14],
  [192.5, 62, 0.25, 6.9, 14], [197.6, 70, 0.25, 8.4, 14], [200.6, 79, 3.5, 9.0, 11], [205, 91, 9, 9.8, -16],
  [211.5, 97, 20, 10.4, -26], [T1, 101, 32, 10.9, -34]];

// Catmull-Rom through the keys (no stops at each key)
function spline(t, K) {
  let i = 0; while (i < K.length - 2 && t > K[i + 1][0]) i++;
  const a = K[Math.max(0, i - 1)], b = K[i], c = K[i + 1], d = K[Math.min(K.length - 1, i + 2)];
  const u = clamp((t - b[0]) / (c[0] - b[0])), u2 = u * u, u3 = u2 * u;
  return b.slice(1).map((_, j) => {
    const p0 = a[j + 1], p1 = b[j + 1], p2 = c[j + 1], p3 = d[j + 1];
    return 0.5 * (2 * p1 + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u2 + (-p0 + 3 * p1 - 3 * p2 + p3) * u3);
  });
}

export class Helix extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 55, near: 0.05, far: 1500 });
    const V = (v) => ({ value: v });
    this.H = { uT: V(0), uSpin: V(0), uGrow: V(0), uOpen: V(0), uCrown: V(CROWN), uRad: V(RAD), uGone: V(-20), uBeat: V(0), uRain: V(0) };
    const add = { transparent: true, depthWrite: false, blending: THREE.AdditiveBlending };
    // sky + sea
    this.SK = { uT: this.H.uT, uAlt: V(0), uRain: this.H.uRain, uGlow: V(1), uBright: V(1) };
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(600, 48, 24), new THREE.ShaderMaterial({ vertexShader: SKY_VERT, fragmentShader: SKY_FRAG,
      uniforms: this.SK, side: THREE.BackSide, depthWrite: false }));
    this.sky.renderOrder = -10; this.sky.frustumCulled = false;
    // strands
    const NY = 1100, NA = 10, ymax = CROWN + 4, pos = [], aP = [], idx = [];
    for (let s = 0; s < 2; s++) for (let i = 0; i <= NY; i++) for (let j = 0; j < NA; j++) { aP.push(i / NY * ymax, j / NA * 6.2832, s); pos.push(0, 0, 0); }
    for (let s = 0; s < 2; s++) for (let i = 0; i < NY; i++) for (let j = 0; j < NA; j++) {
      const o = s * (NY + 1) * NA, a = o + i * NA + j, b = o + i * NA + (j + 1) % NA, c = a + NA, d = b + NA;
      idx.push(a, c, b, b, c, d);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); sg.setAttribute('aP', new THREE.Float32BufferAttribute(aP, 3)); sg.setIndex(idx);
    this.pulses = new Array(8).fill(-99); this.pulseY = new Array(8).fill(0);
    this.SU = { ...this.H, uPulse: V(this.pulses), uPulseY: V(this.pulseY) };
    this.strands = new THREE.Mesh(sg, new THREE.ShaderMaterial({ vertexShader: STRAND_VERT, fragmentShader: STRAND_FRAG, uniforms: this.SU, ...add, side: THREE.DoubleSide }));
    this.strands.frustumCulled = false; this.strands.renderOrder = 2;
    // rungs + cards
    const R = rng(166), NRG = Math.floor((CROWN - 1) / 0.9);
    const rg = new THREE.InstancedBufferGeometry().copy(new THREE.PlaneGeometry(1, 1).translate(0.5, 0.5, 0));
    const aR = new Float32Array(NRG * 2); for (let i = 0; i < NRG; i++) { aR[i * 2] = 1 + i * 0.9; aR[i * 2 + 1] = R(); }
    rg.setAttribute('aR', new THREE.InstancedBufferAttribute(aR, 2)); rg.instanceCount = NRG;
    this.rungs = new THREE.Mesh(rg, new THREE.ShaderMaterial({ vertexShader: RUNG_VERT, fragmentShader: RUNG_FRAG, uniforms: this.H, ...add, side: THREE.DoubleSide }));
    this.rungs.frustumCulled = false; this.rungs.renderOrder = 1;
    const cards = [];
    for (let i = 0; i < NRG; i++) {
      if (i % 2 === 0 || i * 0.9 > CROWN - 22) cards.push([1 + i * 0.9, (i >> 1) % 2 ? 1 : -1, Math.floor(R() * 11), R()]);
      if (i * 0.9 > CROWN - 22 && i % 2) cards.push([1 + i * 0.9, (i >> 1) % 2 ? -1 : 1, Math.floor(R() * 11), R()]);
    }
    const cg = new THREE.InstancedBufferGeometry().copy(new THREE.PlaneGeometry(0.9, 1.06));
    cg.setAttribute('aC', new THREE.InstancedBufferAttribute(new Float32Array(cards.flat()), 4)); cg.instanceCount = cards.length;
    this.CU = { ...this.H, uAtlas: V(ctx.shared.photos), uPart: V(0), uBurst: V(0), uHeroY: V(HY), uHeroOn: V(0) };
    this.cards = new THREE.Mesh(cg, new THREE.ShaderMaterial({ vertexShader: CARD_VERT, fragmentShader: CARD_FRAG, uniforms: this.CU, side: THREE.DoubleSide }));
    this.cards.frustumCulled = false; this.cards.renderOrder = 0;
    // hero memory
    this.HU = { uTex: V(ctx.shared.big), uA: V(0), uT: this.H.uT, uDis: V(0) };
    this.hero = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 2.8), new THREE.ShaderMaterial({ vertexShader: FLAT_VERT, fragmentShader: HERO_FRAG,
      uniforms: this.HU, transparent: true, side: THREE.DoubleSide }));
    this.hero.renderOrder = 3;
    // tip glows, shock rings, halo, motes
    const glow = (c) => { const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: ctx.shared.glow, color: c, ...add })); m.renderOrder = 4; return m; };
    this.tips = [glow(new THREE.Color(1, 0.7, 0.3)), glow(new THREE.Color(1, 0.2, 0.2))];
    this.rings = Array.from({ length: NR }, () => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({ vertexShader: FLAT_VERT, fragmentShader: RING_FRAG,
        uniforms: { uAge: V(1), uR: V(0), uCol: V(new THREE.Color(1, 0.6, 0.4)) }, ...add, side: THREE.DoubleSide }));
      m.rotation.x = -Math.PI / 2; m.renderOrder = 3; m.visible = false; return m;
    });
    this.ringTimes = [...OH_TIMES, ...LOVE_TIMES].filter((x) => x > T0 - 0.1 && x < T1).sort((a, b) => a - b);
    this.AU = { uT: this.H.uT, uA: V(0) };
    this.halo = new THREE.Mesh(new THREE.PlaneGeometry(22, 22), new THREE.ShaderMaterial({ vertexShader: FLAT_VERT, fragmentShader: HALO_FRAG, uniforms: this.AU, ...add, side: THREE.DoubleSide }));
    this.halo.rotation.x = -Math.PI / 2; this.halo.position.y = CROWN + 30; this.halo.renderOrder = 3;
    const NM = 3200, aM = new Float32Array(NM * 4); for (let i = 0; i < aM.length; i++) aM[i] = R();
    const mg = new THREE.BufferGeometry(); mg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NM * 3), 3));
    mg.setAttribute('aM', new THREE.BufferAttribute(aM, 4));
    this.MU = { uT: this.H.uT, uCamY: V(0), uPx: V(1), uA: V(1), uRain: this.H.uRain, uRise: V(0) };
    this.motes = new THREE.Points(mg, new THREE.ShaderMaterial({ vertexShader: MOTE_VERT, fragmentShader: POINT_FRAG, uniforms: this.MU, ...add }));
    this.motes.frustumCulled = false; this.motes.renderOrder = 5;
    this.scene.add(this.sky, this.cards, this.rungs, this.strands, this.hero, ...this.tips, ...this.rings, this.halo, this.motes);
  }
  // JS twin of the GLSL helixP
  helixP(y, s) {
    const H = this.H, o = H.uOpen.value * smooth(CROWN - 16, CROWN, y), t = H.uT.value;
    const R = RAD * (1 + 0.06 * Math.sin(y * 0.7 - t * 1.3)) * (1 + o * o * 5), a = y * 0.785 + H.uSpin.value + s * Math.PI + o * 2;
    return new THREE.Vector3(Math.cos(a) * R, y + o * o * 5, Math.sin(a) * R);
  }
  update(t) {
    const H = this.H, beat = audio.beatPulse(t, 6), kick = clamp(audio.get('kick', t));
    H.uT.value = t; H.uBeat.value = beat * 0.6 + kick * 0.4;
    H.uSpin.value = (t - T0) * 0.42 + 0.35 * ease.inOut(range(t, TF - 0.4, TF + 2.5));
    H.uGrow.value = Math.max(1, Math.min(CROWN + 4.5, spline(t + 1, CAM)[0] + 10) * ease.out(range(t, T0 - 0.2, T0 + 3.5)));
    H.uOpen.value = ease.inOut(range(t, TF - 1.2, TF + 3.5));
    H.uGone.value = t < TG ? -20 : lerp(-8, CROWN + 20, ease.in(range(t, TG, T1 - 0.4)));
    H.uRain.value = smooth(TF - 0.6, TF + 1.4, t) * (1 - 0.5 * smooth(213, T1, t));
    this.CU.uPart.value = smooth(184.6, 186.4, t) * (1 - smooth(196.2, 198.0, t));
    this.CU.uBurst.value = ease.out(range(t, TF, TF + 7));
    // hero memory rises out of the core on the first "I love you"
    const hon = smooth(TH0 - 0.8, TH0 + 0.2, t) * (1 - smooth(TH1 - 0.5, TH1 + 0.6, t));
    this.CU.uHeroOn.value = hon; this.HU.uA.value = hon > 0.001 ? 1 : 0; this.hero.visible = hon > 0.001;
    this.HU.uDis.value = t < TH1 - 0.5 ? ease.out(range(t, TH0 - 0.9, TH0 + 0.5)) : 1 - ease.in(range(t, TH1 - 0.5, TH1 + 0.5));
    // camera
    const [cy, cr, az, ly] = spline(t, CAM), cam = this.camera;
    const sway = 0.08 * Math.sin(t * 0.7);
    cam.position.set(Math.cos(az) * cr, cy + sway, Math.sin(az) * cr);
    const tgt = new THREE.Vector3(Math.cos(az + 0.5) * cr * 0.02, cy + ly, Math.sin(az + 0.5) * cr * 0.02);
    const dir = tgt.clone().sub(cam.position).normalize(), w = smooth(0.8, 0.98, Math.abs(dir.y));
    cam.up.set(0, 1, 0).lerp(new THREE.Vector3(Math.cos(az + 1.2), 0, Math.sin(az + 1.2)), w).normalize();
    cam.lookAt(tgt);
    cam.fov = 55 + 14 * smooth(186, 187.5, t) * (1 - smooth(197, 199, t)) + 4 * beat * smooth(186, 187.5, t) * (1 - smooth(197, 199, t));
    cam.updateProjectionMatrix();
    this.sky.position.copy(cam.position);
    this.SK.uAlt.value = smooth(0, 90, cy); this.SK.uGlow.value = 1 - smooth(TG, T1, t) * 0.6;
    // hero: billboard on the axis
    this.hero.position.set(0, HY + 0.4 * Math.sin(t * 0.8) - 0.6 * (1 - ease.out(range(t, TH0 - 0.9, TH0 + 0.8))), 0);
    this.hero.lookAt(cam.position.x, this.hero.position.y, cam.position.z);
    // pulses + rings on every oh / love
    const past = this.ringTimes.filter((x) => x <= t).slice(-8);
    for (let i = 0; i < 8; i++) { this.pulses[i] = past[i] ?? -99; this.pulseY[i] = past[i] ? this.ringY(past[i]) - 12 : 0; }
    this.rings.forEach((m, i) => {
      const k = past.length - 1 - i, x = past[k];
      if (x === undefined || t - x > 2.2) { m.visible = false; return; }
      const age = (t - x) / 2.2, love = LOVE_TIMES.includes(x);
      m.visible = true; m.position.set(0, this.ringY(x), 0); m.scale.setScalar(love ? 60 : 34);
      const u = m.material.uniforms; u.uAge.value = age; u.uR.value = ease.out(age);
      u.uCol.value.setRGB(1, love ? 0.85 : 0.5 + 0.2 * (k % 2), love ? 0.7 : 0.35);
    });
    // growing tips
    this.tips.forEach((m, s) => {
      const p = this.helixP(H.uGrow.value, s); m.position.copy(p);
      const on = t < TF + 1 ? 1 : 0; m.scale.setScalar((1.4 + 0.8 * beat) * on); m.visible = on > 0;
    });
    this.halo.rotation.z = t * 0.12; this.AU.uA.value = smooth(TF, TF + 2, t) * (1 - smooth(214, T1, t)) * (1 + 0.4 * beat);
    this.MU.uCamY.value = cy; this.MU.uPx.value = this.ctx.h / 720; this.MU.uRise.value = (t - T0) * 1.3 + 12 * ease.in(range(t, TG, T1));
    this.MU.uA.value = 0.8 + 0.8 * smooth(TG, T1, t);
  }
  // rings are laid at the camera's height at the moment of the "oh" (so we always see them sweep past)
  ringY(x) { return spline(x, CAM)[0] - 1.5; }
  post(t) {
    const beat = audio.beatPulse(t, 6), f = t >= TF ? Math.exp(-(t - TF) * 2.5) : 0, g = smooth(TG, T1, t);
    return { bloom: 0.7 + 0.2 * beat + 0.3 * smooth(TF - 1, TF + 1, t), bloomThr: 0.68, sat: 1.12, contrast: 1.05, vig: 0.5,
      grain: 0.05, ca: 0.4 + 0.6 * f, exposure: 1 + 0.08 * beat, fadeW: 0.55 * f + 0.25 * g * g, dust: 0.1 };
  }
}
