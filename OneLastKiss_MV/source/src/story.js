// The shot list: which scene plays when, and how each cut is made.
// Bar grid: bar n = 1.166 + 2.1429 n  (112 BPM, 4/4)
import { Scene } from './scenes/base.js';
import { Prelude } from './scenes/prelude.js';
import { Louvre } from './scenes/louvre.js';
import { Portrait } from './scenes/portrait.js';
import { Gears } from './scenes/gears.js';
import { Polaroids } from './scenes/polaroids.js';
import { Galaxy } from './scenes/galaxy.js';
import { Viewfinder } from './scenes/viewfinder.js';
import { Projector } from './scenes/projector.js';
import { Platform } from './scenes/platform.js';
import { Embers } from './scenes/embers.js';
import { Tunnel } from './scenes/tunnel.js';
import { RedSea } from './scenes/redsea.js';
import { Helix } from './scenes/helix.js';
import { Runout } from './scenes/runout.js';
import { Sketch } from './scenes/sketch.js';
import { photoAtlas, bigPhoto } from './core/photos.js';
import { glowTex } from './core/textures.js';
import { loadImages } from './core/images.js';

const SHOTS = [
  // id, start, scene factory, transition into this shot
  ['prelude', 0, (c) => new Prelude(c), null],
  ['louvre', 20.45, (c) => new Louvre(c), { type: 'light', dur: 1.3, align: 0.6 }],
  ['portrait', 25.1, (c) => new Portrait(c), { type: 'fade', dur: 1.2, align: 0.5 }],
  ['gears', 29.02, (c) => new Gears(c), { type: 'iris', dur: 0.7, align: 0.5 }],
  ['polaroids', 37.6, (c) => new Polaroids(c), { type: 'flash', dur: 0.5, align: 0.5, amt: 1.2 }],
  ['galaxy', 52.6, (c) => new Galaxy(c), { type: 'zoom', dur: 1.6, align: 0.6, c: [0.5, 0.5] }],
  ['viewfinder', 80.46, (c) => new Viewfinder(c), { type: 'glitch', dur: 0.35, align: 0.5 }],
  ['projector', 82.78, (c) => new Projector(c), { type: 'iris', dur: 0.5, align: 0.5 }],
  ['platform', 89.26, (c) => new Platform(c), { type: 'burn', dur: 1.1, align: 0.5, c: [0.5, 0.52] }],
  ['embers', 97.6, (c) => new Embers(c), { type: 'shatter', dur: 1.9, align: 0.3, c: [0.52, 0.5] }],
  ['galaxyFire', 112.6, (c) => new Galaxy(c, { fire: true }), { type: 'burn', dur: 1.4, align: 0.5, c: [0.5, 0.5] }],
  ['tunnel', 136.17, (c) => new Tunnel(c), { type: 'flash', dur: 0.6, align: 0.5, amt: 1.4 }],
  ['redsea', 149.03, (c) => new RedSea(c), { type: 'light', dur: 1.4, align: 0.3 }],
  ['helix', 166.17, (c) => new Helix(c), { type: 'flash', dur: 0.7, align: 0.45, amt: 1.6 }],
  ['runout', 217.6, (c) => new Runout(c), { type: 'fade', dur: 1.6, align: 0.3 }],
  ['sketch', 226.18, (c) => new Sketch(c), { type: 'pencil', dur: 2.4, align: 0.35 }],
];

/**
 * Build every scene (yielding between them so the loading bar can paint).
 * around: when set (screenshot/debug), only scenes near that time are really built.
 */
export async function buildStory(ctx, progress, around = null) {
  const img = await loadImages();
  ctx.img = img;
  ctx.shared = { photos: img.atlas ? img.atlas.tex : photoAtlas(), big: img.hero ? img.hero.tex : bigPhoto(), glow: glowTex(128) };
  const out = [];
  for (let i = 0; i < SHOTS.length; i++) {
    const [id, start, make, tr] = SHOTS[i];
    const end = i + 1 < SHOTS.length ? SHOTS[i + 1][1] : 1e9;
    const need = around === null || (end > around - 3 && start < around + 3);
    const scene = need ? make(ctx) : new Scene(ctx);
    out.push({ id, start, scene, tr: tr || { type: 'cut' } });
    progress((i + 1) / SHOTS.length);
    await new Promise((r) => setTimeout(r, 0));
  }
  return out;
}
