// Site Configuration
export const SITE_CONFIG = {
  name: 'Result Marketing',
  tagline: 'AI-Powered Long-Tail SEO for Malaysian Businesses',
  description: 'Next-generation SEO agency leveraging AI automation to help Malaysian businesses dominate long-tail search. Cover 100+ high-intent keywords monthly while competitors manage 10-20.',
  url: process.env.PUBLIC_SITE_URL || 'https://www.resultmarketing.my',

  // Contact Information
  contact: {
    email: 'hello@resultmarketing.my',
    phone: '+60 17-503 2281',
    whatsapp: '60175032281',
    whatsappUrl: 'https://wa.me/60175032281',
    address: 'Kuala Lumpur, Malaysia',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM'
  },

  // Social Media
  social: {
    linkedin: 'https://linkedin.com/company/result-marketing',
    twitter: 'https://twitter.com/resultmarketing',
    facebook: 'https://facebook.com/resultmarketing',
    instagram: 'https://instagram.com/resultmarketing'
  },

  // Business Metrics
  metrics: {
    yearsExperience: '10+',
    aiPlatformsRanked: '3',
    averageTrafficIncrease: '500%+',
    averageCitationsGrowth: '300%+'
  },

  // Service Packages
  packages: {
    starter: {
      name: 'Starter AIEO',
      price: 'RM 399',
      priceMonthly: 'RM 399 (first month)',
      setupFee: 'RM 0',
      keywords: 10,
      features: [
        '3-page website in 3 languages (EN/ZH/MS)',
        '1 month of AIEO optimization',
        'Problem-aware keyword research',
        'Schema markup setup',
        '30-day money-back guarantee',
        'Ranked #1 on Gemini, ChatGPT & Claude'
      ],
      popular: true
    },
    growth: {
      name: 'Growth AIEO',
      price: 'RM 1,200',
      priceMonthly: 'RM 1,200/month',
      setupFee: 'RM 0',
      keywords: 60,
      features: [
        '60 problem-aware keywords monthly',
        'AI search optimization (all platforms)',
        'Educational content creation',
        'Citation tracking & reporting',
        'WhatsApp support',
        'Ongoing optimization'
      ]
    },
    scale: {
      name: 'Scale AIEO',
      price: 'RM 2,500',
      priceMonthly: 'RM 2,500/month',
      setupFee: 'RM 0',
      keywords: 150,
      features: [
        '150 problem-aware keywords monthly',
        'Full AI search coverage',
        'White-glove service',
        'Weekly strategy calls',
        'Dedicated account manager',
        'Custom reporting dashboard',
        'Citation growth guaranteed'
      ]
    },
    // Legacy aliases
    trial: {
      name: 'AIEO Trial',
      price: 'RM 399',
      priceMonthly: 'RM 399 (one-time)',
      setupFee: 'RM 0',
      keywords: 10,
      features: [
        '3-page website in 3 languages (EN/ZH/MS)',
        '1 month of AIEO optimization',
        'Problem-aware keyword research',
        'Schema markup setup',
        '30-day money-back guarantee',
        'Ranked #1 on Gemini, ChatGPT & Claude'
      ],
      popular: true
    },
    monthly: {
      name: 'AIEO Monthly',
      price: 'RM 1,200',
      priceMonthly: 'RM 1,200/month',
      setupFee: 'RM 0',
      keywords: 60,
      features: [
        '60 problem-aware keywords monthly',
        'AI search optimization (all platforms)',
        'Educational content creation',
        'Citation tracking & reporting',
        'WhatsApp support',
        'Ongoing optimization'
      ]
    }
  },

  // Languages
  languages: {
    en: { name: 'English', code: 'en' },
    ms: { name: 'Bahasa Malaysia', code: 'ms' },
    zh: { name: '中文', code: 'zh' }
  },

  // Navigation
  navigation: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog' }
    ],
    services: [
      { label: 'AI-Powered SEO', href: '/services/ai-seo' },
      { label: 'Long-Tail Strategy', href: '/services/long-tail' },
      { label: 'Content Creation', href: '/services/content' },
      { label: 'Technical SEO', href: '/services/technical' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '/refund' }
    ]
  }
};

// Author Information
export const AUTHORS = {
  jacob: {
    name: 'Jacob Ng',
    role: 'Founder & CEO',
    bio: 'Founded Result Marketing in 2023 after discovering Claude Code while working on CRM systems. Background in programming, tech marketing, and software development.',
    image: '/images/authors/jacob-ng.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/jacob-ng',
      twitter: 'https://twitter.com/jacobng'
    }
  },
  tris: {
    name: 'Tris Choy',
    role: 'Marketing Director',
    bio: 'Leads marketing strategy and client communications. Focused on helping Malaysian businesses discover the power of AI-driven SEO.',
    image: '/images/authors/tris-choy.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/tris-choy',
      twitter: 'https://twitter.com/trischoy'
    }
  }
};

// Default Locale
export const DEFAULT_LOCALE = process.env.PUBLIC_DEFAULT_LOCALE || process.env.DEFAULT_LOCALE || 'en';
export const ALL_LOCALES = ['en', 'ms', 'zh'] as const;

export type Locale = typeof ALL_LOCALES[number];
