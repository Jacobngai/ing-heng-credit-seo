/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { a as generateFAQSchema, $ as $$BaseLayout, b as generateOrganizationSchema } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$CTAButton } from '../../chunks/CTAButton_D2NuWLbx.mjs';
import { $ as $$FAQItem } from '../../chunks/FAQItem_CTpbqvJe.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$StructuredData } from '../../chunks/StructuredData_BEy59xv7.mjs';
/* empty css                                                            */
export { renderers } from '../../renderers.mjs';

const $$HirePurchaseFinanceCompany = createComponent(($$result, $$props, $$slots) => {
  const lang = "ms";
  const title = "Syarikat Pembiayaan Hire Purchase Terkemuka Malaysia | Pakar Pembiayaan Aset | Ing Heng Credit";
  const description = "Syarikat pembiayaan hire purchase terunggul Malaysia yang pakar dalam pembiayaan pemilikan aset. Bina ekuiti melalui pemilikan peralatan vs kos sewa. Kelulusan pantas, 0% deposit tersedia.";
  const keywords = [
    "syarikat pembiayaan hire purchase",
    "syarikat pembiayaan aset",
    "pakar hire purchase peralatan",
    "pembiayaan pemilikan aset",
    "syarikat hire purchase Malaysia",
    "pembiayaan pemilikan peralatan",
    "pembinaan aset melalui peralatan",
    "pakar hire purchase Malaysia",
    "syarikat kewangan peralatan",
    "faedah pemilikan aset"
  ];
  const breadcrumbItems = [
    { label: "Laman Utama", href: "/ms" },
    { label: "Syarikat Pembiayaan Hire Purchase", href: "/ms/hire-purchase-finance-company" }
  ];
  const faqs = [
    {
      question: "Apa yang menjadikan Ing Heng syarikat pembiayaan hire purchase terkemuka?",
      answer: "Sebagai syarikat pembiayaan hire purchase yang khusus, kami menumpukan sepenuhnya pada pembiayaan pemilikan aset untuk perniagaan Malaysia. Tidak seperti pemberi pinjaman tradisional, kami memahami bahawa pemilikan peralatan membina kekayaan jangka panjang. Kepakaran kami dalam pembiayaan aset, digabungkan dengan terma fleksibel dan kadar kompetitif, menjadikan kami syarikat pembiayaan hire purchase pilihan untuk perniagaan yang ingin memiliki daripada menyewa peralatan mereka."
    },
    {
      question: "Bagaimana syarikat pembiayaan hire purchase berbeza daripada syarikat pajakan?",
      answer: "Sebagai syarikat pembiayaan hire purchase, kami memudahkan pemilikan aset melalui pelan pembayaran berstruktur. Tidak seperti syarikat pajakan yang mengekalkan pemilikan peralatan, syarikat pembiayaan hire purchase membantu anda membina ekuiti dengan setiap pembayaran. Pada akhir tempoh pembayaran anda, anda memiliki aset sepenuhnya - mencipta nilai jangka panjang untuk perniagaan anda daripada perbelanjaan sewa yang berterusan."
    },
    {
      question: "Apakah jenis aset yang syarikat pembiayaan hire purchase anda khususkan?",
      answer: "Syarikat pembiayaan hire purchase kami mengkhususkan diri dalam peralatan pembinaan, kenderaan logistik, dan jentera industri. Kami membiayai ekskavator, bulldozer, lori, forklift, kren, dan aset komersial lain. Kepakaran kami sebagai syarikat pembiayaan hire purchase bermakna kami memahami potensi pendapatan dan keperluan operasi setiap jenis peralatan."
    },
    {
      question: "Mengapa pilih pemilikan aset melalui syarikat pembiayaan hire purchase?",
      answer: "Bekerja dengan syarikat pembiayaan hire purchase bermakna membina ekuiti daripada membayar yuran sewa selamanya. Setiap pembayaran bulanan menyumbang kepada pemilikan akhirnya. Pemilikan aset menyediakan kawalan operasi, kebebasan pengubahsuaian, dan pengekalan nilai jangka panjang. Syarikat pembiayaan hire purchase kami membantu mengubah perbelanjaan peralatan menjadi pelaburan pembinaan kekayaan."
    },
    {
      question: "Apakah kelebihan pemilikan menggunakan syarikat pembiayaan hire purchase?",
      answer: "Syarikat pembiayaan hire purchase membolehkan kawalan operasi segera digabungkan dengan faedah pemilikan. Anda boleh mengubahsuai peralatan mengikut keperluan, beroperasi tanpa sekatan sewa, dan membina ekuiti perniagaan. Pemilikan aset melalui syarikat pembiayaan hire purchase kami menyediakan faedah cukai, nilai jualan semula, dan kebebasan daripada pergantungan sewa."
    },
    {
      question: "Bagaimana syarikat pembiayaan hire purchase anda memastikan kelulusan pantas?",
      answer: "Sebagai syarikat pembiayaan hire purchase berpengalaman, kami telah memperkemas proses kelulusan kami melalui pengetahuan industri yang mendalam dan hubungan pemberi pinjaman yang kuat. Kepakaran kami dalam penilaian aset dan penilaian perniagaan membolehkan keputusan pantas. Syarikat pembiayaan hire purchase kami mengekalkan kadar kelulusan yang sangat baik dengan menumpukan pada daya maju peralatan dan potensi perniagaan daripada sekatan sewenang-wenangnya."
    }
  ];
  const organizationSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords, "ogType": "website", "data-astro-cid-wwqvyql5": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": organizationSchema, "data-astro-cid-wwqvyql5": true })}  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema, "data-astro-cid-wwqvyql5": true })}  ${maybeRenderHead()}<div class="container-custom py-4" data-astro-cid-wwqvyql5> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-wwqvyql5": true })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "Syarikat Pembiayaan Hire Purchase Terkemuka Malaysia", "subtitle": "Pakar Pembiayaan Aset \u2022 Bina Ekuiti Melalui Pemilikan Peralatan \u2022 Tukar Kos Sewa Kepada Pelaburan Pembinaan Kekayaan", "ctaText": "Bina Ekuiti Peralatan Hari Ini", "ctaLink": "/ms/contact", "ctaSecondaryText": "WhatsApp Pakar Aset", "ctaSecondaryLink": "https://wa.me/60175700889", "lang": lang, "trustSignals": ["Pakar Pemilikan Aset", "Fokus Pembinaan Ekuiti", "0% Deposit Tersedia"], "data-astro-cid-wwqvyql5": true })}  <section class="section-padding bg-gray-50" data-astro-cid-wwqvyql5> <div class="container-custom" data-astro-cid-wwqvyql5> <div class="max-w-5xl mx-auto" data-astro-cid-wwqvyql5> <div class="text-center mb-12" data-astro-cid-wwqvyql5> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-wwqvyql5>
Penat Membina Aset Orang Lain?
</h2> <div class="w-20 h-1 bg-accent mx-auto mb-8" data-astro-cid-wwqvyql5></div> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-astro-cid-wwqvyql5> <div data-astro-cid-wwqvyql5> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] border-l-4 border-red-500" data-astro-cid-wwqvyql5> <h3 class="text-2xl font-bold text-primary mb-6" data-astro-cid-wwqvyql5>Perangkap Penyewaan</h3> <div class="space-y-4 text-gray-700" data-astro-cid-wwqvyql5> <p class="leading-relaxed" data-astro-cid-wwqvyql5> <strong data-astro-cid-wwqvyql5>Apabila anda ingin memiliki peralatan tetapi aliran tunai terhad, dan bank menuntut 30% deposit pendahuluan sementara anda memerlukan tunai tersebut untuk operasi, adakah anda berasa terperangkap antara mengembangkan perniagaan dan memelihara modal kerja?</strong> </p> <p class="leading-relaxed" data-astro-cid-wwqvyql5> <strong data-astro-cid-wwqvyql5>Apabila syarikat pajakan menyekat cara anda menggunakan peralatan "mereka", mengehadkan fleksibiliti operasi anda, adakah kehilangan kawalan itu mengecewakan rancangan perniagaan anda?</strong> </p> <p class="leading-relaxed" data-astro-cid-wwqvyql5>
Apabila anda mengira bahawa sewa RM 15,000 bulanan selama 3 tahun bersamaan RM 540,000 - dengan tiada apa-apa untuk ditunjukkan - adakah perut anda jatuh mengetahui wang itu boleh membeli peralatan tersebut?
</p> </div> </div> </div> <div data-astro-cid-wwqvyql5> <div class="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810]" data-astro-cid-wwqvyql5> <h3 class="text-2xl font-bold mb-6" data-astro-cid-wwqvyql5>Penyelesaian Pemilikan</h3> <div class="space-y-4" data-astro-cid-wwqvyql5> <div class="flex items-start" data-astro-cid-wwqvyql5> <div class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0" data-astro-cid-wwqvyql5>1</div> <p data-astro-cid-wwqvyql5><strong data-astro-cid-wwqvyql5>Peralatan Anda.</strong> Kawalan operasi penuh dan kebebasan pengubahsuaian.</p> </div> <div class="flex items-start" data-astro-cid-wwqvyql5> <div class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0" data-astro-cid-wwqvyql5>2</div> <p data-astro-cid-wwqvyql5><strong data-astro-cid-wwqvyql5>Ekuiti Anda.</strong> Bina aset perniagaan dengan setiap pembayaran.</p> </div> <div class="flex items-start" data-astro-cid-wwqvyql5> <div class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0" data-astro-cid-wwqvyql5>3</div> <p data-astro-cid-wwqvyql5><strong data-astro-cid-wwqvyql5>Kekayaan Anda.</strong> Tukar perbelanjaan kepada pulangan pelaburan.</p> </div> </div> </div> </div> </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-wwqvyql5> <div class="container-custom" data-astro-cid-wwqvyql5> <div class="max-w-4xl mx-auto" data-astro-cid-wwqvyql5> <div class="text-center mb-12" data-astro-cid-wwqvyql5> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-wwqvyql5>
Apakah Syarikat Pembiayaan Hire Purchase?
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-wwqvyql5>
Pakar pemilikan aset yang mengubah kos peralatan kepada pelaburan pembinaan kekayaan
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-wwqvyql5></div> </div> <div class="prose prose-lg max-w-none" data-astro-cid-wwqvyql5> <div class="bg-white p-8 rounded-lg shadow-[4px_4px_0_#2D1810] border-l-4 border-primary mb-8" data-astro-cid-wwqvyql5> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-wwqvyql5>Melampaui Peminjaman Tradisional</h3> <p class="text-gray-700 leading-relaxed mb-4" data-astro-cid-wwqvyql5>
Syarikat pembiayaan hire purchase mengkhususkan diri dalam pembiayaan pemilikan aset - membantu perniagaan memperoleh peralatan melalui pelan pembayaran berstruktur yang membawa kepada pemilikan. Tidak seperti syarikat pajakan yang mengekalkan kawalan aset, atau bank dengan kriteria tegar, syarikat pembiayaan hire purchase menumpukan pada potensi pendapatan aset dan pertumbuhan perniagaan yang mereka bolehkan.
</p> <p class="text-gray-700 leading-relaxed" data-astro-cid-wwqvyql5>
Sebagai syarikat pembiayaan hire purchase terkemuka Malaysia, Ing Heng Credit memahami bahawa pemilikan peralatan membina kekayaan perniagaan jangka panjang. Setiap pembayaran menyumbang kepada ekuiti aset, mencipta nilai yang pengaturan sewa tidak dapat sediakan.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-wwqvyql5> <div class="bg-gray-50 p-6 rounded-lg" data-astro-cid-wwqvyql5> <h4 class="text-xl font-bold text-primary mb-3" data-astro-cid-wwqvyql5>Faedah Syarikat Pembiayaan Hire Purchase:</h4> <ul class="space-y-2 text-gray-700" data-astro-cid-wwqvyql5> <li class="flex items-start" data-astro-cid-wwqvyql5> <span class="text-accent font-bold mr-2" data-astro-cid-wwqvyql5>✓</span>
Pemilikan aset melalui pembayaran terurus
</li> <li class="flex items-start" data-astro-cid-wwqvyql5> <span class="text-accent font-bold mr-2" data-astro-cid-wwqvyql5>✓</span>
Pembinaan ekuiti dengan setiap ansuran
</li> <li class="flex items-start" data-astro-cid-wwqvyql5> <span class="text-accent font-bold mr-2" data-astro-cid-wwqvyql5>✓</span>
Kawalan operasi penuh dan kebebasan
</li> <li class="flex items-start" data-astro-cid-wwqvyql5> <span class="text-accent font-bold mr-2" data-astro-cid-wwqvyql5>✓</span>
Fokus penciptaan kekayaan jangka panjang
</li> <li class="flex items-start" data-astro-cid-wwqvyql5> <span class="text-accent font-bold mr-2" data-astro-cid-wwqvyql5>✓</span>
Jadual pembayaran tetap untuk perancangan
</li> </ul> </div> <div class="bg-gray-50 p-6 rounded-lg" data-astro-cid-wwqvyql5> <h4 class="text-xl font-bold text-primary mb-3" data-astro-cid-wwqvyql5>Batasan Pajakan Tradisional:</h4> <ul class="space-y-2 text-gray-700" data-astro-cid-wwqvyql5> <li class="flex items-start" data-astro-cid-wwqvyql5> <span class="text-red-500 font-bold mr-2" data-astro-cid-wwqvyql5>✗</span>
Kos sewa berterusan tanpa ekuiti
</li> <li class="flex items-start" data-astro-cid-wwqvyql5> <span class="text-red-500 font-bold mr-2" data-astro-cid-wwqvyql5>✗</span>
Sekatan penggunaan peralatan
</li> <li class="flex items-start" data-astro-cid-wwqvyql5> <span class="text-red-500 font-bold mr-2" data-astro-cid-wwqvyql5>✗</span>
Tiada pengumpulan nilai aset
</li> <li class="flex items-start" data-astro-cid-wwqvyql5> <span class="text-red-500 font-bold mr-2" data-astro-cid-wwqvyql5>✗</span>
Keperluan dan syarat pemulangan
</li> <li class="flex items-start" data-astro-cid-wwqvyql5> <span class="text-red-500 font-bold mr-2" data-astro-cid-wwqvyql5>✗</span>
Kewajipan pembayaran berterusan
</li> </ul> </div> </div> </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-br from-primary to-secondary text-white" data-astro-cid-wwqvyql5> <div class="container-custom" data-astro-cid-wwqvyql5> <div class="max-w-5xl mx-auto" data-astro-cid-wwqvyql5> <div class="text-center mb-12" data-astro-cid-wwqvyql5> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-wwqvyql5>
Kelebihan Pemilikan Aset
</h2> <p class="text-xl text-white/90 max-w-3xl mx-auto" data-astro-cid-wwqvyql5>
Mengapa pilih pemilikan daripada sewa melalui syarikat pembiayaan hire purchase kami
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-wwqvyql5></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-wwqvyql5> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20" data-astro-cid-wwqvyql5> <div class="text-4xl mb-4" data-astro-cid-wwqvyql5>🏆</div> <h3 class="text-xl font-bold mb-3" data-astro-cid-wwqvyql5>Bina Ekuiti Perniagaan</h3> <p class="text-white/90" data-astro-cid-wwqvyql5>
Tukar kos peralatan bulanan kepada nilai aset. Setiap pembayaran membina ekuiti daripada menghilang dalam perbelanjaan sewa.
</p> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20" data-astro-cid-wwqvyql5> <div class="text-4xl mb-4" data-astro-cid-wwqvyql5>🎯</div> <h3 class="text-xl font-bold mb-3" data-astro-cid-wwqvyql5>Kebebasan Operasi</h3> <p class="text-white/90" data-astro-cid-wwqvyql5>
Ubahsuai, sesuaikan, dan kendalikan peralatan tanpa sekatan syarikat sewa. Peralatan anda, peraturan anda, produktiviti anda.
</p> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20" data-astro-cid-wwqvyql5> <div class="text-4xl mb-4" data-astro-cid-wwqvyql5>📈</div> <h3 class="text-xl font-bold mb-3" data-astro-cid-wwqvyql5>Pengumpulan Kekayaan</h3> <p class="text-white/90" data-astro-cid-wwqvyql5>
Peralatan mengekalkan nilai dan boleh dijual atau digunakan sebagai cagaran. Pemilikan mencipta pilihan yang sewa tidak pernah sediakan.
</p> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20" data-astro-cid-wwqvyql5> <div class="text-4xl mb-4" data-astro-cid-wwqvyql5>⏰</div> <h3 class="text-xl font-bold mb-3" data-astro-cid-wwqvyql5>Jadual Pembayaran Tetap</h3> <p class="text-white/90" data-astro-cid-wwqvyql5>
Pembayaran bulanan boleh diramal dengan tarikh akhir yang jelas. Tiada kenaikan sewa mengejut atau kewajipan pembayaran berterusan.
</p> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20" data-astro-cid-wwqvyql5> <div class="text-4xl mb-4" data-astro-cid-wwqvyql5>💰</div> <h3 class="text-xl font-bold mb-3" data-astro-cid-wwqvyql5>Tiada Pembayaran Belon</h3> <p class="text-white/90" data-astro-cid-wwqvyql5>
Tidak seperti beberapa pilihan pembiayaan, perjanjian hire purchase kami tidak mempunyai pembayaran akhir yang besar. Ansuran yang jelas dan terurus sepanjang tempoh.
</p> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20" data-astro-cid-wwqvyql5> <div class="text-4xl mb-4" data-astro-cid-wwqvyql5>🛡️</div> <h3 class="text-xl font-bold mb-3" data-astro-cid-wwqvyql5>Kelebihan Cukai</h3> <p class="text-white/90" data-astro-cid-wwqvyql5>
Pemilikan aset menyediakan faedah susut nilai dan kemungkinan kelebihan cukai yang pengaturan sewa tidak dapat tawarkan.
</p> </div> </div> <div class="text-center mt-12" data-astro-cid-wwqvyql5> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Mula Bina Ekuiti Aset", "link": "/ms/contact", "variant": "accent", "size": "large", "data-astro-cid-wwqvyql5": true })} </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-wwqvyql5> <div class="container-custom" data-astro-cid-wwqvyql5> <div class="max-w-4xl mx-auto" data-astro-cid-wwqvyql5> <div class="text-center mb-12" data-astro-cid-wwqvyql5> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-wwqvyql5>
Soalan Lazim Syarikat Pembiayaan Hire Purchase
</h2> <p class="text-xl text-gray-600" data-astro-cid-wwqvyql5>
Soalan biasa mengenai pembiayaan pemilikan aset
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-wwqvyql5></div> </div> <div class="space-y-4" data-astro-cid-wwqvyql5> ${faqs.map((faq, index) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer, "isOpen": index === 0, "data-astro-cid-wwqvyql5": true })}`)} </div> <div class="mt-10 text-center" data-astro-cid-wwqvyql5> <p class="text-gray-600 mb-6" data-astro-cid-wwqvyql5>
Bersedia untuk mengubah kos peralatan kepada pelaburan pembinaan aset?
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-wwqvyql5> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "Mula Perjalanan Pemilikan Aset", "link": "/ms/contact", "variant": "primary", "size": "large", "data-astro-cid-wwqvyql5": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp Pakar Aset", "link": "https://wa.me/60175700889", "variant": "accent", "icon": "whatsapp", "size": "large", "data-astro-cid-wwqvyql5": true })} </div> </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-wwqvyql5> <div class="container-custom" data-astro-cid-wwqvyql5> <div class="max-w-3xl mx-auto" data-astro-cid-wwqvyql5> <div class="text-center mb-12" data-astro-cid-wwqvyql5> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-wwqvyql5>
Hubungi Pakar Pemilikan Aset
</h2> <p class="text-xl text-gray-600" data-astro-cid-wwqvyql5>
Bincangkan bagaimana syarikat pembiayaan hire purchase kami boleh membantu anda membina ekuiti peralatan
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-wwqvyql5></div> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang, "data-astro-cid-wwqvyql5": true })} </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/hire-purchase-finance-company.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/hire-purchase-finance-company.astro";
const $$url = "/ms/hire-purchase-finance-company";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HirePurchaseFinanceCompany,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
