/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { c as generateProductSchema, a as generateFAQSchema, $ as $$BaseLayout, e as encodeJSONLD } from '../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$BenefitCard } from '../../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$StepCard } from '../../../chunks/StepCard_CWNcWtHa.mjs';
import { $ as $$FAQItem } from '../../../chunks/FAQItem_CTpbqvJe.mjs';
import { $ as $$ContactForm } from '../../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$Calculator } from '../../../chunks/Calculator_BS1M0nbC.mjs';
import { $ as $$TestimonialCard } from '../../../chunks/TestimonialCard_DCNY-qZL.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$RelatedEquipment } from '../../../chunks/RelatedEquipment_ZkPtOS9o.mjs';
import { S as SITE_CONFIG } from '../../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Forklift = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const pageTitle = "Forklift Financing Malaysia | Warehouse Equipment Loan | ROI Calculator";
  const pageDescription = "Smart forklift financing for warehouse operations. Own your forklift for less than rental cost. Fast approval, 90% LTV, flexible terms. Calculate your ROI now!";
  const keywords = ["forklift financing Malaysia", "warehouse equipment loan", "forklift lease Malaysia", "electric forklift financing", "material handling equipment loan", "forklift ROI calculator", "warehouse machinery financing", "forklift financing Shah Alam"];
  const breadcrumbs = [
    { label: "Home", url: "/en" },
    { label: "Equipment", url: "/en/equipment" },
    { label: "Forklift Financing", url: "/en/equipment/forklift" }
  ];
  const benefits = [
    { icon: "clock", title: "Own vs Rent: Break Even in 18 Months", description: "Stop paying rent forever. Build equity in your equipment. ROI calculator shows you the exact savings." },
    { icon: "percentage", title: "Finance From 0% Down Payment*", description: "From 0%* down payment for qualified applicants. Loan up to 100%*. Preserve your working capital for operations and growth. *Subject to terms and conditions" },
    { icon: "calendar", title: "Flexible 12-60 Month Terms", description: "Choose payment terms that match your cash flow and operational needs. Early repayment without penalty." },
    { icon: "shield", title: "New & Used Equipment Accepted", description: "Finance electric, diesel, or gas forklifts up to 8 years old. All major brands accepted." },
    { icon: "lightning", title: "Electric Forklift Financing", description: "40-88% more efficient than diesel. Lower total cost of ownership. Government green incentives available." },
    { icon: "users", title: "Fleet Financing Available", description: "Finance multiple forklifts at once. Volume discounts for 2+ units. Scale your warehouse operations." },
    { icon: "clock", title: "Fast Credit Decision", description: "Fast approval process designed for busy warehouse managers. Minimal paperwork, maximum efficiency." },
    { icon: "shield", title: "Tax Benefits & Depreciation", description: "Equipment financing offers tax advantages. Consult with your accountant about depreciation benefits." }
  ];
  const steps = [
    { stepNumber: 1, icon: "contact", title: "Calculate Your ROI", description: "Use our calculator to compare rental costs vs ownership. See your break-even point instantly." },
    { stepNumber: 2, icon: "document", title: "Submit Application", description: "Simple online or WhatsApp application. Basic documents: IC, bank statements, company registration." },
    { stepNumber: 3, icon: "check", title: "Fast Credit Decision", description: "Fast credit decision within one business day. Clear terms, no hidden fees." },
    { stepNumber: 4, icon: "clipboard", title: "Review Financing Terms", description: "We present multiple financing options. Choose the payment structure that fits your budget." },
    { stepNumber: 5, icon: "truck", title: "Take Delivery & Start Saving", description: "Funds disbursed to supplier. Take possession of your forklift. Start building equity immediately." }
  ];
  const equipmentTypes = [
    { name: "Counterbalance Forklifts (1.5-5 tons)", description: "Most common warehouse forklifts. Electric or diesel. Indoor/outdoor use. Ideal for general material handling and pallet movement." },
    { name: "Reach Trucks (1.4-2.5 tons)", description: "Narrow aisle operation. Maximize warehouse space utilization. High-lift capabilities up to 12 meters. Perfect for high-density storage." },
    { name: "Pallet Jacks (Electric/Manual)", description: "Low-cost entry solution. Electric pallet jacks for efficiency. Ideal for light-duty warehouse operations and order picking." },
    { name: "Order Pickers", description: "Operator elevation platforms. E-commerce warehouse essential. Improve picking efficiency by 200%. Multiple level access." },
    { name: "Electric Forklifts (Lithium-Ion)", description: "Zero emissions, 72% market share. 40% more efficient than lead-acid. 88% more efficient than diesel. Fast charging, long lifespan." },
    { name: "Rough Terrain Forklifts", description: "Outdoor construction sites. All-terrain capability. Heavy-duty applications. Available for specialized warehouse yards." }
  ];
  const acceptedBrands = ["Toyota", "Linde", "Nissan", "Mitsubishi", "Crown", "Hyster", "Yale", "BT", "Jungheinrich", "Hangcha", "Heli", "EP Equipment"];
  const testimonials = [
    {
      name: "William Tan",
      company: "WT Logistics Sdn Bhd",
      location: "Shah Alam, Selangor",
      testimonial: "We were renting 3 forklifts for RM 9,000/month. After financing with Ing Heng Credit, our monthly payment is RM 7,200 and we OWN the equipment. Break-even in 20 months. Best business decision we made.",
      rating: 5
    },
    {
      name: "Jessica Lee",
      company: "Cold Chain Solutions",
      location: "Subang Jaya, Selangor",
      testimonial: "Our cold storage facility needed reliable forklifts that can handle -20\xB0C temperatures. Ing Heng Credit financed 2 specialized electric forklifts with 90% LTV. The tax depreciation benefits reduced our effective interest rate to under 5%.",
      rating: 5
    },
    {
      name: "Kumar Subramaniam",
      company: "KS Warehouse Management",
      location: "Klang, Selangor",
      testimonial: "E-commerce boom meant we needed to scale fast. Financed 5 reach trucks and 3 order pickers through Ing Heng Credit. Fleet financing discount saved us 1.5% on interest. Our warehouse productivity increased 180%.",
      rating: 5
    }
  ];
  const faqs = [
    { question: "Is it better to lease or buy a forklift?", answer: "For year-round warehouse operations, buying with financing is more cost-effective than long-term rental. Our ROI analysis shows break-even typically occurs within 18-24 months. After that, you build equity while renters continue paying forever. Financing preserves working capital while giving you ownership benefits." },
    { question: "Can I finance used forklifts?", answer: "Yes! We finance used forklifts up to 8 years old from reputable brands. Equipment must be in good working condition and pass inspection. Used electric forklifts with lithium-ion batteries are excellent investments - lower upfront cost, proven reliability, and still 70-80% of operational lifespan remaining." },
    { question: "What are the tax benefits of forklift financing?", answer: "Equipment financing offers several tax advantages: (1) Depreciation deductions over equipment lifespan, (2) Interest payments are tax-deductible business expenses, (3) Potential green technology incentives for electric forklifts. Consult your accountant for specific tax treatment based on your business structure. Many clients save 20-30% in effective costs through tax benefits." },
    { question: "How much does forklift financing cost in Malaysia?", answer: "Interest rates range from 6.5% to 11% annually depending on credit profile, equipment age, down payment, and loan term. Total monthly payment includes principal + interest. For example: RM 100,000 forklift at 8% over 48 months = RM 2,441/month. Compare this to rental at RM 3,000-3,500/month for the same equipment." },
    { question: "Can I finance electric forklifts with lithium-ion batteries?", answer: "Absolutely! Electric forklifts are 72% of market share and growing. Lithium-ion batteries cost more upfront but deliver 40% better efficiency than lead-acid and 88% better than diesel. We finance the complete package: forklift + lithium battery + charger. Total cost of ownership analysis shows 5-year savings of RM 80,000+ compared to diesel equivalents." },
    { question: "What is the difference between forklift leasing and financing?", answer: "Financing (hire purchase) means you own the equipment at the end. Leasing means you return it or buy it out. Financing builds equity, offers tax depreciation benefits, and gives you control over equipment maintenance. Leasing offers lower monthly payments but no ownership. For established warehouses with long-term needs, financing is typically more economical." },
    { question: "How long is the forklift financing term?", answer: "Standard terms: 12-60 months. Most warehouse operators choose 36-48 months for optimal balance between monthly payment and total interest cost. Shorter terms for used equipment. Longer terms for new electric forklifts with 10+ year lifespan. Match your payment term to equipment expected useful life." },
    { question: "Do you finance forklift fleets for expanding warehouses?", answer: "Yes! Fleet financing is one of our specialties. Benefits: (1) Volume discounts on interest rates for 2+ units, (2) Single monthly payment for all equipment, (3) Staggered delivery schedules to match warehouse expansion, (4) Mix different forklift types in one financing package. Perfect for e-commerce warehouses scaling operations." },
    { question: "What documents do I need for forklift financing?", answer: "For individuals: IC/Passport, 6 months bank statements, income proof. For companies (most common): SSM registration, company bank statements (6 months), directors' IC, financial statements (if available). Equipment quote/invoice from supplier. The process is simpler than bank business loans - we focus on equipment value and your operational cash flow, not complex financial analysis." },
    { question: "Can I finance forklift attachments and spare parts?", answer: "Yes! We can include attachments (side shifters, clamps, rotators, extended forks) in the financing package. Spare parts can be financed if purchased with the forklift. Battery upgrades (lead-acid to lithium-ion) can also be financed separately. Total solution approach for complete warehouse equipment needs." }
  ];
  const productSchema = generateProductSchema({
    name: "Forklift Financing Malaysia",
    description: "Professional forklift financing for warehouse operations. Own your equipment for less than rental cost. Fast approval, flexible terms.",
    imageUrl: `${SITE_CONFIG.url}/images/forklift-financing.jpg`,
    category: "Financial Service - Equipment Financing",
    offers: {
      price: "50000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Stop Renting. Start Owning Your Forklift.", "subtitle": "Own Your Equipment for Less Than Rental Cost | Fast Approval | 90% LTV | Calculate Your ROI Below", "ctaText": "Calculate Your Savings", "ctaLink": "#calculator", "ctaSecondaryText": "WhatsApp: 017-570 0889", "ctaSecondaryLink": "https://wa.me/60175700889?text=Hi!%20I%27d%20like%20information%20about%20forklift%20financing.", "lang": lang, "trustSignals": ["40 Years Experience", "KPKT Licensed", "4,000+ Companies Financed", "90% LTV Available"] })}  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="max-w-5xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
The Math Is Simple: Ownership Beats Rental
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
You're already spending RM 3,000-4,000/month to rent a forklift. What if you could own it for LESS and stop paying rent forever?
</p> </div> <div class="grid md:grid-cols-2 gap-8 mb-8"> <!-- Rental Column --> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810] border-2 border-red-200"> <div class="text-center mb-6"> <div class="text-red-600 font-bold text-2xl mb-2">Long-Term Rental</div> <div class="text-[#4F3E29]">What You're Doing Now</div> </div> <div class="space-y-4"> <div class="flex justify-between items-center pb-3 border-b"> <span class="text-[#4F3E29]">Monthly Rental Payment</span> <span class="text-xl font-bold text-red-600">RM 3,500</span> </div> <div class="flex justify-between items-center pb-3 border-b"> <span class="text-[#4F3E29]">Annual Cost</span> <span class="text-xl font-bold text-red-600">RM 42,000</span> </div> <div class="flex justify-between items-center pb-3 border-b"> <span class="text-[#4F3E29]">3-Year Total Cost</span> <span class="text-xl font-bold text-red-600">RM 126,000</span> </div> <div class="flex justify-between items-center pb-3 border-b"> <span class="text-[#4F3E29]">Equity Built</span> <span class="text-xl font-bold text-red-600">RM 0</span> </div> <div class="flex justify-between items-center"> <span class="text-[#4F3E29] font-semibold">What You Own</span> <span class="text-2xl font-bold text-red-600">NOTHING</span> </div> </div> <div class="mt-6 p-4 bg-red-50 rounded-lg"> <p class="text-sm text-red-800 font-medium">After 3 years, you've paid RM 126,000 and have zero assets to show for it. You're still renting.</p> </div> </div> <!-- Financing Column --> <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-[6px_6px_0_#2D1810] border-2 border-green-400"> <div class="text-center mb-6"> <div class="text-green-700 font-bold text-2xl mb-2">Equipment Financing</div> <div class="text-[#4F3E29]">Smart Ownership Strategy</div> </div> <div class="space-y-4"> <div class="flex justify-between items-center pb-3 border-b border-green-200"> <span class="text-[#4F3E29]">Monthly Payment (48 months)</span> <span class="text-xl font-bold text-green-700">RM 2,650</span> </div> <div class="flex justify-between items-center pb-3 border-b border-green-200"> <span class="text-[#4F3E29]">Annual Cost</span> <span class="text-xl font-bold text-green-700">RM 31,800</span> </div> <div class="flex justify-between items-center pb-3 border-b border-green-200"> <span class="text-[#4F3E29]">3-Year Total Paid</span> <span class="text-xl font-bold text-green-700">RM 95,400</span> </div> <div class="flex justify-between items-center pb-3 border-b border-green-200"> <span class="text-[#4F3E29]">Equipment Value</span> <span class="text-xl font-bold text-green-700">RM 100,000</span> </div> <div class="flex justify-between items-center"> <span class="text-[#4F3E29] font-semibold">What You Own</span> <span class="text-2xl font-bold text-green-700">THE FORKLIFT</span> </div> </div> <div class="mt-6 p-4 bg-green-600 text-white rounded-lg"> <p class="text-sm font-bold mb-1">YOU SAVE RM 30,600 IN 3 YEARS</p> <p class="text-sm">Plus you OWN a RM 100,000 asset. No more monthly rent. Ever.</p> </div> </div> </div> <div class="text-center bg-accent p-6 rounded-lg"> <p class="text-xl font-bold text-primary mb-2">Break-Even Point: Month 20</p> <p class="text-[#4F3E29]">After just 20 months, you've paid less than renting AND you own the equipment. Every month after that is pure savings.</p> </div> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Why Smart Warehouse Managers Choose Equipment Financing
</h2> <p class="text-xl text-[#4F3E29]">
Built for warehouse operations. Designed for your cash flow. Proven ROI.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> </div> </section>  <section id="calculator" class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="max-w-3xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Calculate Your Forklift Ownership ROI
</h2> <p class="text-xl text-[#4F3E29]">
See exactly how much you'll save by owning instead of renting
</p> </div> ${renderComponent($$result2, "Calculator", $$Calculator, { "lang": lang, "equipmentType": "Forklift", "defaultPrice": 1e5 })} </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
5 Steps from Application to Equipment Ownership
</h2> <p class="text-xl text-[#4F3E29]">
Designed for busy warehouse managers. Fast, simple, transparent.
</p> </div> <div class="grid md:grid-cols-5 gap-8"> ${steps.map((step) => renderTemplate`${renderComponent($$result2, "StepCard", $$StepCard, { "stepNumber": step.stepNumber, "icon": step.icon, "title": step.title, "description": step.description })}`)} </div> <div class="text-center mt-12"> <a href="https://wa.me/60175700889?text=Hi!%20I%27d%20like%20to%20apply%20for%20forklift%20financing." target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg inline-block">
Start Your Application on WhatsApp
</a> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
All Types of Material Handling Equipment Financed
</h2> <p class="text-xl text-[#4F3E29]">
From compact pallet jacks to heavy-duty reach trucks and everything in between
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> ${equipmentTypes.map((equipment) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] transition-shadow"> <h3 class="text-lg font-bold text-primary mb-3">${equipment.name}</h3> <p class="text-[#4F3E29]">${equipment.description}</p> </div>`)} </div> <!-- Accepted Brands --> <div class="text-center"> <h3 class="text-2xl font-bold text-primary mb-6">We Finance All Major Brands</h3> <div class="flex flex-wrap justify-center gap-4 mb-4"> ${acceptedBrands.map((brand) => renderTemplate`<span class="px-4 py-2 bg-white rounded-full shadow-[2px_2px_0_#2D1810] text-[#4F3E29] font-medium"> ${brand} </span>`)} </div> <p class="text-[#4F3E29]">Japanese, European, American, and Chinese brands all accepted. Contact us for specific models.</p> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Warehouse Managers Who Made the Switch
</h2> <p class="text-xl text-[#4F3E29]">
Real ROI results from real warehouse operations in Malaysia
</p> </div> <div class="grid md:grid-cols-3 gap-6"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { "name": testimonial.name, "company": testimonial.company, "location": testimonial.location, "testimonial": testimonial.testimonial, "rating": testimonial.rating })}`)} </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Simple Application Requirements
</h2> <p class="text-xl text-[#4F3E29]">
Faster than bank business loans. Focus on equipment value and cash flow, not complex financials.
</p> </div> <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"> <!-- Individual Requirements --> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810]"> <h3 class="text-2xl font-bold text-primary mb-6">For Individuals</h3> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">IC / Passport Copy</div> <div class="text-sm text-[#4F3E29]">Malaysian IC or valid passport for foreigners with work permit</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">6 Months Bank Statements</div> <div class="text-sm text-[#4F3E29]">Personal or business account showing regular cash flow</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">Income Proof</div> <div class="text-sm text-[#4F3E29]">Salary slips, EPF statements, or business income documentation</div> </div> </li> </ul> </div> <!-- Company Requirements --> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810]"> <h3 class="text-2xl font-bold text-primary mb-6">For Companies (Most Common)</h3> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">SSM Registration</div> <div class="text-sm text-[#4F3E29]">Company registration certificate (Sdn Bhd, Enterprise, LLP)</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">Company Bank Statements</div> <div class="text-sm text-[#4F3E29]">6 months company account - we focus on operational cash flow</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">Directors' IC Copies</div> <div class="text-sm text-[#4F3E29]">All directors and major shareholders</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">Equipment Quotation</div> <div class="text-sm text-[#4F3E29]">Quote from forklift supplier showing model, price, specifications</div> </div> </li> </ul> </div> </div> <div class="max-w-3xl mx-auto mt-8 p-6 bg-[#F5F5DC] border-l-4 border-primary rounded-lg"> <h4 class="font-bold text-primary mb-2">Equipment Financing vs Bank Business Loan:</h4> <ul class="space-y-1 text-[#4F3E29] text-sm"> <li>• Simpler documentation - no complex financial statements required</li> <li>• Faster approval - Fast decision vs 2-4 weeks</li> <li>• Equipment serves as collateral - no additional property mortgage needed</li> <li>• Focus on equipment value and cash flow, not perfect credit score</li> </ul> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Frequently Asked Questions About Forklift Financing
</h2> <p class="text-xl text-[#4F3E29]">
Everything warehouse managers need to know about equipment ownership
</p> </div> <div class="max-w-4xl mx-auto space-y-4"> ${faqs.map((faq) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer })}`)} </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "forklift" })}  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
Ready to Stop Renting and Start Owning?
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
Join hundreds of warehouse managers who made the switch from rental to ownership. Calculate your ROI, submit your application, and get approved quickly.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"> <a href="#calculator" class="btn btn-accent text-lg px-8 py-4">
Calculate Your Savings
</a> <a href="https://wa.me/60175700889?text=Hi!%20I%27d%20like%20to%20discuss%20forklift%20financing%20options." target="_blank" rel="noopener noreferrer" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
WhatsApp: 017-570 0889
</a> </div> <div class="flex flex-wrap justify-center gap-6 text-sm"> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>No Obligation Quote</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Fast Approval</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>40 Years Experience</span> </div> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
Get Your Free Financing Quote
</h2> <p class="text-[#4F3E29]">
We'll contact you promptly during business hours with a customized financing proposal
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema)), unescapeHTML(encodeJSONLD(faqSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/equipment/forklift.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/equipment/forklift.astro";
const $$url = "/en/equipment/forklift";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Forklift,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
