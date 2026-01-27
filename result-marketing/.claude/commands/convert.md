---
description: Convert Markdown files to Astro pages
---

# Convert Command

You are the **Result Marketing Converter**. Your job is to convert Markdown files to Astro pages.

## Your Mission

1. **Read all MD files** from `content/draft/`
2. **Generate Astro pages** for each MD file
3. **Add SEO metadata** (frontmatter + AI-generated)
4. **Save Astro pages** to `website/src/pages/en/blog/`
5. **Archive MD files** to `content/complete/`
6. **Report results** - Show what was converted

---

## Process

### Step 1: Discover Markdown Files

```bash
# Find all MD files in draft/
ls content/draft/*.md
```

**Show user:**
- Number of MD files found
- List of files to convert
- Ask for confirmation

---

### Step 2: Convert Each File

**For each MD file:**

1. **Read the Markdown file**
2. **Generate/enhance frontmatter:**
   ```yaml
   ---
   layout: ../../layouts/BlogLayout.astro
   title: [From MD or AI-generated]
   description: [AI-generated from content]
   slug: [From title]
   date: [Current date]
   tags: [AI-generated from content]
   keywords: [AI-generated from content]
   ---
   ```

3. **Create Astro page:**
   ```astro
   ---
   layout: '../../layouts/BlogLayout.astro';
   const { title, description, slug, date, tags, keywords } = Astro.props;
   ---

   # [Content from MD]
   ```

4. **Save to:** `website/src/pages/en/blog/[slug].astro`

---

### Step 3: Archive Original MD

**After successful Astro creation:**
```bash
# Move MD from draft/ to complete/
mv content/draft/[filename].md content/complete/[filename].md
```

**If conversion fails:**
- Keep MD in `draft/`
- Log error to user
- Continue with next file

---

### Step 4: Update Index (Optional)

**Update blog index if needed:**
```astro
// website/src/pages/en/blog/index.astro
// Auto-detects all .astro files in blog/ folder
```

---

### Step 5: Report Results

```
✅ Conversion Complete!

📊 Summary:
   - MD files found: N
   - Astro pages created: N
   - Failed: N
   - Archived to complete/: N

📁 Astro Pages Created:
   - /en/blog/[slug-1]
   - /en/blog/[slug-2]
   - ...

📝 Archived MD:
   - content/complete/[file-1].md
   - content/complete/[file-2].md

❌ Failed (if any):
   - [filename] - [error reason]

🔗 Next Steps:
   1. Review Astro pages in website/src/pages/en/blog/
   2. Run /qa to test
   3. Run /deploy to publish
```

---

## Error Handling

### Continue on Error

**If one file fails:**
```
⚠️ Conversion Failed: [filename]

Error: [description]

Continuing with remaining files...

[Continue processing other files]
```

**Report all failures at end.**

### Common Errors

**Missing frontmatter in MD:**
```
Error: No title found in [filename]

Fix: Add title to frontmatter or AI-generate one
Action: [AI-generate title and continue]
```

**Invalid slug characters:**
```
Error: Invalid characters in slug

Fix: Slugify the title (kebab-case)
Action: [Auto-generate slug from title]
```

**Duplicate slug:**
```
Error: Slug [slug] already exists

Fix: Add date prefix or number suffix
Action: [Auto-generate unique slug]
```

---

## AI-Generated Metadata

**For each post, generate:**

**Description** (120-155 chars):
- Summarize main point
- Include target keyword
- Compelling for search/click-through

**Tags** (3-5 tags):
- Main topics covered
- Industry terms
- SEO categories

**Keywords** (5-10 keywords):
- Primary keyword
- Secondary keywords
- Long-tail variations

---

## File Naming

**Source MD:** `content/draft/[Title-Based].md`
**Target Astro:** `website/src/pages/en/blog/[slug].astro`
**Archive MD:** `content/complete/[Title-Based].md`

**Slug generation:**
- Take from MD frontmatter (if exists)
- OR slugify the title
- kebab-case (lowercase, hyphens)

---

## Progress Tracking

**For large batches (100+ files):**

Create/Update: `content/CONVERSION-PROGRESS.md`

```markdown
# Conversion Progress

Started: [TIMESTAMP]
Status: IN_PROGRESS

Total Files: N
Completed: 0
Failed: 0

## Files
- [IN_PROGRESS] file-1.md
- [PENDING] file-2.md
- [PENDING] file-3.md
...
```

**Update after EACH file:**
```markdown
- [DONE] file-1.md
- [IN_PROGRESS] file-2.md
```

---

## Quick Reference

```bash
# Convert all MD files
/convert

# Convert specific file
/convert crane-rental-guide.md

# Convert with preview
/convert --preview
```

---

## Constraints

- ✅ Convert ALL MD files from draft/
- ✅ Archive MD to complete/ after conversion
- ✅ Continue on error (don't stop for one failure)
- ✅ Generate SEO metadata automatically
- ✅ Use title-based filenames
- ✅ Track progress for large batches
- ❌ Don't delete original MD files (archive them)
- ❌ Don't overwrite existing Astro files without asking

---

## Batch Mode (1000+ Files)

**For very large batches:**

1. **Show progress indicator:**
   ```
   Converting: [████████░░] 80% (800/1000)
   Completed: 800 | Failed: 3 | Remaining: 197
   ```

2. **Process in chunks** (for memory management):
   - Process 100 files at a time
   - Update progress after each chunk
   - Continue until complete

3. **Final summary:**
   ```
   ✅ Batch Conversion Complete!

   Processed: 1000 files
   Successful: 997
   Failed: 3

   Time: X minutes

   Failed files:
   - [list failed files with errors]
   ```

---

**Remember:** Archive MD to complete/, don't delete. Continue on error.
