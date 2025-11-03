/**
 * Global Constants for Ing Heng Credit Website
 */

/**
 * Company Information
 */
export const COMPANY_INFO = {
  name: 'Ing Heng Credit & Leasing Sdn Bhd',
  shortName: 'Ing Heng Credit',
  tagline: 'Your Trusted Equipment Financing Partner',

  // Contact Details
  phone: {
    display: '0175700889',
    international: '+60175700889',
    office: '03-3324 8899',
  },

  whatsapp: {
    number: '+60175700889',
    link: 'https://wa.me/60175700889',
    message: 'Hello, I would like to inquire about equipment financing.',
  },

  email: 'enquiry@inghengcredit.com',

  address: {
    street: '306-1, Persiaran Pegaga, Taman Bayu Perdana',
    city: 'Klang',
    state: 'Selangor',
    postcode: '41200',
    country: 'Malaysia',
    full: '306-1, Persiaran Pegaga, Taman Bayu Perdana, 41200 Klang, Selangor',
    googleMapsUrl: 'https://maps.google.com/?q=306-1,+Persiaran+Pegaga,+Taman+Bayu+Perdana,+41200+Klang,+Selangor',
  },

  // Social Media
  social: {
    facebook: 'https://www.facebook.com/Inghengcredit',
    // Add other social media when available
  },

  // Business Hours
  hours: {
    weekdays: {
      open: '09:00',
      close: '17:00',
      display: 'Monday - Friday: 9:00 AM - 5:00 PM',
    },
    saturday: {
      open: '09:00',
      close: '13:00',
      display: 'Saturday: 9:00 AM - 1:00 PM',
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
 */
export const SITE_CONFIG = {
  url: 'https://ingheng-credit.vercel.app',
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
      en: '24-Hour Approval',
      zh: '24小时批准',
      ms: 'Kelulusan 24 Jam',
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
      en: 'Industry-leading rates from 2.88% p.a.',
      zh: '行业领先利率，从2.88%起',
      ms: 'Kadar terkemuka industri dari 2.88% setahun',
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
 * Equipment Navigation Menu
 */
export const EQUIPMENT_NAV_ITEMS = [
  {
    label: 'equipment.allEquipment',
    href: '/equipment',
    description: 'equipment.allEquipmentDesc',
    icon: '🏗️',
  },
  {
    label: 'equipment.excavator',
    href: '/equipment/excavator',
    description: 'equipment.excavatorDesc',
    icon: '🚜',
    badge: 'popular',
  },
  {
    label: 'equipment.lorry',
    href: '/equipment/lorry',
    description: 'equipment.lorryDesc',
    icon: '🚛',
    badge: 'fastApproval',
  },
  {
    label: 'equipment.forklift',
    href: '/equipment/forklift',
    description: 'equipment.forkliftDesc',
    icon: '🏭',
  },
  {
    label: 'equipment.crane',
    href: '/equipment/crane',
    description: 'equipment.craneDesc',
    icon: '🏗️',
  },
  {
    label: 'equipment.primeMover',
    href: '/equipment/prime-mover',
    description: 'equipment.primeMoverDesc',
    icon: '🚚',
  },
  {
    label: 'equipment.bulldozer',
    href: '/equipment/bulldozer',
    description: 'equipment.bulldozerDesc',
    icon: '🚜',
  },
  {
    label: 'equipment.refrigeratedTruck',
    href: '/equipment/refrigerated-truck',
    description: 'equipment.refrigeratedTruckDesc',
    icon: '🧊',
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
