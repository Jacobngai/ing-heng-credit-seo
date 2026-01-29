/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { c as generateProductSchema, a as generateFAQSchema, $ as $$BaseLayout, b as generateOrganizationSchema } from '../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$ContactForm } from '../../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$StructuredData } from '../../../chunks/StructuredData_BEy59xv7.mjs';
import { C as COMPANY_INFO } from '../../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../../renderers.mjs';

const $$MachineryFinancing = createComponent(($$result, $$props, $$slots) => {
  const lang = "ms";
  const title = "Pembiayaan Mesin Malaysia | CNC & Peralatan Industri | Ing Heng Credit";
  const description = "Pembiayaan mesin untuk mesin CNC, injection molding, barisan pengeluaran & peralatan industri. 0% deposit, 100% pembiayaan tersedia. Biayai mesin 10+ tahun. Kelulusan pantas untuk pengilang.";
  const keywords = [
    "pembiayaan mesin",
    "pembiayaan mesin malaysia",
    "pembiayaan peralatan industri",
    "pembiayaan mesin cnc",
    "pinjaman peralatan pengeluaran",
    "kewangan peralatan pembuatan",
    "pembiayaan mesin injection molding",
    "pinjaman mesin industri",
    "pembiayaan peralatan kilang",
    "pembiayaan barisan pengeluaran"
  ];
  const breadcrumbItems = [
    { label: "Halaman Utama", href: "/ms" },
    { label: "Perkhidmatan", href: "/ms/services" },
    { label: "Pembiayaan Mesin", href: "/ms/services/machinery-financing" }
  ];
  const faqs = [
    {
      question: "Bolehkah saya mendapat pembiayaan mesin untuk mesin CNC berumur melebihi 10 tahun?",
      answer: "Ya, kami membiayai mesin berumur 10+ tahun, termasuk mesin CNC, peralatan injection molding, dan mesin pengeluaran. Kami menilai keadaan kerja dan daya maju perniagaan, bukan had umur yang sewenang-wenangnya."
    },
    {
      question: "Peralatan industri apa yang layak untuk pembiayaan mesin?",
      answer: "Kami membiayai mesin CNC (lathe, mill, router), peralatan injection molding, barisan pengeluaran, mesin pembungkusan, peralatan percetakan industri, sistem automasi pembuatan, dan mesin industri lain."
    },
    {
      question: "Adakah anda menawarkan 100% pembiayaan mesin dengan 0% deposit?",
      answer: "Ya, kami menawarkan 100% pembiayaan dengan 0% deposit untuk pengilang yang layak. Ini membolehkan anda memperoleh peralatan pengeluaran tanpa menghabiskan modal kerja anda."
    },
    {
      question: "Seberapa pantas pembiayaan mesin boleh diluluskan?",
      answer: "Kami memberikan kelulusan pantas untuk pembiayaan mesin, jauh lebih pantas daripada bank tradisional. Proses kami yang diperkemas memberi tumpuan kepada keperluan perniagaan anda dan potensi produktiviti peralatan."
    },
    {
      question: "Dokumen apa yang diperlukan untuk pembiayaan peralatan industri?",
      answer: "Dokumen perniagaan asas termasuk pendaftaran syarikat, penyata kewangan, spesifikasi peralatan, dan sebut harga. Kami mengekalkan dokumentasi yang minimum untuk mempercepatkan kelulusan pembiayaan mesin anda."
    }
  ];
  const productSchema = generateProductSchema({
    name: "Pembiayaan Mesin Malaysia",
    description: "Pembiayaan peralatan industri untuk mesin CNC, barisan pengeluaran, dan mesin pembuatan dengan pilihan 0% deposit",
    category: "Perkhidmatan Kewangan",
    offers: [
      {
        price: "Kadar kompetitif dari 6.88% p.a.",
        availability: "Tersedia di seluruh negara",
        description: "Pembiayaan mesin untuk peralatan industri sehingga 100% dengan 0% deposit"
      }
    ]
  });
  const faqSchema = generateFAQSchema(faqs);
  const organizationSchema = generateOrganizationSchema();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": productSchema })} ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema })} ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": organizationSchema })}  ${maybeRenderHead()}<div class="bg-blue-50 border-b-3 border-navy-900"> <div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "lang": lang })} </div> </div>  <section class="hero relative overflow-hidden"> <div class="container-custom relative z-10 text-center py-20"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-display uppercase leading-tight mb-6 text-white">
Pembiayaan <span class="text-yellow-400">Mesin</span> Malaysia
</h1> <h2 class="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto font-normal">
Mesin CNC • Barisan Pengeluaran • Pinjaman Peralatan Industri
</h2> <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8"> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="btn btn-secondary text-xl px-8 py-4">
Dapatkan Sebut Harga Pembiayaan Mesin
</a> <a href="#machinery-calculator" class="btn btn-outline-white text-xl px-8 py-4">
Kira Pembayaran
</a> </div> <div class="text-yellow-400 font-bold text-lg">
✓ 0% Deposit • ✓ 100% Pembiayaan • ✓ Biayai Mesin Berumur 10+ Tahun
</div> </div> <div class="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400"></div> </section>  <section class="section bg-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
Kekecewaan <span class="text-secondary">Pembuatan</span> Yang Kami Faham
</h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"> <div class="space-y-8"> <div class="bg-red-50 border-l-6 border-red-500 p-6"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">Tuntutan Deposit Yang Membebankan Aliran Tunai</h3> <p class="text-gray-700 leading-relaxed text-lg">
Apabila mesin CNC anda perlu diganti tetapi bank mahu deposit 50% di muka, dan anda mengira itu RM 300,000 tunai yang anda tidak ada, adakah anda merasakan beban di dada anda kerana tahu pengeluaran akan terjejas sementara pesaing menaik taraf peralatan mereka?
</p> </div> <div class="bg-red-50 border-l-6 border-red-500 p-6"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">Penolakan Umur Peralatan</h3> <p class="text-gray-700 leading-relaxed text-lg">
Apabila anda jumpa mesin injection molding berumur 12 tahun yang sempurna yang masih menghasilkan bahagian berkualiti, tetapi bank secara automatik menolaknya kerana had umur, adakah kekecewaan itu membakar kerana tahu peralatan itu ada 10+ tahun lagi kehidupan produktif?
</p> </div> </div> <div class="space-y-8"> <div class="bg-red-50 border-l-6 border-red-500 p-6"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">Realiti Kelebihan Kompetitif</h3> <p class="text-gray-700 leading-relaxed text-lg">
Apabila anda melihat pesaing memenangi kontrak kerana mesin baru mereka berjalan 40% lebih pantas daripada peralatan berumur 8 tahun anda, dan anda mengira berapa banyak pendapatan yang anda hilang bulanan kepada teknologi yang lapuk, adakah perasaan ketinggalan itu memakan anda?
</p> </div> <div class="bg-red-50 border-l-6 border-red-500 p-6"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">Had Kapasiti Pengeluaran</h3> <p class="text-gray-700 leading-relaxed text-lg">
Apabila pesanan melebihi kapasiti mesin semasa anda dan anda terpaksa menolak kontrak bernilai RM 200,000 bulanan, adakah perut anda jatuh kerana tahu barisan pengeluaran tambahan itu boleh mengubah perniagaan anda tetapi pembiayaan terasa mustahil?
</p> </div> </div> </div> </div> </section>  <section class="section bg-blue-50"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
Pembiayaan Mesin <span class="text-secondary">Yang Berkesan</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 max-w-4xl mx-auto text-xl"> <strong>Peralatan anda. Jadual anda. Kelebihan kompetitif anda.</strong> Dapatkan mesin industri yang diperlukan perniagaan anda tanpa menghabiskan modal kerja.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg p-8 text-center"> <div class="text-6xl mb-6">🏭</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">0% Deposit Diperlukan</h3> <p class="text-gray-700 leading-relaxed text-lg">
Biayai 100% kos mesin anda. Simpan aliran tunai anda untuk operasi, bahan, dan peluang pertumbuhan.
</p> </div> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg p-8 text-center"> <div class="text-6xl mb-6">⚙️</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">Biayai Mesin Berumur 10+ Tahun</h3> <p class="text-gray-700 leading-relaxed text-lg">
Kami menilai keadaan kerja dan potensi perniagaan, bukan had umur yang sewenang-wenangnya. Malah peralatan lama dipertimbangkan.
</p> </div> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg p-8 text-center"> <div class="text-6xl mb-6">⚡</div> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4">Fokus Pembuatan Pantas</h3> <p class="text-gray-700 leading-relaxed text-lg">
Kami faham keperluan pengeluaran yang mendesak. Dapatkan kelulusan dengan pantas supaya pemerolehan mesin anda tidak melambatkan operasi.
</p> </div> </div> </div> </section>  <section class="section bg-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
Mesin <span class="text-secondary">Industri Yang Kami Biayai</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 max-w-3xl mx-auto text-xl">
Pembiayaan mesin menyeluruh untuk semua jenis peralatan industri dan pembuatan
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md p-6 hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">Mesin CNC</h3> <ul class="space-y-2 text-gray-700"> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Lathe & Mill CNC
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Router CNC
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Pusat Pemesinan
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Pusat Pemutaran
</li> </ul> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md p-6 hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">Peralatan Pengeluaran</h3> <ul class="space-y-2 text-gray-700"> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Mesin Injection Molding
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Barisan Pengeluaran
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Peralatan Pemasangan
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Automasi Pembuatan
</li> </ul> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md p-6 hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">Mesin Pemprosesan</h3> <ul class="space-y-2 text-gray-700"> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Peralatan Percetakan Industri
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Mesin Pembungkusan
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Peralatan Pemprosesan Makanan
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Mesin Tekstil
</li> </ul> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md p-6 hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">Peralatan Kerja Logam</h3> <ul class="space-y-2 text-gray-700"> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Mesin Kimpalan
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Press Brake
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Mesin Gunting
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Rolling Mill
</li> </ul> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md p-6 hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">Kawalan Kualiti</h3> <ul class="space-y-2 text-gray-700"> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Mesin CMM
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Peralatan Ujian
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Sistem Pengukuran
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Peralatan Makmal
</li> </ul> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md p-6 hover:shadow-brutal-lg transition-all hover:-translate-y-1"> <h3 class="text-xl font-display uppercase text-navy-900 mb-4">Peralatan Sokongan</h3> <ul class="space-y-2 text-gray-700"> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Kompressor & Generator
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Sistem Pengendalian Bahan
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Sistem Penyejukan
</li> <li class="flex items-start"> <span class="text-secondary mr-2">▸</span>
Peralatan Bengkel
</li> </ul> </div> </div> </div> </section>  <section class="section bg-secondary text-white"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6">
Mengapa Pilih <span class="text-yellow-400">Pembiayaan Mesin</span> Kami?
</h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="bg-white text-navy-900 border-3 border-navy-900 shadow-brutal-lg p-8 hover:shadow-brutal-xl transition-all hover:-translate-y-1"> <div class="text-5xl mb-6">💰</div> <h3 class="text-xl font-display uppercase mb-4">Mengekalkan Modal Kerja</h3> <p class="text-gray-700 leading-relaxed">
Simpan tunai anda untuk bahan, gaji, dan peluang tidak dijangka. 100% pembiayaan mesin tersedia dengan 0% deposit.
</p> </div> <div class="bg-white text-navy-900 border-3 border-navy-900 shadow-brutal-lg p-8 hover:shadow-brutal-xl transition-all hover:-translate-y-1"> <div class="text-5xl mb-6">📈</div> <h3 class="text-xl font-display uppercase mb-4">Naik Taraf Keupayaan Pengeluaran</h3> <p class="text-gray-700 leading-relaxed">
Mesin moden meningkatkan kecekapan, mengurangkan pembaziran, dan membolehkan anda memenangi kontrak yang lebih besar dengan margin yang lebih baik.
</p> </div> <div class="bg-white text-navy-900 border-3 border-navy-900 shadow-brutal-lg p-8 hover:shadow-brutal-xl transition-all hover:-translate-y-1"> <div class="text-5xl mb-6">🏆</div> <h3 class="text-xl font-display uppercase mb-4">Kelebihan Pembuatan Kompetitif</h3> <p class="text-gray-700 leading-relaxed">
Kekal mendahului pesaing dengan teknologi terkini. Pengeluaran lebih pantas, kualiti lebih baik, operasi lebih menguntungkan.
</p> </div> <div class="bg-white text-navy-900 border-3 border-navy-900 shadow-brutal-lg p-8 hover:shadow-brutal-xl transition-all hover:-translate-y-1"> <div class="text-5xl mb-6">🛠️</div> <h3 class="text-xl font-display uppercase mb-4">Bina Aset Pembuatan</h3> <p class="text-gray-700 leading-relaxed">
Miliki mesin berharga yang meningkatkan asas aset syarikat anda dan kapasiti peminjaman untuk pertumbuhan masa depan.
</p> </div> <div class="bg-white text-navy-900 border-3 border-navy-900 shadow-brutal-lg p-8 hover:shadow-brutal-xl transition-all hover:-translate-y-1"> <div class="text-5xl mb-6">⚙️</div> <h3 class="text-xl font-display uppercase mb-4">Fleksibiliti Umur Peralatan</h3> <p class="text-gray-700 leading-relaxed">
Bank tolak peralatan lama secara automatik. Kami menilai keadaan kerja dan potensi produktiviti sebagai gantinya.
</p> </div> <div class="bg-white text-navy-900 border-3 border-navy-900 shadow-brutal-lg p-8 hover:shadow-brutal-xl transition-all hover:-translate-y-1"> <div class="text-5xl mb-6">🚀</div> <h3 class="text-xl font-display uppercase mb-4">Kembangkan Kapasiti Pengeluaran</h3> <p class="text-gray-700 leading-relaxed">
Barisan pengeluaran tambahan bermakna lebih banyak pesanan, hasil lebih tinggi, dan keupayaan melayani berbilang pelanggan serentak.
</p> </div> </div> </div> </section>  <section class="section bg-blue-50"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
Proses <span class="text-secondary">Pembiayaan Mesin</span> Yang Mudah
</h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 max-w-3xl mx-auto text-xl">
Dapatkan pembiayaan mesin industri anda diluluskan dengan pantas dan cekap
</p> </div> <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto"> <div class="text-center"> <div class="bg-yellow-400 border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md"> <span class="text-4xl font-display text-navy-900">1</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">Pertanyaan Peralatan</h3> <p class="text-gray-600 leading-relaxed">
Hubungi kami dengan keperluan dan spesifikasi mesin anda
</p> </div> <div class="text-center"> <div class="bg-yellow-400 border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md"> <span class="text-4xl font-display text-navy-900">2</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">Penilaian Perniagaan</h3> <p class="text-gray-600 leading-relaxed">
Kami menilai keperluan perniagaan dan potensi produktiviti peralatan anda
</p> </div> <div class="text-center"> <div class="bg-yellow-400 border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md"> <span class="text-4xl font-display text-navy-900">3</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">Kelulusan Pantas</h3> <p class="text-gray-600 leading-relaxed">
Proses kelulusan pantas yang memberi tumpuan kepada daya maju perniagaan dan nilai peralatan
</p> </div> <div class="text-center"> <div class="bg-yellow-400 border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md"> <span class="text-4xl font-display text-navy-900">4</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3">Pemerolehan Peralatan</h3> <p class="text-gray-600 leading-relaxed">
Dapatkan mesin anda dan mula tingkatkan kapasiti pengeluaran dengan segera
</p> </div> </div> </div> </section>  <section class="section bg-white"> <div class="container-custom max-w-4xl"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900">
Soalan Lazim <span class="text-secondary">Pembiayaan Mesin</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> </div> <div class="space-y-8"> ${faqs.map((faq, index) => renderTemplate`<div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-md"> <div class="p-6 border-b-3 border-navy-900 bg-white"> <h3 class="text-xl font-display uppercase text-navy-900"> ${faq.question} </h3> </div> <div class="p-6"> <p class="text-gray-700 leading-relaxed text-lg"> ${faq.answer} </p> </div> </div>`)} </div> </div> </section>  <section class="section bg-secondary text-white relative" style="border-top: 8px solid #FBBF24;"> <div class="container-custom text-center"> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6">
Dapatkan Sebut Harga <span class="text-yellow-400">Pembiayaan Mesin</span> Anda
</h2> <p class="text-xl mb-12 text-white opacity-90 max-w-3xl mx-auto"> <strong>Peralatan pengeluaran anda. Kelebihan kompetitif anda. Pertumbuhan perniagaan anda.</strong><br>
Hubungi kami hari ini untuk kelulusan pembiayaan mesin yang pantas.
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center mb-8"> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="btn btn-secondary text-xl px-12 py-6">
WhatsApp Kami Sekarang
</a> <a href="/ms/contact" class="btn btn-outline-white text-xl px-12 py-6">
Dapatkan Sebut Harga Percuma
</a> </div> <div class="mt-8 text-white"> <p class="text-lg">
Atau telefon pakar pembiayaan mesin kami:
<a${addAttribute(`tel:${COMPANY_INFO.phone.international}`, "href")} class="text-yellow-400 font-black hover:underline" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.5);"> ${COMPANY_INFO.phone.display} </a> </p> </div> </div> </section>  <section class="section bg-white"> <div class="container-custom max-w-4xl"> <div class="text-center mb-16"> <h2 class="text-5xl md:text-6xl font-display uppercase mb-6 text-navy-900">
Mohon <span class="text-secondary">Pembiayaan Mesin</span> Hari Ini
</h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div> <p class="text-gray-700 text-xl">
Isi borang di bawah dan pakar pembiayaan peralatan industri kami akan menghubungi anda segera
</p> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-xl p-8 md:p-12"> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/services/machinery-financing.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/services/machinery-financing.astro";
const $$url = "/ms/services/machinery-financing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MachineryFinancing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
