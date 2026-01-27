const fs = require('fs');
const path = require('path');

const zhPagesDir = path.join(__dirname, 'zh', 'src', 'pages', 'zh');

function fixFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const oldContent = content;
  
  // Replace double-quote patterns with single-quote patterns
  let newContent = content
    .replace(/from "\.\.\/\.\.\//g, "from '../../")
    .replace(/from "\.\.\/\.\.\.\//g, "from '../../")
    .replace(/from "\.\.\/layouts/g, "from '../../layouts")
    .replace(/from "\.\.\/components/g, "from '../../components")
    .replace(/from "\.\.\/utils/g, "from '../../utils")
    .replace(/from "\.\.\/i18n/g, "from '../../i18n");
  
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

console.log('Scanning and fixing ZH site imports...');
const total = scanDir(zhPagesDir);
console.log('Total files fixed:', total);
