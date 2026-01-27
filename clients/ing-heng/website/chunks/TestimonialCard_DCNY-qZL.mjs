import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_CFtfKdet.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://ingheng-credit.vercel.app");
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const {
    name,
    company,
    location,
    testimonial,
    rating = 5,
    image
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-[6px_6px_0_#2D1810] p-6 hover:shadow-[12px_12px_0_#2D1810] transition-shadow duration-300"> <!-- Rating Stars --> <div class="flex items-center space-x-1 mb-4"> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(`w-5 h-5 ${i < rating ? "text-[#D4A574]" : "text-gray-300"}`, "class")} fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <!-- Testimonial Text --> <blockquote class="text-gray-700 italic mb-6 leading-relaxed">
"${testimonial}"
</blockquote> <!-- Author Info --> <div class="flex items-center space-x-4 pt-4 border-t border-gray-100"> ${image ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="w-12 h-12 rounded-full object-cover" loading="lazy">` : renderTemplate`<div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg"> ${name.charAt(0)} </div>`} <div> <div class="font-semibold text-primary">${name}</div> ${company && renderTemplate`<div class="text-sm text-gray-600">${company}</div>`} ${location && renderTemplate`<div class="text-xs text-gray-500">${location}</div>`} </div> </div> </div>`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/TestimonialCard.astro", void 0);

export { $$TestimonialCard as $ };
