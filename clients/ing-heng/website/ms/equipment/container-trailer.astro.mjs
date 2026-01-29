/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$ContactForm } from '../../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$RelatedEquipment } from '../../../chunks/RelatedEquipment_ZkPtOS9o.mjs';
import { $ as $$CTAButton } from '../../../chunks/CTAButton_D2NuWLbx.mjs';
import { C as COMPANY_INFO } from '../../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../../renderers.mjs';

const $$ContainerTrailer = createComponent(($$result, $$props, $$slots) => {
  const lang = "ms";
  const pageTitle = "Pembiayaan Container Trailer Malaysia - Deposit 0% | 20ft, 40ft";
  const pageDescription = "Pembiayaan container trailer dengan deposit 0%. Trailer 20ft, 40ft, skeletal trailer, flatbed trailer. Kelulusan pantas untuk syarikat logistik.";
  const keywords = ["pembiayaan container trailer", "skeletal trailer Malaysia", "flatbed trailer loan", "20ft container trailer", "40ft trailer pembiayaan"];
  const breadcrumbs = [
    { label: "Laman Utama", url: "/ms" },
    { label: "Peralatan", url: "/ms/equipment" },
    { label: "Pembiayaan Container Trailer", url: "/ms/equipment/container-trailer" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Pembiayaan Container Trailer - Deposit 0%", "subtitle": "Skeletal trailer, flatbed trailer dengan pembiayaan 100%", "backgroundImage": "/images/hero/container-trailer.jpg", "lang": lang })}  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs })}  ${maybeRenderHead()}<section class="section py-16 bg-white"> <div class="container-custom"> <div class="max-w-4xl mx-auto"> <h2 class="text-4xl font-black mb-8 text-[#2D1810] text-center">
Container Trailer Untuk Logistik Port
</h2> <div class="prose prose-lg max-w-none text-gray-700 space-y-6"> <p> <strong>Perlukan trailer untuk angkut container dari port?</strong> Kami menawarkan pembiayaan container trailer dengan <strong>deposit 0% dan pembiayaan sehingga 100%</strong> nilai peralatan.
</p> <p>
Skeletal trailer, flatbed trailer untuk 20ft dan 40ft container. Ideal untuk syarikat logistik yang beroperasi di Port Klang, Johor Port dan Penang Port.
</p> <div class="bg-[#F5F1EB] p-8 rounded-lg border-3 border-[#2D1810] shadow-brutal my-8"> <h3 class="text-2xl font-bold mb-4 text-[#8B6F47]">Jenis Container Trailer</h3> <ul class="space-y-3"> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Skeletal Trailer</strong> - Untuk container 20ft dan 40ft standard</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Flatbed Trailer</strong> - Platform rata untuk pelbagai muatan</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Extendable Trailer</strong> - Boleh extend untuk 40ft container</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Multi-Axle Trailer</strong> - Untuk muatan berat industrial</span> </li> </ul> </div> </div> </div> </div> </section>  <section class="section py-16 bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-4xl font-black mb-4">Miliki Container Trailer Sendiri</h2> <p class="text-xl mb-8 opacity-90">Tingkatkan perniagaan logistik anda</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": COMPANY_INFO.whatsapp.link, "text": "WhatsApp Kami", "variant": "whatsapp", "lang": lang })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": `/${lang}/contact`, "text": "Mohon Sekarang", "variant": "secondary", "lang": lang })} </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "container-trailer" })}  ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment/container-trailer.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment/container-trailer.astro";
const $$url = "/ms/equipment/container-trailer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContainerTrailer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
