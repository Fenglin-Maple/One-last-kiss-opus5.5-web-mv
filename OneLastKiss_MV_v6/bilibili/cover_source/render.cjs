const { chromium } = require('/tmp/qa/node_modules/playwright');
(async () => {
  const b = await chromium.launch({ args: ['--no-sandbox'] });
  for (const [r, w] of [['169', 1920], ['43', 1440]]) {
    const p = await b.newPage({ viewport: { width: w, height: 1080 }, deviceScaleFactor: 1 });
    p.on('pageerror', e => console.log('ERR', String(e)));
    await p.goto('file://' + __dirname + '/cover.html?r=' + r);
    await p.waitForSelector('body[data-ready="1"]'); await p.evaluate(() => document.fonts.ready);
    const m = await p.evaluate(() => [...document.querySelectorAll('#ttl,.hook,#sub,.artist')].map(e => { const q = e.getBoundingClientRect(); return e.id + e.className + ':' + [q.left, q.top, q.right, q.bottom].map(Math.round) }));
    console.log(r, m.join(' | '));
    await p.screenshot({ path: __dirname + `/out_${r}.png` }); await p.close();
  }
  await b.close();
})();
