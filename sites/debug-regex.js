const fs = require('fs');
const path = require('path');

const testFile = path.join(__dirname, 'zh', 'src', 'pages', 'zh', 'blog', '0首付叉车-2026无需定金.astro');

const content = fs.readFileSync(testFile, 'utf-8');

console.log('Content:');
console.log(content.substring(0, 200));

console.log('\n--- Tests ---');
console.log('Has three dots with slash:', /\.\.\/\.\.\//g.exec(content));
console.log('Has three dots:', /\.\.\.\./g.exec(content));

console.log('\nTrying patterns:');
const patterns = [
  /from '\.\.\/\.\.\//g,
  /from '\.\.\/\.\.\.\//g,
  /from \.\.\.\//g
];

for (const pattern of patterns) {
  console.log(`Pattern: ${pattern.toString()}`);
  console.log(`Match: ${pattern.exec(content)}`);
}
