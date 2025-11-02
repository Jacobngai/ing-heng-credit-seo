# Multi-Language Content Generation Skill

## Client Parameter
**REQUIRED PARAMETER:** `[client-name]` - The client directory name (e.g., "apex-machinery", "ing-heng-credit")
- Used in paths: `/example-clients/[client-name]/`
- All file operations use this parameter
- If not provided, the agent will ask for it

## Purpose
Generate culturally-adapted native content for each language (NOT translation) for a specific client.

## Core Principle
**NEVER TRANSLATE** - Generate each language version from scratch using:
- Language-specific keyword research
- Cultural context and references specific to the client's niche
- Local idioms and expressions
- Appropriate examples and case studies relevant to the client's industry

## Language-Specific Guidelines

### English (EN) - B2B Professional Tone

**Target audience:** English-speaking business decision makers
**Tone:** Professional, authoritative, ROI-focused
**Content style:**
- Direct and concise
- Data-driven arguments
- Business case emphasis
- International examples

**Example opening:**
```markdown
# Equipment Financing Guide for Malaysian Contractors in 2025

For construction businesses in Malaysia, acquiring heavy equipment represents
a significant capital investment. Smart contractors are turning to equipment
financing to preserve cash flow while expanding their capabilities.

**Key benefit:** Reduce upfront costs by 80% while maintaining operational flexibility.
```

**CTA style:**
```markdown
**Ready to finance your next equipment purchase?**
WhatsApp us at +60175700889 for a free consultation.
```

---

### Mandarin Chinese Simplified (ZH) - Relationship-Focused

**Target audience:** 中文使用者, logistics operators, Chinese business owners
**Tone:** Relationship-oriented, trust-building, community-focused
**Content style:**
- Establish trust first
- Emphasize long-term relationships
- Family business context
- Local Chinese business examples

**Example opening:**
```markdown
# 2025年马来西亚设备融资指南：为您的物流业务提供可靠支持

在马来西亚经营物流业务，需要可信赖的合作伙伴。我们理解华人企业主的需求，
为您提供灵活的设备融资方案，帮助您的生意持续发展。

**为什么选择我们？** 20年服务经验，专注华人中小企业，灵活还款方案。
```

**CTA style:**
```markdown
**立即咨询，获得专业建议**
WhatsApp: +60175700889
我们的团队随时为您服务。
```

**Cultural elements to include:**
- 信任 (trust)
- 可靠 (reliable)
- 长期合作 (long-term partnership)
- 家族企业 (family business)
- 灵活方案 (flexible solutions)

---

### Bahasa Malaysia (MS) - Respectful & Service-Focused

**Target audience:** Malay contractors, construction businesses, government contractors
**Tone:** Respectful, service-oriented, authority-aware
**Content style:**
- Respectful language (perkhidmatan, bantuan)
- Government and regulation mentions
- Local context (CIDB, PKK)
- Community responsibility

**Example opening:**
```markdown
# Panduan Pembiayaan Jentera Pembinaan Malaysia 2025

Bagi kontraktor di Malaysia, memiliki jentera yang sesuai adalah kunci kejayaan
perniagaan. Kami menawarkan perkhidmatan pembiayaan yang mesra dan fleksibel
untuk membantu usahawan tempatan berkembang.

**Kelebihan:** Kurangkan kos permulaan sehingga 80% dengan syarat bayaran yang mudah.
```

**CTA style:**
```markdown
**Ingin dapatkan pembiayaan untuk jentera anda?**
Hubungi kami di WhatsApp +60175700889 untuk konsultasi percuma.
```

**Cultural elements to include:**
- Perkhidmatan (service)
- Bantuan (assistance)
- Mesra (friendly)
- Usahawan tempatan (local entrepreneurs)
- Syarat mudah (easy terms)
- References to: CIDB, PKK, government projects

---

## Content Structure Per Language

### Universal Structure (All Languages)
```markdown
1. Introduction (200-300 words)
   - Hook relevant to target audience
   - Problem statement
   - Solution preview

2. Main Content (1000-1500 words)
   - 4-6 H2 sections
   - Each with 2-3 H3 subsections
   - Examples relevant to language/culture
   - Data and statistics (localized)

3. FAQ Section (300-400 words)
   - 5-7 questions
   - Language-specific concerns
   - Schema markup ready

4. Conclusion & CTA (150-200 words)
   - Recap key benefits
   - Clear call-to-action
   - Contact information
```

### Language-Specific Examples

**English:** ROI calculators, business case studies, industry reports
**Mandarin:** Family business success stories, community trust, long-term relationships
**Malay:** Government project references, local contractor success, CIDB compliance

---

## SEO Optimization Per Language

### English SEO
- Meta title: 50-60 characters
- Meta description: 150-160 characters
- Focus on: "Malaysia", location terms, ROI keywords
- Internal links to: loan types, equipment categories, about us

### Mandarin SEO
- Meta title: 25-30 Chinese characters
- Meta description: 70-80 Chinese characters
- Focus on: 马来西亚, 雪兰莪, 物流, 融资
- Internal links to: 服务, 产品, 联系我们

### Malay SEO
- Meta title: 50-60 characters
- Meta description: 150-160 characters
- Focus on: Malaysia, Selangor, kontraktor, pembiayaan
- Internal links to: perkhidmatan, produk, hubungi kami

---

## Quality Checklist Per Language

### English Content ✅
- [ ] Professional business tone
- [ ] ROI and efficiency emphasized
- [ ] International or Malaysian business examples
- [ ] Clear value proposition
- [ ] Data-driven arguments

### Mandarin Content ✅
- [ ] Trust and relationship emphasis
- [ ] Community-oriented language
- [ ] Chinese business context
- [ ] Family business references
- [ ] Long-term partnership framing

### Malay Content ✅
- [ ] Respectful and service-oriented tone
- [ ] Local contractor context
- [ ] Government/authority mentions where relevant
- [ ] Community responsibility
- [ ] CIDB or regulatory references if applicable

---

## Common Pitfalls to Avoid

❌ **Don't translate word-for-word**
❌ **Don't use same examples across languages**
❌ **Don't ignore cultural context**
❌ **Don't use generic international examples for local languages**
❌ **Don't forget language-specific CTA styles**

✅ **Do research keywords independently per language**
✅ **Do use culturally relevant examples**
✅ **Do adapt tone and messaging**
✅ **Do use local references and context**
✅ **Do optimize for local search engines**

---

## Execution Timing
- Per blog post per language: ~5 minutes
- Total for 3 languages: ~15 minutes

## Agent Usage
This skill is used by: **Content Generation Agent**
Invoked after: `keyword-research.md` skill

## Success Criteria
✅ Each language version is native content (not translation)
✅ Cultural adaptation applied correctly
✅ Language-specific keywords used
✅ Appropriate tone and examples
✅ SEO optimized for local search
✅ Passes quality check for that language
