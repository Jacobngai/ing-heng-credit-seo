#!/usr/bin/env python3
"""
Frontmatter Parser and Fixer
============================

This script identifies and fixes YAML frontmatter parsing errors in blog markdown files.
It handles common issues like:
- Invalid YAML syntax (e.g., ... lines)
- Missing closing frontmatter markers
- Malformed YAML structure
- Encoding issues
- Empty files or files without frontmatter
"""

import os
import re
import yaml
import sys
from pathlib import Path
from typing import List, Dict, Tuple, Optional
import traceback

class FrontmatterFixer:
    def __init__(self, blogs_dir: str):
        self.blogs_dir = Path(blogs_dir)
        self.errors = []
        self.fixed_files = []
        self.processed_files = 0
        
    def find_markdown_files(self) -> List[Path]:
        """Find all .md files in the blogs directory recursively."""
        md_files = []
        for root, dirs, files in os.walk(self.blogs_dir):
            for file in files:
                if file.endswith('.md') and not file.startswith('.'):
                    md_files.append(Path(root) / file)
        return sorted(md_files)
    
    def extract_frontmatter(self, content: str) -> Tuple[Optional[str], Optional[str], bool]:
        """
        Extract frontmatter and content from markdown file.
        Returns: (frontmatter_text, body_content, has_valid_structure)
        """
        if not content.strip():
            return None, None, False
            
        # Check if file starts with frontmatter marker
        if not content.strip().startswith('---'):
            return None, content, False
        
        # Find the closing frontmatter marker
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
            
        frontmatter_text = '\n'.join(frontmatter_lines)
        body_content = '\n'.join(body_lines)
        
        return frontmatter_text, body_content, True
    
    def fix_yaml_syntax(self, yaml_text: str) -> str:
        """Fix common YAML syntax issues."""
        lines = yaml_text.split('\n')
        fixed_lines = []
        
        for line in lines:
            # Remove standalone ... lines (invalid YAML)
            if line.strip() == '...':
                continue
            
            # Fix unquoted values with special characters
            if ':' in line and not line.strip().startswith('#'):
                key_value = line.split(':', 1)
                if len(key_value) == 2:
                    key = key_value[0].strip()
                    value = key_value[1].strip()
                    
                    # Skip if it's already properly quoted or is a list/object
                    if (value and 
                        not value.startswith(("'", '"', '[', '-')) and
                        not value.isdigit() and
                        value not in ('true', 'false', 'null') and
                        any(char in value for char in [':', "'", '"', '&', '|', '>', '<', '%', '@', '#'])):
                        # Quote the value
                        value = f"'{value.replace("'", "''")}'"
                        line = f"{key}: {value}"
            
            fixed_lines.append(line)
        
        return '\n'.join(fixed_lines)
    
    def validate_yaml(self, yaml_text: str) -> Tuple[bool, Optional[str], Optional[Dict]]:
        """
        Validate YAML syntax and return parsed data.
        Returns: (is_valid, error_message, parsed_data)
        """
        try:
            parsed_data = yaml.safe_load(yaml_text)
            return True, None, parsed_data
        except yaml.YAMLError as e:
            return False, str(e), None
        except Exception as e:
            return False, f"Unexpected error: {str(e)}", None
    
    def fix_common_frontmatter_issues(self, frontmatter_data: Dict) -> Dict:
        """Fix common issues in frontmatter data."""
        if not isinstance(frontmatter_data, dict):
            return frontmatter_data
        
        fixed_data = frontmatter_data.copy()
        
        # Ensure required fields are present
        required_fields = {
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
        
        for field, default_value in required_fields.items():
            if field not in fixed_data or fixed_data[field] is None:
                fixed_data[field] = default_value
        
        # Fix data types
        if 'featured' in fixed_data:
            fixed_data['featured'] = bool(fixed_data['featured'])
        if 'draft' in fixed_data:
            fixed_data['draft'] = bool(fixed_data['draft'])
        if 'readingTime' in fixed_data:
            try:
                fixed_data['readingTime'] = int(fixed_data['readingTime'])
            except (ValueError, TypeError):
                fixed_data['readingTime'] = 5
        
        # Ensure tags is a list
        if 'tags' in fixed_data and not isinstance(fixed_data['tags'], list):
            if isinstance(fixed_data['tags'], str):
                fixed_data['tags'] = [fixed_data['tags']]
            else:
                fixed_data['tags'] = []
        
        return fixed_data
    
    def generate_clean_yaml(self, data: Dict) -> str:
        """Generate clean YAML from data."""
        class CustomDumper(yaml.SafeDumper):
            def write_line_break(self, data=None):
                super().write_line_break(data)
                if len(self.indents) == 1:
                    super().write_line_break()
        
        yaml_text = yaml.dump(data, 
                             Dumper=CustomDumper,
                             default_flow_style=False, 
                             allow_unicode=True,
                             sort_keys=False,
                             width=80,
                             indent=2)
        
        # Remove trailing newlines and clean up
        yaml_text = yaml_text.strip()
        return yaml_text
    
    def process_file(self, file_path: Path) -> Dict:
        """
        Process a single markdown file.
        Returns: {
            'file': file_path,
            'status': 'ok'|'fixed'|'error',
            'message': str,
            'errors': List[str]
        }
        """
        result = {
            'file': file_path,
            'status': 'ok',
            'message': '',
            'errors': []
        }
        
        try:
            # Read file with proper encoding
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
            except UnicodeDecodeError:
                with open(file_path, 'r', encoding='utf-8-sig') as f:
                    content = f.read()
            
            if not content.strip():
                result['status'] = 'error'
                result['message'] = 'File is empty'
                return result
            
            # Extract frontmatter
            frontmatter_text, body_content, has_structure = self.extract_frontmatter(content)
            
            if not has_structure:
                result['status'] = 'error'
                result['message'] = 'No valid frontmatter structure found'
                result['errors'].append('Missing frontmatter markers (---)')
                return result
            
            if frontmatter_text is None:
                result['status'] = 'error'
                result['message'] = 'Could not extract frontmatter'
                return result
            
            # Try to parse original YAML
            is_valid, error_msg, parsed_data = self.validate_yaml(frontmatter_text)
            
            if is_valid and parsed_data is not None:
                # Check if data needs fixing
                fixed_data = self.fix_common_frontmatter_issues(parsed_data)
                if fixed_data != parsed_data:
                    result['status'] = 'fixed'
                    result['message'] = 'Fixed frontmatter data issues'
                    
                    # Generate new content
                    clean_yaml = self.generate_clean_yaml(fixed_data)
                    new_content = f"---\n{clean_yaml}\n---\n{body_content}"
                    
                    # Write back to file
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                else:
                    result['message'] = 'Frontmatter is valid'
            else:
                # Try to fix YAML syntax
                result['errors'].append(f'YAML parsing error: {error_msg}')
                
                fixed_yaml = self.fix_yaml_syntax(frontmatter_text)
                is_valid_fixed, error_msg_fixed, parsed_data_fixed = self.validate_yaml(fixed_yaml)
                
                if is_valid_fixed and parsed_data_fixed is not None:
                    result['status'] = 'fixed'
                    result['message'] = f'Fixed YAML syntax issues: {error_msg}'
                    
                    # Fix data issues too
                    fixed_data = self.fix_common_frontmatter_issues(parsed_data_fixed)
                    
                    # Generate new content
                    clean_yaml = self.generate_clean_yaml(fixed_data)
                    new_content = f"---\n{clean_yaml}\n---\n{body_content}"
                    
                    # Write back to file
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                else:
                    result['status'] = 'error'
                    result['message'] = f'Could not fix YAML: {error_msg_fixed}'
                    result['errors'].append(f'Original error: {error_msg}')
                    result['errors'].append(f'Fix attempt error: {error_msg_fixed}')
                    
                    # Show problematic YAML
                    result['errors'].append(f'Problematic YAML:\n{frontmatter_text[:200]}...')
        
        except Exception as e:
            result['status'] = 'error'
            result['message'] = f'Unexpected error: {str(e)}'
            result['errors'].append(traceback.format_exc())
        
        return result
    
    def run(self, dry_run: bool = False) -> None:
        """Run the frontmatter fixing process."""
        print(f"[SCAN] Scanning for markdown files in: {self.blogs_dir}")
        
        md_files = self.find_markdown_files()
        print(f"[INFO] Found {len(md_files)} markdown files")
        
        if dry_run:
            print("[DRY RUN] Running in DRY RUN mode - no files will be modified")
        
        print("\n" + "="*80)
        
        for file_path in md_files:
            self.processed_files += 1
            relative_path = file_path.relative_to(self.blogs_dir)
            
            print(f"\n[PROCESSING] {relative_path}")
            
            if not dry_run:
                result = self.process_file(file_path)
            else:
                # In dry run, just validate
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    frontmatter_text, body_content, has_structure = self.extract_frontmatter(content)
                    
                    if has_structure and frontmatter_text:
                        is_valid, error_msg, parsed_data = self.validate_yaml(frontmatter_text)
                        if is_valid:
                            result = {'status': 'ok', 'message': 'Valid frontmatter', 'errors': []}
                        else:
                            result = {'status': 'error', 'message': f'Invalid YAML: {error_msg}', 'errors': [error_msg]}
                    else:
                        result = {'status': 'error', 'message': 'No valid frontmatter structure', 'errors': []}
                except Exception as e:
                    result = {'status': 'error', 'message': f'Error reading file: {str(e)}', 'errors': []}
            
            # Display result
            if result['status'] == 'ok':
                print(f"   [OK] {result['message']}")
            elif result['status'] == 'fixed':
                print(f"   [FIXED] {result['message']}")
                self.fixed_files.append(file_path)
            else:
                print(f"   [ERROR] {result['message']}")
                self.errors.append((file_path, result))
                
                # Show errors
                if result['errors']:
                    for error in result['errors']:
                        print(f"      • {error}")
        
        # Summary
        print("\n" + "="*80)
        print(f"[SUMMARY]")
        print(f"   Files processed: {self.processed_files}")
        print(f"   Files fixed: {len(self.fixed_files)}")
        print(f"   Files with errors: {len(self.errors)}")
        
        if self.fixed_files:
            print(f"\n[FIXED FILES]:")
            for file_path in self.fixed_files:
                relative_path = file_path.relative_to(self.blogs_dir)
                print(f"   * {relative_path}")
        
        if self.errors:
            print(f"\n[ERROR FILES]:")
            for file_path, result in self.errors:
                relative_path = file_path.relative_to(self.blogs_dir)
                print(f"   * {relative_path}: {result['message']}")

def main():
    """Main function."""
    # Set up paths
    script_dir = Path(__file__).parent
    blogs_dir = script_dir / "src" / "content" / "blogs"
    
    if not blogs_dir.exists():
        print(f"[ERROR] Blogs directory not found: {blogs_dir}")
        sys.exit(1)
    
    # Check for dry run argument
    dry_run = "--dry-run" in sys.argv
    
    print("Frontmatter Parser and Fixer")
    print("=============================")
    
    # Create fixer and run
    fixer = FrontmatterFixer(str(blogs_dir))
    fixer.run(dry_run=dry_run)
    
    if fixer.errors:
        print(f"\n[WARNING] {len(fixer.errors)} files need manual attention")
        sys.exit(1)
    else:
        print(f"\n[SUCCESS] All files processed successfully!")

if __name__ == "__main__":
    main()