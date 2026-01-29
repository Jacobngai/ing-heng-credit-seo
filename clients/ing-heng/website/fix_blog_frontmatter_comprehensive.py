#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Comprehensive Blog Frontmatter Fix Script for ING HENG Website

This script fixes ALL frontmatter issues across English, Malay, and Chinese blog posts:
1. Replace 'date:' or 'datePublished:' with 'publishDate:'
2. Replace 'lang:' with 'locale:'
3. Ensure locale field exists and matches folder (en/ms/zh)
4. Fix readingTime to be a number (not "8 min" string)
5. Remove escaped apostrophes in YAML (replace don't with "do not", etc)
6. Ensure all required fields exist
7. Validate category and persona values
8. Handle UTF-8 encoding properly for Chinese characters

Author: Claude Code
Date: 2025-12-22
"""

import os
import re
import yaml
import sys
from pathlib import Path
from typing import Dict, List, Tuple, Any, Optional

# Valid category values
VALID_CATEGORIES = {
    'en': [
        'Equipment Financing', 'Construction Equipment', 'Logistics Equipment',
        'Business Tips', 'Industry News', 'Case Studies', 'Financing Guides',
        'Personal Financing', 'Emergency Financing', 'Business Financing'
    ],
    'ms': [
        'Pembiayaan Peralatan', 'Panduan Pembiayaan', 'Tip Perniagaan',
        'Equipment Financing', 'Construction Equipment', 'Logistics Equipment',
        'Business Tips', 'Industry News', 'Case Studies', 'Financing Guides',
        'Personal Financing', 'Emergency Financing', 'Business Financing'
    ],
    'zh': [
        '设备融资', '融资指南',
        'Equipment Financing', 'Construction Equipment', 'Logistics Equipment',
        'Business Tips', 'Industry News', 'Case Studies', 'Financing Guides',
        'Personal Financing', 'Emergency Financing', 'Business Financing'
    ]
}

# Valid persona values
VALID_PERSONAS = [
    'Contractor Ahmad', 'Logistics Lee', 'Warehouse William', 'General'
]

# Required frontmatter fields
REQUIRED_FIELDS = [
    'title', 'description', 'category', 'persona', 'publishDate', 'locale'
]

class BlogFrontmatterFixer:
    """Class to fix blog frontmatter issues comprehensively."""
    
    def __init__(self, blog_dir: str):
        self.blog_dir = Path(blog_dir)
        self.total_files = 0
        self.fixed_files = 0
        self.errors = []
        
    def log_error(self, message: str, file_path: Optional[str] = None):
        """Log error messages with optional file context."""
        if file_path:
            error_msg = f"[{file_path}] {message}"
        else:
            error_msg = message
        self.errors.append(error_msg)
        print(f"ERROR: {error_msg}")
    
    def log_info(self, message: str):
        """Log informational messages."""
        print(f"INFO: {message}")
    
    def extract_frontmatter_and_content(self, file_content: str) -> Tuple[str, str, str]:
        """
        Extract frontmatter and content from markdown file.
        Returns: (frontmatter_raw, frontmatter_yaml, content)
        """
        if not file_content.strip().startswith('---'):
            return "", "", file_content
        
        parts = file_content.split('---', 2)
        if len(parts) < 3:
            return "", "", file_content
            
        frontmatter_raw = parts[1].strip()
        content = parts[2].lstrip('\n\r')
        
        return frontmatter_raw, frontmatter_raw, content
    
    def fix_yaml_apostrophes(self, yaml_text: str) -> str:
        """Fix escaped apostrophes and contractions in YAML."""
        # Common contractions to fix
        contractions = {
            "don't": '"do not"',
            "doesn't": '"does not"',
            "can't": '"cannot"',
            "won't": '"will not"',
            "isn't": '"is not"',
            "aren't": '"are not"',
            "wasn't": '"was not"',
            "weren't": '"were not"',
            "haven't": '"have not"',
            "hasn't": '"has not"',
            "hadn't": '"had not"',
            "shouldn't": '"should not"',
            "couldn't": '"could not"',
            "wouldn't": '"would not"',
            "mustn't": '"must not"',
            "needn't": '"need not"',
            "daren't": '"dare not"',
            "mayn't": '"may not"',
        }
        
        fixed_yaml = yaml_text
        
        # Fix contractions
        for contraction, replacement in contractions.items():
            # Match contractions that are not already in quotes
            pattern = rf'\b{re.escape(contraction)}\b(?=(?:[^"]*"[^"]*")*[^"]*$)'
            fixed_yaml = re.sub(pattern, replacement, fixed_yaml, flags=re.IGNORECASE)
        
        # Fix possessive 's that might be causing issues
        fixed_yaml = re.sub(r"(\w)'s\b(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", r'\1\'s', fixed_yaml)
        
        return fixed_yaml
    
    def fix_reading_time(self, frontmatter_dict: Dict[str, Any]) -> Dict[str, Any]:
        """Fix readingTime to be a number instead of string like '8 min'."""
        if 'readingTime' in frontmatter_dict:
            reading_time = frontmatter_dict['readingTime']
            
            if isinstance(reading_time, str):
                # Extract number from strings like "8 min", "5 minutes", etc.
                match = re.search(r'(\d+)', reading_time)
                if match:
                    frontmatter_dict['readingTime'] = int(match.group(1))
                else:
                    # Default to 8 if we can't extract a number
                    frontmatter_dict['readingTime'] = 8
            elif not isinstance(reading_time, int):
                # Convert any other type to int
                try:
                    frontmatter_dict['readingTime'] = int(reading_time)
                except (ValueError, TypeError):
                    frontmatter_dict['readingTime'] = 8
        
        return frontmatter_dict
    
    def fix_date_fields(self, frontmatter_dict: Dict[str, Any]) -> Dict[str, Any]:
        """Fix date field names from 'date' or 'datePublished' to 'publishDate'."""
        # Check for old date field names
        if 'date' in frontmatter_dict:
            frontmatter_dict['publishDate'] = frontmatter_dict.pop('date')
        
        if 'datePublished' in frontmatter_dict:
            frontmatter_dict['publishDate'] = frontmatter_dict.pop('datePublished')
        
        return frontmatter_dict
    
    def fix_locale_field(self, frontmatter_dict: Dict[str, Any], expected_locale: str) -> Dict[str, Any]:
        """Fix locale field from 'lang' to 'locale' and ensure it matches folder."""
        # Check for old lang field name
        if 'lang' in frontmatter_dict:
            frontmatter_dict['locale'] = frontmatter_dict.pop('lang')
        
        # Ensure locale matches expected folder
        frontmatter_dict['locale'] = expected_locale
        
        return frontmatter_dict
    
    def validate_and_fix_category(self, frontmatter_dict: Dict[str, Any], locale: str) -> Dict[str, Any]:
        """Validate and fix category field."""
        if 'category' in frontmatter_dict:
            category = frontmatter_dict['category']
            valid_categories = VALID_CATEGORIES.get(locale, VALID_CATEGORIES['en'])
            
            if category not in valid_categories:
                # Try to map to a valid category
                if any(keyword in category.lower() for keyword in ['equipment', 'financing', 'peralatan', 'pembiayaan', '设备', '融资']):
                    if locale == 'ms' and 'Pembiayaan Peralatan' in valid_categories:
                        frontmatter_dict['category'] = 'Pembiayaan Peralatan'
                    elif locale == 'zh' and '设备融资' in valid_categories:
                        frontmatter_dict['category'] = '设备融资'
                    else:
                        frontmatter_dict['category'] = 'Equipment Financing'
                else:
                    # Default to Equipment Financing
                    frontmatter_dict['category'] = 'Equipment Financing'
        else:
            # Add missing category
            frontmatter_dict['category'] = 'Equipment Financing'
        
        return frontmatter_dict
    
    def validate_and_fix_persona(self, frontmatter_dict: Dict[str, Any]) -> Dict[str, Any]:
        """Validate and fix persona field."""
        if 'persona' in frontmatter_dict:
            persona = frontmatter_dict['persona']
            if persona not in VALID_PERSONAS:
                # Default to General if invalid
                frontmatter_dict['persona'] = 'General'
        else:
            # Add missing persona
            frontmatter_dict['persona'] = 'General'
        
        return frontmatter_dict
    
    def ensure_required_fields(self, frontmatter_dict: Dict[str, Any]) -> Dict[str, Any]:
        """Ensure all required fields exist with default values."""
        defaults = {
            'title': 'Equipment Financing Guide',
            'description': 'Complete guide to equipment financing in Malaysia.',
            'author': 'Ing Heng Credit & Leasing',
            'publishDate': '2025-12-22',
            'category': 'Equipment Financing',
            'tags': ['equipment financing', 'Malaysia'],
            'locale': 'en',
            'featured': False,
            'readingTime': 8,
            'persona': 'General'
        }
        
        for field in REQUIRED_FIELDS:
            if field not in frontmatter_dict:
                frontmatter_dict[field] = defaults.get(field, '')
        
        # Ensure some optional but common fields exist
        for field, default in defaults.items():
            if field not in frontmatter_dict:
                frontmatter_dict[field] = default
        
        return frontmatter_dict
    
    def fix_frontmatter_dict(self, frontmatter_dict: Dict[str, Any], locale: str) -> Dict[str, Any]:
        """Apply all frontmatter fixes to the dictionary."""
        # Fix date fields
        frontmatter_dict = self.fix_date_fields(frontmatter_dict)
        
        # Fix locale field
        frontmatter_dict = self.fix_locale_field(frontmatter_dict, locale)
        
        # Fix reading time
        frontmatter_dict = self.fix_reading_time(frontmatter_dict)
        
        # Validate and fix category
        frontmatter_dict = self.validate_and_fix_category(frontmatter_dict, locale)
        
        # Validate and fix persona
        frontmatter_dict = self.validate_and_fix_persona(frontmatter_dict)
        
        # Ensure required fields
        frontmatter_dict = self.ensure_required_fields(frontmatter_dict)
        
        return frontmatter_dict
    
    def format_yaml_frontmatter(self, frontmatter_dict: Dict[str, Any]) -> str:
        """Format frontmatter dictionary back to YAML string."""
        # Custom YAML formatting for better readability
        yaml_lines = []
        
        # Define field order for better organization
        field_order = [
            'title', 'description', 'author', 'publishDate', 'category', 
            'tags', 'locale', 'featured', 'readingTime', 'keywords', 'persona', 'faqSchema'
        ]
        
        # Add fields in preferred order
        for field in field_order:
            if field in frontmatter_dict:
                value = frontmatter_dict[field]
                
                # Special handling for different field types
                if field == 'title' or field == 'description' or field == 'author':
                    yaml_lines.append(f"{field}: '{value}'")
                elif field == 'tags' and isinstance(value, list):
                    yaml_lines.append(f"{field}: {yaml.dump(value, default_flow_style=True, allow_unicode=True).strip()}")
                elif field == 'keywords' and isinstance(value, list):
                    yaml_lines.append(f"{field}:")
                    for keyword in value:
                        yaml_lines.append(f"  - '{keyword}'")
                elif field == 'faqSchema' and isinstance(value, list):
                    yaml_lines.append(f"{field}:")
                    for faq in value:
                        yaml_lines.append(f"  - question: '{faq.get('question', '')}' ")
                        yaml_lines.append(f"    answer: '{faq.get('answer', '')}' ")
                else:
                    yaml_lines.append(f"{field}: {yaml.dump(value, default_flow_style=True, allow_unicode=True).strip()}")
        
        # Add any remaining fields not in the preferred order
        for field, value in frontmatter_dict.items():
            if field not in field_order:
                yaml_lines.append(f"{field}: {yaml.dump(value, default_flow_style=True, allow_unicode=True).strip()}")
        
        return '\n'.join(yaml_lines)
    
    def process_file(self, file_path: Path) -> bool:
        """Process a single markdown file to fix frontmatter issues."""
        try:
            # Determine expected locale from file path
            locale_mapping = {'en': 'en', 'ms': 'ms', 'zh': 'zh'}
            expected_locale = 'en'  # default
            
            for folder, loc in locale_mapping.items():
                if f'/{folder}/' in str(file_path) or f'\\{folder}\\' in str(file_path):
                    expected_locale = loc
                    break
            
            # Read file with UTF-8 encoding
            with open(file_path, 'r', encoding='utf-8') as f:
                original_content = f.read()
            
            # Extract frontmatter and content
            frontmatter_raw, frontmatter_yaml, content = self.extract_frontmatter_and_content(original_content)
            
            if not frontmatter_yaml:
                self.log_error(f"No frontmatter found", str(file_path))
                return False
            
            # Fix YAML apostrophes first
            fixed_yaml = self.fix_yaml_apostrophes(frontmatter_yaml)
            
            # Parse YAML
            try:
                frontmatter_dict = yaml.safe_load(fixed_yaml) or {}
            except yaml.YAMLError as e:
                self.log_error(f"YAML parsing error: {e}", str(file_path))
                return False
            
            # Apply all fixes
            fixed_frontmatter_dict = self.fix_frontmatter_dict(frontmatter_dict, expected_locale)
            
            # Format back to YAML
            try:
                fixed_yaml_str = self.format_yaml_frontmatter(fixed_frontmatter_dict)
            except Exception as e:
                # Fallback to standard YAML dump
                fixed_yaml_str = yaml.dump(fixed_frontmatter_dict, default_flow_style=False, allow_unicode=True)
            
            # Reconstruct file content
            new_content = f"---\n{fixed_yaml_str}\n---\n{content}"
            
            # Only write if content actually changed
            if new_content != original_content:
                # Write file with UTF-8 encoding
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                
                self.log_info(f"Fixed: {file_path}")
                return True
            else:
                self.log_info(f"No changes needed: {file_path}")
                return False
                
        except Exception as e:
            self.log_error(f"Error processing file: {e}", str(file_path))
            return False
    
    def process_directory(self) -> None:
        """Process all markdown files in the blog directory."""
        if not self.blog_dir.exists():
            self.log_error(f"Blog directory does not exist: {self.blog_dir}")
            return
        
        # Find all markdown files
        md_files = list(self.blog_dir.rglob("*.md"))
        
        # Filter out template files and temporary files
        md_files = [f for f in md_files if not any(exclude in str(f).lower() for exclude in ['template', '_temp', 'readme'])]
        
        self.total_files = len(md_files)
        
        if self.total_files == 0:
            self.log_info("No markdown files found to process")
            return
        
        self.log_info(f"Found {self.total_files} markdown files to process")
        
        # Process each file
        for file_path in md_files:
            if self.process_file(file_path):
                self.fixed_files += 1
        
        # Summary
        self.log_info(f"\n=== SUMMARY ===")
        self.log_info(f"Total files: {self.total_files}")
        self.log_info(f"Files fixed: {self.fixed_files}")
        self.log_info(f"Files unchanged: {self.total_files - self.fixed_files}")
        
        if self.errors:
            self.log_info(f"Errors encountered: {len(self.errors)}")
            for error in self.errors:
                print(f"  - {error}")
        else:
            self.log_info("No errors encountered")

def main():
    """Main function to run the frontmatter fixer."""
    # Get the blog directory
    current_dir = Path(__file__).parent
    blog_dir = current_dir / "src" / "content" / "blogs"
    
    print("ING HENG Blog Frontmatter Comprehensive Fix Tool")
    print("=" * 60)
    print(f"Blog directory: {blog_dir}")
    print()
    
    # Create and run the fixer
    fixer = BlogFrontmatterFixer(str(blog_dir))
    fixer.process_directory()
    
    print("\nBlog frontmatter fix complete!")

if __name__ == "__main__":
    main()