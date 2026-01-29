const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blogs/en';
const files = fs.readdirSync(path.resolve(__dirname, blogDir)).filter(f => f.endsWith('.md'));

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(path.resolve(__dirname, blogDir), file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Fix all unquoted years in the entire file
  // Pattern matches: newline + two spaces + dash + space + 4-digit year + newline
  content = content.replace(/\n  - (\d{4})\n/g, '\n  - "$1"\n');

  // Also fix year at the end of keywords array (before --- or ogImage)
  content = content.replace(/\n  - (\d{4})\n---/g, '\n  - "$1"\n---');
  content = content.replace(/\n  - (\d{4})\nogImage:/g, '\n  - "$1"\nogImage:');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log('Fixed: ' + file);
  }
});

console.log('\nFixed ' + fixedCount + ' files with unquoted year keywords');
