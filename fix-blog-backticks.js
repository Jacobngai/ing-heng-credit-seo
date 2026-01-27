/**
 * Fix backtick issues in blog posts
 * Removes problematic `</code>`<code>` patterns that break template literals
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = path.join(__dirname, 'clients', 'ihousing', 'website', 'src', 'pages');
const LANGUAGES = ['en', 'ms', 'zh'];

let stats = {
  total: 0,
  fixed: 0,
  errors: 0
};

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;

    // Fix problematic patterns
    // Pattern 1: </code>`<code> - remove it entirely
    content = content.replace(/<\/code>`<code>/g, '');

    // Pattern 2: </code>`` - remove it
    content = content.replace(/<\/code>``/g, '');

    // Pattern 3: <p>``<code> - replace with <p><code>
    content = content.replace(/<p>``<code>/g, '<p><code>');

    // Pattern 4: Remove ${` at start of content (nested template literal)
    content = content.replace(/const content = `\n\$\{`/, 'const content = `\n');

    // Pattern 5: Remove `} at end of content (nested template literal closing)
    content = content.replace(/`}(\n`;)/, '$1');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✓ Fixed: ${filePath}`);
      stats.fixed++;
    }
    stats.total++;
  } catch (error) {
    console.error(`✗ Error: ${filePath} - ${error.message}`);
    stats.errors++;
  }
}

function processLanguage(lang) {
  console.log(`\nProcessing ${lang.toUpperCase()}...`);

  const blogDir = path.join(BASE_DIR, lang, 'blog');
  if (!fs.existsSync(blogDir)) return;

  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  entries.forEach(entry => {
    if (entry.isDirectory()) {
      const filePath = path.join(blogDir, entry.name, 'index.astro');
      if (fs.existsSync(filePath)) {
        fixFile(filePath);
      }
    }
  });
}

function main() {
  console.log('Fixing backtick issues in iHousing blog posts...\n');

  LANGUAGES.forEach(processLanguage);

  console.log(`\n${'='.repeat(60)}`);
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total files: ${stats.total}`);
  console.log(`Fixed: ${stats.fixed}`);
  console.log(`Errors: ${stats.errors}`);
  console.log('\n✓ Complete!');
}

main();
