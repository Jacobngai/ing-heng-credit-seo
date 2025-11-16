# Command Reference: /onboard-client

## Purpose
Launches the Client Onboarding Agent to generate keyword research, personas, and strategic brief for a new client.

## When to Use
- When onboarding a new SEO client for the first time
- After client has completed the 30-question questionnaire
- Before any content creation or website setup begins
- As the FIRST step in the client onboarding workflow

## Prerequisites

### Required Files
None - this is the first command you run for a new client.

### Required Information
Client questionnaire must be completed with answers to:
- Business information (name, industry, years in business)
- Target audience and customer personas
- Products/services offered
- Geographic markets served
- Main competitors (3-5 companies)
- SEO goals and KPIs
- Brand voice and positioning
- Budget and timeline expectations

### System Requirements
- `.claude/agents/client-onboarding.md` agent file must exist
- `.claude/skills/client-onboarding.md` skill file must exist
- Write access to `/clients/` directory

## Usage Syntax

```bash
/onboard-client [client-name]
```

### Parameters
- `client-name` (required): Kebab-case client folder name (e.g., `apex-machinery`, `global-logistics`)

### Examples
```bash
/onboard-client apex-machinery
/onboard-client ing-heng
/onboard-client kl-construction-services
```

## Step-by-Step Execution

### Step 1: Command Invocation (1 min)
1. Type `/onboard-client [client-name]` in CLI
2. Agent loads from `.claude/agents/client-onboarding.md`
3. Skill executes from `.claude/skills/client-onboarding.md`
4. System creates client folder structure:
   ```
   /clients/[client-name]/
   ├── keyword-research/
   │   ├── D/  (drafts)
   │   ├── A/  (approved)
   │   └── F/  (rejected)
   ├── persona-idea/
   │   ├── D/
   │   ├── A/
   │   └── F/
   └── brief-draft/
       ├── D/
       ├── A/
       └── F/
   ```

### Step 2: Questionnaire Input (2 min)
Agent prompts: **"Please paste the client questionnaire answers"**

Paste the full questionnaire response including:
- All 30+ questions and answers
- Any additional client notes
- Contact information
- Project scope details

### Step 3: Research Generation (2-3 min)
Agent analyzes questionnaire and generates:

**1. Primary Keywords (3 files):**
- `primary-keywords-en.md` - English keywords (15-20)
- `primary-keywords-zh.md` - Chinese keywords (15-20)
- `primary-keywords-ms.md` - Malay keywords (15-20)

**2. Long-tail Keywords (1 file):**
- `long-tail-keywords.md` - 20-30 long-tail variations

**3. Competitor Analysis (1 file):**
- `competitor-analysis.md` - Analysis of 3-5 competitors

**4. Personas (5-8 files):**
Example persona files:
- `contractor-ahmad.md` - Construction contractor persona
- `logistics-manager-lee.md` - Fleet manager persona
- `warehouse-ops-william.md` - Operations manager persona
- Additional personas based on client audience

**5. Strategic Brief (1 file):**
- `brief.md` - Complete strategic brief covering positioning, messaging, content strategy

### Step 4: Draft Review (30 sec)
All files saved to `/D/` (draft) folders for employee review.

Agent confirms:
```
✅ Generated 11+ draft files for review:
   - 5 keyword research files
   - 6 persona files
   - 1 strategic brief

Next: Review drafts and approve/reject before running /finalize-client
```

## Expected Outputs

### File Structure Created
```
/clients/[client-name]/
├── /keyword-research/
│   ├── D/
│   │   ├── primary-keywords-en.md
│   │   ├── primary-keywords-zh.md
│   │   ├── primary-keywords-ms.md
│   │   ├── long-tail-keywords.md
│   │   └── competitor-analysis.md
│   ├── A/ (empty - awaiting approval)
│   └── F/ (empty - awaiting rejection)
│
├── /persona-idea/
│   ├── D/
│   │   ├── contractor-ahmad.md
│   │   ├── logistics-manager-lee.md
│   │   ├── warehouse-ops-william.md
│   │   ├── sme-owner-chen.md
│   │   ├── procurement-specialist-kumar.md
│   │   └── [2-3 more personas]
│   ├── A/ (empty)
│   └── F/ (empty)
│
└── /brief-draft/
    ├── D/
    │   └── brief.md
    ├── A/ (empty)
    └── F/ (empty)
```

### Total Files Generated
- **Minimum:** 11 files (5 keyword + 5 personas + 1 brief)
- **Maximum:** 14 files (5 keyword + 8 personas + 1 brief)
- All saved as **D/** (draft) prefix

### Content Quality
Each file includes:
- Detailed analysis based on questionnaire
- Specific recommendations
- Data-driven insights
- Actionable next steps

## Success Criteria

### Must Have (Blocking)
- [ ] Client folder created at `/clients/[client-name]/`
- [ ] 5 keyword research files in `/keyword-research/D/`
- [ ] 3+ persona files in `/persona-idea/D/`
- [ ] 1 strategic brief in `/brief-draft/D/`
- [ ] All files properly formatted as markdown
- [ ] No empty or incomplete files

### Should Have (Quality)
- [ ] 5-8 persona files (not just minimum 3)
- [ ] Primary keywords cover all 3 languages
- [ ] Competitor analysis includes 3-5 competitors
- [ ] Brief includes clear positioning and messaging
- [ ] Long-tail keywords include 20+ variations

### Nice to Have (Bonus)
- [ ] 8 persona files (maximum coverage)
- [ ] Keyword research includes search volumes
- [ ] Competitor analysis includes SWOT
- [ ] Brief includes content calendar ideas

## Common Errors

### Error 1: "Client folder already exists"
**Cause:** Client name already used in `/clients/` directory

**Fix:**
```bash
# Check existing clients
ls /clients/

# Use different client name or remove old folder
rm -rf /clients/[old-client-name]/

# Or use versioned name
/onboard-client apex-machinery-v2
```

### Error 2: "Questionnaire incomplete"
**Cause:** Pasted questionnaire missing required sections

**Symptoms:**
- Only 2-3 keyword files generated
- Personas lack detail
- Brief is generic

**Fix:**
1. Review questionnaire completeness
2. Ensure all 30+ questions answered
3. Add missing sections
4. Re-run `/onboard-client` command

### Error 3: "Agent skill not found"
**Cause:** Missing agent or skill file

**Fix:**
```bash
# Verify agent exists
ls .claude/agents/client-onboarding.md

# Verify skill exists
ls .claude/skills/client-onboarding.md

# If missing, restore from repository
git checkout .claude/agents/client-onboarding.md
git checkout .claude/skills/client-onboarding.md
```

### Error 4: "Insufficient persona diversity"
**Cause:** Questionnaire didn't describe diverse audience segments

**Symptoms:**
- Only 3 personas generated (minimum)
- Personas are too similar
- Missing key audience segments

**Fix:**
1. Review client questionnaire
2. Add more audience segment details
3. Describe different buyer personas
4. Re-run command with updated questionnaire

## Time Estimate

| Phase | Duration | Description |
|-------|----------|-------------|
| Command setup | 30 sec | Type command, load agent |
| Questionnaire input | 1-2 min | Paste questionnaire answers |
| AI generation | 2-3 min | Generate all draft files |
| Verification | 30 sec | Confirm files created |
| **Total** | **4-6 min** | Complete execution time |

**Employee review time:** 45-60 minutes (separate activity)

## Example Scenario

### Client: Apex Machinery Sdn Bhd

**Background:**
- Equipment financing company in Malaysia
- 15 years in business
- Serves construction, logistics, manufacturing
- Offers hire purchase, leasing, equipment loans

**Command Execution:**
```bash
$ /onboard-client apex-machinery
```

**Agent Response:**
```
Client Onboarding Agent activated
Please paste the client questionnaire answers below:
```

**Input:**
```
Client Name: Apex Machinery Sdn Bhd
Industry: Equipment Financing
Years in Business: 15
Target Audience:
- Construction contractors (excavators, bulldozers)
- Logistics companies (forklifts, lorries)
- Warehouse operators (material handling)
Geographic Markets: Klang Valley, Penang, Johor
Main Services: Hire purchase, leasing, equipment loans
Competitors: [List of 5 competitors]
SEO Goals: 500 qualified leads/month
[... 25 more questions ...]
```

**Output Generated:**
```
✅ KEYWORD RESEARCH
   - primary-keywords-en.md (18 keywords)
   - primary-keywords-zh.md (16 keywords)
   - primary-keywords-ms.md (14 keywords)
   - long-tail-keywords.md (28 variations)
   - competitor-analysis.md (5 competitors analyzed)

✅ PERSONAS
   - contractor-ahmad.md (Construction contractor, 35-50)
   - logistics-manager-lee.md (Fleet manager, 30-45)
   - warehouse-ops-william.md (Operations manager, 28-40)
   - sme-owner-chen.md (Business owner, 40-60)
   - procurement-specialist-kumar.md (Corporate buyer, 30-45)
   - startup-founder-emily.md (Entrepreneur, 25-35)

✅ STRATEGIC BRIEF
   - brief.md (Complete positioning and strategy)

Total: 12 draft files created
Location: /clients/apex-machinery/

NEXT STEP: Review all D/ files, approve (rename to A/), then run:
/finalize-client apex-machinery
```

## Post-Execution Checklist

### Immediate (Within 1 hour)
- [ ] Verify all files created successfully
- [ ] Spot-check 2-3 files for quality
- [ ] Note any obvious errors or gaps
- [ ] Schedule time for full review

### Short-term (Within 24 hours)
- [ ] Read ALL draft files thoroughly
- [ ] Evaluate keyword research quality
- [ ] Review persona accuracy and completeness
- [ ] Assess strategic brief alignment with client goals
- [ ] Identify files to approve vs reject
- [ ] Make notes for improvements

### Before Next Command (Within 1 week)
- [ ] Approve files: Rename `/D/` to `/A/`
- [ ] Reject files: Rename `/D/` to `/F/`
- [ ] Edit files if needed before approval
- [ ] Ensure minimum requirements met:
  - At least 3 keyword files approved
  - At least 3 persona files approved
  - 1 brief file approved
- [ ] Ready to run `/finalize-client`

## Related Commands

**Next Command:** `/finalize-client`
- Converts approved drafts to production config
- Creates website and deploys to Vercel
- Generates first 10 blog posts

**Quality Assurance:** `/review-quality`
- Can be used to review draft files
- Not required for onboarding drafts
- More useful for blog post drafts

## Notes
- This command does NOT auto-approve anything
- ALL output is draft (D/) requiring human review
- This is PHASE 1 only - draft generation
- PHASE 2 (`/finalize-client`) happens after employee approval
- Typical approval rate: 80-90% of generated files
- Common rejections: Generic personas, weak keywords, incomplete brief
