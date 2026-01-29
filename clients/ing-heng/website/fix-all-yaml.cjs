const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blogs/en';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md') && !f.startsWith('_'));

let fixedCount = 0;
const errorFiles = [];

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const originalContent = content;

  try {
    // Extract frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) {
      errorFiles.push(`${file}: No frontmatter found`);
      return;
    }

    let frontmatter = frontmatterMatch[1];
    let rest = content.substring(frontmatterMatch[0].length);

    // Fix multi-line values without proper quotes
    // Replace description that spans multiple lines
    frontmatter = frontmatter.replace(/^description:\s*(.+)$/m, (match, desc) => {
      // If description has newlines or special chars, quote it
      if (desc.includes('"') || desc.includes('\\') || desc.includes('\n') || desc.includes(':')) {
        // Remove surrounding quotes if present
        desc = desc.replace(/^["']|["']$/g, '');
        // Escape any internal quotes
        desc = desc.replace(/"/g, '\\"');
        return `description: "${desc}"`;
      }
      return match;
    });

    // Fix title - ensure proper quoting
    frontmatter = frontmatter.replace(/^title:\s*(.+)$/m, (match, title) => {
      // Remove surrounding quotes if present
      title = title.replace(/^["']|["']$/g, '');
      // Escape any internal quotes and backslashes
      title = title.replace(/\\/g, '').replace(/"/g, '\\"');
      return `title: "${title}"`;
    });

    // Fix tags array - ensure proper YAML format
    frontmatter = frontmatter.replace(/tags:\s*\n((?:[ \t]*-[^\n]+\n?)*)/g, (match, tagsContent) => {
      const lines = tagsContent.split('\n').filter(l => l.trim());
      const formattedTags = lines.map(line => {
        let tag = line.replace(/^-\s*/, '').trim();
        // Remove quotes if present and re-add them properly
        tag = tag.replace(/^["']|["']$/g, '');
        return `  - ${tag}`;
      }).join('\n');
      return `tags:\n${formattedTags}`;
    });

    // Fix keywords array - ensure proper YAML format
    frontmatter = frontmatter.replace(/keywords:\s*\n((?:[ \t]*-[^\n]+\n?)*)/g, (match, keywordsContent) => {
      const lines = keywordsContent.split('\n').filter(l => l.trim());
      const formattedKeywords = lines.map(line => {
        let keyword = line.replace(/^-\s*/, '').trim();
        // Remove quotes if present
        keyword = keyword.replace(/^["']|["']$/g, '');
        return `  - ${keyword}`;
      }).join('\n');
      return `keywords:\n${formattedKeywords}`;
    });

    // Reassemble content
    content = `---\n${frontmatter}\n---${rest}`;

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      fixedCount++;
      console.log(`Fixed: ${file}`);
    }
  } catch (e) {
    errorFiles.push(`${file}: ${e.message}`);
  }
});

console.log(`\nFixed ${fixedCount} files`);
if (errorFiles.length > 0) {
  console.log(`\nErrors in ${errorFiles.length} files:`);
  errorFiles.forEach(e => console.log(`  - ${e}`));
}
