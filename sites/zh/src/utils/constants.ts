/**
 * Global Constants for Ing Heng Credit Website
 */

/**
 * Company Information
 */
export const COMPANY_INFO = {
  name: 'Ing Heng Credit & Leasing Sdn Bhd',
  shortName: 'Ing Heng Credit',
  tagline: 'Your Trusted Hobby & Lifestyle Financing Partner',

  // Contact Details
  phone: {
    display: '017-570 0889',
    international: '+60175700889',
    office: '03-3371 9888',
    office2: '03-3382 4999',
  },

  whatsapp: {
    number: '+60175700889',
    link: 'https://wa.me/60175700889',
    message: 'Hello, I would like to inquire about equipment financing.',
  },

  email: 'enquiry@inghengcredit.com',

  address: {
    street: '16, Lintang Menalu, Taman Chi Liung',
    city: 'Klang',
    state: 'Selangor',
    postcode: '41200',
    country: 'Malaysia',
    full: '16, Lintang Menalu, Taman Chi Liung, 41200 Klang, Selangor',
    googleMapsUrl: 'https://www.google.com/maps/dir//16,+Lintang+Menalu,+Taman+Chi+Liung,+41200+Klang,+Selangor/@3.0229391,101.3508286,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cdab4db39d6df9:0x71b2acd8e5bf24cf!2m2!1d101.4332306!2d3.0229422?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D',
  },

  // Social Media
  social: {
    facebook: 'https://www.facebook.com/Inghengcredit',
    // Add other social media when available
  },

  // Business Hours
  hours: {
    weekdays: {
      open: '08:30',
      close: '17:30',
      display: 'Monday - Friday: 8:30 AM - 5:30 PM',
    },
    saturday: {
      open: '08:30',
      close: '13:00',
      display: 'Saturday: 8:30 AM - 1:00 PM',
    },
    sunday: {
      open: null,
      close: null,
      display: 'Sunday: Closed',
    },
  },
};

/**
 * Site Configuration
 * Note: url will be overridden by environment variables at build time
 * Default is set for English site
 */
export const SITE_CONFIG = {
  url: 'https://www.inghengcredit.com',
  title: 'Ing Heng Credit & Leasing - Equipment Financing Malaysia',
  description: 'Premier equipment financing and leasing solutions in Malaysia. Fast approval for excavators, lorries, forklifts, and construction equipment.',
  defaultLocale: 'en',
  locales: ['en', 'zh', 'ms'],
};

/**
 * Equipment Categories
 */
export const EQUIPMENT_CATEGORIES = {
  CONSTRUCTION: {
    id: 'construction',
    name: {
      en: 'Construction Equipment',
      zh: '建筑设备',
      ms: 'Peralatan Pembinaan',
    },
    items: [
      'Excavator',
      'Bulldozer',
      'Road Roller',
      'Concrete Mixer',
      'Crane',
      'Dump Truck',
    ],
  },
  LOGISTICS: {
    id: 'logistics',
    name: {
      en: 'Logistics & Transportation',
      zh: '物流与运输',
      ms: 'Logistik & Pengangkutan',
    },
    items: [
      'Lorry',
      'Forklift',
      'Cargo Van',
      'Container Truck',
    ],
  },
  INDUSTRIAL: {
    id: 'industrial',
    name: {
      en: 'Industrial Equipment',
      zh: '工业设备',
      ms: 'Peralatan Perindustrian',
    },
    items: [
      'Generator',
      'Compressor',
      'Welding Machine',
    ],
  },
};

/**
 * Financing Options
 */
export const FINANCING_OPTIONS = {
  LEASING: {
    id: 'leasing',
    name: {
      en: 'Equipment Leasing',
      zh: '设备租赁',
      ms: 'Pajakan Peralatan',
    },
    benefits: [
      'Tax deductible',
      'Flexible terms',
      'Lower monthly payments',
      'Option to upgrade',
    ],
  },
  HIRE_PURCHASE: {
    id: 'hire-purchase',
    name: {
      en: 'Hire Purchase',
      zh: '租购',
      ms: 'Beli Sewa',
    },
    benefits: [
      'Own the equipment',
      'Fixed monthly payments',
      'Asset building',
      'No balloon payment',
    ],
  },
  REFINANCE: {
    id: 'refinance',
    name: {
      en: 'Refinancing',
      zh: '再融资',
      ms: 'Pembiayaan Semula',
    },
    benefits: [
      'Lower interest rates',
      'Reduced monthly payments',
      'Free up cash flow',
      'Better terms',
    ],
  },
};

/**
 * Key Benefits
 */
export const KEY_BENEFITS = [
  {
    id: 'fast-approval',
    icon: 'clock',
    title: {
      en: 'Quick Approval',
      zh: '快速批准',
      ms: 'Kelulusan Pantas',
    },
    description: {
      en: 'Fast processing with minimal documentation required',
      zh: '快速处理，所需文件最少',
      ms: 'Pemprosesan pantas dengan dokumentasi minimum diperlukan',
    },
  },
  {
    id: 'competitive-rates',
    icon: 'percentage',
    title: {
      en: 'Competitive Rates',
      zh: '竞争性利率',
      ms: 'Kadar Kompetitif',
    },
    description: {
      en: 'Competitive rates starting from 6.5% p.a.',
      zh: '具竞争力的利率从6.5%起',
      ms: 'Kadar kompetitif bermula dari 6.5% setahun',
    },
  },
  {
    id: 'flexible-terms',
    icon: 'calendar',
    title: {
      en: 'Flexible Terms',
      zh: '灵活条款',
      ms: 'Terma Fleksibel',
    },
    description: {
      en: 'Customized payment plans from 1-7 years',
      zh: '1-7年定制付款计划',
      ms: 'Pelan pembayaran disesuaikan dari 1-7 tahun',
    },
  },
  {
    id: 'expert-support',
    icon: 'users',
    title: {
      en: 'Expert Support',
      zh: '专业支持',
      ms: 'Sokongan Pakar',
    },
    description: {
      en: 'Dedicated team fluent in English, Mandarin, and Malay',
      zh: '精通英语、华语和马来语的专业团队',
      ms: 'Pasukan berdedikasi fasih dalam Bahasa Inggeris, Mandarin, dan Melayu',
    },
  },
];

/**
 * Personas
 */
export const PERSONAS = {
  CONTRACTOR_AHMAD: {
    id: 'contractor-ahmad',
    name: 'Contractor Ahmad',
    primaryLanguage: 'ms',
    secondaryLanguages: ['en'],
    equipment: ['Excavator', 'Bulldozer', 'Road Roller'],
    painPoints: [
      'Need reliable equipment for projects',
      'Cash flow management',
      'Quick approval needed',
    ],
  },
  LOGISTICS_LEE: {
    id: 'logistics-lee',
    name: 'Logistics Lee',
    primaryLanguage: 'zh',
    secondaryLanguages: ['en'],
    equipment: ['Lorry', 'Container Truck', 'Cargo Van'],
    painPoints: [
      'Fleet expansion',
      'Competitive financing rates',
      'Flexible payment terms',
    ],
  },
  WAREHOUSE_WILLIAM: {
    id: 'warehouse-william',
    name: 'Warehouse William',
    primaryLanguage: 'en',
    secondaryLanguages: ['zh', 'ms'],
    equipment: ['Forklift', 'Crane', 'Industrial Equipment'],
    painPoints: [
      'Warehouse efficiency',
      'Equipment maintenance costs',
      'ROI optimization',
    ],
  },
};

/**
 * Equipment Navigation Menu - Hobby Financing
 */
export const EQUIPMENT_NAV_ITEMS = [
  {
    label: 'hobby.allHobby',
    href: '/equipment',
    description: 'hobby.allHobbyDesc',
    icon: '🎯',
  },
  {
    label: 'hobby.motorcycle',
    href: '/equipment/motorcycle',
    description: 'hobby.motorcycleDesc',
    icon: '🏍️',
    badge: 'popular',
  },
  {
    label: 'hobby.superbike',
    href: '/equipment/superbike',
    description: 'hobby.superbikeDesc',
    icon: '🏎️',
  },
  {
    label: 'hobby.boat',
    href: '/equipment/boat',
    description: 'hobby.boatDesc',
    icon: '🚤',
  },
  {
    label: 'hobby.sportsCar',
    href: '/equipment/sports-car',
    description: 'hobby.sportsCarDesc',
    icon: '🚗',
  },
  {
    label: 'hobby.helicopter',
    href: '/equipment/helicopter',
    description: 'hobby.helicopterDesc',
    icon: '🚁',
  },
];

/**
 * Blog Navigation Menu (Categories)
 */
export const BLOG_NAV_ITEMS = [
  {
    label: 'blog.allArticles',
    href: '/blog',
    description: 'blog.allArticlesDesc',
    icon: '📚',
  },
  {
    label: 'blog.equipmentFinancing',
    href: '/blog/category/equipment-financing',
    description: 'blog.equipmentFinancingDesc',
    icon: '🏗️',
    badge: 'popular',
  },
  {
    label: 'blog.industryGuides',
    href: '/blog/category/industry-guides',
    description: 'blog.industryGuidesDesc',
    icon: '📖',
  },
  {
    label: 'blog.cashFlowManagement',
    href: '/blog/category/cash-flow',
    description: 'blog.cashFlowDesc',
    icon: '💰',
  },
  {
    label: 'blog.taxLegal',
    href: '/blog/category/tax-legal',
    description: 'blog.taxLegalDesc',
    icon: '📋',
  },
  {
    label: 'blog.successStories',
    href: '/blog/category/success-stories',
    description: 'blog.successStoriesDesc',
    icon: '⭐',
  },
];

/**
 * Navigation Links
 */
export const NAV_LINKS = [
  { href: '/', label: 'nav.home' },
  { href: '/about', label: 'nav.about' },
  { href: '/services', label: 'nav.services' },
  { href: '/equipment', label: 'nav.equipment', hasDropdown: true },
  { href: '/blog', label: 'nav.blog' },
  { href: '/contact', label: 'nav.contact' },
];

/**
 * CTA Buttons
 */
export const CTA_CONFIG = {
  PRIMARY: {
    text: 'common.getStarted',
    href: '/contact',
    style: 'btn-primary',
  },
  WHATSAPP: {
    text: 'cta.whatsapp',
    href: COMPANY_INFO.whatsapp.link,
    style: 'btn-accent',
    external: true,
  },
  PHONE: {
    text: 'cta.phone',
    href: `tel:${COMPANY_INFO.phone.international}`,
    style: 'btn-secondary',
  },
};
