Generate AEO Content Command - Launch parallel background agents to create all 220 AEO blog posts for Result Marketing.

**What this command does:**
1. Reads `AEO-CONTENT-TRACKER.md` to get all 220 blog post slugs
2. Creates/updates `AEO-GENERATION-PROGRESS.md` for tracking
3. Launches 5+ parallel Task agents (each generates posts one at a time)
4. Each agent generates posts following `BLOG-STANDARD.md` template
5. Saves drafts to `clients/result-marketing/content/en/blogs/D/`
6. Updates progress tracker IMMEDIATELY after each post
7. Auto-resumes if interrupted (check progress file for next pending item)

**Expected output:**
- 220 draft blog posts in D/ folder (or fewer if some fail)
- Real-time progress tracking with status updates
- Interrupt-safe process (can resume with --start-from parameter)
- Execution time: ~50-65 minutes (with 5 parallel agents)

**Usage:**
```bash
/generate-aeo-content                          # Generate all 220 posts
/generate-aeo-content --category 1              # Generate only Category 1 (30 posts)
/generate-aeo-content --batch-size 10           # Run 10 parallel agents
/generate-aeo-content --start-from [slug]       # Resume from specific post
```

**No arguments needed** - generates all 220 posts by default.

**Categories:**
- Category 1: Permission (TOFU) - 30 posts
- Category 2: AI Visibility - 35 posts
- Category 3: Outcome & Fit - 30 posts
- Category 4: Provider Selection - 40 posts
- Category 5: Risk & Trust - 25 posts
- Category 6: Pricing & ROI - 25 posts
- Category 7: DIY vs Hire - 15 posts
- Category 8: Measurement - 20 posts

**Prerequisites:**
- `AEO-CONTENT-TRACKER.md` exists with all 220 slugs defined
- `BLOG-STANDARD.md` exists with content template
- Folder structure exists: `clients/result-marketing/content/en/blogs/{D,A,F}/`

**Content requirements:**
- Word count: 800-1,200 words per post
- Structure: Direct Answer Block (for AI), Problem, Solution, Industry application, CTA, FAQ
- 3 CTAs per post (intro, middle, end)
- Schema markup (Article + FAQPage)
- Category-specific tone and guidelines

**After execution:**
1. Review drafts in `clients/result-marketing/content/en/blogs/D/`
2. Move good content to `A/` folder
3. Move bad content to `F/` folder with notes
4. Update `AEO-CONTENT-TRACKER.md` with published posts
5. Run quality checks before publishing

**Progress tracking:**
```
📊 AEO Generation Progress:
✅ Completed: 15/220 (6.8%)
🔄 In Progress: 5 agents
⏳ Remaining: 205
⏱️ Elapsed: 5m 20s
```

**Error handling:**
- Failed posts marked as `[FAILED]` with reason
- Process continues even if individual posts fail
- Can re-run specific category or resume from failed slug

**Next steps after generation:**
1. Run D/A/F review workflow
2. Translate approved posts to MS/ZH (optional)
3. Publish to website with schema markup
4. Update SLUG_MANIFEST.json with new slugs
