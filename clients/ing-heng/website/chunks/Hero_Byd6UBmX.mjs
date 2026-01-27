import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server_CFtfKdet.mjs';
import 'piccolore';
import { $ as $$CTAButton } from './CTAButton_D2NuWLbx.mjs';
/* empty css                         */

const $$Astro = createAstro("https://ingheng-credit.vercel.app");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title,
    subtitle,
    ctaText,
    ctaLink,
    ctaSecondaryText,
    ctaSecondaryLink,
    backgroundImage,
    lang,
    overlay = true,
    trustSignals = []
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative hero overflow-hidden"${addAttribute(backgroundImage ? `background-image: url('${backgroundImage}')` : void 0, "style")} data-astro-cid-bbe6dxrz> <!-- Background Image (if provided) --> ${backgroundImage && renderTemplate`<div class="absolute inset-0 z-0" data-astro-cid-bbe6dxrz> <img${addAttribute(backgroundImage, "src")} alt="" class="w-full h-full object-cover" loading="eager" data-astro-cid-bbe6dxrz> </div>`} <!-- Overlay with Enhanced Dark Gradient for Better Text Contrast --> ${overlay && renderTemplate`<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-bronze/80 to-brown-dark/95 z-10" data-astro-cid-bbe6dxrz></div>`} <!-- Content --> <div class="container-custom relative z-20" data-astro-cid-bbe6dxrz> <div class="max-w-4xl mx-auto text-center" data-astro-cid-bbe6dxrz> <!-- Title --> <h1 class="text-white mb-6 animate-fade-in" data-astro-cid-bbe6dxrz> ${title} </h1> <!-- Subtitle --> <p class="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed animate-fade-in" style="animation-delay: 0.2s;" data-astro-cid-bbe6dxrz> ${subtitle} </p> <!-- CTAs --> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in" style="animation-delay: 0.4s;" data-astro-cid-bbe6dxrz> ${ctaText && ctaLink && renderTemplate`${renderComponent($$result, "CTAButton", $$CTAButton, { "text": ctaText, "link": ctaLink, "variant": "accent", "size": "large", "data-astro-cid-bbe6dxrz": true })}`} ${ctaSecondaryText && ctaSecondaryLink && renderTemplate`${renderComponent($$result, "CTAButton", $$CTAButton, { "text": ctaSecondaryText, "link": ctaSecondaryLink, "variant": "outline-white", "size": "large", "data-astro-cid-bbe6dxrz": true })}`} </div> <!-- Trust Signals --> ${trustSignals && trustSignals.length > 0 && renderTemplate`<div class="flex flex-wrap justify-center gap-6 text-white/90 animate-fade-in" style="animation-delay: 0.6s;" data-astro-cid-bbe6dxrz> ${trustSignals.map((signal) => renderTemplate`<div class="flex items-center space-x-2" data-astro-cid-bbe6dxrz> <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-bbe6dxrz> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-bbe6dxrz></path> </svg> <span class="text-sm font-medium" data-astro-cid-bbe6dxrz>${signal}</span> </div>`)} </div>`} </div> </div> <!-- Scroll Down Indicator (optional) --> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce" data-astro-cid-bbe6dxrz> <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-bbe6dxrz></path> </svg> </div> </section> `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/Hero.astro", void 0);

export { $$Hero as $ };
