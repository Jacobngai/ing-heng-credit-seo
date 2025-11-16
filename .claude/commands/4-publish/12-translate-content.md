# Command ⑫ /12-translate-content

**Phase:** PUBLISH
**Primary Agent:** content-generation
**Time:** 1-2 hours (AI working)

## Purpose
Translate and culturally adapt content from English to Malay (MS) and Chinese (ZH) while maintaining SEO optimization.

## Prerequisites

✅ **Required: Content that passed ALL 3 reviews:**
- `seo-audit-report.md` (from ⑨) - Status: **PASS**
- `eeat-score-report.md` (from ⑩) - Status: **PASS**
- `readability-report.md` (from ⑪) - Status: **PASS**

### Validation Check
```
❌ If ANY review has status FAIL or NEEDS WORK:
→ Go back: Fix issues, re-run REVIEW commands ⑨⑩⑪ until all PASS

❌ If review files don't exist:
→ Go back: Run REVIEW commands ⑨⑩⑪ first

Critical: Do NOT translate content that hasn't passed quality checks.
Translating bad content = 3x the work to fix later.
```

## What This Command Does

The **content-generation** agent will:

1. **Validate Review Status**
   - Check all 3 review reports exist
   - Verify status is PASS (not NEEDS WORK or FAIL)
   - If any failed, abort with error message

2. **Load Source Content**
   - Read the English .astro file
   - Extract: Content, metadata, keywords, structure

3. **Translate to Malay (MS)**
   - Translate all text content
   - Translate meta title and description
   - Translate keywords (maintain SEO intent)
   - Adapt examples for Malaysian context
   - Convert currency ($ → RM where applicable)
   - Maintain formatting and structure

4. **Translate to Chinese (ZH)**
   - Translate all text content
   - Translate meta title and description
   - Translate keywords (maintain SEO intent)
   - Adapt examples for Chinese Malaysian context
   - Convert currency ($ → RM where applicable)
   - Maintain formatting and structure

5. **Cultural Adaptation**
   - Replace Western idioms with local equivalents
   - Adjust examples (Chicago → Kuala Lumpur)
   - Change measurement units if needed
   - Adapt tone for cultural appropriateness
   - Update any text in images (flag for manual update)

6. **Maintain SEO Elements**
   - Keyword optimization in target language
   - Same heading structure (H1, H2, H3)
   - Internal links updated to translated URLs
   - Schema markup maintained
   - Alt text translated

7. **Add Hreflang Tags**
   - Add to all 3 versions (EN, MS, ZH)
   - Link each language to the others

## Output Files Created

```
clients/[client-name]/website/src/pages/
├── en/blog/[slug].astro (original)
├── ms/blog/[slug-ms].astro (Malay translation)
└── zh/blog/[slug-zh].astro (Chinese translation)
```

**Example:**
- `en/blog/equipment-financing-guide.astro`
- `ms/blog/panduan-pembiayaan-peralatan.astro`
- `zh/blog/设备融资指南.astro`

## Skills Used
- `translation-localization` - Accurate translation maintaining SEO
- `cultural-adaptation` - Context and example localization
- `hreflang-generation` - Multi-language link tags
- `keyword-translation` - SEO keyword localization
- `currency-conversion` - $ → RM conversion

## Agent Instructions

```
You are the content-generation agent. Translate content to MS and ZH.

CLIENT: [client-name]
SOURCE PAGE: [en/page-path]

STEP 1: VALIDATE REVIEWS
Check these files exist and have status PASS:
✅ clients/[client-name]/reviews/[page]-seo-audit.md (PASS)
✅ clients/[client-name]/reviews/[page]-eeat-score.md (≥85)
✅ clients/[client-name]/reviews/[page]-readability-report.md (≥85)

If ANY failed:
❌ ABORT with error: "Cannot translate. Fix review issues first."
Show which reviews failed and what needs fixing.

STEP 2: LOAD SOURCE
Read: clients/[client-name]/website/src/pages/[en/page-path].astro

STEP 3: TRANSLATE TO MALAY (MS)
Translate:
- All content (heading to conclusion)
- Meta title and description
- Image alt text
- Button text
- Navigation elements

Maintain:
- Exact same structure
- Schema markup
- Component usage

Adapt:
- Currency: $ → RM
- Examples: Western → Malaysian
- Idioms: English → Malay equivalent
- Place names: International → Local

SEO Optimization:
- Translate target keyword (maintain search intent)
- Optimize for Malay search behavior
- Rewrite meta description (don't just translate, optimize for MS users)

STEP 4: TRANSLATE TO CHINESE (ZH)
Same process as MS:
- Translate all content
- Maintain structure
- Cultural adaptation
- SEO optimization for Chinese

STEP 5: UPDATE INTERNAL LINKS
Change:
- /en/services/financing → /ms/perkhidmatan/pembiayaan
- /en/services/financing → /zh/服务/融资

All internal links must point to translated versions.

STEP 6: ADD HREFLANG
To all 3 versions, add:
html
<link rel="alternate" hreflang="en" href="https://www.inghengcredit.com/en/blog/slug" />
<link rel="alternate" hreflang="ms" href="https://www.kreditloan.my/ms/blog/slug-ms" />
<link rel="alternate" hreflang="zh" href="https://www.inghengcredit.my/zh/blog/slug-zh" />

STEP 7: UPDATE I18N FILES
Add new translations to:
- src/i18n/ms.json
- src/i18n/zh.json

STEP 8: SAVE FILES
Output to:
✅ clients/[client-name]/website/src/pages/ms/[path]/[slug].astro
✅ clients/[client-name]/website/src/pages/zh/[path]/[slug].astro

Ready for ⑬ deployment.
```

## Translation Quality Checklist

For each language (MS, ZH):
- [ ] All text translated (no English remnants)
- [ ] Meta tags translated and optimized
- [ ] Keywords translated (maintain intent)
- [ ] Examples culturally adapted
- [ ] Currency converted ($ → RM)
- [ ] Internal links updated to translated URLs
- [ ] Schema markup maintained
- [ ] Hreflang tags added
- [ ] i18n files updated
- [ ] File saved at correct path

## Success Criteria
- [ ] 3 language versions created (EN, MS, ZH)
- [ ] All content properly translated
- [ ] Cultural adaptations made
- [ ] SEO elements maintained in all languages
- [ ] Hreflang tags implemented
- [ ] Files saved at correct paths

## Next Step
After this completes:
→ Run **⑬ /13-deploy-multilang** to go live

## Common Errors

**Error:** `Review reports not found`
**Solution:** Run **⑨⑩⑪ REVIEW commands** first

**Error:** `Reviews did not pass`
**Solution:** Fix issues in reports, re-run ⑨⑩⑪ until all PASS

**Error:** `Source content has errors`
**Solution:** Fix errors in EN version first, then translate

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10
