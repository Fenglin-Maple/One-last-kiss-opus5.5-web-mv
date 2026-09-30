// S-DAT (0 -> 10.52, reprise 222.6 -> 226.2). Shinji's old portable tape player, built in 3D: brushed metal body,
// a green LCD, the thin earphone cord curling across a dark glossy floor. It has been stuck repeating
// TR 26 - 25 for 14 years. In the dark the display flickers; the camera slides along the cord and the body;
// a thumb-less press: the button sinks on the beat, the LCD jumps from 26 to 27 - for the first time the tape
// moves on - and the camera pulls away into the light (-> Earth).  Reprise: rewinding, then "END", stopping.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Scene, bgQuad } from './base.js';
import { NOISE } from '../core/glsl.js';
import { canvas, tex, FONTS } from '../core/textures.js';
import { clamp, range, ease, smooth, lerp, keys, rng } from '../core/util.js';
import { audio } from '../core/audio.js';

const PRESS = 8.92, JUMP = 9.2; // the button goes down on the beat before the pickup; LCD flips on the next
// camera keys: [t, px, py, pz, tx, ty, tz, fov]
const LX = -0.05, LY = 0.03, LZ = -0.03; // LCD centre
const CAM = [
  [0.0, 0.03, 0.14, 0.11, LX, LY, LZ, 30],        // macro on the LCD in the dark, slow push
  [2.1, 0.0, 0.11, 0.075, LX, LY, LZ, 30],
  [2.15, -0.9, 0.12, -0.3, 0.3, -0.05, 0.3, 38],   // cut: low along the cord on the floor
  [4.25, -0.2, 0.18, -0.6, 0.0, -0.02, 0.0, 38],
  [4.3, 0.8, 0.9, 0.9, 0.0, 0.0, 0.0, 34],         // cut: high orbit
  [6.4, -0.6, 0.8, 1.0, 0.0, 0.0, 0.0, 34],
  [6.45, 0.09, 0.13, 0.17, 0.0, 0.034, 0.055, 28], // cut: button close-up
  [8.9, 0.07, 0.11, 0.15, 0.0, 0.034, 0.055, 28],
  [9.25, 0.01, 0.15, 0.12, LX, LY, LZ, 30],        // on the jump: LCD
  [10.6, 0.8, 3.0, 1.5, 0.0, 0.0, 0.0, 50],        // pull away up into light
];
const REP = [
  [222.6, 0.02, 0.13, 0.1, LX, LY, LZ, 30],
  [226.3, 0.12, 0.9, 0.45, 0.0, 0.0, 0.0, 34],
];

const BG = /* glsl */ `uniform float uT, uLift; varying vec2 vUv; ${NOISE}
void main(){ vec2 q = vUv - vec2(0.5, 0.75); float g = exp(-dot(q, q) * 3.0);
  vec3 c = mix(vec3(0.005, 0.006, 0.01), vec3(0.06, 0.05, 0.045), g) + vec3(0.9, 0.85, 0.75) * uLift * g;
  c += (hash12(vUv * 600.0 + uT) - 0.5) * 0.01; gl_FragColor = vec4(c, 1.0); }`;

function lcd(g, s, o) {
  const W = 512, Hh = 192;
  g.fillStyle = '#0d1a10'; g.fillRect(0, 0, W, Hh);
  g.fillStyle = 'rgba(120,255,170,0.06)'; for (let y = 0; y < Hh; y += 4) g.fillRect(0, y, W, 1);
  g.fillStyle = '#8dffbf'; g.shadowColor = '#5dff9a'; g.shadowBlur = 14;
  g.font = `700 30px ${FONTS.mono}`; g.fillText(o.mode, 22, 46);
  g.font = `700 22px ${FONTS.mono}`; g.fillText('TR', 22, 128);
  g.font = `700 104px ${FONTS.mono}`; g.fillText(s, 70, 160);
  g.font = `700 40px ${FONTS.mono}`; g.fillText(o.time, 260, 160);
  g.font = `500 20px ${FONTS.mono}`; g.fillText(o.sub, 262, 96);
  // battery
  g.strokeStyle = '#8dffbf'; g.lineWidth = 3; g.strokeRect(430, 22, 56, 24); g.fillRect(434, 26, 20 + 28 * o.bat, 16);
}

export class SDAT extends Scene {
  constructor(ctx) {
    super(ctx, { fov: 30, near: 0.01, far: 60 });
    const S = this.scene;
    const pm = new THREE.PMREMGenerator(ctx.renderer);
    S.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; S.environmentIntensity = 0.35;
    this.BU = { uT: { value: 0 }, uLift: { value: 0 } };
    S.add(bgQuad(BG, this.BU));
    // --- body ---
    const dev = this.dev = new THREE.Group(); S.add(dev);
    const metal = new THREE.MeshStandardMaterial({ color: 0x9aa0a8, metalness: 0.9, roughness: 0.32 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x1a1c20, metalness: 0.5, roughness: 0.5 });
    const body = new THREE.Mesh(new RoundedBoxGeometry(0.32, 0.06, 0.2, 5, 0.018), metal); dev.add(body);
    // brushed texture on the top face
    const bc = canvas(512, 320), bg = bc.getContext('2d'); bg.fillStyle = '#888'; bg.fillRect(0, 0, 512, 320);
    const R = rng(4); for (let i = 0; i < 900; i++) { bg.fillStyle = `rgba(${R() > 0.5 ? 255 : 0},${R() > 0.5 ? 255 : 0},255,${0.03 + R() * 0.05})`; bg.fillRect(0, R() * 320, 512, 1); }
    bg.font = `700 26px ${FONTS.mono}`; bg.fillStyle = '#2a2c30'; bg.fillText('S-DAT', 380, 296);
    bg.font = `500 13px ${FONTS.mono}`; bg.fillText('DIGITAL AUDIO TAPE  WM-D3', 22, 300);
    bg.strokeStyle = '#555'; bg.lineWidth = 2; bg.strokeRect(14, 14, 484, 292);
    const top = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.185), new THREE.MeshStandardMaterial({ map: tex(bc), metalness: 0.85, roughness: 0.38 }));
    top.rotation.x = -Math.PI / 2; top.position.y = 0.0301; dev.add(top);
    // LCD
    this.lc = canvas(512, 192); this.lg = this.lc.getContext('2d'); this.lt = tex(this.lc);
    const lcdM = new THREE.MeshBasicMaterial({ map: this.lt, toneMapped: false });
    const lcdMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.128, 0.048), lcdM);
    lcdMesh.rotation.x = -Math.PI / 2; lcdMesh.position.set(-0.05, 0.0305, -0.03); dev.add(lcdMesh);
    const bez = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 0.058), dark); bez.rotation.x = -Math.PI / 2; bez.position.set(-0.05, 0.03025, -0.03); dev.add(bez);
    this.lcdLight = new THREE.PointLight(0x5dff9a, 0.02, 0.4); this.lcdLight.position.set(-0.05, 0.06, -0.03); dev.add(this.lcdLight);
    // buttons (play, stop, ff, rew, rec)
    this.btn = [];
    for (let i = 0; i < 5; i++) {
      const b = new THREE.Mesh(new RoundedBoxGeometry(0.03, 0.012, 0.018, 3, 0.004), i === 0 ? metal : dark);
      b.position.set(-0.07 + i * 0.036, 0.034, 0.055); dev.add(b); this.btn.push(b);
    }
    const tri = new THREE.Mesh(new THREE.CircleGeometry(0.004, 3), new THREE.MeshBasicMaterial({ color: 0x2bff88 }));
    tri.rotation.x = -Math.PI / 2; tri.position.set(-0.07, 0.0405, 0.055); dev.add(tri); this.tri = tri;
    // jack + cord (curling across the floor to the earbuds)
    const jack = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.02, 12), metal); jack.rotation.z = Math.PI / 2; jack.position.set(0.17, 0.01, -0.06); dev.add(jack);
    const pts = [new THREE.Vector3(0.18, 0.01, -0.06), new THREE.Vector3(0.26, -0.02, -0.08), new THREE.Vector3(0.34, -0.029, 0.02), new THREE.Vector3(0.22, -0.029, 0.16),
      new THREE.Vector3(-0.05, -0.029, 0.22), new THREE.Vector3(-0.3, -0.029, 0.12), new THREE.Vector3(-0.42, -0.029, -0.1), new THREE.Vector3(-0.3, -0.029, -0.28),
      new THREE.Vector3(-0.1, -0.029, -0.32)];
    const curve = new THREE.CatmullRomCurve3(pts);
    const cordM = new THREE.MeshStandardMaterial({ color: 0x15161a, metalness: 0.3, roughness: 0.35 });
    S.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 200, 0.0022, 8), cordM));
    const b1 = new THREE.CatmullRomCurve3([pts[8], new THREE.Vector3(0.02, -0.029, -0.36), new THREE.Vector3(0.1, -0.024, -0.3)]);
    const b2 = new THREE.CatmullRomCurve3([pts[8], new THREE.Vector3(-0.02, -0.029, -0.42), new THREE.Vector3(0.04, -0.024, -0.48)]);
    for (const c of [b1, b2]) {
      S.add(new THREE.Mesh(new THREE.TubeGeometry(c, 40, 0.0018, 8), cordM));
      const bud = new THREE.Mesh(new THREE.SphereGeometry(0.014, 24, 16), metal); bud.scale.set(1, 0.6, 1); bud.position.copy(c.getPoint(1)); S.add(bud);
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.006, 24), new THREE.MeshStandardMaterial({ color: 0x0c0c0c, roughness: 0.9 }));
      pad.position.copy(c.getPoint(1)).add(new THREE.Vector3(0, 0.006, 0)); S.add(pad);
    }
    // glossy floor with a mirrored copy of the device (cheap reflection)
    const mir = dev.clone(); mir.scale.y = -1; mir.position.y = -0.06; S.add(mir); this.mir = mir;
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.MeshStandardMaterial({ color: 0x050506, metalness: 0.2, roughness: 0.25, transparent: true, opacity: 0.86 }));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -0.03; S.add(floor);
    // lights
    this.key = new THREE.SpotLight(0xffd9a8, 0, 6, 0.5, 0.6, 1.2); this.key.position.set(0.6, 1.4, 0.5); S.add(this.key); S.add(this.key.target);
    this.rim = new THREE.DirectionalLight(0x8fb4ff, 0); this.rim.position.set(-1, 0.4, -1); S.add(this.rim);
    // dust in the key light
    const n = 400, g = new THREE.BufferGeometry(), P = new Float32Array(n * 3), R2 = rng(9);
    for (let i = 0; i < n; i++) { P[i * 3] = (R2() - 0.5) * 1.4; P[i * 3 + 1] = R2() * 0.8; P[i * 3 + 2] = (R2() - 0.5) * 1.4; }
    g.setAttribute('position', new THREE.BufferAttribute(P, 3));
    this.dust = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffe8c8, size: 0.004, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
    S.add(this.dust);
    this._s = '';
  }
  draw(t) {
    let tr = '26', mode = '▶ PLAY', sub = 'REPEAT 1', time;
    const rep = t > 200;
    if (!rep) {
      // before the jump it is stuck: 26 -> 25 -> 26 loop (flickers), after: 27
      tr = t < JUMP ? (Math.floor(t / 1.07) % 4 === 3 ? '25' : '26') : '27';
      if (t < PRESS) mode = Math.floor(t * 2) % 2 ? '▶ PLAY' : '▶';
      else if (t < JUMP) mode = '▶▶|';
      sub = t < JUMP ? 'REPEAT 1' : 'NEXT';
      const tc = t < JUMP ? (t % 4.3) + 3 * 60 + 41 : t - JUMP;
      time = `${String(Math.floor(tc / 60)).padStart(2, '0')}:${String(Math.floor(tc % 60)).padStart(2, '0')}`;
    } else {
      const stop = t > 224.4;
      tr = '27'; mode = stop ? '■ STOP' : '◀◀ REW'; sub = stop ? 'END' : 'REW';
      const tc = stop ? 0 : Math.max(0, (224.4 - t) * 40);
      time = `${String(Math.floor(tc / 60)).padStart(2, '0')}:${String(Math.floor(tc % 60)).padStart(2, '0')}`;
    }
    const s = tr + mode + time + sub;
    if (s === this._s) return;
    this._s = s; this.lg.clearRect(0, 0, 512, 192); lcd(this.lg, tr, { mode, time, sub, bat: rep ? 0.2 : 1 }); this.lt.needsUpdate = true;
  }
  update(t) {
    const rep = t > 200, K = rep ? REP : CAM, lt = rep ? t : t;
    // piecewise: keys closer than 0.1s are cuts
    let i = 0; while (i + 1 < K.length && K[i + 1][0] <= lt) i++;
    const a = K[i], b = K[Math.min(K.length - 1, i + 1)];
    const cut = b[0] - a[0] < 0.1;
    const u = cut || b === a ? 0 : ease.inOut(clamp((lt - a[0]) / (b[0] - a[0])));
    const v = (j) => lerp(a[j], b[j], u);
    const kick = audio.hitPulse('kick', t, 8);
    const sh = !rep && t > JUMP ? 0.002 * kick : 0;
    this.camera.position.set(v(1) + sh, v(2), v(3));
    this.camera.lookAt(v(4), v(5), v(6));
    this.camera.fov = v(7); this.camera.updateProjectionMatrix();
    this.draw(t);
    // light: dark room, the key light slowly opens; flare on the jump
    const open = rep ? 1 - smooth(224.6, 226.2, t) : smooth(0.3, 3, t);
    const jump = rep ? 0 : smooth(JUMP - 0.05, JUMP + 0.2, t);
    this.key.intensity = (0.3 + 1.0 * open + 1.6 * jump) * (1 + 0.25 * kick);
    this.key.target.position.set(0, 0, 0);
    this.rim.intensity = 0.15 + 0.7 * open;
    this.lcdLight.intensity = 0.004 + 0.002 * Math.sin(t * 40);
    this.BU.uT.value = t; this.BU.uLift.value = rep ? 0.02 : 0.03 + jump * 0.12 + smooth(9.6, 10.6, t) * 0.8;
    // press
    const pr = rep ? smooth(224.2, 224.4, t) : smooth(PRESS - 0.08, PRESS, t) * (1 - smooth(JUMP + 0.05, JUMP + 0.3, t));
    this.btn[2].position.y = 0.034 - pr * 0.005; this.mir.children[this.dev.children.indexOf(this.btn[2])].position.y = this.btn[2].position.y;
    this.tri.material.color.setHex(Math.floor(t * 2) % 2 || t > JUMP ? 0x2bff88 : 0x0a3a1e);
    this.dust.rotation.y = t * 0.03; this.dust.position.y = -((t * 0.01) % 0.2);
      }
  post(t) {
    const rep = t > 200, jump = rep ? 0 : smooth(JUMP - 0.05, JUMP + 0.3, t);
    return { exposure: 1.05, bloom: 0.55 + jump * 0.5, bloomThr: 0.78, grain: 0.09, vig: 0.65, ca: 0.6, dust: 0.25, letter: 0.12,
      fadeB: rep ? smooth(225.2, 226.2, t) * 0.6 : 1 - smooth(0, 1.2, t), fadeW: rep ? 0 : smooth(9.9, 10.6, t) * 0.6,
      glitch: rep && t < 224.4 ? 0.25 : 0, scan: rep ? 0.2 : 0, punch: audio.hitPulse('kick', t, 10) * 0.3 * (t > JUMP ? 1 : 0.3) };
  }
}
