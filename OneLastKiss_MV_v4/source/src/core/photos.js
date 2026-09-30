// Painted "memory" snapshots for polaroids / montage (4x3 atlas) + the large developing photo.
import { canvas, tex } from './textures.js';
import { drawFigure } from './figures.js';
import { rng } from './util.js';

const lg = (g, x0, y0, x1, y1, stops) => { const gr = g.createLinearGradient(x0, y0, x1, y1); stops.forEach((c, i) => gr.addColorStop(i / (stops.length - 1), c)); return gr; };
const rect = (g, f, x, y, w, h) => { g.fillStyle = f; g.fillRect(x, y, w, h); };
function glow(g, x, y, r, col) { const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, col); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2); }
const add = (g, f) => { g.globalCompositeOperation = 'lighter'; f(); g.globalCompositeOperation = 'source-over'; };
const HOLD = { lean: 0, arm: [0.35, 0.35, -0.08, -0.05], leg: [0.035, 0, -0.035, 0] };

export const PAINT = [
  function two(g, s) { // two people holding hands against the sun (the MV's core image)
    rect(g, lg(g, 0, 0, 0, s, ['#35224d', '#b85478', '#f4a468', '#ffe2ae', '#ffe2ae']), 0, 0, s, s);
    add(g, () => { glow(g, s * 0.5, s * 0.74, s * 0.55, 'rgba(255,190,130,0.85)'); glow(g, s * 0.5, s * 0.74, s * 0.13, 'rgba(255,250,235,1)'); });
    g.fillStyle = '#1d1022'; g.beginPath(); g.moveTo(0, s * 0.82); g.quadraticCurveTo(s * 0.5, s * 0.775, s, s * 0.84); g.lineTo(s, s); g.lineTo(0, s); g.fill();
    drawFigure(g, s * 0.457, s * 0.8, s * 0.36, { pose: HOLD, color: '#170b1a' });
    drawFigure(g, s * 0.543, s * 0.8, s * 0.335, { pose: HOLD, flip: true, hair: 'long', color: '#170b1a' });
  },
  function sea(g, s, R) {
    rect(g, lg(g, 0, 0, 0, s * 0.55, ['#8fb8d6', '#f3d9c4']), 0, 0, s, s * 0.55);
    rect(g, lg(g, 0, s * 0.55, 0, s, ['#4b7a96', '#1b3448']), 0, s * 0.55, s, s * 0.45);
    add(g, () => {
      glow(g, s * 0.62, s * 0.5, s * 0.3, 'rgba(255,220,180,0.7)');
      for (let i = 0; i < 70; i++) { const y = s * (0.56 + R() * 0.42); g.fillStyle = `rgba(255,240,220,${0.25 + R() * 0.4})`; g.fillRect(s * 0.62 + (R() - 0.5) * s * 0.3 * (y / s), y, (4 + R() * 18) * (y / s), 1.5); }
    });
    g.strokeStyle = 'rgba(40,40,50,0.7)'; g.lineWidth = 1.5;
    for (let i = 0; i < 3; i++) { const x = s * (0.2 + i * 0.08), y = s * (0.18 + R() * 0.1); g.beginPath(); g.moveTo(x - 6, y - 3); g.quadraticCurveTo(x - 3, y - 5, x, y); g.quadraticCurveTo(x + 3, y - 5, x + 6, y - 3); g.stroke(); }
  },
  function room(g, s) {
    rect(g, '#2b211f', 0, 0, s, s);
    add(g, () => { g.fillStyle = 'rgba(255,215,160,0.2)'; g.beginPath(); g.moveTo(s * 0.3, s * 0.54); g.lineTo(s * 0.62, s * 0.54); g.lineTo(s * 0.98, s); g.lineTo(s * 0.18, s); g.fill(); });
    rect(g, '#fff4dc', s * 0.3, s * 0.12, s * 0.32, s * 0.42);
    g.strokeStyle = '#2b211f'; g.lineWidth = s * 0.018; g.beginPath(); g.moveTo(s * 0.46, s * 0.12); g.lineTo(s * 0.46, s * 0.54); g.moveTo(s * 0.3, s * 0.33); g.lineTo(s * 0.62, s * 0.33); g.stroke();
    g.fillStyle = 'rgba(245,235,225,0.4)'; g.beginPath(); g.moveTo(s * 0.6, s * 0.08); g.bezierCurveTo(s * 0.7, s * 0.3, s * 0.58, s * 0.5, s * 0.72, s * 0.64); g.lineTo(s * 0.8, s * 0.64); g.lineTo(s * 0.8, s * 0.08); g.fill();
    add(g, () => glow(g, s * 0.46, s * 0.33, s * 0.4, 'rgba(255,230,190,0.35)'));
  },
  function pyramid(g, s) {
    rect(g, lg(g, 0, 0, 0, s * 0.62, ['#1b2140', '#5d4f86', '#e39a78']), 0, 0, s, s * 0.62);
    rect(g, lg(g, 0, s * 0.62, 0, s, ['#3a2f55', '#0f1022']), 0, s * 0.62, s, s * 0.38);
    const tri = (dir, a) => {
      g.globalAlpha = a; g.fillStyle = '#141428'; g.beginPath(); g.moveTo(s * 0.2, s * 0.62); g.lineTo(s * 0.5, s * 0.62 - dir * s * 0.32); g.lineTo(s * 0.8, s * 0.62); g.fill();
      g.strokeStyle = 'rgba(255,210,150,0.6)'; g.lineWidth = 1;
      for (let i = 1; i < 8; i++) { const k = i / 8, y = s * 0.62 - dir * s * 0.32 * k; g.beginPath(); g.moveTo(s * (0.2 + 0.3 * k), y); g.lineTo(s * (0.8 - 0.3 * k), y); g.moveTo(s * (0.2 + 0.075 * i), s * 0.62); g.lineTo(s * 0.5, s * 0.62 - dir * s * 0.32); g.stroke(); }
      g.globalAlpha = 1;
    };
    tri(1, 1); tri(-1, 0.3);
  },
  function sky(g, s, R) {
    rect(g, lg(g, 0, 0, 0, s, ['#5d97cf', '#bcdcf1', '#eef6fb']), 0, 0, s, s);
    for (let i = 0; i < 16; i++) glow(g, s * (0.05 + R() * 0.9), s * (0.55 + R() * 0.4), s * (0.08 + R() * 0.12), 'rgba(255,255,255,0.85)');
    g.strokeStyle = 'rgba(255,255,255,0.85)'; g.lineWidth = 2; g.beginPath(); g.moveTo(s * 0.08, s * 0.34); g.quadraticCurveTo(s * 0.4, s * 0.22, s * 0.72, s * 0.14); g.stroke();
  },
  function road(g, s) {
    rect(g, lg(g, 0, 0, 0, s * 0.6, ['#3c2b5c', '#a35a86', '#f0a574']), 0, 0, s, s * 0.6);
    rect(g, '#1c1426', 0, s * 0.6, s, s * 0.4);
    g.fillStyle = '#30263a'; g.beginPath(); g.moveTo(s * 0.47, s * 0.6); g.lineTo(s * 0.53, s * 0.6); g.lineTo(s * 0.95, s); g.lineTo(s * 0.05, s); g.fill();
    g.strokeStyle = '#0e0a14'; g.lineWidth = 2; let px = null, py = null;
    for (let i = 0; i < 7; i++) {
      const k = Math.pow(0.68, i), x = s * (0.52 + 0.44 * k), top = s * 0.6 - s * 0.5 * k;
      g.beginPath(); g.moveTo(x, s * 0.6 + s * 0.03 * k); g.lineTo(x, top); g.moveTo(x - s * 0.04 * k, top + s * 0.02 * k); g.lineTo(x + s * 0.04 * k, top + s * 0.02 * k); g.stroke();
      if (px !== null) { g.beginPath(); g.moveTo(px, py); g.quadraticCurveTo((px + x) / 2, Math.max(py, top) + s * 0.03 * k, x, top + s * 0.02 * k); g.stroke(); }
      px = x; py = top + s * 0.02 * k;
    }
  },
  function bokeh(g, s, R) {
    rect(g, '#0a0d1f', 0, 0, s, s);
    const cols = ['255,170,90', '255,110,150', '120,200,255', '255,220,160'];
    add(g, () => { for (let i = 0; i < 44; i++) { g.fillStyle = `rgba(${cols[i % 4]},${0.12 + R() * 0.25})`; g.beginPath(); g.arc(R() * s, s * (0.15 + R() * 0.75), s * (0.02 + R() * 0.07), 0, 7); g.fill(); } });
  },
  function field(g, s, R) {
    rect(g, lg(g, 0, 0, 0, s * 0.55, ['#cfe3f2', '#fbf1dc']), 0, 0, s, s * 0.55);
    rect(g, lg(g, 0, s * 0.55, 0, s, ['#b7cf86', '#5f8a4a']), 0, s * 0.55, s, s * 0.45);
    add(g, () => glow(g, s * 0.22, s * 0.2, s * 0.25, 'rgba(255,245,210,0.9)'));
    const cols = ['#f08a5d', '#e2677a', '#c46aa6', '#8a73c9', '#5b86d6', '#63c3d4'];
    for (let i = 0; i < 170; i++) { const y = s * (0.57 + Math.pow(R(), 0.7) * 0.43); g.fillStyle = cols[i % 6]; g.beginPath(); g.arc(R() * s, y, 0.8 + (y / s - 0.55) * 7 * R(), 0, 7); g.fill(); }
  },
  function train(g, s, R) {
    rect(g, '#07070d', 0, 0, s, s);
    add(g, () => { for (let i = 0; i < 44; i++) { const y = s * (0.12 + R() * 0.7), l = s * (0.2 + R() * 0.6), x = R() * s, c = R() < 0.6 ? '255,180,100' : '120,200,255'; const gr = g.createLinearGradient(x, 0, x + l, 0); gr.addColorStop(0, `rgba(${c},0)`); gr.addColorStop(1, `rgba(${c},${0.3 + R() * 0.5})`); g.fillStyle = gr; g.fillRect(x, y, l, 1 + R() * 2.5); } });
    g.globalAlpha = 0.16; drawFigure(g, s * 0.3, s * 1.3, s * 0.95, { color: '#9ab', hair: 'long' }); g.globalAlpha = 1;
    g.strokeStyle = '#15151c'; g.lineWidth = s * 0.07; g.strokeRect(0, 0, s, s);
  },
  function moon(g, s, R) {
    rect(g, lg(g, 0, 0, 0, s * 0.6, ['#050818', '#1a2448']), 0, 0, s, s * 0.6);
    rect(g, lg(g, 0, s * 0.6, 0, s, ['#141c38', '#04050c']), 0, s * 0.6, s, s * 0.4);
    for (let i = 0; i < 70; i++) { g.fillStyle = `rgba(255,255,255,${R() * 0.8})`; g.fillRect(R() * s, R() * s * 0.56, 1, 1); }
    add(g, () => {
      glow(g, s * 0.66, s * 0.26, s * 0.22, 'rgba(200,220,255,0.35)');
      for (let i = 0; i < 50; i++) { g.fillStyle = `rgba(240,235,210,${0.2 + R() * 0.4})`; g.fillRect(s * 0.66 + (R() - 0.5) * s * 0.14, s * (0.61 + R() * 0.38), 3 + R() * 10, 1); }
    });
    g.fillStyle = '#f4efd8'; g.beginPath(); g.arc(s * 0.66, s * 0.26, s * 0.06, 0, 7); g.fill();
  },
  function lamp(g, s) {
    rect(g, lg(g, 0, 0, 0, s, ['#0c0f1c', '#1d1a2a']), 0, 0, s, s);
    add(g, () => {
      g.fillStyle = 'rgba(255,200,120,0.16)'; g.beginPath(); g.moveTo(s * 0.62, s * 0.21); g.lineTo(s * 0.36, s * 0.92); g.lineTo(s * 0.9, s * 0.92); g.fill();
      glow(g, s * 0.62, s * 0.21, s * 0.14, 'rgba(255,220,160,1)'); glow(g, s * 0.62, s * 0.92, s * 0.32, 'rgba(255,190,120,0.25)');
    });
    g.strokeStyle = '#05060b'; g.lineWidth = s * 0.02; g.beginPath(); g.moveTo(s * 0.72, s * 0.97); g.lineTo(s * 0.72, s * 0.19); g.lineTo(s * 0.62, s * 0.19); g.stroke();
    drawFigure(g, s * 0.52, s * 0.93, s * 0.3, { color: '#05060b', coat: true, pose: 'wait' });
  },
  function white(g, s) { // "photos aren't my thing" - blown-out frame with ghosts
    rect(g, '#fbf7ef', 0, 0, s, s);
    g.globalAlpha = 0.08; drawFigure(g, s * 0.44, s * 0.86, s * 0.5, { color: '#a08070' }); drawFigure(g, s * 0.58, s * 0.86, s * 0.47, { color: '#a08070', flip: true, hair: 'long' }); g.globalAlpha = 1;
  },
];

function filmify(g, s, warm) {
  g.globalCompositeOperation = 'soft-light'; g.fillStyle = `rgba(255,165,90,${warm})`; g.fillRect(0, 0, s, s);
  g.globalCompositeOperation = 'source-over';
  const v = g.createRadialGradient(s / 2, s / 2, s * 0.28, s / 2, s / 2, s * 0.78);
  v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(25,12,5,0.5)');
  g.fillStyle = v; g.fillRect(0, 0, s, s);
  g.fillStyle = 'rgba(70,45,60,0.1)'; g.fillRect(0, 0, s, s);
}
function grain(g, w, h, R, amt) {
  const d = g.getImageData(0, 0, w, h), a = d.data;
  for (let i = 0; i < a.length; i += 4) { const n = (R() - 0.5) * amt; a[i] += n; a[i + 1] += n; a[i + 2] += n; }
  g.putImageData(d, 0, 0);
}

export const PHOTO_N = PAINT.length;
export const PHOTO = { two: 0, sea: 1, room: 2, pyramid: 3, sky: 4, road: 5, bokeh: 6, field: 7, train: 8, moon: 9, lamp: 10, white: 11 };
/** uv rect of cell i in the 4x3 atlas: [u0, v0, du, dv] (v flipped for GL) */
export const photoUV = (i) => [(i % 4) / 4, 1 - (Math.floor(i / 4) + 1) / 3, 1 / 4, 1 / 3];

export function photoAtlas(cell = 256) {
  const c = canvas(cell * 4, cell * 3), g = c.getContext('2d'), R = rng(11);
  PAINT.forEach((f, i) => {
    g.save(); g.translate((i % 4) * cell, Math.floor(i / 4) * cell);
    g.beginPath(); g.rect(0, 0, cell, cell); g.clip();
    f(g, cell, R); filmify(g, cell, i === PHOTO.white ? 0.05 : 0.22);
    g.restore();
  });
  grain(g, c.width, c.height, R, 18);
  return tex(c);
}

export function bigPhoto(size = 512) {
  const c = canvas(size, size), g = c.getContext('2d'), R = rng(5);
  PAINT[0](g, size, R);
  add(g, () => { // lens flare + rays
    for (let i = 0; i < 9; i++) { const a = -Math.PI / 2 + (i - 4) * 0.28 + (R() - 0.5) * 0.1; g.strokeStyle = `rgba(255,220,170,${0.05 + R() * 0.06})`; g.lineWidth = size * (0.01 + R() * 0.03); g.beginPath(); g.moveTo(size * 0.5, size * 0.74); g.lineTo(size * 0.5 + Math.cos(a) * size, size * 0.74 + Math.sin(a) * size); g.stroke(); }
    [0.3, 0.55, 0.8].forEach((k, i) => glow(g, size * (0.5 - k * 0.35), size * (0.74 - k * 0.5), size * (0.03 + i * 0.02), 'rgba(160,200,255,0.25)'));
  });
  filmify(g, size, 0.25); grain(g, size, size, R, 14);
  return tex(c);
}
