/**
 * Data loader utility for programmatic SEO pages
 * Loads location, brand, use-case, and equipment data
 */

import locationsData from '../data/locations.json';
import brandsData from '../data/brands.json';
import useCasesData from '../data/use-cases.json';
import equipmentTypesData from '../data/equipment-types.json';

// Type definitions
export interface Location {
  id: string;
  slug: { en: string; ms: string; zh: string };
  name: { en: string; ms: string; zh: string };
  capital: { en: string; ms: string; zh: string };
  majorCities: string[];
  industries: string[];
  businessStats: {
    smeCount: string;
    constructionProjects: string;
    industrialParks: number;
  };
  region: string;
  priority: number;
}

export interface Brand {
  id: string;
  slug: { en: string; ms: string; zh: string };
  name: { en: string; ms: string; zh: string };
  shortName: string;
  origin: string;
  founded: number;
  headquarters: string;
  website: string;
  strengths: { en: string[]; ms: string[]; zh: string[] };
  popularEquipment: string[];
  models: Record<string, string[]>;
  priceRange: { en: string; ms: string; zh: string };
  marketPosition: string;
  malaysiaPresence: string;
  priority: number;
}

export interface UseCase {
  id: string;
  slug: { en: string; ms: string; zh: string };
  name: { en: string; ms: string; zh: string };
  icon: string;
  targetAudience: { en: string[]; ms: string[]; zh: string[] };
  description: { en: string; ms: string; zh: string };
  challenges: { en: string[]; ms: string[]; zh: string[] };
  benefits: { en: string[]; ms: string[]; zh: string[] };
  relevantEquipment: string[];
  industryStat: {
    value: string;
    description: { en: string; ms: string; zh: string };
  };
  priority: number;
}

export interface EquipmentType {
  id: string;
  slug: { en: string; ms: string; zh: string };
  name: { en: string; ms: string; zh: string };
  pluralName: { en: string; ms: string; zh: string };
  description: { en: string; ms: string; zh: string };
  icon: string;
  image: string;
  priceRange: { min: number; max: number; currency: string };
  commonUses: { en: string[]; ms: string[]; zh: string[] };
  sizeCategories: string[];
  popularBrands: string[];
  financingInfo: {
    typicalTenure: string;
    downPayment: string;
    approvalTime: string;
  };
  exists: boolean;
  tier: number;
  priority: number;
}

type Locale = 'en' | 'ms' | 'zh';

// Data getters
export function getLocations(): Location[] {
  return locationsData.locations as Location[];
}

export function getBrands(): Brand[] {
  return brandsData.brands as Brand[];
}

export function getUseCases(): UseCase[] {
  return useCasesData.useCases as UseCase[];
}

export function getEquipmentTypes(): EquipmentType[] {
  return equipmentTypesData.equipmentTypes as EquipmentType[];
}

// Individual getters
export function getLocationById(id: string): Location | undefined {
  return getLocations().find(loc => loc.id === id);
}

export function getBrandById(id: string): Brand | undefined {
  return getBrands().find(brand => brand.id === id);
}

export function getUseCaseById(id: string): UseCase | undefined {
  return getUseCases().find(uc => uc.id === id);
}

export function getEquipmentById(id: string): EquipmentType | undefined {
  return getEquipmentTypes().find(equip => equip.id === id);
}

// Localized getters
export function getLocalizedText<T extends Record<string, any>>(
  obj: T,
  field: keyof T,
  locale: Locale
): string {
  const value = obj[field];
  if (typeof value === 'object' && value !== null && locale in value) {
    return value[locale];
  }
  return String(value);
}

// URL builders
export function buildLocationPageUrl(
  locale: Locale,
  equipmentId: string,
  locationId: string
): string {
  const location = getLocationById(locationId);
  if (!location) return '';

  const urlParts = {
    en: `/${locale}/equipment/${equipmentId}/financing-${location.slug.en}`,
    ms: `/${locale}/equipment/${equipmentId}/pembiayaan-${location.slug.ms}`,
    zh: `/${locale}/equipment/${equipmentId}/融资-${location.slug.zh}`,
  };

  return urlParts[locale];
}

export function buildBrandPageUrl(
  locale: Locale,
  equipmentId: string,
  brandId: string
): string {
  const brand = getBrandById(brandId);
  if (!brand) return '';

  return `/${locale}/equipment/${equipmentId}/brand/${brand.slug[locale]}-financing`;
}

export function buildUseCasePageUrl(
  locale: Locale,
  equipmentId: string,
  useCaseId: string
): string {
  const useCase = getUseCaseById(useCaseId);
  if (!useCase) return '';

  return `/${locale}/equipment/${equipmentId}/${useCase.slug[locale]}`;
}

// Generate all static paths for a given page type
export function generateLocationPaths(equipmentId: string) {
  const locales: Locale[] = ['en', 'ms', 'zh'];
  const locations = getLocations();
  const paths: { params: { lang: string; location: string } }[] = [];

  for (const locale of locales) {
    for (const location of locations) {
      paths.push({
        params: {
          lang: locale,
          location: location.id,
        },
      });
    }
  }

  return paths;
}

export function generateBrandPaths(equipmentId: string) {
  const locales: Locale[] = ['en', 'ms', 'zh'];
  const brands = getBrands();
  const paths: { params: { lang: string; brand: string } }[] = [];

  for (const locale of locales) {
    for (const brand of brands) {
      paths.push({
        params: {
          lang: locale,
          brand: brand.id,
        },
      });
    }
  }

  return paths;
}

export function generateUseCasePaths(equipmentId: string) {
  const locales: Locale[] = ['en', 'ms', 'zh'];
  const useCases = getUseCases();
  const paths: { params: { lang: string; useCase: string } }[] = [];

  for (const locale of locales) {
    for (const useCase of useCases) {
      paths.push({
        params: {
          lang: locale,
          useCase: useCase.id,
        },
      });
    }
  }

  return paths;
}

// Content generation helpers
export function formatCurrency(amount: number): string {
  return `RM ${amount.toLocaleString()}`;
}

export function getEquipmentPriceRange(equipment: EquipmentType): string {
  return `${formatCurrency(equipment.priceRange.min)} - ${formatCurrency(equipment.priceRange.max)}`;
}
