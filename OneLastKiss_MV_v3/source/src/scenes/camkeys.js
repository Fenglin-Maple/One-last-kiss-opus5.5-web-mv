// Camera key tracks shared by the v2 bespoke scenes.
// K: [[t, px, py, pz, qx, qy, qz, fov, (roll)] ...]. Keys closer than 0.1 s mark a cut (no blending across).
import { clamp, lerp, ease } from '../core/util.js';

export function camAt(K, t, e = ease.inOut) {
  let i = 0; while (i + 1 < K.length && K[i + 1][0] <= t) i++;
  const a = K[i], b = K[Math.min(K.length - 1, i + 1)];
  const u = b === a || b[0] - a[0] < 0.1 ? 0 : e(clamp((t - a[0]) / (b[0] - a[0])));
  const v = (j, d = 0) => lerp(a[j] ?? d, b[j] ?? d, u);
  return { p: [v(1), v(2), v(3)], q: [v(4), v(5), v(6)], fov: v(7), roll: v(8), i, u };
}

/** apply to a THREE.PerspectiveCamera; returns the key sample */
export function applyCam(cam, K, t, shake = 0, e) {
  const c = camAt(K, t, e);
  cam.position.set(c.p[0] + shake * Math.sin(t * 91), c.p[1] + shake * Math.sin(t * 77 + 1), c.p[2]);
  cam.up.set(Math.sin(c.roll), Math.cos(c.roll), 0);
  cam.lookAt(c.q[0], c.q[1], c.q[2]);
  if (cam.fov !== c.fov) { cam.fov = c.fov; cam.updateProjectionMatrix(); }
  return c;
}
