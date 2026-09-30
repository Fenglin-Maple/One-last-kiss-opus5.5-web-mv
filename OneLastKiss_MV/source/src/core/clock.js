// Master clock. The <audio> element is the source of truth; performance.now() fills in
// between its coarse currentTime updates so motion stays smooth, with drift correction.
export class Clock {
  constructor(el) {
    this.el = el;
    this.t = 0;
    this.last = performance.now();
    this.frozen = null;      // debug: ?t=..&freeze=1 pins time (screenshots)
    this.fallback = false;   // audio failed to load -> run on wall clock
    this.running = false;
  }
  freeze(t) { this.frozen = t; this.t = t; }
  get playing() {
    if (this.frozen !== null) return false;
    return this.fallback ? this.running : !this.el.paused && !this.el.ended;
  }
  tick() {
    const now = performance.now();
    const dt = Math.min((now - this.last) / 1000, 0.1);
    this.last = now;
    if (this.frozen !== null) { this.t = this.frozen; return 1 / 60; }
    if (this.fallback) { if (this.running) this.t += dt; return dt; }
    const el = this.el;
    if (!el.paused && !el.ended) {
      const pred = this.t + dt * el.playbackRate;
      const drift = el.currentTime - pred;
      this.t = Math.abs(drift) > 0.08 ? el.currentTime : pred + drift * 0.1;
    } else {
      this.t = el.currentTime;
    }
    return dt;
  }
}
