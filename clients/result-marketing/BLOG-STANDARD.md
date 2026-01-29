# Result Marketing - Blog Post Standard

**Version:** 1.0
**Last Updated:** 2026-01-24
**Purpose:** AI-ready template for bulk blog content generation

---

## Target Audience

**Primary:**
- Local service business owners in Malaysia (B2B service providers)
- Marketing professionals and decision makers

**Industries:**
- Emergency Services (Locksmith, Gas Leak, Water Damage, Car Battery)
- Home Services (Plumbing, Aircond, Electrical, Appliance Repair)
- Cleaning Services (Carpet, House, Office, Pressure Washing)
- Auto Services (Car Workshop, Car Wash & Detailing)
- Outdoor Services (Lawn Mowing, Pool Cleaning, Gutter Cleaning)
- Specialized Services (Pest Control, Pet Grooming, Maid Services, Junk Removal, Septic Tank)

---

## Article Specifications

### Length
- **Target:** 800-1,200 words (short, punchy, respect reader's time)
- **Minimum:** 600 words
- **Maximum:** 1,500 words

### Content Types
1. **How-to/Educational** - Step-by-step guides, tutorials
2. **Thought Leadership** - Industry insights, trends, predictions
3. **Data/Statistics** - Research-backed analysis with numbers

### Tone
**Hybrid Approach:**
- 70% Educational (provide value, teach something)
- 30% Direct Response (clear CTAs, outcome-focused)

**Voice Characteristics:**
- Direct, no-nonsense, get to the point
- Numbers-driven (show the math, use specific figures)
- Respect reader's time (short paragraphs, bullet points)
- Not overly salesy or hype-y
- Professional but approachable

---

## Required Structure

### 1. Frontmatter (YAML)

```yaml
---
title: "Article Title Here - Benefit Oriented"
description: "Meta description for SEO (150-160 characters)"
category: "seo|aeo|automation|case-study"
target_keyword: "primary keyword"
keywords:
  - "secondary keyword 1"
  - "secondary keyword 2"
  - "secondary keyword 3"
  - "secondary keyword 4"
  - "secondary keyword 5"
published: "2026-01-24"
last_updated: "2026-01-24"
lang: "en"
status: "approved"
tags:
  - "permission|visibility|outcomes|selection|risk|pricing|diy|measurement"
featured_image: "https://example.com/image-1200x630.jpg"
author: "Result Marketing"
reading_time: 5
---
```

**Field Notes:**
- `category`: Must be one of: `seo`, `aeo`, `automation`, `case-study`
- `tags`: For AEO articles only - must use one of the 8 subcategories
- `featured_image`: OG format 1200x630px, Malaysian context

### 2. Summary Box (Article Top)

```markdown
## **Summary: [3-4 word takeaway]**

**Key Takeaways:**
- [Single line key insight 1]
- [Single line key insight 2]
- [Single line key insight 3]
- [Single line key insight 4]

**Read Time:** [X] minutes | **Category:** [Category Name]
```

### 3. Table of Contents

```markdown
---

## **Table of Contents**

1. [Section Title](#section-1)
2. [Section Title](#section-2)
3. [Section Title](#section-3)
4. [Section Title](#section-4)

---
```

### 4. First CTA (After Introduction)

```markdown
> **🎯 Want Industry-Specific SEO Advice?**
>
> Get a free SEO audit tailored to your business. WhatsApp **+60175032281** or visit [resultmarketing.tech](https://resultmarketing.tech)
>
> [Pre-filled message: `Hi, I want to capture [industry] jobs with the RM399 SEO trial. My business is [business type].`]
```

### 5. Middle CTA (After Section 2 or 3)

```markdown
> **💡 Still Wasting Money on Facebook Ads?**
>
> Every month you wait: X people search "[your main keyword]" in Malaysia. They're searching. They need you NOW.
>
> Start your RM399 trial → [WhatsApp +60175032281](https://wa.me/60175032281)
```

### 6. Final CTA (Article End)

```markdown
---

## **🚀 Ready to Capture More Jobs with SEO?**

**The RM399 Trial Includes:**
- 3-page website (EN/ZH/MS)
- Target keyword optimization
- WhatsApp integration
- Mobile-responsive design
- **30-day money-back guarantee**

**Question for you:**

Would you rather rent your spot on Google (PPC) or own it (SEO)?

**Rent (PPC):** Pay RM2-10 per click forever. Stop paying = disappear.

**Own (SEO):** RM1,200/month. Own the spot. Build equity.

**Your competitors are reading this too.**

[WhatsApp **+60175032281**](https://wa.me/60175032281?text=Hi,+I+want+to+capture+[industry]+jobs+with+the+RM399+SEO+trial.+My+business+is+[business+type].)

---

**Remember: Every minute you wait, your competitors are ranking #1 for YOUR keywords.**

Question: **Rent or own?**
```

---

## SEO Requirements

### Meta Description
- **Length:** 150-160 characters
- **Format:** [Benefit] + [Target Keyword] + [Urgency/Social Proof]

**Example:**
```
Discover how [industry] businesses generate RM84,000 in 47 days with SEO.
Target high-intent customers. RM399 trial. 30-day guarantee.
```

### Schema.org JSON-LD (Article End)

```markdown
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article Title]",
  "description": "[Meta description]",
  "image": "[Featured Image URL]",
  "author": {
    "@type": "Organization",
    "name": "Result Marketing"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Result Marketing",
    "logo": {
      "@type": "ImageObject",
      "url": "https://resultmarketing.tech/logo.png"
    }
  },
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "[Full Article URL]"
  }
}
</script>
```

### Breadcrumb Navigation

```markdown
**Home** → **Blog** → **[Category]** → **[Article Title]**
```

---

## Visual Guidelines

### Featured Image Specifications
- **Dimensions:** 1200x630px (OG standard)
- **Format:** JPG or PNG
- **Style:** Professional, Malaysian context

**Image Content Rules:**
- **People:** Malaysian appearance (diverse, local dress)
- **Scenes:** Malaysian weather/environment (tropical, urban KL, industrial areas)
- **Tools:** Use GLM image generator or similar AI tools

### Image Prompts (GLM Format)

**For Business Owners:**
```
Professional Malaysian business owner (30-50 years old, diverse ethnicity)
in modern office setting, tropical window light, Kuala Lumpur skyline visible,
professional attire, confident expression, high-resolution photography style
```

**For Industry Scenes:**
```
[Industry] business owner in Malaysia, tropical daylight, modern equipment,
professional setting, authentic Malaysian environment, high-quality photography,
diverse representation
```

---

## Writing Guidelines

### Paragraph Structure
- **Max lines:** 3-4 lines per paragraph
- **Sentence length:** Short to medium (10-20 words)
- **Use:** Bullet points, numbered lists, bold for emphasis

### Number Rules (CRITICAL)
1. **Use specific numbers always** (RM1,200 not "affordable")
2. **Show comparisons** (Before/After math)
3. **Revenue impact** (Show monthly AND annual opportunity cost)
4. **Conversion rates** (Use percentage ranges from research)
5. **NEVER hallucinate** - Use existing data only

### Forbidden Patterns
- ❌ Vague language ("many", "lots", "soon")
- ❌ Hallucinated statistics
- ❌ Writing without specific keyword data
- ❌ Passive voice
- ❌ Long paragraphs
- ❌ Corporate jargon
- ❌ Being too polite/formal

### Required Elements
- ✅ Specific numbers (RM, percentages, dates)
- ✅ Keyword tables preserved from research
- ✅ Competitor warnings with cost of inaction
- ✅ Objection handling
- ✅ Clear CTA with WhatsApp link
- ✅ Remember section with stakes reminder

---

## File Naming Convention

**Format:** `YYYY-MM-DD-[slug].md`

**Examples:**
- `2026-01-24-rm399-seo-trial-offer.md`
- `2026-01-25-locksmith-seo-keywords-malaysia.md`
- `2026-01-26-ai-automation-vs-admin-staff.md`

**Rules:**
- Use lowercase letters
- Separate words with hyphens
- No .md in the URL slug
- Include publication date

---

## Content Workflow (D/A/F System)

| Folder | Purpose | Next Action |
|--------|---------|-------------|
| **D/** | Draft content generated by AI | Review required |
| **A/** | Approved content ready for use | Use in production |
| **F/** | Rejected/failed content | Archive only |

**Process:**
1. AI generates in `clients/result-marketing/keyword-research/D/`
2. Human reviews each file
3. Good files → Move to `A/`
4. Bad files → Move to `F/`
5. Files needing edits → Edit, then move to `A/`

---

## Publishing Checklist

Before publishing, verify:

- [ ] Word count: 800-1,200 words
- [ ] Frontmatter complete (all fields)
- [ ] Summary box present
- [ ] Table of present
- [ ] 3 CTAs placed (beginning, middle, end)
- [ ] Schema.org JSON-LD included
- [ ] Meta description 150-160 characters
- [ ] Featured image 1200x630px with Malaysian context
- [ ] All numbers specific (no "many", "lots")
- [ ] Competitor warning included
- [ ] WhatsApp CTA with pre-filled message
- [ ] File naming follows YYYY-MM-DD-slug.md format
- [ ] Added to SLUG_MANIFEST.json

---

## Design Reference

**Visual Style:** Washington Post (https://www.washingtonpost.com/world/)
- Clean, professional layout
- Strong typography hierarchy
- Clear content sections
- Professional imagery
- Minimal clutter

---

## Quick Template (Copy & Use)

```markdown
---
title: "[Title] - [Benefit]"
description: "[Meta description 150-160 chars]"
category: "seo|aeo|automation|case-study"
target_keyword: "primary keyword"
keywords:
  - "keyword 1"
  - "keyword 2"
  - "keyword 3"
  - "keyword 4"
  - "keyword 5"
published: "YYYY-MM-DD"
last_updated: "YYYY-MM-DD"
lang: "en"
status: "approved"
tags: []
featured_image: "https://example.com/image-1200x630.jpg"
author: "Result Marketing"
reading_time: 5
---

## **Summary: [3-4 word takeaway]**

**Key Takeaways:**
- [Key insight 1]
- [Key insight 2]
- [Key insight 3]
- [Key insight 4]

**Read Time:** X minutes | **Category:** [Category]

---

## **Table of Contents**

1. [Section Title](#section-1)
2. [Section Title](#section-2)
3. [Section Title](#section-3)
4. [Section Title](#section-4)

---

## [Section 1 Title]

[Content with specific numbers, examples, data]

> **🎯 First CTA**
>
> [CTA content]

---

## [Section 2 Title]

[Content]

> **💡 Middle CTA**
>
> [CTA content]

---

## [Section 3 Title]

[Content]

---

## [Section 4 Title]

[Content]

---

## **🚀 Ready to Capture More Jobs with SEO?**

**The RM399 Trial Includes:**
- 3-page website (EN/ZH/MS)
- Target keyword optimization
- WhatsApp integration
- Mobile-responsive design
- **30-day money-back guarantee**

**Question for you:**

Would you rather rent your spot on Google (PPC) or own it (SEO)?

**Rent (PPC):** Pay RM2-10 per click forever. Stop paying = disappear.

**Own (SEO):** RM1,200/month. Own the spot. Build equity.

**Your competitors are reading this too.**

[WhatsApp **+60175032281**](https://wa.me/60175032281?text=Hi,+I+want+to+capture+jobs+with+the+RM399+SEO+trial.)

---

**Remember: Every minute you wait, your competitors are ranking #1 for YOUR keywords.**

Question: **Rent or own?**

---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article Title]",
  "description": "[Meta description]",
  "image": "[Featured Image URL]",
  "author": {
    "@type": "Organization",
    "name": "Result Marketing"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Result Marketing",
    "logo": {
      "@type": "ImageObject",
      "url": "https://resultmarketing.tech/logo.png"
    }
  },
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "[Full Article URL]"
  }
}
</script>
```

---

## Bulk Generation Instructions for AI

When using this standard for bulk AI generation:

1. **Provide this entire document** to the AI as context
2. **Specify the topic** for each article
3. **Provide keyword research data** (from keyword-research/A/ folder)
4. **Specify target industry** (locksmith, plumber, etc.)
5. **Specify content type** (how-to, thought leadership, data/statistics)
6. **Set word count** (800-1,200 words)
7. **Output to D/ folder** for human review before moving to A/

---

**End of Standard v1.0**
