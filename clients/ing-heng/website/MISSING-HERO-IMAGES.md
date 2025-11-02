# Missing Hero Images Documentation

## Issue Summary
The website's Hero component references 8 background images that are currently missing from the `public/images/` directory. This results in broken hero sections on equipment landing pages.

---

## Missing Images List

The following hero images are referenced but do not exist:

### Equipment Category Pages
1. **equipment-hero.jpg** - Used on main equipment listing page
   - Referenced in: `src/pages/en/equipment/index.astro` (and ms, zh versions)
   - Recommended size: 1920x1080px
   - Recommended format: WebP or JPG

### Individual Equipment Pages
2. **excavator-hero.jpg** - Excavator financing page hero
   - Referenced in: `src/pages/en/equipment/excavator.astro` (and ms, zh versions)
   - Recommended size: 1920x1080px
   - Recommended format: WebP or JPG

3. **forklift-hero.jpg** - Forklift financing page hero
   - Referenced in: `src/pages/en/equipment/forklift.astro` (and ms, zh versions)
   - Recommended size: 1920x1080px
   - Recommended format: WebP or JPG

4. **bulldozer-hero.jpg** - Bulldozer financing page hero
   - Referenced in: `src/pages/en/equipment/bulldozer.astro` (and ms, zh versions)
   - Recommended size: 1920x1080px
   - Recommended format: WebP or JPG

5. **crane-hero.jpg** - Crane financing page hero
   - Referenced in: `src/pages/en/equipment/crane.astro` (and ms, zh versions)
   - Recommended size: 1920x1080px
   - Recommended format: WebP or JPG

6. **lorry-hero.jpg** - Lorry financing page hero
   - Referenced in: `src/pages/en/equipment/lorry.astro` (and ms, zh versions)
   - Recommended size: 1920x1080px
   - Recommended format: WebP or JPG

7. **prime-mover-hero.jpg** - Prime mover financing page hero
   - Referenced in: `src/pages/en/equipment/prime-mover.astro` (and ms, zh versions)
   - Recommended size: 1920x1080px
   - Recommended format: WebP or JPG

8. **refrigerated-truck-hero.jpg** - Refrigerated truck financing page hero
   - Referenced in: `src/pages/en/equipment/refrigerated-truck.astro` (and ms, zh versions)
   - Recommended size: 1920x1080px
   - Recommended format: WebP or JPG

---

## Technical Requirements

### Image Specifications
- **Dimensions**: 1920x1080px (16:9 aspect ratio) - optimized for full-width hero sections
- **Format**: WebP (preferred for best performance) or JPG
- **File Size**: Aim for <300KB per image for optimal page load speed
- **Quality**: High quality, professional photography
- **Content**: Should feature the respective equipment type in professional/industrial settings

### Where to Place Images
All hero images should be placed in:
```
clients/ing-heng/website/public/images/
```

### Naming Convention
Use kebab-case naming exactly as referenced:
- `equipment-hero.jpg`
- `excavator-hero.jpg`
- `forklift-hero.jpg`
- etc.

---

## Current Impact

### Build Status
- Build is NOT blocked - website compiles successfully
- Images are referenced but gracefully degrade when missing

### User Experience
- Hero sections display with gradient overlay but no background image
- No broken image icons (handled gracefully by Hero component)
- All other functionality works correctly

### SEO Impact
- LOW - Missing hero images don't affect SEO rankings
- Image optimization can improve Core Web Vitals when added

---

## Temporary Fallback Solution

### Option A: Equipment Photos as Temporary Heroes (IMPLEMENTED)
The following equipment photos from `clients/ing-heng/images/equipment-photos/` have been copied as temporary hero images:

- **Caterpillar 966C.JPG** → `bulldozer-hero.jpg` (wheel loader, similar equipment)
- **Komatsu PC350 Excavator.JPG** → `excavator-hero.jpg`
- **Mitsubishi FD250 Forklift.JPG** → `forklift-hero.jpg`
- **Nissan Tipper Truck.jpg** → `lorry-hero.jpg`
- **Volvo Prime Mover.JPG** → `prime-mover-hero.jpg`

### Missing Temporary Images
Still need temporary images for:
- **equipment-hero.jpg** - General equipment collage/overview
- **crane-hero.jpg** - No crane photo available
- **refrigerated-truck-hero.jpg** - No refrigerated truck photo available

### Fallback in Hero Component
The Hero component has been updated with error handling:
```astro
<img
  src={heroImage}
  alt=""
  onerror="this.style.display='none'"
  ...
/>
```

If image fails to load, the gradient overlay provides visual appeal.

---

## Future Action Items

### Phase 1: Short-term (Before Launch)
- [ ] Source professional hero images for all 8 equipment types
- [ ] Optimize images to WebP format (<300KB each)
- [ ] Test images on all device sizes (mobile, tablet, desktop)
- [ ] Verify hero sections display correctly across all language versions

### Phase 2: Long-term (Post-Launch)
- [ ] Consider using client's actual financed equipment photos
- [ ] Add image alt text for better accessibility
- [ ] Implement lazy loading for hero images
- [ ] A/B test different hero images for conversion optimization

---

## Alternative Solutions

### Option 1: Use Generic Equipment Finance Hero
Create a single versatile hero image showing:
- Multiple types of equipment
- Professional financing/business context
- Malaysian business setting

### Option 2: AI-Generated/Stock Photography
- Source from stock photo sites (Unsplash, Pexels, Shutterstock)
- Use AI image generation for specific equipment scenarios
- Ensure commercial license for all images

### Option 3: Client Photo Shoot
- Arrange professional photography of client's financed equipment
- Capture real Malaysian businesses using their financed equipment
- Most authentic but highest cost and time investment

---

## Notes

- **Priority**: LOW - Does not block website launch or functionality
- **Budget**: Consider stock photo subscription or one-time purchases
- **Timeline**: Can be added post-launch without code changes
- **Maintenance**: Update images as new equipment photos become available

---

## Testing Checklist

After adding hero images:
- [ ] Verify all 8 hero images load on equipment pages
- [ ] Test image display on mobile, tablet, desktop viewports
- [ ] Confirm images don't cause layout shifts (CLS)
- [ ] Check page load performance (aim for LCP < 2.5s)
- [ ] Validate images display in all 3 language versions (en, ms, zh)
- [ ] Test on different browsers (Chrome, Safari, Firefox, Edge)

---

**Last Updated**: November 2, 2025
**Status**: Documented with temporary fallback solution implemented
