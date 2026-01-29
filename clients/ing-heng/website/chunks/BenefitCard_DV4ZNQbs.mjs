import { b as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_CFtfKdet.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                                           */

const $$Astro = createAstro("https://ingheng-credit.vercel.app");
const $$BenefitCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BenefitCard;
  const {
    title,
    description,
    icon
  } = Astro2.props;
  const icons = {
    clock: '<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    percentage: '<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>',
    calendar: '<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
    users: '<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',
    shield: '<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
    lightning: '<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
    default: '<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>'
  };
  const iconHtml = icon && icons[icon] ? icons[icon] : icons.default;
  return renderTemplate`${maybeRenderHead()}<div class="benefit-card text-center p-6 bg-white group" data-astro-cid-2ttvycp3>  <div class="icon-wrapper inline-flex items-center justify-center w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300" data-astro-cid-2ttvycp3> <div data-astro-cid-2ttvycp3>${unescapeHTML(iconHtml)}</div> </div>  <h3 class="text-xl font-bold text-brown-dark mb-3 group-hover:text-bronze transition-colors" style="font-family: 'Bebas Neue', sans-serif;" data-astro-cid-2ttvycp3> ${title} </h3>  <p class="text-gray-600 leading-relaxed" data-astro-cid-2ttvycp3> ${description} </p> </div> `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/BenefitCard.astro", void 0);

export { $$BenefitCard as $ };
