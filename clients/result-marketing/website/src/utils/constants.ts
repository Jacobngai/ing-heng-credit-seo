// Site Configuration
export const SITE_CONFIG = {
  name: 'Result Marketing',
  tagline: 'AI-Powered Long-Tail SEO for Malaysian Businesses',
  description: 'Next-generation SEO agency leveraging AI automation to help Malaysian businesses dominate long-tail search. Cover 100+ high-intent keywords monthly while competitors manage 10-20.',
  url: process.env.PUBLIC_SITE_URL || 'https://www.resultmarketing.my',

  // Contact Information
  contact: {
    email: 'hello@resultmarketing.my',
    phone: '+60 12-345-6789',
    whatsapp: '60123456789',
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
    clientsServed: '20+',
    keywordsRanked: '1,000+',
    averageTrafficIncrease: '250%',
    averageRating: '4.9/5'
  },

  // Service Packages
  packages: {
    starter: {
      name: 'Starter',
      price: 'RM 998',
      priceMonthly: 'RM 998/month',
      setupFee: 'RM 2,000',
      keywords: 60,
      features: [
        '60 long-tail keywords per month',
        'AI-powered content creation',
        'Basic technical SEO',
        'Monthly reporting',
        'Email support',
        'One-time setup: RM 2,000'
      ]
    },
    growth: {
      name: 'Growth',
      price: 'RM 1,799',
      priceMonthly: 'RM 1,799/month',
      setupFee: 'RM 5,000',
      keywords: 300,
      features: [
        '300 long-tail keywords per month (5x)',
        'AI search optimization (ChatGPT, Perplexity)',
        'Advanced technical SEO',
        'Bi-weekly strategy calls',
        'Priority support',
        'Ongoing optimization',
        'One-time setup: RM 5,000'
      ],
      popular: true
    },
    scale: {
      name: 'Scale',
      price: 'RM 2,899',
      priceMonthly: 'RM 2,899/month',
      setupFee: 'RM 5,000',
      keywords: 600,
      features: [
        '600 long-tail keywords per month (10x)',
        'Full AI search coverage',
        'White-glove service',
        'Weekly strategy calls',
        'Dedicated account manager',
        'Custom reporting dashboard',
        'Ongoing optimization',
        'One-time setup: RM 5,000'
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
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' }
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
