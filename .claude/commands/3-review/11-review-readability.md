# Command ⑪ /11-review-readability

**Phase:** REVIEW
**Primary Agent:** content-qa
**Time:** 30 minutes (AI working)

## Purpose
Check content quality, readability, user experience, and conversion effectiveness.

## Prerequisites

✅ **Required: At least 1 built page from BUILD phase:**
- From ⑤ `/build-author` OR
- From ⑥ `/build-hub-page` OR
- From ⑦ `/build-blog` OR
- From ⑧ `/build-service-page`

### Validation Check
```
❌ If no content exists:
→ Go back: Run BUILD commands ⑤⑥⑦⑧ to create content first
```

## What This Command Does

The **content-qa** agent will:

1. **Readability Analysis** (SEO-pro.md Chapter 4)
   - Flesch Reading Ease (target: 60-70)
   - Grade Level (target: 8th grade or below)
   - Average sentence length (target: 15-20 words)
   - Paragraph length (target: 2-4 sentences)
   - Passive voice percentage (target: <10%)
   - Transition words (target: 30%+ of sentences)

2. **Formatting Check**
   - Short paragraphs (mobile-friendly)
   - Bullet points for lists
   - Bold/italic for emphasis (not overused)
   - Images break up text (every 300-500 words)
   - White space utilized
   - Subheadings frequent (every 250-400 words)
   - Font size readable (16px minimum)

3. **User Experience Audit**
   - Value proposition above fold
   - Scannable structure
   - Logical flow
   - No intrusive elements
   - Easy navigation
   - Mobile-friendly interface

4. **Conversion Audit** (for transactional pages)
   - Primary CTA above fold
   - CTA repeated 2-3 times
   - Trust signals near CTAs
   - Forms/CTAs working
   - Clear value proposition
   - No friction points

## Output File Created

```
clients/[client-name]/reviews/[page-name]-readability-report.md
```

**Example:** `reviews/equipment-financing-guide-readability-report.md`

## Report Format

```markdown
# Readability Audit: [Page Name]

**Date:** 2025-11-10
**Page:** /en/blog/equipment-financing-guide
**Overall Score:** 68/100 ⚠️ NEEDS WORK

---

## Readability Metrics: 58/100 ⚠️

### Flesch Reading Ease: 55 (Target: 60-70)
- Current: **Fairly Difficult**
- Target: **Standard** (8th-9th grade)
- Issue: Sentence complexity too high

### Grade Level: 11th Grade (Target: 8th)
- Too complex for average reader
- Needs simplification

### Sentence Analysis:
- Average length: **28 words** (target: 15-20)
- Sentences >25 words: **15 sentences** ❌
- Longest sentence: 42 words (line 89)

### Paragraph Analysis:
- Average: 4.2 sentences (target: 2-4)
- Paragraphs >4 sentences: **8 paragraphs** ❌
- Longest paragraph: 7 sentences (line 120-135)

### Passive Voice: 18% ⚠️ (target: <10%)
- Found 12 passive constructions
- Should be more active and direct

### Transition Words: 25% ⚠️ (target: 30%+)
- Need more: however, therefore, additionally, etc.

---

## Formatting Score: 75/100 ✅

### What's Good:
✅ Images every 350 words (optimal)
✅ Bullet points used effectively (8 lists)
✅ Subheadings every 280 words (good)
✅ Bold used for emphasis (not overused)

### What Needs Work:
⚠️ Font size: 14px (increase to 16px)
   Fix: Update global CSS
   Time: 5 minutes

⚠️ No table of contents (for 3,000+ word articles)
   Fix: Add TOC component
   Time: 15 minutes

---

## User Experience Score: 70/100 ⚠️

### What's Good:
✅ Value proposition clear in first paragraph
✅ Scannable structure (headers, bullets)
✅ Logical flow section-to-section
✅ No auto-play videos

### What Needs Work:
❌ No jump links in long sections
   Fix: Add table of contents with anchor links
   Time: 15 minutes

⚠️ Mobile navigation could be clearer
   Fix: Add breadcrumbs component
   Time: 10 minutes

---

## Conversion Score: 60/100 ⚠️
*(Only applicable for service/product pages)*

### Issues Found:
❌ Primary CTA below fold
   Fix: Move CTA above fold in hero section
   Time: 5 minutes
   Impact: Critical for conversions

❌ Only 1 CTA total (should have 3+)
   Fix: Add CTA after "Why Choose Us" section
   Fix: Add CTA in conclusion
   Time: 10 minutes

⚠️ Weak CTA copy: "Click here"
   Fix: Change to action-oriented: "Get Your Free Equipment Quote"
   Time: 2 minutes

❌ No trust signals near CTA
   Fix: Add "200+ businesses financed" badge
   Time: 5 minutes

---

## PRIORITY FIXES

### HIGH (Must fix before ⑫):
1. **Break up long sentences** (Split 15 sentences >25 words)
   - Time: 45 minutes
   - Impact: +8 readability points
   - Brings Flesch score from 55 → 63

2. **Shorten paragraphs** (Split 8 paragraphs >4 sentences)
   - Time: 30 minutes
   - Impact: +5 readability points

3. **Move primary CTA above fold** (Service pages only)
   - Time: 5 minutes
   - Impact: Critical for conversions

### MEDIUM:
4. **Reduce passive voice** (Rewrite 12 passive sentences)
   - Time: 30 minutes
   - Impact: +3 readability points

5. **Add table of contents** (For 2,500+ word content)
   - Time: 15 minutes
   - Impact: +5 UX points

### LOW:
6. **Increase font size** (14px → 16px)
   - Time: 5 minutes (global CSS)
   - Impact: +2 UX points

---

## OVERALL STATUS: ⚠️ NEEDS WORK

**Current Score:** 68/100
**Potential Score:** 90/100 (with HIGH fixes)

**Recommendation:**
Implement HIGH PRIORITY fixes (1-3).
This brings score to 85+, which is passing.

**Estimated Fix Time:** 1.5 hours

**Next Step:**
- Fix issues above
- Re-run ⑪ /11-review-readability
- Target: 85+ score to proceed to ⑫
```

## Skills Used
- `readability-scoring` - Flesch-Kincaid, grade level
- `ux-checklist` - User experience elements
- `conversion-audit` - CTA effectiveness
- `formatting-check` - Visual presentation
- `cta-effectiveness` - Conversion element analysis

## Agent Instructions

```
You are the content-qa agent. Evaluate readability and UX.

CLIENT: [client-name]
PAGE: [page-path]

STEP 1: LOAD PAGE
Read: clients/[client-name]/website/src/pages/[page-path].astro

STEP 2: ANALYZE READABILITY
Calculate:
- Flesch Reading Ease (60-70 = good)
- Grade Level (8th grade = target)
- Average sentence length (15-20 words = good)
- Average paragraph length (2-4 sentences = good)
- Passive voice % (<10% = good)
- Transition word % (30%+ = good)

Reference: SEO-pro.md Chapter 4

STEP 3: CHECK FORMATTING
Verify:
- Short paragraphs (mobile-friendly)
- Bullet points used for lists
- Bold/italic for emphasis (not excessive)
- Images every 300-500 words
- Subheadings every 250-400 words
- White space (not wall of text)

STEP 4: AUDIT UX
Check:
- Value proposition above fold
- Scannable structure
- Logical flow
- No intrusive popups/ads
- Easy navigation
- Breadcrumbs (if applicable)
- Table of contents (for 2,500+ words)

STEP 5: AUDIT CONVERSIONS (if service/product page)
Check:
- Primary CTA above fold
- CTA repeated 2-3 times
- Trust signals near CTAs
- CTA copy is action-oriented
- Forms simple (low friction)
- Mobile CTAs thumb-friendly

STEP 6: SCORE & PRIORITIZE
Scores (0-100 each):
- Readability
- Formatting
- User Experience
- Conversion (if applicable)

Overall = Average

Status:
- 85-100: ✅ PASS
- 70-84: ⚠️ NEEDS WORK
- 0-69: ❌ FAIL

STEP 7: CREATE FIX LIST
For each issue:
- Describe problem
- Suggest fix
- Estimate time
- Estimate impact (+X points)

Prioritize:
- HIGH: Quick wins (>5 point impact OR critical conversion)
- MEDIUM: Valuable (3-4 point impact)
- LOW: Nice to have (<3 point impact)

STEP 8: SAVE REPORT
Output to: clients/[client-name]/reviews/[page-name]-readability-report.md
```

## Success Criteria
- [ ] Readability metrics calculated (Flesch, Grade Level)
- [ ] Formatting issues identified
- [ ] UX issues identified
- [ ] Conversion issues identified (if applicable)
- [ ] Priority fixes listed with time estimates
- [ ] Clear PASS/FAIL status
- [ ] Report saved in `clients/[client-name]/reviews/`

## Next Step

### If ALL 3 reviews PASS (⑨⑩⑪):
→ Run **⑫ /12-translate-content** ✅
→ Ready to publish!

### If ANY review NEEDS WORK or FAILS:
→ Fix the issues
→ Re-run failed reviews
→ Repeat until all 3 PASS

**Critical:** ALL THREE reviews (⑨⑩⑪) must PASS before proceeding to ⑫

## Common Errors

**Error:** `No .astro files found`
**Solution:** Run **⑤⑥⑦⑧ BUILD commands** first

**Error:** `Page has no content`
**Solution:** Content generation may have failed. Re-run BUILD command.

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10
