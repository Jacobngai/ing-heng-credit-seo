# Command: /onboard-client

**Purpose:** Create initial research and strategy for a new client

**Phase:** Client Onboarding (Phase 1)

**Time:** 20-30 minutes (AI automated)

---

## What This Command Does

Analyzes your client's business and automatically creates:
1. **Keyword Research** (3 files) - EN/MS/ZH target keywords
2. **Persona Profiles** (5-8 files) - Target audience definitions
3. **Strategic Brief** (1 file) - Complete SEO strategy document
4. **Competitor Analysis** (1 file) - Top 5 competitors analyzed

**Output:** 11+ draft files ready for your review (all in D/ folders)

---

## When to Use

✅ **Use this command when:**
- Starting work with a brand new client
- Client has completed the 30-question questionnaire
- You need comprehensive SEO research and strategy

❌ **Don't use this command when:**
- Client is already onboarded (use /generate-daily-blogs instead)
- You don't have basic client information
- Client hasn't paid or signed contract yet (waste of AI resources)

---

## Prerequisites

### Required BEFORE Running

1. **Client questionnaire completed** ✅
   ```
   Location: clients/[client-name]/questionnaire.txt
   Contains: 30 questions about business, audience, competitors
   ```

2. **Client folder created** ✅
   ```bash
   mkdir -p clients/[client-name]
   ```

3. **DataForSEO API working** ✅
   ```bash
   # Test API connection
   node scripts/test-dataforseo.js
   # Should return: ✅ API Connected
   ```

### Not Required (Nice to Have)
- Client website (can onboard without existing site)
- Competitor URLs (AI will find them)
- Existing keyword list (AI will research)

---

## Usage Syntax

```bash
claude /onboard-client [client-name]
```

### Parameters

**[client-name]** (required)
- Format: lowercase, hyphens only (no spaces or special chars)
- Example: `peak-construction` ✅
- NOT: `Peak Construction` ❌ or `peak_construction` ❌

### Examples

```bash
# Correct usage
claude /onboard-client peak-construction
claude /onboard-client apex-machinery
claude /onboard-client global-logistics

# Incorrect usage (will fail)
claude /onboard-client "Peak Construction"  # Has spaces
claude /onboard-client peak_construction    # Uses underscores
claude /onboard-client                      # Missing client name
```

---

## Step-by-Step Execution

### Step 1: Command Starts
```
$ claude /onboard-client peak-construction

🤖 Client Onboarding Agent starting...
✅ Client name: peak-construction
✅ Questionnaire found: clients/peak-construction/questionnaire.txt
```

### Step 2: Questionnaire Analysis (30 seconds)
```
📖 Reading questionnaire...
   Business: Construction equipment rental and financing
   Location: Klang Valley, Malaysia
   Services: Excavator rental, forklift leasing, equipment financing
   Languages: EN, MS, ZH
```

### Step 3: Competitor Research (2 minutes)
```
🔍 Researching competitors...
   Google search: "excavator rental malaysia"
   Found: 15 competing companies

   Analyzing top 5:
   1. hiapteck.com.my
   2. hewaco.com.my
   3. hupsoon.com
   4. maconrent.com.my
   5. hicom.com.my

   ✅ Competitor analysis complete
```

### Step 4: Keyword Research - English (5 minutes)
```
🔑 Researching keywords (English)...
   Seed keywords from questionnaire: excavator rental, forklift leasing

   Using DataForSEO to find:
   - Search volumes
   - Competition levels
   - Related keywords
   - Long-tail variations

   Found 147 relevant keywords
   Filtered to top 50 by potential

   ✅ primary-keywords-en.md created (D/)
```

### Step 5: Keyword Research - Malay (5 minutes)
```
🔑 Researching keywords (Bahasa Malaysia)...
   Translating and researching: sewa jengkaut, pajakan forklift

   Found 89 relevant keywords
   Filtered to top 40 by potential

   ✅ primary-keywords-ms.md created (D/)
```

### Step 6: Keyword Research - Chinese (5 minutes)
```
🔑 Researching keywords (Mandarin Chinese)...
   Translating and researching: 挖掘机租赁, 叉车租赁

   Found 67 relevant keywords
   Filtered to top 35 by potential

   ✅ primary-keywords-zh.md created (D/)
```

### Step 7: Persona Generation (5 minutes)
```
👤 Creating persona profiles...

   Analyzing:
   - Target audience from questionnaire
   - Search behavior patterns
   - Competitor audience data
   - Industry demographics

   Created 5 personas:
   1. Contractor Chen (Small contractor, 35-45)
   2. Logistics Manager Lee (Warehouse ops, 30-40)
   3. Construction Director David (Large projects, 40-55)
   4. Fleet Manager Mary (Equipment management, 35-50)
   5. Entrepreneur Ahmad (Business owner, 30-45)

   ✅ 5 persona files created (D/)
```

### Step 8: Strategic Brief (3 minutes)
```
📋 Writing strategic brief...

   Compiling:
   - Business overview
   - Target market analysis
   - Service prioritization
   - Unique selling points
   - SEO strategy
   - Content roadmap

   ✅ brief.md created (D/)
```

### Step 9: Long-tail Keywords (2 minutes)
```
🔍 Generating long-tail keyword opportunities...

   Finding question-based keywords:
   - "how much does excavator rental cost"
   - "best excavator rental malaysia"
   - "excavator financing without collateral"

   ✅ long-tail-keywords.md created (D/)
```

### Step 10: Complete (1 second)
```
✅ Onboarding complete!

Files created in: clients/peak-construction/

keyword-research/D/
  ├── primary-keywords-en.md (50 keywords)
  ├── primary-keywords-ms.md (40 keywords)
  ├── primary-keywords-zh.md (35 keywords)
  ├── long-tail-keywords.md (75 keywords)
  └── competitor-analysis.md (5 competitors)

persona-idea/D/
  ├── contractor-chen.md
  ├── logistics-manager-lee.md
  ├── construction-director-david.md
  ├── fleet-manager-mary.md
  └── entrepreneur-ahmad.md

brief-draft/D/
  └── brief.md

Total: 11 files
Time: 23 minutes 42 seconds

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NEXT STEPS:
1. Review all draft files (60 minutes)
2. Approve good files (move D/ to A/)
3. Run: /finalize-client peak-construction
```

---

## Expected Outputs

### File Structure Created
```
clients/peak-construction/
├── keyword-research/
│   └── D/  (Draft folder)
│       ├── primary-keywords-en.md        (50 keywords for English market)
│       ├── primary-keywords-ms.md        (40 keywords for Malay market)
│       ├── primary-keywords-zh.md        (35 keywords for Chinese market)
│       ├── long-tail-keywords.md         (75 question/informational keywords)
│       └── competitor-analysis.md        (Top 5 competitors analyzed)
│
├── persona-idea/
│   └── D/  (Draft folder)
│       ├── contractor-chen.md            (Small contractor persona)
│       ├── logistics-manager-lee.md      (Warehouse manager persona)
│       ├── construction-director-david.md
│       ├── fleet-manager-mary.md
│       └── entrepreneur-ahmad.md
│
└── brief-draft/
    └── D/  (Draft folder)
        └── brief.md                      (Complete SEO strategy)
```

### File Sizes (Typical)
- Keyword files: 5-10 KB each (~1,500-2,500 words)
- Persona files: 2-4 KB each (~500-1,000 words)
- Brief file: 8-15 KB (~2,000-4,000 words)
- Competitor analysis: 4-8 KB (~1,000-2,000 words)

---

## Success Criteria

### ✅ Command Succeeded If:
1. All 11 files were created
2. Each file is >100 words (not empty placeholders)
3. Keywords match the business (e.g., excavator keywords for excavator business)
4. Personas are specific (not generic "buyer" descriptions)
5. Brief includes business name and correct industry
6. No error messages in output

### ❌ Command Failed If:
1. Fewer than 11 files created
2. Files contain placeholder text like "[FILL THIS IN]"
3. Keywords are completely unrelated to business
4. Error messages about API quotas or failures
5. Process crashes or hangs

### How to Verify Success
```bash
# Check all files exist
ls -la clients/peak-construction/keyword-research/D/
ls -la clients/peak-construction/persona-idea/D/
ls -la clients/peak-construction/brief-draft/D/

# Quick content check (should show actual content, not errors)
head -20 clients/peak-construction/keyword-research/D/primary-keywords-en.md
head -20 clients/peak-construction/persona-idea/D/contractor-chen.md
head -20 clients/peak-construction/brief-draft/D/brief.md
```

---

## Common Errors

### Error 1: "Questionnaire not found"
```
❌ ERROR: Questionnaire file missing
   Expected: clients/peak-construction/questionnaire.txt
   Found: Not found

Fix:
1. Create questionnaire file first
2. Ensure correct path and filename
3. Verify file is not empty

Command to check:
ls -la clients/peak-construction/questionnaire.txt
```

### Error 2: "DataForSEO API quota exceeded"
```
❌ ERROR: DataForSEO API limit reached
   Daily quota: 1,000 requests
   Used today: 1,000

Fix:
1. Wait until tomorrow (quota resets at midnight UTC)
2. OR upgrade DataForSEO plan
3. OR prioritize clients (onboard fewer per day)

Check remaining quota:
node scripts/check-dataforseo-quota.js
```

### Error 3: "Invalid client name format"
```
❌ ERROR: Client name contains invalid characters
   Provided: "Peak Construction"
   Error: Contains spaces

Fix:
Use lowercase with hyphens only:
✅ peak-construction
❌ Peak Construction
❌ peak_construction
❌ peak.construction
```

### Error 4: "Timeout while researching keywords"
```
❌ ERROR: Keyword research timed out
   Network timeout after 300 seconds

Fix:
1. Check internet connection
2. Check DataForSEO API status (dataforseo.com/status)
3. Try again in 5 minutes
4. If persists, contact DataForSEO support
```

### Error 5: "Empty or invalid questionnaire"
```
❌ ERROR: Questionnaire missing required fields
   Missing: Business name, industry, services

Fix:
1. Ensure questionnaire has at least:
   - Business name
   - Industry
   - Main services (3+)
   - Target audience description
   - 3+ competitors

Template: clients/templates/questionnaire-template.txt
```

---

## Time Estimate

**Typical Timing:**
- Small business (1-3 services): 20-25 minutes
- Medium business (4-8 services): 25-30 minutes
- Large business (9+ services): 30-40 minutes

**Factors That Affect Time:**
- Number of services offered
- Number of target keywords
- Competitiveness of industry
- DataForSEO API response time

---

## What Happens Next

### After Onboarding Completes:

**Your job:**
1. Review all 11 draft files (60 minutes)
2. Approve good ones (move from D/ to A/)
3. Edit or reject bad ones

**Minimum to proceed:**
- 3+ keyword files approved (one per language)
- 3+ persona files approved
- 1 brief file approved (exactly one)

**Then run:**
```bash
claude /finalize-client peak-construction
```

**See:** `2-finalize-client.md` for next steps

---

## Pro Tips

### 1. Batch Onboard Clients
```bash
# Onboard multiple clients in one session
claude /onboard-client client-1
claude /onboard-client client-2
claude /onboard-client client-3

# Total time: 60-90 minutes for 3 clients
# Review time: 180 minutes (60 min × 3)
```

### 2. Review While AI Works
```
Client 1: Run onboarding (AI works 20 min)
  └─ While waiting, review Client 2's drafts
      └─ While waiting, review Client 3's drafts
          └─ By the time you finish, Client 1 is ready to review
```

### 3. Pre-fill Questionnaires
```
Create questionnaire template with common questions filled
Copy for each new client
Only customize business-specific details
Saves 10-15 minutes per client
```

### 4. Check API Quota First
```bash
# Before onboarding, check quota
node scripts/check-dataforseo-quota.js

# Output: 234/1000 requests used today
# Can onboard: ~15 more clients today (each uses ~15 requests)
```

### 5. Onboard During Off-Peak
```
DataForSEO is faster during:
- Late night (11 PM - 6 AM)
- Weekends
- Holidays

Slower during:
- Business hours (9 AM - 5 PM)
- Weekdays
```

---

## Related Commands

**Before this command:**
- None (this is entry point for new clients)

**After this command:**
- `/finalize-client` - Generate production website
- `/setup-brand` - Optional brand identity work

**Alternative commands:**
- None (this is the only way to onboard new clients)

---

## Troubleshooting Checklist

If onboarding fails, check these in order:

- [ ] Questionnaire file exists at correct path
- [ ] Questionnaire has all required fields filled
- [ ] Client name is valid format (lowercase-with-hyphens)
- [ ] DataForSEO API credentials are configured
- [ ] DataForSEO API quota is not exceeded
- [ ] Internet connection is stable
- [ ] Enough disk space for file creation (need ~500 KB)

**Still having issues?** See `/9-reference/9.4-troubleshooting/common-errors.md`

---

**Next:** Review the created files, then run `/finalize-client`

**See also:**
- `../2-getting-started/2.1-your-first-client/onboarding-walkthrough.md`
- `2-finalize-client.md`
