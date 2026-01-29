const fs = require('fs');
const path = require('path');

const dirs = ['src/pages/en/blog', 'src/pages/ms/blog', 'src/pages/zh/blog'];
let fixedCount = 0;

dirs.forEach(dir => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.astro'));
  
  files.forEach(file => {
    const fp = path.join(dir, file);
    let content = fs.readFileSync(fp, 'utf8');
    const original = content;
    
    // Find and fix title lines with unescaped apostrophes
    content = content.replace(/title: '([^']*?)'(?![,])/g, (match, title) => {
      if (title.includes("'") && !title.includes("\'")) {
        const escaped = title.replace(/'/g, "\'");
        return "title: '" + escaped + "'";
      }
      return match;
    });
    
    // Same for excerpt
    content = content.replace(/excerpt: '([^']*?)'(?![,])/g, (match, excerpt) => {
      if (excerpt.includes("'") && !excerpt.includes("\'")) {
        const escaped = excerpt.replace(/'/g, "\'");
        return "excerpt: '" + escaped + "'";
      }
      return match;
    });
    
    if (content !== original) {
      fs.writeFileSync(fp, content, 'utf8');
      fixedCount++;
      console.log('Fixed:', fp);
    }
  });
});

console.log('\nTotal fixed:', fixedCount);
