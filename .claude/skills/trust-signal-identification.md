# Trust Signal Identification Skill

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Identify and document existing trust signals that demonstrate E-E-A-T for content and the brand.

## Prerequisites
- Client onboarding completed (company information, credentials available)
- Content published (blog posts, landing pages exist to audit)
- Company information available (team bios, credentials, company history)

## Methodology

### Step 1: Audit Content-Level Trust Signals

For each piece of content, identify what trust signals are present:

1. **Author Credentials**
   ```
   Check for:
   - Author bio/profile
   - Author expertise level documented
   - Author credentials (certifications, experience)
   - Author photo/avatar
   - Author social proof (LinkedIn, published works)

   Scoring:
   - Has author bio: 5 points
   - Has credentials: 5 points
   - Has photo: 2 points
   - Has external profile link: 3 points
   - Total: 15 points possible
   ```

2. **Experience Evidence**
   ```
   Check for:
   - Years in business mentioned
   - Case studies or examples
   - Real data/statistics
   - Personal experience language
   - Specific numbers/metrics from actual work

   Examples:
   - "In our 15 years financing equipment in Malaysia..."
   - "Working with 500+ clients in equipment financing..."
   - "Real case: A construction company..." (with results)

   Scoring:
   - Years in business: 5 points
   - Case studies/examples: 5 points
   - Real data included: 5 points
   - Specific metrics: 5 points
   - Total: 20 points possible
   ```

3. **Expertise Signals**
   ```
   Check for:
   - Domain-specific language (demonstrates knowledge)
   - Accurate technical information
   - Comprehensive coverage of topic
   - Citations/sources for claims
   - Data/statistics properly attributed

   Scoring:
   - Uses industry terminology correctly: 5 points
   - Accurate technical info: 5 points
   - Comprehensive treatment: 5 points
   - Proper citations: 5 points
   - Total: 20 points possible
   ```

4. **Currency & Freshness**
   ```
   Check for:
   - Publication date current
   - Update date noted
   - Current year statistics/examples
   - Recent regulations/changes noted
   - Archive/backup dates if applicable

   Examples:
   - "As of 2025..."
   - "Updated: November 2025"
   - Current Malaysia regulations cited

   Scoring:
   - Published/updated recently (< 6 months): 10 points
   - Current year data: 5 points
   - Acknowledges updates: 5 points
   - Total: 20 points possible
   ```

5. **External Validation**
   ```
   Check for:
   - Links to authoritative sources
   - Quotes from industry experts
   - References to reputable studies
   - Media mentions/coverage
   - Third-party certifications

   Scoring:
   - External links to authority: 5 points per link (max 10)
   - Expert quotes: 5 points per quote (max 10)
   - Third-party validation: 10 points
   - Total: 30 points possible
   ```

### Step 2: Audit Brand-Level Trust Signals

Review overall brand presentation:

1. **Company Information**
   ```
   Required:
   - Company name (full, legal if available)
   - Company description (what you do)
   - Location (headquarters, operating regions)
   - Contact information (phone, email, form)
   - Physical address (if applicable)
   - Founded date/years in business

   Trust impact:
   - Complete company info: 10 points
   - Physical address: 10 points
   - Multiple contact methods: 5 points
   - Total: 25 points
   ```

2. **Team/Leadership**
   ```
   Check for:
   - Team member bios
   - Photo (builds trust)
   - Title/role
   - Experience/background
   - Social profiles (LinkedIn, Twitter)
   - Credentials/certifications

   Scoring:
   - Complete team bios: 10 points
   - Team photos: 10 points
   - Credentials/experience noted: 10 points
   - Social media profiles: 5 points
   - Total: 35 points
   ```

3. **Certifications & Credentials**
   ```
   Check for:
   - Industry certifications
   - Professional memberships
   - Regulatory licenses
   - Quality standards (ISO, etc.)
   - Accreditations
   - Awards/recognition

   Examples (by industry):
   - Financial services: Banking licenses, regulatory registrations
   - Professional services: Industry certifications, memberships
   - E-commerce: Trust badges, security certifications

   Scoring:
   - Per major certification: 10 points
   - Regulatory compliance: 15 points
   - Professional memberships: 5 points
   - Awards/recognition: 5 points
   ```

4. **Customer Social Proof**
   ```
   Check for:
   - Customer testimonials
   - Case studies with results
   - User/client counts ("500+ businesses trust us")
   - Reviews/ratings
   - Client logos/company list
   - Success metrics

   Scoring:
   - Testimonials with attribution: 5 points per (max 15)
   - Case studies: 5 points per (max 15)
   - Numerical social proof: 10 points
   - Reviews/ratings: 10 points
   - Total: 50 points possible
   ```

5. **Privacy & Security**
   ```
   Check for:
   - Privacy policy
   - Terms of service
   - Data protection statement
   - Security badges/SSL
   - Data handling transparency
   - GDPR/local regulation compliance

   Scoring:
   - Complete policies: 10 points
   - Privacy policy: 5 points
   - Security statement: 5 points
   - Data protection: 10 points
   - Total: 30 points possible
   ```

### Step 3: Evaluate by Category

Map signals to E-E-A-T pillars:

```
EXPERIENCE (Demonstrated through):
├─ Years in business
├─ Case studies/examples
├─ Real client results
├─ Specific metrics from work
└─ Team background/history

EXPERTISE (Demonstrated through):
├─ Author credentials
├─ Industry certifications
├─ Technical accuracy
├─ Comprehensive coverage
├─ Domain-specific language
└─ Current knowledge

AUTHORITATIVENESS (Demonstrated through):
├─ Author credentials/titles
├─ Professional memberships
├─ Media mentions/coverage
├─ External citations
├─ Industry recognition
├─ Backlinks from authority sources
└─ Awards/certifications

TRUSTWORTHINESS (Demonstrated through):
├─ Transparent company info
├─ Team/leadership visibility
├─ Privacy/security policies
├─ Customer testimonials
├─ Clear contact information
├─ Regulatory compliance
└─ Security credentials
```

### Step 4: Identify Gaps

Document what trust signals are missing:

```
Gap Analysis Template:

CURRENT SIGNALS:
✓ Company description
✓ 3 team member bios
✓ Contact form
✗ Team photos
✗ Testimonials
✗ Regulatory license info
✗ Case studies

PRIORITY GAPS (High Impact):
1. Team photos (builds trust, missing)
2. Customer testimonials (social proof, missing)
3. Regulatory compliance info (credibility, missing)

SECONDARY GAPS:
4. Case studies (authority, missing)
5. Industry certifications (expertise, missing)

ACTION PLAN:
Gap 1: Collect/create team photos → 2 hours effort
Gap 2: Reach out to customers for testimonials → ongoing
Gap 3: Document regulatory compliance → 1 hour effort
```

### Step 5: Generate Trust Signal Audit Report

Create comprehensive assessment document.

## Output Format

### Content-Level Trust Audit
```markdown
# Trust Signal Audit - [Content Title]

**URL:** /en/blogs/equipment-financing-guide/
**Audit Date:** November 4, 2025
**Language:** English

## Overall Trust Score: 72/100

### Author Credentials (Currently: 10/15)
- ✓ Author bio present: "Jane Smith, Equipment Financing Expert"
- ✓ Years of experience noted: "15+ years"
- ✗ Specific credentials/certifications not mentioned
- ✗ Author photo missing
- **Action:** Add author photo and list relevant certifications

### Experience Evidence (Currently: 15/20)
- ✓ Years in business: "Since 2008"
- ✓ Case study included: "Construction company case study with 25% cash flow improvement"
- ✓ Real data: "Financed $5M+ in equipment last year"
- ✗ Specific client count not mentioned
- **Action:** Add "500+ clients served" stat to intro

### Expertise Signals (Currently: 18/20)
- ✓ Industry terminology used correctly throughout
- ✓ Technical information accurate and comprehensive
- ✓ Covers all major financing options
- ✓ Proper citations for regulations
- **Status:** Excellent - no action needed

### Currency & Freshness (Currently: 15/20)
- ✓ Published: November 2025
- ✓ Updated: November 4, 2025
- ✓ Uses 2025 interest rate data
- ✗ Should mention Malaysia-specific regulation updates (recent changes)
- **Action:** Add paragraph on 2025 regulatory changes

### External Validation (Currently: 14/30)
- ✓ Links to: Central Bank of Malaysia, industry association
- ✓ Quote from industry expert (1 quote)
- ✗ No third-party certifications mentioned
- ✗ Missing media coverage references (if applicable)
- **Action:** Add expert quote from 1-2 more sources, reference any media mentions

## Summary by E-E-A-T Pillar

| Pillar | Score | Status | Action |
|--------|-------|--------|--------|
| Experience | 78/100 | Good | Add client count stat |
| Expertise | 90/100 | Excellent | None needed |
| Authoritativeness | 68/100 | Needs work | Add expert quotes, mentions |
| Trustworthiness | 75/100 | Good | Add author photo, update info |

## Priority Actions (Ranked by Impact)

1. **High Impact** - Add author photo + 1 paragraph on author background
   - Effort: 30 minutes
   - Trust lift: +8 points
   - Timeline: Immediate

2. **High Impact** - Add "500+ clients served" statistic to intro
   - Effort: 15 minutes
   - Trust lift: +5 points
   - Timeline: Immediate

3. **Medium Impact** - Add expert quote from second source
   - Effort: 1 hour
   - Trust lift: +4 points
   - Timeline: This week

4. **Medium Impact** - Add Malaysian regulation update section
   - Effort: 1.5 hours
   - Trust lift: +3 points
   - Timeline: This week

## Detailed Recommendations

### 1. Author Enhancement
**Current:** "Jane Smith, Equipment Financing Expert"
**Improved:**
```
Jane Smith
15+ years in equipment financing, specializing in Malaysia market
- Previously Finance Director at [Company]
- Certified Equipment Leasing Professional
- Featured in [Publication], [Publication]
[Author photo: headshot]
[LinkedIn profile link]
```

### 2. Social Proof Enhancement
**Add to intro:** "Join 500+ Malaysian businesses using our equipment financing solutions"

### 3. Regulatory Currency
**Add new H2 section:**
```
## 2025 Malaysia Equipment Financing Regulations

Recent updates from Bank Negara Malaysia (November 2025):
- [Regulation update with specific impact on readers]
- [Next regulation change timeline]
- [How this affects equipment financing options]
```

## Validation Checklist
- [ ] Author bio complete and credible
- [ ] Years in business clearly stated
- [ ] Case study(ies) included with results
- [ ] Expertise demonstrated through technical accuracy
- [ ] Content updated recently (< 6 months)
- [ ] Expert sources cited
- [ ] External links to authority sources
- [ ] Transparency about company/author
- [ ] Contact information accessible
- [ ] Privacy/security credentials visible

---

**Audit Completed By:** E-E-A-T Documentation Agent
**Next Review:** February 4, 2026
```

### Brand-Level Trust Audit
```json
{
  "audit_type": "brand_level",
  "client": "ing-heng-credit",
  "audit_date": "2025-11-04",
  "overall_trust_score": 76,
  "categories": {
    "company_information": {
      "score": 85,
      "max_possible": 25,
      "items": [
        {
          "item": "Company name and legal structure",
          "present": true,
          "points": 5
        },
        {
          "item": "Company description/mission",
          "present": true,
          "points": 5
        },
        {
          "item": "Location (headquarters + operating regions)",
          "present": true,
          "points": 5
        },
        {
          "item": "Contact information",
          "present": true,
          "points": 5
        },
        {
          "item": "Physical address",
          "present": false,
          "points": 0
        },
        {
          "item": "Founded/years in business",
          "present": true,
          "points": 5
        }
      ]
    },
    "team_leadership": {
      "score": 72,
      "max_possible": 35,
      "gaps": [
        "Team photos for CEO/founders needed",
        "Expand team member experience descriptions"
      ]
    },
    "certifications_credentials": {
      "score": 65,
      "max_possible": 50,
      "items": {
        "financial_license": true,
        "regulatory_registration": true,
        "industry_certifications": 2,
        "professional_memberships": 2,
        "awards": 0
      }
    },
    "customer_social_proof": {
      "score": 60,
      "max_possible": 50,
      "gaps": [
        "Testimonials with attribution: 0 (target: 3-5)",
        "Published case studies: 1 (target: 3-5)",
        "Customer count stat: present",
        "Reviews/ratings: not visible"
      ]
    },
    "privacy_security": {
      "score": 85,
      "max_possible": 30,
      "items": {
        "privacy_policy": true,
        "terms_of_service": true,
        "ssl_certificate": true,
        "data_protection_statement": false,
        "compliance_badges": true
      }
    }
  },
  "eeat_breakdown": {
    "experience": {
      "score": 80,
      "signals": [
        "15+ years in business",
        "500+ customers",
        "Real case studies"
      ],
      "gaps": ["More detailed case studies needed"]
    },
    "expertise": {
      "score": 78,
      "signals": [
        "Team certifications",
        "Regulatory compliance",
        "Industry knowledge"
      ],
      "gaps": ["Industry publication contributions"]
    },
    "authoritativeness": {
      "score": 72,
      "signals": [
        "Professional memberships",
        "Media mentions (3)",
        "Industry recognition"
      ],
      "gaps": ["More backlinks from authority sources"]
    },
    "trustworthiness": {
      "score": 78,
      "signals": [
        "Transparent company info",
        "Privacy policies",
        "Team visibility",
        "Regulatory compliance"
      ],
      "gaps": ["Customer testimonials", "Security badges more visible"]
    }
  },
  "priority_actions": [
    {
      "rank": 1,
      "action": "Collect 3-5 customer testimonials with photos",
      "impact": "High",
      "effort": "Medium",
      "eeat_pillar": "trustworthiness",
      "expected_score_lift": 8
    },
    {
      "rank": 2,
      "action": "Create detailed case studies (3-5) with metrics",
      "impact": "High",
      "effort": "Medium",
      "eeat_pillar": "experience",
      "expected_score_lift": 6
    },
    {
      "rank": 3,
      "action": "Add team member photos and expand bios",
      "impact": "Medium",
      "effort": "Low",
      "eeat_pillar": "trustworthiness",
      "expected_score_lift": 5
    }
  ]
}
```

## Quality Standards

- All trust signals verified (not assumed)
- Scoring transparent and consistent
- Gaps documented with specific action items
- Recommendations prioritized by impact
- EEAT pillars properly mapped
- Cultural considerations for target audience
- Timeline realistic and implementable
- Evidence-based assessment (not subjective)

## Execution Timing

- Per content piece audit: 15-20 minutes
- Brand-level audit: 45-60 minutes
- For 30 content pieces: ~8-10 hours
- Quarterly brand audit: 1 hour

## Agent Usage

This skill is used by: **E-E-A-T Documentation Agent**
Triggered by command: `/document-eeat [content-url]`
Related skills: `author-credential-documentation.md`, `experience-evidence-collection.md`

## Success Criteria

✅ All existing trust signals identified and documented
✅ Gaps clearly articulated with specific examples
✅ Priority actions ranked by impact and effort
✅ EEAT pillars properly assessed
✅ Recommendations actionable and implementable
✅ Score transparent and reproducible
✅ Cultural context considered
✅ Ready for action team to execute improvements
