import { readFileSync, writeFileSync } from 'fs';
import { readdirSync } from 'fs';
import { join } from 'path';

const pagesDir = join(process.cwd(), 'src', 'pages');

function fixFile(filePath) {
  try {
    let content = readFileSync(filePath, 'utf-8');
    let modified = false;

    // Fix patterns like <7 days, <30 minutes, <600 Score, etc.
    // But don't fix HTML tags like <h3>, <div>, <li>, <p>, <ul>, <ol>, <td>, <th>, <tr>, <table>
    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
      // Skip lines that are HTML tags
      if (line.trim().startsWith('</') || line.trim().startsWith('<') && !line.includes('<http')) {
        return line;
      }

      // Fix < followed by digit in markdown content (not HTML tags)
      // Pattern: <number but NOT <htmltag
      let fixedLine = line.replace(/(?<![!<a-zA-Z\/])<(\d+(?:\.\d+)?)/g, '&lt;$1');
      if (fixedLine !== line) {
        modified = true;
      }
      return fixedLine;
    });

    if (modified) {
      writeFileSync(filePath, fixedLines.join('\n'), 'utf-8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (e) {
    // Skip errors
  }
}

function walkDir(dir) {
  try {
    const files = readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
      const fullPath = join(dir, file.name);
      if (file.isDirectory()) {
        walkDir(fullPath);
      } else if (file.name.endsWith('.astro') || file.name.endsWith('.md')) {
        fixFile(fullPath);
      }
    }
  } catch (e) {
    // Skip errors
  }
}

console.log('Fixing <number patterns in all .astro and .md files...');
walkDir(pagesDir);
console.log('Done!');
