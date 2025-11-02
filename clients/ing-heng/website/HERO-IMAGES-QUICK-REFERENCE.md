# Hero Images Quick Reference

## Status: COMPLETE ✅

All 8 hero images have been implemented using existing equipment photos as temporary placeholders.

---

## Current Hero Images

| Hero Image | Source | Status | Size |
|---|---|---|---|
| `equipment-hero.jpg` | Caterpillar 966C | ✅ Good | 1.6MB |
| `excavator-hero.jpg` | Komatsu PC350 | ✅ Perfect | 856KB |
| `forklift-hero.jpg` | Mitsubishi FD250 | ✅ Perfect | 1.2MB |
| `bulldozer-hero.jpg` | Caterpillar 966C | ✅ Good | 1.6MB |
| `crane-hero.jpg` | 25T Remote Grab | ✅ Good | 97KB |
| `lorry-hero.jpg` | Nissan Tipper | ✅ Perfect | 179KB |
| `prime-mover-hero.jpg` | Volvo Prime Mover | ✅ Perfect | 1.6MB |
| `refrigerated-truck-hero.jpg` | Nissan Tipper | ⚠️ Placeholder | 179KB |

**Total**: 8 images, 7.2MB

---

## Quick Actions

### To Optimize Images (Recommended before launch)
```bash
# Convert to WebP and compress
cd clients/ing-heng/website/public/images/
# Use online converter or image optimization tool
# Target: <300KB per image
```

### To Replace an Image
1. Place new image in `public/images/`
2. Name it exactly: `{equipment-type}-hero.jpg`
3. Recommended size: 1920x1080px
4. Recommended format: WebP or JPG
5. Recommended file size: <300KB

### To Add Error Handling (Already Done)
The Hero component already handles missing images gracefully:
```astro
<img onerror="this.style.display='none'" />
```

---

## Pages Using Hero Images

### All Equipment Pages (3 languages × 8 equipment types = 24 pages)
- `/en/equipment/` - equipment-hero.jpg
- `/en/equipment/excavator` - excavator-hero.jpg
- `/en/equipment/forklift` - forklift-hero.jpg
- `/en/equipment/bulldozer` - bulldozer-hero.jpg
- `/en/equipment/crane` - crane-hero.jpg
- `/en/equipment/lorry` - lorry-hero.jpg
- `/en/equipment/prime-mover` - prime-mover-hero.jpg
- `/en/equipment/refrigerated-truck` - refrigerated-truck-hero.jpg

(Same structure for `/ms/` and `/zh/`)

---

## Priority Replacements

### HIGH Priority
- ❗ **refrigerated-truck-hero.jpg** - Currently using generic tipper truck

### MEDIUM Priority
- **All images** - Convert to WebP and optimize to <300KB

### LOW Priority
- Professional photo shoot with client's actual equipment

---

## Related Documentation

- `MISSING-HERO-IMAGES.md` - Full documentation of issue and requirements
- `HERO-IMAGES-IMPLEMENTATION-REPORT.md` - Detailed implementation report

---

**Last Updated**: November 2, 2025
