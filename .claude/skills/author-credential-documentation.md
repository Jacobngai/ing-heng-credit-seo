# Author Credential Documentation Skill

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Document author credentials comprehensively to enhance E-E-A-T (Expertise, Authoritativeness, Trustworthiness) signals on content and build author profiles.

## Prerequisites
- Authors identified for content
- Author backgrounds/experience available
- Content pieces assigned to authors
- Some prior documentation exists (LinkedIn profiles, etc.)

## Methodology

### Step 1: Gather Author Information

For each content author, collect comprehensive details:

1. **Basic Profile Information**
   ```
   - Full name (legal name vs. pen name)
   - Professional title/role
   - Department/team
   - Email address (for contact)
   - Photo (professional headshot, at least 1200x1200px)
   - Bio (short 50-100 word version)
   - Bio (long 200-300 word version)
   ```

2. **Professional Background**
   ```
   - Years in industry
   - Current company
   - Previous employers (last 3-5 relevant roles)
   - Career progression/titles
   - Key achievements/milestones
   - Specialization areas
   ```

3. **Expertise Documentation**
   ```
   - Educational background (degrees, universities)
   - Professional certifications
   - Industry-specific credentials
   - Training/courses completed
   - Publications/articles written
   - Research projects
   - Speaking engagements
   ```

4. **Social Presence**
   ```
   - LinkedIn profile URL
   - Twitter/X handle
   - Company website author page
   - Other professional profiles
   - Verification status (verified accounts)
   - Follower count/engagement (if public)
   ```

5. **Authority Signals**
   ```
   - Media mentions (publications, interviews)
   - Speaking engagements (conferences, webinars)
   - Publications written
   - Awards/recognition
   - Professional memberships
   - Thought leadership presence
   - Guest posts on authority sites
   ```

### Step 2: Create Author Profile Document

Build comprehensive author profile:

```markdown
## Author Profile: [Author Name]

### Basic Information
**Title:** [Current Job Title]
**Department:** [Team/Division]
**Email:** [Email Address]
**LinkedIn:** [LinkedIn URL]
**Twitter:** [@handle]

### Professional Summary
[150-200 word biography highlighting expertise, experience, and credentials]

### Expertise Areas
- Equipment Financing (15+ years)
- Malaysia Business Finance
- Small-Medium Enterprise Growth
- Financial Planning

### Professional Background

**Current Role:**
[Company Name] - [Title]
[Duration] - Present
[Key responsibilities and achievements]

**Previous Experience:**
- [Company] - [Title] (Year - Year)
  [Role description and achievements]

- [Company] - [Title] (Year - Year)
  [Role description and achievements]

- [Company] - [Title] (Year - Year)
  [Role description and achievements]

### Education

- **[Degree], [University]** ([Year])
  [Specialization/relevant coursework]

- **[Certification], [Issuing Organization]** ([Year])
  [Brief description]

### Credentials & Certifications

1. **[Certification Name]**
   - Issuing Organization: [Organization]
   - Date Earned: [Date]
   - Credential ID: [ID if applicable]
   - Verification URL: [Link if available]

2. **[Professional Membership]**
   - Organization: [Organization]
   - Member since: [Date]
   - Membership Level: [Level]
   - Verification: [Link if available]

### Authority & Recognition

**Media Mentions:**
- [Publication], "[Article Title]" ([Date]) - [Link]
- [Publication], "[Article Title]" ([Date]) - [Link]

**Speaking Engagements:**
- [Conference Name], "Topic" ([Date]) - [Description]
- [Webinar], Panelist ([Date]) - [Organization]

**Publications:**
- "[Article Title]", [Publication] ([Date])
- "[Article Title]", [Publication] ([Date])

**Awards:**
- [Award Name], [Organization] ([Year])
- [Recognition], [Organization] ([Year])

### Content Authored

**For [Client Company]:**
- [Content Title] - [Date] - [URL]
- [Content Title] - [Date] - [URL]
- [Content Title] - [Date] - [URL]

**External:**
- [Guest post], [Publication] - [Date]
- [Article], [Publication] - [Date]

### Why This Author is Credible

1. **Experience:** [X years] in [field], working with [audience/clients]
2. **Expertise:** Specialized in [specific areas], with focus on [Malaysia/Southeast Asia]
3. **Recognition:** Featured in [media], speaks at [conferences], member of [organizations]
4. **Track Record:** [Specific achievement or metric that demonstrates expertise]

### Usage Notes for Content

- Best for: [Topics/content types author specializes in]
- Not recommended for: [Topics outside expertise]
- Unique angle: [What makes this author's perspective valuable]
```

### Step 3: Validate Credentials

Verify all credentials are accurate and current:

1. **Verification Checklist**
   ```
   □ Educational degrees verified through university records/LinkedIn
   □ Certifications verified through issuing organization
   □ Professional memberships verified through organization
   □ Media mentions verified (links still active)
   □ Social profiles verified (accounts active, linked)
   □ Speaking engagements verified through event sources
   □ Publications verified (links/archives accessible)
   □ Awards verified through organization records
   □ Phone number correct (if listed)
   □ Email address current (response test)
   ```

2. **Documentation of Verification**
   ```
   For each credential:
   - Source URL (where verification found)
   - Date verified
   - Verification status (confirmed/unconfirmed)
   - Notes (special information)
   ```

### Step 4: Create Author Archive

Build structured archive of all author credentials:

```json
{
  "author_profile": {
    "id": "AUTHOR_001",
    "name": "Jane Smith",
    "title": "Senior Equipment Financing Consultant",
    "years_in_industry": 15,
    "expertise_areas": [
      "Equipment Financing",
      "Malaysia Business Finance",
      "SME Growth"
    ],
    "basic_info": {
      "email": "jane.smith@ing-heng-credit.com",
      "phone": "+60 3-XXXX-XXXX",
      "photo_url": "/img/authors/jane-smith.jpg",
      "bio_short": "[50-100 word bio]",
      "bio_long": "[200-300 word bio]"
    },
    "social_profiles": {
      "linkedin": "https://linkedin.com/in/janesmith",
      "twitter": "@janesmith_finance",
      "company_profile": "/about/jane-smith/"
    },
    "education": [
      {
        "degree": "MBA",
        "university": "University of Malaya",
        "year": 2008,
        "specialization": "Finance"
      },
      {
        "degree": "Bachelor of Commerce",
        "university": "Universiti Tun Abdul Razak",
        "year": 2003,
        "specialization": "Accounting"
      }
    ],
    "credentials": [
      {
        "credential_id": "CRED_001",
        "type": "certification",
        "name": "Certified Financial Consultant",
        "issuing_org": "Association of Financial Professionals Malaysia",
        "date_earned": "2015",
        "credential_id_number": "CFP-2015-12345",
        "verification_url": "https://afp.org.my/verify/12345"
      }
    ],
    "media_mentions": [
      {
        "mention_id": "MEDIA_001",
        "publication": "Malaysia Business Times",
        "article_title": "New Trends in Equipment Financing",
        "date": "2024-06-15",
        "url": "https://mbt.com.my/articles/...",
        "role": "Quoted Expert"
      }
    ],
    "speaking_engagements": [
      {
        "engagement_id": "SPEAK_001",
        "event": "Malaysian SME Growth Conference 2024",
        "topic": "Equipment Financing for Growth",
        "date": "2024-09-20",
        "role": "Keynote Speaker",
        "organization": "SME Development Center"
      }
    ],
    "publications": [
      {
        "pub_id": "PUB_001",
        "title": "Equipment Financing Trends in 2024",
        "publication": "Equipment Finance News",
        "date": "2024-05-10",
        "url": "https://equipmentfinance.com/..."
      }
    ],
    "content_authored": [
      {
        "content_id": "CONTENT_001",
        "title": "Equipment Financing Guide",
        "url": "/en/blogs/equipment-financing-guide/",
        "date": "2024-04-15",
        "word_count": 2500,
        "language": "en"
      }
    ],
    "verification": {
      "profile_verified": true,
      "verified_date": "2025-11-04",
      "verified_by": "E-E-A-T Documentation Agent",
      "verification_items": {
        "education": "verified",
        "certifications": "verified",
        "media_mentions": "partially_verified",
        "social_profiles": "verified",
        "current_contact": "verified"
      }
    },
    "authority_score": 85,
    "authority_signals_count": 12,
    "content_pieces": 8,
    "total_reach_estimate": "150k+ professionals via speaking/media"
  }
}
```

### Step 5: Create Author Bio for Website

Generate website-ready author bios:

```markdown
## Jane Smith

**Senior Equipment Financing Consultant**

Jane Smith brings 15+ years of expertise in equipment financing and business growth strategies across Southeast Asia. As a trusted advisor to 500+ small and medium enterprises, she specializes in helping companies optimize their equipment acquisition through strategic financing solutions.

### Expertise
Jane's deep knowledge spans equipment financing structures, Malaysia-specific financing options, cash flow optimization, and lease vs. purchase analysis. Her articles have been featured in Malaysia Business Times, Equipment Finance News, and industry publications reaching over 150,000 finance professionals.

### Credentials
- MBA in Finance, University of Malaya (2008)
- Certified Financial Consultant, Association of Financial Professionals Malaysia
- 15+ years in equipment financing and business consulting
- Regular speaker at SME conferences and industry events

### Speaking & Media
Jane has been featured as an expert in Malaysia Business Times, keynoted the Malaysian SME Growth Conference 2024, and contributed to industry research on equipment financing trends. She's frequently quoted for her insights on SME growth financing and business optimization.

[Connect on LinkedIn](https://linkedin.com/in/janesmith) | [Follow on Twitter](https://twitter.com/janesmith_finance)
```

## Output Format

### Author Profile Document (Markdown)
**File location:** `/example-clients/[client-name]/7-EEAT-DOCUMENTATION/authors/[author-slug].md`

```markdown
---
author_id: AUTHOR_001
name: Jane Smith
title: Senior Equipment Financing Consultant
verified: true
verified_date: 2025-11-04
authority_score: 85
---

# Author Profile: Jane Smith

## Quick Facts
- **Years in Industry:** 15+
- **Clients Served:** 500+
- **Content Pieces:** 8
- **Media Mentions:** 5+
- **Speaking Engagements:** 3+
- **Certifications:** 2

## Professional Summary

Jane Smith is a Senior Equipment Financing Consultant with over 15 years of expertise in helping Malaysian businesses optimize their equipment acquisition strategies. With a track record of advising 500+ small and medium enterprises, Jane brings practical insights and deep industry knowledge to every engagement.

Her specialization in equipment financing, combined with her understanding of Malaysia's regulatory environment and business landscape, makes her a trusted advisor for companies seeking to balance growth with financial prudence. Jane's commitment to excellence is reflected in her regular contributions to industry publications and thought leadership presence at major business conferences.

[Rest of full bio - 200+ words]

## Professional Background

**Current Position:**
Senior Equipment Financing Consultant, Ing Heng Credit (2020 - Present)
- Lead consultant for SME financing solutions
- Content strategist for equipment financing education
- Client relationship management for key accounts

**Previous Experience:**
- Finance Manager, ABC Equipment Group (2015-2020)
- Financing Specialist, XYZ Finance Company (2010-2015)
- Junior Finance Analyst, [Company] (2008-2010)

## Education & Credentials

### Degrees
- MBA in Finance, University of Malaya (2008)
- Bachelor of Commerce in Accounting, Universiti Tun Abdul Razak (2003)

### Certifications
1. Certified Financial Consultant (Association of Financial Professionals Malaysia) - 2015
2. Advanced Equipment Leasing Specialist - 2018

## Authority & Recognition

### Media Mentions (5+)
- Malaysia Business Times: "New Trends in Equipment Financing" (June 2024)
- Equipment Finance News: Featured Expert (Quarterly)
- SME Growth Magazine: Case Study Author (March 2024)

### Speaking Engagements
- Malaysian SME Growth Conference 2024 - Keynote Speaker
- Bank Negara Women in Finance Forum - Panel Discussion (2023)
- Regional Equipment Finance Summit - Workshop Leader (2022)

### Publications
- "Equipment Financing Trends in 2024" - Equipment Finance News (May 2024)
- "Lease vs. Purchase: A Strategic Analysis" - SME Growth Magazine (March 2024)
- "Cash Flow Optimization Through Strategic Financing" - Finance Today (January 2024)

## Content Authored

| Title | Date | Language | Views |
|-------|------|----------|-------|
| Equipment Financing Guide | Apr 2024 | EN | 2,400 |
| Complete Forklift Financing 101 | Jun 2024 | EN | 1,800 |
| Bad Credit Equipment Financing | Aug 2024 | EN | 1,200 |

## Why Jane is a Trusted Authority

1. **Deep Experience:** 15+ years working directly with Malaysian businesses in equipment financing
2. **Proven Track Record:** Helped 500+ companies make strategic equipment acquisition decisions
3. **Industry Recognition:** Featured in major publications, speaks at industry conferences
4. **Current Knowledge:** Regular contributor to finance publications, stays updated on regulations
5. **Accessible Expertise:** Translates complex financing concepts into actionable advice for SMEs

## Content Specialization

**Best For:**
- Equipment financing guides
- Business strategy content
- Malaysia-specific finance articles
- SME growth and scaling topics

**Expertise Domains:**
- Equipment financing structures
- Lease vs. purchase analysis
- Cash flow optimization
- Malaysia regulatory environment
- SME financing challenges

## Social & Professional Links
- LinkedIn: [Profile URL]
- Twitter: [@janesmith_finance]
- Company Profile: [Internal URL]
- Email: jane.smith@ing-heng-credit.com

---

**Profile Last Updated:** November 4, 2025
**Next Review:** February 4, 2026
```

### Author Credentials Registry (JSON)
**File location:** `/example-clients/[client-name]/7-EEAT-DOCUMENTATION/author-registry.json`

```json
{
  "registry": {
    "client": "ing-heng-credit",
    "generated_date": "2025-11-04",
    "total_authors": 3,
    "average_authority_score": 81,
    "authors": [
      {
        "author_id": "AUTHOR_001",
        "name": "Jane Smith",
        "title": "Senior Equipment Financing Consultant",
        "years_experience": 15,
        "authority_score": 85,
        "credentials_count": 2,
        "media_mentions": 5,
        "speaking_engagements": 3,
        "publications": 3,
        "content_pieces_authored": 8,
        "verified": true,
        "profile_url": "/7-EEAT-DOCUMENTATION/authors/jane-smith.md"
      },
      {
        "author_id": "AUTHOR_002",
        "name": "Ahmad Hassan",
        "title": "Equipment Financing Specialist",
        "years_experience": 8,
        "authority_score": 72,
        "credentials_count": 1,
        "media_mentions": 2,
        "speaking_engagements": 1,
        "publications": 1,
        "content_pieces_authored": 12,
        "verified": true,
        "profile_url": "/7-EEAT-DOCUMENTATION/authors/ahmad-hassan.md"
      }
    ]
  }
}
```

## Quality Standards

- All credentials verified through primary sources
- Professional photos at least 1200x1200px quality
- Media mentions verified with active links
- Social profiles verified and current
- Educational background documented
- Certifications with credential IDs where available
- Author bio authentic and SEO-friendly (includes keywords naturally)
- Expertise clearly tied to content topics
- Authority signals documented and quantified
- Bios written in target language (English, Malay, Chinese)

## Execution Timing

- Per author initial profile: 1-2 hours
- Credential verification: 30 minutes per author
- Author bio creation: 30 minutes per language (3 languages)
- Registry maintenance: 15 minutes per author quarterly

## Agent Usage

This skill is used by: **E-E-A-T Documentation Agent**
Triggered by command: `/document-eeat [content-url]`
Related skills: `trust-signal-identification.md`, `experience-evidence-collection.md`

## Success Criteria

✅ Complete author profiles created and documented
✅ All credentials verified through primary sources
✅ Professional author photos obtained (1200x1200px+)
✅ Authority signals quantified and documented
✅ Author bios created for multiple languages
✅ Social profiles verified and linked
✅ Registry maintained and up-to-date
✅ Profiles display prominently with content
✅ Author expertise clearly tied to content topics
✅ Ready for byline display on website/content
