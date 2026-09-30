// Bundle src/ into a single IIFE (runs from file:// without a server).
// usage: node build.mjs [outDir]    (NODE_PATH may point at a node_modules with three + esbuild)
import * as esbuild from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(process.argv[2] || path.join(here, '..'));
const nodePaths = [path.join(here, 'node_modules'), ...(process.env.NODE_PATH || '').split(path.delimiter).filter(Boolean)];

await esbuild.build({
  entryPoints: [path.join(here, 'src', 'main.js')],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  minify: !process.env.DEV,
  sourcemap: false,
  legalComments: 'none',
  outfile: path.join(out, 'assets', 'app.js'),
  nodePaths,
  logLevel: 'info',
});
