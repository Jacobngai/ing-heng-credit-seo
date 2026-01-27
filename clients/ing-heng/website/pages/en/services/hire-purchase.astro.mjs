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
import { $ as $$StructuredData } from '../../../chunks/StructuredData_BEy59xv7.mjs';
/* empty css                                               */
export { renderers } from '../../../renderers.mjs';

const $$HirePurchase = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const title = "Hire Purchase Financing Malaysia | Equipment HP Loan | Ing Heng Credit";
  const description = "Flexible hire purchase financing for excavators, lorries, forklifts & construction equipment in Malaysia. Fast processing, flexible terms up to 60 months. Get instant quote!";
  const keywords = ["hire purchase Malaysia", "equipment financing", "excavator hire purchase", "lorry financing", "forklift HP loan", "construction equipment financing", "heavy machinery hire purchase", "asset financing Malaysia"];
  const breadcrumbItems = [
    { label: "Home", href: "/en" },
    { label: "Services", href: "/en/services" },
    { label: "Hire Purchase Financing", href: "/en/services/hire-purchase" }
  ];
  const faqs = [
    {
      question: "What is hire purchase financing?",
      answer: "Hire purchase is a financing method where you pay for equipment through monthly installments while using it for your business. Once all payments are complete, ownership of the equipment transfers to you. It's ideal for businesses that need equipment immediately but prefer to spread the cost over time."
    },
    {
      question: "What equipment can be financed through hire purchase?",
      answer: "We finance a wide range of equipment including excavators, bulldozers, backhoes, road rollers, lorries, container trucks, forklifts, cranes, generators, and other construction and logistics equipment. Both new and used equipment (up to 10 years old) are accepted."
    },
    {
      question: "What is your approval rate and how long does it take?",
      answer: "We maintain a strong approval rate and process applications quickly. Once approved, funds can be disbursed within 3-5 working days. Our streamlined process requires minimal documentation and our team works efficiently to get you equipped quickly."
    },
    {
      question: "How long are the payment terms?",
      answer: "We offer flexible payment terms ranging from 12 to 60 months (1 to 5 years). The term length depends on the equipment type, age, and your business needs. Longer terms mean lower monthly payments, while shorter terms mean you own the equipment faster."
    },
    {
      question: "What documents are required for hire purchase application?",
      answer: "Required documents include: Company SSM registration, latest 6 months bank statements, IC/passport of directors, business financial statements (if available), quotation or invoice for the equipment, and equipment specifications. Our team will guide you through the documentation process."
    },
    {
      question: "Can I finance used equipment?",
      answer: "Yes! We finance both new and used equipment. For used equipment, we typically accept machinery up to 10 years old, subject to condition assessment. The age and condition of equipment may affect the loan amount and terms offered."
    },
    {
      question: "Is a down payment required?",
      answer: "No! We offer 0% deposit with 100% financing available for qualified applicants (subject to terms and conditions). This means zero upfront payment needed. Equipment ownership is accessible to all businesses without requiring any deposit. This is our major competitive advantage."
    },
    {
      question: "What happens if I miss a payment?",
      answer: "We understand that businesses face cash flow challenges. If you anticipate payment difficulty, contact us immediately. We can work out payment arrangements or restructuring options. Late payments may incur charges, and consistent default could result in equipment repossession as per agreement terms."
    },
    {
      question: "Can I settle the hire purchase early?",
      answer: "Yes, early settlement is allowed and encouraged. You can pay off the remaining balance at any time, and we'll provide a settlement statement. Early settlement may involve administrative fees, but you'll save on future interest charges. Contact us for your settlement quote."
    },
    {
      question: "How do I apply for hire purchase financing?",
      answer: "Simply call us at 017-570 0889, WhatsApp us, or fill out our online contact form. Our financing specialists will discuss your equipment needs, explain available options, and guide you through the application process. We make it quick and easy to get your business equipped."
    }
  ];
  const servicePageSchema = generateServicePageSchema({
    serviceName: "Equipment Hire Purchase Financing",
    description: "Flexible hire purchase financing for excavators, lorries, forklifts, and construction equipment with fast processing and flexible terms",
    serviceType: "Equipment Hire Purchase",
    minRate: "8.00",
    maxRate: "18.00",
    locale: "en"
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords, "ogType": "website", "data-astro-cid-mwjsfr3o": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": servicePageSchema, "data-astro-cid-mwjsfr3o": true })}  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema, "data-astro-cid-mwjsfr3o": true })}  ${maybeRenderHead()}<div class="container-custom py-4" data-astro-cid-mwjsfr3o> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-mwjsfr3o": true })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hire Purchase Equipment Financing", "subtitle": "Own your equipment through flexible monthly payments. Fast approval, competitive rates, and terms up to 60 months. Get your business equipped today!", "ctaText": "Get Free Quote", "ctaLink": "/en/contact", "ctaSecondaryText": "WhatsApp Us", "ctaSecondaryLink": "https://wa.me/60175700889", "lang": lang, "trustSignals": ["Fast Approval", "Quick Processing", "500+ Happy Clients"], "data-astro-cid-mwjsfr3o": true })}  <section class="section-padding bg-gray-50" data-astro-cid-mwjsfr3o> <div class="container-custom" data-astro-cid-mwjsfr3o> <div class="max-w-4xl mx-auto" data-astro-cid-mwjsfr3o> <div class="text-center mb-12" data-astro-cid-mwjsfr3o> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-mwjsfr3o>
What is Hire Purchase Financing?
</h2> <div class="w-20 h-1 bg-accent mx-auto mb-6" data-astro-cid-mwjsfr3o></div> </div> <div class="prose prose-lg max-w-none" data-astro-cid-mwjsfr3o> <p class="text-gray-700 leading-relaxed mb-6" data-astro-cid-mwjsfr3o>
Hire purchase (HP) is an asset financing solution that allows businesses and individuals to acquire essential equipment through manageable monthly installments. Instead of paying the full cost upfront, you spread the payment over 1 to 5 years while using the equipment to generate revenue for your business.
</p> <p class="text-gray-700 leading-relaxed mb-6" data-astro-cid-mwjsfr3o>
This financing method is particularly popular for construction equipment, logistics vehicles, and industrial machinery where the equipment's immediate use creates cash flow to service the monthly payments. Upon completion of all installments, full ownership transfers to you automatically.
</p> <div class="bg-white p-6 rounded-lg border-l-4 border-primary shadow-[2px_2px_0_#2D1810]" data-astro-cid-mwjsfr3o> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-mwjsfr3o>How Hire Purchase Works:</h3> <ol class="space-y-3 text-gray-700" data-astro-cid-mwjsfr3o> <li data-astro-cid-mwjsfr3o><strong data-astro-cid-mwjsfr3o>1. Choose Your Equipment:</strong> Select the machinery or vehicle your business needs</li> <li data-astro-cid-mwjsfr3o><strong data-astro-cid-mwjsfr3o>2. Apply for Financing:</strong> Submit a simple application with basic documentation</li> <li data-astro-cid-mwjsfr3o><strong data-astro-cid-mwjsfr3o>3. Get Approved Fast:</strong> Receive approval quickly (strong approval rate)</li> <li data-astro-cid-mwjsfr3o><strong data-astro-cid-mwjsfr3o>4. Zero Deposit Option:</strong> 0% deposit available with 100% financing (subject to terms and conditions)</li> <li data-astro-cid-mwjsfr3o><strong data-astro-cid-mwjsfr3o>5. Use & Pay Monthly:</strong> Start using equipment immediately while making monthly payments</li> <li data-astro-cid-mwjsfr3o><strong data-astro-cid-mwjsfr3o>6. Own the Equipment:</strong> After final payment, equipment ownership transfers to you</li> </ol> </div> </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-mwjsfr3o> <div class="container-custom" data-astro-cid-mwjsfr3o> <div class="text-center mb-12" data-astro-cid-mwjsfr3o> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-mwjsfr3o>
Why Choose Our Hire Purchase Financing?
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-mwjsfr3o>
We've helped over 500 Malaysian businesses acquire the equipment they need to grow
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-mwjsfr3o></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-mwjsfr3o> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "lightning", "title": "Quick Approval", "description": "Get your application approved quickly. Our streamlined process means minimal waiting time and fast equipment delivery.", "data-astro-cid-mwjsfr3o": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "percentage", "title": "Competitive Interest Rates", "description": "Interest rates 8-18% per annum (subject to credit assessment). We work with multiple financiers to get you the best possible terms.", "data-astro-cid-mwjsfr3o": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "calendar", "title": "Flexible Payment Terms", "description": "Choose repayment periods from 12 to 60 months. Customize your payment schedule to match your cash flow and business cycle.", "data-astro-cid-mwjsfr3o": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "shield", "title": "High Approval Rate", "description": "With our extensive lender network and expertise, we maintain one of the highest approval rates in the industry.", "data-astro-cid-mwjsfr3o": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "users", "title": "Multilingual Support", "description": "Our team serves you in English, Mandarin, and Bahasa Malaysia. Get assistance in your preferred language.", "data-astro-cid-mwjsfr3o": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "clock", "title": "0% Deposit | 100% Financing", "description": "Zero upfront payment required with 100% financing available for qualified applicants (subject to terms and conditions). Equipment ownership accessible to all businesses.", "data-astro-cid-mwjsfr3o": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "default", "title": "New & Used Equipment", "description": "Finance both brand new and pre-owned equipment up to 10 years old. Quality assets at prices that fit your budget.", "data-astro-cid-mwjsfr3o": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "default", "title": "No Hidden Fees", "description": "Transparent pricing with all fees disclosed upfront. No surprises, just honest financing solutions.", "data-astro-cid-mwjsfr3o": true })} </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-mwjsfr3o> <div class="container-custom" data-astro-cid-mwjsfr3o> <div class="text-center mb-12" data-astro-cid-mwjsfr3o> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-mwjsfr3o>
Equipment We Finance
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-mwjsfr3o>
From construction to logistics, we finance the equipment that drives your business forward
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-mwjsfr3o></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-mwjsfr3o> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-mwjsfr3o> <div class="text-primary text-4xl mb-4" data-astro-cid-mwjsfr3o>🚜</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-mwjsfr3o>Construction Equipment</h3> <ul class="text-gray-600 space-y-2" data-astro-cid-mwjsfr3o> <li data-astro-cid-mwjsfr3o>• Excavators (1-40 tons)</li> <li data-astro-cid-mwjsfr3o>• Bulldozers</li> <li data-astro-cid-mwjsfr3o>• Backhoe Loaders</li> <li data-astro-cid-mwjsfr3o>• Road Rollers</li> <li data-astro-cid-mwjsfr3o>• Wheel Loaders</li> <li data-astro-cid-mwjsfr3o>• Skid Steer Loaders</li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-mwjsfr3o> <div class="text-primary text-4xl mb-4" data-astro-cid-mwjsfr3o>🚛</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-mwjsfr3o>Logistics Vehicles</h3> <ul class="text-gray-600 space-y-2" data-astro-cid-mwjsfr3o> <li data-astro-cid-mwjsfr3o>• Lorries & Trucks</li> <li data-astro-cid-mwjsfr3o>• Container Trucks</li> <li data-astro-cid-mwjsfr3o>• Prime Movers</li> <li data-astro-cid-mwjsfr3o>• Cargo Vans</li> <li data-astro-cid-mwjsfr3o>• Trailer Trucks</li> <li data-astro-cid-mwjsfr3o>• Dump Trucks</li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-mwjsfr3o> <div class="text-primary text-4xl mb-4" data-astro-cid-mwjsfr3o>🏗️</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-mwjsfr3o>Lifting Equipment</h3> <ul class="text-gray-600 space-y-2" data-astro-cid-mwjsfr3o> <li data-astro-cid-mwjsfr3o>• Forklifts (1-25 tons)</li> <li data-astro-cid-mwjsfr3o>• Mobile Cranes</li> <li data-astro-cid-mwjsfr3o>• Tower Cranes</li> <li data-astro-cid-mwjsfr3o>• Reach Stackers</li> <li data-astro-cid-mwjsfr3o>• Aerial Work Platforms</li> <li data-astro-cid-mwjsfr3o>• Scissor Lifts</li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-mwjsfr3o> <div class="text-primary text-4xl mb-4" data-astro-cid-mwjsfr3o>⚡</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-mwjsfr3o>Power & Others</h3> <ul class="text-gray-600 space-y-2" data-astro-cid-mwjsfr3o> <li data-astro-cid-mwjsfr3o>• Generators (10-500kVA)</li> <li data-astro-cid-mwjsfr3o>• Air Compressors</li> <li data-astro-cid-mwjsfr3o>• Concrete Mixers</li> <li data-astro-cid-mwjsfr3o>• Welding Machines</li> <li data-astro-cid-mwjsfr3o>• Compactors</li> <li data-astro-cid-mwjsfr3o>• Industrial Equipment</li> </ul> </div> </div> <div class="text-center mt-10" data-astro-cid-mwjsfr3o> <p class="text-gray-600 mb-6" data-astro-cid-mwjsfr3o>
Don't see your equipment listed? We finance a wide range of commercial and industrial assets.
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Inquire About Your Equipment", "link": "/en/contact", "variant": "primary", "size": "large", "data-astro-cid-mwjsfr3o": true })} </div> </div> </section>  <section class="section-padding" data-astro-cid-mwjsfr3o> <div class="container-custom" data-astro-cid-mwjsfr3o> <div class="text-center mb-12" data-astro-cid-mwjsfr3o> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-mwjsfr3o>
How to Apply for Hire Purchase
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-mwjsfr3o>
Our simple 4-step process gets you equipped in no time
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-mwjsfr3o></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-mwjsfr3o> <div class="text-center" data-astro-cid-mwjsfr3o> <div class="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6" data-astro-cid-mwjsfr3o>
1
</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-mwjsfr3o>Contact Us</h3> <p class="text-gray-600" data-astro-cid-mwjsfr3o>
Call, WhatsApp, or email us with your equipment needs. Our specialists respond within hours.
</p> </div> <div class="text-center" data-astro-cid-mwjsfr3o> <div class="w-20 h-20 bg-[#8B6F47] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6" data-astro-cid-mwjsfr3o>
2
</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-mwjsfr3o>Submit Documents</h3> <p class="text-gray-600" data-astro-cid-mwjsfr3o>
Provide basic business documents and equipment quotation. We guide you through the entire process.
</p> </div> <div class="text-center" data-astro-cid-mwjsfr3o> <div class="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6" data-astro-cid-mwjsfr3o>
3
</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-mwjsfr3o>Get Approved</h3> <p class="text-gray-600" data-astro-cid-mwjsfr3o>
Receive approval quickly. We'll present the best financing terms available for you.
</p> </div> <div class="text-center" data-astro-cid-mwjsfr3o> <div class="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6" data-astro-cid-mwjsfr3o>
4
</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-mwjsfr3o>Get Your Equipment</h3> <p class="text-gray-600" data-astro-cid-mwjsfr3o>
Sign the agreement, pay down payment, and receive your equipment. Start generating revenue immediately!
</p> </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-br from-primary to-secondary text-white" data-astro-cid-mwjsfr3o> <div class="container-custom" data-astro-cid-mwjsfr3o> <div class="max-w-4xl mx-auto" data-astro-cid-mwjsfr3o> <div class="text-center mb-12" data-astro-cid-mwjsfr3o> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-mwjsfr3o>
Application Requirements
</h2> <p class="text-xl text-white/90 max-w-2xl mx-auto" data-astro-cid-mwjsfr3o>
Simple documentation for fast processing
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-mwjsfr3o></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-mwjsfr3o> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-mwjsfr3o> <h3 class="text-2xl font-bold mb-4 flex items-center" data-astro-cid-mwjsfr3o> <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-mwjsfr3o> <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" data-astro-cid-mwjsfr3o></path> <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" data-astro-cid-mwjsfr3o></path> </svg>
For Companies (Sdn Bhd)
</h3> <ul class="space-y-3 text-white/90" data-astro-cid-mwjsfr3o> <li class="flex items-start" data-astro-cid-mwjsfr3o> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-mwjsfr3o> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-mwjsfr3o></path> </svg>
SSM Company Registration (Form 9 & 49)
</li> <li class="flex items-start" data-astro-cid-mwjsfr3o> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-mwjsfr3o> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-mwjsfr3o></path> </svg>
Latest 6 months bank statements
</li> <li class="flex items-start" data-astro-cid-mwjsfr3o> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-mwjsfr3o> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-mwjsfr3o></path> </svg>
Directors' IC/Passport copies
</li> <li class="flex items-start" data-astro-cid-mwjsfr3o> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-mwjsfr3o> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-mwjsfr3o></path> </svg>
Financial statements (if available)
</li> <li class="flex items-start" data-astro-cid-mwjsfr3o> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-mwjsfr3o> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-mwjsfr3o></path> </svg>
Equipment quotation/invoice
</li> </ul> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-mwjsfr3o> <h3 class="text-2xl font-bold mb-4 flex items-center" data-astro-cid-mwjsfr3o> <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-mwjsfr3o> <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" data-astro-cid-mwjsfr3o></path> </svg>
For Individuals/Sole Proprietors
</h3> <ul class="space-y-3 text-white/90" data-astro-cid-mwjsfr3o> <li class="flex items-start" data-astro-cid-mwjsfr3o> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-mwjsfr3o> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-mwjsfr3o></path> </svg>
IC/Passport copy
</li> <li class="flex items-start" data-astro-cid-mwjsfr3o> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-mwjsfr3o> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-mwjsfr3o></path> </svg>
Latest 6 months bank statements
</li> <li class="flex items-start" data-astro-cid-mwjsfr3o> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-mwjsfr3o> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-mwjsfr3o></path> </svg>
Business registration (if applicable)
</li> <li class="flex items-start" data-astro-cid-mwjsfr3o> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-mwjsfr3o> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-mwjsfr3o></path> </svg>
Income proof (payslips/EPF statement)
</li> <li class="flex items-start" data-astro-cid-mwjsfr3o> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-mwjsfr3o> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-mwjsfr3o></path> </svg>
Equipment quotation/invoice
</li> </ul> </div> </div> <div class="mt-8 text-center" data-astro-cid-mwjsfr3o> <p class="text-white/90 mb-4" data-astro-cid-mwjsfr3o>
Our team will guide you through the documentation process and can assist with any missing paperwork.
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Start Your Application", "link": "/en/contact", "variant": "accent", "size": "large", "data-astro-cid-mwjsfr3o": true })} </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-mwjsfr3o> <div class="container-custom" data-astro-cid-mwjsfr3o> <div class="max-w-4xl mx-auto" data-astro-cid-mwjsfr3o> <div class="text-center mb-12" data-astro-cid-mwjsfr3o> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-mwjsfr3o>
Frequently Asked Questions
</h2> <p class="text-xl text-gray-600" data-astro-cid-mwjsfr3o>
Everything you need to know about hire purchase financing
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-mwjsfr3o></div> </div> <div class="space-y-4" data-astro-cid-mwjsfr3o> ${faqs.map((faq, index) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer, "isOpen": index === 0, "data-astro-cid-mwjsfr3o": true })}`)} </div> <div class="mt-10 text-center" data-astro-cid-mwjsfr3o> <p class="text-gray-600 mb-6" data-astro-cid-mwjsfr3o>
Have more questions? Our financing specialists are here to help.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-mwjsfr3o> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Call Us Now", "link": "tel:+60175700889", "variant": "primary", "icon": "phone", "data-astro-cid-mwjsfr3o": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp Us", "link": "https://wa.me/60175700889", "variant": "accent", "icon": "whatsapp", "data-astro-cid-mwjsfr3o": true })} </div> </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-r from-primary via-secondary to-accent text-white" data-astro-cid-mwjsfr3o> <div class="container-custom" data-astro-cid-mwjsfr3o> <div class="max-w-4xl mx-auto text-center" data-astro-cid-mwjsfr3o> <h2 class="text-3xl md:text-4xl font-bold mb-6" data-astro-cid-mwjsfr3o>
Ready to Get Your Equipment?
</h2> <p class="text-xl text-white/90 mb-8 leading-relaxed" data-astro-cid-mwjsfr3o>
Join 500+ Malaysian businesses that trust Ing Heng Credit for their equipment financing needs. Get approved fast with our industry-leading approval rate.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10" data-astro-cid-mwjsfr3o> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-mwjsfr3o> <div class="text-4xl font-bold mb-2" data-astro-cid-mwjsfr3o>Quick</div> <div class="text-white/90" data-astro-cid-mwjsfr3o>Approval Time</div> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-mwjsfr3o> <div class="text-4xl font-bold mb-2" data-astro-cid-mwjsfr3o>500+</div> <div class="text-white/90" data-astro-cid-mwjsfr3o>Happy Clients</div> </div> </div> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-mwjsfr3o> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Apply Now", "link": "/en/contact", "variant": "accent", "size": "large", "data-astro-cid-mwjsfr3o": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp: 017-570 0889", "link": "https://wa.me/60175700889", "variant": "outline-white", "size": "large", "icon": "whatsapp", "data-astro-cid-mwjsfr3o": true })} </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-mwjsfr3o> <div class="container-custom" data-astro-cid-mwjsfr3o> <div class="max-w-3xl mx-auto" data-astro-cid-mwjsfr3o> <div class="text-center mb-12" data-astro-cid-mwjsfr3o> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-mwjsfr3o>
Get Your Free Quote Today
</h2> <p class="text-xl text-gray-600" data-astro-cid-mwjsfr3o>
Fill out the form below and our financing specialists will contact you promptly
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-mwjsfr3o></div> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang, "data-astro-cid-mwjsfr3o": true })} </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/services/hire-purchase.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/services/hire-purchase.astro";
const $$url = "/en/services/hire-purchase";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HirePurchase,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
