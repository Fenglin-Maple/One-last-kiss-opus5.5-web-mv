// Procedural canvas textures (file:// cannot feed external images to WebGL).
import * as THREE from 'three';

export const FONTS = {
  mincho: '"OLK Mincho", "Yu Mincho", serif',
  serif: '"OLK Serif", "Times New Roman", serif',
  script: '"OLK Script", cursive',
  sc: '"OLK SC", "Songti SC", serif',
  mono: '"OLK Mono", monospace',
};

export function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

export function tex(c, o = {}) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = o.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  t.anisotropy = 4;
  if (o.repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (o.mip === false) { t.generateMipmaps = false; t.minFilter = THREE.LinearFilter; }
  t.needsUpdate = true;
  return t;
}

/** tightly sized text canvas; returns {c, w, h} */
export function textCanvas(str, o = {}) {
  const size = o.size || 96, pad = o.pad ?? Math.ceil(size * 0.35);
  const font = `${o.style || ''} ${o.weight || 400} ${size}px ${o.font || FONTS.serif}`;
  const m = canvas(8, 8).getContext('2d');
  m.font = font;
  const ls = o.spacing || 0;
  const w = Math.ceil(m.measureText(str).width + ls * str.length + pad * 2), h = Math.ceil(size * 1.4 + pad * 2);
  const c = canvas(w, h), g = c.getContext('2d');
  g.font = font; g.textBaseline = 'middle'; g.fillStyle = o.color || '#fff';
  if ('letterSpacing' in g) g.letterSpacing = ls + 'px';
  if (o.glow) { g.shadowColor = o.glowColor || o.color || '#fff'; g.shadowBlur = o.glow; }
  g.fillText(str, pad, h / 2);
  if (o.glow) { g.shadowBlur = 0; g.fillText(str, pad, h / 2); }
  return { c, w, h };
}

/** radial glow sprite (white core -> transparent), linear alpha */
export function glowTex(size = 128, k = 1) {
  const c = canvas(size, size), g = c.getContext('2d'), r = size / 2;
  const gr = g.createRadialGradient(r, r, 0, r, r, r);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(0.12 * k, 'rgba(255,255,255,0.55)');
  gr.addColorStop(0.4, 'rgba(255,255,255,0.12)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, size, size);
  return tex(c, { linear: true });
}

/** Leader digits 0-9 in one row (for the countdown) */
export function digitAtlas() {
  const cw = 160, ch = 200, c = canvas(cw * 10, ch), g = c.getContext('2d');
  g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `500 170px ${FONTS.serif}`;
  for (let i = 0; i < 10; i++) g.fillText(String(i), cw * i + cw / 2, ch / 2 + 8);
  return tex(c, { linear: true });
}

/** Half-length portrait luminance map (veiled hair, lit face, folded hands) */
export function bustCanvas(w = 300, h = 400) {
  const c = canvas(w, h), g = c.getContext('2d');
  g.filter = 'blur(3px)';
  const E = (x, y, rx, ry, col, rot = 0) => { g.fillStyle = col; g.beginPath(); g.ellipse(x * w, y * h, rx * w, ry * h, rot, 0, Math.PI * 2); g.fill(); };
  // dress & shoulders
  g.fillStyle = 'rgba(120,120,120,1)';
  g.beginPath(); g.moveTo(0.34 * w, 0.44 * h);
  g.bezierCurveTo(0.2 * w, 0.47 * h, 0.1 * w, 0.56 * h, 0.06 * w, 1.0 * h);
  g.lineTo(0.94 * w, h); g.bezierCurveTo(0.9 * w, 0.56 * h, 0.8 * w, 0.47 * h, 0.66 * w, 0.44 * h); g.closePath(); g.fill();
  // hair / veil
  E(0.5, 0.3, 0.17, 0.2, 'rgba(90,90,90,1)');
  E(0.37, 0.45, 0.06, 0.12, 'rgba(80,80,80,1)', 0.2);
  E(0.63, 0.45, 0.06, 0.12, 'rgba(80,80,80,1)', -0.2);
  // neckline and chest
  g.fillStyle = 'rgba(215,215,215,1)';
  g.beginPath(); g.moveTo(0.4 * w, 0.44 * h); g.quadraticCurveTo(0.5 * w, 0.6 * h, 0.6 * w, 0.44 * h); g.closePath(); g.fill();
  E(0.5, 0.415, 0.05, 0.05, 'rgba(225,225,225,1)');
  // face
  E(0.5, 0.29, 0.105, 0.14, 'rgba(255,255,255,1)');
  E(0.47, 0.27, 0.012, 0.006, 'rgba(150,150,150,1)');
  E(0.54, 0.27, 0.012, 0.006, 'rgba(150,150,150,1)');
  // folded hands
  E(0.43, 0.84, 0.1, 0.045, 'rgba(250,250,250,1)', -0.2);
  E(0.58, 0.83, 0.1, 0.04, 'rgba(240,240,240,1)', 0.25);
  g.filter = 'none';
  return c;
}

/** tiling paper grain (for the sketch / white scenes) */
export function paperTex(size = 512, seed = 3) {
  const c = canvas(size, size), g = c.getContext('2d'), d = g.createImageData(size, size);
  let s = seed;
  const R = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < size * size; i++) {
    const v = 238 + R() * 17;
    d.data[i * 4] = v; d.data[i * 4 + 1] = v - 3; d.data[i * 4 + 2] = v - 9; d.data[i * 4 + 3] = 255;
  }
  g.putImageData(d, 0, 0);
  g.globalAlpha = 0.05;
  for (let i = 0; i < 900; i++) { g.strokeStyle = R() < 0.5 ? '#8a7a6a' : '#fff'; g.beginPath(); const x = R() * size, y = R() * size; g.moveTo(x, y); g.lineTo(x + R() * 30 - 15, y + R() * 4 - 2); g.stroke(); }
  return tex(c, { repeat: true });
}
