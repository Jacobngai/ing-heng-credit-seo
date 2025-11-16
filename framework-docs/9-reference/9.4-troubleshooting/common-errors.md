# Common Errors & Solutions

**Quick troubleshooting guide for the top 20 errors**

---

## 🚨 CRITICAL ERRORS (Fix Immediately)

### Error 1: "DataForSEO API Quota Exceeded"

**What you see:**
```
❌ ERROR: API quota limit reached
Daily limit: 1,000 requests
Used today: 1,000
Cannot continue until reset (midnight UTC)
```

**What it means:**
You've used all your DataForSEO API requests for today.

**How to fix:**

**Option A: Wait (Free)**
```
1. Wait until midnight UTC (8 AM Malaysia time)
2. Quota resets automatically
3. Continue work tomorrow
```

**Option B: Upgrade Plan (Paid)**
```
1. Go to dataforseo.com/account
2. Upgrade to higher tier:
   - Standard: 5,000 requests/day
   - Professional: 25,000 requests/day
   - Enterprise: Unlimited
3. Takes effect immediately
```

**Option C: Prioritize Work (Temporary)**
```
1. Only onboard critical clients today
2. Skip keyword research for low-priority clients
3. Focus on publishing already-generated content
```

**Prevent this:**
```bash
# Check quota before starting work
node scripts/check-dataforseo-quota.js

# Output: 234/1,000 used (766 remaining)
# Can onboard: ~50 more clients today
```

---

### Error 2: "Command Not Found"

**What you see:**
```
$ claude /onboard-client peak-construction
-bash: claude: command not found
```

**What it means:**
Claude Code is not installed or not in your PATH.

**How to fix:**
```bash
# Step 1: Check if Claude is installed
which claude
# If no output, Claude is not installed

# Step 2: Install Claude Code
npm install -g claude-code

# Step 3: Verify installation
claude --version
# Should show: claude-code v1.2.3

# Step 4: Try command again
claude /onboard-client peak-construction
```

**If still not working:**
```bash
# Add Claude to PATH
export PATH="$PATH:/usr/local/bin"

# Add to your shell profile to make permanent
echo 'export PATH="$PATH:/usr/local/bin"' >> ~/.zshrc
source ~/.zshrc
```

---

### Error 3: "Client Already Exists"

**What you see:**
```
❌ ERROR: Client already onboarded
   Client: peak-construction
   Status: active
   Cannot onboard twice
```

**What it means:**
You're trying to onboard a client that's already in the system.

**How to fix:**

**If you meant to onboard a NEW client:**
```bash
# Use a different name
claude /onboard-client peak-construction-2
# OR
claude /onboard-client peak-equipment
```

**If you want to RE-onboard existing client:**
```bash
# Delete existing client first
rm -rf clients/peak-construction

# CAUTION: This deletes ALL data!
# Backup first if needed:
cp -r clients/peak-construction clients/peak-construction-backup

# Now onboard again
claude /onboard-client peak-construction
```

**If client exists but you want to generate more content:**
```bash
# Don't onboard again, just generate content
claude /generate-daily-blogs
```

---

### Error 4: "No Approved Files Found"

**What you see:**
```
❌ ERROR: Cannot finalize client
   Required approved files:
   ✅ keyword-research/A/*.md (found 3)
   ✅ brief-draft/A/brief.md (found 1)
   ❌ persona-idea/A/*.md (found 0, need 3+)

   Please approve at least 3 persona files
```

**What it means:**
You haven't approved enough files to proceed with finalization.

**How to fix:**
```bash
# Step 1: Check what drafts exist
ls clients/peak-construction/persona-idea/D/

# Output:
# contractor-chen.md
# logistics-manager-lee.md
# construction-director-david.md
# fleet-manager-mary.md
# entrepreneur-ahmad.md

# Step 2: Review and approve 3+ files
cat clients/peak-construction/persona-idea/D/contractor-chen.md
# If good, approve:
mv clients/peak-construction/persona-idea/D/contractor-chen.md \
   clients/peak-construction/persona-idea/A/

# Repeat for 2 more personas

# Step 3: Verify you have 3+ approved
ls clients/peak-construction/persona-idea/A/
# Should show 3+ files

# Step 4: Try finalize again
claude /finalize-client peak-construction
```

---

### Error 5: "Vercel Deployment Failed"

**What you see:**
```
❌ ERROR: Vercel deployment failed
   Project: peak-construction-en
   Error: Authentication failed
```

**What it means:**
Your Vercel authentication token has expired or is invalid.

**How to fix:**
```bash
# Step 1: Login to Vercel again
vercel login

# Follow prompts to authenticate

# Step 2: Verify you're logged in
vercel whoami
# Should show your email

# Step 3: Try deployment again
claude /publish-approved

# OR manually deploy
cd clients/peak-construction/website
vercel --prod
```

**If still failing:**
```bash
# Clear Vercel cache
rm -rf .vercel

# Re-link project
vercel link

# Try again
vercel --prod
```

---

## ⚠️ WARNING MESSAGES (Review & Decide)

### Warning 1: "Low Approval Rate Detected"

**What you see:**
```
⚠️  WARNING: Low approval rate today
    Posts reviewed: 150
    Approved: 87 (58%)
    Expected: 120+ (80%+)

    This is unusually low. Investigate:
    - Are quality standards too strict?
    - Is AI generating poor content?
    - Are client briefs unclear?
```

**What to check:**

**Check 1: Review rejected posts**
```bash
# Look at what you rejected
ls clients/*/drafts/F/

# Read a few
cat clients/peak-construction/drafts/F/2025-11-07-some-post.md

# Ask yourself: Should this have been approved?
```

**Check 2: Are you being too strict?**
```
Remember: Perfect is enemy of done
- 70% quality published > 100% quality delayed
- Minor grammar errors are okay
- Don't need Pulitzer-level content for blog posts
```

**Check 3: Is AI actually producing bad content?**
```bash
# Check quality scores from generation
node scripts/check-generation-quality.js

# If <70% passing pre-checks, update briefs:
cat clients/peak-construction/brief.json
# Ensure it's detailed and specific
```

---

### Warning 2: "Duplicate Content Detected"

**What you see:**
```
⚠️  WARNING: Possible duplicate content
    File: 2025-11-07-excavator-guide-en.md
    Similar to: 2025-10-15-excavator-rental-en.md
    Similarity: 78%

    Review before publishing
```

**What to do:**
```bash
# Compare the two files
diff clients/peak-construction/drafts/A/2025-11-07-excavator-guide-en.md \
     clients/peak-construction/website/published/2025-10-15-excavator-rental-en.md

# If truly duplicate:
mv clients/peak-construction/drafts/A/2025-11-07-excavator-guide-en.md \
   clients/peak-construction/drafts/F/

# If similar but different angle:
# Approve anyway - different angles on same topic are okay
```

---

### Warning 3: "Build Time Exceeded 10 Minutes"

**What you see:**
```
⚠️  WARNING: Vercel build taking longer than usual
    Expected: 2-3 minutes
    Current: 11 minutes
    Status: Still building...
```

**What it means:**
Build is slow, possibly stuck.

**What to do:**

**Wait 5 more minutes:**
- Sometimes builds are just slow
- Vercel may be under load
- Your site may be large

**If still building after 15 minutes:**
```bash
# Cancel and rebuild
vercel cancel

# Check for issues
cd clients/peak-construction/website
npm run build

# Look for errors in output
# Common issues:
# - Too many images
# - Broken dependencies
# - Infinite loops in code
```

---

## 💡 INFORMATION MESSAGES (Good to Know)

### Info 1: "Skipping Client (Not Ready)"

**What you see:**
```
ℹ️  INFO: Skipping client 'new-client-draft'
   Reason: Status is 'draft', not 'active'
   This client will not receive daily blog generation
```

**What it means:**
Client hasn't been finalized yet, so they're skipped during daily generation.

**This is normal if:**
- You just onboarded them (haven't finalized yet)
- You're still reviewing their draft files
- They're on hold temporarily

**To fix (if you want them active):**
```bash
# Finish onboarding and finalize
claude /finalize-client new-client-draft
```

---

### Info 2: "Content Calendar Low (

<10 Topics Remaining)"

**What you see:**
```
ℹ️  INFO: Content calendar running low
   Client: peak-construction
   Topics remaining: 7
   Recommended: 30+

   AI will still generate content, but may repeat topics
```

**What it means:**
Client is running out of fresh topic ideas.

**How to fix:**
```bash
# Step 1: Run keyword opportunity scan
claude /keyword-opportunity-scan

# Step 2: Update keyword strategy
# Add new keywords to: clients/peak-construction/keyword-strategy.json

# Step 3: AI will automatically use new keywords
```

**This is normal for:**
- Niche businesses (limited topics)
- After 6+ months of daily content
- Highly specialized industries

---

## 🔧 SETUP ISSUES

### Issue 1: "Node.js Version Too Old"

**What you see:**
```
❌ ERROR: Node.js version not supported
   Current: v14.17.0
   Required: v18.0.0+
```

**How to fix:**
```bash
# Check current version
node --version

# Update Node.js
# Method 1: Using nvm (recommended)
nvm install 18
nvm use 18

# Method 2: Download from nodejs.org
# Visit: https://nodejs.org
# Download v18 LTS or later

# Verify
node --version
# Should show: v18.x.x or higher
```

---

### Issue 2: "Missing Environment Variables"

**What you see:**
```
❌ ERROR: Required environment variables not set
   Missing:
   - DATAFORSEO_LOGIN
   - DATAFORSEO_PASSWORD
   - VERCEL_TOKEN
```

**How to fix:**
```bash
# Create .env file
cat > .env << EOF
DATAFORSEO_LOGIN=your-email@example.com
DATAFORSEO_PASSWORD=your-password
VERCEL_TOKEN=your-vercel-token
EOF

# Verify
cat .env
# Should show your credentials (be careful not to share this!)

# Test
node scripts/test-env.js
# Should show: ✅ All environment variables set
```

---

### Issue 3: "Git Not Configured"

**What you see:**
```
❌ ERROR: Git user not configured
   Run: git config --global user.name "Your Name"
   Run: git config --global user.email "you@example.com"
```

**How to fix:**
```bash
# Set your name
git config --global user.name "John Smith"

# Set your email
git config --global user.email "john@example.com"

# Verify
git config --global --list
# Should show:
# user.name=John Smith
# user.email=john@example.com
```

---

## 🐛 RARE BUT SERIOUS ERRORS

### Error: "Corrupt JSON File"

**What you see:**
```
❌ ERROR: Cannot parse JSON
   File: clients/peak-construction/brief.json
   Error: Unexpected token at line 45
```

**How to fix:**
```bash
# Step 1: Backup corrupt file
cp clients/peak-construction/brief.json clients/peak-construction/brief.json.corrupt

# Step 2: Try to fix with JSON validator
node scripts/fix-json.js clients/peak-construction/brief.json

# Step 3: If can't fix, regenerate
# Delete JSON file
rm clients/peak-construction/brief.json

# Re-finalize client
claude /finalize-client peak-construction
# (Will regenerate brief.json from approved A/ files)
```

---

### Error: "Out of Disk Space"

**What you see:**
```
❌ ERROR: Cannot write file
   ENOSPC: no space left on device
```

**How to fix:**
```bash
# Check disk usage
df -h

# Find large folders
du -sh clients/* | sort -h

# Delete old archives
rm -rf clients/*/drafts/archive/2024/
rm -rf clients/*/old-backups/

# OR move to external storage
mv clients/*/drafts/archive/ /external-drive/archives/
```

---

## 📞 GETTING HELP

### If You Can't Fix It:

**1. Check this guide first** ✅

**2. Check troubleshooting folder:**
```bash
ls framework-docs/9-reference/9.4-troubleshooting/
```

**3. Check logs:**
```bash
tail -100 logs/error.log
```

**4. Search documentation:**
```bash
grep -r "your error message" framework-docs/
```

**5. Ask for help:**
- Framework creator
- Developer team
- Claude Code support

**When asking for help, include:**
- Full error message
- What command you ran
- What you expected to happen
- Relevant file paths
- System info: `uname -a`

---

## 🎯 QUICK REFERENCE

**Most Common Errors:**
1. DataForSEO quota exceeded → Wait or upgrade
2. Command not found → Install Claude Code
3. No approved files → Review and approve drafts
4. Vercel auth failed → Re-login to Vercel
5. Low approval rate → Review standards or briefs

**Most Common Warnings:**
1. Low approval rate → Check if too strict
2. Duplicate content → Review similarity
3. Slow build → Wait or check for issues

**Emergency Contacts:**
- DataForSEO support: support@dataforseo.com
- Vercel support: support@vercel.com
- Claude Code support: support@anthropic.com

---

**Related:**
- `/framework-docs/README.md` - Main documentation
- `/9-reference/9.1-quick-reference-cards/` - Quick guides
- `/HANDS-ON-EXERCISES.md` - Practice troubleshooting
