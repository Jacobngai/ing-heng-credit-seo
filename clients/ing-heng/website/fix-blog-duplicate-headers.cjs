const fs = require('fs');
const path = require('path');

const blogsDir = './src/content/blogs';
const locales = ['en', 'ms', 'zh'];

let fixedCount = 0;

function processDirectory(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.name.endsWith('.md')) {
      fixBlogFile(fullPath);
    }
  }
}

function fixBlogFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Split into frontmatter and body
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (!frontmatterMatch) return;

  const frontmatter = frontmatterMatch[0];
  let body = content.substring(frontmatter.length);

  const originalBody = body;

  // Remove the duplicate header by finding lines that match the pattern
  // Pattern: Category  Date      min read, then # Title, then description, then By Author # heading
  const lines = body.split('\n');
  const newLines = [];
  let skipped = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if this line is "Category  Date      min read"
    // Format: starts with capital letter, contains spaces, two spaces, month name, date, year, spaces, number, "min read"
    if (/^[A-Z][\w\s-]+  [A-Z][a-z]+ \d+, 20\d\d\s+\d+ min read ?$/.test(line)) {
      // Skip this line and the next few pattern lines
      skipped = 1; // Skip current line
      continue;
    }

    if (skipped > 0) {
      // We're in skip mode
      if (skipped === 1 && line.trim().startsWith('#')) {
        // Title line - skip it
        skipped++;
        continue;
      }
      if (skipped === 2 && line.trim() === '') {
        // Blank line - skip it
        skipped++;
        continue;
      }
      if (skipped === 3 && line.trim().length > 0 && !line.includes('By')) {
        // Description line - skip it
        skipped++;
        continue;
      }
      if (skipped >= 3 && line.includes('By') && line.includes('#')) {
        // "By Author # heading" line - skip it and exit skip mode
        skipped = 0;
        continue;
      }
    }

    newLines.push(line);
  }

  body = newLines.join('\n');

  if (body !== originalBody) {
    // Clean up leading newlines
    body = body.replace(/^\n\n/, '\n');
    fs.writeFileSync(filePath, frontmatter + body);
    fixedCount++;
    console.log(`Fixed: ${path.relative(process.cwd(), filePath)}`);
  }
}

console.log('Fixing duplicate headers in blog posts...\n');

for (const locale of locales) {
  const localeDir = path.join(blogsDir, locale);
  if (fs.existsSync(localeDir)) {
    processDirectory(localeDir);
  }
}

console.log(`\nDone! Fixed ${fixedCount} blog posts.`);
