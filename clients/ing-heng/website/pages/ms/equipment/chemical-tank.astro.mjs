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

const $$ChemicalTank = createComponent(($$result, $$props, $$slots) => {
  const lang = "ms";
  const pageTitle = "Pembiayaan Tangki Kimia Malaysia - Deposit 0% | ISO Tank";
  const pageDescription = "Pembiayaan tangki kimia dan ISO tank dengan deposit 0%. Tangki keluli tahan karat, tangki berjaket, tangki bertekanan. Pembiayaan 100% tersedia.";
  const keywords = ["pembiayaan tangki kimia", "ISO tank Malaysia", "tangki keluli pembiayaan", "chemical tank loan", "tangki bertekanan"];
  const breadcrumbs = [
    { label: "Laman Utama", url: "/ms" },
    { label: "Peralatan", url: "/ms/equipment" },
    { label: "Pembiayaan Tangki Kimia", url: "/ms/equipment/chemical-tank" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Pembiayaan Tangki Kimia - Deposit 0%", "subtitle": "ISO tank, tangki keluli tahan karat dengan pembiayaan 100%", "backgroundImage": "/images/hero/chemical-tank.jpg", "lang": lang })}  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs })}  ${maybeRenderHead()}<section class="section py-16 bg-white"> <div class="container-custom"> <div class="max-w-4xl mx-auto"> <h2 class="text-4xl font-black mb-8 text-[#2D1810] text-center">
Pembiayaan Tangki Kimia Untuk Industri
</h2> <div class="prose prose-lg max-w-none text-gray-700 space-y-6"> <p> <strong>Perlukan tangki kimia untuk operasi kilang atau logistik?</strong> Kami menawarkan pembiayaan tangki kimia dengan <strong>deposit 0% dan pembiayaan sehingga 100%</strong> nilai peralatan.
</p> <p>
Sama ada tangki ISO untuk pengangkutan atau tangki simpanan statik untuk kilang, kami memahami keperluan industri kimia Malaysia.
</p> <div class="bg-[#F5F1EB] p-8 rounded-lg border-3 border-[#2D1810] shadow-brutal my-8"> <h3 class="text-2xl font-bold mb-4 text-[#8B6F47]">Jenis Tangki Yang Dibiayai</h3> <ul class="space-y-3"> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>ISO Tank Container</strong> - Untuk pengangkutan kimia antarabangsa</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Tangki Keluli Tahan Karat</strong> - SS304/SS316 untuk bahan korosif</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Tangki Berjaket</strong> - Dengan kawalan suhu untuk bahan sensitif</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3">✓</span> <span><strong>Tangki Bertekanan</strong> - Untuk gas dan cecair bertekanan</span> </li> </ul> </div> </div> </div> </div> </section>  <section class="section py-16 bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-4xl font-black mb-4">Dapatkan Pembiayaan Tangki Kimia</h2> <p class="text-xl mb-8 opacity-90">Kelulusan pantas untuk peralatan industri</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": COMPANY_INFO.whatsapp.link, "text": "WhatsApp Kami", "variant": "whatsapp", "lang": lang })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": `/${lang}/contact`, "text": "Hubungi Kami", "variant": "secondary", "lang": lang })} </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "chemical-tank" })}  ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment/chemical-tank.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment/chemical-tank.astro";
const $$url = "/ms/equipment/chemical-tank";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ChemicalTank,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
