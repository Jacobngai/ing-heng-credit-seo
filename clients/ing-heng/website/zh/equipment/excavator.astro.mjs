/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { c as generateProductSchema, a as generateFAQSchema, $ as $$BaseLayout, e as encodeJSONLD } from '../../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$BenefitCard } from '../../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$StepCard } from '../../../chunks/StepCard_CWNcWtHa.mjs';
import { $ as $$FAQItem } from '../../../chunks/FAQItem_CTpbqvJe.mjs';
import { $ as $$ContactForm } from '../../../chunks/ContactForm_BUPsgIWX.mjs';
import { $ as $$Calculator } from '../../../chunks/Calculator_BS1M0nbC.mjs';
import { $ as $$TestimonialCard } from '../../../chunks/TestimonialCard_DCNY-qZL.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { $ as $$RelatedEquipment } from '../../../chunks/RelatedEquipment_ZkPtOS9o.mjs';
import { S as SITE_CONFIG } from '../../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Excavator = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u6316\u6398\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | \u5FEB\u901F\u6279\u51C6 | Industry-Leading\u6279\u51C6\u7387 | \u4FE1\u8A89\u4FDD\u8BC1";
  const pageDescription = "\u4E13\u4E1A\u6316\u6398\u673A\u878D\u8D44\u670D\u52A1\u3002\u5FEB\u901F\u6279\u51C6\uFF0CIndustry-Leading\u6279\u51C6\u7387\uFF0C\u7075\u6D3B12-60\u4E2A\u6708\u8FD8\u6B3E\u671F\u3002\u63A5\u53D7\u65B0\u65E7\u6316\u6398\u673A\u3002\u7ACB\u5373\u7533\u8BF7\uFF01";
  const keywords = ["\u6316\u6398\u673A\u878D\u8D44", "\u6316\u6398\u673A\u8D37\u6B3E", "\u5EFA\u7B51\u8BBE\u5907\u878D\u8D44", "\u91CD\u578B\u8BBE\u5907\u8D37\u6B3E", "\u6316\u6398\u673A\u79DF\u8D41"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u6316\u6398\u673A\u878D\u8D44", url: "/zh/equipment/excavator" }
  ];
  const benefits = [
    { icon: "clock", title: "\u5FEB\u901F\u6279\u51C6", description: "\u5FEB\u901F\u6279\u51C6\uFF0C\u8BA9\u60A8\u7684\u9879\u76EE\u4E0D\u803D\u8BEF\uFF0C\u4FE1\u5B88\u627F\u8BFA\u3002" },
    { icon: "percentage", title: "Industry-Leading\u6279\u51C6\u7387", description: "\u884C\u4E1A\u9886\u5148\u7684\u6279\u51C6\u7387\u3002\u6211\u4EEC\u6279\u51C6\u5176\u4ED6\u94F6\u884C\u62D2\u7EDD\u7684\u7533\u8BF7\u3002" },
    { icon: "calendar", title: "\u7075\u6D3B12-60\u4E2A\u6708\u671F\u9650", description: "\u6839\u636E\u60A8\u7684\u9879\u76EE\u65F6\u95F4\u548C\u73B0\u91D1\u6D41\u9009\u62E9\u8FD8\u6B3E\u671F\u9650\u3002" },
    { icon: "shield", title: "\u63A5\u53D7\u65B0\u65E7\u6316\u6398\u673A", description: "\u878D\u8D44\u65B0\u65E7\u6316\u6398\u673A\uFF0C\u63A5\u53D710\u5E74\u4EE5\u5185\u7684\u4EFB\u4F55\u54C1\u724C\u3002" },
    { icon: "users", title: "\u9996\u4ED8\u4ECE0%\u8D77*", description: "\u6700\u4F4E\u542F\u52A8\u6295\u8D44\u3002\u7B26\u5408\u6761\u4EF6\u8005\u53EF\u8D37\u6B3E\u81F3100%*\u3002\u4FDD\u7559\u60A8\u7684\u8425\u8FD0\u8D44\u91D1\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "clock", title: "\u514D\u8D39\u8BBE\u5907\u8BC4\u4F30", description: "\u4E13\u4E1A\u8BC4\u4F30\u670D\u52A1\uFF0C\u65E0\u9700\u8D39\u7528\u3002\u7ACB\u5373\u4E86\u89E3\u60A8\u7684\u8BBE\u5907\u4EF7\u503C\u3002" },
    { icon: "shield", title: "\u65E0\u9690\u85CF\u8D39\u7528", description: "\u900F\u660E\u5B9A\u4EF7\uFF0C\u6CA1\u6709\u610F\u5916\u6536\u8D39\u3002\u7ADE\u4E89\u6027\u5229\u73878-18%\u5E74\u5229\u7387\u3002\u65E0\u63D0\u524D\u8FD8\u6B3E\u7F5A\u6B3E\u3002\u8BDA\u4FE1\u7ECF\u842540\u5E74\u3002" }
  ];
  const steps = [
    { stepNumber: 1, icon: "contact", title: "\u8054\u7CFB\u6211\u4EEC", description: "\u901A\u8FC7WhatsApp\u3001\u7535\u8BDD\u6216\u5728\u7EBF\u8868\u683C\u8054\u7CFB\u3002\u4E0E\u6211\u4EEC\u7684\u878D\u8D44\u4E13\u5BB6\u4EA4\u8C08\u3002" },
    { stepNumber: 2, icon: "document", title: "\u63D0\u4EA4\u6587\u4EF6", description: "\u63D0\u4F9B\u8EAB\u4EFD\u8BC1\u3001\u94F6\u884C\u5BF9\u8D26\u5355\u548C\u516C\u53F8\u6587\u4EF6\u3002\u7B80\u5355\u7684\u6587\u4E66\u6D41\u7A0B\u3002" },
    { stepNumber: 3, icon: "check", title: "\u5FEB\u901F\u83B7\u5F97\u6279\u51C6", description: "\u5FEB\u901F\u6536\u5230\u6279\u51C6\u51B3\u5B9A\u3002\u5FEB\u901F\u5904\u7406\u4FDD\u8BC1\u3002" },
    { stepNumber: 4, icon: "clipboard", title: "\u5B8C\u6210\u6587\u4E66\u5DE5\u4F5C", description: "\u7B7E\u7F72\u8D37\u6B3E\u534F\u8BAE\u5E76\u5B8C\u6210\u6700\u7EC8\u6587\u4EF6\u3002" },
    { stepNumber: 5, icon: "truck", title: "\u83B7\u5F97\u60A8\u7684\u6316\u6398\u673A", description: "\u6536\u5230\u8D44\u91D1\u5E76\u53D6\u5F97\u6316\u6398\u673A\u3002\u7ACB\u5373\u5F00\u59CB\u5DE5\u4F5C\u3002" }
  ];
  const testimonials = [
    {
      name: "\u9648\u5FD7\u5F3A",
      company: "\u5FD7\u5F3A\u5EFA\u7B51\u6709\u9650\u516C\u53F8",
      location: "\u96EA\u5170\u83AA\uFF0C\u5DF4\u751F",
      testimonial: "\u6211\u9700\u8981\u4E00\u53F0\u6316\u6398\u673A\u7528\u4E8E\u653F\u5E9C\u9879\u76EE\u3002\u94F6\u884C\u62D2\u7EDD\u4E86\u6211\u7684\u7533\u8BF7\uFF0C\u4F46Ing Heng Credit\u572818\u5C0F\u65F6\u5185\u6279\u51C6\u4E86\uFF0C\u53EA\u970010%\u9996\u4ED8\u3002\u73B0\u5728\u6211\u7684\u4E1A\u52A1\u589E\u957F\u4E8640%\u3002\u4ED6\u4EEC\u662F\u771F\u6B63\u4E86\u89E3\u5EFA\u7B51\u884C\u4E1A\u7684\u91D1\u878D\u4F19\u4F34\u3002",
      rating: 5
    },
    {
      name: "\u674E\u6587\u534E",
      company: "\u6587\u534E\u571F\u6728\u5DE5\u7A0B",
      location: "\u67D4\u4F5B\uFF0C\u65B0\u5C71",
      rating: 5
    },
    {
      name: "\u9EC4\u5EFA\u660E",
      company: "\u5EFA\u660E\u673A\u68B0\u79DF\u8D41",
      location: "\u9739\u96F3\uFF0C\u6021\u4FDD",
      testimonial: "\u4ECE\u8D2D\u4E70\u7B2C\u4E00\u53F0\u4E8C\u624B\u6316\u6398\u673A\u5F00\u59CB\uFF0C\u5230\u73B0\u5728\u62E5\u67096\u53F0\u8BBE\u5907\u7684\u79DF\u8D41\u4E1A\u52A1\u3002Ing Heng Credit\u4E00\u76F4\u652F\u6301\u6211\u7684\u6210\u957F\u3002\u4ED6\u4EEC\u7406\u89E3\u5BB6\u65CF\u751F\u610F\u7684\u6311\u6218\uFF0C\u63D0\u4F9B\u6700\u9002\u5408\u7684\u878D\u8D44\u65B9\u6848\u3002",
      rating: 5
    }
  ];
  const faqs = [
    { question: "\u53EF\u4EE5\u878D\u8D44\u4E8C\u624B\u6316\u6398\u673A\u5417\uFF1F", answer: "\u53EF\u4EE5\uFF01\u6211\u4EEC\u63A5\u53D710\u5E74\u4EE5\u5185\u7684\u4E8C\u624B\u6316\u6398\u673A\uFF0C\u4EFB\u4F55\u4FE1\u8A89\u826F\u597D\u7684\u54C1\u724C\u3002\u8BBE\u5907\u5FC5\u987B\u5904\u4E8E\u826F\u597D\u5DE5\u4F5C\u72B6\u6001\u5E76\u901A\u8FC7\u6211\u4EEC\u7684\u68C0\u67E5\u3002" },
    { question: "\u63A5\u53D7\u7684\u6700\u5927\u6316\u6398\u673A\u5E74\u9F84\u662F\u591A\u5C11\uFF1F", answer: "\u6211\u4EEC\u63A5\u53D710\u5E74\u4EE5\u5185\u7684\u6316\u6398\u673A\u8FDB\u884C\u878D\u8D44\u3002\u8F83\u65E7\u7684\u8BBE\u5907\u53EF\u80FD\u9700\u8981\u66F4\u9AD8\u7684\u9996\u4ED8\u6216\u8F83\u77ED\u7684\u8D37\u6B3E\u671F\u9650\u3002" },
    { question: "\u9996\u6B21\u521B\u4E1A\u7684\u627F\u5305\u5546\u53EF\u4EE5\u7533\u8BF7\u5417\uFF1F", answer: "\u5F53\u7136\u53EF\u4EE5\uFF01\u6211\u4EEC\u4E13\u95E8\u5E2E\u52A9\u65B0\u627F\u5305\u5546\u8D77\u6B65\u3002\u6211\u4EEC\u770B\u91CD\u60A8\u7684\u9879\u76EE\u6F5C\u529B\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u4FE1\u7528\u5386\u53F2\u3002Industry-Leading\u7684\u6279\u51C6\u7387\u8BC1\u660E\u6211\u4EEC\u652F\u6301\u6210\u957F\u4E2D\u7684\u4F01\u4E1A\u3002" },
    { question: "\u5982\u679C\u6211\u6709\u4E0D\u826F\u4FE1\u7528\u6216\u4EE5\u524D\u7684\u8D37\u6B3E\u8FDD\u7EA6\u600E\u4E48\u529E\uFF1F", answer: "\u6211\u4EEC\u9010\u4E00\u8003\u8651\u6BCF\u4E2A\u7533\u8BF7\u3002\u4E0D\u826F\u4FE1\u7528\u4E0D\u610F\u5473\u7740\u81EA\u52A8\u62D2\u7EDD\u3002\u6211\u4EEC\u4F1A\u67E5\u770B\u60A8\u5F53\u524D\u7684\u8D22\u52A1\u72B6\u51B5\u3001\u9879\u76EE\u5408\u540C\u548C\u8BBE\u5907\u4EF7\u503C\u3002\u8BB8\u591A\u6210\u529F\u5BA2\u6237\u4E4B\u524D\u90FD\u6709\u4FE1\u7528\u95EE\u9898\u3002" },
    { question: "\u63A5\u53D7\u54EA\u4E9B\u6316\u6398\u673A\u54C1\u724C\uFF1F", answer: "\u6211\u4EEC\u63A5\u53D7\u6240\u6709\u4E3B\u8981\u54C1\u724C\uFF0C\u5305\u62EC\u5C0F\u677E\uFF08Komatsu\uFF09\u3001\u65E5\u7ACB\uFF08Hitachi\uFF09\u3001\u5361\u7279\u5F7C\u52D2\uFF08CAT\uFF09\u3001\u795E\u94A2\uFF08Kobelco\uFF09\u3001\u73B0\u4EE3\uFF08Hyundai\uFF09\u3001\u6597\u5C71\uFF08Doosan\uFF09\u3001\u4E09\u4E00\uFF08SANY\uFF09\u3001\u5F90\u5DE5\uFF08XCMG\uFF09\u3001\u6C83\u5C14\u6C83\uFF08Volvo\uFF09\u548C\u4F4F\u53CB\uFF08Sumitomo\uFF09\u3002\u65E5\u672C\u3001\u7F8E\u56FD\u3001\u4E2D\u56FD\u548C\u6B27\u6D32\u54C1\u724C\u90FD\u53EF\u63A5\u53D7\u3002" },
    { question: "\u6279\u51C6\u6D41\u7A0B\u9700\u8981\u591A\u957F\u65F6\u95F4\uFF1F", answer: "\u6807\u51C6\u6279\u51C6\u4ECE\u5B8C\u6574\u6587\u4EF6\u63D0\u4EA4\u8D77\u5FEB\u901F\u5904\u7406\uFF081\u4E2A\u5DE5\u4F5C\u65E5\uFF09\u3002\u7D27\u6025\u60C5\u51B5\u53EF\u4EE5\u901A\u8FC7\u4F18\u8D28\u670D\u52A1\u57288-1\u5FEB\u901F\u5185\u5904\u7406\u3002\u6211\u4EEC\u4F18\u5148\u8003\u8651\u6709\u5373\u65F6\u9879\u76EE\u622A\u6B62\u65E5\u671F\u7684\u627F\u5305\u5546\u3002" },
    { question: "\u7533\u8BF7\u9700\u8981\u4EC0\u4E48\u6587\u4EF6\uFF1F", answer: "\u4E2A\u4EBA\uFF1A\u8EAB\u4EFD\u8BC1/\u62A4\u7167\u30016\u4E2A\u6708\u94F6\u884C\u5BF9\u8D26\u5355\u3001\u6536\u5165\u8BC1\u660E\u3002\u516C\u53F8\uFF1ASSM\u6CE8\u518C\u3001\u516C\u53F8\u94F6\u884C\u5BF9\u8D26\u5355\uFF086\u4E2A\u6708\uFF09\u3001\u8463\u4E8B\u8EAB\u4EFD\u8BC1\u3001\u8D22\u52A1\u62A5\u8868\uFF08\u5982\u6709\uFF09\u3001\u9879\u76EE\u5408\u540C\uFF08\u5982\u6709\uFF09\u3002" },
    { question: "\u4EE5\u540E\u53EF\u4EE5\u5347\u7EA7\u6211\u7684\u6316\u6398\u673A\u5417\uFF1F", answer: "\u53EF\u4EE5\uFF01\u63D0\u4F9B\u4EE5\u65E7\u6362\u65B0\u548C\u5347\u7EA7\u8BA1\u5212\u3002\u6211\u4EEC\u53EF\u4EE5\u4E3A\u60A8\u73B0\u6709\u7684\u6316\u6398\u673A\u8FDB\u884C\u518D\u878D\u8D44\uFF0C\u5E76\u4E3A\u66F4\u5927\u7684\u673A\u5668\u589E\u52A0\u8D44\u91D1\u3002\u8BB8\u591A\u5BA2\u6237\u4ECE\u8FF7\u4F60\u6316\u6398\u673A\u5F00\u59CB\uFF0C\u968F\u7740\u4E1A\u52A1\u589E\u957F\u5347\u7EA7\u5230\u4E2D\u578B\u6216\u5927\u578B\u6316\u6398\u673A\u3002" },
    { question: "\u5982\u679C\u6316\u6398\u673A\u635F\u574F\u600E\u4E48\u529E\uFF1F", answer: "\u5EFA\u8BAE\u4F46\u4E0D\u5F3A\u5236\u8BBE\u5907\u4FDD\u9669\u3002\u6211\u4EEC\u53EF\u4EE5\u5E2E\u52A9\u60A8\u8054\u7CFB\u4FDD\u9669\u63D0\u4F9B\u5546\u3002\u5982\u679C\u672A\u6295\u4FDD\u7684\u8BBE\u5907\u635F\u574F\uFF0C\u60A8\u4ECD\u7136\u8D1F\u8D23\u8D37\u6B3E\u652F\u4ED8\u3002\u4E3A\u4E86\u5B89\u5FC3\u8D77\u89C1\uFF0C\u8BF7\u8003\u8651\u7EFC\u5408\u4FDD\u9669\u3002" },
    { question: "\u63D0\u524D\u8FD8\u6B3E\u6709\u7F5A\u6B3E\u5417\uFF1F", answer: "\u6CA1\u6709\u63D0\u524D\u8FD8\u6B3E\u7F5A\u6B3E\uFF01\u968F\u65F6\u507F\u8FD8\u60A8\u7684\u8D37\u6B3E\uFF0C\u65E0\u9700\u989D\u5916\u8D39\u7528\u3002\u8BB8\u591A\u5BA2\u6237\u572812-18\u4E2A\u6708\u540E\uFF0C\u5F53\u4ED6\u4EEC\u7684\u4E1A\u52A1\u589E\u957F\u5E76\u83B7\u5F97\u66F4\u597D\u7684\u5229\u7387\u65F6\u8FDB\u884C\u518D\u878D\u8D44\u3002" },
    { question: "\u4F60\u4EEC\u7684\u5229\u7387\u662F\u591A\u5C11\uFF1F", answer: "\u5229\u7387\u8303\u56F4\u4E3A\u6BCF\u5E747.5%\u81F312%\uFF0C\u53D6\u51B3\u4E8E\u4FE1\u7528\u72B6\u51B5\u3001\u9996\u4ED8\u91D1\u989D\u3001\u8D37\u6B3E\u671F\u9650\u548C\u8BBE\u5907\u5E74\u9F84\u3002\u4E0E\u94F6\u884C\uFF089-15%\uFF09\u548C\u7ECF\u9500\u5546\u878D\u8D44\uFF0810-18%\uFF09\u76F8\u6BD4\uFF0C\u5229\u7387\u5177\u6709\u7ADE\u4E89\u529B\u3002" },
    { question: "\u53EF\u4EE5\u540C\u65F6\u878D\u8D44\u591A\u53F0\u6316\u6398\u673A\u5417\uFF1F", answer: "\u53EF\u4EE5\uFF01\u63D0\u4F9B\u8F66\u961F\u878D\u8D44\uFF0C\u9002\u7528\u4E8E\u591A\u4E2A\u5355\u4F4D\u3002\u540C\u65F6\u878D\u8D442\u53F0\u6216\u66F4\u591A\u6316\u6398\u673A\u53EF\u4EAB\u53D7\u6298\u6263\u7387\u3002\u975E\u5E38\u9002\u5408\u627F\u63A5\u5927\u578B\u9879\u76EE\u7684\u6269\u5C55\u627F\u5305\u5546\u3002" },
    { question: "\u9664\u4E86\u6316\u6398\u673A\u5916\uFF0C\u8FD8\u9700\u8981\u62B5\u62BC\u54C1\u5417\uFF1F", answer: "\u6316\u6398\u673A\u4F5C\u4E3A\u4E3B\u8981\u62B5\u62BC\u54C1\u3002\u5BF9\u4E8E\u8D85\u8FC7RM 500,000\u7684\u8D37\u6B3E\uFF0C\u53EF\u80FD\u9700\u8981\u989D\u5916\u62B5\u62BC\u54C1\uFF08\u623F\u4EA7\u3001\u5B9A\u671F\u5B58\u6B3E\u6216\u62C5\u4FDD\u4EBA\uFF09\u3002\u5927\u591A\u6570\u6807\u51C6\u6316\u6398\u673A\u8D37\u6B3E\u4E0D\u9700\u8981\u989D\u5916\u62B5\u62BC\u54C1\u3002" },
    { question: "\u6211\u53EF\u4EE5\u501F\u591A\u5C11\uFF1F", answer: "\u6700\u4F4E\u8D37\u6B3E\uFF1ARM 30,000\u3002\u6700\u9AD8\u8D37\u6B3E\uFF1ARM 3,000,000\uFF0C\u53D6\u51B3\u4E8E\u8BBE\u5907\u4EF7\u503C\u548C\u60A8\u7684\u8D22\u52A1\u72B6\u51B5\u3002\u6211\u4EEC\u53EF\u4EE5\u878D\u8D44\u8BBE\u5907\u4EF7\u503C\u768490%\uFF08\u9700\u898110%\u9996\u4ED8\uFF09\u3002" }
  ];
  const productSchema = generateProductSchema({
    name: "\u6316\u6398\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A",
    description: "\u5FEB\u901F\u6279\u51C6\uFF0CIndustry-Leading\u6279\u51C6\u7387\u7684\u6316\u6398\u673A\u878D\u8D44\u3002\u4E3A\u5EFA\u7B51\u627F\u5305\u5546\u63D0\u4F9B\u7075\u6D3B\u7684\u4ED8\u6B3E\u6761\u6B3E\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/excavator-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u8BBE\u5907\u878D\u8D44",
    offers: {
      price: "30000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u9A6C\u6765\u897F\u4E9A\u627F\u5305\u5546\u5FEB\u901F\u6316\u6398\u673A\u878D\u8D44", "subtitle": "\u5FEB\u901F\u6279\u51C6 | Industry-Leading\u6279\u51C6\u7387 | \u96F6\u9884\u4ED8\u8D39\u7528 | \u7075\u6D3B12-60\u4E2A\u6708\u671F\u9650 | \u8BDA\u4FE1\u7ECF\u842540\u5E74", "ctaText": "WhatsApp\u514D\u8D39\u62A5\u4EF7", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u83B7\u53D6\u6316\u6398\u673A\u878D\u8D44\u7684\u62A5\u4EF7\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6267\u7167", "\u670D\u52A14000+\u516C\u53F8", "\u5F53\u65E5\u6279\u51C6"] })}  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
建筑承包商面临现金流挑战
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
您有项目在手，但银行拒绝贷款。设备经销商要求30-50%首付。您的竞争对手因为有挖掘机而赢得合同，而您没有。这听起来熟悉吗？
</p> </div> <div class="grid md:grid-cols-3 gap-8 mb-12"> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="text-red-600 font-bold text-lg mb-3">问题</div> <ul class="space-y-2 text-[#4F3E29]"> <li class="flex items-start space-x-2"> <span class="text-red-500 mt-1">✗</span> <span>银行因信用记录有限而拒绝申请</span> </li> <li class="flex items-start space-x-2"> <span class="text-red-500 mt-1">✗</span> <span>高额首付要求（30-50%）</span> </li> <li class="flex items-start space-x-2"> <span class="text-red-500 mt-1">✗</span> <span>雨季期间的季节性现金流问题</span> </li> <li class="flex items-start space-x-2"> <span class="text-red-500 mt-1">✗</span> <span>没有设备就错过项目机会</span> </li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="text-green-600 font-bold text-lg mb-3">我们的解决方案</div> <ul class="space-y-2 text-[#4F3E29]"> <li class="flex items-start space-x-2"> <span class="text-green-500 mt-1">✓</span> <span>Industry-Leading批准率 - 我们批准银行拒绝的申请</span> </li> <li class="flex items-start space-x-2"> <span class="text-green-500 mt-1">✓</span> <span>只需10%首付</span> </li> <li class="flex items-start space-x-2"> <span class="text-green-500 mt-1">✓</span> </li> <li class="flex items-start space-x-2"> <span class="text-green-500 mt-1">✓</span> <span>3-5天内获得您的挖掘机</span> </li> </ul> </div> <div class="bg-white border-4 border-[#D4A574] p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="font-bold text-lg mb-3 text-yellow-600">真实案例</div> <div class="text-sm leading-relaxed text-gray-800"> <p class="mb-3"><strong class="text-primary">来自巴生的陈先生</strong>需要一台RM 180,000的挖掘机用于政府道路项目。</p> <p class="mb-3"><strong class="text-red-600">银行拒绝了他。</strong>我们在18小时内批准，只需RM 18,000首付（10%）。</p> <p class="font-semibold text-green-700">他完成了项目，赚了RM 250,000，6个月后买了第二台挖掘机。</p> </div> </div> </div> <!-- Trust Building - Chinese cultural element --> <div class="max-w-3xl mx-auto text-center p-6 bg-white rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold text-primary mb-4">40年信誉，服务华人社区</h3> <p class="text-[#4F3E29] leading-relaxed mb-4">
我们了解华人承包商的需求和挑战。从家族生意传承到企业扩展，从应对季节性波动到把握政府项目机会。我们不仅是金融公司，更是您生意成长的伙伴。
</p> <p class="text-primary font-semibold">
超过70%的客户来自华人社区推荐 - 这是最好的信任证明
</p> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
为什么选择Ing Heng Credit进行挖掘机融资？
</h2> <p class="text-xl text-[#4F3E29]">
我们了解承包商的挑战，专门为您的业务设计融资
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="max-w-3xl mx-auto"> ${renderComponent($$result2, "Calculator", $$Calculator, { "lang": lang, "equipmentType": "\u6316\u6398\u673A", "defaultPrice": 18e4 })} </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
5个简单步骤获得您的挖掘机
</h2> <p class="text-xl text-[#4F3E29]">
从申请到设备交付最快3-5天
</p> </div> <div class="grid md:grid-cols-5 gap-8"> ${steps.map((step) => renderTemplate`${renderComponent($$result2, "StepCard", $$StepCard, { "stepNumber": step.stepNumber, "icon": step.icon, "title": step.title, "description": step.description })}`)} </div> <div class="text-center mt-12"> <a href="https://wa.me/60175700889?text=你好！我想申请挖掘机融资。" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg inline-block">
立即开始申请
</a> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
我们融资的挖掘机类型
</h2> <p class="text-xl text-[#4F3E29]">
从1吨迷你到30吨重型机器的所有挖掘机类别
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] transition-shadow"> <h3 class="text-lg font-bold text-primary mb-3">迷你挖掘机（1-5吨）</h3> <p class="text-[#4F3E29]">适合住宅项目、园林绿化和狭小空间。省油且多功能。</p> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] transition-shadow"> <h3 class="text-lg font-bold text-primary mb-3">中型挖掘机（5-10吨）</h3> <p class="text-[#4F3E29]">适合中型建筑工地、道路工程和公用事业项目。平衡动力和机动性。</p> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] transition-shadow"> <h3 class="text-lg font-bold text-primary mb-3">大型挖掘机（10-30吨）</h3> <p class="text-[#4F3E29]">用于大型建筑、采矿和土方工程项目的重型机器。</p> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] transition-shadow"> <h3 class="text-lg font-bold text-primary mb-3">长臂挖掘机</h3> <p class="text-[#4F3E29]">扩展臂用于深度挖掘、疏浚和河岸工作，长达30米。</p> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] transition-shadow"> <h3 class="text-lg font-bold text-primary mb-3">轮式挖掘机</h3> <p class="text-[#4F3E29]">适用于道路建设和城市项目的移动挖掘机。快速在工地之间转移。</p> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] transition-shadow"> <h3 class="text-lg font-bold text-primary mb-3">水陆两用挖掘机</h3> <p class="text-[#4F3E29]">专用于沼泽、湿地和洪水易发地区。满足马来西亚独特需求。</p> </div> </div> <!-- Accepted Brands --> <div class="text-center"> <h3 class="text-2xl font-bold text-primary mb-6">接受的品牌</h3> <div class="flex flex-wrap justify-center gap-4"> ${["\u5C0F\u677E Komatsu", "\u65E5\u7ACB Hitachi", "\u5361\u7279\u5F7C\u52D2 CAT", "\u795E\u94A2 Kobelco", "\u73B0\u4EE3 Hyundai", "\u6597\u5C71 Doosan", "\u4E09\u4E00 SANY", "\u5F90\u5DE5 XCMG", "\u6C83\u5C14\u6C83 Volvo", "\u4F4F\u53CB Sumitomo"].map((brand) => renderTemplate`<span class="px-4 py-2 bg-white rounded-full shadow-[2px_2px_0_#2D1810] text-[#4F3E29] font-medium"> ${brand} </span>`)} </div> <p class="text-[#4F3E29] mt-4">...以及更多！联系我们了解其他品牌。</p> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
马来西亚华人承包商的成功故事
</h2> <p class="text-xl text-[#4F3E29]">
通过我们的融资发展业务的真实承包商
</p> </div> <div class="grid md:grid-cols-3 gap-6"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { "name": testimonial.name, "company": testimonial.company, "location": testimonial.location, "testimonial": testimonial.testimonial, "rating": testimonial.rating })}`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
常见问题
</h2> <p class="text-xl text-[#4F3E29]">
关于挖掘机融资您需要知道的一切
</p> </div> <div class="max-w-4xl mx-auto space-y-4"> ${faqs.map((faq) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer })}`)} </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "excavator" })}  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
准备好获得您的挖掘机了吗？
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
今天申请，明天获批。加入4000+选择Ing Heng Credit满足设备融资需求的承包商。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"> <a href="https://wa.me/60175700889?text=你好！我想申请挖掘机融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> <div class="flex flex-wrap justify-center gap-6 text-sm"> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>无义务报价</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>快速批准</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>40年经验</span> </div> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
或填写我们的在线表格
</h2> <p class="text-[#4F3E29]">
我们将在营业时间内快速内与您联系
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema)), unescapeHTML(encodeJSONLD(faqSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/excavator.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/excavator.astro";
const $$url = "/zh/equipment/excavator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Excavator,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
