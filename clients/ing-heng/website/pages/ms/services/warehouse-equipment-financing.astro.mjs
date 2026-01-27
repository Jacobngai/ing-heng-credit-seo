/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { f as generateServicePageSchema, a as generateFAQSchema, $ as $$BaseLayout } from '../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$BenefitCard } from '../../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$FAQItem } from '../../../chunks/FAQItem_CTpbqvJe.mjs';
import { $ as $$ContactForm } from '../../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$StructuredData } from '../../../chunks/StructuredData_BEy59xv7.mjs';
import { C as COMPANY_INFO } from '../../../chunks/Footer_BoPJ3uP5.mjs';
/* empty css                                                               */
export { renderers } from '../../../renderers.mjs';

const $$WarehouseEquipmentFinancing = createComponent(($$result, $$props, $$slots) => {
  const lang = "ms";
  const title = "Pembiayaan Peralatan Gudang Malaysia | Forklift & Pengendalian Bahan | Ing Heng Credit";
  const description = "Pembiayaan peralatan gudang untuk forklift, pallet jack, conveyor & peralatan pengendalian bahan di Malaysia. 0% deposit, 100% pembiayaan tersedia. Kelulusan pantas untuk operasi gudang.";
  const keywords = [
    "pembiayaan peralatan gudang",
    "pembiayaan peralatan gudang malaysia",
    "pembiayaan forklift gudang",
    "pinjaman peralatan pengendalian bahan",
    "pembiayaan automasi gudang",
    "pembiayaan pallet jack malaysia",
    "pembiayaan sistem conveyor",
    "pembiayaan reach truck gudang",
    "beli pajak peralatan gudang",
    "pembiayaan peralatan logistik"
  ];
  const breadcrumbItems = [
    { label: "Halaman Utama", href: "/ms" },
    { label: "Perkhidmatan", href: "/ms/services" },
    { label: "Pembiayaan Peralatan Gudang", href: "/ms/services/warehouse-equipment-financing" }
  ];
  const faqs = [
    {
      question: "Peralatan gudang apa yang boleh anda biayai?",
      answer: "Kami membiayai semua peralatan gudang penting termasuk forklift (elektrik, diesel, LPG), reach truck, pallet jack, stacker, sistem conveyor, rak gudang, peralatan dok pemuatan, scissor lift, sistem pengisihan automatik, dan teknologi pengurusan gudang. Peralatan baru dan terpakai diterima."
    },
    {
      question: "Adakah anda menawarkan 0% deposit untuk pembiayaan peralatan gudang?",
      answer: "Ya! Kami menawarkan 0% deposit dengan 100% pembiayaan tersedia untuk pengendali gudang yang layak (tertakluk kepada terma dan syarat). Ini bermakna tiada bayaran pendahuluan diperlukan untuk forklift, sistem conveyor, atau peralatan gudang lain anda. Gudang anda boleh beroperasi segera tanpa menghabiskan modal kerja."
    },
    {
      question: "Bolehkah anda membiayai peralatan gudang berumur 10+ tahun?",
      answer: "Sudah pasti! Kami membiayai peralatan gudang berumur 10+ tahun, malah peralatan lama dipertimbangkan. Kami menilai keadaan kerja dan daya maju perniagaan, bukan had umur yang sewenang-wenangnya. Banyak forklift dan peralatan gudang berumur 13-15 tahun masih sangat produktif dan boleh dibiayai dengan kami."
    },
    {
      question: "Seberapa pantas pembiayaan peralatan gudang boleh diluluskan?",
      answer: "Kami memberikan kelulusan pantas untuk pembiayaan peralatan gudang. Proses kami yang diperkemas direka untuk pengendali gudang yang memerlukan peralatan dengan pantas untuk puncak musim, penunaian kontrak, atau pengembangan perniagaan. Dokumentasi adalah minimum dan pasukan kami faham corak aliran tunai gudang."
    },
    {
      question: "Adakah anda faham aliran tunai musiman gudang?",
      answer: "Ya! Kami pakar dalam operasi gudang dan faham turun naik musiman, tempoh pemuatan puncak, kitaran kontrak, dan aliran tunai pengurusan inventori. Terma pembayaran kami boleh distruktur untuk memadankan corak hasil gudang anda dan permintaan musiman."
    },
    {
      question: "Bolehkah anda membiayai pakej peralatan gudang yang lengkap?",
      answer: "Sudah pasti! Kami membiayai persediaan gudang lengkap termasuk berbilang forklift, sistem conveyor, rak, dan peralatan automasi sebagai satu pakej menyeluruh. Ini sesuai untuk kemudahan gudang baru atau pengembangan dan naik taraf gudang utama."
    },
    {
      question: "Bagaimana jika forklift sewa saya rosak semasa musim puncak?",
      answer: 'Memiliki peralatan gudang anda menghapuskan pergantungan sewa. Apabila anda membiayai melalui kami, anda mengawal jadual penyelenggaraan, mempunyai pilihan peralatan sandaran, dan tidak pernah menghadapi mimpi buruk syarikat sewa berkata "penggantian terawal adalah minggu depan" semasa tempoh paling sibuk anda.'
    },
    {
      question: "Berapa banyak yang boleh saya jimat berbanding sewa peralatan gudang?",
      answer: "Kebanyakan pengendali gudang jimat 40-60% berbanding yuran sewa jangka panjang. Daripada membayar yuran sewa RM 12,000+ bulanan selama-lamanya, anda boleh miliki peralatan gudang berkualiti dan bina nilai aset. Pembayaran bulanan anda bekerja ke arah pemilikan, bukan memperkaya syarikat sewa."
    },
    {
      question: "Adakah anda membiayai peralatan automasi gudang?",
      answer: "Ya! Kami membiayai automasi gudang moden termasuk kenderaan berpandu automatik (AGV), sistem pengisihan conveyor, perkakasan perisian pengurusan gudang, sistem pengimbasan kod bar, sistem penyimpanan dan pengambilan automatik, dan robotik untuk operasi gudang."
    },
    {
      question: "Dokumen apa yang diperlukan untuk pembiayaan peralatan gudang?",
      answer: "Untuk pengendali gudang, kami perlukan: Pendaftaran syarikat SSM, 6 bulan penyata bank terkini, IC/pasport pengarah, perjanjian pajak gudang atau pemilikan hartanah, sebut harga peralatan, dan bukti kontrak gudang sedia ada atau pangkalan pelanggan. Kami faham dokumentasi perniagaan gudang."
    }
  ];
  const servicePageSchema = generateServicePageSchema({
    serviceName: "Pembiayaan Peralatan Gudang",
    description: "Solusi pembiayaan menyeluruh untuk peralatan gudang termasuk forklift, sistem pengendalian bahan, dan peralatan automasi gudang",
    serviceType: "Pembiayaan Peralatan Gudang",
    minRate: "8.00",
    maxRate: "18.00",
    locale: "ms"
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords, "ogType": "website", "data-astro-cid-aze4zqcu": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": servicePageSchema, "data-astro-cid-aze4zqcu": true })}  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema, "data-astro-cid-aze4zqcu": true })}  ${maybeRenderHead()}<div class="bg-blue-50 border-b-3 border-navy-900" data-astro-cid-aze4zqcu> <div class="container-custom py-4" data-astro-cid-aze4zqcu> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "lang": lang, "data-astro-cid-aze4zqcu": true })} </div> </div>  <section class="hero relative overflow-hidden" data-astro-cid-aze4zqcu> <div class="container-custom relative z-10 py-20" data-astro-cid-aze4zqcu> <div class="max-w-4xl mx-auto text-center text-white" data-astro-cid-aze4zqcu> <h1 class="text-4xl md:text-6xl lg:text-7xl font-display uppercase leading-tight mb-6" data-astro-cid-aze4zqcu>
Pembiayaan Peralatan <span class="text-yellow-400" data-astro-cid-aze4zqcu>Gudang</span> </h1> <div class="text-xl md:text-2xl opacity-90 mb-8" data-astro-cid-aze4zqcu> <p class="mb-4" data-astro-cid-aze4zqcu>Apabila forklift sewa anda rosak semasa pemuatan musim puncak, dan syarikat sewa berkata
<span class="text-yellow-400 font-bold" data-astro-cid-aze4zqcu>"penggantian terawal adalah minggu depan,"</span>
adakah anda merasakan lubang di perut anda kerana tahu pesanan akan tertunda?</p> <p data-astro-cid-aze4zqcu>Apabila anda mengira <span class="text-yellow-400 font-bold" data-astro-cid-aze4zqcu>yuran sewa forklift bulanan RM 12,000,</span>
dan sedar anda boleh memilikinya dengan lebih murah, adakah ia terasa seperti mencurahkan wang ke dalam lubang?</p> </div> <div class="bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg inline-block font-bold text-lg mb-8" data-astro-cid-aze4zqcu>
🏗️ 0% DEPOSIT • 100% PEMBIAYAAN • WALAUPUN PERALATAN 10+ TAHUN DIPERTIMBANGKAN
</div> <div class="flex flex-col sm:flex-row gap-6 justify-center" data-astro-cid-aze4zqcu> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="btn btn-secondary text-xl px-8 py-4" data-astro-cid-aze4zqcu>
WhatsApp: Sebut Harga Segera
</a> <a href="/ms/contact" class="btn btn-outline-white text-xl px-8 py-4" data-astro-cid-aze4zqcu>
Kira Penjimatan Saya
</a> </div> </div> </div> <div class="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400" data-astro-cid-aze4zqcu></div> </section>  <section class="section bg-white" data-astro-cid-aze4zqcu> <div class="container-custom" data-astro-cid-aze4zqcu> <div class="max-w-5xl mx-auto" data-astro-cid-aze4zqcu> <div class="text-center mb-16" data-astro-cid-aze4zqcu> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900" data-astro-cid-aze4zqcu>
Adakah Ini Kedengaran <span class="text-secondary" data-astro-cid-aze4zqcu>Biasa?</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8" data-astro-cid-aze4zqcu></div> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12" data-astro-cid-aze4zqcu> <!-- Pain Point 1 --> <div class="bg-red-50 border-l-8 border-red-500 p-8 shadow-brutal-lg" data-astro-cid-aze4zqcu> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4" data-astro-cid-aze4zqcu>Mimpi Buruk Peralatan Sewa</h3> <div class="text-gray-700 leading-relaxed space-y-4" data-astro-cid-aze4zqcu> <p class="italic" data-astro-cid-aze4zqcu>"Apabila syarikat sewa menelefon pada jam 5 petang berkata 'kami perlukan forklift kembali esok pagi,' 
              dan anda mempunyai tiga kontena tiba pada jam 6 pagi, adakah anda merasakan panik di dada anda kerana tahu 
              operasi gudang anda akan terhenti?"</p> <p class="italic" data-astro-cid-aze4zqcu>"Apabila reach truck sewa anda rosak semasa penghantaran inventori pelanggan terbesar anda, 
              dan kakitangan anda memindahkan pallet secara manual sementara pelanggan menunggu, 
              adakah perut anda jatuh kerana tahu ini boleh merugikan anda kontrak?"</p> </div> </div> <!-- Pain Point 2 --> <div class="bg-red-50 border-l-8 border-red-500 p-8 shadow-brutal-lg" data-astro-cid-aze4zqcu> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4" data-astro-cid-aze4zqcu>Yuran Sewa Bulanan Yang Mengalir</h3> <div class="text-gray-700 leading-relaxed space-y-4" data-astro-cid-aze4zqcu> <p class="italic" data-astro-cid-aze4zqcu>"Apabila anda menulis cek sewa peralatan bulanan RM 12,000+, 
              dan anda berjalan melalui gudang anda kerana tahu anda TIDAK memiliki sebarang peralatan selepas 3 tahun, 
              adakah anda merasakan kekecewaan di rahang anda memikirkan 'Saya sepatutnya sudah memiliki ini sekarang'?"</p> <p class="italic" data-astro-cid-aze4zqcu>"Apabila anda mengira RM 144,000 yang dibelanjakan untuk sewa forklift setiap tahun, 
              dan sedar itu cukup untuk membeli TIGA forklift terpakai berkualiti, 
              adakah bahu anda tegang kerana tahu anda sedang membina perniagaan orang lain?"</p> </div> </div> <!-- Solution Bridge --> <div class="lg:col-span-2 bg-green-50 border-l-8 border-green-500 p-8 shadow-brutal-xl text-center" data-astro-cid-aze4zqcu> <h3 class="text-3xl font-display uppercase text-navy-900 mb-6" data-astro-cid-aze4zqcu>Ada Cara Yang Lebih Baik</h3> <div class="text-xl text-gray-700 mb-6" data-astro-cid-aze4zqcu> <p class="mb-4" data-astro-cid-aze4zqcu><span class="font-bold text-green-700" data-astro-cid-aze4zqcu>Peralatan anda.</span> <span class="font-bold text-green-700" data-astro-cid-aze4zqcu>Jadual anda.</span> <span class="font-bold text-green-700" data-astro-cid-aze4zqcu>Hasil anda.</span></p> <p data-astro-cid-aze4zqcu><span class="font-bold text-green-700" data-astro-cid-aze4zqcu>Bina ekuiti.</span> <span class="font-bold text-green-700" data-astro-cid-aze4zqcu>Simpan keuntungan.</span> <span class="font-bold text-green-700" data-astro-cid-aze4zqcu>Kawal operasi.</span></p> </div> <a href="/ms/equipment/forklift" class="btn btn-primary text-xl px-8 py-4 inline-block" data-astro-cid-aze4zqcu>
Lihat Bagaimana Pembiayaan Peralatan Gudang Berfungsi →
</a> </div> </div> </div> </div> </section>  <section class="section bg-blue-50" data-astro-cid-aze4zqcu> <div class="container-custom" data-astro-cid-aze4zqcu> <div class="text-center mb-16" data-astro-cid-aze4zqcu> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900" data-astro-cid-aze4zqcu>
Peralatan Gudang <span class="text-secondary" data-astro-cid-aze4zqcu>Yang Kami Biayai</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8" data-astro-cid-aze4zqcu></div> <p class="text-gray-700 max-w-4xl mx-auto text-xl" data-astro-cid-aze4zqcu>
Pembiayaan peralatan gudang lengkap untuk pengendalian bahan, penyimpanan, dan sistem automasi
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-aze4zqcu> <!-- Forklifts --> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg hover:shadow-brutal-xl transition-all hover:-translate-y-1" data-astro-cid-aze4zqcu> <div class="bg-secondary border-b-3 border-navy-900 p-6 text-center" data-astro-cid-aze4zqcu> <div class="text-6xl mb-4" data-astro-cid-aze4zqcu>🏗️</div> <h3 class="text-2xl font-display uppercase text-white" data-astro-cid-aze4zqcu>Forklift</h3> <p class="text-white" data-astro-cid-aze4zqcu>Semua Jenis & Kapasiti</p> </div> <div class="p-6" data-astro-cid-aze4zqcu> <ul class="text-gray-700 space-y-2 text-sm" data-astro-cid-aze4zqcu> <li data-astro-cid-aze4zqcu>• Forklift Elektrik (1-8 tan)</li> <li data-astro-cid-aze4zqcu>• Forklift Diesel (1-25 tan)</li> <li data-astro-cid-aze4zqcu>• Forklift LPG (1-15 tan)</li> <li data-astro-cid-aze4zqcu>• Reach Truck (1.5-3 tan)</li> <li data-astro-cid-aze4zqcu>• Order Picker</li> <li data-astro-cid-aze4zqcu>• Stacker Gudang</li> </ul> <a href="/ms/equipment/forklift" class="btn btn-primary w-full mt-6 block text-center" data-astro-cid-aze4zqcu>
Pembiayaan Forklift →
</a> </div> </div> <!-- Material Handling --> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg hover:shadow-brutal-xl transition-all hover:-translate-y-1" data-astro-cid-aze4zqcu> <div class="bg-secondary border-b-3 border-navy-900 p-6 text-center" data-astro-cid-aze4zqcu> <div class="text-6xl mb-4" data-astro-cid-aze4zqcu>📦</div> <h3 class="text-2xl font-display uppercase text-white" data-astro-cid-aze4zqcu>Pengendalian Bahan</h3> <p class="text-white" data-astro-cid-aze4zqcu>Peralatan Bergerak & Angkat</p> </div> <div class="p-6" data-astro-cid-aze4zqcu> <ul class="text-gray-700 space-y-2 text-sm" data-astro-cid-aze4zqcu> <li data-astro-cid-aze4zqcu>• Pallet Jack (Manual & Elektrik)</li> <li data-astro-cid-aze4zqcu>• Hand Stacker</li> <li data-astro-cid-aze4zqcu>• Platform Truck</li> <li data-astro-cid-aze4zqcu>• Drum Handler</li> <li data-astro-cid-aze4zqcu>• Scissor Lift</li> <li data-astro-cid-aze4zqcu>• Dock Leveler</li> </ul> <a href="/ms/services/equipment-financing" class="btn btn-primary w-full mt-6 block text-center" data-astro-cid-aze4zqcu>
Kewangan Pengendalian Bahan →
</a> </div> </div> <!-- Conveyor Systems --> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg hover:shadow-brutal-xl transition-all hover:-translate-y-1" data-astro-cid-aze4zqcu> <div class="bg-secondary border-b-3 border-navy-900 p-6 text-center" data-astro-cid-aze4zqcu> <div class="text-6xl mb-4" data-astro-cid-aze4zqcu>🔄</div> <h3 class="text-2xl font-display uppercase text-white" data-astro-cid-aze4zqcu>Sistem Conveyor</h3> <p class="text-white" data-astro-cid-aze4zqcu>Penyelesaian Aliran Automatik</p> </div> <div class="p-6" data-astro-cid-aze4zqcu> <ul class="text-gray-700 space-y-2 text-sm" data-astro-cid-aze4zqcu> <li data-astro-cid-aze4zqcu>• Belt Conveyor</li> <li data-astro-cid-aze4zqcu>• Roller Conveyor</li> <li data-astro-cid-aze4zqcu>• Sistem Pengisihan</li> <li data-astro-cid-aze4zqcu>• Kenderaan Berpandu Automatik</li> <li data-astro-cid-aze4zqcu>• Pneumatic Conveyor</li> <li data-astro-cid-aze4zqcu>• Sistem Pemuatan/Pemunggahan</li> </ul> <div class="btn btn-primary w-full mt-6 flex items-center justify-center cursor-default" data-astro-cid-aze4zqcu>
Kewangan Automasi Tersedia
</div> </div> </div> <!-- Storage Systems --> <div class="bg-white border-3 border-navy-900 shadow-brutal-lg hover:shadow-brutal-xl transition-all hover:-translate-y-1" data-astro-cid-aze4zqcu> <div class="bg-secondary border-b-3 border-navy-900 p-6 text-center" data-astro-cid-aze4zqcu> <div class="text-6xl mb-4" data-astro-cid-aze4zqcu>🏪</div> <h3 class="text-2xl font-display uppercase text-white" data-astro-cid-aze4zqcu>Sistem Penyimpanan</h3> <p class="text-white" data-astro-cid-aze4zqcu>Rak & Organisasi</p> </div> <div class="p-6" data-astro-cid-aze4zqcu> <ul class="text-gray-700 space-y-2 text-sm" data-astro-cid-aze4zqcu> <li data-astro-cid-aze4zqcu>• Sistem Rak Pallet</li> <li data-astro-cid-aze4zqcu>• Drive-in Racking</li> <li data-astro-cid-aze4zqcu>• Cantilever Racking</li> <li data-astro-cid-aze4zqcu>• Penyimpanan/Pengambilan Automatik</li> <li data-astro-cid-aze4zqcu>• Lantai Mezzanine</li> <li data-astro-cid-aze4zqcu>• Rak Gudang</li> </ul> <div class="btn btn-primary w-full mt-6 flex items-center justify-center cursor-default" data-astro-cid-aze4zqcu>
Kewangan Sistem Lengkap
</div> </div> </div> </div> </div> </section>  <section class="section bg-white" data-astro-cid-aze4zqcu> <div class="container-custom" data-astro-cid-aze4zqcu> <div class="text-center mb-16" data-astro-cid-aze4zqcu> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900" data-astro-cid-aze4zqcu>
Mengapa Pilih <span class="text-secondary" data-astro-cid-aze4zqcu>Pembiayaan Peralatan Gudang</span> Kami?
</h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8" data-astro-cid-aze4zqcu></div> <p class="text-gray-700 max-w-4xl mx-auto text-xl" data-astro-cid-aze4zqcu>
Pembiayaan khusus direka untuk operasi gudang dan perniagaan pengendalian bahan
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-aze4zqcu> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "percentage", "title": "0% Deposit Diperlukan", "description": "Tiada bayaran pendahuluan diperlukan. Biayai 100% nilai peralatan gudang anda. Mula operasi segera tanpa menghabiskan modal kerja.", "data-astro-cid-aze4zqcu": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "clock", "title": "Walaupun Peralatan 10+ Tahun", "description": "Kami membiayai peralatan gudang berumur 10+ tahun, malah peralatan lama dipertimbangkan. Forklift dan peralatan pengendalian bahan terpakai berkualiti diterima.", "data-astro-cid-aze4zqcu": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "lightning", "title": "Proses Kelulusan Pantas", "description": "Kelulusan pantas direka untuk pengendali gudang. Kami faham puncak musiman dan keperluan penggantian peralatan segera.", "data-astro-cid-aze4zqcu": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "calendar", "title": "Fleksibiliti Pembayaran Musiman", "description": "Terma pembayaran yang sepadan dengan corak aliran tunai gudang. Kami faham musim puncak, kitaran kontrak, dan pengurusan inventori.", "data-astro-cid-aze4zqcu": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "users", "title": "Kepakaran Gudang", "description": "Pasukan kami faham operasi gudang, aliran kerja pengendalian bahan, dan keperluan peralatan logistik.", "data-astro-cid-aze4zqcu": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "shield", "title": "Pakej Peralatan Lengkap", "description": "Biayai persediaan gudang lengkap termasuk berbilang forklift, conveyor, rak, dan automasi sebagai satu pakej menyeluruh.", "data-astro-cid-aze4zqcu": true })} </div> </div> </section>  <section class="section bg-yellow-400" data-astro-cid-aze4zqcu> <div class="container-custom" data-astro-cid-aze4zqcu> <div class="max-w-4xl mx-auto text-center text-navy-900" data-astro-cid-aze4zqcu> <h2 class="text-4xl md:text-5xl font-display uppercase mb-8" data-astro-cid-aze4zqcu>
Henti Kehilangan <span class="text-white" data-astro-cid-aze4zqcu>Yuran Sewa</span> </h2> <div class="bg-white border-3 border-navy-900 shadow-brutal-xl p-8 mb-8" data-astro-cid-aze4zqcu> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left" data-astro-cid-aze4zqcu> <div data-astro-cid-aze4zqcu> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4" data-astro-cid-aze4zqcu>Semakan Realiti Sewa</h3> <div class="space-y-4 text-gray-700" data-astro-cid-aze4zqcu> <div class="flex justify-between" data-astro-cid-aze4zqcu> <span data-astro-cid-aze4zqcu>Sewa forklift bulanan:</span> <span class="font-bold text-red-600" data-astro-cid-aze4zqcu>RM 12,000</span> </div> <div class="flex justify-between" data-astro-cid-aze4zqcu> <span data-astro-cid-aze4zqcu>Kos sewa tahunan:</span> <span class="font-bold text-red-600" data-astro-cid-aze4zqcu>RM 144,000</span> </div> <div class="flex justify-between" data-astro-cid-aze4zqcu> <span data-astro-cid-aze4zqcu>Jumlah sewa 3 tahun:</span> <span class="font-bold text-red-600" data-astro-cid-aze4zqcu>RM 432,000</span> </div> <div class="flex justify-between border-t pt-2" data-astro-cid-aze4zqcu> <span class="font-bold" data-astro-cid-aze4zqcu>Pemilikan peralatan selepas 3 tahun:</span> <span class="font-bold text-red-600" data-astro-cid-aze4zqcu>RM 0</span> </div> </div> </div> <div data-astro-cid-aze4zqcu> <h3 class="text-2xl font-display uppercase text-navy-900 mb-4" data-astro-cid-aze4zqcu>Realiti Pembiayaan</h3> <div class="space-y-4 text-gray-700" data-astro-cid-aze4zqcu> <div class="flex justify-between" data-astro-cid-aze4zqcu> <span data-astro-cid-aze4zqcu>Pembayaran pembiayaan bulanan:</span> <span class="font-bold text-green-600" data-astro-cid-aze4zqcu>RM 8,500</span> </div> <div class="flex justify-between" data-astro-cid-aze4zqcu> <span data-astro-cid-aze4zqcu>Kos pembiayaan tahunan:</span> <span class="font-bold text-green-600" data-astro-cid-aze4zqcu>RM 102,000</span> </div> <div class="flex justify-between" data-astro-cid-aze4zqcu> <span data-astro-cid-aze4zqcu>Jumlah pembiayaan 3 tahun:</span> <span class="font-bold text-green-600" data-astro-cid-aze4zqcu>RM 306,000</span> </div> <div class="flex justify-between border-t pt-2" data-astro-cid-aze4zqcu> <span class="font-bold" data-astro-cid-aze4zqcu>Pemilikan peralatan selepas 3 tahun:</span> <span class="font-bold text-green-600" data-astro-cid-aze4zqcu>RM 200,000+</span> </div> </div> </div> </div> <div class="mt-8 p-6 bg-green-100 border-l-8 border-green-500" data-astro-cid-aze4zqcu> <div class="text-2xl font-bold text-green-800 mb-2" data-astro-cid-aze4zqcu>
Penjimatan Anda: RM 126,000 lebih 3 tahun + RM 200,000 pemilikan aset
</div> <p class="text-green-700" data-astro-cid-aze4zqcu>Daripada memperkaya syarikat sewa, anda membina ekuiti dalam aset gudang produktif.</p> </div> </div> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="btn btn-primary text-xl px-8 py-4" data-astro-cid-aze4zqcu>
Kira Penjimatan Peralatan Gudang Saya →
</a> </div> </div> </section>  <section class="section bg-blue-50" data-astro-cid-aze4zqcu> <div class="container-custom" data-astro-cid-aze4zqcu> <div class="text-center mb-16" data-astro-cid-aze4zqcu> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900" data-astro-cid-aze4zqcu>
Proses Permohonan <span class="text-secondary" data-astro-cid-aze4zqcu>Yang Mudah</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8" data-astro-cid-aze4zqcu></div> <p class="text-gray-700 max-w-3xl mx-auto text-xl" data-astro-cid-aze4zqcu>
Dapatkan pembiayaan peralatan gudang anda diluluskan dalam 4 langkah mudah
</p> </div> <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto" data-astro-cid-aze4zqcu> <div class="text-center" data-astro-cid-aze4zqcu> <div class="bg-yellow-400 border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md" data-astro-cid-aze4zqcu> <span class="text-5xl font-display text-navy-900" data-astro-cid-aze4zqcu>1</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3" data-astro-cid-aze4zqcu>Penilaian Peralatan</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-aze4zqcu>
Kenal pasti keperluan peralatan gudang anda: forklift, conveyor, sistem pengendalian bahan
</p> </div> <div class="text-center" data-astro-cid-aze4zqcu> <div class="bg-yellow-400 border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md" data-astro-cid-aze4zqcu> <span class="text-5xl font-display text-navy-900" data-astro-cid-aze4zqcu>2</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3" data-astro-cid-aze4zqcu>Permohonan Pantas</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-aze4zqcu>
Hantar dokumentasi perniagaan gudang dan sebut harga peralatan melalui WhatsApp atau dalam talian
</p> </div> <div class="text-center" data-astro-cid-aze4zqcu> <div class="bg-yellow-400 border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md" data-astro-cid-aze4zqcu> <span class="text-5xl font-display text-navy-900" data-astro-cid-aze4zqcu>3</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3" data-astro-cid-aze4zqcu>Kelulusan Pantas</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-aze4zqcu>
Dapatkan kelulusan dengan pantas dengan kepakaran pembiayaan yang fokus gudang kami
</p> </div> <div class="text-center" data-astro-cid-aze4zqcu> <div class="bg-yellow-400 border-3 border-navy-900 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-brutal-md" data-astro-cid-aze4zqcu> <span class="text-5xl font-display text-navy-900" data-astro-cid-aze4zqcu>4</span> </div> <h3 class="text-xl font-display uppercase text-navy-900 mb-3" data-astro-cid-aze4zqcu>Penghantaran Peralatan</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-aze4zqcu>
Terima peralatan gudang anda dan mula bina pemilikan sambil beroperasi
</p> </div> </div> </div> </section>  <section class="section bg-white" data-astro-cid-aze4zqcu> <div class="container-custom" data-astro-cid-aze4zqcu> <div class="max-w-4xl mx-auto" data-astro-cid-aze4zqcu> <div class="text-center mb-16" data-astro-cid-aze4zqcu> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6 text-navy-900" data-astro-cid-aze4zqcu>
Soalan Lazim <span class="text-secondary" data-astro-cid-aze4zqcu>Pembiayaan Peralatan Gudang</span> </h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8" data-astro-cid-aze4zqcu></div> <p class="text-gray-700 text-xl" data-astro-cid-aze4zqcu>
Semua yang perlu anda ketahui tentang pembiayaan peralatan gudang
</p> </div> <div class="space-y-4" data-astro-cid-aze4zqcu> ${faqs.map((faq, index) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer, "isOpen": index === 0, "data-astro-cid-aze4zqcu": true })}`)} </div> <div class="mt-16 text-center" data-astro-cid-aze4zqcu> <h3 class="text-2xl font-display uppercase text-navy-900 mb-6" data-astro-cid-aze4zqcu>
Bersedia Untuk Miliki Peralatan Gudang Anda?
</h3> <p class="text-gray-600 mb-8 text-lg" data-astro-cid-aze4zqcu>
Henti bayar yuran sewa selama-lamanya. Mula bina ekuiti peralatan gudang hari ini.
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center" data-astro-cid-aze4zqcu> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} class="btn btn-secondary text-xl px-8 py-4" data-astro-cid-aze4zqcu>
WhatsApp: ${COMPANY_INFO.phone.display} </a> <a href="/ms/contact" class="btn btn-primary text-xl px-8 py-4" data-astro-cid-aze4zqcu>
Dapatkan Sebut Harga Peralatan Gudang Percuma
</a> </div> </div> </div> </div> </section>  <section class="section bg-secondary text-white" data-astro-cid-aze4zqcu> <div class="container-custom" data-astro-cid-aze4zqcu> <div class="text-center mb-12" data-astro-cid-aze4zqcu> <h2 class="text-4xl md:text-5xl font-display uppercase mb-6" data-astro-cid-aze4zqcu> <span class="text-yellow-400" data-astro-cid-aze4zqcu>Pembiayaan Peralatan</span> Berkaitan
</h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8" data-astro-cid-aze4zqcu></div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" data-astro-cid-aze4zqcu> <div class="text-center" data-astro-cid-aze4zqcu> <div class="text-6xl mb-4" data-astro-cid-aze4zqcu>🏗️</div> <h3 class="text-xl font-display uppercase mb-3" data-astro-cid-aze4zqcu>Pembiayaan Forklift</h3> <p class="text-white/90 mb-4" data-astro-cid-aze4zqcu>Pembiayaan forklift khusus untuk semua kapasiti dan jenis gudang</p> <a href="/ms/equipment/forklift" class="btn btn-outline-white" data-astro-cid-aze4zqcu>Ketahui Lanjut →</a> </div> <div class="text-center" data-astro-cid-aze4zqcu> <div class="text-6xl mb-4" data-astro-cid-aze4zqcu>🚚</div> <h3 class="text-xl font-display uppercase mb-3" data-astro-cid-aze4zqcu>Pembiayaan Peralatan</h3> <p class="text-white/90 mb-4" data-astro-cid-aze4zqcu>Pembiayaan peralatan lengkap untuk peralatan pembinaan dan logistik</p> <a href="/ms/services/equipment-financing" class="btn btn-outline-white" data-astro-cid-aze4zqcu>Ketahui Lanjut →</a> </div> <div class="text-center" data-astro-cid-aze4zqcu> <div class="text-6xl mb-4" data-astro-cid-aze4zqcu>🏗️</div> <h3 class="text-xl font-display uppercase mb-3" data-astro-cid-aze4zqcu>Pembiayaan Kren</h3> <p class="text-white/90 mb-4" data-astro-cid-aze4zqcu>Pembiayaan kren mudah alih dan menara untuk gudang dan pembinaan</p> <a href="/ms/equipment/crane" class="btn btn-outline-white" data-astro-cid-aze4zqcu>Ketahui Lanjut →</a> </div> </div> </div> </section>  <section class="section bg-white" data-astro-cid-aze4zqcu> <div class="container-custom max-w-4xl" data-astro-cid-aze4zqcu> <div class="text-center mb-16" data-astro-cid-aze4zqcu> <h2 class="text-5xl md:text-6xl font-display uppercase mb-6 text-navy-900" data-astro-cid-aze4zqcu>
Dapatkan Sebut Harga <span class="text-secondary" data-astro-cid-aze4zqcu>Peralatan Gudang</span> Percuma Anda
</h2> <div class="w-24 h-2 bg-yellow-400 mx-auto mb-8" data-astro-cid-aze4zqcu></div> <p class="text-gray-700 text-xl" data-astro-cid-aze4zqcu>
Isi borang di bawah dan pakar pembiayaan peralatan gudang kami akan menghubungi anda segera
</p> </div> <div class="bg-blue-50 border-3 border-navy-900 shadow-brutal-xl p-8 md:p-12" data-astro-cid-aze4zqcu> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang, "data-astro-cid-aze4zqcu": true })} </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/services/warehouse-equipment-financing.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/services/warehouse-equipment-financing.astro";
const $$url = "/ms/services/warehouse-equipment-financing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WarehouseEquipmentFinancing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
