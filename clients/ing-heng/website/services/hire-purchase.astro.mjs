/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { f as generateServicePageSchema, a as generateFAQSchema, $ as $$BaseLayout } from '../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$BenefitCard } from '../../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$FAQItem } from '../../../chunks/FAQItem_CTpbqvJe.mjs';
import { $ as $$ContactForm } from '../../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$CTAButton } from '../../../chunks/CTAButton_D2NuWLbx.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$StructuredData } from '../../../chunks/StructuredData_BEy59xv7.mjs';
/* empty css                                               */
export { renderers } from '../../../renderers.mjs';

const $$HirePurchase = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const title = "\u79DF\u8D2D\u9A6C\u6765\u897F\u4E9A | \u8BBE\u5907\u878D\u8D44 | \u8363\u5174\u4FE1\u8D37";
  const description = "\u79DF\u8D2D\u878D\u8D44:\u6316\u6398\u673A\u3001\u7F57\u91CC\u3001\u53C9\u8F66\u3002\u5FEB\u901F\u5904\u7406,12-60\u6708\u671F\u9650\u3002\u9996\u4ED810-30%\u3002\u7ACB\u5373\u62A5\u4EF7!";
  const keywords = ["\u79DF\u8D2D\u878D\u8D44", "\u8BBE\u5907\u878D\u8D44", "\u6316\u6398\u673A\u79DF\u8D2D", "\u7F57\u91CC\u878D\u8D44", "\u53C9\u8F66\u5206\u671F", "\u5EFA\u7B51\u8BBE\u5907\u878D\u8D44", "\u91CD\u578B\u673A\u68B0\u79DF\u8D2D", "\u8D44\u4EA7\u878D\u8D44\u9A6C\u6765\u897F\u4E9A"];
  const breadcrumbItems = [
    { label: "\u9996\u9875", href: "/zh" },
    { label: "\u670D\u52A1", href: "/zh/services" },
    { label: "\u79DF\u8D2D\u878D\u8D44", href: "/zh/services/hire-purchase" }
  ];
  const faqs = [
    {
      question: "\u4EC0\u4E48\u662F\u79DF\u8D2D\u878D\u8D44\uFF1F",
      answer: "\u79DF\u8D2D\uFF08Hire Purchase\uFF09\u662F\u4E00\u79CD\u8D44\u4EA7\u878D\u8D44\u65B9\u5F0F\uFF0C\u8BA9\u60A8\u901A\u8FC7\u6BCF\u6708\u5206\u671F\u4ED8\u6B3E\u6765\u83B7\u5F97\u8BBE\u5907\u3002\u5728\u4F7F\u7528\u8BBE\u5907\u7ECF\u8425\u4E1A\u52A1\u7684\u540C\u65F6\uFF0C\u5206\u671F\u652F\u4ED8\u8BBE\u5907\u8D39\u7528\u3002\u5B8C\u6210\u6240\u6709\u4ED8\u6B3E\u540E\uFF0C\u8BBE\u5907\u7684\u6240\u6709\u6743\u81EA\u52A8\u8F6C\u79FB\u7ED9\u60A8\u3002\u8FD9\u79CD\u65B9\u5F0F\u7279\u522B\u9002\u5408\u9700\u8981\u7ACB\u5373\u4F7F\u7528\u8BBE\u5907\u4F46\u5E0C\u671B\u5206\u6563\u6210\u672C\u7684\u4F01\u4E1A\u3002"
    },
    {
      question: "\u54EA\u4E9B\u8BBE\u5907\u53EF\u4EE5\u901A\u8FC7\u79DF\u8D2D\u878D\u8D44\uFF1F",
      answer: "\u6211\u4EEC\u4E3A\u5E7F\u6CDB\u7684\u8BBE\u5907\u63D0\u4F9B\u878D\u8D44\uFF0C\u5305\u62EC\u6316\u6398\u673A\u3001\u63A8\u571F\u673A\u3001\u53CD\u94F2\u6316\u6398\u673A\u3001\u538B\u8DEF\u673A\u3001\u7F57\u91CC\u3001\u8D27\u67DC\u5361\u8F66\u3001\u53C9\u8F66\u3001\u8D77\u91CD\u673A\u3001\u53D1\u7535\u673A\u53CA\u5176\u4ED6\u5EFA\u7B51\u548C\u7269\u6D41\u8BBE\u5907\u3002\u6211\u4EEC\u63A5\u53D7\u5168\u65B0\u548C\u4E8C\u624B\u8BBE\u5907\uFF08\u6700\u591A10\u5E74\u8F66\u9F84\uFF09\u7684\u878D\u8D44\u7533\u8BF7\u3002"
    },
    {
      question: "\u6279\u51C6\u7387\u662F\u591A\u5C11\uFF1F\u9700\u8981\u591A\u957F\u65F6\u95F4\uFF1F",
      answer: "\u6211\u4EEC\u5FEB\u901F\u5904\u7406\u7533\u8BF7\u3002\u4E00\u65E6\u83B7\u6279\uFF0C\u8D44\u91D1\u53EF\u57283-5\u4E2A\u5DE5\u4F5C\u65E5\u5185\u53D1\u653E\u3002\u6211\u4EEC\u7B80\u5316\u7684\u6D41\u7A0B\u53EA\u9700\u6700\u5C11\u7684\u6587\u4EF6\uFF0C\u56E2\u961F\u9AD8\u6548\u8FD0\u4F5C\uFF0C\u786E\u4FDD\u60A8\u80FD\u5FEB\u901F\u83B7\u5F97\u8BBE\u5907\u6295\u5165\u4F7F\u7528\u3002"
    },
    {
      question: "\u8FD8\u6B3E\u671F\u9650\u6709\u591A\u957F\uFF1F",
      answer: "\u6211\u4EEC\u63D0\u4F9B12\u81F360\u4E2A\u6708\uFF081\u81F35\u5E74\uFF09\u7684\u7075\u6D3B\u8FD8\u6B3E\u671F\u9650\u3002\u671F\u9650\u957F\u77ED\u53D6\u51B3\u4E8E\u8BBE\u5907\u7C7B\u578B\u3001\u8F66\u9F84\u548C\u60A8\u7684\u4E1A\u52A1\u9700\u6C42\u3002\u8F83\u957F\u7684\u671F\u9650\u610F\u5473\u7740\u8F83\u4F4E\u7684\u6708\u4F9B\uFF0C\u800C\u8F83\u77ED\u7684\u671F\u9650\u5219\u8BA9\u60A8\u66F4\u5FEB\u62E5\u6709\u8BBE\u5907\u6240\u6709\u6743\u3002"
    },
    {
      question: "\u7533\u8BF7\u79DF\u8D2D\u9700\u8981\u54EA\u4E9B\u6587\u4EF6\uFF1F",
      answer: "\u6240\u9700\u6587\u4EF6\u5305\u62EC\uFF1A\u516C\u53F8SSM\u6CE8\u518C\u6587\u4EF6\u3001\u6700\u8FD16\u4E2A\u6708\u94F6\u884C\u5BF9\u8D26\u5355\u3001\u8463\u4E8B\u8EAB\u4EFD\u8BC1/\u62A4\u7167\u3001\u4E1A\u52A1\u8D22\u52A1\u62A5\u8868\uFF08\u5982\u6709\uFF09\u3001\u8BBE\u5907\u62A5\u4EF7\u5355\u6216\u53D1\u7968\uFF0C\u4EE5\u53CA\u8BBE\u5907\u89C4\u683C\u8BF4\u660E\u3002\u6211\u4EEC\u7684\u56E2\u961F\u5C06\u6307\u5BFC\u60A8\u5B8C\u6210\u6574\u4E2A\u6587\u4EF6\u51C6\u5907\u8FC7\u7A0B\u3002"
    },
    {
      question: "\u53EF\u4EE5\u878D\u8D44\u4E8C\u624B\u8BBE\u5907\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF01\u6211\u4EEC\u4E3A\u5168\u65B0\u548C\u4E8C\u624B\u8BBE\u5907\u63D0\u4F9B\u878D\u8D44\u3002\u5BF9\u4E8E\u4E8C\u624B\u8BBE\u5907\uFF0C\u6211\u4EEC\u901A\u5E38\u63A5\u53D7\u6700\u591A10\u5E74\u8F66\u9F84\u7684\u673A\u68B0\uFF0C\u9700\u89C6\u8BBE\u5907\u72B6\u51B5\u800C\u5B9A\u3002\u8BBE\u5907\u7684\u8F66\u9F84\u548C\u72B6\u51B5\u53EF\u80FD\u4F1A\u5F71\u54CD\u8D37\u6B3E\u91D1\u989D\u548C\u63D0\u4F9B\u7684\u6761\u6B3E\u3002"
    },
    {
      question: "\u9700\u8981\u9996\u4ED8\u5417\uFF1F",
      answer: "\u9996\u4ED8\u8981\u6C42\u4ECE0%\u8D77\uFF08\u89C6\u5177\u4F53\u6761\u6B3E\u800C\u5B9A\uFF09\uFF0C\u56E0\u8BBE\u5907\u7C7B\u578B\u3001\u8F66\u9F84\u548C\u60A8\u7684\u4FE1\u7528\u72B6\u51B5\u800C\u5F02\u3002\u6211\u4EEC\u63D0\u4F9B\u5177\u6709\u7ADE\u4E89\u529B\u7684\u9996\u4ED8\u9009\u9879\uFF0C\u4F7F\u8BBE\u5907\u62E5\u6709\u6743\u66F4\u5BB9\u6613\u5B9E\u73B0\u3002\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u7B26\u5408\u6761\u4EF6\u7684\u4F01\u4E1A\u53EF\u5B89\u6392\u8F83\u4F4E\u7684\u9996\u4ED8\u3002"
    },
    {
      question: "\u5982\u679C\u9519\u8FC7\u8FD8\u6B3E\u4F1A\u600E\u6837\uFF1F",
      answer: "\u6211\u4EEC\u7406\u89E3\u4F01\u4E1A\u4F1A\u9762\u4E34\u73B0\u91D1\u6D41\u6311\u6218\u3002\u5982\u679C\u60A8\u9884\u8BA1\u6709\u8FD8\u6B3E\u56F0\u96BE\uFF0C\u8BF7\u7ACB\u5373\u8054\u7CFB\u6211\u4EEC\u3002\u6211\u4EEC\u53EF\u4EE5\u5236\u5B9A\u8FD8\u6B3E\u5B89\u6392\u6216\u91CD\u7EC4\u65B9\u6848\u3002\u903E\u671F\u8FD8\u6B3E\u53EF\u80FD\u4EA7\u751F\u8D39\u7528\uFF0C\u6301\u7EED\u8FDD\u7EA6\u53EF\u80FD\u5BFC\u81F4\u6309\u534F\u8BAE\u6761\u6B3E\u6536\u56DE\u8BBE\u5907\u3002"
    },
    {
      question: "\u53EF\u4EE5\u63D0\u524D\u7ED3\u6E05\u79DF\u8D2D\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF0C\u6211\u4EEC\u5141\u8BB8\u5E76\u9F13\u52B1\u63D0\u524D\u7ED3\u6E05\u3002\u60A8\u53EF\u4EE5\u968F\u65F6\u652F\u4ED8\u5269\u4F59\u4F59\u989D\uFF0C\u6211\u4EEC\u5C06\u63D0\u4F9B\u7ED3\u7B97\u62A5\u8868\u3002\u63D0\u524D\u7ED3\u6E05\u53EF\u80FD\u6D89\u53CA\u884C\u653F\u8D39\u7528\uFF0C\u4F46\u60A8\u5C06\u8282\u7701\u672A\u6765\u7684\u5229\u606F\u652F\u51FA\u3002\u8BF7\u8054\u7CFB\u6211\u4EEC\u83B7\u53D6\u7ED3\u7B97\u62A5\u4EF7\u3002"
    },
    {
      question: "\u5982\u4F55\u7533\u8BF7\u79DF\u8D2D\u878D\u8D44\uFF1F",
      answer: "\u53EA\u9700\u81F4\u7535017-570 0889\u3001WhatsApp\u8054\u7CFB\u6211\u4EEC\uFF0C\u6216\u586B\u5199\u5728\u7EBF\u8054\u7CFB\u8868\u683C\u3002\u6211\u4EEC\u7684\u878D\u8D44\u4E13\u5458\u5C06\u4E0E\u60A8\u8BA8\u8BBA\u8BBE\u5907\u9700\u6C42\uFF0C\u89E3\u91CA\u53EF\u7528\u9009\u9879\uFF0C\u5E76\u6307\u5BFC\u60A8\u5B8C\u6210\u7533\u8BF7\u6D41\u7A0B\u3002\u6211\u4EEC\u8BA9\u60A8\u7684\u4F01\u4E1A\u5FEB\u901F\u8F7B\u677E\u5730\u83B7\u5F97\u6240\u9700\u8BBE\u5907\u3002"
    }
  ];
  const servicePageSchema = generateServicePageSchema({
    serviceName: "\u8BBE\u5907\u79DF\u8D2D\u878D\u8D44\u670D\u52A1",
    description: "\u7075\u6D3B\u7684\u8BBE\u5907\u79DF\u8D2D\u878D\u8D44\u65B9\u6848\uFF0C\u9002\u7528\u4E8E\u6316\u6398\u673A\u3001\u7F57\u91CC\u3001\u53C9\u8F66\u53CA\u5EFA\u7B51\u8BBE\u5907\uFF0C\u5FEB\u901F\u5BA1\u6279",
    serviceType: "\u8BBE\u5907\u79DF\u8D2D\u878D\u8D44",
    minRate: "8.00",
    maxRate: "18.00",
    locale: "zh"
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords, "ogType": "website", "data-astro-cid-wl2ppda6": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": servicePageSchema, "data-astro-cid-wl2ppda6": true })}  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema, "data-astro-cid-wl2ppda6": true })}  ${maybeRenderHead()}<div class="container-custom py-4" data-astro-cid-wl2ppda6> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-wl2ppda6": true })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u8BBE\u5907\u79DF\u8D2D\u878D\u8D44\u670D\u52A1", "subtitle": "\u901A\u8FC7\u7075\u6D3B\u7684\u6708\u4F9B\u62E5\u6709\u60A8\u7684\u8BBE\u5907\u3002\u5FEB\u901F\u6279\u51C6\u3001\u5177\u7ADE\u4E89\u529B\u7684\u5229\u7387\u3001\u6700\u957F60\u4E2A\u6708\u5206\u671F\u3002\u8BA9\u60A8\u7684\u4F01\u4E1A\u7ACB\u5373\u88C5\u5907\u8D77\u6765\uFF01", "ctaText": "\u514D\u8D39\u83B7\u53D6\u62A5\u4EF7", "ctaLink": "/zh/contact", "ctaSecondaryText": "WhatsApp\u54A8\u8BE2", "ctaSecondaryLink": "https://wa.me/60175700889", "lang": lang, "trustSignals": ["\u5FEB\u901F\u5904\u7406", "500+\u6EE1\u610F\u5BA2\u6237"], "data-astro-cid-wl2ppda6": true })}  <section class="section-padding bg-gray-50" data-astro-cid-wl2ppda6> <div class="container-custom" data-astro-cid-wl2ppda6> <div class="max-w-4xl mx-auto" data-astro-cid-wl2ppda6> <div class="text-center mb-12" data-astro-cid-wl2ppda6> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-wl2ppda6>
什么是租购融资？
</h2> <div class="w-20 h-1 bg-accent mx-auto mb-6" data-astro-cid-wl2ppda6></div> </div> <div class="prose prose-lg max-w-none" data-astro-cid-wl2ppda6> <p class="text-gray-700 leading-relaxed mb-6" data-astro-cid-wl2ppda6>
租购（Hire Purchase，简称HP）是一种资产融资解决方案，让企业和个人通过可管理的月供来获得必需的设备。无需一次性支付全额，您可以在1至5年内分期付款，同时使用设备为您的业务创造收入。
</p> <p class="text-gray-700 leading-relaxed mb-6" data-astro-cid-wl2ppda6>
这种融资方式特别适合建筑设备、物流车辆和工业机械，因为设备的即时使用能够产生现金流来支付月供。完成所有分期付款后，设备的完整所有权将自动转移给您。
</p> <div class="bg-white p-6 rounded-lg border-l-4 border-primary shadow-[2px_2px_0_#2D1810]" data-astro-cid-wl2ppda6> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-wl2ppda6>租购运作方式：</h3> <ol class="space-y-3 text-gray-700" data-astro-cid-wl2ppda6> <li data-astro-cid-wl2ppda6><strong data-astro-cid-wl2ppda6>1. 选择设备：</strong> 选择您业务所需的机械或车辆</li> <li data-astro-cid-wl2ppda6><strong data-astro-cid-wl2ppda6>2. 申请融资：</strong> 提交简单的申请和基本文件</li> <li data-astro-cid-wl2ppda6><strong data-astro-cid-wl2ppda6>3. 快速获批：</strong> 快速获得批准</li> <li data-astro-cid-wl2ppda6><strong data-astro-cid-wl2ppda6>4. 支付首付：</strong> 根据条款条件从0%起支付首付</li> <li data-astro-cid-wl2ppda6><strong data-astro-cid-wl2ppda6>5. 使用并按月还款：</strong> 立即开始使用设备，同时按月还款</li> <li data-astro-cid-wl2ppda6><strong data-astro-cid-wl2ppda6>6. 拥有设备：</strong> 完成最后一笔付款后，设备所有权转移给您</li> </ol> </div> </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-wl2ppda6> <div class="container-custom" data-astro-cid-wl2ppda6> <div class="text-center mb-12" data-astro-cid-wl2ppda6> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-wl2ppda6>
为什么选择我们的租购融资？
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-wl2ppda6>
我们已帮助超过500家马来西亚企业获得业务发展所需的设备
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-wl2ppda6></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-wl2ppda6> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "lightning", "title": "\u5FEB\u901F\u6279\u51C6", "description": "\u5FEB\u901F\u6279\u51C6\u60A8\u7684\u7533\u8BF7\u3002\u7B80\u5316\u6D41\u7A0B\u610F\u5473\u7740\u6700\u77ED\u7B49\u5F85\u65F6\u95F4\u548C\u5FEB\u901F\u8BBE\u5907\u4EA4\u4ED8\u3002", "data-astro-cid-wl2ppda6": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "percentage", "title": "\u5177\u7ADE\u4E89\u529B\u7684\u5229\u7387", "description": "\u5E74\u5229\u73878-18%\uFF08\u9700\u7ECF\u8FC7\u4FE1\u7528\u8BC4\u4F30\uFF09\u3002\u6211\u4EEC\u4E0E\u591A\u5BB6\u91D1\u878D\u673A\u6784\u5408\u4F5C\uFF0C\u4E3A\u60A8\u4E89\u53D6\u6700\u4F18\u6761\u6B3E\u3002", "data-astro-cid-wl2ppda6": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "calendar", "title": "\u7075\u6D3B\u8FD8\u6B3E\u671F\u9650", "description": "\u9009\u62E912\u81F360\u4E2A\u6708\u7684\u8FD8\u6B3E\u671F\u9650\u3002\u6839\u636E\u60A8\u7684\u73B0\u91D1\u6D41\u548C\u4E1A\u52A1\u5468\u671F\u5B9A\u5236\u8FD8\u6B3E\u8BA1\u5212\u3002", "data-astro-cid-wl2ppda6": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "users", "title": "\u591A\u8BED\u8A00\u670D\u52A1", "description": "\u6211\u4EEC\u7684\u56E2\u961F\u63D0\u4F9B\u4E2D\u6587\u3001\u82F1\u8BED\u548C\u9A6C\u6765\u8BED\u670D\u52A1\u3002\u7528\u60A8\u559C\u6B22\u7684\u8BED\u8A00\u83B7\u5F97\u5E2E\u52A9\u3002", "data-astro-cid-wl2ppda6": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "clock", "title": "\u4F4E\u9996\u4ED8\u9009\u9879", "description": "\u9996\u4ED8\u4ECE0%\u8D77\uFF08\u89C6\u5177\u4F53\u6761\u6B3E\u800C\u5B9A\uFF09\u3002\u6211\u4EEC\u8BA9\u6240\u6709\u4F01\u4E1A\u90FD\u80FD\u8D1F\u62C5\u8BBE\u5907\u62E5\u6709\u6743\u3002", "data-astro-cid-wl2ppda6": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "default", "title": "\u65B0\u65E7\u8BBE\u5907\u7686\u53EF", "description": "\u4E3A\u5168\u65B0\u548C\u6700\u591A10\u5E74\u8F66\u9F84\u7684\u4E8C\u624B\u8BBE\u5907\u63D0\u4F9B\u878D\u8D44\u3002\u4EE5\u9002\u5408\u60A8\u9884\u7B97\u7684\u4EF7\u683C\u83B7\u5F97\u4F18\u8D28\u8D44\u4EA7\u3002", "data-astro-cid-wl2ppda6": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "default", "title": "\u65E0\u9690\u85CF\u8D39\u7528", "description": "\u900F\u660E\u5B9A\u4EF7\uFF0C\u6240\u6709\u8D39\u7528\u63D0\u524D\u62AB\u9732\u3002\u6CA1\u6709\u610F\u5916\uFF0C\u53EA\u6709\u8BDA\u4FE1\u7684\u878D\u8D44\u65B9\u6848\u3002", "data-astro-cid-wl2ppda6": true })} </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-wl2ppda6> <div class="container-custom" data-astro-cid-wl2ppda6> <div class="text-center mb-12" data-astro-cid-wl2ppda6> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-wl2ppda6>
我们融资的设备
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-wl2ppda6>
从建筑到物流，我们为推动您业务前进的设备提供融资
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-wl2ppda6></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-wl2ppda6> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-wl2ppda6> <div class="text-primary text-4xl mb-4" data-astro-cid-wl2ppda6>🚜</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-wl2ppda6>建筑设备</h3> <ul class="text-gray-600 space-y-2" data-astro-cid-wl2ppda6> <li data-astro-cid-wl2ppda6>• 挖掘机（1-40吨）</li> <li data-astro-cid-wl2ppda6>• 推土机</li> <li data-astro-cid-wl2ppda6>• 反铲装载机</li> <li data-astro-cid-wl2ppda6>• 压路机</li> <li data-astro-cid-wl2ppda6>• 轮式装载机</li> <li data-astro-cid-wl2ppda6>• 滑移装载机</li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-wl2ppda6> <div class="text-primary text-4xl mb-4" data-astro-cid-wl2ppda6>🚛</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-wl2ppda6>物流车辆</h3> <ul class="text-gray-600 space-y-2" data-astro-cid-wl2ppda6> <li data-astro-cid-wl2ppda6>• 罗里和卡车</li> <li data-astro-cid-wl2ppda6>• 货柜卡车</li> <li data-astro-cid-wl2ppda6>• 牵引车</li> <li data-astro-cid-wl2ppda6>• 货运面包车</li> <li data-astro-cid-wl2ppda6>• 拖车卡车</li> <li data-astro-cid-wl2ppda6>• 自卸卡车</li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-wl2ppda6> <div class="text-primary text-4xl mb-4" data-astro-cid-wl2ppda6>🏗️</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-wl2ppda6>起重设备</h3> <ul class="text-gray-600 space-y-2" data-astro-cid-wl2ppda6> <li data-astro-cid-wl2ppda6>• 叉车（1-25吨）</li> <li data-astro-cid-wl2ppda6>• 移动式起重机</li> <li data-astro-cid-wl2ppda6>• 塔式起重机</li> <li data-astro-cid-wl2ppda6>• 正面吊</li> <li data-astro-cid-wl2ppda6>• 高空作业平台</li> <li data-astro-cid-wl2ppda6>• 剪叉式升降机</li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-wl2ppda6> <div class="text-primary text-4xl mb-4" data-astro-cid-wl2ppda6>⚡</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-wl2ppda6>动力及其他</h3> <ul class="text-gray-600 space-y-2" data-astro-cid-wl2ppda6> <li data-astro-cid-wl2ppda6>• 发电机（10-500kVA）</li> <li data-astro-cid-wl2ppda6>• 空气压缩机</li> <li data-astro-cid-wl2ppda6>• 混凝土搅拌机</li> <li data-astro-cid-wl2ppda6>• 焊接机</li> <li data-astro-cid-wl2ppda6>• 压实机</li> <li data-astro-cid-wl2ppda6>• 工业设备</li> </ul> </div> </div> <div class="text-center mt-10" data-astro-cid-wl2ppda6> <p class="text-gray-600 mb-6" data-astro-cid-wl2ppda6>
没看到您的设备？我们为广泛的商业和工业资产提供融资。
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u54A8\u8BE2\u60A8\u7684\u8BBE\u5907", "link": "/zh/contact", "variant": "primary", "size": "large", "data-astro-cid-wl2ppda6": true })} </div> </div> </section>  <section class="section-padding" data-astro-cid-wl2ppda6> <div class="container-custom" data-astro-cid-wl2ppda6> <div class="text-center mb-12" data-astro-cid-wl2ppda6> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-wl2ppda6>
如何申请租购
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-wl2ppda6>
简单的4步流程，让您快速获得设备
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-wl2ppda6></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-wl2ppda6> <div class="text-center" data-astro-cid-wl2ppda6> <div class="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6" data-astro-cid-wl2ppda6>
1
</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-wl2ppda6>联系我们</h3> <p class="text-gray-600" data-astro-cid-wl2ppda6>
通过电话、WhatsApp或电邮告知您的设备需求。我们的专员数小时内回复。
</p> </div> <div class="text-center" data-astro-cid-wl2ppda6> <div class="w-20 h-20 bg-[#8B6F47] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6" data-astro-cid-wl2ppda6>
2
</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-wl2ppda6>提交文件</h3> <p class="text-gray-600" data-astro-cid-wl2ppda6>
提供基本的业务文件和设备报价单。我们指导您完成整个过程。
</p> </div> <div class="text-center" data-astro-cid-wl2ppda6> <div class="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6" data-astro-cid-wl2ppda6>
3
</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-wl2ppda6>获得批准</h3> <p class="text-gray-600" data-astro-cid-wl2ppda6>
快速获得批准。我们将为您提供最佳的融资条款。
</p> </div> <div class="text-center" data-astro-cid-wl2ppda6> <div class="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6" data-astro-cid-wl2ppda6>
4
</div> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-wl2ppda6>获得设备</h3> <p class="text-gray-600" data-astro-cid-wl2ppda6>
签署协议，支付首付，收到您的设备。立即开始创造收入！
</p> </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-br from-primary to-secondary text-white" data-astro-cid-wl2ppda6> <div class="container-custom" data-astro-cid-wl2ppda6> <div class="max-w-4xl mx-auto" data-astro-cid-wl2ppda6> <div class="text-center mb-12" data-astro-cid-wl2ppda6> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-wl2ppda6>
申请要求
</h2> <p class="text-xl text-white/90 max-w-2xl mx-auto" data-astro-cid-wl2ppda6>
简单的文件要求，快速处理
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-wl2ppda6></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-wl2ppda6> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-wl2ppda6> <h3 class="text-2xl font-bold mb-4 flex items-center" data-astro-cid-wl2ppda6> <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wl2ppda6> <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" data-astro-cid-wl2ppda6></path> <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" data-astro-cid-wl2ppda6></path> </svg>
公司（Sdn Bhd）
</h3> <ul class="space-y-3 text-white/90" data-astro-cid-wl2ppda6> <li class="flex items-start" data-astro-cid-wl2ppda6> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wl2ppda6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-wl2ppda6></path> </svg>
SSM公司注册文件（Form 9 & 49）
</li> <li class="flex items-start" data-astro-cid-wl2ppda6> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wl2ppda6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-wl2ppda6></path> </svg>
最近6个月银行对账单
</li> <li class="flex items-start" data-astro-cid-wl2ppda6> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wl2ppda6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-wl2ppda6></path> </svg>
董事身份证/护照副本
</li> <li class="flex items-start" data-astro-cid-wl2ppda6> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wl2ppda6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-wl2ppda6></path> </svg>
财务报表（如有）
</li> <li class="flex items-start" data-astro-cid-wl2ppda6> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wl2ppda6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-wl2ppda6></path> </svg>
设备报价单/发票
</li> </ul> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-wl2ppda6> <h3 class="text-2xl font-bold mb-4 flex items-center" data-astro-cid-wl2ppda6> <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wl2ppda6> <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" data-astro-cid-wl2ppda6></path> </svg>
个人/独资企业
</h3> <ul class="space-y-3 text-white/90" data-astro-cid-wl2ppda6> <li class="flex items-start" data-astro-cid-wl2ppda6> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wl2ppda6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-wl2ppda6></path> </svg>
身份证/护照副本
</li> <li class="flex items-start" data-astro-cid-wl2ppda6> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wl2ppda6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-wl2ppda6></path> </svg>
最近6个月银行对账单
</li> <li class="flex items-start" data-astro-cid-wl2ppda6> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wl2ppda6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-wl2ppda6></path> </svg>
业务注册（如适用）
</li> <li class="flex items-start" data-astro-cid-wl2ppda6> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wl2ppda6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-wl2ppda6></path> </svg>
收入证明（薪资单/EPF报表）
</li> <li class="flex items-start" data-astro-cid-wl2ppda6> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-wl2ppda6> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-wl2ppda6></path> </svg>
设备报价单/发票
</li> </ul> </div> </div> <div class="mt-8 text-center" data-astro-cid-wl2ppda6> <p class="text-white/90 mb-4" data-astro-cid-wl2ppda6>
我们的团队将指导您完成文件准备过程，并可协助处理任何缺失的文件。
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u5F00\u59CB\u7533\u8BF7", "link": "/zh/contact", "variant": "accent", "size": "large", "data-astro-cid-wl2ppda6": true })} </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-wl2ppda6> <div class="container-custom" data-astro-cid-wl2ppda6> <div class="max-w-4xl mx-auto" data-astro-cid-wl2ppda6> <div class="text-center mb-12" data-astro-cid-wl2ppda6> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-wl2ppda6>
常见问题
</h2> <p class="text-xl text-gray-600" data-astro-cid-wl2ppda6>
关于租购融资的一切您需要知道的信息
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-wl2ppda6></div> </div> <div class="space-y-4" data-astro-cid-wl2ppda6> ${faqs.map((faq, index) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer, "isOpen": index === 0, "data-astro-cid-wl2ppda6": true })}`)} </div> <div class="mt-10 text-center" data-astro-cid-wl2ppda6> <p class="text-gray-600 mb-6" data-astro-cid-wl2ppda6>
还有更多问题？我们的融资专员随时为您服务。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-wl2ppda6> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u7ACB\u5373\u81F4\u7535", "link": "tel:+60175700889", "variant": "primary", "icon": "phone", "data-astro-cid-wl2ppda6": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp\u54A8\u8BE2", "link": "https://wa.me/60175700889", "variant": "accent", "icon": "whatsapp", "data-astro-cid-wl2ppda6": true })} </div> </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-r from-primary via-secondary to-accent text-white" data-astro-cid-wl2ppda6> <div class="container-custom" data-astro-cid-wl2ppda6> <div class="max-w-4xl mx-auto text-center" data-astro-cid-wl2ppda6> <h2 class="text-3xl md:text-4xl font-bold mb-6" data-astro-cid-wl2ppda6>
准备好获得您的设备了吗？
</h2> <p class="text-xl text-white/90 mb-8 leading-relaxed" data-astro-cid-wl2ppda6>
加入信赖荣兴信贷的500多家马来西亚企业。快速获批。
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" data-astro-cid-wl2ppda6> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-wl2ppda6> <div class="text-4xl font-bold mb-2" data-astro-cid-wl2ppda6>快速</div> <div class="text-white/90" data-astro-cid-wl2ppda6>批准时间</div> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-wl2ppda6> <div class="text-4xl font-bold mb-2" data-astro-cid-wl2ppda6>500+</div> <div class="text-white/90" data-astro-cid-wl2ppda6>满意客户</div> </div> </div> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-wl2ppda6> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u7ACB\u5373\u7533\u8BF7", "link": "/zh/contact", "variant": "accent", "size": "large", "data-astro-cid-wl2ppda6": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp: 017-570 0889", "link": "https://wa.me/60175700889", "variant": "outline-white", "size": "large", "icon": "whatsapp", "data-astro-cid-wl2ppda6": true })} </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-wl2ppda6> <div class="container-custom" data-astro-cid-wl2ppda6> <div class="max-w-3xl mx-auto" data-astro-cid-wl2ppda6> <div class="text-center mb-12" data-astro-cid-wl2ppda6> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-wl2ppda6>
今天就获取免费报价
</h2> <p class="text-xl text-gray-600" data-astro-cid-wl2ppda6>
填写下方表格，我们的融资专员将尽快与您联系
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-wl2ppda6></div> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang, "data-astro-cid-wl2ppda6": true })} </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/services/hire-purchase.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/services/hire-purchase.astro";
const $$url = "/zh/services/hire-purchase";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HirePurchase,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
