const fs = require('fs');
const path = require('path');

const zhPagesDir = path.join(__dirname, 'zh', 'src', 'pages', 'zh');

function fixFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const oldContent = content;
  
  // ZH site uses five dots ../../../ but should use four dots ../../  
  // From src/pages/zh/... to src/layouts/... is 3 levels up = ../../
  let newContent = content
    // Patterns to fix
    .replace(/from "\.\.\/\.\.\.\//g, "from '../../")
    .replace(/from "\.\.\/\.\.\.\.\.\//g, "from '../../")
    .replace(/from "\.\.\/\.\.\.\//g, "from '../../");
  
  if (newContent !== oldContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    return true;
  }
  return false;
}

function scanDir(dir) {
  const items = fs.readdirSync(dir);
  let fixed = 0;
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixed += scanDir(fullPath);
    } else if (item.endsWith('.astro')) {
      if (fixFile(fullPath)) {
        fixed++;
        console.log('Fixed:', item);
      }
    }
  }
  
  return fixed;
}

console.log('Fixing ZH site imports (five dots to four dots)...');
const total = scanDir(zhPagesDir);
console.log('Total files fixed:', total);
