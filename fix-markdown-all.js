#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function fixBlogPosts(blogDir, langCode) {
  console.log(`\n=== Fixing ${langCode.toUpperCase()} blog posts ===`);
  
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.astro'));
  let fixedCount = 0;

  files.forEach(filename => {
    const filePath = path.join(blogDir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('MarkdownContent')) return;
    if (!content.includes('<div class="prose') || !content.match(/prose[^>]*>\s*\n\n#\s/)) return;
    
    const parts = content.split('---');
    if (parts.length < 3) return;
    
    const frontmatter = parts[1];
    const template = parts.slice(2).join('---');
    
    const proseMatch = template.match(/<div class="prose prose-lg max-w-none">\s*\n([\s\S]*?)\n\s*<\/div>\s*\n\s*<div class="mt-12/);
    if (!proseMatch) return;
    
    const markdownContent = proseMatch[1].trim();
    if (!markdownContent.startsWith('#') && !markdownContent.includes('\n##')) return;
    
    const importLine = "import MarkdownContent from '../../../components/MarkdownContent.astro';";
    let newFrontmatter = frontmatter;
    
    const lastImportMatch = frontmatter.match(/import[^;]+;(?![\s\S]*import)/);
    if (lastImportMatch) {
      const insertPos = frontmatter.lastIndexOf(lastImportMatch[0]) + lastImportMatch[0].length;
      newFrontmatter = frontmatter.slice(0, insertPos) + '\n' + importLine + frontmatter.slice(insertPos);
    }
    
    const escapedMarkdown = markdownContent
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$\{/g, '\\${');
    
    newFrontmatter = newFrontmatter.trimEnd() + `\n\nconst markdownContent = \`\n${escapedMarkdown}\n\`;\n`;
    
    const newTemplate = template.replace(
      /<div class="prose prose-lg max-w-none">\s*\n[\s\S]*?\n\s*<\/div>(\s*\n\s*<div class="mt-12)/,
      '<MarkdownContent content={markdownContent} />$1'
    );
    
    const newContent = '---' + newFrontmatter + '---' + newTemplate;
    fs.writeFileSync(filePath, newContent);
    console.log(`FIXED: ${filename}`);
    fixedCount++;
  });

  console.log(`Fixed: ${fixedCount} files`);
  return fixedCount;
}

// Fix MS and ZH
fixBlogPosts('/home/ubuntu/clawd/projects/ingheng/sites/ms/src/pages/ms/blog', 'ms');
fixBlogPosts('/home/ubuntu/clawd/projects/ingheng/sites/zh/src/pages/zh/blog', 'zh');
