/**
 * Fix ZH site import paths
 * Changes ../../../ to ../../ for imports
 */

const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'zh', 'src', 'pages', 'zh');

function fixFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Replace ../../../ with ../../ for imports
  const newContent = content.replace(/\.\.\/\.\.\//g, '../../');
  
  if (content !== newContent) {
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
      }
    }
  }
  
  return fixed;
}

console.log('Fixing ZH site import paths...');
const fixedCount = scanDir(pagesDir);
console.log(`Fixed ${fixedCount} files`);
