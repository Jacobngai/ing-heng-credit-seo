const fs = require('fs');
const path = require('path');

const testFile = path.join(__dirname, 'zh', 'src', 'pages', 'zh', 'blog', '0首付叉车-2026无需定金.astro');

const content = fs.readFileSync(testFile, 'utf-8');

console.log('Content substring:');
console.log(content.substring(0, 100));

console.log('\n--- Direct string check ---');
console.log('Contains from "../":', content.includes('from "../'));
console.log('Contains from "../../:', content.includes('from "../../'));
console.log('Contains from "../../../:', content.includes('from "../../../'));

console.log('\n--- Regex tests ---');
console.log('Test 1 match:', /from "\.\.\.\/\.\.\.\//.exec(content));
console.log('Test 2 match:', /from \"\.\.\.\.\.\.\//.exec(content));

// Try replacement
console.log('\n--- Test replacement ---');
const testResult = content.replace(/from "\.\.\.\/\.\.\.\//g, 'from "../../');
console.log('Replacement changed?', testResult !== content);
if (testResult !== content) {
  console.log('New first 100 chars:', testResult.substring(0, 100));
}
