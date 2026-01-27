#!/usr/bin/env python3
import os
import re
from pathlib import Path

def fix_reading_time(file_path):
    """Fix readingTime field to be a number"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace readingTime: "X min" with readingTime: X
    pattern = r'readingTime: "(\d+) min"'
    content = re.sub(pattern, r'readingTime: \1', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    """Fix all blog posts with string readingTime"""
    blog_dir = Path('src/content/blogs')
    
    if not blog_dir.exists():
        print(f"Error: {blog_dir} does not exist")
        return
    
    # Find all markdown files
    md_files = list(blog_dir.glob('**/*.md'))
    
    fixed_count = 0
    for md_file in md_files:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'readingTime: "' in content:
            try:
                if fix_reading_time(md_file):
                    print(f"Fixed: {md_file.as_posix()}")
                    fixed_count += 1
            except Exception as e:
                print(f"Error fixing {md_file}: {e}")
    
    print(f"\nTotal files fixed: {fixed_count}")

if __name__ == '__main__':
    main()