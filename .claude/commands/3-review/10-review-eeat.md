# Command ⑩ /10-review-eeat

**Phase:** REVIEW
**Primary Agent:** content-qa
**Helper Reference:** eeat-documentation (for standards)
**Time:** 30 minutes (AI working)

## Purpose
Verify Experience, Expertise, Authority, and Trustworthiness signals are strong and properly implemented.

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

1. **Evaluate EXPERIENCE (First E)** - 25 points
   - [ ] First-person language ("I tested," "In my experience")
   - [ ] Specific details only possible through experience
   - [ ] Original photos/videos (not stock)
   - [ ] Before/after results
   - [ ] Timestamps and dates
   - [ ] Personal anecdotes with specifics

2. **Evaluate EXPERTISE (Second E)** - 25 points
   - [ ] Author byline with credentials
   - [ ] Author bio page linked
   - [ ] Professional qualifications visible
   - [ ] Industry terminology (explained clearly)
   - [ ] Data-backed claims
   - [ ] Cited credible sources (3-5 minimum)
   - [ ] Technical accuracy

3. **Evaluate AUTHORITATIVENESS** - 25 points
   - [ ] Comprehensive topical coverage
   - [ ] Links to/from other authority content
   - [ ] Brand mentions potential
   - [ ] Industry recognition mentioned
   - [ ] Original research or insights
   - [ ] Content depth (not surface-level)

4. **Evaluate TRUSTWORTHINESS** - 25 points
   - [ ] Contact information visible
   - [ ] Privacy policy linked
   - [ ] Terms of service linked
   - [ ] About page exists
   - [ ] Customer reviews/testimonials (real)
   - [ ] No misleading headlines
   - [ ] Last updated date shown
   - [ ] Fact-checked information
   - [ ] Cited sources are credible

## Output File Created

```
clients/[client-name]/reviews/[page-name]-eeat-score.md
```

**Example:** `reviews/equipment-financing-guide-eeat-score.md`

## Report Format

```markdown
# E-E-A-T Audit: [Page Name]

**Date:** 2025-11-10
**Page:** /en/blog/equipment-financing-guide
**Overall Score:** 75/100 ⚠️ NEEDS WORK

---

## Experience Score: 15/25 ⚠️

### What's Good:
✅ Has specific details about testing process
✅ Includes timestamps (tested over 6 months)

### What's Missing:
❌ No first-person language (uses "you" instead of "I")
   Fix: Rewrite intro with "After financing 50+ equipment purchases..."
   Impact: +5 points

❌ Using stock photos (generic equipment images)
   Fix: Request client to provide real photos of their financed equipment
   Impact: +3 points

⚠️ Only 1 personal anecdote (should have 2-3)
   Fix: Add 2 more specific examples from experience
   Impact: +2 points

**Potential Score with Fixes: 25/25 ✅**

---

## Expertise Score: 22/25 ✅

### What's Good:
✅ Author byline present with credentials
✅ Author bio page linked
✅ Professional qualifications mentioned (15 years experience)
✅ Technical terminology explained clearly
✅ 4 authoritative sources cited

### Minor Improvements:
⚠️ Add 1-2 more cited sources (currently 4, optimal is 5-7)
   Fix: Cite government statistics on equipment financing
   Impact: +2 points

**Potential Score with Fix: 24/25 ✅**

---

## Authoritativeness Score: 18/25 ⚠️

### What's Good:
✅ Comprehensive coverage (3,200 words)
✅ Links to related hub page
✅ Content depth is good

### What's Missing:
❌ No mention of industry recognition
   Fix: Add section about company's 20 years in business
   Impact: +3 points

❌ No original research or data
   Fix: Add "According to our analysis of 200 financing deals..."
   Impact: +4 points

**Potential Score with Fixes: 25/25 ✅**

---

## Trustworthiness Score: 20/25 ✅

### What's Good:
✅ Contact information visible
✅ Privacy policy linked
✅ About page exists
✅ Last updated date shown
✅ Sources cited are credible

### What's Missing:
⚠️ No customer testimonials on this page
   Fix: Add 2 testimonials from actual clients
   Impact: +3 points

⚠️ No security/trust badges
   Fix: Add industry memberships or certifications
   Impact: +2 points

**Potential Score with Fixes: 25/25 ✅**

---

## PRIORITY IMPROVEMENTS

### HIGH PRIORITY (Do First):
1. **Add first-person experience language** (Rewrite intro)
   - Current: "Equipment financing allows businesses to..."
   - Better: "After helping 200+ businesses finance equipment over 15 years, I've learned..."
   - Time: 30 minutes
   - Impact: +5 E-E-A-T points

2. **Replace stock photos with originals**
   - Request client photos
   - Or use client's actual equipment examples
   - Time: Depends on photo availability
   - Impact: +3 E-E-A-T points

### MEDIUM PRIORITY:
3. **Add original data/research**
   - Example: "We analyzed 200 financing deals and found..."
   - Time: 1 hour (if data exists) OR skip if no data
   - Impact: +4 E-E-A-T points

4. **Add 2 customer testimonials**
   - Request from client
   - Include real names + photos if possible
   - Time: 15 minutes
   - Impact: +3 E-E-A-T points

### LOW PRIORITY:
5. **Add 2 more cited sources**
   - Find government or industry statistics
   - Time: 15 minutes
   - Impact: +2 E-E-A-T points

---

## OVERALL STATUS: ⚠️ NEEDS WORK

**Current Score:** 75/100
**Potential Score:** 99/100 (with fixes)

**Recommendation:**
Implement HIGH PRIORITY fixes (1-2) to reach 85+ score.
Can skip MEDIUM/LOW if time-constrained.

**Next Step:**
- Fix issues above
- Re-run ⑩ /10-review-eeat
- Target: 85+ score to proceed to ⑫
```

## Skills Used
- `eeat-checklist` - Systematic E-E-A-T evaluation
- `trust-signal-verification` - Check trust elements
- `credential-validation` - Verify author credentials
- `experience-scoring` - Evaluate experience demonstrations
- `authority-measurement` - Assess authority signals

## Agent Instructions

```
You are the content-qa agent. Evaluate E-E-A-T signals.

CLIENT: [client-name]
PAGE: [page-path]

STEP 1: LOAD PAGE
Read: clients/[client-name]/website/src/pages/[page-path].astro

STEP 2: LOAD E-E-A-T STANDARDS
Read: clients/[client-name]/eeat-strategy/content-guidelines.md
Reference: SEO-pro.md Chapter 4 (E-E-A-T Implementation)

STEP 3: SCORE EXPERIENCE (0-25)
Check for:
- First-person language (I, we, our)
- Specific details (numbers, dates, specifics)
- Original media (not stock)
- Personal stories

Score each element 0-5, total /25

STEP 4: SCORE EXPERTISE (0-25)
Check for:
- Author credentials visible
- Sources cited (3-5 minimum)
- Technical accuracy
- Depth of coverage

Score each element 0-5, total /25

STEP 5: SCORE AUTHORITATIVENESS (0-25)
Check for:
- Comprehensive coverage
- Original insights
- Industry recognition
- Backlink potential

Score each element 0-5, total /25

STEP 6: SCORE TRUSTWORTHINESS (0-25)
Check for:
- Contact info
- Privacy/terms
- Customer proof
- Transparency

Score each element 0-5, total /25

STEP 7: CREATE REPORT
Overall score = Total /100
Status:
- 85-100: ✅ PASS
- 70-84: ⚠️ NEEDS WORK
- 0-69: ❌ FAIL

STEP 8: PRIORITIZE FIXES
HIGH: Quick wins (30 min, +5 points)
MEDIUM: Valuable (1 hr, +3-4 points)
LOW: Nice to have (2+ hrs, +1-2 points)

STEP 9: SAVE REPORT
Output to: clients/[client-name]/reviews/[page-name]-eeat-score.md
```

## Success Criteria
- [ ] E-E-A-T score calculated (0-100)
- [ ] All 4 E's scored separately
- [ ] Specific issues identified with fixes
- [ ] Priority levels assigned (HIGH/MEDIUM/LOW)
- [ ] Clear PASS/FAIL status
- [ ] Report saved in `clients/[client-name]/reviews/`

## Next Step
If **PASS** (score ≥85):
→ Run **⑪ /11-review-readability**

If **NEEDS WORK** or **FAIL**:
→ Fix the issues listed in report
→ Re-run **⑩ /10-review-eeat** to verify
→ Repeat until score ≥85

## Common Errors

**Error:** `No .astro files found`
**Solution:** Run **⑤⑥⑦⑧ BUILD commands** first

**Error:** `content-guidelines.md not found`
**Solution:** Run **③ /3-plan-authority** first (creates E-E-A-T standards)

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10
