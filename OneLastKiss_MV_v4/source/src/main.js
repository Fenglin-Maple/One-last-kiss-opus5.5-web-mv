// Boot: fonts -> scenes (with loading bar) -> shader warm-up -> autoplay (or click gate) -> render loop.
import * as THREE from 'three';
import { Clock } from './core/clock.js';
import { DURATION } from './core/audio.js';
import { Post, makeRT } from './core/post.js';
import { Mixer } from './core/mix.js';
import { Dust } from './core/dust.js';
import { Timeline, fullPost, blendPost } from './core/timeline.js';
import { Lyrics } from './lyrics.js';
import { UI } from './ui.js';
import { Captions } from './cc.js';
import { HUD } from './hud.js';
import { buildStory, HUD_ITEMS, EMERG } from './story.js';
import { Emergency } from './core/emergency.js';
import { Tegaki } from './core/tegaki.js';
import { TEGAKI } from './tegaki-data.js';

const Q = new URLSearchParams(location.search);
// QA: ?pp=bloom:0,dust:0 forces post params
const PP = Q.get('pp') ? Object.fromEntries(Q.get('pp').split(',').map((kv) => { const [k, v] = kv.split(':'); return [k, parseFloat(v)]; })) : null;
const FREEZE = Q.has('freeze'), T0 = parseFloat(Q.get('t') || '0') || 0, CLEAN = Q.has('clean');
const root = document.getElementById('app');
const audioEl = document.getElementById('song');
const clock = new Clock(audioEl);
let quality = parseFloat(Q.get('q') || '0') || (FREEZE ? 0.6 : 1);
const pixelCap = 1920 * 1080;

const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'high-performance', preserveDrawingBuffer: FREEZE });
renderer.autoClear = false;
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;
renderer.domElement.id = 'gl';
root.appendChild(renderer.domElement);

const ctx = { renderer, w: 1280, h: 720, aspect: 16 / 9, res: new THREE.Vector2(1280, 720), quality };
const post = new Post(renderer), mixer = new Mixer(), dust = new Dust(), emerg = new Emergency(EMERG);
if (Q.has('noem')) emerg.enabled = false;
const tegaki = new Tegaki(TEGAKI); if (Q.has('noteg')) tegaki.enabled = false;
let RA = null, RB = null, timeline = null, scenes = [], lyrics = null, cc = null, hud = null, ended = false, frames = 0;

function resize() {
  const dpr = Math.min(devicePixelRatio || 1, 2), W = innerWidth, H = innerHeight;
  let s = dpr * quality;
  if (W * H * s * s > pixelCap * quality) s = Math.sqrt((pixelCap * quality) / (W * H));
  const w = Math.max(320, Math.round(W * s)), h = Math.max(180, Math.round(H * s));
  renderer.setPixelRatio(1);
  renderer.setSize(w, h, false);
  renderer.domElement.style.width = W + 'px'; renderer.domElement.style.height = H + 'px';
  Object.assign(ctx, { w, h, aspect: w / h }); ctx.res.set(w, h);
  post.resize(w, h); emerg.resize(w, h); tegaki.resize(w, h);
  [RA, RB].forEach((r) => r && r.dispose());
  RA = makeRT(w, h); RB = makeRT(w, h);
  scenes.forEach((s) => s.resize(w, h));
  if (lyrics) lyrics.resize();
}

function renderFrame(t, dt) {
  const st = timeline.at(t), A = st.a.scene;
  A.update(t, dt);
  let src, p = fullPost(A.post(t));
  if (st.b) {
    const B = st.b.scene;
    B.update(t, dt);
    A.render(renderer, RA); B.render(renderer, RB);
    const tr = st.tr;
    post.fs.run(mixer.set(RA, RB, st.p, tr.type, ctx.aspect, t, tr.c, tr.amt ?? 1), post.M);
    src = post.M;
    p = blendPost(p, fullPost(B.post(t)), st.p, tr.type);
  } else {
    A.render(renderer, RA);
    src = RA;
  }
  if (PP) Object.assign(p, PP);
  tegaki.update(t); tegaki.render(post.fs, src);
  emerg.update(t); emerg.render(post.fs, src);
  if (emerg.cover) { p.bloom *= 1 - 0.65 * emerg.cover; p.leak *= 1 - emerg.cover; p.dust *= 1 - emerg.cover; }
  dust.render(renderer, src, t, p.dust, ctx.w, ctx.h, p.dustCol);
  post.composite(src, p, t, ctx.w, ctx.h);
  const la = (1 - p.fadeB) * (1 - p.fadeW * 0.85);
  if (lyrics) lyrics.update(t, la);
  if (hud) hud.update(t, la * (1 - p.invert * 0.5));
  if (cc) cc.update(t, !ui.bar.classList.contains('idle'));
}

// adaptive resolution: keep ~60fps on weaker GPUs, recover when there is headroom
let acc = 0, cnt = 0, lastAdj = 0;
function adapt(dt, now) {
  if (FREEZE || Q.has('q')) return;
  acc += dt; cnt++;
  if (now - lastAdj < 2500 || cnt < 45) return;
  const avg = acc / cnt; acc = 0; cnt = 0; lastAdj = now;
  const q0 = quality;
  if (avg > 1 / 45) quality = Math.max(0.5, quality * 0.85);
  else if (avg < 1 / 58 && quality < 1) quality = Math.min(1, quality * 1.08);
  if (Math.abs(q0 - quality) > 0.01) resize();
}

function loop() {
  const dt = clock.tick();
  const t = Math.min(clock.t, DURATION);
  renderFrame(t, dt);
  frames++;
  if (!ended && (audioEl.ended || t >= DURATION - 0.05)) ended = true;
  ui.update(t, clock.playing, ended);
  adapt(dt, performance.now());
  if (FREEZE && frames > 3) { window.__olk.ready = true; return; }
  requestAnimationFrame(loop);
}

const seek = (t) => {
  t = Math.max(0, Math.min(DURATION - 0.1, t)); ended = false;
  if (clock.fallback) clock.t = t; else { audioEl.currentTime = t; clock.t = t; }
};
const ui = new UI(root, {
  toggle: () => {
    if (clock.fallback) { clock.running = !clock.running; return; }
    if (audioEl.paused || audioEl.ended) { if (audioEl.ended) seek(0); audioEl.play().catch(() => {}); } else audioEl.pause();
  },
  seek, seekBy: (d) => seek(clock.t + d), lyrics: () => lyrics && lyrics.toggle(),
  restart: () => { seek(0); if (clock.fallback) clock.running = true; else audioEl.play().catch(() => {}); },
}, DURATION);
ui.clean = CLEAN;
window.__olk = { ready: false, seek, clock };

async function fonts() {
  const f = ['500 40px "OLK Mincho"', '400 40px "OLK Mincho"', 'italic 300 40px "OLK Serif"', 'italic 500 40px "OLK Serif"', '400 40px "OLK Serif"', '40px "OLK Script"', '40px "OLK SC"', '40px "OLK Mono"'];
  try { await Promise.race([Promise.all(f.map((x) => document.fonts.load(x, 'Aあ愛'))), new Promise((r) => setTimeout(r, 4000))]); } catch (e) { /* fall back to system fonts */ }
}

async function start() {
  if (FREEZE) { clock.freeze(T0); ui.ready(true); loop(); return; }
  const canPlay = new Promise((res) => {
    if (audioEl.readyState >= 3) return res(true);
    audioEl.addEventListener('canplay', () => res(true), { once: true });
    audioEl.addEventListener('error', () => res(false), { once: true });
    setTimeout(() => res(audioEl.readyState >= 2), 8000);
  });
  if (!(await canPlay)) { clock.fallback = true; clock.t = T0; clock.running = true; ui.ready(); loop(); return; }
  if (T0) audioEl.currentTime = T0;
  ui.ready();
  loop();
  try { await audioEl.play(); }
  catch (e) { ui.showGate(() => audioEl.play().catch(() => { clock.fallback = true; clock.running = true; })); }
}

(async function boot() {
  try {
    ui.loading(0.02);
    await fonts();
    resize();
    const around = FREEZE ? T0 : null;
    const shots = await buildStory(ctx, (p) => ui.loading(0.05 + p * 0.85), around);
    timeline = new Timeline(shots);
    scenes = [...new Set(shots.map((s) => s.scene))];
    scenes.forEach((s) => s.resize(ctx.w, ctx.h));
    lyrics = new Lyrics(root);
    hud = new HUD(root, HUD_ITEMS);
    cc = new Captions(root, ui.bar);
    if (Q.has('cc')) cc.set(true);
    if (Q.has('nohud')) hud.toggle(false);
    // warm-up: compile every scene's programs + upload geometry/textures once
    const warm = FREEZE ? timeline.around(T0, 2).map((s) => s.scene) : scenes;
    for (let i = 0; i < warm.length; i++) {
      const s = warm[i], sh = shots.find((x) => x.scene === s);
      s.update(Math.max(0, sh.start + 0.05), 1 / 60);
      s.render(renderer, RA);
      ui.loading(0.9 + (0.1 * (i + 1)) / warm.length);
      await new Promise((r) => setTimeout(r, 0));
    }
    renderFrame(Math.max(0, T0), 1 / 60);
    addEventListener('resize', resize);
    start();
  } catch (e) {
    console.error(e);
    ui.loading(1, 'ERROR: ' + (e && e.message));
  }
})();
