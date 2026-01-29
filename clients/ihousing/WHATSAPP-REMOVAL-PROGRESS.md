# WhatsApp Number Removal - Progress Tracker

**Started:** 2026-01-25
**Objective:** Hide all WhatsApp numbers and replace with contact form for lead tracking
**Scope:** Affects 86% of codebase (~885 files)

---

## ✅ COMPLETED

### 1. Universal Contact Form (100%)
- ✅ Created `/en/contact-form.astro` - English version
- ✅ Created `/zh/contact-form.astro` - Chinese version
- ✅ Created `/ms/contact-form.astro` - Malay version
- ✅ Features:
  - Collects lead data (name, phone, email, property, interest, message)
  - Captures referrer URL for tracking
  - On submit: redirects to WhatsApp with pre-filled message
  - WhatsApp number hidden from public view
  - Mobile responsive
  - Multi-language support

### 2. Layout.astro Update (100%)
- ✅ Made layout language-aware (detects en/zh/ms from URL)
- ✅ Removed WhatsApp phone number from header
- ✅ Removed WhatsApp phone number from footer
- ✅ Replaced all "WhatsApp Us" buttons with "Contact Us" buttons
- ✅ All buttons now link to `/{lang}/contact-form/`
- ✅ Navigation labels translated for all languages
- ✅ Mobile menu updated

### 3. Main Contact Pages (100%)
- ✅ Updated `/en/contact.astro`
  - Removed WhatsApp number displays
  - Removed direct wa.me links
  - Removed popup form (now redirects to contact-form)
  - Simplified to 2 contact options: Contact Form & Request Call
- ✅ Updated `/zh/contact.astro`
  - Complete rewrite with Chinese translations
  - No WhatsApp numbers
  - Links to `/zh/contact-form/`
- ✅ Updated `/ms/contact.astro`
  - Complete rewrite with Malay translations
  - No WhatsApp numbers
  - Links to `/ms/contact-form/`

---

## 🚧 IN PROGRESS

### 4. Parkland Pages (0%)
**Files to update:**
- `/en/parkland/avenue-by-the-sea/*.astro` (multiple pages)
- `/en/parkland/owners/contact.astro`
- Chinese and Malay Parkland pages

**Actions needed:**
- Remove WhatsApp number displays
- Replace WhatsApp buttons with contact form links
- Update forms to redirect to contact-form with context

---

## 📋 PENDING

### 5. Service & Property Pages (0%)
**Directories:**
- `/en/services/*.astro`
- `/en/properties/*.astro`
- `/en/switch-to-us/*.astro` (15 files)
- Chinese and Malay versions

**Estimated files:** ~50-70 files

### 6. Blog Posts (0%)
**Scope:**
- All blog posts in `/en/blog/*.astro`
- Blog template in `BlogPost.astro`
- Chinese and Malay blog posts

**Estimated files:** 200+ blog files

---

## 🎯 NEXT STEPS

1. **Update Parkland Avenue pages** - High priority (main landing page)
2. **Update service pages** - Medium priority
3. **Update switch-to-us pages** - Medium priority (15 files)
4. **Update BlogPost.astro template** - Then all blogs inherit changes
5. **Test all contact forms** - Verify redirect to WhatsApp works correctly
6. **Test language switching** - Verify all languages work properly

---

## 📊 SUMMARY

**Completed:** 3 of 6 tasks (50%)
**Files Updated:** ~10 core files
**Impact Area:**
- ✅ Layout (affects all pages)
- ✅ Contact forms (core lead capture)
- ✅ Main contact pages
- ⏳ Parkland pages (high priority)
- ⏳ Service/property pages
- ⏳ Blog posts (200+ files)

**Estimated Remaining Work:** ~270 files to update

---

## 🔧 TECHNICAL NOTES

### How the Lead Tracking Works:
1. User clicks "Contact Us" button anywhere on site
2. Redirected to `/{lang}/contact-form/`
3. User fills in details (name, phone, email, property interest, message)
4. On submit, JavaScript constructs WhatsApp message with:
   - All form fields
   - Referrer page URL (for tracking which page drove the lead)
5. Opens WhatsApp with pre-filled message
6. WhatsApp number (`60196996688`) used only in redirect URL, never displayed

### Benefits:
- ✅ All leads go through form first (data collection)
- ✅ Track which pages generate most leads (referrer tracking)
- ✅ WhatsApp number hidden from scrapers
- ✅ Structured lead data
- ✅ Better user experience (context-aware messages)

---

**Last Updated:** 2026-01-25
