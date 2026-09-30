// Scene base: every scene is a pure function of global song time t.
import * as THREE from 'three';

export class Scene {
  constructor(ctx, opt = {}) {
    this.ctx = ctx;
    this.scene = new THREE.Scene();
    this.camera = opt.ortho
      ? new THREE.OrthographicCamera(-ctx.aspect, ctx.aspect, 1, -1, 0.1, 100)
      : new THREE.PerspectiveCamera(opt.fov || 45, ctx.aspect, opt.near || 0.1, opt.far || 2000);
    if (opt.ortho) this.camera.position.z = 10;
    this.ortho = !!opt.ortho;
    this.clear = new THREE.Color(0, 0, 0);
  }
  build() {}
  /** @param t global song time (seconds) @param dt frame delta */
  update(t, dt) {}
  /** partial post params merged over DEFAULT_POST */
  post(t) { return {}; }
  resize(w, h) {
    const a = w / h;
    if (this.ortho) { this.camera.left = -a; this.camera.right = a; }
    else this.camera.aspect = a;
    this.camera.updateProjectionMatrix();
  }
  render(r, target) {
    r.setRenderTarget(target);
    r.setClearColor(this.clear, 1);
    r.clear();
    r.render(this.scene, this.camera);
  }
}

const BG_VERT = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }`;

/** Fullscreen background quad living inside a 3D scene (drawn first, no depth write). */
export function bgQuad(frag, uniforms, opt = {}) {
  const m = new THREE.ShaderMaterial({
    vertexShader: BG_VERT, fragmentShader: frag, uniforms,
    depthWrite: false, depthTest: false, transparent: !!opt.blend, blending: opt.blend || THREE.NormalBlending,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), m);
  mesh.frustumCulled = false;
  mesh.renderOrder = opt.order ?? -100;
  return mesh;
}

/** Additive points material with per-vertex color/alpha, size attenuation in px. */
export function pointsMat(vert, frag, uniforms, extra = {}) {
  return new THREE.ShaderMaterial({
    vertexShader: vert, fragmentShader: frag, uniforms,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, ...extra,
  });
}

export const addMat = (color, opacity = 1, extra = {}) => new THREE.MeshBasicMaterial({
  color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, ...extra,
});
