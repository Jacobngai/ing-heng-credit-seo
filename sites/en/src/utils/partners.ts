import {
  createServerSupabaseClient,
  getPartnerAssetUrl,
  INGHENG_PARTNER_IMAGES_TABLE,
  INGHENG_PARTNERS_TABLE,
} from './supabase';

export interface PartnerRow {
  id: string;
  slug: string;
  name: string;
  company_name: string | null;
  short_description: string | null;
  full_description: string | null;
  logo_image_path: string | null;
  cover_image_path: string | null;
  website: string | null;
  phone: string | null;
  email: string | null;
  whatsapp: string | null;
  location: string | null;
  featured: boolean | null;
  sort_order: number | null;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
}

export interface PartnerImageRow {
  id: string;
  partner_id: string;
  storage_path: string;
  alt_text: string | null;
  sort_order: number | null;
  created_at: string;
}

export interface PartnerImage {
  id: string;
  storagePath: string;
  altText: string;
  sortOrder: number;
  url: string | null;
}

export interface PartnerSummary {
  id: string;
  slug: string;
  name: string;
  companyName: string;
  shortDescription: string;
  logoImagePath: string | null;
  logoImageUrl: string | null;
  coverImagePath: string | null;
  coverImageUrl: string | null;
  website: string;
  phone: string;
  email: string;
  whatsapp: string;
  location: string;
  featured: boolean;
  sortOrder: number;
  seoTitle: string;
  seoDescription: string;
  createdAt: string;
  updatedAt: string;
}

export interface PartnerDetail extends PartnerSummary {
  fullDescription: string;
  images: PartnerImage[];
}

function mapPartnerRow(row: PartnerRow): PartnerSummary {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    companyName: row.company_name ?? '',
    shortDescription: row.short_description ?? '',
    logoImagePath: row.logo_image_path,
    logoImageUrl: getPartnerAssetUrl(row.logo_image_path),
    coverImagePath: row.cover_image_path,
    coverImageUrl: getPartnerAssetUrl(row.cover_image_path),
    website: row.website ?? '',
    phone: row.phone ?? '',
    email: row.email ?? '',
    whatsapp: row.whatsapp ?? '',
    location: row.location ?? '',
    featured: Boolean(row.featured),
    sortOrder: row.sort_order ?? 0,
    seoTitle: row.seo_title ?? row.name,
    seoDescription: row.seo_description ?? row.short_description ?? '',
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function mapPartnerImageRow(row: PartnerImageRow): PartnerImage {
  return {
    id: row.id,
    storagePath: row.storage_path,
    altText: row.alt_text ?? '',
    sortOrder: row.sort_order ?? 0,
    url: getPartnerAssetUrl(row.storage_path),
  };
}

export async function listPartners() {
  const MOCK_PARTNERS: PartnerSummary[] = [
    {
      "id": "mock-1",
      "slug": "alexington-co-legal",
      "name": "Alexington & Co. Legal Partners",
      "companyName": "Alexington Legal Services SDN BHD",
      "shortDescription": "Full-service corporate law firm specializing in cross-border acquisitions and intellectual property protection.",
      "logoImageUrl": "https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/logos/legal-logo.png",
      "logoImagePath": null,
      "coverImageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
      "coverImagePath": null,
      "website": "https://alexingtonlegal.my",
      "phone": "+60312345678",
      "email": "contact@alexingtonlegal.my",
      "whatsapp": "https://wa.me/60312345678",
      "location": "Kuala Lumpur, Malaysia",
      "featured": true,
      "sortOrder": 1,
      "seoTitle": "Alexington & Co. Legal Partners | Corporate Law Kuala Lumpur",
      "seoDescription": "Discover Alexington & Co., the leading corporate law firm in Kuala Lumpur. Expertise in M&A, IP, and litigation.",
      "createdAt": new Date().toISOString(),
      "updatedAt": new Date().toISOString()
    },
    {
      "id": "mock-2",
      "slug": "titan-industrial-construction",
      "name": "Titan Industrial Construction",
      "companyName": "Titan Buildtech Malaysia",
      "shortDescription": "Leading industrial contractor specializing in heavy-duty warehouse construction and structural engineering.",
      "logoImageUrl": "https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/logos/construction-logo.png",
      "logoImagePath": null,
      "coverImageUrl": "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200",
      "coverImagePath": null,
      "website": "https://titanbuild.com.my",
      "phone": "+60387654321",
      "email": "projects@titanbuild.com.my",
      "whatsapp": "https://wa.me/60387654321",
      "location": "Shah Alam, Selangor",
      "featured": false,
      "sortOrder": 2,
      "seoTitle": "Titan Industrial Construction | Warehouse Builders Malaysia",
      "seoDescription": "Titan Industrial Construction offers expert building services for warehouses and industrial facilities in Malaysia.",
      "createdAt": new Date().toISOString(),
      "updatedAt": new Date().toISOString()
    }
  ];

  try {
    const supabase = createServerSupabaseClient();
    if (!supabase) {
      return MOCK_PARTNERS;
    }

    const { data, error } = await supabase
      .from(INGHENG_PARTNERS_TABLE)
      .select('*')
      .order('featured', { ascending: false })
      .order('sort_order', { ascending: true })
      .order('name', { ascending: true });

    if (error) {
      console.warn('Supabase fetch failed, returning mock partners.', error.message);
      return MOCK_PARTNERS;
    }

    const dbPartners = (data ?? []).map((row) => mapPartnerRow(row as PartnerRow));
    
    // If DB is empty, show mock data
    if (dbPartners.length === 0) {
      return MOCK_PARTNERS;
    }

    return dbPartners;
  } catch (err) {
    console.warn('Failed to initialize Supabase for partners list, returning mocks:', err);
    return MOCK_PARTNERS;
  }
}

export async function getPartnerBySlug(slug: string): Promise<PartnerDetail | null> {
  // --- MOCK DATA FOR FRONTEND TESTING ---
  if (slug === 'alexington-co-legal' || slug === 'titan-industrial-construction') {
    const mockData = [
      {
        "id": "mock-1",
        "slug": "alexington-co-legal",
        "name": "Alexington & Co. Legal Partners",
        "companyName": "Alexington Legal Services SDN BHD",
        "shortDescription": "Full-service corporate law firm specializing in cross-border acquisitions and intellectual property protection.",
        "fullDescription": "Alexington & Co. is a premier legal partnership with over 25 years of experience in the Southeast Asian market. We provide comprehensive legal solutions for multi-national corporations and high-growth startups.\n\nOur expertise covers:\n- Mergers and Acquisitions\n- Intellectual Property Rights\n- Dispute Resolution & Litigation\n- Employment Law Compliance\n\nWe pride ourselves on our client-first approach, ensuring that every legal strategy is aligned with your business objectives.",
        "logoImageUrl": "https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/logos/legal-logo.png",
        "coverImageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
        "website": "https://alexingtonlegal.my",
        "phone": "+60312345678",
        "email": "contact@alexingtonlegal.my",
        "location": "Kuala Lumpur, Malaysia",
        "featured": true,
        "sortOrder": 1,
        "seoTitle": "Alexington & Co. Legal Partners | Corporate Law Kuala Lumpur",
        "seoDescription": "Discover Alexington & Co., the leading corporate law firm in Kuala Lumpur. Expertise in M&A, IP, and litigation.",
        "images": [
          { "id": "img1", "storagePath": "", "url": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600", "altText": "Law firm conference room", "sortOrder": 0 },
          { "id": "img2", "storagePath": "", "url": "https://images.unsplash.com/photo-1423592707957-3b212afa6733?auto=format&fit=crop&q=80&w=600", "altText": "Legal library", "sortOrder": 1 }
        ]
      },
      {
        "id": "mock-2",
        "slug": "titan-industrial-construction",
        "name": "Titan Industrial Construction",
        "companyName": "Titan Buildtech Malaysia",
        "shortDescription": "Leading industrial contractor specializing in heavy-duty warehouse construction and structural engineering.",
        "fullDescription": "Titan Industrial Construction is a powerhouse in the Malaysian construction sector. We specialize in the design and build of large-scale industrial facilities, warehouses, and logistics hubs.\n\nKey Services:\n- Structural Steel Engineering\n- Industrial Grade Flooring\n- MEP Systems Integration\n- Project Management & Compliance\n\nDriven by precision and built on trust, Titan ensures your industrial infrastructure is future-proof.",
        "logoImageUrl": "https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/logos/construction-logo.png",
        "coverImageUrl": "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200",
        "website": "https://titanbuild.com.my",
        "phone": "+60387654321",
        "email": "projects@titanbuild.com.my",
        "location": "Shah Alam, Selangor",
        "featured": false,
        "sortOrder": 2,
        "seoTitle": "Titan Industrial Construction | Warehouse Builders Malaysia",
        "seoDescription": "Titan Industrial Construction offers expert building services for warehouses and industrial facilities in Malaysia.",
        "images": [
          { "id": "img3", "storagePath": "", "url": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600", "altText": "Construction site progress", "sortOrder": 0 },
          { "id": "img4", "storagePath": "", "url": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600", "altText": "Industrial engineering team", "sortOrder": 1 }
        ]
      }
    ];
    const found = mockData.find(m => m.slug === slug);
    return (found as any) || null;
  }

  const supabase = createServerSupabaseClient();
  const { data: partnerData, error: partnerError } = await supabase
    .from(INGHENG_PARTNERS_TABLE)
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (partnerError) {
    throw partnerError;
  }

  if (!partnerData) {
    return null;
  }

  const partner = mapPartnerRow(partnerData as PartnerRow);

  const { data: imageData, error: imageError } = await supabase
    .from(INGHENG_PARTNER_IMAGES_TABLE)
    .select('*')
    .eq('partner_id', partner.id)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true });

  if (imageError) {
    throw imageError;
  }

  return {
    ...partner,
    fullDescription: (partnerData as PartnerRow).full_description ?? '',
    whatsapp: (partnerData as PartnerRow).whatsapp ?? '',
    images: (imageData ?? []).map((row) => mapPartnerImageRow(row as PartnerImageRow)),
  };
}

export async function listPartnerSlugs() {
  try {
    const supabase = createServerSupabaseClient();
    if (!supabase) {
      throw new Error('Supabase not configured');
    }

    const { data, error } = await supabase.from(INGHENG_PARTNERS_TABLE).select('slug, updated_at').order('slug');

    if (error) {
      throw error;
    }

    return (data ?? []) as Array<{ slug: string; updated_at: string }>;
  } catch (error) {
    // Return mock slugs for build if Supabase fails or is missing
    console.warn('Supabase fetch failed or missing, returning mock slugs for build.');
    return [
      { slug: 'alexington-co-legal', updated_at: new Date().toISOString() },
      { slug: 'titan-industrial-construction', updated_at: new Date().toISOString() }
    ];
  }
}
