#!/usr/bin/env node
/**
 * Fix incorrect relative imports in root-level blog pages.
 *
 * Some generated files under:
 *  - clients/ing-heng/website/src/pages/ms/blog/*.astro
 *  - clients/ing-heng/website/src/pages/zh/blog/*.astro
 * incorrectly reference ../../../../ (4 levels) even though they're only 3 levels deep.
 * This breaks Vercel builds (Vite cannot resolve components).
 */

import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();

const targets = [
  'clients/ing-heng/website/src/pages/ms/blog',
  'clients/ing-heng/website/src/pages/zh/blog'
].map(p => path.join(ROOT, p));

const needle = '../../../../../';

async function processDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    if (!ent.isFile()) continue;
    if (!ent.name.endsWith('.astro')) continue;

    const full = path.join(dir, ent.name);
    const before = await fs.readFile(full, 'utf8');

    // Only fix files that are using 4-level relative imports at the top.
    if (!before.includes('../../../../')) continue;

    const after = before.replaceAll('../../../../', '../../../');

    if (after !== before) {
      await fs.writeFile(full, after, 'utf8');
      console.log('fixed', path.relative(ROOT, full));
    }
  }
}

for (const dir of targets) {
  await processDir(dir);
}
