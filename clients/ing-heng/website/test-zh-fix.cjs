const fs = require('fs');
const path = require('path');

const zhDir = 'src/pages/zh/blog';
const files = fs.readdirSync(zhDir).filter(f => f.endsWith('.astro'));
console.log('Total astro files:', files.length);

const filtered = files.filter(f => !f.includes('[slug]') && !f.includes('backup'));
console.log('After filtering:', filtered.length);

const toFix = [];
for (const f of filtered) {
  try {
    const fp = path.join(zhDir, f);
    const content = fs.readFileSync(fp, 'utf8');
    const needsFix = !content.includes('import BaseLayout') && content.includes('title:');
    if (needsFix) {
      toFix.push(f);
    }
  } catch (e) {
    console.log('Error reading', f, ':', e.message);
  }
}

console.log('Files to fix:', toFix.length);
console.log('First file to fix:', toFix[0]);

if (toFix.length > 0) {
  const fp = path.join(zhDir, toFix[0]);
  const content = fs.readFileSync(fp, 'utf8');
  console.log('Content length:', content.length);
  console.log('First 300 chars:', content.substring(0, 300));
  
  const fmMatch = content.match(/^---\n([\s\S]+?)\n---/);
  console.log('Frontmatter match:', fmMatch ? 'found' : 'not found');
  if (fmMatch) {
    console.log('Frontmatter content:', fmMatch[1]);
  }
}
