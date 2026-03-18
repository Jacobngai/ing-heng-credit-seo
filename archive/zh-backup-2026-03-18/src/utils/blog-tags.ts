/**
 * Blog tag utility for programmatic SEO blog posts
 * Handles multi-tag hierarchy: Equipment, Location, Topic, Brand
 */

import blogTagsData from '../data/blog-tags.json';

// Type definitions
export type Locale = 'en' | 'ms' | 'zh';

export interface TagCategory {
  id: string;
  name: { en: string; ms: string; zh: string };
  slug: { en: string; ms: string; zh: string };
  description: { en: string; ms: string; zh: string };
  icon: string;
}

export interface Tag {
  id: string;
  name: { en: string; ms: string; zh: string };
  slug: { en: string; ms: string; zh: string };
  icon?: string;
  shortName?: string;
  priority: number;
}

export interface BlogPost {
  id: string;
  title: { en: string; ms: string; zh: string };
  slug: { en: string; ms: string; zh: string };
  excerpt: { en: string; ms: string; zh: string };
  content: { en: string; ms: string; zh: string };
  date: string;
  author: string;
  readTime: number;
  image?: string;
  tags: {
    equipment?: string[];
    location?: string[];
    topic?: string[];
    brand?: string[];
  };
  featured?: boolean;
}

// Data getters
export function getTagCategories(): TagCategory[] {
  return blogTagsData.tagCategories as TagCategory[];
}

export function getEquipmentTags(): Tag[] {
  return blogTagsData.equipmentTags as Tag[];
}

export function getLocationTags(): Tag[] {
  return blogTagsData.locationTags as Tag[];
}

export function getTopicTags(): Tag[] {
  return blogTagsData.topicTags as Tag[];
}

export function getBrandTags(): Tag[] {
  return blogTagsData.brandTags as Tag[];
}

// Individual tag getters
export function getEquipmentTagById(id: string): Tag | undefined {
  return getEquipmentTags().find(tag => tag.id === id);
}

export function getLocationTagById(id: string): Tag | undefined {
  return getLocationTags().find(tag => tag.id === id);
}

export function getTopicTagById(id: string): Tag | undefined {
  return getTopicTags().find(tag => tag.id === id);
}

export function getBrandTagById(id: string): Tag | undefined {
  return getBrandTags().find(tag => tag.id === id);
}

// Localized getters
export function getTagName(tag: Tag, locale: Locale): string {
  return tag.name[locale] || tag.name.en;
}

export function getTagSlug(tag: Tag, locale: Locale): string {
  return tag.slug[locale] || tag.slug.en;
}

// URL builders for blog tag pages
export function buildEquipmentTagUrl(locale: Locale, equipmentId: string): string {
  const tag = getEquipmentTagById(equipmentId);
  if (!tag) return '';

  const categorySlug = locale === 'ms' ? 'peralatan' : locale === 'zh' ? '设备' : 'equipment';
  return `/${locale}/blog/${categorySlug}/${tag.slug[locale]}`;
}

export function buildLocationTagUrl(locale: Locale, locationId: string): string {
  const tag = getLocationTagById(locationId);
  if (!tag) return '';

  const categorySlug = locale === 'ms' ? 'lokasi' : locale === 'zh' ? '地点' : 'location';
  return `/${locale}/blog/${categorySlug}/${tag.slug[locale]}`;
}

export function buildTopicTagUrl(locale: Locale, topicId: string): string {
  const tag = getTopicTagById(topicId);
  if (!tag) return '';

  const categorySlug = locale === 'ms' ? 'topik' : locale === 'zh' ? '主题' : 'topic';
  return `/${locale}/blog/${categorySlug}/${tag.slug[locale]}`;
}

export function buildBrandTagUrl(locale: Locale, brandId: string): string {
  const tag = getBrandTagById(brandId);
  if (!tag) return '';

  const categorySlug = locale === 'ms' ? 'jenama' : locale === 'zh' ? '品牌' : 'brand';
  return `/${locale}/blog/${categorySlug}/${tag.slug[locale]}`;
}

// Build blog post URL (location-first structure)
export function buildBlogPostUrl(
  locale: Locale,
  locationId: string,
  equipmentId: string
): string {
  const location = getLocationTagById(locationId);
  const equipment = getEquipmentTagById(equipmentId);
  if (!location || !equipment) return '';

  const categorySlug = locale === 'ms' ? 'lokasi' : locale === 'zh' ? '地点' : 'location';
  return `/${locale}/blog/${categorySlug}/${location.slug[locale]}/${equipment.slug[locale]}`;
}

// Generate all static paths for tag pages
export function generateEquipmentTagPaths() {
  const locales: Locale[] = ['en', 'ms', 'zh'];
  const tags = getEquipmentTags();
  const paths: { params: { lang: string; tag: string } }[] = [];

  for (const locale of locales) {
    for (const tag of tags) {
      paths.push({
        params: {
          lang: locale,
          tag: tag.slug[locale],
        },
      });
    }
  }

  return paths;
}

export function generateLocationTagPaths() {
  const locales: Locale[] = ['en', 'ms', 'zh'];
  const tags = getLocationTags();
  const paths: { params: { lang: string; tag: string } }[] = [];

  for (const locale of locales) {
    for (const tag of tags) {
      paths.push({
        params: {
          lang: locale,
          tag: tag.slug[locale],
        },
      });
    }
  }

  return paths;
}

export function generateTopicTagPaths() {
  const locales: Locale[] = ['en', 'ms', 'zh'];
  const tags = getTopicTags();
  const paths: { params: { lang: string; tag: string } }[] = [];

  for (const locale of locales) {
    for (const tag of tags) {
      paths.push({
        params: {
          lang: locale,
          tag: tag.slug[locale],
        },
      });
    }
  }

  return paths;
}

export function generateBrandTagPaths() {
  const locales: Locale[] = ['en', 'ms', 'zh'];
  const tags = getBrandTags();
  const paths: { params: { lang: string; tag: string } }[] = [];

  for (const locale of locales) {
    for (const tag of tags) {
      paths.push({
        params: {
          lang: locale,
          tag: tag.slug[locale],
        },
      });
    }
  }

  return paths;
}

// Generate paths for location-based blog posts (location/equipment combinations)
export function generateLocationEquipmentPaths() {
  const locales: Locale[] = ['en', 'ms', 'zh'];
  const locations = getLocationTags();
  const equipment = getEquipmentTags();
  const paths: { params: { lang: string; location: string; equipment: string } }[] = [];

  for (const locale of locales) {
    for (const loc of locations) {
      for (const equip of equipment) {
        paths.push({
          params: {
            lang: locale,
            location: loc.slug[locale],
            equipment: equip.slug[locale],
          },
        });
      }
    }
  }

  return paths;
}

// Get tag by slug (for dynamic routing)
export function getEquipmentTagBySlug(slug: string, locale: Locale): Tag | undefined {
  return getEquipmentTags().find(tag => tag.slug[locale] === slug);
}

export function getLocationTagBySlug(slug: string, locale: Locale): Tag | undefined {
  return getLocationTags().find(tag => tag.slug[locale] === slug);
}

export function getTopicTagBySlug(slug: string, locale: Locale): Tag | undefined {
  return getTopicTags().find(tag => tag.slug[locale] === slug);
}

export function getBrandTagBySlug(slug: string, locale: Locale): Tag | undefined {
  return getBrandTags().find(tag => tag.slug[locale] === slug);
}

// Build brand+equipment blog post URL
export function buildBrandEquipmentPostUrl(
  locale: Locale,
  brandId: string,
  equipmentId: string
): string {
  const brand = getBrandTagById(brandId);
  const equipment = getEquipmentTagById(equipmentId);
  if (!brand || !equipment) return '';

  const categorySlug = locale === 'ms' ? 'jenama' : locale === 'zh' ? '品牌' : 'brand';
  return `/${locale}/blog/${categorySlug}/${brand.slug[locale]}/${equipment.slug[locale]}`;
}

// Generate paths for brand-based blog posts (brand/equipment combinations)
export function generateBrandEquipmentPaths() {
  const locales: Locale[] = ['en', 'ms', 'zh'];
  const brands = getBrandTags();
  const equipment = getEquipmentTags();
  const paths: { params: { lang: string; brand: string; equipment: string } }[] = [];

  for (const locale of locales) {
    for (const brand of brands) {
      for (const equip of equipment) {
        paths.push({
          params: {
            lang: locale,
            brand: brand.slug[locale],
            equipment: equip.slug[locale],
          },
        });
      }
    }
  }

  return paths;
}

// Stats for display
export function getTagStats() {
  return {
    equipment: getEquipmentTags().length,
    locations: getLocationTags().length,
    topics: getTopicTags().length,
    brands: getBrandTags().length,
    totalPossiblePosts: getEquipmentTags().length * getLocationTags().length, // 9 × 14 = 126 per language
    totalWithLanguages: getEquipmentTags().length * getLocationTags().length * 3, // 126 × 3 = 378
    brandPosts: getBrandTags().length * getEquipmentTags().length * 3, // 10 × 9 × 3 = 270
  };
}
