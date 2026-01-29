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

const $$JawCrusher = createComponent(($$result, $$props, $$slots) => {
  const lang = "ms";
  const pageTitle = "Pembiayaan Jaw Crusher Malaysia - Deposit 0% | Quarry Equipment";
  const pageDescription = "Pembiayaan jaw crusher dan crushing plant dengan deposit 0%. Mobile crusher, stationary crusher, cone crusher. Kelulusan untuk quarry operators.";
  const keywords = ["pembiayaan jaw crusher", "mobile crusher Malaysia", "quarry equipment loan", "crushing plant financing", "cone crusher"];
  const breadcrumbs = [
    { label: "Laman Utama", url: "/ms" },
    { label: "Peralatan", url: "/ms/equipment" },
    { label: "Pembiayaan Jaw Crusher", url: "/ms/equipment/jaw-crusher" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Pembiayaan Jaw Crusher - Deposit 0%", "subtitle": "Mobile crusher, crushing plant dengan pembiayaan 100%", "backgroundImage": "/images/hero/jaw-crusher.jpg", "lang": lang })}  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs })}  ${maybeRenderHead()}<section class="section py-16 bg-white"> <div class="container-custom"> <div class="max-w-4xl mx-auto"> <h2 class="text-4xl font-black mb-8 text-[#2D1810] text-center">
Jaw Crusher Untuk Quarry & Agregat
</h2> <div class="prose prose-lg max-w-none text-gray-700 space-y-6"> <p> <strong>Perlukan jaw crusher untuk operasi kuari atau pengeluaran agregat?</strong> Kami menawarkan pembiayaan jaw crusher dengan <strong>deposit 0% dan pembiayaan sehingga 100%</strong> nilai peralatan.
</p> <p>
Mobile crusher untuk kerja on-site, stationary crusher untuk quarry tetap, cone crusher untuk secondary crushing. Tingkatkan produktiviti quarry anda.
</p> <div class="bg-[#F5F1EB] p-8 rounded-lg border-3 border-[#2D1810] shadow-brutal my-8"> <h3 class="text-2xl font-bold mb-4 text-[#8B6F47]">Jenis Crushing Equipment</h3> <ul class="space-y-3"> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Jaw Crusher</strong> - Primary crusher untuk batu besar</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Cone Crusher</strong> - Secondary crusher untuk agregat halus</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Mobile Crushing Plant</strong> - Track mounted untuk mobiliti</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Stationary Plant</strong> - Fixed installation untuk quarry</span> </li> </ul> </div> </div> </div> </div> </section>  <section class="section py-16 bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-4xl font-black mb-4">Tingkatkan Produktiviti Quarry</h2> <p class="text-xl mb-8 opacity-90">Crushing equipment untuk aggregate production</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": COMPANY_INFO.whatsapp.link, "text": "WhatsApp Kami", "variant": "whatsapp", "lang": lang })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": `/${lang}/contact`, "text": "Mohon Sekarang", "variant": "secondary", "lang": lang })} </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "jaw-crusher" })}  ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment/jaw-crusher.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment/jaw-crusher.astro";
const $$url = "/ms/equipment/jaw-crusher";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$JawCrusher,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
