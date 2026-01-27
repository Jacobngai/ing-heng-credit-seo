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
const $$Helicopter = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const pageTitle = "Helicopter Financing Malaysia | Robinson R66 Aviation Loans";
  const pageDescription = "Specialized helicopter financing for Robinson R66, offshore operations, and corporate aviation. Confidential consultation for high-value aviation assets. Premium financing solutions.";
  const keywords = ["helicopter financing Malaysia", "Robinson R66 financing", "aviation equipment financing", "helicopter loan Malaysia", "aircraft financing Selangor", "offshore helicopter financing"];
  const breadcrumbs = [
    { label: "Home", url: "/en" },
    { label: "Equipment", url: "/en/equipment" },
    { label: "Helicopter Financing", url: "/en/equipment/helicopter" }
  ];
  const benefits = [
    { icon: "shield", title: "Specialized Aviation Expertise", description: "Expert aviation asset financing with understanding of aircraft valuation, insurance requirements, and regulatory compliance." },
    { icon: "clock", title: "Confidential Consultation", description: "Discrete, professional service for high-net-worth individuals and corporations seeking aviation financing solutions." },
    { icon: "percentage", title: "Flexible Financing Terms", description: "Structured financing for aircraft valued RM 3-5 million. Terms designed for aviation assets with longer useful life." },
    { icon: "users", title: "Premium Asset Specialists", description: "We finance unique, high-value assets including helicopters, aircraft, and specialized equipment that others cannot." },
    { icon: "document", title: "CAAM Compliance Support", description: "Understanding of Civil Aviation Authority Malaysia requirements, insurance, and registration processes." },
    { icon: "shield", title: "International Standards", description: "Aviation-grade financing standards with flexible terms for commercial operators, corporations, and private owners." }
  ];
  const steps = [
    { stepNumber: 1, icon: "contact", title: "Confidential Inquiry", description: "Contact our aviation financing specialists via secure channels. Discuss your aircraft requirements confidentially." },
    { stepNumber: 2, icon: "document", title: "Asset Evaluation", description: "Professional aircraft valuation, airworthiness assessment, and financing structure design for your aviation asset." },
    { stepNumber: 3, icon: "check", title: "Financing Approval", description: "Specialized underwriting for aviation assets. We understand the unique aspects of aircraft financing and operations." },
    { stepNumber: 4, icon: "clipboard", title: "Documentation", description: "Complete financing documentation with aviation-specific terms, insurance requirements, and regulatory compliance." },
    { stepNumber: 5, icon: "truck", title: "Aircraft Delivery", description: "Coordinate with aircraft delivery, CAAM registration, insurance activation, and commencement of operations." }
  ];
  const aircraftTypes = [
    {
      name: "Robinson R66 Turbine Marine",
      description: "Five-seat turbine helicopter designed for offshore operations. Features emergency flotation system and corrosion-resistant materials. Ideal for oil & gas crew transport.",
      applications: "Offshore crew transport, oil platform supply, emergency evacuation, marine survey operations"
    },
    {
      name: "Robinson R44 Raven",
      description: "Four-seat piston helicopter popular for training, tourism, and utility operations. Cost-effective entry into helicopter operations.",
      applications: "Flight training, aerial tours, utility transport, emergency medical services, law enforcement"
    },
    {
      name: "Airbus H125 (Eurocopter AS350)",
      description: "Single-engine utility helicopter with excellent performance in hot and high conditions. Proven reliability for commercial operations.",
      applications: "Tourism, external load operations, emergency medical services, power line inspection, forestry"
    },
    {
      name: "Bell 505 Jet Ranger X",
      description: "Modern five-seat turbine helicopter with advanced avionics. Commercial IFR capability for sophisticated operations.",
      applications: "Corporate transport, emergency medical services, law enforcement, offshore support, cargo transport"
    },
    {
      name: "Leonardo AW109",
      description: "Twin-engine executive helicopter with luxury cabin. High-speed corporate transport with all-weather capability.",
      applications: "VIP transport, corporate aviation, emergency medical services, offshore executive transport"
    },
    {
      name: "Airbus H130 (Eurocopter EC130)",
      description: "Seven-seat tourism helicopter with large windows and quiet operations. Popular for sightseeing and VIP transport.",
      applications: "Aerial tourism, VIP charter, corporate transport, emergency medical services, external load operations"
    }
  ];
  const acceptedBrands = ["Robinson Helicopter", "Airbus Helicopters", "Bell", "Leonardo", "Sikorsky", "MD Helicopters", "Schweizer", "Enstrom"];
  const industries = [
    {
      name: "Oil & Gas Offshore",
      description: "Crew transport to offshore platforms, supply runs, emergency evacuation services for Terengganu, Sabah, and Sarawak offshore operations.",
      equipment: "Robinson R66 Marine, Airbus H125, Bell 505"
    },
    {
      name: "Tourism & Hospitality",
      description: "Aerial tours, island hopping, resort transfers, scenic flights for tourism operators in Langkawi, Perhentian, Tioman, and other destinations.",
      equipment: "Airbus H130, Robinson R44, Bell 505"
    },
    {
      name: "Medical Services",
      description: "Air ambulance operations, hospital transfers, emergency medical evacuation serving private hospitals and medical centers.",
      equipment: "Leonardo AW109, Airbus H125, Bell 505"
    },
    {
      name: "Corporate Aviation",
      description: "Executive transport, multi-site business operations, time-sensitive corporate travel for business leaders and organizations.",
      equipment: "Leonardo AW109, Airbus H130, Bell 505"
    }
  ];
  const testimonials = [
    {
      name: "Corporate Aviation Executive",
      company: "Malaysian Conglomerate",
      location: "Kuala Lumpur",
      testimonial: "Ing Heng Credit understood our specialized aviation financing needs. Their expertise in high-value asset financing made the process smooth and confidential. Now operating our R66 for multi-site business operations.",
      rating: 5
    },
    {
      name: "Offshore Services Director",
      company: "Offshore Support Vessel Operator",
      location: "Terengganu",
      testimonial: "Needed helicopter financing for offshore crew transport. Banks didn't understand aviation assets. Ing Heng Credit structured the deal perfectly for our operational requirements. Helicopter has been operational for 2 years.",
      rating: 5
    }
  ];
  const faqs = [
    {
      question: "Can I finance helicopters in Malaysia?",
      answer: "Yes, we specialize in helicopter financing including Robinson R66, R44, Airbus H125, Bell 505, and other commercial aircraft. We understand aviation assets and their unique financing requirements including airworthiness, insurance, and operational considerations."
    },
    {
      question: "What helicopters can you finance?",
      answer: "We finance Robinson (R66 Turbine Marine, R44 Raven), Airbus Helicopters (H125, H130), Bell (505, 407), Leonardo (AW109), and other turbine and piston helicopters from established manufacturers. Both new and pre-owned aircraft are considered."
    },
    {
      question: "What is the typical down payment for helicopter financing?",
      answer: "Down payments typically range from 20-40% depending on aircraft type, age, condition, and buyer profile. For Robinson R66 Marine (RM 3.5-4.5M), expect RM 700k-1.8M down payment. We structure terms based on aircraft use and cash flow requirements."
    },
    {
      question: "How long are helicopter financing terms?",
      answer: "Aircraft financing terms are typically 5-12 years depending on aircraft age, type, and intended use. Newer turbine aircraft may qualify for longer terms (10-12 years) while older aircraft typically have shorter terms (5-7 years). We match terms to aircraft useful life and operational cash flow."
    },
    {
      question: "Do you finance helicopters for offshore operations?",
      answer: "Yes, we have experience financing helicopters for offshore oil & gas operations. Robinson R66 Marine is specifically designed for offshore work with emergency flotation and corrosion-resistant materials. We understand the requirements for offshore aviation operations in Malaysian waters."
    },
    {
      question: "Can corporations finance helicopters for business use?",
      answer: "Absolutely. Many corporations finance helicopters for executive transport, site access (plantations, construction, mining), emergency evacuation, and operational efficiency. We structure corporate financing to optimize tax benefits and operational cash flow for business helicopter operations."
    },
    {
      question: "What documents are required for helicopter financing?",
      answer: "Required documents include: Corporate registration (for companies), personal/corporate financial statements, aircraft purchase agreement or LOI, aircraft logbooks and maintenance records, insurance quotes, intended use documentation, and pilot qualifications. We guide you through aviation-specific requirements."
    },
    {
      question: "Do you finance used/pre-owned helicopters?",
      answer: "Yes, we finance quality pre-owned helicopters from reputable manufacturers. Aircraft must pass pre-purchase inspection and airworthiness evaluation. We work with aviation specialists to assess aircraft condition, maintenance history, and market value for financing decisions."
    },
    {
      question: "Can I finance helicopter pilot training costs?",
      answer: "While we focus on aircraft financing, training costs can sometimes be included in aircraft financing packages for owner-pilots. Commercial operators often finance aircraft and training together to ensure proper operation and insurance compliance."
    },
    {
      question: "What about helicopter insurance requirements?",
      answer: "Aviation insurance is mandatory and must be in place before aircraft delivery. This includes hull insurance (physical damage) and liability coverage. We can assist with introductions to aviation insurance brokers experienced in Malaysian helicopter operations."
    },
    {
      question: "How do you evaluate helicopter value for financing?",
      answer: "We use certified aviation appraisers familiar with the Malaysian and regional helicopter market. Evaluation considers aircraft model, age, total time, maintenance history, avionics upgrades, market demand, and operational configuration. Current market conditions and aircraft availability also factor into valuations."
    },
    {
      question: "Can foreigners finance helicopters in Malaysia?",
      answer: "Yes, foreigners with valid Malaysian business registration or long-term visas can apply for helicopter financing. Requirements include Malaysian corporate structure, local business operations, and compliance with Civil Aviation Authority Malaysia (CAAM) ownership regulations for aircraft registration."
    },
    {
      question: "What are the operating costs for financed helicopters?",
      answer: "Operating costs for Robinson R66 are approximately RM 400-700k annually (100-300 flight hours) including fuel, maintenance, insurance, hangar, and pilot costs. We factor operational costs into financing decisions to ensure sustainable operations and payment capacity."
    },
    {
      question: "How long does helicopter financing approval take?",
      answer: "Aviation financing typically takes 2-4 weeks for complete evaluation including aircraft assessment, financial review, and documentation. Complex transactions or unique aircraft may require additional time. We expedite approvals for time-sensitive aircraft purchases or operational requirements."
    },
    {
      question: "Can I finance helicopters for tourism operations?",
      answer: "Yes, we finance helicopters for tourism and charter operations including aerial tours, island transfers, and scenic flights. Popular for operators in Langkawi, Cameron Highlands, and other tourist destinations. We understand seasonal cash flow patterns in tourism helicopter operations."
    }
  ];
  const productSchema = generateProductSchema({
    name: "Helicopter Financing Malaysia",
    description: "Specialized financing for helicopters including Robinson R66, offshore operations, corporate aviation, and commercial helicopter operations in Malaysia.",
    imageUrl: `${SITE_CONFIG.url}/images/helicopter-financing-robinson-r66-malaysia.jpg`,
    category: "Aviation Equipment Financing",
    offers: {
      price: "3000000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Specialized Helicopter Financing for Malaysian Aviation", "subtitle": "Robinson R66 | Offshore Operations | Corporate Aviation | RM 3M-5M+ Financing Available", "ctaText": "Schedule Confidential Consultation", "ctaLink": "https://wa.me/60175700889?text=Hi!%20I%27d%20like%20to%20discuss%20helicopter%20financing%20options.", "ctaSecondaryText": "Call: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["30+ Years Aviation Expertise", "CAAM Compliance", "High-Value Asset Specialists", "Confidential Service"] })}  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
Aviation Asset Financing for Sophisticated Operations
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed mb-8">
When your business operations require aviation assets, banks often cannot understand the specialized nature of helicopter financing. We specialize in high-value, unique assets including turbine helicopters, offshore aircraft, and corporate aviation equipment.
</p> <div class="grid md:grid-cols-3 gap-8"> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="text-2xl font-bold text-primary mb-2">RM 3M - 5M</div> <div class="text-[#4F3E29]">Typical helicopter financing range</div> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="text-2xl font-bold text-primary mb-2">5-12 Years</div> <div class="text-[#4F3E29]">Flexible financing terms</div> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="text-2xl font-bold text-primary mb-2">Robinson R66</div> <div class="text-[#4F3E29]">Popular turbine helicopter model</div> </div> </div> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Why Choose Ing Heng Credit for Aviation Financing?
</h2> <p class="text-xl text-[#4F3E29]">
Specialized expertise in unique, high-value asset financing with confidential service for sophisticated clients
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Aircraft Types We Finance
</h2> <p class="text-xl text-[#4F3E29]">
From single-engine training aircraft to twin-engine corporate helicopters
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> ${aircraftTypes.map((aircraft) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow"> <h3 class="text-lg font-bold text-primary mb-3">${aircraft.name}</h3> <p class="text-[#4F3E29] mb-3">${aircraft.description}</p> <div class="text-sm text-[#4F3E29] space-y-1"> <p><strong>Applications:</strong> ${aircraft.applications}</p> </div> </div>`)} </div> <!-- Accepted Brands --> <div class="text-center"> <h3 class="text-2xl font-bold text-primary mb-6">Accepted Aircraft Brands</h3> <div class="flex flex-wrap justify-center gap-4"> ${acceptedBrands.map((brand) => renderTemplate`<span class="px-4 py-2 bg-white rounded-full shadow-[2px_2px_0_#2D1810] text-[#4F3E29] font-medium hover:shadow-[4px_4px_0_#2D1810] transition-shadow"> ${brand} </span>`)} </div> <p class="text-[#4F3E29] mt-4">...and other established helicopter manufacturers. Contact us to discuss specific aircraft models.</p> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Industries & Applications We Serve
</h2> <p class="text-xl text-[#4F3E29]">
Specialized understanding of helicopter operations across diverse Malaysian industries
</p> </div> <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"> ${industries.map((industry) => renderTemplate`<div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810]"> <h3 class="text-2xl font-bold text-primary mb-4">${industry.name}</h3> <p class="text-[#4F3E29] mb-4">${industry.description}</p> <div class="text-sm text-[#4F3E29]"> <strong>Popular Aircraft:</strong> ${industry.equipment} </div> </div>`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Aviation Financing Process
</h2> <p class="text-xl text-[#4F3E29]">
Specialized process designed for high-value aviation assets and sophisticated operators
</p> </div> <div class="grid md:grid-cols-5 gap-8"> ${steps.map((step) => renderTemplate`${renderComponent($$result2, "StepCard", $$StepCard, { "stepNumber": step.stepNumber, "icon": step.icon, "title": step.title, "description": step.description })}`)} </div> <!-- CTA after steps --> <div class="text-center mt-12"> <a href="https://wa.me/60175700889?text=Hi!%20I%27d%20like%20to%20discuss%20helicopter%20financing%20confidentially." target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg inline-block">
Schedule Confidential Consultation
</a> <p class="text-sm text-[#4F3E29] mt-3">Discrete service for high-value aviation assets</p> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="max-w-3xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">Aviation Financing Calculator</h2> <p class="text-[#4F3E29]">Estimate monthly payments for helicopter financing based on aircraft value and terms</p> </div> ${renderComponent($$result2, "Calculator", $$Calculator, { "lang": lang, "equipmentType": "Helicopter", "defaultPrice": 35e5 })} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Aviation Financing Requirements
</h2> <p class="text-xl text-[#4F3E29]">
Specialized documentation for aviation asset financing and CAAM compliance
</p> </div> <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"> <!-- Corporate Requirements --> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810]"> <h3 class="text-2xl font-bold text-primary mb-6">For Corporations</h3> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">Corporate Registration & Financial Statements</div> <div class="text-sm text-[#4F3E29]">Audited accounts for past 2-3 years, cash flow projections, and operational details</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">Aircraft Documentation</div> <div class="text-sm text-[#4F3E29]">Purchase agreement, specifications, maintenance records, and airworthiness certification</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">Insurance & Operational Plans</div> <div class="text-sm text-[#4F3E29]">Aviation insurance quotes, pilot qualifications, and intended use documentation</div> </div> </li> </ul> </div> <!-- Individual Requirements --> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810]"> <h3 class="text-2xl font-bold text-primary mb-6">For High-Net-Worth Individuals</h3> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">Personal Financial Profile</div> <div class="text-sm text-[#4F3E29]">Net worth statements, income verification, and asset portfolio documentation</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">Aircraft & Pilot Requirements</div> <div class="text-sm text-[#4F3E29]">Aircraft specifications, pilot certifications, and intended use (personal, business, or charter)</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">Regulatory Compliance</div> <div class="text-sm text-[#4F3E29]">CAAM registration requirements, import documentation (if applicable), and tax considerations</div> </div> </li> </ul> </div> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Client Success Stories
</h2> <p class="text-xl text-[#4F3E29]">
Confidential service for sophisticated aviation financing requirements
</p> </div> <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { "name": testimonial.name, "company": testimonial.company, "location": testimonial.location, "testimonial": testimonial.testimonial, "rating": testimonial.rating })}`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
Aviation Financing FAQ
</h2> <p class="text-xl text-[#4F3E29]">
Comprehensive answers about helicopter financing, regulations, and operations
</p> </div> <div class="max-w-4xl mx-auto space-y-4"> ${faqs.map((faq) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer })}`)} </div> </div> </section>  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
Ready to Discuss Your Aviation Financing Needs?
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
Schedule a confidential consultation with our aviation financing specialists. We provide discrete, professional service for high-value aviation assets with flexible terms designed for sophisticated operations.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"> <a href="https://wa.me/60175700889?text=Hi!%20I%27d%20like%20to%20schedule%20a%20confidential%20helicopter%20financing%20consultation." target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
Confidential WhatsApp Consultation
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
Call: 017-570 0889
</a> </div> <div class="flex flex-wrap justify-center gap-6 text-sm"> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Confidential Consultation</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Aviation Expertise</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>30+ Years Premium Asset Experience</span> </div> </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "helicopter" })}  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
Aviation Financing Inquiry Form
</h2> <p class="text-[#4F3E29]">
Submit your aviation financing requirements for confidential evaluation
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema)), unescapeHTML(encodeJSONLD(faqSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/equipment/helicopter.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/equipment/helicopter.astro";
const $$url = "/en/equipment/helicopter";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Helicopter,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
