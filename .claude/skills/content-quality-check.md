# Content Quality Check Skill

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Validate blog post quality against standardized criteria before saving as draft for a specific client.

## Quality Standards

### 1. Word Count ✅
**Requirement:** 1500-2500 words

**How to check:**
- Count total words in markdown content (excluding frontmatter)
- Include headings and body text
- Exclude code blocks and metadata

**Pass criteria:**
- Minimum: 1500 words
- Optimal: 1800-2200 words
- Maximum: 2500 words

**If fails:** Flag as F/ with reason "Insufficient word count: [actual count]"

---

### 2. Readability ✅
**Requirement:** Flesch Reading Ease 60+ (Grade 8-9 level)

**How to check:**
- Use Flesch Reading Ease formula
- Target: 60-70 (Easy to read for general audience)
- Avoid: 0-50 (Difficult, academic language)

**Pass criteria:**
- Score >= 60
- Average sentence length: 15-20 words
- Average word length: <= 2 syllables

**If fails:** Flag as F/ with reason "Readability too low: [score]"

**Language-specific adjustments:**
- **English:** Flesch 60+
- **Mandarin:** Character-based readability (aim for common characters)
- **Malay:** Similar to English, Flesch 60+

---

### 3. Keyword Optimization ✅
**Requirement:** Primary keyword density 1-2%

**How to check:**
- Count primary keyword occurrences
- Calculate: (keyword count / total words) × 100
- Target: 1-2%

**Pass criteria:**
- Primary keyword density: 1-2%
- Primary keyword in: H1, first paragraph, 1-2 H2s
- LSI keywords present: at least 5 variations

**If fails:** Flag as D/ but note "Keyword density: [actual %]"

---

### 4. Content Structure ✅
**Requirement:** H1 + 4-6 H2s + H3s as needed

**How to check:**
```
H1 (Title): Exactly 1
H2 (Main sections): 4-6
H3 (Subsections): 2-4 per H2
```

**Pass criteria:**
- 1 H1 (title)
- 4-6 H2 (main sections)
- Each H2 has 2-3 H3 subsections
- Logical hierarchy (no H3 without H2)

**If fails:** Flag as F/ with reason "Poor structure: [details]"

---

### 5. FAQ Section ✅
**Requirement:** 5-7 questions with schema markup

**How to check:**
- FAQ section exists
- 5-7 questions formatted correctly
- Each question has detailed answer (100-150 words)
- Schema markup ready (JSON-LD or markdown structure)

**Example structure:**
```markdown
## Frequently Asked Questions

### Q: What is equipment financing?
A: Equipment financing is a type of business loan...

### Q: How long does approval take?
A: Typically 24-48 hours after document submission...
```

**Pass criteria:**
- 5-7 questions
- Each answer: 100-150 words
- Questions relevant to topic
- Schema-ready format

**If fails:** Flag as D/ with note "FAQ needs improvement"

---

### 6. Grammar & Spelling ✅
**Requirement:** 0 errors

**How to check:**
- Run grammar check
- Check spelling
- Verify sentence structure
- Check punctuation

**Pass criteria:**
- 0 grammatical errors
- 0 spelling errors
- Proper punctuation
- Complete sentences

**If fails:** Flag as F/ with reason "Grammar errors: [count]"

**Language-specific:**
- **English:** Standard grammar rules
- **Mandarin:** Proper character usage, no simplified/traditional mix
- **Malay:** Proper Bahasa Malaysia grammar

---

### 7. Internal Links ✅
**Requirement:** 3-5 internal links

**How to check:**
- Count links to other pages on same domain
- Verify link relevance
- Check anchor text optimization

**Pass criteria:**
- 3-5 internal links
- Links are contextually relevant
- Anchor text includes keywords
- No broken links

**If fails:** Flag as D/ with note "Needs more internal links"

---

### 8. External Links ✅
**Requirement:** 2-3 authoritative external links

**How to check:**
- Count links to external domains
- Verify authority (government, education, industry leaders)
- Check link relevance

**Pass criteria:**
- 2-3 external links
- Links to authoritative sources (.gov, .edu, industry publications)
- Links support claims or provide additional value
- Links open in new tab

**If fails:** Flag as D/ with note "Needs authoritative sources"

---

### 9. Meta Information ✅
**Requirement:** Complete frontmatter

**Required fields:**
```yaml
---
title: "SEO-optimized title (50-60 chars)"
description: "Meta description (150-160 chars)"
pubDate: YYYY-MM-DD
author: "Ing Heng Credit"
language: "en" | "zh" | "ms"
persona: "contractor-bob" | "logistics-lee" | "warehouse-william"
keywords:
  - primary-keyword
  - secondary-keyword-1
  - secondary-keyword-2
status: "draft"
---
```

**Pass criteria:**
- All fields present
- Title length: 50-60 characters
- Description length: 150-160 characters
- Valid date format
- Valid language code
- Valid persona

**If fails:** Flag as F/ with reason "Incomplete frontmatter"

---

### 10. Call-to-Action (CTA) ✅
**Requirement:** 3-5 conversion points

**How to check:**
- Count CTA elements
- Verify placement (intro, middle, conclusion)
- Check clarity and relevance

**Pass criteria:**
- 3-5 CTAs throughout content
- CTAs include contact info (WhatsApp, phone, email)
- Action-oriented language
- Culturally appropriate (language-specific)

**If fails:** Flag as D/ with note "Weak CTAs"

---

## Validation Process

### Step 1: Run All Checks
Execute all 10 quality checks sequentially.

### Step 2: Calculate Score
```
Total checks: 10
Pass threshold: 8/10 (80%)

Score = (Passed checks / 10) × 100
```

### Step 3: Decision Logic
```
If score >= 80%:
  → Save to /example-clients/[client-name]/drafts/D/[filename].md
  → Status: "Ready for review"

If score < 80% AND critical errors:
  → Save to /example-clients/[client-name]/drafts/F/[filename].md
  → Status: "Failed - needs revision"
  → Include failure reasons

If score < 80% BUT no critical errors:
  → Save to /example-clients/[client-name]/drafts/D/[filename].md
  → Status: "Needs minor improvements"
  → Include improvement notes
```

### Critical Errors (Auto-fail):
- Word count < 1000
- No H1 or H2 structure
- Grammar errors > 5
- Missing frontmatter
- Readability score < 50

---

## Output Format

### Pass (D/ Draft)
```
✅ QUALITY CHECK PASSED

File: 2025-11-01-excavator-financing-guide-en.md
Score: 9/10 (90%)

Passed checks:
- Word count: 1850 words ✅
- Readability: Flesch 65 ✅
- Keyword density: 1.5% ✅
- Structure: H1 + 5 H2s ✅
- FAQ: 6 questions ✅
- Grammar: 0 errors ✅
- Internal links: 4 ✅
- External links: 3 ✅
- Meta info: Complete ✅

Minor notes:
- Consider adding 1 more CTA in middle section

Saved to: /example-clients/[client-name]/drafts/D/2025-11-01-excavator-financing-guide-en.md
```

### Fail (F/ Failed)
```
❌ QUALITY CHECK FAILED

File: 2025-11-01-excavator-financing-guide-en.md
Score: 6/10 (60%)

Failed checks:
- Word count: 1200 words ❌ (Target: 1500-2500)
- Readability: Flesch 45 ❌ (Target: 60+)
- Grammar: 3 errors ❌
- FAQ: Only 3 questions ❌ (Target: 5-7)

Passed checks:
- Keyword density: 1.8% ✅
- Structure: H1 + 5 H2s ✅
- Internal links: 4 ✅
- External links: 2 ✅
- Meta info: Complete ✅
- CTAs: 4 ✅

Saved to: /example-clients/[client-name]/drafts/F/2025-11-01-excavator-financing-guide-en.md

REVISION NEEDED:
1. Add 300+ words to reach minimum
2. Simplify sentence structure for better readability
3. Fix grammar errors
4. Add 2 more FAQ questions
```

---

## Execution Timing
- Per blog post: ~30 seconds
- Automated validation

## Agent Usage
This skill is used by: **Content Generation Agent**
Invoked after: `multi-language-content.md` skill

## Success Criteria
✅ All quality checks executed
✅ Clear pass/fail decision
✅ Detailed feedback provided
✅ Files saved to correct folder (D/ or F/)
✅ Failure reasons documented
