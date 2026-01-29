/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { a as generateFAQSchema, $ as $$BaseLayout } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$CTAButton } from '../../chunks/CTAButton_D2NuWLbx.mjs';
import { $ as $$StructuredData } from '../../chunks/StructuredData_BEy59xv7.mjs';
import { C as COMPANY_INFO, S as SITE_CONFIG } from '../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/zh/contact`,
    name: "Ing Heng Credit & Leasing Sdn Bhd",
    alternateName: "\u5174\u5174\u4FE1\u8D37",
    description: "\u9A6C\u6765\u897F\u4E9AKPKT\u6267\u7167\u91D1\u878D\u516C\u53F8\uFF0C\u4F4D\u4E8E\u96EA\u5170\u83AA\u5DF4\u751F\u300224\u5C0F\u65F6\u5FEB\u901F\u6279\u51C6\u6316\u6398\u673A\u3001\u7F57\u91CC\u3001\u53C9\u8F66\u7B49\u5EFA\u7B51\u8BBE\u5907\u878D\u8D44\u3002",
    url: `${SITE_CONFIG.url}/zh/contact`,
    telephone: COMPANY_INFO.phone.international,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.postcode,
      addressCountry: "MY"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "3.0449",
      longitude: "101.4446"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00"
      }
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_INFO.phone.international,
      contactType: "Customer Service",
      areaServed: "MY",
      availableLanguage: ["English", "Mandarin", "Malay"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00"
      }
    },
    sameAs: [COMPANY_INFO.social.facebook],
    hasMap: COMPANY_INFO.address.googleMapsUrl
  };
  const faqItems = [
    {
      question: "\u8BBE\u5907\u878D\u8D44\u6279\u51C6\u9700\u8981\u591A\u957F\u65F6\u95F4\uFF1F",
      answer: "\u5927\u591A\u6570\u7533\u8BF7\u6211\u4EEC\u4F1A\u572824\u5C0F\u65F6\u5185\u7ED9\u4E88\u6279\u51C6\u51B3\u5B9A\u3002\u7D27\u6025\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63D0\u4F9B\u5F53\u5929\u521D\u6B65\u6279\u51C6\u3002\u6211\u4EEC\u7684\u7B80\u5316\u6D41\u7A0B\u6BD4\u4F20\u7EDF\u94F6\u884C\u6240\u9700\u6587\u4EF6\u5C11\u5F88\u591A\u3002"
    },
    {
      question: "\u7533\u8BF7\u8BBE\u5907\u878D\u8D44\u9700\u8981\u4EC0\u4E48\u6587\u4EF6\uFF1F",
      answer: "\u4F01\u4E1A\u878D\u8D44\u9700\u8981\uFF1A(1) \u516C\u53F8\u6CE8\u518C\u6587\u4EF6\uFF08SSM\uFF09\u3001(2) 3-6\u4E2A\u6708\u94F6\u884C\u5BF9\u8D26\u5355\u3001(3) \u6700\u65B0\u8D22\u52A1\u62A5\u8868\u3001(4) \u8463\u4E8B\u8EAB\u4EFD\u8BC1\u526F\u672C\u3001(5) \u8BBE\u5907\u62A5\u4EF7\u5355\u3002\u81EA\u96C7\u4EBA\u58EB\u53EF\u63D0\u4EA4\u66FF\u4EE3\u6536\u5165\u8BC1\u660E\u3002"
    },
    {
      question: "\u4F60\u4EEC\u7684\u8425\u4E1A\u65F6\u95F4\u662F\u51E0\u70B9\uFF1F",
      answer: "\u6211\u4EEC\u5468\u4E00\u81F3\u5468\u4E94\u4E0A\u53489\u70B9\u81F3\u4E0B\u53485\u70B9\u8425\u4E1A\uFF0C\u5468\u516D\u4E0A\u53489\u70B9\u81F3\u4E0B\u53481\u70B9\u8425\u4E1A\u3002\u5468\u65E5\u548C\u516C\u5171\u5047\u671F\u4F11\u606F\u3002\u7D27\u6025\u54A8\u8BE2\u53EF\u901A\u8FC7WhatsApp\u8054\u7CFB +60175700889\u3002"
    },
    {
      question: "\u4F60\u4EEC\u63D0\u4F9B\u4E8C\u624B\u8BBE\u5907\u878D\u8D44\u5417\uFF1F",
      answer: "\u662F\u7684\uFF0C\u6211\u4EEC\u4E3A\u65B0\u65E7\u8BBE\u5907\u63D0\u4F9B\u878D\u8D44\uFF0C\u5305\u62EC\u6316\u6398\u673A\u3001\u7F57\u91CC\u3001\u53C9\u8F66\u548C\u5EFA\u7B51\u673A\u68B0\u3002\u4E8C\u624B\u8BBE\u5907\u878D\u8D44\u9700\u8981\u8BC4\u4F30\u8F66\u9F84\u548C\u72B6\u51B5\u3002\u8BF7\u8054\u7CFB\u6211\u4EEC\u8BC4\u4F30\u8D44\u683C\u3002"
    },
    {
      question: "\u4F60\u4EEC\u670D\u52A1\u9A6C\u6765\u897F\u4E9A\u54EA\u4E9B\u5730\u533A\uFF1F",
      answer: "\u867D\u7136\u6211\u4EEC\u7684\u529E\u516C\u5BA4\u4F4D\u4E8E\u96EA\u5170\u83AA\u5DF4\u751F\uFF0C\u4F46\u6211\u4EEC\u4E3A\u5168\u9A6C\u6765\u897F\u4E9A\u7684\u4F01\u4E1A\u63D0\u4F9B\u670D\u52A1\uFF0C\u5305\u62EC\u5409\u9686\u5761\u3001\u838E\u963F\u5357\u3001\u5DF4\u751F\u6E2F\u3001\u68B3\u90A6\u518D\u4E5F\u3001\u516B\u6253\u7075\u518D\u4E5F\u4EE5\u53CA\u5168\u56FD\u6240\u6709\u4E3B\u8981\u57CE\u5E02\u3002\u53EF\u8FDC\u7A0B\u7533\u8BF7\u548C\u6279\u51C6\u3002"
    },
    {
      question: "\u6211\u53EF\u4EE5\u5230\u529E\u516C\u5BA4\u54A8\u8BE2\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF0C\u6B22\u8FCE\u5728\u8425\u4E1A\u65F6\u95F4\u5185\u4E0A\u95E8\u54A8\u8BE2\u3002\u4F46\u6211\u4EEC\u5EFA\u8BAE\u901A\u8FC7WhatsApp\uFF08+60175700889\uFF09\u9884\u7EA6\uFF0C\u4EE5\u786E\u4FDD\u6211\u4EEC\u7684\u878D\u8D44\u4E13\u5BB6\u80FD\u591F\u7ACB\u5373\u4E3A\u60A8\u63D0\u4F9B\u670D\u52A1\u3002"
    },
    {
      question: "\u67E5\u8BE2\u7684\u56DE\u590D\u65F6\u95F4\u662F\u591A\u4E45\uFF1F",
      answer: "WhatsApp\u548C\u7535\u8BDD\u67E5\u8BE2\u901A\u5E38\u5728\u8425\u4E1A\u65F6\u95F4\u51852\u5C0F\u65F6\u5185\u56DE\u590D\u3002\u7535\u5B50\u90AE\u4EF6\u67E5\u8BE2\u572824\u5C0F\u65F6\u5185\u56DE\u590D\u3002\u5982\u9700\u6700\u5FEB\u670D\u52A1\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u901A\u8FC7WhatsApp\u8054\u7CFB\u3002"
    }
  ];
  const faqSchema = generateFAQSchema(faqItems);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u8054\u7CFB\u5174\u5174\u4FE1\u8D37 - \u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u878D\u8D44 | +60175700889", "description": "\u8054\u7CFB\u5174\u5174\u4FE1\u8D37\u83B7\u53D6\u5FEB\u901F\u8BBE\u5907\u878D\u8D44\u6279\u51C6\u3002\u4F4D\u4E8E\u96EA\u5170\u83AA\u5DF4\u751F\u3002WhatsApp +60175700889 24\u5C0F\u65F6\u6279\u51C6\u3002\u5468\u4E00\u81F3\u5468\u4E94 9AM-5PM\uFF0C\u5468\u516D 9AM-1PM \u8425\u4E1A\u3002", "lang": lang, "keywords": [
    "\u8054\u7CFB\u8BBE\u5907\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    "\u5174\u5174\u4FE1\u8D37\u8054\u7CFB\u65B9\u5F0F",
    "\u5DF4\u751F\u8BBE\u5907\u878D\u8D44",
    "\u6316\u6398\u673A\u878D\u8D44\u8054\u7CFB",
    "\u79DF\u8D2D\u9A6C\u6765\u897F\u4E9A\u8054\u7CFB",
    "\u5DF4\u751F\u96EA\u5170\u83AA\u5546\u4E1A\u8D37\u6B3E",
    "\u8BBE\u5907\u878D\u8D44\u529E\u516C\u5BA4",
    "\u5DF4\u751F\u91D1\u878D\u516C\u53F8"
  ] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": localBusinessSchema })} ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema })}  ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-primary to-secondary text-white py-20"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
联系我们获取快速设备融资批准
</h1> <p class="text-xl md:text-2xl mb-8 text-white opacity-90">
24小时内获批。立即与我们的融资专家对话。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp \u8054\u7CFB", "link": COMPANY_INFO.whatsapp.link, "variant": "accent", "size": "large", "icon": "whatsapp", "external": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u81F4\u7535 +60175700889", "link": `tel:${COMPANY_INFO.phone.international}`, "variant": "outline-white", "size": "large", "icon": "phone" })} </div> <div class="mt-8 text-sm opacity-80"> <p>平均回复时间：2小时 | 批准时间：24小时</p> </div> </div> </div> </section>  <section class="section bg-white"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">联系方式</h2> <p class="text-gray-600 text-lg max-w-2xl mx-auto">
多种联系方式，选择最方便您的。
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"> <!-- WhatsApp Card --> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} target="_blank" rel="noopener noreferrer" class="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center hover:shadow-xl transition-shadow group"> <div class="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-4 group-hover:scale-110 transition-transform"> <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2 text-green-800">WhatsApp（最快）</h3> <p class="text-green-700 font-semibold mb-2">${COMPANY_INFO.phone.display}</p> <p class="text-sm text-gray-600">营业时间内即时回复</p> </a> <!-- Phone Card --> <a${addAttribute(`tel:${COMPANY_INFO.phone.international}`, "href")} class="bg-white border-2 border-blue-500 rounded-lg p-8 text-center hover:shadow-xl transition-shadow group"> <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4 group-hover:scale-110 transition-transform"> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2 text-gray-900">电话联系</h3> <p class="text-gray-800 font-semibold mb-1">${COMPANY_INFO.phone.display}</p> <p class="text-gray-800 font-semibold mb-2">${COMPANY_INFO.phone.office}</p> <p class="text-sm text-gray-600">直线联系我们的团队</p> </a> <!-- Email Card --> <a${addAttribute(`mailto:${COMPANY_INFO.email}`, "href")} class="bg-orange-50 border-2 border-orange-500 rounded-lg p-8 text-center hover:shadow-xl transition-shadow group"> <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-4 group-hover:scale-110 transition-transform"> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2 text-orange-800">电邮联系</h3> <p class="text-orange-700 font-semibold mb-2 break-all">${COMPANY_INFO.email}</p> <p class="text-sm text-gray-600">24小时内回复</p> </a> </div> </div> </section>  <section class="section bg-gray-50"> <div class="container-custom max-w-4xl"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">发送询问</h2> <p class="text-gray-600 text-lg">
填写以下表格，我们将在24小时内回复您并提供定制融资方案
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </section>  <section class="section bg-white"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">办公室地址</h2> <p class="text-gray-600 text-lg">
位于雪兰莪巴生 - 从吉隆坡、莎阿南和巴生港交通便利
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"> <!-- Office Details --> <div class="space-y-8"> <div> <h3 class="text-2xl font-bold mb-6 text-primary">兴兴信贷有限公司</h3> <!-- Address --> <div class="flex items-start space-x-4 mb-6"> <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <h4 class="font-bold mb-2">地址</h4> <p class="text-gray-600">${COMPANY_INFO.address.full}</p> </div> </div> <!-- Business Hours --> <div class="flex items-start space-x-4 mb-6"> <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <h4 class="font-bold mb-2">营业时间</h4> <p class="text-gray-600">周一至周五：上午9点 - 下午5点</p> <p class="text-gray-600">周六：上午9点 - 下午1点</p> <p class="text-gray-600">周日：休息</p> </div> </div> <!-- Contact --> <div class="flex items-start space-x-4 mb-6"> <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <h4 class="font-bold mb-2">电话</h4> <p class="text-gray-600"> <a${addAttribute(`tel:${COMPANY_INFO.phone.international}`, "href")} class="hover:text-primary">${COMPANY_INFO.phone.display}</a> </p> <p class="text-gray-600"> <a${addAttribute(`tel:+60333248899`, "href")} class="hover:text-primary">${COMPANY_INFO.phone.office}</a> </p> </div> </div> </div> <!-- Directions --> <div class="bg-white border-l-4 border-blue-500 rounded-lg p-6"> <h4 class="font-bold mb-3 text-gray-900">如何前往</h4> <ul class="space-y-2 text-sm text-gray-700"> <li class="flex items-start"> <svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg>
距离巴生中环15分钟
</li> <li class="flex items-start"> <svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg>
距离莎阿南30分钟
</li> <li class="flex items-start"> <svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg>
距离吉隆坡40分钟
</li> <li class="flex items-start"> <svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg>
充足停车位
</li> </ul> </div> <a${addAttribute(COMPANY_INFO.address.googleMapsUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn btn-primary w-full"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path> </svg>
在 Google 地图中打开
</a> </div> <!-- Map Placeholder --> <div class="bg-gray-200 rounded-lg overflow-hidden" style="height: 500px;"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3448!2d101.4424!3d3.0449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDInNDEuNiJOIDEwMcKwMjYnMzMuOCJF!5e0!3m2!1szh-CN!2smy!4v1234567890" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="兴兴信贷办公室位置地图"></iframe> </div> </div> </div> </section>  <section class="section bg-gray-50"> <div class="container-custom max-w-4xl"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">常见问题</h2> <p class="text-gray-600 text-lg">
关于联系我们的常见问题快速解答
</p> </div> <div class="space-y-6"> ${faqItems.map((faq, index) => renderTemplate`<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"> <h3 class="text-xl font-bold mb-3 text-primary" itemprop="name"> ${index + 1}. ${faq.question} </h3> <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> <p class="text-gray-600 leading-relaxed" itemprop="text"> ${faq.answer} </p> </div> </div>`)} </div> </div> </section>  <section class="section bg-gradient-to-r from-primary to-secondary text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">准备好开始了吗？</h2> <p class="text-xl mb-8 text-white opacity-90 max-w-2xl mx-auto">
不要等待。立即联系我们，24小时内获得设备融资批准。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp \u5373\u65F6\u62A5\u4EF7", "link": COMPANY_INFO.whatsapp.link, "variant": "accent", "size": "large", "icon": "whatsapp", "external": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u7ACB\u5373\u81F4\u7535", "link": `tel:${COMPANY_INFO.phone.international}`, "variant": "outline-white", "size": "large", "icon": "phone" })} </div> <div class="mt-8 text-sm opacity-80"> <p>周一至周五 9AM-5PM，周六 9AM-1PM 营业</p> </div> </div> </section> ` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/contact.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/contact.astro";
const $$url = "/zh/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
