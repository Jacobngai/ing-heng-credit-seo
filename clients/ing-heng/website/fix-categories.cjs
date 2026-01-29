const fs = require('fs');
const path = require('path');

// Category mapping from old to new
const categoryMap = {
  'Business Growth': 'Business Financing',
  'Forklift Financing': 'Logistics Equipment',
  'Warehouse Equipment': 'Logistics Equipment',
  'Excavator Financing': 'Construction Equipment',
  'Lorry Financing': 'Logistics Equipment',
  'Prime Mover Financing': 'Logistics Equipment',
  'Equipment Financing': 'Equipment Financing',
  'Construction': 'Construction Equipment',
  'Logistics': 'Logistics Equipment',
  'Business Tips': 'Business Tips',
  'Financing Guides': 'Financing Guides',
  'Industry News': 'Industry News',
  'Case Studies': 'Case Studies',
  'Equipment': 'Equipment Financing',
  'SME Financing': 'Business Financing',
};

const blogDir = 'src/content/blogs/en';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

let fixedCount = 0;
let skippedCount = 0;

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract current category
  const categoryMatch = content.match(/^category:\s*(.+)$/m);
  if (categoryMatch) {
    let currentCategory = categoryMatch[1].trim();
    // Remove quotes if present
    currentCategory = currentCategory.replace(/^['"]|['"]$/g, '');

    // Map to new category
    const newCategory = categoryMap[currentCategory] || 'Equipment Financing';

    if (currentCategory !== newCategory) {
      // Replace category
      content = content.replace(
        /^category:\s*.+$/m,
        `category: ${newCategory}`
      );
      fs.writeFileSync(filePath, content);
      fixedCount++;
      console.log(`${file}: '${currentCategory}' -> '${newCategory}'`);
    } else {
      skippedCount++;
    }
  }
});

console.log(`\nFixed: ${fixedCount} files`);
console.log(`Skipped: ${skippedCount} files`);
