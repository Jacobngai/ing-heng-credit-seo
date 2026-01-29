const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blogs/en';
const files = fs.readdirSync(path.resolve(__dirname, blogDir)).filter(f => f.endsWith('.md'));

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(path.resolve(__dirname, blogDir), file);
  let content = fs.readFileSync(filePath, 'utf8');

  const originalContent = content;

  // Fix title and description fields - remove trailing backslashes and fix quotes
  content = content.replace(/^(title|description):\s*"([^"]*)\\"$/gm, '$1: "$2"');
  content = content.replace(/^(title|description):\s*"([^"]*)\\([^"\\])"$/gm, '$1: "$2$3"');

  // Remove all trailing backslashes before closing quotes in title/description
  content = content.replace(/^(title|description):\s*"(.*)\\*"$/gm, '$1: "$2"');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFixed ${fixedCount} files`);
