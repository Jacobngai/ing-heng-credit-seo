#!/usr/bin/env python3
import os
import re
from pathlib import Path

def fix_blog_post(file_path):
    """Fix all frontmatter issues in a blog post"""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Replace date: with publishDate:
        content = re.sub(r'^date:', 'publishDate:', content, flags=re.MULTILINE)
        
        # Remove duplicate lang: field if present
        content = re.sub(r'^lang:.*?\n', '', content, flags=re.MULTILINE)
        
        # Fix readingTime to be a number
        content = re.sub(r'readingTime: "(\d+) min"', r'readingTime: \1', content)
        
        # Ensure locale field exists
        if not re.search(r'^locale:', content, flags=re.MULTILINE):
            # Detect locale from path
            if '/en/' in str(file_path):
                locale = 'en'
            elif '/ms/' in str(file_path):
                locale = 'ms'
            elif '/zh/' in str(file_path):
                locale = 'zh'
            else:
                return False
            
            # Add locale after persona if exists, else after category
            if re.search(r'^persona:', content, flags=re.MULTILINE):
                content = re.sub(r'^(persona:.*?)$', rf'\1\nlocale: \'{locale}\'', content, flags=re.MULTILINE, count=1)
            elif re.search(r'^category:', content, flags=re.MULTILINE):
                content = re.sub(r'^(category:.*?)$', rf'\1\nlocale: \'{locale}\'', content, flags=re.MULTILINE, count=1)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Fix all blog posts"""
    blog_dir = Path('src/content/blogs')
    
    if not blog_dir.exists():
        print(f"Error: {blog_dir} does not exist")
        return
    
    # Find all markdown files
    md_files = list(blog_dir.glob('**/*.md'))
    
    fixed_count = 0
    for md_file in md_files:
        if fix_blog_post(md_file):
            print(f"Fixed: {md_file.as_posix()}")
            fixed_count += 1
    
    print(f"\nTotal files fixed/processed: {fixed_count}")

if __name__ == '__main__':
    main()