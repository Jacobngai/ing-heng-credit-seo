import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, u as unescapeHTML, e as renderScript, a as renderTemplate } from './astro/server_CFtfKdet.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://ingheng-credit.vercel.app");
const $$FAQItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQItem;
  const {
    question,
    answer,
    id = `faq-${Math.random().toString(36).substr(2, 9)}`,
    isOpen = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white border-3 border-[#2D1810] rounded-lg overflow-hidden shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all" data-faq-item> <!-- Question Button --> <button type="button" class="w-full px-6 py-5 text-left bg-white hover:bg-[#F5F1EC] focus:outline-none focus:ring-3 focus:ring-[#8B6F47] focus:ring-inset transition-colors" style="min-height: 64px;"${addAttribute(isOpen, "aria-expanded")}${addAttribute(id, "aria-controls")} data-faq-button> <div class="flex items-center justify-between gap-4"> <h3 class="text-lg md:text-xl font-black uppercase text-[#8B6F47] tracking-tight flex-1"> ${question} </h3> <div class="flex-shrink-0 w-10 h-10 bg-[#D4A574] border-2 border-[#2D1810] rounded flex items-center justify-center"> <svg class="w-6 h-6 text-[#2D1810] transition-transform duration-300" data-faq-icon fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3" aria-hidden="true"> <path stroke-linecap="square" stroke-linejoin="miter" d="M19 9l-7 7-7-7"></path> </svg> </div> </div> </button> <!-- Answer Content --> <div${addAttribute(id, "id")} class="overflow-hidden transition-all duration-300 ease-in-out"${addAttribute(isOpen ? "max-height: 2000px;" : "max-height: 0;", "style")} data-faq-content role="region"${addAttribute(`${id}-button`, "aria-labelledby")}> <div class="px-6 pb-6 pt-2 border-t-2 border-[#D4A574] bg-[#F5F5DC]"> <div class="prose prose-lg max-w-none"> <p class="text-base md:text-lg leading-relaxed text-[#4F3E29] font-medium">${unescapeHTML(answer)}</p> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/FAQItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/FAQItem.astro", void 0);

export { $$FAQItem as $ };
