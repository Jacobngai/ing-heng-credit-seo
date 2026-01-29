// Better post-processing script to fix markdown escaping issues
const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'clients', 'ing-heng', 'website restore', 'website', 'src', 'content', 'blogs', 'en');
const files = fs.readdirSync(destDir).filter(f => f.endsWith('.md'));

console.log('=== Post-Processing Markdown Files - V2 ===');
console.log(`Found ${files.length} markdown files`);
console.log('');

let fixedCount = 0;

// Specific fixes for known problematic descriptions
const descriptionFixes = {
  '24-hour-forklift-fast-approval.md': "Warehouse operations can't wait 3 weeks for bank approval. Learn how 24-hour forklift financing deploys equipment immediately when operations depend on fast turnaround.",
  'cold-chain-lorry-financing-malaysia.md': "Cold chain logistics requires refrigerated transport. Financing cold chain lorries in Malaysia involves understanding GPS-monitored temperature compliance, specific equipment requirements, and financing options for perishable goods transport.",
  'ecommerce-forklift-demand-malaysia-2025.md': "E-commerce growth is driving unprecedented forklift demand in Malaysia. Learn how 2025's online shopping surge is creating warehouse equipment financing opportunities and why suppliers can't keep up with demand.",
  '48-hour-excavator-fast-approval-malaysia.md': "You won the tender. Project starts Monday. It's Friday. Traditional banks take 2-4 weeks. Learn how 48-hour excavator financing lets you deploy equipment immediately and never lose a contract due to delays."
};

for (const filename of files) {
  const filePath = path.join(destDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Apply known fixes
  if (descriptionFixes[filename]) {
    const newDesc = descriptionFixes[filename];
    content = content.replace(/description: "([^"]*)"/, `description: "${newDesc}"`);
    modified = true;
  }

  // General fix for truncated descriptions ending with single word
  content = content.replace(/description: "([^"]{0,30})"/g, (match, desc) => {
    // If description looks truncated (very short), try to recover
    if (desc.length < 30 && desc.endsWith('"') === false) {
      console.log(`  Warning: Truncated description in ${filename}: "${desc}"`);
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filename}`);
    fixedCount++;
  }
}

console.log('');
console.log(`=== Summary ===`);
console.log(`Fixed ${fixedCount} files`);
console.log(`Total ${files.length} files processed`);

// Also check index.md which shouldn't be there as it's a listing page
const indexPath = path.join(destDir, 'index.md');
if (fs.existsSync(indexPath)) {
  console.log('');
  console.log('Note: index.md exists but is a blog listing page, not a blog post.');
  console.log('Consider removing or renaming it to avoid conflicts.');
}
