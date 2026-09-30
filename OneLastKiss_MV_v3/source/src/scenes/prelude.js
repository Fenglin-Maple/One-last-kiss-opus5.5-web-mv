// S0 Prelude 0 -> 20.45: projector leader countdown 8..2, the 2-pop, the title written in
// gold, rainbow pencil hatching (the cover), then everything collapses into one point of light.
import * as THREE from 'three';
import { Scene, bgQuad } from './base.js';
import { NOISE } from '../core/glsl.js';
import { digitAtlas } from '../core/textures.js';
import { StrokeSet } from '../core/stroke.js';
import { WrittenText } from '../core/written.js';
import { audio, PERIOD } from '../core/audio.js';
import { clamp, lerp, range, smooth, ease, keys, rng, pencil } from '../core/util.js';

const LEADER = `uniform float uT, uAspect, uDigit, uPhase, uOn, uPop, uBeat; uniform sampler2D tDigits; varying vec2 vUv; ${NOISE}
void main(){
  vec2 q = (vUv - 0.5) * vec2(uAspect, 1.0) * 2.0; float r = length(q);
  float hot = exp(-r * r * 0.6);
  vec3 col = vec3(0.16, 0.12, 0.085) * hot + vec3(0.02, 0.015, 0.01);
  float a01 = fract(atan(q.x, q.y) / 6.28318 + 1.0);
  col += vec3(0.13, 0.095, 0.06) * step(a01, uPhase) * step(r, 0.62) * hot;
  float line = smoothstep(0.006, 0.0, abs(r - 0.62)) + smoothstep(0.006, 0.0, abs(r - 0.72)) * 0.8;
  line += (smoothstep(0.004, 0.0, abs(q.x)) + smoothstep(0.004, 0.0, abs(q.y))) * 0.6 * step(r, 0.95);
  float hand = smoothstep(0.012, 0.0, abs(fract(a01 - uPhase + 0.5) - 0.5) * 6.2832 * r) * step(r, 0.62);
  vec3 cream = vec3(1.0, 0.86, 0.62);
  col += cream * (line * (0.5 + 0.4 * uBeat) + hand * 1.4);
  vec2 d = q / vec2(0.62, 0.78) + 0.5;
  if (uDigit >= 0.0 && d.x > 0.0 && d.x < 1.0 && d.y > 0.0 && d.y < 1.0)
    col = mix(col, cream * 1.7, texture2D(tDigits, vec2((uDigit + d.x) / 10.0, d.y)).a);
  col *= uOn * (0.92 + 0.08 * hash12(vec2(floor(uT * 24.0), 3.0)));
  col += vec3(1.0, 0.95, 0.85) * uPop * 3.0;
  gl_FragColor = vec4(col, 1.0);
}`;

const T_LEADER = 1.17, STEP = 2 * PERIOD, T_POP = T_LEADER + 7 * STEP, T_TITLE = 9.74, T_HATCH = 14.02, T_COLLAPSE = 18.31;

function hatching() {
  const R = rng(21), A = 1.9, S = new StrokeSet();
  for (let i = 0; i < 130; i++) {
    const u = R(), x0 = -A + u * 2 * A, y0 = -1.05 + R() * 2.1;
    const ang = 0.38 + (R() - 0.5) * 0.55, len = 0.25 + R() * 0.95, bend = (R() - 0.5) * 0.4, pts = [];
    for (let k = 0; k <= 20; k++) {
      const s = k / 20, b = Math.sin(s * Math.PI) * bend * len;
      pts.push([x0 + Math.cos(ang) * len * s - Math.sin(ang) * b, y0 + Math.sin(ang) * len * s + Math.cos(ang) * b]);
    }
    S.add(pts, { start: T_HATCH + u * 2.4 + R() * 0.5, dur: 0.35 + R() * 0.5, width: 1.2 + R() * 2.4, color: pencil(clamp(u + (R() - 0.5) * 0.15), 0.8 + R() * 0.6) });
  }
  return S;
}

export class Prelude extends Scene {
  constructor(ctx) {
    super(ctx, { ortho: true });
    this.U = {
      uT: { value: 0 }, uAspect: { value: ctx.aspect }, uDigit: { value: -1 }, uPhase: { value: 0 }, uOn: { value: 0 },
      uPop: { value: 0 }, uBeat: { value: 0 }, tDigits: { value: digitAtlas() },
    };
    this.leader = bgQuad(LEADER, this.U);
    this.scene.add(this.leader);
    this.grp = new THREE.Group(); this.scene.add(this.grp);
    this.title = new WrittenText('One Last Kiss', { size: 220, height: 0.6, color: [1.35, 0.82, 0.4] });
    this.title.group.position.y = 0.1;
    this.grp.add(this.title.group);
    this.hatch = hatching();
    this.hatchMesh = this.hatch.build({ uTip: { value: 2.5 } });
    this.grp.add(this.hatchMesh);
    this.spark = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({
      map: ctx.shared.glow, color: new THREE.Color(5, 3.6, 2.4), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false,
    }));
    this.scene.add(this.spark);
  }
  update(t) {
    const U = this.U, k = Math.floor((t - T_LEADER) / STEP);
    U.uT.value = t; U.uAspect.value = this.ctx.aspect;
    U.uDigit.value = k >= 0 && k <= 6 ? 8 - k : -1;
    U.uPhase.value = k >= 0 ? ((t - T_LEADER) / STEP) % 1 : 0;
    U.uOn.value = smooth(0.15, 1.0, t) * (t < T_POP ? 1 : 0);
    U.uPop.value = t >= T_POP && t < T_POP + 0.05 ? 1 : 0;
    U.uBeat.value = audio.beatPulse(t, 5);
    this.leader.visible = t < T_POP + 0.1;

    const W = keys(t, [[T_TITLE, 0], [10.85, 0.31], [11.1, 0.345], [12.15, 0.63], [12.4, 0.665], [13.6, 1]], ease.inOut)[0];
    const fit = Math.min(1, (this.ctx.aspect * 2 * 0.86) / this.title.W);
    this.title.group.scale.setScalar(fit);
    this.title.set(t < T_TITLE ? 0 : W, 1 - 0.35 * smooth(14.4, 16.2, t), 1);
    this.title.mesh.visible = this.title.group.visible = t >= T_TITLE;

    this.hatch.set(t, this.ctx.res);
    this.hatchMesh.visible = t >= T_HATCH;
    this.hatchMesh.scale.x = Math.max(1, this.ctx.aspect / 1.78);
    this.hatchMesh.position.x = Math.sin(t * 0.3) * 0.02;

    const c = ease.inExpo(range(t, T_COLLAPSE, 20.25));
    this.grp.scale.setScalar(1 - 0.985 * c);
    this.grp.rotation.z = c * 0.7;
    const sp = smooth(18.5, 20.45, t);
    this.spark.visible = t > T_COLLAPSE;
    this.spark.scale.setScalar(0.04 + 1.3 * ease.in(sp) + 0.05 * audio.beatPulse(t));
    this.spark.material.opacity = clamp(sp * 3);
  }
  post(t) {
    const k = smooth(8.8, 9.8, t);
    return {
      grain: lerp(0.15, 0.07, k), flicker: lerp(0.55, 0.12, k), scratch: lerp(1, 0.2, k), weave: lerp(1, 0.25, k),
      vig: lerp(0.95, 0.7, k), sat: lerp(0.5, 1, k), tint: [lerp(1.08, 1, k), lerp(0.96, 1, k), lerp(0.8, 1, k)],
      ca: 0.8, bloom: lerp(0.5, 1.1, k), bloomThr: lerp(0.9, 0.55, k), dust: lerp(0.2, 0.45, k),
      fadeB: 1 - smooth(0.0, 1.2, t), exposure: 1 + 0.4 * smooth(18.8, 20.4, t),
    };
  }
}
