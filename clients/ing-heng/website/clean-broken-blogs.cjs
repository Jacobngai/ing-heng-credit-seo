const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blogs/en';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

let deletedCount = 0;
const threshold = 10000; // Files smaller than 10KB are likely broken

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  const stats = fs.statSync(filePath);

  // Check if file was modified today and is suspiciously small
  const fileDate = stats.mtime;
  const today = new Date();
  const isToday = fileDate.toDateString() === today.toDateString();

  if (isToday && stats.size < threshold) {
    fs.unlinkSync(filePath);
    deletedCount++;
    console.log(`Deleted: ${file} (${stats.size} bytes)`);
  }
});

console.log(`\nDeleted ${deletedCount} broken files`);
