#!/usr/bin/env python3
import os
import re
from pathlib import Path

def fix_yaml_apostrophes(file_path):
    """Fix YAML apostrophe issues in blog posts"""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Find frontmatter (between ---s)
        frontmatter_match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
        if not frontmatter_match:
            return False
        
        frontmatter = frontmatter_match.group(1)
        rest_of_file = content[frontmatter_match.end():]
        
        # Replace escaped apostrophes with regular text in YAML
        # This replaces \' with just regular text alternatives
        fixed_frontmatter = frontmatter.replace("\\'", "")
        fixed_frontmatter = fixed_frontmatter.replace("doesn't", "does not")
        fixed_frontmatter = fixed_frontmatter.replace("don't", "do not")
        fixed_frontmatter = fixed_frontmatter.replace("won't", "will not")
        fixed_frontmatter = fixed_frontmatter.replace("can't", "cannot")
        fixed_frontmatter = fixed_frontmatter.replace("isn't", "is not")
        fixed_frontmatter = fixed_frontmatter.replace("aren't", "are not")
        fixed_frontmatter = fixed_frontmatter.replace("weren't", "were not")
        fixed_frontmatter = fixed_frontmatter.replace("wasn't", "was not")
        fixed_frontmatter = fixed_frontmatter.replace("haven't", "have not")
        fixed_frontmatter = fixed_frontmatter.replace("hasn't", "has not")
        fixed_frontmatter = fixed_frontmatter.replace("hadn't", "had not")
        fixed_frontmatter = fixed_frontmatter.replace("wouldn't", "would not")
        fixed_frontmatter = fixed_frontmatter.replace("couldn't", "could not")
        fixed_frontmatter = fixed_frontmatter.replace("shouldn't", "should not")
        fixed_frontmatter = fixed_frontmatter.replace("it's", "it is")
        fixed_frontmatter = fixed_frontmatter.replace("It's", "It is")
        fixed_frontmatter = fixed_frontmatter.replace("that's", "that is")
        fixed_frontmatter = fixed_frontmatter.replace("That's", "That is")
        fixed_frontmatter = fixed_frontmatter.replace("what's", "what is")
        fixed_frontmatter = fixed_frontmatter.replace("What's", "What is")
        fixed_frontmatter = fixed_frontmatter.replace("there's", "there is")
        fixed_frontmatter = fixed_frontmatter.replace("There's", "There is")
        fixed_frontmatter = fixed_frontmatter.replace("here's", "here is")
        fixed_frontmatter = fixed_frontmatter.replace("Here's", "Here is")
        fixed_frontmatter = fixed_frontmatter.replace("let's", "let us")
        fixed_frontmatter = fixed_frontmatter.replace("Let's", "Let us")
        fixed_frontmatter = fixed_frontmatter.replace("I'm", "I am")
        fixed_frontmatter = fixed_frontmatter.replace("I've", "I have")
        fixed_frontmatter = fixed_frontmatter.replace("I'll", "I will")
        fixed_frontmatter = fixed_frontmatter.replace("I'd", "I would")
        fixed_frontmatter = fixed_frontmatter.replace("we're", "we are")
        fixed_frontmatter = fixed_frontmatter.replace("We're", "We are")
        fixed_frontmatter = fixed_frontmatter.replace("we've", "we have")
        fixed_frontmatter = fixed_frontmatter.replace("We've", "We have")
        fixed_frontmatter = fixed_frontmatter.replace("we'll", "we will")
        fixed_frontmatter = fixed_frontmatter.replace("We'll", "We will")
        fixed_frontmatter = fixed_frontmatter.replace("you're", "you are")
        fixed_frontmatter = fixed_frontmatter.replace("You're", "You are")
        fixed_frontmatter = fixed_frontmatter.replace("you've", "you have")
        fixed_frontmatter = fixed_frontmatter.replace("You've", "You have")
        fixed_frontmatter = fixed_frontmatter.replace("you'll", "you will")
        fixed_frontmatter = fixed_frontmatter.replace("You'll", "You will")
        fixed_frontmatter = fixed_frontmatter.replace("they're", "they are")
        fixed_frontmatter = fixed_frontmatter.replace("They're", "They are")
        fixed_frontmatter = fixed_frontmatter.replace("they've", "they have")
        fixed_frontmatter = fixed_frontmatter.replace("They've", "They have")
        fixed_frontmatter = fixed_frontmatter.replace("they'll", "they will")
        fixed_frontmatter = fixed_frontmatter.replace("They'll", "They will")
        
        if fixed_frontmatter != frontmatter:
            new_content = f"---\n{fixed_frontmatter}\n---{rest_of_file}"
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
        if fix_yaml_apostrophes(md_file):
            print(f"Fixed: {md_file.as_posix()}")
            fixed_count += 1
    
    print(f"\nTotal files fixed: {fixed_count}")

if __name__ == '__main__':
    main()