# Automated Multi-Language Deployment - Quick Start Guide

**Last Updated**: November 2025
**Status**: ✅ Ready to Use

---

## Overview

Your SEO platform now has **fully automated multi-language deployment** to Vercel! Every client gets **3 separate websites** (EN, MS, ZH) that deploy in parallel automatically.

---

## The Complete Workflow

### 1️⃣ One-Time Setup (Per New Client)

When you onboard a new client:

```bash
# Step 1: Onboard the client (generates keywords, personas, content strategy)
$ claude /onboard-client ing-heng

# Step 2: Create 3 Vercel projects (one-time setup)
$ claude /setup-vercel-projects ing-heng

✅ Done! Client has 3 live websites:
   - ing-heng-en.vercel.app (English default)
   - ing-heng-ms.vercel.app (Malay default)
   - ing-heng-zh.vercel.app (Chinese default)
```

**Time**: 45 minutes (30 min onboarding + 15 min Vercel setup)

---

### 2️⃣ Daily Content Publishing (Every Morning)

```bash
# Step 1: Generate content (15 min)
$ claude /generate-daily-blogs
☕ Wait for content generation...

# Step 2: Review drafts (20 min)
Open /drafts/D/ folders
Rename D/file.md → A/file.md (approved)
Rename D/file.md → F/file.md (rejected)

# Step 3: Publish to all websites (3 min)
$ claude /publish-approved

✅ Automatically:
   - Git commits to GitHub
   - Deploys to 3 Vercel sites per client
   - All languages live in 2-3 minutes!
```

**Total Time**: 30-40 minutes for all clients

---

## How Multi-Language Deployment Works

### Architecture

```
Single GitHub Repo
└── clients/ing-heng/website/
    └── src/content/posts/
        ├── en/  ← English content
        ├── ms/  ← Malay content
        └── zh/  ← Chinese content

            ⬇️ Git Push ⬇️

3 Vercel Projects (Parallel Deployment)
├── ing-heng-en → Builds with DEFAULT_LOCALE=en
├── ing-heng-ms → Builds with DEFAULT_LOCALE=ms
└── ing-heng-zh → Builds with DEFAULT_LOCALE=zh

            ⬇️ 2-3 Minutes ⬇️

3 Live Websites
├── ing-heng-en.vercel.app → Auto-redirects to /en/
├── ing-heng-ms.vercel.app → Auto-redirects to /ms/
└── ing-heng-zh.vercel.app → Auto-redirects to /zh/
```

### Key Features

✅ **Single Codebase**: All languages in one repo
✅ **Parallel Deployment**: 3 sites build simultaneously
✅ **Language-Specific Defaults**: Each site shows its language first
✅ **Language Switcher**: Users can switch to other languages
✅ **Automated**: No manual deployment needed

---

## Commands Reference

### Daily Operations

| Command | Purpose | Frequency |
|---------|---------|-----------|
| `/generate-daily-blogs` | Generate content for all clients | Daily (9 AM) |
| `/publish-approved` | Deploy all A/ files to production | Daily (after review) |

### One-Time Setup

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/onboard-client [name]` | Onboard new client | Once per client |
| `/setup-vercel-projects [name]` | Create 3 Vercel projects | Once per client |

---

## Example: Publishing for Ing Heng

### Morning Routine (9 AM)

```bash
# 9:00 AM - Generate content
$ claude /generate-daily-blogs
```

Claude generates:
```
/drafts/D/2025-11-02-excavator-financing-en.md
/drafts/D/2025-11-02-excavator-financing-ms.md
/drafts/D/2025-11-02-excavator-financing-zh.md
```

### Review (9:15 AM)

You review and approve:
```
Rename D/2025-11-02-excavator-financing-en.md → A/...
Rename D/2025-11-02-excavator-financing-ms.md → A/...
Rename D/2025-11-02-excavator-financing-zh.md → A/...
```

### Publish (9:35 AM)

```bash
$ claude /publish-approved
```

Claude automatically:
```
✅ Moves A/*.md to /content/en|ms|zh/
✅ Git commit: "feat: Add excavator financing blog (EN/MS/ZH)"
✅ Git push to GitHub
✅ Deploy to ing-heng-en.vercel.app
✅ Deploy to ing-heng-ms.vercel.app
✅ Deploy to ing-heng-zh.vercel.app

⏱️ Total time: 2m 34s

📦 Deployed URLs:
- EN: https://ing-heng-en.vercel.app/en/blog/excavator-financing
- MS: https://ing-heng-ms.vercel.app/ms/blog/excavator-financing
- ZH: https://ing-heng-zh.vercel.app/zh/blog/excavator-financing
```

### Result (9:38 AM)

All 3 websites updated! ✅
- English site shows English content first
- Malay site shows Malay content first
- Chinese site shows Chinese content first
- All have language switcher

---

## Scaling to Multiple Clients

### Current Setup: 1 Client

```
Ing Heng = 3 Vercel projects
Deployment time: 2-3 minutes
```

### Future: 10 Clients

```
10 clients × 3 projects = 30 Vercel projects
Deployment time: 3-4 minutes (parallel!)

Example:
- ing-heng-en/ms/zh
- apex-machinery-en/ms/zh
- water-tanker-supply-en/ms/zh
- ... (7 more clients)

All deploy in parallel = same 3-4 minutes!
```

### Future: 50 Clients

```
50 clients × 3 projects = 150 Vercel projects
Deployment time: 5-7 minutes (parallel!)

Why so fast?
- Git push once (single repo)
- Vercel builds in parallel
- No sequential waits
```

---

## Domain Configuration (Optional)

### Currently

```
ing-heng-en.vercel.app
ing-heng-ms.vercel.app
ing-heng-zh.vercel.app
```

### After Custom Domains

You can manually configure in Vercel:

```
EN: en.ingheng-credit.com  (or www.ingheng-credit.com)
MS: ms.ingheng-credit.com  (or my.ingheng-credit.com)
ZH: zh.ingheng-credit.com  (or cn.ingheng-credit.com)
```

**How to configure:**
1. Go to Vercel project settings
2. Click "Domains"
3. Add custom domain
4. Update DNS records at your domain registrar

---

## Troubleshooting

### Problem: Deployment Failed

**Symptom:**
```
❌ MS deployment failed
Build error: [error message]
```

**Solution:**
```bash
# Check build logs
$ claude "Show build logs for ing-heng-ms deployment"

# Claude will use mcp__vercel__get_deployment_build_logs
# and show you the exact error

# Fix the error in code, then republish:
$ claude /publish-approved
```

---

### Problem: Projects Not Found

**Symptom:**
```
Error: Vercel projects not found for ing-heng
```

**Solution:**
```bash
# Run the setup command
$ claude /setup-vercel-projects ing-heng

# Or manually create projects in Vercel dashboard
```

---

### Problem: Wrong Language Showing

**Symptom:**
- EN site shows Chinese content first
- MS site shows English content first

**Solution:**
Check environment variables in Vercel:
```
ing-heng-en → PUBLIC_DEFAULT_LOCALE must be "en"
ing-heng-ms → PUBLIC_DEFAULT_LOCALE must be "ms"
ing-heng-zh → PUBLIC_DEFAULT_LOCALE must be "zh"
```

Fix in Vercel dashboard → Settings → Environment Variables

---

## File Structure

```
ing-heng-credit-seo/
├── clients/
│   └── ing-heng/
│       ├── drafts/
│       │   ├── D/  ← Generated content (awaiting review)
│       │   ├── A/  ← Approved content (ready to publish)
│       │   └── F/  ← Failed/rejected content
│       ├── website/
│       │   ├── src/
│       │   │   └── content/
│       │   │       └── posts/
│       │   │           ├── en/  ← English blogs
│       │   │           ├── ms/  ← Malay blogs
│       │   │           └── zh/  ← Chinese blogs
│       │   ├── astro.config.mjs
│       │   └── vercel.json
│       └── ...
└── framework-docs/
    ├── VERCEL-AUTO-DEPLOYMENT-PLAN.md  ← Full architecture
    └── AUTOMATED-DEPLOYMENT-QUICK-START.md  ← This file
```

---

## Benefits Summary

### Before Automation
```
Write content → Review → MANUAL DEPLOY × 3 languages
Time: 30 min + 15 min manual deployment per client
For 50 clients: 37+ hours/day ❌
```

### After Automation
```
Write content → Review → /publish-approved
Time: 30 min total (all clients, all languages)
For 50 clients: 30 minutes/day ✅
```

### Time Saved
```
Manual: 37 hours/day
Automated: 0.5 hours/day
Savings: 36.5 hours/day
```

### Cost Savings
```
1 employee @ $20/hr × 36.5 hrs = $730/day saved
$730 × 20 working days = $14,600/month saved

ROI: Setup time (2 hrs) pays for itself in 4 minutes 😎
```

---

## Next Steps

### For Existing Clients (Ing Heng)

```bash
# Create 3 Vercel projects
$ claude /setup-vercel-projects ing-heng

# Test with sample content
$ claude "Create a test blog post and publish to verify deployment"
```

### For Future Clients

```bash
# Complete onboarding includes Vercel setup
$ claude /onboard-client new-client-name
$ claude /setup-vercel-projects new-client-name

# Then daily workflow:
$ claude /publish-approved
```

---

## Support

### Documentation
- Full architecture: `framework-docs/VERCEL-AUTO-DEPLOYMENT-PLAN.md`
- Workflow details: `.claude/skills/publishing-workflow.md`
- Deployment logic: `.claude/skills/vercel-multi-language-deployment.md`

### Commands
- Publishing: `.claude/commands/publish-approved.md`
- Setup: `.claude/commands/setup-vercel-projects.md`

---

**Ready to deploy?** 🚀

```bash
$ claude /setup-vercel-projects ing-heng
```

Let's automate your multilingual SEO empire!
