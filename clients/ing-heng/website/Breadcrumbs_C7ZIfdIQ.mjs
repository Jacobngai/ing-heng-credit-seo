import { b as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML, r as renderComponent, F as Fragment, d as addAttribute, m as maybeRenderHead } from './astro/server_CFtfKdet.mjs';
import 'piccolore';
import { d as generateBreadcrumbs } from './BaseLayout_BSmrehMn.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://ingheng-credit.vercel.app");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items } = Astro2.props;
  const breadcrumbSchema = generateBreadcrumbs(
    items.map((item) => ({
      name: item.label,
      url: item.href
    }))
  );
  return renderTemplate(_a || (_a = __template(["", '<nav aria-label="Breadcrumb" class="py-4"> <ol class="flex items-center space-x-2 text-sm">  <li> <a', ' class="text-gray-500 hover:text-primary transition-colors" aria-label="Home"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path> </svg> </a> </li>  ', ' </ol> </nav> <!-- Schema.org Breadcrumb JSON-LD --> <script type="application/ld+json">', "<\/script>"])), maybeRenderHead(), addAttribute(items[0]?.href || "/", "href"), items.slice(1).map((item, index) => {
    const isLast = index === items.length - 2;
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <li aria-hidden="true"> <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </li> <li> ${isLast ? renderTemplate`<span class="font-medium text-gray-900" aria-current="page"> ${item.label} </span>` : renderTemplate`<a${addAttribute(item.href, "href")} class="text-gray-500 hover:text-primary transition-colors"> ${item.label} </a>`} </li> ` })}`;
  }), unescapeHTML(JSON.stringify(breadcrumbSchema)));
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
