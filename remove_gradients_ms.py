#!/usr/bin/env python3
"""
Remove all gradients from MS (Malay) pages and replace with solid maroon colors
Professional, government-approved aesthetic for Malaysian market
"""

import os
import re
from pathlib import Path

# Base directory
BASE_DIR = Path(r"C:\Users\Vivobook\OneDrive\Desktop\ING HENG CREDIT\website\src\pages\ms")

# Gradient replacement patterns (from most specific to most general)
REPLACEMENTS = [
    # Primary + Secondary gradient patterns (replace with solid maroon)
    (r'bg-gradient-to-r from-primary to-secondary', 'bg-secondary'),
    (r'bg-gradient-to-br from-primary to-secondary', 'bg-secondary'),
    (r'bg-gradient-to-l from-primary to-secondary', 'bg-secondary'),
    (r'bg-gradient-to-t from-primary to-secondary', 'bg-secondary'),
    (r'bg-gradient-to-b from-primary to-secondary', 'bg-secondary'),
    (r'bg-gradient-to-tr from-primary to-secondary', 'bg-secondary'),
    (r'bg-gradient-to-tl from-primary to-secondary', 'bg-secondary'),
    (r'bg-gradient-to-br from-secondary to-accent', 'bg-secondary'),
    (r'bg-gradient-to-br from-accent to-primary', 'bg-secondary'),
   (r'bg-gradient-to-r from-primary via-secondary to-accent', 'bg-secondary'),

    # Light gradients (replace with beige/light backgrounds)
    (r'bg-gradient-to-br from-primary/5 to-secondary/5', 'bg-background-secondary'),
    (r'bg-gradient-to-r from-primary/10 to-secondary/10', 'bg-primary-light'),
    (r'bg-gradient-to-br from-primary/10 to-secondary/10', 'bg-primary-light'),
    (r'bg-gradient-to-br from-primary/20 to-secondary/20', 'bg-primary-light'),
    (r'bg-gradient-to-br from-primary/5 via-white to-secondary/5', 'bg-background-secondary'),

    # Table headers (replace with solid maroon)
    (r'bg-gradient-to-r from-primary to-secondary text-white', 'bg-secondary text-white'),

    # Colored gradients in specific contexts (keep functional colors but remove gradients)
    (r'bg-gradient-to-r from-blue-50 to-blue-100', 'bg-blue-50'),
    (r'bg-gradient-to-r from-green-50 to-green-100', 'bg-green-50'),
    (r'bg-gradient-to-r from-amber-50 to-amber-100', 'bg-amber-50'),
    (r'bg-gradient-to-r from-purple-50 to-purple-100', 'bg-purple-50'),
    (r'bg-gradient-to-br from-green-50 to-green-100', 'bg-green-50'),
    (r'bg-gradient-to-br from-white to-gray-50', 'bg-white'),
    (r'bg-gradient-to-br from-gray-100 to-gray-200', 'bg-gray-100'),

    # CSS linear-gradient patterns (refrigerated-truck.astro has inline styles)
    (r'background: linear-gradient\(135deg, #1a472a 0%, #2d5a3d 100%\)', 'background: #800020'),
    (r'background: linear-gradient\(135deg, #0f172a 0%, #1e293b 50%, #334155 100%\)', 'background: #800020'),
    (r'background: linear-gradient\(135deg, #60a5fa 0%, #3b82f6 100%\)', 'background: #3b82f6'),
    (r'background: linear-gradient\(135deg, #10b981 0%, #059669 100%\)', 'background: #10b981'),
    (r'background: linear-gradient\(135deg, #dbeafe 0%, #bfdbfe 100%\)', 'background: #dbeafe'),
    (r'background: linear-gradient\(135deg, #fbbf24 0%, #f59e0b 100%\)', 'background: #fbbf24'),
    (r'background: linear-gradient\(135deg, #f0f9ff 0%, #e0f2fe 100%\)', 'background: #f0f9ff'),
    (r'background: linear-gradient\(135deg, #f0fdf4 0%, #dcfce7 100%\)', 'background: #f0fdf4'),
    (r'background: linear-gradient\(135deg, #fef3c7 0%, #fde68a 100%\)', 'background: #fef3c7'),
    (r'background: linear-gradient\(135deg, #3b82f6 0%, #2563eb 100%\)', 'background: #3b82f6'),
    (r'background: linear-gradient\(135deg, #1e40af 0%, #1e3a8a 100%\)', 'background: #1e40af'),
]

def remove_gradients_from_file(file_path):
    """Remove all gradient classes from a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content
        changes_made = 0

        # Apply all replacements
        for pattern, replacement in REPLACEMENTS:
            new_content = re.sub(pattern, replacement, content)
            if new_content != content:
                changes_made += content.count(pattern.replace('\\', ''))
                content = new_content

        # Only write if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return changes_made
        return 0

    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return 0

def main():
    """Process all .astro and .md files in MS directory"""
    total_files = 0
    total_changes = 0

    for extension in ['*.astro', '*.md']:
        for file_path in BASE_DIR.rglob(extension):
            changes = remove_gradients_from_file(file_path)
            if changes > 0:
                total_files += 1
                total_changes += changes
                print(f"✓ {file_path.name}: {changes} gradients removed")

    print(f"\n{'='*60}")
    print(f"✅ Complete! Updated {total_files} files")
    print(f"📊 Total gradient patterns replaced: {total_changes}")
    print(f"{'='*60}")
    print(f"\n🎨 All gradients replaced with solid maroon (bg-secondary)")
    print(f"✨ Professional, government-approved aesthetic applied")

if __name__ == '__main__':
    main()
