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

const $$Backhoe = createComponent(($$result, $$props, $$slots) => {
  const lang = "ms";
  const pageTitle = "Pembiayaan Backhoe Malaysia - Deposit 0% | CASE, JCB, CAT";
  const pageDescription = "Berhenti menyewa backhoe. Pembiayaan backhoe terpakai dengan deposit 0%. CASE 580, JCB 3CX diterima. Peralatan 10+ tahun diluluskan.";
  const keywords = ["pembiayaan backhoe Malaysia", "sewa vs beli backhoe", "CASE 580 pembiayaan", "pinjaman backhoe terpakai", "JCB backhoe loan"];
  const breadcrumbs = [
    { label: "Laman Utama", url: "/ms" },
    { label: "Peralatan", url: "/ms/equipment" },
    { label: "Pembiayaan Backhoe", url: "/ms/equipment/backhoe" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Pembiayaan Backhoe - Deposit 0%", "subtitle": "Berhenti menyewa. Miliki backhoe anda dengan pembiayaan 100%", "backgroundImage": "/images/hero/backhoe.jpg", "lang": lang })}  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs })}  ${maybeRenderHead()}<section class="section py-16 bg-white"> <div class="container-custom"> <div class="max-w-4xl mx-auto"> <h2 class="text-4xl font-black mb-8 text-[#2D1810] text-center">
Kenapa Terus Menyewa Backhoe?
</h2> <div class="prose prose-lg max-w-none text-gray-700 space-y-6"> <p> <strong>Anda bayar RM 8,000 setiap bulan untuk sewa backhoe.</strong> Selepas 3 tahun, anda telah bayar RM 288,000 tetapi tidak memiliki apa-apa. Backhoe itu bukan milik anda.
</p> <p>
Kami menawarkan pembiayaan backhoe terpakai dengan <strong>deposit 0% dan pembiayaan sehingga 100%</strong> nilai peralatan. CASE 580, JCB 3CX, CAT - semua jenama diterima.
</p> <div class="bg-[#F5F1EB] p-8 rounded-lg border-3 border-[#2D1810] shadow-brutal my-8"> <h3 class="text-2xl font-bold mb-4 text-[#8B6F47]">Kelebihan Pemilikan Berbanding Penyewaan</h3> <ul class="space-y-3"> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3"></span> <span><strong>Tiada Had Jam Operasi</strong> - Gunakan 24/7 tanpa penalti</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3"></span> <span><strong>Sentiasa Tersedia</strong> - Backhoe anda sedia bila-bila masa</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3"></span> <span><strong>Skor Tender Lebih Tinggi</strong> - Pemilikan peralatan meningkatkan peluang menang</span> </li> <li class="flex items-start"> <span class="text-[#8B6F47] mr-3"></span> <span><strong>Bina Aset</strong> - Setiap bayaran membina ekuiti anda</span> </li> </ul> </div> </div> </div> </div> </section>  <section class="section py-16 bg-[#F5F1EB]"> <div class="container-custom"> <h2 class="text-3xl font-black mb-12 text-[#2D1810] text-center">
Backhoe Yang Kami Biayai
</h2> <div class="grid md:grid-cols-3 gap-8"> <div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-brutal"> <h3 class="text-xl font-bold mb-2 text-[#8B6F47]">CASE 580</h3> <p class="text-gray-700">Model popular untuk kontraktor utiliti. Peralatan 10+ tahun diterima.</p> </div> <div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-brutal"> <h3 class="text-xl font-bold mb-2 text-[#8B6F47]">JCB 3CX</h3> <p class="text-gray-700">Backhoe serba boleh untuk pelbagai kerja pembinaan.</p> </div> <div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-brutal"> <h3 class="text-xl font-bold mb-2 text-[#8B6F47]">CAT Backhoe</h3> <p class="text-gray-700">Jenama dipercayai dengan nilai jualan semula tinggi.</p> </div> </div> </div> </section>  <section class="section py-16 bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-4xl font-black mb-4">Sedia Memiliki Backhoe Anda?</h2> <p class="text-xl mb-8 opacity-90">Deposit 0%, kelulusan pantas untuk backhoe terpakai</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": COMPANY_INFO.whatsapp.link, "text": "WhatsApp Kami Sekarang", "variant": "whatsapp", "lang": lang })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": `/${lang}/contact`, "text": "Mohon Sekarang", "variant": "secondary", "lang": lang })} </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "backhoe" })}  ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment/backhoe.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment/backhoe.astro";
const $$url = "/ms/equipment/backhoe";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Backhoe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
