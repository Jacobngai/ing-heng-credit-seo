#!/usr/bin/env python3
import os
import re
from pathlib import Path

def fix_frontmatter(file_path):
    """Fix frontmatter in a single markdown file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace date: with publishDate:
    content = re.sub(r'^date:', 'publishDate:', content, flags=re.MULTILINE)
    
    # Replace lang: with locale:
    content = re.sub(r"^lang: 'en'", "locale: 'en'", content, flags=re.MULTILINE)
    content = re.sub(r"^lang: 'ms'", "locale: 'ms'", content, flags=re.MULTILINE)
    content = re.sub(r"^lang: 'zh'", "locale: 'zh'", content, flags=re.MULTILINE)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    """Fix all blog posts in the content directory"""
    blog_dir = Path('src/content/blogs')
    
    if not blog_dir.exists():
        print(f"Error: {blog_dir} does not exist")
        return
    
    # Find all markdown files
    md_files = list(blog_dir.glob('**/*.md'))
    
    fixed_count = 0
    for md_file in md_files:
        try:
            if fix_frontmatter(md_file):
                print(f"Fixed: {md_file}")
                fixed_count += 1
        except Exception as e:
            print(f"Error fixing {md_file}: {e}")
    
    print(f"\nTotal files fixed: {fixed_count}")

if __name__ == '__main__':
    main()