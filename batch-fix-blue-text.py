#!/usr/bin/env python3
"""
Batch fix blue-on-blue text issues across all pages
Fixes text-blue-100 to text-white on blue gradient backgrounds
"""

import re
from pathlib import Path

# Define the files to fix and their replacements
fixes = [
    # MS Services Index
    {
        'file': 'clients/ing-heng/website/src/pages/ms/services/index.astro',
        'replacements': [
            ('text-xl md:text-2xl text-blue-100 mb-8', 'text-xl md:text-2xl text-white opacity-90 mb-8'),
            ('text-blue-100 text-lg">Penyelesaian Pembiayaan Aset', 'text-white text-lg">Penyelesaian Pembiayaan Aset'),
            ('text-blue-100 text-lg">Penyelesaian Modal Perniagaan', 'text-white text-lg">Penyelesaian Modal Perniagaan'),
            ('text-blue-100 text-lg">Penyelesaian Perlindungan', 'text-white text-lg">Penyelesaian Perlindungan'),
            ('text-xl mb-12 text-blue-100 max-w-3xl', 'text-xl mb-12 text-white opacity-90 max-w-3xl'),
            ('mt-8 text-blue-100">', 'mt-8 text-white">'),
        ]
    },
    # ZH Services Index
    {
        'file': 'clients/ing-heng/website/src/pages/zh/services/index.astro',
        'replacements': [
            ('text-xl md:text-2xl text-blue-100 mb-8', 'text-xl md:text-2xl text-white opacity-90 mb-8'),
            ('text-blue-100 text-lg">资产融资解决方案', 'text-white text-lg">资产融资解决方案'),
            ('text-blue-100 text-lg">商业资本解决方案', 'text-white text-lg">商业资本解决方案'),
            ('text-blue-100 text-lg">保护解决方案', 'text-white text-lg">保护解决方案'),
            ('text-xl mb-12 text-blue-100 max-w-3xl', 'text-xl mb-12 text-white opacity-90 max-w-3xl'),
            ('mt-8 text-blue-100">', 'mt-8 text-white">'),
        ]
    },
    # EN Blog Index
    {
        'file': 'clients/ing-heng/website/src/pages/en/blog/index.astro',
        'replacements': [
            ('text-3xl md:text-4xl font-bold mb-4 text-blue-100"', 'text-3xl md:text-4xl font-bold mb-4 text-white"'),
            ('text-xl mb-8 text-blue-100 opacity-80', 'text-xl mb-8 text-white opacity-90'),
        ]
    },
]

def fix_file(file_path, replacements):
    """Apply replacements to a file"""
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Track changes
        changed = False
        for old, new in replacements:
            if old in content:
                content = content.replace(old, new)
                changed = True
                print(f"  [OK] Replaced: {old[:60]}...")

        # Write back if changed
        if changed:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"[FIXED] {file_path}")
            return True
        else:
            print(f"[SKIP] No changes needed: {file_path}")
            return False

    except FileNotFoundError:
        print(f"[ERROR] File not found: {file_path}")
        return False
    except Exception as e:
        print(f"[ERROR] Error fixing {file_path}: {e}")
        return False

def main():
    print("Starting batch fix for blue-on-blue text issues...\n")

    base_dir = Path(__file__).parent
    total_fixed = 0

    for fix_config in fixes:
        file_path = base_dir / fix_config['file']
        print(f"\nProcessing: {fix_config['file']}")

        if fix_file(file_path, fix_config['replacements']):
            total_fixed += 1

    print(f"\n" + "="*60)
    print(f"Batch fix complete!")
    print(f"Files fixed: {total_fixed}/{len(fixes)}")
    print("="*60)

if __name__ == '__main__':
    main()
