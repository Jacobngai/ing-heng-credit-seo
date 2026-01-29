/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { c as generateProductSchema, a as generateFAQSchema, $ as $$BaseLayout, e as encodeJSONLD } from '../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$BenefitCard } from '../../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$FAQItem } from '../../../chunks/FAQItem_CTpbqvJe.mjs';
import { $ as $$ContactForm } from '../../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$RelatedEquipment } from '../../../chunks/RelatedEquipment_ZkPtOS9o.mjs';
import { S as SITE_CONFIG } from '../../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$WheelLoader = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const pageTitle = "Stop Renting Wheel Loaders | Own Your Equipment | 0% Deposit";
  const pageDescription = "Tired of RM 16,000/month rental fees? Finance your own wheel loader. Equipment 10+ years old accepted. Bad credit approved. 0% deposit option. Build equity instead of enriching rental companies.";
  const keywords = ["wheel loader financing Malaysia", "stop renting wheel loader", "own vs rent wheel loader", "used wheel loader loan", "CAT 966 financing", "wheel loader hire purchase"];
  const breadcrumbs = [
    { label: "Home", url: "/en" },
    { label: "Equipment", url: "/en/equipment" },
    { label: "Wheel Loader Financing", url: "/en/equipment/wheel-loader" }
  ];
  const benefits = [
    { icon: "clock", title: "Build Equity With Every Payment", description: "RM 16,000/month rental = RM 192,000/year = RM 576,000 after 3 years. You own nothing. Finance instead: Similar payments, but you build toward owning a RM 300,000 asset." },
    { icon: "percentage", title: "0% Deposit Option Available", description: "Finance up to 100% of equipment value. Preserve cash for operations. Start building equity immediately. Keep working capital free for business needs." },
    { icon: "shield", title: "Equipment 10+ Years Old Accepted", description: "Your rental loader is probably 15 years old anyway. Age doesn't matter when equipment works. We approve loaders banks reject. Focus on condition, not age." },
    { icon: "users", title: "Bad Credit Approved", description: "Banks say no. We say yes. Past credit issues don't stop you from owning equipment. We focus on your business potential and equipment value." },
    { icon: "document", title: "Your Equipment. Your Schedule. Your Profits.", description: "Own your loader. Control operations completely. Fix on YOUR timeline. Qualify for tenders requiring equipment ownership. Build your business on your terms." },
    { icon: "shield", title: "Own A Productive Asset", description: "Rental = pure expense, 100% loss. Financing = building asset, eventual ownership. After 3-5 years, you OWN a productive machine worth hundreds of thousands." }
  ];
  const faqs = [
    {
      question: "Why should I buy instead of rent?",
      answer: "MATH: Rent at RM 16,000/month = RM 192,000/year. After 3 years, you've paid RM 576,000 and own NOTHING. Finance a used CAT 966C instead. After 3 years of payments, you OWN the loader. Build equity with every payment. Control operations completely. Own a productive asset. Even if financing costs similar monthly, you're building toward ownership instead of pure expense."
    },
    {
      question: "What if I can't afford the deposit?",
      answer: "0% deposit option available! Finance up to 100% of equipment value. You can start owning instead of renting with ZERO upfront payment. This is our major advantage over banks who require 10-30% deposit. We understand contractors need to preserve cash for operations, not tie it up in deposits."
    },
    {
      question: "Do you really finance 10+ year-old equipment?",
      answer: "YES! Your rental loader is probably 15 years old anyway. Banks reject equipment over 5 years old. We approve 10+ years old, even older if well-maintained. CAT wheel loaders last 20+ years. We assess working condition and business viability, not arbitrary age limits. If it loads trucks, we finance it."
    },
    {
      question: "What if I have bad credit?",
      answer: "We approve bad credit applications. Banks reject old equipment AND bad credit. We approve both. We focus on: Can you operate the equipment profitably? Is the equipment in working condition? We've helped hundreds of contractors with credit issues own their equipment instead of renting forever. The equipment serves as collateral, reducing our risk."
    },
    {
      question: "What equipment brands do you finance?",
      answer: "ALL major brands: CAT (966C/D/E, 950G/H/F, 980C/F), Komatsu (WA320, WA380, WA470), Volvo (L120, L150, L180), Chinese brands (XCMG, SDLG, Lonking). Premium brands: up to 12+ years old. Chinese brands: up to 8 years old. We assess each machine individually based on condition, not just brand and age."
    },
    {
      question: "How do monthly payments compare to rental?",
      answer: "Rental might seem cheaper monthly, but it's 100% expense with zero ownership. Financing might be similar monthly, but you're building toward ownership. Key difference: After 3 years of rental, you've paid RM 576,000 and own nothing. After 3 years of financing, you OWN an asset. You build equity. You control operations. You qualify for tenders requiring equipment ownership. Contact us for specific quote based on your equipment and situation."
    },
    {
      question: "What if the used loader breaks down?",
      answer: "Bring experienced operator to test machine before committing. Check engine, hydraulics, undercarriage. Operate for 30-60 minutes under load. Review maintenance records. We STRONGLY encourage thorough inspection - small investment saves major repair costs. Better to reject questionable equipment than finance problems. Many contractors budget RM 20-30k for initial refurbishment after purchase - still cheaper than years of rental fees."
    },
    {
      question: "Can I trade in my current equipment?",
      answer: "YES! Trade-in programs available. Own older equipment? Trade it in for credit and finance remaining amount. Currently financing equipment elsewhere? We can pay off your existing loan, apply remaining equity as deposit, and finance the difference. This is how contractors upgrade from old small loaders to better equipment over time."
    },
    {
      question: "What documents do I need?",
      answer: "IC/Passport copy, 6 months bank statements, equipment details and photos, business proof if available (quarry permit, project contracts). For companies: SSM registration, company bank statements, directors' IC. Simple documentation. We focus on your business reality, not complex financials. Fast approval compared to banks."
    },
    {
      question: "What happens after I pay off the financing?",
      answer: "The loader is 100% YOURS. Full ownership. Full control. Full profits. You can: Keep using it for years (CAT loaders last 20+ years), sell it and use equity for next equipment upgrade, trade it in for newer model. You've built an asset. You own productive equipment. You control your business completely. This is the difference between building equity vs pure expense."
    }
  ];
  const productSchema = generateProductSchema({
    name: "Wheel Loader Financing Malaysia - Stop Renting, Own Your Equipment",
    description: "Finance your own wheel loader instead of renting forever. Equipment 10+ years old accepted. Bad credit approved. 0% deposit option available. Build equity instead of rental trap.",
    imageUrl: `${SITE_CONFIG.url}/images/wheel-loader-financing.jpg`,
    category: "Financial Service - Equipment Financing",
    offers: {
      price: "0",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Stop Renting. Own Your Wheel Loader.", "subtitle": "Tired of RM 16,000/month rental fees? Finance your own equipment. 0% deposit option. Equipment 10+ years old accepted. Bad credit approved.", "ctaText": "Get Free Quote via WhatsApp", "ctaLink": "https://wa.me/60175700889?text=Hi!%20I%27d%20like%20to%20get%20a%20quote%20for%20wheel%20loader%20financing.", "ctaSecondaryText": "Call Now: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40 Years in Business", "KPKT Licensed", "0% Deposit Option", "Equipment 10+ Years Old Accepted"] })}  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="max-w-4xl mx-auto"> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810]"> <div class="prose max-w-none text-[#4F3E29]"> <p class="text-lg leading-relaxed mb-4">
You own a quarry.
</p> <p class="text-lg leading-relaxed mb-4">
Every month, you write a RM 16,000 check to the rental company.
</p> <p class="text-lg leading-relaxed mb-4">
You walk past that rented loader in your yard. It's probably 15 years old. Faded yellow paint. Worn tires.
</p> <p class="text-lg leading-relaxed mb-4">
And you think: "I've paid RM 192,000 this year. I don't own a single bolt on this machine."
</p> <p class="text-lg leading-relaxed mb-4"> <strong>Does your jaw clench when you write that check?</strong> </p> <p class="text-lg leading-relaxed mb-4">
When the rental company calls on a Friday: "We need it back Monday morning" - and you have 3 days of loading scheduled - does your chest tighten knowing you might lose the contract?
</p> <p class="text-lg leading-relaxed mb-4">
When you see your competitor with THEIR owned loader - working weekends, no restrictions, building equity - does it sting knowing you're enriching a rental company instead of yourself?
</p> <p class="text-lg leading-relaxed mb-4"> <strong>That's the rental trap.</strong> </p> <p class="text-lg leading-relaxed mb-4">
You found a used CAT 966C. 12 years old. Still functional. Still productive.
</p> <p class="text-lg leading-relaxed mb-4">
Banks reject it. "Too old."
</p> <p class="text-lg leading-relaxed mb-4">
But you know that rented loader is 15 years old anyway.
</p> <p class="text-lg leading-relaxed mb-4">
We approve equipment 10+ years old. Even older if maintained.
</p> <p class="text-lg leading-relaxed mb-4">
We understand: Age doesn't matter. What matters is escaping the rental trap.
</p> <p class="text-lg leading-relaxed mb-4">
You get financing. 0% deposit option available.
</p> <p class="text-lg leading-relaxed mb-4"> <strong>Your loader. Your schedule. Your equity.</strong> </p> <p class="text-lg leading-relaxed mb-4">
Every payment builds YOUR asset, not rental company profits.
</p> <p class="text-lg font-semibold text-primary leading-relaxed">
That's ownership.
</p> </div> </div> <div class="text-center mt-8"> <a href="https://wa.me/60175700889?text=Hi!%20I%27m%20tired%20of%20renting.%20I%27d%20like%20to%20discuss%20wheel%20loader%20financing." target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg inline-block">
Own Your Equipment. Talk to Us Now.
</a> </div> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Why Own Instead of Rent?
</h2> <p class="text-xl text-[#4F3E29]">
Build equity. Keep profits. Control your operations.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Wheel Loader Brands We Finance
</h2> <p class="text-xl text-[#4F3E29]">
All major brands - Equipment 10+ years old accepted
</p> </div> <div class="max-w-4xl mx-auto"> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810]"> <div class="grid md:grid-cols-2 gap-8"> <div> <h3 class="text-xl font-bold text-primary mb-4">Premium Brands:</h3> <ul class="space-y-2 text-[#4F3E29]"> <li><strong>CAT:</strong> 966C, 966D, 966E, 950G, 950H, 980C</li> <li><strong>Komatsu:</strong> WA320, WA380, WA470</li> <li><strong>Volvo:</strong> L120, L150, L180</li> <li class="text-sm italic">Up to 12+ years old considered</li> </ul> </div> <div> <h3 class="text-xl font-bold text-primary mb-4">Budget Brands:</h3> <ul class="space-y-2 text-[#4F3E29]"> <li><strong>Chinese:</strong> XCMG, SDLG, Lonking, LiuGong</li> <li class="text-sm italic">Up to 8 years old accepted</li> <li class="text-sm">Lower cost, readily available parts</li> </ul> </div> </div> <div class="mt-6 pt-6 border-t border-[#D4A574]"> <p class="text-[#4F3E29] text-center"> <strong>Don't see your brand?</strong> Contact us anyway. We assess each machine individually.
</p> </div> </div> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Common Questions About Financing vs Renting
</h2> <p class="text-xl text-[#4F3E29]">
Everything you need to know about owning your equipment
</p> </div> <div class="max-w-4xl mx-auto space-y-4"> ${faqs.map((faq) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer })}`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
Own Your Equipment. Build Your Equity.
</h2> <p class="text-[#4F3E29]">
Contact us today. We'll respond during business hours (Mon-Fri 9AM-5PM, Sat 9AM-1PM)
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
Ready to Own Your Wheel Loader?
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
Build equity with every payment. Control operations completely. Own productive assets. 0% deposit option available. Equipment 10+ years old accepted. Bad credit approved.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"> <a href="https://wa.me/60175700889?text=Hi!%20I%27m%20tired%20of%20renting.%20I%27d%20like%20to%20discuss%20wheel%20loader%20financing." target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
Get Free Quote via WhatsApp
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
Call: 017-570 0889
</a> </div> <div class="flex flex-wrap justify-center gap-6 text-sm"> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>0% Deposit Option</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Equipment 10+ Years Old</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>40 Years Experience</span> </div> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "wheel-loader" })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema)), unescapeHTML(encodeJSONLD(faqSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/equipment/wheel-loader.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/equipment/wheel-loader.astro";
const $$url = "/en/equipment/wheel-loader";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WheelLoader,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
