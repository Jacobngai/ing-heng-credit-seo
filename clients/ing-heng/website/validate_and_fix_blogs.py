#!/usr/bin/env python3
import os
import re
import yaml
from pathlib import Path
from datetime import datetime

def validate_and_fix_blog(file_path):
    """Validate and fix blog post frontmatter"""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Extract frontmatter and body
        match = re.match(r'^---\n(.*?)\n---\n(.*)', content, re.DOTALL)
        if not match:
            print(f"No frontmatter found in {file_path}")
            return False
        
        frontmatter_str = match.group(1)
        body = match.group(2)
        
        # Parse frontmatter
        try:
            frontmatter = yaml.safe_load(frontmatter_str)
        except yaml.YAMLError as e:
            print(f"YAML error in {file_path}: {e}")
            return False
        
        if not frontmatter:
            frontmatter = {}
        
        # Required fields
        required = {
            'title': 'Untitled Blog Post',
            'description': 'Blog post description',
            'category': 'Financing Guides',
            'persona': 'General'
        }
        
        # Ensure required fields exist
        changed = False
        for field, default in required.items():
            if field not in frontmatter or not frontmatter[field]:
                frontmatter[field] = default
                changed = True
                print(f"Added missing {field} to {file_path}")
        
        # Fix publishDate
        if 'publishDate' not in frontmatter or not frontmatter['publishDate']:
            if 'date' in frontmatter:
                frontmatter['publishDate'] = frontmatter.pop('date')
                changed = True
            elif 'datePublished' in frontmatter:
                frontmatter['publishDate'] = frontmatter.pop('datePublished')
                changed = True
            else:
                frontmatter['publishDate'] = '2025-12-21'
                changed = True
            print(f"Fixed publishDate in {file_path}")
        
        # Ensure publishDate is a string
        if isinstance(frontmatter.get('publishDate'), datetime):
            frontmatter['publishDate'] = frontmatter['publishDate'].strftime('%Y-%m-%d')
            changed = True
        
        # Add locale if missing
        if 'locale' not in frontmatter:
            # Detect from path
            if '/en/' in str(file_path):
                frontmatter['locale'] = 'en'
            elif '/ms/' in str(file_path):
                frontmatter['locale'] = 'ms'
            elif '/zh/' in str(file_path):
                frontmatter['locale'] = 'zh'
            else:
                frontmatter['locale'] = 'en'
            changed = True
            print(f"Added locale to {file_path}")
        
        # Remove problematic fields
        if 'lang' in frontmatter:
            del frontmatter['lang']
            changed = True
        
        # Ensure tags and keywords are lists
        if 'tags' in frontmatter and not isinstance(frontmatter['tags'], list):
            frontmatter['tags'] = [frontmatter['tags']] if frontmatter['tags'] else []
            changed = True
        
        if 'keywords' in frontmatter and not isinstance(frontmatter['keywords'], list):
            frontmatter['keywords'] = [frontmatter['keywords']] if frontmatter['keywords'] else []
            changed = True
        
        # Fix readingTime to be a number
        if 'readingTime' in frontmatter:
            if isinstance(frontmatter['readingTime'], str):
                # Extract number from string like "8 min"
                match = re.search(r'(\d+)', frontmatter['readingTime'])
                if match:
                    frontmatter['readingTime'] = int(match.group(1))
                    changed = True
                else:
                    del frontmatter['readingTime']
                    changed = True
        
        if changed:
            # Write back the file
            new_content = f"---\n{yaml.dump(frontmatter, allow_unicode=True, sort_keys=False)}---\n{body}"
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
    
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
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
        if '_temp' in str(md_file):
            continue
        if validate_and_fix_blog(md_file):
            fixed_count += 1
    
    print(f"\nTotal files fixed: {fixed_count}")

if __name__ == '__main__':
    main()