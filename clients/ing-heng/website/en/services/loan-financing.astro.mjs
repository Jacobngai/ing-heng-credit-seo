/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { f as generateServicePageSchema, a as generateFAQSchema, $ as $$BaseLayout } from '../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$BenefitCard } from '../../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$FAQItem } from '../../../chunks/FAQItem_CTpbqvJe.mjs';
import { $ as $$ContactForm } from '../../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$CTAButton } from '../../../chunks/CTAButton_D2NuWLbx.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$Calculator } from '../../../chunks/Calculator_BS1M0nbC.mjs';
import { $ as $$StructuredData } from '../../../chunks/StructuredData_BEy59xv7.mjs';
/* empty css                                                */
export { renderers } from '../../../renderers.mjs';

const $$LoanFinancing = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const title = "Business Loan Financing Malaysia | SME Equipment Loan | Ing Heng Credit";
  const description = "Fast business loans for equipment purchases in Malaysia. Working capital, equipment financing & expansion loans. Competitive rates, quick processing. Apply now!";
  const keywords = ["business loan Malaysia", "SME financing", "equipment loan Malaysia", "working capital loan", "business expansion loan", "commercial equipment financing", "Malaysia business credit", "fast business loan approval"];
  const breadcrumbItems = [
    { label: "Home", href: "/en" },
    { label: "Services", href: "/en/services" },
    { label: "Loan Financing", href: "/en/services/loan-financing" }
  ];
  const faqs = [
    {
      question: "What types of business loans do you offer?",
      answer: "We offer three main types of business loans: Equipment Financing Loans (for purchasing machinery and vehicles), Working Capital Loans (for daily operations and cash flow), and Business Expansion Loans (for growth initiatives). Each loan type comes with flexible terms ranging from 12 to 60 months and interest rates of 8-18% per annum (subject to credit assessment)."
    },
    {
      question: "What are the eligibility requirements for business loans?",
      answer: "To qualify for a business loan, your company must be registered in Malaysia (Sdn Bhd, Enterprise, or Sole Proprietorship), operating for at least 6 months, and have verifiable income or revenue. We require basic documentation including SSM registration, bank statements (6 months), director IC/passport, and financial statements (if available). We maintain a high approval rate with flexible evaluation."
    },
    {
      question: "How fast can I get loan approval and funding?",
      answer: "We process loan applications quickly and provide approval decisions the same day for most cases. Once approved, funds can be disbursed within 3-5 working days. Our streamlined process is designed specifically for Malaysian SMEs that need quick access to capital without lengthy bank procedures."
    },
    {
      question: "What interest rates do you charge for business loans?",
      answer: "Our business loan interest rates are 8-18% per annum (subject to credit assessment) and vary based on loan amount, repayment term, business credit profile, and collateral provided. We work with multiple financial partners to secure the most competitive rates for your specific situation. All rates and fees are disclosed transparently before you commit."
    },
    {
      question: "Do I need collateral for business loans?",
      answer: "Collateral requirements depend on the loan type and amount. Equipment financing loans use the equipment itself as collateral. For working capital and expansion loans, we may require business assets, property, or personal guarantees. However, we offer flexible collateral options and can work with various security arrangements to suit your situation."
    },
    {
      question: "Can startups or new businesses apply for loans?",
      answer: "Yes! While established businesses have an advantage, we do finance startups and newer businesses (minimum 6 months operation). For newer companies, we may require higher down payments, personal guarantees, or additional documentation showing business viability. Our specialists will work with you to find suitable financing solutions."
    },
    {
      question: "What is the maximum loan amount I can borrow?",
      answer: "Loan amounts range from RM 50,000 to RM 5,000,000 depending on your business needs, financial capacity, and loan type. Equipment financing typically covers 70-90% of equipment value, while working capital loans are based on your monthly revenue and operational needs. Contact us for a customized assessment."
    },
    {
      question: "Can I use the loan for multiple purposes?",
      answer: "Yes, our business loans can be structured for multiple purposes. For example, you could combine equipment purchase with working capital requirements in a single loan package. We offer flexible financing solutions tailored to your complete business needs rather than rigid single-purpose loans."
    },
    {
      question: "What happens if my business faces financial difficulties?",
      answer: "We understand business challenges and cash flow fluctuations. If you anticipate payment difficulties, contact us immediately. We offer payment restructuring, temporary payment relief, and other workout arrangements. Early communication allows us to help you maintain your business operations while managing loan obligations responsibly."
    },
    {
      question: "How do I apply for a business loan?",
      answer: "Simply call us at 017-570 0889, WhatsApp us, or fill out our online contact form. Our business financing specialists will discuss your specific needs, explain loan options, and guide you through the application process. We make business financing accessible with minimal paperwork and maximum efficiency."
    }
  ];
  const servicePageSchema = generateServicePageSchema({
    serviceName: "Business Loan Financing Services",
    description: "Comprehensive business loan solutions including equipment financing, working capital loans, and business expansion funding with fast processing",
    serviceType: "Business Loan Financing",
    minRate: "8.00",
    maxRate: "18.00",
    locale: "en"
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords, "ogType": "website", "data-astro-cid-qweulfti": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": servicePageSchema, "data-astro-cid-qweulfti": true })}  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema, "data-astro-cid-qweulfti": true })}  ${maybeRenderHead()}<div class="container-custom py-4" data-astro-cid-qweulfti> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-qweulfti": true })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Business Loan Financing for Equipment & Growth", "subtitle": "Grow your business with fast, flexible financing. Equipment loans, working capital, and expansion funding with quick approval and fast processing. Get your free quote today!", "ctaText": "Apply for Loan", "ctaLink": "/en/contact", "ctaSecondaryText": "WhatsApp Us", "ctaSecondaryLink": "https://wa.me/60175700889", "lang": lang, "trustSignals": ["Fast Approval", "Quick Processing", "RM 50K-5M Loans"], "data-astro-cid-qweulfti": true })}  <section class="section-padding bg-gray-50" data-astro-cid-qweulfti> <div class="container-custom" data-astro-cid-qweulfti> <div class="max-w-4xl mx-auto" data-astro-cid-qweulfti> <div class="text-center mb-12" data-astro-cid-qweulfti> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-qweulfti>
Business Loan Financing Solutions for Malaysian SMEs
</h2> <div class="w-20 h-1 bg-accent mx-auto mb-6" data-astro-cid-qweulfti></div> </div> <div class="prose prose-lg max-w-none" data-astro-cid-qweulfti> <p class="text-gray-700 leading-relaxed mb-6" data-astro-cid-qweulfti>
Business loan financing provides Malaysian SMEs with the capital needed to acquire equipment, manage cash flow, and expand operations. Unlike traditional bank loans that take weeks or months, our specialized business financing solutions are designed for speed and flexibility—perfect for construction, logistics, and industrial businesses that need quick access to funds.
</p> <p class="text-gray-700 leading-relaxed mb-6" data-astro-cid-qweulfti>
Whether you're purchasing a new excavator, expanding your lorry fleet, upgrading warehouse forklifts, or need working capital to manage seasonal cash flow, our business loan financing gets you funded within 3-5 days with competitive interest rates starting from 6.5% per annum.
</p> <div class="bg-white p-6 rounded-lg border-l-4 border-primary shadow-[2px_2px_0_#2D1810]" data-astro-cid-qweulfti> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-qweulfti>Why Choose Business Loans Over Traditional Financing?</h3> <ul class="space-y-3 text-gray-700" data-astro-cid-qweulfti> <li data-astro-cid-qweulfti><strong data-astro-cid-qweulfti>Faster Approval:</strong> Fast processing vs. 2-4 weeks at banks</li> <li data-astro-cid-qweulfti><strong data-astro-cid-qweulfti>Higher Approval Rate:</strong> High success rate with our network of lenders (subject to assessment)</li> <li data-astro-cid-qweulfti><strong data-astro-cid-qweulfti>Flexible Requirements:</strong> We work with newer businesses and varied credit profiles</li> <li data-astro-cid-qweulfti><strong data-astro-cid-qweulfti>Multiple Purposes:</strong> Combine equipment financing with working capital in one loan</li> <li data-astro-cid-qweulfti><strong data-astro-cid-qweulfti>Competitive Rates:</strong> Access to multiple financiers ensures best possible terms</li> <li data-astro-cid-qweulfti><strong data-astro-cid-qweulfti>Customized Terms:</strong> Repayment schedules aligned with your business cash flow</li> </ul> </div> </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-qweulfti> <div class="container-custom" data-astro-cid-qweulfti> <div class="text-center mb-12" data-astro-cid-qweulfti> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-qweulfti>
Our Business Loan Products
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-qweulfti>
Flexible financing solutions tailored to your business needs
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-qweulfti></div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-qweulfti> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow border-t-4 border-primary" data-astro-cid-qweulfti> <div class="text-primary text-5xl mb-4" data-astro-cid-qweulfti>🚜</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-qweulfti>Equipment Financing Loans</h3> <p class="text-gray-600 mb-6" data-astro-cid-qweulfti>
Purchase construction equipment, logistics vehicles, or industrial machinery with loans covering 70-90% of equipment value.
</p> <ul class="text-gray-700 space-y-2 mb-6" data-astro-cid-qweulfti> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Excavators, lorries, forklifts
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
New & used equipment (up to 10 years)
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Terms: 12-60 months
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Equipment as collateral
</li> </ul> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Apply for Equipment Loan", "link": "/en/contact", "variant": "primary", "size": "medium", "data-astro-cid-qweulfti": true })} </div> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow border-t-4 border-secondary" data-astro-cid-qweulfti> <div class="text-secondary text-5xl mb-4" data-astro-cid-qweulfti>💰</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-qweulfti>Working Capital Loans</h3> <p class="text-gray-600 mb-6" data-astro-cid-qweulfti>
Manage daily operations, pay suppliers, cover payroll, or smooth out seasonal cash flow gaps with flexible working capital.
</p> <ul class="text-gray-700 space-y-2 mb-6" data-astro-cid-qweulfti> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Quick cash flow solutions
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Flexible use of funds
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Terms: 12-36 months
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Revenue-based assessment
</li> </ul> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Apply for Working Capital", "link": "/en/contact", "variant": "secondary", "size": "medium", "data-astro-cid-qweulfti": true })} </div> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow border-t-4 border-accent" data-astro-cid-qweulfti> <div class="text-accent text-5xl mb-4" data-astro-cid-qweulfti>📈</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-qweulfti>Business Expansion Loans</h3> <p class="text-gray-600 mb-6" data-astro-cid-qweulfti>
Fund growth initiatives including new locations, additional equipment, staff expansion, or market development projects.
</p> <ul class="text-gray-700 space-y-2 mb-6" data-astro-cid-qweulfti> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Growth funding solutions
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Larger loan amounts
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Terms: 24-60 months
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Competitive expansion rates
</li> </ul> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Apply for Expansion Loan", "link": "/en/contact", "variant": "accent", "size": "medium", "data-astro-cid-qweulfti": true })} </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-qweulfti> <div class="container-custom" data-astro-cid-qweulfti> <div class="text-center mb-12" data-astro-cid-qweulfti> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-qweulfti>
Why Choose Ing Heng Credit for Business Loans?
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-qweulfti>
Fast, flexible financing built for Malaysian SMEs
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-qweulfti></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-qweulfti> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "lightning", "title": "Quick Approval", "description": "Fast-track your application with quick approval decisions. No lengthy bank waiting periods.", "data-astro-cid-qweulfti": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "percentage", "title": "8-18% Interest Rates", "description": "Interest rates 8-18% per annum (subject to credit assessment). We secure the best terms through our lender network.", "data-astro-cid-qweulfti": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "calendar", "title": "12-60 Month Terms", "description": "Flexible repayment periods aligned with your business cash flow and growth plans.", "data-astro-cid-qweulfti": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "shield", "title": "High Approval Rate", "description": "Flexible evaluation process. We find financing solutions for most businesses.", "data-astro-cid-qweulfti": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "users", "title": "Multilingual Service", "description": "Get support in English, Mandarin, and Bahasa Malaysia for your convenience.", "data-astro-cid-qweulfti": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "default", "title": "RM 50K - 5M Loans", "description": "Scalable loan amounts from RM 50,000 to RM 5,000,000 based on your needs.", "data-astro-cid-qweulfti": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "default", "title": "Flexible Collateral", "description": "Multiple security options including equipment, property, or personal guarantees.", "data-astro-cid-qweulfti": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "clock", "title": "3-5 Day Disbursement", "description": "Funds released within 3-5 working days after approval. Get capital when you need it.", "data-astro-cid-qweulfti": true })} </div> </div> </section>  <section class="section-padding" data-astro-cid-qweulfti> <div class="container-custom" data-astro-cid-qweulfti> <div class="text-center mb-12" data-astro-cid-qweulfti> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-qweulfti>
Simple 3-Step Application Process
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-qweulfti>
Get your business loan approved and funded in just days
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-qweulfti></div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-astro-cid-qweulfti> <div class="text-center" data-astro-cid-qweulfti> <div class="w-24 h-24 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-[6px_6px_0_#2D1810]" data-astro-cid-qweulfti>
1
</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-qweulfti>Submit Application</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-qweulfti>
Contact us via phone, WhatsApp, or online form. Provide basic business information and loan requirements. Our specialist will guide you through documentation.
</p> </div> <div class="text-center" data-astro-cid-qweulfti> <div class="w-24 h-24 bg-gradient-to-br from-secondary to-accent text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-[6px_6px_0_#2D1810]" data-astro-cid-qweulfti>
2
</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-qweulfti>Get Approved Fast</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-qweulfti>
We review your application and submit to our network of financiers. Receive approval decision quickly with detailed loan terms and rates.
</p> </div> <div class="text-center" data-astro-cid-qweulfti> <div class="w-24 h-24 bg-gradient-to-br from-accent to-primary text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-[6px_6px_0_#2D1810]" data-astro-cid-qweulfti>
3
</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-qweulfti>Receive Funds in 3-5 Days</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-qweulfti>
Sign loan agreement, complete final documentation, and funds are disbursed to your account. Start using capital to grow your business immediately!
</p> </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-br from-primary to-secondary text-white" data-astro-cid-qweulfti> <div class="container-custom" data-astro-cid-qweulfti> <div class="max-w-4xl mx-auto" data-astro-cid-qweulfti> <div class="text-center mb-12" data-astro-cid-qweulfti> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-qweulfti>
Eligibility & Requirements
</h2> <p class="text-xl text-white/90" data-astro-cid-qweulfti>
Simple documentation for fast business loan approval
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-qweulfti></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10" data-astro-cid-qweulfti> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-qweulfti> <h3 class="text-2xl font-bold mb-4" data-astro-cid-qweulfti>Basic Requirements</h3> <ul class="space-y-3 text-white/90" data-astro-cid-qweulfti> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Registered business in Malaysia (minimum 6 months operation)
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Valid SSM registration (Sdn Bhd, Enterprise, or Sole Proprietor)
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Verifiable business income or revenue
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Clean credit record (flexible for some cases)
</li> </ul> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-qweulfti> <h3 class="text-2xl font-bold mb-4" data-astro-cid-qweulfti>Required Documents</h3> <ul class="space-y-3 text-white/90" data-astro-cid-qweulfti> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Company SSM registration (Form 9 & 49)
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Latest 6 months company bank statements
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Directors' IC/Passport copies
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Financial statements (if available)
</li> <li class="flex items-start" data-astro-cid-qweulfti> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-qweulfti> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-qweulfti></path> </svg>
Business plan/proposal (for expansion loans)
</li> </ul> </div> </div> <div class="text-center" data-astro-cid-qweulfti> <p class="text-white/90 mb-6" data-astro-cid-qweulfti>
Don't have all documents? No problem! Our team will help you prepare what's needed.
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Start Application Now", "link": "/en/contact", "variant": "accent", "size": "large", "data-astro-cid-qweulfti": true })} </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-qweulfti> <div class="container-custom" data-astro-cid-qweulfti> <div class="max-w-2xl mx-auto" data-astro-cid-qweulfti> <div class="text-center mb-12" data-astro-cid-qweulfti> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-qweulfti>
Calculate Your Business Loan Payment
</h2> <p class="text-xl text-gray-600" data-astro-cid-qweulfti>
Estimate monthly payments for your equipment or business loan
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-qweulfti></div> </div> ${renderComponent($$result2, "Calculator", $$Calculator, { "lang": lang, "equipmentType": "Business Loan", "defaultPrice": 2e5, "data-astro-cid-qweulfti": true })} </div> </div> </section>  <section class="section-padding" data-astro-cid-qweulfti> <div class="container-custom" data-astro-cid-qweulfti> <div class="max-w-4xl mx-auto" data-astro-cid-qweulfti> <div class="text-center mb-12" data-astro-cid-qweulfti> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-qweulfti>
Frequently Asked Questions
</h2> <p class="text-xl text-gray-600" data-astro-cid-qweulfti>
Everything you need to know about business loan financing
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-qweulfti></div> </div> <div class="space-y-4" data-astro-cid-qweulfti> ${faqs.map((faq, index) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer, "isOpen": index === 0, "data-astro-cid-qweulfti": true })}`)} </div> <div class="mt-10 text-center" data-astro-cid-qweulfti> <p class="text-gray-600 mb-6" data-astro-cid-qweulfti>
Have more questions? Our business financing specialists are ready to help.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-qweulfti> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Call: 017-570 0889", "link": "tel:+60175700889", "variant": "primary", "icon": "phone", "data-astro-cid-qweulfti": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp Us", "link": "https://wa.me/60175700889", "variant": "accent", "icon": "whatsapp", "data-astro-cid-qweulfti": true })} </div> </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-qweulfti> <div class="container-custom" data-astro-cid-qweulfti> <div class="text-center mb-12" data-astro-cid-qweulfti> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-qweulfti>
Related Financing Services
</h2> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-qweulfti></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" data-astro-cid-qweulfti> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-qweulfti> <h3 class="text-2xl font-bold text-primary mb-3" data-astro-cid-qweulfti>Hire Purchase Financing</h3> <p class="text-gray-600 mb-4" data-astro-cid-qweulfti>
Own your equipment through affordable monthly installments. Perfect for excavators, lorries, and forklifts with flexible 12-60 month terms.
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Learn About Hire Purchase", "link": "/en/services/hire-purchase", "variant": "primary", "data-astro-cid-qweulfti": true })} </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-qweulfti> <h3 class="text-2xl font-bold text-primary mb-3" data-astro-cid-qweulfti>Equipment Insurance</h3> <p class="text-gray-600 mb-4" data-astro-cid-qweulfti>
Protect your valuable equipment investment with comprehensive insurance coverage. Get peace of mind for your machinery and vehicles.
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Learn About Insurance", "link": "/en/services/insurance", "variant": "primary", "data-astro-cid-qweulfti": true })} </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-r from-primary via-secondary to-accent text-white" data-astro-cid-qweulfti> <div class="container-custom" data-astro-cid-qweulfti> <div class="max-w-4xl mx-auto text-center" data-astro-cid-qweulfti> <h2 class="text-3xl md:text-4xl font-bold mb-6" data-astro-cid-qweulfti>
Ready to Grow Your Business with a Loan?
</h2> <p class="text-xl text-white/90 mb-8 leading-relaxed" data-astro-cid-qweulfti>
Join 500+ Malaysian SMEs that trust Ing Heng Credit for fast, flexible business financing. Get approved fast and funded within 3-5 days!
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" data-astro-cid-qweulfti> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-qweulfti> <div class="text-4xl font-bold mb-2" data-astro-cid-qweulfti>Quick</div> <div class="text-white/90" data-astro-cid-qweulfti>Approval Time</div> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-qweulfti> <div class="text-4xl font-bold mb-2" data-astro-cid-qweulfti>Quick</div> <div class="text-white/90" data-astro-cid-qweulfti>Approval Process</div> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-qweulfti> <div class="text-4xl font-bold mb-2" data-astro-cid-qweulfti>8-18%</div> <div class="text-white/90" data-astro-cid-qweulfti>Interest Rate</div> </div> </div> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-qweulfti> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Apply for Business Loan", "link": "/en/contact", "variant": "accent", "size": "large", "data-astro-cid-qweulfti": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp: 017-570 0889", "link": "https://wa.me/60175700889", "variant": "outline-white", "size": "large", "icon": "whatsapp", "data-astro-cid-qweulfti": true })} </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-qweulfti> <div class="container-custom" data-astro-cid-qweulfti> <div class="max-w-3xl mx-auto" data-astro-cid-qweulfti> <div class="text-center mb-12" data-astro-cid-qweulfti> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-qweulfti>
Get Your Free Loan Quote
</h2> <p class="text-xl text-gray-600" data-astro-cid-qweulfti>
Fill out the form and our specialists will contact you promptly
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-qweulfti></div> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang, "data-astro-cid-qweulfti": true })} </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/services/loan-financing.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/services/loan-financing.astro";
const $$url = "/en/services/loan-financing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LoanFinancing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
