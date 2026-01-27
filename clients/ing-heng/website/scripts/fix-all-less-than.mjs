import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const pagesDir = join(process.cwd(), 'src', 'pages');

function fixFile(filePath) {
  try {
    let content = readFileSync(filePath, 'utf-8');
    let modified = false;

    // Fix all <number patterns regardless of what follows (spaces, letters, etc)
    // But skip HTML tags like <h3>, <div>, <li>, <p>, <ul>, <ol>, <td>, <th>, <tr>, <table>
    // Also skip Astro components like <BaseLayout>, <Header>, etc.

    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
      // Skip lines that are pure HTML tags or component tags
      if (line.trim().match(/^<(\/?[a-z]+|!DOCTYPE|--|\?xml)/i)) {
        return line;
      }

      // Skip lines that look like JSX expressions with { }
      if (line.includes('{') && line.includes('}') && line.includes('<')) {
        return line;
      }

      // Fix < followed by digit OR < followed by space and then digit
      // Pattern: "< 7 days" or "<7 days" -> "&lt; 7 days" or "&lt;7 days"
      // This handles cases where there might be a space after <
      let fixedLine = line.replace(/(?<![a-zA-Z!@#$%^&*()_+=|\\[\]{};'",.\/?])\s*<(\s*\d+)/g, '&lt; $1');

      // Also fix the case where < is directly followed by digit (no space)
      fixedLine = fixedLine.replace(/(?<![a-zA-Z0-9!@#$%^&*()_+=|\\[\]{};'",.\/?])<(\d+)/g, '&lt;$1');

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
    console.error(`Error processing ${filePath}:`, e.message);
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

console.log('Fixing all <number patterns including Malay/Chinese...');
walkDir(pagesDir);
console.log('Done!');
