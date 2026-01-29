const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blogs/en';
const files = fs.readdirSync(path.resolve(__dirname, blogDir)).filter(f => f.endsWith('.md'));

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(path.resolve(__dirname, blogDir), file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Fix YAML keywords with colon syntax - converts "keyword:" to plain "keyword"
  // This handles cases like:
  //   - malaysia:
  //     - analysis
  // which should be:
  //   - malaysia
  //   - analysis

  // Fix 1: Remove trailing colons from keyword lines
  content = content.replace(/^(\s+)- ([^:\n]+):\s*$/gm, '$1- $2');

  // Fix 2: Fix keywords that have sub-objects (malaysia: - analysis)
  content = content.replace(/^(\s+)- ([^:\n]+):\s*\n\s+-/gm, '$1- $2\n$1-');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log('Fixed: ' + file);
  }
});

console.log('\nFixed ' + fixedCount + ' files');
