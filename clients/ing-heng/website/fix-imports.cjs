const fs = require('fs');
const path = require('path');

function fixDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      fixDir(fullPath);
    } else if (file.name.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // Calculate depth from src/pages to current file
      const relativePath = path.relative('src/pages', fullPath);
      const depth = relativePath.split(path.sep).length - 1; // -1 for filename

      // Generate correct number of ../ (depth + 2 to get from file to src)
      const goUp = '../'.repeat(depth + 2);

      // Fix imports that use wrong number of ../
      // Match any import with ../../ (2 or more) and replace with correct count
      content = content.replace(/from ['"][^'"]*['"]/g, (match) => {
        const importPath = match.match(/from ['"](.+?)['"]/)[1];

        // Only fix layouts, components, utils imports that start with ../
        if ((importPath.includes('layouts') || importPath.includes('components') || importPath.includes('utils')) && importPath.startsWith('../')) {
          // Extract the final part (e.g., layouts/BaseLayout.astro)
          const parts = importPath.split('/');
          const finalPart = parts.slice(-2).join('/');

          // Rebuild with correct number of ../
          return `from '${goUp}${finalPart}'`;
        }
        return match;
      });

      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed:', fullPath, '(depth:', depth, ')');
      }
    }
  }
}

fixDir('src/pages');
console.log('Done!');
