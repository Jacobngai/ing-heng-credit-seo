const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blogs/en';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

let deletedCount = 0;
const today = new Date().toDateString();

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  const stats = fs.statSync(filePath);
  const fileDate = stats.mtime.toDateString();

  // Delete ALL files modified today
  if (fileDate === today) {
    fs.unlinkSync(filePath);
    deletedCount++;
    console.log(`Deleted: ${file}`);
  }
});

console.log(`\nDeleted ${deletedCount} files modified today`);
