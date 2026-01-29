// Post-processing script to fix markdown escaping issues
const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'clients', 'ing-heng', 'website restore', 'website', 'src', 'content', 'blogs', 'en');
const files = fs.readdirSync(destDir).filter(f => f.endsWith('.md'));

console.log('=== Post-Processing Markdown Files ===');
console.log(`Found ${files.length} markdown files`);
console.log('');

let fixedCount = 0;

for (const filename of files) {
  const filePath = path.join(destDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix truncated descriptions (can\'t -> can't)
  const originalContent = content;
  content = content.replace(/description: "([^"]*?)\\+"/g, (match, desc) => {
    const fixed = desc.replace(/\\+/g, "'");
    return `description: "${fixed}"`;
  });

  // Fix title escaping issues too
  content = content.replace(/title: "([^"]*?)\\+"/g, (match, title) => {
    const fixed = title.replace(/\\+"/g, '"').replace(/\\+/g, "'");
    return `title: "${fixed}"`;
  });

  // Clean up excessive blank lines (more than 2 consecutive)
  content = content.replace(/\n{4,}/g, '\n\n\n');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filename}`);
    modified = true;
    fixedCount++;
  }
}

console.log('');
console.log(`=== Summary ===`);
console.log(`Fixed ${fixedCount} files`);
console.log(`Total ${files.length} files processed`);
