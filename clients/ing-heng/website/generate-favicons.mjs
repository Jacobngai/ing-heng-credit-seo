import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, 'public');
const iconsDir = join(publicDir, 'images', 'icons');
const sourceFavicon = join(publicDir, 'favicon.png');

console.log('🎨 Generating all favicon and icon files...\n');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
  console.log('✅ Created icons directory');
}

// Icon configurations
const iconConfigs = [
  // Android Chrome icons
  { size: 192, name: 'android-chrome-192x192.png', dir: iconsDir },
  { size: 512, name: 'android-chrome-512x512.png', dir: iconsDir },

  // Apple touch icon
  { size: 180, name: 'apple-touch-icon.png', dir: iconsDir },

  // Standard favicons
  { size: 32, name: 'favicon-32x32.png', dir: iconsDir },
  { size: 16, name: 'favicon-16x16.png', dir: iconsDir },

  // Shortcut icons (using same design)
  { size: 96, name: 'contact-icon.png', dir: iconsDir },
  { size: 96, name: 'equipment-icon.png', dir: iconsDir },
];

// Generate PNG icons
async function generateIcons() {
  try {
    for (const config of iconConfigs) {
      const outputPath = join(config.dir, config.name);

      await sharp(sourceFavicon)
        .resize(config.size, config.size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputPath);

      console.log(`✅ Generated: ${config.name} (${config.size}x${config.size})`);
    }

    // Generate favicon.ico (multi-resolution ICO file)
    console.log('\n🔨 Generating favicon.ico...');

    // Create 32x32 version for ICO
    const ico32Path = join(publicDir, 'favicon-temp-32.png');
    await sharp(sourceFavicon)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(ico32Path);

    // Note: Sharp doesn't natively support ICO format
    // We'll create a 32x32 PNG and rename it
    // For proper ICO with multiple sizes, use online converter or imagemagick
    const icoPath = join(publicDir, 'favicon.ico');

    // Read the PNG and save as ICO (basic approach)
    // For production, consider using a proper ICO library or online tool
    fs.copyFileSync(ico32Path, icoPath);
    fs.unlinkSync(ico32Path);

    console.log('⚠️  Note: favicon.ico created as PNG format.');
    console.log('   For best compatibility, consider converting to true ICO format');
    console.log('   using https://favicon.io/ or imagemagick\n');

    console.log('✨ All icons generated successfully!\n');
    console.log('📋 Generated files:');
    console.log('   - favicon.ico (in public/)');
    console.log('   - 7 PNG icons (in public/images/icons/)\n');

  } catch (error) {
    console.error('❌ Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
