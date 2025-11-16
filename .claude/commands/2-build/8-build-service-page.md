# Command ⑧ /8-build-service-page

**Phase:** BUILD
**Primary Agent:** content-generation
**Time:** 2-3 hours (AI working)

## Purpose
Create conversion-focused service/product page optimized for transactional or local search intent.

## Prerequisites

✅ **Required files from ONBOARD phase:**
- `business-brief.md` (from ①) - Service details, USPs
- `personas.md` (from ①) - Target customer needs (9 personas)
- `keyword-opportunities.csv` (from ①) - Service-related keywords (OPTIONAL - for SEO optimization)
- `author-profiles.md` (from ③) - Author attribution (OPTIONAL)
- `trust-signals.md` (from ③) - Trust elements to include (OPTIONAL)
- `Selected brand design` (from ④) - Visual styling

### Validation Check
```
❌ If REQUIRED file missing:
→ Go back: Complete ONBOARD phase ① and ④ first

Check specifically:
✅ clients/[client-name]/onboarding/business-brief.md exists (REQUIRED)
✅ clients/[client-name]/onboarding/personas.md exists (REQUIRED)
✅ clients/[client-name]/brand-identity/selected-design exists (REQUIRED)

OPTIONAL (but helpful):
- clients/[client-name]/eeat-strategy/trust-signals.md
- clients/[client-name]/onboarding/keyword-opportunities.csv
```

## What This Command Does

The **content-generation** agent will:

1. **Load Service Information**
   - Read business-brief.md for service details
   - Read personas.md for customer pain points
   - Read trust-signals.md for credibility elements

2. **Research Competitors**
   - Analyze top 3 service pages for this offering
   - Identify conversion elements they use
   - Find ways to differentiate

3. **Generate Conversion-Focused Page** (SEO-pro.md Chapter 4)
   - **Length:** 800-1,200 words
   - **Structure:**
     - Hero section (value proposition, CTA above fold)
     - Benefits section ("What You Get")
     - Process section ("How It Works" - 3-5 steps)
     - Trust section ("Why Choose Us")
     - Social proof (testimonials/reviews)
     - Pricing section (transparent or "starting from")
     - FAQ section
     - Final CTA
   - **Optimization:**
     - Transactional keyword in title
     - Benefits-focused (not feature-focused)
     - Multiple CTAs (above fold, middle, bottom)
     - Local optimization (if local business)

4. **Add Trust Signals**
   - Customer testimonials
   - Certifications/licenses
   - Years in business
   - Number of customers served
   - Guarantees/warranties
   - Security badges

5. **Implement Schema Markup**
   - Service schema OR Product schema
   - LocalBusiness schema (if local)
   - FAQPage schema
   - Review/Rating schema (if applicable)

6. **Apply Brand Design**
   - CTA buttons in brand colors
   - Trust badges styled consistently
   - Conversion-focused layout

## Output File Created

```
clients/[client-name]/website/src/pages/en/services/[service-slug].astro
```

**Example:** `src/pages/en/services/equipment-financing.astro`

## Skills Used
- `service-page-generation` - Create conversion-focused structure
- `conversion-optimization` - CTA placement, trust signals
- `local-seo-signals` - Local business optimization
- `cta-placement` - Strategic call-to-action positioning
- `trust-badge-integration` - Credibility elements
- `schema-markup` - Service/Product/LocalBusiness schema

## Agent Instructions

```
You are the content-generation agent. Build conversion-focused service page.

CLIENT: [client-name]
SERVICE: [service-name]
INTENT: Transactional (users ready to buy/contact)

STEP 1: LOAD CONTEXT
Read:
- clients/[client-name]/onboarding/business-brief.md
- clients/[client-name]/onboarding/personas.md
- clients/[client-name]/eeat-strategy/trust-signals.md

STEP 2: RESEARCH COMPETITORS
- Google: [service name] + [location if local]
- Analyze top 3 service pages
- Note: What CTAs they use, what trust signals, pricing strategy

STEP 3: CREATE STRUCTURE
Hero:
- Compelling H1 (benefit-focused)
- Value proposition (1-2 sentences)
- Primary CTA (above fold)

Body:
- H2: What You Get (3-5 benefits, NOT features)
- H2: How It Works (3-5 step process)
- H2: Why Choose Us (trust differentiators)
- H2: Customer Success Stories (testimonials)
- H2: Pricing (transparent or starting from)
- CTA (middle of page)
- H2: FAQ (5-10 common questions)
- Final CTA

STEP 4: WRITE CONVERSION COPY (800-1,200 words)
Apply SEO-pro.md Chapter 2 (Transactional Intent):
- Benefits before features
- Clear, specific value propositions
- Address objections in FAQ
- Use "you" language (customer-focused)
- Short paragraphs
- Bullet points for benefits
- Strong action verbs in CTAs

STEP 5: ADD TRUST SIGNALS (from trust-signals.md)
- Customer testimonials (real names + photos if possible)
- Years in business / customers served
- Certifications and licenses
- Guarantees or warranties
- Security/privacy assurances
- Industry memberships

STEP 6: OPTIMIZE FOR CONVERSIONS
- Primary CTA above fold (prominent)
- Secondary CTA mid-page
- Final CTA at bottom
- Phone number prominent (for local)
- Contact form (if applicable)
- Live chat option (if applicable)

STEP 7: IMPLEMENT SEO
- Title: [Service] in [Location] | [USP] - [Brand]
- Meta description: Compelling, includes keyword + CTA
- H1: Service + location + benefit
- Schema markup: Service or LocalBusiness
- FAQPage schema
- Image alt text

STEP 8: SAVE FILE
Output to: clients/[client-name]/website/src/pages/en/services/[slug].astro

Ready for ⑨⑩⑪ REVIEW phase.
```

## Success Criteria
- [ ] Service page is 800-1,200 words
- [ ] Has clear value proposition above fold
- [ ] Contains 3+ CTAs (above fold, middle, bottom)
- [ ] Includes 2-3 customer testimonials
- [ ] Has trust signals (certifications, guarantees)
- [ ] Has FAQ section (5-10 questions)
- [ ] Schema markup implemented (Service/LocalBusiness)
- [ ] Brand design applied
- [ ] File saved at correct path

## Next Step
After this completes:
→ Run **⑨ /9-review-seo**
→ Run **⑩ /10-review-eeat**
→ Run **⑪ /11-review-readability**
→ Fix any issues until all reviews PASS
→ Then run **⑫ /12-translate-content**

## Common Errors

**Error:** `business-brief.md not found`
**Solution:** Run **① /1-research-business** first

**Error:** `trust-signals.md not found`
**Solution:** Run **③ /3-plan-authority** first

**Error:** `No brand design selected`
**Solution:** Run **④ /4-design-brand-options** first

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10
