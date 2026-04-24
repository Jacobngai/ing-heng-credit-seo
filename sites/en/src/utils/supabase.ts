import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export const INGHENG_PARTNERS_TABLE = 'ingheng_partners';
export const INGHENG_PARTNER_IMAGES_TABLE = 'ingheng_partner_images';
export const INGHENG_PARTNER_BUCKET = 'ingheng_partner_images';

let browserClient: SupabaseClient | undefined;

function getEnvVar(name: 'PUBLIC_SUPABASE_URL' | 'PUBLIC_SUPABASE_ANON_KEY') {
  const value = import.meta.env[name];

  if (!value) {
    console.warn(`[SUPABASE] Missing required environment variable: ${name}. Supabase features may fail.`);
    return 'MISSING_ENV_VAR';
  }

  return value;
}

export function getSupabaseUrl() {
  return getEnvVar('PUBLIC_SUPABASE_URL');
}

export function getSupabaseAnonKey() {
  return getEnvVar('PUBLIC_SUPABASE_ANON_KEY');
}

export function createServerSupabaseClient() {
  const url = getSupabaseUrl();
  const key = getSupabaseAnonKey();

  if (url === 'MISSING_ENV_VAR' || key === 'MISSING_ENV_VAR') {
    return null;
  }

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export function createBrowserSupabaseClient() {
  if (!browserClient) {
    const url = getSupabaseUrl();
    const key = getSupabaseAnonKey();

    if (url === 'MISSING_ENV_VAR' || key === 'MISSING_ENV_VAR') {
      return null;
    }

    browserClient = createClient(url, key);
  }

  return browserClient;
}

export function getPartnerAssetUrl(path: string | null | undefined) {
  if (!path) {
    return null;
  }

  const client = createServerSupabaseClient();
  if (!client) {
    return null;
  }

  return client.storage.from(INGHENG_PARTNER_BUCKET).getPublicUrl(path).data.publicUrl;
}

export function getBrowserPartnerAssetUrl(path: string | null | undefined) {
  if (!path) {
    return null;
  }

  const client = createBrowserSupabaseClient();
  if (!client) {
    return null;
  }

  return client.storage.from(INGHENG_PARTNER_BUCKET).getPublicUrl(path).data.publicUrl;
}

export function slugifyPartnerName(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
