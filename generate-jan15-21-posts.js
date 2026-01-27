const fs = require('fs');
const path = require('path');

const blogDir = 'C:\\Users\\walte\\ing heng credit\\ing-heng-credit-seo\\clients\\ing-heng\\website\\src\\pages\\en\\blog';

// Day 15-21 topics mapping
const topics = {
  15: [
    { title: 'First Equipment Purchase Guide 2026', slug: 'first-equipment-purchase-guide-2026', keywords: ['first-equipment', 'startup-financing', '0-percent-deposit'] },
    { title: 'Startup Excavator Financing 2026', slug: 'startup-excavator-financing-2026', keywords: ['excavator-financing', 'startup', '0-down-payment'] },
    { title: 'Startup Lorry Financing 2026', slug: 'startup-lorry-financing-2026', keywords: ['lorry-financing', 'startup', 'no-deposit'] },
    { title: 'Startup Forklift Financing 2026', slug: 'startup-forklift-financing-2026', keywords: ['forklift-financing', 'startup', 'full-loan'] },
    { title: 'Startup Crane Financing 2026', slug: 'startup-crane-financing-2026', keywords: ['crane-financing', 'startup', 'equipment-loan'] },
    { title: 'No Track Record Equipment Financing 2026', slug: 'no-track-record-equipment-financing-2026', keywords: ['no-track-record', 'new-business', 'equipment-financing'] },
    { title: 'New Business Equipment Financing 2026', slug: 'new-business-equipment-financing-2026', keywords: ['new-business', 'equipment-loan', '0-deposit'] },
    { title: '1-Year Business Equipment Financing 2026', slug: '1-year-business-equipment-financing-2026', keywords: ['1-year-business', 'equipment-loan', 'startup'] },
    { title: '2-Year Business Equipment Financing 2026', slug: '2-year-business-equipment-financing-2026', keywords: ['2-year-business', 'equipment-financing', ' sme'] },
    { title: 'Graduate Startup Equipment Financing 2026', slug: 'graduate-startup-equipment-financing-2026', keywords: ['graduate-startup', 'equipment-loan', 'young-entrepreneur'] },
    { title: 'Retrenchment Startup Equipment 2026', slug: 'retrenchment-startup-equipment-2026', keywords: ['retrenchment', 'startup-business', 'equipment-financing'] },
    { title: 'SME First Equipment Financing 2026', slug: 'sme-first-equipment-financing-2026', keywords: ['sme', 'first-equipment', 'growth'] },
    { title: 'Contractor First Equipment 2026', slug: 'contractor-first-equipment-2026', keywords: ['contractor', 'first-excavator', 'construction'] },
    { title: 'Transport First Vehicle Financing 2026', slug: 'transport-first-vehicle-financing-2026', keywords: ['transport', 'first-lorry', 'logistics'] },
    { title: 'Manufacturing First Machine 2026', slug: 'manufacturing-first-machine-2026', keywords: ['manufacturing', 'first-machine', 'industry'] },
    { title: 'Warehouse First Forklift 2026', slug: 'warehouse-first-forklift-2026', keywords: ['warehouse', 'first-forklift', 'storage'] },
    { title: 'Startup Success Story 2026', slug: 'startup-success-story-2026', keywords: ['startup', 'success-story', 'case-study'] }
  ],
  16: [
    { title: 'SME Equipment Expansion 2026', slug: 'sme-equipment-expansion-2026', keywords: ['sme', 'expansion', 'growth'] },
    { title: 'SME Fleet Addition 2026', slug: 'sme-fleet-addition-2026', keywords: ['sme', 'fleet', 'addition'] },
    { title: 'SME Upgrade Strategy 2026', slug: 'sme-upgrade-strategy-2026', keywords: ['sme', 'upgrade', 'strategy'] },
    { title: 'SME 5-Unit Package 2026', slug: 'sme-5-unit-package-2026', keywords: ['sme', '5-unit', 'package'] },
    { title: 'SME 10-Unit Package 2026', slug: 'sme-10-unit-package-2026', keywords: ['sme', '10-unit', 'fleet'] },
    { title: 'SME No Deposit 2026', slug: 'sme-no-deposit-2026', keywords: ['sme', 'no-deposit', '0-down'] },
    { title: 'SME Bad Credit 2026', slug: 'sme-bad-credit-2026', keywords: ['sme', 'bad-credit', 'ccris'] },
    { title: 'SME Bank Rejected 2026', slug: 'sme-bank-rejected-2026', keywords: ['sme', 'bank-rejected', 'alternative'] },
    { title: 'SME Urgent Equipment 2026', slug: 'sme-urgent-equipment-2026', keywords: ['sme', 'urgent', 'fast-approval'] },
    { title: 'SME Construction Equipment 2026', slug: 'sme-construction-equipment-2026', keywords: ['sme', 'construction', 'excavator'] },
    { title: 'SME Transport Equipment 2026', slug: 'sme-transport-equipment-2026', keywords: ['sme', 'transport', 'lorry'] },
    { title: 'SME Manufacturing Equipment 2026', slug: 'sme-manufacturing-equipment-2026', keywords: ['sme', 'manufacturing', 'machine'] },
    { title: 'SME Warehouse Equipment 2026', slug: 'sme-warehouse-equipment-2026', keywords: ['sme', 'warehouse', 'forklift'] },
    { title: 'SME Refinancing 2026', slug: 'sme-refinancing-2026', keywords: ['sme', 'refinancing', 'cash-flow'] },
    { title: 'SME Lease Option 2026', slug: 'sme-lease-option-2026', keywords: ['sme', 'lease', 'rental'] },
    { title: 'SME Budget Guide 2026', slug: 'sme-budget-guide-2026', keywords: ['sme', 'budget', 'planning'] },
    { title: 'SME Success Story 2026', slug: 'sme-success-story-2026', keywords: ['sme', 'success', 'growth'] }
  ],
  17: [
    { title: 'Fleet Expansion Strategy 2026', slug: 'fleet-expansion-strategy-2026', keywords: ['fleet', 'expansion', 'strategy'] },
    { title: '5-Unit Fleet Package 2026', slug: '5-unit-fleet-package-2026', keywords: ['fleet', '5-unit', 'package'] },
    { title: '10-Unit Fleet Package 2026', slug: '10-unit-fleet-package-2026', keywords: ['fleet', '10-unit', 'bulk'] },
    { title: '20-Unit Fleet Package 2026', slug: '20-unit-fleet-package-2026', keywords: ['fleet', '20-unit', 'large'] },
    { title: 'Excavator Fleet 2026', slug: 'excavator-fleet-2026', keywords: ['excavator', 'fleet', 'multiple'] },
    { title: 'Lorry Fleet 2026', slug: 'lorry-fleet-2026', keywords: ['lorry', 'fleet', 'transport'] },
    { title: 'Forklift Fleet 2026', slug: 'forklift-fleet-2026', keywords: ['forklift', 'fleet', 'warehouse'] },
    { title: 'Crane Fleet 2026', slug: 'crane-fleet-2026', keywords: ['crane', 'fleet', 'construction'] },
    { title: 'Mixed Fleet 2026', slug: 'mixed-fleet-2026', keywords: ['fleet', 'mixed', 'combination'] },
    { title: 'Fleet Refinancing 2026', slug: 'fleet-refinancing-2026', keywords: ['fleet', 'refinancing', 'restructure'] },
    { title: 'Fleet Lease 2026', slug: 'fleet-lease-2026', keywords: ['fleet', 'lease', 'rental'] },
    { title: 'Fleet Purchase 2026', slug: 'fleet-purchase-2026', keywords: ['fleet', 'purchase', 'buy'] },
    { title: 'Fleet No Deposit 2026', slug: 'fleet-no-deposit-2026', keywords: ['fleet', 'no-deposit', '0-down'] },
    { title: 'Fleet Bad Credit 2026', slug: 'fleet-bad-credit-2026', keywords: ['fleet', 'bad-credit', 'approval'] },
    { title: 'Fleet Urgent 2026', slug: 'fleet-urgent-2026', keywords: ['fleet', 'urgent', 'fast'] },
    { title: 'Fleet Budget 2026', slug: 'fleet-budget-2026', keywords: ['fleet', 'budget', 'cost'] },
    { title: 'Fleet Success Story 2026', slug: 'fleet-success-story-2026', keywords: ['fleet', 'success', 'story'] }
  ],
  18: [
    { title: 'Equipment Replacement Guide 2026', slug: 'equipment-replacement-guide-2026', keywords: ['replacement', 'upgrade', 'new'] },
    { title: 'Upgrade Old Equipment 2026', slug: 'upgrade-old-equipment-2026', keywords: ['upgrade', 'old', 'replace'] },
    { title: 'Replace 10-Year Equipment 2026', slug: 'replace-10-year-equipment-2026', keywords: ['replacement', '10-year', 'old'] },
    { title: 'Replace Broken Equipment 2026', slug: 'replace-broken-equipment-2026', keywords: ['broken', 'replace', 'urgent'] },
    { title: 'Upgrade For Efficiency 2026', slug: 'upgrade-for-efficiency-2026', keywords: ['efficiency', 'upgrade', 'save'] },
    { title: 'Upgrade For Capacity 2026', slug: 'upgrade-for-capacity-2026', keywords: ['capacity', 'upgrade', 'bigger'] },
    { title: 'Upgrade For Technology 2026', slug: 'upgrade-for-technology-2026', keywords: ['technology', 'upgrade', 'new'] },
    { title: 'Excavator Replacement 2026', slug: 'excavator-replacement-2026', keywords: ['excavator', 'replacement', 'new'] },
    { title: 'Lorry Replacement 2026', slug: 'lorry-replacement-2026', keywords: ['lorry', 'replacement', 'new-vehicle'] },
    { title: 'Forklift Replacement 2026', slug: 'forklift-replacement-2026', keywords: ['forklift', 'replacement', 'upgrade'] },
    { title: 'Trade-In Old Equipment 2026', slug: 'trade-in-old-equipment-2026', keywords: ['trade-in', 'exchange', 'swap'] },
    { title: 'Refinance Old Equipment 2026', slug: 'refinance-old-equipment-2026', keywords: ['refinance', 'old-equipment', 'cash'] },
    { title: 'Scrap Old Equipment 2026', slug: 'scrap-old-equipment-2026', keywords: ['scrap', 'dispose', 'remove'] },
    { title: 'Replacement Budget 2026', slug: 'replacement-budget-2026', keywords: ['budget', 'replacement', 'cost'] },
    { title: 'Replacement Urgent 2026', slug: 'replacement-urgent-2026', keywords: ['urgent', 'replacement', 'fast'] },
    { title: 'Replacement Success Story 2026', slug: 'replacement-success-story-2026', keywords: ['replacement', 'success', 'case'] },
    { title: 'Post-CNY Replacement 2026', slug: 'post-cny-replacement-2026', keywords: ['cny', 'replacement', 'after'] }
  ],
  19: [
    { title: 'Equipment Refinancing Guide 2026', slug: 'equipment-refinancing-guide-2026', keywords: ['refinancing', 'cash-out', 'guide'] },
    { title: 'Refinance for Cash Flow 2026', slug: 'refinance-for-cash-flow-2026', keywords: ['refinance', 'cash-flow', 'money'] },
    { title: 'Refinance for Expansion 2026', slug: 'refinance-for-expansion-2026', keywords: ['refinance', 'expansion', 'grow'] },
    { title: 'Refinance Old Equipment 2026', slug: 'refinance-old-equipment-2026', keywords: ['refinance', 'old', 'used'] },
    { title: 'Excavator Refinancing 2026', slug: 'excavator-refinancing-2026', keywords: ['excavator', 'refinance', 'cash'] },
    { title: 'Lorry Refinancing 2026', slug: 'lorry-refinancing-2026', keywords: ['lorry', 'refinance', 'topup'] },
    { title: 'Forklift Refinancing 2026', slug: 'forklift-refinancing-2026', keywords: ['forklift', 'refinance', 'warehouse'] },
    { title: 'Crane Refinancing 2026', slug: 'crane-refinancing-2026', keywords: ['crane', 'refinance', 'heavy'] },
    { title: 'Prime Mover Refinancing 2026', slug: 'prime-mover-refinancing-2026', keywords: ['prime-mover', 'refinance', 'haulage'] },
    { title: 'Refinance With Bad Credit 2026', slug: 'refinance-with-bad-credit-2026', keywords: ['refinance', 'bad-credit', 'ccris'] },
    { title: 'Refinance Bank Rejected 2026', slug: 'refinance-bank-rejected-2026', keywords: ['refinance', 'rejected', 'help'] },
    { title: 'Refinance No Equity 2026', slug: 'refinance-no-equity-2026', keywords: ['refinance', 'no-equity', 'still-owe'] },
    { title: 'Refinance Low Rates 2026', slug: 'refinance-low-rates-2026', keywords: ['refinance', 'low-rate', 'save'] },
    { title: 'Refinance Fast 2026', slug: 'refinance-fast-2026', keywords: ['refinance', 'fast', 'quick'] },
    { title: 'Refinance Startup 2026', slug: 'refinance-startup-2026', keywords: ['refinance', 'startup', 'new'] },
    { title: 'Refinance Strategy 2026', slug: 'refinance-strategy-2026', keywords: ['refinance', 'strategy', 'plan'] },
    { title: 'Refinancing Success Story 2026', slug: 'refinancing-success-story-2026', keywords: ['refinance', 'success', 'story'] }
  ],
  20: [
    { title: '2026 Capital Allowance Guide', slug: '2026-capital-allowance-guide', keywords: ['tax', 'capital-allowance', 'deduction'] },
    { title: 'Equipment Tax Deduction 2026', slug: 'equipment-tax-deduction-2026', keywords: ['tax', 'deduction', 'equipment'] },
    { title: 'Excavator Tax Benefits 2026', slug: 'excavator-tax-benefits-2026', keywords: ['tax', 'excavator', 'benefits'] },
    { title: 'Lorry Tax Benefits 2026', slug: 'lorry-tax-benefits-2026', keywords: ['tax', 'lorry', 'benefits'] },
    { title: 'Forklift Tax Benefits 2026', slug: 'forklift-tax-benefits-2026', keywords: ['tax', 'forklift', 'benefits'] },
    { title: 'Generator Tax Benefits 2026', slug: 'generator-tax-benefits-2026', keywords: ['tax', 'generator', 'power'] },
    { title: 'Manufacturing Tax 2026', slug: 'manufacturing-tax-2026', keywords: ['tax', 'manufacturing', 'industry'] },
    { title: 'Transport Tax 2026', slug: 'transport-tax-2026', keywords: ['tax', 'transport', 'logistics'] },
    { title: 'Construction Tax 2026', slug: 'construction-tax-2026', keywords: ['tax', 'construction', 'contractor'] },
    { title: 'Pre-CNY Tax Purchase 2026', slug: 'pre-cny-tax-purchase-2026', keywords: ['tax', 'cny', 'purchase'] },
    { title: 'Year-End Tax Planning 2026', slug: 'year-end-tax-planning-2026', keywords: ['tax', 'planning', 'year-end'] },
    { title: 'Tax With Equipment Purchase 2026', slug: 'tax-with-equipment-purchase-2026', keywords: ['tax', 'purchase', 'save'] },
    { title: 'Allowance Claiming 2026', slug: 'allowance-claiming-2026', keywords: ['tax', 'allowance', 'claim'] },
    { title: 'LHDN Guidelines 2026', slug: 'lhdn-guidelines-2026', keywords: ['tax', 'lhdn', 'guidelines'] },
    { title: 'M&A Tax Benefit 2026', slug: 'ma-tax-benefit-2026', keywords: ['tax', 'merger', 'acquisition'] },
    { title: 'Special Depreciation 2026', slug: 'special-depreciation-2026', keywords: ['tax', 'depreciation', 'allowance'] },
    { title: 'Tax Success Story 2026', slug: 'tax-success-story-2026', keywords: ['tax', 'success', 'savings'] }
  ],
  21: [
    { title: '2025 Equipment Review 2026', slug: '2025-equipment-review-2026', keywords: ['review', '2025', 'planning'] },
    { title: '2026 Equipment Planning', slug: '2026-equipment-planning', keywords: ['planning', '2026', 'equipment'] },
    { title: '2026 Budget Allocation', slug: '2026-budget-allocation', keywords: ['budget', '2026', 'allocation'] },
    { title: '2026 Equipment Forecast', slug: '2026-equipment-forecast', keywords: ['forecast', '2026', 'prediction'] },
    { title: 'Q1 2026 Equipment Need', slug: 'q1-2026-equipment-need', keywords: ['q1', '2026', 'equipment'] },
    { title: '2026 Tender Preparation', slug: '2026-tender-preparation', keywords: ['tender', '2026', 'government'] },
    { title: '2026 Project Bidding', slug: '2026-project-bidding', keywords: ['bidding', '2026', 'project'] },
    { title: '2026 Expansion Planning', slug: '2026-expansion-planning', keywords: ['expansion', '2026', 'growth'] },
    { title: '2026 Replacement Schedule', slug: '2026-replacement-schedule', keywords: ['replacement', '2026', 'schedule'] },
    { title: '2026 Technology Upgrade', slug: '2026-technology-upgrade', keywords: ['technology', 'upgrade', '2026'] },
    { title: '2026 Compliance Update', slug: '2026-compliance-update', keywords: ['compliance', '2026', 'rules'] },
    { title: '2026 Market Outlook', slug: '2026-market-outlook', keywords: ['market', 'outlook', '2026'] },
    { title: '2026 Rate Forecast', slug: '2026-rate-forecast', keywords: ['rate', 'forecast', '2026'] },
    { title: '2026 Strategy Guide', slug: '2026-strategy-guide', keywords: ['strategy', '2026', 'guide'] },
    { title: '2026 Preparation Checklist', slug: '2026-preparation-checklist', keywords: ['checklist', '2026', 'prepare'] },
    { title: '2026 Supplier Selection', slug: '2026-supplier-selection', keywords: ['supplier', 'selection', '2026'] },
    { title: '2026 Planning Success Story', slug: '2026-planning-success-story', keywords: ['planning', 'success', '2026'] }
  ]
};

function generateContent(topic, day, index, totalInDay) {
  const date = `2026-01-${day.toString().padStart(2, '0')}`;
  const category = getCategory(day);

  return `---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../../components/Breadcrumbs.astro';
import CTAButton from '../../../components/CTAButton.astro';
import { COMPANY_INFO } from '../../../utils/constants';

const lang = 'en';
const post = {
  title: '${topic.title}',
  slug: '${topic.slug}',
  excerpt: '${topic.title}. 0% down payment equipment financing. 100% full loan. No age limit. Fast 48-hour approval. Better than banks.',
  date: '${date}',
  author: 'Ing Heng Credit Team',
  readTime: 4,
  category: '${category}',
  image: '/images/blog/${topic.slug}.jpg'
};

const keywords = ${JSON.stringify(topic.keywords)},
  breadcrumbItems = [
  { label: 'Home', href: '/en' },
  { label: 'Blog', href: '/en/blog' },
  { label: post.title, href: \`/\${lang}/blog/\${post.slug}\` }
];
---

<BaseLayout title={post.title} description={post.excerpt} lang={lang} keywords={keywords}>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": { "@type": "Organization", "name": post.author },
      "publisher": {
        "@type": "Organization",
        "name": "Ing Heng Credit & Leasing Sdn Bhd",
        "logo": {
          "@type": "ImageObject",
          "url": "https://inghengcredit.com/logo.png"
        }
      }
    }
  </script>

  <Breadcrumbs items={breadcrumbItems} />

  <article class="max-w-4xl mx-auto px-4 py-12">
    <header class="mb-8">
      <span class="text-sm font-semibold" style="color: #D4A574;">${category}</span>
      <h1 class="text-4xl font-bold mt-2" style="color: #2D1810; font-family: 'Bebas Neue', sans-serif; text-transform: uppercase;">{post.title}</h1>
      <p class="text-gray-600 mt-4">{post.excerpt}</p>
      <div class="flex items-center gap-4 text-sm text-gray-500 mt-4">
        <span>{post.author}</span>
        <span>•</span>
        <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <span>•</span>
        <span>{post.readTime} min read</span>
      </div>
    </header>

    <div class="prose prose-lg max-w-none">

      <h2>Why ${topic.title}?</h2>
      <p>${topic.title} helps your business grow. Get equipment with 0% down payment and 100% full loan in 2026.</p>

      <h2>Bank vs Ing Heng 2026</h2>
      <table>
        <tr>
          <th>Requirement</th>
          <th>Bank</th>
          <th>Ing Heng</th>
        </tr>
        <tr>
          <td><strong>Down Payment</strong></td>
          <td>10-20%</td>
          <td>0%</td>
        </tr>
        <tr>
          <td><strong>Loan Amount</strong></td>
          <td>80-90%</td>
          <td>100%</td>
        </tr>
        <tr>
          <td><strong>Equipment Age</strong></td>
          <td>5 years max</td>
          <td>No limit</td>
        </tr>
        <tr>
          <td><strong>Interest Rate</strong></td>
          <td>4.6-6.0%</td>
          <td>Competitive</td>
        </tr>
        <tr>
          <td><strong>Approval Time</strong></td>
          <td>2-4 weeks</td>
          <td>24-48 hours</td>
        </tr>
      </table>

      <h2>Equipment Prices 2026</h2>
      <ul>
        <li>Used Komatsu excavator: From RM 34,000</li>
        <li>Used CAT excavator: From RM 50,000</li>
        <li>Used forklift: From RM 15,000</li>
        <li>New equipment: RM 200,000 - RM 500,000+</li>
      </ul>

      <h2>0% Down Payment Example</h2>
      <p><strong>Equipment Price: RM 100,000</strong></p>
      <p><strong>Bank (10% down):</strong> Pay RM 10,000 upfront</p>
      <p><strong>Ing Heng (0% down):</strong> Pay RM 0 upfront</p>
      <p><strong>You save: RM 10,000 cash for your business</strong></p>

      <h2>100% Full Loan Benefits</h2>
      <ul>
        <li>No upfront cash needed</li>
        <li>Full equipment cost covered</li>
        <li>Start using equipment immediately</li>
        <li>Preserve working capital</li>
        <li>Faster business growth</li>
      </ul>

      <h2>No Age Limit on Equipment</h2>
      <p>Banks only finance equipment up to 5 years old. Ing Heng accepts equipment of any age - new or used.</p>
      <p><strong>Used equipment accepted:</strong></p>
      <ul>
        <li>10-year-old excavators</li>
        <li>15-year-old lorries</li>
        <li>Old forklifts</li>
        <li>Any condition considered</li>
      </ul>

      <h2>Fast 48-Hour Approval</h2>
      <ul>
        <li>Quick assessment</li>
        <li>Minimal documents</li>
        <li>Same-day decision possible</li>
        <li>Fast equipment deployment</li>
      </ul>

      <h2>Why Choose Ing Heng Credit?</h2>
      <ul>
        <li>40+ years experience in equipment financing</li>
        <li>4,000+ companies helped</li>
        <li>KPKT licensed</li>
        <li>0% down payment available</li>
        <li>100% full loan financing</li>
        <li>No equipment age limit</li>
        <li>Bad credit considered</li>
        <li>New business welcome</li>
      </ul>

      <div style="background: #F5F0E8; border-left: 4px solid #D4A574; padding: 1.5rem; margin: 2rem 0;">
        <h3 style="color: #2D1810; margin-top: 0;">Need ${topic.title}?</h3>
        <p style="margin-bottom: 1rem;">0% down payment. 100% full loan. No age limit. Fast 48-hour approval. Contact us now.</p>
        <p style="margin-bottom: 0;"><strong>Contact:</strong> +60175700889 (WhatsApp) | 03-3324 8899 (Phone)</p>
      </div>
    </div>

    <footer class="mt-12 pt-8 border-t">
      <CTAButton text="Get Financing Now" link={COMPANY_INFO.whatsapp.link} variant="accent" size="large" />
    </footer>
  </article>
</BaseLayout>

<style>
  h2 {
    color: #2D1810;
    font-family: 'Bebas Neue', sans-serif;
    text-transform: uppercase;
    font-size: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    border-bottom: 3px solid #D4A574;
    padding-bottom: 0.5rem;
  }

  h3 {
    color: #8B6F47;
    font-family: 'Bebas Neue', sans-serif;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }

  p {
    line-height: 1.8;
    color: #374151;
  }

  strong {
    color: #2D1810;
    font-weight: 700;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
    line-height: 1.8;
    color: #374151;
  }

  li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #D4A574;
    font-weight: bold;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
  }

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #E5E7EB;
  }

  th {
    background: #F5F0E8;
    color: #2D1810;
    font-weight: 700;
  }

  br {
    display: none;
  }
</style>
`;
}

function getCategory(day) {
  const categories = {
    15: 'Startup Equipment',
    16: 'SME Growth',
    17: 'Fleet Expansion',
    18: 'Equipment Replacement',
    19: 'Refinancing',
    20: 'Tax Benefits',
    21: 'Year-End Planning'
  };
  return categories[day] || 'Equipment Financing';
}

function createPosts() {
  let created = 0;
  let skipped = 0;

  for (const [day, dayTopics] of Object.entries(topics)) {
    for (const topic of dayTopics) {
      const filePath = path.join(blogDir, `${topic.slug}.astro`);

      // Check if file already exists
      if (fs.existsSync(filePath)) {
        console.log(`SKIPPED: ${topic.slug}.astro (already exists)`);
        skipped++;
        continue;
      }

      const content = generateContent(topic, parseInt(day), dayTopics.indexOf(topic), dayTopics.length);

      try {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`CREATED: ${topic.slug}.astro`);
        created++;
      } catch (error) {
        console.error(`ERROR creating ${topic.slug}.astro:`, error.message);
      }
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Total posts to create: ${Object.values(topics).flat().length}`);
  console.log(`Created: ${created}`);
  console.log(`Skipped (already exist): ${skipped}`);
}

createPosts();
