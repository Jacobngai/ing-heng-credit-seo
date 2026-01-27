/**
 * i18n Utility Functions for Ing Heng Credit - English Only
 * Simplified version for single-language site
 */

import en from '../i18n/en.json';

export type Locale = 'en';

export const locales = ['en'] as const;
export const defaultLocale: Locale = 'en';

export const translations = {
  en,
} as const;

/**
 * Get translation for a specific locale
 */
export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}

/**
 * Get nested translation value using dot notation
 * Example: t('nav.home') returns the value at translations[locale].nav.home
 */
export function t(key: string, locale: Locale = 'en'): string {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key} for locale: ${locale}`);
      return key;
    }
  }

  return typeof value === 'string' ? value : key;
}

/**
 * Get locale name in native language
 */
export function getLocaleName(locale: Locale): string {
  const localeNames = {
    en: 'English',
  };
  return localeNames[locale];
}

/**
 * Get locale display info
 */
export function getLocaleInfo(locale: Locale) {
  const localeInfo = {
    en: {
      code: 'en',
      name: 'English',
      flag: '🇬🇧',
      dir: 'ltr',
    },
  };
  return localeInfo[locale];
}

/**
 * Parse locale from URL path
 */
export function getLocaleFromPath(path: string): Locale {
  const segments = path.split('/').filter(Boolean);
  const potentialLocale = segments[0] as Locale;

  if (locales.includes(potentialLocale)) {
    return potentialLocale;
  }

  return defaultLocale;
}

/**
 * Get alternate URL for different locale (returns same URL for EN-only site)
 */
export function getAlternateUrl(currentPath: string, targetLocale: Locale): string {
  // For English-only site, return the same path
  return currentPath;
}

/**
 * Check if locale is valid
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * Format date according to locale
 */
export function formatDate(date: Date | string, locale: Locale = 'en'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return dateObj.toLocaleDateString('en-MY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format number according to locale
 */
export function formatNumber(num: number, locale: Locale = 'en'): string {
  return num.toLocaleString('en-MY');
}

/**
 * Format currency according to locale
 */
export function formatCurrency(amount: number, locale: Locale = 'en', currency: string = 'MYR'): string {
  return new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}
