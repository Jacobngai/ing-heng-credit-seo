/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { $ as $$BaseLayout, b as generateOrganizationSchema } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Calculator$1 } from '../../chunks/Calculator_BS1M0nbC.mjs';
import { $ as $$BenefitCard } from '../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$StructuredData } from '../../chunks/StructuredData_BEy59xv7.mjs';
import { C as COMPANY_INFO } from '../../chunks/Footer_BoPJ3uP5.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Calculator = createComponent(($$result, $$props, $$slots) => {
  const lang = "ms";
  const pageTitle = "Kalkulator Pembiayaan Peralatan - Anggaran Bayaran Segera | Ing Heng Credit";
  const pageDescription = "Kira pembayaran pembiayaan peralatan anda dengan serta-merta. Kalkulator dalam talian percuma untuk Jengkaut, Lori, Forklift & banyak lagi. Dapatkan anggaran pembayaran bulanan yang tepat dengan syarat fleksibel 12-60 bulan.";
  const keywords = [
    "kalkulator pembiayaan peralatan Malaysia",
    "kalkulator pembayaran sewa beli",
    "kalkulator pinjaman peralatan",
    "kalkulator pembiayaan excavator",
    "kalkulator pembiayaan lorri",
    "kalkulator pembayaran forklift",
    "kalkulator peralatan pembinaan",
    "penganggar pembayaran bulanan"
  ];
  const schema = generateOrganizationSchema();
  const benefits = [
    {
      icon: "calculator",
      title: "Anggaran Serta-merta",
      description: "Dapatkan pengiraan pembayaran bulanan yang tepat dalam masa nyata semasa anda menyesuaikan parameter pembiayaan anda"
    },
    {
      icon: "chart-bar",
      title: "Harga Telus",
      description: "Lihat pecahan lengkap pembayaran anda, kadar faedah, dan jumlah kos tanpa bayaran tersembunyi"
    },
    {
      icon: "adjustments",
      title: "Pilihan Fleksibel",
      description: "Sesuaikan pembayaran awal (0-50%) dan tempoh pinjaman (12-60 bulan) dengan bajet anda"
    },
    {
      icon: "lightning",
      title: "Kelulusan Cepat",
      description: "Sebaik sahaja anda menemui rancangan yang betul, mohon melalui WhatsApp dan dapatkan kelulusan pantas"
    }
  ];
  const tips = [
    {
      title: "Optimumkan Pembayaran Awal Anda",
      description: "Pembayaran awal yang lebih tinggi (20-30%) mengurangkan pembayaran bulanan dan jumlah faedah yang dibayar. Walau bagaimanapun, minimum 0% kami yang fleksibel* memastikan kebolehaksesan untuk kebanyakan perniagaan. (*Tertakluk kepada kelulusan dan terma)"
    },
    {
      title: "Pilih Tempoh yang Tepat",
      description: "Tempoh yang lebih pendek (12-24 bulan) menjimatkan faedah keseluruhan tetapi mempunyai pembayaran bulanan yang lebih tinggi. Tempoh yang lebih lama (48-60 bulan) menawarkan pembayaran bulanan yang lebih rendah tetapi kos keseluruhan yang lebih tinggi."
    },
    {
      title: "Pertimbangkan Aliran Tunai",
      description: "Padankan tempoh pinjaman anda dengan kitaran menjana hasil peralatan anda. Pilih tempoh yang sesuai dengan keupayaan pembayaran bulanan perniagaan anda."
    },
    {
      title: "Faedah Cukai",
      description: "Pembiayaan peralatan menawarkan potongan cukai ke atas pembayaran faedah dan elaun modal yang berpotensi. Berunding dengan akauntan anda untuk memaksimalkan manfaat."
    }
  ];
  const equipmentExamples = [
    {
      name: "Excavator (Komatsu PC200)",
      price: 25e4,
      link: "/ms/equipment/excavator"
    },
    {
      name: "Lorri Komersial (3-Tan)",
      price: 12e4,
      link: "/ms/equipment/lorry"
    },
    {
      name: "Forklift (2.5-Tan)",
      price: 8e4,
      link: "/ms/equipment/forklift"
    },
    {
      name: "Prime Mover (Volvo)",
      price: 35e4,
      link: "/ms/equipment/prime-mover"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website", "data-astro-cid-lp6ab2gi": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": schema, "data-astro-cid-lp6ab2gi": true })}  ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white overflow-hidden" data-astro-cid-lp6ab2gi> <!-- Industrial Pattern Background --> <div class="absolute inset-0 opacity-10" data-astro-cid-lp6ab2gi> <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px);" data-astro-cid-lp6ab2gi></div> </div> <div class="container-custom relative z-10 py-16 md:py-24" data-astro-cid-lp6ab2gi> <div class="max-w-4xl mx-auto text-center" data-astro-cid-lp6ab2gi> <!-- Bold Uppercase Headline (Bebas Neue style) --> <h1 class="text-5xl md:text-7xl font-extrabold uppercase tracking-wider mb-6" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-lp6ab2gi> <span class="text-white" data-astro-cid-lp6ab2gi>Kalkulator Bayaran</span><br data-astro-cid-lp6ab2gi> <span class="text-[#D4A574]" data-astro-cid-lp6ab2gi>Pembiayaan Peralatan</span> </h1> <!-- Industrial Divider --> <div class="flex items-center justify-center gap-4 mb-6" data-astro-cid-lp6ab2gi> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-lp6ab2gi></div> <div class="h-2 w-2 bg-[#D4A574] rotate-45" data-astro-cid-lp6ab2gi></div> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-lp6ab2gi></div> </div> <p class="text-xl md:text-2xl text-white leading-relaxed mb-8" data-astro-cid-lp6ab2gi>
Kira bayaran bulanan anda dengan serta-merta. Sesuaikan pelan pembiayaan anda.<br data-astro-cid-lp6ab2gi> <strong class="text-[#D4A574]" data-astro-cid-lp6ab2gi>Dapatkan anggaran tepat dalam beberapa saat.</strong> </p> <!-- Trust Signals with Industrial Badge Style --> <div class="flex flex-wrap justify-center gap-4 mb-8" data-astro-cid-lp6ab2gi> <div class="bg-blue-950/50 border-2 border-[#D4A574] px-6 py-3 backdrop-blur-sm" data-astro-cid-lp6ab2gi> <div class="text-[#D4A574] font-bold text-sm uppercase tracking-wider" data-astro-cid-lp6ab2gi>KPKT Berlesen</div> </div> <div class="bg-blue-950/50 border-2 border-[#D4A574] px-6 py-3 backdrop-blur-sm" data-astro-cid-lp6ab2gi> <div class="text-[#D4A574] font-bold text-sm uppercase tracking-wider" data-astro-cid-lp6ab2gi>Pemprosesan Pantas</div> </div> <div class="bg-blue-950/50 border-2 border-[#D4A574] px-6 py-3 backdrop-blur-sm" data-astro-cid-lp6ab2gi> <div class="text-[#D4A574] font-bold text-sm uppercase tracking-wider" data-astro-cid-lp6ab2gi>40+ Tahun</div> </div> </div> </div> </div> <!-- Angled Bottom Edge --> <div class="absolute bottom-0 left-0 right-0 h-16 bg-white" style="clip-path: polygon(0 100%, 100% 100%, 100% 0);" data-astro-cid-lp6ab2gi></div> </section>  <section class="section bg-gray-50 -mt-8 relative z-20" data-astro-cid-lp6ab2gi> <div class="container-custom" data-astro-cid-lp6ab2gi> <div class="max-w-4xl mx-auto" data-astro-cid-lp6ab2gi> <!-- Calculator Card with Industrial Border Style --> <div class="bg-white rounded-lg shadow-[8px_8px_0_#2D1810] border-8 border-blue-900 relative" data-astro-cid-lp6ab2gi> <!-- Yellow Corner Accent --> <div class="absolute top-0 left-0 w-20 h-20 bg-[#D4A574] clip-triangle" data-astro-cid-lp6ab2gi></div> <div class="absolute bottom-0 right-0 w-20 h-20 bg-[#D4A574] clip-triangle-br" data-astro-cid-lp6ab2gi></div> <div class="p-8 md:p-12" data-astro-cid-lp6ab2gi> ${renderComponent($$result2, "Calculator", $$Calculator$1, { "lang": lang, "minDownPayment": 0, "data-astro-cid-lp6ab2gi": true })} </div> </div> <!-- Quick Equipment Examples --> <div class="mt-12" data-astro-cid-lp6ab2gi> <h3 class="text-2xl font-bold text-center mb-6 text-gray-900" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-lp6ab2gi>
Contoh Pembiayaan Peralatan Popular
</h3> <div class="grid md:grid-cols-2 gap-4" data-astro-cid-lp6ab2gi> ${equipmentExamples.map((equipment) => renderTemplate`<a${addAttribute(equipment.link, "href")} class="bg-white p-6 rounded-lg border-4 border-blue-900 hover:border-[#D4A574] transition-all hover:shadow-[8px_8px_0_#2D1810] group" data-astro-cid-lp6ab2gi> <div class="flex justify-between items-center" data-astro-cid-lp6ab2gi> <div data-astro-cid-lp6ab2gi> <div class="font-bold text-lg text-gray-900 group-hover:text-blue-900" data-astro-cid-lp6ab2gi>${equipment.name}</div> <div class="text-sm text-gray-600" data-astro-cid-lp6ab2gi>Julat Harga Tipikal</div> </div> <div class="text-right" data-astro-cid-lp6ab2gi> <div class="text-2xl font-bold text-blue-900" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-lp6ab2gi>
RM ${equipment.price.toLocaleString()} </div> </div> </div> </a>`)} </div> </div> </div> </div> </section>  <section class="section bg-white" data-astro-cid-lp6ab2gi> <div class="container-custom" data-astro-cid-lp6ab2gi> <div class="text-center mb-12" data-astro-cid-lp6ab2gi> <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-lp6ab2gi>
Mengapa Menggunakan Kalkulator Kami?
</h2> <div class="flex items-center justify-center gap-4 mb-6" data-astro-cid-lp6ab2gi> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-lp6ab2gi></div> <div class="h-2 w-2 bg-[#D4A574] rotate-45" data-astro-cid-lp6ab2gi></div> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-lp6ab2gi></div> </div> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-lp6ab2gi>
Buat keputusan pembiayaan yang termaklum dengan kalkulator kami yang telus dan mudah digunakan
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" data-astro-cid-lp6ab2gi> ${benefits.map((benefit) => renderTemplate`<div class="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border-4 border-blue-900 hover:border-[#D4A574] transition-all" data-astro-cid-lp6ab2gi> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description, "data-astro-cid-lp6ab2gi": true })} </div>`)} </div> </div> </section>  <section class="section bg-gradient-to-br from-blue-50 to-yellow-50" data-astro-cid-lp6ab2gi> <div class="container-custom" data-astro-cid-lp6ab2gi> <div class="max-w-5xl mx-auto" data-astro-cid-lp6ab2gi> <div class="text-center mb-12" data-astro-cid-lp6ab2gi> <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-lp6ab2gi>
Petua Pembiayaan Pintar
</h2> <div class="flex items-center justify-center gap-4 mb-6" data-astro-cid-lp6ab2gi> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-lp6ab2gi></div> <div class="h-2 w-2 bg-[#D4A574] rotate-45" data-astro-cid-lp6ab2gi></div> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-lp6ab2gi></div> </div> <p class="text-xl text-gray-600" data-astro-cid-lp6ab2gi>
Nasihat pakar untuk memaksimalkan faedah pembiayaan peralatan anda
</p> </div> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-lp6ab2gi> ${tips.map((tip, index) => renderTemplate`<div class="bg-white p-8 rounded-lg border-l-8 border-blue-900 shadow-[6px_6px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-lp6ab2gi> <div class="flex items-start gap-4" data-astro-cid-lp6ab2gi> <div class="flex-shrink-0 w-12 h-12 bg-[#D4A574] flex items-center justify-center font-bold text-2xl text-blue-900" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-lp6ab2gi> ${index + 1} </div> <div data-astro-cid-lp6ab2gi> <h3 class="text-xl font-bold text-blue-900 mb-3" data-astro-cid-lp6ab2gi>${tip.title}</h3> <p class="text-gray-700 leading-relaxed" data-astro-cid-lp6ab2gi>${tip.description}</p> </div> </div> </div>`)} </div> </div> </div> </section>  <section class="section bg-white" data-astro-cid-lp6ab2gi> <div class="container-custom" data-astro-cid-lp6ab2gi> <div class="max-w-5xl mx-auto" data-astro-cid-lp6ab2gi> <div class="text-center mb-12" data-astro-cid-lp6ab2gi> <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-lp6ab2gi>
Daripada Kalkulator hingga Kelulusan
</h2> <div class="flex items-center justify-center gap-4 mb-6" data-astro-cid-lp6ab2gi> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-lp6ab2gi></div> <div class="h-2 w-2 bg-[#D4A574] rotate-45" data-astro-cid-lp6ab2gi></div> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-lp6ab2gi></div> </div> <p class="text-xl text-gray-600" data-astro-cid-lp6ab2gi>
Empat langkah mudah untuk mendapatkan peralatan anda dibiayai
</p> </div> <div class="relative" data-astro-cid-lp6ab2gi> <!-- Connection Line --> <div class="hidden md:block absolute top-24 left-0 right-0 h-1 bg-blue-200" style="top: 4rem;" data-astro-cid-lp6ab2gi></div> <div class="grid md:grid-cols-4 gap-8 relative" data-astro-cid-lp6ab2gi> <div class="text-center" data-astro-cid-lp6ab2gi> <div class="w-24 h-24 bg-blue-900 text-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold border-8 border-white shadow-[8px_8px_0_#2D1810]" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-lp6ab2gi>
1
</div> <h3 class="text-xl font-bold text-blue-900 mb-2" data-astro-cid-lp6ab2gi>Kira</h3> <p class="text-gray-600" data-astro-cid-lp6ab2gi>Gunakan kalkulator kami untuk menganggar pembayaran bulanan</p> </div> <div class="text-center" data-astro-cid-lp6ab2gi> <div class="w-24 h-24 bg-blue-900 text-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold border-8 border-white shadow-[8px_8px_0_#2D1810]" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-lp6ab2gi>
2
</div> <h3 class="text-xl font-bold text-blue-900 mb-2" data-astro-cid-lp6ab2gi>Mohon</h3> <p class="text-gray-600" data-astro-cid-lp6ab2gi>Hantar melalui WhatsApp dengan dokumentasi yang minimal</p> </div> <div class="text-center" data-astro-cid-lp6ab2gi> <div class="w-24 h-24 bg-blue-900 text-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold border-8 border-white shadow-[8px_8px_0_#2D1810]" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-lp6ab2gi>
3
</div> <h3 class="text-xl font-bold text-blue-900 mb-2" data-astro-cid-lp6ab2gi>Dapatkan Kelulusan</h3> <p class="text-gray-600" data-astro-cid-lp6ab2gi>Terima keputusan dengan pantas</p> </div> <div class="text-center" data-astro-cid-lp6ab2gi> <div class="w-24 h-24 bg-[#D4A574] text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold border-8 border-white shadow-[8px_8px_0_#2D1810]" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-lp6ab2gi>
4
</div> <h3 class="text-xl font-bold text-blue-900 mb-2" data-astro-cid-lp6ab2gi>Dapatkan Peralatan</h3> <p class="text-gray-600" data-astro-cid-lp6ab2gi>Mula menggunakan peralatan anda dengan segera</p> </div> </div> </div> </div> </div> </section>  <section class="section bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white relative overflow-hidden" data-astro-cid-lp6ab2gi> <!-- Industrial Pattern Background --> <div class="absolute inset-0 opacity-10" data-astro-cid-lp6ab2gi> <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px);" data-astro-cid-lp6ab2gi></div> </div> <div class="container-custom relative z-10 text-center" data-astro-cid-lp6ab2gi> <h2 class="text-4xl md:text-5xl font-bold mb-6 uppercase" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-lp6ab2gi>
Bersedia Membiayai Peralatan Anda?
</h2> <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white" data-astro-cid-lp6ab2gi>
Temui pelan pembayaran yang sempurna? Mohon sekarang melalui WhatsApp dan dapatkan<br data-astro-cid-lp6ab2gi> <strong class="text-[#D4A574]" data-astro-cid-lp6ab2gi>kelulusan pantas</strong> dengan proses pembiayaan kami yang cekap.
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center mb-8" data-astro-cid-lp6ab2gi> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 bg-[#D4A574] hover:bg-yellow-300 text-blue-900 font-bold px-10 py-5 text-xl uppercase transition-all shadow-[8px_8px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] border-4 border-blue-900" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-lp6ab2gi> <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-lp6ab2gi> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-lp6ab2gi></path> </svg>
Mohon melalui WhatsApp
</a> <a href="/ms/contact" class="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white font-bold px-10 py-5 text-xl uppercase transition-all border-4 border-[#D4A574] hover:border-white" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-lp6ab2gi>
Hubungi Kami
</a> </div> <div class="flex flex-wrap justify-center gap-8 text-sm" data-astro-cid-lp6ab2gi> <div class="flex items-center gap-2" data-astro-cid-lp6ab2gi> <svg class="w-6 h-6 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lp6ab2gi> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-lp6ab2gi></path> </svg> <span data-astro-cid-lp6ab2gi>Kelulusan Pantas</span> </div> <div class="flex items-center gap-2" data-astro-cid-lp6ab2gi> <svg class="w-6 h-6 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lp6ab2gi> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-lp6ab2gi></path> </svg> <span data-astro-cid-lp6ab2gi>KPKT Berlesen</span> </div> <div class="flex items-center gap-2" data-astro-cid-lp6ab2gi> <svg class="w-6 h-6 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-lp6ab2gi> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-lp6ab2gi></path> </svg> <span data-astro-cid-lp6ab2gi>40+ Tahun Pengalaman</span> </div> </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/calculator.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/ms/calculator.astro";
const $$url = "/ms/calculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calculator,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
