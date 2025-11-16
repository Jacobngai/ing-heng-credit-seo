# [CLIENT_NAME] - Project Configuration

**Last Updated:** [AUTO_DATE]
**Status:** [ONBOARDING / ACTIVE / PAUSED]

---

## 🏢 Business Context

- **Client Name:** [BUSINESS_NAME]
- **Industry:** [INDUSTRY_TYPE]
- **Target Audience:** [PRIMARY_PERSONAS]
- **Languages:** [EN / MS / ZH]
- **Founded:** [YEAR]
- **Location:** [CITY, COUNTRY]
- **Team Size:** [NUMBER] employees

**Value Proposition:**
[ONE_LINE_DESCRIPTION]

**Primary Services/Products:**
- [SERVICE_1]
- [SERVICE_2]
- [SERVICE_3]

---

## 🎨 Brand Identity

**Selected Design:** Option [NUMBER] - [DESIGN_NAME]

**Color Palette:**
- Primary: `#[HEX_PRIMARY]`
- Accent: `#[HEX_ACCENT]`
- Dark: `#[HEX_DARK]`
- Background: `#[HEX_BACKGROUND]`

**Typography:**
- Heading Font: [FONT_NAME]
- Body Font: [FONT_NAME]
- Code Font: [FONT_NAME] (if applicable)

**Design System:**
- Button Style: [pill / brutal / rounded / square]
- Border Radius: [full / lg / none]
- Shadow Style: [brutal / soft / none]
- Spacing: [tight / normal / relaxed]

---

## 📞 Contact Information

- **Phone:** [PHONE_NUMBER]
- **Email:** [EMAIL_ADDRESS]
- **WhatsApp:** [WHATSAPP_NUMBER]
- **Address:** [FULL_ADDRESS]
- **Operating Hours:** [HOURS]

**Social Media:**
- LinkedIn: [URL]
- Facebook: [URL]
- Instagram: [URL]
- Twitter/X: [URL]

---

## 🚀 Deployment Configuration

### Vercel Project IDs

**Note:** Fill in after running Command ⑬ /13-deploy-multilang

- **EN Project ID:** `prj_[TO_BE_FILLED]`
  - Domain: [www.clientdomain.com]
  - Default Locale: `en`

- **MS Project ID:** `prj_[TO_BE_FILLED]`
  - Domain: [www.clientdomain.my]
  - Default Locale: `ms`

- **ZH Project ID:** `prj_[TO_BE_FILLED]`
  - Domain: [www.clientdomain.cn]
  - Default Locale: `zh`

- **Team/Org ID:** `team_[TO_BE_FILLED]`

### Environment Variables

**All 3 deployments require:**
```bash
PUBLIC_SITE_URL=[domain]
PUBLIC_DEFAULT_LOCALE=[en|ms|zh]
DEFAULT_LOCALE=[en|ms|zh]
SITE_URL=[domain]
GOOGLE_ANALYTICS_ID=[GA_ID]
WHATSAPP_NUMBER=[NUMBER]
```

### Deployment Commands

```bash
# DEPLOY ENGLISH (EN)
echo '{"projectId":"prj_[EN_PROJECT_ID]","orgId":"team_[TEAM_ID]"}' > clients/[client-name]/website/.vercel/project.json

cd clients/[client-name]/website
vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=en \
  --env DEFAULT_LOCALE=en \
  --env PUBLIC_SITE_URL=https://[EN_DOMAIN] \
  --env SITE_URL=https://[EN_DOMAIN]

# DEPLOY MALAY (MS)
echo '{"projectId":"prj_[MS_PROJECT_ID]","orgId":"team_[TEAM_ID]"}' > .vercel/project.json

vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=ms \
  --env DEFAULT_LOCALE=ms \
  --env PUBLIC_SITE_URL=https://[MS_DOMAIN] \
  --env SITE_URL=https://[MS_DOMAIN]

# DEPLOY CHINESE (ZH)
echo '{"projectId":"prj_[ZH_PROJECT_ID]","orgId":"team_[TEAM_ID]"}' > .vercel/project.json

vercel --prod --yes \
  --env PUBLIC_DEFAULT_LOCALE=zh \
  --env DEFAULT_LOCALE=zh \
  --env PUBLIC_SITE_URL=https://[ZH_DOMAIN] \
  --env SITE_URL=https://[ZH_DOMAIN]
```

---

## 👥 Team & Authors

**Founder/CEO:** [FOUNDER_NAME]
- Background: [BACKGROUND]
- Bio: [SHORT_BIO]

**Marketing Director:** [DIRECTOR_NAME]
- Bio: [SHORT_BIO]

**Other Team Members:**
- [NAME] - [ROLE]

**Author IDs for blog posts:**
- `[author-id-1]` - [Name]
- `[author-id-2]` - [Name]

---

## 📝 Content Guidelines

### Tone & Voice
- **Overall Tone:** [Professional / Friendly / Technical]
- **Reading Level:** 5th grade (Flesch-Kincaid 5-6)
- **POV:** [First person / Third person]
- **Formality:** [Formal / Conversational / Casual]

### Writing Rules
✅ **DO:**
- Use short sentences (10-15 words)
- Use simple words (avoid jargon)
- Use active voice
- Explain technical terms
- Use bullet points for lists

❌ **DON'T:**
- Use Lorem Ipsum or placeholders
- Make unverifiable claims (traffic, rankings, client counts)
- Use complex vocabulary
- Write passive sentences
- Use industry jargon without explanation

### Technical Terms Policy
**Keep in English:**
- SEO, AI, ChatGPT, URL, API
- [Add more as needed]

**Translate:**
- General business terms
- Service descriptions
- Benefits and features

---

## 🚫 Prohibited Claims

**NEVER include these without verification:**
- ❌ Client counts ("500+ clients")
- ❌ Traffic increases ("237% growth")
- ❌ Keyword rankings ("ranked for 2,000+ keywords")
- ❌ Client ratings ("4.9/5 stars")
- ❌ Fake testimonials with specific numbers
- ❌ Unverifiable case study statistics

**What you CAN say:**
- ✅ Service descriptions (what we do)
- ✅ Methodology explanations (how we do it)
- ✅ Pricing (actual prices)
- ✅ Team credentials (verifiable)
- ✅ Technology used (Claude Code, Astro, etc.)

---

## 🔧 Technical Configuration

### Framework
- **Framework:** Astro 5.15+
- **Styling:** Tailwind CSS 3.4
- **Deployment:** Vercel
- **Package Manager:** npm

### Import Path Rules
```typescript
// Component imports
import Component from '@components/Component.astro';
import Layout from '@layouts/Layout.astro';
import { util } from '@utils/util.ts';

// Relative paths for same directory
import Component from './Component.astro';

// NO absolute paths to src/
❌ import Component from 'src/components/Component.astro';
✅ import Component from '@components/Component.astro';
```

### SEO Internal Linking Rules
- All internal links use relative paths
- Include language prefix: `/${lang}/page`
- Use hreflang tags for language alternates
- Canonical URLs point to default locale version

---

## 📊 Content Strategy Summary

**Primary Keywords:** [TOP_5_KEYWORDS]

**Content Pillars:**
1. [PILLAR_1]
2. [PILLAR_2]
3. [PILLAR_3]

**Publishing Frequency:**
- Posts per week: [NUMBER]
- EN posts: [NUMBER]/week
- MS posts: [NUMBER]/week
- ZH posts: [NUMBER]/week

**Hub Pages:**
- [HUB_TOPIC_1]
- [HUB_TOPIC_2]

---

## 🎯 SEO Targets

**Target Keywords (Top Priority):**
- [KEYWORD_1] - [Search Volume] - [Difficulty]
- [KEYWORD_2] - [Search Volume] - [Difficulty]
- [KEYWORD_3] - [Search Volume] - [Difficulty]

**Long-Tail Strategy:**
- Target: [NUMBER] long-tail keywords in first 90 days
- Focus: [TOPIC_AREA]

**Competitor Positioning:**
- Main competitor: [COMPETITOR_NAME]
- Differentiation: [HOW_WE_DIFFER]

---

## 📁 Project Structure

```
clients/[client-name]/
├── CLAUDE.md (this file)
├── onboarding/
├── content-strategy/
├── eeat-strategy/
├── brand-identity/
└── website/
    └── src/
        ├── components/
        ├── layouts/
        ├── pages/
        ├── i18n/
        └── utils/
```

---

## 🔄 Workflow Commands Used

**ONBOARD Phase (Completed):**
- [x] ① /1-research-business
- [x] ①b /1b-research-long-tail-keywords
- [x] ② /2-organize-by-intent
- [x] ③ /3-plan-authority
- [x] ④ /4-design-brand-options
- [x] ④b /4b-generate-website-scaffold

**BUILD Phase (In Progress):**
- [ ] ⑤ /5-build-author
- [ ] ⑥ /6-build-hub-page
- [ ] ⑦ /7-build-blog
- [ ] ⑧ /8-build-service-page

**REVIEW Phase (Pending):**
- [ ] ⑨ /9-review-seo
- [ ] ⑩ /10-review-eeat
- [ ] ⑪ /11-review-readability

**PUBLISH Phase (Pending):**
- [ ] ⑫ /12-translate-content
- [ ] ⑬ /13-deploy-multilang
- [ ] ⑭ /14-submit-search

---

## 📈 Performance Targets

**Month 1-3:**
- Target traffic: [NUMBER] monthly sessions
- Target keywords ranking: [NUMBER] in top 10
- Target leads: [NUMBER]/month

**Month 4-6:**
- Target traffic: [NUMBER] monthly sessions
- Target keywords ranking: [NUMBER] in top 10
- Target leads: [NUMBER]/month

**Month 7-12:**
- Target traffic: [NUMBER] monthly sessions
- Target keywords ranking: [NUMBER] in top 10
- Target leads: [NUMBER]/month

---

## 🚨 Critical Rules for This Client

### Content Rules
- Reading level: 5th grade
- No false claims
- Honest positioning as [new/established] agency
- Focus on [methodology/results/pricing]

### Technical Rules
- Multi-language deployment (3 separate domains)
- Environment variable-based configuration
- Never hardcode locale in code
- Sitemap filtered by DEFAULT_LOCALE

### Deployment Rules
- Manual deployments only (no GitHub auto-deploy)
- Update .vercel/project.json before each deployment
- Use environment variables for locale configuration
- Test build before deploying

---

**Template Version:** 1.0
**Created by:** SEO Workflow System
**Last Updated by Command:** [COMMAND_NUMBER]
