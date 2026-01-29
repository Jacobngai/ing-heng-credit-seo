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

const $$Grab = createComponent(($$result, $$props, $$slots) => {
  const lang = "ms";
  const pageTitle = "Pembiayaan Grab Equipment Malaysia - Deposit 0% | Demolition Grab, Scrap Handler";
  const pageDescription = "Pembiayaan grab equipment dengan deposit 0%. Demolition grab, scrap handling grab, orange peel grab, magnet grab. Kelulusan pantas untuk kontraktor.";
  const keywords = ["pembiayaan grab equipment", "demolition grab Malaysia", "scrap handler financing", "orange peel grab", "magnet grab loan"];
  const breadcrumbs = [
    { label: "Laman Utama", url: "/ms" },
    { label: "Peralatan", url: "/ms/equipment" },
    { label: "Pembiayaan Grab Equipment", url: "/ms/equipment/grab" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Pembiayaan Grab Equipment - Deposit 0%", "subtitle": "Demolition grab, scrap handler dengan pembiayaan 100%", "backgroundImage": "/images/hero/grab.jpg", "lang": lang })}  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs })}  ${maybeRenderHead()}<section class="section py-16 bg-white"> <div class="container-custom"> <div class="max-w-4xl mx-auto"> <h2 class="text-4xl font-black mb-8 text-[#2D1810] text-center">
Grab Equipment Untuk Demolition & Scrap
</h2> <div class="prose prose-lg max-w-none text-gray-700 space-y-6"> <p> <strong>Perlukan grab equipment untuk kerja demolition atau scrap handling?</strong> Kami menawarkan pembiayaan grab equipment dengan <strong>deposit 0% dan pembiayaan sehingga 100%</strong> nilai peralatan.
</p> <p>
Demolition grab, orange peel grab, magnet grab untuk scrap metal handling. Attachment yang boleh dipasang pada excavator sedia ada.
</p> <div class="bg-[#F5F1EB] p-8 rounded-lg border-3 border-[#2D1810] shadow-brutal my-8"> <h3 class="text-2xl font-bold mb-4 text-[#8B6F47]">Jenis Grab Equipment</h3> <ul class="space-y-3"> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Demolition Grab</strong> - Untuk kerja bongkaran bangunan</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Orange Peel Grab</strong> - Multi-tine grab untuk scrap metal</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Magnet Grab</strong> - Electromagnet untuk besi dan keluli</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Clamshell Grab</strong> - Untuk material loose seperti pasir</span> </li> </ul> </div> </div> </div> </div> </section>  <section class="section py-16 bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-4xl font-black mb-4">Tingkatkan Produktiviti Excavator</h2> <p class="text-xl mb-8 opacity-90">Grab attachment untuk kerja khusus</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": COMPANY_INFO.whatsapp.link, "text": "WhatsApp Kami", "variant": "whatsapp", "lang": lang })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": `/${lang}/contact`, "text": "Mohon Sekarang", "variant": "secondary", "lang": lang })} </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "grab" })}  ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment/grab.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment/grab.astro";
const $$url = "/ms/equipment/grab";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Grab,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
