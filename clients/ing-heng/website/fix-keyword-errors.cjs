const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blogs/en';
const files = fs.readdirSync(path.resolve(__dirname, blogDir)).filter(f => f.endsWith('.md'));

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(path.resolve(__dirname, blogDir), file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Fix keywords that are numbers instead of strings
  // Find lines like "- 2025" and "- 2024" in keywords array
  content = content.replace(/(^keywords:.*?\n(?:  -[^\n]*\n)*)/gm, (match) => {
    // Fix years that are numbers
    let fixed = match.replace(/\n  - (\d{4})\n/g, '\n  - "$1"\n');
    return fixed;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log('Fixed: ' + file);
  }
});

console.log('\nFixed ' + fixedCount + ' files');
