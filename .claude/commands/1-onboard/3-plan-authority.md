# Command ③ /3-plan-authority

**Phase:** ONBOARD
**Primary Agent:** eeat-documentation
**Time:** 1-2 hours (AI working)

## Purpose
Design E-E-A-T (Experience, Expertise, Authority, Trust) strategy and create author profile framework.

## Prerequisites

✅ **Required files from ① /1-research-business:**
- `business-brief.md` - Business context
- `personas.md` - Target audience

### Validation Check
```
❌ If missing any file above:
→ Go back: Run ① /1-research-business for this client first
```

## What This Command Does

The **eeat-documentation** agent will:

1. **Analyze Business for E-E-A-T Opportunities**
   - What credentials does business have?
   - What experience can be documented?
   - What trust signals exist?

2. **Create Author Profile Templates**
   - Design 1-3 author personas
   - Document their credentials
   - Plan how to demonstrate experience
   - Identify authority-building opportunities

3. **Identify Trust Signals**
   - Reviews (Google, Yelp, Trustpilot)
   - Certifications and licenses
   - Industry memberships
   - Awards and recognition
   - Press mentions

4. **Create E-E-A-T Guidelines**
   - How to write with authority
   - How to demonstrate experience
   - What trust signals to include on each page type

## Output Files Created

```
clients/[client-name]/eeat-strategy/
├── authority-plan.md
│   ├── Current authority level assessment
│   ├── Authority-building tactics
│   ├── Speaking opportunities
│   ├── Publishing opportunities
│   └── Timeline for authority building
│
├── author-profiles.md
│   ├── Author 1: [Name]
│   │   ├── Credentials & qualifications
│   │   ├── Years of experience
│   │   ├── Specializations
│   │   ├── Publications/speaking
│   │   └── Personal bio (200-300 words)
│   ├── Author 2: [Name]
│   └── Author 3: [Name] (if applicable)
│
├── trust-signals.md
│   ├── Existing trust signals inventory
│   ├── Trust signals to obtain
│   ├── Where to display each signal
│   └── Priority action items
│
└── content-guidelines.md
    ├── How to write with authority
    ├── How to demonstrate experience (first-person)
    ├── How to cite sources properly
    └── E-E-A-T checklist for content creation
```

## Skills Used
- `author-credential-documentation` - Document qualifications
- `trust-signal-identification` - Find trust opportunities
- `experience-evidence-collection` - Gather proof of expertise
- `expertise-validation` - Verify credentials are legitimate

## Agent Instructions

```
You are the eeat-documentation agent. Create comprehensive E-E-A-T strategy.

CLIENT: [client-name]

STEP 1: LOAD CONTEXT
Read from clients/[client-name]/onboarding/:
- business-brief.md (understand the business)
- personas.md (understand the audience)

STEP 2: ASSESS CURRENT E-E-A-T
Evaluate:
- What credentials/experience does business have?
- What trust signals currently exist?
- What authority has been built?

STEP 3: CREATE AUTHOR PROFILES
Design 1-3 author personas:
- Primary author (company owner/expert)
- Secondary authors (if applicable)
- Document credentials, experience, specializations

Follow SEO-pro.md Chapter 4 (E-E-A-T Implementation).

STEP 4: IDENTIFY TRUST SIGNALS
List:
- Existing: Reviews, certifications, memberships
- To obtain: What's missing that would build trust?
- Display strategy: Where to show each signal

STEP 5: CREATE GUIDELINES
Write content-guidelines.md explaining:
- How to write with authority (avoid vague claims)
- How to demonstrate experience (first-person, specific details)
- How to cite sources (link to authoritative sources)

STEP 6: CREATE FILES
Save to clients/[client-name]/eeat-strategy/:
✅ authority-plan.md
✅ author-profiles.md
✅ trust-signals.md
✅ content-guidelines.md

These files are REQUIRED for commands ⑤⑥⑦⑧.
```

## Success Criteria
- [ ] authority-plan.md has actionable authority-building tactics
- [ ] author-profiles.md has 1-3 complete author bios
- [ ] trust-signals.md lists existing + needed trust signals
- [ ] content-guidelines.md provides clear E-E-A-T writing rules
- [ ] All files saved in `clients/[client-name]/eeat-strategy/`

## Next Step
After this completes successfully:
→ Run **④ /4-design-brand-options**
→ Then you're ready for BUILD phase (⑤-⑧)

## Common Errors

**Error:** `business-brief.md not found`
**Solution:** Run **① /1-research-business** first

**Error:** `personas.md not found`
**Solution:** Run **① /1-research-business** first

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10
