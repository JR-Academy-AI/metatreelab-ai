/**
 * Render public/og.svg → public/og.png at exact 1200×630.
 * Run via: `node scripts/render-og.mjs`
 *
 * Re-run after editing og.svg (or any future locale-specific og-zh.svg).
 * Output is committed to the repo so production deploys don't need to rasterize.
 */
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const sources = [
  { in: 'public/og.svg', out: 'public/og.png', width: 1200 },
  { in: 'public/linkedin-cover.svg', out: 'public/linkedin-cover.png', width: 1128 },
];

for (const { in: input, out, width } of sources) {
  const svg = readFileSync(resolve(input));
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
    background: '#000000',
  });
  const png = resvg.render().asPng();
  writeFileSync(resolve(out), png);
  console.log(`✓ ${input} → ${out} (${png.byteLength.toLocaleString()} bytes)`);
}
