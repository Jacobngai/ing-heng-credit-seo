const fs = require('fs');
const path = require('path');

function scanAndFix(dir) {
  const items = fs.readdirSync(dir);
  let fixed = 0;
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixed += scanAndFix(fullPath);
    } else if (item.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      // Replace both with ../../
      const oldContent = content;
      content = content.replace(/from '\.\.\/\.\.\//g, "from '../../");
      
      if (content !== oldContent) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        fixed++;
      }
    }
  }
  
  return fixed;
}

const zhPagesDir = path.join(__dirname, 'zh', 'src', 'pages', 'zh');
console.log('Fixing ZH site imports...');
const total = scanAndFix(zhPagesDir);
console.log(`Fixed ${total} files`);
