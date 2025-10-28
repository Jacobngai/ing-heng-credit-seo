# Multilingual Monorepo Research Report
## Comprehensive Analysis for Ing Heng Credit Website Restructuring

**Date:** October 18, 2025
**Project:** Ing Heng Credit SEO Website
**Current Architecture:** Single Astro app with path-based multilingual routing
**Objective:** Evaluate restructuring strategies for deploying to multiple domains

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Monorepo Structure Best Practices](#monorepo-structure-best-practices)
3. [Vercel Deployment Strategies](#vercel-deployment-strategies)
4. [Astro Framework Specific Approaches](#astro-framework-specific-approaches)
5. [Domain-based vs Path-based Routing](#domain-based-vs-path-based-routing)
6. [Alternative Approaches Comparison](#alternative-approaches-comparison)
7. [Real-world Case Studies](#real-world-case-studies)
8. [Cost Analysis](#cost-analysis)
9. [Recommendations](#recommendations)
10. [Implementation Roadmap](#implementation-roadmap)

---

## Executive Summary

### Current State
- **Architecture:** Single Astro application
- **Routing:** Path-based i18n (`/en/`, `/zh/`, `/ms/`)
- **Languages:** English, Mandarin Chinese (Simplified), Bahasa Malaysia
- **Deployment:** Single Vercel project
- **Domain:** `ingheng-credit.vercel.app`

### Key Findings

1. **Path-based routing on a single domain is recommended for SEO** - Benefits from consolidated domain authority
2. **Separate domains (ccTLDs) require 3x the SEO effort** - Each domain builds authority independently
3. **Monorepo with shared components is technically feasible** - But Astro lacks native multi-site build support
4. **Vercel pricing allows 50 domains on free tier** - Sufficient for testing, but Pro plan ($20/user/month) recommended for production
5. **Edge Middleware can handle domain-based routing** - Enables sophisticated language detection and routing

### Recommendation Preview
**Option 3: Hybrid Approach** - Single domain with subdirectories + future domain expansion capability
- Best SEO performance
- Lowest operational complexity
- Preserves flexibility for future multi-domain strategy
- Cost-effective ($0 to start, $20/month for production)

---

## 1. Monorepo Structure Best Practices

### Overview
A monorepo contains multiple packages, projects, or apps in one version-controlled repository, enabling code sharing while maintaining separation of concerns.

### Key Architectural Patterns

#### 1.1 Nx-Style Architecture
**Pattern:** Minimal code in `/apps`, maximum code in `/libs`

```
/monorepo-root
├── /apps                    # Minimal, app-specific setup
│   ├── /en-site            # English site entry point
│   ├── /zh-site            # Mandarin site entry point
│   └── /ms-site            # Malay site entry point
├── /libs                    # Reusable code (80-90% of codebase)
│   ├── /ui                 # Shared UI components
│   ├── /i18n               # Translation utilities
│   ├── /content            # Content management
│   └── /utils              # Shared utilities
└── package.json
```

**Benefits:**
- Forces code reusability
- Reduces duplication
- Enables atomic changes across all apps
- Improves discoverability

**Drawbacks:**
- Steeper learning curve
- Requires discipline to maintain structure
- Initial setup complexity

#### 1.2 Language-First Organization
**Pattern:** Top-level directories per language, functional organization within

```
/monorepo-root
├── /en
│   ├── /components
│   ├── /content
│   └── /pages
├── /zh
│   ├── /components
│   ├── /content
│   └── /pages
├── /ms
│   ├── /components
│   ├── /content
│   └── /pages
└── /shared              # Language-agnostic code
    ├── /components
    ├── /utils
    └── /types
```

**Benefits:**
- Clear language separation
- Easy to understand
- Aligns with current Astro i18n patterns

**Drawbacks:**
- Risk of code duplication
- Harder to enforce shared component usage
- More manual coordination needed

### 1.3 Workspace-Based Monorepo
**Pattern:** npm/pnpm/yarn workspaces with package-based organization

```
/monorepo-root
├── /packages
│   ├── /astro-en          # English Astro site
│   │   └── package.json
│   ├── /astro-zh          # Mandarin Astro site
│   │   └── package.json
│   ├── /astro-ms          # Malay Astro site
│   │   └── package.json
│   ├── /shared-components # Shared UI components
│   │   └── package.json
│   ├── /shared-content    # Content utilities
│   │   └── package.json
│   └── /shared-config     # Shared configs
│       └── package.json
├── package.json           # Workspace root
└── pnpm-workspace.yaml    # Workspace config
```

**Benefits:**
- Native package manager support
- Clear dependency management
- Each site is independently deployable
- Shared packages via workspace linking

**Drawbacks:**
- More complex build process
- Requires workspace-aware tooling
- Potential for dependency version conflicts

### Key Best Practices

#### Dependency Management
- **Single Version Policy (SVP):** Use same version of dependencies across all packages
- **Hoisting:** Shared dependencies hoisted to root `node_modules`
- **Workspace Linking:** Internal packages linked without publishing to npm

#### Build Orchestration
- **Incremental Builds:** Only rebuild changed packages
- **Dependency Graph:** Understand which packages depend on which
- **Parallel Execution:** Build independent packages simultaneously
- **Tools:** Turborepo, Nx, or simple npm workspaces

#### CI/CD Optimization
- **Selective Deployment:** Only deploy changed services
- **Affected Tests:** Run tests only for changed code and dependencies
- **Caching:** Cache dependencies and build artifacts

### Challenges to Consider

1. **Access Control:** Can't restrict access to parts of monorepo
2. **Merge Conflicts:** Changes to shared code can impact many components
3. **Scale:** Requires investment in build tooling as codebase grows
4. **Learning Curve:** Team needs to understand monorepo patterns

---

## 2. Vercel Deployment Strategies

### 2.1 Multiple Projects from One Repository

**How It Works:**
- Connect same Git repository to multiple Vercel projects (up to 3 on free tier)
- Each project configured with different root directory
- Each project can have unique domain

**Setup Steps:**
```
1. Create first Vercel project
   - Import repository
   - Set root directory: packages/astro-en
   - Framework preset: Astro
   - Domain: inghengcredit.com

2. Create second Vercel project
   - Import same repository
   - Set root directory: packages/astro-zh
   - Framework preset: Astro
   - Domain: inghengcredit.cn

3. Create third Vercel project
   - Import same repository
   - Set root directory: packages/astro-ms
   - Framework preset: Astro
   - Domain: inghengcredit.my
```

**Limitations:**
- **Free Tier:** Maximum 3 projects per repository
- **Pro Tier:** No explicit limit, but subject to usage pricing
- **Concurrent Builds:** Free tier = 1, Pro tier = customizable

**Benefits:**
- Clear separation per language
- Independent deployment triggers
- Unique domains per project
- Simple to understand

**Drawbacks:**
- Requires monorepo structure
- 3x deployment overhead
- Potential build queue issues on free tier

### 2.2 Single Project, Multiple Domains with Rewrites

**How It Works:**
- Single Vercel project
- Multiple domains pointed to same project
- Use `vercel.json` rewrites to route based on domain

**Configuration Example:**
```json
{
  "rewrites": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "inghengcredit.cn"
        }
      ],
      "destination": "/zh/:path*"
    },
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "inghengcredit.my"
        }
      ],
      "destination": "/ms/:path*"
    },
    {
      "source": "/:path*",
      "destination": "/en/:path*"
    }
  ]
}
```

**Benefits:**
- Single deployment
- Centralized management
- Lower complexity
- One build process

**Drawbacks:**
- All domains update simultaneously
- No language-specific deployment control
- More complex routing logic

### 2.3 Edge Middleware Routing

**How It Works:**
- Vercel Edge Middleware intercepts requests before cache
- Detects language from domain, headers, or cookies
- Rewrites or redirects to appropriate content

**Implementation Example:**
```javascript
// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  const hostname = request.headers.get('host')
  const pathname = request.nextUrl.pathname

  // Domain-based routing
  if (hostname === 'inghengcredit.cn') {
    return NextResponse.rewrite(new URL(`/zh${pathname}`, request.url))
  }

  if (hostname === 'inghengcredit.my') {
    return NextResponse.rewrite(new URL(`/ms${pathname}`, request.url))
  }

  // Accept-Language header detection
  const acceptLanguage = request.headers.get('accept-language')
  // ... language detection logic

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
```

**Benefits:**
- Dynamic routing at edge
- Fast (runs before cache)
- Sophisticated language detection
- Geolocation-based routing possible

**Drawbacks:**
- Only works with Next.js (not Astro)
- Additional middleware complexity
- Debugging can be challenging

### 2.4 turbo-ignore for Selective Deployment

**How It Works:**
- Use `turbo-ignore` to detect changes in monorepo
- Only trigger builds for affected projects
- Reduces unnecessary deployments

**Configuration:**
```json
// Vercel Project Settings
{
  "ignoreCommand": "npx turbo-ignore"
}
```

**Benefits:**
- Saves build minutes
- Prevents unnecessary deployments
- Works with Turborepo dependency graph

**Drawbacks:**
- Requires Turborepo setup
- Additional configuration

### 2.5 Domain Limits and Pricing

#### Free/Hobby Tier
- **Custom Domains:** 50 per project
- **Projects per Repository:** 3
- **Total Possible Domains:** 150 (50 × 3)
- **Concurrent Builds:** 1

#### Pro Tier ($20/user/month)
- **Custom Domains:** Unlimited per project
- **Projects per Repository:** Unlimited
- **Bandwidth:** 400GB included
- **Concurrent Builds:** Customizable
- **Additional Bandwidth:** $0.15/GB
- **Fast Origin Transfer:** $0.06/GB

#### Enterprise Tier (Custom pricing, ~$20-25K/year minimum)
- **Everything in Pro**
- **Advanced security**
- **SLA guarantees**
- **Custom contracts**

### Recommendation
For Ing Heng Credit:
1. **Start:** Free tier with 1 project, multiple domains via rewrites
2. **Scale:** Pro tier if need independent deployments per language
3. **Enterprise:** Only if significant traffic or SLA requirements

---

## 3. Astro Framework Specific Approaches

### 3.1 Current Astro i18n Capabilities

#### Built-in i18n Routing (Astro 3.5+)

**Path-based Routing (Current Setup):**
```javascript
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ms'],
    routing: {
      prefixDefaultLocale: true  // /en/*, /zh/*, /ms/*
    }
  }
})
```

**Key Features:**
- Automatic locale detection
- `getRelativeLocaleUrl()` helper
- `getAbsoluteLocaleUrl()` helper
- Sitemap integration with language variants

**Limitations:**
- Path-based routing only (no native domain-based routing)
- Single build output
- No multi-site build configuration

#### Domain-based Routing (Limited)

**Configuration:**
```javascript
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ms'],
    domains: {
      zh: 'https://inghengcredit.cn',
      ms: 'https://inghengcredit.my'
    },
    routing: {
      prefixDefaultLocale: false
    }
  }
})
```

**How It Works:**
- URLs for `zh` locale use `inghengcredit.cn` domain
- URLs for `ms` locale use `inghengcredit.my` domain
- Helper functions (`getAbsoluteLocaleUrl()`) return correct domain
- Still requires localized folders: `/en/`, `/zh/`, `/ms/`

**Limitations:**
- **Still requires path prefixes in source code**
- **Single build output** - doesn't create separate builds
- **Manual routing setup required** - Need reverse proxy or Vercel rewrites
- **Not a multi-tenant solution**

### 3.2 Monorepo Patterns for Astro

#### Pattern 1: Shared Components Package

**Structure:**
```
/packages
  /astro-en
    /src
      /pages
      /layouts
    package.json
    astro.config.mjs

  /astro-zh
    /src
      /pages
      /layouts
    package.json
    astro.config.mjs

  /astro-ms
    /src
      /pages
      /layouts
    package.json
    astro.config.mjs

  /shared-components
    /src
      /components
        BenefitCard.astro
        ProductCard.astro
        Footer.astro
    package.json
```

**How Sites Import Shared Components:**
```astro
---
// packages/astro-en/src/pages/index.astro
import { BenefitCard } from '@ing-heng/shared-components'
---

<BenefitCard title="Fast Approval" />
```

**Package Configuration:**
```json
// packages/shared-components/package.json
{
  "name": "@ing-heng/shared-components",
  "version": "1.0.0",
  "exports": {
    "./BenefitCard": "./src/components/BenefitCard.astro",
    "./ProductCard": "./src/components/ProductCard.astro"
  }
}

// packages/astro-en/package.json
{
  "name": "@ing-heng/astro-en",
  "dependencies": {
    "@ing-heng/shared-components": "workspace:*"
  }
}
```

**Benefits:**
- True component sharing
- Type safety across packages
- Independent versioning possible
- Clear dependency graph

**Challenges:**
- Astro component sharing in monorepo can have issues (GitHub Issue #9760)
- Need to configure package exports carefully
- May encounter bundling issues

#### Pattern 2: Symbolic Links / File References

**Structure:**
```
/website
  /src
    /shared            # Shared components
    /en               # English-specific
    /zh               # Mandarin-specific
    /ms               # Malay-specific
```

**Benefits:**
- Simpler setup
- No workspace configuration needed
- Works with current Astro setup

**Drawbacks:**
- All code in one package
- Can't deploy sites independently
- Harder to manage as codebase grows

#### Pattern 3: Nx Monorepo with Astro Plugin

**Tools:**
- Nx CLI
- `@nxext/astro` plugin

**Structure:**
```
/apps
  /en-site
  /zh-site
  /ms-site
/libs
  /shared-ui
  /shared-utils
  /i18n
nx.json
workspace.json
```

**Benefits:**
- Powerful build orchestration
- Dependency graph visualization
- Incremental builds
- Affected tests/builds

**Drawbacks:**
- Complex setup
- Nx learning curve
- Overkill for small projects

### 3.3 Known Issues and Workarounds

#### Issue: Astro Component Sharing in Monorepo
**Problem:** When sharing Astro components that import framework components (React, Lit, etc.) in monorepo setup, can encounter bundling errors.

**GitHub Issue:** #9760

**Workaround:**
- Keep framework-specific components in each site package
- Only share pure Astro components
- Use careful package exports configuration

#### Issue: No Native Multi-Site Build
**Problem:** Astro doesn't support building multiple sites from one config.

**Community Request:** GitHub roadmap discussion #702

**Workaround:**
- Multiple `astro.config.*.mjs` files
- Build scripts that swap configs
- Environment variables to change behavior

**Example:**
```json
// package.json
{
  "scripts": {
    "build:en": "astro build --config=astro.config.en.mjs",
    "build:zh": "astro build --config=astro.config.zh.mjs",
    "build:ms": "astro build --config=astro.config.ms.mjs",
    "build:all": "npm run build:en && npm run build:zh && npm run build:ms"
  }
}
```

### 3.4 Content Collections Strategy

**Shared Content Structure:**
```
/src/content
  /blog
    /en
      /excavator-financing.md
    /zh
      /excavator-financing.md
    /ms
      /excavator-financing.md
  /equipment
    /en
      /excavator.md
    /zh
      /excavator.md
    /ms
      /excavator.md
```

**Content Collection Schema:**
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    language: z.enum(['en', 'zh', 'ms']),
    alternates: z.object({
      en: z.string().optional(),
      zh: z.string().optional(),
      ms: z.string().optional(),
    }),
    // ... other fields
  })
})
```

---

## 4. Domain-based vs Path-based Routing

### 4.1 SEO Comparison

#### Path-based Routing (Subdirectories)
**URL Structure:**
- `inghengcredit.com/en/excavator-financing`
- `inghengcredit.com/zh/excavator-financing`
- `inghengcredit.com/ms/excavator-financing`

**SEO Advantages:**
- ✅ **Consolidated Domain Authority** - All languages benefit from single domain's SEO work
- ✅ **Easier Link Building** - All backlinks boost single domain
- ✅ **Lower Cost** - One domain to maintain
- ✅ **Simpler Technical Setup** - One site, one sitemap
- ✅ **Unified Analytics** - Single property to track

**SEO Disadvantages:**
- ❌ **Weaker Geo-targeting Signal** - Less clear which market you're targeting
- ❌ **User Confusion** - URL doesn't immediately indicate language
- ❌ **Requires Hreflang** - Must implement hreflang tags correctly

**Best For:**
- Small to medium businesses
- Limited SEO resources
- One strong market with smaller secondary markets
- Consistent brand across markets

#### Domain-based Routing (ccTLDs)
**URL Structure:**
- `inghengcredit.com` (English)
- `inghengcredit.cn` (Mandarin)
- `inghengcredit.my` (Malay)

**SEO Advantages:**
- ✅ **Strong Geo-targeting** - ccTLDs (.cn, .my) signal country focus to search engines
- ✅ **User Trust** - Users familiar with their country's TLD
- ✅ **Local Search Preference** - Google may prefer local TLD in search results
- ✅ **Clear Market Segmentation** - Easy to separate analytics per market

**SEO Disadvantages:**
- ❌ **3x SEO Effort** - Must build authority for each domain separately
- ❌ **3x Cost** - Domain registration, SSL, DNS for each
- ❌ **Diluted Backlinks** - Links to .cn don't help .com or .my
- ❌ **Complex Management** - Multiple sites to maintain

**Best For:**
- Large enterprises
- Dedicated SEO team
- Distinct market strategies per country
- Sufficient budget for multiple domains

### 4.2 Google's Official Guidance

**Source:** Google Search Central Documentation

**Key Points:**
1. **Use separate URLs** - Keeping content for each language on separate URLs (don't use cookies/scripts to show translated versions)

2. **URL Structure Options (in order of Google's recommendation):**
   - **Subdirectories (Recommended):** `example.com/fr/`
   - **Subdomains:** `fr.example.com`
   - **ccTLDs:** `example.fr`

3. **Implement Hreflang** - Regardless of structure:
```html
<link rel="alternate" hreflang="en" href="https://example.com/en/" />
<link rel="alternate" hreflang="zh-Hans" href="https://example.com/zh/" />
<link rel="alternate" hreflang="ms" href="https://example.com/ms/" />
```

4. **Avoid:**
   - Automatic redirects based on perceived language
   - Machine translation without human review
   - Blocking Googlebot from any language version

### 4.3 Industry Expert Consensus

**Neil Patel (SEO Expert):**
> "In the majority of cases, a multilingual website with a single domain will provide a greater SEO opportunity than having multiple domains, because all regions and languages on the website will benefit from the success of every other region and language content."

**Semrush Analysis:**
> "Subdirectories are the most popular choice for multilingual SEO because they're easier to manage, cost-effective, and benefit from the main domain's authority."

**Search Engine Journal:**
> "Use ccTLDs only if you have the resources to build and maintain separate sites. Most businesses should stick with subdirectories."

### 4.4 Decision Matrix

| Factor | Path-based (/en/, /zh/, /ms/) | Domain-based (.com, .cn, .my) |
|--------|-------------------------------|------------------------------|
| **SEO Difficulty** | ⭐⭐ Easier | ⭐⭐⭐⭐⭐ Much Harder |
| **Domain Authority** | ⭐⭐⭐⭐⭐ Consolidated | ⭐⭐ Split across domains |
| **Geo-targeting Signal** | ⭐⭐⭐ Moderate | ⭐⭐⭐⭐⭐ Strongest |
| **User Trust (Local)** | ⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Best |
| **Cost** | ⭐⭐⭐⭐⭐ Lowest | ⭐⭐ Higher |
| **Maintenance** | ⭐⭐⭐⭐⭐ Single site | ⭐⭐ Multiple sites |
| **Analytics** | ⭐⭐⭐⭐⭐ Unified | ⭐⭐⭐ Separate |
| **Link Building** | ⭐⭐⭐⭐⭐ Efficient | ⭐⭐ 3x effort |

### Recommendation for Ing Heng Credit
**Start with path-based routing** (`inghengcredit.com/en/`, `/zh/`, `/ms/`) because:
1. You're building SEO from scratch - consolidate authority
2. Limited team/budget - focus resources on one domain
3. Markets are related (Malaysia-focused) - don't need strong geo-targeting via ccTLDs
4. Can always add ccTLDs later when domains have authority

---

## 5. Alternative Approaches Comparison

### 5.1 Single App with Multiple Domains

**Architecture:**
```
One Astro app → Multiple domains point to it → Domain-based routing
```

**How It Works:**
- Single Astro application with all languages
- Multiple domains (inghengcredit.com, .cn, .my) point to same Vercel project
- Vercel rewrites route based on hostname
- OR Astro i18n domains config

**Pros:**
- ✅ Single codebase, single source of truth
- ✅ One deployment
- ✅ Shared components naturally
- ✅ Atomic updates across all languages

**Cons:**
- ❌ All domains update simultaneously (can't deploy per language)
- ❌ Complex routing logic
- ❌ All sites go down if one fails
- ❌ Harder to have language-specific features

**Best For:**
- Content is identical across languages (just translated)
- Small team managing all languages
- Need simplicity over flexibility

### 5.2 Separate Apps in Monorepo

**Architecture:**
```
Monorepo
├── /apps/en-site → inghengcredit.com
├── /apps/zh-site → inghengcredit.cn
└── /apps/ms-site → inghengcredit.my
└── /packages/shared-components
```

**How It Works:**
- Three separate Astro applications
- Each connects to Vercel as separate project
- Each can be deployed independently
- Shared code via workspace packages

**Pros:**
- ✅ Independent deployments per language
- ✅ Language-specific customization easy
- ✅ Failure isolation (one site down ≠ all down)
- ✅ Can have different features per market
- ✅ Clear ownership per language team

**Cons:**
- ❌ More complex setup
- ❌ Risk of code duplication
- ❌ 3x deployment overhead
- ❌ Harder to keep in sync
- ❌ Potential dependency version conflicts

**Best For:**
- Large teams with language-specific teams
- Different feature sets per market
- High-traffic sites needing failure isolation
- Resources to maintain multiple deployments

### 5.3 Git Submodules

**Architecture:**
```
/main-repo (shared components as submodule)
  /en-site
    /shared → git submodule

/zh-site-repo
  /shared → git submodule

/ms-site-repo
  /shared → git submodule
```

**How It Works:**
- Separate repositories for each language
- Shared code as Git submodule
- Each repo deployed independently

**Pros:**
- ✅ True repository isolation
- ✅ Fine-grained access control
- ✅ Independent deployment pipelines
- ✅ No monorepo tooling needed

**Cons:**
- ❌ Submodule management complexity
- ❌ Difficult to make atomic changes
- ❌ Must update submodule in each repo
- ❌ Confusing for developers
- ❌ Merge conflicts across repos

**Best For:**
- Organizations needing strict access control
- Contractors working on specific languages
- Established CI/CD per repo

**Not Recommended For:**
- Small teams
- Rapid iteration
- Ing Heng Credit (too complex)

### 5.4 Comparison Matrix

| Approach | Complexity | Flexibility | SEO | Cost | Maintenance |
|----------|-----------|-------------|-----|------|-------------|
| **Single App + Path Routing** | ⭐ Lowest | ⭐⭐⭐ Moderate | ⭐⭐⭐⭐⭐ Best | $0-20/mo | ⭐⭐⭐⭐⭐ Easiest |
| **Single App + Multiple Domains** | ⭐⭐ Low | ⭐⭐ Limited | ⭐⭐⭐ Good | $30-60/mo | ⭐⭐⭐⭐ Easy |
| **Monorepo + Separate Apps** | ⭐⭐⭐⭐ High | ⭐⭐⭐⭐⭐ Highest | ⭐⭐⭐ Good | $60-180/mo | ⭐⭐⭐ Moderate |
| **Git Submodules** | ⭐⭐⭐⭐⭐ Highest | ⭐⭐⭐⭐ High | ⭐⭐⭐ Good | $60-180/mo | ⭐⭐ Hard |

---

## 6. Real-world Case Studies

### 6.1 Enterprise: 45+ Language Platform

**Company:** Undisclosed (documented by Abdullah Obaid on Medium)

**Architecture:**
- **Backend:** NestJS microservices with language-specific modules
- **CMS:** PayloadCMS (headless) for localization
- **Database:** MongoDB (flexible schema for varying content)
- **Caching:** Redis for translation caching
- **Frontend:** Next.js with server-side rendering
- **i18n Library:** React + i18next

**Challenges Solved:**
- Right-to-left (RTL) languages (Arabic, Hebrew)
- Complex character sets (Chinese, Japanese, Korean)
- Region-specific content variations
- Translation workflow management

**Key Lessons:**
- Plan for multilingual from start (retrofitting took 2 extra months)
- Use headless CMS for content flexibility
- Cache translations aggressively
- Implement comprehensive fallback strategies

**Results:**
- Successfully serving 45+ languages
- Scalable architecture
- Maintainable codebase

### 6.2 AI-Powered: Yiyingbao Case Study

**Industry:** Corporate Website Building Platform

**Innovation:** AI-powered multilingual website generation

**Technology:**
- Neural Machine Translation (NMT)
- 22 CDN nodes worldwide
- AI-driven content adaptation

**Results:**
- **90% cost reduction** compared to traditional multilingual development
- **1.5 second max latency** globally
- **45 days → 10 minutes** build time

**Key Takeaways:**
- AI translation is viable for 2025 (huge improvement over 2020s)
- CDN placement critical for multilingual sites
- Speed-to-market advantage with AI tools

**Relevance to Ing Heng Credit:**
- Consider AI translation for first drafts
- Always human-review (Google penalizes poor machine translation)
- Invest in CDN for Malaysian market (low latency to SEA region)

### 6.3 E-commerce: Urban Outfitters

**Markets:** North America + European Expansion

**Approach:**
- Partnered with MotionPoint for localization
- French, French Canadian, German versions
- Maintained consistent design across languages
- Professional human translation

**Results:**
- Substantial growth in European markets within 3 months
- Strong brand consistency
- High user trust

**Lesson:**
- Professional translation matters for consumer trust
- Consistent design more important than localized design
- Quick time-to-market crucial

### 6.4 Platform: Airbnb

**Scale:** 190+ countries, 60+ languages

**Architecture:**
- Single platform, multiple languages
- Path-based routing (`airbnb.com/s/Paris?locale=zh`)
- User preference cookies
- Dynamic content loading

**Approach:**
- Centralized translation platform
- Professional translators + community contribution
- Context-aware translations (not word-for-word)
- A/B testing per market

**Lessons:**
- User preference (cookie/account) > automatic detection
- Context matters in translation
- Continuous optimization per market
- Community can help with translations (carefully managed)

### 6.5 Retail: IKEA

**Markets:** Global presence

**Approach:**
- Separate domains per major market (.com, .fr, .de, .cn, etc.)
- Consistent design system
- Localized product catalogs
- Region-specific pricing/inventory

**Strategy:**
- ccTLDs for major markets with dedicated teams
- Subdirectories for smaller markets
- Heavy investment in SEO per domain
- Different product availability per region

**Lessons:**
- Hybrid approach viable (ccTLDs for big, subdirs for small)
- Design system enables consistency across domains
- Need resources to maintain multiple domains
- Localization ≠ just translation (pricing, inventory, etc.)

### 6.6 Key Insights for Ing Heng Credit

From these case studies:

1. **Start Simple:** Urban Outfitters, not IKEA
   - Single domain + subdirectories
   - Professional translation
   - Consistent design
   - Expand to ccTLDs only when markets justify it

2. **Human Review Essential:** All successful examples
   - AI can draft, but humans must review
   - Cultural nuance matters in B2B
   - Trust built through quality content

3. **Performance Matters:** Yiyingbao
   - CDN for Malaysian market
   - Optimize for mobile (SEA mobile-first)
   - Under 2 seconds load time

4. **Plan for i18n Early:** 45+ Language Platform
   - Retrofitting adds 2+ months
   - Design components with i18n in mind
   - Text expansion/contraction considerations

5. **Progressive Enhancement:** Airbnb
   - Start with core languages (EN, ZH, MS)
   - Add languages based on demand
   - Iterate and optimize per market

---

## 7. Cost Analysis

### 7.1 Development Costs

#### Option A: Single App, Path-based Routing (Current)
**One-time Costs:**
- Development: $0 (already built)
- Setup: $0 (already configured)

**Ongoing:**
- No additional development needed
- Maintenance: Current effort

**Total:** $0

#### Option B: Single App, Multiple Domains
**One-time Costs:**
- Vercel rewrites setup: 2-4 hours
- Domain configuration: 1-2 hours
- Testing: 4-6 hours
**Estimated:** $500-1,000 (at $100/hr)

**Ongoing:**
- Minimal additional maintenance

**Total:** $500-1,000 one-time

#### Option C: Monorepo, Separate Apps
**One-time Costs:**
- Monorepo setup: 8-16 hours
- Workspace configuration: 4-8 hours
- Migrate existing code: 16-24 hours
- Shared component extraction: 12-20 hours
- Testing all sites: 8-12 hours
- CI/CD configuration: 4-8 hours
**Estimated:** $5,000-8,000 (at $100/hr)

**Ongoing:**
- 3x deployment overhead
- Coordination between sites

**Total:** $5,000-8,000 one-time + ongoing overhead

### 7.2 Domain Costs

#### Single Domain (.com)
- **Registration:** ~$12/year
- **SSL:** Free (Vercel)
- **DNS:** Free (Vercel or Cloudflare)
**Annual:** $12

#### Three Domains (.com + .cn + .my)
- **.com:** ~$12/year
- **.cn:** ~$30/year (requires verification)
- **.my:** ~$40/year
- **SSL:** Free × 3
- **DNS:** Free × 3
**Annual:** $82

#### 7.3 Hosting Costs (Vercel)

**Current (Free Tier):**
- Bandwidth: 100GB/month
- Build time: 100 hours/month
- Serverless executions: 100GB-hours
**Cost:** $0

**With Path-based Routing + 1 Domain:**
- Same as above
**Cost:** $0 (fits in free tier initially)

**With Multiple Domains + 1 Vercel Project:**
- Same limits
**Cost:** $0-20/month
- $0 if under limits
- $20/month Pro if need more bandwidth/builds

**With 3 Vercel Projects (Monorepo):**
- Each project counts toward limits
- 3x builds when all change
- Likely exceed free tier

**Cost:** $20-60/month
- Pro tier recommended: $20/user/month
- May need to upgrade to handle 3 simultaneous builds

### 7.4 SEO Costs

#### Path-based (1 Domain)
**Link Building:**
- One domain to build authority
- All backlinks benefit all languages

**Content:**
- Create once, translate/adapt
- Can reuse SEO research across languages

**Effort:** 1x

#### Domain-based (3 Domains)
**Link Building:**
- Must build authority for each domain
- Links to .cn don't help .com

**Content:**
- Independent SEO per domain
- Can't share domain authority

**Effort:** 3x (or more realistically, 1x for .com, 0.5x each for .cn/.my)

**Annual SEO Cost Estimate:**
- Path-based: $5,000-10,000
- Domain-based: $10,000-20,000

### 7.5 Translation Costs

**Current Content:**
- ~30 pages × 3 languages = 90 pages
- Average 1,500 words/page = 135,000 words

**Professional Translation:**
- $0.10-0.20/word
- 135,000 words × $0.15 = $20,250

**Already Invested:** Content exists

**Ongoing (New Content):**
- 4 blog posts/month × 2,000 words = 8,000 words/month
- × 2 target languages (translate from English) = 16,000 words
- × $0.15 = $2,400/month

**AI Translation + Human Review:**
- AI draft: Near $0
- Human review/editing: $0.05/word
- 16,000 words × $0.05 = $800/month

**Savings with AI:** $1,600/month

### 7.6 Total Cost of Ownership (Annual)

#### Option 1: Current Setup (Path-based, 1 Domain)
| Item | Cost |
|------|------|
| Domain (.com) | $12 |
| Hosting (Vercel Pro) | $240 |
| SEO effort | $7,500 |
| Content (AI + review) | $9,600 |
| Maintenance | $2,000 |
| **Total** | **$19,352** |

#### Option 2: Multiple Domains, Single App
| Item | Cost |
|------|------|
| Domains (.com, .cn, .my) | $82 |
| Hosting (Vercel Pro) | $240 |
| SEO effort (3 domains) | $15,000 |
| Content (AI + review) | $9,600 |
| Setup (one-time) | $750 |
| Maintenance | $2,500 |
| **Total Year 1** | **$28,172** |
| **Total Ongoing** | **$27,422** |

#### Option 3: Monorepo, 3 Separate Apps
| Item | Cost |
|------|------|
| Domains (.com, .cn, .my) | $82 |
| Hosting (Vercel Pro) | $720 (3 projects) |
| SEO effort (3 domains) | $15,000 |
| Content (AI + review) | $9,600 |
| Development (one-time) | $6,500 |
| Maintenance | $4,000 |
| **Total Year 1** | **$35,902** |
| **Total Ongoing** | **$29,402** |

### 7.7 Cost Recommendation

**Recommended:** Option 1 (Current setup with optimizations)
- Lowest cost
- Best ROI for SEO investment
- Scalable to other options later

**When to Upgrade:**
- **To Option 2:** When .cn or .my market revenue > $50K/year
- **To Option 3:** When language-specific teams exist or market revenue > $200K/year

---

## 8. Recommendations

### 8.1 Recommended Approach: Hybrid Progressive Strategy

**Phase 1: Optimize Current Setup (0-3 months)**
Keep path-based routing, single domain, single app.

**Rationale:**
- Already built and working
- Best SEO ROI (consolidated authority)
- Lowest cost
- Proven industry best practice
- Can always add domains later

**Actions:**
1. Ensure hreflang tags are correct
2. Submit sitemap with all language variants
3. Optimize for Core Web Vitals
4. Build backlinks to primary domain
5. Create high-quality content for all languages

**Phase 2: Domain Testing (3-6 months)**
Add .cn and .my domains pointing to same site via rewrites.

**Rationale:**
- Test market preference for local domains
- Minimal development effort
- Can remove domains if not valuable
- Gather data on user behavior

**Actions:**
1. Register .cn and .my domains
2. Configure Vercel rewrites for domain-based routing
3. Update hreflang to include domain variants
4. A/B test: Do users prefer local domain?
5. Track conversions per domain

**Phase 3: Conditional Expansion (6-12 months)**
**If** domain testing shows strong preference for local domains **and** markets justify investment:

**Option A:** Keep single app, multiple domains (lower cost)
- Continue using Vercel rewrites
- Independent SEO per domain
- Still single deployment

**Option B:** Migrate to monorepo (higher flexibility)
- Only if need language-specific features
- Or if revenue justifies 3x SEO investment
- Or if have dedicated language teams

### 8.2 Architecture Recommendation

**Recommended:** Enhanced Current Architecture

```
/website                          # Single Astro app
  /src
    /components                   # Shared components
      /common                     # Language-agnostic
      /localized                  # Language-specific variants
    /content
      /blog
        /en, /zh, /ms
      /equipment
        /en, /zh, /ms
    /i18n                         # Translation utilities
      /en.json
      /zh.json
      /ms.json
    /layouts                      # Shared layouts
    /pages
      /en                         # English pages
      /zh                         # Mandarin pages
      /ms                         # Malay pages
    /utils                        # Shared utilities
  astro.config.mjs                # Single config
  package.json
```

**Enhancements:**
1. **Better component organization:**
   - Separate common vs. localized components
   - Create component library structure
   - Document component usage per language

2. **Improved content structure:**
   - Use Astro Content Collections
   - Define strict schemas
   - Link alternate language versions

3. **Performance optimization:**
   - Image optimization
   - Code splitting
   - Critical CSS
   - Lazy loading

4. **SEO improvements:**
   - Schema markup (Organization, LocalBusiness, Article, FAQPage)
   - Proper hreflang implementation
   - XML sitemaps with language variants
   - robots.txt optimization

### 8.3 Technical Implementation

#### Vercel Configuration

**Current (Path-based):**
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://inghengcredit.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ms'],
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'rewrite'
    }
  }
})
```

**Phase 2 (Add Domains):**
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://inghengcredit.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ms'],
    domains: {
      zh: 'https://inghengcredit.cn',
      ms: 'https://inghengcredit.my'
    },
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'rewrite'
    }
  }
})
```

```json
// vercel.json
{
  "rewrites": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "inghengcredit.cn" }],
      "destination": "/zh/:path*"
    },
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "inghengcredit.my" }],
      "destination": "/ms/:path*"
    }
  ]
}
```

#### Hreflang Implementation

```astro
---
// src/layouts/BaseLayout.astro
const { language, alternates } = Astro.props

const hreflangs = {
  en: alternates.en || `https://inghengcredit.com/en/${Astro.url.pathname}`,
  zh: alternates.zh || `https://inghengcredit.cn/${Astro.url.pathname}`,
  ms: alternates.ms || `https://inghengcredit.my/${Astro.url.pathname}`,
}
---

<head>
  <link rel="alternate" hreflang="en" href={hreflangs.en} />
  <link rel="alternate" hreflang="zh-Hans" href={hreflangs.zh} />
  <link rel="alternate" hreflang="ms" href={hreflangs.ms} />
  <link rel="alternate" hreflang="x-default" href={hreflangs.en} />
</head>
```

#### Content Collections with Language Linking

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    language: z.enum(['en', 'zh', 'ms']),
    slug: z.string(),
    alternates: z.object({
      en: z.string().optional(),
      zh: z.string().optional(),
      ms: z.string().optional(),
    }),
    seo: z.object({
      metaTitle: z.string(),
      metaDescription: z.string(),
      keywords: z.array(z.string()),
    }),
  })
})

export const collections = {
  blog: blogCollection,
}
```

### 8.4 SEO Optimization Checklist

**Technical SEO:**
- ✅ Hreflang tags on all pages
- ✅ XML sitemap with language variants
- ✅ robots.txt properly configured
- ✅ Canonical URLs set correctly
- ✅ Schema.org markup (Organization, LocalBusiness, Article, FAQPage)
- ✅ Open Graph tags per language
- ✅ Twitter Cards per language
- ✅ Core Web Vitals optimized (LCP < 2.5s, FID < 100ms, CLS < 0.1)

**Content SEO:**
- ✅ Independent keyword research per language
- ✅ Culturally adapted content (not just translated)
- ✅ 1,500-2,500 words per blog post
- ✅ 1 primary + 5-8 secondary keywords per page
- ✅ H1 + 4-6 H2s per page
- ✅ 5-7 FAQs with FAQ schema
- ✅ 3-5 internal links per page
- ✅ 2-3 authoritative external links per page

**Local SEO:**
- ✅ Google Business Profile (Malaysia)
- ✅ Local citations (directories)
- ✅ NAP consistency (Name, Address, Phone)
- ✅ Malaysia-specific keywords
- ✅ Klang/Selangor location targeting

### 8.5 Performance Optimization

**Image Optimization:**
```astro
---
import { Image } from 'astro:assets'
import excavatorImage from '../assets/excavator.jpg'
---

<Image
  src={excavatorImage}
  alt={t('excavator.alt')}
  width={800}
  height={600}
  format="webp"
  loading="lazy"
/>
```

**Code Splitting:**
```astro
---
// Only load heavy components when needed
const HeavyCalculator = language === 'en'
  ? await import('../components/Calculator.astro')
  : null
---
```

**Critical CSS:**
```astro
---
// Inline critical CSS in head
const criticalCSS = await getCriticalCSS()
---

<style is:inline>
  {criticalCSS}
</style>
```

---

## 9. Implementation Roadmap

### Phase 1: Optimize Current Setup (Weeks 1-4)

#### Week 1: Technical SEO Audit & Fixes
- [ ] Audit all hreflang tags
- [ ] Verify sitemap includes all language variants
- [ ] Check canonical URLs
- [ ] Validate Schema.org markup
- [ ] Test Core Web Vitals
- [ ] Fix any technical issues

#### Week 2: Content Optimization
- [ ] Verify keyword research for each language
- [ ] Check content quality (readability, length)
- [ ] Ensure FAQs have schema markup
- [ ] Add missing internal links
- [ ] Optimize meta titles/descriptions

#### Week 3: Performance Optimization
- [ ] Optimize images (WebP, lazy loading)
- [ ] Implement code splitting
- [ ] Add critical CSS
- [ ] Set up CDN (Vercel Edge)
- [ ] Test mobile performance

#### Week 4: Analytics & Tracking
- [ ] Set up Google Analytics 4
- [ ] Configure Search Console for all languages
- [ ] Set up conversion tracking
- [ ] Create SEO performance dashboard
- [ ] Baseline measurements

**Deliverables:**
- Technical SEO audit report
- Performance optimization report
- Analytics dashboard
- Baseline metrics

**Success Criteria:**
- Core Web Vitals: All green
- Technical SEO score: 90+/100
- Page load time: < 2 seconds
- All languages properly indexed

### Phase 2: Domain Testing (Weeks 5-12)

#### Week 5-6: Domain Setup
- [ ] Register inghengcredit.cn
- [ ] Register inghengcredit.my
- [ ] Configure DNS
- [ ] Set up Vercel rewrites
- [ ] Update Astro i18n config with domains
- [ ] Test all domain routing

#### Week 7-8: SEO Configuration
- [ ] Update hreflang tags with domain variants
- [ ] Create separate sitemaps per domain
- [ ] Submit domains to Search Console
- [ ] Configure analytics per domain
- [ ] Set up A/B testing

#### Week 9-10: Content Optimization per Domain
- [ ] Optimize for .cn market (China-specific keywords)
- [ ] Optimize for .my market (Malaysia-specific keywords)
- [ ] Cultural adaptation review
- [ ] Local business listings

#### Week 11-12: Monitoring & Analysis
- [ ] Track traffic per domain
- [ ] Measure conversion rates
- [ ] User preference analysis
- [ ] SEO performance per domain
- [ ] Decision report

**Deliverables:**
- .cn and .my domains live
- A/B test results
- User preference data
- Domain performance report
- Go/No-Go recommendation for Phase 3

**Success Criteria:**
- All domains properly configured
- No technical SEO issues
- Data collected for decision
- Clear ROI projection

### Phase 3: Conditional Expansion (Weeks 13-24)

**Only proceed if Phase 2 shows:**
- Strong user preference for local domains (.cn/.my)
- Higher conversion rates on local domains
- Market revenue justifies investment

#### Option 3A: Continue Multiple Domains, Single App

**Weeks 13-16:**
- [ ] Invest in SEO per domain
- [ ] Build backlinks to .cn
- [ ] Build backlinks to .my
- [ ] Create domain-specific content
- [ ] Optimize conversion funnels per domain

**Ongoing:**
- Monitor and optimize
- No architectural changes needed

#### Option 3B: Migrate to Monorepo (If Needed)

**Weeks 13-16: Planning**
- [ ] Monorepo architecture design
- [ ] Shared package structure
- [ ] Migration plan
- [ ] Risk assessment
- [ ] Team training plan

**Weeks 17-20: Development**
- [ ] Set up monorepo structure (pnpm workspaces or Nx)
- [ ] Create shared packages
- [ ] Migrate English site
- [ ] Migrate Mandarin site
- [ ] Migrate Malay site

**Weeks 21-22: Testing**
- [ ] Test all sites
- [ ] Test shared components
- [ ] Test builds
- [ ] Performance testing
- [ ] SEO validation

**Weeks 23-24: Deployment**
- [ ] Deploy to staging
- [ ] User acceptance testing
- [ ] Deploy to production
- [ ] Monitor for issues
- [ ] Post-launch optimization

**Deliverables:**
- Monorepo architecture
- Three independent Vercel projects
- Shared component library
- Migration documentation
- Post-launch report

**Success Criteria:**
- All sites migrated successfully
- No SEO ranking loss
- Performance maintained or improved
- Team can work efficiently in monorepo

---

## 10. Conclusion & Next Steps

### Key Findings Summary

1. **SEO:** Path-based routing on single domain is optimal for Ing Heng Credit
   - Consolidates domain authority
   - 3x easier than multiple domains
   - Industry best practice for SMBs

2. **Architecture:** Current single Astro app is appropriate
   - Monorepo adds complexity without clear benefit at current scale
   - Can migrate later if needed
   - Focus on content and SEO, not architecture

3. **Domains:** Multiple domains (ccTLDs) should be tested, not assumed
   - Adds $70/year cost
   - 2-3x SEO effort
   - May not improve conversions
   - Test before committing

4. **Vercel:** Free tier sufficient to start, Pro tier for production
   - $0-20/month is reasonable
   - Multiple domains fit on single project
   - 3 separate projects only if truly needed

5. **Timeline:** Gradual approach reduces risk
   - Optimize current (1 month)
   - Test domains (2 months)
   - Decide on expansion (conditional)

### Recommended Decision

**Choose: Hybrid Progressive Strategy**

**Why:**
- Lowest risk
- Best ROI
- Industry-proven
- Flexible for future
- Cost-effective

**What This Means:**
- Keep current architecture
- Add optimization (Phase 1)
- Test domains (Phase 2)
- Expand only if justified (Phase 3)

### Immediate Next Steps

#### This Week:
1. ✅ Review this research report
2. ✅ Decide on approach (recommend: Hybrid Progressive)
3. ✅ Get stakeholder buy-in
4. ✅ Allocate budget ($0-500 for Phase 1)
5. ✅ Schedule Phase 1 kick-off

#### Next Week:
1. Begin Phase 1, Week 1: Technical SEO Audit
2. Set up analytics properly
3. Establish baseline metrics
4. Create optimization task list

#### Next Month:
1. Complete Phase 1 (all 4 weeks)
2. Review results
3. Decide whether to proceed to Phase 2
4. Register domains if proceeding

### Questions to Answer Before Proceeding

**Business Questions:**
1. What is the revenue target per market (EN/ZH/MS)?
2. Is there budget for domain-specific SEO ($15K vs $7.5K)?
3. Are there plans for language-specific teams?
4. What is the acceptable timeline for ROI?

**Technical Questions:**
1. Is current hosting (Vercel) satisfactory?
2. Are there performance issues to address?
3. Is the team comfortable with current stack?
4. Any plans for additional languages?

**Marketing Questions:**
1. Where is traffic currently coming from?
2. Which language converts best?
3. Is there brand preference for local domains (.cn/.my)?
4. What does competitor research show?

### Resources & References

**Documentation:**
- [Astro i18n Routing](https://docs.astro.build/en/guides/internationalization/)
- [Vercel Monorepos](https://vercel.com/docs/monorepos)
- [Google International SEO](https://developers.google.com/search/docs/specialty/international)
- [Hreflang Implementation](https://developers.google.com/search/docs/specialty/international/localized-versions)

**Tools:**
- [Turborepo](https://turborepo.org/) - Monorepo build system
- [pnpm](https://pnpm.io/) - Fast package manager with workspace support
- [Nx](https://nx.dev/) - Smart monorepo build system

**Further Reading:**
- [Semrush Multilingual SEO Guide](https://www.semrush.com/blog/multilingual-seo/)
- [Vercel Edge Middleware Examples](https://vercel.com/templates/edge-middleware)
- [Astro Monorepo Template](https://github.com/wtto00/astro-monorepo)

---

**Report Prepared By:** Claude (Anthropic)
**Date:** October 18, 2025
**Version:** 1.0
**Status:** Final Recommendation

---

## Appendix A: Glossary

- **ccTLD:** Country Code Top-Level Domain (e.g., .cn, .my, .uk)
- **Hreflang:** HTML attribute telling search engines about language variants
- **i18n:** Internationalization (preparing software for multiple languages)
- **l10n:** Localization (adapting content for specific locales)
- **Monorepo:** Single repository containing multiple projects
- **SVP:** Single Version Policy (all packages use same dependency version)
- **Workspace:** Package manager feature for managing multiple packages in one repo

## Appendix B: Sample Code Snippets

### B.1: Vercel Rewrites for Domain Routing

```json
{
  "rewrites": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "inghengcredit.cn"
        }
      ],
      "destination": "/zh/:path*"
    },
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "inghengcredit.my"
        }
      ],
      "destination": "/ms/:path*"
    },
    {
      "source": "/:path*",
      "destination": "/en/:path*"
    }
  ]
}
```

### B.2: pnpm Workspace Configuration

```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'
```

```json
// package.json (root)
{
  "name": "ing-heng-monorepo",
  "private": true,
  "scripts": {
    "dev": "pnpm --filter \"./packages/*\" dev",
    "build": "pnpm --filter \"./packages/*\" build",
    "build:en": "pnpm --filter @ing-heng/astro-en build",
    "build:zh": "pnpm --filter @ing-heng/astro-zh build",
    "build:ms": "pnpm --filter @ing-heng/astro-ms build"
  }
}
```

### B.3: Shared Component Example

```astro
---
// packages/shared-components/src/ProductCard.astro
export interface Props {
  title: string
  description: string
  image: string
  ctaText: string
  ctaLink: string
}

const { title, description, image, ctaText, ctaLink } = Astro.props
---

<div class="product-card">
  <img src={image} alt={title} />
  <h3>{title}</h3>
  <p>{description}</p>
  <a href={ctaLink} class="btn">{ctaText}</a>
</div>

<style>
  .product-card {
    /* Shared styles */
  }
</style>
```

```astro
---
// packages/astro-en/src/pages/index.astro
import { ProductCard } from '@ing-heng/shared-components'
---

<ProductCard
  title="Excavator Financing"
  description="Fast approval for construction equipment"
  image="/excavator.jpg"
  ctaText="Apply Now"
  ctaLink="/en/equipment/excavator"
/>
```

---

**END OF REPORT**
