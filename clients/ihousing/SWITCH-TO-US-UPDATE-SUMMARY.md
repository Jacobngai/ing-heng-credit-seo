# Switch-to-Us Pages Update Summary

**Date:** 2026-01-25
**Task:** Remove WhatsApp numbers and replace with contact form links
**Files Updated:** 30 files

---

## Changes Made

### 1. Removed WhatsApp Variables
**Before:**
```javascript
const whatsappNumber = '60196996688';
const whatsappMessage = encodeURIComponent(`Hi, I own a unit at ${condoName}...`);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
```

**After:**
```javascript
const contactFormLink = '/en/contact-form/'; // or '/ms/' or '/zh/'
```

### 2. Updated Button Text
- **Before:** "WhatsApp Us Now"
- **After:** "Contact Us Now"

### 3. Changed Button Elements
- **Before:** `<button>` elements with click handlers
- **After:** `<a>` elements with direct links to contact form

### 4. Removed Elements
- Entire popup modal form
- All JavaScript code for modal handling
- WhatsApp number displays

### 5. Updated Text References
- "WhatsApp us for custom pricing" → "Contact us for custom pricing"
- "WhatsApp us to claim this promo" → "Contact us to claim this promo"
- "Continue to WhatsApp" → Removed (replaced with direct links)

---

## Files Updated

### English (10 files)
1. ✅ atlantis-residence.astro
2. ✅ century-mahkota.astro
3. ✅ imperio-residence.astro
4. ✅ novo-8-residence.astro
5. ✅ ong-kim-wee-residence.astro
6. ✅ parkland-residence.astro
7. ✅ quartz-residence.astro
8. ✅ silverscape-residence.astro
9. ✅ the-shore-residence.astro
10. ✅ wave-residence.astro

### Malay (10 files)
1. ✅ atlantis-residence.astro
2. ✅ century-mahkota.astro
3. ✅ imperio-residence.astro
4. ✅ novo-8-residence.astro
5. ✅ ong-kim-wee-residence.astro
6. ✅ parkland-residence.astro
7. ✅ quartz-residence.astro
8. ✅ silverscape-residence.astro
9. ✅ the-shore-residence.astro
10. ✅ wave-residence.astro

### Chinese (10 files)
1. ✅ atlantis-residence.astro
2. ✅ century-mahkota.astro
3. ✅ imperio-residence.astro
4. ✅ novo-8-residence.astro
5. ✅ ong-kim-wee-residence.astro
6. ✅ parkland-residence.astro
7. ✅ quartz-residence.astro
8. ✅ silverscape-residence.astro
9. ✅ the-shore-residence.astro
10. ✅ wave-residence.astro

---

## Verification Results

✅ **Total files:** 30
✅ **Files with whatsappNumber removed:** 30/30 (0 remaining)
✅ **Files with wa.me links removed:** 30/30 (0 remaining)
✅ **Files with "WhatsApp Us Now" text removed:** 30/30 (0 remaining)
✅ **Files with <button> tags removed:** 30/30 (0 remaining)
✅ **Files with "Contact Us Now" added:** 30/30
✅ **Files with contactFormLink added:** 30/30
✅ **English files use:** `/en/contact-form/`
✅ **Malay files use:** `/ms/contact-form/`
✅ **Chinese files use:** `/zh/contact-form/`

---

## Next Steps

1. Test the contact form page to ensure it handles the source context properly
2. Build and test locally to ensure no broken links
3. Deploy to staging for final verification
4. Update production

---

## Technical Details

### Location
`C:\Users\walte\ing heng credit\ing-heng-credit-seo\clients\ihousing\website\src\pages\{lang}\switch-to-us\`

### Contact Form Links
- **English:** `/en/contact-form/`
- **Malay:** `/ms/contact-form/`
- **Chinese:** `/zh/contact-form/`

### Condo Pages Affected
All 10 condo properties have switch-to-us pages:
1. Parkland Residence
2. The Shore Residence
3. Imperio Residence
4. Silverscape Residence
5. Atlantis Residence
6. Wave Residence
7. Ong Kim Wee Residence
8. Century Mahkota
9. Novo 8 Residence
10. Quartz Residence
