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
const $$Crane = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u8D77\u91CD\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A | \u5854\u540A\u8D37\u6B3E | \u79FB\u52A8\u540A\u8F66\u878D\u8D44 | \u5FEB\u901F\u6279\u51C6";
  const pageDescription = "\u4E13\u4E1A\u8D77\u91CD\u673A\u878D\u8D44\u670D\u52A1\u3002\u5854\u5F0F\u8D77\u91CD\u673A\u3001\u79FB\u52A8\u540A\u8F66\u3001\u5C65\u5E26\u8D77\u91CD\u673A\u878D\u8D44\u3002DOSH\u8BA4\u8BC1\u652F\u6301\uFF0C\u8F66\u961F\u878D\u8D44\u914D\u5957\uFF0C48\u5C0F\u65F6\u5FEB\u901F\u6279\u51C6\u3002RM50\u4E07\u81F3RM1000\u4E07\u3002";
  const keywords = ["\u5854\u5F0F\u8D77\u91CD\u673A\u878D\u8D44\u9A6C\u6765\u897F\u4E9A", "\u79FB\u52A8\u5F0F\u8D77\u91CD\u673A\u8D37\u6B3E", "\u8D77\u91CD\u673A\u79DF\u8D41\u4E1A\u52A1\u878D\u8D44", "Liebherr\u8D77\u91CD\u673A\u878D\u8D44", "Tadano\u540A\u8F66\u8D37\u6B3E", "DOSH\u8BA4\u8BC1\u5854\u540A\u878D\u8D44", "\u5DF4\u751F\u8C37\u8D77\u91CD\u673A\u878D\u8D44"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907\u878D\u8D44", url: "/zh/equipment" },
    { label: "\u8D77\u91CD\u673A\u878D\u8D44", url: "/zh/equipment/crane" }
  ];
  const benefits = [
    { icon: "clock", title: "48\u5C0F\u65F6\u5FEB\u901F\u6279\u51C6", description: "\u7ECF\u9A8C\u4E30\u5BCC\u7684\u8D77\u91CD\u673A\u8FD0\u8425\u5546\u4F18\u5148\u5BA1\u6279\u3002\u5DF2\u6709\u79DF\u8D41\u5408\u540C\u548C\u8BBE\u5907\u7684\u7ECF\u8425\u8005\uFF0C\u5BA1\u6279\u66F4\u5FEB\u901F\uFF0C\u4EAB\u53D7\u4F18\u60E0\u5229\u7387\u3002" },
    { icon: "shield", title: "DOSH\u8BA4\u8BC1\u652F\u6301", description: "\u652F\u6301\u5854\u540A\u5B89\u5168\u76D1\u63A7\u7CFB\u7EDF\uFF08TSM\uFF09\u3001\u9632\u78B0\u649E\u7CFB\u7EDF\u3001\u8F7D\u8377\u76D1\u63A7\u8BBE\u5907\u878D\u8D44\u3002\u4E00\u7AD9\u5F0F\u5408\u89C4\u89E3\u51B3\u65B9\u6848\uFF0C\u7B26\u5408\u9A6C\u6765\u897F\u4E9A\u5B89\u5168\u6807\u51C6\u3002" },
    { icon: "calendar", title: "\u8F66\u961F\u878D\u8D44\u914D\u5957", description: "\u540C\u65F6\u8D2D\u4E702-5\u53F0\u8D77\u91CD\u673A\u4EAB\u53D7\u6279\u91CF\u6298\u6263\u3002\u7EDF\u4E00\u4ED8\u6B3E\u8BA1\u5212\uFF0C\u7B80\u5316\u8D22\u52A1\u7BA1\u7406\uFF0C\u5229\u7387\u4F18\u60E00.5-1%\u3002" },
    { icon: "users", title: "\u65B0\u65E7\u8BBE\u5907\u5747\u53EF", description: "\u878D\u8D4415\u5E74\u5185\u65B0\u65E7\u8D77\u91CD\u673A\u3002\u63A5\u53D7Liebherr\u3001Tadano\u3001Zoomlion\u3001Manitowoc\u3001Potain\u7B49\u6240\u6709\u4E3B\u6D41\u54C1\u724C\u3002" },
    { icon: "lightning", title: "\u5B89\u5168\u6280\u672F\u5347\u7EA7\u878D\u8D44", description: "\u5854\u540A\u4E0E\u5B89\u5168\u7CFB\u7EDF\u6253\u5305\u878D\u8D44\u3002\u5305\u62ECTSM\u7CFB\u7EDF\u3001\u9632\u78B0\u649E\u8BBE\u5907\u3001\u8F7D\u8377\u6307\u793A\u5668\u3002\u5E2E\u52A9\u60A8\u8D62\u5F97\u5927\u578B\u9879\u76EE\u5408\u540C\u3002" },
    { icon: "document", title: "\u8D77\u91CD\u673A\u884C\u4E1A\u4E13\u4E1A\u77E5\u8BC6", description: "40\u5E74\u8BBE\u5907\u878D\u8D44\u7ECF\u9A8C\uFF0C\u6DF1\u523B\u7406\u89E3\u8D77\u91CD\u673A\u79DF\u8D41\u4E1A\u52A1\uFF1A\u5229\u7528\u7387\u3001\u9879\u76EE\u5468\u671F\u3001\u64CD\u4F5C\u5458\u77ED\u7F3A\u3002\u4E3A\u60A8\u91CF\u8EAB\u5B9A\u5236\u878D\u8D44\u65B9\u6848\u3002" },
    { icon: "shield", title: "\u7ADE\u4E89\u6027\u5229\u73878-18%", description: "\u5E74\u5229\u73878-18%\u6839\u636E\u4FE1\u7528\u6863\u6848\u3002\u63A5\u53D7\u4E0D\u826F\u4FE1\u7528*\u3002\u65E0\u63D0\u524D\u8FD8\u6B3E\u7F5A\u6B3E\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" }
  ];
  const steps = [
    { stepNumber: 1, icon: "contact", title: "\u901A\u8FC7WhatsApp\u8054\u7CFB", description: "\u4E0E\u6211\u4EEC\u7684\u878D\u8D44\u4E13\u5BB6\u8BA8\u8BBA\u60A8\u7684\u8D77\u91CD\u673A\u9700\u6C42\uFF1A\u5854\u540A\u6216\u79FB\u52A8\u540A\u8F66\u3001\u54C1\u724C\u504F\u597D\u3001\u9879\u76EE\u7BA1\u9053\u3002\u5206\u4EAB\u79DF\u8D41\u5408\u540C\u52A0\u5FEB\u5BA1\u6279\u3002" },
    { stepNumber: 2, icon: "document", title: "\u63D0\u4EA4\u4E1A\u52A1\u6587\u4EF6", description: "\u516C\u53F8\u6CE8\u518C\u300112\u4E2A\u6708\u8D22\u52A1\u62A5\u8868\u3001\u79DF\u8D41\u5408\u540C\u3001\u73B0\u6709\u8D77\u91CD\u673A\u6240\u6709\u6743\u8BB0\u5F55\uFF08\u5982\u6709\uFF09\u3002\u7B80\u5316\u6587\u4EF6\u8981\u6C42\uFF0C\u4E0D\u7E41\u7410\u3002" },
    { stepNumber: 3, icon: "check", title: "48\u5C0F\u65F6\u5185\u6279\u51C6", description: "\u6709\u7ECF\u9A8C\u7684\u8D77\u91CD\u673A\u8FD0\u8425\u5546\u5FEB\u901F\u901A\u9053\u3002\u914D\u5907\u5B89\u5168\u6280\u672F\u7684\u8D77\u91CD\u673A\u4F18\u5148\u8003\u8651\uFF0C\u4EAB\u53D7\u4F18\u60E0\u5229\u7387\u548C\u66F4\u9AD8\u6279\u51C6\u7387\u3002" },
    { stepNumber: 5, icon: "truck", title: "\u90E8\u7F72\u60A8\u7684\u8D77\u91CD\u673A", description: "\u83B7\u5F97\u8D2D\u4E70\u8D44\u91D1\u548C\u8BBE\u5907\u8C03\u52A8\u8D39\u7528\u3002\u7ACB\u5373\u5728\u9AD8\u5C42\u5EFA\u7B51\u548C\u57FA\u7840\u8BBE\u65BD\u9879\u76EE\u4E2D\u521B\u9020\u79DF\u8D41\u6536\u5165\u3002" }
  ];
  const equipmentTypes = [
    {
      name: "\u5854\u5F0F\u8D77\u91CD\u673A\uFF08\u5E73\u5934\u578B\uFF09",
      description: "\u9AD8\u5C42\u4F4F\u5B85\u548C\u5546\u4E1A\u5EFA\u7B51\u3002\u9AD8\u5EA630-80\u7C73\u3002\u9002\u7528\u4E8E\u5409\u9686\u5761\u3001\u65B0\u5C71\u3001\u69DF\u57CE\u9AD8\u697C\u70ED\u6F6E\u3002\u957F\u671F\u79DF\u8D41\u5408\u540C\u7A33\u5B9A\u6536\u5165\u3002",
      applications: "\u516C\u5BD3\u9879\u76EE\u3001\u5199\u5B57\u697C\u3001\u6570\u636E\u4E2D\u5FC3\u3001\u533B\u9662\u5EFA\u8BBE",
      brands: "Liebherr, Potain, Zoomlion, Comansa, Wolff"
    },
    {
      name: "\u5168\u5730\u5F62\u79FB\u52A8\u5F0F\u8D77\u91CD\u673A",
      description: "\u591A\u529F\u80FD50-300\u5428\u540A\u91CD\u3002\u516C\u8DEF\u673A\u52A8\u6027\uFF0C\u53EF\u5728\u591A\u4E2A\u9879\u76EE\u95F4\u79FB\u52A8\u3002\u9002\u5408\u57FA\u7840\u8BBE\u65BD\u3001\u6865\u6881\u5EFA\u8BBE\u3001\u5DE5\u4E1A\u8BBE\u5907\u5B89\u88C5\u3002",
      applications: "\u6865\u6881\u5EFA\u8BBE\u3001MRT/LRT\u9879\u76EE\u3001\u53D1\u7535\u5382\u3001\u91CD\u578B\u8BBE\u5907\u5B89\u88C5",
      brands: "Liebherr, Tadano, Grove, Terex, Manitowoc"
    },
    {
      name: "\u5C65\u5E26\u5F0F\u8D77\u91CD\u673A",
      description: "\u91CD\u578B\u540A\u88C5\u4E13\u5BB6100-600\u5428\u540A\u91CD\u3002\u5C65\u5E26\u5F0F\u79FB\u52A8\u6027\u9002\u5408\u8F6F\u5730\u5F62\u3002\u9002\u7528\u4E8E\u91CD\u5927\u57FA\u7840\u8BBE\u65BD\u548C\u77F3\u5316\u9879\u76EE\u3002",
      applications: "\u56FD\u6CB9\u9879\u76EE\u3001\u6C34\u575D\u5EFA\u8BBE\u3001\u6E2F\u53E3\u5F00\u53D1\u3001\u98CE\u529B\u53D1\u7535\u673A\u5B89\u88C5",
      brands: "Liebherr, Sany, XCMG, Sumitomo, Kobelco"
    },
    {
      name: "\u5361\u8F66\u5F0F\u8D77\u91CD\u673A",
      description: "\u5FEB\u901F\u90E8\u7F7225-80\u5428\u540A\u91CD\u3002\u5FEB\u901F\u8FC1\u79FB\u65E0\u9700\u8FD0\u8F93\u8BB8\u53EF\u3002\u9002\u5408\u57CE\u5E02\u5EFA\u8BBE\u548C\u7EF4\u62A4\u5DE5\u4F5C\uFF0C\u673A\u52A8\u6027\u5F3A\u3002",
      applications: "\u8BBE\u5907\u5B89\u88C5\u3001\u57CE\u5E02\u5EFA\u7B51\u3001\u516C\u7528\u8BBE\u65BD\u7EF4\u62A4\u3001\u5E94\u6025\u54CD\u5E94",
      brands: "Tadano, Zoomlion, XCMG, Palfinger"
    },
    {
      name: "\u8D8A\u91CE\u8D77\u91CD\u673A",
      description: "\u8D8A\u91CE\u80FD\u529B25-100\u5428\u540A\u91CD\u3002\u7D27\u51D1\u8BBE\u8BA1\u9002\u5408\u72ED\u5C0F\u573A\u5730\u3002\u9002\u5408\u6CB9\u6C14\u3001\u5DE5\u4E1A\u548C\u504F\u8FDC\u9879\u76EE\u3002",
      applications: "\u6CB9\u6C14\u8BBE\u65BD\u3001\u504F\u8FDC\u5EFA\u7B51\u3001\u79CD\u690D\u56ED\u57FA\u7840\u8BBE\u65BD",
      brands: "Tadano, Terex, Grove, Manitowoc"
    },
    {
      name: "\u52A8\u81C2\u53D8\u5E45\u5854\u5F0F\u8D77\u91CD\u673A",
      description: "\u7D27\u51D1\u578B\u57CE\u5E02\u9AD8\u697C\u8D77\u91CD\u673A\u3002\u51CF\u5C0F\u4F5C\u4E1A\u534A\u5F84\u9002\u5408\u5BC6\u96C6\u5EFA\u7B51\u533A\u3002KLCC\u533A\u57DF\u3001\u4E54\u6CBB\u5E02\u7B49\u57CE\u5E02\u4E2D\u5FC3\u5FC5\u5907\u3002",
      applications: "\u57CE\u5E02\u9AD8\u697C\u3001\u72ED\u5C0F\u573A\u5730\u3001\u591A\u5854\u540A\u9879\u76EE\u3001\u7A7A\u95F4\u9650\u5236\u9879\u76EE",
      brands: "Liebherr, Potain, Wolff, Raimondi"
    }
  ];
  const acceptedBrands = ["Liebherr\uFF08\u5229\u52C3\u6D77\u5C14\uFF09", "Tadano\uFF08\u591A\u7530\u91CE\uFF09", "Potain/Manitowoc", "Zoomlion\uFF08\u4E2D\u8054\u91CD\u79D1\uFF09", "Terex", "Grove", "Wolff", "Comansa", "Raimondi", "XCMG\uFF08\u5F90\u5DE5\uFF09", "Sany\uFF08\u4E09\u4E00\u91CD\u5DE5\uFF09", "Kobelco\uFF08\u795E\u94A2\uFF09", "Sumitomo\uFF08\u4F4F\u53CB\uFF09", "Favelle Favco"];
  const testimonials = [
    {
      name: "\u9648\u5FD7\u5F3A",
      company: "\u5FD7\u5F3A\u91CD\u578B\u8D77\u91CD\u6709\u9650\u516C\u53F8",
      location: "\u838E\u963F\u5357\uFF0C\u96EA\u5170\u83AA",
      testimonial: "\u4E3AMRT3\u9879\u76EE\u878D\u8D44\u8D2D\u4E70Liebherr LTM 1100\u79FB\u52A8\u8D77\u91CD\u673A\u3002Ing Heng Credit\u572836\u5C0F\u65F6\u5185\u6279\u51C6\uFF0C\u53EA\u970015%\u9996\u4ED8\u3002\u8D77\u91CD\u673A\u6708\u6536\u5165RM 8\u4E07\uFF0C\u5229\u7528\u738785%\u300228\u4E2A\u6708\u6536\u56DE\u6295\u8D44\u6210\u672C\u3002\u4ED6\u4EEC\u771F\u6B63\u7406\u89E3\u8D77\u91CD\u673A\u79DF\u8D41\u4E1A\u52A1\uFF01",
      rating: 5
    },
    {
      name: "Kumar Subramaniam",
      company: "KS\u5854\u5F0F\u8D77\u91CD\u673A\u6709\u9650\u516C\u53F8",
      location: "\u65B0\u5C71\uFF0C\u67D4\u4F5B",
      rating: 5
    },
    {
      name: "\u9EC4\u6587\u8F89",
      company: "\u6587\u8F89\u540A\u8F66\u670D\u52A1",
      location: "\u5CC7\u516D\u62DC\uFF0C\u69DF\u57CE",
      testimonial: "\u5728Ing Heng\u5E2E\u52A9\u4E0B\uFF0C\u4ECE\u4E2D\u56FD\u54C1\u724C\u8D77\u91CD\u673A\u5347\u7EA7\u5230Tadano\u79FB\u52A8\u540A\u8F66\u518D\u878D\u8D44\u3002\u53EF\u9760\u6027\u63D0\u9AD8\u51CF\u5C1140%\u505C\u673A\u65F6\u95F4\uFF0C\u79DF\u91D1\u589E\u52A020%\u3002\u5BA2\u6237\u73B0\u5728\u4E13\u95E8\u8981\u6C42Tadano\u3002\u611F\u8C22\u4E13\u4E1A\u56E2\u961F\u7684\u652F\u6301\u548C\u5EFA\u8BAE\uFF01",
      rating: 5
    }
  ];
  const faqs = [
    {
      question: "\u4F60\u4EEC\u63A5\u53D7\u54EA\u4E9B\u8D77\u91CD\u673A\u54C1\u724C\uFF1F",
      answer: "\u6211\u4EEC\u878D\u8D44\u6240\u6709\u4E3B\u6D41\u8D77\u91CD\u673A\u54C1\u724C\uFF1ALiebherr\uFF08\u5229\u52C3\u6D77\u5C14\uFF09\u3001Tadano\uFF08\u591A\u7530\u91CE\uFF09\u3001Potain/Manitowoc\u3001Zoomlion\uFF08\u4E2D\u8054\u91CD\u79D1\uFF09\u3001Terex\u3001Grove\u3001Wolff\u3001Comansa\u3001Raimondi\u3001Favelle Favco\u3001XCMG\uFF08\u5F90\u5DE5\uFF09\u3001Sany\uFF08\u4E09\u4E00\uFF09\u3001Kobelco\uFF08\u795E\u94A2\uFF09\u3001Sumitomo\uFF08\u4F4F\u53CB\uFF09\u3002\u6B27\u6D32\u9AD8\u7AEF\u54C1\u724C\uFF08Liebherr\u3001Potain\uFF09\u548C\u4E2D\u56FD\u6027\u4EF7\u6BD4\u54C1\u724C\uFF08\u4E2D\u8054\u3001\u5F90\u5DE5\uFF09\u90FD\u63A5\u53D7\u3002\u9AD8\u7AEF\u54C1\u724C\u56E0\u8F6C\u552E\u4EF7\u503C\u66F4\u5F3A\uFF0C\u5229\u7387\u66F4\u4F18\u60E0\uFF086-8%\uFF09\uFF0C\u4E2D\u56FD\u54C1\u724C\u5229\u7387\u4E3A8-10%\u3002\u6211\u4EEC\u7406\u89E3\u4E0D\u540C\u54C1\u724C\u7684\u5E02\u573A\u5B9A\u4F4D\u548C\u4EF7\u503C\u3002"
    },
    {
      question: "\u53EF\u4EE5\u878D\u8D44\u4E8C\u624B\u5854\u5F0F\u8D77\u91CD\u673A\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF01\u6211\u4EEC\u878D\u8D4415\u5E74\u5185\u7684\u4E8C\u624B\u5854\u5F0F\u8D77\u91CD\u673A\u30025-10\u5E74\u8F66\u9F84\u7684\u8D77\u91CD\u673A\u9002\u7528\u6807\u51C6\u878D\u8D44\u6761\u6B3E\uFF0815-20%\u9996\u4ED8\uFF0C5-7\u5E74\u671F\u9650\uFF09\u300210-15\u5E74\u8F66\u9F84\u9700\u898125-30%\u9996\u4ED8\u548C\u8F83\u77ED\u8D37\u6B3E\u671F\u9650\uFF083-5\u5E74\uFF09\u3002\u8D77\u91CD\u673A\u5FC5\u987B\u901A\u8FC7DOSH\u68C0\u67E5\u5E76\u6301\u6709\u6709\u6548\u9002\u7528\u8BC1\u4E66\uFF08Certificate of Fitness\uFF09\u3002\u6709\u7EF4\u62A4\u8BB0\u5F55\u7684\u77E5\u540D\u54C1\u724C\u4E8C\u624B\u8D77\u91CD\u673A\uFF08Liebherr\u3001Potain\u3001Wolff\uFF09\u4F18\u5148\u6279\u51C6\u3002\u6211\u4EEC\u76F8\u4FE1\u54C1\u8D28\u8BBE\u5907\u7684\u957F\u671F\u4EF7\u503C\u3002"
    },
    {
      question: "\u4F60\u4EEC\u878D\u8D44DOSH\u5408\u89C4\u5347\u7EA7\u5417\uFF1F",
      answer: "\u5F53\u7136\u53EF\u4EE5\uFF01\u6211\u4EEC\u7406\u89E3DOSH 2024\u9002\u7528\u8BC1\u4E66\u6CD5\u89C4\u7684\u91CD\u8981\u6027\u3002\u6211\u4EEC\u878D\u8D44\uFF1A(1) \u5854\u5F0F\u8D77\u91CD\u673A\u7CFB\u7EDF\u76D1\u63A7\uFF08TSM\uFF09\u5B89\u88C5\uFF08RM10\u4E07-25\u4E07\uFF09\uFF0C(2) \u591A\u5854\u540A\u73B0\u573A\u9632\u78B0\u649E\u7CFB\u7EDF\uFF0C(3) \u8F7D\u8377\u76D1\u63A7\u7CFB\u7EDF\uFF08LMI\uFF09\uFF0C(4) \u98CE\u901F\u4EEA\u548C\u5929\u6C14\u76D1\u63A7\uFF0C(5) \u64CD\u4F5C\u5458\u9A7E\u9A76\u8231\u5B89\u5168\u5347\u7EA7\u3002\u5B89\u5168\u6280\u672F\u53EF\u4EE5\u4E0E\u8D77\u91CD\u673A\u878D\u8D44\u6346\u7ED1\uFF0C\u6216\u4E3A\u73B0\u6709\u8F66\u961F\u5347\u7EA7\u5355\u72EC\u878D\u8D44\u3002\u6211\u4EEC\u91CD\u89C6\u5B89\u5168\u548C\u957F\u671F\u5408\u4F5C\u5173\u7CFB\u3002"
    },
    {
      question: "\u8D77\u91CD\u673A\u878D\u8D44\u7684\u5BA1\u6279\u6807\u51C6\u662F\u4EC0\u4E48\uFF1F",
      answer: "\u4E3B\u8981\u5BA1\u6279\u56E0\u7D20\uFF1A(1) \u8D77\u91CD\u673A\u79DF\u8D41\u4E1A\u52A1\u7ECF\u9A8C\uFF08\u6700\u597D\u67092\u5E74\u4EE5\u4E0A\uFF09\uFF0C(2) \u73B0\u6709\u8D77\u91CD\u673A\u6240\u6709\u6743\u6216\u957F\u671F\u79DF\u8D41\u5386\u53F2\uFF0C(3) \u6D3B\u8DC3\u7684\u79DF\u8D41\u5408\u540C\u6216\u9879\u76EE\u7BA1\u9053\uFF08\u653F\u5E9C\u9879\u76EE\u4F18\u5148\uFF09\uFF0C(4) \u663E\u793A\u79DF\u8D41\u6536\u5165\u7684\u8D22\u52A1\u62A5\u8868\uFF0C(5) DOSH\u5408\u89C4\u8BB0\u5F55\uFF08\u65E0\u91CD\u5927\u8FDD\u89C4\uFF09\u3002\u6709\u5EFA\u7B51\u4E1A\u52A1\u80CC\u666F\u548C\u5DF2\u786E\u4FDD\u79DF\u8D41\u5408\u540C\u7684\u9996\u6B21\u8D2D\u4E70\u8005\u4E5F\u4F1A\u8003\u8651\u3002\u7ECF\u9A8C\u4E30\u5BCC\u8FD0\u8425\u5546\u7684\u6279\u51C6\u7387\uFF1A90-Industry-Leading\u3002\u6211\u4EEC\u91CD\u89C6\u957F\u671F\u5173\u7CFB\uFF0C\u5E0C\u671B\u770B\u5230\u60A8\u7684\u4E1A\u52A1\u6210\u957F\u3002"
    },
    {
      question: "\u53EF\u4EE5\u7533\u8BF7\u8F66\u961F\u878D\u8D44\u8D2D\u4E70\u591A\u53F0\u8D77\u91CD\u673A\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF01\u540C\u65F6\u8D2D\u4E702-5\u53F0\u8D77\u91CD\u673A\u53EF\u7533\u8BF7\u8F66\u961F\u878D\u8D44\u3002\u4F18\u52BF\uFF1A(1) \u6279\u91CF\u6298\u6263\uFF1A\u5229\u7387\u964D\u4F4E0.5-1%\uFF0C(2) \u5355\u4E00\u5408\u5E76\u6708\u4F9B\uFF0C(3) \u7B80\u5316\u5BA1\u6279\u6D41\u7A0B\uFF0C(4) \u6DF7\u5408\u8F66\u961F\u878D\u8D44\uFF08\u4F8B\u5982\uFF1A2\u53F0\u5854\u540A+1\u53F0\u79FB\u52A8\u540A\u8F66\uFF09\u3002\u9002\u5408\u6269\u5F20\u4E1A\u52A1\u4EE5\u6EE1\u8DB3\u5DF4\u751F\u8C37\u3001\u67D4\u4F5B\u548C\u69DF\u57CE\u9AD8\u697C\u70ED\u6F6E\u9700\u6C42\u7684\u8FD0\u8425\u5546\u3002\u6211\u4EEC\u4E3A\u6210\u719F\u8D77\u91CD\u673A\u79DF\u8D41\u516C\u53F8\u878D\u8D44\u9AD8\u8FBERM2500\u4E07\u7684\u8F66\u961F\u3002\u6211\u4EEC\u76F8\u4FE1\u4E0E\u60A8\u5EFA\u7ACB\u957F\u671F\u5408\u4F5C\u4F19\u4F34\u5173\u7CFB\uFF0C\u5171\u540C\u53D1\u5C55\u3002"
    },
    {
      question: "\u8D37\u6B3E\u91D1\u989D\u548C\u671F\u9650\u662F\u591A\u5C11\uFF1F",
      answer: "\u8D37\u6B3E\u91D1\u989D\uFF1A\u6700\u4F4ERM50\u4E07\uFF08\u79FB\u52A8\u540A\u8F66\uFF09\uFF0C\u6700\u9AD8RM1000\u4E07+\uFF08\u5C65\u5E26\u540A\u8F66\u3001\u5854\u540A\u3001\u8F66\u961F\u914D\u5957\uFF09\u3002\u9996\u4ED8\uFF1A15-30%\u53D6\u51B3\u4E8E\u8D77\u91CD\u673A\u8F66\u9F84\u548C\u54C1\u724C\u3002\u8D37\u6B3E\u671F\u9650\uFF1A\u65B0\u8D77\u91CD\u673A5-7\u5E74\uFF0C\u4E8C\u624B\u8D77\u91CD\u673A3-5\u5E74\u3002\u5229\u7387\uFF1A\u5E74\u5229\u73876-10%\uFF08\u9AD8\u7AEF\u54C1\u724C\u8F83\u4F4E\uFF0C\u4E2D\u56FD\u54C1\u724C\u8F83\u9AD8\uFF09\u3002\u63D0\u524D\u8FD8\u6B3E\u7F5A\u6B3E\uFF1A\u65E0\u3002\u6700\u9AD8\u8D37\u6B3E\u4EF7\u503C\u6BD4\uFF1A\u65B0\u8D77\u91CD\u673A85%\uFF0C\u4E8C\u624B\u8D77\u91CD\u673A75%\u3002\u6211\u4EEC\u63D0\u4F9B\u7075\u6D3B\u65B9\u6848\uFF0C\u6EE1\u8DB3\u60A8\u7684\u4E1A\u52A1\u9700\u6C42\u3002"
    },
    {
      question: "\u4F60\u4EEC\u878D\u8D44\u56FD\u9645\u8D77\u91CD\u673A\u91C7\u8D2D\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF0C\u6211\u4EEC\u878D\u8D44\u4ECE\u65E5\u672C\u3001\u6B27\u6D32\u3001\u4E2D\u56FD\u548C\u97E9\u56FD\u8FDB\u53E3\u7684\u8D77\u91CD\u673A\u3002\u6211\u4EEC\u5408\u4F5C\uFF1A(1) \u65E5\u672C\u4E8C\u624B\u8D77\u91CD\u673A\u7ECF\u9500\u5546\uFF08Tadano\u3001Kobelco\u8FDB\u53E3\uFF09\uFF0C(2) \u6B27\u6D32\u65B0\u8D77\u91CD\u673A\u5236\u9020\u5546\uFF08Liebherr\u3001Potain\uFF09\uFF0C(3) \u4E2D\u56FD\u5236\u9020\u5546\uFF08\u4E2D\u8054\u91CD\u79D1\u3001\u5F90\u5DE5\u76F4\u63A5\u8BA2\u5355\uFF09\uFF0C(4) \u97E9\u56FD\u5236\u9020\u5546\uFF08\u73B0\u4EE3\u8D77\u91CD\u673A\uFF09\u3002\u8FDB\u53E3\u878D\u8D44\u5305\u62EC\uFF1A\u8D77\u91CD\u673A\u6210\u672C\u3001\u8FD0\u8F93\u3001\u6D77\u5173\u5173\u7A0E\u3001\u8FDB\u53E3\u7A0E\u3001DOSH\u8BA4\u8BC1\u8D39\u7528\u3002\u8D77\u91CD\u673A\u5230\u8FBE\u5E76\u901A\u8FC7DOSH\u68C0\u67E5\u540E\u91CA\u653E\u878D\u8D44\u3002\u6211\u4EEC\u7406\u89E3\u8DE8\u5883\u4E1A\u52A1\u7684\u590D\u6742\u6027\uFF0C\u4E3A\u60A8\u7B80\u5316\u6D41\u7A0B\u3002"
    },
    {
      question: "\u5982\u679C\u6211\u7684\u8D77\u91CD\u673A\u5728\u96E8\u5B63\u95F2\u7F6E\u600E\u4E48\u529E\uFF1F"
    },
    {
      question: "\u53EF\u4EE5\u518D\u878D\u8D44\u73B0\u6709\u8D77\u91CD\u673A\u8D37\u6B3E\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF01\u6211\u4EEC\u63D0\u4F9B\u8D77\u91CD\u673A\u8D37\u6B3E\u518D\u878D\u8D44\u548C\u6536\u8D2D\u670D\u52A1\u3002\u518D\u878D\u8D44\u7684\u597D\u5904\uFF1A(1) \u8F83\u4F4E\u5229\u7387\uFF08\u901A\u5E38\u964D\u4F4E2-4%\uFF09\uFF0C(2) \u66F4\u597D\u7684\u4ED8\u6B3E\u6761\u6B3E\uFF0C\u5177\u6709\u5B63\u8282\u6027\u7075\u6D3B\u6027\uFF0C(3) \u91CA\u653E\u80A1\u6743\u7528\u4E8E\u8F66\u961F\u6269\u5F20\u6216\u8425\u8FD0\u8D44\u91D1\uFF0C(4) \u5C06\u591A\u7B14\u8D77\u91CD\u673A\u8D37\u6B3E\u5408\u5E76\u4E3A\u5355\u4E00\u4ED8\u6B3E\u3002\u9002\u5408\u652F\u4ED8\u9AD8\u5229\u7387\uFF08\u8D85\u8FC710%\uFF09\u7684\u7ECF\u9500\u5546\u878D\u8D44\u6216\u65E7\u8D37\u6B3E\u7684\u8FD0\u8425\u5546\u3002\u73B0\u6709\u8D37\u6B3E\u53CA\u65F6\u4ED8\u6B3E12\u4E2A\u6708\u540E\u53EF\u7533\u8BF7\u518D\u878D\u8D44\u3002\u6211\u4EEC\u5E2E\u52A9\u60A8\u4F18\u5316\u8D22\u52A1\uFF0C\u5171\u540C\u6210\u957F\u3002"
    },
    {
      question: "DOSH\u9002\u7528\u8BC1\u4E66\uFF08Certificate of Fitness\uFF09\u8981\u6C42\u662F\u4EC0\u4E48\uFF1F",
      answer: "DOSH\u8981\u6C42\u6BCF15\u4E2A\u6708\u901A\u8FC7MyKKP\u95E8\u6237\u66F4\u65B0\u9002\u7528\u8BC1\u4E66\u3002\u8981\u6C42\uFF1A(1) \u6301\u8BC1\u68C0\u67E5\u5458\u9A8C\u8BC1\uFF0C(2) \u8BBE\u8BA1\u548C\u68C0\u67E5\u62A5\u544A\uFF0C(3) \u64CD\u4F5C\u5458\u8BA4\u8BC1\uFF08CIDB/JKKP\uFF09\uFF0C(4) \u5B89\u5168\u7CFB\u7EDF\u529F\u80FD\u6B63\u5E38\uFF08\u8F7D\u8377\u6307\u793A\u5668\u3001\u98CE\u901F\u4EEA\uFF09\uFF0C(5) \u7EF4\u62A4\u8BB0\u5F55\u6587\u6863\u5316\u3002\u4E0D\u5408\u89C4\u7F5A\u6B3E\uFF1A\u6700\u9AD8RM10\u4E07\u7F5A\u6B3E\u3002\u878D\u8D44\u8D77\u91CD\u673A\u65F6\uFF0C\u6211\u4EEC\u9A8C\u8BC1\u73B0\u6709CF\u72B6\u6001\uFF0C\u53EF\u5728\u878D\u8D44\u914D\u5957\u4E2D\u5305\u542B\u91CD\u65B0\u8BA4\u8BC1\u8D39\u7528\u3002\u7B26\u5408DOSH\u6807\u51C6\u7684\u8D77\u91CD\u673A\u4EAB\u53D7\u4F18\u60E0\u5229\u7387\u3002\u6211\u4EEC\u91CD\u89C6\u5B89\u5168\u548C\u5408\u89C4\uFF0C\u8FD9\u662F\u957F\u671F\u5408\u4F5C\u7684\u57FA\u7840\u3002"
    },
    {
      question: "\u4F60\u4EEC\u878D\u8D44\u8D77\u91CD\u673A\u64CD\u4F5C\u5458\u57F9\u8BAD\u9879\u76EE\u5417\uFF1F",
      answer: "\u867D\u7136\u6211\u4EEC\u4E3B\u8981\u878D\u8D44\u8BBE\u5907\uFF0C\u4F46\u6211\u4EEC\u8BA4\u8BC6\u5230\u8D77\u91CD\u673A\u64CD\u4F5C\u5458\u77ED\u7F3A\u7684\u6311\u6218\u3002\u5BF9\u4E8ERM300\u4E07\u4EE5\u4E0A\u7684\u8F66\u961F\u878D\u8D44\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5305\u62EC\uFF1A(1) CIDB\u64CD\u4F5C\u5458\u57F9\u8BAD\u9879\u76EE\u8D39\u7528\uFF0C(2) \u9A6C\u6765\u897F\u4E9A\u5EFA\u7B51\u5B66\u9662\uFF08ABM\uFF09\u57F9\u8BAD\u8D39\uFF0C(3) \u64CD\u4F5C\u5458\u8BA4\u8BC1\u66F4\u65B0\u8D39\u7528\uFF0C(4) \u5B89\u5168\u57F9\u8BAD\u9879\u76EE\u3002\u8FD9\u5E2E\u52A9\u8D77\u91CD\u673A\u79DF\u8D41\u516C\u53F8\u5EFA\u7ACB\u4E13\u6709\u64CD\u4F5C\u5458\u56E2\u961F\u4F5C\u4E3A\u7ADE\u4E89\u4F18\u52BF\u3002\u57F9\u8BAD\u8D39\u7528\uFF08\u6BCF\u540D\u64CD\u4F5C\u5458RM1-3\u4E07\uFF09\u53EF\u6DFB\u52A0\u5230\u8BBE\u5907\u878D\u8D44\u914D\u5957\u4E2D\u3002\u6211\u4EEC\u5173\u5FC3\u60A8\u7684\u6574\u4F53\u4E1A\u52A1\u6210\u529F\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u8BBE\u5907\u3002"
    },
    {
      question: "\u878D\u8D44\u7684\u8D77\u91CD\u673A\u9700\u8981\u4EC0\u4E48\u4FDD\u9669\uFF1F",
      answer: "\u6240\u6709\u878D\u8D44\u8BBE\u5907\u5F3A\u5236\u8981\u6C42\u5168\u9762\u8D77\u91CD\u673A\u4FDD\u9669\u3002\u5FC5\u9700\u8986\u76D6\u8303\u56F4\uFF1A(1) \u8BBE\u5907\u635F\u574F\u4FDD\u9669\uFF08\u706B\u707E\u3001\u76D7\u7A83\u3001\u7834\u574F\uFF09\uFF0C(2) \u7B2C\u4E09\u65B9\u8D23\u4EFB\u9669\uFF08RM500-1000\u4E07\u8986\u76D6\uFF09\uFF0C(3) \u8FD0\u8F93\u8FC7\u7A0B\u4E2D\u7684\u8D27\u7269\u4FDD\u9669\uFF0C(4) \u5929\u6C14\u635F\u5BB3\u8986\u76D6\uFF08\u98CE\u3001\u6D2A\u6C34\uFF09\u3002\u5E74\u5EA6\u4FDD\u9669\u8D39\u7528\uFF1ARM3-8\u4E07\u53D6\u51B3\u4E8E\u8D77\u91CD\u673A\u4EF7\u503C\u548C\u7C7B\u578B\u3002\u6211\u4EEC\u53EF\u4EE5\u63A8\u8350\u4E3A\u8D77\u91CD\u673A\u8FD0\u8425\u5546\u63D0\u4F9B\u6709\u7ADE\u4E89\u529B\u4EF7\u683C\u7684\u4FDD\u9669\u516C\u53F8\u3002\u4FDD\u9669\u8D39\u53EF\u4EE5\u878D\u8D44\u5E76\u6DFB\u52A0\u5230\u6708\u4F9B\u4E2D\u3002\u6211\u4EEC\u5E2E\u60A8\u89C4\u5212\u5B8C\u6574\u89E3\u51B3\u65B9\u6848\u3002"
    },
    {
      question: "\u8D77\u91CD\u673A\u878D\u8D44\u5BA1\u6279\u6709\u591A\u5FEB\uFF1F",
      answer: "\u6807\u51C6\u5BA1\u6279\uFF1A\u5B8C\u6574\u7533\u8BF748\u5C0F\u65F6\uFF082\u4E2A\u5DE5\u4F5C\u65E5\uFF09\u3002\u52A0\u901F\u5BA1\u6279\uFF1A\u6709\u4EE5\u4E0B\u6761\u4EF6\u7684\u7ECF\u9A8C\u4E30\u5BCC\u8FD0\u8425\u5546\u8FC5\u901F\u5904\u7406\uFF1A(1) \u73B0\u6709\u8D77\u91CD\u673A\u6240\u6709\u6743\uFF0C(2) \u6D3B\u8DC3\u79DF\u8D41\u5408\u540C\uFF08\u653F\u5E9C\u9879\u76EE\u4F18\u5148\uFF09\uFF0C(3) \u5F3A\u52B2\u8D22\u52A1\u62A5\u8868\uFF0C(4) \u826F\u597DDOSH\u5408\u89C4\u8BB0\u5F55\u3002\u6211\u4EEC\u4F18\u5148\u5904\u7406\u6709\u5373\u65F6\u9879\u76EE\u673A\u4F1A\u7684\u7D27\u6025\u6848\u4F8B\uFF08\u4F8B\u5982\uFF1A\u8D62\u5F97\u653F\u5E9C\u62DB\u6807\u3001\u786E\u4FDD\u957F\u671F\u79DF\u8D41\u5408\u540C\uFF09\u3002\u4E2D\u534812\u70B9\u524D\u63D0\u4EA4\u7533\u8BF7\u53EF\u5F53\u5929\u521D\u6B65\u8BC4\u4F30\u3002\u6211\u4EEC\u7406\u89E3\u5546\u673A\u4E0D\u7B49\u4EBA\u3002"
    },
    {
      question: "\u5916\u56FD\u4EBA\u6216\u5916\u56FD\u516C\u53F8\u53EF\u4EE5\u7533\u8BF7\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF0C\u5728\u9A6C\u6765\u897F\u4E9A\u8FD0\u8425\u7684\u5916\u56FD\u516C\u53F8\u53EF\u4EE5\u7533\u8BF7\u3002\u8981\u6C42\uFF1A(1) \u9A6C\u6765\u897F\u4E9A\u516C\u53F8\u6CE8\u518C\uFF08SSM\uFF09\uFF0C(2) \u8D77\u91CD\u673A\u79DF\u8D41\u4E1A\u52A1\u7684\u6709\u6548\u8425\u4E1A\u6267\u7167\uFF0C(3) \u9A6C\u6765\u897F\u4E9A\u8463\u4E8B\u6216\u672C\u5730\u5408\u4F5C\u4F19\u4F34\uFF0C(4) \u6700\u597D\u67092\u5E74\u4EE5\u4E0A\u9A6C\u6765\u897F\u4E9A\u8FD0\u8425\u5386\u53F2\uFF0C(5) \u8D22\u52A1\u62A5\u8868\u548C\u7A0E\u52A1\u7533\u62A5\u3002\u53C2\u4E0E\u9A6C\u6765\u897F\u4E9A\u5EFA\u7B51\u70ED\u6F6E\u7684\u65B0\u52A0\u5761\u3001\u4E2D\u56FD\u3001\u65E5\u672C\u5916\u56FD\u516C\u53F8\u6B22\u8FCE\u3002\u7531\u4E8E\u9700\u8981\u989D\u5916\u6587\u4EF6\u9A8C\u8BC1\uFF0C\u6279\u51C6\u7387\u7565\u4F4E\uFF0875-85%\uFF09\u6BD4\u9A6C\u6765\u897F\u4E9A\u516C\u53F8\u3002\u6211\u4EEC\u6B22\u8FCE\u56FD\u9645\u5408\u4F5C\u4F19\u4F34\u3002"
    },
    {
      question: "\u8D77\u91CD\u673A\u878D\u8D44\u6709\u4EC0\u4E48\u7A0E\u52A1\u4F18\u60E0\uFF1F",
      answer: "\u8D77\u91CD\u673A\u878D\u8D44\u63D0\u4F9B\u663E\u8457\u7A0E\u52A1\u4F18\u52BF\uFF1A(1) \u6708\u5EA6\u5229\u606F\u652F\u4ED8\u53EF\u4F5C\u4E3A\u4E1A\u52A1\u8D39\u7528\u62B5\u7A0E\uFF0C(2) \u8D77\u91CD\u673A\u4EF7\u503C\u6298\u65E7\u7D22\u8D54\uFF08\u901A\u5E387\u5E7414.29%/\u5E74\uFF09\uFF0C(3) \u7EF4\u62A4\u548C\u4FDD\u9669\u8D39\u7528\u5168\u989D\u53EF\u62B5\u6263\uFF0C(4) \u64CD\u4F5C\u5458\u5DE5\u8D44\u548C\u57F9\u8BAD\u8D39\u7528\u53EF\u62B5\u6263\u3002\u6709\u6548\u8282\u7A0E\uFF1A\u8D37\u6B3E\u671F\u5185\u8BBE\u5907\u603B\u6210\u672C\u768415-25%\u3002\u8BF7\u54A8\u8BE2\u60A8\u7684\u7A0E\u52A1\u987E\u95EE\uFF0C\u4F46\u878D\u8D44\u901A\u5E38\u6BD4\u73B0\u91D1\u8D2D\u4E70\u63D0\u4F9B\u66F4\u597D\u7684\u7A0E\u52A1\u5730\u4F4D\u3002\u79DF\u8D41\u7ED3\u6784\u4E5F\u53EF\u7528\u4E8E\u7279\u5B9A\u7A0E\u52A1\u89C4\u5212\u9700\u6C42\u3002\u6211\u4EEC\u5E2E\u60A8\u5B9E\u73B0\u8D22\u52A1\u6548\u76CA\u6700\u5927\u5316\u3002"
    },
    {
      question: "\u4F60\u4EEC\u53EA\u878D\u8D44\u7279\u5B9A\u9879\u76EE\u7684\u8D77\u91CD\u673A\u5417\uFF1F",
      answer: "\u4E0D\uFF0C\u6211\u4EEC\u4E3A\u4E00\u822C\u8D77\u91CD\u673A\u79DF\u8D41\u4E1A\u52A1\u8FD0\u8425\u878D\u8D44\uFF0C\u4E0D\u662F\u9488\u5BF9\u7279\u5B9A\u9879\u76EE\u3002\u4F46\u662F\uFF0C\u62E5\u6709\u5DF2\u786E\u4FDD\u7684\u79DF\u8D41\u5408\u540C\u6216\u653F\u5E9C\u62DB\u6807\u4F1A\u663E\u8457\u589E\u5F3A\u60A8\u7684\u7533\u8BF7\u3002\u6709\u52A9\u4E8E\u6279\u51C6\u7684\u5408\u540C\u7C7B\u578B\uFF1A(1) \u4E0E\u5F00\u53D1\u5546\u7684\u957F\u671F\u79DF\u8D41\u534F\u8BAE\uFF0812\u4E2A\u6708\u4EE5\u4E0A\uFF09\uFF0C(2) \u653F\u5E9C\u57FA\u7840\u8BBE\u65BD\u9879\u76EE\uFF08MRT3\u3001\u69DF\u57CE\u8F7B\u5FEB\u94C1\u3001\u6CDB\u5A46\u7F57\u6D32\u516C\u8DEF\uFF09\uFF0C(3) \u6570\u636E\u4E2D\u5FC3\u5EFA\u8BBE\u5408\u540C\uFF08\u8C37\u6B4C\u3001\u5FAE\u8F6F\u9879\u76EE\uFF09\uFF0C(4) \u9AD8\u5C42\u5F00\u53D1\u5546\u5408\u4F5C\u4F19\u4F34\uFF08Gamuda\u3001Sime Darby\u3001UEM\uFF09\u3002\u591A\u5143\u5316\u9879\u76EE\u7BA1\u9053\u4F18\u4E8E\u5355\u4E00\u9879\u76EE\u4F9D\u8D56\u3002\u6211\u4EEC\u770B\u91CD\u60A8\u7684\u6574\u4F53\u4E1A\u52A1\u5B9E\u529B\u548C\u957F\u671F\u53D1\u5C55\u3002"
    },
    {
      question: "\u53EF\u4EE5\u4EE5\u65E7\u6362\u65B0\u5E76\u878D\u8D44\u8D2D\u4E70\u65B0\u8D77\u91CD\u673A\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF01\u63D0\u4F9B\u4EE5\u65E7\u6362\u65B0\u548C\u5347\u7EA7\u9879\u76EE\u3002\u6D41\u7A0B\uFF1A(1) \u6211\u4EEC\u8BC4\u4F30\u60A8\u73B0\u6709\u8D77\u91CD\u673A\u7684\u5E02\u573A\u4EF7\u503C\uFF0C(2) \u4EE5\u65E7\u6362\u65B0\u4EF7\u503C\u4F5C\u4E3A\u65B0\u8D77\u91CD\u673A\u9996\u4ED8\uFF0C(3) \u65E7\u8D77\u91CD\u673A\u5269\u4F59\u8D37\u6B3E\u4F59\u989D\u5982\u6709\u53EF\u518D\u878D\u8D44\uFF0C(4) \u65B0\u8D77\u91CD\u673A\u5355\u4E00\u65B0\u8D37\u6B3E\u3002\u5E38\u89C1\u5347\u7EA7\u8DEF\u5F84\uFF1A(1) \u4E2D\u56FD\u54C1\u724C\uFF08\u4E2D\u8054\u3001\u5F90\u5DE5\uFF09\u5347\u7EA7\u5230\u65E5\u672C\u54C1\u724C\uFF08Tadano\u3001Kobelco\uFF09- \u53EF\u9760\u6027\u63D0\u9AD830%\uFF0C(2) \u65E7\u79FB\u52A8\u540A\u8F66\u5347\u7EA7\u5230\u5854\u540A - \u6293\u4F4F\u9AD8\u697C\u70ED\u6F6E\uFF0C(3) \u6807\u51C6\u5854\u540A\u5347\u7EA7\u5230TSM\u667A\u80FD\u5854\u540A - DOSH\u5408\u89C4+\u79DF\u91D1\u6EA2\u4EF7\u3002\u6211\u4EEC\u652F\u6301\u60A8\u7684\u4E1A\u52A1\u5347\u7EA7\u4E4B\u8DEF\u3002"
    },
    {
      question: "\u4F60\u4EEC\u5728\u9A6C\u6765\u897F\u4E9A\u54EA\u4E9B\u5730\u533A\u63D0\u4F9B\u670D\u52A1\uFF1F",
      answer: "\u6211\u4EEC\u670D\u52A1\u5168\u56FD\u6240\u6709\u4E3B\u8981\u5EFA\u7B51\u5E02\u573A\uFF1A(1) \u5DF4\u751F\u8C37\uFF08\u5409\u9686\u5761\u3001\u96EA\u5170\u83AA\uFF09\uFF1A\u6700\u9AD8\u8D77\u91CD\u673A\u9700\u6C42\u3001\u9AD8\u697C\u70ED\u6F6E\u3001MRT3\u9879\u76EE\uFF0C(2) \u67D4\u4F5B\uFF08\u65B0\u5C71\u3001\u4F9D\u65AF\u5E72\u8FBE\u7279\u533A\uFF09\uFF1A\u6377\u8FD0\u7CFB\u7EDF\u3001\u68EE\u6797\u57CE\u5E02\u3001\u9AD8\u5C42\u5F00\u53D1\uFF0C(3) \u69DF\u57CE\uFF08\u4E54\u6CBB\u5E02\u3001\u5CC7\u516D\u62DC\uFF09\uFF1A\u5DE5\u4E1A\u56ED\u3001\u9AD8\u5C42\u4F4F\u5B85\u3001\u8F7B\u5FEB\u94C1\u9879\u76EE\uFF0C(4) \u9739\u96F3\u3001\u5F6D\u4EA8\u3001\u68EE\u7F8E\u5170\uFF1A\u57FA\u7840\u8BBE\u65BD\u548C\u5DE5\u4E1A\u9879\u76EE\uFF0C(5) \u6C99\u5DF4\u3001\u7802\u62C9\u8D8A\uFF08\u4E1C\u9A6C\uFF09\uFF1A\u6CDB\u5A46\u7F57\u6D32\u516C\u8DEF\u3001\u8D44\u6E90\u9879\u76EE\u3002\u53EF\u901A\u8FC7\u5728\u7EBF\u548CWhatsApp\u8FDB\u884C\u504F\u8FDC\u5730\u533A\u5904\u7406\u3002\u5168\u56FD\u534F\u8C03\u8D77\u91CD\u673A\u68C0\u67E5\u548CDOSH\u9A8C\u8BC1\u3002\u6211\u4EEC\u662F\u60A8\u5168\u56FD\u4E1A\u52A1\u7684\u5408\u4F5C\u4F19\u4F34\u3002"
    },
    {
      question: "\u4F60\u4EEC\u7684\u8D77\u91CD\u673A\u878D\u8D44\u4E0E\u94F6\u884C\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F"
    }
  ];
  const productSchema = generateProductSchema({
    name: "\u9A6C\u6765\u897F\u4E9A\u8D77\u91CD\u673A\u878D\u8D44 - \u5854\u540A\u548C\u79FB\u52A8\u540A\u8F66",
    description: "\u4E13\u4E1A\u8D77\u91CD\u673A\u878D\u8D44\u670D\u52A1\u4E3A\u79DF\u8D41\u8FD0\u8425\u5546\u3002\u878D\u8D44\u5854\u5F0F\u8D77\u91CD\u673A\u3001\u79FB\u52A8\u540A\u8F66\u3001\u5C65\u5E26\u8D77\u91CD\u673A\u3002DOSH\u8BA4\u8BC1\u5408\u89C4\u878D\u8D44\u3001\u8F66\u961F\u914D\u5957\u300148\u5C0F\u65F6\u6279\u51C6\u3002\u4ECERM50\u4E07\u81F3RM1000\u4E07\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/crane-financing.jpg`,
    category: "Financial Service - Heavy Equipment Financing",
    offers: {
      price: "500000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u4E13\u4E1A\u8D77\u91CD\u673A\u878D\u8D44\u670D\u52A1 - \u79DF\u8D41\u8FD0\u8425\u5546\u9996\u9009", "subtitle": "\u5854\u5F0F\u8D77\u91CD\u673A | \u79FB\u52A8\u540A\u8F66 | \u5C65\u5E26\u8D77\u91CD\u673A | 48\u5C0F\u65F6\u6279\u51C6 | DOSH\u8BA4\u8BC1\u652F\u6301 | \u8F66\u961F\u878D\u8D44 | RM50\u4E07-RM1000\u4E07", "ctaText": "WhatsApp\u83B7\u53D6\u8F66\u961F\u62A5\u4EF7", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u54A8\u8BE2\u8D77\u91CD\u673A\u878D\u8D44\u670D\u52A1\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "DOSH\u5408\u89C4\u4E13\u5BB6", "\u8F66\u961F\u878D\u8D44\u4E13\u5BB6", "90%\u8FD0\u8425\u5546\u6279\u51C6\u7387"] })}  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
马来西亚起重机租赁市场蓬勃发展 - 您抓住机会了吗？
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
巴生谷、柔佛和槟城高楼热潮。MRT3、槟城轻快铁、数据中心（谷歌、微软）。塔式起重机利用率达80-90%。租金上涨15-20%。操作员短缺创造溢价定价机会。唯一问题：获得设备采购资金。让我们帮您解决这个问题！
</p> </div> <div class="grid md:grid-cols-3 gap-8 mb-12"> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="text-primary font-bold text-2xl mb-2">RM 17.4亿</div> <div class="text-[#4F3E29] font-semibold mb-2">Gamuda Elmina数据中心</div> <p class="text-sm text-[#4F3E29]">谷歌超大规模设施需要移动吊车进行28个月建设。类似项目管道：微软、其他超大规模运营商。巨大市场机会！</p> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="text-primary font-bold text-2xl mb-2">80-90% 利用率</div> <div class="text-[#4F3E29] font-semibold mb-2">塔式起重机需求高峰</div> <p class="text-sm text-[#4F3E29]">10年来最高利用率。柔佛捷运系统项目、槟城高楼热潮、吉隆坡城市更新。供应短缺支撑租金溢价。</p> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="text-primary font-bold text-2xl mb-2">DOSH 2024法规</div> <div class="text-[#4F3E29] font-semibold mb-2">安全技术强制要求</div> <p class="text-sm text-[#4F3E29]">新适用证书要求。TSM、防碰撞系统日益必需。配备技术的起重机租金溢价10-20%。合规带来竞争优势。</p> </div> </div> <!-- ROI Calculator Section --> <div class="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-[6px_6px_0_#2D1810]"> <h3 class="text-2xl font-bold text-primary mb-4 text-center">塔式起重机租赁业务投资回报率</h3> <div class="grid md:grid-cols-2 gap-6 text-sm"> <div> <h4 class="font-bold text-gray-800 mb-2">投资示例：</h4> <ul class="space-y-1 text-[#4F3E29]"> <li>• 中联塔式起重机: RM 450万</li> <li>• 首付（20%）: RM 90万</li> <li>• 月供（7年）: RM 6.2万</li> <li>• 包含TSM系统: RM 15万</li> </ul> </div> <div> <h4 class="font-bold text-gray-800 mb-2">收入潜力：</h4> <ul class="space-y-1 text-[#4F3E29]"> <li>• 月租金: RM 12-18万</li> <li>• 年度总收入: RM 144-216万</li> <li>• 年度净利润: RM 60-90万</li> <li>• <strong class="text-green-600">投资回报期: 4-6年</strong></li> </ul> </div> </div> <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500"> <p class="text-sm text-gray-800"> <strong>市场现实：</strong> 巴生谷和柔佛塔式起重机目前实现85-90%利用率，因高楼热潮。与开发商的长期合同（12-24个月）提供稳定现金流。包括旺季和淡季的回本期：5-7年。我们与您共同规划长期成功！
</p> </div> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
为什么起重机运营商选择Ing Heng Credit
</h2> <p class="text-xl text-[#4F3E29]">
专业起重机租赁业务融资，具备行业专业知识和灵活条款
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="max-w-3xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">计算您的起重机月供</h2> <p class="text-[#4F3E29]">估算塔式起重机、移动吊车或车队融资的月供金额</p> </div> ${renderComponent($$result2, "Calculator", $$Calculator, { "lang": lang, "equipmentType": "\u8D77\u91CD\u673A", "defaultPrice": 45e4 })} </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
5步轻松融资您的起重机车队
</h2> <p class="text-xl text-[#4F3E29]">
经验丰富运营商从申请到起重机部署5-7天
</p> </div> <div class="grid md:grid-cols-5 gap-8"> ${steps.map((step) => renderTemplate`${renderComponent($$result2, "StepCard", $$StepCard, { "stepNumber": step.stepNumber, "icon": step.icon, "title": step.title, "description": step.description })}`)} </div> <!-- CTA after steps --> <div class="text-center mt-12"> <a href="https://wa.me/60175700889?text=你好！我想讨论起重机车队融资。" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg inline-block">
讨论您的车队融资方案
</a> <p class="text-sm text-[#4F3E29] mt-3">经验丰富运营商48小时批准 | 灵活条款可用</p> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
我们融资的起重机类型
</h2> <p class="text-xl text-[#4F3E29]">
全面融资所有起重机类别和应用
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> ${equipmentTypes.map((equipment) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] transition-shadow"> <h3 class="text-lg font-bold text-primary mb-3">${equipment.name}</h3> <p class="text-[#4F3E29] mb-3 text-sm">${equipment.description}</p> <div class="text-sm text-[#4F3E29] space-y-2"> <p><strong>应用：</strong> ${equipment.applications}</p> <p><strong>品牌：</strong> <span class="text-[#4F3E29]">${equipment.brands}</span></p> </div> </div>`)} </div> <!-- Accepted Brands --> <div class="text-center"> <h3 class="text-2xl font-bold text-primary mb-6">接受的起重机品牌</h3> <div class="flex flex-wrap justify-center gap-4"> ${acceptedBrands.map((brand) => renderTemplate`<span class="px-4 py-2 bg-white rounded-full shadow-[2px_2px_0_#2D1810] text-[#4F3E29] font-medium hover:shadow-[4px_4px_0_#2D1810] transition-shadow"> ${brand} </span>`)} </div> <p class="text-[#4F3E29] mt-4">高端品牌（Liebherr、Tadano）因转售价值更强享受优惠利率。我们重视品质和长期价值！</p> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
DOSH合规与安全技术融资
</h2> <p class="text-xl text-[#4F3E29]">
将安全技术与起重机融资捆绑，实现全面DOSH合规
</p> </div> <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"> <!-- DOSH Requirements --> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810]"> <h3 class="text-2xl font-bold text-primary mb-6">DOSH 2024要求</h3> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">适用证书（CF）</div> <div class="text-sm text-[#4F3E29]">每15个月需要有效CF。不合规罚款：最高RM10万。融资前我们验证CF状态。</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">操作员认证</div> <div class="text-sm text-[#4F3E29]">CIDB/JKKP认证操作员强制要求。操作员短缺为训练有素团队创造竞争优势。</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">安全技术</div> <div class="text-sm text-[#4F3E29]">大型开发商（Gamuda、Sime Darby、UEM）日益要求TSM、防碰撞、载荷监控。</div> </div> </li> </ul> </div> <!-- Technology Financing --> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810]"> <h3 class="text-2xl font-bold text-primary mb-6">我们融资的技术</h3> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">塔式起重机系统监控（TSM）</div> <div class="text-sm text-[#4F3E29]">实时监控、防碰撞、分区系统。成本：RM10-25万。租金溢价：10-20%。</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">载荷力矩指示器（LMI）</div> <div class="text-sm text-[#4F3E29]">过载防止、容量管理。成本：RM3-8万。保险费降低：5-15%。</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">天气监测系统</div> <div class="text-sm text-[#4F3E29]">风速仪、自动关闭协议。雨季安全关键。成本：RM2-5万。</div> </div> </li> </ul> </div> </div> <!-- Technology ROI Note --> <div class="max-w-3xl mx-auto mt-8 p-6 bg-[#F5F5DC] border-l-4 border-primary rounded-lg"> <h4 class="font-bold text-primary mb-2">技术投资回报率：</h4> <p class="text-[#4F3E29] text-sm">
配备TSM的起重机租金溢价10-20%（塔式起重机每月额外收入RM1.5-3万）。保险节省：每年5-15%（RM0.5-1.5万）。事故预防价值：潜在节省数百万责任/停机成本。技术投资回本期：通常2-3年。大型开发商日益要求多塔吊现场使用TSM。投资安全技术是明智商业决策！
</p> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
起重机租赁运营商的成功故事
</h2> <p class="text-xl text-[#4F3E29]">
通过我们的融资服务扩大起重机租赁业务的真实运营商
</p> </div> <div class="grid md:grid-cols-3 gap-6"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { "name": testimonial.name, "company": testimonial.company, "location": testimonial.location, "testimonial": testimonial.testimonial, "rating": testimonial.rating })}`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
起重机融资常见问题
</h2> <p class="text-xl text-[#4F3E29]">
关于起重机运营商融资问题的全面解答
</p> </div> <div class="max-w-4xl mx-auto space-y-4"> ${faqs.map((faq) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer })}`)} </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "crane" })}  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
准备好抓住马来西亚起重机租赁热潮了吗？
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
高楼热潮、基础设施管道、操作员短缺。市场条件有利于有资金渠道的起重机租赁业务。今天就融资您的塔式起重机、移动吊车或车队扩张！
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"> <a href="https://wa.me/60175700889?text=你好！我想讨论起重机租赁业务融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
WhatsApp讨论车队融资
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> <div class="flex flex-wrap justify-center gap-6 text-sm"> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>经验丰富运营商48小时批准</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>DOSH合规技术包含在内</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>车队融资批量折扣</span> </div> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
提交您的起重机融资申请
</h2> <p class="text-[#4F3E29]">
工作时间内4小时内联系您（周一至周五上午9点至下午5点，周六上午9点至下午1点）
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema)), unescapeHTML(encodeJSONLD(faqSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/crane.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/crane.astro";
const $$url = "/zh/equipment/crane";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Crane,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
