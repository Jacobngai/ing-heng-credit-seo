# Content Workflow Guide

Comprehensive workflows for creating, optimizing, and publishing SEO content for Ing Heng Credit & Leasing.

---

## Table of Contents

1. [Creating New Blog Posts](#creating-new-blog-posts)
2. [Optimizing Existing Content](#optimizing-existing-content)
3. [Conducting Keyword Research](#conducting-keyword-research)
4. [Analyzing Competitors](#analyzing-competitors)
5. [Monthly Content Planning](#monthly-content-planning)
6. [Quality Assurance Checklist](#quality-assurance-checklist)
7. [Publishing Checklist](#publishing-checklist)
8. [Content Performance Review](#content-performance-review)

---

## Creating New Blog Posts

### Workflow: Multi-Persona Multi-Language Blog Creation

This is the primary workflow for creating comprehensive blog content that serves all relevant personas across all languages.

#### Phase 1: Topic Selection & Research (1-2 hours)

**Step 1: Identify Content Opportunity**

Choose a topic based on:
- [ ] Keyword research findings (high volume, medium difficulty)
- [ ] Competitor content gaps
- [ ] Customer questions (from sales team, WhatsApp inquiries)
- [ ] Seasonal trends (monsoon, CNY, Hari Raya)
- [ ] Industry news or regulatory changes

**Step 2: Conduct Keyword Research**

Using the Keyword Researcher agent (`.claude/agents/keyword-researcher.md`):

1. Open the agent file
2. Provide input:
   ```
   Topic: [Your blog topic]
   Target Persona: [All relevant personas]
   Target Language: ALL (English, Mandarin, Malay)
   ```

3. Review output and identify:
   - Primary keyword for each language
   - 5-8 secondary keywords per language
   - Long-tail keyword opportunities
   - People Also Ask questions
   - Search intent (informational, commercial, transactional)

4. Document findings:
   - **English Primary:** [keyword] - Vol: [X/mo] - Difficulty: [X/100]
   - **Mandarin Primary:** [关键词] - Vol: [X/mo] - Difficulty: [X/100]
   - **Malay Primary:** [kata kunci] - Vol: [X/mo] - Difficulty: [X/100]

**Step 3: Competitive Analysis**

1. Google the primary keyword in each language
2. Analyze top 5 results for each:
   - [ ] Word count (aim to exceed by 20-30%)
   - [ ] Content structure (H2/H3 headings)
   - [ ] Topics covered (identify gaps)
   - [ ] Visual elements (images, tables, videos)
   - [ ] CTAs and conversion elements
   - [ ] E-E-A-T signals present

3. Create differentiation plan:
   - What can we cover that competitors don't?
   - What unique data or insights can we provide?
   - How can we make it more actionable?

**Step 4: Determine Persona Relevance**

Review each persona (excavator-contractor, lorry-logistics, forklift-warehouse):

| Persona | Relevant? | Why / Why Not | Priority Language |
|---------|-----------|---------------|-------------------|
| Contractor Ahmad | Yes/No | [Reasoning] | Bahasa Malaysia |
| Logistics Lee | Yes/No | [Reasoning] | Mandarin Chinese |
| Warehouse William | Yes/No | [Reasoning] | English |

**Decision Rule:**
- If topic applies to 2-3 personas → Create separate version for each
- If topic applies to 1 persona → Focus on that persona's primary language first
- If cross-cutting (e.g., "Benefits of Equipment Financing") → Create generic version for each language

---

#### Phase 2: Content Planning (30-45 minutes)

**Step 5: Create Content Outline**

For EACH relevant persona, create an outline:

**Title (60 chars max):**
- English: [SEO-optimized title with primary keyword]
- Mandarin: [标题 with 关键词]
- Malay: [Tajuk with kata kunci]

**Content Structure:**

1. **Introduction (150-200 words)**
   - Hook: Persona-specific pain point
   - Promise: What they'll learn
   - Preview: Article structure

2. **Main Content (1,500-2,500 words)**

   **H2: [First Major Topic - Include Keyword]**
   - Key points to cover
   - Persona-specific examples
   - Data or statistics

   **H2: [Second Major Topic - Include Keyword Variation]**
   - Key points to cover
   - Actionable tips
   - Real-world scenario

   **H2: [Third Major Topic - LSI Keyword]**
   - Key points to cover
   - Comparison or analysis
   - Visual element (table/chart)

   [Continue with 4-6 H2 sections total]

3. **FAQ Section (5-7 questions)**
   - Question from PAA or common inquiry
   - Concise answer (60-80 words)
   [Repeat for 5-7 questions]

4. **Conclusion & CTA (100-150 words)**
   - Summary of key takeaways
   - Persona-specific call-to-action
   - Multiple CTA options (apply, calculate, contact)

5. **Internal Links (3-5)**
   - Link to related blog posts
   - Link to relevant persona content
   - Link to calculator or tool

6. **External Links (2-3)**
   - Link to authoritative sources
   - Government regulations (KPKT, CIDB, JPJ)
   - Industry statistics or research

---

#### Phase 3: Content Creation (3-5 hours per language/persona combination)

**Option A: Automated Creation with /generate-blog**

1. Use the slash command:
   ```
   /generate-blog [Your complete blog topic]
   ```

2. Review generated content for:
   - [ ] Keyword optimization
   - [ ] Persona alignment
   - [ ] Cultural appropriateness
   - [ ] Factual accuracy
   - [ ] Conversion elements

3. Edit and enhance as needed

**Option B: Manual Creation**

**Step 6: Write the Content**

Follow the outline created in Step 5. For each section:

**Introduction Writing Tips:**
- Start with a compelling statistic or question
- Use "you" to speak directly to the persona
- Make a clear promise of value
- Keep paragraphs short (2-4 sentences)

Example for Contractor Ahmad:
```
Are you losing projects because you can't afford to buy equipment?
You're not alone. 73% of small construction contractors in Malaysia
cite equipment costs as their biggest barrier to growth. But there's
a solution: equipment financing designed specifically for contractors
like you...
```

**Main Content Writing Tips:**
- One main idea per paragraph
- Use transition words (however, therefore, additionally)
- Include specific examples relevant to persona
- Add statistics and data (cite sources)
- Use bullet points for lists
- Break up long sections with H3 subheadings
- Maintain keyword density 1-2% for primary keyword

**Persona-Specific Examples to Include:**

*Contractor Ahmad (Excavator):*
- Project-based scenarios (won tender, need equipment fast)
- Seasonal considerations (monsoon season cash flow)
- CIDB requirements and compliance
- Government contract opportunities

*Logistics Lee (Lorry):*
- Fleet expansion scenarios
- Cost per delivery calculations
- Fuel cost management
- Contract fulfillment requirements

*Warehouse William (Forklift):*
- ROI calculations and cost-benefit analysis
- Rental vs purchase comparisons
- Safety compliance (DOSH)
- Productivity and efficiency metrics

**FAQ Section Writing:**

Use questions from:
- Google's "People Also Ask" feature
- WhatsApp customer inquiries
- Sales team feedback
- Competitor content

Format:
```markdown
## Frequently Asked Questions

### How fast can I get approved for excavator financing?

Most contractors receive approval within 2 hours of submitting
complete documentation. Ing Heng Credit's streamlined process
is designed for contractors who need equipment quickly for
upcoming projects. You can apply online or via WhatsApp
(+60 17-570 0889) for the fastest response.

[Continue for 5-7 questions]
```

**Conclusion & CTA Writing:**

Template:
```markdown
## Ready to [Benefit]?

[Summary of key points in 2-3 sentences]

[Persona-specific CTA paragraph with clear next steps]

**Get started today:**
- Calculate your monthly payment with our [Equipment Financing Calculator]
- Apply now for 2-hour approval via [WhatsApp: +60 17-570 0889]
- Contact us for personalized advice: [Contact Form Link]

With 40 years of experience and 95% approval rate, Ing Heng
Credit makes equipment financing simple and fast.
```

**Step 7: Add Frontmatter Metadata**

At the top of each markdown file:

```yaml
---
title: "Full Blog Post Title Here"
description: "Meta description (155 characters max) with primary keyword"
persona: "excavator-contractor"
language: "en"
keywords:
  - "primary keyword"
  - "secondary keyword 1"
  - "secondary keyword 2"
  - "secondary keyword 3"
  - "long-tail keyword 1"
  - "long-tail keyword 2"
date: "2025-10-10"
dateModified: "2025-10-10"
author: "Ing Heng Credit Team"
authorRole: "Equipment Financing Specialists"
category: "Equipment Financing"
subcategory: "Construction Equipment"
readingTime: "8 minutes"
featured: false
---
```

**Step 8: Add Internal and External Links**

**Internal Links (3-5 required):**
- Link to related blog posts using contextual anchor text
- Link to persona-specific landing pages
- Link to calculator or lead magnet
- Ensure reciprocal linking where appropriate

Example:
```markdown
Many contractors also consider [used equipment financing](link)
as a cost-effective alternative, especially during [seasonal
cash flow challenges](link).
```

**External Links (2-3 required):**
- Link to government resources (CIDB, KPKT, JPJ)
- Link to industry associations
- Link to authoritative statistics or research
- Use rel="nofollow" for less authoritative sources

Example:
```markdown
According to the [Construction Industry Development Board (CIDB)](link),
contractors with owned equipment are 3x more likely to win government tenders.
```

---

#### Phase 4: Translation & Localization (2-3 hours per language)

If you created English content first, now translate to Mandarin and Malay (or vice versa).

**Step 9: Use Multilingual SEO Specialist Agent**

1. Open `.claude/agents/multilingual-seo-specialist.md`

2. Provide input:
   ```
   Source Content: [File path or URL]
   Source Language: English
   Target Languages: Mandarin Chinese (Simplified), Bahasa Malaysia
   Target Persona: [Persona name]
   Content Type: Blog post
   Optimization Goal: Rankings and conversions
   ```

3. Review output for:
   - [ ] Full translation with cultural adaptation
   - [ ] Independent keyword research for each language
   - [ ] Language-specific examples and references
   - [ ] Localized conversion messaging
   - [ ] Hreflang tag implementation

**Step 10: Cultural Localization Review**

**For Mandarin Content:**
- [ ] Simplified Chinese characters used (not Traditional)
- [ ] Relationship and trust language emphasized
- [ ] Chinese cultural references (CNY, family business)
- [ ] Testimonials and word-of-mouth highlighted
- [ ] Respectful, community-oriented tone

**For Malay Content:**
- [ ] Formal written Malay used
- [ ] Islamic values respected (if appropriate)
- [ ] Government and community emphasized
- [ ] Indirect, polite language
- [ ] Service and support focused

**Step 11: Language-Specific Keyword Optimization**

Do NOT just translate keywords. Research each language independently:

Example:
- English: "excavator financing bad credit"
- Mandarin: "挖掘机贷款快速批准" (excavator loan fast approval) - Different focus!
- Malay: "pembiayaan excavator mudah lulus" (excavator financing easy approval)

Ensure:
- [ ] Primary keyword in title, H1, first 100 words
- [ ] Primary keyword in conclusion
- [ ] Secondary keywords distributed naturally
- [ ] LSI keywords throughout content
- [ ] Keyword density 1-2%

---

#### Phase 5: Optimization & Enhancement (1-2 hours)

**Step 12: Run Content Optimizer**

1. Open `.claude/agents/content-optimizer.md`

2. For EACH language version, request analysis:
   ```
   Content File Path: [path]
   Target Keywords: [primary + secondary]
   Optimization Goal: Rankings and conversions
   Persona Target: [persona name]
   ```

3. Review optimization report and implement:
   - [ ] Priority fixes (high impact)
   - [ ] E-E-A-T enhancements
   - [ ] Readability improvements
   - [ ] SERP feature targeting
   - [ ] Conversion optimization

**Step 13: Add Visual Elements**

For each blog post, include:

1. **Featured Image**
   - Relevant to topic
   - Alt text with primary keyword
   - Optimized file size (<200KB)
   - Dimensions: 1200x630px (social sharing)

2. **In-Content Images (2-4)**
   - Support key concepts
   - Alt text with keywords
   - Relevant to persona

3. **Tables or Charts (1-2)**
   - Comparison tables (e.g., rental vs purchase)
   - Cost breakdowns
   - Timeline visualizations

4. **Infographic (Optional but Recommended)**
   - Summarize key points
   - Highly shareable
   - Include branding

**Step 14: Implement Schema Markup**

Add appropriate structured data:

**Article Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Blog Post Title",
  "image": "https://example.com/image.jpg",
  "author": {
    "@type": "Organization",
    "name": "Ing Heng Credit & Leasing",
    "url": "https://inghengcredit.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Ing Heng Credit",
    "logo": {
      "@type": "ImageObject",
      "url": "https://inghengcredit.com/logo.png"
    }
  },
  "datePublished": "2025-10-10",
  "dateModified": "2025-10-10",
  "description": "Meta description here",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://inghengcredit.com/en/blog/post-slug/"
  }
}
```

**FAQPage Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text here."
      }
    },
    {
      "@type": "Question",
      "name": "Second question?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Second answer."
      }
    }
  ]
}
```

**Step 15: Add Hreflang Tags**

For each blog post, implement hreflang tags to indicate language versions:

```html
<!-- English version -->
<link rel="alternate" hreflang="en-MY" href="https://inghengcredit.com/en/blog/post-slug/" />

<!-- Mandarin version -->
<link rel="alternate" hreflang="zh-Hans-MY" href="https://inghengcredit.com/zh/blog/post-slug/" />

<!-- Malay version -->
<link rel="alternate" hreflang="ms-MY" href="https://inghengcredit.com/ms/blog/post-slug/" />

<!-- Default (English) -->
<link rel="alternate" hreflang="x-default" href="https://inghengcredit.com/en/blog/post-slug/" />
```

---

#### Phase 6: Quality Assurance (30-60 minutes)

**Step 16: Complete QA Checklist**

See full [Quality Assurance Checklist](#quality-assurance-checklist) below.

Quick checklist:
- [ ] All keywords properly placed
- [ ] Readability score 60+ (Flesch Reading Ease)
- [ ] No spelling or grammar errors
- [ ] All links working
- [ ] Frontmatter complete
- [ ] Schema markup validated
- [ ] Hreflang tags correct
- [ ] Images optimized with alt text
- [ ] Mobile-responsive formatting
- [ ] CTAs clear and persona-specific

**Step 17: Native Speaker Review (If Possible)**

- [ ] English: Native speaker or fluent reviewer
- [ ] Mandarin: Native Mandarin speaker (Malaysia preferred)
- [ ] Malay: Native Malay speaker

Focus areas for review:
- Natural language flow
- Cultural appropriateness
- Idiomatic expressions
- Conversion messaging resonance

---

#### Phase 7: Publishing (15-30 minutes)

**Step 18: Save Files in Correct Location**

```
/en/blogs/[topic-slug].md
/zh/blogs/[topic-slug].md
/ms/blogs/[topic-slug].md
```

URL slug guidelines:
- Use primary keyword
- Lowercase, hyphens between words
- No special characters
- Keep under 60 characters

Example:
- English: `/en/blogs/excavator-financing-contractors-guide/`
- Mandarin: `/zh/blogs/wajueji-rongzi-zhidao/`
- Malay: `/ms/blogs/pembiayaan-excavator-panduan/`

**Step 19: Complete Publishing Checklist**

See full [Publishing Checklist](#publishing-checklist) below.

**Step 20: Set Up Tracking**

- [ ] Add page to Google Analytics
- [ ] Set up goal tracking for CTAs
- [ ] Add to rank tracking tool (Ahrefs, SEMrush)
- [ ] Track in content calendar

---

#### Phase 8: Promotion (1-2 hours)

**Step 21: Internal Linking**

Add links to the new content from:
- [ ] Related blog posts (2-3 contextual links)
- [ ] Relevant pillar pages
- [ ] Persona-specific landing pages
- [ ] Homepage or category pages (if warranted)

**Step 22: Social Media Promotion**

**English Content (LinkedIn focus):**
- Create professional LinkedIn post
- Share in relevant groups
- Tag industry connections
- Use hashtags: #EquipmentFinancing #Malaysia #BusinessGrowth

**Mandarin Content (WeChat/Facebook focus):**
- Share in Chinese business Facebook groups
- Post in logistics/construction WeChat groups
- Use Chinese hashtags and keywords
- Include testimonial or success story

**Malay Content (Facebook/WhatsApp focus):**
- Share in Malay contractor Facebook groups
- Post in business WhatsApp groups
- Local community pages
- Use Malay hashtags

**Step 23: Email Newsletter (If Applicable)**

- [ ] Add to next newsletter
- [ ] Segment by persona if possible
- [ ] Personalized subject line
- [ ] Clear CTA to read article

---

## Optimizing Existing Content

### Workflow: Content Refresh & Optimization

Use this workflow when existing content is underperforming or needs updating.

#### When to Optimize Content

Optimize content if any of these are true:
- Not ranking in top 20 for target keyword after 3 months
- Traffic declining >20% month-over-month
- Conversion rate below 3%
- Content is >12 months old
- Competitor content has surpassed yours
- Search algorithm update impacted rankings

---

#### Phase 1: Performance Analysis (30 minutes)

**Step 1: Gather Current Metrics**

For the content piece:
- [ ] Current keyword rankings (primary and secondary)
- [ ] Monthly organic traffic (last 3 months)
- [ ] Average time on page
- [ ] Bounce rate
- [ ] Conversion rate (if tracked)
- [ ] Number of backlinks

**Step 2: Competitive Analysis**

Google the primary keyword and review:
- [ ] Your current position
- [ ] Top 3 competitors' content
- [ ] Their word count vs yours
- [ ] Their content coverage vs yours
- [ ] Their E-E-A-T signals vs yours
- [ ] SERP features present (featured snippet, PAA, etc.)

**Step 3: Identify Issues**

Common issues:
- [ ] Outdated information (statistics, dates)
- [ ] Thin content (too short)
- [ ] Poor keyword optimization
- [ ] Weak E-E-A-T signals
- [ ] Poor readability
- [ ] Weak CTAs
- [ ] Missing internal links
- [ ] No schema markup

---

#### Phase 2: Content Audit & Optimization Plan (1 hour)

**Step 4: Use Content Optimizer Agent**

1. Open `.claude/agents/content-optimizer.md`

2. Provide input:
   ```
   Content URL or File Path: [path]
   Target Keywords: [primary + secondary]
   Current Performance: [rankings, traffic, conversions]
   Optimization Goal: Rankings / Traffic / Conversions / All
   Persona Target: [persona name]
   ```

3. Review comprehensive optimization report

**Step 5: Create Prioritized Fix List**

From the optimization report, categorize fixes:

**Quick Wins (High Impact, Low Effort):**
- [ ] Update title tag with primary keyword
- [ ] Rewrite meta description
- [ ] Update statistics to current year
- [ ] Add missing internal links
- [ ] Fix broken links
- [ ] Add author bio for E-E-A-T

**Important Improvements (High Impact, Medium Effort):**
- [ ] Add 500-800 words to expand content
- [ ] Restructure headings for better keyword targeting
- [ ] Add FAQ section with PAA questions
- [ ] Improve CTAs
- [ ] Add case study or testimonial
- [ ] Create and add custom images/infographics

**Enhancement & Polish (Medium Impact, Variable Effort):**
- [ ] Full content rewrite for readability
- [ ] Add video content
- [ ] Create interactive calculator
- [ ] Extensive internal linking strategy
- [ ] Comprehensive competitor content analysis

---

#### Phase 3: Implementation (2-5 hours depending on scope)

**Step 6: Update Metadata**

```yaml
---
dateModified: "2025-10-10"  # Update to today
# Add any missing frontmatter fields
# Update keywords if research shows better options
---
```

**Step 7: Implement Content Changes**

Work through prioritized fix list:

1. **Update Introduction**
   - Current statistics and examples
   - Stronger hook
   - Clear value proposition

2. **Expand Main Content**
   - Add missing topics competitors cover
   - Include more persona-specific examples
   - Add data and authoritative citations
   - Improve depth and comprehensiveness

3. **Optimize Headings**
   - Include primary/secondary keywords
   - Clear hierarchy (H2 → H3)
   - Descriptive and enticing

4. **Add or Improve FAQ Section**
   - Target PAA questions
   - Concise, direct answers
   - Implement FAQ schema

5. **Strengthen E-E-A-T**
   - Add author credentials
   - Update all statistics and dates
   - Link to authoritative sources
   - Add customer testimonials
   - Display trust signals (licenses, years in business)

6. **Improve Conversion Elements**
   - Multiple CTAs (beginning, middle, end)
   - Persona-specific messaging
   - Trust signals near CTAs
   - Clear next steps

7. **Enhance Internal Linking**
   - Add 2-3 more contextual internal links
   - Link from related content to this page
   - Update anchor text for better keywords

8. **Optimize for SERP Features**
   - Format for featured snippet (40-60 word answer)
   - Target PAA questions in FAQ
   - Add tables for comparison keywords
   - Implement appropriate schema

**Step 8: Readability Pass**

Run through readability checklist:
- [ ] Paragraphs 2-4 sentences max
- [ ] Sentences 15-20 words average
- [ ] Active voice (not passive)
- [ ] Transition words between sections
- [ ] Bullet points and lists for scannability
- [ ] Short words (avoid jargon or explain it)
- [ ] Flesch Reading Ease 60+

**Step 9: Technical SEO Check**

- [ ] Primary keyword in title, H1, first 100 words, conclusion
- [ ] Keyword density 1-2% (not stuffed)
- [ ] Schema markup present and valid
- [ ] Images have descriptive alt text with keywords
- [ ] URL slug optimized (if changing, set up 301 redirect)
- [ ] Internal links using descriptive anchor text
- [ ] External links to authoritative sources (2-3)

---

#### Phase 4: Quality Assurance (30 minutes)

**Step 10: QA Review**

Complete [Quality Assurance Checklist](#quality-assurance-checklist) below.

**Step 11: A/B Test CTAs (Optional)**

If conversion rate is the issue:
- Create 2 versions of primary CTA
- Test for 2-4 weeks
- Implement winner

---

#### Phase 5: Republishing & Monitoring (30 minutes)

**Step 12: Update Published Date**

Decide whether to:
- Keep original publish date + update modified date (recommended)
- Change publish date to today (if major rewrite)

**Step 13: Resubmit to Google**

- [ ] Use Google Search Console "Request Indexing"
- [ ] Update XML sitemap
- [ ] Share on social media (treat as new content)

**Step 14: Monitor Performance**

Track these metrics weekly for 8 weeks:
- [ ] Keyword ranking changes
- [ ] Traffic changes
- [ ] Engagement metrics (time on page, bounce rate)
- [ ] Conversion rate changes

**Expected Timeline for Results:**
- Quick wins: 1-2 weeks
- Ranking improvements: 4-8 weeks
- Traffic increases: 6-12 weeks

---

## Conducting Keyword Research

### Workflow: Comprehensive Keyword Research

Use this workflow when planning new content, entering a new topic area, or conducting quarterly keyword reviews.

#### Phase 1: Define Research Parameters (15 minutes)

**Step 1: Set Research Goals**

What are you trying to achieve?
- [ ] Find keywords for specific persona
- [ ] Discover content gaps
- [ ] Plan content cluster strategy
- [ ] Identify quick-win opportunities
- [ ] Analyze competitor keyword strategy

**Step 2: Define Scope**

Specify:
- **Topic/Industry:** [e.g., "excavator financing"]
- **Target Personas:** [1-3 personas]
- **Target Languages:** [English / Mandarin / Malay / ALL]
- **Content Type:** [Blog / Landing page / Pillar page]
- **Priority:** [Quick wins / Long-term authority / Both]

---

#### Phase 2: Keyword Discovery (1-2 hours)

**Step 3: Use Keyword Researcher Agent**

1. Open `.claude/agents/keyword-researcher.md`

2. Provide detailed input:
   ```
   Topic/Industry: [Your topic]
   Target Persona: [Persona name(s)]
   Target Language: ALL
   Competitor URLs: [Optional: 2-3 competitor URLs]
   Current Rankings: [Optional: Your current keyword positions]
   ```

3. Review comprehensive keyword report with:
   - Primary keywords (high volume)
   - Secondary keywords (medium volume)
   - Long-tail keywords (high intent)
   - Keyword clusters
   - Competitor gap analysis
   - Multilingual keyword mapping
   - PAA questions

**Step 4: Manual Keyword Research (Supplement Agent)**

**Google Autocomplete:**
1. Search for seed keyword + [blank]
   - "excavator financing" [blank] → suggestions
   - "excavator financing for" [blank] → suggestions
   - "excavator financing vs" [blank] → suggestions

2. Document all suggestions

**Google "People Also Ask":**
1. Search primary keyword
2. Expand all PAA questions
3. Document all questions (these become FAQ content)

**Google Related Searches:**
1. Scroll to bottom of SERP
2. Document all related searches
3. Click each and review their related searches

**Competitor Research:**
1. Identify top 3 competitors for your topic
2. Use Ahrefs or SEMrush (if available) to see their ranking keywords
3. Identify gaps (keywords they rank for, you don't)

---

#### Phase 3: Keyword Analysis (1 hour)

**Step 5: Create Keyword Database**

Organize all keywords in a spreadsheet:

| Keyword | Language | Search Volume | Difficulty | Intent | Current Rank | Priority | Content Idea |
|---------|----------|---------------|------------|--------|--------------|----------|--------------|
| excavator financing Malaysia | EN | 520/mo | 35 | Commercial | N/A | HIGH | Pillar page |
| 挖掘机融资 | ZH | 350/mo | 28 | Commercial | N/A | HIGH | Pillar page |
| pembiayaan excavator | MS | 320/mo | 30 | Commercial | N/A | HIGH | Pillar page |
| [etc...] | | | | | | | |

**Step 6: Classify Search Intent**

For each keyword, determine:

**Informational:**
- Learning/research stage
- "What is...", "How to...", "Why does..."
- Content type: Blog post, guide
- Example: "What is equipment financing"

**Commercial:**
- Evaluating options
- "Best...", "vs", "comparison", "review"
- Content type: Comparison, listicle
- Example: "Best excavator financing companies"

**Transactional:**
- Ready to purchase/apply
- "Apply", "buy", "get", "[location] near me"
- Content type: Landing page, application page
- Example: "Apply excavator financing online"

**Navigational:**
- Looking for specific brand/company
- "[Brand name]", "[Brand name] + [product]"
- Content type: Homepage, category page
- Example: "Ing Heng Credit excavator financing"

**Step 7: Assess Keyword Difficulty**

For each keyword, evaluate:
- Search volume (higher = more competition usually)
- Number of results
- Domain authority of ranking pages
- Content quality of top results
- Your current domain authority

**Difficulty Levels:**
- **Easy (0-30):** Target immediately
- **Medium (31-50):** Target with solid content
- **Hard (51-70):** Long-term goal, need authority building
- **Very Hard (71-100):** Consider long-tail variations instead

---

#### Phase 4: Strategy Development (1 hour)

**Step 8: Identify Content Clusters**

Group related keywords into clusters:

**Example Cluster: Excavator Financing**

**Pillar Page:** "Complete Guide to Excavator Financing in Malaysia"
- Target: "excavator financing Malaysia" (520/mo)
- Comprehensive 3,000+ word guide
- Links to all cluster pages

**Cluster Pages:**
1. "Excavator Hire Purchase vs Rental Cost Comparison" (290/mo)
2. "How to Get Approved for Excavator Financing with Bad Credit" (170/mo)
3. "Used Excavator Financing: Age Limits and Requirements" (140/mo)
4. "Fast Excavator Financing: 2-Hour Approval Process" (85/mo)
5. "Seasonal Payment Plans for Construction Equipment Financing" (60/mo)
6. "Tax Benefits of Equipment Financing for Contractors" (55/mo)

Each cluster page links back to pillar page and to related cluster pages.

**Step 9: Prioritize Keywords**

Create three priority tiers:

**High Priority (Target First - Months 1-3):**
- Quick wins (easy difficulty, decent volume)
- High intent keywords (transactional)
- Persona-primary keywords
- Content gaps vs competitors

**Medium Priority (Target Next - Months 4-8):**
- Medium difficulty, good volume
- Commercial intent keywords
- Important long-tail keywords
- Topic expansion

**Low Priority (Long-term - Months 9-12):**
- High difficulty keywords
- Low volume but strategic importance
- Nice-to-have content
- Experimental topics

**Step 10: Create Content Calendar**

Map keywords to content pieces:

| Month | Content Piece | Primary Keyword | Language | Persona | Difficulty | Est. Traffic |
|-------|---------------|-----------------|----------|---------|------------|--------------|
| Oct | Excavator Financing Guide | excavator financing | ALL | Ahmad | Medium | 500/mo |
| Oct | Lorry Financing Startups | lorry financing new business | ALL | Lee | Easy | 180/mo |
| Nov | Forklift Rental vs Purchase | forklift rental vs purchase | ALL | William | Easy | 280/mo |
| [etc...] | | | | | | |

---

#### Phase 5: Documentation & Tracking (30 minutes)

**Step 11: Document Keyword Strategy**

Save keyword research outputs:
- Complete keyword database (CSV/spreadsheet)
- Content cluster maps
- Prioritized content calendar
- Competitor keyword gap list

**Step 12: Set Up Tracking**

- [ ] Add priority keywords to rank tracker (Ahrefs, SEMrush)
- [ ] Set baseline rankings
- [ ] Configure alerts for ranking changes
- [ ] Schedule monthly review of keyword performance

**Step 13: Share with Team**

Distribute:
- Prioritized keyword list
- Content calendar
- Quick wins to target first
- Long-term keyword goals

---

## Analyzing Competitors

### Workflow: Comprehensive Competitor Analysis

Use this workflow to understand competitor strategies, identify content gaps, and find opportunities.

#### Phase 1: Competitor Identification (30 minutes)

**Step 1: Identify Direct Competitors**

Direct competitors (offer same service, target same market):
- [ ] Competitor 1: [Company name] - [URL]
- [ ] Competitor 2: [Company name] - [URL]
- [ ] Competitor 3: [Company name] - [URL]

**How to find:**
- Google your target keywords
- Companies ranking in top 10
- Similar business model (equipment financing)
- Similar geographic focus (Malaysia)

**Step 2: Identify Indirect Competitors**

Indirect competitors (rank for your keywords but different business):
- Equipment dealers with financing
- Banks offering equipment loans
- General financing/loan companies

**Step 3: Identify Content Competitors**

Content competitors (rank for keywords but don't compete in business):
- Industry blogs and publications
- Financial advice websites
- Equipment industry sites

---

#### Phase 2: Content Analysis (2-3 hours)

**Step 4: Use Competitor Analyzer Agent**

1. Open `.claude/agents/competitor-analyzer.md`

2. Provide input:
   ```
   Competitor URLs: [3-5 competitor URLs]
   Analysis Focus: Content strategy, keyword rankings, content gaps
   Our Target Keywords: [Your priority keywords]
   Our Target Personas: [Your personas]
   ```

3. Review competitive intelligence report

**Step 5: Manual Content Analysis**

For each competitor, analyze:

**Content Inventory:**
- [ ] Number of blog posts
- [ ] Number of landing pages
- [ ] Number of resources (guides, calculators, tools)
- [ ] Update frequency
- [ ] Content age (how old is content?)

**Content Quality:**
- [ ] Average word count
- [ ] Content depth and comprehensiveness
- [ ] Visual elements (images, videos, infographics)
- [ ] Schema markup present?
- [ ] E-E-A-T signals (author bios, citations, trust signals)

**Content Topics:**
Document all topics they cover. Create categories:
- Topics they cover, we don't (GAPS - high priority)
- Topics we both cover (need to outrank)
- Topics we cover, they don't (our advantage)

**Content Format:**
- [ ] How-to guides
- [ ] Comparison articles
- [ ] Listicles (e.g., "7 Best...")
- [ ] Case studies
- [ ] FAQs
- [ ] Videos
- [ ] Calculators/tools
- [ ] Infographics

**Conversion Elements:**
- [ ] CTAs used (types and placement)
- [ ] Lead magnets (calculators, guides, etc.)
- [ ] Form complexity (number of fields)
- [ ] Trust signals displayed
- [ ] Social proof (testimonials, reviews, case studies)

---

#### Phase 3: Keyword Gap Analysis (1-2 hours)

**Step 6: Identify Keyword Gaps**

Using Ahrefs or SEMrush (if available):
1. Run "Content Gap" analysis
2. Input your domain + 3 competitor domains
3. Export keywords competitors rank for but you don't

**Manual Method:**
1. For each priority keyword, identify top 10 ranking pages
2. Note which competitors rank multiple times
3. Visit their sites and explore related content
4. Document keywords/topics they likely target

**Step 7: Categorize Keyword Opportunities**

**Quick Wins:**
- Low difficulty (0-30)
- Decent search volume (50+/month)
- Competitors have thin content
- You can create better content

**Strategic Opportunities:**
- Medium difficulty (31-50)
- Good search volume (100+/month)
- Competitors rank but content not comprehensive
- You can significantly outperform

**Long-term Goals:**
- High difficulty (51+)
- High search volume (200+/month)
- Competitors have strong content and authority
- Need sustained effort and link building

**Step 8: Create Content Gap List**

| Keyword | Volume | Difficulty | Competitor Ranking | Our Rank | Content Angle | Priority |
|---------|--------|------------|-------------------|----------|---------------|----------|
| excavator financing bad credit | 170/mo | 28 | Competitor A (#3) | N/A | Address credit concerns directly | HIGH |
| [etc...] | | | | | | |

---

#### Phase 4: Technical & Link Analysis (1 hour)

**Step 9: Technical SEO Comparison**

Compare your site to competitors:

| Factor | You | Competitor 1 | Competitor 2 | Competitor 3 |
|--------|-----|--------------|--------------|--------------|
| Site Speed (mobile) | [X]s | [X]s | [X]s | [X]s |
| Mobile-friendly | Yes/No | Yes/No | Yes/No | Yes/No |
| HTTPS | Yes/No | Yes/No | Yes/No | Yes/No |
| Schema markup | Yes/No | Yes/No | Yes/No | Yes/No |
| Hreflang (multilingual) | Yes/No | Yes/No | Yes/No | Yes/No |
| Sitemap | Yes/No | Yes/No | Yes/No | Yes/No |

Identify technical gaps to address.

**Step 10: Backlink Analysis**

Using Ahrefs or SEMrush:
- [ ] Number of backlinks (competitor vs you)
- [ ] Number of referring domains
- [ ] Domain authority/rating
- [ ] Types of sites linking (industry sites, directories, news, etc.)
- [ ] Link acquisition tactics (guest posts, partnerships, PR, etc.)

Identify opportunities:
- Sites linking to competitors but not you
- Link building tactics to replicate
- Partnership opportunities

---

#### Phase 5: Strategy Development (1 hour)

**Step 11: Identify Competitive Advantages**

What can you do better?
- [ ] More comprehensive content (longer, more detailed)
- [ ] Better user experience (faster site, better design)
- [ ] Stronger E-E-A-T (better credentials, more trust signals)
- [ ] Unique data or insights
- [ ] Better conversion elements (tools, calculators)
- [ ] Multilingual content (if they don't have it)
- [ ] Persona-specific content (if they're generic)

**Step 12: Create Action Plan**

**Immediate Actions (This Month):**
1. Create content for top 3 keyword gaps
2. Improve existing content to outrank Competitor X on [keyword]
3. Implement missing technical SEO elements

**Short-term Actions (Next 3 Months):**
1. Build content cluster around [topic] to compete with Competitor Y
2. Reach out to sites linking to competitors for backlinks
3. Add missing conversion elements (calculator, improved CTAs)

**Long-term Actions (Next 6-12 Months):**
1. Build domain authority to compete for high-difficulty keywords
2. Expand content coverage to match/exceed competitor content volume
3. Develop unique assets (proprietary data, tools) for competitive advantage

**Step 13: Document Competitive Intelligence**

Create competitor profiles:

```markdown
# Competitor: [Company Name]

**URL:** [url]
**Business Model:** [description]
**Target Market:** [geography, segments]

## Strengths
- [Strength 1]
- [Strength 2]
- [Strength 3]

## Weaknesses
- [Weakness 1]
- [Weakness 2]
- [Weakness 3]

## Content Strategy
- [Strategy observation 1]
- [Strategy observation 2]

## Keywords They Rank For (That We Don't)
- [Keyword 1] - Vol: [X] - Rank: [#X]
- [Keyword 2] - Vol: [X] - Rank: [#X]

## Our Counterstrategy
- [Action 1]
- [Action 2]
- [Action 3]
```

Save in `shared/research/competitor-[name].md`

---

## Monthly Content Planning

### Workflow: Monthly Content Calendar Creation

Use this workflow at the end of each month to plan the next month's content.

#### Phase 1: Performance Review (1 hour)

**Step 1: Review Last Month's Performance**

For all content published last month:

| Content Piece | Language | Keywords Targeted | Current Rank | Traffic | Conversions | Status |
|---------------|----------|-------------------|--------------|---------|-------------|--------|
| [Title] | EN | [keywords] | #15 | 45 visits | 2 | Needs optimization |
| [Title] | ZH | [keywords] | #8 | 72 visits | 5 | Performing well |
| [etc...] | | | | | | |

**Identify:**
- [ ] Top performing content (traffic, rankings, conversions)
- [ ] Underperforming content (needs optimization)
- [ ] Quick wins (keywords ranking #11-20 that could be optimized to top 10)

**Step 2: Review Overall SEO Metrics**

Compare to previous month:
- [ ] Total organic traffic: [X visits] ([±X%])
- [ ] Total keywords ranking: [X] ([±X%])
- [ ] Keywords in top 3: [X] ([±X%])
- [ ] Keywords in top 10: [X] ([±X%])
- [ ] Total conversions: [X] ([±X%])
- [ ] Conversion rate: [X%] ([±X%])

**Step 3: Identify Trends**

- Which personas are driving most traffic?
- Which languages are performing best?
- Which content topics are resonating?
- What external factors influenced performance (seasonality, events, algorithm updates)?

---

#### Phase 2: Goal Setting (30 minutes)

**Step 4: Set Goals for Next Month**

**Traffic Goals:**
- Increase total organic traffic by [X%]
- Achieve [X] visits to [language] content
- Drive [X] visits to [persona] content

**Ranking Goals:**
- Move [X] keywords into top 10
- Achieve top 3 ranking for [keyword 1], [keyword 2]
- Start ranking (top 20) for [X] new keywords

**Content Goals:**
- Publish [X] new blog posts
- Optimize [X] existing posts
- Create [X] landing pages or resources

**Conversion Goals:**
- Achieve [X] conversions from organic traffic
- Improve conversion rate to [X%]
- Generate [X] WhatsApp inquiries

---

#### Phase 3: Content Ideation (1-2 hours)

**Step 5: Generate Content Ideas**

**Source 1: Keyword Research**
- Review keyword research database
- Identify high-priority keywords not yet targeted
- Find keyword clusters to develop

**Source 2: Customer Questions**
- Gather questions from sales team
- Review WhatsApp inquiries
- Check email support questions
- Survey customers if possible

**Source 3: Competitor Gap Analysis**
- Review competitor analysis
- Identify topics competitors cover that we don't
- Find opportunities to outrank competitors

**Source 4: Seasonal Opportunities**
- Chinese New Year (Jan-Feb): Equipment purchases
- Monsoon season (Nov-Feb): Planning content
- Hari Raya (varies): Malay market focus
- Year-end (Dec): Tax planning, budgeting
- Government fiscal year: Tender opportunities

**Source 5: Industry Trends**
- New regulations or government policies
- Equipment technology updates
- Industry news and events
- Economic factors (interest rates, fuel prices)

**Source 6: Content Refresh**
- Identify content >12 months old for updates
- Quick wins (content ranking #11-20)
- Underperforming content from last month

**Step 6: Prioritize Content Ideas**

Score each idea (1-5 scale):

**Business Value:**
- Relevance to target personas
- Keyword search volume
- Conversion potential

**SEO Potential:**
- Keyword difficulty
- Current ranking (if updating)
- Competitor content quality

**Resource Requirement:**
- Time to create
- Skills needed
- External resources (images, data, etc.)

**Priority Score = (Business Value + SEO Potential) / Resource Requirement**

Sort ideas by priority score.

---

#### Phase 4: Calendar Creation (1 hour)

**Step 7: Allocate Content to Calendar**

**Consider:**
- Available resources (writers, time)
- Content dependencies (pillar pages before cluster pages)
- Seasonal timing
- Persona balance (don't neglect any persona)
- Language balance (equal coverage across EN/ZH/MS)

**Typical Monthly Capacity:**
- 4-6 new blog posts (assuming /generate-blog creates all language versions)
- 2-3 content optimization projects
- 1 new landing page or resource
- 1 major pillar page or comprehensive guide

**Step 8: Create Content Calendar**

| Week | Content Piece | Type | Primary Keyword | Language | Persona | Assigned To | Status |
|------|---------------|------|-----------------|----------|---------|-------------|--------|
| Week 1 | Excavator Seasonal Payment | New Blog | excavator flexible payment | ALL | Ahmad | [Name] | Not Started |
| Week 1 | Lorry Financing Optimization | Optimize | lorry financing Klang | ALL | Lee | [Name] | Not Started |
| Week 2 | Forklift ROI Calculator | New Landing Page | forklift purchase ROI | EN | William | [Name] | Not Started |
| [etc...] | | | | | | | |

**Step 9: Plan Dependencies**

For content clusters:
1. Create pillar page first (Week 1-2)
2. Create cluster pages 1-3 (Week 2-3)
3. Create cluster pages 4-6 (Week 3-4)
4. Internal linking and promotion (Week 4)

**Step 10: Schedule Promotion**

For each content piece, plan:
- Social media posts (language-specific)
- Email newsletter inclusion
- WhatsApp group sharing
- Internal linking from existing content

---

#### Phase 5: Resource Allocation (30 minutes)

**Step 11: Assign Responsibilities**

- [ ] Content creation: [Who]
- [ ] Translation/localization: [Who or use sub-agent]
- [ ] Image creation: [Who or tool]
- [ ] Technical implementation: [Who]
- [ ] QA review: [Who]
- [ ] Publishing: [Who]
- [ ] Promotion: [Who]

**Step 12: Set Deadlines**

For each content piece:
- Draft due: [Date]
- Review complete: [Date]
- Translation complete: [Date]
- Final QA: [Date]
- Publish date: [Date]
- Promotion starts: [Date]

**Step 13: Track Progress**

Set up tracking system:
- Trello/Asana board
- Spreadsheet with status updates
- Weekly check-in meetings
- Monthly performance reviews

---

## Quality Assurance Checklist

Use this comprehensive checklist before publishing any content.

### Content Quality

**Accuracy & Factness:**
- [ ] All facts verified
- [ ] Statistics cited with sources
- [ ] Links to authoritative sources
- [ ] No outdated information
- [ ] Company information correct (phone, address, services)

**Completeness:**
- [ ] Topic covered comprehensively
- [ ] No major subtopics missing
- [ ] Addresses persona pain points
- [ ] Answers common questions
- [ ] Provides actionable advice

**Uniqueness:**
- [ ] Original content (not copied)
- [ ] Unique perspective or insights
- [ ] Not duplicating existing content on site
- [ ] Adds value beyond competitors

**Relevance:**
- [ ] Aligned with target persona
- [ ] Addresses search intent for target keywords
- [ ] Appropriate for audience knowledge level
- [ ] Culturally appropriate for language/market

---

### SEO Optimization

**Keyword Optimization:**
- [ ] Primary keyword in title tag
- [ ] Primary keyword in H1
- [ ] Primary keyword in first 100 words
- [ ] Primary keyword in conclusion
- [ ] Primary keyword in URL slug
- [ ] Primary keyword in at least 2 H2s
- [ ] Primary keyword density 1-2%
- [ ] Secondary keywords distributed naturally
- [ ] LSI keywords included
- [ ] No keyword stuffing

**Meta Data:**
- [ ] Title tag present and optimized
- [ ] Title tag 50-60 characters
- [ ] Title tag includes primary keyword
- [ ] Meta description present
- [ ] Meta description 150-155 characters
- [ ] Meta description includes primary keyword
- [ ] Meta description includes CTA
- [ ] Meta description compelling and click-worthy

**Content Structure:**
- [ ] H1 present (only one)
- [ ] H2s used appropriately (every 300 words)
- [ ] H3s used for sub-sections
- [ ] Proper heading hierarchy (no skipping levels)
- [ ] Headings include keywords
- [ ] Headings descriptive and enticing

**Readability:**
- [ ] Flesch Reading Ease score 60+
- [ ] Paragraphs 2-4 sentences max
- [ ] Sentences 15-20 words average
- [ ] Active voice used (>80% of sentences)
- [ ] Transition words used
- [ ] Technical terms explained
- [ ] Bullet points and lists used
- [ ] Content scannable

**Internal Linking:**
- [ ] 3-5 internal links included
- [ ] Links contextually relevant
- [ ] Anchor text descriptive (not "click here")
- [ ] Links to related blog posts
- [ ] Links to pillar pages
- [ ] Links to conversion pages
- [ ] No broken internal links

**External Linking:**
- [ ] 2-3 external links to authoritative sources
- [ ] Links add value (not just for SEO)
- [ ] Authoritative sites (government, industry associations, research)
- [ ] Links open in new tab (if appropriate)
- [ ] No broken external links

---

### E-E-A-T Signals

**Experience:**
- [ ] First-hand insights or examples
- [ ] Customer case studies or testimonials
- [ ] Real outcomes and results shown
- [ ] Practical, actionable advice

**Expertise:**
- [ ] Author bio included
- [ ] Author credentials mentioned
- [ ] Industry experience demonstrated
- [ ] Data and statistics cited

**Authoritativeness:**
- [ ] Company credentials mentioned (40 years, KPKT licensed)
- [ ] Industry recognition or awards
- [ ] Associations or certifications
- [ ] Links from/to authoritative sites

**Trustworthiness:**
- [ ] Contact information present
- [ ] Transparent about services and terms
- [ ] Disclaimers where appropriate (financial content)
- [ ] Privacy and security mentioned
- [ ] Trust signals displayed (licenses, years in business)

---

### Technical SEO

**Schema Markup:**
- [ ] Article schema implemented
- [ ] Author schema included
- [ ] FAQPage schema for FAQ section
- [ ] Schema validated (schema.org validator)
- [ ] Date published and modified included

**Hreflang Tags:**
- [ ] Hreflang tags present for all language versions
- [ ] English version (en-MY) linked
- [ ] Mandarin version (zh-Hans-MY) linked
- [ ] Malay version (ms-MY) linked
- [ ] X-default specified (usually English)
- [ ] Hreflang tags properly formatted

**URL Structure:**
- [ ] URL slug descriptive
- [ ] URL includes primary keyword
- [ ] URL lowercase only
- [ ] URL uses hyphens (not underscores)
- [ ] URL under 60 characters
- [ ] No special characters in URL
- [ ] Proper language path (/en/, /zh/, /ms/)

**Images:**
- [ ] All images have alt text
- [ ] Alt text includes keywords where relevant
- [ ] Alt text descriptive (not keyword stuffed)
- [ ] Images optimized for web (<200KB each)
- [ ] Images relevant to content
- [ ] Featured image present (1200x630px)
- [ ] File names descriptive

**Mobile Optimization:**
- [ ] Content mobile-responsive
- [ ] Paragraphs short for mobile reading
- [ ] Images scale properly
- [ ] Buttons and links tap-friendly
- [ ] No horizontal scrolling required

---

### Conversion Elements

**Calls-to-Action:**
- [ ] Multiple CTAs throughout (beginning, middle, end)
- [ ] CTAs clear and specific
- [ ] CTAs persona-appropriate
- [ ] CTA buttons visually distinct
- [ ] Primary CTA above the fold

**Trust Signals:**
- [ ] Company credentials displayed
- [ ] Customer testimonials included (if relevant)
- [ ] Security/privacy mentioned
- [ ] Contact information present
- [ ] WhatsApp number included (+60 17-570 0889)

**Value Propositions:**
- [ ] Unique benefits highlighted
- [ ] Differentiators from competitors
- [ ] Specific results or outcomes mentioned
- [ ] Social proof (success stories, case studies)

---

### Multilingual Specific

**For All Languages:**
- [ ] Content fully translated (no mixed languages except technical terms)
- [ ] Cultural localization applied
- [ ] Language-specific keywords used (not just translated)
- [ ] Culturally appropriate examples
- [ ] Conversion messaging localized

**For Mandarin (Chinese):**
- [ ] Simplified Chinese characters (not Traditional)
- [ ] Proper Chinese punctuation (。，、etc.)
- [ ] Relationship and trust language
- [ ] Chinese cultural references appropriate
- [ ] Character encoding correct (UTF-8)

**For Malay (Bahasa Malaysia):**
- [ ] Formal written Malay used
- [ ] Proper Malay spelling and grammar
- [ ] Respectful, community-oriented tone
- [ ] Local context and examples
- [ ] Government references appropriate (KPKT, CIDB, etc.)

---

### Final Checks

**Proofreading:**
- [ ] No spelling errors
- [ ] No grammar errors
- [ ] No punctuation errors
- [ ] Consistent formatting throughout
- [ ] No placeholder text ([TK], [INSERT HERE], etc.)

**Functionality:**
- [ ] All links working (internal and external)
- [ ] All images loading
- [ ] CTAs linking to correct pages
- [ ] Forms functional (if present)
- [ ] Calculator/tools working (if present)

**Compliance:**
- [ ] No false claims or guarantees
- [ ] Disclaimers present (for financial advice)
- [ ] Privacy policy linked (if collecting data)
- [ ] Terms of service linked (if applicable)

**Brand Consistency:**
- [ ] Company name spelled correctly (Ing Heng Credit & Leasing)
- [ ] Consistent tone and voice
- [ ] Brand colors and fonts used (if applicable)
- [ ] Logo present and correct

---

## Publishing Checklist

Use this checklist when publishing content to ensure proper implementation.

### Pre-Publishing

**Content Files:**
- [ ] Content saved in correct location (/en/, /zh/, /ms/)
- [ ] File naming convention followed ([topic-slug].md)
- [ ] Frontmatter metadata complete
- [ ] All language versions created

**Quality Assurance:**
- [ ] QA checklist completed
- [ ] Native speaker review (if possible)
- [ ] Final proofreading done
- [ ] Stakeholder approval obtained (if required)

---

### Technical Implementation

**On-Page SEO:**
- [ ] Title tag implemented
- [ ] Meta description implemented
- [ ] H1 tag implemented
- [ ] Heading hierarchy correct (H1 > H2 > H3)
- [ ] URL slug optimized

**Schema Markup:**
- [ ] Article schema added to page head
- [ ] FAQPage schema added (if FAQ section present)
- [ ] Author schema included
- [ ] Schema validated (Google Rich Results Test)

**Hreflang Tags:**
- [ ] Hreflang tags added to <head> of all language versions
- [ ] Self-referencing hreflang included
- [ ] X-default specified
- [ ] All URLs absolute (not relative)

**Internal Linking:**
- [ ] Internal links from new content implemented
- [ ] Internal links TO new content added from related pages
- [ ] Anchor text varied and descriptive
- [ ] No broken links

**Images:**
- [ ] Featured image uploaded and set
- [ ] All images uploaded to site
- [ ] Image file names optimized ([keyword]-[description].jpg)
- [ ] Alt text added to all images
- [ ] Images compressed (<200KB each)

**Mobile Optimization:**
- [ ] Test on mobile device
- [ ] All elements visible and functional
- [ ] Text readable without zooming
- [ ] Buttons tap-friendly
- [ ] No horizontal scrolling

---

### Indexing & Tracking

**Sitemap:**
- [ ] New URLs added to XML sitemap
- [ ] Sitemap submitted to Google Search Console
- [ ] Sitemap submitted to Bing Webmaster Tools

**Search Console:**
- [ ] New pages submitted for indexing (Request Indexing)
- [ ] Hreflang validated in International Targeting report
- [ ] Core Web Vitals checked
- [ ] Mobile usability checked

**Analytics:**
- [ ] Page added to Google Analytics
- [ ] Goals/conversions configured for CTAs
- [ ] Event tracking set up (if applicable)
- [ ] UTM parameters used (for social sharing)

**Rank Tracking:**
- [ ] Target keywords added to rank tracker (Ahrefs, SEMrush)
- [ ] Baseline rankings recorded
- [ ] Tracking frequency set (weekly)
- [ ] Alerts configured for significant changes

---

### Promotion

**Internal Promotion:**
- [ ] Internal links added from related content
- [ ] Added to homepage or category page (if warranted)
- [ ] Featured in "Related Posts" sections
- [ ] Added to navigation or footer (if relevant)

**Social Media:**
- [ ] LinkedIn post created (for English content)
- [ ] Facebook post created (all languages)
- [ ] Posted in relevant Facebook groups
- [ ] Shared in WhatsApp groups (Mandarin/Malay)
- [ ] Scheduled for re-sharing (1 week, 1 month later)

**Email Marketing:**
- [ ] Added to next newsletter
- [ ] Segmented by persona (if possible)
- [ ] Email subject line optimized
- [ ] Clear CTA to read article

**Outreach:**
- [ ] Shared with industry contacts
- [ ] Sent to customers who asked related questions
- [ ] Posted in relevant online communities
- [ ] Submitted to content aggregators (if applicable)

---

### Post-Publishing Monitoring

**First 24 Hours:**
- [ ] Check indexing status in Google Search Console
- [ ] Monitor for any technical errors (404s, 500s)
- [ ] Review initial traffic in Analytics
- [ ] Check social media engagement
- [ ] Respond to any comments or inquiries

**First Week:**
- [ ] Check initial keyword rankings
- [ ] Monitor traffic trends
- [ ] Review engagement metrics (time on page, bounce rate)
- [ ] Check for any broken links or issues
- [ ] Gather feedback from team and customers

**First Month:**
- [ ] Review keyword ranking progress
- [ ] Analyze traffic patterns
- [ ] Track conversions from page
- [ ] Identify optimization opportunities
- [ ] Document learnings for future content

---

## Content Performance Review

### Workflow: Monthly Content Performance Review

Conduct this review at the end of each month to assess content performance and identify optimization opportunities.

#### Step 1: Gather Performance Data

For all content published in the last 3 months:

**From Google Analytics:**
- Page views
- Unique visitors
- Average time on page
- Bounce rate
- Pages per session
- Conversion rate

**From Google Search Console:**
- Impressions
- Clicks
- Average position
- Click-through rate (CTR)

**From Rank Tracker:**
- Current keyword rankings
- Ranking changes (vs last month)
- Number of ranking keywords
- Keywords in top 3, top 10, top 20

---

#### Step 2: Performance Analysis

**Identify Top Performers:**
- Content with highest traffic
- Content with highest conversions
- Content with best engagement (time on page, low bounce rate)
- Content with best ranking improvements

**Why are they performing well?**
- Topic resonance with audience
- Strong keyword targeting
- Excellent content quality
- Good promotion
- SERP feature wins (featured snippet, PAA)

**Identify Underperformers:**
- Content with low/declining traffic
- Content not ranking (outside top 20)
- Content with high bounce rate
- Content with low conversions

**Why are they underperforming?**
- Keyword too competitive
- Thin content (too short, not comprehensive)
- Poor search intent match
- Technical issues
- Insufficient promotion

---

#### Step 3: Optimization Opportunities

**Quick Wins:**
Content ranking #11-20 that could be optimized to top 10:
- [ ] [Content 1] - Currently #15 for [keyword] → Optimize
- [ ] [Content 2] - Currently #12 for [keyword] → Optimize

**Content Refresh Needed:**
Content >12 months old or with declining traffic:
- [ ] [Content 1] - 18 months old, traffic down 30% → Update
- [ ] [Content 2] - 14 months old, rankings dropped → Refresh

**New Opportunities:**
SERP features to target:
- [ ] Featured snippet for [keyword] - Create concise answer
- [ ] PAA questions for [topic] - Add FAQ section
- [ ] Video carousel for [keyword] - Create video

---

#### Step 4: Action Plan

**This Month's Optimization Projects:**

1. **Optimize [Content 1] for "[keyword]"**
   - Current rank: #15
   - Add 500 words on [missing topic]
   - Update statistics to 2025
   - Add FAQ section targeting PAA
   - Target rank: Top 10

2. **Refresh [Content 2]**
   - Traffic declining
   - Update all statistics and examples
   - Expand content by 30%
   - Improve E-E-A-T signals
   - Re-promote on social media

3. **Create [New Content] to fill gap**
   - Competitor ranking for [keyword]
   - We have no content on this topic
   - Medium difficulty, good volume
   - High conversion potential

---

#### Step 5: Reporting

Create monthly performance report:

```markdown
# SEO Content Performance Report - [Month Year]

## Executive Summary
- Total organic traffic: [X] visits ([±X%] vs last month)
- Total conversions: [X] ([±X%] vs last month)
- Keywords ranking: [X] total ([±X%] vs last month)
- Top 10 rankings: [X] ([±X%] vs last month)

## Top Performing Content
1. [Content Title] - [X] visits, [X] conversions
2. [Content Title] - [X] visits, [X] conversions
3. [Content Title] - [X] visits, [X] conversions

## Ranking Improvements
1. [Keyword] - Moved from #15 to #8
2. [Keyword] - Moved from #22 to #12
3. [Keyword] - Entered top 20 (#18)

## Optimization Opportunities
- [X] quick wins identified (ranking #11-20)
- [X] content pieces need refresh
- [X] content gaps vs competitors

## Action Plan for Next Month
1. [Action 1]
2. [Action 2]
3. [Action 3]

## Insights & Learnings
- [Insight 1]
- [Insight 2]
- [Insight 3]
```

---

## Conclusion

These workflows provide a comprehensive framework for creating, optimizing, and managing SEO content for Ing Heng Credit & Leasing. Consistency in following these processes will ensure high-quality, optimized content that drives organic traffic and conversions.

**Key Success Factors:**
- Persona-driven content that addresses specific customer needs
- Multilingual content with full cultural localization
- Comprehensive keyword research and targeting
- Ongoing optimization and performance monitoring
- Strong E-E-A-T signals for financial content
- Consistent publishing schedule

For strategy overview, see: `shared/research/SEO-STRATEGY.md`
For persona guidance, see: `shared/PERSONA-GUIDE.md`

---

**Last Updated:** October 10, 2025
**Version:** 1.0
