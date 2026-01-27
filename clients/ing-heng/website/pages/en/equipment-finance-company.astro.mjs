/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { a as generateFAQSchema, $ as $$BaseLayout, b as generateOrganizationSchema } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$BenefitCard } from '../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$CTAButton } from '../../chunks/CTAButton_D2NuWLbx.mjs';
import { $ as $$StructuredData } from '../../chunks/StructuredData_BEy59xv7.mjs';
import { C as COMPANY_INFO } from '../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../renderers.mjs';

const $$EquipmentFinanceCompany = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const pageTitle = "Malaysia's Most Trusted Equipment Finance Company Since 1985 | Ing Heng Credit";
  const pageDescription = "Leading equipment finance company in Malaysia. KPKT licensed since 1985, serving 4,000+ companies. 0% deposit available, fast approval, finance equipment 10+ years old.";
  const keywords = [
    "equipment finance company",
    "equipment finance company Malaysia",
    "Malaysia equipment financing company",
    "licensed equipment financier Malaysia",
    "equipment finance company KPKT licensed",
    "construction equipment finance company",
    "equipment leasing company Malaysia",
    "industrial equipment finance company",
    "equipment hire purchase company",
    "machinery finance company Malaysia"
  ];
  const companyStats = [
    { number: "40+", label: "Years Experience", sublabel: "Since 1985" },
    { number: "4,000+", label: "Companies Financed", sublabel: "Across Malaysia" },
    { number: "0%", label: "Minimum Deposit", sublabel: "100% financing available" },
    { number: "10+", label: "Years Equipment Age", sublabel: "When banks say no" }
  ];
  const bankComparisons = [
    {
      title: "Equipment Age Acceptance",
      bank: "Banks reject equipment 3-5 years old",
      us: "We finance equipment 10+ years old",
      icon: "calendar"
    },
    {
      title: "Deposit Requirements",
      bank: "Banks require 20-30% deposit",
      us: "0% deposit available - 100% financing",
      icon: "cash"
    },
    {
      title: "Approval Time",
      bank: "Banks take 2-4 weeks for approval",
      us: "Fast approval for urgent cases",
      icon: "clock"
    },
    {
      title: "Credit Requirements",
      bank: "Banks have strict credit criteria",
      us: "Flexible evaluation - we approve what banks reject",
      icon: "check-badge"
    }
  ];
  const coverageAreas = [
    "Klang Valley (HQ)",
    "Kuala Lumpur & Selangor",
    "Johor Bahru & Southern Region",
    "Penang & Northern Region",
    "Kuantan & East Coast",
    "Sabah & Sarawak",
    "All Malaysian States",
    "Remote Applications via WhatsApp"
  ];
  const specializations = [
    {
      title: "Construction Equipment",
      description: "Excavators, bulldozers, wheel loaders, cranes, road rollers, compactors",
      icon: "cog"
    },
    {
      title: "Logistics Equipment",
      description: "Prime movers, container trailers, tipper trucks, delivery lorries",
      icon: "truck"
    },
    {
      title: "Industrial Equipment",
      description: "Forklifts, generators, air compressors, CNC machines, production lines",
      icon: "wrench-screwdriver"
    },
    {
      title: "Specialized Vehicles",
      description: "Refrigerated trucks, food trucks, mobile cranes, backhoes",
      icon: "wrench"
    }
  ];
  const credentials = [
    {
      title: "KPKT Licensed Since 1985",
      description: "Fully licensed by Malaysian Ministry of Housing and Local Government",
      icon: "shield"
    },
    {
      title: "Regulatory Compliance",
      description: "Regular government audits and full regulatory compliance",
      icon: "check-badge"
    },
    {
      title: "Industry Association Member",
      description: "Member of Malaysian Financial Services Association",
      icon: "users"
    },
    {
      title: "Malaysia-Wide Coverage",
      description: "Licensed to operate in all Malaysian states and territories",
      icon: "location"
    }
  ];
  const faqs = [
    {
      question: "What makes Ing Heng an equipment finance company different from banks?",
      answer: "As a specialized equipment finance company, we focus exclusively on equipment financing. Unlike banks, we approve equipment up to 10+ years old, offer 0% deposit options, and have faster approval processes. We understand equipment values and business operations better than general banks."
    },
    {
      question: "Is your equipment finance company licensed in Malaysia?",
      answer: "Yes, Ing Heng Credit & Leasing is a fully licensed equipment finance company under KPKT (Ministry of Housing and Local Government) since 1985. We are regulated and compliant with all Malaysian financial services requirements."
    },
    {
      question: "What types of equipment does your finance company cover?",
      answer: "Our equipment finance company specializes in construction equipment (excavators, bulldozers, cranes), logistics equipment (prime movers, trucks, trailers), and industrial equipment (forklifts, generators, CNC machines). We finance both new and used equipment."
    },
    {
      question: "How long has your equipment finance company been operating?",
      answer: "Ing Heng has been operating as an equipment finance company since 1985, giving us over 40 years of experience in Malaysian equipment financing. We have successfully financed over 4,000 companies across Malaysia."
    }
  ];
  const organizationSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": organizationSchema })} ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema })}  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Malaysia's Most Trusted Equipment Finance Company Since 1985", "subtitle": "When banks reject your equipment financing application because the machinery is 8 years old, do you feel that frustration knowing the equipment runs perfectly but age limits their lending? As Malaysia's leading equipment finance company, we approve what banks reject.", "ctaText": "Get Equipment Financing Quote", "ctaLink": "/en/contact", "ctaSecondaryText": "WhatsApp Us", "ctaSecondaryLink": COMPANY_INFO.whatsapp.link, "lang": lang, "trustSignals": ["KPKT Licensed Since 1985", "40+ Years Experience", "Fast Approval", "4,000+ Companies Financed"] })}  ${maybeRenderHead()}<section class="section bg-[#F5F1EC]"> <div class="container-custom"> <div class="max-w-5xl mx-auto"> <!-- Pain Points --> <div class="grid lg:grid-cols-2 gap-8 mb-12"> <div class="bg-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <h2 class="text-2xl font-black uppercase text-[#8B6F47] mb-6 border-b-2 border-[#D4A574] pb-2">When Banks Say No...</h2> <ul class="space-y-4 text-[#4F3E29]"> <li class="flex items-start space-x-3"> <div class="w-2 h-2 bg-[#8B6F47] rounded-full mt-2 flex-shrink-0"></div> <span class="font-medium">When traditional lenders take 2-4 weeks for approval while your project deadline is next month, does that time pressure keep you awake at night?</span> </li> <li class="flex items-start space-x-3"> <div class="w-2 h-2 bg-[#8B6F47] rounded-full mt-2 flex-shrink-0"></div> <span class="font-medium">When you find the perfect 8-year-old excavator but banks reject it purely based on age, do you feel that frustration knowing it's in excellent condition?</span> </li> <li class="flex items-start space-x-3"> <div class="w-2 h-2 bg-[#8B6F47] rounded-full mt-2 flex-shrink-0"></div> <span class="font-medium">When banks demand 30% deposit upfront and you need that cash for operations, does your chest tighten thinking about cash flow constraints?</span> </li> </ul> </div> <div class="bg-gradient-to-r from-[#8B6F47] to-[#6B5437] text-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <h2 class="text-2xl font-black uppercase mb-6 text-[#F5F5DC] border-b-2 border-[#D4A574] pb-2">We Say YES!</h2> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" stroke="white" stroke-width="1"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">Fast approval process - when you need equipment urgently, we respond quickly</span> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" stroke="white" stroke-width="1"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">Equipment age doesn't limit us - we finance machines 10+ years old based on working condition</span> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" stroke="white" stroke-width="1"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">0% deposit available - finance up to 100% of equipment value to preserve your working capital</span> </li> </ul> </div> </div> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
Malaysia's Leading Equipment Finance Company
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
Four decades of experience financing equipment across construction, logistics, and industrial sectors
</p> </div> <!-- Authority Stats --> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"> ${companyStats.map((stat) => renderTemplate`<div class="text-center bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <div class="text-4xl md:text-5xl font-black text-[#8B6F47] mb-2">${stat.number}</div> <div class="text-[#4F3E29] font-bold uppercase text-sm tracking-tight">${stat.label}</div> <div class="text-[#4F3E29] text-xs mt-1">${stat.sublabel}</div> </div>`)} </div> <!-- Company Description --> <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-black uppercase text-[#8B6F47] mb-6 text-center">About Ing Heng Credit & Leasing</h3> <p class="text-[#4F3E29] leading-relaxed font-medium mb-6 text-lg">
Established in <strong class="font-black text-[#8B6F47]">1985</strong>, Ing Heng Credit & Leasing Sdn Bhd has grown to become Malaysia's most trusted equipment finance company. As a <strong class="font-black text-[#8B6F47]">KPKT-licensed financial services provider</strong>, we specialize exclusively in equipment financing for construction, logistics, and industrial businesses.
</p> <p class="text-[#4F3E29] leading-relaxed font-medium text-lg">
Unlike banks that treat equipment financing as a side business, we are a dedicated equipment finance company that understands machinery values, business cycles, and the unique challenges faced by equipment-dependent businesses across Malaysia.
</p> </div> </div> </section>  <section class="section bg-[#F5F1EC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
Equipment Finance Company vs Traditional Banks
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
Why choose a specialized equipment finance company over general banking services?
</p> </div> <div class="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"> ${bankComparisons.map((comparison) => renderTemplate`<div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <div class="flex items-center space-x-3 mb-4"> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": comparison.icon, "title": comparison.title, "description": "" })} </div> <!-- Bank Approach --> <div class="mb-4 p-4 bg-red-50 border-l-4 border-red-400 rounded"> <h4 class="font-black text-red-700 text-sm uppercase tracking-tight mb-2">🏦 Traditional Banks:</h4> <p class="text-red-600 font-medium text-sm">${comparison.bank}</p> </div> <!-- Our Approach --> <div class="p-4 bg-green-50 border-l-4 border-[#8B6F47] rounded"> <h4 class="font-black text-[#8B6F47] text-sm uppercase tracking-tight mb-2">✅ Ing Heng Equipment Finance:</h4> <p class="text-[#4F3E29] font-medium text-sm">${comparison.us}</p> </div> </div>`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
Equipment Finance Company Specializations
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
Deep expertise across multiple equipment categories
</p> </div> <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"> ${specializations.map((spec) => renderTemplate`<div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] border-l-[6px] border-l-[#8B6F47] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <div class="flex items-start space-x-4"> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": spec.icon, "title": "", "description": "" })} <div> <h3 class="text-xl font-black uppercase text-[#8B6F47] mb-3">${spec.title}</h3> <p class="text-[#4F3E29] leading-relaxed font-medium">${spec.description}</p> </div> </div> </div>`)} </div> <!-- Equipment Categories --> <div class="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-[#8B6F47] to-[#6B5437] text-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[8px_8px_0_#2D1810]"> <h3 class="text-2xl font-black uppercase mb-6 text-center text-[#F5F5DC]">Equipment We Finance</h3> <div class="grid md:grid-cols-3 gap-6 text-sm"> <div> <h4 class="font-black text-[#D4A574] mb-3 uppercase">Construction</h4> <ul class="space-y-2"> <li>• Excavators (All sizes)</li> <li>• Bulldozers</li> <li>• Wheel Loaders</li> <li>• Mobile Cranes</li> <li>• Road Rollers</li> <li>• Compactors</li> </ul> </div> <div> <h4 class="font-black text-[#D4A574] mb-3 uppercase">Logistics</h4> <ul class="space-y-2"> <li>• Prime Movers</li> <li>• Container Trailers</li> <li>• Tipper Trucks</li> <li>• Delivery Lorries</li> <li>• Refrigerated Trucks</li> <li>• Specialized Trailers</li> </ul> </div> <div> <h4 class="font-black text-[#D4A574] mb-3 uppercase">Industrial</h4> <ul class="space-y-2"> <li>• Forklifts</li> <li>• Generators</li> <li>• Air Compressors</li> <li>• CNC Machines</li> <li>• Production Lines</li> <li>• Factory Equipment</li> </ul> </div> </div> </div> </div> </section>  <section class="section bg-[#F5F1EC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
Licensed & Regulated Equipment Finance Company
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
Full regulatory compliance for your peace of mind
</p> </div> <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"> ${credentials.map((credential) => renderTemplate`<div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <div class="flex items-start space-x-4"> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": credential.icon, "title": "", "description": "" })} <div> <h3 class="text-lg font-black uppercase text-[#8B6F47] mb-3">${credential.title}</h3> <p class="text-[#4F3E29] leading-relaxed font-medium">${credential.description}</p> </div> </div> </div>`)} </div> <!-- KPKT License Details --> <div class="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[8px_8px_0_#2D1810]"> <h3 class="text-2xl font-black uppercase text-[#8B6F47] mb-6 text-center border-b-2 border-[#D4A574] pb-4">KPKT Licensing Details</h3> <div class="grid md:grid-cols-2 gap-8"> <div> <h4 class="font-black text-[#8B6F47] mb-3 uppercase text-lg">Licensed Since 1985</h4> <p class="text-[#4F3E29] mb-4 font-medium">
Ing Heng Credit & Leasing Sdn Bhd has been operating under full KPKT (Ministry of Housing and Local Government) license since our establishment in 1985, making us one of Malaysia's longest-serving equipment finance companies.
</p> <ul class="space-y-2 text-[#4F3E29]"> <li class="flex items-center space-x-2"> <svg class="w-5 h-5 text-[#8B6F47]" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">Continuous licensing for 40+ years</span> </li> <li class="flex items-center space-x-2"> <svg class="w-5 h-5 text-[#8B6F47]" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">Zero regulatory violations</span> </li> <li class="flex items-center space-x-2"> <svg class="w-5 h-5 text-[#8B6F47]" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">Regular compliance audits</span> </li> </ul> </div> <div> <h4 class="font-black text-[#8B6F47] mb-3 uppercase text-lg">Service Authorization</h4> <p class="text-[#4F3E29] mb-4 font-medium">
Our equipment finance company is authorized to provide financial services across all Malaysian states and territories, with full legal authority to structure equipment financing agreements.
</p> <ul class="space-y-2 text-[#4F3E29]"> <li class="flex items-center space-x-2"> <svg class="w-5 h-5 text-[#8B6F47]" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">All 13 Malaysian states</span> </li> <li class="flex items-center space-x-2"> <svg class="w-5 h-5 text-[#8B6F47]" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">Sabah & Sarawak included</span> </li> <li class="flex items-center space-x-2"> <svg class="w-5 h-5 text-[#8B6F47]" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">Federal Territory coverage</span> </li> </ul> </div> </div> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
Malaysia-Wide Equipment Finance Company
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
Serving businesses across all Malaysian states from our Klang headquarters
</p> </div> <div class="max-w-4xl mx-auto"> <!-- Coverage Map --> <div class="grid md:grid-cols-2 gap-4 mb-8"> ${coverageAreas.map((area) => renderTemplate`<div class="flex items-center space-x-3 bg-white p-4 rounded-lg border-2 border-[#2D1810] shadow-[2px_2px_0_#2D1810] hover:shadow-[4px_4px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <svg class="w-6 h-6 text-[#8B6F47] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path> </svg> <span class="text-[#4F3E29] font-bold">${area}</span> </div>`)} </div> <!-- Headquarters --> <div class="bg-gradient-to-r from-[#8B6F47] to-[#6B5437] text-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[8px_8px_0_#2D1810]"> <h3 class="text-2xl font-black uppercase mb-6 text-center text-[#F5F5DC]">Equipment Finance Company Headquarters</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="font-black text-[#D4A574] mb-3 uppercase">Our Klang Office</h4> <p class="mb-3"> <strong>Address:</strong> ${COMPANY_INFO.address.full} </p> <p class="mb-3"> <strong>Phone:</strong> <a${addAttribute(`tel:${COMPANY_INFO.phone.international}`, "href")} class="underline hover:text-[#D4A574] font-bold">${COMPANY_INFO.phone.display}</a> </p> <p class="mb-3"> <strong>WhatsApp:</strong> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="underline hover:text-[#D4A574] font-bold">${COMPANY_INFO.phone.display}</a> </p> <p> <strong>Email:</strong> <a${addAttribute(`mailto:${COMPANY_INFO.email}`, "href")} class="underline hover:text-[#D4A574] font-bold">${COMPANY_INFO.email}</a> </p> </div> <div> <h4 class="font-black text-[#D4A574] mb-3 uppercase">Operating Hours</h4> <ul class="space-y-2 text-sm"> <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li> <li><strong>Saturday:</strong> 9:00 AM - 1:00 PM</li> <li><strong>Sunday:</strong> WhatsApp Support Available</li> <li><strong>Public Holidays:</strong> Emergency WhatsApp</li> </ul> <div class="mt-4"> <a${addAttribute(COMPANY_INFO.address.googleMapsUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white text-[#8B6F47] px-4 py-2 rounded-lg font-bold uppercase text-sm border-2 border-white hover:bg-[#D4A574] hover:text-white transition-all"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path> </svg>
Get Directions
</a> </div> </div> </div> </div> </div> </div> </section>  <section class="section bg-[#F5F1EC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
Equipment Finance Company FAQs
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
Common questions about our equipment finance company services
</p> </div> <div class="max-w-4xl mx-auto space-y-6"> ${faqs.map((faq, index) => renderTemplate`<div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <h3 class="text-lg font-black uppercase text-[#8B6F47] mb-3">${faq.question}</h3> <p class="text-[#4F3E29] leading-relaxed font-medium">${faq.answer}</p> </div>`)} </div> </div> </section>  <section class="section bg-gradient-to-r from-[#8B6F47] to-[#6B5437] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 text-[#F5F5DC]">
Choose Malaysia's Most Trusted Equipment Finance Company
</h2> <p class="text-xl mb-8 max-w-3xl mx-auto font-bold">
40+ years experience, 4,000+ companies financed, KPKT licensed since 1985. When banks say no, we say yes. Get your equipment financing approved today.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Get Equipment Finance Quote", "link": COMPANY_INFO.whatsapp.link, "variant": "accent", "size": "large", "icon": "whatsapp" })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Call Our Equipment Finance Team", "link": `tel:${COMPANY_INFO.phone.international}`, "variant": "outline-white", "size": "large", "icon": "phone" })} </div> <div class="mt-8 text-sm"> <p class="font-bold">Specialized Equipment Finance Company | Licensed & Regulated | Fast Approval Available</p> </div> </div> </section> ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/equipment-finance-company.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/equipment-finance-company.astro";
const $$url = "/en/equipment-finance-company";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EquipmentFinanceCompany,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
