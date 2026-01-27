/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { a as generateFAQSchema, $ as $$BaseLayout, b as generateOrganizationSchema } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$BenefitCard } from '../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$CTAButton } from '../../chunks/CTAButton_D2NuWLbx.mjs';
import { $ as $$StructuredData } from '../../chunks/StructuredData_BEy59xv7.mjs';
import { C as COMPANY_INFO } from '../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../renderers.mjs';

const $$EquipmentFinanceCompany = createComponent(($$result, $$props, $$slots) => {
  const lang = "ms";
  const pageTitle = "Syarikat Pembiayaan Peralatan Terpercaya Malaysia Sejak 1985 | Ing Heng Credit";
  const pageDescription = "Syarikat pembiayaan peralatan terkemuka Malaysia. Berlesen KPKT sejak 1985, melayani 4,000+ syarikat. 0% deposit tersedia, kelulusan pantas, pembiayaan peralatan 10+ tahun.";
  const keywords = [
    "syarikat pembiayaan peralatan",
    "syarikat pembiayaan peralatan Malaysia",
    "Malaysia syarikat pembiayaan jentera",
    "syarikat pembiayaan berlesen Malaysia",
    "syarikat pembiayaan KPKT berlesen",
    "syarikat pembiayaan peralatan pembinaan",
    "syarikat pajakan peralatan Malaysia",
    "syarikat pembiayaan peralatan industri",
    "syarikat hire purchase peralatan",
    "syarikat pembiayaan jentera Malaysia"
  ];
  const companyStats = [
    { number: "40+", label: "Tahun Pengalaman", sublabel: "Sejak 1985" },
    { number: "4,000+", label: "Syarikat Dibiayai", sublabel: "Seluruh Malaysia" },
    { number: "0%", label: "Deposit Minimum", sublabel: "Pembiayaan 100% tersedia" },
    { number: "10+", label: "Tahun Umur Peralatan", sublabel: "Bila bank tolak" }
  ];
  const bankComparisons = [
    {
      title: "Penerimaan Umur Peralatan",
      bank: "Bank tolak peralatan 3-5 tahun",
      us: "Kami biayai peralatan 10+ tahun",
      icon: "calendar"
    },
    {
      title: "Keperluan Deposit",
      bank: "Bank perlukan deposit 20-30%",
      us: "0% deposit tersedia - pembiayaan 100%",
      icon: "cash"
    },
    {
      title: "Masa Kelulusan",
      bank: "Bank ambil 2-4 minggu kelulusan",
      us: "Kelulusan pantas untuk kes mendesak",
      icon: "clock"
    },
    {
      title: "Keperluan Kredit",
      bank: "Bank ada kriteria kredit ketat",
      us: "Penilaian fleksibel - kami lulus yang bank tolak",
      icon: "check-badge"
    }
  ];
  const specializations = [
    {
      title: "Peralatan Pembinaan",
      description: "Excavator, bulldozer, wheel loader, kren, road roller, compactor",
      icon: "cog"
    },
    {
      title: "Peralatan Logistik",
      description: "Prime mover, container trailer, lori tipper, lori hantar",
      icon: "truck"
    },
    {
      title: "Peralatan Industri",
      description: "Forklift, generator, air compressor, mesin CNC, barisan pengeluaran",
      icon: "wrench-screwdriver"
    },
    {
      title: "Kenderaan Khusus",
      description: "Lori sejuk, food truck, mobile crane, backhoe",
      icon: "wrench"
    }
  ];
  const credentials = [
    {
      title: "KPKT Berlesen Sejak 1985",
      description: "Sepenuhnya berlesen oleh Kementerian Perumahan dan Kerajaan Tempatan Malaysia",
      icon: "shield"
    },
    {
      title: "Pematuhan Peraturan",
      description: "Audit kerajaan berkala dan pematuhan peraturan sepenuhnya",
      icon: "check-badge"
    },
    {
      title: "Ahli Persatuan Industri",
      description: "Ahli Persatuan Perkhidmatan Kewangan Malaysia",
      icon: "users"
    },
    {
      title: "Liputan Seluruh Malaysia",
      description: "Berlesen beroperasi di semua negeri dan wilayah Malaysia",
      icon: "location"
    }
  ];
  const faqs = [
    {
      question: "Apa yang membezakan Ing Heng sebagai syarikat pembiayaan peralatan dari bank?",
      answer: "Sebagai syarikat pembiayaan peralatan khusus, kami fokus secara eksklusif pada pembiayaan peralatan. Tidak seperti bank, kami luluskan peralatan sehingga 10+ tahun, tawarkan pilihan deposit 0%, dan proses kelulusan lebih pantas. Kami faham nilai peralatan dan operasi perniagaan lebih baik dari bank umum."
    },
    {
      question: "Adakah syarikat pembiayaan peralatan anda berlesen di Malaysia?",
      answer: "Ya, Ing Heng Credit & Leasing adalah syarikat pembiayaan peralatan berlesen penuh di bawah KPKT (Kementerian Perumahan dan Kerajaan Tempatan) sejak 1985. Kami dikawal selia dan mematuhi semua keperluan perkhidmatan kewangan Malaysia."
    },
    {
      question: "Apakah jenis peralatan yang diliputi syarikat pembiayaan anda?",
      answer: "Syarikat pembiayaan peralatan kami mengkhusus dalam peralatan pembinaan (excavator, bulldozer, kren), peralatan logistik (prime mover, lori, trailer), dan peralatan industri (forklift, generator, mesin CNC). Kami biayai peralatan baru dan terpakai."
    },
    {
      question: "Berapa lama syarikat pembiayaan peralatan anda beroperasi?",
      answer: "Ing Heng telah beroperasi sebagai syarikat pembiayaan peralatan sejak 1985, memberikan kami lebih 40 tahun pengalaman dalam pembiayaan peralatan Malaysia. Kami telah berjaya membiayai lebih 4,000 syarikat seluruh Malaysia."
    }
  ];
  const organizationSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": organizationSchema })} ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema })}  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Syarikat Pembiayaan Peralatan Terpercaya Malaysia Sejak 1985", "subtitle": "Apabila bank menolak permohonan pembiayaan peralatan anda kerana jentera berumur 8 tahun, adakah anda berasa kecewa kerana jentera berfungsi sempurna tetapi umur menghadkan pinjaman mereka? Sebagai syarikat pembiayaan peralatan terkemuka Malaysia, kami luluskan yang bank tolak.", "ctaText": "Dapatkan Sebut Harga Pembiayaan Peralatan", "ctaLink": "/ms/contact", "ctaSecondaryText": "WhatsApp Kami", "ctaSecondaryLink": COMPANY_INFO.whatsapp.link, "lang": lang, "trustSignals": ["KPKT Berlesen Sejak 1985", "Pengalaman 40+ Tahun", "Kelulusan Pantas", "4,000+ Syarikat Dibiayai"] })}  ${maybeRenderHead()}<section class="section bg-[#F5F1EC]"> <div class="container-custom"> <div class="max-w-5xl mx-auto"> <!-- Pain Points --> <div class="grid lg:grid-cols-2 gap-8 mb-12"> <div class="bg-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <h2 class="text-2xl font-black uppercase text-[#8B6F47] mb-6 border-b-2 border-[#D4A574] pb-2">Bila Bank Kata Tidak...</h2> <ul class="space-y-4 text-[#4F3E29]"> <li class="flex items-start space-x-3"> <div class="w-2 h-2 bg-[#8B6F47] rounded-full mt-2 flex-shrink-0"></div> <span class="font-medium">Apabila pemberi pinjaman tradisional ambil 2-4 minggu untuk kelulusan sementara tarikh akhir projek anda bulan depan, adakah tekanan masa itu membuatkan anda tidak tidur lena?</span> </li> <li class="flex items-start space-x-3"> <div class="w-2 h-2 bg-[#8B6F47] rounded-full mt-2 flex-shrink-0"></div> <span class="font-medium">Apabila anda jumpa excavator 8 tahun sempurna tetapi bank tolak semata-mata berdasarkan umur, adakah anda berasa kecewa kerana tahu ia dalam keadaan sangat baik?</span> </li> <li class="flex items-start space-x-3"> <div class="w-2 h-2 bg-[#8B6F47] rounded-full mt-2 flex-shrink-0"></div> <span class="font-medium">Apabila bank minta deposit 30% terlebih dahulu dan anda perlukan wang tunai untuk operasi, adakah dada anda sesak memikirkan kekangan aliran tunai?</span> </li> </ul> </div> <div class="bg-gradient-to-r from-[#8B6F47] to-[#6B5437] text-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <h2 class="text-2xl font-black uppercase mb-6 text-[#F5F5DC] border-b-2 border-[#D4A574] pb-2">Kami Kata YA!</h2> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" stroke="white" stroke-width="1"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">Proses kelulusan pantas - bila anda perlukan peralatan segera, kami respons dengan cepat</span> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" stroke="white" stroke-width="1"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">Umur peralatan tidak hadkan kami - kami biayai jentera 10+ tahun berdasarkan keadaan kerja</span> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" stroke="white" stroke-width="1"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="font-bold">0% deposit tersedia - biayai hingga 100% nilai peralatan untuk kekalkan modal kerja</span> </li> </ul> </div> </div> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
Syarikat Pembiayaan Peralatan Terkemuka Malaysia
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
Empat dekad pengalaman membiayai peralatan merentasi sektor pembinaan, logistik, dan industri
</p> </div> <!-- Authority Stats --> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"> ${companyStats.map((stat) => renderTemplate`<div class="text-center bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <div class="text-4xl md:text-5xl font-black text-[#8B6F47] mb-2">${stat.number}</div> <div class="text-[#4F3E29] font-bold uppercase text-sm tracking-tight">${stat.label}</div> <div class="text-[#4F3E29] text-xs mt-1">${stat.sublabel}</div> </div>`)} </div> <!-- Company Description --> <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-black uppercase text-[#8B6F47] mb-6 text-center">Tentang Ing Heng Credit & Leasing</h3> <p class="text-[#4F3E29] leading-relaxed font-medium mb-6 text-lg">
Ditubuhkan pada <strong class="font-black text-[#8B6F47]">1985</strong>, Ing Heng Credit & Leasing Sdn Bhd telah berkembang menjadi syarikat pembiayaan peralatan paling dipercayai di Malaysia. Sebagai <strong class="font-black text-[#8B6F47]">penyedia perkhidmatan kewangan berlesen KPKT</strong>, kami mengkhusus secara eksklusif dalam pembiayaan peralatan untuk perniagaan pembinaan, logistik, dan industri.
</p> <p class="text-[#4F3E29] leading-relaxed font-medium text-lg">
Tidak seperti bank yang menganggap pembiayaan peralatan sebagai perniagaan sampingan, kami adalah syarikat pembiayaan peralatan khusus yang memahami nilai jentera, kitaran perniagaan, dan cabaran unik yang dihadapi oleh perniagaan bergantung peralatan di seluruh Malaysia.
</p> </div> </div> </section>  <section class="section bg-[#F5F1EC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
Syarikat Pembiayaan Peralatan vs Bank Tradisional
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
Mengapa pilih syarikat pembiayaan peralatan khusus berbanding perkhidmatan bank umum?
</p> </div> <div class="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"> ${bankComparisons.map((comparison) => renderTemplate`<div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <div class="flex items-center space-x-3 mb-4"> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": comparison.icon, "title": comparison.title, "description": "" })} </div> <!-- Bank Approach --> <div class="mb-4 p-4 bg-red-50 border-l-4 border-red-400 rounded"> <h4 class="font-black text-red-700 text-sm uppercase tracking-tight mb-2">🏦 Bank Tradisional:</h4> <p class="text-red-600 font-medium text-sm">${comparison.bank}</p> </div> <!-- Our Approach --> <div class="p-4 bg-green-50 border-l-4 border-[#8B6F47] rounded"> <h4 class="font-black text-[#8B6F47] text-sm uppercase tracking-tight mb-2">✅ Ing Heng Pembiayaan Peralatan:</h4> <p class="text-[#4F3E29] font-medium text-sm">${comparison.us}</p> </div> </div>`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
Pengkhususan Syarikat Pembiayaan Peralatan
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
Kepakaran mendalam merentasi pelbagai kategori peralatan
</p> </div> <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"> ${specializations.map((spec) => renderTemplate`<div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] border-l-[6px] border-l-[#8B6F47] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <div class="flex items-start space-x-4"> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": spec.icon, "title": "", "description": "" })} <div> <h3 class="text-xl font-black uppercase text-[#8B6F47] mb-3">${spec.title}</h3> <p class="text-[#4F3E29] leading-relaxed font-medium">${spec.description}</p> </div> </div> </div>`)} </div> <!-- Equipment Categories --> <div class="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-[#8B6F47] to-[#6B5437] text-white p-8 rounded-lg border-3 border-[#2D1810] shadow-[8px_8px_0_#2D1810]"> <h3 class="text-2xl font-black uppercase mb-6 text-center text-[#F5F5DC]">Peralatan Yang Kami Biayai</h3> <div class="grid md:grid-cols-3 gap-6 text-sm"> <div> <h4 class="font-black text-[#D4A574] mb-3 uppercase">Pembinaan</h4> <ul class="space-y-2"> <li>• Excavator (Semua saiz)</li> <li>• Bulldozer</li> <li>• Wheel Loader</li> <li>• Mobile Crane</li> <li>• Road Roller</li> <li>• Compactor</li> </ul> </div> <div> <h4 class="font-black text-[#D4A574] mb-3 uppercase">Logistik</h4> <ul class="space-y-2"> <li>• Prime Mover</li> <li>• Container Trailer</li> <li>• Lori Tipper</li> <li>• Lori Hantar</li> <li>• Lori Sejuk</li> <li>• Trailer Khusus</li> </ul> </div> <div> <h4 class="font-black text-[#D4A574] mb-3 uppercase">Industri</h4> <ul class="space-y-2"> <li>• Forklift</li> <li>• Generator</li> <li>• Air Compressor</li> <li>• Mesin CNC</li> <li>• Barisan Pengeluaran</li> <li>• Peralatan Kilang</li> </ul> </div> </div> </div> </div> </section>  <section class="section bg-[#F5F1EC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
Syarikat Pembiayaan Peralatan Berlesen & Dikawal Selia
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
Pematuhan peraturan penuh untuk ketenangan fikiran anda
</p> </div> <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"> ${credentials.map((credential) => renderTemplate`<div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <div class="flex items-start space-x-4"> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": credential.icon, "title": "", "description": "" })} <div> <h3 class="text-lg font-black uppercase text-[#8B6F47] mb-3">${credential.title}</h3> <p class="text-[#4F3E29] leading-relaxed font-medium">${credential.description}</p> </div> </div> </div>`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#8B6F47] mb-4">
Soalan Lazim Syarikat Pembiayaan Peralatan
</h2> <p class="text-xl text-[#4F3E29] max-w-3xl mx-auto font-medium">
Soalan biasa tentang perkhidmatan syarikat pembiayaan peralatan kami
</p> </div> <div class="max-w-4xl mx-auto space-y-6"> ${faqs.map((faq, index) => renderTemplate`<div class="bg-white p-6 rounded-lg border-3 border-[#2D1810] shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"> <h3 class="text-lg font-black uppercase text-[#8B6F47] mb-3">${faq.question}</h3> <p class="text-[#4F3E29] leading-relaxed font-medium">${faq.answer}</p> </div>`)} </div> </div> </section>  <section class="section bg-gradient-to-r from-[#8B6F47] to-[#6B5437] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 text-[#F5F5DC]">
Pilih Syarikat Pembiayaan Peralatan Terpercaya Malaysia
</h2> <p class="text-xl mb-8 max-w-3xl mx-auto font-bold">
Pengalaman 40+ tahun, 4,000+ syarikat dibiayai, berlesen KPKT sejak 1985. Bila bank kata tidak, kami kata ya. Dapatkan pembiayaan peralatan diluluskan hari ini.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Dapatkan Sebut Harga Pembiayaan Peralatan", "link": COMPANY_INFO.whatsapp.link, "variant": "accent", "size": "large", "icon": "whatsapp" })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Hubungi Pasukan Pembiayaan Peralatan", "link": `tel:${COMPANY_INFO.phone.international}`, "variant": "outline-white", "size": "large", "icon": "phone" })} </div> <div class="mt-8 text-sm"> <p class="font-bold">Syarikat Pembiayaan Peralatan Khusus | Berlesen & Dikawal Selia | Kelulusan Pantas Tersedia</p> </div> </div> </section> ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment-finance-company.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/equipment-finance-company.astro";
const $$url = "/ms/equipment-finance-company";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EquipmentFinanceCompany,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
