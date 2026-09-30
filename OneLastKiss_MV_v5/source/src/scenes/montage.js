// Montage: rapid beat-cut card sequence (the "Oh oh oh" memories, the rewind). Each card slams in with a
// zoom settle and a directional whip smear from the previous card, keeps drifting in its own direction, and
// breathes on kicks. Cards: [{ t, img, dir:[dx,dy], z:[z0,z1], tint:[r,g,b], inv, red, rev }]
import * as THREE from 'three';
import { Scene } from './base.js';
import { NOISE } from '../core/glsl.js';
import { clamp, ease } from '../core/util.js';
import { audio } from '../core/audio.js';

const FRAG = /* glsl */ `
uniform sampler2D uA, uB; uniform float uAspect, uAA, uBA, uAge, uT, uK, uRed, uInv, uWhip, uFlash;
uniform vec4 uCamA, uCamB; uniform vec2 uDir; uniform vec3 uTint; varying vec2 vUv;
${NOISE}
vec2 cover(vec2 s, float ia, vec4 cam){ float ra = uAspect / ia; vec2 sc = ra > 1.0 ? vec2(1.0, 1.0 / ra) : vec2(ra, 1.0);
  return 0.5 + s * sc / cam.z + cam.xy; }
vec3 samp(sampler2D t, vec2 uv){ uv = clamp(uv, 0.001, 0.999); return texture2D(t, uv).rgb; }
void main(){
  vec2 s = vUv - 0.5;
  vec2 ua = cover(s, uAA, uCamA), ub = cover(s, uBA, uCamB);
  // whip: smear along uDir, strongest at the cut, the new card sliding in over the old
  float w = uWhip; vec3 a = vec3(0.0), b = vec3(0.0);
  for (int i = 0; i < 12; i++) { float f = (float(i) / 11.0 - 0.5) * w * 0.18;
    a += samp(uA, ua + uDir * (f + w * 0.25)); b += samp(uB, ub + uDir * f); }
  a /= 12.0; b /= 12.0;
  float m = smoothstep(0.0, 1.0, clamp(uAge / 0.06, 0.0, 1.0));
  float slide = dot(vUv - 0.5, -uDir) + 0.5;
  m = max(m, step(slide, uAge / 0.06));
  vec3 col = mix(b, a, 1.0 - m);
  // RGB split + flash on the cut
  col += vec3(1.0, 0.95, 0.9) * smoothstep(0.1, 0.0, uAge) * uFlash;
  col *= uTint * (1.0 + uK * 0.12);
  float l = dot(col, vec3(0.3, 0.55, 0.15));
  col = mix(col, vec3(l * 1.4, l * 0.12, l * 0.1), uRed);
  col = mix(col, 1.0 - col, uInv);
  gl_FragColor = vec4(col, 1.0);
}`;

export class Montage extends Scene {
  constructor(ctx, cards, o = {}) {
    super(ctx, { ortho: true });
    this.cards = cards.slice().sort((a, b) => a.t - b.t); this.o = o;
    const V = (v) => ({ value: v });
    this.U = {
      uA: V(null), uB: V(null), uAspect: V(ctx.aspect), uAA: V(1.78), uBA: V(1.78), uAge: V(1), uT: V(0), uK: V(0),
      uRed: V(0), uInv: V(0), uWhip: V(0), uFlash: V(0.55), uCamA: V(new THREE.Vector4(0, 0, 1, 0)), uCamB: V(new THREE.Vector4(0, 0, 1, 0)),
      uDir: V(new THREE.Vector2(1, 0)), uTint: V(new THREE.Vector3(1, 1, 1)),
    };
    const m = new THREE.ShaderMaterial({ vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader: FRAG, uniforms: this.U, depthTest: false, depthWrite: false });
    const q = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), m); q.frustumCulled = false; this.scene.add(q);
    for (const c of this.cards) { const e = ctx.img[c.img]; if (!e) throw new Error('montage: missing ' + c.img); c.e = e; }
  }
  idx(t) { let i = 0; while (i + 1 < this.cards.length && this.cards[i + 1].t <= t) i++; return i; }
  cam(c, t) {
    const next = this.cards[this.cards.indexOf(c) + 1];
    const len = next ? next.t - c.t : 2.5, u = clamp((t - c.t) / len);
    const [z0, z1] = c.z || [1.14, 1.05], d = c.dir || [1, 0];
    const k = ease.outExpo(clamp((t - c.t) / 0.45));
    const z = z0 + (z1 - z0) * (0.7 * k + 0.3 * u);
    const pan = (c.pan ?? 0.035) * (u - 0.5) * (c.rev ? -1 : 1);
    return [d[0] * pan + (c.x || 0), d[1] * pan + (c.y || 0), z];
  }
  update(t) {
    const U = this.U, i = this.idx(t), c = this.cards[i], p = this.cards[Math.max(0, i - 1)];
    const age = t - c.t;
    U.uA.value = p.e.tex; U.uAA.value = p.e.w / p.e.h; U.uB.value = c.e.tex; U.uBA.value = c.e.w / c.e.h;
    U.uCamA.value.set(...this.cam(p, t), 0); U.uCamB.value.set(...this.cam(c, t), 0);
    U.uAge.value = i === 0 && age < 0 ? 1 : age;
    // very short cards (the rewind) would chain cut-flashes and smears into a white blur: scale both by card length
    const nx = this.cards[i + 1], len = nx ? nx.t - c.t : 1, sh = clamp((len - 0.06) / 0.3);
    U.uWhip.value = i === 0 ? 0 : Math.max(0, 1 - age / Math.min(0.12, len * 0.6)) * (c.whip ?? 1) * (0.45 + 0.55 * sh);
    U.uFlash.value = (this.o.flash ?? 0.55) * (0.25 + 0.75 * sh);
    const d = c.dir || [1, 0]; U.uDir.value.set(d[0], d[1]).normalize();
    U.uAspect.value = this.ctx.aspect; U.uT.value = t; U.uK.value = audio.hitPulse('kick', t, 8);
    U.uRed.value = c.red || 0; U.uInv.value = c.inv && age < 0.12 ? 1 : 0;
    U.uTint.value.set(...(c.tint || [1, 1, 1]));
  }
  post(t) {
    const c = this.cards[this.idx(t)], age = t - c.t;
    return { bloom: 0.7, bloomThr: 0.7, grain: 0.08, vig: 0.45, ca: 0.8 + Math.max(0, 1 - age / 0.2) * 2, dust: 0.1,
      shake: Math.max(0, 1 - age / 0.25) * 0.5, punch: audio.hitPulse('kick', t, 10) * 0.4, ...(this.o.post || {}) };
  }
}
