import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_CFtfKdet.mjs';
import 'piccolore';
import 'clsx';
import { t } from './Footer_BoPJ3uP5.mjs';

const $$Astro = createAstro("https://ingheng-credit.vercel.app");
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const {
    name,
    description,
    features = [],
    link,
    lang,
    image,
    badge
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card h-full flex flex-col group">  ${image && renderTemplate`<div class="relative aspect-[4/3] overflow-hidden"> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy"> ${badge && renderTemplate`<span class="absolute top-4 right-4 badge badge-accent"> ${badge} </span>`} </div>`} <div class="card-body flex flex-col flex-grow">  <h3 class="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors"> ${name} </h3>  <p class="text-gray-600 mb-4 leading-relaxed"> ${description} </p>  ${features.length > 0 && renderTemplate`<ul class="space-y-2 mb-6 flex-grow"> ${features.map((feature) => renderTemplate`<li class="flex items-start space-x-2"> <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-sm text-gray-700">${feature}</span> </li>`)} </ul>`}  ${link && renderTemplate`<a${addAttribute(link, "href")} class="btn btn-primary w-full text-center"> ${t("common.getStarted", lang)} </a>`} </div> </div>`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/ProductCard.astro", void 0);

export { $$ProductCard as $ };
