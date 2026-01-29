# Result Marketing - Project Rules

**Project:** Result Marketing Agency Website
**Type:** Single multi-language website (EN/MS/ZH)
**Location:** `result-marketing/` folder
**Goal:** SEO-focused content for client conversion

---

## Folder Structure

```
result-marketing/
├── content/
│   ├── draft/     ← AI writes here (work in progress)
│   ├── complete/  ← Finished content (ready to publish)
│   └── memory/    ← ICP, CEP, strategy docs
│
├── .claude/
│   ├── commands/  ← Slash commands
│   └── agents/    ← Reusable AI agents
│
└── website/       ← Astro multi-language site
```

---

## The 3 Commands

### `/plan` - Content Strategy
Creates 12-month content calendar using DataForSEO keyword research.

### `/content` - Create Content
Generates blog posts using parallel AI agents. Saves to `content/draft/`.

### `/deploy` - Deploy with QA
Builds site, runs Playwright QA (zero 404s), updates sitemap, deploys.

---

## Content Workflow

```
1. User: /content
2. Agent writes → content/draft/
3. User reviews → deletes bad ones
4. User: "Move X to complete"
5. Agent moves → content/complete/
6. User: /deploy
7. Agent publishes → website
```

**No D/A/F folders.** Just draft → complete.

---

## Critical Rules

### Zero 404 Policy
- Every page change must update sitemap
- Playwright QA checks ALL links before deploy
- Deploy only if no broken links

### Progress Tracking
- For batch operations, create PROGRESS.md
- Mark items [DONE], [IN_PROGRESS], or [PENDING]
- Update IMMEDIATELY after each completion

### Parallel Agents
- Use Task tool with run_in_background=true
- Launch all agents in ONE message (parallel execution)
- Track each agent's completion separately

---

## Deployment Safety

### Never Deploy If:
- Build fails
- Playwright finds 404s
- Missing translations
- Sitemap not updated

### Always:
- Show what's changing
- Ask for confirmation
- Report live URLs
- Log deployment history

---

## Multi-Language

All content created in EN by default. Ask if MS/ZH needed.

When creating multilingual content:
- Verify all 3 language versions exist
- Test all language routes after deploy
- Check hreflang tags

---

## Quick Reference

```bash
# Create content
/content

# Deploy website
/deploy

# Plan content strategy
/plan
```

---

**Remember:** Simple, fast, SEO-focused. That's Result Marketing.
