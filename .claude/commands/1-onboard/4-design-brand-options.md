# Command ④ /4-design-brand-options

**Phase:** ONBOARD
**Primary Agent:** brand-identity
**Time:** 10-15 minutes (AI working)

## Purpose
Analyze employee-provided brand materials and generate 10 comprehensive HTML mockups showing different brand identity directions for client selection.

## Prerequisites

✅ **Required files from ① /1-research-business:**
- `business-brief.md` - Business context and personality

✅ **Required from employee:**
- Brand materials (logos, existing guidelines, preferences)
- Competitor examples (if any)
- Industry references (if any)

### Validation Check
```
❌ If business-brief.md missing:
→ Go back: Run ① /1-research-business for this client first

❌ If no brand materials provided:
→ Ask employee to provide at least: logo OR color preferences OR competitor examples
```

## What This Command Does

The **brand-identity** agent will:

1. **Analyze Provided Materials**
   - Extract colors from existing logo
   - Review any existing brand guidelines
   - Study competitor visual styles
   - Understand industry conventions

2. **Generate 10 Brand Directions**
   Each option explores a different brand personality:
   - Industrial Trust (Bronze/Blue - conservative, established)
   - Modern Professional (Navy/Green - corporate, clean)
   - Approachable Expert (Orange/Gray - friendly, knowledgeable)
   - Premium Finance (Gold/Black - luxury, exclusive)
   - Tech Forward (Purple/White - innovative, digital)
   - Traditional Stability (Brown/Cream - heritage, reliable)
   - Dynamic Growth (Red/Yellow - energetic, ambitious)
   - Clean Minimal (Black/White - sophisticated, simple)
   - Friendly Local (Green/Orange - community, accessible)
   - Bold Disruptor (Pink/Black - unconventional, standout)

3. **Create Complete HTML Mockups**
   Each file includes:
   - Full color palette (primary, secondary, accent, neutrals)
   - Typography system (headings, body, UI)
   - Button styles (primary, secondary, outline, ghost)
   - Card components
   - Navigation bar
   - Hero section with client's actual content
   - Service/product cards
   - Testimonial section
   - Footer
   - Responsive design CSS

4. **Generate README**
   Explains each option's personality and best use case

## Output Files Created

```
clients/[client-name]/brand-identity/
├── ci-option-1.html (Industrial Trust)
├── ci-option-2.html (Modern Professional)
├── ci-option-3.html (Approachable Expert)
├── ci-option-4.html (Premium Finance)
├── ci-option-5.html (Tech Forward)
├── ci-option-6.html (Traditional Stability)
├── ci-option-7.html (Dynamic Growth)
├── ci-option-8.html (Clean Minimal)
├── ci-option-9.html (Friendly Local)
├── ci-option-10.html (Bold Disruptor)
├── README.md (explains each option)
└── client-selection.md (for recording choice)
```

## Skills Used
- `brand-material-analysis` - Analyze existing brand assets
- `color-palette-generation` - Create professional color schemes
- `typography-selection` - Choose optimal font pairings
- `design-system-creation` - Build complete design systems
- `html-mockup-generation` - Create interactive HTML demos
- `brand-personality-mapping` - Map business personality to visual style

## Agent Instructions

```
You are the brand-identity agent. Create 10 comprehensive brand identity options.

CLIENT: [client-name]
INDUSTRY: [from business-brief.md]

STEP 1: ANALYZE MATERIALS
Review:
- clients/[client-name]/onboarding/business-brief.md
- Any brand materials in clients/[client-name]/brand-materials/
- Extract: Brand personality, industry, target audience

STEP 2: GENERATE 10 OPTIONS
Create 10 distinct brand directions:
1. Industrial Trust (Bronze/Blue)
2. Modern Professional (Navy/Green)
3. Approachable Expert (Orange/Gray)
4. Premium Finance (Gold/Black)
5. Tech Forward (Purple/White)
6. Traditional Stability (Brown/Cream)
7. Dynamic Growth (Red/Yellow)
8. Clean Minimal (Black/White)
9. Friendly Local (Green/Orange)
10. Bold Disruptor (Pink/Black)

Each HTML file must include:
- Complete color palette (CSS variables)
- Typography system (3 font families)
- Button styles (4 variants)
- Card components
- Navigation, Hero, Content, Footer
- CLIENT'S ACTUAL CONTENT (not lorem ipsum)
- Responsive CSS (mobile-first)

STEP 3: CREATE README
Explain each option:
- Personality & tone
- Best for which businesses
- Emotional impact
- Recommended use cases

STEP 4: SAVE FILES
Output to: clients/[client-name]/brand-identity/
✅ ci-option-1.html through ci-option-10.html
✅ README.md
✅ client-selection.md (template for recording choice)

CLIENT NEXT STEP:
Open each HTML file in browser, review, and select favorite.
```

## Success Criteria
- [ ] 10 HTML files created (ci-option-1 through ci-option-10)
- [ ] Each HTML is complete with real client content
- [ ] Each option has distinct visual personality
- [ ] README.md explains all options clearly
- [ ] All files saved in `clients/[client-name]/brand-identity/`

## Client Selection Process

1. **Employee sends 10 HTML files to client**
   - Via email or shared folder
   - Client opens in browser to preview

2. **Client picks favorite** (or requests variations)
   - Records choice in client-selection.md
   - Can ask for hybrid (e.g., "Option 1 colors + Option 3 typography")

3. **Selected design becomes Tailwind config**
   - Agent converts selected HTML to `tailwind.config.js`
   - This config is used for all BUILD commands (⑤-⑧)

## Next Step
After client selects design:
→ ONBOARD phase complete ✓
→ Ready for BUILD phase (⑤-⑧)

## Common Errors

**Error:** `business-brief.md not found`
**Solution:** Run **① /1-research-business** first

**Error:** `No brand materials provided`
**Solution:** Agent will create options based on industry best practices. Provide logo if available for better results.

---

**Created by:** SEO Workflow System v2.0
**Last Updated:** 2025-11-10
