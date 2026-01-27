#!/usr/bin/env python3
import os
import re
from pathlib import Path

def add_locale_field(file_path, locale):
    """Add locale field to blog post if missing"""
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Check if locale field already exists
    if re.search(r'^locale:', content, flags=re.MULTILINE):
        return False
    
    # Add locale field after persona or category or tags field
    # Try different patterns to find where to insert
    patterns = [
        (r'^(persona:.*?)$', r'\1\nlocale: ' + f"'{locale}'"),
        (r'^(tags:.*?\n(?:  -.*?\n)*)$', r'\1locale: ' + f"'{locale}'\n"),
        (r'^(category:.*?)$', r'\1\nlocale: ' + f"'{locale}'"),
    ]
    
    modified = False
    for pattern, replacement in patterns:
        if re.search(pattern, content, flags=re.MULTILINE):
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE, count=1)
            modified = True
            break
    
    if not modified:
        # If none of the patterns match, add after the third ---
        lines = content.split('\n')
        in_frontmatter = False
        for i, line in enumerate(lines):
            if line.strip() == '---':
                if in_frontmatter:
                    # End of frontmatter, insert before this line
                    lines.insert(i, f"locale: '{locale}'")
                    modified = True
                    break
                else:
                    in_frontmatter = True
        content = '\n'.join(lines)
    
    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    
    return False

def main():
    """Add locale field to all blog posts"""
    blog_dir = Path('src/content/blogs')
    
    if not blog_dir.exists():
        print(f"Error: {blog_dir} does not exist")
        return
    
    locales = {'en': 'en', 'ms': 'ms', 'zh': 'zh'}
    
    fixed_count = 0
    for locale_dir, locale_code in locales.items():
        locale_path = blog_dir / locale_dir
        if not locale_path.exists():
            continue
        
        md_files = list(locale_path.glob('*.md'))
        for md_file in md_files:
            try:
                if add_locale_field(md_file, locale_code):
                    print(f"Fixed: {md_file.as_posix()}")
                    fixed_count += 1
            except Exception as e:
                print(f"Error fixing {md_file}: {e}")
    
    print(f"\nTotal files fixed: {fixed_count}")

if __name__ == '__main__':
    main()