# SEO Workflow Framework - Global Configuration

**Last Updated:** 2025-11-10
**Version:** 2.1

---

## 🔄 CLIENT-SPECIFIC CONTEXT AUTO-LOADING

**CRITICAL:** When working in any `clients/[client-name]/` directory, automatically load:

1. **`clients/[client-name]/CLAUDE.md`** - Client-specific rules (deployment, brand, content guidelines)
2. **`clients/[client-name]/IMPORT-PATH-RULES.md`** - Client import path rules (if exists)
3. **`clients/[client-name]/SEO-INTERNAL-LINKING-RULES.md`** - Client SEO linking rules (if exists)

**Hierarchy:** Client-specific rules OVERRIDE global rules when in conflict.

**Example:**
```
Working in: clients/result-marketing/website/
Auto-load:
  ✅ clients/result-marketing/CLAUDE.md (pricing, brand, deployment)
  ✅ Global CLAUDE.md (framework rules)

Result: Use result-marketing's brand colors, pricing, deployment config
```

**If client CLAUDE.md missing:**
```
⚠️ WARNING: clients/[client-name]/CLAUDE.md not found

This means:
- No client-specific deployment config
- No brand identity rules
- No content guidelines

Action: Run Command ① /1-research-business to create it
```

---

## 🚨 GLOBAL RULES - Multi-Language Vercel Deployment

### 1. Environment Variables (Vercel Dashboard)

Each project MUST have:
- `PUBLIC_DEFAULT_LOCALE` = en | ms | zh (NO trailing newlines!)
- `DEFAULT_LOCALE` = en | ms | zh
- `PUBLIC_SITE_URL` = project URL
- `SITE_URL` = project URL

### 2. Astro i18n Fallback (astro.config.mjs)

```javascript
// ✅ MUST be dynamic - never hardcode
fallback: Object.fromEntries(
  ALL_LOCALES
    .filter(loc => loc !== DEFAULT_LOCALE)
    .map(loc => [loc, DEFAULT_LOCALE])
)
```

### 3. Root Redirect (src/pages/index.astro)

```javascript
// ✅ MUST use environment variable
const defaultLocale = import.meta.env.PUBLIC_DEFAULT_LOCALE || 'en';
return Astro.redirect(`/${defaultLocale}/`, 301);
```

### 4. Deployment Architecture

- ❌ NEVER use `vercel --name` (deprecated)
- ❌ NEVER use GitHub auto-deployment (we do manual deployments)
- ✅ ALWAYS use manual CLI deployment method
- ✅ One GitHub repo, same code for all languages
- ✅ 3 separate Vercel projects (EN, MS, ZH)
- ✅ Each project reads `PUBLIC_DEFAULT_LOCALE` to configure itself

### 5. Manual Deployment Process Template

```bash
# DEPLOY [LANGUAGE] ([LOCALE])
# Update .vercel/project.json to [LOCALE] project
echo '{"projectId":"prj_[PROJECT_ID]","orgId":"team_[TEAM_ID]"}' > clients/[client-name]/website/.vercel/project.json

# Deploy to production with [LOCALE] environment variables
cd clients/[client-name]/website
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=[LOCALE] \
  --env DEFAULT_LOCALE=[LOCALE] \
  --env PUBLIC_SITE_URL=https://[DOMAIN] \
  --env SITE_URL=https://[DOMAIN]
```

**Client-specific project IDs are stored in `clients/[client-name]/CLAUDE.md`**

---

## 📝 GLOBAL CONTENT RULES

### Writing Standards
- **Reading Level:** 5th grade (Flesch-Kincaid 5-6)
- **Sentence Length:** 10-15 words maximum
- **Vocabulary:** Simple, clear words (no jargon)
- **Voice:** Active voice ("We help you" not "You are helped")
- **Format:** Short paragraphs, bullet points, clear headings

### Prohibited Claims (Unless Verifiable)
- ❌ Client counts without proof
- ❌ Traffic increase percentages without data
- ❌ Keyword ranking claims without screenshots
- ❌ Client ratings without review system
- ❌ Fake testimonials with specific numbers
- ❌ "First in Malaysia" or similar unverifiable claims

### What You CAN Include
- ✅ Service descriptions (what you do)
- ✅ Methodology explanations (how you do it)
- ✅ Technology used (Claude Code, Astro, etc.)
- ✅ Team credentials (verifiable backgrounds)
- ✅ Pricing (actual prices)
- ✅ Company founding date (verifiable)

---

## 🏗️ GLOBAL FRAMEWORK RULES

### Astro Best Practices
- **Islands Architecture:** Zero JS by default, selective hydration
- **Content Collections:** Type-safe content with Zod schemas
- **i18n Routing:** Built-in Astro i18n (not third-party)
- **SEO First:** Static HTML, fast loading, crawlable

### Component Patterns
- All components accept `lang` prop
- Use TypeScript interfaces for props
- Include JSDoc comments
- Follow accessibility standards (WCAG AA)

### Import Path Standards
```typescript
// ✅ Use path aliases
import Component from '@components/Component.astro';
import Layout from '@layouts/Layout.astro';
import { util } from '@utils/util.ts';

// ❌ Never use absolute src/ paths
import Component from 'src/components/Component.astro';
```

### SEO Infrastructure Requirements
- Dynamic `robots.txt` (environment-aware)
- Auto-generated `sitemap.xml` (filtered by locale)
- Schema.org markup (Organization, Product, FAQ, Person, Article)
- Meta tags (Open Graph, Twitter Cards, hreflang)
- Canonical URLs

---

## 🎯 WORKFLOW COMMAND SYSTEM

### Command Organization (14 Commands)

**ONBOARD (①-④b):** Research, strategy, brand, website scaffold
**BUILD (⑤-⑧):** Author pages, hub pages, blog posts, service pages
**REVIEW (⑨-⑪):** SEO audit, E-E-A-T scoring, readability check
**PUBLISH (⑫-⑭):** Translate, deploy, submit to search engines

**Full documentation:** See `.claude/commands/README.md`

---

## 📚 REFERENCE DOCUMENTATION

**Command Reference:**
- `.claude/commands/README.md` - Master index of all commands
- `.claude/commands/1-onboard/` - ONBOARD phase commands (①-④b)
- `.claude/commands/2-build/` - BUILD phase commands (⑤-⑧)
- `.claude/commands/3-review/` - REVIEW phase commands (⑨-⑪)
- `.claude/commands/4-publish/` - PUBLISH phase commands (⑫-⑭)

**Agent Reference:**
- `.claude/agents/` - 8 specialized agents
- Each agent has specific expertise and responsibilities

**Skills Reference:**
- `.claude/skills/` - Reusable skill modules
- Used by agents to execute specific tasks

**Templates:**
- `.claude/templates/client-claude-md-template.md` - Client CLAUDE.md template

**Framework Docs:**
- `framework-docs/` - Complete framework documentation
- `framework-docs/0-START-HERE/` - Getting started guide

---

## 🔧 TECHNICAL STACK

**Frontend:**
- Astro 5.15+
- Tailwind CSS 3.4
- React 18 (for islands)
- TypeScript (strict mode)

**Deployment:**
- Vercel Edge Network
- Manual deployments
- Environment variable-based configuration

**SEO Tools:**
- astro-seo (meta tags)
- @astrojs/sitemap (sitemap generation)
- Schema.org (structured data)

**AI Tools:**
- Claude Code (development automation)
- Claude Sonnet (content generation)

---

## 🎓 HOW TO USE THIS SYSTEM

### For New Client:

1. **Create client folder:** `clients/[client-name]/`
2. **Run ONBOARD commands:** ① → ②  → ③ → ④ → ④b
3. **Result:** Client CLAUDE.md is auto-created with all context
4. **Continue to BUILD:** Commands ⑤-⑧ use client context automatically

### When Working on Client:

```bash
# Navigate to client folder
cd clients/result-marketing/website/

# Claude Code automatically loads:
# 1. Global CLAUDE.md (this file)
# 2. clients/result-marketing/CLAUDE.md (client-specific)
# 3. Any other client *.md rule files

# You now have full context for this client!
```

### When Switching Clients:

```bash
# From ing-heng
cd clients/ing-heng/website/
# Context: ing-heng's brand, pricing, deployment config

# To result-marketing
cd clients/result-marketing/website/
# Context: result-marketing's brand, pricing, deployment config

# Context switches automatically!
```

---

## 🚨 CRITICAL RULES (All Clients)

### Content Creation
1. ✅ Use REAL content from client briefs (never Lorem Ipsum)
2. ✅ Write at 5th grade reading level
3. ❌ NO false claims (traffic, clients, rankings) without proof
4. ✅ Brand colors/fonts from client's selected CI option
5. ✅ All text in client's target languages (EN/MS/ZH)

### Multi-Language Deployment
1. ✅ 3 separate Vercel projects per client (EN, MS, ZH)
2. ✅ Environment variables set per deployment
3. ✅ Sitemap filtered by DEFAULT_LOCALE
4. ❌ NEVER hardcode locale in code
5. ✅ Manual deployment only (no auto-deploy)

### Code Quality
1. ✅ TypeScript strict mode (no `any` types)
2. ✅ Zero build errors before deployment
3. ✅ Lighthouse scores 90+ (performance, accessibility, SEO)
4. ✅ Accessible (WCAG AA compliance)
5. ✅ Mobile responsive (all breakpoints)

---

## 📊 SUCCESS METRICS

**You're using the system correctly when:**
- ✅ Client CLAUDE.md exists for every client
- ✅ Commands ①-⑭ run without missing file errors
- ✅ Build succeeds on first try
- ✅ Deployments work without debugging
- ✅ Context switches seamlessly between clients

**Warning signs:**
- ❌ Frequently searching for client info manually
- ❌ Copy-pasting deployment commands
- ❌ Forgetting client-specific rules
- ❌ Using wrong brand colors
- ❌ Missing client context

---

## 🆘 TROUBLESHOOTING

### "Client CLAUDE.md not found"
**Solution:** Run Command ① /1-research-business for that client

### "Wrong deployment config used"
**Solution:** Check you're in correct client folder, verify CLAUDE.md loaded

### "Brand colors don't match"
**Solution:** Check clients/[client-name]/CLAUDE.md has correct colors from CI selection

### "Missing client context"
**Solution:** Ensure client CLAUDE.md exists and is complete

---

**System Version:** 2.1 (Auto-Discovery Architecture)
**Maintained by:** SEO Workflow Team
**Template Location:** `.claude/templates/client-claude-md-template.md`
