// NERV / WILLE style HUD overlay (DOM, crisp text), a pure function of song time.
// kinds: alert (hazard-striped warning), sync (sync-ratio counter), magi (3 voting boxes), cap (location caption),
//        code (S-DAT style track / timecode), frame (thin corner brackets + crosshair), count (big countdown numerals)
import { audio } from './core/audio.js';
import { clamp, smooth } from './core/util.js';

const CSS = `
#hud{position:fixed;inset:0;z-index:12;pointer-events:none;overflow:hidden;font-family:"OLK Mono",monospace;color:#ff8a1e}
#hud .h{position:absolute;opacity:0;will-change:opacity,transform}
#hud .alert{left:50%;top:50%;transform:translate(-50%,-50%);padding:.35em 1.1em .45em;border:3px solid currentColor;background:rgba(40,0,0,.35);text-align:center;
  box-shadow:0 0 22px rgba(255,60,20,.45), inset 0 0 18px rgba(255,60,20,.3)}
#hud .alert:before,#hud .alert:after{content:"";position:absolute;left:-3px;right:-3px;height:12px;background:repeating-linear-gradient(-45deg,currentColor 0 10px,transparent 10px 20px)}
#hud .alert:before{top:-18px} #hud .alert:after{bottom:-18px}
#hud .alert b{display:block;font:900 clamp(26px,5.6vw,86px)/1.05 "OLK Mincho",serif;letter-spacing:.08em;transform:scaleY(1.15)}
#hud .alert i{display:block;font:500 clamp(10px,1.1vw,16px)/1.4 "OLK Mono",monospace;letter-spacing:.45em;font-style:normal;margin-top:.3em}
#hud .sync{right:4%;top:9%;text-align:right}
#hud .sync small{display:block;font-size:clamp(9px,.9vw,13px);letter-spacing:.35em;opacity:.8}
#hud .sync b{font:700 clamp(28px,4.4vw,66px)/1 "OLK Mono",monospace;letter-spacing:.02em;text-shadow:0 0 14px rgba(255,120,30,.6)}
#hud .sync .bar{height:4px;margin-top:6px;background:rgba(255,138,30,.25);position:relative}
#hud .sync .bar i{position:absolute;left:0;top:0;bottom:0;background:currentColor;box-shadow:0 0 8px currentColor}
#hud .magi{left:50%;bottom:16%;transform:translateX(-50%);display:flex;gap:1.4vw}
#hud .magi div{border:2px solid currentColor;padding:.35em .8em;min-width:8.5vw;text-align:center;font-size:clamp(9px,.95vw,14px);letter-spacing:.2em;background:rgba(0,0,0,.35)}
#hud .magi div b{display:block;font:700 clamp(13px,1.5vw,22px) "OLK Mincho",serif;letter-spacing:.3em;margin-top:.2em}
#hud .magi div.no{color:#ff3a2a} #hud .magi div.ok{color:#5de0ff}
#hud .cap{left:4.5%;top:8%;border-left:3px solid #f4efe6;padding:.1em 0 .15em .7em;color:#f4efe6;text-shadow:0 0 8px rgba(0,0,0,.6)}
#hud .cap b{display:block;font:600 clamp(14px,1.7vw,26px)/1.3 "OLK Mincho",serif;letter-spacing:.25em}
#hud .cap i{display:block;font:400 clamp(9px,.85vw,12px)/1.6 "OLK Mono",monospace;letter-spacing:.4em;font-style:normal;opacity:.75}
#hud .code{left:3%;bottom:6%;font-size:clamp(10px,1vw,14px);letter-spacing:.3em;color:#9ff0c8;text-shadow:0 0 6px rgba(120,255,180,.6)}
#hud .frame{inset:5%;border:0}
#hud .frame:before,#hud .frame:after{content:"";position:absolute;width:3.5vw;height:3.5vw;border:2px solid currentColor}
#hud .frame:before{left:0;top:0;border-right:0;border-bottom:0} #hud .frame:after{right:0;bottom:0;border-left:0;border-top:0}
#hud .frame s{position:absolute;left:50%;top:50%;width:2.4vw;height:2.4vw;margin:-1.2vw 0 0 -1.2vw;border:1px solid currentColor;border-radius:50%;text-decoration:none}
#hud .frame u{position:absolute;right:0;top:0;font-size:clamp(9px,.8vw,12px);letter-spacing:.3em;text-decoration:none}
#hud .count{right:6%;bottom:12%;font:700 clamp(40px,8vw,130px)/1 "OLK Mono",monospace;color:#ff3a2a;text-shadow:0 0 18px rgba(255,40,20,.7)}
#hud.off{display:none}`;

const pad = (n, k = 2) => String(Math.floor(n)).padStart(k, '0');

export class HUD {
  /** items: [{ t0, t1, kind, ...props }] */
  constructor(root, items) {
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    this.el = document.createElement('div'); this.el.id = 'hud'; root.appendChild(this.el);
    this.items = items.map((it) => ({ ...it, el: this.make(it) }));
  }
  make(it) {
    const e = document.createElement('div'); e.className = 'h ' + it.kind;
    if (it.color) e.style.color = it.color;
    if (it.kind === 'alert') e.innerHTML = `<b>${it.text}</b><i>${it.sub || ''}</i>`;
    else if (it.kind === 'sync') e.innerHTML = `<small>${it.label || 'SYNCHRO RATIO'}</small><b>0.0%</b><div class="bar"><i></i></div>`;
    else if (it.kind === 'magi') e.innerHTML = ['MELCHIOR·1', 'BALTHASAR·2', 'CASPER·3'].map((n) => `<div>${n}<b>審議中</b></div>`).join('');
    else if (it.kind === 'cap') e.innerHTML = `<b>${it.text}</b><i>${it.sub || ''}</i>`;
    else if (it.kind === 'frame') e.innerHTML = `<s></s><u>${it.text || ''}</u>`;
    else e.textContent = '';
    if (it.style) Object.assign(e.style, it.style);
    this.el.appendChild(e);
    return e;
  }
  toggle(on) { this.el.classList.toggle('off', !on); }
  update(t, alpha = 1) {
    for (const it of this.items) {
      const { el, t0, t1, kind } = it;
      if (t < t0 - 0.05 || t > t1 + 0.6) { if (el._v !== 0) { el.style.opacity = 0; el._v = 0; } continue; }
      const fin = it.fin ?? 0.12, fout = it.fout ?? 0.35;
      let a = smooth(t0, t0 + fin, t) * (1 - smooth(t1, t1 + fout, t));
      const u = clamp((t - t0) / (t1 - t0));
      if (kind === 'alert') {
        // blink on the beat grid (on for 3/4 of each beat), a hard flash on the first frames
        const b = audio.beat(t) * (it.rate || 2); a *= (b - Math.floor(b)) < 0.72 ? 1 : 0.15;
        el.style.transform = `translate(-50%,-50%) scale(${1 + 0.05 * audio.hitPulse('kick', t, 10)})`;
      } else if (kind === 'sync') {
        const v = (it.from ?? 0) + ((it.to ?? 100) - (it.from ?? 0)) * Math.pow(u, it.pow || 1.6) + (Math.sin(t * 37) * 0.35);
        el.querySelector('b').textContent = v.toFixed(1) + '%';
        el.querySelector('.bar i').style.width = clamp(v / (it.max || 100)) * 100 + '%';
        el.style.color = v > (it.warn ?? 1e9) ? '#ff3a2a' : '';
      } else if (kind === 'magi') {
        const boxes = el.children, n = audio.count('kick', t0, t);
        for (let i = 0; i < 3; i++) {
          const final = u > 0.7, ok = final ? (it.result || [1, 1, 1])[i] : (n + i) % 3 !== 0;
          boxes[i].className = ok ? 'ok' : 'no';
          boxes[i].querySelector('b').textContent = final ? (ok ? '可決' : '否決') : (n + i) % 2 ? '審議中' : (ok ? '承認' : '否決');
        }
      } else if (kind === 'code') {
        const tc = Math.max(0, it.rev ? (it.base ?? 0) - (t - t0) * it.rev : t - (it.base ?? 0));
        el.textContent = `${it.text || 'S-DAT'}  ${it.track ? 'TR ' + it.track : ''}  ${pad(tc / 60)}:${pad(tc % 60)}:${pad((tc * 100) % 100)}`;
      } else if (kind === 'count') {
        el.textContent = pad(Math.max(0, it.from - audio.count('kick', t0, t)));
      } else if (kind === 'cap') {
        el.style.transform = `translateX(${(1 - smooth(t0, t0 + 0.5, t)) * -12}px)`;
      }
      // flicker in like a CRT
      if (t - t0 < 0.25) a *= (Math.floor(t * 60) % 3 === 0) ? 0.2 : 1;
      a *= alpha;
      if (Math.abs(a - (el._v ?? -1)) > 0.004) { el.style.opacity = a.toFixed(3); el._v = a; }
    }
  }
}
