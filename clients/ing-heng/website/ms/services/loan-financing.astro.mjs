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
import { $ as $$Calculator } from '../../../chunks/Calculator_BS1M0nbC.mjs';
import { $ as $$StructuredData } from '../../../chunks/StructuredData_BEy59xv7.mjs';
/* empty css                                                */
export { renderers } from '../../../renderers.mjs';

const $$LoanFinancing = createComponent(($$result, $$props, $$slots) => {
  const lang = "ms";
  const title = "Pembiayaan Pinjaman Perniagaan Malaysia | Pinjaman Peralatan PKS";
  const description = "Pinjaman perniagaan pantas untuk pembelian peralatan di Malaysia. Modal kerja, pembiayaan peralatan & pinjaman pengembangan dengan kadar kompetitif. Pemprosesan cepat. Mohon sekarang!";
  const keywords = ["pinjaman perniagaan Malaysia", "pembiayaan PKS", "pinjaman peralatan Malaysia", "pinjaman modal kerja", "pinjaman pengembangan perniagaan", "pembiayaan peralatan komersial", "kredit perniagaan Malaysia", "kelulusan pinjaman pantas"];
  const breadcrumbItems = [
    { label: "Laman Utama", href: "/ms" },
    { label: "Perkhidmatan", href: "/ms/services" },
    { label: "Pembiayaan Pinjaman", href: "/ms/services/loan-financing" }
  ];
  const faqs = [
    {
      question: "Apakah jenis-jenis pinjaman perniagaan yang Tuan/Puan tawarkan?",
      answer: "Kami menawarkan tiga jenis pinjaman perniagaan utama: Pinjaman Pembiayaan Peralatan (untuk pembelian jentera dan kenderaan), Pinjaman Modal Kerja (untuk operasi harian dan aliran tunai), dan Pinjaman Pengembangan Perniagaan (untuk inisiatif pertumbuhan). Setiap jenis pinjaman disertakan dengan terma fleksibel antara 12 hingga 60 bulan dan kadar faedah 8-18% setahun (tertakluk kepada penilaian kredit)."
    },
    {
      question: "Apakah syarat kelayakan untuk memohon pinjaman perniagaan?",
      answer: "Untuk layak memohon pinjaman perniagaan, syarikat Tuan/Puan mestilah didaftarkan di Malaysia (Sdn Bhd, Enterprise, atau Milikan Tunggal), beroperasi sekurang-kurangnya 6 bulan, dan mempunyai pendapatan atau hasil yang boleh disahkan. Kami memerlukan dokumentasi asas termasuk pendaftaran SSM, penyata bank (6 bulan), IC/pasport pengarah, dan penyata kewangan (jika ada). Kami mengekalkan kadar kelulusan yang tinggi."
    },
    {
      question: "Berapa lama masa yang diperlukan untuk kelulusan dan pengeluaran pinjaman?",
      answer: "Kami memproses permohonan pinjaman dengan cepat dan memberikan keputusan kelulusan yang pantas bagi kebanyakan kes. Setelah diluluskan, dana boleh dikeluarkan dalam masa 3-5 hari bekerja. Proses kami yang diperkemas direka khusus untuk PKS Malaysia yang memerlukan akses pantas kepada modal tanpa prosedur bank yang berlarutan."
    },
    {
      question: "Berapakah kadar faedah yang dikenakan untuk pinjaman perniagaan?",
      answer: "Kadar faedah pinjaman perniagaan kami ialah 8-18% setahun (tertakluk kepada penilaian kredit) dan berbeza berdasarkan jumlah pinjaman, tempoh bayaran balik, profil kredit perniagaan, dan cagaran yang disediakan. Kami bekerjasama dengan pelbagai rakan kewangan untuk mendapatkan kadar paling kompetitif bagi situasi khusus Tuan/Puan. Semua kadar dan yuran didedahkan secara telus sebelum Tuan/Puan membuat komitmen."
    },
    {
      question: "Adakah saya perlu menyediakan cagaran untuk pinjaman perniagaan?",
      answer: "Keperluan cagaran bergantung kepada jenis pinjaman dan jumlah pinjaman. Pinjaman pembiayaan peralatan menggunakan peralatan itu sendiri sebagai cagaran. Untuk pinjaman modal kerja dan pengembangan, kami mungkin memerlukan aset perniagaan, harta tanah, atau jaminan peribadi. Walau bagaimanapun, kami menawarkan pilihan cagaran yang fleksibel dan boleh bekerjasama dengan pelbagai pengaturan keselamatan yang sesuai dengan keadaan Tuan/Puan."
    },
    {
      question: "Bolehkah syarikat permulaan atau perniagaan baru memohon pinjaman?",
      answer: "Ya! Walaupun perniagaan yang telah mantap mempunyai kelebihan, kami memang membiayai syarikat permulaan dan perniagaan yang lebih baru (minimum 6 bulan operasi). Untuk syarikat yang lebih baru, kami mungkin memerlukan bayaran pendahuluan yang lebih tinggi, jaminan peribadi, atau dokumentasi tambahan yang menunjukkan daya maju perniagaan. Pakar kami akan bekerjasama dengan Tuan/Puan untuk mencari penyelesaian pembiayaan yang sesuai."
    },
    {
      question: "Berapakah jumlah pinjaman maksimum yang boleh saya pinjam?",
      answer: "Jumlah pinjaman berkisar dari RM 50,000 hingga RM 5,000,000 bergantung kepada keperluan perniagaan, kapasiti kewangan, dan jenis pinjaman Tuan/Puan. Pembiayaan peralatan biasanya meliputi 70-90% daripada nilai peralatan, manakala pinjaman modal kerja berdasarkan hasil bulanan dan keperluan operasi Tuan/Puan. Hubungi kami untuk penilaian tersuai."
    },
    {
      question: "Bolehkah saya menggunakan pinjaman untuk pelbagai tujuan?",
      answer: "Ya, pinjaman perniagaan kami boleh distrukturkan untuk pelbagai tujuan. Sebagai contoh, Tuan/Puan boleh menggabungkan pembelian peralatan dengan keperluan modal kerja dalam satu pakej pinjaman. Kami menawarkan penyelesaian pembiayaan fleksibel yang disesuaikan dengan keperluan perniagaan lengkap Tuan/Puan berbanding pinjaman tujuan tunggal yang tegar."
    },
    {
      question: "Apa yang perlu dilakukan jika perniagaan saya menghadapi kesulitan kewangan?",
      answer: "Kami memahami cabaran perniagaan dan turun naik aliran tunai. Jika Tuan/Puan menjangkakan kesukaran pembayaran, sila hubungi kami dengan segera. Kami menawarkan penstrukturan semula pembayaran, pelepasan pembayaran sementara, dan pengaturan penyelesaian lain. Komunikasi awal membolehkan kami membantu Tuan/Puan mengekalkan operasi perniagaan sambil menguruskan kewajipan pinjaman secara bertanggungjawab."
    },
    {
      question: "Bagaimana cara untuk memohon pinjaman perniagaan?",
      answer: "Hanya hubungi kami di talian 017-570 0889, WhatsApp kami, atau isi borang hubungan dalam talian. Pakar pembiayaan perniagaan kami akan membincangkan keperluan khusus Tuan/Puan, menerangkan pilihan pinjaman, dan membimbing Tuan/Puan melalui proses permohonan. Kami menjadikan pembiayaan perniagaan mudah diakses dengan kertas kerja minimum dan kecekapan maksimum."
    }
  ];
  const servicePageSchema = generateServicePageSchema({
    serviceName: "Perkhidmatan Pembiayaan Pinjaman Perniagaan",
    description: "Penyelesaian pinjaman perniagaan komprehensif termasuk pembiayaan peralatan, pinjaman modal kerja, dan pembiayaan pengembangan perniagaan untuk PKS Malaysia",
    serviceType: "Pembiayaan Pinjaman Perniagaan",
    minRate: "8.00",
    maxRate: "18.00",
    locale: "ms"
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords, "ogType": "website", "data-astro-cid-vahnnoib": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": servicePageSchema, "data-astro-cid-vahnnoib": true })}  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema, "data-astro-cid-vahnnoib": true })}  ${maybeRenderHead()}<div class="container-custom py-4" data-astro-cid-vahnnoib> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-vahnnoib": true })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Pembiayaan Pinjaman Perniagaan untuk Peralatan & Pertumbuhan", "subtitle": "Kembangkan perniagaan Tuan/Puan dengan pembiayaan pantas dan fleksibel. Pinjaman peralatan, modal kerja, dan pembiayaan pengembangan dengan kelulusan pantas dan pemprosesan cepat. Dapatkan sebut harga percuma hari ini!", "ctaText": "Mohon Pinjaman", "ctaLink": "/ms/contact", "ctaSecondaryText": "WhatsApp Kami", "ctaSecondaryLink": "https://wa.me/60175700889", "lang": lang, "trustSignals": ["Kelulusan Pantas", "Proses Pantas", "Pinjaman RM 50K-5M"], "data-astro-cid-vahnnoib": true })}  <section class="section-padding bg-gray-50" data-astro-cid-vahnnoib> <div class="container-custom" data-astro-cid-vahnnoib> <div class="max-w-4xl mx-auto" data-astro-cid-vahnnoib> <div class="text-center mb-12" data-astro-cid-vahnnoib> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>
Penyelesaian Pembiayaan Pinjaman Perniagaan untuk PKS Malaysia
</h2> <div class="w-20 h-1 bg-accent mx-auto mb-6" data-astro-cid-vahnnoib></div> </div> <div class="prose prose-lg max-w-none" data-astro-cid-vahnnoib> <p class="text-gray-700 leading-relaxed mb-6" data-astro-cid-vahnnoib>
Pembiayaan pinjaman perniagaan menyediakan PKS Malaysia dengan modal yang diperlukan untuk memperoleh peralatan, menguruskan aliran tunai, dan mengembangkan operasi. Tidak seperti pinjaman bank tradisional yang mengambil masa berminggu-minggu atau berbulan-bulan, penyelesaian pembiayaan perniagaan khusus kami direka untuk kelajuan dan fleksibiliti—sesuai untuk perniagaan pembinaan, logistik, dan industri yang memerlukan akses pantas kepada dana.
</p> <p class="text-gray-700 leading-relaxed mb-6" data-astro-cid-vahnnoib>
Sama ada Tuan/Puan membeli jengkaut baru, mengembangkan armada lori, menaik taraf forklift gudang, atau memerlukan modal kerja untuk menguruskan aliran tunai bermusim, pembiayaan pinjaman perniagaan kami akan memberikan dana kepada Tuan/Puan dalam masa 3-5 hari dengan kadar faedah kompetitif bermula dari 6.5% setahun.
</p> <div class="bg-white p-6 rounded-lg border-l-4 border-primary shadow-[2px_2px_0_#2D1810]" data-astro-cid-vahnnoib> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-vahnnoib>Mengapa Memilih Pinjaman Perniagaan Berbanding Pembiayaan Tradisional?</h3> <ul class="space-y-3 text-gray-700" data-astro-cid-vahnnoib> <li data-astro-cid-vahnnoib><strong data-astro-cid-vahnnoib>Kelulusan Lebih Pantas:</strong> Pemprosesan cepat berbanding 2-4 minggu di bank</li> <li data-astro-cid-vahnnoib><strong data-astro-cid-vahnnoib>Kadar Kelulusan Lebih Tinggi:</strong> Kadar kejayaan yang tinggi dengan rangkaian pemberi pinjaman kami</li> <li data-astro-cid-vahnnoib><strong data-astro-cid-vahnnoib>Keperluan Fleksibel:</strong> Kami bekerjasama dengan perniagaan baru dan pelbagai profil kredit</li> <li data-astro-cid-vahnnoib><strong data-astro-cid-vahnnoib>Pelbagai Tujuan:</strong> Gabungkan pembiayaan peralatan dengan modal kerja dalam satu pinjaman</li> <li data-astro-cid-vahnnoib><strong data-astro-cid-vahnnoib>Kadar Kompetitif:</strong> Akses kepada pelbagai pembiaya memastikan syarat terbaik</li> <li data-astro-cid-vahnnoib><strong data-astro-cid-vahnnoib>Terma Tersuai:</strong> Jadual bayaran balik diselaraskan dengan aliran tunai perniagaan Tuan/Puan</li> </ul> </div> </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-vahnnoib> <div class="container-custom" data-astro-cid-vahnnoib> <div class="text-center mb-12" data-astro-cid-vahnnoib> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>
Produk Pinjaman Perniagaan Kami
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-vahnnoib>
Penyelesaian pembiayaan fleksibel disesuaikan dengan keperluan perniagaan Tuan/Puan
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-vahnnoib></div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-vahnnoib> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow border-t-4 border-primary" data-astro-cid-vahnnoib> <div class="text-primary text-5xl mb-4" data-astro-cid-vahnnoib>🚜</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>Pinjaman Pembiayaan Peralatan</h3> <p class="text-gray-600 mb-6" data-astro-cid-vahnnoib>
Beli peralatan pembinaan, kenderaan logistik, atau jentera industri dengan pinjaman yang meliputi 70-90% daripada nilai peralatan.
</p> <ul class="text-gray-700 space-y-2 mb-6" data-astro-cid-vahnnoib> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Jengkaut, lori, forklift
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Peralatan baru & terpakai (sehingga 10 tahun)
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Tempoh: 12-60 bulan
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Peralatan sebagai cagaran
</li> </ul> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Mohon Pinjaman Peralatan", "link": "/ms/contact", "variant": "primary", "size": "medium", "data-astro-cid-vahnnoib": true })} </div> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow border-t-4 border-secondary" data-astro-cid-vahnnoib> <div class="text-secondary text-5xl mb-4" data-astro-cid-vahnnoib>💰</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>Pinjaman Modal Kerja</h3> <p class="text-gray-600 mb-6" data-astro-cid-vahnnoib>
Uruskan operasi harian, bayar pembekal, tampung gaji, atau lancarkan jurang aliran tunai bermusim dengan modal kerja yang fleksibel.
</p> <ul class="text-gray-700 space-y-2 mb-6" data-astro-cid-vahnnoib> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Penyelesaian aliran tunai pantas
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Penggunaan dana yang fleksibel
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Tempoh: 12-36 bulan
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Penilaian berasaskan hasil
</li> </ul> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Mohon Modal Kerja", "link": "/ms/contact", "variant": "secondary", "size": "medium", "data-astro-cid-vahnnoib": true })} </div> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow border-t-4 border-accent" data-astro-cid-vahnnoib> <div class="text-accent text-5xl mb-4" data-astro-cid-vahnnoib>📈</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>Pinjaman Pengembangan Perniagaan</h3> <p class="text-gray-600 mb-6" data-astro-cid-vahnnoib>
Biayai inisiatif pertumbuhan termasuk lokasi baru, peralatan tambahan, pengembangan kakitangan, atau projek pembangunan pasaran.
</p> <ul class="text-gray-700 space-y-2 mb-6" data-astro-cid-vahnnoib> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Penyelesaian pembiayaan pertumbuhan
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Jumlah pinjaman yang lebih besar
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Tempoh: 24-60 bulan
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Kadar pengembangan kompetitif
</li> </ul> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Mohon Pinjaman Pengembangan", "link": "/ms/contact", "variant": "accent", "size": "medium", "data-astro-cid-vahnnoib": true })} </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-vahnnoib> <div class="container-custom" data-astro-cid-vahnnoib> <div class="text-center mb-12" data-astro-cid-vahnnoib> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>
Mengapa Memilih Ing Heng Credit untuk Pinjaman Perniagaan?
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-vahnnoib>
Pembiayaan pantas dan fleksibel dibina untuk PKS Malaysia
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-vahnnoib></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-vahnnoib> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "lightning", "title": "Kelulusan Pantas", "description": "Proses pantas permohonan Tuan/Puan dengan keputusan kelulusan yang cepat. Tiada tempoh menunggu bank yang panjang.", "data-astro-cid-vahnnoib": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "percentage", "title": "Kadar Faedah 8-18%", "description": "Kadar faedah 8-18% setahun (tertakluk kepada penilaian kredit). Kami dapatkan syarat terbaik melalui rangkaian pemberi pinjaman kami.", "data-astro-cid-vahnnoib": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "calendar", "title": "Tempoh 12-60 Bulan", "description": "Tempoh bayaran balik fleksibel diselaraskan dengan aliran tunai dan rancangan pertumbuhan perniagaan Tuan/Puan.", "data-astro-cid-vahnnoib": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "users", "title": "Perkhidmatan Berbilang Bahasa", "description": "Dapatkan sokongan dalam Bahasa Inggeris, Mandarin, dan Bahasa Malaysia untuk kemudahan Tuan/Puan.", "data-astro-cid-vahnnoib": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "default", "title": "Pinjaman RM 50K - 5M", "description": "Jumlah pinjaman berskala dari RM 50,000 hingga RM 5,000,000 berdasarkan keperluan Tuan/Puan.", "data-astro-cid-vahnnoib": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "default", "title": "Cagaran Fleksibel", "description": "Pelbagai pilihan keselamatan termasuk peralatan, harta tanah, atau jaminan peribadi.", "data-astro-cid-vahnnoib": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "clock", "title": "Pengeluaran 3-5 Hari", "description": "Dana dikeluarkan dalam masa 3-5 hari bekerja selepas kelulusan. Dapatkan modal bila Tuan/Puan memerlukannya.", "data-astro-cid-vahnnoib": true })} </div> </div> </section>  <section class="section-padding" data-astro-cid-vahnnoib> <div class="container-custom" data-astro-cid-vahnnoib> <div class="text-center mb-12" data-astro-cid-vahnnoib> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>
Proses Permohonan Mudah 3 Langkah
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-vahnnoib>
Dapatkan pinjaman perniagaan Tuan/Puan diluluskan dan dibiayai dalam beberapa hari sahaja
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-vahnnoib></div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-astro-cid-vahnnoib> <div class="text-center" data-astro-cid-vahnnoib> <div class="w-24 h-24 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-[6px_6px_0_#2D1810]" data-astro-cid-vahnnoib>
1
</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>Hantar Permohonan</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-vahnnoib>
Hubungi kami melalui telefon, WhatsApp, atau borang dalam talian. Berikan maklumat perniagaan asas dan keperluan pinjaman. Pakar kami akan membimbing Tuan/Puan melalui dokumentasi.
</p> </div> <div class="text-center" data-astro-cid-vahnnoib> <div class="w-24 h-24 bg-gradient-to-br from-secondary to-accent text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-[6px_6px_0_#2D1810]" data-astro-cid-vahnnoib>
2
</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>Diluluskan Pantas</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-vahnnoib>
Kami semak permohonan Tuan/Puan dan hantar kepada rangkaian pembiaya kami. Terima keputusan kelulusan dengan cepat dengan terma pinjaman dan kadar terperinci.
</p> </div> <div class="text-center" data-astro-cid-vahnnoib> <div class="w-24 h-24 bg-gradient-to-br from-accent to-primary text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-[6px_6px_0_#2D1810]" data-astro-cid-vahnnoib>
3
</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>Terima Dana dalam 3-5 Hari</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-vahnnoib>
Tandatangan perjanjian pinjaman, lengkapkan dokumentasi akhir, dan dana akan dikeluarkan ke akaun Tuan/Puan. Mula gunakan modal untuk mengembangkan perniagaan Tuan/Puan dengan segera!
</p> </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-br from-primary to-secondary text-white" data-astro-cid-vahnnoib> <div class="container-custom" data-astro-cid-vahnnoib> <div class="max-w-4xl mx-auto" data-astro-cid-vahnnoib> <div class="text-center mb-12" data-astro-cid-vahnnoib> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-vahnnoib>
Kelayakan & Keperluan
</h2> <p class="text-xl text-white/90" data-astro-cid-vahnnoib>
Dokumentasi ringkas untuk kelulusan pinjaman perniagaan pantas
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-vahnnoib></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10" data-astro-cid-vahnnoib> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-vahnnoib> <h3 class="text-2xl font-bold mb-4" data-astro-cid-vahnnoib>Keperluan Asas</h3> <ul class="space-y-3 text-white/90" data-astro-cid-vahnnoib> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Perniagaan berdaftar di Malaysia (minimum 6 bulan operasi)
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Pendaftaran SSM yang sah (Sdn Bhd, Enterprise, atau Milikan Tunggal)
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Pendapatan atau hasil perniagaan yang boleh disahkan
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Rekod kredit yang bersih (fleksibel untuk sesetengah kes)
</li> </ul> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-vahnnoib> <h3 class="text-2xl font-bold mb-4" data-astro-cid-vahnnoib>Dokumen yang Diperlukan</h3> <ul class="space-y-3 text-white/90" data-astro-cid-vahnnoib> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Pendaftaran SSM syarikat (Borang 9 & 49)
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Penyata bank syarikat 6 bulan terkini
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Salinan IC/Pasport pengarah
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Penyata kewangan (jika ada)
</li> <li class="flex items-start" data-astro-cid-vahnnoib> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vahnnoib> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-vahnnoib></path> </svg>
Rancangan perniagaan/cadangan (untuk pinjaman pengembangan)
</li> </ul> </div> </div> <div class="text-center" data-astro-cid-vahnnoib> <p class="text-white/90 mb-6" data-astro-cid-vahnnoib>
Tidak mempunyai semua dokumen? Tidak mengapa! Pasukan kami akan membantu Tuan/Puan menyediakan apa yang diperlukan.
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Mula Permohonan Sekarang", "link": "/ms/contact", "variant": "accent", "size": "large", "data-astro-cid-vahnnoib": true })} </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-vahnnoib> <div class="container-custom" data-astro-cid-vahnnoib> <div class="max-w-2xl mx-auto" data-astro-cid-vahnnoib> <div class="text-center mb-12" data-astro-cid-vahnnoib> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>
Kira Bayaran Pinjaman Perniagaan Anda
</h2> <p class="text-xl text-gray-600" data-astro-cid-vahnnoib>
Anggarkan bayaran bulanan untuk pinjaman peralatan atau perniagaan Tuan/Puan
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-vahnnoib></div> </div> ${renderComponent($$result2, "Calculator", $$Calculator, { "lang": lang, "equipmentType": "Pinjaman Perniagaan", "defaultPrice": 2e5, "data-astro-cid-vahnnoib": true })} </div> </div> </section>  <section class="section-padding" data-astro-cid-vahnnoib> <div class="container-custom" data-astro-cid-vahnnoib> <div class="max-w-4xl mx-auto" data-astro-cid-vahnnoib> <div class="text-center mb-12" data-astro-cid-vahnnoib> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>
Soalan Lazim
</h2> <p class="text-xl text-gray-600" data-astro-cid-vahnnoib>
Segala yang perlu Tuan/Puan ketahui tentang pembiayaan pinjaman perniagaan
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-vahnnoib></div> </div> <div class="space-y-4" data-astro-cid-vahnnoib> ${faqs.map((faq, index) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer, "isOpen": index === 0, "data-astro-cid-vahnnoib": true })}`)} </div> <div class="mt-10 text-center" data-astro-cid-vahnnoib> <p class="text-gray-600 mb-6" data-astro-cid-vahnnoib>
Ada soalan lain? Pakar pembiayaan perniagaan kami bersedia membantu Tuan/Puan.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-vahnnoib> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Hubungi: 017-570 0889", "link": "tel:+60175700889", "variant": "primary", "icon": "phone", "data-astro-cid-vahnnoib": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp Kami", "link": "https://wa.me/60175700889", "variant": "accent", "icon": "whatsapp", "data-astro-cid-vahnnoib": true })} </div> </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-vahnnoib> <div class="container-custom" data-astro-cid-vahnnoib> <div class="text-center mb-12" data-astro-cid-vahnnoib> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>
Perkhidmatan Pembiayaan Berkaitan
</h2> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-vahnnoib></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" data-astro-cid-vahnnoib> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-vahnnoib> <h3 class="text-2xl font-bold text-primary mb-3" data-astro-cid-vahnnoib>Pembiayaan Sewa Beli</h3> <p class="text-gray-600 mb-4" data-astro-cid-vahnnoib>
Miliki peralatan Tuan/Puan melalui ansuran bulanan yang berpatutan. Sesuai untuk jengkaut, lori, dan forklift dengan tempoh fleksibel 12-60 bulan.
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Ketahui Tentang Sewa Beli", "link": "/ms/services/hire-purchase", "variant": "primary", "data-astro-cid-vahnnoib": true })} </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-vahnnoib> <h3 class="text-2xl font-bold text-primary mb-3" data-astro-cid-vahnnoib>Insurans Peralatan</h3> <p class="text-gray-600 mb-4" data-astro-cid-vahnnoib>
Lindungi pelaburan peralatan berharga Tuan/Puan dengan perlindungan insurans komprehensif. Dapatkan ketenangan fikiran untuk jentera dan kenderaan Tuan/Puan.
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Ketahui Tentang Insurans", "link": "/ms/services/insurance", "variant": "primary", "data-astro-cid-vahnnoib": true })} </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-r from-primary via-secondary to-accent text-white" data-astro-cid-vahnnoib> <div class="container-custom" data-astro-cid-vahnnoib> <div class="max-w-4xl mx-auto text-center" data-astro-cid-vahnnoib> <h2 class="text-3xl md:text-4xl font-bold mb-6" data-astro-cid-vahnnoib>
Bersedia untuk Mengembangkan Perniagaan dengan Pinjaman?
</h2> <p class="text-xl text-white/90 mb-8 leading-relaxed" data-astro-cid-vahnnoib>
Sertai ratusan PKS Malaysia yang mempercayai Ing Heng Credit untuk pembiayaan perniagaan yang pantas dan fleksibel. Diluluskan dengan cepat dan dibiayai dalam masa 3-5 hari!
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" data-astro-cid-vahnnoib> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-vahnnoib> <div class="text-4xl font-bold mb-2" data-astro-cid-vahnnoib>Pantas</div> <div class="text-white/90" data-astro-cid-vahnnoib>Kelulusan</div> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-vahnnoib> <div class="text-4xl font-bold mb-2" data-astro-cid-vahnnoib>8-18%</div> <div class="text-white/90" data-astro-cid-vahnnoib>Kadar Faedah</div> </div> </div> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-vahnnoib> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Mohon Pinjaman Perniagaan", "link": "/ms/contact", "variant": "accent", "size": "large", "data-astro-cid-vahnnoib": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp: 017-570 0889", "link": "https://wa.me/60175700889", "variant": "outline-white", "size": "large", "icon": "whatsapp", "data-astro-cid-vahnnoib": true })} </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-vahnnoib> <div class="container-custom" data-astro-cid-vahnnoib> <div class="max-w-3xl mx-auto" data-astro-cid-vahnnoib> <div class="text-center mb-12" data-astro-cid-vahnnoib> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-vahnnoib>
Dapatkan Sebut Harga Pinjaman Percuma
</h2> <p class="text-xl text-gray-600" data-astro-cid-vahnnoib>
Isi borang dan pakar kami akan menghubungi Tuan/Puan dengan segera
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-vahnnoib></div> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang, "data-astro-cid-vahnnoib": true })} </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/services/loan-financing.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/services/loan-financing.astro";
const $$url = "/ms/services/loan-financing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LoanFinancing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
