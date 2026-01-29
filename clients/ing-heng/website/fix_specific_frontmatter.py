#!/usr/bin/env python3
"""
Specific Frontmatter Issue Fixer
================================

This script specifically targets and fixes the remaining YAML frontmatter issues.
Main focus: removing standalone '...' lines and fixing specific YAML structure problems.
"""

import os
import re
import yaml
import sys
from pathlib import Path
from typing import List, Dict, Tuple, Optional

def find_markdown_files(blogs_dir: str) -> List[Path]:
    """Find all .md files in the blogs directory recursively."""
    md_files = []
    for root, dirs, files in os.walk(blogs_dir):
        for file in files:
            if file.endswith('.md') and not file.startswith('.'):
                md_files.append(Path(root) / file)
    return sorted(md_files)

def extract_and_clean_frontmatter(content: str) -> Tuple[Optional[str], Optional[str], bool]:
    """
    Extract and clean frontmatter from markdown content.
    Returns: (clean_frontmatter, body_content, success)
    """
    if not content.strip() or not content.strip().startswith('---'):
        return None, content, False
    
    lines = content.split('\n')
    frontmatter_lines = []
    body_lines = []
    in_frontmatter = False
    frontmatter_closed = False
    
    for i, line in enumerate(lines):
        if i == 0 and line.strip() == '---':
            in_frontmatter = True
            continue
        elif in_frontmatter and line.strip() == '---':
            in_frontmatter = False
            frontmatter_closed = True
            body_lines = lines[i+1:]
            break
        elif in_frontmatter:
            frontmatter_lines.append(line)
    
    if not frontmatter_closed:
        return None, content, False
    
    # Clean the frontmatter lines
    cleaned_frontmatter_lines = []
    for line in frontmatter_lines:
        # Remove standalone ... lines
        if line.strip() == '...':
            continue
        cleaned_frontmatter_lines.append(line)
    
    frontmatter_text = '\n'.join(cleaned_frontmatter_lines)
    body_content = '\n'.join(body_lines)
    
    return frontmatter_text, body_content, True

def fix_yaml_structure(yaml_text: str) -> str:
    """Fix common YAML structure issues."""
    lines = yaml_text.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Skip empty lines and comments
        if not line.strip() or line.strip().startswith('#'):
            fixed_lines.append(line)
            continue
        
        # Handle key-value pairs
        if ':' in line and not line.strip().startswith('-'):
            parts = line.split(':', 1)
            if len(parts) == 2:
                key = parts[0].strip()
                value = parts[1].strip()
                
                # Handle special characters in values
                if value and not value.startswith(('[', '"', "'")):
                    # Check if value needs quoting
                    needs_quotes = any(char in value for char in [':', "'", '"', '#', '&', '*', '!', '|', '>', '<', '%', '@'])
                    if needs_quotes and not (value.isdigit() or value in ['true', 'false', 'null']):
                        # Escape single quotes and wrap in single quotes
                        escaped_value = value.replace("'", "''")
                        line = f"{key}: '{escaped_value}'"
                    else:
                        line = f"{key}: {value}"
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def create_valid_frontmatter(data: Dict) -> str:
    """Create valid YAML frontmatter from data."""
    # Ensure required fields
    required_defaults = {
        'title': 'Untitled',
        'description': '',
        'author': 'Ing Heng Credit & Leasing',
        'publishDate': '2025-12-22',
        'category': 'General',
        'tags': [],
        'locale': 'en',
        'featured': False,
        'draft': False,
        'readingTime': 5
    }
    
    for field, default_value in required_defaults.items():
        if field not in data or data[field] is None:
            data[field] = default_value
    
    # Fix data types
    if 'featured' in data:
        data['featured'] = bool(data['featured'])
    if 'draft' in data:
        data['draft'] = bool(data['draft'])
    if 'readingTime' in data:
        try:
            data['readingTime'] = int(data['readingTime'])
        except:
            data['readingTime'] = 5
    if 'tags' in data and not isinstance(data['tags'], list):
        if isinstance(data['tags'], str):
            data['tags'] = [data['tags']]
        else:
            data['tags'] = []
    
    # Generate clean YAML
    yaml_text = yaml.dump(data, 
                         default_flow_style=False, 
                         allow_unicode=True,
                         sort_keys=False,
                         width=80,
                         indent=2)
    
    return yaml_text.strip()

def process_file(file_path: Path) -> Dict:
    """Process a single markdown file."""
    try:
        # Read file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if not content.strip():
            return {'status': 'error', 'message': 'Empty file'}
        
        # Extract and clean frontmatter
        frontmatter_text, body_content, success = extract_and_clean_frontmatter(content)
        
        if not success:
            return {'status': 'error', 'message': 'No valid frontmatter structure'}
        
        # Try to parse YAML
        try:
            data = yaml.safe_load(frontmatter_text)
            if data is None:
                data = {}
        except yaml.YAMLError:
            # Try to fix YAML structure issues
            fixed_yaml = fix_yaml_structure(frontmatter_text)
            try:
                data = yaml.safe_load(fixed_yaml)
                if data is None:
                    data = {}
            except yaml.YAMLError as e:
                return {'status': 'error', 'message': f'Could not fix YAML: {str(e)}'}
        
        # Create clean frontmatter
        clean_yaml = create_valid_frontmatter(data)
        
        # Reconstruct file content
        new_content = f"---\n{clean_yaml}\n---\n{body_content}"
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return {'status': 'fixed', 'message': 'Frontmatter cleaned and fixed'}
    
    except Exception as e:
        return {'status': 'error', 'message': f'Unexpected error: {str(e)}'}

def main():
    """Main function."""
    blogs_dir = Path("src/content/blogs")
    
    if not blogs_dir.exists():
        print("[ERROR] Blogs directory not found")
        sys.exit(1)
    
    print("Specific Frontmatter Fixer")
    print("=========================")
    
    md_files = find_markdown_files(str(blogs_dir))
    print(f"[INFO] Found {len(md_files)} markdown files")
    
    fixed_count = 0
    error_count = 0
    
    for file_path in md_files:
        relative_path = file_path.relative_to(blogs_dir)
        result = process_file(file_path)
        
        if result['status'] == 'fixed':
            print(f"[FIXED] {relative_path}")
            fixed_count += 1
        else:
            print(f"[ERROR] {relative_path}: {result['message']}")
            error_count += 1
    
    print(f"\n[SUMMARY]")
    print(f"  Fixed: {fixed_count}")
    print(f"  Errors: {error_count}")
    print(f"  Total: {len(md_files)}")

if __name__ == "__main__":
    main()