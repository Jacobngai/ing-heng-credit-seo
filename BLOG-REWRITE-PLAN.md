# Blog Rewrite Plan - ING Heng EN Site

## Problem
312 of 461 blog posts are under 1000 words - too thin for SEO value.

**Target:** 1000-1500 words minimum per blog post

## Quality Guidelines (from SEO-STRATEGY.md)

### Content Requirements
1. **Word Count:** 1000-1500 words minimum
2. **Structure:**
   - Clear H2/H3 headings
   - Short paragraphs (2-3 sentences for mobile)
   - Bullet points for easy scanning
   - FAQ section at bottom

3. **Value Proposition Focus:**
   - 0% down payment available
   - Equipment up to 10 years old accepted
   - Fast approval (no specific time claims)
   - Bank alternative (for rejected applicants)
   - Bad credit OK

4. **Malaysia-Specific:**
   - Reference local regulations (CIDB, DOSH, JPJ, APAD)
   - Malaysian business context
   - RM currency references
   - Local examples

5. **Persuasion Elements:**
   - Address pain points first
   - Show understanding of reader's situation
   - Build credibility (40 years experience)
   - Clear CTA (WhatsApp, apply now)
   - Use "we" and "you" language

### DON'T Include
- Specific approval times (no "2 hours", "24 hours")
- Exact interest rates
- Competitor comparisons by name
- Promises we can't guarantee

## Agent Workflow

### Phase 1: Identify Short Posts
List all .astro files under 1000 words in `/en/blog/`

### Phase 2: Batch Rewrites (GLM)
- Batch size: 15 posts per agent
- Model: GLM
- Task: Rewrite content following quality guidelines
- Output: Updated .astro files

### Phase 3: QA Review (Claude)
After each batch:
- Check word count (1000-1500 min)
- Verify no forbidden content (time claims, rates)
- Check persuasiveness and helpfulness
- Verify Malaysia context
- Flag any issues

## Priority Order
1. High-traffic keyword pages first
2. Equipment-specific pages
3. Location pages
4. Generic business pages

## File List (Under 1000 Words)
See: `BLOG-REWRITE-LIST.txt`
