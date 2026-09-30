// Galaxy of two lights: 私 (warm) and あなた (cold) orbit as binary cores, their spiral arms unfurl from the
// polaroid rosette; the stars gather into remembered photos on 忘れたくないこと and shatter on each "oh";
// on "I love you..." two strands of light grow from both cores and meet in a kiss above the disc.
// The fire variant (112.6-136.2) is the same galaxy burning after the embers scene: memory cards burn away.
import * as THREE from 'three';
import { Scene, bgQuad, pointsMat } from './base.js';
import { POINT_FRAG } from '../core/glsl.js';
import { clamp, lerp, range, smooth, ease, rng, keys } from '../core/util.js';
import { audio } from '../core/audio.js';
import { PHOTO } from '../core/photos.js';
import { OH_TIMES } from '../lyrics-data.js';
import { STAR_VERT, NEB_FRAG, CARD_VERT, CARD_FRAG } from './galaxy-glsl.js';

const R0 = 0.55, R1 = 4.0, APEX = 1.35, KISS = new THREE.Vector3(0, APEX / 2, 0);
const CFG = {
  normal: {
    t0: 52.6, t1: 80.46, unf: [52.6, 57.5], love: [[69.63, 75.2, 79.4]],
    // [t, dist, elevation, azimuth, target y]
    cam: [[52.6, 3.2, 1.5, 0.0, 0], [55.2, 5.8, 1.12, 0.35, 0], [60.5, 8.2, 0.62, 0.9, 0], [64.5, 7.0, 0.42, 1.5, -0.1],
      [69.4, 8.6, 0.3, 2.0, -1.45], [75.5, 7.8, 0.24, 2.3, -1.45], [79.6, 9.5, 0.34, 2.6, -1.1], [80.5, 13, 0.5, 2.75, -0.3]],
    photos: [[52.45, 54.6, 55.22, PHOTO.two], [61.07, 63.2, 63.79, PHOTO.sea]],
    cards: [[56.0, 58.5], [67.5, 70.0]],
  },
  fire: {
    t0: 112.6, t1: 136.17, unf: [0, 0.1], love: [[121.0, 122.9, 123.7], [129.61, 133.2, 135.9]],
    cam: [[112.6, 10.5, 0.55, 3.4, 0], [116, 8.0, 0.4, 3.9, 0], [121, 8.6, 0.28, 4.4, -1.45], [124, 7.2, 0.5, 4.8, -0.2],
      [129.4, 8.6, 0.28, 5.2, -1.45], [134.5, 7.8, 0.22, 5.5, -1.45], [136.2, 10.5, 0.3, 5.7, -0.5]],
    photos: [], cards: [[112.0, 112.6], [135.0, 136.0]], burn: [113.5, 130.0],
  },
};
const LOVE_OK = (L, t) => t >= L[0] - 0.5 && t <= L[2] + 0.6;

export class Galaxy extends Scene {
  constructor(ctx, { fire = false } = {}) {
    super(ctx, { fov: 50, near: 0.05, far: 200 });
    this.fire = fire; this.C = fire ? CFG.fire : CFG.normal;
    const q = Math.max(0.6, ctx.quality || 1), R = rng(fire ? 77 : 52);
    const gauss = () => Math.sqrt(-2 * Math.log(R() + 1e-9)) * Math.cos(6.2832 * R());
    const G = 128, NA = Math.max(G * G + 6000, Math.round(62000 * q)), NH = Math.round(16000 * q), NB = Math.round(9000 * q),
      NK = Math.round(7000 * q), ND = Math.round(fire ? 5000 * q : 2500 * q), N = NA + NH + NB + NK + ND;
    this.G = G;
    const A = new Float32Array(N * 4), B = new Float32Array(N * 4), Cc = new Float32Array(N * 2).fill(-1), P = new Float32Array(N * 3);
    let i = 0;
    const put = (k, r, a, h) => { A.set([k, r, a, h], i * 4); B.set([R(), R(), R(), R()], i * 4); i++; };
    for (let n = 0; n < NA; n++) {
      const rn = Math.pow(R(), 1.35), r = R0 + (R1 - R0) * rn;
      put(0, r, gauss() * (0.05 + 0.2 * rn), gauss() * 0.04 * (1 + rn));
      if (n < G * G) { Cc[(i - 1) * 2] = ((n % G) + 0.5) / G; Cc[(i - 1) * 2 + 1] = (Math.floor(n / G) + 0.5) / G; }
    }
    for (let n = 0; n < NH; n++) {
      if (n < NH * 0.55) put(1, Math.sqrt(R()) * 5.5, R() * 6.2832, gauss() * 0.12);
      else put(1, 40 + R() * 40, R() * 6.2832, Math.asin(R() * 2 - 1));
      B[(i - 1) * 4] = n < NH * 0.55 ? 0.2 : 0.8;
    }
    for (let n = 0; n < NB; n++) put(2, Math.pow(R(), 1.8) * 0.5, R() * 6.2832, gauss() * 0.06);
    for (let n = 0; n < NK; n++) put(3, R(), 0, 0);
    for (let n = 0; n < ND; n++) put(4, fire ? Math.sqrt(R()) * 3.5 : 3 + R() * 14, R() * 6.2832, gauss() * (fire ? 0.2 : 2.5));
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(P, 3));
    geo.setAttribute('aA', new THREE.BufferAttribute(A, 4)); geo.setAttribute('aB', new THREE.BufferAttribute(B, 4));
    geo.setAttribute('aC', new THREE.BufferAttribute(Cc, 2));
    const V = (v) => ({ value: v });
    this.U = { uT: V(0), uUnf: V(0), uSep: V(1), uPhase: V(0), uFire: V(fire ? 1 : 0), uLove: V(0), uLoveA: V(0), uKiss: V(0),
      uPx: V(720), uPhotoPx: V(4), uDim: V(1), uRings: V([0, 1, 2, 3].map(() => new THREE.Vector4(-1, 0, 0, 0))),
      uPhoto: V(new THREE.Vector4(0, 0, 0, 0)), uPC: V(new THREE.Vector3()), uPR: V(new THREE.Vector3()), uPU: V(new THREE.Vector3()),
      uAtlas: V(ctx.shared.photos) };
    this.points = new THREE.Points(geo, pointsMat(STAR_VERT, POINT_FRAG, this.U));
    this.points.frustumCulled = false; this.scene.add(this.points);

    this.NU = { uT: this.U.uT, uFire: this.U.uFire, uDim: this.U.uDim, uKiss: this.U.uKiss, uRot: V(new THREE.Matrix3()), uTan: V(new THREE.Vector2(1, 1)) };
    this.scene.add(bgQuad(NEB_FRAG, this.NU));

    // memory cards orbiting in the disc
    const NC = 22, cg = new THREE.InstancedBufferGeometry().copy(new THREE.PlaneGeometry(0.8, 1.0));
    const aI = new Float32Array(NC * 4), aS = new Float32Array(NC * 4);
    const cells = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let n = 0; n < NC; n++) {
      aI.set([1.5 + R() * 2.6, (n / NC) * 6.2832 + R() * 0.3, (R() - 0.5) * 0.5, cells[n % cells.length]], n * 4);
      aS.set([R(), R(), R(), fire ? n / NC : 0], n * 4);
    }
    cg.setAttribute('aI', new THREE.InstancedBufferAttribute(aI, 4)); cg.setAttribute('aS', new THREE.InstancedBufferAttribute(aS, 4));
    cg.instanceCount = NC;
    this.CU = { uT: this.U.uT, uUnf: this.U.uUnf, uPhase: this.U.uPhase, uBurn: V(0), uCR: V(new THREE.Vector3()), uCU: V(new THREE.Vector3()),
      uAtlas: this.U.uAtlas, uCardA: V(1), uFire: this.U.uFire };
    this.cards = new THREE.Mesh(cg, new THREE.ShaderMaterial({ vertexShader: CARD_VERT, fragmentShader: CARD_FRAG, uniforms: this.CU,
      side: THREE.DoubleSide, transparent: true, depthWrite: true }));
    this.cards.frustumCulled = false; this.cards.renderOrder = -10; this.scene.add(this.cards);

    // core glows + the kiss flash
    const spr = (c) => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: ctx.shared.glow, color: new THREE.Color(...c),
      blending: THREE.AdditiveBlending, depthTest: false, depthWrite: false, transparent: true })); s.renderOrder = 10; this.scene.add(s); return s; };
    this.warm = spr(fire ? [1.6, 0.75, 0.3] : [1.5, 0.8, 0.45]); this.cold = spr([0.55, 0.8, 1.6]); this.flash = spr([1.4, 1.2, 1.1]);
    this.halo = spr(fire ? [0.9, 0.25, 0.06] : [0.3, 0.32, 0.7]);
    this.RING = this.ringEvents();
    this.tmp = new THREE.Vector3(); this.fwd = new THREE.Vector3();
  }
  phase(t) { return (this.fire ? 2.1 : 0) + 0.32 * (t - this.C.t0); }
  love(t) {
    const L = this.C.love.find((w) => LOVE_OK(w, t));
    if (!L) return { grow: 0, a: 0, kiss: 0 };
    const [a, meet, end] = L;
    const grow = t < meet ? 0.5 * ease.inOut(range(t, a, meet)) : 0.5 + 0.5 * ease.out(range(t, meet, meet + 2.2));
    const al = smooth(a - 0.3, a + 0.6, t) * (1 - smooth(end - 0.9, end + 0.4, t));
    const kiss = (t >= meet ? Math.exp(-(t - meet) * 2.0) : Math.exp(-(meet - t) * 8) * 0.25) * al;
    return { grow, a: al, kiss };
  }
  sep(t) { const l = this.love(t); return 1 - 0.3 * l.a * smooth(0.2, 0.5, l.grow); }
  ringEvents() {
    const { t0, t1, love } = this.C, ev = [];
    OH_TIMES.filter((x) => x > t0 && x < t1).forEach((x, k) => {
      const s = k % 2 ? -1 : 1, ph = this.phase(x), sp = this.sep(x);
      ev.push([x, s * Math.cos(ph) * sp, s * Math.sin(ph) * sp, 1.0]);
    });
    love.forEach((L) => ev.push([L[1], 0, 0, 1.8]));
    return ev.sort((a, b) => a[0] - b[0]);
  }
  update(t) {
    const U = this.U, C = this.C, cam = this.camera, ctx = this.ctx;
    U.uT.value = t;
    const unf = this.fire ? 1 : ease.inOut(range(t, C.unf[0], C.unf[1])), ph = this.phase(t), sep = this.sep(t), L = this.love(t);
    U.uUnf.value = unf; U.uPhase.value = ph; U.uSep.value = sep;
    U.uLove.value = L.grow; U.uLoveA.value = L.a; U.uKiss.value = L.kiss;

    // camera: spherical keys around the disc + slow handheld drift
    const [d, el, az, ty] = keys(t, C.cam, ease.inOut);
    const dr = 0.04 * Math.sin(t * 0.37), de = 0.02 * Math.sin(t * 0.29 + 1);
    cam.position.set(Math.cos(el + de) * Math.sin(az + dr), Math.sin(el + de), Math.cos(el + de) * Math.cos(az + dr)).multiplyScalar(d);
    cam.position.y += ty; cam.lookAt(0, ty, 0);
    cam.rotateZ(0.03 * Math.sin(t * 0.21)); cam.updateMatrixWorld();
    const tanH = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
    U.uPx.value = ctx.h / (2 * tanH);
    this.NU.uRot.value.setFromMatrix4(cam.matrixWorld); this.NU.uTan.value.set(tanH * cam.aspect, tanH);
    const E = cam.matrixWorld.elements, right = new THREE.Vector3(E[0], E[1], E[2]), up = new THREE.Vector3(E[4], E[5], E[6]);
    const fwd = this.fwd.set(-E[8], -E[9], -E[10]);

    // star-photos (screen-locked, a little above centre so the lyric sits below)
    const Ph = U.uPhoto.value; Ph.set(0, 0, 0, 0);
    for (const [a, full, burst, cell] of C.photos) {
      if (t < a - 0.1 || t > burst + 2.6) continue;
      const x = t < burst + 0.3 ? range(t, a, full) : 1 - ease.inOut(range(t, burst + 0.3, burst + 2.5));
      Ph.set(x, ease.out(range(t, burst, burst + 1.4)) * (1 - 0.6 * range(t, burst + 1.2, burst + 2.5)), cell, 0);
    }
    const D = 3, hh = D * tanH * 0.5;
    U.uPC.value.copy(cam.position).addScaledVector(fwd, D).addScaledVector(up, D * tanH * 0.12);
    U.uPR.value.copy(right).multiplyScalar(hh); U.uPU.value.copy(up).multiplyScalar(hh);
    U.uPhotoPx.value = 2.5 * (hh / (D * tanH)) * ctx.h / this.G;

    // shock rings (4 most recent)
    const act = this.RING.filter((e) => e[0] <= t && t - e[0] < 3.5).slice(-4);
    U.uRings.value.forEach((v, k) => { const e = act[k]; if (e) v.set(t - e[0], e[1], e[2], e[3]); else v.set(-1, 0, 0, 0); });

    // memory cards
    let ca = 0;
    if (this.fire) { ca = smooth(C.cards[0][0], C.cards[0][1], t) * (1 - smooth(C.cards[1][0], C.cards[1][1], t)); this.CU.uBurn.value = 1.45 * range(t, C.burn[0], C.burn[1]); }
    else ca = smooth(C.cards[0][0], C.cards[0][1], t) * (1 - smooth(C.cards[1][0], C.cards[1][1], t));
    this.CU.uCardA.value = ca; this.cards.visible = ca > 0.01;
    this.CU.uCR.value.copy(right); this.CU.uCU.value.copy(up);

    // lights
    const loud = audio.get('loud', t), beat = audio.beatPulse ? audio.beatPulse(t, 6) : 0;
    const W = this.tmp.set(Math.cos(ph) * sep, 0, Math.sin(ph) * sep), gl = (0.35 + 0.35 * unf) * (1 + 0.4 * L.kiss) * (1 - 0.7 * Ph.x);
    this.warm.position.copy(W); this.cold.position.copy(W).multiplyScalar(-1);
    this.warm.scale.setScalar((0.9 + 0.35 * loud + 0.15 * beat) * gl); this.cold.scale.setScalar((0.9 + 0.35 * loud + 0.15 * beat) * gl);
    this.flash.position.copy(KISS); this.flash.scale.setScalar(0.3 + 2.2 * L.kiss + 1.0 * L.a * smooth(0.45, 0.6, L.grow));
    this.flash.material.opacity = clamp(L.a * smooth(0.4, 0.5, L.grow) * 0.5 + 0.55 * L.kiss);
    this.halo.scale.setScalar(lerp(2, 10, unf)); this.halo.material.opacity = (this.fire ? 0.1 : 0.16) + 0.06 * loud;
    const dim = this.fire ? smooth(112.4, 113.2, t) * (1 - 0.55 * smooth(135.4, 136.17, t)) : 1 - 0.75 * smooth(79.5, 80.46, t);
    U.uDim.value = dim; [this.warm, this.cold, this.halo].forEach((s) => (s.material.opacity = s === this.halo ? s.material.opacity * dim : dim));
  }
  post(t) {
    const L = this.love(t), k = L.kiss;
    if (this.fire) return { tint: [1.12, 0.9, 0.78], sat: 1.12, contrast: 1.06, bloom: 0.8 + 0.5 * k, bloomThr: 0.7, vig: 1.0, grain: 0.07,
      dust: 0.9, dustCol: [1, 0.55, 0.25], ca: 0.5 + 0.8 * k, leak: 0.25 + 0.2 * k, flicker: 0.04, exposure: 0.9 + 0.15 * k, fadeW: 0.12 * k };
    return { tint: [0.92, 0.97, 1.1], sat: 1.05, bloom: 0.85 + 0.4 * k, bloomThr: 0.7, vig: 0.95, grain: 0.06, dust: 0.35, dustCol: [0.7, 0.8, 1],
      ca: 0.35 + 0.7 * k, exposure: 1 + 0.12 * k, fadeW: 0.1 * k };
  }
}
