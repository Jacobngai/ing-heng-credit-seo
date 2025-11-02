# SEO Implementation Checklist for Ing Heng Credit & Leasing

## Project Overview
**Website:** https://ingheng-credit.vercel.app
**Tech Stack:** Astro 4.x, React, Tailwind CSS
**Languages:** English (EN), Mandarin Chinese (ZH), Bahasa Malaysia (MS)
**Target Market:** Malaysia
**Primary Keywords:** Equipment financing Malaysia, excavator financing, lorry financing, forklift financing

---

## 1. Technical SEO

### 1.1 Core Infrastructure
- [x] **Robots.txt configured** - Location: `/public/robots.txt`
- [x] **XML sitemap generated** - Astro sitemap integration enabled in `astro.config.mjs`
- [ ] **Canonical URLs on all pages** - TODO: Add to page templates
- [ ] **Hreflang tags (all 3 languages)** - TODO: Implement in BaseLayout.astro
- [ ] **301 redirects plan** - TODO: Create redirect configuration for Vercel
- [ ] **404 page created** - TODO: Design custom 404.astro page
- [ ] **Page speed optimization** - In progress (Astro is fast by default)
- [x] **Mobile-first design** - Using Tailwind responsive utilities
- [ ] **Core Web Vitals targets** - TODO: Test with PageSpeed Insights
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- [x] **SSL/HTTPS** - Enabled by default on Vercel

### 1.2 Performance Optimization
- [ ] **Image optimization**
  - [ ] Use Astro Image component for automatic optimization
  - [ ] Convert images to WebP format
  - [ ] Implement lazy loading for below-the-fold images
  - [ ] Add width and height attributes to prevent CLS
- [ ] **Font optimization**
  - [ ] Use `font-display: swap` for custom fonts
  - [ ] Preload critical fonts
  - [ ] Subset fonts to include only used characters
- [ ] **JavaScript optimization**
  - [ ] Code splitting enabled (Astro default)
  - [ ] Remove unused dependencies
  - [ ] Minimize third-party scripts
- [ ] **CSS optimization**
  - [ ] Purge unused Tailwind classes (production build)
  - [ ] Critical CSS inlining
  - [ ] Minimize external stylesheets

### 1.3 Crawlability & Indexing
- [x] **Robots.txt allows all pages**
- [ ] **XML sitemap submitted to Google Search Console**
- [ ] **XML sitemap submitted to Bing Webmaster Tools**
- [ ] **No orphan pages** - All pages linked from at least one other page
- [ ] **Clean URL structure** - `/en/equipment/excavator` (no query parameters)
- [ ] **No duplicate content** - Each language has unique, adapted content
- [ ] **Pagination implemented correctly** (if needed for blog listings)
- [ ] **Breadcrumb navigation** - TODO: Add to all pages

---

## 2. On-Page SEO

### 2.1 Meta Tags
- [ ] **Title tags** (50-60 characters, keyword-optimized)
  - [ ] English version
  - [ ] Mandarin version
  - [ ] Malay version
  - Format: `[Primary Keyword] | Ing Heng Credit`
- [ ] **Meta descriptions** (150-160 characters)
  - [ ] English version
  - [ ] Mandarin version
  - [ ] Malay version
  - Must include: Primary keyword, CTA, unique value proposition
- [ ] **Open Graph tags** (for social media sharing)
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image (1200x630px)
  - [ ] og:url
  - [ ] og:type
  - [ ] og:locale (en_MY, zh_Hans_MY, ms_MY)
- [ ] **Twitter Card tags**
  - [ ] twitter:card
  - [ ] twitter:title
  - [ ] twitter:description
  - [ ] twitter:image
- [ ] **Viewport meta tag** - Already configured in Astro

### 2.2 Heading Structure
- [ ] **H1 tags** - One per page, keyword-rich, unique
  - [ ] All EN pages have H1
  - [ ] All ZH pages have H1
  - [ ] All MS pages have H1
- [ ] **H2-H6 hierarchy** - Logical structure, no skipping levels
- [ ] **Keyword placement in headings** - Primary keyword in H1, secondary in H2s
- [ ] **Descriptive headings** - Clear, user-focused, not stuffed

### 2.3 Content Optimization
- [ ] **URL structure** - Clean, keyword-based, lowercase
  - Format: `/[lang]/[category]/[keyword-slug]`
  - Example: `/en/equipment/excavator-financing`
- [ ] **Alt text for all images** - Descriptive, keyword-relevant
- [ ] **Internal linking strategy**
  - [ ] 3-5 internal links per page
  - [ ] Relevant anchor text
  - [ ] Link to high-priority pages (equipment, contact)
- [ ] **External links to authority sites**
  - [ ] 2-3 authoritative sources per blog post
  - [ ] Open in new tab (`target="_blank"`)
  - [ ] Add `rel="noopener noreferrer"`
- [ ] **Keyword density** - 1-2% for primary keyword (natural placement)
- [ ] **LSI keywords** - Related terms included naturally
- [ ] **Readability** - Flesch Reading Ease score 60+ (or equivalent)
  - Short sentences
  - Simple language
  - Bullet points and lists
  - White space

---

## 3. Content SEO

### 3.1 Blog Posts
- [ ] **Word count: 1,500-2,500 words** per post
- [ ] **E-E-A-T signals** (Experience, Expertise, Authoritativeness, Trustworthiness)
  - [ ] Author bio with credentials
  - [ ] Expert quotes or data
  - [ ] Links to authoritative sources
  - [ ] Regular content updates with dates
- [ ] **FAQ sections** - 5-7 questions per post with schema markup
- [ ] **Readability score 60+**
- [ ] **Unique content** - 100% original, no duplication
- [ ] **Regular updates** - Content freshness strategy
  - [ ] Review and update quarterly
  - [ ] Add dateModified to schema markup

### 3.2 Equipment Pages
- [ ] **Comprehensive descriptions** - Benefits, features, financing options
- [ ] **Specifications tables** - Technical details in structured format
- [ ] **High-quality images** - Multiple angles, WebP optimized
- [ ] **Customer testimonials** - Social proof with review schema
- [ ] **Clear CTAs** - 3-5 conversion points per page
- [ ] **Financing calculator** (if applicable)
- [ ] **Related equipment suggestions** - Internal cross-linking

### 3.3 Landing Pages
- [ ] **Conversion-optimized** - Clear value proposition above fold
- [ ] **Single focus** - One primary goal per page
- [ ] **Trust signals** - Certifications, testimonials, guarantees
- [ ] **Mobile-optimized forms** - Easy to complete on mobile
- [ ] **Fast loading** - Minimal scripts, optimized images

---

## 4. Schema Markup (Structured Data)

### 4.1 Organization Schema
- [ ] **Implemented on homepage**
  - [ ] Name
  - [ ] Logo
  - [ ] URL
  - [ ] Description
  - [ ] Address (PostalAddress)
  - [ ] Contact Point (telephone, email)
  - [ ] Social media profiles (sameAs)
  - [ ] Opening hours

### 4.2 Article Schema
- [ ] **Implemented on all blog posts**
  - [ ] headline
  - [ ] image
  - [ ] author (Organization)
  - [ ] publisher (Organization with logo)
  - [ ] datePublished
  - [ ] dateModified
  - [ ] description
  - [ ] articleBody

### 4.3 FAQ Schema
- [ ] **Implemented on pages with FAQ sections**
  - [ ] mainEntity array
  - [ ] Question @type
  - [ ] acceptedAnswer @type
  - [ ] Minimum 3 questions per FAQ schema

### 4.4 Product Schema
- [ ] **Implemented on equipment pages**
  - [ ] name
  - [ ] description
  - [ ] brand (Ing Heng Credit)
  - [ ] offers (Offer @type)
  - [ ] image
  - [ ] aggregateRating (if reviews available)

### 4.5 Service Schema
- [ ] **Implemented for each financing service**
  - [ ] serviceType
  - [ ] provider (Organization)
  - [ ] areaServed (Malaysia)
  - [ ] hasOfferCatalog

### 4.6 Breadcrumb Schema
- [ ] **Implemented on all non-homepage pages**
  - [ ] BreadcrumbList @type
  - [ ] itemListElement with position
  - [ ] Matches visible breadcrumb navigation

### 4.7 LocalBusiness Schema
- [ ] **Implemented on contact/about pages**
  - [ ] name
  - [ ] image
  - [ ] telephone
  - [ ] email
  - [ ] address (full postal address)
  - [ ] geo (latitude, longitude)
  - [ ] openingHoursSpecification
  - [ ] priceRange
  - [ ] url

### 4.8 Review Schema
- [ ] **Implemented on testimonial sections**
  - [ ] itemReviewed (Organization)
  - [ ] reviewRating
  - [ ] author (Person)
  - [ ] reviewBody
  - [ ] datePublished

### 4.9 Schema Validation
- [ ] **Test with Google Rich Results Test**
- [ ] **Test with Schema.org Validator**
- [ ] **No errors or warnings**
- [ ] **All required properties included**

---

## 5. Multilingual SEO

### 5.1 Language-Specific Keywords
- [ ] **English keywords researched** - Independent research, not translation
- [ ] **Mandarin keywords researched** - Chinese market focus (独立研究)
- [ ] **Malay keywords researched** - Local Malay terms (penyelidikan bebas)
- [ ] **Keyword mapping document** - Created for each language
- [ ] **Search volume analysis** - Per language/market

### 5.2 Cultural Adaptation
- [ ] **English content** - Professional, B2B, ROI-focused tone
- [ ] **Mandarin content** - Relationship-focused, trust-building, community-oriented
- [ ] **Malay content** - Respectful, service-focused, government/authority references
- [ ] **No word-for-word translations** - Each version culturally adapted
- [ ] **Local examples and scenarios** - Relevant to each market

### 5.3 Hreflang Implementation
- [ ] **Hreflang tags in <head>** - All language versions
  ```html
  <link rel="alternate" hreflang="en-MY" href="https://ingheng-credit.vercel.app/en/page" />
  <link rel="alternate" hreflang="zh-Hans-MY" href="https://ingheng-credit.vercel.app/zh/page" />
  <link rel="alternate" hreflang="ms-MY" href="https://ingheng-credit.vercel.app/ms/page" />
  <link rel="alternate" hreflang="x-default" href="https://ingheng-credit.vercel.app/en/page" />
  ```
- [ ] **Bidirectional hreflang** - Each page references all language versions
- [ ] **X-default tag** - Points to English version
- [ ] **Consistent URL structure** - Same slug across languages

### 5.4 URL Structure
- [ ] **Separate URLs per language** - `/en/`, `/zh/`, `/ms/` structure
- [ ] **Consistent slugs** - Same slug name across languages
  - `/en/blogs/excavator-financing-guide.md`
  - `/zh/blogs/excavator-financing-guide.md`
  - `/ms/blogs/excavator-financing-guide.md`
- [ ] **Language switcher** - Easy navigation between versions
- [ ] **Language detection** - Auto-redirect based on browser language (optional)

### 5.5 Content Quality Across Languages
- [ ] **Equal quality** - All versions meet same standards
- [ ] **Same message** - Consistent brand messaging
- [ ] **Independent optimization** - Each version optimized for its language
- [ ] **Native speakers** - Content reviewed by native speakers (if possible)

---

## 6. Local SEO (Malaysia)

### 6.1 Google My Business
- [ ] **Profile created and verified**
- [ ] **Business name: Ing Heng Credit & Leasing**
- [ ] **Category: Financial Services / Equipment Financing**
- [ ] **Address:** 306-1, Persiaran Pegaga, Taman Bayu Perdana, 41200 Klang, Selangor
- [ ] **Phone:** +60-17-570-0889
- [ ] **Website:** https://ingheng-credit.vercel.app
- [ ] **Business hours updated**
  - Monday-Friday: 9:00 AM - 5:00 PM
  - Saturday: 9:00 AM - 1:00 PM
- [ ] **Photos uploaded** - Office, team, equipment
- [ ] **Services listed** - All financing services
- [ ] **Regular posts** - Updates, promotions, news

### 6.2 Local Keywords
- [ ] **City-specific keywords** - Klang, Selangor, Kuala Lumpur
- [ ] **Malaysia-specific terms** - "Pembiayaan peralatan Malaysia"
- [ ] **Regional variations** - Different terms across Malaysia
- [ ] **"Near me" optimization** - Local search intent
- [ ] **Area pages** - Consider creating pages for major cities

### 6.3 NAP Consistency
- [ ] **Name** - "Ing Heng Credit & Leasing" everywhere
- [ ] **Address** - Consistent formatting across all platforms
- [ ] **Phone** - Same format: +60-17-570-0889 and 03-3324 8899
- [ ] **Directories** - Listed in Malaysian business directories
  - [ ] Yell Malaysia
  - [ ] Mudah.my Business
  - [ ] Shopee Business
  - [ ] Lazada Business

### 6.4 Reviews and Testimonials
- [ ] **Google Reviews** - Encourage customer reviews
- [ ] **Facebook Reviews** - Leverage existing Facebook presence
- [ ] **Response strategy** - Respond to all reviews (positive and negative)
- [ ] **Review schema markup** - Implemented on website
- [ ] **Testimonial page** - Dedicated page with real customer stories

### 6.5 Local Backlinks
- [ ] **Malaysian business directories** - Listings with backlinks
- [ ] **Industry associations** - Malaysia Equipment Leasing Association
- [ ] **Local media** - Press releases to Malaysian media
- [ ] **Guest blogging** - Malaysian finance/business blogs
- [ ] **Partnerships** - Equipment dealers, suppliers

---

## 7. Performance & Core Web Vitals

### 7.1 Core Web Vitals Targets
- [ ] **Largest Contentful Paint (LCP)** - < 2.5 seconds
  - [ ] Optimize hero image
  - [ ] Preload critical resources
  - [ ] Use CDN for static assets
- [ ] **First Input Delay (FID)** - < 100 milliseconds
  - [ ] Minimize JavaScript execution
  - [ ] Break up long tasks
  - [ ] Use web workers for heavy computations
- [ ] **Cumulative Layout Shift (CLS)** - < 0.1
  - [ ] Set width/height on all images
  - [ ] Reserve space for ads/embeds
  - [ ] Avoid inserting content above existing content

### 7.2 Page Speed
- [ ] **Page load time < 3 seconds** (tested with Google PageSpeed Insights)
- [ ] **First Contentful Paint < 1.8 seconds**
- [ ] **Time to Interactive < 3.8 seconds**
- [ ] **Speed Index < 3.4 seconds**

### 7.3 Optimization Techniques
- [ ] **Image optimization**
  - [ ] WebP format
  - [ ] Responsive images (`srcset`)
  - [ ] Lazy loading
  - [ ] Image compression (80-85% quality)
- [ ] **Lazy loading** - Implemented for images, videos, iframes
- [ ] **Minimal JavaScript** - Remove unused libraries
- [ ] **CSS purging** - Remove unused Tailwind classes
- [ ] **Resource hints**
  - [ ] `<link rel="preconnect">` for external domains
  - [ ] `<link rel="dns-prefetch">` for third-party resources
  - [ ] `<link rel="preload">` for critical resources
- [ ] **Caching strategy**
  - [ ] Browser caching headers (Vercel default)
  - [ ] Service worker for offline support (optional)
- [ ] **Minification** - HTML, CSS, JS (Astro production build)
- [ ] **Gzip/Brotli compression** - Enabled on Vercel

### 7.4 Mobile Optimization
- [ ] **Mobile-first design** - Responsive on all screen sizes
- [ ] **Touch-friendly buttons** - Minimum 44x44px tap targets
- [ ] **Readable text** - Minimum 16px font size
- [ ] **No horizontal scrolling** - Content fits viewport
- [ ] **Mobile form optimization** - Large inputs, appropriate input types
- [ ] **Mobile PageSpeed score 90+**

---

## 8. Analytics & Tracking

### 8.1 Google Analytics 4
- [x] **GA4 component created** - `GoogleAnalytics.astro`
- [ ] **GA4 property set up** - In Google Analytics dashboard
- [ ] **Measurement ID added to .env** - `PUBLIC_GA_ID=G-XXXXXXXXXX`
- [ ] **Tracking verified** - Real-time reports showing data
- [ ] **Custom dimensions configured**
  - [ ] Language (en/zh/ms)
  - [ ] Page category
  - [ ] Equipment type

### 8.2 Event Tracking
- [x] **WhatsApp button clicks** - Implemented in GoogleAnalytics.astro
- [x] **Form submissions** - Implemented
- [x] **Equipment page views** - Implemented
- [x] **Blog post engagement** - Reading time tracking (30s, 60s, 120s)
- [x] **Phone number clicks** - Implemented
- [x] **Email clicks** - Implemented
- [x] **Scroll depth** - Tracking 25%, 50%, 75%, 100%
- [x] **Outbound link clicks** - Implemented
- [x] **Language switcher usage** - Implemented
- [ ] **Custom conversions** - Define in GA4 dashboard

### 8.3 Conversion Goals
- [ ] **Contact form submission** - Defined as conversion
- [ ] **WhatsApp message sent** - Conversion event
- [ ] **Phone call initiated** - Conversion event
- [ ] **Equipment inquiry** - Conversion event
- [ ] **Blog signup** (if newsletter exists) - Conversion event
- [ ] **Goal values assigned** - Monetary value to conversions

### 8.4 E-commerce Tracking (if applicable)
- [ ] **Product impressions** - Track equipment views
- [ ] **Product clicks** - Track equipment page visits
- [ ] **Enhanced measurement enabled** - In GA4 settings

---

## 9. Search Console & Webmaster Tools

### 9.1 Google Search Console
- [ ] **Property added** - https://ingheng-credit.vercel.app
- [ ] **Ownership verified** - DNS, HTML tag, or Google Analytics
- [ ] **Sitemap submitted** - `/sitemap-index.xml`
- [ ] **Coverage report reviewed** - No errors
- [ ] **Mobile usability report** - No issues
- [ ] **Core Web Vitals report** - All pages in "Good" range
- [ ] **URL inspection tool** - Test key pages
- [ ] **Rich results tested** - Schema markup validated
- [ ] **International targeting** - Target country set to Malaysia

### 9.2 Bing Webmaster Tools
- [ ] **Site added** - https://ingheng-credit.vercel.app
- [ ] **Ownership verified**
- [ ] **Sitemap submitted**
- [ ] **URL inspection**
- [ ] **SEO reports reviewed**

### 9.3 Monitoring Setup
- [ ] **Weekly performance reports** - Track clicks, impressions, CTR
- [ ] **Alert notifications** - Set up for coverage errors
- [ ] **Query analysis** - Monitor which keywords drive traffic
- [ ] **Competitor tracking** - Compare with competitors

---

## 10. Content Marketing & Link Building

### 10.1 Content Strategy
- [ ] **Editorial calendar** - Plan content 3 months ahead
- [ ] **Blog posting frequency** - Minimum 2 posts per month per language
- [ ] **Content types**
  - [ ] How-to guides
  - [ ] Equipment comparisons
  - [ ] Industry news
  - [ ] Customer success stories
  - [ ] FAQs
- [ ] **Content promotion** - Social media, email, partnerships

### 10.2 Link Building Strategy
- [ ] **Guest blogging** - Malaysian business/finance blogs
- [ ] **Industry partnerships** - Equipment dealers, manufacturers
- [ ] **Directory submissions** - Quality directories only
- [ ] **PR and media outreach** - Press releases for major updates
- [ ] **Resource pages** - Create linkable assets (guides, calculators)
- [ ] **Broken link building** - Find and replace broken links
- [ ] **Competitor backlink analysis** - Replicate quality backlinks

### 10.3 Social Signals
- [x] **Facebook page active** - https://www.facebook.com/Inghengcredit
- [ ] **Regular posting schedule** - Minimum 3 posts per week
- [ ] **LinkedIn company page** - For B2B presence
- [ ] **Social sharing buttons** - On blog posts
- [ ] **Engagement tracking** - Monitor social traffic in GA4

---

## 11. Security & Trust

### 11.1 Security Headers
- [ ] **HTTPS enforced** - Vercel default
- [ ] **Security headers configured** (via `vercel.json`)
  - [ ] X-Frame-Options: DENY
  - [ ] X-Content-Type-Options: nosniff
  - [ ] Referrer-Policy: strict-origin-when-cross-origin
  - [ ] Permissions-Policy: camera=(), microphone=(), geolocation=()
  - [ ] Content-Security-Policy (CSP)

### 11.2 Trust Signals
- [ ] **Privacy policy** - Dedicated page
- [ ] **Terms of service** - Dedicated page
- [ ] **Contact information** - Visible on every page
- [ ] **Business registration** - Display credentials
- [ ] **Industry certifications** - Display badges (if applicable)
- [ ] **Customer testimonials** - With real names and photos
- [ ] **Trust badges** - Security, payment, awards

---

## 12. Accessibility (SEO Impact)

### 12.1 WCAG 2.1 Compliance
- [ ] **Color contrast** - Minimum 4.5:1 for text
- [ ] **Keyboard navigation** - All interactive elements accessible
- [ ] **ARIA labels** - For screen readers
- [ ] **Skip to content link** - For keyboard users
- [ ] **Focus indicators** - Visible focus states
- [ ] **Alt text on all images** - Descriptive, not decorative
- [ ] **Heading hierarchy** - Logical structure
- [ ] **Form labels** - All inputs have labels
- [ ] **Error messages** - Clear and helpful

### 12.2 Testing Tools
- [ ] **WAVE Web Accessibility Tool** - No errors
- [ ] **axe DevTools** - No critical issues
- [ ] **Lighthouse accessibility score 90+**

---

## 13. Ongoing Maintenance

### 13.1 Monthly Tasks
- [ ] **Monitor Google Search Console** - Check for errors
- [ ] **Review GA4 reports** - Analyze traffic and conversions
- [ ] **Update content** - Refresh old blog posts
- [ ] **Check backlinks** - Monitor new and lost backlinks
- [ ] **Competitor analysis** - Track competitor rankings
- [ ] **Page speed tests** - Ensure performance maintained

### 13.2 Quarterly Tasks
- [ ] **Keyword research update** - Find new opportunities
- [ ] **Content audit** - Identify underperforming pages
- [ ] **Technical SEO audit** - Crawl site for issues
- [ ] **Schema markup review** - Ensure all schemas valid
- [ ] **Link building campaign** - Acquire quality backlinks
- [ ] **Competitor content analysis** - Identify content gaps

### 13.3 Annual Tasks
- [ ] **Comprehensive SEO audit** - Full site review
- [ ] **Strategy review** - Adjust based on performance
- [ ] **Algorithm update response** - Adapt to Google changes
- [ ] **Technology updates** - Upgrade Astro, dependencies
- [ ] **Content refresh** - Major content overhaul

---

## Priority Action Items (Start Here)

### Immediate (Week 1-2)
1. [ ] Add canonical URLs to all page templates
2. [ ] Implement hreflang tags in BaseLayout.astro
3. [ ] Create and test 404 page
4. [ ] Set up Google Analytics 4 (add measurement ID)
5. [ ] Verify Google Search Console and submit sitemap
6. [ ] Add meta descriptions to all existing pages
7. [ ] Optimize homepage images (WebP, lazy loading)

### Short-term (Week 3-4)
1. [ ] Implement Organization schema on homepage
2. [ ] Add FAQ schema to relevant pages
3. [ ] Create breadcrumb navigation with schema
4. [ ] Set up Google My Business profile
5. [ ] Optimize Core Web Vitals (test with PageSpeed Insights)
6. [ ] Create 404 redirect plan for old URLs (if applicable)
7. [ ] Add Open Graph and Twitter Card tags

### Medium-term (Month 2-3)
1. [ ] Create content for all equipment pages
2. [ ] Write initial blog posts (3 per language)
3. [ ] Implement Article schema on all blog posts
4. [ ] Build internal linking structure
5. [ ] Start link building campaign
6. [ ] Create testimonial page with Review schema
7. [ ] Set up Bing Webmaster Tools

### Long-term (Month 4+)
1. [ ] Regular content publishing (2 posts/month)
2. [ ] Ongoing link building
3. [ ] Monitor and improve rankings
4. [ ] A/B test CTAs and forms
5. [ ] Expand to new keywords
6. [ ] Create advanced content (calculators, tools)
7. [ ] Build authority in equipment financing niche

---

## Success Metrics

### Traffic Goals
- **Month 1-3:** 1,000 organic visits/month
- **Month 4-6:** 2,500 organic visits/month
- **Month 7-12:** 5,000+ organic visits/month

### Ranking Goals
- **Top 10** for primary keywords within 6 months
- **Top 5** for primary keywords within 12 months
- **Top 3** for long-tail keywords within 3 months

### Conversion Goals
- **Contact form submissions:** 20+ per month
- **WhatsApp inquiries:** 30+ per month
- **Phone calls:** 15+ per month

### Technical Goals
- **Page speed score:** 90+ on mobile and desktop
- **Core Web Vitals:** All "Good" ratings
- **Zero critical errors** in Search Console

---

## Tools Required

### Essential
- Google Analytics 4
- Google Search Console
- Bing Webmaster Tools
- PageSpeed Insights
- Google Rich Results Test
- Schema.org Validator

### Recommended
- Ahrefs / SEMrush / Moz (for keyword research and backlinks)
- Screaming Frog SEO Spider (for technical audits)
- GTmetrix (for performance testing)
- WAVE (for accessibility testing)
- Hotjar / Microsoft Clarity (for user behavior)

---

**Last Updated:** 2025-10-10
**Version:** 1.0
**Status:** Implementation in progress

This checklist should be reviewed and updated regularly as SEO best practices evolve and as the Ing Heng Credit website grows.
