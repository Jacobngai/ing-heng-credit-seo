/**
 * Script to remove/replace 24/7 references from all blog posts
 * Run with: node remove-24-7.js
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

// Replacements to make (order matters - more specific patterns first)
const replacements = [
  // Specific phrases first
  [/24\/7\s+guest\s+communication/gi, 'responsive guest communication'],
  [/24-7\s+guest\s+communication/gi, 'responsive guest communication'],
  [/24\s+hour\s+guest\s+communication/gi, 'responsive guest communication'],

  [/24\/7\s+guest\s+support/gi, 'responsive guest support'],
  [/24-7\s+guest\s+support/gi, 'responsive guest support'],

  [/24\/7\s+availability/gi, 'extended hours support'],
  [/24-7\s+availability/gi, 'extended hours support'],

  [/24\/7\s+response/gi, 'quick response during business hours'],
  [/24-7\s+response/gi, 'quick response during business hours'],

  // "available 24/7" patterns
  [/available\s+24\/7/gi, 'available during business hours'],
  [/available\s+24-7/gi, 'available during business hours'],

  // General "24/7 support"
  [/24\/7\s+support/gi, 'responsive support'],
  [/24-7\s+support/gi, 'responsive support'],
  [/24\s+hour\s+support/gi, 'responsive support'],

  // "24/7 Communication" heading (case sensitive for headings)
  [/h3>24\/7\s+Communication</g, 'h3>Responsive Communication<'],
  [/h3>24-7\s+Communication</g, 'h3>Responsive Communication<'],
  [/24\/7\s+Communication/g, 'Responsive Communication'],
  [/24-7\s+Communication/g, 'Responsive Communication'],

  // Round-the-clock
  [/round-?-the-?-clock/gi, 'responsive'],

  // Always available
  [/always\s+available/gi, 'available when you need us'],

  // 3 AM calls references
  [/3\s+AM\s+calls/gi, 'late-night emergencies'],
  [/3\s+am\s+calls/gi, 'late-night emergencies'],
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
      if (fileReplacements > 0) {
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
}

processFiles();
