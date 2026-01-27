/**
 * CONTENT TEMPLATES
 * Pre-built templates for each content category and awareness stage
 *
 * Usage: AI agent uses these templates to generate consistent, quality content
 */

import type { KeywordCategory, AwarenessStage, ContentPost } from "../keyword-to-post-mapper";

// ============ TEMPLATE DATA STRUCTURES ============

export interface ContentTemplate {
  id: string;
  name: string;
  category: KeywordCategory;
  stage: AwarenessStage;
  language: "en" | "zh" | "ms";
  structure: TemplateSection[];
  seoConfig: SEOConfig;
  ctaConfig: CTAConfig;
  wordCountTarget: number;
}

export interface TemplateSection {
  type: "heading" | "introduction" | "content" | "list" | "comparison" | "faq" | "cta" | "calculator";
  title?: string;
  prompt: string; // AI prompt for this section
  wordCountTarget: number;
  includeInTableOfContents: boolean;
}

export interface SEOConfig {
  titleTemplate: string;
  metaDescriptionTemplate: string;
  headingStructure: "h1-only" | "h1-h2" | "h1-h2-h3";
  keywordDensity: number; // percentage
  internalLinkingRules: string[];
}

export interface CTAConfig {
  type: "whatsapp" | "form" | "consultation";
  primary: string;
  secondary?: string;
  contextSpecific?: boolean; // e.g., for Parkland Avenue
}

// ============ PROBLEM-AWARE TEMPLATES ============

export const PROBLEM_AWARE_EMPTY_EN: ContentTemplate = {
  id: "problem-aware-empty-en",
  name: "Problem Aware - Empty Property Issues (English)",
  category: "problem-aware-empty",
  stage: "problem-aware",
  language: "en",
  wordCountTarget: 1200,
  structure: [
    {
      type: "heading",
      title: "The Hidden Cost of Your Empty Condo",
      prompt: "Create a compelling H1 that addresses the pain of owning an empty condo in Melaka. Include emotional words like 'draining', 'losing money', 'opportunity cost'.",
      wordCountTarget: 15,
      includeInTableOfContents: false,
    },
    {
      type: "introduction",
      title: "Is Your Melaka Condo Costing You Money Every Month?",
      prompt: "Write a relatable introduction that validates the reader's pain. Include:\n- The scenario: owning a condo that sits empty\n- The financial pain: maintenance fees, assessment, lost rental income\n- The emotional toll: worry, frustration, feeling stuck\n- A promise: This article will explore solutions including Airbnb",
      wordCountTarget: 200,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "The Real Monthly Cost of an Empty Condo",
      prompt: "Break down the ACTUAL costs of owning an empty condo in Melaka:\n- Maintenance fee: RM200-500/month\n- Assessment fees: RM50-150/month\n- Sinking fund: RM50-100/month\n- Insurance: RM100-200/month\n- Lost rental income: RM1,500-3,000/month (potential)\n\nCreate a table showing these costs. Calculate annual loss (RM6,000-20,000+/year).",
      wordCountTarget: 300,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "Why Your Condo Sits Empty: Common Challenges",
      prompt: "Address the reasons why condos stay vacant:\n- Can't find long-term tenants\n- Tenant damage concerns\n- Legal hassle of evicting non-paying tenants\n- Don't know how to manage rentals\n- Property needs renovation\n\nBe empathetic but factual. Use bullet points.",
      wordCountTarget: 250,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "The Airbnb Alternative: Turn Your Empty Condo into Income",
      prompt: "Introduce Airbnb as the solution. Explain:\n- Short-term rentals mean higher daily rates\n- No long-term tenant commitment issues\n- Professional management available (hint at iHousing)\n- Melaka tourism demand supports this model\n\nInclude statistics: RM7,215-9,174/year potential revenue.",
      wordCountTarget: 250,
      includeInTableOfContents: true,
    },
    {
      type: "cta",
      title: "Ready to Stop Losing Money? Let's Talk.",
      prompt: "Create a compelling call-to-action:\n- WhatsApp CTA: 'Enter your phone number and we'll WhatsApp you'\n- Promise: Free consultation about your specific condo\n- No obligation, just explore options",
      wordCountTarget: 100,
      includeInTableOfContents: false,
    },
  ],
  seoConfig: {
    titleTemplate: "{keyword} | Stop Losing RM500+/month | iHousing Melaka",
    metaDescriptionTemplate: "Your empty condo in Melaka is costing you RM6,000-20,000 annually. Discover why it sits empty and how Airbnb management can turn it into RM7,000+ annual income. Free consultation.",
    headingStructure: "h1-h2-h3",
    keywordDensity: 1.5,
    internalLinkingRules: [
      "Link to 'How to start Airbnb in Melaka'",
      "Link to 'Airbnb vs long-term rental calculator'",
      "Link to 'Airbnb management fees' page",
    ],
  },
  ctaConfig: {
    type: "whatsapp",
    primary: "Enter your phone number and we'll WhatsApp you with a free analysis of your condo's potential.",
    secondary: "Calculate your condo's Airbnb potential →",
  },
};

export const PROBLEM_AWARE_TENANT_EN: ContentTemplate = {
  id: "problem-aware-tenant-en",
  name: "Problem Aware - Tenant Nightmares (English)",
  category: "problem-aware-tenant",
  stage: "problem-aware",
  language: "en",
  wordCountTarget: 1300,
  structure: [
    {
      type: "heading",
      title: "Tenant Nightmares: When Long-Term Rental Goes Wrong",
      prompt: "Create a dramatic H1 about tenant problems. Use words like 'nightmare', 'legal battle', 'damaged property', 'non-paying'.",
      wordCountTarget: 15,
      includeInTableOfContents: false,
    },
    {
      type: "introduction",
      title: "Every Landlord's Worst Nightmare",
      prompt: "Share relatable tenant horror stories:\n- Tenant stops paying rent but refuses to leave\n- Property damaged beyond repair\n- Legal eviction takes 12+ months\n- Police can't help, it's a 'civil matter'\n\nMake the reader feel understood and validated.",
      wordCountTarget: 250,
      includeInTableOfContents: true,
    },
    {
      type: "list",
      title: "7 Common Tenant Problems in Malaysia",
      prompt: "List common tenant issues:\n1. Late or missed rent payments\n2. Property damage\n3. Unauthorized tenants/pets\n4. Refusal to vacate\n5. Utility bill defaults\n6. Noise complaints from neighbors\n7. Subletting without permission\n\nFor each, briefly explain the impact.",
      wordCountTarget: 300,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "The Legal Reality: Evicting a Tenant in Malaysia",
      prompt: "Explain the difficult eviction process:\n- Must go through court (Tribunal for Homebuyers)\n- Process takes 6-18 months\n- Legal fees: RM3,000-10,000+\n- Lost rent during process\n- No guaranteed outcome\n\nEmphasize the financial and emotional toll.",
      wordCountTarget: 250,
      includeInTableOfContents: true,
    },
    {
      type: "comparison",
      title: "Long-Term Tenants vs Airbnb Guests: What's Different?",
      prompt: "Create a comparison table:\n\n| Aspect | Long-Term Tenant | Airbnb Guest |\n|--------|-----------------|---------------|\n| Commitment | 12+ months | 1-7 days |\n| Payment issues | Monthly arrears possible | Paid upfront |\n| Damage risk | High (lives there daily) | Low (short stays) |\n| Eviction | Legal nightmare | Auto checkout |\n| Income | Fixed RM1,500-2,500 | Variable RM3,000-6,000+ |\n| Control | You're locked in | You choose availability |",
      wordCountTarget: 200,
      includeInTableOfContents: true,
    },
    {
      type: "cta",
      title: "Don't Let Another Nightmare Tenant Ruine Your Investment",
      prompt: "Strong CTA emphasizing solution:\n- 'Switch to Airbnb and eliminate tenant headaches'\n- 'We handle everything: guest vetting, cleaning, maintenance'\n- WhatsApp for free consultation",
      wordCountTarget: 100,
      includeInTableOfContents: false,
    },
  ],
  seoConfig: {
    titleTemplate: "{keyword} | Why Airbnb Beats Problem Tenants | iHousing",
    metaDescriptionTemplate: "Dealing with non-paying tenants in Malaysia? Legal eviction takes 12+ months and costs RM5,000+. Discover why Airbnb guests are safer and more profitable than long-term rentals.",
    headingStructure: "h1-h2-h3",
    keywordDensity: 1.5,
    internalLinkingRules: [
      "Link to 'Is Airbnb legal in Melaka'",
      "Link to 'Self-manage vs hire management'",
      "Link to relevant condo pages",
    ],
  },
  ctaConfig: {
    type: "whatsapp",
    primary: "Tired of tenant problems? WhatsApp us to explore Airbnb for your property.",
    secondary: "See how much you can earn with Airbnb →",
  },
};

// ============ SOLUTION-AWARE TEMPLATES ============

export const SOLUTION_AWARE_ROI_EN: ContentTemplate = {
  id: "solution-aware-roi-en",
  name: "Solution Aware - ROI & Earnings (English)",
  category: "solution-aware",
  stage: "solution-aware",
  language: "en",
  wordCountTarget: 1500,
  structure: [
    {
      type: "heading",
      title: "How Much Can You REALLY Earn from Airbnb in Melaka?",
      prompt: "Create an intriguing H1 about earnings potential. Use specific numbers and curiosity.",
      wordCountTarget: 15,
      includeInTableOfContents: false,
    },
    {
      type: "introduction",
      title: "The Truth About Airbnb Income in Melaka (2025 Data)",
      prompt: "Hook with real data:\n- Average Melaka Airbnb revenue: RM7,215-9,174/year\n- Average occupancy: 19-22%\n- Weekend demand from KL/Singapore\n- Tourism growth post-pandemic\n\nAddress skepticism: 'Not all properties perform the same - here's what determines earnings.'",
      wordCountTarget: 200,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "Real Revenue Data: Melaka Airbnb Performance by Property Type",
      prompt: "Break down earnings by condo type:\n\n**Studio (400-600 sqft):**\n- Average daily rate: RM120-180\n- Occupancy: 18-22%\n- Annual revenue: RM5,000-8,000\n\n**2-Bedroom (800-1,000 sqft):**\n- Average daily rate: RM180-250\n- Occupancy: 20-24%\n- Annual revenue: RM8,000-12,000\n\n**3-Bedroom (1,000+ sqft):**\n- Average daily rate: RM250-350\n- Occupancy: 18-22%\n- Annual revenue: RM10,000-15,000\n\nNote: These are based on 2024-2025 Melaka market data.",
      wordCountTarget: 300,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "Location Matters: Best Areas for Airbnb in Melaka",
      prompt: "Rank top areas by earnings potential:\n\n1. **Jonker Street/Heritage Zone** - Premium pricing, UNESCO appeal\n2. **Bandar Hilir** - Central, walking distance to attractions\n3. **Melaka Raya** - Expat-friendly, near malls\n4. **Ayer Keroh** - Highway access, budget travelers\n5. **Klebang Beach** - Coastal appeal, weekend getaways\n\nFor each, include estimated ADR and occupancy.",
      wordCountTarget: 300,
      includeInTableOfContents: true,
    },
    {
      type: "comparison",
      title: "Airbnb vs Long-Term Rental: 3-Year Income Comparison",
      prompt: "Create a detailed comparison:\n\n**Scenario:** RM300,000 condo in Melaka\n\n| Metric | Long-Term Rental | Airbnb |\n|--------|------------------|--------|\n| Monthly rent/rate | RM1,800 | RM2,500 (avg) |\n| Occupancy | 100% (tenant) | 21% |\n| Annual income | RM21,600 | RM25,000-35,000 |\n| Maintenance | Tenant handles | RM200-400/month |\n| Vacancy risk | 1-2 months/year | Built into model |\n| 3-Year Total | RM64,800 | RM75,000-105,000 |\n| Difference | - | +RM10,000-40,000 |",
      wordCountTarget: 250,
      includeInTableOfContents: true,
    },
    {
      type: "calculator",
      title: "Calculate Your Condo's Airbnb Potential",
      prompt: "Create an interactive calculator section:\n\n**Step 1:** Select your condo type (Studio/2BR/3BR)\n**Step 2:** Select your location (Jonker/Bandar Hilir/etc)\n**Step 3:** See estimated monthly & annual income\n\nInclude disclaimer: 'Estimates based on market averages. Actual results vary.'\n\nCTA: WhatsApp for personalized analysis.",
      wordCountTarget: 150,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "Factors That Increase Your Airbnb Income",
      prompt: "Explain how to maximize earnings:\n\n1. **Professional Photography** - +20% bookings\n2. **Dynamic Pricing** - +15% revenue\n3. **Multi-Platform Listing** - +60% bookings (Airbnb + Booking.com + Agoda + VRBO + Expedia)\n4. **Superhost Status** - +10% premium pricing\n5. **5-Star Reviews** - Higher search ranking\n\nMention iHousing handles all of this.",
      wordCountTarget: 200,
      includeInTableOfContents: true,
    },
    {
      type: "cta",
      title: "Get a Custom ROI Analysis for YOUR Condo",
      prompt: "Strong action CTA:\n- 'We'll analyze your specific condo (location, size, condition)'\n- 'Free personalized income projection'\n- 'WhatsApp us now - takes 2 minutes'",
      wordCountTarget: 100,
      includeInTableOfContents: false,
    },
  ],
  seoConfig: {
    titleTemplate: "{keyword} | RM7,000-15,000/yr Potential | Free Calculator",
    metaDescriptionTemplate: "Discover real Melaka Airbnb income data for 2025. Studio condos earn RM5,000-8,000/year, 3-bedroom units up to RM15,000. Calculate your potential with our free tool.",
    headingStructure: "h1-h2-h3",
    keywordDensity: 1.5,
    internalLinkingRules: [
      "Link to 'Cost to furnish condo for Airbnb'",
      "Link to 'Best areas for Airbnb in Melaka'",
      "Link to 'Airbnb management fees' page",
    ],
  },
  ctaConfig: {
    type: "whatsapp",
    primary: "Get a FREE custom income analysis for your condo. WhatsApp us now.",
    secondary: "Use our Airbnb income calculator →",
  },
};

// ============ DECISION-STAGE TEMPLATES ============

export const DECISION_PRICING_EN: ContentTemplate = {
  id: "decision-pricing-en",
  name: "Decision Stage - Pricing Comparison (English)",
  category: "decision-stage",
  stage: "decision",
  language: "en",
  wordCountTarget: 1400,
  structure: [
    {
      type: "heading",
      title: "20% Commission vs Flat Fee: Which Airbnb Management Model Saves You More?",
      prompt: "Create a compelling H1 that directly addresses the pricing model comparison. Use numbers to capture attention.",
      wordCountTarget: 20,
      includeInTableOfContents: false,
    },
    {
      type: "introduction",
      title: "Most Airbnb Managers in Malaysia Charge 20-30% Commission. Here's Why That's Expensive.",
      prompt: "Hook with the industry reality:\n- Standard management fee: 20-30% of revenue\n- On RM10,000/year earnings: RM2,000-3,000 goes to manager\n- Plus cleaning fees, maintenance markups\n- Hidden charges add up\n\n'There's a better way: flat fee management. Here's the math.'",
      wordCountTarget: 200,
      includeInTableOfContents: true,
    },
    {
      type: "comparison",
      title: "Commission vs Flat Fee: 3-Year Cost Comparison",
      prompt: "Create detailed comparison table:\n\n**Scenario:** Condo earning RM10,000/year gross\n\n| | Commission Model (20%) | Flat Fee Model |\n|---|---|---|\n| Gross Revenue | RM30,000 (3 yrs) | RM30,000 (3 yrs) |\n| Management Fee | -RM6,000 (20%) | -RM9,000 (RM250/mo) |\n| Cleaning Markup | -RM3,000 (30% markup) | RM0 (in-house) |\n| Platform Fees | -RM1,500 | -RM1,500 |\n| **Net to Owner** | **RM19,500** | **RM19,500** |\n\nWAIT - adjust for Parkland Avenue (flat fee is better):\nFor Parkland: RM200-300/month = RM2,400-3,600/year = RM7,200-10,800/3 years\n\n**PARKLAND AVENUE (RM250/month):**\n- Flat fee: RM9,000 (3 years)\n- Net: RM21,000 (vs RM19,500 commission)\n- **YOU SAVE RM1,500+**",
      wordCountTarget: 300,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "Why Commission Adds Up: The Hidden Costs",
      prompt: "Explain the hidden costs of commission model:\n\n1. **Cleaning Markup:** Many managers mark up cleaning 30-50%\n2. **Maintenance Margin:** Repairs charged at retail + 20%\n3. **Supply Costs:** Toiletries, essentials marked up\n4. **Emergency Fees:** After-hours calls charged extra\n\nWith flat fee: No markups, transparent pricing.",
      wordCountTarget: 250,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "Parkland Avenue by the Sea: Exclusive Flat Fee Pricing",
      prompt: "IMPORTANT: Explain flat fee is ONLY for Parkland Avenue:\n\n**Parkland Avenue Exclusive Pricing:**\n- 1 Room: RM200/month\n- 2 Rooms: RM250/month  \n- 3 Rooms: RM300/month\n\nThis is the ONLY project with transparent flat fee pricing.\n\nFor other condos (Silverscape, The Shore, etc.):\n→ 'WhatsApp us for custom pricing'\n→ Each condo has different factors (size, location, condition)\n→ Pricing is personalized, not one-size-fits-all",
      wordCountTarget: 200,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "What's Included in Flat Fee Management?",
      prompt: "List what iHousing provides (Parkland pricing example):\n\n✅ Guest communication 24/7\n✅ Professional cleaning (in-house, no markup)\n✅ Maintenance coordination\n✅ Multi-platform listing (Airbnb + Booking.com + Agoda + VRBO + Expedia)\n✅ Dynamic pricing optimization\n✅ Professional photography\n✅ Monthly reporting\n\nCompare to what commission managers charge extra for.",
      wordCountTarget: 200,
      includeInTableOfContents: true,
    },
    {
      type: "cta",
      title: "Ready for Transparent Pricing? Let's Talk.",
      prompt: "Create two CTAs:\n\n**For Parkland Avenue:**\n- 'Pre-register for Parkland Avenue now'\n- 'Lock in your flat fee pricing before launch'\n\n**For Other Condos:**\n- 'WhatsApp us for custom pricing for your condo'\n- 'Get a quote tailored to your property'",
      wordCountTarget: 150,
      includeInTableOfContents: false,
    },
  ],
  seoConfig: {
    titleTemplate: "{keyword} | Save RM6,000+/Year | Parkland Avenue Pricing",
    metaDescriptionTemplate: "20% commission costs RM6,000+ more than flat fee management. Compare pricing models. Parkland Avenue by the Sea: RM200-300/month flat fee. Other condos: WhatsApp for custom quote.",
    headingStructure: "h1-h2-h3",
    keywordDensity: 1.5,
    internalLinkingRules: [
      "Link to Parkland Avenue pages",
      "Link to 'Airbnb management services'",
      "Link to 'Switch to iHousing' pages",
    ],
  },
  ctaConfig: {
    type: "whatsapp",
    primary: "Get transparent pricing for your condo. WhatsApp us now.",
    contextSpecific: true, // Different CTAs for Parkland vs other condos
  },
};

// ============ CONDO-SPECIFIC TEMPLATE (Switch to Us) ============

export const CONDO_SWITCH_EN: ContentTemplate = {
  id: "condo-switch-en",
  name: "Condo-Specific - Switch to Us Landing (English)",
  category: "condo-specific",
  stage: "decision",
  language: "en",
  wordCountTarget: 1000,
  structure: [
    {
      type: "heading",
      title: "Switch to iHousing: Better Management for Your {CondoName} Condo",
      prompt: "Create a personalized H1 with the specific condo name. Emphasize 'switch' and 'better management'.",
      wordCountTarget: 15,
      includeInTableOfContents: false,
    },
    {
      type: "introduction",
      title: "Already Hosting Airbnb at {CondoName}? Here's Why Owners Switch to Us",
      prompt: "Acknowledge they're already hosting:\n- You're already on Airbnb at {CondoName}\n- You might be unhappy with your current manager\n- Or managing yourself and burning out\n\n'We manage {X} units at {CondoName} and consistently deliver 60%+ occupancy. Here's what we do differently.'",
      wordCountTarget: 150,
      includeInTableOfContents: true,
    },
    {
      type: "comparison",
      title: "Current Manager vs iHousing at {CondoName}",
      prompt: "Create comparison table:\n\n| | Your Current Situation | iHousing at {CondoName} |\n|---|---|---|\n| Platforms Listed | Airbnb only | 5 platforms |\n| Occupancy Rate | 15-18% | 21-25% |\n| Response Time | 2+ hours | <30 minutes |\n| Pricing | Static | Dynamic (AI-optimized) |\n| Cleaning | Outsourced | In-house team |\n| Monthly Reports | Basic | Detailed analytics |",
      wordCountTarget: 200,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "The Switch Process: Smooth & Risk-Free",
      prompt: "Explain how easy it is to switch:\n\n**Step 1:** WhatsApp us - 2 minute consultation\n**Step 2:** We handle all platform transfers (Airbnb, Booking.com, etc.)\n**Step 3:** No disruption to existing bookings\n**Step 4:** We photograph, optimize, and relist\n**Step 5:** You sit back and earn more\n\n'Most switches complete within 7 days. Zero disruption to your income.'",
      wordCountTarget: 200,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "Real Results from {CondoName} Owners",
      prompt: "Include 2-3 case studies (anonymized):\n\n**Owner A (2BR unit):**\n- Before: RM5,000/year, 15% occupancy\n- After: RM9,500/year, 23% occupancy\n- Result: +90% income increase\n\n**Owner B (3BR unit):**\n- Before: Self-managing, 20 hours/week\n- After: Fully managed, zero time spent\n- Result: Same income, freedom from operations",
      wordCountTarget: 200,
      includeInTableOfContents: true,
    },
    {
      type: "cta",
      title: "Ready to Switch? Let's Talk {CondoName}.",
      prompt: "Strong, specific CTA:\n- 'WhatsApp us for a free comparison'\n- 'We'll audit your current listing and show you potential'\n- '{CondoName} owners: Get priority switching support'\n\nInclude WhatsApp button with pre-filled message: 'Hi, I want to switch my {CondoName} condo to iHousing'",
      wordCountTarget: 100,
      includeInTableOfContents: false,
    },
  ],
  seoConfig: {
    titleTemplate: "{keyword} | Switch & Earn 60% More | iHousing",
    metaDescriptionTemplate: "Already hosting at {CondoName}? Switch to iHousing and increase occupancy from 15% to 23%. We handle 5 platforms, in-house cleaning, dynamic pricing. WhatsApp for free comparison.",
    headingStructure: "h1-h2",
    keywordDensity: 2.0, // Higher density for condo-specific
    internalLinkingRules: [
      "Link to {CondoName} investment page",
      "Link to 'Pricing' page (WhatsApp CTA)",
      "Link to 'About iHousing' page",
    ],
  },
  ctaConfig: {
    type: "whatsapp",
    primary: "Get a free comparison for your {CondoName} condo. WhatsApp us now.",
    secondary: "See all condos we manage →",
  },
};

// ============ CHINESE TEMPLATES (Sample) ============

export const PROBLEM_AWARE_EMPTY_ZH: ContentTemplate = {
  id: "problem-aware-empty-zh",
  name: "问题意识 - 空房问题 (中文)",
  category: "problem-aware-empty",
  stage: "problem-aware",
  language: "zh",
  wordCountTarget: 1200,
  structure: [
    {
      type: "heading",
      title: "马六甲空房怎么办？每月损失几千令吉的秘密",
      prompt: "创建一个引人注目的H1，使用数字和痛点词汇。用中文表达情感：'亏钱'、'损失'、'空置'。",
      wordCountTarget: 20,
      includeInTableOfContents: false,
    },
    {
      type: "introduction",
      title: "你的马六甲公寓正在慢慢掏空你的钱包吗？",
      prompt: "用中文写出共鸣的开场：\n- 拥有马六甲公寓却空置的痛苦\n- 每月管理费、杂费不断累积\n- 看着投资变成负担\n- 找不到长期租客的无奈\n\n承诺：本文将探讨Airbnb短租解决方案。",
      wordCountTarget: 200,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "空置公寓的真实成本：你每年损失多少？",
      prompt: "详细列出马六甲空置公寓的成本：\n- 管理费：RM200-500/月\n- 评估费：RM50-150/月\n- 保险：RM100-200/月\n- 损失的租金收入：RM1,500-3,000/月\n\n创建表格计算年损失（RM6,000-20,000+/年）。",
      wordCountTarget: 300,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "Airbnb解决方案：让空房变现金",
      prompt: "介绍Airbnb作为解决方案：\n- 短租日费更高\n- 没有长期租客的烦恼\n- 专业托管服务（暗示iHousing）\n- 马六甲旅游需求支撑\n\n包含数据：RM7,215-9,174/年潜在收入。",
      wordCountTarget: 250,
      includeInTableOfContents: true,
    },
    {
      type: "cta",
      title: "准备停止亏钱了吗？联系我们",
      prompt: "创建强有力的号召：\n- WhatsApp CTA：'输入您的电话号码，我们会WhatsApp您'\n- 承诺：免费咨询您的特定公寓\n- 无义务，只需探索选项",
      wordCountTarget: 100,
      includeInTableOfContents: false,
    },
  ],
  seoConfig: {
    titleTemplate: "{keyword} | 每月损失RM500+ | iHousing马六甲",
    metaDescriptionTemplate: "您的马六甲空房每年损失RM6,000-20,000。了解为什么空置以及Airbnb管理如何将其变成RM7,000+年收入。免费咨询。",
    headingStructure: "h1-h2",
    keywordDensity: 1.5,
    internalLinkingRules: [
      "Link to '如何在马六甲开始Airbnb'",
      "Link to 'Airbnb vs 长租计算器'",
    ],
  },
  ctaConfig: {
    type: "whatsapp",
    primary: "输入您的电话号码，我们会WhatsApp您免费分析您的公寓潜力。",
  },
};

// ============ MALAY TEMPLATES (Sample) ============

export const PROBLEM_AWARE_EMPTY_MS: ContentTemplate = {
  id: "problem-aware-empty-ms",
  name: "Sedar Masalah - Rumah Kosong (Bahasa Melayu)",
  category: "problem-aware-empty",
  stage: "problem-aware",
  language: "ms",
  wordCountTarget: 1200,
  structure: [
    {
      type: "heading",
      title: "Apa Nak Buat Dengan Rumah Kosong di Melaka?",
      prompt: "Buat H1 yang menarik dengan soalan dan kata kunci. Guna bahasa Melayu yang mesra: 'rumah kosong', 'rugikan', 'pendapatan'.",
      wordCountTarget: 15,
      includeInTableOfContents: false,
    },
    {
      type: "introduction",
      title: "Kondo Anda Kosong, Rugi Beribu-Ribu Ringgit Setiap Bulan",
      prompt: "Tulis pendahuluan yang mengesan:\n- Punya kondo di Melaka tapi kosong\n- Yuran penyelenggaraan membebankan\n- Susah dapat penyewa\n- Rasa tertekan dengan pelaburan yang tak memberi pulangan\n\nJanji: Artikel ini akan terangkan solusi Airbnb.",
      wordCountTarget: 200,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "Kos Sebenar Rumah Kosong: Kiraan Untung Rugi",
      prompt: "Terangkan kos memilikki rumah kosong di Melaka:\n- Yuran pengurusan: RM200-500/bulan\n- Yuran penilaian: RM50-150/bulan\n- Insurans: RM100-200/bulan\n- Pendapatan sewa hilang: RM1,500-3,000/bulan\n\nBuat jadual kos tahunan (RM6,000-20,000+/tahun).",
      wordCountTarget: 300,
      includeInTableOfContents: true,
    },
    {
      type: "content",
      title: "Solusi Airbnb: Ubah Rumah Kosong Jadi Pendapatan",
      prompt: "Perkenalkan Airbnb sebagai solusi:\n- Sewa harian lebih tinggi\n- Tiada masalah penyewa jangka panjang\n- Pengurusan profesional ada (iHousing)\n- Permintaan pelancong Melaka kuat\n\nTermasuk statistik: RM7,215-9,174/tahun pendapatan.",
      wordCountTarget: 250,
      includeInTableOfContents: true,
    },
    {
      type: "cta",
      title: "Hentikan Kerugian Sekarang. Bercakap Dengan Kami.",
      prompt: "Buat CTA yang kukuh:\n- WhatsApp CTA: 'Masukkan nombor telefon anda, kami WhatsApp anda'\n- Janji: Konsultasi percuma untuk kondo anda\n- Tiada kewajipan, hanya terangkan pilihan",
      wordCountTarget: 100,
      includeInTableOfContents: false,
    },
  ],
  seoConfig: {
    titleTemplate: "{keyword} | Jangan Rugi RM500+/bulan | iHousing Melaka",
    metaDescriptionTemplate: "Kondo kosong anda di Melaka kos RM6,000-20,000 setahun. Ketahui kenapa kosong dan bagaimana pengurusan Airbnb boleh jadikan ia RM7,000+ pendapatan tahunan. Konsultasi percuma.",
    headingStructure: "h1-h2",
    keywordDensity: 1.5,
    internalLinkingRules: [
      "Link to 'Cara mula Airbnb di Melaka'",
      "Link to 'Kalkulator Airbnb vs sewa bulanan'",
    ],
  },
  ctaConfig: {
    type: "whatsapp",
    primary: "Masukkan nombor telefon anda, kami WhatsApp anda analisis percuma potensi kondo anda.",
  },
};

// ============ TEMPLATE EXPORTS ============

export const TEMPLATES_BY_LANGUAGE = {
  en: {
    "problem-aware-empty": PROBLEM_AWARE_EMPTY_EN,
    "problem-aware-tenant": PROBLEM_AWARE_TENANT_EN,
    "solution-aware": SOLUTION_AWARE_ROI_EN,
    "decision-stage": DECISION_PRICING_EN,
    "condo-specific": CONDO_SWITCH_EN,
  },
  zh: {
    "problem-aware-empty": PROBLEM_AWARE_EMPTY_ZH,
    // Add more Chinese templates...
  },
  ms: {
    "problem-aware-empty": PROBLEM_AWARE_EMPTY_MS,
    // Add more Malay templates...
  },
};

/**
 * Get template by category and language
 */
export function getTemplate(category: KeywordCategory, language: "en" | "zh" | "ms"): ContentTemplate | undefined {
  const langTemplates = TEMPLATES_BY_LANGUAGE[language];

  // Direct match
  if (langTemplates[category]) {
    return langTemplates[category];
  }

  // Category fallback mapping
  const fallbackMap: Record<string, string> = {
    "problem-aware-tenant": "problem-aware-empty",
    "furnishing-buying": "solution-aware",
    "setup-operational": "solution-aware",
    "cost-budget": "solution-aware",
    "financial-roi": "solution-aware",
    "legal-regulatory": "solution-aware",
    "location-specific": "solution-aware",
    "operational": "solution-aware",
    "seasonal": "solution-aware",
    "product-aware": "decision-stage",
  };

  const fallbackCategory = fallbackMap[category];
  return fallbackCategory ? langTemplates[fallbackCategory] : undefined;
}

export default {
  PROBLEM_AWARE_EMPTY_EN,
  PROBLEM_AWARE_TENANT_EN,
  SOLUTION_AWARE_ROI_EN,
  DECISION_PRICING_EN,
  CONDO_SWITCH_EN,
  PROBLEM_AWARE_EMPTY_ZH,
  PROBLEM_AWARE_EMPTY_MS,
  getTemplate,
  TEMPLATES_BY_LANGUAGE,
};
