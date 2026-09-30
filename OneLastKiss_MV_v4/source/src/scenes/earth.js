// Earth (v2): three uses, self-timed by absolute t.
//  A 10.52-16.95  Instrumentality: the planet turns red, crosses of light rise, souls stream up, the tree of life.
//  B 136.17-141.2 Restoration: a blue front sweeps across the red planet, souls fall back to the surface.
//  L 108.05-112.44 the Lance of Gaius flies at the red planet (3D)
//  G 113.3-115.19 flashback: the blue planet adrift in the red sea of LCL, bobbing in the swell
//  C 207.5-218.38 The luminous blue earth: sunrise over the limb, city lights, the camera leaves.
import * as THREE from 'three';
import { Scene, bgQuad } from './base.js';
import { FSPass, fsMat } from '../core/post.js';
import * as G from './earth-glsl.js';
import { applyCam } from './camkeys.js';
import { clamp, smooth, lerp, ease, rng } from '../core/util.js';
import { audio } from '../core/audio.js';

const CAM = {
  A: [[10.4, 0.0, 0.35, 1.62, 0.0, 1.05, 0.0, 40, -0.12], [12.67, 0.12, 0.42, 1.45, 0.0, 1.1, 0.0, 40, -0.05],
    // one long crane: from under the planet up the soul vortex to the Black Moon, the tree of life behind it
    [12.72, 0.3, -0.85, 3.9, 0.0, 0.6, -0.6, 44, 0.05], [17.0, 0.05, 1.85, 1.7, 0.0, 2.35, -0.6, 50, -0.02]],
  B: [[136.1, 0.2, 0.3, 3.5, 0.0, 0.0, 0.0, 38], [137.24, 0.28, 0.32, 3.25, 0.0, 0.0, 0.0, 38],
    [137.29, 1.35, 0.5, -1.45, 0.0, 0.2, 0.0, 42, 0.1], [139.38, 1.15, 0.7, -1.75, 0.0, 0.25, 0.0, 42, 0.05],
    [139.43, -1.2, 0.4, -3.1, 0.0, 0.0, 0.0, 38], [141.3, -1.45, 0.55, -3.35, 0.0, 0.0, 0.0, 38]],
  G: [[113.2, 1.3, -0.08, 4.6, -0.1, 0.1, 0.0, 30, 0.04], [115.3, 0.9, -0.07, 3.7, -0.1, 0.12, 0.0, 30, 0.0]],
  C: [[207.4, 0.0, 0.3, 2.3, 0.0, 0.95, 0.0, 36], [211.95, 0.06, 0.34, 2.12, 0.0, 0.97, 0.0, 36],
    [212.0, 2.2, 1.0, 2.0, 0.0, 0.0, 0.0, 38], [216.24, 1.9, 1.1, 2.5, 0.0, 0.0, 0.0, 38],
    [216.29, 1.2, 0.5, 2.6, 0.0, 0.0, 0.0, 36], [218.5, 3.6, 1.6, 8.8, 0.0, 0.0, 0.0, 36]],
};
const G0 = 113.3, G1 = 115.19, LVL = -0.22;
const SEC = (t) => (t < 100 ? 'A' : t < G0 - 0.05 ? 'L' : t < 130 ? 'G' : t < 180 ? 'B' : 'C');
const L0 = 108.05, L1 = 112.44, LP0 = new THREE.Vector3(1.9, 1.1, 4.8), LP1 = new THREE.Vector3(0.25, 0.35, 1.0).normalize().multiplyScalar(1.3);
const AXIS = new THREE.Vector3(0.3, 0.2, 1).normalize();
const MOON = new THREE.Vector3(0, 2.4, -0.6);
// tree of life layout (Keter at the top), 22 paths
const TP = [[0, 0], [1, 1], [-1, 1], [1, 2.6], [-1, 2.6], [0, 3.3], [1, 4.2], [-1, 4.2], [0, 5], [0, 6]];
const TE = [[0, 1], [0, 2], [0, 5], [1, 2], [1, 3], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5], [3, 6], [4, 5], [4, 7],
  [5, 6], [5, 7], [5, 8], [6, 7], [6, 8], [6, 9], [7, 8], [7, 9], [8, 9]];
const treeP = ([x, y]) => new THREE.Vector3(x * 0.85, 4.3 - y * 0.72, -3.6 - Math.abs(x) * 0.25);

export class Earth extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 40, near: 0.02, far: 200 });
    const S = this.scene, R = rng(27);
    this.U = { uT: { value: 0 }, uRot: { value: 0 }, uRed: { value: 1 }, uFront: { value: -1 }, uEdge: { value: 0 }, uCloud: { value: 1 },
      uLights: { value: 0 }, uK: { value: 0 }, uSun: { value: new THREE.Vector3(1, 0.3, 0).normalize() }, uAxis: { value: AXIS },
      uCross: { value: 0 }, uSoul: { value: 0 }, uDir: { value: 1 }, uPx: { value: 6 }, uQ: { value: new THREE.Vector3(0, 2.6, 0) },
      uCol: { value: new THREE.Color(1, 0.45, 0.2) }, uA: { value: 0 }, uRev: { value: 0 } };
    const U = this.U;
    // bake the high-res planet maps once (4096x2048 height/biome/city, 4096x2048 clouds)
    const BW = 4096, BH = 2048, fs = new FSPass(ctx.renderer);
    const mk = () => { const rt = new THREE.WebGLRenderTarget(BW, BH, { type: THREE.UnsignedByteType, depthBuffer: false, generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter, wrapS: THREE.RepeatWrapping, wrapT: THREE.ClampToEdgeWrapping });
      rt.texture.anisotropy = Math.min(8, ctx.renderer.capabilities.getMaxAnisotropy()); return rt; };
    this.rtH = mk(); this.rtC = mk();
    fs.run(fsMat(G.BAKE_H, {}), this.rtH); fs.run(fsMat(G.BAKE_C, {}), this.rtC); ctx.renderer.setRenderTarget(null);
    Object.assign(U, { tH: { value: this.rtH.texture }, tC: { value: this.rtC.texture }, uTexel: { value: new THREE.Vector2(1 / BW, 1 / BH) }, uBump: { value: 0.022 } });
    this.NU = { uT: U.uT, uRed: { value: 1 }, uA: { value: 1 } };
    this.neb = bgQuad(G.NEB_F, this.NU); S.add(this.neb);
    // stars
    const sn = 3000, sp = new Float32Array(sn * 3), sc = new Float32Array(sn * 3);
    for (let i = 0; i < sn; i++) {
      const v = new THREE.Vector3(R() * 2 - 1, R() * 2 - 1, R() * 2 - 1).normalize().multiplyScalar(60);
      sp.set([v.x, v.y, v.z], i * 3); const b = 0.25 + R() ** 3 * 1.4, w = R(); sc.set([b, b * (0.85 + 0.15 * w), b * (0.8 + 0.3 * w)], i * 3);
    }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(sp, 3)); sg.setAttribute('color', new THREE.BufferAttribute(sc, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ size: 0.14, vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); S.add(this.stars);
    // globe + atmosphere
    const globe = new THREE.Mesh(new THREE.SphereGeometry(1, 256, 160), new THREE.ShaderMaterial({ vertexShader: G.WORLD_V, fragmentShader: G.GLOBE_F, uniforms: U }));
    this.AU = { uSun: U.uSun, uCol: { value: new THREE.Color() }, uA: { value: 1 } };
    const atmo = new THREE.Mesh(new THREE.SphereGeometry(1.07, 96, 64), new THREE.ShaderMaterial({ vertexShader: G.WORLD_V, fragmentShader: G.ATMO_F, uniforms: this.AU,
      side: THREE.BackSide, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    S.add(globe, atmo); this.globeParts = [globe, atmo];
    // crosses of light
    const cn = 170, cg = new THREE.InstancedBufferGeometry(); cg.copy(new THREE.PlaneGeometry(1, 1)); cg.instanceCount = cn;
    const aP = new Float32Array(cn * 4), aT = new Float32Array(cn * 2);
    for (let i = 0; i < cn; i++) {
      const v = i < 14 ? new THREE.Vector3(R() * 0.8 - 0.4, 0.55 + R() * 0.3, 0.8 + R() * 0.2 - 0.1).normalize() : new THREE.Vector3(R() * 2 - 1, R() * 1.6 - 0.5, R() * 2 - 1).normalize();
      aP.set([v.x, v.y, v.z, 0], i * 4); aT.set([i < 14 ? 10.6 + i * 0.13 : 11.6 + ((i - 14) / cn) * 4.6 + R() * 0.3, R() < 0.05 ? 0.3 + R() * 0.15 : 0.04 + R() * 0.13], i * 2);
    }
    cg.setAttribute('aP', new THREE.InstancedBufferAttribute(aP, 4)); cg.setAttribute('aT', new THREE.InstancedBufferAttribute(aT, 2));
    const cm = new THREE.Mesh(cg, new THREE.ShaderMaterial({ vertexShader: G.CROSS_V, fragmentShader: G.CROSS_F, uniforms: U,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    cm.frustumCulled = false; S.add(cm);
    // souls
    const n = 12000, pg = new THREE.BufferGeometry(), P = new Float32Array(n * 4), Rr = new Float32Array(n * 4);
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3(R() * 2 - 1, R() * 2 - 1, R() * 2 - 1).normalize();
      P.set([v.x, v.y, v.z, 0.55 + R() * 0.45], i * 4); Rr.set([R(), R(), R(), R()], i * 4);
    }
    pg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    pg.setAttribute('aP', new THREE.BufferAttribute(P, 4)); pg.setAttribute('aR', new THREE.BufferAttribute(Rr, 4));
    const pts = new THREE.Points(pg, new THREE.ShaderMaterial({ vertexShader: G.SOUL_V, fragmentShader: G.DOT_F, uniforms: U,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    pts.frustumCulled = false; S.add(pts); this.cm = cm;
    // halo ring + tree of life
    this.RU = { uT: U.uT, uA: { value: 0 }, uK: U.uK };
    this.ring = new THREE.Mesh(new THREE.RingGeometry(1.4, 1.8, 256, 1), new THREE.ShaderMaterial({ vertexShader: G.RING_V, fragmentShader: G.RING_F,
      uniforms: this.RU, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    this.ring.rotation.set(1.22, 0.25, 0); S.add(this.ring);
    // v3 Third Impact: AT-field hex shell, Black Moon, soul vortex, 3D tree of life
    const add = (o) => { o.frustumCulled = false; S.add(o); return o; };
    const addM = { transparent: true, blending: THREE.AdditiveBlending, depthWrite: false };
    this.HU = { uT: U.uT, uK: U.uK, uFront: U.uFront, uAxis: U.uAxis, uHex: { value: 0 }, uSpread: { value: 0 } };
    this.hex = add(new THREE.Mesh(new THREE.SphereGeometry(1.035, 160, 100), new THREE.ShaderMaterial({ vertexShader: G.WORLD_V, fragmentShader: G.HEX_F, uniforms: this.HU, ...addM })));
    this.MU = { uT: U.uT, uK: U.uK, uCrack: { value: 0 } };
    this.moon = add(new THREE.Mesh(new THREE.SphereGeometry(0.3, 96, 64), new THREE.ShaderMaterial({ vertexShader: G.WORLD_V, fragmentShader: G.MOON_F, uniforms: this.MU })));
    this.moon.position.copy(MOON);
    this.halo = add(new THREE.Sprite(new THREE.SpriteMaterial({ map: ctx.shared.glow, color: 0xff3a14, ...addM })));
    this.halo.position.copy(MOON).add(new THREE.Vector3(0, 0, -0.15));
    const vn = 7000, vg = new THREE.BufferGeometry(), VR = new Float32Array(vn * 4);
    for (let i = 0; i < vn; i++) VR.set([R(), R(), R() ** 1.5, R()], i * 4);
    vg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vn * 3), 3)); vg.setAttribute('aR', new THREE.BufferAttribute(VR, 4));
    this.VU = { uT: U.uT, uPx: U.uPx, uQ: { value: MOON }, uVort: { value: 0 } };
    this.vort = add(new THREE.Points(vg, new THREE.ShaderMaterial({ vertexShader: G.VORT_V, fragmentShader: G.DOT_F, uniforms: { ...this.VU, uK: U.uK }, ...addM })));
    this.TU = { uRev: { value: 0 }, uA: { value: 0 }, uK: U.uK, uT: U.uT, uSz: { value: 0.34 }, uW: { value: 0.025 } };
    const ng = new THREE.InstancedBufferGeometry(); ng.copy(new THREE.PlaneGeometry(1, 1)); ng.instanceCount = TP.length;
    const aN = new Float32Array(TP.length * 4); TP.forEach((q, i) => { const v = treeP(q); aN.set([v.x, v.y, v.z, q[1] / 6.4], i * 4); });
    ng.setAttribute('aN', new THREE.InstancedBufferAttribute(aN, 4));
    const bg = new THREE.InstancedBufferGeometry(); bg.copy(new THREE.PlaneGeometry(1, 1, 1, 24)); bg.instanceCount = TE.length;
    const aA = new Float32Array(TE.length * 3), aB = new Float32Array(TE.length * 3), aRv = new Float32Array(TE.length);
    TE.forEach(([a, b], i) => { aA.set(treeP(TP[a]).toArray(), i * 3); aB.set(treeP(TP[b]).toArray(), i * 3); aRv[i] = TP[a][1] / 6.4 + 0.02; });
    bg.setAttribute('aA', new THREE.InstancedBufferAttribute(aA, 3)); bg.setAttribute('aB', new THREE.InstancedBufferAttribute(aB, 3)); bg.setAttribute('aR', new THREE.InstancedBufferAttribute(aRv, 1));
    this.beams = add(new THREE.Mesh(bg, new THREE.ShaderMaterial({ vertexShader: G.BEAM_V, fragmentShader: G.BEAM_F, uniforms: this.TU, ...addM, side: THREE.DoubleSide })));
    this.nodes = add(new THREE.Mesh(ng, new THREE.ShaderMaterial({ vertexShader: G.NODE_V, fragmentShader: G.NODE_F, uniforms: this.TU, ...addM })));
    // the Lance of Gaius (section L): two helical strands braided into a shaft, opening into two prongs at the tip
    const LEN = 0.5, strand = (ph) => { const P = [];
      for (let i = 0; i <= 160; i++) { const u = i / 160, z = (u - 0.5) * LEN, fork = Math.max(0, (u - 0.8) / 0.2);
        const r = 0.011 * (1 - 0.4 * u) + fork * fork * 0.03, a = u * 26 * (1 - fork * 0.8) + ph;
        P.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, z)); }
      return new THREE.CatmullRomCurve3(P); };
    this.LU = { uT: U.uT, uK: U.uK, uGlow: { value: 1 }, uLen: { value: LEN } };
    const lm = new THREE.ShaderMaterial({ vertexShader: G.LANCE_V, fragmentShader: G.LANCE_F, uniforms: this.LU });
    this.lance = new THREE.Group();
    for (const ph of [0, Math.PI]) this.lance.add(new THREE.Mesh(new THREE.TubeGeometry(strand(ph), 400, 0.0055, 10), lm));
    this.lanceTip = new THREE.Sprite(new THREE.SpriteMaterial({ map: ctx.shared.glow, color: 0xffb070, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    S.add(this.lance, this.lanceTip);
    const wn = 4000, wg = new THREE.BufferGeometry(), WR = new Float32Array(wn * 4);
    for (let i = 0; i < wn; i++) WR.set([R(), R(), R(), R()], i * 4);
    wg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(wn * 3), 3)); wg.setAttribute('aR', new THREE.BufferAttribute(WR, 4));
    this.WU = { uT: U.uT, uPx: U.uPx, uK: U.uK, uWake: { value: 0 }, uP: { value: new THREE.Vector3() }, uD: { value: new THREE.Vector3() } };
    this.wake = add(new THREE.Points(wg, new THREE.ShaderMaterial({ vertexShader: G.WAKE_V, fragmentShader: G.DOT_F, uniforms: this.WU, ...addM })));
    this._s = new THREE.Vector3(); this._up = new THREE.Vector3();
    // section G: red sea + sky dome
    this.GU = { uT: U.uT, uK: U.uK, uSun: U.uSun, uLvl: { value: LVL } };
    this.gsky = add(new THREE.Mesh(new THREE.SphereGeometry(80, 48, 24), new THREE.ShaderMaterial({ vertexShader: G.GSKY_V, fragmentShader: G.GSKY_F, uniforms: this.GU, side: THREE.BackSide, depthWrite: false })));
    this.gsky.renderOrder = -10;
    const sg2 = new THREE.PlaneGeometry(18, 18, 640, 640).rotateX(-Math.PI / 2);
    this.gsea = add(new THREE.Mesh(sg2, new THREE.ShaderMaterial({ vertexShader: G.GSEA_V, fragmentShader: G.GSEA_F, uniforms: this.GU })));
    // sun
    const glow = ctx.shared.glow;
    this.sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: 0xfff1d8, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    this.streak = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: 0x9fc4ff, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    S.add(this.sun, this.streak);
    this._v = new THREE.Vector3(); this._d = new THREE.Vector3(); this._u = new THREE.Vector3();
  }
  update(t) {
    const U = this.U, s = SEC(t), K = audio.hitPulse('kick', t, 7);
    if (s !== 'L') applyCam(this.camera, CAM[s], t);
    const g = s === 'G'; this.gsky.visible = this.gsea.visible = g; this.stars.visible = this.neb.visible = !g;
    if (g) { const b = Math.sin(t * 1.7), b2 = Math.sin(t * 1.1 + 1); this.camera.position.y += 0.025 * b; this.camera.rotateZ(0.02 * b2); this.camera.rotateX(0.01 * b); }
    this.lance.visible = this.lanceTip.visible = this.wake.visible = s === 'L';
    const cp = this.camera.position;
    U.uT.value = t; U.uK.value = K; U.uPx.value = this.ctx.h * 0.012;
    U.uRot.value = t * 0.02 + (s === 'C' ? 1.4 : s === 'B' ? 0.6 : 0);
    let sunScale = 0; const sun = U.uSun.value;
    this.RU.uA.value = 0; this.TU.uA.value = 0; this.HU.uHex.value = 0; this.VU.uVort.value = 0; let moon = 0, crack = 0;
    if (s === 'A') {
      U.uRed.value = 1; U.uFront.value = -1; U.uEdge.value = 0; U.uCloud.value = 0.3; U.uLights.value = 0;
      U.uCross.value = 0.7; U.uSoul.value = smooth(10.9, 12.5, t); U.uDir.value = 1; U.uCol.value.setRGB(1, 0.45, 0.2);
      if (t < 12.7) U.uQ.value.set(0, 2.4, -0.6); else U.uQ.value.copy(MOON);
      sun.set(0.8, 0.5, 0.6).normalize();
      this.RU.uA.value = smooth(13.4, 15.2, t);
      this.HU.uHex.value = smooth(11.2, 11.8, t); this.HU.uSpread.value = ease.inOut(clamp((t - 11.3) / 4.4));
      this.VU.uVort.value = smooth(12.6, 13.6, t);
      this.TU.uA.value = smooth(12.9, 13.4, t); this.TU.uRev.value = ease.out(clamp((t - 13.0) / 3.2));
      moon = smooth(12.72, 13.8, t); crack = smooth(14.0, 16.8, t);
      this.AU.uCol.value.setRGB(1, 0.25, 0.1);
    } else if (s === 'L') {
      // the lance flies in from deep space; the camera orbits from ahead of it to behind it, revealing the target
      const u = clamp((t - L0) / (L1 - L0)), d = this._d.copy(LP1).sub(LP0).normalize();
      const lp = this._v.copy(LP0).lerp(LP1, 0.08 + 0.72 * ease.in(u) * 0.6 + 0.4 * u * u * u);
      this.lance.position.copy(lp); this.lance.lookAt(lp.x + d.x, lp.y + d.y, lp.z + d.z); this.lance.rotateZ(t * 1.5);
      this.lanceTip.position.copy(lp).addScaledVector(d, 0.3); this.lanceTip.scale.setScalar(0.045 + 0.02 * K + 0.1 * smooth(111.6, 112.4, t));
      const sv = this._s.crossVectors(d, this._u.set(0, 1, 0)).normalize(), up = this._up.crossVectors(sv, d);
      const th = lerp(2.3, 0.2, ease.inOut(u)), R0 = lerp(0.34, 0.3, u);
      this.camera.position.copy(lp).addScaledVector(d, -Math.cos(th) * R0).addScaledVector(sv, Math.sin(th) * R0).addScaledVector(up, 0.05 + 0.03 * Math.sin(u * 3.1));
      this.camera.up.copy(up).applyAxisAngle(d, 0.25 * Math.sin(u * 2.4));
      this.camera.lookAt(this._u.copy(lp).addScaledVector(d, lerp(-0.02, 0.6, ease.inOut(u))));
      if (this.camera.fov !== 42) { this.camera.fov = 42; this.camera.updateProjectionMatrix(); }
      this.WU.uWake.value = smooth(L0, L0 + 0.4, t); this.WU.uP.value.copy(lp); this.WU.uD.value.copy(d);
      U.uRed.value = 1; U.uFront.value = -1; U.uEdge.value = 0; U.uCloud.value = 0.3; U.uLights.value = 0; U.uCross.value = 0.6; U.uSoul.value = 0.4;
      U.uDir.value = 1; U.uQ.value.copy(MOON); U.uCol.value.setRGB(1, 0.45, 0.2);
      this.HU.uHex.value = 0.3 + 1.2 * smooth(111.4, 112.4, t); this.HU.uSpread.value = 1;
      sun.set(0.8, 0.5, 0.6).normalize(); this.AU.uCol.value.setRGB(1, 0.25, 0.1);
    } else if (s === 'G') {
      // the planet rides the swell: bobs and rolls a little, half sunk in the red sea
      U.uRed.value = 0; U.uFront.value = 4; U.uEdge.value = 0; U.uCloud.value = 1; U.uLights.value = 0; U.uCross.value = 0; U.uSoul.value = 0;
      U.uCol.value.setRGB(0.6, 0.8, 1); U.uRot.value = 0.9 + t * 0.03;
      sun.set(-0.85, 0.28, 0.3).normalize(); this.AU.uCol.value.setRGB(0.35, 0.6, 1);
    } else if (s === 'B') {
      const f = ease.inOut(clamp((t - 136.3) / 4.3));
      U.uRed.value = 1; U.uFront.value = lerp(-0.05, 3.4, f); U.uEdge.value = 1 - smooth(140.3, 141, t);
      U.uCloud.value = 1; U.uLights.value = 0.3; U.uCross.value = 1;
      U.uSoul.value = 1 - smooth(139.2, 141, t); U.uDir.value = -1;
      this.HU.uHex.value = 0.22 * (1 - smooth(139, 141, t)); this.HU.uSpread.value = 1; U.uQ.value.set(0, 2.6, 0); U.uCol.value.setRGB(1, 0.6, 0.35);
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
    this.MU.uCrack.value = crack; this.moon.visible = moon > 0.001; this.moon.scale.setScalar(moon);
    this.halo.visible = this.moon.visible; this.halo.scale.setScalar(moon * (1.6 + 0.6 * crack + 0.3 * K));
    this.hex.visible = this.HU.uHex.value > 0; this.vort.visible = this.VU.uVort.value > 0;
    this.nodes.visible = this.beams.visible = this.TU.uA.value > 0; this.ring.visible = this.RU.uA.value > 0;
    this.ring.rotation.z = t * 0.05;
    this.NU.uA.value = s === 'C' ? 0.6 : 0.9;
    this.globeBob(g ? t : null);
    this.NU.uRed.value = s === 'A' || s === 'L' ? 1 : s === 'B' ? 1 - smooth(137.5, 140.8, t) : 0;
  }
  globeBob(t) {
    // the globe and its atmosphere shell sit at the scene root; move them together
    for (const m of this.globeParts) { if (t === null) { m.position.set(0, 0, 0); m.rotation.set(0, 0, 0); continue; }
      m.position.set(0, 0.03 * Math.sin(t * 1.3 + 0.4), 0); m.rotation.set(0.06 * Math.sin(t * 0.9), 0, 0.05 * Math.sin(t * 1.2 + 1)); }
  }
  post(t) {
    const s = SEC(t), K = audio.hitPulse('kick', t, 9);
    const base = { bloom: 1.0, bloomThr: 0.7, grain: 0.07, vig: 0.6, ca: 0.8, dust: 0.15, punch: K * 0.25 };
    if (s === 'L') return { ...base, bloom: 0.9, tint: [1.05, 0.92, 0.88], dustCol: [1, 0.5, 0.3], shake: 0.003 * K + 0.004 * smooth(111.5, 112.4, t), ca: 0.8 + smooth(111.5, 112.4, t) };
    if (s === 'G') return { ...base, bloom: 0.85, bloomThr: 0.75, grain: 0.11, vig: 0.75, ca: 1.1, flicker: 0.06, scratch: 0.35, weave: 0.4, leak: 0, sat: 1.0, contrast: 1.08,
      tint: [1.02, 0.97, 0.95], dust: 0.3, dustCol: [1, 0.6, 0.45], fadeW: smooth(114.75, 115.19, t) * 0.9 + (1 - smooth(G0, G0 + 0.2, t)) * 0.5 };
    if (s === 'A') return { ...base, tint: [1.06, 0.9, 0.86], dustCol: [1, 0.4, 0.3], shake: 0.002 * K, flicker: 0.04 };
    if (s === 'B') return { ...base, bloom: 0.8 + 0.6 * audio.hitPulse('hit', t, 5), bloomThr: 0.8, sat: 1.05, grain: 0.05 };
    return { ...base, bloom: 0.6, bloomThr: 0.85, grain: 0.045, ca: 0.5, sat: 1.1, lift: [0, 0.004, 0.012], exposure: 1.02, fadeB: smooth(217.6, 218.4, t) * 0.4 };
  }
}
