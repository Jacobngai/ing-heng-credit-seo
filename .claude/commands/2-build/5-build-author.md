# Command ⑤ /5-build-author

**Phase:** BUILD
**Primary Agent:** content-generation
**Time:** 1-2 hours (AI working)

## Purpose
Create author bio page with credentials, experience demonstrations, and E-E-A-T signals.

## Prerequisites

✅ **Required files:**
- `author-profiles.md` (from ③ /3-plan-authority)
- `Selected brand design` (from ④ /4-design-brand-options)

### Validation Check
```
❌ If author-profiles.md missing:
→ Go back: Run ③ /3-plan-authority for this client first

❌ If no brand design selected:
→ Go back: Run ④ /4-design-brand-options, ask client to pick favorite
```

## What This Command Does

The **content-generation** agent will:

1. **Load Author Profile Data**
   - Read author-profiles.md
   - Extract credentials, experience, specializations

2. **Generate Author Bio Page**
   - Write compelling bio (200-300 words)
   - First-person experience language
   - Highlight credentials prominently
   - Include trust signals

3. **Add E-E-A-T Elements**
   - Credentials section
   - Experience section (specific examples)
   - Publications/speaking section
   - Recognition/awards section

4. **Implement Schema Markup**
   - Person schema with jobTitle, credentials
   - Link to organization schema

5. **Apply Brand Design**
   - Use selected color palette
   - Apply typography system
   - Match component styles

## Output File Created

```
clients/[client-name]/website/src/pages/en/authors/[author-name].astro
```

**Example:** `src/pages/en/authors/john-smith.astro`

## File Structure Template

```astro
---
import Layout from '@layouts/Layout.astro';
import SEOHead from '@components/SEOHead.astro';

const author = {
  name: "John Smith",
  title: "Senior CRM Consultant",
  credentials: [
    "Certified Salesforce Administrator",
    "MBA in Information Systems",
    "200+ successful implementations"
  ],
  experience: "12 years",
  bio: "After implementing CRM systems for over 12 years..."
};
---

<Layout>
  <SEOHead
    title="{author.name} - {author.title}"
    description="Learn about {author.name}'s {author.experience} of experience..."
  />

  <article itemscope itemtype="https://schema.org/Person">
    <header class="author-header">
      <img src="/images/authors/{author-name}.jpg"
           alt="{author.name}"
           itemprop="image" />
      <h1 itemprop="name">{author.name}</h1>
      <p itemprop="jobTitle">{author.title}</p>
    </header>

    <section class="credentials">
      <h2>Qualifications & Credentials</h2>
      <ul>
        {author.credentials.map(cred => <li>{cred}</li>)}
      </ul>
    </section>

    <section class="experience">
      <h2>Experience</h2>
      <p itemprop="description">
        {author.bio}
      </p>
      <!-- Detailed experience with SPECIFIC examples -->
    </section>

    <section class="recognition">
      <h2>Recognition & Publications</h2>
      <!-- Speaking, publishing, awards -->
    </section>

    <section class="contact">
      <h2>Get in Touch</h2>
      <a href="mailto:{email}" itemprop="email">Contact {author.name}</a>
    </section>
  </article>
</Layout>
```

## Skills Used
- `author-page-generation` - Create author bio page structure
- `schema-markup` - Add Person schema
- `credential-formatting` - Display qualifications properly
- `bio-writing` - Write compelling author bios

## Agent Instructions

```
You are the content-generation agent. Build author bio page.

CLIENT: [client-name]
AUTHOR: [author-name]

STEP 1: LOAD DATA
Read:
- clients/[client-name]/eeat-strategy/author-profiles.md
- clients/[client-name]/brand-identity/selected-design.html (or tailwind.config.js)

STEP 2: GENERATE PAGE
Create .astro file with:
- SEO-optimized title & meta description
- Person schema markup
- Credentials section (prominent)
- Experience section (first-person, specific)
- Recognition section (if applicable)
- Contact section

STEP 3: APPLY E-E-A-T PRINCIPLES
From SEO-pro.md Chapter 4:
- Use "I" and first-person language
- Include specific details only possible through experience
- Quantify achievements (12 years, 200+ clients)
- Show personality (not robotic)

STEP 4: APPLY BRAND DESIGN
- Use selected color palette
- Apply typography system
- Style matches brand identity

STEP 5: SAVE FILE
Output to: clients/[client-name]/website/src/pages/en/authors/[author-name].astro

Ready for ⑨⑩⑪ REVIEW phase.
```

## Success Criteria
- [ ] Author page created at correct path
- [ ] Person schema markup valid
- [ ] Credentials prominently displayed
- [ ] Experience written in first-person
- [ ] Brand design applied correctly
- [ ] File ready for review (⑨⑩⑪)

## Next Step
After this completes:
→ Run **⑥ /6-build-hub-page** OR **⑦ /7-build-blog** OR **⑧ /8-build-service-page**
→ Then REVIEW with **⑨⑩⑪**

## Common Errors

**Error:** `author-profiles.md not found`
**Solution:** Run **③ /3-plan-authority** first

**Error:** `No brand design selected`
**Solution:** Run **④ /4-design-brand-options**, have client pick design

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10
