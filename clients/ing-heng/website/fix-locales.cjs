const fs = require('fs');
const path = require('path');

const blogBaseDir = 'src/content/blogs';

// Fix locales for all blog posts based on their directory
const locales = ['en', 'ms', 'zh'];
let totalFixed = 0;

locales.forEach(locale => {
  const blogDir = path.resolve(__dirname, blogBaseDir, locale);

  if (!fs.existsSync(blogDir)) {
    console.log(`Directory does not exist: ${blogDir}`);
    return;
  }

  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  let fixedInDir = 0;

  files.forEach(file => {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Fix locale: en/locale: ms/locale: zh to match the directory
    // This regex matches locale: followed by any of en/ms/zh
    content = content.replace(/^locale:\s*(en|ms|zh)$/gm, `locale: ${locale}`);

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      fixedInDir++;
      console.log(`Fixed: ${locale}/${file}`);
    }
  });

  console.log(`Fixed ${fixedInDir} files in ${locale}/ directory`);
  totalFixed += fixedInDir;
});

console.log(`\nTotal fixed: ${totalFixed} files`);
