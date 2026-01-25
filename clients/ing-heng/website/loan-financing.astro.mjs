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
import { $ as $$Calculator } from '../../../chunks/Calculator_BS1M0nbC.mjs';
import { $ as $$StructuredData } from '../../../chunks/StructuredData_BEy59xv7.mjs';
/* empty css                                                */
export { renderers } from '../../../renderers.mjs';

const $$LoanFinancing = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const title = "\u8BBE\u5907\u8D37\u6B3E\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | \u8363\u5174\u4FE1\u8D37";
  const description = "\u8BBE\u5907\u8D37\u6B3E\u878D\u8D44:\u5EFA\u7B51\u3001\u7269\u6D41\u3001\u5DE5\u4E1A\u673A\u68B0\u3002\u5FEB\u901F\u5904\u7406,12-60\u6708\u671F\u9650\u3002RM30k-RM5M\u3002\u4ECA\u65E5\u62A5\u4EF7!";
  const keywords = ["\u9A6C\u6765\u897F\u4E9A\u5546\u4E1A\u8D37\u6B3E", "\u4E2D\u5C0F\u4F01\u4E1A\u878D\u8D44", "\u8BBE\u5907\u8D37\u6B3E", "\u8425\u8FD0\u8D44\u91D1\u8D37\u6B3E", "\u4E1A\u52A1\u6269\u5C55\u8D37\u6B3E", "\u5546\u4E1A\u878D\u8D44", "\u4F01\u4E1A\u8D37\u6B3E", "\u5FEB\u901F\u8D37\u6B3E\u5BA1\u6279"];
  const breadcrumbItems = [
    { label: "\u9996\u9875", href: "/zh" },
    { label: "\u670D\u52A1", href: "/zh/services" },
    { label: "\u8D37\u6B3E\u878D\u8D44", href: "/zh/services/loan-financing" }
  ];
  const faqs = [
    {
      question: "\u4F60\u4EEC\u63D0\u4F9B\u54EA\u4E9B\u7C7B\u578B\u7684\u5546\u4E1A\u8D37\u6B3E\uFF1F",
      answer: "\u6211\u4EEC\u63D0\u4F9B\u4E09\u79CD\u4E3B\u8981\u7684\u5546\u4E1A\u8D37\u6B3E\u7C7B\u578B\uFF1A\u8BBE\u5907\u878D\u8D44\u8D37\u6B3E\uFF08\u8D2D\u4E70\u673A\u68B0\u548C\u8F66\u8F86\uFF09\u3001\u8425\u8FD0\u8D44\u91D1\u8D37\u6B3E\uFF08\u65E5\u5E38\u8FD0\u8425\u548C\u73B0\u91D1\u6D41\uFF09\u4EE5\u53CA\u4E1A\u52A1\u6269\u5C55\u8D37\u6B3E\uFF08\u589E\u957F\u8BA1\u5212\uFF09\u3002\u6BCF\u79CD\u8D37\u6B3E\u7C7B\u578B\u90FD\u63D0\u4F9B\u7075\u6D3B\u768412\u81F360\u4E2A\u6708\u8FD8\u6B3E\u671F\u9650\uFF0C\u5E74\u5229\u73878-18%\uFF08\u9700\u7ECF\u8FC7\u4FE1\u7528\u8BC4\u4F30\uFF09\u3002"
    },
    {
      question: "\u7533\u8BF7\u5546\u4E1A\u8D37\u6B3E\u7684\u8D44\u683C\u8981\u6C42\u662F\u4EC0\u4E48\uFF1F",
      answer: "\u60A8\u7684\u516C\u53F8\u5FC5\u987B\u5728\u9A6C\u6765\u897F\u4E9A\u6CE8\u518C\uFF08\u79C1\u4EBA\u6709\u9650\u516C\u53F8\u3001\u4F01\u4E1A\u6216\u72EC\u8D44\u4F01\u4E1A\uFF09\uFF0C\u8425\u8FD0\u81F3\u5C116\u4E2A\u6708\uFF0C\u5E76\u6709\u53EF\u6838\u5B9E\u7684\u6536\u5165\u6216\u8425\u4E1A\u989D\u3002\u6211\u4EEC\u9700\u8981\u57FA\u672C\u6587\u4EF6\uFF0C\u5305\u62ECSSM\u6CE8\u518C\u3001\u94F6\u884C\u5BF9\u8D26\u5355\uFF086\u4E2A\u6708\uFF09\u3001\u8463\u4E8B\u8EAB\u4EFD\u8BC1/\u62A4\u7167\u548C\u8D22\u52A1\u62A5\u8868\uFF08\u5982\u6709\uFF09\u3002"
    },
    {
      question: "\u8D37\u6B3E\u5BA1\u6279\u548C\u653E\u6B3E\u9700\u8981\u591A\u957F\u65F6\u95F4\uFF1F",
      answer: "\u6211\u4EEC\u5FEB\u901F\u5904\u7406\u8D37\u6B3E\u7533\u8BF7\uFF0C\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u5F53\u5929\u5C31\u80FD\u7ED9\u51FA\u6279\u51C6\u51B3\u5B9A\u3002\u4E00\u65E6\u83B7\u6279\uFF0C\u8D44\u91D1\u53EF\u57283-5\u4E2A\u5DE5\u4F5C\u65E5\u5185\u53D1\u653E\u3002\u6211\u4EEC\u7684\u7B80\u5316\u6D41\u7A0B\u4E13\u4E3A\u9A6C\u6765\u897F\u4E9A\u4E2D\u5C0F\u4F01\u4E1A\u8BBE\u8BA1\uFF0C\u8BA9\u60A8\u5FEB\u901F\u83B7\u5F97\u6240\u9700\u8D44\u91D1\uFF0C\u65E0\u9700\u7ECF\u5386\u5197\u957F\u7684\u94F6\u884C\u7A0B\u5E8F\u3002"
    },
    {
      question: "\u5546\u4E1A\u8D37\u6B3E\u7684\u5229\u7387\u662F\u591A\u5C11\uFF1F",
      answer: "\u6211\u4EEC\u7684\u5546\u4E1A\u8D37\u6B3E\u5229\u7387\u4E3A\u5E74\u5229\u73878-18%\uFF08\u9700\u7ECF\u8FC7\u4FE1\u7528\u8BC4\u4F30\uFF09\uFF0C\u5177\u4F53\u5229\u7387\u53D6\u51B3\u4E8E\u8D37\u6B3E\u91D1\u989D\u3001\u8FD8\u6B3E\u671F\u9650\u3001\u4F01\u4E1A\u4FE1\u7528\u72B6\u51B5\u548C\u63D0\u4F9B\u7684\u62B5\u62BC\u54C1\u3002\u6211\u4EEC\u4E0E\u591A\u5BB6\u91D1\u878D\u5408\u4F5C\u4F19\u4F34\u5408\u4F5C\uFF0C\u4E3A\u60A8\u4E89\u53D6\u6700\u4F18\u60E0\u7684\u5229\u7387\u3002\u6240\u6709\u5229\u7387\u548C\u8D39\u7528\u5728\u60A8\u627F\u8BFA\u524D\u90FD\u4F1A\u900F\u660E\u516C\u5F00\u3002"
    },
    {
      question: "\u7533\u8BF7\u5546\u4E1A\u8D37\u6B3E\u9700\u8981\u62B5\u62BC\u54C1\u5417\uFF1F",
      answer: "\u62B5\u62BC\u54C1\u8981\u6C42\u53D6\u51B3\u4E8E\u8D37\u6B3E\u7C7B\u578B\u548C\u91D1\u989D\u3002\u8BBE\u5907\u878D\u8D44\u8D37\u6B3E\u4F7F\u7528\u8BBE\u5907\u672C\u8EAB\u4F5C\u4E3A\u62B5\u62BC\u3002\u5BF9\u4E8E\u8425\u8FD0\u8D44\u91D1\u548C\u6269\u5C55\u8D37\u6B3E\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u5546\u4E1A\u8D44\u4EA7\u3001\u623F\u4EA7\u6216\u4E2A\u4EBA\u62C5\u4FDD\u3002\u4F46\u6211\u4EEC\u63D0\u4F9B\u7075\u6D3B\u7684\u62B5\u62BC\u9009\u9879\uFF0C\u53EF\u4EE5\u6839\u636E\u60A8\u7684\u60C5\u51B5\u5B89\u6392\u5404\u79CD\u62C5\u4FDD\u65B9\u5F0F\u3002"
    },
    {
      question: "\u521D\u521B\u4F01\u4E1A\u6216\u65B0\u516C\u53F8\u53EF\u4EE5\u7533\u8BF7\u8D37\u6B3E\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF01\u867D\u7136\u6210\u719F\u4F01\u4E1A\u66F4\u5177\u4F18\u52BF\uFF0C\u4F46\u6211\u4EEC\u786E\u5B9E\u4E3A\u521D\u521B\u4F01\u4E1A\u548C\u8F83\u65B0\u7684\u4F01\u4E1A\uFF08\u6700\u5C11\u8425\u8FD06\u4E2A\u6708\uFF09\u63D0\u4F9B\u878D\u8D44\u3002\u5BF9\u4E8E\u8F83\u65B0\u7684\u516C\u53F8\uFF0C\u6211\u4EEC\u53EF\u80FD\u8981\u6C42\u66F4\u9AD8\u7684\u9996\u4ED8\u3001\u4E2A\u4EBA\u62C5\u4FDD\u6216\u989D\u5916\u7684\u6587\u4EF6\u8BC1\u660E\u4E1A\u52A1\u53EF\u884C\u6027\u3002\u6211\u4EEC\u7684\u4E13\u5458\u4F1A\u4E0E\u60A8\u5408\u4F5C\u627E\u5230\u5408\u9002\u7684\u878D\u8D44\u89E3\u51B3\u65B9\u6848\u3002"
    },
    {
      question: "\u6700\u9AD8\u53EF\u4EE5\u501F\u5230\u591A\u5C11\u8D37\u6B3E\u91D1\u989D\uFF1F",
      answer: "\u8D37\u6B3E\u91D1\u989D\u4ECERM 50,000\u5230RM 5,000,000\u4E0D\u7B49\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u60A8\u7684\u4E1A\u52A1\u9700\u6C42\u3001\u8D22\u52A1\u80FD\u529B\u548C\u8D37\u6B3E\u7C7B\u578B\u3002\u8BBE\u5907\u878D\u8D44\u901A\u5E38\u8986\u76D6\u8BBE\u5907\u4EF7\u503C\u768470-90%\uFF0C\u800C\u8425\u8FD0\u8D44\u91D1\u8D37\u6B3E\u5219\u57FA\u4E8E\u60A8\u7684\u6708\u6536\u5165\u548C\u8FD0\u8425\u9700\u6C42\u3002\u8BF7\u8054\u7CFB\u6211\u4EEC\u8FDB\u884C\u5B9A\u5236\u8BC4\u4F30\u3002"
    },
    {
      question: "\u8D37\u6B3E\u53EF\u4EE5\u7528\u4E8E\u591A\u79CD\u7528\u9014\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF0C\u6211\u4EEC\u7684\u5546\u4E1A\u8D37\u6B3E\u53EF\u4EE5\u9488\u5BF9\u591A\u79CD\u7528\u9014\u8FDB\u884C\u7ED3\u6784\u5316\u8BBE\u8BA1\u3002\u4F8B\u5982\uFF0C\u60A8\u53EF\u4EE5\u5C06\u8BBE\u5907\u8D2D\u4E70\u4E0E\u8425\u8FD0\u8D44\u91D1\u9700\u6C42\u5408\u5E76\u5728\u4E00\u7B14\u8D37\u6B3E\u4E2D\u3002\u6211\u4EEC\u63D0\u4F9B\u7075\u6D3B\u7684\u878D\u8D44\u89E3\u51B3\u65B9\u6848\uFF0C\u6839\u636E\u60A8\u7684\u5B8C\u6574\u4E1A\u52A1\u9700\u6C42\u91CF\u8EAB\u5B9A\u5236\uFF0C\u800C\u4E0D\u662F\u50F5\u5316\u7684\u5355\u4E00\u7528\u9014\u8D37\u6B3E\u3002"
    },
    {
      question: "\u5982\u679C\u6211\u7684\u4F01\u4E1A\u9047\u5230\u8D22\u52A1\u56F0\u96BE\u600E\u4E48\u529E\uFF1F",
      answer: "\u6211\u4EEC\u7406\u89E3\u4F01\u4E1A\u9762\u4E34\u7684\u6311\u6218\u548C\u73B0\u91D1\u6D41\u6CE2\u52A8\u3002\u5982\u679C\u60A8\u9884\u8BA1\u8FD8\u6B3E\u56F0\u96BE\uFF0C\u8BF7\u7ACB\u5373\u8054\u7CFB\u6211\u4EEC\u3002\u6211\u4EEC\u63D0\u4F9B\u8FD8\u6B3E\u91CD\u7EC4\u3001\u4E34\u65F6\u8FD8\u6B3E\u5BBD\u514D\u548C\u5176\u4ED6\u89E3\u51B3\u65B9\u6848\u3002\u53CA\u65E9\u6C9F\u901A\u8BA9\u6211\u4EEC\u80FD\u591F\u5E2E\u52A9\u60A8\u7EF4\u6301\u4E1A\u52A1\u8FD0\u8425\uFF0C\u540C\u65F6\u8D1F\u8D23\u4EFB\u5730\u7BA1\u7406\u8D37\u6B3E\u4E49\u52A1\u3002"
    },
    {
      question: "\u5982\u4F55\u7533\u8BF7\u5546\u4E1A\u8D37\u6B3E\uFF1F",
      answer: "\u53EA\u9700\u81F4\u7535017-570 0889\u3001WhatsApp\u8054\u7CFB\u6211\u4EEC\uFF0C\u6216\u586B\u5199\u5728\u7EBF\u8054\u7CFB\u8868\u3002\u6211\u4EEC\u7684\u5546\u4E1A\u878D\u8D44\u4E13\u5458\u5C06\u8BA8\u8BBA\u60A8\u7684\u5177\u4F53\u9700\u6C42\uFF0C\u89E3\u91CA\u8D37\u6B3E\u9009\u9879\uFF0C\u5E76\u6307\u5BFC\u60A8\u5B8C\u6210\u7533\u8BF7\u6D41\u7A0B\u3002\u6211\u4EEC\u8BA9\u5546\u4E1A\u878D\u8D44\u53D8\u5F97\u7B80\u5355\u4FBF\u6377\uFF0C\u6587\u4EF6\u8981\u6C42\u6700\u5C11\uFF0C\u6548\u7387\u6700\u9AD8\u3002"
    }
  ];
  const servicePageSchema = generateServicePageSchema({
    serviceName: "\u5546\u4E1A\u8D37\u6B3E\u878D\u8D44\u670D\u52A1",
    description: "\u4E3A\u9A6C\u6765\u897F\u4E9A\u4E2D\u5C0F\u4F01\u4E1A\u63D0\u4F9B\u5168\u9762\u7684\u5546\u4E1A\u8D37\u6B3E\u89E3\u51B3\u65B9\u6848\uFF0C\u5305\u62EC\u8BBE\u5907\u878D\u8D44\u3001\u8425\u8FD0\u8D44\u91D1\u8D37\u6B3E\u548C\u4E1A\u52A1\u6269\u5C55\u878D\u8D44",
    serviceType: "\u5546\u4E1A\u8D37\u6B3E\u878D\u8D44",
    minRate: "8.00",
    maxRate: "18.00",
    locale: "zh"
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "lang": lang, "keywords": keywords, "ogType": "website", "data-astro-cid-4g74exyj": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": servicePageSchema, "data-astro-cid-4g74exyj": true })}  ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": faqSchema, "data-astro-cid-4g74exyj": true })}  ${maybeRenderHead()}<div class="container-custom py-4" data-astro-cid-4g74exyj> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems, "data-astro-cid-4g74exyj": true })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u8BBE\u5907\u4E0E\u4E1A\u52A1\u589E\u957F\u7684\u5546\u4E1A\u8D37\u6B3E\u878D\u8D44", "subtitle": "\u5FEB\u901F\u7075\u6D3B\u7684\u878D\u8D44\u52A9\u60A8\u4E1A\u52A1\u589E\u957F\u3002\u8BBE\u5907\u8D37\u6B3E\u3001\u8425\u8FD0\u8D44\u91D1\u3001\u6269\u5C55\u878D\u8D44\uFF0C\u5FEB\u901F\u5BA1\u6279\u3002\u7ACB\u5373\u83B7\u53D6\u514D\u8D39\u62A5\u4EF7\uFF01", "ctaText": "\u7533\u8BF7\u8D37\u6B3E", "ctaLink": "/zh/contact", "ctaSecondaryText": "WhatsApp\u8054\u7CFB", "ctaSecondaryLink": "https://wa.me/60175700889", "lang": lang, "trustSignals": ["\u5FEB\u901F\u5BA1\u6279", "RM 50K-5M\u8D37\u6B3E"], "data-astro-cid-4g74exyj": true })}  <section class="section-padding bg-gray-50" data-astro-cid-4g74exyj> <div class="container-custom" data-astro-cid-4g74exyj> <div class="max-w-4xl mx-auto" data-astro-cid-4g74exyj> <div class="text-center mb-12" data-astro-cid-4g74exyj> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>
为马来西亚中小企业提供商业贷款融资解决方案
</h2> <div class="w-20 h-1 bg-accent mx-auto mb-6" data-astro-cid-4g74exyj></div> </div> <div class="prose prose-lg max-w-none" data-astro-cid-4g74exyj> <p class="text-gray-700 leading-relaxed mb-6" data-astro-cid-4g74exyj>
商业贷款融资为马来西亚中小企业提供所需资金，用于购买设备、管理现金流和扩展业务。与需要数周甚至数月的传统银行贷款不同，我们专业的商业融资解决方案以速度和灵活性为核心——非常适合需要快速获得资金的建筑、物流和工业企业。
</p> <p class="text-gray-700 leading-relaxed mb-6" data-astro-cid-4g74exyj>
无论您是购买新挖掘机、扩展货车车队、升级仓库叉车，还是需要营运资金来管理季节性现金流，我们的商业贷款融资都能在3-5天内为您提供资金，利率从每年6.5%起，极具竞争力。
</p> <div class="bg-white p-6 rounded-lg border-l-4 border-primary shadow-[2px_2px_0_#2D1810]" data-astro-cid-4g74exyj> <h3 class="text-xl font-bold text-primary mb-3" data-astro-cid-4g74exyj>为什么选择商业贷款而非传统融资？</h3> <ul class="space-y-3 text-gray-700" data-astro-cid-4g74exyj> <li data-astro-cid-4g74exyj><strong data-astro-cid-4g74exyj>更快审批：</strong>快速处理 vs 银行的2-4周</li> <li data-astro-cid-4g74exyj><strong data-astro-cid-4g74exyj>灵活要求：</strong>我们与较新的企业和各种信用状况合作（需经过评估）</li> <li data-astro-cid-4g74exyj><strong data-astro-cid-4g74exyj>多种用途：</strong>在一笔贷款中结合设备融资和营运资金</li> <li data-astro-cid-4g74exyj><strong data-astro-cid-4g74exyj>优惠利率：</strong>通过多家融资机构确保最优条款</li> <li data-astro-cid-4g74exyj><strong data-astro-cid-4g74exyj>定制期限：</strong>还款计划与您的业务现金流保持一致</li> </ul> </div> </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-4g74exyj> <div class="container-custom" data-astro-cid-4g74exyj> <div class="text-center mb-12" data-astro-cid-4g74exyj> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>
我们的商业贷款产品
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-4g74exyj>
根据您的业务需求量身定制的灵活融资解决方案
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-4g74exyj></div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-4g74exyj> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow border-t-4 border-primary" data-astro-cid-4g74exyj> <div class="text-primary text-5xl mb-4" data-astro-cid-4g74exyj>🚜</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>设备融资贷款</h3> <p class="text-gray-600 mb-6" data-astro-cid-4g74exyj>
购买建筑设备、物流车辆或工业机械，贷款覆盖设备价值的70-90%。
</p> <ul class="text-gray-700 space-y-2 mb-6" data-astro-cid-4g74exyj> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
挖掘机、货车、叉车
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
新旧设备（最多10年）
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
期限：12-60个月
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
设备作为抵押品
</li> </ul> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u7533\u8BF7\u8BBE\u5907\u8D37\u6B3E", "link": "/zh/contact", "variant": "primary", "size": "medium", "data-astro-cid-4g74exyj": true })} </div> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow border-t-4 border-secondary" data-astro-cid-4g74exyj> <div class="text-secondary text-5xl mb-4" data-astro-cid-4g74exyj>💰</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>营运资金贷款</h3> <p class="text-gray-600 mb-6" data-astro-cid-4g74exyj>
管理日常运营、支付供应商、支付工资或平滑季节性现金流缺口的灵活营运资金。
</p> <ul class="text-gray-700 space-y-2 mb-6" data-astro-cid-4g74exyj> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
快速现金流解决方案
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
灵活使用资金
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
期限：12-36个月
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
基于收入的评估
</li> </ul> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u7533\u8BF7\u8425\u8FD0\u8D44\u91D1", "link": "/zh/contact", "variant": "secondary", "size": "medium", "data-astro-cid-4g74exyj": true })} </div> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow border-t-4 border-accent" data-astro-cid-4g74exyj> <div class="text-accent text-5xl mb-4" data-astro-cid-4g74exyj>📈</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>业务扩展贷款</h3> <p class="text-gray-600 mb-6" data-astro-cid-4g74exyj>
为增长计划提供资金，包括新地点、额外设备、员工扩编或市场开发项目。
</p> <ul class="text-gray-700 space-y-2 mb-6" data-astro-cid-4g74exyj> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
增长融资解决方案
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
更大的贷款金额
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
期限：24-60个月
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
优惠的扩展利率
</li> </ul> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u7533\u8BF7\u6269\u5C55\u8D37\u6B3E", "link": "/zh/contact", "variant": "accent", "size": "medium", "data-astro-cid-4g74exyj": true })} </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-4g74exyj> <div class="container-custom" data-astro-cid-4g74exyj> <div class="text-center mb-12" data-astro-cid-4g74exyj> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>
为什么选择Ing Heng Credit申请商业贷款？
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-4g74exyj>
专为马来西亚中小企业打造的快速灵活融资
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-4g74exyj></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-4g74exyj> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "lightning", "title": "\u5FEB\u901F\u5BA1\u6279", "description": "\u5FEB\u901F\u5904\u7406\u60A8\u7684\u7533\u8BF7\uFF0C\u5F53\u5929\u6279\u51C6\u51B3\u5B9A\u3002\u65E0\u9700\u94F6\u884C\u7684\u6F2B\u957F\u7B49\u5F85\u671F\u3002", "data-astro-cid-4g74exyj": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "percentage", "title": "8-18%\u5229\u7387", "description": "\u5E74\u5229\u73878-18%\uFF08\u9700\u7ECF\u8FC7\u4FE1\u7528\u8BC4\u4F30\uFF09\u3002\u6211\u4EEC\u901A\u8FC7\u8D37\u6B3E\u673A\u6784\u7F51\u7EDC\u4E3A\u60A8\u4E89\u53D6\u6700\u4F18\u6761\u6B3E\u3002", "data-astro-cid-4g74exyj": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "calendar", "title": "12-60\u4E2A\u6708\u671F\u9650", "description": "\u7075\u6D3B\u7684\u8FD8\u6B3E\u671F\u9650\uFF0C\u4E0E\u60A8\u7684\u4E1A\u52A1\u73B0\u91D1\u6D41\u548C\u589E\u957F\u8BA1\u5212\u4FDD\u6301\u4E00\u81F4\u3002", "data-astro-cid-4g74exyj": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "users", "title": "\u591A\u8BED\u8A00\u670D\u52A1", "description": "\u63D0\u4F9B\u82F1\u8BED\u3001\u534E\u8BED\u548C\u9A6C\u6765\u8BED\u652F\u6301\uFF0C\u65B9\u4FBF\u60A8\u7684\u6C9F\u901A\u3002", "data-astro-cid-4g74exyj": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "default", "title": "RM 50K - 5M \u8D37\u6B3E", "description": "\u6839\u636E\u60A8\u7684\u9700\u6C42\u63D0\u4F9BRM 50,000\u81F3RM 5,000,000\u7684\u53EF\u6269\u5C55\u8D37\u6B3E\u91D1\u989D\u3002", "data-astro-cid-4g74exyj": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "default", "title": "\u7075\u6D3B\u62B5\u62BC", "description": "\u591A\u79CD\u62C5\u4FDD\u9009\u9879\uFF0C\u5305\u62EC\u8BBE\u5907\u3001\u623F\u4EA7\u6216\u4E2A\u4EBA\u62C5\u4FDD\u3002", "data-astro-cid-4g74exyj": true })} ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": "clock", "title": "3-5\u5929\u653E\u6B3E", "description": "\u6279\u51C6\u540E3-5\u4E2A\u5DE5\u4F5C\u65E5\u5185\u53D1\u653E\u8D44\u91D1\u3002\u5728\u60A8\u9700\u8981\u65F6\u83B7\u5F97\u8D44\u91D1\u3002", "data-astro-cid-4g74exyj": true })} </div> </div> </section>  <section class="section-padding" data-astro-cid-4g74exyj> <div class="container-custom" data-astro-cid-4g74exyj> <div class="text-center mb-12" data-astro-cid-4g74exyj> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>
简单的3步申请流程
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-4g74exyj>
几天内获得商业贷款批准和资金
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-4g74exyj></div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-astro-cid-4g74exyj> <div class="text-center" data-astro-cid-4g74exyj> <div class="w-24 h-24 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-[6px_6px_0_#2D1810]" data-astro-cid-4g74exyj>
1
</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>提交申请</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-4g74exyj>
通过电话、WhatsApp或在线表格联系我们。提供基本的业务信息和贷款要求。我们的专员将指导您准备文件。
</p> </div> <div class="text-center" data-astro-cid-4g74exyj> <div class="w-24 h-24 bg-gradient-to-br from-secondary to-accent text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-[6px_6px_0_#2D1810]" data-astro-cid-4g74exyj>
2
</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>快速获批</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-4g74exyj>
我们审查您的申请并提交给我们的融资机构网络。快速收到批准决定，包括详细的贷款条款和利率。
</p> </div> <div class="text-center" data-astro-cid-4g74exyj> <div class="w-24 h-24 bg-gradient-to-br from-accent to-primary text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-[6px_6px_0_#2D1810]" data-astro-cid-4g74exyj>
3
</div> <h3 class="text-2xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>3-5天内收到资金</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-4g74exyj>
签署贷款协议，完成最终文件，资金即发放到您的账户。立即开始使用资金发展您的业务！
</p> </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-br from-primary to-secondary text-white" data-astro-cid-4g74exyj> <div class="container-custom" data-astro-cid-4g74exyj> <div class="max-w-4xl mx-auto" data-astro-cid-4g74exyj> <div class="text-center mb-12" data-astro-cid-4g74exyj> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-4g74exyj>
资格与要求
</h2> <p class="text-xl text-white/90" data-astro-cid-4g74exyj>
简单的文件要求，快速的商业贷款批准
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-4g74exyj></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10" data-astro-cid-4g74exyj> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-4g74exyj> <h3 class="text-2xl font-bold mb-4" data-astro-cid-4g74exyj>基本要求</h3> <ul class="space-y-3 text-white/90" data-astro-cid-4g74exyj> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
在马来西亚注册的企业（最少营运6个月）
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
有效的SSM注册（私人有限公司、企业或独资企业）
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
可核实的业务收入或营业额
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
良好的信用记录（某些情况下可灵活处理）
</li> </ul> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-4g74exyj> <h3 class="text-2xl font-bold mb-4" data-astro-cid-4g74exyj>所需文件</h3> <ul class="space-y-3 text-white/90" data-astro-cid-4g74exyj> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
公司SSM注册（Form 9 & 49）
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
最近6个月的公司银行对账单
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
董事身份证/护照复印件
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
财务报表（如有）
</li> <li class="flex items-start" data-astro-cid-4g74exyj> <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4g74exyj> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-4g74exyj></path> </svg>
业务计划/提案（用于扩展贷款）
</li> </ul> </div> </div> <div class="text-center" data-astro-cid-4g74exyj> <p class="text-white/90 mb-6" data-astro-cid-4g74exyj>
没有全部文件？没问题！我们的团队将帮助您准备所需文件。
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u7ACB\u5373\u5F00\u59CB\u7533\u8BF7", "link": "/zh/contact", "variant": "accent", "size": "large", "data-astro-cid-4g74exyj": true })} </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-4g74exyj> <div class="container-custom" data-astro-cid-4g74exyj> <div class="max-w-2xl mx-auto" data-astro-cid-4g74exyj> <div class="text-center mb-12" data-astro-cid-4g74exyj> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>
计算您的商业贷款月供
</h2> <p class="text-xl text-gray-600" data-astro-cid-4g74exyj>
估算您的设备或商业贷款的每月还款额
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-4g74exyj></div> </div> ${renderComponent($$result2, "Calculator", $$Calculator, { "lang": lang, "equipmentType": "\u5546\u4E1A\u8D37\u6B3E", "defaultPrice": 2e5, "data-astro-cid-4g74exyj": true })} </div> </div> </section>  <section class="section-padding" data-astro-cid-4g74exyj> <div class="container-custom" data-astro-cid-4g74exyj> <div class="max-w-4xl mx-auto" data-astro-cid-4g74exyj> <div class="text-center mb-12" data-astro-cid-4g74exyj> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>
常见问题
</h2> <p class="text-xl text-gray-600" data-astro-cid-4g74exyj>
关于商业贷款融资您需要知道的一切
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-4g74exyj></div> </div> <div class="space-y-4" data-astro-cid-4g74exyj> ${faqs.map((faq, index) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer, "isOpen": index === 0, "data-astro-cid-4g74exyj": true })}`)} </div> <div class="mt-10 text-center" data-astro-cid-4g74exyj> <p class="text-gray-600 mb-6" data-astro-cid-4g74exyj>
还有其他问题？我们的商业融资专员随时为您服务。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-4g74exyj> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u81F4\u7535\uFF1A017-570 0889", "link": "tel:+60175700889", "variant": "primary", "icon": "phone", "data-astro-cid-4g74exyj": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp\u8054\u7CFB", "link": "https://wa.me/60175700889", "variant": "accent", "icon": "whatsapp", "data-astro-cid-4g74exyj": true })} </div> </div> </div> </div> </section>  <section class="section-padding bg-gray-50" data-astro-cid-4g74exyj> <div class="container-custom" data-astro-cid-4g74exyj> <div class="text-center mb-12" data-astro-cid-4g74exyj> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>
相关融资服务
</h2> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-4g74exyj></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" data-astro-cid-4g74exyj> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-4g74exyj> <h3 class="text-2xl font-bold text-primary mb-3" data-astro-cid-4g74exyj>租购融资</h3> <p class="text-gray-600 mb-4" data-astro-cid-4g74exyj>
通过负担得起的月供拥有您的设备。非常适合挖掘机、货车和叉车，灵活的12-60个月期限。
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u4E86\u89E3\u79DF\u8D2D\u878D\u8D44", "link": "/zh/services/hire-purchase", "variant": "primary", "data-astro-cid-4g74exyj": true })} </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-4g74exyj> <h3 class="text-2xl font-bold text-primary mb-3" data-astro-cid-4g74exyj>设备保险</h3> <p class="text-gray-600 mb-4" data-astro-cid-4g74exyj>
通过全面的保险覆盖保护您宝贵的设备投资。为您的机械和车辆提供安心保障。
</p> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u4E86\u89E3\u4FDD\u9669\u670D\u52A1", "link": "/zh/services/insurance", "variant": "primary", "data-astro-cid-4g74exyj": true })} </div> </div> </div> </section>  <section class="section-padding bg-gradient-to-r from-primary via-secondary to-accent text-white" data-astro-cid-4g74exyj> <div class="container-custom" data-astro-cid-4g74exyj> <div class="max-w-4xl mx-auto text-center" data-astro-cid-4g74exyj> <h2 class="text-3xl md:text-4xl font-bold mb-6" data-astro-cid-4g74exyj>
准备好通过贷款发展您的业务了吗？
</h2> <p class="text-xl text-white/90 mb-8 leading-relaxed" data-astro-cid-4g74exyj>
加入500多家信任Ing Heng Credit提供快速灵活商业融资的马来西亚中小企业。快速获批，3-5天内获得资金！
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" data-astro-cid-4g74exyj> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-4g74exyj> <div class="text-4xl font-bold mb-2" data-astro-cid-4g74exyj>快速</div> <div class="text-white/90" data-astro-cid-4g74exyj>批准时间</div> </div> <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg" data-astro-cid-4g74exyj> <div class="text-4xl font-bold mb-2" data-astro-cid-4g74exyj>8-18%</div> <div class="text-white/90" data-astro-cid-4g74exyj>利率范围</div> </div> </div> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-4g74exyj> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "\u7533\u8BF7\u5546\u4E1A\u8D37\u6B3E", "link": "/zh/contact", "variant": "accent", "size": "large", "data-astro-cid-4g74exyj": true })} ${renderComponent($$result2, "CTAButton", $$CTAButton, { "text": "WhatsApp\uFF1A017-570 0889", "link": "https://wa.me/60175700889", "variant": "outline-white", "size": "large", "icon": "whatsapp", "data-astro-cid-4g74exyj": true })} </div> </div> </div> </section>  <section class="section-padding" data-astro-cid-4g74exyj> <div class="container-custom" data-astro-cid-4g74exyj> <div class="max-w-3xl mx-auto" data-astro-cid-4g74exyj> <div class="text-center mb-12" data-astro-cid-4g74exyj> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4" data-astro-cid-4g74exyj>
获取免费贷款报价
</h2> <p class="text-xl text-gray-600" data-astro-cid-4g74exyj>
填写表格，我们的专员将尽快联系您
</p> <div class="w-20 h-1 bg-accent mx-auto mt-4" data-astro-cid-4g74exyj></div> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang, "data-astro-cid-4g74exyj": true })} </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/services/loan-financing.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/services/loan-financing.astro";
const $$url = "/zh/services/loan-financing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LoanFinancing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
