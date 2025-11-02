/**
 * i18n Utility Functions for Ing Heng Credit
 * Handles translation loading and locale management
 */

import en from '../i18n/en.json';
import zh from '../i18n/zh.json';
import ms from '../i18n/ms.json';

export type Locale = 'en' | 'zh' | 'ms';

export const locales = ['en', 'zh', 'ms'] as const;
export const defaultLocale: Locale = 'en';

export const translations = {
  en,
  zh,
  ms,
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
export function t(key: string, locale: Locale): string {
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
    zh: '中文',
    ms: 'Bahasa Melayu',
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
    zh: {
      code: 'zh',
      name: '中文',
      flag: '🇨🇳',
      dir: 'ltr',
    },
    ms: {
      code: 'ms',
      name: 'Bahasa Melayu',
      flag: '🇲🇾',
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
 * Get alternate URL for different locale
 */
export function getAlternateUrl(currentPath: string, targetLocale: Locale): string {
  const currentLocale = getLocaleFromPath(currentPath);
  const pathWithoutLocale = currentPath.replace(`/${currentLocale}`, '');
  return `/${targetLocale}${pathWithoutLocale}`;
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
export function formatDate(date: Date | string, locale: Locale): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const localeFormats = {
    en: 'en-MY',
    zh: 'zh-Hans-MY',
    ms: 'ms-MY',
  };

  return dateObj.toLocaleDateString(localeFormats[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format number according to locale
 */
export function formatNumber(num: number, locale: Locale): string {
  const localeFormats = {
    en: 'en-MY',
    zh: 'zh-Hans-MY',
    ms: 'ms-MY',
  };

  return num.toLocaleString(localeFormats[locale]);
}

/**
 * Format currency according to locale
 */
export function formatCurrency(amount: number, locale: Locale, currency: string = 'MYR'): string {
  const localeFormats = {
    en: 'en-MY',
    zh: 'zh-Hans-MY',
    ms: 'ms-MY',
  };

  return new Intl.NumberFormat(localeFormats[locale], {
    style: 'currency',
    currency: currency,
  }).format(amount);
}
