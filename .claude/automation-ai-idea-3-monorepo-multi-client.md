# AI Automation Idea 3: Monorepo Multi-Client Deployment

**Best For:** Your ACTUAL architecture - Multiple clients in ONE repo
**Difficulty:** ⭐⭐ Moderate (but Claude handles it)
**Setup Time:** 15 minutes
**Platform:** Cross-platform

---

## 🎯 Your Architecture (As I Understand It)

```
ing-heng-credit-seo/                    ← ONE GITHUB REPO
├── clients/                            ← Production clients
│   └── ing-heng/
│       └── website/                    ← Vercel Project #1
│
├── example-clients/                    ← Example/staging clients
│   └── ing-heng/
│       └── website/                    ← Vercel Project #2 (or same?)
│
├── website/                            ← Root website (or deprecated?)
│
└── vercel.json                         ← Root deployment config
```

### The Challenge

**GitHub**: 1 repo = 1 push command (easy)
**Vercel**: Multiple websites = Multiple deployments (complex)

**Your Questions:**
1. Do you have multiple Vercel projects (one per client)?
2. Or one Vercel project with multiple build configurations?
3. Which clients should deploy automatically?

---

## 🔥 AI-Powered Solution: Smart Multi-Client Deployment

### Concept: Claude Detects Which Clients Changed

```
Employee: "I updated Ing Heng homepage"

Claude: [Analyzes git diff]
        Found changes in: clients/ing-heng/website/

        This affects: Ing Heng Credit

        I'll:
        1. Push to GitHub (main repo)
        2. Deploy ONLY Ing Heng to Vercel

        Ready?
```

**Magic:** Claude only deploys clients that actually changed!

---

## 📦 Implementation

### Step 1: Create Client Registry

Create file: `.claude/client-registry.json`

```json
{
  "clients": {
    "ing-heng": {
      "name": "Ing Heng Credit & Leasing",
      "folder": "clients/ing-heng/website",
      "vercel": {
        "projectName": "ing-heng-credit-seo",
        "org": "your-vercel-org",
        "production": true
      },
      "github": {
        "branch": "master"
      },
      "languages": ["en", "ms", "zh"],
      "domain": "ing-heng-credit.com"
    },
    "ing-heng-example": {
      "name": "Ing Heng (Example/Staging)",
      "folder": "example-clients/ing-heng/website",
      "vercel": {
        "projectName": "ing-heng-example",
        "org": "your-vercel-org",
        "production": false
      },
      "github": {
        "branch": "master"
      },
      "languages": ["en", "ms", "zh"],
      "domain": "ing-heng-example.vercel.app"
    }
  },
  "deployment": {
    "strategy": "smart-detect",
    "autoDeployOnPush": false,
    "requireApproval": true
  }
}
```

---

### Step 2: Create Monorepo Deployment Slash Command

Create file: `.claude/commands/deploy-monorepo.md`

```markdown
---
description: Deploy multi-client monorepo with smart client detection
---

# Multi-Client Monorepo Deployment

You are the **Result Marketing Monorepo Deployment Assistant**.

## Your Mission

Intelligently deploy multiple client websites from a single GitHub repository.

---

## Architecture Understanding

**GitHub**: Single repository (`ing-heng-credit-seo`)
- Contains multiple clients
- Each client has own `website/` folder
- All clients share same repo

**Vercel**: Multiple projects
- Each client = separate Vercel project
- Each project deployed independently
- Same GitHub repo, different build paths

---

## Deployment Process

### Phase 1: Detect Changed Clients (Smart Analysis)

**Step 1:** Check git status

```bash
git status --porcelain
```

**Step 2:** Analyze which clients changed

Look for changes in these patterns:
- `clients/*/website/` → Production client
- `example-clients/*/website/` → Example/staging client
- `website/` → Root website (if used)

**Step 3:** Load client registry

Read `.claude/client-registry.json` to get:
- Client names
- Vercel project names
- Deployment settings
- Branch preferences

**Step 4:** Report to user

```
📊 Change Detection Results:

Clients affected:
  ✅ Ing Heng Credit (clients/ing-heng/website/)
     - 3 files changed
     - Production deployment
     - Languages: EN/MY/ZH

  ⚠️ No changes detected in other clients

Should I deploy Ing Heng Credit?
```

---

### Phase 2: Git Push (Monorepo)

**Since all clients are in one repo, push everything together:**

```bash
# 1. Stage all changes
git add .

# 2. Generate smart commit message
# Format: [client-name] type: description
```

**Commit Message Examples:**

```
[ing-heng] feat: Update homepage hero section with new branding

Modified Hero.astro and CTAButton components
```

```
[multi-client] chore: Update shared templates

Affects all clients:
- Updated blog post template
- Modified footer structure
```

```
[ing-heng] content: Publish forklift financing blog post

Added content in all 3 languages (EN/MY/ZH)
```

**Commit message rules:**
- If 1 client changed: `[client-name] type: description`
- If multiple clients: `[multi-client] type: description`
- If framework files: `[framework] type: description`

**Step 3:** Push to GitHub

```bash
git push origin master
```

---

### Phase 3: Deploy to Vercel (Per-Client)

**For EACH client that changed:**

#### Option A: Using Vercel CLI directly

```bash
# Navigate to client folder
cd clients/ing-heng/website

# Deploy to Vercel
vercel --prod --token $VERCEL_TOKEN

# Go back to root
cd ../../..
```

#### Option B: Using Vercel MCP (Preferred)

```javascript
// Use Vercel MCP to deploy
mcp.vercel.deploy({
  projectId: "prj_xxx",
  teamId: "team_xxx",
  production: true
})
```

#### Option C: Using Root vercel.json (Monorepo Approach)

If your `vercel.json` is configured for monorepo:

```bash
# Deploy specific client
vercel --prod --scope your-team --cwd clients/ing-heng/website
```

---

### Phase 4: Verification

**For each deployed client:**

1. **Extract deployment URL**
2. **Test critical routes**:
   ```
   https://[domain]/en/
   https://[domain]/ms/
   https://[domain]/zh/
   ```

3. **Check build logs** (if errors)
4. **Report status**

---

## Multi-Client Deployment Scenarios

### Scenario 1: Single Client Changed

```
Employee: "I updated Ing Heng homepage"

Claude: [Detects changes only in clients/ing-heng/]

        Found changes in: Ing Heng Credit only

        I'll:
        1. Push entire monorepo to GitHub
        2. Deploy ONLY Ing Heng to Vercel

        Other clients remain untouched.

        Proceed?
```

**Execution:**
```bash
git add .
git commit -m "[ing-heng] feat: Update homepage"
git push origin master
cd clients/ing-heng/website && vercel --prod
```

---

### Scenario 2: Multiple Clients Changed

```
Employee: "I updated the shared blog template"

Claude: [Detects changes in shared/templates/]

        ⚠️ Shared template changed!

        This affects ALL clients:
          - Ing Heng Credit
          - [Future Client 2]
          - [Future Client 3]

        Should I deploy all affected clients?

        Options:
        1. Deploy all now
        2. Deploy one by one (you choose)
        3. Just push to GitHub (no deployments)
```

**Execution:**
```bash
git add .
git commit -m "[multi-client] feat: Update shared blog template"
git push origin master

# Deploy each client
cd clients/ing-heng/website && vercel --prod && cd ../../..
cd clients/client-2/website && vercel --prod && cd ../../..
cd clients/client-3/website && vercel --prod && cd ../../..
```

---

### Scenario 3: Framework Files Only

```
Employee: "I updated the SEO workflow documentation"

Claude: [Detects changes only in framework-docs/]

        Found changes in: Framework documentation

        This doesn't affect any client websites.
        Just push to GitHub?
```

**Execution:**
```bash
git add .
git commit -m "[framework] docs: Update SEO workflow"
git push origin master

# No Vercel deployments needed
```

---

### Scenario 4: Client-Specific Content

```
Employee: "Added new blog post for Ing Heng"

Claude: [Detects new file in clients/ing-heng/content/]

        New content detected!

        Blog post: excavator-financing-guide.astro
        Languages: EN, MY, ZH (all 3 present ✅)

        This requires:
        1. Push to GitHub
        2. Deploy Ing Heng website

        Ready?
```

---

## Smart Deployment Rules

### Auto-Deploy Rules (If Enabled)

**Auto-deploy these changes:**
- ✅ Content files (blog posts, pages)
- ✅ Component updates
- ✅ Style changes
- ✅ Small bug fixes

**Always ask before deploying:**
- ⚠️ Shared template changes (affects multiple clients)
- ⚠️ Core framework changes
- ⚠️ Large refactors (>20 files)

**Never auto-deploy:**
- ❌ .env file changes
- ❌ vercel.json modifications
- ❌ Build config changes

---

## Client Detection Logic

### Pattern Matching

```javascript
// Pseudo-code for Claude's analysis

const changedFiles = git.getChangedFiles();
const affectedClients = [];

for (const file of changedFiles) {
  // Check production clients
  if (file.startsWith('clients/')) {
    const clientName = file.split('/')[1];
    affectedClients.push({
      name: clientName,
      type: 'production',
      path: `clients/${clientName}/website`
    });
  }

  // Check example clients
  if (file.startsWith('example-clients/')) {
    const clientName = file.split('/')[1];
    affectedClients.push({
      name: clientName,
      type: 'example',
      path: `example-clients/${clientName}/website`
    });
  }

  // Check shared files
  if (file.startsWith('shared/')) {
    affectedClients.push({
      name: 'ALL_CLIENTS',
      type: 'shared',
      impact: 'all'
    });
  }
}

return affectedClients;
```

---

## Vercel Configuration Strategies

### Strategy 1: Root vercel.json (Monorepo)

```json
{
  "builds": [
    {
      "src": "clients/ing-heng/website/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/clients/ing-heng/website/$1"
    }
  ]
}
```

**Deploy command:**
```bash
vercel --prod
```

**This deploys the client specified in root vercel.json**

---

### Strategy 2: Per-Client vercel.json

Each client has own `vercel.json`:

```
clients/
└── ing-heng/
    └── website/
        ├── vercel.json
        ├── package.json
        └── src/
```

**Deploy command:**
```bash
cd clients/ing-heng/website
vercel --prod
cd ../../..
```

---

### Strategy 3: Vercel Projects with Different Contexts

Create separate Vercel projects:
- Project 1: "ing-heng-credit" → builds from `clients/ing-heng/website/`
- Project 2: "client-2" → builds from `clients/client-2/website/`

**In each Vercel project settings:**
```
Root Directory: clients/ing-heng/website
Build Command: npm run build
Output Directory: dist
```

**Deploy:**
```bash
# Vercel auto-detects from project settings
vercel --prod --cwd clients/ing-heng/website
```

---

## Error Handling

### Build Fails for One Client

```
Claude: ❌ Ing Heng deployment failed!

        Error: Build failed in Hero.astro line 45

        But wait! You have other clients that changed too:
          - Client 2 (ready to deploy)
          - Client 3 (ready to deploy)

        Options:
        1. Fix Ing Heng first, then deploy others
        2. Deploy others now, fix Ing Heng later
        3. Rollback everything

        What should I do?
```

---

### GitHub Push Fails

```
Claude: ❌ Can't push to GitHub!

        Error: Your branch is behind 'origin/master'

        Someone else pushed while you were working.

        Let me:
        1. Pull latest changes
        2. Check for conflicts
        3. Merge if safe

        Pulling now...
```

---

## Deployment Dashboard (AI-Generated)

After deployment, Claude shows:

```
🎉 Monorepo Deployment Complete!

📊 Summary:
   - GitHub: ✅ Pushed to master (commit: abc123)
   - Clients deployed: 1/3

✅ Ing Heng Credit
   Status: Live
   URL: https://ing-heng-credit.vercel.app
   Build time: 1m 23s
   Languages: EN ✅ | MY ✅ | ZH ✅

⏭️ Skipped Clients:
   - Client 2 (no changes)
   - Client 3 (no changes)

📈 Stats:
   - Total files changed: 12
   - Commit size: +245 -132 lines
   - Deployment time: 2m 15s

🔗 Quick Links:
   - GitHub commit: https://github.com/.../commit/abc123
   - Vercel dashboard: https://vercel.com/dashboard
   - Live site: https://ing-heng-credit.com
```

---

## Advanced: Parallel Deployment

For multiple clients, deploy in parallel:

```bash
# Deploy all clients simultaneously
(cd clients/ing-heng/website && vercel --prod) &
(cd clients/client-2/website && vercel --prod) &
(cd clients/client-3/website && vercel --prod) &

# Wait for all to finish
wait

echo "All deployments complete!"
```

**Claude handles this automatically:**

```
Claude: I'll deploy all 3 clients in parallel to save time.

        [Progress bars]
        Ing Heng: ████████████ 100%
        Client 2: ████████████ 100%
        Client 3: ████████████ 100%

        All done in 1m 45s (vs 5m sequential)!
```

---

## Integration with Existing MCP

### Using GitHub MCP

```markdown
## In slash command:

Use GitHub MCP for:
- Checking repository status
- Creating commits
- Pushing to remote
- Managing branches

Example:
```javascript
// Get repo status
mcp.github.getRepoStatus({
  owner: "Jacobngai",
  repo: "ing-heng-credit-seo"
});

// Push changes
mcp.github.push({
  branch: "master",
  message: "[ing-heng] feat: Update homepage"
});
```

### Using Vercel MCP

```markdown
## In slash command:

Use Vercel MCP for:
- Deploying projects
- Checking deployment status
- Managing environment variables

Example:
```javascript
// Deploy client
mcp.vercel.deploy({
  projectId: "prj_xxx",
  path: "clients/ing-heng/website",
  production: true
});

// Check status
mcp.vercel.getDeploymentStatus({
  deploymentId: "dpl_xxx"
});
```

---

## Employee Workflow (Super Simple)

### For Your Newbie Employee:

**Day-to-day usage:**

```
Employee opens Claude Code

Employee: "I updated Ing Heng homepage"

Claude: [Auto-detects client]
        [Analyzes changes]
        [Generates commit message]
        [Pushes to GitHub]
        [Deploys to Vercel]

        ✅ Done! Live at: https://...

Employee: "Thanks!"
```

**Total commands needed:** ZERO (just natural language)

---

## One-Command Aliases (If They Want)

### For GitHub Push Only

```
Employee: /push

Claude: [Pushes entire monorepo to GitHub]
        [Skips Vercel deployment]

        ✅ Pushed to GitHub!
```

### For Vercel Deploy Only

```
Employee: /vercel ing-heng

Claude: [Deploys only Ing Heng]
        [Skips GitHub push]

        ✅ Deployed Ing Heng to Vercel!
```

### For Full Deploy

```
Employee: /deploy

Claude: [Detects changed clients]
        [Pushes to GitHub]
        [Deploys to Vercel]

        ✅ Everything deployed!
```

---

## Multi-Client Context Rules for CLAUDE.md

Add to `.claude/CLAUDE.md`:

```markdown
## Monorepo Multi-Client Deployment Rules

### Architecture

This is a **monorepo** with multiple clients:
- `clients/` → Production clients
- `example-clients/` → Staging/example clients

### Auto-Detection

When user mentions deployment:
1. Analyze `git status` to find changed files
2. Determine which clients are affected
3. Load client registry from `.claude/client-registry.json`
4. Report to user which clients will be deployed

### Deployment Logic

**Single client changed:**
- Push entire monorepo to GitHub
- Deploy ONLY that client to Vercel

**Multiple clients changed:**
- Ask user if they want to deploy all or one-by-one
- Deploy in parallel if user confirms

**Shared files changed:**
- Warn that multiple clients are affected
- Ask user to confirm deploying all

### Safety Rules

**Never deploy:**
- If build fails for ANY client
- If .env changes detected
- If more than 50 files changed (ask first)

**Always confirm:**
- Shared template changes (affects all clients)
- New client additions
- vercel.json modifications
```

---

## Success Metrics

### Before (Manual Multi-Client Deployment)
- ❌ Time: 10-15 minutes per client
- ❌ Risk: Deploy wrong client by accident
- ❌ Confusion: Which client has changes?
- ❌ Errors: Forget to deploy affected clients

### After (AI-Powered Smart Deployment)
- ✅ Time: 2-3 minutes for ALL clients
- ✅ Risk: Zero (Claude detects automatically)
- ✅ Clarity: Clear report of what's deploying
- ✅ Errors: Near zero (pre-flight checks)

---

## Troubleshooting

### Q: What if I have 10 clients?

**A:** Claude deploys them in parallel:

```
Claude: Found changes in 10 clients!

        I'll deploy all 10 in parallel.
        Estimated time: 3 minutes

        [Shows progress for all 10]

        ✅ All 10 clients deployed!
```

### Q: What if builds fail?

**A:** Claude stops and reports:

```
Claude: ❌ 3 of 10 clients failed to deploy:

        Failed:
          - Client 5 (syntax error)
          - Client 7 (missing dependency)
          - Client 9 (build timeout)

        Successful:
          - 7 other clients deployed

        Should I:
        1. Rollback all
        2. Keep successful, fix failed
        3. Show me the errors
```

---

## 📋 Implementation Checklist

- [ ] Create `.claude/client-registry.json` with your clients
- [ ] Create `.claude/commands/deploy-monorepo.md`
- [ ] Add monorepo rules to `.claude/CLAUDE.md`
- [ ] Test with dummy change in one client
- [ ] Verify GitHub push works
- [ ] Verify Vercel deploy works per client
- [ ] Train employee on natural language usage
- [ ] Celebrate! 🎉

---

## 🎯 Next Steps

1. **Tell me your Vercel setup**:
   - Do you have separate Vercel projects per client?
   - Or one Vercel project with different build configs?

2. **Share your vercel.json**:
   - I can optimize it for monorepo deployment

3. **List your clients**:
   - Current: Ing Heng Credit
   - Planned: [?]

Then I'll create the EXACT automation for your setup!
