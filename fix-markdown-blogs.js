#!/usr/bin/env node
/**
 * Fix blog posts to properly render markdown content
 * Transforms raw markdown in .astro files to use MarkdownContent component
 */

const fs = require('fs');
const path = require('path');

const blogDir = '/home/ubuntu/clawd/projects/ingheng/sites/en/src/pages/en/blog';

// Find all .astro files
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.astro'));

let fixedCount = 0;
let skippedCount = 0;

files.forEach(filename => {
  const filePath = path.join(blogDir, filename);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if already fixed (has MarkdownContent import)
  if (content.includes('MarkdownContent')) {
    console.log(`SKIP (already fixed): ${filename}`);
    skippedCount++;
    return;
  }
  
  // Check if file has raw markdown in the template section
  // Look for pattern: has "prose" div with raw markdown starting with #
  if (!content.includes('<div class="prose') || !content.match(/prose[^>]*>\s*\n\n#\s/)) {
    console.log(`SKIP (no raw markdown): ${filename}`);
    skippedCount++;
    return;
  }
  
  // Extract frontmatter and template parts
  const parts = content.split('---');
  if (parts.length < 3) {
    console.log(`SKIP (invalid structure): ${filename}`);
    skippedCount++;
    return;
  }
  
  const frontmatter = parts[1];
  const template = parts.slice(2).join('---'); // Rejoin in case there are --- in template
  
  // Find the markdown content between <div class="prose..."> and closing </div>
  const proseMatch = template.match(/<div class="prose prose-lg max-w-none">\s*\n([\s\S]*?)\n\s*<\/div>\s*\n\s*<div class="mt-12/);
  
  if (!proseMatch) {
    console.log(`SKIP (no prose match): ${filename}`);
    skippedCount++;
    return;
  }
  
  const markdownContent = proseMatch[1].trim();
  
  // Check if it looks like markdown (starts with # or has ## headers)
  if (!markdownContent.startsWith('#') && !markdownContent.includes('\n##')) {
    console.log(`SKIP (not markdown): ${filename}`);
    skippedCount++;
    return;
  }
  
  // Add MarkdownContent import to frontmatter
  const importLine = "import MarkdownContent from '../../../components/MarkdownContent.astro';";
  let newFrontmatter = frontmatter;
  
  // Add import after the last import statement
  const lastImportMatch = frontmatter.match(/import[^;]+;(?![\s\S]*import)/);
  if (lastImportMatch) {
    const insertPos = frontmatter.lastIndexOf(lastImportMatch[0]) + lastImportMatch[0].length;
    newFrontmatter = frontmatter.slice(0, insertPos) + '\n' + importLine + frontmatter.slice(insertPos);
  }
  
  // Escape backticks and ${} in markdown content for template literal
  const escapedMarkdown = markdownContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
  
  // Add markdownContent variable at end of frontmatter
  newFrontmatter = newFrontmatter.trimEnd() + `\n\nconst markdownContent = \`\n${escapedMarkdown}\n\`;\n`;
  
  // Replace prose div with MarkdownContent component
  const newTemplate = template.replace(
    /<div class="prose prose-lg max-w-none">\s*\n[\s\S]*?\n\s*<\/div>(\s*\n\s*<div class="mt-12)/,
    '<MarkdownContent content={markdownContent} />$1'
  );
  
  // Reconstruct file
  const newContent = '---' + newFrontmatter + '---' + newTemplate;
  
  fs.writeFileSync(filePath, newContent);
  console.log(`FIXED: ${filename}`);
  fixedCount++;
});

console.log(`\nTotal fixed: ${fixedCount} files`);
console.log(`Total skipped: ${skippedCount} files`);
