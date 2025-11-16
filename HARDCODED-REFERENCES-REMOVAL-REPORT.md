# Hardcoded "Ing Heng" References Removal Report

**Date:** 2025-11-10
**Task:** Remove all hardcoded "Ing Heng" client references from `.claude/` files
**Status:** PARTIALLY COMPLETE - Core files updated, additional edits documented

---

## Summary

This report documents the surgical removal of hardcoded "Ing Heng Credit" references from the SEO-Complete Framework files in the `.claude/` directory. The goal is to make the framework client-agnostic and reusable.

## Replacement Strategy

### Global Replacements Made:

1. **Mission Statements:**
   - "for the Ing Heng Credit SEO Platform" → "for the SEO-Complete Framework"

2. **Client References:**
   - "Ing Heng" (in examples/logic) → "[CLIENT NAME]" or "[client-name]"
   - "ing-heng" (in JSON/paths) → "[client-name]"
   - "Ing Heng Credit" → "[CLIENT NAME]"

3. **Author References:**
   - "Ing Heng Credit" (as author) → "[Client Author]"

4. **Company References:**
   - "at Ing Heng Credit" → "at [CLIENT NAME]"
   - GitHub org "ing-heng-seo" → "[org-name]"

---

## Files Successfully Edited

### Agent Files (6/10 completed)

#### ✅ `.claude/agents/analytics.md`
- **Line 3:** "Ing Heng Credit SEO Platform" → "SEO-Complete Framework"
- **Lines 9-10:** "all active clients" (already generic)
- Status: ✅ COMPLETE

#### ✅ `.claude/agents/competitor-intelligence.md`
- **Line 3:** "Ing Heng Credit SEO Platform" → "SEO-Complete Framework"
- **Line 47:** `"client": "ing-heng"` → `"client": "[client-name]"`
- **Line 160:** `"client": "ing-heng"` → `"client": "[client-name]"`
- **Line 507:** `Client: ing-heng` → `Client: [client-name]`
- Status: ✅ COMPLETE

#### ✅ `.claude/agents/content-maintenance.md`
- **Line 3:** "Ing Heng Credit SEO Platform" → "SEO-Complete Framework"
- Status: ✅ COMPLETE

#### ✅ `.claude/agents/eeat-documentation.md`
- **Line 3:** "Ing Heng Credit SEO Platform" → "SEO-Complete Framework"
- **Line 63:** `"client": "ing-heng"` → `"client": "[client-name]"`
- **Line 199:** "at Ing Heng Credit" → "at [CLIENT NAME]"
- **Line 163:** `"publication": "Ing Heng Credit"` → `"publication": "[Client Publication]"`
- **Line 230:** "Ing Heng Credit's team" → "[CLIENT NAME]'s team"
- **Line 263:** "Why Trust Ing Heng Credit?" → "Why Trust [CLIENT NAME]?"
- **Line 277:** "by Ing Heng Credit" → "by [CLIENT NAME]"
- Status: ✅ COMPLETE

#### ✅ `.claude/agents/hub-and-spoke-architect.md`
- **Line 3:** "Ing Heng Credit SEO Platform" → "SEO-Complete Framework"
- **Line 7:** "enables Ing Heng Credit to dominate" → "enables all active clients to dominate"
- **Line 57:** `"client": "ing-heng"` → `"client": "[client-name]"`
- **Line 309:** `author: "Ing Heng Credit"` → `author: "[Client Author]"`
- **Line 408:** "Contact Ing Heng Credit" → "Contact [CLIENT NAME]"
- **Line 428:** `"client": "ing-heng"` → `"client": "[client-name]"`
- **Line 459:** `"client": "ing-heng"` → `"client": "[client-name]"`
- **Line 599:** `Client: ing-heng` → `Client: [client-name]`
- Status: ✅ COMPLETE

#### ✅ `.claude/agents/link-building.md`
- **Line 3:** "Ing Heng Credit SEO Platform" → "SEO-Complete Framework"
- **Line 151:** `"client": "ing-heng"` → `"client": "[client-name]"`
- **Line 300:** `Client: ing-heng` → `Client: [client-name]`
- Status: ✅ COMPLETE

#### ⏸️ `.claude/agents/publishing.md`
- **Line 3:** Needs: "Ing Heng Credit SEO Platform" → "SEO-Complete Framework"
- **Line 47:** Needs: `"https://github.com/ing-heng-seo/..."` → `"https://github.com/[org-name]/..."`
- **Lines 68, 73:** Similar GitHub org replacements needed
- Status: ⏸️ PENDING

#### ⏸️ `.claude/agents/content-generation.md`
- **Line 3:** Needs: "Ing Heng Credit SEO Platform" → "SEO-Complete Framework"
- **Line 155:** Needs: `author: "Ing Heng Credit"` → `author: "[Client Author]"`
- Status: ⏸️ PENDING

#### ⏸️ `.claude/agents/content-qa.md`
- **Line 3:** Needs: "Ing Heng Credit SEO Platform" → "SEO-Complete Framework"
- Status: ⏸️ PENDING

#### ⏸️ `.claude/agents/client-onboarding.md`
- **Line 3:** Needs: "Ing Heng Credit SEO Platform" → "SEO-Complete Framework"
- Status: ⏸️ PENDING

#### ⏸️ `.claude/agents/client-setup.md`
- **Line 3:** Needs: "Ing Heng Credit SEO Platform" → "SEO-Complete Framework"
- **Multiple lines:** GitHub org "ing-heng-seo" → "[org-name]"
  - Lines 273, 276-277, 286, 317, 353, 424, 453, 461, 594, 646, 651
- Status: ⏸️ PENDING (11 replacements needed)

---

### Skill Files (3/23 completed)

#### ✅ `.claude/skills/hub-page-generation.md`
- **Line 29:** "for eng-heng-credit" → "for equipment financing clients"
- **Line 290:** `author: "Ing Heng Credit"` → `author: "[Client Author]"`
- **Line 380:** "for personalized financing solution" → "for personalized solution"
- **Line 396:** `"client": "ing-heng-credit"` → `"client": "[client-name]"`
- Status: ✅ COMPLETE

#### ✅ `.claude/skills/content-refresh-skyscraper.md`
- **Line 252:** `author: "Ing Heng Credit"` → `author: "[Client Author]"`
- **Line 319:** `"client": "ing-heng-credit"` → `"client": "[client-name]"`
- Status: ✅ COMPLETE

#### ✅ `.claude/skills/performance-tracking.md`
- **Line 290:** `"client": "ing-heng-credit"` → `"client": "[client-name]"`
- Status: ✅ COMPLETE

#### ⏸️ Remaining Skills (20 files)
The following skill files still contain "Ing Heng" or "ing-heng" references and need similar treatment:

- `experience-evidence-collection.md`
- `author-credential-documentation.md`
- `trust-signal-identification.md`
- `backlink-tracking.md`
- `outreach-email-generation.md`
- `link-prospect-research.md`
- `persona-generation.md`
- `multi-language-content.md`
- `keyword-research.md`
- `image-analysis.md`
- `image-keyword-integration.md`
- `daily-seo-content.md`
- `client-onboarding.md`
- `content-quality-check.md`
- `client-finalization.md`
- `brand-identity-generation.md`
- `publishing-workflow.md`
- `website-generation.md`
- `multi-language-deployment.md`

Status: ⏸️ PENDING (each needs 1-5 replacements)

---

### Command Files (0/2 completed)

#### ⏸️ `.claude/commands/audit-content-performance.md`
- Needs review for hardcoded references
- Status: ⏸️ PENDING

#### ⏸️ `.claude/commands/build-hub-page.md`
- Needs review for hardcoded references
- Status: ⏸️ PENDING

---

### Configuration Files

#### ⏸️ `.claude/MULTI-LANGUAGE-DEPLOYMENT-RULES.md`
- Contains "ing-heng" in example configurations
- These are labeled as examples, but should use `[client-name]` placeholder
- Status: ⏸️ PENDING

---

## Types of References Preserved

The following "Ing Heng" references were preserved because they are **clearly marked examples**:

1. **Skill client parameter examples** - When showing example usage like:
   ```
   Example: "ing-heng-credit" for the financing client
   ```
   These are demonstration examples, not hardcoded logic.

2. **File path examples** - When showing file structure:
   ```
   Example path: /clients/ing-heng-credit/...
   ```
   Only changed if not clearly marked as "Example:"

3. **Case study examples** - Real-world case studies using "Ing Heng" as a sample client

---

## Remaining Work

### High Priority (Core Framework Files)

1. **Publishing Agent** (`agents/publishing.md`) - 4 GitHub org replacements
2. **Content Generation Agent** (`agents/content-generation.md`) - 2 replacements
3. **Client Setup Agent** (`agents/client-setup.md`) - 11 GitHub org replacements
4. **Content QA Agent** (`agents/content-qa.md`) - 1 replacement
5. **Client Onboarding Agent** (`agents/client-onboarding.md`) - 1 replacement

### Medium Priority (Skills)

20 skill files each need 1-5 replacements following the pattern:
- Replace mission statements
- Replace JSON client examples
- Replace author attributions
- Replace GitHub organization names

### Low Priority (Archives)

Archive files in `.claude/archive/` can be left as-is since they're historical and not actively used.

---

## Replacement Commands

For remaining files, use these patterns:

### Pattern 1: Mission Statement
```
Find: "for the Ing Heng Credit SEO Platform"
Replace: "for the SEO-Complete Framework"
```

### Pattern 2: JSON Client Name
```
Find: "client": "ing-heng"
Replace: "client": "[client-name]"
```

### Pattern 3: Author Attribution
```
Find: author: "Ing Heng Credit"
Replace: author: "[Client Author]"
```

### Pattern 4: GitHub Organization
```
Find: github.com/ing-heng-seo/
Replace: github.com/[org-name]/
```

### Pattern 5: Company References
```
Find: at Ing Heng Credit
Replace: at [CLIENT NAME]

Find: Ing Heng Credit's
Replace: [CLIENT NAME]'s
```

---

## Verification

After completing all edits:

1. **Search for remaining hardcoded references:**
   ```bash
   grep -rinE "ing-heng|Ing Heng" .claude/ --exclude-dir=archive
   ```

2. **Expected count:** 0 outside of archive/ and clearly marked examples

3. **Manual review:** Check that all [CLIENT NAME] and [client-name] placeholders are in appropriate contexts

---

## Impact

Once complete, the framework will be:
- ✅ Client-agnostic and reusable
- ✅ Ready for multi-client deployment
- ✅ Generic enough for any industry
- ✅ Properly documented with placeholder conventions

---

## Files Changed Summary

- ✅ **Agents:** 6/10 complete (60%)
- ✅ **Skills:** 3/23 complete (13%)
- ⏸️ **Commands:** 0/2 complete (0%)
- ⏸️ **Config:** 0/1 complete (0%)

**Total Progress:** 9/36 active framework files (25%)

**Estimated remaining work:** 1-2 hours for systematic replacement across all files

---

## Next Steps

1. Complete agent file edits (4 remaining files)
2. Systematically edit skill files (20 files)
3. Review and edit command files (2 files)
4. Update configuration files (1 file)
5. Final verification sweep
6. Update this report with completion status

---

*Report generated: 2025-11-10*
*Last updated: [timestamp]*
