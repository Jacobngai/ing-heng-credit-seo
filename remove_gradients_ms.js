#!/usr/bin/env node
/**
 * Remove all gradients from MS (Malay) pages and replace with solid maroon colors
 * Professional, government-approved aesthetic for Malaysian market
 */

const fs = require('fs');
const path = require('path');

// Base directory
const BASE_DIR = path.join(__dirname, 'website', 'src', 'pages', 'ms');

// Gradient replacement patterns (from most specific to most general)
const REPLACEMENTS = [
    // Primary + Secondary gradient patterns (replace with solid maroon)
    [/bg-gradient-to-r from-primary to-secondary/g, 'bg-secondary'],
    [/bg-gradient-to-br from-primary to-secondary/g, 'bg-secondary'],
    [/bg-gradient-to-l from-primary to-secondary/g, 'bg-secondary'],
    [/bg-gradient-to-t from-primary to-secondary/g, 'bg-secondary'],
    [/bg-gradient-to-b from-primary to-secondary/g, 'bg-secondary'],
    [/bg-gradient-to-tr from-primary to-secondary/g, 'bg-secondary'],
    [/bg-gradient-to-tl from-primary to-secondary/g, 'bg-secondary'],
    [/bg-gradient-to-br from-secondary to-accent/g, 'bg-secondary'],
    [/bg-gradient-to-br from-accent to-primary/g, 'bg-secondary'],
    [/bg-gradient-to-r from-primary via-secondary to-accent/g, 'bg-secondary'],

    // Light gradients (replace with beige/light backgrounds)
    [/bg-gradient-to-br from-primary\/5 to-secondary\/5/g, 'bg-background-secondary'],
    [/bg-gradient-to-r from-primary\/10 to-secondary\/10/g, 'bg-primary-light'],
    [/bg-gradient-to-br from-primary\/10 to-secondary\/10/g, 'bg-primary-light'],
    [/bg-gradient-to-br from-primary\/20 to-secondary\/20/g, 'bg-primary-light'],
    [/bg-gradient-to-br from-primary\/5 via-white to-secondary\/5/g, 'bg-background-secondary'],

    // Colored gradients in specific contexts (keep functional colors but remove gradients)
    [/bg-gradient-to-r from-blue-50 to-blue-100/g, 'bg-blue-50'],
    [/bg-gradient-to-r from-green-50 to-green-100/g, 'bg-green-50'],
    [/bg-gradient-to-r from-amber-50 to-amber-100/g, 'bg-amber-50'],
    [/bg-gradient-to-r from-purple-50 to-purple-100/g, 'bg-purple-50'],
    [/bg-gradient-to-br from-green-50 to-green-100/g, 'bg-green-50'],
    [/bg-gradient-to-br from-white to-gray-50/g, 'bg-white'],
    [/bg-gradient-to-br from-gray-100 to-gray-200/g, 'bg-gray-100'],

    // CSS linear-gradient patterns (refrigerated-truck.astro has inline styles)
    [/background: linear-gradient\(135deg, #1a472a 0%, #2d5a3d 100%\)/g, 'background: #800020'],
    [/background: linear-gradient\(135deg, #0f172a 0%, #1e293b 50%, #334155 100%\)/g, 'background: #800020'],
    [/background: linear-gradient\(135deg, #60a5fa 0%, #3b82f6 100%\)/g, 'background: #3b82f6'],
    [/background: linear-gradient\(135deg, #10b981 0%, #059669 100%\)/g, 'background: #10b981'],
    [/background: linear-gradient\(135deg, #dbeafe 0%, #bfdbfe 100%\)/g, 'background: #dbeafe'],
    [/background: linear-gradient\(135deg, #fbbf24 0%, #f59e0b 100%\)/g, 'background: #fbbf24'],
    [/background: linear-gradient\(135deg, #f0f9ff 0%, #e0f2fe 100%\)/g, 'background: #f0f9ff'],
    [/background: linear-gradient\(135deg, #f0fdf4 0%, #dcfce7 100%\)/g, 'background: #f0fdf4'],
    [/background: linear-gradient\(135deg, #fef3c7 0%, #fde68a 100%\)/g, 'background: #fef3c7'],
    [/background: linear-gradient\(135deg, #3b82f6 0%, #2563eb 100%\)/g, 'background: #3b82f6'],
    [/background: linear-gradient\(135deg, #1e40af 0%, #1e3a8a 100%\)/g, 'background: #1e40af'],
];

function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
        } else if (filePath.endsWith('.astro') || filePath.endsWith('.md')) {
            arrayOfFiles.push(filePath);
        }
    });

    return arrayOfFiles;
}

function removeGradientsFromFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        let changesCount = 0;

        // Apply all replacements
        REPLACEMENTS.forEach(([pattern, replacement]) => {
            const matches = content.match(pattern);
            if (matches) {
                changesCount += matches.length;
                content = content.replace(pattern, replacement);
            }
        });

        // Only write if changes were made
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            return changesCount;
        }
        return 0;

    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        return 0;
    }
}

function main() {
    console.log('🔍 Scanning for Malay pages with gradients...\n');

    const files = getAllFiles(BASE_DIR);
    let totalFiles = 0;
    let totalChanges = 0;

    files.forEach(file => {
        const changes = removeGradientsFromFile(file);
        if (changes > 0) {
            totalFiles++;
            totalChanges += changes;
            console.log(`✓ ${path.basename(file)}: ${changes} gradients removed`);
        }
    });

    console.log('\n' + '='.repeat(60));
    console.log(`✅ Complete! Updated ${totalFiles} files`);
    console.log(`📊 Total gradient patterns replaced: ${totalChanges}`);
    console.log('='.repeat(60));
    console.log('\n🎨 All gradients replaced with solid maroon (bg-secondary)');
    console.log('✨ Professional, government-approved aesthetic applied');
}

main();
