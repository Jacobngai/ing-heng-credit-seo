/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { f as generateServicePageSchema, a as generateFAQSchema, $ as $$BaseLayout } from '../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$BenefitCard } from '../../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$FAQItem } from '../../../chunks/FAQItem_CTpbqvJe.mjs';
import { $ as $$ContactForm } from '../../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$CTAButton } from '../../../chunks/CTAButton_D2NuWLbx.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$StructuredData } from '../../../chunks/StructuredData_BEy59xv7.mjs';
/* empty css                                               */
export { renderers } from '../../../renderers.mjs';

const $$HirePurchase = createComponent(($$result, $$props, $$slots) => {
  const lang = "ms";
  const title = "Pembiayaan Sewa Beli Malaysia | Pinjaman HP Peralatan | Ing Heng Credit";
  const description = "Pembiayaan sewa beli fleksibel untuk jengkaut, lori, forklift & peralatan pembinaan di Malaysia. Pemprosesan pantas, tempoh sehingga 60 bulan. Dapatkan sebut harga segera!";
  const keywords = ["sewa beli Malaysia", "pembiayaan peralatan", "sewa beli jengkaut", "pembiayaan lori", "pinjaman HP forklift", "pembiayaan peralatan pembinaan", "sewa beli jentera berat", "pembiayaan aset Malaysia"];
  const breadcrumbItems = [
    { label: "Laman Utama", href: "/ms" },
    { label: "Perkhidmatan", href: "/ms/services" },
    { label: "Pembiayaan Sewa Beli", href: "/ms/services/hire-purchase" }
  ];
  const faqs = [
    {
      question: "Apakah pembiayaan sewa beli?",
      answer: "Sewa beli adalah kaedah pembiayaan di mana anda membayar peralatan melalui ansuran bulanan sambil menggunakannya untuk perniagaan anda. Setelah semua pembayaran selesai, pemilikan peralatan akan dipindahkan kepada anda. Ia sesuai untuk perniagaan yang memerlukan peralatan segera tetapi lebih suka menyebarkan kos sepanjang masa."
    },
    {
      question: "Peralatan apa yang boleh dibiayai melalui sewa beli?",
      answer: "Kami membiayai pelbagai peralatan termasuk jengkaut, jentera tanah, backhoe, penggelek jalan, lori, trak kontena, forklift, kren, penjana, dan peralatan pembinaan serta logistik yang lain. Kedua-dua peralatan baharu dan terpakai (sehingga 10 tahun) diterima."
    },
    {
      question: "Berapakah kadar kelulusan anda dan berapa lama masa yang diperlukan?",
      answer: "Kami mengekalkan kadar kelulusan yang tinggi dan memproses permohonan dengan cepat. Setelah diluluskan, dana boleh dikeluarkan dalam 3-5 hari bekerja. Proses kami yang diperkemas memerlukan dokumentasi minimum dan pasukan kami bekerja dengan cekap untuk memastikan anda dilengkapi dengan cepat."
    },
    {
      question: "Berapa lama tempoh pembayaran?",
      answer: "Kami menawarkan tempoh pembayaran fleksibel dari 12 hingga 60 bulan (1 hingga 5 tahun). Tempoh bergantung pada jenis peralatan, umur, dan keperluan perniagaan anda. Tempoh lebih panjang bermaksud bayaran bulanan lebih rendah, manakala tempoh lebih pendek bermaksud anda memiliki peralatan dengan lebih cepat."
    },
    {
      question: "Dokumen apa yang diperlukan untuk permohonan sewa beli?",
      answer: "Dokumen yang diperlukan termasuk: Pendaftaran SSM syarikat, penyata bank 6 bulan terkini, IC/pasport pengarah, penyata kewangan perniagaan (jika ada), sebut harga atau invois untuk peralatan, dan spesifikasi peralatan. Pasukan kami akan membimbing anda melalui proses dokumentasi."
    },
    {
      question: "Bolehkah saya membiayai peralatan terpakai?",
      answer: "Ya! Kami membiayai kedua-dua peralatan baharu dan terpakai. Untuk peralatan terpakai, kami biasanya menerima jentera sehingga 10 tahun, tertakluk kepada penilaian keadaan. Umur dan keadaan peralatan mungkin mempengaruhi jumlah pinjaman dan terma yang ditawarkan."
    },
    {
      question: "Adakah bayaran pendahuluan diperlukan?",
      answer: "Keperluan bayaran pendahuluan bermula dari 0% (tertakluk kepada syarat dan keadaan), bergantung pada jenis peralatan, umur dan profil kredit anda. Kami menawarkan pilihan bayaran pendahuluan yang kompetitif untuk menjadikan pemilikan peralatan lebih mudah diakses. Dalam sesetengah kes, bayaran pendahuluan yang lebih rendah boleh diatur untuk perniagaan yang layak."
    },
    {
      question: "Apa yang berlaku jika saya terlepas pembayaran?",
      answer: "Kami memahami bahawa perniagaan menghadapi cabaran aliran tunai. Jika anda menjangkakan kesulitan pembayaran, hubungi kami segera. Kami boleh membuat pengaturan pembayaran atau pilihan penstrukturan semula. Bayaran lewat mungkin dikenakan caj, dan kegagalan yang konsisten boleh mengakibatkan penarikan semula peralatan mengikut terma perjanjian."
    },
    {
      question: "Bolehkah saya selesaikan sewa beli lebih awal?",
      answer: "Ya, penyelesaian awal dibenarkan dan digalakkan. Anda boleh membayar baki yang tinggal pada bila-bila masa, dan kami akan menyediakan penyata penyelesaian. Penyelesaian awal mungkin melibatkan yuran pentadbiran, tetapi anda akan menjimatkan caj faedah masa depan. Hubungi kami untuk sebut harga penyelesaian anda."
    },
    {
      question: "Bagaimana cara saya memohon pembiayaan sewa beli?",
      answer: "Hanya hubungi kami di 017-570 0889, WhatsApp kami, atau isi borang hubungan dalam talian kami. Pakar pembiayaan kami akan membincangkan keperluan peralatan anda, menerangkan pilihan yang tersedia, dan membimbing anda melalui proses permohonan. Kami menjadikannya cepat dan mudah untuk melengkapkan perniagaan anda."
    }
  ];
  const servicePageSchema = generateServicePageSchema({
    serviceName: "Pembiayaan Sewa Beli Peralatan",
    description: "Pembiayaan sewa beli fleksibel untuk jengkaut, lori, forklift & peralatan pembinaan dengan kadar kelulusan yang tinggi",
    serviceType: "Pembiayaan Sewa Beli",
    minRate: "8.00",
    maxRate: "18.00",
    locale: "ms"
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords, "ogType": "website", "data-astro-cid-lrjilxhm": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": servicePageSchema, "data-astro-cid-lrjilxhm": true })}  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema, "data-astro-cid-lrjilxhm": true })}  ${maybeRenderHead()}<div class="container-custom py-4" data-astro-cid-lrjilxhm> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-lrjilxhm": true })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Pembiayaan Sewa Beli Peralatan", "subtitle": "Miliki peralatan anda melalui bayaran bulanan yang fleksibel. Kelulusan pantas, kadar kompetitif, dan tempoh sehingga 60 bulan. Lengkapkan perniagaan anda hari ini!", "ctaText": "Dapatkan Sebut Harga Percuma", "ctaLink": "/ms/contact", "ctaSecondaryText": "WhatsApp Kami", "ctaSecondaryLink": "https://wa.me/60175700889", "lang": lang, "trustSignals": ["Kelulusan Pantas", "Pemprosesan Pantas", "500+ Pelanggan Gembira"], "data-astro-cid-lrjilxhm": true })}  <section class="section-padding bg-gray-50" data-astro-cid-lrjilxhm> <div class="container-custom" data-astro-cid-lrjilxhm> <div class="max-w-4xl mx-auto" data-astro-cid-lrjilxhm> <div class="text-center mb-12" data-astro-cid-lrjilxhm> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-lrjilxhm>
Apakah Pembiayaan Sewa Beli?
</h2> <div class="w-20 h-1 bg-accent mx-auto mb-6" data-astro-cid-lrjilxhm></div> </div> <div class="prose prose-lg max-w-none" data-astro-cid-lrjilxhm> <p class="text-gray-700 leading-relaxed mb-6" data-astro-cid-lrjilxhm>
Sewa beli (HP) adalah penyelesaian pembiayaan aset yang membolehkan perniagaan dan individu memperoleh peralatan penting melalui ansuran bulanan yang boleh diurus. Daripada membayar kos penuh di hadapan, anda menyebarkan pembayaran selama 1 hingga 5 tahun sambil menggunakan peralatan untuk menjana pendapatan bagi perniagaan anda.
</p> <p class="text-gray-700 leading-relaxed mb-6" data-astro-cid-lrjilxhm>
Kaedah pembiayaan ini amat popular untuk peralatan pembinaan, kenderaan logistik, dan jentera industri di mana penggunaan segera peralatan mencipta aliran tunai untuk membayar ansuran bulanan. Setelah semua ansuran selesai, pemilikan penuh dipindahkan kepada anda secara automatik.
</p> <div class="bg-white p-6 rounded-lg border-l-4 border-primary shadow-[2px_2px_0_#2D1810]" data-astro-cid-lrjilxhm> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-lrjilxhm>Cara Sewa Beli Berfungsi:</h3> <ol class="space-y-3 text-gray-700" data-astro-cid-lrjilxhm> <li data-astro-cid-lrjilxhm><strong data-astro-cid-lrjilxhm>1. Pilih Peralatan Anda:</strong> Pilih jentera atau kenderaan yang diperlukan oleh perniagaan anda</li> <li data-astro-cid-lrjilxhm><strong data-astro-cid-lrjilxhm>2. Mohon Pembiayaan:</strong> Hantar permohonan ringkas dengan dokumentasi asas</li> <li data-astro-cid-lrjilxhm><strong data-astro-cid-lrjilxhm>3. Dapatkan Kelulusan Pantas:</strong> Terima kelulusan dengan cepat (kadar kelulusan yang tinggi)</li> <li data-astro-cid-lrjilxhm><strong data-astro-cid-lrjilxhm>4. Bayar Pendahuluan:</strong> Sumbangkan bayaran pendahuluan bermula dari 0% (tertakluk kepada syarat dan keadaan)</li> <li data-astro-cid-lrjilxhm><strong data-astro-cid-lrjilxhm>5. Guna & Bayar Bulanan:</strong> Mula menggunakan peralatan segera sambil membuat bayaran bulanan</li> <li data-astro-cid-lrjilxhm><strong data-astro-cid-lrjilxhm>6. Miliki Peralatan:</strong> Selepas bayaran akhir, pemilikan peralatan dipindahkan kepada anda</li> </ol> </div> </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-lrjilxhm> <div class="container-custom" data-astro-cid-lrjilxhm> <div class="text-center mb-12" data-astro-cid-lrjilxhm> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-lrjilxhm>
Mengapa Pilih Pembiayaan Sewa Beli Kami?
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-lrjilxhm>
Kami telah membantu lebih 500 perniagaan Malaysia memperoleh peralatan yang mereka perlukan untuk berkembang
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-lrjilxhm></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-lrjilxhm> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "lightning", "title": "Kelulusan Pantas", "description": "Dapatkan permohonan anda diluluskan dengan cepat. Proses kami yang diperkemas bermaksud masa menunggu minimum dan penghantaran peralatan yang pantas.", "data-astro-cid-lrjilxhm": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "percentage", "title": "Kadar Faedah Kompetitif", "description": "Kadar faedah 8-18% setahun (tertakluk kepada penilaian kredit). Kami bekerjasama dengan pelbagai pembiaya untuk mendapatkan terma terbaik untuk anda.", "data-astro-cid-lrjilxhm": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "calendar", "title": "Tempoh Bayaran Fleksibel", "description": "Pilih tempoh pembayaran dari 12 hingga 60 bulan. Sesuaikan jadual pembayaran anda untuk sepadan dengan aliran tunai dan kitaran perniagaan anda.", "data-astro-cid-lrjilxhm": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "users", "title": "Sokongan Pelbagai Bahasa", "description": "Pasukan kami melayani anda dalam Bahasa Inggeris, Mandarin, dan Bahasa Malaysia. Dapatkan bantuan dalam bahasa pilihan anda.", "data-astro-cid-lrjilxhm": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "clock", "title": "Pilihan Bayaran Pendahuluan Rendah", "description": "Bermula dari 0% bayaran pendahuluan (tertakluk kepada syarat dan keadaan). Kami menjadikan pemilikan peralatan mudah diakses oleh semua perniagaan.", "data-astro-cid-lrjilxhm": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "default", "title": "Peralatan Baharu & Terpakai", "description": "Biayai kedua-dua peralatan baharu dan terpakai sehingga 10 tahun. Aset berkualiti pada harga yang sesuai dengan bajet anda.", "data-astro-cid-lrjilxhm": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "default", "title": "Tiada Yuran Tersembunyi", "description": "Harga telus dengan semua yuran didedahkan di hadapan. Tiada kejutan, hanya penyelesaian pembiayaan yang jujur.", "data-astro-cid-lrjilxhm": true })} </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-lrjilxhm> <div class="container-custom" data-astro-cid-lrjilxhm> <div class="text-center mb-12" data-astro-cid-lrjilxhm> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-lrjilxhm>
Peralatan Yang Kami Biayai
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-lrjilxhm>
Dari pembinaan hingga logistik, kami membiayai peralatan yang memacu perniagaan anda ke hadapan
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-lrjilxhm></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-lrjilxhm> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-lrjilxhm> <div class="text-primary text-4xl mb-4" data-astro-cid-lrjilxhm>🚜</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-lrjilxhm>Peralatan Pembinaan</h3> <ul class="text-gray-600 space-y-2" data-astro-cid-lrjilxhm> <li data-astro-cid-lrjilxhm>• Jengkaut (1-40 tan)</li> <li data-astro-cid-lrjilxhm>• Jentera Tanah</li> <li data-astro-cid-lrjilxhm>• Backhoe Loader</li> <li data-astro-cid-lrjilxhm>• Penggelek Jalan</li> <li data-astro-cid-lrjilxhm>• Wheel Loader</li> <li data-astro-cid-lrjilxhm>• Skid Steer Loader</li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-lrjilxhm> <div class="text-primary text-4xl mb-4" data-astro-cid-lrjilxhm>🚛</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-lrjilxhm>Kenderaan Logistik</h3> <ul class="text-gray-600 space-y-2" data-astro-cid-lrjilxhm> <li data-astro-cid-lrjilxhm>• Lori & Trak</li> <li data-astro-cid-lrjilxhm>• Trak Kontena</li> <li data-astro-cid-lrjilxhm>• Prime Mover</li> <li data-astro-cid-lrjilxhm>• Van Kargo</li> <li data-astro-cid-lrjilxhm>• Trak Treler</li> <li data-astro-cid-lrjilxhm>• Lori Pembuang</li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-lrjilxhm> <div class="text-primary text-4xl mb-4" data-astro-cid-lrjilxhm>🏗️</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-lrjilxhm>Peralatan Angkat</h3> <ul class="text-gray-600 space-y-2" data-astro-cid-lrjilxhm> <li data-astro-cid-lrjilxhm>• Forklift (1-25 tan)</li> <li data-astro-cid-lrjilxhm>• Kren Mudah Alih</li> <li data-astro-cid-lrjilxhm>• Kren Menara</li> <li data-astro-cid-lrjilxhm>• Reach Stacker</li> <li data-astro-cid-lrjilxhm>• Platform Kerja Udara</li> <li data-astro-cid-lrjilxhm>• Scissor Lift</li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-lrjilxhm> <div class="text-primary text-4xl mb-4" data-astro-cid-lrjilxhm>⚡</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-lrjilxhm>Kuasa & Lain-lain</h3> <ul class="text-gray-600 space-y-2" data-astro-cid-lrjilxhm> <li data-astro-cid-lrjilxhm>• Penjana (10-500kVA)</li> <li data-astro-cid-lrjilxhm>• Pemampat Udara</li> <li data-astro-cid-lrjilxhm>• Pengadun Konkrit</li> <li data-astro-cid-lrjilxhm>• Mesin Kimpalan</li> <li data-astro-cid-lrjilxhm>• Pemadat</li> <li data-astro-cid-lrjilxhm>• Peralatan Industri</li> </ul> </div> </div> <div class="text-center mt-10" data-astro-cid-lrjilxhm> <p class="text-gray-600 mb-6" data-astro-cid-lrjilxhm>
Tidak nampak peralatan anda disenaraikan? Kami membiayai pelbagai aset komersial dan industri.
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Tanya Tentang Peralatan Anda", "link": "/ms/contact", "variant": "primary", "size": "large", "data-astro-cid-lrjilxhm": true })} </div> </div> </section>  <section class="section-padding" data-astro-cid-lrjilxhm> <div class="container-custom" data-astro-cid-lrjilxhm> <div class="text-center mb-12" data-astro-cid-lrjilxhm> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-lrjilxhm>
Cara Memohon Sewa Beli
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-lrjilxhm>
Proses 4 langkah mudah kami memastikan anda dilengkapi dengan pantas
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-lrjilxhm></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-lrjilxhm> <div class="text-center" data-astro-cid-lrjilxhm> <div class="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6" data-astro-cid-lrjilxhm>
1
</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-lrjilxhm>Hubungi Kami</h3> <p class="text-gray-600" data-astro-cid-lrjilxhm>
Hubungi, WhatsApp, atau e-mel kami dengan keperluan peralatan anda. Pakar kami bertindak balas dalam masa beberapa jam.
</p> </div> <div class="text-center" data-astro-cid-lrjilxhm> <div class="w-20 h-20 bg-[#8B6F47] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6" data-astro-cid-lrjilxhm>
2
</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-lrjilxhm>Hantar Dokumen</h3> <p class="text-gray-600" data-astro-cid-lrjilxhm>
Sediakan dokumen perniagaan asas dan sebut harga peralatan. Kami membimbing anda melalui keseluruhan proses.
</p> </div> <div class="text-center" data-astro-cid-lrjilxhm> <div class="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6" data-astro-cid-lrjilxhm>
3
</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-lrjilxhm>Dapatkan Kelulusan</h3> <p class="text-gray-600" data-astro-cid-lrjilxhm>
Terima kelulusan dengan cepat. Kami akan membentangkan terma pembiayaan terbaik yang tersedia untuk anda.
</p> </div> <div class="text-center" data-astro-cid-lrjilxhm> <div class="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6" data-astro-cid-lrjilxhm>
4
</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-lrjilxhm>Dapatkan Peralatan Anda</h3> <p class="text-gray-600" data-astro-cid-lrjilxhm>
Tandatangan perjanjian, bayar pendahuluan, dan terima peralatan anda. Mula menjana pendapatan segera!
</p> </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-br from-primary to-secondary text-white" data-astro-cid-lrjilxhm> <div class="container-custom" data-astro-cid-lrjilxhm> <div class="max-w-4xl mx-auto" data-astro-cid-lrjilxhm> <div class="text-center mb-12" data-astro-cid-lrjilxhm> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-lrjilxhm>
Keperluan Permohonan
</h2> <p class="text-xl text-white/90 max-w-2xl mx-auto" data-astro-cid-lrjilxhm>
Dokumentasi ringkas untuk pemprosesan pantas
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-lrjilxhm></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-lrjilxhm> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-lrjilxhm> <h3 class="text-2xl font-bold mb-4 flex items-center" data-astro-cid-lrjilxhm> <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lrjilxhm> <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" data-astro-cid-lrjilxhm></path> <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" data-astro-cid-lrjilxhm></path> </svg>
Untuk Syarikat (Sdn Bhd)
</h3> <ul class="space-y-3 text-white/90" data-astro-cid-lrjilxhm> <li class="flex items-start" data-astro-cid-lrjilxhm> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lrjilxhm> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-lrjilxhm></path> </svg>
Pendaftaran SSM Syarikat (Form 9 & 49)
</li> <li class="flex items-start" data-astro-cid-lrjilxhm> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lrjilxhm> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-lrjilxhm></path> </svg>
Penyata bank 6 bulan terkini
</li> <li class="flex items-start" data-astro-cid-lrjilxhm> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lrjilxhm> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-lrjilxhm></path> </svg>
Salinan IC/Pasport pengarah
</li> <li class="flex items-start" data-astro-cid-lrjilxhm> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lrjilxhm> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-lrjilxhm></path> </svg>
Penyata kewangan (jika ada)
</li> <li class="flex items-start" data-astro-cid-lrjilxhm> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lrjilxhm> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-lrjilxhm></path> </svg>
Sebut harga/invois peralatan
</li> </ul> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-lrjilxhm> <h3 class="text-2xl font-bold mb-4 flex items-center" data-astro-cid-lrjilxhm> <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lrjilxhm> <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" data-astro-cid-lrjilxhm></path> </svg>
Untuk Individu/Milikan Tunggal
</h3> <ul class="space-y-3 text-white/90" data-astro-cid-lrjilxhm> <li class="flex items-start" data-astro-cid-lrjilxhm> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lrjilxhm> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-lrjilxhm></path> </svg>
Salinan IC/Pasport
</li> <li class="flex items-start" data-astro-cid-lrjilxhm> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lrjilxhm> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-lrjilxhm></path> </svg>
Penyata bank 6 bulan terkini
</li> <li class="flex items-start" data-astro-cid-lrjilxhm> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lrjilxhm> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-lrjilxhm></path> </svg>
Pendaftaran perniagaan (jika berkenaan)
</li> <li class="flex items-start" data-astro-cid-lrjilxhm> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lrjilxhm> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-lrjilxhm></path> </svg>
Bukti pendapatan (slip gaji/penyata KWSP)
</li> <li class="flex items-start" data-astro-cid-lrjilxhm> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lrjilxhm> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-lrjilxhm></path> </svg>
Sebut harga/invois peralatan
</li> </ul> </div> </div> <div class="mt-8 text-center" data-astro-cid-lrjilxhm> <p class="text-white/90 mb-4" data-astro-cid-lrjilxhm>
Pasukan kami akan membimbing anda melalui proses dokumentasi dan boleh membantu dengan sebarang kertas kerja yang hilang.
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Mulakan Permohonan Anda", "link": "/ms/contact", "variant": "accent", "size": "large", "data-astro-cid-lrjilxhm": true })} </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-lrjilxhm> <div class="container-custom" data-astro-cid-lrjilxhm> <div class="max-w-4xl mx-auto" data-astro-cid-lrjilxhm> <div class="text-center mb-12" data-astro-cid-lrjilxhm> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-lrjilxhm>
Soalan Lazim
</h2> <p class="text-xl text-gray-600" data-astro-cid-lrjilxhm>
Semua yang anda perlu tahu tentang pembiayaan sewa beli
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-lrjilxhm></div> </div> <div class="space-y-4" data-astro-cid-lrjilxhm> ${faqs.map((faq, index) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer, "isOpen": index === 0, "data-astro-cid-lrjilxhm": true })}`)} </div> <div class="mt-10 text-center" data-astro-cid-lrjilxhm> <p class="text-gray-600 mb-6" data-astro-cid-lrjilxhm>
Ada lebih banyak soalan? Pakar pembiayaan kami sedia membantu.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-lrjilxhm> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Hubungi Sekarang", "link": "tel:+60175700889", "variant": "primary", "icon": "phone", "data-astro-cid-lrjilxhm": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp Kami", "link": "https://wa.me/60175700889", "variant": "accent", "icon": "whatsapp", "data-astro-cid-lrjilxhm": true })} </div> </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-r from-primary via-secondary to-accent text-white" data-astro-cid-lrjilxhm> <div class="container-custom" data-astro-cid-lrjilxhm> <div class="max-w-4xl mx-auto text-center" data-astro-cid-lrjilxhm> <h2 class="text-3xl md:text-4xl font-bold mb-6" data-astro-cid-lrjilxhm>
Bersedia Untuk Mendapatkan Peralatan Anda?
</h2> <p class="text-xl text-white/90 mb-8 leading-relaxed" data-astro-cid-lrjilxhm>
Sertai 500+ perniagaan Malaysia yang mempercayai Ing Heng Credit untuk keperluan pembiayaan peralatan mereka. Dapatkan kelulusan dengan cepat dengan kadar kelulusan yang terkemuka dalam industri.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" data-astro-cid-lrjilxhm> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-lrjilxhm> <div class="text-4xl font-bold mb-2" data-astro-cid-lrjilxhm>Pantas</div> <div class="text-white/90" data-astro-cid-lrjilxhm>Kelulusan</div> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-lrjilxhm> <div class="text-4xl font-bold mb-2" data-astro-cid-lrjilxhm>500+</div> <div class="text-white/90" data-astro-cid-lrjilxhm>Pelanggan Gembira</div> </div> </div> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-lrjilxhm> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Mohon Sekarang", "link": "/ms/contact", "variant": "accent", "size": "large", "data-astro-cid-lrjilxhm": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp: 017-570 0889", "link": "https://wa.me/60175700889", "variant": "outline-white", "size": "large", "icon": "whatsapp", "data-astro-cid-lrjilxhm": true })} </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-lrjilxhm> <div class="container-custom" data-astro-cid-lrjilxhm> <div class="max-w-3xl mx-auto" data-astro-cid-lrjilxhm> <div class="text-center mb-12" data-astro-cid-lrjilxhm> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-lrjilxhm>
Dapatkan Sebut Harga Percuma Hari Ini
</h2> <p class="text-xl text-gray-600" data-astro-cid-lrjilxhm>
Isi borang di bawah dan pakar pembiayaan kami akan menghubungi anda dengan segera
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-lrjilxhm></div> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang, "data-astro-cid-lrjilxhm": true })} </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/services/hire-purchase.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/services/hire-purchase.astro";
const $$url = "/ms/services/hire-purchase";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HirePurchase,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
