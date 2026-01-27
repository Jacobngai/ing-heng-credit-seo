const fs = require('fs');
const path = require('path');

const BLOG_LIST = [
  '24-hour-forklift-fast-approval.astro',
  '48-hour-excavator-fast-approval-malaysia.astro',
  '48-hour-prime-mover-approval.astro',
  '5-percent-excavator-down-payment-malaysia.astro',
  '5-ton-vs-10-ton-lorry-financing-sme.astro',
  '72-hour-lorry-fast-approval.astro',
  'apad-permit-lorry-financing-legal.astro',
  'budget-2025-excavator-financing-contractors.astro',
  'cidb-grade-excavator-financing-approval.astro',
  'cold-chain-forklift-financing-options.astro',
  'cold-chain-lorry-financing-malaysia.astro',
  'cross-border-lorry-financing-singapore-thailand.astro',
  'data-center-excavator-financing-malaysia.astro',
  'diesel-price-lorry-financing-malaysia.astro',
  'dosh-forklift-regulations-2024-malaysia.astro',
  'driver-shortage-prime-mover-haulage-rates.astro',
  'late-delivery-lorry-financing-prevention.astro',
  'electric-diesel-excavator-malaysia-2030.astro',
  'electric-forklift-cost-savings-malaysia.astro',
  'electric-lorry-malaysia-green-logistics-2030.astro',
  'empty-backload-lorry-ownership-malaysia.astro',
  'ecommerce-forklift-demand-malaysia-2025.astro',
  'excavator-fleet-expansion-malaysia-2025.astro',
  'excavator-hire-purchase-vs-loan-malaysia.astro',
  'excavator-maintenance-financing-structure.astro',
  'excavator-repossession-risk-protection.astro',
  'fleet-expansion-excavator-financing-guide.astro',
  'forklift-0-percent-down-payment-malaysia.astro',
  'forklift-battery-financing-malaysia-climate.astro',
  'forklift-fleet-financing-strategy.astro',
  'forklift-leasing-vs-buying-guide.astro',
  'forklift-operating-lease-vs-hire-purchase.astro',
  'forklift-ownership-vs-leasing-klang-valley.astro',
  'forklift-replacement-cycle-upgrade-guide.astro',
  'gps-apad-prime-mover-compliance.astro',
  'isuzu-vs-fuso-vs-hino-lorry-financing.astro',
  'jpj-puspakom-lorry-rules-2024.astro',
  'labor-shortage-excavator-investment-malaysia.astro',
  'late-payment-excavator-loan-penalty.astro',
  'logistics-cash-flow-lorry-installments.astro',
  'lorry-fleet-expansion-strategy.astro',
  'lorry-hire-purchase-vs-operating-lease.astro',
  'lorry-insurance-road-tax-financing.astro',
  'lorry-repossession-avoidance.astro',
  'mrt3-excavator-fleet-financing.astro',
  'narrow-aisle-forklift-financing-warehouse.astro',
  'off-peak-rm15-prime-mover-profit.astro',
  'osh-act-2024-excavator-certification-malaysia.astro',
  'port-klang-lorry-fleet-financing.astro',
  'prime-mover-fleet-expansion-strategy.astro',
  'prime-mover-hire-purchase-vs-contract-hire.astro',
  'prime-mover-maintenance-reserve-financing.astro',
  'prime-mover-repossession-protection.astro',
  'refinance-excavator-loan-malaysia.astro',
  'second-hand-forklift-financing-checklist.astro',
  'skds-2-0-diesel-subsidy-prime-mover.astro',
  'toyota-vs-komatsu-forklift-financing.astro',
  'used-excavator-financing-malaysia-guide.astro',
  'used-lorry-financing-interest-rates.astro',
  'used-prime-mover-financing-rates.astro',
  'volvo-vs-scania-vs-mercedes-prime-mover.astro',
  'warehouse-automation-forklift-financing-2025.astro',
  'westports-expansion-prime-mover-financing.astro',
  'cash-flow-management-construction.astro',
  'lorry-financing-fast-approval-strategies.astro',
  'tax-benefits-equipment-financing-2025.astro'
];

const SOURCE_DIR = 'C:\Users\walte\ing heng credit\ing-heng-credit-seo\clients\ing-heng\website\src\pages\en\blog';
const DEST_DIR = 'C:\Users\walte\ing heng credit\ing-heng-credit-seo\clients\ing-heng\website restore\website\src\content\blogs\en';
const PROGRESS_FILE = 'C:\Users\walte\ing heng credit\ing-heng-credit-seo\clients\ing-heng\website restore\BLOG-MIGRATION-PROGRESS.md';

// HTML to Markdown converter
function htmlToMarkdown(html) {
  let md = html;

  // Remove script tags and styles
  md = md.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  md = md.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  
  // Handle div with style background (callout boxes)
  md = md.replace(/<div[^>]*style="[^"]*background[^"]*"[^>]*>([\s\S]*?)<\/div>/gi, (match, content) => {
    return '\n---\n\n' + htmlToMarkdown(content) + '\n\n---\n';
  });

  // Headers
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '# $1\n\n');
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n\n');
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n\n');
  
  // Bold
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  
  // Italic
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '\n\n> $1\n\n');
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');
  
  // Remove br tags but preserve line breaks
  md = md.replace(/<br\s*\/?>/gi, '\n');
  
  // Paragraphs
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (match, content) => {
    const trimmed = content.trim();
    if (trimmed === '') return '\n';
    return '\n' + trimmed + '\n\n';
  });
  
  // Unordered lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (match, content) => {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (!items) return '';
    return '\n' + items.map(item => {
      const text = item.replace(/<\/?li[^>]*>/gi, '').replace(/<strong[^>]*>/gi, '**').replace(/<\/strong>/gi, '**').trim();
      return '- ' + text;
    }).join('\n') + '\n\n';
  });
  
  // Ordered lists
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match, content) => {
    let counter = 1;
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (!items) return '';
    return '\n' + items.map(item => {
      const text = item.replace(/<\/?li[^>]*>/gi, '').replace(/<strong[^>]*>/gi, '**').replace(/<\/strong>/gi, '**').trim();
      return counter++ + '. ' + text;
    }).join('\n') + '\n\n';
  });
  
  // Clean up extra whitespace
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.replace(/^\s+|\s+$/g, '');
  
  return md;
}

// Extract metadata from Astro file
function extractMetadata(content) {
  const metadata = {
    title: '',
    description: '',
    author: 'Ing Heng Credit Team',
    publishDate: '',
    category: '',
    tags: [],
    locale: 'en',
    featured: false,
    readingTime: 5,
    keywords: [],
    ogImage: ''
  };

  // Extract post object
  const postMatch = content.match(/const post = \{([^}]+)\}/s);
  if (postMatch) {
    const postContent = postMatch[1];
    
    const titleMatch = postContent.match(/title:\s*['"`]([^'"`]+)['"`]/);
    if (titleMatch) metadata.title = titleMatch[1];
    
    const slugMatch = postContent.match(/slug:\s*['"`]([^'"`]+)['"`]/);
    if (slugMatch) metadata.slug = slugMatch[1];
    
    const excerptMatch = postContent.match(/excerpt:\s*['"`]([^'"`]+)['"`]/s);
    if (excerptMatch) metadata.description = excerptMatch[1];
    
    const dateMatch = postContent.match(/date:\s*['"`]([^'"`]+)['"`]/);
    if (dateMatch) metadata.publishDate = dateMatch[1];
    
    const authorMatch = postContent.match(/author:\s*['"`]([^
