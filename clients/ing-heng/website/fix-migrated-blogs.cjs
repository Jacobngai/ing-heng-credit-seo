const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blogs/en';
const files = fs.readdirSync(path.resolve(__dirname, blogDir)).filter(f => f.endsWith('.md'));

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(path.resolve(__dirname, blogDir), file);
  let content = fs.readFileSync(filePath, 'utf8');

  const originalContent = content;

  // Fix truncated descriptions with backslash
  content = content.replace(/^description:\s*"([^"]*)\\"$/gm, (match, desc) => {
    // Remove trailing backslash and close quote properly
    return `description: "${desc}"`;
  });

  // Fix other YAML issues - ensure quotes are properly escaped
  content = content.replace(/^description:\s*"(.*)"$/gm, (match, desc) => {
    // Remove any backslashes that aren't escape sequences
    desc = desc.replace(/\\([^"\\])/g, '$1');
    // Escape quotes properly
    desc = desc.replace(/"/g, '\\"');
    return `description: "${desc}"`;
  });

  // Fix title similarly
  content = content.replace(/^title:\s*"(.*)"$/gm, (match, title) => {
    title = title.replace(/\\([^"\\])/g, '$1');
    title = title.replace(/"/g, '\\"');
    return `title: "${title}"`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFixed ${fixedCount} files`);
