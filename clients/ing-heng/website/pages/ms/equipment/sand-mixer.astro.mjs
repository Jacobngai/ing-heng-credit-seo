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

const $$SandMixer = createComponent(($$result, $$props, $$slots) => {
  const lang = "ms";
  const pageTitle = "Pembiayaan Sand Mixer Malaysia - Deposit 0% | Concrete Mixer, Ready Mix";
  const pageDescription = "Pembiayaan sand mixer dan concrete mixing equipment dengan deposit 0%. Pan mixer, twin shaft mixer, ready mix plant. Kelulusan untuk concrete contractors.";
  const keywords = ["pembiayaan sand mixer", "concrete mixer Malaysia", "ready mix plant loan", "pan mixer financing", "twin shaft mixer"];
  const breadcrumbs = [
    { label: "Laman Utama", url: "/ms" },
    { label: "Peralatan", url: "/ms/equipment" },
    { label: "Pembiayaan Sand Mixer", url: "/ms/equipment/sand-mixer" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Pembiayaan Sand Mixer - Deposit 0%", "subtitle": "Concrete mixer, ready mix plant dengan pembiayaan 100%", "backgroundImage": "/images/hero/sand-mixer.jpg", "lang": lang })}  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs })}  ${maybeRenderHead()}<section class="section py-16 bg-white"> <div class="container-custom"> <div class="max-w-4xl mx-auto"> <h2 class="text-4xl font-black mb-8 text-[#2D1810] text-center">
Sand Mixer Untuk Concrete Production
</h2> <div class="prose prose-lg max-w-none text-gray-700 space-y-6"> <p> <strong>Perlukan sand mixer untuk pengeluaran concrete atau ready mix?</strong> Kami menawarkan pembiayaan sand mixer dengan <strong>deposit 0% dan pembiayaan sehingga 100%</strong> nilai peralatan.
</p> <p>
Pan mixer, twin shaft mixer, planetary mixer untuk pelbagai keperluan concrete production. Dari portable mixer hingga ready mix plant lengkap.
</p> <div class="bg-[#F5F1EB] p-8 rounded-lg border-3 border-[#2D1810] shadow-brutal my-8"> <h3 class="text-2xl font-bold mb-4 text-[#8B6F47]">Jenis Sand & Concrete Mixer</h3> <ul class="space-y-3"> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Pan Mixer</strong> - Intensive mixing untuk high quality concrete</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Twin Shaft Mixer</strong> - High capacity untuk ready mix plant</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Portable Mixer</strong> - Mobile unit untuk site mixing</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Planetary Mixer</strong> - Untuk precast dan specialty concrete</span> </li> </ul> </div> </div> </div> </div> </section>  <section class="section py-16 bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-4xl font-black mb-4">Tingkatkan Concrete Production</h2> <p class="text-xl mb-8 opacity-90">Mixing equipment untuk kontraktor concrete</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": COMPANY_INFO.whatsapp.link, "text": "WhatsApp Kami", "variant": "whatsapp", "lang": lang })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": `/${lang}/contact`, "text": "Mohon Sekarang", "variant": "secondary", "lang": lang })} </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "sand-mixer" })}  ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment/sand-mixer.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment/sand-mixer.astro";
const $$url = "/ms/equipment/sand-mixer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SandMixer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
