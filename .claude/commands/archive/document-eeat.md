# /document-eeat

Launch the E-E-A-T Documentation Agent to analyze a piece of content and embed or enhance trust signals (Experience, Expertise, Authoritativeness, Trustworthiness) with credentials, citations, and author information.

**What this command does:**
1. Loads E-E-A-T Documentation Agent from `.claude/agents/eeat-documentation.md`
2. Agent executes `trust-signal-identification.md` and `author-credential-documentation.md` skills
3. Analyzes target content piece
4. Identifies E-E-A-T enhancement opportunities:
   - Author credentials and bio
   - Experience/case study references
   - Expert citations and quotes
   - Source citations and links
   - Trust badges and certifications
   - Client testimonials
5. Generates enhanced content with E-E-A-T signals
6. Creates author bio/credentials document
7. Identifies missing E-E-A-T elements (recommendations)
8. Generates structured schema markup

**Expected output:**
- Enhanced content with E-E-A-T signals (D/ draft)
- Author credentials document
- Schema markup for structured data
- E-E-A-T gap analysis
- Execution time: ~8-10 minutes per piece

**Usage:**
```bash
/document-eeat [content-url]
```

**Example:**
```bash
/document-eeat clients/apex-machinery/content/en/blogs/excavator-financing-guide.md
```

**E-E-A-T Framework (Google's EEAT):**

**E1: Experience**
- Author has direct experience with topic
- Has used/worked with product/service
- Has hands-on knowledge
- Has completed relevant projects

**E2: Expertise**
- Author is recognized expert in field
- Has relevant certifications/qualifications
- Has published other authoritative work
- Has recognized credentials

**A: Authoritativeness**
- Content is from authoritative source
- Site has good reputation for topic
- Content cited/linked by other authorities
- Author recognized as expert

**T: Trustworthiness**
- Content is accurate and well-sourced
- Site has clear contact/business info
- Site has transparent ownership
- Content is regularly updated
- Customer reviews are positive

**Enhancement opportunities identified:**

1. **Author Credentials:**
   - Full name (not anonymous)
   - Title/position at company
   - Years of experience
   - Relevant certifications
   - Education background
   - Previous accomplishments

2. **Experience References:**
   - "I've personally..."
   - "In our 15 years financing equipment..."
   - "We've helped 10,000+ clients..."
   - "Case study: Client X situation..."
   - "Personal experience: How I..."

3. **Expert Citations:**
   - Quotes from industry experts
   - Interviews with thought leaders
   - Research from authoritative sources
   - Statistics from reputable organizations
   - Studies and research papers

4. **Source Citations:**
   - Link to studies and research
   - Cite data sources (Google, DataForSEO, etc.)
   - Reference official guidelines
   - Quote authoritative sources
   - Provide attribution for all data

5. **Trust Signals:**
   - Client testimonials/reviews
   - Company awards and recognitions
   - Industry certifications
   - Years in business
   - Professional affiliations
   - Published credentials

6. **Structural Elements:**
   - Author bio section
   - About the author (byline)
   - Credentials and certifications listed
   - Contact information/bio link
   - Social proof elements

**Generated files:**

```
/clients/[client-name]/eeat-documentation/
├── content-eeat-analysis/
│   ├── [content-title]-eeat-analysis.md (gap analysis)
│   ├── [content-title]-author-credentials.md (bio info)
│   └── [content-title]-schema-markup.json (structured data)
│
/clients/[client-name]/content/
├── [language]/blogs/
│   ├── D/[content-title]-EEAT-ENHANCED.md (updated version)
│   └── A/[content-title].md (original - replace after approval)
```

**Example E-E-A-T enhancement:**
```markdown
# Equipment Financing Guide (EEAT Enhanced)

---

## About the Author

**Ahmad Rashid**
- Senior Equipment Financing Consultant, Apex Machinery Sdn Bhd
- 15 years experience in equipment financing and leasing
- Certified Equipment Finance Specialist (CEFS)
- Has personally financed 5,000+ equipment purchases
- Featured in: Equipment Magazine, Logistics Asia, Finance Monthly
- LinkedIn: linkedin.com/in/ahmadrashhid

---

## Introduction

With over 15 years of direct experience helping Malaysian businesses finance equipment purchases, I've seen firsthand how the right financing solution can transform a company's growth trajectory. In this guide, I'll share everything I've learned about securing equipment financing in Malaysia.

---

## Section 1: Types of Equipment Financing

We finance all types of equipment - from excavators to forklifts - and I've helped clients navigate each option. Let me share what I've learned...

### Excavator Financing
[Original content + author's personal experience]

*"In 2019, we financed an excavator purchase for a contractor in Klang. By choosing the right financing option, he saved RM 45,000 in interest over 5 years. Here's how..."*

---

## Key Statistics (with sources)

According to DataForSEO's latest industry report:
- 73% of Malaysian construction businesses use equipment financing [DataForSEO, 2024]
- Average equipment financing term: 4.2 years
- Popular equipment: Excavators (28%), Forklifts (22%), Lorries (18%)

**Source:** DataForSEO Keyword Research Report - Equipment Financing Malaysia 2024

---

## Expert Quotes

"Equipment financing is the backbone of modern construction," says [Industry Expert Name], Director of Malaysian Construction Association. "Companies that use financing strategically grow 3x faster than those that don't."

---

## Client Testimonial

"Ahmad helped us finance our equipment purchase when other lenders said no. The process was smooth and we got great rates. Highly recommended!"
- **Kumar Sharma**, Logistics Manager, ABC Logistics (2023)

---

## Trust Signals Section

**Why You Should Trust This Content:**
- Written by certified equipment finance specialist
- Based on 15+ years of direct experience
- Includes case studies from real clients
- Updated annually with current rates and regulations
- Sourced from industry reports and government data
- Published on established equipment financing authority

**Company Credentials:**
- Apex Machinery Sdn Bhd - Licensed Equipment Financier
- Member: Malaysian Finance Association
- Certified: ISO 9001 Quality Management
- Rated: 4.8/5 stars (500+ verified reviews)
- In business: Since 2009

---
```

**E-E-A-T Analysis Output:**
```markdown
# E-E-A-T Analysis: Equipment Financing Guide

## Current E-E-A-T Score: 6.2/10

### Experience (Current: 5/10)
**Found:**
- Author mentioned in content: No
- Direct experience references: 1
- Years of experience stated: No
- Case studies: 1

**Recommendations:**
- Add author byline with 15+ years experience statement
- Include personal case study (from above)
- Mention specific number of clients helped (5,000+)
- Add "I've personally..." statements

### Expertise (Current: 5/10)
**Found:**
- Author credentials: None mentioned
- Professional certifications: None mentioned
- Publications: None mentioned
- Education background: Not stated

**Recommendations:**
- Add certification section (CEFS)
- Mention featured publications
- Add education background
- Include industry memberships

### Authoritativeness (Current: 7/10)
**Found:**
- Content from established company: Yes
- Company years in business: 15 years
- Industry reputation: Strong (implied)
- Citations: Limited

**Recommendations:**
- Add more external citations (studies, data)
- Link to industry publications
- Include third-party reviews/ratings
- Add professional affiliations

### Trustworthiness (Current: 7/10)
**Found:**
- Company contact info: Yes
- Transparent ownership: Yes
- Customer testimonials: 1
- Updated information: Seems current

**Recommendations:**
- Add more customer testimonials (3-5)
- Include awards/certifications
- Add security/privacy info
- Link to company credentials page

## E-E-A-T Enhancement Recommendations (Priority Order)
1. **HIGH:** Add author byline with credentials and experience
2. **HIGH:** Include 2-3 client testimonials
3. **HIGH:** Add case study with specific numbers and results
4. **MEDIUM:** Increase citations of studies and data sources
5. **MEDIUM:** Add company achievements and awards
6. **LOW:** Add video testimonials (if budget allows)

## Estimated E-E-A-T Improvement
- Current score: 6.2/10
- After enhancements: 8.5/10
- Expected ranking impact: +2-4 positions (easier keywords)
```

**Schema Markup Generated:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Equipment Financing Guide",
  "image": "https://...",
  "datePublished": "2024-01-15",
  "dateModified": "2024-11-04",
  "author": {
    "@type": "Person",
    "name": "Ahmad Rashid",
    "jobTitle": "Senior Equipment Financing Consultant",
    "affiliation": {
      "@type": "Organization",
      "name": "Apex Machinery Sdn Bhd"
    },
    "url": "https://apexmachinery.com.my/about/ahmad-rashid",
    "sameAs": [
      "https://linkedin.com/in/ahmadrashhid"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Apex Machinery",
    "logo": "https://..."
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

**After execution:**

1. **Review E-E-A-T enhancements** (~15 minutes)
   - Check author credentials are accurate
   - Verify all citations and sources
   - Validate testimonials are real
   - Assess overall trust signal improvement

2. **Approve or request edits**
   - Good enhancements: Rename D/ → A/
   - Needs edits: Edit credentials/sources first
   - Missing pieces: Add recommendations in comments

3. **Implement enhancements**
   - Add author bio section
   - Integrate E-E-A-T signals naturally
   - Update schema markup
   - Verify links are accurate

4. **Publish enhanced content**
   - Deploy via `/publish-approved`
   - Monitor for ranking changes
   - Track E-E-A-T signal visibility

5. **Monitor impact** (30-60 days)
   - Track ranking position changes
   - Monitor featured snippet eligibility
   - Measure organic traffic changes
   - Assess improved E-E-A-T visibility

**E-E-A-T Best Practices:**

- **Author visibility:** Always credit author by name with credentials
- **Experience:** Emphasize hands-on experience and direct knowledge
- **Expertise:** Highlight certifications, education, and accomplishments
- **Authority:** Link to authoritative sources and publications
- **Trust:** Include testimonials, awards, and verifiable credentials
- **Freshness:** Update content regularly to maintain trust
- **Accuracy:** Cite sources for all claims and statistics

**When to document E-E-A-T:**

- **New content:** Add E-E-A-T during creation (not after)
- **High-value content:** Hub pages, cornerstone content, money keywords
- **Competitive topics:** Topics with lots of competition benefit from E-E-A-T
- **YMYL content:** Especially critical for Your Money or Your Life topics
- **Low-performing content:** E-E-A-T boost can help struggling content
- **Refresh campaigns:** Add E-E-A-T when refreshing old content

**Expected impact:**
- Improved trust signals in SERP
- Better featured snippet eligibility
- Improved click-through rate (CTR)
- Ranking improvements (2-5 positions for relevant keywords)
- Better user engagement and time on page

**Employee next steps:**
1. Review E-E-A-T analysis and recommendations (10-15 min)
2. Approve recommended enhancements
3. Edit content to integrate E-E-A-T signals naturally
4. Add author bio and credentials
5. Verify all citations and links
6. Publish enhanced content
7. Monitor for E-E-A-T signals in SERP

**This is PHASE 3** - Building trust and authority signals through systematic E-E-A-T documentation and enhancement.
