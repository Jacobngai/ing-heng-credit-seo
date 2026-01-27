import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, e as renderScript, a as renderTemplate } from './astro/server_CFtfKdet.mjs';
import 'piccolore';
import 'clsx';
import { f as formatCurrency } from './Footer_BoPJ3uP5.mjs';
/* empty css                              */

const $$Astro = createAstro("https://ingheng-credit.vercel.app");
const $$Calculator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Calculator;
  const {
    lang,
    equipmentType = "Equipment",
    defaultPrice = 1e5,
    minDownPayment = 10
  } = Astro2.props;
  const translations = {
    en: {
      title: "Payment Calculator",
      subtitle: "Estimate your monthly payments",
      equipmentPrice: "Equipment Price",
      downPayment: "Down Payment",
      loanTerm: "Loan Term",
      months: "months",
      interestRate: "Interest Rate",
      perYear: "per year",
      monthlyPayment: "Estimated Monthly Payment",
      totalAmount: "Total Amount Payable",
      applyNow: "Apply Now",
      disclaimer: "This is an estimate. Actual rates may vary based on credit assessment."
    },
    zh: {
      title: "\u4ED8\u6B3E\u8BA1\u7B97\u5668",
      subtitle: "\u4F30\u7B97\u60A8\u7684\u6BCF\u6708\u4ED8\u6B3E",
      equipmentPrice: "\u8BBE\u5907\u4EF7\u683C",
      downPayment: "\u9996\u4ED8\u6B3E",
      loanTerm: "\u8D37\u6B3E\u671F\u9650",
      months: "\u4E2A\u6708",
      interestRate: "\u5229\u7387",
      perYear: "\u6BCF\u5E74",
      monthlyPayment: "\u4F30\u8BA1\u6708\u4F9B",
      totalAmount: "\u603B\u652F\u4ED8\u91D1\u989D",
      applyNow: "\u7ACB\u5373\u7533\u8BF7",
      disclaimer: "\u8FD9\u662F\u4E00\u4E2A\u4F30\u7B97\u503C\u3002\u5B9E\u9645\u5229\u7387\u53EF\u80FD\u6839\u636E\u4FE1\u7528\u8BC4\u4F30\u800C\u6709\u6240\u4E0D\u540C\u3002"
    },
    ms: {
      title: "Kalkulator Pembayaran",
      subtitle: "Anggarkan bayaran bulanan anda",
      equipmentPrice: "Harga Peralatan",
      downPayment: "Bayaran Pendahuluan",
      loanTerm: "Tempoh Pinjaman",
      months: "bulan",
      interestRate: "Kadar Faedah",
      perYear: "setahun",
      monthlyPayment: "Anggaran Bayaran Bulanan",
      totalAmount: "Jumlah Keseluruhan Bayaran",
      applyNow: "Mohon Sekarang",
      disclaimer: "Ini adalah anggaran. Kadar sebenar mungkin berbeza berdasarkan penilaian kredit."
    }
  };
  const t = translations[lang] || translations["en"];
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow-[8px_8px_0_#2D1810] text-white" data-astro-cid-av4muyj3> <div class="text-center mb-8" data-astro-cid-av4muyj3> <h2 class="text-3xl font-bold mb-2 text-white" data-astro-cid-av4muyj3>${t.title}</h2> <p class="text-white" data-astro-cid-av4muyj3>${t.subtitle}</p> </div> <div class="space-y-6" data-calculator data-astro-cid-av4muyj3> <!-- Equipment Price --> <div data-astro-cid-av4muyj3> <label class="block text-sm font-semibold mb-2" for="equipment-price" data-astro-cid-av4muyj3> ${t.equipmentPrice} </label> <div class="relative" data-astro-cid-av4muyj3> <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 font-medium" data-astro-cid-av4muyj3>RM</span> <input type="number" id="equipment-price" class="w-full pl-14 pr-4 py-3 rounded-lg text-gray-900 font-semibold focus:ring-2 focus:ring-accent"${addAttribute(defaultPrice, "value")} min="10000" max="10000000" step="1000" data-calculator-price data-astro-cid-av4muyj3> </div> </div> <!-- Down Payment Slider --> <div data-astro-cid-av4muyj3> <label class="block text-sm font-semibold mb-2" data-astro-cid-av4muyj3> ${t.downPayment}: <span data-down-payment-percent data-astro-cid-av4muyj3>${minDownPayment}</span>%
        (<span class="font-bold" data-down-payment-amount data-astro-cid-av4muyj3>RM ${formatCurrency(defaultPrice * (minDownPayment / 100), lang).replace("MYR", "").trim()}</span>)
</label> <input type="range" id="down-payment" class="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer accent-accent"${addAttribute(minDownPayment, "min")} max="50" step="5"${addAttribute(minDownPayment, "value")} data-calculator-down-payment${addAttribute(minDownPayment, "data-min-down-payment")} data-astro-cid-av4muyj3> <div class="flex justify-between text-xs mt-1" data-astro-cid-av4muyj3> <span data-astro-cid-av4muyj3>${minDownPayment}%</span> <span data-astro-cid-av4muyj3>50%</span> </div> </div> <!-- Loan Term Slider --> <div data-astro-cid-av4muyj3> <label class="block text-sm font-semibold mb-2" data-astro-cid-av4muyj3> ${t.loanTerm}: <span data-loan-term data-astro-cid-av4muyj3>36</span> ${t.months} </label> <input type="range" id="loan-term" class="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer accent-accent" min="12" max="60" step="12" value="36" data-calculator-term data-astro-cid-av4muyj3> <div class="flex justify-between text-xs mt-1" data-astro-cid-av4muyj3> <span data-astro-cid-av4muyj3>12</span> <span data-astro-cid-av4muyj3>24</span> <span data-astro-cid-av4muyj3>36</span> <span data-astro-cid-av4muyj3>48</span> <span data-astro-cid-av4muyj3>60</span> </div> </div> <!-- Interest Rate (Fixed for display) --> <div data-astro-cid-av4muyj3> <label class="block text-sm font-semibold mb-2" data-astro-cid-av4muyj3> ${t.interestRate}: <span data-interest-rate data-astro-cid-av4muyj3>8.5</span>% ${t.perYear} </label> <div class="text-xs text-gray-200 mt-1" data-astro-cid-av4muyj3> ${t.disclaimer} </div> </div> <!-- Results --> <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8 space-y-4" data-astro-cid-av4muyj3> <div class="flex justify-between items-center border-b border-white/20 pb-3" data-astro-cid-av4muyj3> <span class="text-sm" data-astro-cid-av4muyj3>${t.monthlyPayment}</span> <span class="text-3xl font-bold text-accent" data-monthly-payment data-astro-cid-av4muyj3>
RM 2,854
</span> </div> <div class="flex justify-between items-center" data-astro-cid-av4muyj3> <span class="text-sm" data-astro-cid-av4muyj3>${t.totalAmount}</span> <span class="text-xl font-semibold" data-total-amount data-astro-cid-av4muyj3>
RM 102,744
</span> </div> </div> <!-- Apply Now CTA --> <a${addAttribute(`https://wa.me/60175700889?text=${encodeURIComponent(`Hi! I'd like to apply for ${equipmentType} financing. Equipment price: RM ${defaultPrice.toLocaleString()}`)}`, "href")} target="_blank" rel="noopener noreferrer" class="btn btn-accent w-full text-center block text-lg font-bold py-4" data-apply-button${addAttribute(equipmentType, "data-equipment-type")} data-astro-cid-av4muyj3> ${t.applyNow} </a> </div> </div> ${renderScript($$result, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/Calculator.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/Calculator.astro", void 0);

export { $$Calculator as $ };
