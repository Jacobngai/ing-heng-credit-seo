# Blog Content Formatting System

**Purpose:** Create visually appealing, branded blog posts with consistent formatting across all clients

**Status:** ✅ Production-ready | Used by: Ing Heng Credit

---

## Overview

This system provides **brutalist-style blog formatting** that transforms plain `.md` markdown files into beautifully formatted, branded blog posts with:

- Enhanced typography with visual hierarchy
- Brutalist design elements (thick borders, shadows)
- Custom list bullets matching brand colors
- Styled tables, blockquotes, code blocks
- Client brand integration (colors, fonts)

---

## How It Works

### 1. File Structure

```
clients/[client-name]/website/
├── src/
│   ├── content/blogs/           ← Markdown blog posts
│   │   ├── en/                  ← English blogs
│   │   ├── ms/                  ← Malay blogs
│   │   └── zh/                  ← Chinese blogs
│   └── pages/
│       └── [lang]/blog/
│           └── [slug].astro     ← Dynamic blog template
```

### 2. Markdown (.md) Structure

Each blog post must have:

```markdown
---
# REQUIRED FRONTMATTER
title: 'SEO-Optimized Blog Title'
description: 'Compelling 150-160 char meta description'
author: 'Company Name'
publishDate: 2025-01-15
category: 'Equipment Financing'
tags: ['forklift', 'financing', 'Malaysia']
locale: 'en' # or 'ms', 'zh'
featured: true
readingTime: 8
keywords:
  - 'primary keyword'
  - 'secondary keyword'
  - 'long-tail keyword'

# OPTIONAL BUT RECOMMENDED
persona: 'Construction Chris' # Target persona
faqSchema:  # For rich snippets
  - question: 'How long does approval take?'
    answer: 'Fast approval within 1-3 business days.'
  - question: 'What credit score do I need?'
    answer: 'We accept all credit scores. 95% approval rate.'
---

# Your Blog Title Here

Introduction paragraph. Make it engaging and keyword-rich.

## Main Heading (H2)

Content paragraph with **bold text** and *italic text*.

### Sub-Heading (H3)

More content here.

- Bullet point 1
- Bullet point 2
- Bullet point 3

> Important callout or quote goes here

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |

---

## Next Section

Continue your content...
```

---

## Styling Features

### Typography Hierarchy

```css
H1 (Title): 4-5rem, Black, Brutalist font
H2: 2.5rem, Black, UPPERCASE, Bronze underline
H3: 1.75rem, Bold, UPPERCASE
H4: 1.25rem, Bold
Paragraph: 1.125rem, Line height 1.8
```

### Lists - Auto-Styled with Brand Icons

**Before (plain markdown):**
```markdown
- Point 1
- Point 2
- Point 3
```

**After (rendered):**
```
▸ Point 1
▸ Point 2
▸ Point 3
```
*Bronze triangle bullets, custom spacing*

### Tables - Brutalist Design

**Features:**
- Bronze header background
- Thick black borders
- Shadow effect (6px 6px)
- Zebra striping (beige alternating rows)
- Hover effects

### Blockquotes - Callout Boxes

**Rendered as:**
- Beige background
- Bronze left border (6px)
- Black borders (3px) on other sides
- Box shadow
- Large decorative quotation mark

**Usage:**
```markdown
> This becomes a visually striking callout box perfect for tips, warnings, or important notes.
```

### Code Blocks

**Inline code:** Beige background, black border
**Code blocks:** Dark background, bronze syntax highlighting

---

## Client Customization

### Step 1: Get Client Brand Colors

Extract from `clients/[client-name]/CLAUDE.md`:

```javascript
// Example: Ing Heng Credit
Primary: #8B6F47   // Bronze brown
Accent: #D4A574    // Light bronze
Dark: #2D1810      // Deep brown
Background: #F5F5DC // Beige
```

### Step 2: Update [slug].astro Styles

Replace brand colors in the `<style>` section:

```css
/* Find and replace */
#8B6F47  →  [Client Primary Color]
#D4A574  →  [Client Accent Color]
#2D1810  →  [Client Dark Color]
#F5F5DC  →  [Client Background Color]
```

### Step 3: Update Typography

```css
/* If client uses different fonts */
.prose h2 {
  font-family: '[Client Heading Font]', sans-serif;
}
```

---

## Creating Blog Content

### Command: Generate New Blog Post

**Location:** `.claude/commands/2-build/6-blog-post.md`

**Usage:**
1. Research keyword & topic
2. Run `/6-blog-post` command
3. Specify language (EN/MS/ZH)
4. Command auto-generates with proper frontmatter

**Generated File:**
```
src/content/blogs/[lang]/[slug].md
```

**Auto-includes:**
- SEO-optimized frontmatter
- Proper heading hierarchy
- FAQ schema for rich snippets
- Internal links to equipment pages
- CTA sections

---

## Testing Blog Formatting

### Local Testing

```bash
cd clients/[client-name]/website
npm run dev

# Visit:
http://localhost:4321/en/blog/[your-blog-slug]
```

### Check List

- ✅ H2 headings have bronze underline
- ✅ Lists show brand-colored bullets
- ✅ Tables have brutalist borders + shadow
- ✅ Blockquotes styled as callout boxes
- ✅ Brand colors consistent throughout
- ✅ Responsive on mobile

---

## Multi-Language Support

**Same formatting applies to all 3 languages:**

```
/en/blog/[slug]  →  English blog with EN styling
/ms/blog/[slug]  →  Malay blog with same styling
/zh/blog/[slug]  →  Chinese blog with same styling
```

**Important:**
- ZH blogs should use `Noto Sans SC` font for Chinese characters
- MS blogs use same English fonts (readable in Bahasa)

---

## SEO Requirements

### Every Blog MUST Have

1. **Frontmatter SEO:**
   - `title`: 50-60 characters
   - `description`: 150-160 characters
   - `keywords`: 5-10 relevant keywords

2. **Schema Markup:**
   - Article schema (auto-generated)
   - FAQ schema (if `faqSchema` provided)

3. **Internal Links:**
   - Link to 3-5 relevant equipment pages
   - Link to calculator page
   - Link to services pages

4. **Content Structure:**
   - Introduction with keyword (first 100 words)
   - Multiple H2 sections
   - FAQ section (optional but recommended)
   - Conclusion with CTA

---

## Example Usage

### Scenario: New Client Onboarding

```bash
# Step 1: After creating client folder
cd clients/new-client/website/

# Step 2: Copy blog template
cp clients/ing-heng/website/src/pages/en/blog/[slug].astro \
   clients/new-client/website/src/pages/en/blog/[slug].astro

# Step 3: Update brand colors in [slug].astro
# Replace #8B6F47, #D4A574, #2D1810, #F5F5DC with client colors

# Step 4: Generate first blog
/6-blog-post

# Step 5: Test
npm run dev
```

### Scenario: Updating Existing Client

```bash
# Update blog styling to match new brand guidelines
# Edit: clients/[client]/website/src/pages/[lang]/blog/[slug].astro

# Update colors only - don't change structure
# Test on one blog first before deploying
```

---

## Best Practices

### DO ✅

- Always use proper frontmatter (all required fields)
- Include FAQ schema for rich snippets
- Add internal links to equipment/service pages
- Use H2/H3 hierarchy (don't skip levels)
- Write at 5th-grade reading level
- Include tables for comparison data
- Use blockquotes for important tips/warnings
- Add CTA in conclusion

### DON'T ❌

- Skip frontmatter fields
- Use H1 in markdown (title is auto-generated H1)
- Create walls of text (use headings every 200-300 words)
- Forget to specify `locale` in frontmatter
- Use placeholder Lorem Ipsum content
- Make false claims (traffic, rankings) without proof
- Forget to test mobile responsiveness

---

## Maintenance

### When to Update

**Update blog styling if:**
- Client rebrand (new colors/fonts)
- Adding new markdown features (callout boxes, etc.)
- Accessibility improvements needed
- Performance optimization required

**Don't update if:**
- Only content changes (edit .md files directly)
- Minor color tweaks (use CSS variables instead)

---

## Troubleshooting

### Issue: Blog Has No Formatting

**Cause:** Missing `prose` class on content wrapper
**Fix:** Verify `<div class="prose prose-lg">` wraps `<Content />`

### Issue: Wrong Brand Colors

**Cause:** Forgot to update colors in `<style>` section
**Fix:** Find/replace all color hex codes with client colors

### Issue: Chinese Characters Display Incorrectly

**Cause:** Missing Chinese font
**Fix:** Add `Noto Sans SC` to prose styles

### Issue: Tables Look Broken

**Cause:** Markdown table syntax error
**Fix:** Ensure proper pipe `|` alignment:

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Data 1   | Data 2   |
```

---

## File Locations Reference

```
Key Files:
├── .claude/skills/blog-content-formatting.md       ← THIS FILE
├── .claude/commands/2-build/6-blog-post.md        ← Blog generator
├── clients/[name]/website/
│   ├── src/pages/
│   │   └── [lang]/blog/
│   │       └── [slug].astro                       ← Blog template
│   └── src/content/blogs/
│       └── [lang]/                                ← Markdown files
```

---

## Version History

- **v1.0** (2025-01-13): Initial brutalist blog styling for Ing Heng Credit
- Enhanced typography, tables, lists, blockquotes
- Multi-language support (EN/MS/ZH)
- FAQ schema integration

---

**Questions?** See `.claude/commands/README.md` or Framework Docs
