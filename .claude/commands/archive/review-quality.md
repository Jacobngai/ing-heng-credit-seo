Launch the Content QA Agent to assist in reviewing draft content by providing quality scores and recommendations.

**What this command does:**
1. Loads Content QA Agent from `.claude/agents/content-qa.md`
2. Agent executes `content-quality-check.md` skill
3. Scans all D/ draft files across all clients
4. Evaluates each draft against 10 quality standards
5. Provides scores (0-10 per check)
6. Recommends approve/conditional/revise for each draft
7. Provides specific, actionable improvement suggestions

**Expected output:**
- Quality score for each draft
- Approve/revise recommendations
- Specific improvement suggestions
- Batch summary report
- Helps employee make faster decisions

**Usage:**
```bash
/review-quality
```

**No arguments needed** - agent reviews all D/ files across all clients automatically.

**When to use this:**
- After running `/generate-daily-blogs` (150 drafts to review)
- After running `/onboard-client` (first 10 posts to review)
- Anytime you want QA assistance on pending drafts

**What you get per draft:**

**Example QA Report:**
```
# QA REVIEW: 2025-11-01-excavator-guide-en.md

OVERALL SCORE: 8.5/10 (85%) ✅
RECOMMENDATION: APPROVE

DETAILED SCORES:
✅ Word Count: 10/10 (1850 words)
✅ Readability: 9/10 (Flesch 65)
✅ Keyword Density: 8/10 (1.5%)
✅ Structure: 10/10 (H1 + 5 H2s)
✅ FAQ: 10/10 (6 questions)
✅ Grammar: 10/10 (0 errors)
✅ Internal Links: 10/10 (4 links)
⚠️ External Links: 6/10 (1 link, need 2-3)
✅ Meta Info: 10/10 (Complete)
⚠️ CTAs: 7/10 (2 CTAs, need 3-5)

IMPROVEMENTS SUGGESTED:
- Add 1-2 external authoritative links
- Add 1-2 more CTAs

EMPLOYEE OPTIONS:
1. Approve as-is (high quality at 85%)
2. Quick edits (5 min) for perfect score
3. Reject if gaps are critical
```

**Batch Summary:**
```
Total drafts: 150
- Excellent (90%+): 82 (55%) → STRONG APPROVE
- Good (80-89%): 58 (39%) → APPROVE
- Acceptable (70-79%): 8 (5%) → CONDITIONAL
- Needs Work (<70%): 2 (1%) → REVISE

Recommendations:
✅ APPROVE: 140 drafts (93%)
⚠️ REVIEW: 8 drafts
❌ REVISE: 2 drafts
```

**Important:**
- **Agent does NOT auto-approve or auto-reject**
- Agent provides recommendations only
- Employee makes final decision
- Employee still renames D/ to A/ or F/ manually

**Benefits:**
- Faster review (know which drafts are safe to approve)
- Better decisions (objective scores vs subjective feel)
- Consistent standards (same criteria for all content)
- Actionable feedback (specific improvements, not vague)

**Typical workflow:**
1. Run `/generate-daily-blogs` → 150 drafts created
2. Run `/review-quality` → Get scores and recommendations
3. Review QA report
4. Approve recommended drafts quickly (D/ → A/)
5. Review conditional drafts more carefully
6. Edit or reject drafts that need work
7. Run `/publish-approved` → Deploy all A/ files

**Execution time:**
- ~2 minutes for 150 drafts
- Much faster than manual review of all 150!

**This is OPTIONAL but recommended** for efficiency and consistency.
