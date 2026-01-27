/**
 * Script to remove/replace remaining 24/7 references from all blog posts
 * Run with: node remove-24-7-v2.js
 */

const { readFileSync, writeFileSync, readdirSync, statSync } = require('fs');
const { join, relative } = require('path');

// Recursively get all .astro files
function getAstroFiles(dir, fileList = []) {
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('_')) {
      getAstroFiles(filePath, fileList);
    } else if (file.endsWith('.astro')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Additional replacements for edge cases
const replacements = [
  // "24 hours before/after" - keep these, they're time references not support claims
  // Only remove if associated with support/availability

  // File paths and image names - don't change these (they're technical references)
  // These are OK to keep

  // "24/7" in contact info - change to business hours
  [/:\s*"?\s*\d+\s*-?\s*24\/7/g, ': "Business hours support"'],
  [/\(\s*\d+\s*-?\s*24\/7/g, '(Business hours support"'],

  // Host/Manager contact info
  [/Host\/Manager:.*24\/7/g, 'Host/Manager: Available during business hours'],
  [/24\/7\)/g, 'Available during business hours)'],

  // File name in image path (technical, OK to keep as-is)

  // "24 hours" in context of advance notice - this is OK, keep it

  // Any remaining "24/7" not caught
  [/24\/7/g, 'responsive'],

  // Any remaining "24-7"
  [/24-7/g, 'responsive'],

  // Round-the-clock (if any remaining)
  [/round-?-the-?-clock/gi, 'responsive'],

  // Always available (if any remaining)
  [/always\s+available/gi, 'available when you need us'],

  // "3 AM" that might have been missed
  [/3\s+AM/gi, 'late-night'],
  [/3\s+am/gi, 'late-night'],
];

// Statistics
let totalFiles = 0;
let totalReplacements = 0;
const changedFiles = [];

// Process all files
function processFiles() {
  const blogDir = join(process.cwd(), 'website/src/pages/en/blog');
  const files = getAstroFiles(blogDir);

  console.log(`Found ${files.length} files to process\n`);

  for (const file of files) {
    try {
      let content = readFileSync(file, 'utf-8');
      const originalContent = content;
      let fileReplacements = 0;

      // Apply all replacements
      for (const [pattern, replacement] of replacements) {
        const matches = content.match(pattern);
        if (matches) {
          fileReplacements += matches.length;
          content = content.replace(pattern, replacement);
        }
      }

      // Write back if changes were made
      if (content !== originalContent) {
        writeFileSync(file, content, 'utf-8');
        totalFiles++;
        totalReplacements += fileReplacements;
        const relativePath = relative(process.cwd(), file);
        changedFiles.push({ file: relativePath, replacements: fileReplacements });
        console.log(`✓ ${relativePath} - ${fileReplacements} replacements`);
      }
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Files updated: ${totalFiles}`);
  console.log(`Total replacements: ${totalReplacements}\n`);

  // List all changed files
  if (changedFiles.length > 0) {
    console.log('Changed files:');
    changedFiles.forEach(({ file, replacements }) => {
      console.log(`  - ${file} (${replacements} changes)`);
    });
  }

  // Final check for remaining patterns
  console.log(`\n=== Final Verification ===`);
  let remainingCount = 0;
  for (const file of files) {
    try {
      const content = readFileSync(file, 'utf-8');
      const matches = content.match(/24\/7|24-7|round-?-the-?-clock|always\s+available/gi);
      if (matches) {
        remainingCount += matches.length;
        const relativePath = relative(process.cwd(), file);
        console.log(`  ${relativePath}: ${matches.length} remaining`);
      }
    } catch (error) {
      // Skip errors
    }
  }
  console.log(`\nTotal remaining occurrences: ${remainingCount}`);
}

processFiles();
