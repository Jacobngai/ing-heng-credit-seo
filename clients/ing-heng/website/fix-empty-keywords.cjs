const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blogs/en';
const files = fs.readdirSync(path.resolve(__dirname, blogDir)).filter(f => f.endsWith('.md'));

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(path.resolve(__dirname, blogDir), file);
  let content = fs.readFileSync(filePath, 'utf8');

  const originalContent = content;

  // Fix empty/null keywords and tags
  content = content.replace(/^keywords:$/gm, 'keywords:\n  - equipment financing');
  content = content.replace(/^tags:$/gm, 'tags:\n  - Equipment Financing');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log('Fixed: ' + file);
  }
});

console.log('\nFixed ' + fixedCount + ' files');
