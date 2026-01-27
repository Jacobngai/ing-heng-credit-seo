/**
 * Blog posts metadata data file
 * Contains all blog post metadata for the blog index and listing pages
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: number;
  category: string;
  image: string;
  keywords?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  // Excavator Posts (17)
  {
    slug: '48-hour-excavator-fast-approval-malaysia',
    title: '48-Hour Excavator Fast Approval: Malaysia Contractors Guide',
    excerpt: 'Get excavator financing approved in just 48 hours. Learn how Malaysian contractors can fast-track their equipment financing with Ing Heng Credit.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Financing Tips',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'fleet-expansion-excavator-financing-guide',
    title: 'Fleet Expansion Guide: Financing Multiple Excavators',
    excerpt: 'Scaling from 2 to 10 excavators requires strategic financing. Learn how Malaysian construction companies use 0% down payment to grow fleet progressively.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 9,
    category: 'Business Growth',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'excavator-repossession-risk-protection',
    title: 'Excavator Repossession: How to Protect Your Construction Business',
    excerpt: 'Missed payments lead to repossession. Learn how to structure your excavator financing installment plan to match construction cash flow reality.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Tax & Compliance',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'used-excavator-financing-malaysia-guide',
    title: 'Used Excavator Financing Malaysia: Complete Guide 2025',
    excerpt: 'Financing used excavators in Malaysia requires different strategy than new units. Learn about interest rates, inspection requirements, and how to minimize risk.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Equipment Financing Tips',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'mrt3-excavator-fleet-financing',
    title: 'MRT3 Excavator Fleet Financing: Malaysia Infrastructure Opportunity',
    excerpt: 'MRT3 projects require significant excavator investment. Learn how contractors can finance excavator fleets for Malaysia MRT3 infrastructure projects.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Industry News & Trends',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'data-center-excavator-financing-malaysia',
    title: 'Data Center Construction: Excavator Financing for Malaysia Digital Infrastructure',
    excerpt: 'Malaysia data center boom requires earthmoving equipment. Learn how contractors can finance excavators for data center construction projects.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Industry News & Trends',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'labor-shortage-excavator-investment-malaysia',
    title: 'Labor Shortage Solution: Excavator Investment for Malaysia Contractors',
    excerpt: 'Malaysia construction labor shortage drives excavator demand. Learn how investing in excavators reduces dependency on manual labor and increases efficiency.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Contractor Guides',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: '5-percent-excavator-down-payment-malaysia',
    title: '5% Excavator Down Payment: Malaysia Construction Equipment Strategy',
    excerpt: 'Many financiers require 20% down. Learn how 0% down payment excavator financing preserves working capital for your construction business.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 6,
    category: 'Equipment Financing Tips',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'excavator-maintenance-financing-structure',
    title: 'Excavator Maintenance: How to Include Costs in Your Financing Package',
    excerpt: 'Annual maintenance costs RM15,000-RM30,000. Learn how to build a maintenance reserve into your excavator financing and prevent unexpected repairs from draining cash flow.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Maintenance',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'refinance-excavator-loan-malaysia',
    title: 'Refinance Excavator Loan: Malaysia Construction Business Strategy',
    excerpt: 'High interest rates eating your profits? Learn how to refinance your existing excavator loan and reduce monthly payments while maintaining operations.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Financing Tips',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'diesel-price-lorry-financing-malaysia',
    title: 'Diesel Price Impact: How Lorry Financing Helps Logistics Companies Survive Fuel Costs',
    excerpt: 'Diesel up 55% in 2024. Learn how smart lorry financing with 0% down payment helps logistics companies manage fuel price volatility.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Tax & Compliance',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'electric-diesel-excavator-malaysia-2030',
    title: 'Electric vs Diesel Excavator: Malaysia Green Construction 2030',
    excerpt: 'Malaysia construction sustainability push. Compare electric excavator operating costs vs diesel and make smart financing decisions for 2030 compliance.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Industry News & Trends',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'budget-2025-excavator-financing-contractors',
    title: 'Malaysia Budget 2025: Excavator Financing Opportunities for Contractors',
    excerpt: 'Budget 2025 construction stimulus. Learn how contractors can leverage government initiatives for excavator financing and business growth.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Tax & Compliance',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'excavator-hire-purchase-vs-loan-malaysia',
    title: 'Excavator Hire Purchase vs Business Loan: Malaysia Contractor Guide',
    excerpt: 'Hire purchase or business loan for your excavator? Compare financing options, understand tax implications, and choose the right structure for your construction business.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Equipment Financing Tips',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'late-payment-excavator-loan-penalty',
    title: 'Late Payment Excavator Loan Penalty: How to Avoid Default',
    excerpt: 'Missed payment penalties add up quickly. Learn strategies to manage cash flow and avoid late payment penalties on your excavator financing.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Tax & Compliance',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'osh-act-2024-excavator-certification-malaysia',
    title: 'OSH Act 2024: Excavator Operator Certification Requirements Malaysia',
    excerpt: 'New safety regulations require excavator operator certification. Learn compliance requirements and how to factor training costs into your equipment financing.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Tax & Compliance',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'cidb-grade-excavator-financing-approval',
    title: 'CIDB Grade Excavator Financing: Higher Approval for Licensed Contractors',
    excerpt: 'Higher CIDB grade means better financing terms. Learn how your contractor grade affects excavator financing approval and interest rates.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 6,
    category: 'Contractor Guides',
    image: '/images/blog/excavator-financing.jpg',
  },
  {
    slug: 'excavator-fleet-expansion-malaysia-2025',
    title: 'Excavator Fleet Expansion Malaysia 2025: From 2 to 10 Units Strategy',
    excerpt: 'Growing from 2 to 10 excavators requires strategic planning. Learn how Malaysian contractors use progressive financing to scale operations while managing risk.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 9,
    category: 'Business Growth',
    image: '/images/blog/excavator-financing.jpg',
  },

  // Forklift Posts (15)
  {
    slug: 'forklift-operating-lease-vs-hire-purchase',
    title: 'Forklift Operating Lease vs Hire Purchase: Which Saves More?',
    excerpt: 'Leasing or buying forklifts? Compare total cost of ownership, tax implications, and cash flow impact for your warehouse operation.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Equipment Financing Tips',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: 'isuzu-vs-fuso-vs-hino-lorry-financing',
    title: 'Isuzu vs Fuso vs Hino: Lorry Financing Comparison for Malaysia SMEs',
    excerpt: 'Which Japanese lorry brand offers best value? Compare financing costs, maintenance, resale value for Isuzu, Fuso, and Hino lorries.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Equipment Financing Tips',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: '48-hour-prime-mover-approval',
    title: '48-Hour Prime Mover Approval: Fast Financing for Port Klang Haulage',
    excerpt: 'Port Klang contracts can\'t wait. Learn how haulage companies get prime mover financing approved in 48 hours and secure contracts before competitors.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Financing Tips',
    image: '/images/blog/prime-mover-financing.jpg',
  },
  {
    slug: 'electric-forklift-cost-savings-malaysia',
    title: 'Electric Forklift Cost Savings: Malaysia Warehouse ROI Analysis',
    excerpt: 'Electric forklifts cost RM80,000 more upfront but save RM15,000+ annually in fuel. Calculate ROI and financing options for your warehouse.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Equipment Maintenance',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: 'forklift-fleet-financing-strategy',
    title: 'Forklift Fleet Financing: From 3 to 15 Units Warehouse Strategy',
    excerpt: 'Scaling warehouse operations requires multiple forklifts. Learn how to finance a forklift fleet while managing cash flow and debt ratios.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Business Growth',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: 'gps-apad-prime-mover-compliance',
    title: 'GPS APAD Prime Mover Compliance: Financing Complete Setup',
    excerpt: 'APAD GPS mandate for prime movers adds RM5,000+ in costs. Learn how to bundle GPS installation in your financing and stay compliant.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Tax & Compliance',
    image: '/images/blog/prime-mover-financing.jpg',
  },
  {
    slug: 'lorry-hire-purchase-vs-operating-lease',
    title: 'Lorry Hire Purchase vs Operating Lease: What Logistics Companies Need to Know',
    excerpt: 'Ownership vs rental for logistics fleets. Compare hire purchase and operating lease for lorries with total cost analysis over 5 years.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Equipment Financing Tips',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'toyota-vs-komatsu-forklift-financing',
    title: 'Toyota vs Komatsu Forklift Financing: Malaysia Warehouse Comparison',
    excerpt: 'Toyota or Komatsu for your warehouse? Compare upfront costs, maintenance, battery life, and financing options for Malaysia operations.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Financing Tips',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: '5-ton-vs-10-ton-lorry-financing-sme',
    title: '5-Ton vs 10-Ton Lorry Financing: Which for Your Malaysia SME?',
    excerpt: 'Choosing lorry capacity affects financing and profitability. Compare 5-ton and 10-ton lorry financing for SME logistics operations.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Financing Tips',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'lorry-repossession-avoidance',
    title: 'Lorry Repossession: How Installment Structure Protects Logistics Business',
    excerpt: 'Missed payments lead to repossession. Learn how to structure lorry installment payments to match logistics cash flow and protect assets.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Tax & Compliance',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'second-hand-forklift-financing-checklist',
    title: 'Second Hand Forklit Financing Checklist: Malaysia Warehouse Guide',
    excerpt: 'Used forklifts save RM40,000+ but carry risks. Use this inspection checklist before financing and avoid costly mistakes.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Contractor Guides',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: 'forklift-ownership-vs-leasing-klang-valley',
    title: 'Forklift Ownership vs Leasing in Klang Valley: Warehouse ROI Analysis',
    excerpt: 'Klang Valley warehouse costs are rising. Compare forklift ownership vs leasing with real ROI calculations for your warehouse operation.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Business Growth',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: 'empty-backload-lorry-ownership-malaysia',
    title: 'Empty Backload Problem: Why Lorry Ownership Beats Spot Hiring',
    excerpt: 'Empty backloads cost Malaysia logistics RM2,000+ monthly. How lorry ownership with 0% down payment beats spot hiring for long-haul routes.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Business Growth',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'forklift-0-percent-down-payment-malaysia',
    title: '0% Down Payment Forklift Financing: Malaysia Warehouse Strategy',
    excerpt: '0% down payment on forklift financing preserves working capital. Learn how this works and why it beats traditional 20% down payment.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Financing Tips',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: 'forklift-battery-financing-malaysia-climate',
    title: 'Forklift Battery Financing: Malaysia Climate & Warehouse Operations',
    excerpt: 'Malaysia heat shortens forklift battery life. Learn how to budget for battery replacement and include it in your financing package.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Maintenance',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: 'cross-border-lorry-financing-singapore-thailand',
    title: 'Cross-Border Lorry Financing: Singapore-Thailand Route Guide',
    excerpt: 'Singapore-Thailand routes require special financing. Learn about border permits, customs bonds, and how 0% down payment helps manage cash flow.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Equipment Financing Tips',
    image: '/images/blog/lorry-financing.jpg',
  },

  // Lorry Posts (18)
  {
    slug: '72-hour-lorry-fast-approval',
    title: '72-Hour Lorry Fast Approval: Malaysia Logistics Company Guide',
    excerpt: 'Logistics contracts can\'t wait for weeks. Learn how to get lorry financing approved in 72 hours and deploy vehicles before deadline.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Financing Tips',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'port-klang-lorry-fleet-financing',
    title: 'Port Klang Lorry Fleet Financing: Container Haulage Strategy',
    excerpt: 'Port Klang container volumes rising. Finance lorry fleet for container haulage with 0% down payment and fast approval.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Business Growth',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'jpj-puspakom-lorry-rules-2024',
    title: 'JPJ PUSPAKOM Lorry Inspection Rules 2024: Financing Compliance Guide',
    excerpt: 'New inspection rules add compliance costs. Learn how to include JPJ/PUSPAKOM fees in your lorry financing and stay legal.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Tax & Compliance',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'driver-shortage-prime-mover-haulage-rates',
    title: 'Driver Shortage Pushing Up Prime Mover Haulage Rates 2024-2025',
    excerpt: 'Driver shortage increases prime mover demand. Learn how haulage companies are financing additional prime movers to meet capacity needs.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Industry News & Trends',
    image: '/images/blog/prime-mover-financing.jpg',
  },
  {
    slug: 'skds-2-0-diesel-subsidy-prime-mover',
    title: 'SKDS 2.0 Diesel Subsidy: Prime Mover Haulage Profit Impact',
    excerpt: 'Diesel subsidy reform affects haulage margins. Calculate impact on prime mover profitability and adjust financing accordingly.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Tax & Compliance',
    image: '/images/blog/prime-mover-financing.jpg',
  },
  {
    slug: 'westports-expansion-prime-mover-financing',
    title: 'Westports Expansion Prime Mover Financing: Port Klang Opportunity',
    excerpt: 'Westports expansion creates haulage opportunities. Finance prime movers for Westports contracts with 0% down payment.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Industry News & Trends',
    image: '/images/blog/prime-mover-financing.jpg',
  },
  {
    slug: 'warehouse-automation-forklift-financing-2025',
    title: 'Warehouse Automation 2025: Forklift Financing Strategy',
    excerpt: 'Malaysia warehouses modernizing. Finance automated forklifts (VNA, stackers) with 0% down payment and improve efficiency.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Industry News & Trends',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: 'dosh-forklift-regulations-2024-malaysia',
    title: 'DOSHS Forklift Regulations 2024: Malaysia Warehouse Compliance',
    excerpt: 'New DOSH regulations affect forklift operations. Learn compliance requirements and how to include inspection costs in financing.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Tax & Compliance',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: 'narrow-aisle-forklift-financing-warehouse',
    title: 'Narrow Aisle Forklift Financing: Warehouse Density Strategy',
    excerpt: 'Maximize warehouse space with VNA forklifts. Finance narrow aisle forklifts at RM80,000+ and increase storage density 40%.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Financing Tips',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: 'cold-chain-forklift-financing-options',
    title: 'Cold Chain Forklift Financing: Malaysia Temperature-Controlled Warehouse',
    excerpt: 'Cold storage requires specialized forklifts. Learn financing options for refrigerated warehouse forklifts in Malaysia.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Financing Tips',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: '24-hour-forklift-fast-approval',
    title: '24-Hour Forklift Fast Approval: Malaysia Warehouse Emergency',
    excerpt: 'Breakdown halts operations. Learn how to get forklift financing approved in 24 hours and resume warehouse operations immediately.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 6,
    category: 'Equipment Financing Tips',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: 'ecommerce-forklift-demand-malaysia-2025',
    title: 'Ecommerce Forklift Demand Malaysia 2025: Warehouse Financing Strategy',
    excerpt: 'Ecommerce boom drives forklift demand. Finance warehouse forklifts for ecommerce operations with 0% down payment.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Industry News & Trends',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: 'forklift-replacement-cycle-upgrade-guide',
    title: 'Forklift Replacement Cycle: When to Upgrade Your Fleet',
    excerpt: 'Optimal replacement cycle balances maintenance and financing. Learn when to upgrade forklifts and maximize ROI.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Maintenance',
    image: '/images/blog/forklift-financing.jpg',
  },
  {
    slug: 'cold-chain-lorry-financing-malaysia',
    title: 'Cold Chain Lorry Financing: Malaysia Refrigerated Transport Guide',
    excerpt: 'Refrigerated lorries cost RM250,000+. Finance cold chain vehicles with 0% down payment and serve food/pharma logistics.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Financing Tips',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'used-lorry-financing-interest-rates',
    title: 'Used Lorry Financing Interest Rates: Malaysia SME Guide 2025',
    excerpt: 'Used lorry rates higher than new. Understand why, calculate total cost, and decide if used lorry financing makes sense for your business.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Financing Tips',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'lorry-fleet-expansion-strategy',
    title: 'Lorry Fleet Expansion Strategy: From 2 to 10 Units Financing',
    excerpt: 'Growing logistics fleet requires capital. Learn how to expand from 2 to 10 lorries using progressive financing with 0% down payment.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Business Growth',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'logistics-cash-flow-lorry-installments',
    title: 'Logistics Cash Flow: Managing Lorry Installments with Variable Revenue',
    excerpt: 'Client payments Net-60 to Net-90. Installments due monthly. Match payment structure to logistics cash flow and avoid default.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Business Growth',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'electric-lorry-malaysia-green-logistics-2030',
    title: 'Electric Lorry Malaysia 2030: Green Logistics Financing Strategy',
    excerpt: 'Malaysia targeting EV adoption. Electric lorries cost RM150,000 more but save RM20,000/year in fuel. Calculate ROI and financing.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Industry News & Trends',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'late-delivery-lorry-financing-prevention',
    title: 'Late Delivery Penalty: Lorry Financing to Avoid Contract Breaches',
    excerpt: 'Late deliveries cost RM500-RM2,000 per incident. Maintain reliable fleet with strategic lorry financing and protect contracts.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Tax & Compliance',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'lorry-insurance-road-tax-financing',
    title: 'Lorry Insurance & Road Tax: How to Bundle in Your Financing Package',
    excerpt: 'Annual insurance and road tax can exceed RM10,000 per lorry. Learn how to bundle these compliance costs into your lorry financing.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Tax & Compliance',
    image: '/images/blog/lorry-financing.jpg',
  },
  {
    slug: 'apad-permit-lorry-financing-legal',
    title: 'APAD Permit Renewal: Ensuring Your Financed Lorry Stays Legal',
    excerpt: 'APAD permits are mandatory for Malaysian lorry operations. Learn how to include permit costs in your financing and avoid legal penalties.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Tax & Compliance',
    image: '/images/blog/lorry-financing.jpg',
  },

  // Prime Mover Posts (12)
  {
    slug: 'volvo-vs-scania-vs-mercedes-prime-mover',
    title: 'Volvo vs Scania vs Mercedes Prime Mover: Financing Comparison',
    excerpt: 'Which prime mover brand offers best value for haulage? Compare purchase price, resale value, maintenance costs and financing options.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Equipment Financing Tips',
    image: '/images/blog/prime-mover-financing.jpg',
  },
  {
    slug: 'used-prime-mover-financing-rates',
    title: 'Used Prime Mover Financing Rates: Malaysia Haulage Guide',
    excerpt: 'Used prime mover rates 5-7% vs 3-4% new. Understand the premium, calculate total cost of ownership, and make smart financing decisions.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Financing Tips',
    image: '/images/blog/prime-mover-financing.jpg',
  },
  {
    slug: 'prime-mover-repossession-protection',
    title: 'Prime Mover Repossession: How Installment Structure Protects Your Haulage Business',
    excerpt: 'Prime mover repossession destroys haulage businesses. Learn how to structure installment payments to match cash flow reality.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Tax & Compliance',
    image: '/images/blog/prime-mover-financing.jpg',
  },
  {
    slug: 'prime-mover-fleet-expansion-strategy',
    title: 'Prime Mover Fleet Expansion: From 2 to 10 Units Financing Strategy',
    excerpt: 'Growing from 2 to 10 prime movers requires strategic financing. Learn how Malaysian haulage companies use 0% down payment to scale.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 9,
    category: 'Business Growth',
    image: '/images/blog/prime-mover-financing.jpg',
  },
  {
    slug: 'off-peak-rm15-prime-mover-profit',
    title: 'Off-Peak Hours Incentive RM15/Trip: How Prime Mover Financing Maximizes Profit',
    excerpt: 'Malaysia offers RM15/trip off-peak incentive. Learn how to structure financing to maximize this government incentive and boost profitability.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Tax & Compliance',
    image: '/images/blog/prime-mover-financing.jpg',
  },
  {
    slug: 'prime-mover-hire-purchase-vs-contract-hire',
    title: 'Prime Mover Hire Purchase vs Contract Hire: Which Saves More for Port Operators?',
    excerpt: 'Comparing hire purchase vs contract hire for prime movers. Learn which financing option maximizes profitability for Port Klang haulage.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 8,
    category: 'Equipment Financing Tips',
    image: '/images/blog/prime-mover-financing.jpg',
  },
  {
    slug: 'prime-mover-maintenance-reserve-financing',
    title: 'Prime Mover Maintenance Reserve: How to Build It Into Your Financing Package',
    excerpt: 'Prime mover maintenance costs RM20,000-RM30,000 annually. Learn how to build a maintenance reserve into your financing package.',
    date: '2025-01-23',
    author: 'Ing Heng Credit Team',
    readTime: 7,
    category: 'Equipment Maintenance',
    image: '/images/blog/prime-mover-financing.jpg',
  },
];

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get paginated blog posts
 */
export function getPaginatedBlogPosts(page: number = 1, perPage: number = 9) {
  const allPosts = getAllBlogPosts();
  const totalPages = Math.ceil(allPosts.length / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const posts = allPosts.slice(startIndex, endIndex);

  return {
    posts,
    totalPages,
    currentPage: page,
    totalPosts: allPosts.length,
  };
}

/**
 * Get featured posts (first N posts)
 */
export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return getAllBlogPosts().slice(0, limit);
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter(post =>
    post.category.toLowerCase().includes(category.toLowerCase()) ||
    category.toLowerCase().includes(post.category.toLowerCase().split(' ')[0])
  );
}

/**
 * Get blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find(post => post.slug === slug);
}

/**
 * Get related posts (same category, excluding current)
 */
export function getRelatedPosts(currentSlug: string, category: string, limit: number = 4): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

/**
 * Get popular posts (first N posts as proxy)
 */
export function getPopularPosts(limit: number = 4): BlogPost[] {
  return getAllBlogPosts().slice(0, limit);
}

/**
 * Get categories with counts
 */
export function getBlogCategories(): { name: string; slug: string; count: number }[] {
  const categoryMap = new Map<string, number>();

  for (const post of BLOG_POSTS) {
    const count = categoryMap.get(post.category) || 0;
    categoryMap.set(post.category, count + 1);
  }

  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    count,
  }));
}
