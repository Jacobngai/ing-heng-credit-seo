/**
 * Fix Language Field in Blog Posts
 *
 * This script fixes the language field in all blog .astro files
 * to match their actual content language.
 */

const fs = require('fs');
const path = require('path');

// Base directory
const baseDir = path.join(__dirname, 'website', 'src', 'pages');

// Language mapping
const languages = {
  'en': 'en',
  'ms': 'ms',
  'zh': 'zh'
};

// Statistics
const stats = {
  en: { total: 0, fixed: 0 },
  ms: { total: 0, fixed: 0 },
  zh: { total: 0, fixed: 0 }
};

function fixLanguageFile(filePath, targetLang) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Check if file needs fixing
    const languageRegex = /const language = "([^"]+)";/;
    const match = content.match(languageRegex);

    if (match) {
      const currentLang = match[1];
      if (currentLang !== targetLang) {
        // Replace the language field
        content = content.replace(languageRegex, `const language = "${targetLang}";`);
        fs.writeFileSync(filePath, content, 'utf8');
        return { fixed: true, from: currentLang, to: targetLang };
      }
    }

    return { fixed: false };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return { fixed: false, error: error.message };
  }
}

function processBlogDirectory(lang) {
  const blogDir = path.join(baseDir, lang, 'blog');
  const targetLang = languages[lang];

  if (!fs.existsSync(blogDir)) {
    console.log(`Directory not found: ${blogDir}`);
    return;
  }

  // Get all blog subdirectories
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  const blogDirs = entries.filter(entry => entry.isDirectory()).map(entry => entry.name);

  stats[lang].total = blogDirs.length;

  console.log(`\nProcessing ${lang.toUpperCase()} blog posts...`);
  console.log(`Found ${blogDirs.length} blog posts`);

  blogDirs.forEach((blogDirName, index) => {
    const astroPath = path.join(blogDir, blogDirName, 'index.astro');

    if (fs.existsSync(astroPath)) {
      const result = fixLanguageFile(astroPath, targetLang);

      if (result.fixed) {
        stats[lang].fixed++;
        console.log(`  [${index + 1}/${blogDirs.length}] Fixed: ${blogDirName} (${result.from} → ${result.to})`);
      } else if (result.error) {
        console.log(`  [${index + 1}/${blogDirs.length}] ERROR: ${blogDirName} - ${result.error}`);
      } else {
        console.log(`  [${index + 1}/${blogDirs.length}] OK: ${blogDirName} (already correct)`);
      }
    } else {
      console.log(`  [${index + 1}/${blogDirs.length}] SKIP: ${blogDirName} (no index.astro)`);
    }
  });
}

// Main execution
console.log('='.repeat(60));
console.log('Blog Language Field Fixer');
console.log('='.repeat(60));

['en', 'ms', 'zh'].forEach(lang => {
  processBlogDirectory(lang);
});

// Print summary
console.log('\n' + '='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));

let totalFixed = 0;
['en', 'ms', 'zh'].forEach(lang => {
  console.log(`\n${lang.toUpperCase()}:`);
  console.log(`  Total: ${stats[lang].total}`);
  console.log(`  Fixed: ${stats[lang].fixed}`);
  totalFixed += stats[lang].fixed;
});

console.log(`\nTotal files fixed: ${totalFixed}`);
console.log('='.repeat(60));
