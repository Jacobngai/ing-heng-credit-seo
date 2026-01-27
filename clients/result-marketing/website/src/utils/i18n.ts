import type { Locale } from './constants';
import en from '../i18n/en.json';
import ms from '../i18n/ms.json';
import zh from '../i18n/zh.json';

const translations = {
  en,
  ms,
  zh
};

export function t(locale: Locale) {
  return (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[locale];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if translation is missing
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }

    return typeof value === 'string' ? value : key;
  };
}

export function getLocalizedPath(locale: Locale, path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${locale}/${cleanPath}`;
}

export function switchLocale(currentPath: string, newLocale: Locale, currentLocale: Locale): string {
  // Replace the current locale in the path with the new locale
  const regex = new RegExp(`^/${currentLocale}(/|$)`);
  return currentPath.replace(regex, `/${newLocale}$1`);
}
