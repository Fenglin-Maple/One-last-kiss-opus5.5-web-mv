// Eva-style EMERGENCY takeover: the NERV command-deck boards that fill the screen cell by cell
// (red hex grid of "EMERGENCY", scrolling 緊急 tickers, hazard stripes, a slammed 緊急事態 plate, a final red strobe),
// then retract cell by cell to reveal the next shot - so a board can also be the transition across a cut.
// Drawn on a 2D canvas only while a window is live, uploaded, and composited over the HDR frame *before* bloom/grain
// so the red glows and wears the same film as the picture. Pure function of song time.
import * as THREE from 'three';
import { fsMat } from './post.js';
import { audio } from './audio.js';
import { FONTS } from './textures.js';
import { clamp, range, ease } from './util.js';

// FONTS.mincho glyphs on the boards: 緊急事態発生警告報非常特別宣言人類補完計画最終段階第三衝撃発進射出準備完了覚醒使徒接近総員戦闘配置避難勧告
const EN = '"Arial Black", "Helvetica Neue", Impact, Arial, "DejaVu Sans", sans-serif';
const HUE = {
  red: { a: '#e8261c', b: '#ff8a1e', dk: '#140203', hi: '#fff1e6', s: '#b8140c' },
  orange: { a: '#ff7a12', b: '#ffc21a', dk: '#120601', hi: '#fff4e0', s: '#d05a08' },
};
const FRAG = `uniform sampler2D tOv; uniform float uGain; varying vec2 vUv;
void main(){ vec4 c = texture2D(tOv, vUv); vec3 lin = pow(c.rgb, vec3(2.2)) * uGain; gl_FragColor = vec4(lin * c.a, c.a); }`;
const hash = (a, b) => { const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return s - Math.floor(s); };
const hx4 = (n) => (Math.floor(hash(n, 3.3) * 65535)).toString(16).toUpperCase().padStart(4, '0');

// default layout (virtual 1080-high space); y as fraction of height. Everything stays above the lyric zone (> 0.8)
const BANDS = [
  { y: 0.075, h: 56, k: 'ticker', dir: 1, sp: 240, at: 0.16 },
  { y: 0.205, h: 30, k: 'hazard', dir: -1, sp: 110, at: 0.26 },
  { y: 0.655, h: 82, k: 'red', dir: -1, sp: -320, at: 0.34 },
  { y: 0.75, h: 28, k: 'hazard', dir: 1, sp: -110, at: 0.42 },
];
const LITE_BANDS = [
  { y: 0.05, h: 50, k: 'ticker', dir: 1, sp: 260, at: 0.0 },
  { y: 0.145, h: 26, k: 'hazard', dir: -1, sp: 120, at: 0.08 },
];

export class Emergency {
  /** windows: [{ t0, t1, out, o:[x,y], hue, lite, head, sub, line, band, cells:[en, jp], code:[...], strobe, fill }] */
  constructor(windows) {
    this.W = windows.slice().sort((a, b) => a.t0 - b.t0);
    this.cv = document.createElement('canvas'); this.g = this.cv.getContext('2d');
    this.mat = fsMat(FRAG, { tOv: { value: null }, uGain: { value: 1.05 } },
      { transparent: true, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
    this.on = false; this.cover = 0; this.enabled = true;
    this.resize(1280, 720);
  }
  resize(w, h) {
    const cw = Math.min(1600, w); this.cv.width = cw; this.cv.height = Math.round((cw * h) / w); this.aspect = w / h;
    if (this.tex) this.tex.dispose();
    this.tex = new THREE.CanvasTexture(this.cv);
    Object.assign(this.tex, { colorSpace: THREE.NoColorSpace, generateMipmaps: false, minFilter: THREE.LinearFilter });
    this.mat.uniforms.tOv.value = this.tex;
  }
  win(t) { return this.W.find((w) => t >= w.t0 && t < w.t1 + (w.out || 0)); }
  update(t) {
    const w = this.enabled && this.win(t);
    this.on = !!w; this.cover = 0;
    if (!w) return;
    this.draw(t, w);
    this.tex.needsUpdate = true;
  }
  render(fs, target) { if (this.on) fs.run(this.mat, target, false); }

  // compressed faux-bold Mincho (Eva title-card lettering)
  jp(s, x, y, size, col, o = {}) {
    const g = this.g; g.save(); g.translate(x, y); g.scale(o.sx || 0.82, o.sy || 1.22);
    g.font = `500 ${size}px ${FONTS.mincho}`; g.textAlign = o.align || 'center'; g.textBaseline = 'middle';
    g.fillStyle = col; g.strokeStyle = col; g.lineWidth = size * 0.045; g.lineJoin = 'round';
    g.strokeText(s, 0, 0); g.fillText(s, 0, 0); g.restore();
  }
  en(s, x, y, size, col, o = {}) {
    const g = this.g; g.save(); g.font = `900 ${size}px ${EN}`; g.textAlign = o.align || 'center'; g.textBaseline = 'middle';
    if ('letterSpacing' in g) g.letterSpacing = (o.ls || 0) + 'px';
    g.fillStyle = col; g.translate(x, y); g.scale(o.sx || 0.9, 1); g.fillText(s, 0, 0, o.max); g.restore();
  }
  mono(s, x, y, size, col, align = 'left') {
    const g = this.g; g.font = `500 ${size}px ${FONTS.mono}`; g.textAlign = align; g.textBaseline = 'middle'; g.fillStyle = col; g.fillText(s, x, y);
  }
  hazard(x, y, w, h, off, c1, c2) {
    const g = this.g; g.fillStyle = c2; g.fillRect(x, y, w, h); g.save(); g.beginPath(); g.rect(x, y, w, h); g.clip(); g.fillStyle = c1;
    const p = h * 2; for (let i = -2; i < w / p + 2; i++) { const sx = x + i * p + (off % p);
      g.beginPath(); g.moveTo(sx, y + h); g.lineTo(sx + h, y); g.lineTo(sx + h * 2, y); g.lineTo(sx + h, y + h); g.fill(); }
    g.restore();
  }

  draw(t, w) {
    const g = this.g, H = 1080, s = this.cv.height / H, VW = H * this.aspect, C = HUE[w.hue || 'red'];
    const D = w.t1 - w.t0, out = w.out || 0, u = clamp((t - w.t0) / D, 0, 1), lite = !!w.lite, beat = Math.floor(audio.beat(t));
    // appear at fraction `at` of the build; leave at fraction `ex` of the exit
    const vis = (at, ex, dur = 0.18) => {
      const a = clamp((t - (w.t0 + at * D)) / dur, 0, 1); if (a <= 0) return 0;
      if (t < w.t1) return a; if (out <= 0) return 0;
      return a * (1 - clamp((t - (w.t1 + ex * out)) / 0.12, 0, 1));
    };
    g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, this.cv.width, this.cv.height); g.setTransform(s, 0, 0, s, 0, 0);

    // 1. the picture sinks under the boards
    const dim = lite ? 0 : 0.9 * ease.inOut(range(u, 0.02, 0.55)) * vis(0, 0.35, 0.01);
    if (dim > 0) { g.fillStyle = `rgba(0,0,0,${dim})`; g.fillRect(0, 0, VW, H); }
    this.cover = dim;

    // 2. hex field: spreads from the origin, retracts from it (the hole the next shot comes through)
    if (!lite) {
      const R = 60, dx = R * 1.5, dy = R * Math.sqrt(3), ox = (w.o ? w.o[0] : 0.5) * VW, oy = (w.o ? w.o[1] : 0.45) * H;
      const cols = Math.ceil(VW / dx) + 2, rows = Math.ceil(H / dy) + 2, dmax = Math.hypot(Math.max(ox, VW - ox), Math.max(oy, H - oy));
      const fill = w.fill || 0.6, cells = w.cells || ['EMERGENCY', '緊急'];
      for (let i = -1; i < cols; i++) for (let j = -1; j < rows; j++) {
        const cx = i * dx, cy = j * dy + (i & 1 ? dy / 2 : 0), h1 = hash(i, j), h2 = hash(j + 7, i), h3 = hash(i + 13, j * 3);
        if (h2 < 0.07) continue;
        const dn = Math.hypot(cx - ox, cy - oy) / dmax;
        const ta = w.t0 + D * (0.04 + fill * (0.8 * dn + 0.2 * h1));
        if (t < ta) continue;
        let a = clamp((t - ta) / 0.12, 0, 1), fade = 1;
        if (t >= w.t1) { if (out <= 0) continue; const tb = w.t1 + out * 0.85 * (0.8 * dn + 0.2 * h1); fade = 1 - clamp((t - tb) / 0.07, 0, 1); if (fade <= 0) continue; }
        const r = R * 0.9 * (0.55 + 0.45 * ease.out(a)) * (0.5 + 0.5 * fade), lyr = cy > H * 0.8;
        g.beginPath(); for (let k = 0; k < 6; k++) { const an = (k * Math.PI) / 3; g.lineTo(cx + r * Math.cos(an), cy + r * Math.sin(an)); } g.closePath();
        g.globalAlpha = fade * (lyr ? 0.45 : 1);
        if (t - ta < 0.06) { g.fillStyle = C.hi; g.fill(); g.globalAlpha = 1; continue; }   // pop-in flash
        const blink = h1 < 0.22 && ((beat + i + j) & 1);
        let type = h3 < 0.42 ? 0 : h3 < 0.74 ? 1 : h3 < 0.84 ? 2 : 3; if (lyr) type = 3;
        if (type === 0 && !blink) {
          g.fillStyle = C.a; g.fill(); this.en(cells[0], cx, cy - 4, 19, C.dk, { max: r * 1.45, sx: 0.86 });
          g.fillStyle = C.dk; g.fillRect(cx - r * 0.55, cy + 12, r * 1.1, 2); this.mono(hx4(i * 31 + j), cx, cy + 24, 11, C.dk, 'center');
        } else if (type <= 1) {
          g.fillStyle = C.dk; g.fill(); g.strokeStyle = C.a; g.lineWidth = 3; g.stroke();
          if (type === 0) this.en(cells[0], cx, cy, 19, C.a, { max: r * 1.45, sx: 0.86 }); else this.jp(cells[1], cx, cy + 2, 40, C.a);
        } else if (type === 2) {
          g.fillStyle = blink ? C.dk : C.b; g.fill(); this.jp('警告', cx, cy + 2, 38, blink ? C.b : C.dk);
        } else { g.fillStyle = 'rgba(6,0,0,0.85)'; g.fill(); g.strokeStyle = C.a; g.lineWidth = 2; g.stroke(); this.mono(hx4(i + j * 17), cx, cy, 12, C.a, 'center'); }
        g.globalAlpha = 1;
      }
    }

    // 3. side data panels (MAGI log / impact clock)
    if (!lite) {
      const a = vis(0.3, 0.2);
      if (a > 0) {
        const py = H * 0.29, ph = H * 0.33 * ease.out(a), pw = 290, code = w.code || ['PATTERN BLUE', 'AT FIELD', 'SYNC ERR', 'LCL', 'MAGI'];
        [[42, 0], [VW - 42 - pw, 1]].forEach(([px, side]) => {
          g.fillStyle = 'rgba(8,0,0,0.9)'; g.fillRect(px, py, pw, ph); g.strokeStyle = C.a; g.lineWidth = 3; g.strokeRect(px, py, pw, ph);
          g.fillStyle = C.a; g.fillRect(px, py, pw, 34);
          this.en(side ? 'TIME TO IMPACT' : 'MAGI SYSTEM', px + pw / 2, py + 18, 20, C.dk, { ls: 4 });
          g.save(); g.beginPath(); g.rect(px, py + 36, pw, ph - 38); g.clip();
          if (!side) { const n0 = Math.floor((t - w.t0) * 16);
            for (let k = 0; k < 13; k++) { const n = n0 + k; this.mono(`${hx4(n)} ${hx4(n + 91)} ${code[n % code.length]}`, px + 14, py + 56 + k * 22, 15, k === 12 ? C.hi : C.b); } }
          else { const rem = Math.max(0, w.t1 - t);
            this.mono(`${String(Math.floor(rem)).padStart(2, '0')}.${String(Math.floor((rem % 1) * 100)).padStart(2, '0')}`, px + pw / 2, py + 100, 68, C.a, 'center');
            for (let k = 0; k < 14; k++) { const bh = 20 + 70 * Math.abs(Math.sin(t * (3 + k * 0.7) + k * 1.9));
              g.fillStyle = k % 4 === 0 ? C.b : C.a; g.fillRect(px + 18 + k * 18.5, py + ph - 14 - bh * (ph / (H * 0.33)), 12, bh * (ph / (H * 0.33))); } }
          g.restore();
        });
      }
    }

    // 4. bands slide in, scroll, slide out
    (lite ? LITE_BANDS : BANDS).forEach((b, bi) => {
      const a = vis(b.at * (lite ? 1 : 0.9), 0.1 + bi * 0.12, 0.28); if (a <= 0) return;
      const inT = clamp((t - (w.t0 + b.at * D)) / 0.28, 0, 1), dir = b.dir;
      const slide = (1 - ease.out(inT)) * VW * dir + (t >= w.t1 && out > 0 ? -dir * VW * ease.in(1 - a) : 0);
      const y0 = b.y * H - b.h / 2, off = (t - w.t0) * b.sp;
      g.save(); g.translate(slide, 0);
      if (b.k === 'hazard') {
        this.hazard(0, y0, VW, b.h, off, C.b, C.dk);
        for (let x = ((off * 0.5) % 640) - 640; x < VW; x += 640) { g.fillStyle = C.dk; g.fillRect(x + 250, y0 - 2, 170, b.h + 4); this.en('DANGER', x + 335, y0 + b.h / 2 + 1, b.h * 0.72, C.b, { ls: 6 }); }
      } else if (b.k === 'ticker') {
        g.fillStyle = 'rgba(10,0,0,0.92)'; g.fillRect(0, y0, VW, b.h); g.fillStyle = C.a; g.fillRect(0, y0, VW, 4); g.fillRect(0, y0 + b.h - 4, VW, 4);
        const str = w.ticker || 'EMERGENCY  //  ALL PERSONNEL TO LEVEL-1 BATTLE STATIONS  //  PATTERN BLUE CONFIRMED  //  ', sw = 1500;
        for (let x = (off % sw) - sw; x < VW; x += sw) this.en(str, x, y0 + b.h / 2 + 1, b.h * 0.5, C.a, { align: 'left', ls: 5 });
      } else {
        g.fillStyle = C.a; g.fillRect(0, y0, VW, b.h); g.fillStyle = C.dk; g.fillRect(0, y0 + 6, VW, 3); g.fillRect(0, y0 + b.h - 9, VW, 3);
        const sw = 820, jp = w.band || '緊急事態発生';
        for (let x = (off % sw) - sw; x < VW; x += sw) { this.jp(jp, x + 190, y0 + b.h / 2 + 2, b.h * 0.66, C.dk); this.en('EMERGENCY', x + 560, y0 + b.h / 2 + 1, b.h * 0.5, C.dk, { ls: 4 }); }
      }
      g.restore();
    });

    // 5. corner tags
    const ta = vis(lite ? 0.05 : 0.2, 0.05);
    if (ta > 0) {
      const ty = lite ? H * 0.2 : H * 0.125;
      g.globalAlpha = ta; g.fillStyle = 'rgba(10,0,0,0.9)'; g.fillRect(42, ty, 330, 64); g.strokeStyle = C.a; g.lineWidth = 2; g.strokeRect(42, ty, 330, 64);
      g.fillStyle = C.a; g.fillRect(42, ty, 16, 64);
      this.jp(w.tag || '警報', 118, ty + 33, 40, C.a); this.en(`LEVEL ${w.level || 5}`, 270, ty + 24, 26, C.b, { ls: 3 });
      this.mono(`T+${(t - w.t0).toFixed(2).padStart(6, '0')}`, 205, ty + 49, 15, C.b);
      if (!lite) { const rx = VW - 372; g.fillStyle = 'rgba(10,0,0,0.9)'; g.fillRect(rx, ty, 330, 64); g.strokeRect(rx, ty, 330, 64);
        this.en(w.code2 || 'CODE : 777', rx + 165, ty + 24, 24, C.a, { ls: 6 }); this.mono(w.line2 || 'NERV HQ  CENTRAL DOGMA', rx + 165, ty + 49, 14, C.b, 'center'); }
      g.globalAlpha = 1;
    }

    // 6. the slammed headline plate
    const strobe = lite ? 0 : w.strobe ?? 1.0, inStrobe = t >= w.t1 - strobe && t < w.t1;
    const hA = vis(w.headAt ?? (lite ? 0.12 : 0.42), 0.0, 0.14);
    if (hA > 0 && !inStrobe && w.head) {
      const k = clamp((t - (w.t0 + (w.headAt ?? (lite ? 0.12 : 0.42)) * D)) / 0.16, 0, 1), sc = 1 + 0.35 * (1 - ease.out(k));
      const bw = lite ? 620 : 860, bh = lite ? 190 : 300, cx = VW / 2, cy = lite ? H * 0.34 : H * 0.44;
      const inv = !lite && u > 0.7 && (beat & 1);
      g.save(); g.globalAlpha = hA; g.translate(cx, cy); g.scale(sc, sc);
      g.fillStyle = inv ? C.a : 'rgba(8,0,0,0.94)'; g.fillRect(-bw / 2, -bh / 2, bw, bh);
      g.strokeStyle = C.a; g.lineWidth = 5; g.strokeRect(-bw / 2, -bh / 2, bw, bh); g.lineWidth = 2; g.strokeRect(-bw / 2 + 12, -bh / 2 + 12, bw - 24, bh - 24);
      this.hazard(-bw / 2, -bh / 2 - 30, bw, 18, (t - w.t0) * 80, C.a, C.dk); this.hazard(-bw / 2, bh / 2 + 12, bw, 18, -(t - w.t0) * 80, C.a, C.dk);
      const fg = inv ? C.dk : C.a;
      g.shadowColor = inv ? 'transparent' : C.a; g.shadowBlur = 24;
      this.jp(w.head, 0, -bh * 0.08, lite ? 96 : 146, fg, { sx: 0.8, sy: 1.22 }); g.shadowBlur = 0;
      this.en(w.sub || 'EMERGENCY', 0, bh * 0.3, lite ? 30 : 42, inv ? C.dk : C.hi, { ls: lite ? 10 : 16 });
      g.restore(); g.globalAlpha = 1;
    }

    // 7. final strobe: red card / black card with the headline, on the beat grid (<= 3 flashes/s)
    if (inStrobe) {
      const ph = Math.floor(((t - (w.t1 - strobe)) / strobe) * 3), red = ph !== 1;
      g.fillStyle = red ? C.s : C.dk; g.fillRect(0, 0, VW, H);
      this.jp(w.head || '緊急事態', VW / 2, H * 0.44, 330, red ? C.dk : C.a, { sx: 0.72, sy: 1.3 });
      this.en(w.sub || 'EMERGENCY', VW / 2, H * 0.72, 64, red ? C.dk : C.a, { ls: 22 });
      this.cover = 1;
    }
    // 8. entry hit
    if (!lite && t - w.t0 < 0.14) { g.fillStyle = `rgba(232,38,28,${0.45 * (1 - (t - w.t0) / 0.14)})`; g.fillRect(0, 0, VW, H); }
  }
}
