# Claude Context Configuration for Ing Heng Credit SEO Project

## 🌍 Multilingual Default Behavior

**IMPORTANT: Unless explicitly specified otherwise, ALL content operations must be executed across ALL THREE languages simultaneously.**

### Default Execution Rule

When the user requests any of the following operations, **AUTOMATICALLY execute for all 3 languages**:

1. **Content Creation** (blogs, landing pages, articles)
2. **Content Editing** (updates, optimizations, rewrites)
3. **Content Optimization** (SEO improvements, readability fixes)
4. **Keyword Research** (must research independently per language)
5. **Content Translation/Localization**

### Three-Language Standard

All content operations default to:
- 🇬🇧 **English** (en/) - Primary B2B language
- 🇨🇳 **Mandarin Chinese Simplified** (zh/) - Logistics focus
- 🇲🇾 **Bahasa Malaysia** (ms/) - Construction focus

### When to Use Single Language

Only execute for ONE language when the user explicitly specifies:
- "Create ONLY in English"
- "Update the Mandarin version only"
- "This is Malay-specific content"
- Uses language-specific keywords or terminology that indicates single-language intent

---

## 🤖 Multi-Agent Workflow

### Default Agent Usage Pattern

When creating or editing content, use this three-agent workflow:

#### Step 1: English Agent
- **Agent**: Multilingual SEO Specialist (`.claude/agents/multilingual-seo-specialist.md`)
- **Task**: Create/edit English content with SEO optimization
- **Output**: `en/[type]/[filename].md`

#### Step 2: Mandarin Agent
- **Agent**: Multilingual SEO Specialist (`.claude/agents/multilingual-seo-specialist.md`)
- **Task**: Create culturally-adapted Mandarin content (NOT translation)
- **Process**: Independent keyword research for Chinese market
- **Output**: `zh/[type]/[filename].md`

#### Step 3: Malay Agent
- **Agent**: Multilingual SEO Specialist (`.claude/agents/multilingual-seo-specialist.md`)
- **Task**: Create culturally-adapted Malay content (NOT translation)
- **Process**: Independent keyword research for Malay market
- **Output**: `ms/[type]/[filename].md`

---

## 📋 Standard Operating Procedure

### For Blog Creation

When user says: "Create a blog about [topic]"

**Automatic Execution:**
```
1. Create English blog → en/blogs/[slug].md
2. Create Mandarin blog → zh/blogs/[slug].md (with cultural adaptation)
3. Create Malay blog → ms/blogs/[slug].md (with cultural adaptation)
4. Ensure all 3 versions have:
   ✅ Language-specific keyword research
   ✅ Cultural localization
   ✅ Persona alignment
   ✅ Hreflang implementation plan
   ✅ Schema markup
```

### For Content Editing

When user says: "Edit [file] to improve [aspect]"

**Automatic Execution:**
```
1. Identify the file's language version
2. Apply edits to the specified version
3. Propagate equivalent changes to other 2 language versions
4. Maintain cultural appropriateness in each version
```

### For Landing Pages

When user says: "Create landing page for [equipment]"

**Automatic Execution:**
```
1. Create English landing page → en/landing-pages/[slug].md
2. Create Mandarin landing page → zh/landing-pages/[slug].md
3. Create Malay landing page → ms/landing-pages/[slug].md
4. Each with conversion-optimized, culturally-adapted messaging
```

---

## 🎯 Persona-Language Mapping

### Default Persona Language Priorities

When creating persona-specific content:

**Contractor Ahmad (Excavator):**
- Primary: Bahasa Malaysia
- Secondary: English
- Tertiary: Mandarin (optional)

**Logistics Lee (Lorry):**
- Primary: Mandarin Chinese
- Secondary: English
- Tertiary: Bahasa Malaysia (optional)

**Warehouse William (Forklift):**
- Primary: English
- Secondary: Mandarin
- Tertiary: Bahasa Malaysia (optional)

**Cross-Persona Topics:**
- ALL THREE languages equally (e.g., "Benefits of Equipment Financing")

---

## 🔄 Workflow Automation Rules

### 1. Keyword Research
```
Command: /keyword-research [topic]

Auto-execute:
→ Research English keywords
→ Research Mandarin keywords (独立研究，不是翻译)
→ Research Malay keywords (penyelidikan bebas, bukan terjemahan)
→ Output: Comprehensive 3-language keyword report
```

### 2. Blog Generation
```
Command: /generate-blog [topic]

Auto-execute:
→ Determine relevant personas
→ Create EN version with SEO optimization
→ Create ZH version with cultural adaptation
→ Create MS version with cultural adaptation
→ Output: 3 fully-optimized blog posts
```

### 3. Content Optimization
```
Command: /optimize-content [file]

Auto-execute:
→ Optimize specified file
→ Review equivalent files in other languages
→ Apply parallel improvements to all versions
→ Output: 3 optimized files
```

### 4. Landing Page Creation
```
Command: /create-landing-page [equipment]

Auto-execute:
→ Create EN landing page
→ Create ZH landing page (with Chinese conversion psychology)
→ Create MS landing page (with Malay cultural nuances)
→ Output: 3 conversion-optimized landing pages
```

---

## 🚨 Critical Reminders

### NEVER Do This:
❌ Translate word-for-word from English to other languages
❌ Create content in only one language without explicit user instruction
❌ Use Google Translate for content creation
❌ Apply same keywords across languages (always research independently)
❌ Ignore cultural context and local nuances

### ALWAYS Do This:
✅ Research keywords independently for each language
✅ Culturally adapt content (not just translate)
✅ Create all 3 versions unless user specifies otherwise
✅ Use appropriate persona-language matching
✅ Implement hreflang tags for multilingual SEO
✅ Use language-specific CTAs and conversion messaging
✅ Reference culturally-relevant examples and scenarios

---

## 📊 Content Quality Standards (All Languages)

### Minimum Requirements Per Language:
- **Word Count**: 1,500-2,500 words for blogs
- **Keywords**: 1 primary + 5-8 secondary (language-specific)
- **Structure**: H1 + 4-6 H2s + H3s as needed
- **FAQ**: 5-7 questions with schema markup
- **CTAs**: 3-5 conversion points
- **Internal Links**: 3-5 relevant links
- **External Links**: 2-3 authoritative sources
- **Schema**: Article + FAQPage markup
- **Readability**: Flesch 60+ (or equivalent for ZH/MS)

### Cultural Adaptation Requirements:
- **English**: Professional, B2B, ROI-focused
- **Mandarin**: Relationship-focused, trust-building, community-oriented
- **Malay**: Respectful, service-focused, government/authority references

---

## 🛠️ File Naming Convention

### Consistent Across Languages:
```
English:  /en/blogs/excavator-financing-guide.md
Mandarin: /zh/blogs/excavator-financing-guide.md (same slug)
Malay:    /ms/blogs/excavator-financing-guide.md (same slug)

Purpose: Enables easy hreflang implementation and URL structure
```

---

## 📞 Contact Information (Include in ALL Languages)

**WhatsApp (Primary):** +60175700889
**Phone:** 0175700889 / 03-3324 8899
**Email:** enquiry@inghengcredit.com
**Address:** 306-1, Persiaran Pegaga, Taman Bayu Perdana, 41200 Klang, Selangor
**Facebook:** https://www.facebook.com/Inghengcredit

**Business Hours:**
Monday-Friday: 9:00 AM - 5:00 PM
Saturday: 9:00 AM - 1:00 PM

---

## 🎯 Success Criteria

Every content operation is successful when:
1. ✅ All 3 language versions created (unless single-language specified)
2. ✅ Each version culturally adapted (not translated)
3. ✅ Each version has independent keyword research
4. ✅ All versions maintain consistent messaging
5. ✅ Hreflang implementation planned
6. ✅ Schema markup included
7. ✅ Quality standards met for all versions

---

## 💡 Quick Reference

### User Says → Claude Does

| User Request | Auto Execution |
|-------------|----------------|
| "Create blog about X" | 3 blogs (EN/ZH/MS) |
| "Create landing page for Y" | 3 landing pages (EN/ZH/MS) |
| "Research keywords for Z" | 3 keyword reports (EN/ZH/MS) |
| "Optimize [file]" | Optimize + propagate to other 2 versions |
| "Translate X" | Create culturally-adapted versions (all 3) |
| "Create ONLY in English X" | 1 blog (EN only) |

---

## 🔧 Override Commands

If user wants to bypass multilingual default:

- "English only: [request]"
- "Mandarin only: [request]"
- "Malay only: [request]"
- "Skip Mandarin/Malay/English"

Otherwise, **ALWAYS default to all 3 languages.**

---

## 📚 Agent Reference Paths

**Multilingual SEO Specialist:** `.claude/agents/multilingual-seo-specialist.md`
**Keyword Researcher:** `.claude/agents/keyword-researcher.md`
**Content Optimizer:** `.claude/agents/content-optimizer.md`
**Competitor Analyzer:** `.claude/agents/competitor-analyzer.md`

---

**Last Updated:** 2025-10-10
**Version:** 1.0
**Purpose:** Ensure consistent multilingual content creation across all operations

---

## 🎓 Remember

**The default is ALWAYS three languages. Think multilingual first.**

Every piece of content is an opportunity to reach:
- English-speaking B2B decision makers
- Mandarin-speaking logistics operators
- Malay-speaking construction contractors

**Don't ask. Just do all three. That's the Ing Heng Credit way. 🚀**
