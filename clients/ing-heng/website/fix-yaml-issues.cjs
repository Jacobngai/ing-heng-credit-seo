const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blogs/en';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const originalContent = content;

  // Fix trailing backslashes in quoted strings
  content = content.replace(/^(title|description):\s*"([^"]*)\\"/gm, '$1: "$2"');
  content = content.replace(/^(title|description):\s*'([^']*)\\'/gm, '$1: \'$2\'');

  // Fix empty publishDate, keywords, ogImage with defaults
  if (/^publishDate:\s*$/m.test(content)) {
    content = content.replace(/^publishDate:\s*$/m, 'publishDate: 2025-01-23');
  }

  if (/^keywords:\s*$/m.test(content)) {
    content = content.replace(/^keywords:\s*$/m, 'keywords:\n  - equipment financing');
  }

  if (/^ogImage:\s*$/m.test(content)) {
    content = content.replace(/^ogImage:\s*$/m, 'ogImage: /images/blog/default.jpg');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFixed ${fixedCount} files`);
