const fs = require('fs');
const path = require('path');

const dirs = ['src/pages/en/blog', 'src/pages/ms/blog', 'src/pages/zh/blog'];
let fixedCount = 0;

dirs.forEach(dir => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.astro'));
  
  files.forEach(file => {
    const fp = path.join(dir, file);
    let content = fs.readFileSync(fp, 'utf8');
    let modified = false;
    
    // Fix apostrophes in title property within const post = {...}
    // Replace Don't with Don\'t within the template literal
    content = content.replace(/title: '([^']*?)'/g, (match, title) => {
      if (title.includes("'") && !title.includes("\'")) {
        modified = true;
        return "title: '" + title.replace(/'/g, "\'") + "'";
      }
      return match;
    });
    
    // Fix apostrophes in excerpt property
    content = content.replace(/excerpt: '([^']*?)'/g, (match, excerpt) => {
      if (excerpt.includes("'") && !excerpt.includes("\'")) {
        modified = true;
        return "excerpt: '" + excerpt.replace(/'/g, "\'") + "'";
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(fp, content, 'utf8');
      fixedCount++;
      console.log('Fixed:', file);
    }
  });
});

console.log('\nFixed', fixedCount, 'files with apostrophe issues.');
