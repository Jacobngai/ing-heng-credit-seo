/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$CTAButton } from '../../chunks/CTAButton_D2NuWLbx.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_BUPsgIWX.mjs';
import { C as COMPANY_INFO } from '../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const pageTitle = "About Us - 40+ Years Equipment Financing Experience | Ing Heng Credit";
  const pageDescription = "Leading equipment financing company in Malaysia since 1985. 0% deposit, 100% financing for construction, logistics and industrial equipment.";
  const keywords = ["equipment financing Malaysia", "Ing Heng Credit history", "construction equipment loans", "about Ing Heng", "equipment leasing company"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "40+ Years of Equipment Financing Excellence", "subtitle": "Since 1985, empowering Malaysian businesses with smart equipment financing solutions", "backgroundImage": "/images/hero/about.jpg", "lang": lang })}  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", href: `/${lang}/` },
    { label: "About Us", href: `/${lang}/about` }
  ] })}  ${maybeRenderHead()}<section class="section py-16 bg-white"> <div class="container-custom"> <div class="max-w-4xl mx-auto"> <h2 class="text-4xl font-black mb-8 text-[#2D1810] text-center">Our Story</h2> <div class="prose prose-lg max-w-none text-gray-700 space-y-6"> <p> <strong>Ing Heng Credit & Leasing Sdn Bhd</strong> has been the trusted name in equipment financing since 1985. For over four decades, we've helped thousands of Malaysian contractors, logistics companies, and manufacturers acquire the equipment they need to grow their businesses.
</p> <p>
Founded on the principle that <strong>every business deserves access to quality equipment financing</strong>, we've revolutionized how Malaysian SMEs acquire construction machinery, commercial vehicles, and industrial equipment.
</p> <div class="bg-[#F5F1EB] p-8 rounded-lg border-3 border-[#2D1810] shadow-brutal my-8"> <h3 class="text-2xl font-bold mb-4 text-[#8B6F47]">Our Competitive Edge</h3> <ul class="space-y-3"> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>0% Deposit Available</strong> - Finance up to 100% of equipment value</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>10+ Year Old Equipment Accepted</strong> - We assess condition, not just age</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Fast Approval</strong> - Much quicker than traditional banks</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Flexible Terms</strong> - Customized payment plans to suit your cash flow</span> </li> </ul> </div> <p>
Unlike banks that focus on perfect credit scores and new equipment only, we understand the realities of Malaysian business. We know that a well-maintained 10-year-old excavator can be just as productive as a new one. We understand that preserving working capital is crucial for business growth.
</p> </div> </div> </div> </section>  <section class="section py-16 bg-[#F5F1EB]"> <div class="container-custom"> <div class="grid md:grid-cols-2 gap-8"> <!-- Mission --> <div class="bg-white p-8 rounded-lg border-3 border-[#2D1810] shadow-brutal"> <h3 class="text-2xl font-black mb-4 text-[#8B6F47]">Our Mission</h3> <p class="text-gray-700 leading-relaxed">
To empower Malaysian SMEs with accessible, flexible equipment financing solutions that enable business growth without compromising cash flow. We believe every qualified business deserves the equipment they need to succeed.
</p> </div> <!-- Vision --> <div class="bg-white p-8 rounded-lg border-3 border-[#2D1810] shadow-brutal"> <h3 class="text-2xl font-black mb-4 text-[#8B6F47]">Our Vision</h3> <p class="text-gray-700 leading-relaxed">
To be Malaysia's most trusted equipment financing partner, known for understanding real business needs, approving equipment others reject, and supporting entrepreneurs in building successful enterprises.
</p> </div> </div> </div> </section>  <section class="section py-16 bg-white"> <div class="container-custom"> <h2 class="text-4xl font-black mb-12 text-[#2D1810] text-center">Why Malaysian Businesses Choose Us</h2> <div class="grid md:grid-cols-3 gap-8"> <!-- Experience --> <div class="text-center"> <div class="text-5xl font-black text-[#8B6F47] mb-4">40+</div> <h3 class="text-xl font-bold mb-2 text-[#2D1810]">Years of Experience</h3> <p class="text-gray-700">Financing equipment since 1985, we understand every industry's unique needs</p> </div> <!-- Businesses Helped --> <div class="text-center"> <div class="text-5xl font-black text-[#8B6F47] mb-4">4000+</div> <h3 class="text-xl font-bold mb-2 text-[#2D1810]">Businesses Financed</h3> <p class="text-gray-700">From single excavators to entire fleets, we've helped businesses of all sizes</p> </div> <!-- Equipment Value --> <div class="text-center"> <div class="text-5xl font-black text-[#8B6F47] mb-4">RM500M+</div> <h3 class="text-xl font-bold mb-2 text-[#2D1810]">Equipment Financed</h3> <p class="text-gray-700">Half a billion ringgit in equipment helping Malaysian businesses grow</p> </div> </div> </div> </section>  <section class="section py-16 bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-4xl font-black mb-4">Ready to Finance Your Equipment?</h2> <p class="text-xl mb-8 opacity-90">Join thousands of Malaysian businesses who trust Ing Heng Credit</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": COMPANY_INFO.whatsapp.link, "text": "WhatsApp Us Now", "variant": "whatsapp", "lang": lang })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": `/${lang}/contact`, "text": "Contact Us", "variant": "secondary", "lang": lang })} </div> </div> </section>  ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/about.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/en/about.astro";
const $$url = "/en/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
