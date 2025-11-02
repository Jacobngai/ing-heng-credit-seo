# Image Metadata Usage Guide

**Quick Reference**: How to use the equipment image metadata in your Astro components

---

## Overview

The equipment image metadata is centralized in `src/data/equipment-images.ts` and provides multilingual titles, captions, and alt text for all 18 equipment photos. This guide shows you how to use this data in your Astro components.

---

## Basic Usage

### Import the Data

```typescript
import { equipmentImages, getImagesByCategory, getImageByFilename } from '../data/equipment-images';
```

### Display Single Image with Metadata

```astro
---
import { getImageByFilename } from '../data/equipment-images';

const lang = Astro.currentLocale || 'en';
const imageData = getImageByFilename('Komatsu PC350 Excavator.JPG');

// Get localized text based on language
const title = lang === 'ms' ? imageData.titleMS :
              lang === 'zh' ? imageData.titleZH :
              imageData.titleEN;

const alt = lang === 'ms' ? imageData.altTextMS :
            lang === 'zh' ? imageData.altTextZH :
            imageData.altTextEN;
---

<img
  src={`/images/equipment/${imageData.filename}`}
  alt={alt}
  title={title}
  loading="lazy"
/>
```

---

## Equipment Gallery Component

### Display All Equipment Images

```astro
---
// src/components/EquipmentGallery.astro
import { equipmentImages } from '../data/equipment-images';

const lang = Astro.currentLocale || 'en';

function getLocalizedText(image, field) {
  if (lang === 'ms') return image[`${field}MS`];
  if (lang === 'zh') return image[`${field}ZH`];
  return image[`${field}EN`];
}
---

<div class="equipment-gallery">
  {equipmentImages.map((image) => (
    <div class="equipment-card">
      <img
        src={`/images/equipment/${image.filename}`}
        alt={getLocalizedText(image, 'altText')}
        title={getLocalizedText(image, 'title')}
        loading="lazy"
      />
      <h3>{getLocalizedText(image, 'title')}</h3>
      <p>{getLocalizedText(image, 'caption')}</p>
      <p class="equipment-info">
        {image.brand} {image.model}
      </p>
    </div>
  ))}
</div>
```

---

## Category-Filtered Equipment

### Display Equipment by Category

```astro
---
// src/pages/[lang]/equipment/excavator.astro
import { getImagesByCategory } from '../../data/equipment-images';

const lang = Astro.currentLocale || 'en';
const excavatorImages = getImagesByCategory('excavator');

function getLocalizedText(image, field) {
  if (lang === 'ms') return image[`${field}MS`];
  if (lang === 'zh') return image[`${field}ZH`];
  return image[`${field}EN`];
}
---

<section class="excavator-equipment">
  <h1>
    {lang === 'en' && 'Excavator Financing'}
    {lang === 'ms' && 'Pembiayaan Jengkaut'}
    {lang === 'zh' && '挖掘机融资'}
  </h1>

  <div class="equipment-grid">
    {excavatorImages.map((image) => (
      <article class="equipment-item">
        <img
          src={`/images/equipment/${image.filename}`}
          alt={getLocalizedText(image, 'altText')}
          title={getLocalizedText(image, 'title')}
        />
        <h2>{getLocalizedText(image, 'title')}</h2>
        <p>{getLocalizedText(image, 'caption')}</p>
        <div class="equipment-details">
          <span class="brand">{image.brand}</span>
          <span class="model">{image.model}</span>
          <span class="type">{image.equipmentType}</span>
        </div>
      </article>
    ))}
  </div>
</section>
```

---

## Helper Function for Components

### Create Reusable Helper

```typescript
// src/utils/image-helpers.ts

import type { EquipmentImage } from '../data/equipment-images';

export function getLocalizedImageData(
  image: EquipmentImage,
  lang: string = 'en'
) {
  return {
    title: lang === 'ms' ? image.titleMS :
           lang === 'zh' ? image.titleZH :
           image.titleEN,

    caption: lang === 'ms' ? image.captionMS :
             lang === 'zh' ? image.captionZH :
             image.captionEN,

    altText: lang === 'ms' ? image.altTextMS :
             lang === 'zh' ? image.altTextZH :
             image.altTextEN,

    filename: image.filename,
    brand: image.brand,
    model: image.model,
    type: image.equipmentType,
    category: image.equipmentCategory,
  };
}
```

### Use Helper in Components

```astro
---
import { equipmentImages } from '../data/equipment-images';
import { getLocalizedImageData } from '../utils/image-helpers';

const lang = Astro.currentLocale || 'en';
const localizedImages = equipmentImages.map(img =>
  getLocalizedImageData(img, lang)
);
---

<div class="equipment-showcase">
  {localizedImages.map((img) => (
    <figure>
      <img
        src={`/images/equipment/${img.filename}`}
        alt={img.altText}
        title={img.title}
      />
      <figcaption>{img.caption}</figcaption>
    </figure>
  ))}
</div>
```

---

## SEO Component Integration

### Structured Data for Images

```astro
---
// Add to page head for rich results
import { getImageByFilename } from '../data/equipment-images';

const imageData = getImageByFilename('Komatsu PC350 Excavator.JPG');
const lang = Astro.currentLocale || 'en';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": `${Astro.site}/images/equipment/${imageData.filename}`,
  "name": lang === 'ms' ? imageData.titleMS :
          lang === 'zh' ? imageData.titleZH :
          imageData.titleEN,
  "description": lang === 'ms' ? imageData.captionMS :
                 lang === 'zh' ? imageData.captionZH :
                 imageData.captionEN,
  "creator": {
    "@type": "Organization",
    "name": "Ing Heng Credit"
  },
  "creditText": "Ing Heng Credit",
  "copyrightNotice": "© Ing Heng Credit"
};
---

<script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
```

---

## Blog Post Featured Images

### Use Equipment Images in Blog Posts

```astro
---
// src/pages/[lang]/blog/komatsu-excavator-financing.astro
import { getImageByFilename } from '../../../data/equipment-images';
import { getLocalizedImageData } from '../../../utils/image-helpers';

const lang = Astro.currentLocale || 'en';
const imageData = getImageByFilename('Komatsu PC350 Excavator.JPG');
const localizedData = getLocalizedImageData(imageData, lang);
---

<article class="blog-post">
  <header>
    <h1>{localizedData.title}</h1>
    <img
      src={`/images/equipment/${localizedData.filename}`}
      alt={localizedData.altText}
      title={localizedData.title}
      class="featured-image"
    />
  </header>

  <div class="blog-content">
    <p>{localizedData.caption}</p>
    <!-- Rest of blog content -->
  </div>
</article>
```

---

## Equipment Carousel

### Create Image Carousel with Metadata

```astro
---
import { equipmentImages } from '../data/equipment-images';
import { getLocalizedImageData } from '../utils/image-helpers';

const lang = Astro.currentLocale || 'en';
const featuredImages = equipmentImages.slice(0, 6).map(img =>
  getLocalizedImageData(img, lang)
);
---

<div class="equipment-carousel">
  {featuredImages.map((img, index) => (
    <div class="carousel-slide" data-slide={index}>
      <img
        src={`/images/equipment/${img.filename}`}
        alt={img.altText}
        title={img.title}
      />
      <div class="carousel-caption">
        <h3>{img.brand} {img.model}</h3>
        <p>{img.caption}</p>
        <a href={`/${lang}/equipment/${img.category}`} class="btn">
          {lang === 'en' && 'Learn More'}
          {lang === 'ms' && 'Ketahui Lebih Lanjut'}
          {lang === 'zh' && '了解更多'}
        </a>
      </div>
    </div>
  ))}
</div>
```

---

## Filter Equipment by Brand

### Display Equipment by Brand

```astro
---
import { equipmentImages, getAllBrands } from '../data/equipment-images';

const lang = Astro.currentLocale || 'en';
const brands = getAllBrands();
const selectedBrand = Astro.url.searchParams.get('brand') || brands[0];

const brandEquipment = equipmentImages.filter(img =>
  img.brand === selectedBrand
);
---

<div class="brand-filter">
  <select id="brand-selector">
    {brands.map(brand => (
      <option value={brand} selected={brand === selectedBrand}>
        {brand}
      </option>
    ))}
  </select>

  <div class="brand-equipment-grid">
    {brandEquipment.map((img) => (
      <div class="equipment-card">
        <img
          src={`/images/equipment/${img.filename}`}
          alt={lang === 'ms' ? img.altTextMS :
               lang === 'zh' ? img.altTextZH :
               img.altTextEN}
        />
        <h3>{img.model}</h3>
      </div>
    ))}
  </div>
</div>
```

---

## Related Equipment Section

### Show Related Equipment

```astro
---
import { equipmentImages } from '../data/equipment-images';

const currentEquipment = 'Komatsu PC350 Excavator.JPG';
const currentImage = equipmentImages.find(img => img.filename === currentEquipment);

// Get related equipment from same category
const relatedEquipment = equipmentImages
  .filter(img =>
    img.equipmentCategory === currentImage.equipmentCategory &&
    img.filename !== currentEquipment
  )
  .slice(0, 3);

const lang = Astro.currentLocale || 'en';
---

<section class="related-equipment">
  <h2>
    {lang === 'en' && 'Related Equipment'}
    {lang === 'ms' && 'Peralatan Berkaitan'}
    {lang === 'zh' && '相关设备'}
  </h2>

  <div class="related-grid">
    {relatedEquipment.map((img) => (
      <div class="related-item">
        <img
          src={`/images/equipment/${img.filename}`}
          alt={lang === 'ms' ? img.altTextMS :
               lang === 'zh' ? img.altTextZH :
               img.altTextEN}
        />
        <h3>{img.brand} {img.model}</h3>
      </div>
    ))}
  </div>
</section>
```

---

## Best Practices

### 1. Always Use Localized Metadata
```astro
<!-- ❌ BAD: Hardcoded English text -->
<img src="/images/equipment/komatsu.jpg" alt="Komatsu excavator" />

<!-- ✅ GOOD: Localized from metadata -->
<img
  src={`/images/equipment/${image.filename}`}
  alt={getLocalizedText(image, 'altText')}
/>
```

### 2. Include Title Attribute
```astro
<!-- ✅ GOOD: Both alt and title for better SEO -->
<img
  src={`/images/equipment/${image.filename}`}
  alt={localizedData.altText}
  title={localizedData.title}
/>
```

### 3. Use Lazy Loading
```astro
<!-- ✅ GOOD: Lazy load for performance -->
<img
  src={`/images/equipment/${image.filename}`}
  alt={localizedData.altText}
  loading="lazy"
/>
```

### 4. Provide Figcaption
```astro
<!-- ✅ GOOD: Accessible and SEO-friendly -->
<figure>
  <img
    src={`/images/equipment/${image.filename}`}
    alt={localizedData.altText}
  />
  <figcaption>{localizedData.caption}</figcaption>
</figure>
```

---

## TypeScript Support

### Type-Safe Component

```typescript
// src/components/EquipmentImage.astro
---
import type { EquipmentImage } from '../data/equipment-images';

interface Props {
  image: EquipmentImage;
  lang?: 'en' | 'ms' | 'zh';
  lazy?: boolean;
}

const { image, lang = 'en', lazy = true } = Astro.props;

const title = lang === 'ms' ? image.titleMS :
              lang === 'zh' ? image.titleZH :
              image.titleEN;

const alt = lang === 'ms' ? image.altTextMS :
            lang === 'zh' ? image.altTextZH :
            image.altTextEN;
---

<img
  src={`/images/equipment/${image.filename}`}
  alt={alt}
  title={title}
  loading={lazy ? 'lazy' : 'eager'}
  class="equipment-image"
/>
```

### Usage
```astro
---
import EquipmentImage from '../components/EquipmentImage.astro';
import { getImageByFilename } from '../data/equipment-images';

const image = getImageByFilename('Komatsu PC350 Excavator.JPG');
---

<EquipmentImage
  image={image}
  lang="en"
  lazy={true}
/>
```

---

## Quick Reference Table

| Function | Purpose | Example |
|----------|---------|---------|
| `equipmentImages` | Get all images | `equipmentImages.map(...)` |
| `getImagesByCategory(category)` | Filter by category | `getImagesByCategory('excavator')` |
| `getImageByFilename(name)` | Get single image | `getImageByFilename('Komatsu PC350 Excavator.JPG')` |
| `getAllBrands()` | Get unique brands | `getAllBrands()` → `['Caterpillar', 'Komatsu', ...]` |
| `getAllEquipmentTypes()` | Get unique types | `getAllEquipmentTypes()` → `['Excavator', 'Forklift', ...]` |

---

## Examples by Page Type

### Homepage
```astro
// Show 6 featured equipment images
const featured = equipmentImages.slice(0, 6);
```

### Equipment Index
```astro
// Show all equipment
const all = equipmentImages;
```

### Category Page
```astro
// Show category-specific equipment
const excavators = getImagesByCategory('excavator');
```

### Single Equipment Page
```astro
// Show one equipment detail
const equipment = getImageByFilename('Komatsu PC350 Excavator.JPG');
```

---

**Pro Tip**: Always test your multilingual pages to ensure the correct language metadata is displayed!

---

*Guide created: November 2, 2025*
*Project: Ing Heng Credit Website*
