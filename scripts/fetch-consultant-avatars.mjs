// Generates NFT-style avatars for consultants using DiceBear Lorelei.
// Run once after editing src/data/consultants.ts; commit the SVGs.
//
// Usage:
//   node scripts/fetch-consultant-avatars.mjs              # skip existing
//   node scripts/fetch-consultant-avatars.mjs --force      # redo all
//
// Gender-coded styling (approximate, via hair/beard/earrings probabilities):
//   male    → shorter hair set + 40% beard chance + 10% earrings
//   female  → longer hair set  + 0% beard           + 60% earrings
// Background: brand gradient #00E5A0 → #00B4D8 at 45°.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'consultants');
const DATA_FILE = path.join(ROOT, 'src', 'data', 'consultants.ts');

const FORCE = process.argv.includes('--force');

const MALE_HAIR = [
  'variant22', 'variant25', 'variant27', 'variant30',
  'variant33', 'variant36', 'variant39', 'variant42',
  'variant45', 'variant48',
];
const FEMALE_HAIR = [
  'variant01', 'variant04', 'variant07', 'variant10',
  'variant13', 'variant16', 'variant19',
];
const BG_COLORS = '00e5a0,00b4d8';

// Per-slug seed overrides — used when the default draw doesn't visually match.
// Delete the corresponding SVG in public/consultants/ and rerun to refresh.
const SEED_OVERRIDES = {
  dexter: 'dexter-m',
};

function buildUrl({ seed, gender }) {
  const params = new URLSearchParams();
  params.set('seed', seed);
  params.set('backgroundColor', BG_COLORS);
  params.set('backgroundType', 'gradientLinear');
  params.set('backgroundRotation', '45');

  if (gender === 'male') {
    params.set('hair', MALE_HAIR.join(','));
    params.set('beardProbability', '40');
    params.set('earringsProbability', '10');
  } else {
    params.set('hair', FEMALE_HAIR.join(','));
    params.set('beardProbability', '0');
    params.set('earringsProbability', '60');
  }

  return `https://api.dicebear.com/9.x/lorelei/svg?${params.toString()}`;
}

async function parseConsultants() {
  // Lightweight extraction — avoids loading a TS file into Node.
  const src = await fs.readFile(DATA_FILE, 'utf8');
  const entries = [];
  const blockRe = /\{\s*slug:\s*'([^']+)'[\s\S]*?gender:\s*'(male|female)'[\s\S]*?\n\s*\},/g;
  let m;
  while ((m = blockRe.exec(src)) !== null) {
    entries.push({ slug: m[1], gender: m[2] });
  }
  return entries;
}

async function main() {
  const consultants = await parseConsultants();
  if (consultants.length === 0) {
    console.error('No consultants parsed from', DATA_FILE);
    process.exit(1);
  }
  console.log(`Found ${consultants.length} consultants.`);

  let written = 0;
  let skipped = 0;

  for (const c of consultants) {
    const outPath = path.join(OUT_DIR, `${c.slug}.svg`);
    if (!FORCE) {
      try {
        await fs.access(outPath);
        skipped++;
        continue;
      } catch {
        // missing — proceed to fetch
      }
    }
    const seed = SEED_OVERRIDES[c.slug] ?? c.slug;
    const url = buildUrl({ seed, gender: c.gender });
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`✗ ${c.slug} → ${res.status} ${res.statusText}`);
      continue;
    }
    const svg = await res.text();
    await fs.writeFile(outPath, svg, 'utf8');
    console.log(`✓ ${c.slug} (${c.gender})`);
    written++;
  }

  console.log(`\nDone. Written: ${written}, skipped: ${skipped}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
