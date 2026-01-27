const fs = require('fs');

const fp = 'src/pages/en/blog/emergency-equipment-before-cny-dont-wait-2026.astro';
let content = fs.readFileSync(fp, 'utf8');

// Fix the title with proper escaping
content = content.replace(
  /title: 'Emergency Equipment Before CNY - Don't Wait 2026'/,
  "title: 'Emergency Equipment Before CNY - Don\'t Wait 2026'"
);

fs.writeFileSync(fp, content, 'utf8');
console.log('Fixed apostrophe issue');
