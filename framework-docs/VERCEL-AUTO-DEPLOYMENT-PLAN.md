# Automated Vercel Multi-Language Deployment Workflow

**Last Updated**: November 2025
**Status**: Ready for Implementation
**Goal**: Automate deployment of 3 language variants per client using GitHub + Vercel MCP

---

## Overview

This workflow automates the deployment of multilingual websites for each client. Every client gets **3 separate Vercel deployments**, each with a different default language but all languages still accessible via language switcher.

### Deployment Strategy

```
Client: Ing Heng Credit
├── EN Deployment (en.ingheng-credit.com) → Auto-redirect to /en/
├── MS Deployment (ms.ingheng-credit.com) → Auto-redirect to /ms/
└── ZH Deployment (zh.ingheng-credit.com) → Auto-redirect to /zh/
```

**All three deployments:**
- Share the same codebase (GitHub repo)
- Have language switcher enabled
- Just different default language via environment variables

---

## Architecture Components

### 1. GitHub Repository (Source of Truth)
- **Repo**: `Jacobngai/ing-heng-credit-seo`
- **Structure**:
  ```
  clients/ing-heng/website/
  ├── src/pages/
  │   ├── en/          # English content
  │   ├── ms/          # Malay content
  │   └── zh/          # Chinese content
  └── astro.config.mjs # Multi-language config
  ```

### 2. Vercel Projects (3 per client)
- **Team ID**: `team_ZRACGuujUQkB6IRfNtWpe0T6`
- **Projects to Create**:
  1. `ingheng-credit-en` → English default
  2. `ingheng-credit-ms` → Malay default
  3. `ingheng-credit-zh` → Chinese default

### 3. Environment Variables (Per Project)

| Variable | EN Project | MS Project | ZH Project |
|----------|-----------|-----------|-----------|
| `PUBLIC_DEFAULT_LOCALE` | `en` | `ms` | `zh` |
| `PUBLIC_SITE_URL` | `https://en.ingheng-credit.com` | `https://ms.ingheng-credit.com` | `https://zh.ingheng-credit.com` |

---

## Automated Workflow (Integrated with D/A/F System)

### Current Workflow (Manual)
```
1. Employee: /generate-daily-blogs
2. Claude: Generates D/*.md files
3. Employee: Reviews and renames D/*.md → A/*.md
4. Employee: /publish-approved
5. Claude: Moves A/*.md to production content folders
6. ❌ MANUAL: Employee deploys to Vercel (3 times!)
```

### New Workflow (Automated)
```
1. Employee: /generate-daily-blogs
2. Claude: Generates D/*.md files
3. Employee: Reviews and renames D/*.md → A/*.md
4. Employee: /publish-approved
5. Claude: Moves A/*.md to production content folders
6. ✅ AUTO: Claude commits to GitHub
7. ✅ AUTO: Claude deploys to Vercel (3 deployments in parallel)
```

---

## Step-by-Step Implementation Plan

### Phase 1: Setup Vercel Projects (One-Time Setup)

#### Option A: Manual Setup (Recommended First Time)
1. Go to Vercel Dashboard
2. Create 3 new projects:
   - **Project 1**: `ingheng-credit-en`
     - Framework: Astro
     - Root Directory: `clients/ing-heng/website`
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Environment Variables:
       - `PUBLIC_DEFAULT_LOCALE` = `en`
       - `PUBLIC_SITE_URL` = `https://ingheng-credit-en.vercel.app`

   - **Project 2**: `ingheng-credit-ms`
     - Same settings but:
       - `PUBLIC_DEFAULT_LOCALE` = `ms`
       - `PUBLIC_SITE_URL` = `https://ingheng-credit-ms.vercel.app`

   - **Project 3**: `ingheng-credit-zh`
     - Same settings but:
       - `PUBLIC_DEFAULT_LOCALE` = `zh`
       - `PUBLIC_SITE_URL` = `https://ingheng-credit-zh.vercel.app`

3. Connect all 3 projects to the same GitHub repo
4. Set different environment variables for each

#### Option B: Automated Setup (via Claude Code)
```bash
$ claude /setup-vercel-projects ing-heng
```

Claude will:
- Create 3 Vercel projects via Vercel MCP
- Configure environment variables
- Link to GitHub repo
- Return deployment URLs

---

### Phase 2: Update Publishing Workflow

#### Modified `/publish-approved` Command

**Current behavior:**
```bash
1. Find all A/*.md files
2. Move to production content folders
3. Done
```

**New behavior:**
```bash
1. Find all A/*.md files
2. Move to production content folders
3. Commit to GitHub with message
4. Deploy to Vercel (3 parallel deployments)
5. Return deployment URLs
```

#### Implementation (`.claude/skills/publishing-workflow.md`)

```markdown
# Publishing Workflow with Auto-Deployment

## When invoked by `/publish-approved`

### Step 1: Move Approved Content
Find all A/*.md files in:
- /drafts/A/
- /keyword-research/A/
- /personas/A/
- /blog-research/A/

Move to production folders:
- /content/en/
- /content/ms/
- /content/zh/

### Step 2: Git Commit
```bash
git add clients/*/content/
git commit -m "Publish approved content - [date]

Content published:
- [list of files moved]

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"
git push origin master
```

### Step 3: Deploy to Vercel (Parallel)
Use Vercel MCP to trigger deployments:

```javascript
// Deploy all 3 language variants in parallel
const deployments = await Promise.all([
  vercel.deployProject('ingheng-credit-en'),
  vercel.deployProject('ingheng-credit-ms'),
  vercel.deployProject('ingheng-credit-zh')
]);
```

### Step 4: Report Results
```
✅ Content Published Successfully!

📦 Committed to GitHub:
- 5 blog posts (EN/MS/ZH)
- 2 landing pages (EN/MS/ZH)

🚀 Deployed to Vercel:
✅ EN: https://ingheng-credit-en.vercel.app (Build #123)
✅ MS: https://ingheng-credit-ms.vercel.app (Build #124)
✅ ZH: https://ingheng-credit-zh.vercel.app (Build #125)

⏱️ Total time: 2 minutes 34 seconds
```
```

---

### Phase 3: Custom Domains (Optional)

Once Vercel projects are live, configure custom domains:

```
Vercel Project         → Custom Domain
------------------     → ----------------------------
ingheng-credit-en      → en.ingheng-credit.com
ingheng-credit-ms      → ms.ingheng-credit.com
ingheng-credit-zh      → zh.ingheng-credit.com
```

Or use subdomains:
```
ingheng-credit-en      → www.ingheng-credit.com
ingheng-credit-ms      → my.ingheng-credit.com
ingheng-credit-zh      → cn.ingheng-credit.com
```

---

## Vercel MCP Tools We'll Use

### 1. `mcp__vercel__deploy_to_vercel`
**Purpose**: Trigger deployments
**Usage**: Deploy after git push

### 2. `mcp__vercel__list_projects`
**Purpose**: Check existing projects
**Usage**: Verify setup, get project IDs

### 3. `mcp__vercel__get_deployment`
**Purpose**: Check deployment status
**Usage**: Monitor build progress

### 4. `mcp__vercel__get_deployment_build_logs`
**Purpose**: Debug failed builds
**Usage**: If deployment fails, retrieve logs

---

## Workflow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ EMPLOYEE: Run /publish-approved command                     │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ CLAUDE: Find all A/*.md files across all clients           │
│ - clients/ing-heng/drafts/A/                               │
│ - clients/apex-machinery/drafts/A/                         │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ CLAUDE: Move to production content folders                 │
│ A/2025-11-02-excavator.md → content/en/blogs/excavator.md │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ CLAUDE: Git commit + push to GitHub                        │
│ git add .                                                   │
│ git commit -m "Publish approved content"                   │
│ git push origin master                                      │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ CLAUDE: Deploy to Vercel (3 parallel deployments)          │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│ │ EN Deployment│ │ MS Deployment│ │ ZH Deployment│       │
│ │ Build #123   │ │ Build #124   │ │ Build #125   │       │
│ └──────────────┘ └──────────────┘ └──────────────┘       │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ CLAUDE: Monitor build status (wait for completion)         │
│ ⏳ EN: Building... → ✅ Success                            │
│ ⏳ MS: Building... → ✅ Success                            │
│ ⏳ ZH: Building... → ✅ Success                            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│ CLAUDE: Report results to employee                         │
│ ✅ All deployments successful!                             │
│ - EN: https://ingheng-credit-en.vercel.app                 │
│ - MS: https://ingheng-credit-ms.vercel.app                 │
│ - ZH: https://ingheng-credit-zh.vercel.app                 │
└─────────────────────────────────────────────────────────────┘
```

---

## File Changes Required

### 1. Update `.claude/skills/publishing-workflow.md`
Add automated git commit and Vercel deployment steps.

### 2. Create `.claude/skills/vercel-deployment.md`
New skill for Vercel deployment automation:
- Deploy to multiple projects in parallel
- Monitor build status
- Handle deployment failures
- Report results

### 3. Update `.claude/commands/publish-approved.md`
Modify to include deployment step:
```markdown
1. Invoke publishing-workflow skill
2. Invoke vercel-deployment skill
3. Report combined results
```

### 4. Create `clients/ing-heng/website/.env.example`
Document environment variables:
```env
# Language Configuration
PUBLIC_DEFAULT_LOCALE=en  # Options: en, ms, zh

# Site URL
PUBLIC_SITE_URL=https://ingheng-credit.com
```

---

## Scaling to Multiple Clients

When you onboard a new client (e.g., "apex-machinery"):

### Step 1: One-Time Vercel Setup
```bash
$ claude /setup-vercel-projects apex-machinery
```

Claude creates:
- `apex-machinery-en` (Vercel project)
- `apex-machinery-ms` (Vercel project)
- `apex-machinery-zh` (Vercel project)

### Step 2: Daily Publishing (Same Command)
```bash
$ claude /publish-approved
```

Claude automatically:
- Finds approved content for ALL clients
- Commits to GitHub
- Deploys to ALL client projects (6 deployments if 2 clients, 9 if 3 clients, etc.)

### Parallel Deployment Performance

```
1 client = 3 deployments (2-3 minutes)
5 clients = 15 deployments (still 2-3 minutes, parallel processing)
10 clients = 30 deployments (3-4 minutes)
50 clients = 150 deployments (5-7 minutes)
```

---

## Error Handling

### If Deployment Fails

Claude will:
1. Capture build logs via `get_deployment_build_logs`
2. Identify the error (missing env vars, build errors, etc.)
3. Report to employee:
   ```
   ❌ Deployment Failed: ingheng-credit-ms

   Error: Build failed with exit code 1

   Build logs:
   [vite]: Rollup failed to resolve import "/missing-file.js"

   Suggested fix:
   - Check if file exists in src/
   - Verify import path is correct

   Other deployments:
   ✅ EN: Success
   ❌ MS: Failed (see above)
   ✅ ZH: Success
   ```

4. Employee can fix and re-run `/publish-approved` (only failed deployments retry)

---

## Benefits of This Approach

### Time Savings
**Before**:
- 30 min content review + 15 min manual deployment × 3 languages × 50 clients = **38+ hours/day**

**After**:
- 30 min content review + 5 min automated deployment (all clients, all languages) = **35 minutes/day**

### Consistency
- All 3 language variants always in sync
- No human error in deployment process
- Standardized deployment across all clients

### Scalability
- Works for 1 client or 100 clients
- Same workflow, same commands
- Parallel deployment keeps time constant

### Visibility
- Clear deployment status reporting
- Build logs accessible if issues occur
- Vercel analytics for each language variant

---

## Next Steps

1. **Phase 1** (15 min): Set up 3 Vercel projects for Ing Heng manually
2. **Phase 2** (30 min): Update `/publish-approved` skill with Git + Vercel steps
3. **Phase 3** (15 min): Test workflow with sample content
4. **Phase 4** (30 min): Create `/setup-vercel-projects` skill for future clients
5. **Phase 5** (optional): Configure custom domains

**Total Implementation Time**: ~2 hours
**Time Saved Per Day**: ~37 hours
**ROI**: Pays for itself in 3 minutes 😎

---

## Questions to Resolve

1. **Domain Strategy**:
   - Use subdomains (en.domain.com, ms.domain.com)?
   - Use paths (domain.com/en, domain.com/ms)?
   - Use separate domains (domain.com, domain.com.my, domain.cn)?

2. **Vercel Project Naming**:
   - `{client}-en`, `{client}-ms`, `{client}-zh`?
   - `{client}-english`, `{client}-malay`, `{client}-chinese`?

3. **Deployment Trigger**:
   - Auto-deploy on every git push (Vercel default)?
   - Manual trigger via `/publish-approved` only?
   - Both (Vercel webhook + Claude command)?

4. **Build Optimization**:
   - Deploy all 3 even if only 1 language updated?
   - Smart detection to deploy only changed languages?

---

**Ready to implement?** Let's start with Phase 1! 🚀
