// Anti-universe instrumental (142.31-149.52): the film collapses back into its own key drawings.
// A thick stack of genga sheets glows on a light table and is flipped on every drum hit, so the drawings
// animate like a flipbook. On the downbeat the peg bar lets go: the sheets burst into a paper tornado, then
// lock into a tunnel of rings that rotate on the snares while we fly through them, pages re-drawing on every
// kick. Everything slams into a mosaic wall; the wall blows away, one sheet stays - it is erased and redrawn
// as Shinji in red, and we push into its frame until the drawing becomes the next shot.
import * as THREE from 'three';
import { Scene, bgQuad, pointsMat } from './base.js';
import { applyCam } from './camkeys.js';
import { NOISE, POINT_FRAG } from '../core/glsl.js';
import { canvas, FONTS } from '../core/textures.js';
import { clamp, lerp, range, smooth, ease, rng } from '../core/util.js';
import { audio } from '../core/audio.js';

const T0 = 142.31, TB = 143.36, TV2 = 144.44, TC = 145.51, TC2 = 146.44, TD = 147.50, TE = 148.33, T1 = 149.52;
const N = 72, PW = 1.9, PH = 1.3, FW = 1.6, FH = 0.9, FY = -0.07; // paper, 16:9 frame (centre offset in paper y)
const CELLS = ['eva01_eye', 'shinji_cam', 'rei_white', 'kaworu', 'asuka_beach', 'misato_last', 'gendo_train', 'lilith',
  'fire_fight', 'set_fight', 'wunder', 'ube_pilots', 'rei_paddy', 'village', 'gendo_yui', 'shinji_red'];
const HERO_CELL = 15, AW = 2048, AH = 1152, CW = AW / 4, CH = AH / 4;
const COLS = 9, ROWS = 8, HERO = 4 * COLS + 4, GX = 2.0, GY = 1.4;

// ---------- CPU line art: graphite (DoG + Sobel), red shadow and blue highlight isolines, tone ----------
function blur(src, w, h, r) {
  const tmp = new Float32Array(w * h), out = new Float32Array(w * h), n = 2 * r + 1;
  for (let y = 0; y < h; y++) { let s = 0; const o = y * w;
    for (let x = -r; x <= r; x++) s += src[o + clamp(x, 0, w - 1)];
    for (let x = 0; x < w; x++) { tmp[o + x] = s / n; s += src[o + Math.min(w - 1, x + r + 1)] - src[o + Math.max(0, x - r)]; } }
  for (let x = 0; x < w; x++) { let s = 0;
    for (let y = -r; y <= r; y++) s += tmp[clamp(y, 0, h - 1) * w + x];
    for (let y = 0; y < h; y++) { out[y * w + x] = s / n; s += tmp[Math.min(h - 1, y + r + 1) * w + x] - tmp[Math.max(0, y - r) * w + x]; } }
  return out;
}
const iso = (a, w, h, x, y, th) => { const i = y * w + x, v = a[i] > th;
  return (v !== (a[i + 1] > th) || v !== (a[i + w] > th) || v !== (a[i - 1] > th) || v !== (a[i - w] > th)) ? 1 : 0; };

function lineCell(entry, w, h) {
  const c = canvas(w, h), g = c.getContext('2d', { willReadFrequently: true });
  // cover-fit the plate into the 16:9 cell
  const s = Math.max(w / entry.w, h / entry.h), dw = entry.w * s, dh = entry.h * s;
  g.drawImage(entry.img, (w - dw) / 2, (h - dh) / 2, dw, dh);
  const d = g.getImageData(0, 0, w, h).data, L = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) L[i] = (d[i * 4] * 0.3 + d[i * 4 + 1] * 0.55 + d[i * 4 + 2] * 0.15) / 255;
  const b1 = blur(L, w, h, 1), b3 = blur(b1, w, h, 2), b8 = blur(b1, w, h, 7);
  const out = new Uint8Array(w * h * 4);
  for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
    const i = y * w + x;
    const gx = b1[i + 1 - w] + 2 * b1[i + 1] + b1[i + 1 + w] - b1[i - 1 - w] - 2 * b1[i - 1] - b1[i - 1 + w];
    const gy = b1[i + w - 1] + 2 * b1[i + w] + b1[i + w + 1] - b1[i - w - 1] - 2 * b1[i - w] - b1[i - w + 1];
    const dog = clamp((b3[i] - b1[i] - 0.012) * 14);           // dark ink lines
    const sob = clamp((Math.hypot(gx, gy) - 0.22) * 1.6);       // strong edges
    const gr = clamp(Math.max(dog, sob * 0.7));
    out[i * 4] = gr * 255;
    out[i * 4 + 1] = iso(b8, w, h, x, y, 0.3) * 255 * (1 - gr * 0.5);   // red pencil: shadow boundary
    out[i * 4 + 2] = iso(b8, w, h, x, y, 0.72) * 255 * (1 - gr * 0.5);  // blue pencil: highlight boundary
    out[i * 4 + 3] = clamp(b8[i]) * 255;                          // tone (for hatching)
  }
  return out;
}

/** 4x4 atlas of line art; row 0 of the data = v 0 (bottom) so each cell is stored bottom-up */
function lineAtlas(img, memo) {
  if (memo && memo.flipLines) return memo.flipLines;
  const data = new Uint8Array(AW * AH * 4);
  CELLS.forEach((k, n) => {
    const e = img[k]; if (!e) return;
    const cell = lineCell(e, CW, CH), cx = (n % 4) * CW, cy = Math.floor(n / 4) * CH;
    for (let y = 0; y < CH; y++) { // flip: image top row -> highest v in the cell
      const dst = ((cy + CH - 1 - y) * AW + cx) * 4;
      data.set(cell.subarray(y * CW * 4, (y + 1) * CW * 4), dst);
    }
  });
  const t = new THREE.DataTexture(data, AW, AH, THREE.RGBAFormat);
  t.colorSpace = THREE.NoColorSpace; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter; t.anisotropy = 4; t.needsUpdate = true;
  if (memo) memo.flipLines = t;
  return t;
}

/** 4x4 atlas of sheet margins: R graphite, G red, B blue marks (additive on black, no alpha) */
function markAtlas() {
  const W = 512, H = 350, c = canvas(W * 4, H * 4), g = c.getContext('2d'), R = rng(27);
  g.fillStyle = '#000'; g.fillRect(0, 0, c.width, c.height);
  g.globalCompositeOperation = 'lighter'; g.lineCap = 'round'; g.lineJoin = 'round';
  const col = ['#ff0000', '#00ff00', '#0000ff'];
  const wob = (x0, y0, x1, y1) => { g.beginPath(); g.moveTo(x0 + (R() - 0.5) * 2, y0 + (R() - 0.5) * 2);
    g.quadraticCurveTo((x0 + x1) / 2 + (R() - 0.5) * 3, (y0 + y1) / 2 + (R() - 0.5) * 3, x1 + (R() - 0.5) * 2, y1 + (R() - 0.5) * 2); g.stroke(); };
  for (let n = 0; n < 16; n++) {
    const ox = (n % 4) * W, oy = Math.floor(n / 4) * H;
    const fx0 = ox + W * (0.5 - FW / PW / 2), fx1 = ox + W * (0.5 + FW / PW / 2);
    const fy0 = oy + H * (0.5 - FH / PH / 2 - FY / PH), fy1 = oy + H * (0.5 + FH / PH / 2 - FY / PH);
    // frame guide + safe-area ticks
    g.strokeStyle = col[0]; g.globalAlpha = 0.55; g.lineWidth = 1.6;
    wob(fx0, fy0, fx1, fy0); wob(fx1, fy0, fx1, fy1); wob(fx1, fy1, fx0, fy1); wob(fx0, fy1, fx0, fy0);
    g.globalAlpha = 0.35; g.lineWidth = 1;
    for (let k = 0; k < 4; k++) { const x = lerp(fx0, fx1, (k + 0.5) / 4); wob(x, fy0 - 5, x, fy0 + 5); wob(x, fy1 - 5, x, fy1 + 5); }
    // cut box (top-right) + scene / cut fields (top-left)
    g.globalAlpha = 0.75; g.lineWidth = 1.4;
    const bx = ox + 290, by = oy + 8; g.strokeRect(bx, by, 106, 38); wob(bx + 38, by, bx + 38, by + 38);
    g.font = `22px ${FONTS.serif}`; g.fillStyle = col[0]; g.fillText('C', bx + 10, by + 28);
    g.font = `26px ${FONTS.script}`; g.fillText(String(101 + n * 7), bx + 46, by + 29);
    g.font = `13px ${FONTS.serif}`; g.globalAlpha = 0.6;
    g.fillText('SCENE', ox + 112, oy + 18); g.fillText('CUT', ox + 112, oy + 36);
    g.font = `20px ${FONTS.script}`; g.fillText(['A', 'B', 'C', 'D'][n % 4] + (n + 1), ox + 166, oy + 20); g.fillText(String(3 + (n * 5) % 40), ox + 166, oy + 38);
    // timing ladder in the right margin (graphite) with circled key frames (red)
    const lx = ox + W - 12, ly0 = fy0 + 6, ly1 = fy1 - 6;
    g.globalAlpha = 0.5; g.lineWidth = 1.2; wob(lx, ly0, lx, ly1);
    const steps = 6 + (n % 4) * 2;
    for (let k = 0; k <= steps; k++) { const y = lerp(ly0, ly1, Math.pow(k / steps, 1 + (n % 3) * 0.4)); wob(lx - 6, y, lx + 1, y); }
    g.strokeStyle = col[1]; g.fillStyle = col[1]; g.globalAlpha = 0.8; g.lineWidth = 1.6;
    for (let k = 0; k < 3; k++) { const y = lerp(ly0, ly1, k / 2); g.beginPath(); g.arc(lx - 3, y, 6, 0, 7); g.stroke(); }
    // red correction note + timing arrow in the frame
    g.font = `18px ${FONTS.script}`; g.fillText(['修正', '作監', 'take2', '原画', 'BG 注意', '中割り'][n % 6], fx0 + 8 + R() * 60, fy1 + 20);
    if (n % 2 === 0) { const x0 = fx0 + 40 + R() * 200, y0 = fy0 + 30 + R() * 120, x1 = x0 + 50 + R() * 80, y1 = y0 + (R() - 0.5) * 60;
      wob(x0, y0, x1, y1); wob(x1, y1, x1 - 9, y1 - 6); wob(x1, y1, x1 - 9, y1 + 6); }
    // blue shading note
    g.strokeStyle = col[2]; g.fillStyle = col[2]; g.globalAlpha = 0.6; g.font = `16px ${FONTS.script}`;
    g.fillText(n % 3 === 0 ? 'Hi' : n % 3 === 1 ? 'BL' : '影', fx1 - 40, fy1 + 20);
    const hx = fx0 + 20 + R() * 300, hy = fy0 + 20 + R() * 150;
    for (let k = 0; k < 5; k++) wob(hx + k * 6, hy, hx + k * 6 + 14, hy - 14);
  }
  g.globalAlpha = 1; g.globalCompositeOperation = 'source-over';
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.NoColorSpace; t.anisotropy = 4; t.needsUpdate = true;
  return t;
}
// ---------- sheet shader: pivot at the top edge, bends with constant curvature (lift a, curl k) ----------
const SHEET_V = /* glsl */ `
attribute vec4 aB;   // lift, curl, flutter, seed
attribute vec4 aC;   // cell, draw, erase, variant
uniform float uT;
varying vec2 vUv; varying vec4 vC; varying vec3 vN, vW; varying float vSeed;
void main(){
  vUv = uv; vC = aC; vSeed = aB.w;
  float a = aB.x, k = aB.y, fl = aB.z;
  float s = (1.0 - uv.y) * ${PH.toFixed(2)};          // arc length from the pivot edge (uv.y = 1)
  float x = (uv.x - 0.5) * ${PW.toFixed(2)};
  float th = a + k * s, ky, kz;
  if (abs(k) < 1e-3) { ky = -s * cos(a); kz = s * sin(a); }
  else { ky = -(sin(th) - sin(a)) / k; kz = (cos(a) - cos(th)) / k; }
  vec3 n = vec3(0.0, sin(th), cos(th));
  float w = fl * sin(x * 3.1 + uT * 7.0 + aB.w * 6.28) * (0.3 + s);
  vec3 p = vec3(x, ${(PH / 2).toFixed(2)} + ky, kz) + n * w;
  vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
  vW = wp.xyz;
  vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`;
const SHEET_F = /* glsl */ `
uniform sampler2D uLines, uMarks, uHero;
uniform float uT, uInv, uTable, uHeroCol, uInk;
uniform vec3 uFog;
varying vec2 vUv; varying vec4 vC; varying vec3 vN, vW; varying float vSeed;
${NOISE}
float hole(vec2 q, vec2 c, float hx, float r){ vec2 d = q - c; d.x = max(abs(d.x) - hx, 0.0); return length(d) / r; }
void main(){
  vec2 q = vec2((vUv.x - 0.5) * ${PW.toFixed(2)}, (vUv.y - 0.5) * ${PH.toFixed(2)});
  float pegY = ${(PH / 2 - 0.075).toFixed(3)};
  float hc = min(hole(q, vec2(0.0, pegY), 0.0, 0.028), min(hole(q, vec2(-0.62, pegY), 0.032, 0.018), hole(q, vec2(0.62, pegY), 0.032, 0.018)));
  if (hc < 1.0) discard;
  // paper
  float grain = vnoise(vUv * vec2(900.0, 620.0) + vSeed * 50.0);
  float fib = fbm(vUv * vec2(12.0, 8.0) + vSeed * 9.0);
  vec3 paper = mix(vec3(0.46, 0.41, 0.30), vec3(0.58, 0.53, 0.40), fib) * (0.94 + 0.08 * grain);
  paper *= 1.0 - 0.12 * smoothstep(0.42, 0.5, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));   // aged edges
  paper *= 1.0 - 0.35 * smoothstep(1.35, 1.0, hc);                                          // hole shadow
  // drawing inside the 16:9 frame
  vec2 f = vec2(q.x / ${FW.toFixed(2)} + 0.5, (q.y - ${FY.toFixed(2)}) / ${FH.toFixed(2)} + 0.5);
  float cell = vC.x, draw = vC.y, erase = vC.z;
  vec3 ink = vec3(0.0);
  if (f.x > 0.0 && f.x < 1.0 && f.y > 0.0 && f.y < 1.0) {
    vec2 cc = vec2(mod(cell, 4.0), floor(cell / 4.0));
    vec2 fu = mix(vec2(0.004), vec2(0.996), f);
    vec4 L = texture2D(uLines, (cc + fu) / 4.0);
    // lines draw on along a noisy sweep and are erased in rubbed patches
    float sweep = f.x * 0.55 + (1.0 - f.y) * 0.25 + 0.2 * vnoise(f * 9.0 + vSeed);
    float on = smoothstep(sweep - 0.05, sweep + 0.05, draw * 1.1);
    float rub = smoothstep(0.35, 0.65, erase * 1.3 - fbm(f * 6.0 + vSeed * 3.0) * 0.6 + 0.2);
    float k = on * (1.0 - rub) * (0.75 + 0.35 * vnoise(f * vec2(420.0, 240.0)));
    float hat = 0.0;
    float tone = 1.0 - L.a;
    if (tone > 0.55) hat = smoothstep(0.35, 0.8, sin((f.x * 1.6 + f.y) * 520.0)) * smoothstep(0.55, 0.85, tone) * 0.45;
    ink = clamp(L.rgb * vec3(3.2, 1.0, 1.1), 0.0, 1.0) * k; ink.x = max(ink.x, hat * k);
  }
  // margins: cut box, timing ladder, notes (per-sheet variant)
  vec2 mv = vec2(mod(vC.w, 4.0), floor(vC.w / 4.0));
  vec3 M = texture2D(uMarks, vec2((mv.x + vUv.x) / 4.0, 1.0 - (mv.y + 1.0 - vUv.y) / 4.0)).rgb * (1.0 - erase * 0.7);
  vec3 col = paper;
  col = mix(col, vec3(0.05, 0.05, 0.06), clamp(ink.x * 0.95 + M.r * 0.85, 0.0, 1.0));
  col = mix(col, vec3(0.62, 0.03, 0.03) * (1.0 + uInk * 2.5), clamp(ink.y * 0.6 + M.g * 0.8, 0.0, 1.0));
  col = mix(col, vec3(0.03, 0.12, 0.55), clamp(ink.z * 0.5 + M.b * 0.75, 0.0, 1.0));
  // the hero sheet finally takes its colour (continuity into the next shot)
  if (cell > 14.5 && uHeroCol > 0.0 && f.x > 0.0 && f.x < 1.0 && f.y > 0.0 && f.y < 1.0)
    col = mix(col, texture2D(uHero, f).rgb, uHeroCol * smoothstep(0.0, 0.25, uHeroCol * 1.2 - vnoise(f * 5.0) * 0.2));
  // light: key from above-front, light table glow from below, back face = mirrored ghost of the drawing
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float back = dot(N, V) < 0.0 ? 1.0 : 0.0;
  if (back > 0.5) { col = mix(paper * 0.7, col, 0.22); N = -N; }
  float lit = 0.62 + 0.38 * max(dot(N, normalize(vec3(0.3, 0.8, 0.5))), 0.0);
  col *= lit + uTable * 0.2;
  // anti-universe negative
  col = mix(col, vec3(0.9, 0.12, 0.08) * (1.0 - col.r * 1.4) + vec3(0.02), uInv);
  float fd = smoothstep(8.0, 34.0, length(cameraPosition - vW));
  gl_FragColor = vec4(mix(col, uFog, fd), 1.0);
}`;
const BG_F = /* glsl */ `
uniform float uT, uInv; uniform vec2 uOff; varying vec2 vUv;
${NOISE}
void main(){
  vec2 p = vUv + uOff;
  float sc = 0.0;
  for (int i = 0; i < 3; i++) { float fi = float(i);
    float n = vnoise(p * vec2(3.0, 14.0) * (1.0 + fi) + vec2(uT * 0.05 * (fi + 1.0), fi * 7.0));
    sc += smoothstep(0.015, 0.0, abs(n - 0.5)) * (0.5 - fi * 0.12); }
  vec3 c = mix(vec3(0.012, 0.01, 0.018), vec3(0.05, 0.03, 0.035), fbm(p * 2.0 + uT * 0.02));
  c += vec3(0.08, 0.07, 0.07) * sc * (0.5 + 0.5 * fbm(p * 5.0));
  c *= 1.0 - 0.5 * length(vUv - 0.5);
  gl_FragColor = vec4(mix(c, vec3(0.5, 0.05, 0.03) * (0.5 + sc), uInv), 1.0);
}`;
const DUST_V = /* glsl */ `
attribute vec4 aD; uniform float uT; uniform vec3 uC; uniform float uK;
varying vec3 vCol; varying float vA;
${NOISE}
void main(){
  vec3 p = position + vec3(sin(uT * 0.7 + aD.x * 6.28), -uT * 0.25 * (0.5 + aD.y), cos(uT * 0.5 + aD.z * 6.28)) * 0.6;
  p = uC + mod(p - uC + 6.0, 12.0) - 6.0;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp((1.0 + aD.w * 2.5) * (1.0 + uK) * 90.0 / -mv.z, 0.0, 7.0);
  vCol = mix(vec3(0.55, 0.5, 0.45), vec3(1.0, 0.25, 0.1), step(0.8, aD.w));
  vA = 0.35 * smoothstep(0.2, 1.0, -mv.z);
}`;
const TABLE_F = /* glsl */ `
uniform float uA; varying vec2 vUv;
void main(){
  float e = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)) * 2.0;
  vec3 c = mix(vec3(1.0, 0.88, 0.66) * 0.9 * (1.0 - 0.35 * length(vUv - 0.5)), vec3(0.02, 0.02, 0.025), smoothstep(0.9, 0.93, e));
  gl_FragColor = vec4(c * uA, 1.0);
}`;

// ---------- pose helpers ----------
const TH = 0.004, FD = 0.22, TY = 3, RT = 2.05, WZ = -30;
const INV = [TB, TC, TD];
const M4 = new THREE.Matrix4(), M5 = new THREE.Matrix4(), Q2 = new THREE.Quaternion(), S1 = new THREE.Vector3(1, 1, 1);
const X = new THREE.Vector3(), Y = new THREE.Vector3(), Z = new THREE.Vector3(), V1 = new THREE.Vector3(), V2 = new THREE.Vector3();
const AX = new THREE.Vector3(1, 0, 0), AZ = new THREE.Vector3(0, 0, 1), UP = new THREE.Vector3(0, 1, 0);
/** local +z (front) -> n, local +y (pivot edge) -> up */
function basisQ(n, up, out) { Z.copy(n).normalize(); X.crossVectors(up, Z).normalize(); Y.crossVectors(Z, X); M4.makeBasis(X, Y, Z); return out.setFromRotationMatrix(M4); }
const pose = () => ({ p: new THREE.Vector3(), q: new THREE.Quaternion(), a: 0, k: 0, f: 0 });
function mixPose(o, A, B, u) { o.p.lerpVectors(A.p, B.p, u); o.q.slerpQuaternions(A.q, B.q, u); o.a = lerp(A.a, B.a, u); o.k = lerp(A.k, B.k, u); o.f = lerp(A.f, B.f, u); return o; }
const FLAT = new THREE.Quaternion().setFromAxisAngle(AX, -Math.PI / 2);   // lying face-up, pivot edge away (-z)
/** eased step counter: +1 per event, each step easing in over d seconds */
const acc = (ev, t, d) => { let s = 0; for (const e of ev) { if (e > t) break; s += ease.out(clamp((t - e) / d)); } return s; };

const HY = TY + FY;
const CAM = [
  // A: the stack on the light table, flipped on every hit
  [T0, 0.35, 1.9, 2.3, 0, 0.1, -0.55, 38, 0.04], [142.82, 0.15, 1.7, 2.0, 0, 0.12, -0.6, 36, 0.0],
  [142.84, 0.3, 3.1, 0.9, 0, 0, -0.6, 40, 0], [TB - 0.02, 0.2, 2.8, 0.7, 0, 0, -0.6, 42, -0.06],
  // (B is hand-driven)  C: tunnel of rings
  [TC, 0, TY - 0.4, 5.5, 0, TY, -10, 60, 0], [TC2 - 0.02, 0, TY - 0.2, -2.0, 0.3, TY + 0.2, -20, 64, 0.5],
  [TC2, 1.1, TY + 0.9, -9.5, -0.3, TY - 0.3, 3, 50, -0.2], [146.97, 0.8, TY + 0.6, -6.8, -0.3, TY - 0.2, 5, 52, -0.3],
  [146.99, 0, TY, -4, 0, TY, -25, 70, 0], [TD - 0.02, 0, TY, -15, 0, TY, -30, 82, 0.8],
  // D: the mosaic wall
  [TD, 0, TY + 0.3, WZ + 12.5, 0, TY, WZ, 55, 0], [TE - 0.02, 0, TY, WZ + 10.8, 0, TY, WZ, 52, 0.03],
  // E: one sheet remains; push into its frame
  [TE, 0, HY, WZ + 8, 0, HY, WZ, 46, 0], [TE + 0.5, 0, HY, WZ + 3.2, 0, HY, WZ, 42, 0], [T1 - 0.05, 0, HY, WZ + 1.2, 0, HY, WZ, 40, 0],
];
export class Flipbook extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 40, near: 0.02, far: 300 });
    const I = ctx.img, V = (v) => ({ value: v });
    this.clear.setRGB(0.01, 0.008, 0.012);
    this.camera.rotation.order = 'YXZ';
    // drum grid
    const K = audio.events('kick'), S = audio.events('snare');
    this.kicks = K.filter((e) => e > T0 - 0.05 && e < T1 + 0.2);
    this.snares = S.filter((e) => e > T0 - 0.05 && e < T1 + 0.2);
    const hits = [...K, ...S].filter((e) => e >= T0 + 0.05 && e < TB - 0.12).sort((a, b) => a - b);
    this.flips = []; for (const e of hits) if (!this.flips.length || e - this.flips[this.flips.length - 1] > 0.06) this.flips.push(e);
    // every flip event turns over two sheets, the second a hair later (a thumb riffle)
    this.flipAt = new Float32Array(N).fill(1e9);
    this.flips.forEach((e, j) => { if (2 * j < N) this.flipAt[2 * j] = e; if (2 * j + 1 < N) this.flipAt[2 * j + 1] = e + 0.055; });
    // per-sheet randoms
    const R = rng(91);
    this.rs = Array.from({ length: N }, (_, i) => ({ r: 1.4 + R() * 2.2, h: R(), ph: R() * 6.28, sp: 0.8 + R() * 0.9, d: R() * 0.25, sd: R(),
      tw: R() * 6.28, dir: new THREE.Vector3(R() - 0.5, R() - 0.5, -0.4 - R()).normalize(), ax: new THREE.Vector3(R() - 0.5, R() - 0.5, R() - 0.5).normalize(),
      cell0: (i * 7) % 15, var: (i * 5) % 16, roll: (R() - 0.5) * 0.06 }));
    // sheets
    const g = new THREE.PlaneGeometry(1, 1, 22, 16);
    this.aB = new Float32Array(N * 4); this.aC = new Float32Array(N * 4);
    g.setAttribute('aB', new THREE.InstancedBufferAttribute(this.aB, 4)); g.setAttribute('aC', new THREE.InstancedBufferAttribute(this.aC, 4));
    this.U = { uT: V(0), uInv: V(0), uTable: V(0), uHeroCol: V(0), uInk: V(0), uFog: V(new THREE.Color(0.012, 0.01, 0.016)),
      uLines: V(lineAtlas(I, ctx.memo)), uMarks: V(markAtlas()), uHero: V(I.shinji_red ? I.shinji_red.tex : null) };
    const m = new THREE.ShaderMaterial({ vertexShader: SHEET_V, fragmentShader: SHEET_F, uniforms: this.U, side: THREE.DoubleSide });
    this.sheets = new THREE.InstancedMesh(g, m, N); this.sheets.frustumCulled = false;
    this.sheets.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(this.sheets);
    this.P = Array.from({ length: N }, pose); this.PA = pose(); this.PB = pose();
    // void
    this.BU = { uT: V(0), uInv: V(0), uOff: V(new THREE.Vector2()) };
    this.scene.add(bgQuad(BG_F, this.BU));
    // light table + peg bar
    this.TU = { uA: V(1) };
    this.table = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 3.1), new THREE.ShaderMaterial({ vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`, fragmentShader: TABLE_F, uniforms: this.TU }));
    this.table.rotation.x = -Math.PI / 2; this.table.position.set(0, -0.012, -0.72); this.scene.add(this.table);
    this.glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: ctx.shared.glow, color: 0xffd8a0, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.35 }));
    this.glow.scale.set(5, 3.5, 1); this.glow.position.set(0, 0.1, -0.6); this.scene.add(this.glow);
    this.peg = new THREE.Group();
    const dark = new THREE.MeshBasicMaterial({ color: 0x151515 });
    const bar = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.02, 0.07), dark); bar.position.set(0, 0.012, -PH + 0.075); this.peg.add(bar);
    [[-0.62, 0.032], [0, 0], [0.62, 0.032]].forEach(([x, hx]) => {
      const pg = new THREE.Mesh(new THREE.BoxGeometry(hx * 2 + 0.03, 0.34, 0.034), new THREE.MeshBasicMaterial({ color: 0x3a3632 }));
      pg.position.set(x, 0.17, -PH + 0.075); this.peg.add(pg); });
    this.scene.add(this.peg);
    // AT-field octagons on the snares
    const og = new THREE.RingGeometry(0.975, 1, 8, 1); og.rotateZ(Math.PI / 8);
    this.rings = Array.from({ length: 6 }, () => { const r = new THREE.Mesh(og, new THREE.MeshBasicMaterial({ color: 0xff5a1e, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      this.scene.add(r); return r; });
    // graphite dust / eraser crumbs
    const DN = 900, dp = new Float32Array(DN * 3), dd = new Float32Array(DN * 4);
    for (let i = 0; i < DN; i++) { dp.set([(R() - 0.5) * 12, (R() - 0.5) * 12, (R() - 0.5) * 12], i * 3); dd.set([R(), R(), R(), R()], i * 4); }
    const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(dp, 3)); dg.setAttribute('aD', new THREE.BufferAttribute(dd, 4));
    this.DU = { uT: V(0), uC: V(new THREE.Vector3()), uK: V(0) };
    this.dust = new THREE.Points(dg, pointsMat(DUST_V, POINT_FRAG, this.DU)); this.dust.frustumCulled = false; this.scene.add(this.dust);
  }
  // ---- poses ----
  stackPose(i, t, o) {
    const u = clamp((t - this.flipAt[i]) / FD), e = ease.inOut(u);
    o.p.set(0, lerp((N - 1 - i) * TH, i * TH, e), 0); o.q.copy(FLAT); o.f = 0;
    if (u <= 0) { // riffle: the next few sheets lift at the free edge with the hats
      const rank = i - this.nf, hp = audio.hitPulse('hat', t, 10) + 0.5 * audio.hitPulse('kick', t, 12);
      o.a = 0; o.k = rank < 3 ? (0.06 + 0.3 * hp) * (1 - rank / 3) : 0;
    } else { o.a = Math.PI * e; o.k = u < 1 ? -2.2 * Math.sin(Math.PI * u) : 0; o.f = 0.04 * Math.sin(Math.PI * u); }
    return o;
  }
  vortexPose(i, t, o) {
    const r = this.rs[i], tt = Math.max(0, t - TB), rise = ease.out(clamp(tt / 1.8));
    const h = 0.3 + (0.5 + r.h * 7.5) * (0.35 + 0.65 * rise) + tt * 0.6;
    const ang = r.ph + tt * r.sp * 2.2 / (0.6 + r.h) + this.kAcc * 0.35;
    const rad = r.r * (0.6 + 0.4 * rise) * (1 + 0.25 * r.h), sg = t < TV2 ? -1 : 1;
    o.p.set(Math.cos(ang) * rad, h, Math.sin(ang) * rad);
    V1.set(sg * Math.cos(ang), -0.35 - 0.3 * Math.sin(t * 3 + r.tw), sg * Math.sin(ang));
    const w = 0.5 + 0.5 * Math.sin(t * 2.3 + r.tw);
    V2.set(-Math.sin(ang) * w, 1 - w * 0.6, Math.cos(ang) * w);
    basisQ(V1, V2, o.q);
    o.a = 0; o.k = 0.6 * Math.sin(t * 5 + r.tw); o.f = 0.06;
    return o;
  }
  tunnelPose(i, t, o) {
    const ring = Math.floor(i / 8), slot = i % 8, dir = ring % 2 ? 1 : -1;
    const th = slot * Math.PI / 4 + ring * 0.2 + dir * (this.sAcc * Math.PI / 8 + (t - TC) * 0.25);
    const R0 = RT * (1 + 0.14 * this.kP * ((slot + this.kN) % 3 === 0 ? 1 : 0.25));
    o.p.set(Math.cos(th) * R0, TY + Math.sin(th) * R0, 2 - ring * 2.4);
    V1.set(-Math.cos(th), -Math.sin(th), 0); V2.set(0, 0, -1);
    basisQ(V1, V2, o.q); o.a = 0; o.k = 0; o.f = 0.02;
    return o;
  }
  wallPose(i, t, o) {
    const r = this.rs[i], c = i % COLS, rr = Math.floor(i / COLS);
    o.p.set((c - 4) * GX, TY + (4 - rr) * GY, WZ + (i === HERO ? 0.02 : -0.04 * r.sd) + 0.12 * this.kP * ((c + rr + this.kN) % 2));
    o.q.setFromAxisAngle(AZ, i === HERO ? 0 : r.roll); o.a = 0; o.k = 0; o.f = i === HERO ? 0 : 0.01;
    return o;
  }
  scatterPose(i, t, o) {
    this.wallPose(i, t, o);
    const r = this.rs[i], c = i % COLS, rr = Math.floor(i / COLS);
    const u = Math.max(0, t - TE - Math.hypot(c - 4, (rr - 4) * 1.2) * 0.03), f = Math.min(1, u * 3);
    V1.set(c - 4, 4 - rr, 0).normalize().multiplyScalar(1.2).add(r.dir);
    o.p.addScaledVector(V1, u * 3 + u * u * 9);
    Q2.setFromAxisAngle(r.ax, u * (3 + r.sd * 4)); o.q.premultiply(Q2);
    o.k = 0.8 * Math.sin(t * 6 + r.tw) * f; o.f = 0.1 * f;
    return o;
  }
  sheetPose(i, t, o) {
    const r = this.rs[i], A = this.PA, B = this.PB;
    if (t < TB) return this.stackPose(i, t, o);
    if (t < TC - 0.5) {
      const u = ease.out(clamp((t - TB - r.d * 0.5) / 0.55));
      if (u >= 1) return this.vortexPose(i, t, o);
      this.stackPose(i, TB - 1e-3, A); this.vortexPose(i, t, B); mixPose(o, A, B, u);
      o.k += 1.2 * Math.sin(Math.PI * u); return o;
    }
    if (t < TD - 0.12) {
      const u = ease.inOut(clamp((t - (TC - 0.5) - r.d * 0.3) / 0.45));
      if (u >= 1) return this.tunnelPose(i, t, o);
      this.vortexPose(i, t, A); this.tunnelPose(i, t, B); mixPose(o, A, B, u);
      o.k += 0.8 * Math.sin(Math.PI * u); o.f += 0.08 * Math.sin(Math.PI * u); return o;
    }
    if (t < TE || i === HERO) {
      const u = ease.out(clamp((t - (TD - 0.12) - r.d * 0.5) / 0.4));
      if (u >= 1) return this.wallPose(i, t, o);
      this.tunnelPose(i, TD - 0.12, A); this.wallPose(i, t, B); mixPose(o, A, B, u);
      o.k += 1.0 * Math.sin(Math.PI * u); o.f += 0.1 * Math.sin(Math.PI * u); return o;
    }
    return this.scatterPose(i, t, o);
  }
  /** drawing on sheet i: [cell, draw, erase] */
  sheetInk(i, t) {
    const r = this.rs[i];
    if (t < TB) return [r.cell0, 1, 0];
    if (i === HERO && t >= TE) {
      if (t < TE + 0.36) return [this.lastCell(i, TE), 1, clamp((t - TE) / 0.3)];
      return [HERO_CELL, clamp((t - TE - 0.4) / 0.55), 0];
    }
    const cell = this.lastCell(i, t), draw = this.lastDraw;
    return [cell, draw, t > TE ? clamp((t - TE - 0.1 - r.d * 0.4) / 0.5) : 0];
  }
  // kick-driven redraw: half of the sheets swap drawing on each kick (alternating), lines re-draw in 0.22 s
  lastCell(i, t) {
    const K = this.kB; let nk = 0; while (nk < K.length && K[nk] <= t) nk++;
    let jl = nk - 1; if (jl >= 0 && (i + jl) % 2) jl--;
    this.lastDraw = jl >= 0 ? clamp((t - K[jl]) / 0.22) : 1;
    return (this.rs[i].cell0 + 7 * (jl + 1)) % 15;
  }
  invAt(t) { for (const e of INV) if (t >= e && t < e + 0.09) return 1; return 0; }
  camAt(t) {
    const c = this.camera;
    if (t >= TB && t < TV2) { // inside the tornado, looking up, turning
      const u = (t - TB) / (TV2 - TB), e = ease.inOut(u);
      c.position.set(0.15 * Math.sin(t * 2), lerp(-1.6, 2.6, e), 0.15 * Math.cos(t * 2));
      c.up.set(0, 1, 0); c.rotation.set(lerp(1.15, 1.3, e), 0.3 + u * 2.2, 0.0);
      if (c.fov !== 72) { c.fov = 72; c.updateProjectionMatrix(); }
      return;
    }
    if (t >= TV2 && t < TC) { // outside: the paper tornado
      const u = (t - TV2) / (TC - TV2), e = ease.inOut(u), a = 0.6 + u * 1.4, r = lerp(11, 8, e);
      c.position.set(Math.sin(a) * r, lerp(2.5, 5.5, e), Math.cos(a) * r); c.up.set(0, 1, 0);
      c.lookAt(0, lerp(3.2, 4.2, e), 0);
      const f = lerp(52, 46, e); if (c.fov !== f) { c.fov = f; c.updateProjectionMatrix(); }
      return;
    }
    applyCam(c, CAM, t, 0.004 * audio.hitPulse('kick', t, 12));
  }
  update(t, dt) {
    this.kB ||= this.kicks.filter((e) => e >= TB - 0.01);
    this.nf = 0; while (this.nf < N && this.flipAt[this.nf] + FD <= t) this.nf++;
    this.kAcc = acc(this.kicks.filter((e) => e >= TB), t, 0.25);
    this.sAcc = acc(this.snares.filter((e) => e >= TC - 0.05), t, 0.18);
    this.kP = audio.hitPulse('kick', t, 9); this.kN = audio.count('kick', T0, t);
    for (let i = 0; i < N; i++) {
      const o = this.sheetPose(i, t, this.P[i]);
      M5.compose(o.p, o.q, S1); this.sheets.setMatrixAt(i, M5);
      const [cell, draw, erase] = this.sheetInk(i, t);
      this.aB.set([o.a, o.k, o.f, this.rs[i].sd], i * 4);
      this.aC.set([cell, draw, erase, this.rs[i].var], i * 4);
    }
    this.sheets.instanceMatrix.needsUpdate = true;
    this.sheets.geometry.attributes.aB.needsUpdate = this.sheets.geometry.attributes.aC.needsUpdate = true;
    this.camAt(t);
    const inv = this.invAt(t), sp = audio.hitPulse('snare', t, 10);
    const table = 1 - smooth(TB - 0.05, TB + 0.3, t);
    this.U.uT.value = t; this.U.uInv.value = inv; this.U.uTable.value = table;
    this.U.uInk.value = sp * (t > TB ? 1 : 0.4);
    this.U.uHeroCol.value = smooth(TE + 0.8, T1, t) * 0.5;
    this.TU.uA.value = table; this.table.visible = t < TB;
    this.glow.material.opacity = 0.12 * table * (0.85 + 0.3 * audio.hitPulse('kick', t, 8)); this.glow.visible = t < TB;
    this.peg.visible = t < TB;
    // AT-field octagons flare on the snares where the action is
    const S = this.snares; let j = S.length - 1; while (j >= 0 && S[j] > t) j--;
    this.rings.forEach((m, k) => {
      const e = S[j - k], age = e === undefined ? 9 : t - e;
      if (age > 0.8 || e >= TE) { m.visible = false; return; }
      m.visible = true;
      const [fp, sc] = e < TB ? [[0, 0.05, -0.6], 1.2] : e < TV2 ? [[0, 9, 0], 5] : e < TC ? [[0, 4, 0], 6] : e < TD ? [[0, TY, this.camera.position.z - 7], 2.6] : [[0, TY, WZ + 0.3], 5];
      m.position.set(...fp); m.lookAt(this.camera.position);
      m.scale.setScalar(sc * (0.5 + age * 2.2)); m.material.opacity = 0.4 * Math.exp(-age * 5) * (e < TB ? 0.5 : 1);
    });
    this.BU.uT.value = t; this.BU.uInv.value = inv;
    const cd = this.camera.getWorldDirection(V1);
    this.BU.uOff.value.set(Math.atan2(cd.x, -cd.z) * 0.3, cd.y * 0.3);
    this.DU.uT.value = t; this.DU.uC.value.copy(this.camera.position); this.DU.uK.value = this.kP;
  }
  post(t) {
    const K = audio.hitPulse('kick', t, 11), S = audio.hitPulse('snare', t, 12), end = 1 - smooth(T1 - 0.6, T1, t);
    return { bloom: 0.55 + 0.25 * S, bloomThr: 0.78, contrast: 1.12, grain: 0.14, vig: 0.7, ca: 0.6 + 1.2 * S, flicker: 0.08 * end,
      scratch: 0.18 * end, weave: 0.15 * end, punch: 0.22 * K, shake: 0.002 * K * end, tint: [1.04, 0.98, 0.9], dust: 0.25, dustCol: [0.9, 0.8, 0.7],
      exposure: 1 + 0.12 * K + 0.25 * (t < TB) * (1 - smooth(T0, T0 + 0.15, t)) };
  }
}
