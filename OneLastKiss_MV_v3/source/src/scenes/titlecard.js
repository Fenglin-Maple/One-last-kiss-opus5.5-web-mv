// Evangelion-style Mincho title cards: heavy condensed white serif on black, pages flip on cue times.
// Each page is drawn once to a canvas; the shader adds CRT flicker, a slight zoom and an optional red wash.
import * as THREE from 'three';
import { Scene } from './base.js';
import { canvas, tex, FONTS } from '../core/textures.js';
import { clamp } from '../core/util.js';
import { audio } from '../core/audio.js';

const FRAG = /* glsl */ `
uniform sampler2D uTex, uPrev; uniform float uT, uAge, uAspect, uFlash, uRed, uInv; varying vec2 vUv;
float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main(){
  vec2 uv = vUv - 0.5; uv.x *= uAspect / (16.0 / 9.0);
  float z = 1.0 + uAge * 0.025; uv /= z; uv += 0.5;
  float fr = floor(uT * 30.0);
  uv.x += (h(vec2(floor(uv.y * 90.0), fr)) - 0.5) * 0.004 * step(0.85, h(vec2(fr, 3.0))) ;
  vec3 c = vec3(0.0);
  if (uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0) c = texture2D(uTex, uv).rgb;
  float on = smoothstep(0.0, 0.05, uAge);
  c *= on * (0.94 + 0.06 * h(vec2(fr, 1.0)));
  c = mix(c, vec3(c.r, c.r * 0.12, c.r * 0.08) * 1.3, uRed);
  c = mix(c, 1.0 - c, uInv);
  c += uFlash;
  c *= 1.0 + 0.6 * smoothstep(0.35, 0.0, uAge);
  gl_FragColor = vec4(c * 1.15, 1.0);
}`;

/**
 * pages: [{ t, lines: [{ s, x, y, size, sx?, font?, color?, align?, w? }], red?, inv? }]
 *   x, y in 0..1 of a 1920x1080 card; size in px; sx = horizontal squash (Eva cards are condensed / stretched)
 */
export class TitleCard extends Scene {
  constructor(ctx, pages) {
    super(ctx, { ortho: true });
    this.pages = pages.map((p) => ({ ...p, tex: this.draw(p) }));
    this.U = { uTex: { value: this.pages[0].tex }, uPrev: { value: null }, uT: { value: 0 }, uAge: { value: 0 }, uAspect: { value: 16 / 9 },
      uFlash: { value: 0 }, uRed: { value: 0 }, uInv: { value: 0 } };
    const m = new THREE.ShaderMaterial({ vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }', fragmentShader: FRAG, uniforms: this.U, depthTest: false });
    const q = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), m); q.frustumCulled = false;
    this.scene.add(q);
  }
  draw(p) {
    const c = canvas(1920, 1080), g = c.getContext('2d');
    g.fillStyle = '#000'; g.fillRect(0, 0, 1920, 1080);
    for (const l of p.lines) {
      g.save();
      g.font = `${l.weight || 800} ${l.size}px ${FONTS[l.font || 'mincho']}`;
      g.fillStyle = l.color || '#f4f1ea';
      g.textBaseline = 'alphabetic';
      g.translate(l.x * 1920, l.y * 1080);
      g.scale(l.sx || 1, l.sy || 1);
      g.textAlign = l.align || 'left';
      if (l.track) { // letter-spaced
        let x = 0; const chars = Array.from(l.s);
        const wsum = chars.reduce((a, ch) => a + g.measureText(ch).width + l.track, -l.track);
        if (l.align === 'center') x = -wsum / 2; else if (l.align === 'right') x = -wsum;
        g.textAlign = 'left';
        for (const ch of chars) { g.fillText(ch, x, 0); x += g.measureText(ch).width + l.track; }
      } else g.fillText(l.s, 0, 0);
      if (l.rule) { g.fillRect(l.rule[0], l.rule[1], l.rule[2], l.rule[3]); }
      g.restore();
    }
    return tex(c, { mip: false });
  }
  update(t) {
    let i = 0; while (i + 1 < this.pages.length && this.pages[i + 1].t <= t) i++;
    const p = this.pages[i];
    this.U.uTex.value = p.tex; this.U.uT.value = t; this.U.uAge.value = Math.max(0, t - p.t);
    this.U.uAspect.value = this.ctx.aspect;
    this.U.uRed.value = p.red || 0; this.U.uInv.value = p.inv || 0;
    this.U.uFlash.value = clamp(0.5 - (t - p.t) * 4) * (p.flash ?? 0.6);
  }
  post(t) { return { bloom: 0.6, bloomThr: 0.6, grain: 0.1, vig: 0.35, ca: 1.2, dust: 0, tone: 1, contrast: 1.05, punch: audio.hitPulse('kick', t, 12) * 0.5 }; }
}
