# Blog System Quick Reference Guide

**Last Updated:** November 13, 2025
**Status:** Production-Ready ✅

---

## 🎯 How It Works (Simple!)

1. Create markdown file in `src/content/blogs/{lang}/filename.md`
2. Run `npm run build`
3. Blog appears automatically on `/blog` page
4. **Done!** No manual updates needed

---

## 📝 Creating Blog Posts

### Command ⑦ (Auto-Translates to ALL Languages):

```bash
/7-build-blog "how to apply for excavator financing Malaysia"
```

**What happens:**
- Generates English blog post (2,000 words)
- Auto-translates to Malay
- Auto-translates to Chinese
- Saves 3 files (EN, MS, ZH)
- Marks calendar completed

**Result:** 3 blog posts in 1 command! 🎉

---

## 📋 Frontmatter Template

```yaml
---
title: 'Your Blog Post Title'
description: 'Your 150-160 char meta description'
author: 'Ing Heng Credit & Leasing'
publishDate: 2025-11-13
category: 'Equipment Financing'
tags: ['tag1', 'tag2']
locale: 'en'
featured: false
draft: false
readingTime: 7
keywords:
  - 'keyword 1'
  - 'keyword 2'
faqSchema:
  - question: 'FAQ question?'
    answer: 'FAQ answer'
---
```

**Required:** title, description, author, publishDate, category, locale, keywords

---

## 🌍 Multi-Language

**Same slug, different folders:**
- `blogs/en/excavator-financing.md` → `/en/blog/excavator-financing`
- `blogs/ms/excavator-financing.md` → `/ms/blog/excavator-financing`
- `blogs/zh/excavator-financing.md` → `/zh/blog/excavator-financing`

---

## 📊 Valid Categories (Use English!)

```
- Equipment Financing
- Construction Equipment  
- Logistics Equipment
- Business Tips
- Industry News
- Case Studies
- Financing Guides
```

Even for MS/ZH posts, use English category names!

---

## ✅ Build & Deploy

```bash
npm run build        # Build site
npm run dev          # Test locally
# Then deploy (see root CLAUDE.md)
```

**Expected:** Posts appear on:
- http://localhost:4321/en/blog
- http://localhost:4321/ms/blog
- http://localhost:4321/zh/blog

---

## 🚨 Quick Fixes

**"Posts don't appear"**
→ Run `rm -rf .astro && npm run build`

**"Invalid category error"**  
→ Use English category name from list above

**"Duplicate /en/en/ URL"**
→ Already fixed in [slug].astro

---

**ONE template. AUTO-translate. AUTO-discovery. Done!** 🎉
