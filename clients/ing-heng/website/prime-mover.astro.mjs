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
const $$PrimeMover = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u62D6\u8F66\u5934\u878D\u8D44\u5DF4\u751F\u6E2F | \u5FEB\u901F\u6279\u51C6 | 90%\u878D\u8D44 | \u4E13\u670D\u52A1\u8D27\u8FD0\u4E1A";
  const pageDescription = "\u5FEB\u901F\u62D6\u8F66\u5934\u878D\u8D44\uFF0C\u4E13\u4E3A\u96C6\u88C5\u7BB1\u8D27\u8FD0\u5546\u8BBE\u8BA1\u3002\u5FEB\u901F\u6279\u51C6\uFF0C90%\u878D\u8D44\uFF0C\u5DF4\u751F\u6E2F\u4E13\u5BB6\u3002\u63A5\u53D7\u65AF\u582A\u5C3C\u4E9A\u3001\u6C83\u5C14\u6C83\u3001\u5954\u9A70\u3002\u8F66\u961F\u878D\u8D44\u4F18\u60E0\u3002";
  const keywords = ["\u62D6\u8F66\u5934\u878D\u8D44", "\u96C6\u88C5\u7BB1\u5361\u8F66\u878D\u8D44", "\u5DF4\u751F\u6E2F\u62D6\u8F66\u5934\u8D37\u6B3E", "\u91CD\u578B\u5361\u8F66\u878D\u8D44", "\u8D27\u8FD0\u8F66\u8F86\u8D37\u6B3E", "\u9A6C\u58EB\u57FA\u5408\u540C\u878D\u8D44"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907", url: "/zh/equipment" },
    { label: "\u62D6\u8F66\u5934\u878D\u8D44", url: "/zh/equipment/prime-mover" }
  ];
  const benefits = [
    { icon: "clock", title: "\u5FEB\u901F\u5FEB\u901F\u6279\u51C6", description: "\u7D27\u6025\u8239\u8FD0\u5408\u540C\u53EF\u5FEB\u901F\u6279\u51C6\u3002\u628A\u63E1\u5546\u673A\uFF0C\u4E0D\u9519\u8FC7\u4EFB\u4F55\u8BA2\u5355\u3002" },
    { icon: "percentage", title: "\u9996\u4ED8\u4ECE0%\u8D77*", description: "\u7B26\u5408\u6761\u4EF6\u8005\u9996\u4ED8\u4ECE0%\u8D77*\u3002\u53EF\u8D37\u6B3E\u81F3100%*\u3002\u4FDD\u7559\u73B0\u91D1\u6D41\u7528\u4E8E\u67F4\u6CB9\u548C\u65E5\u5E38\u8FD0\u8425\u3002*\u53D7\u6761\u6B3E\u53CA\u6761\u4EF6\u7EA6\u675F" },
    { icon: "calendar", title: "12-84\u4E2A\u6708\u671F\u9650", description: "\u7075\u6D3B\u8FD8\u6B3E\u671F\u9650\u957F\u8FBE7\u5E74\u3002\u6839\u636E\u60A8\u7684\u5408\u540C\u5468\u671F\u548C\u6536\u5165\u6D41\u91CF\u5339\u914D\u4ED8\u6B3E\u3002" },
    { icon: "shield", title: "\u63A5\u53D7\u4E8C\u624B\u8F66", description: "\u878D\u8D4415\u5E74\u4EE5\u5185\u7684\u4E8C\u624B\u62D6\u8F66\u5934\u3002\u65AF\u582A\u5C3C\u4E9A\u3001\u6C83\u5C14\u6C83\u3001\u5954\u9A70\u3001\u65E5\u91CE\u3001UD\u5168\u63A5\u53D7\u3002" },
    { icon: "users", title: "\u8F66\u961F\u878D\u8D44\u4F18\u60E0", description: "2\u53F0\u4EE5\u4E0A\u4EAB\u7279\u522B\u5229\u7387\u3002\u6269\u5927\u8F66\u961F\u4E89\u53D6\u9A6C\u58EB\u57FA\u3001MSC\u3001\u8FBE\u98DE\u5408\u540C\u3002\u6279\u91CF\u4F18\u60E0\u3002" },
    { icon: "lightning", title: "\u65FA\u5B63\u4ED8\u6B3E\u7075\u6D3B", description: "\u65FA\u5B63\uFF08\u519C\u5386\u65B0\u5E74\u3001\u5E74\u5E95\uFF09\u591A\u4ED8\uFF0C\u6DE1\u5B63\u5C11\u4ED8\u3002\u7B26\u5408\u5DF4\u751F\u6E2F\u96C6\u88C5\u7BB1\u5468\u671F\u7684\u73B0\u91D1\u6D41\u7BA1\u7406\u3002" },
    { icon: "document", title: "\u6587\u4EF6\u5FEB\u901F\u5904\u7406", description: "\u7B80\u5355\u6587\u4E66\u3002\u8EAB\u4EFD\u8BC1\u3001\u94F6\u884C\u5BF9\u8D26\u5355\u3001\u516C\u53F8\u6587\u4EF6\u30025\u53F0\u4EE5\u4E0B\u8F66\u961F\u65E0\u9700\u590D\u6742\u8D22\u52A1\u62A5\u8868\u3002" },
    { icon: "shield", title: "\u900F\u660E\u5B9A\u4EF7", description: "\u65E0\u9690\u85CF\u8D39\u7528\u3002\u7ADE\u4E89\u6027\u5229\u73876.5-11%\u3002\u7B26\u5408\u67F4\u6CB9\u8865\u8D34SKDS 2.0\u7684\u878D\u8D44\u65B9\u6848\u3002" }
  ];
  const steps = [
    { stepNumber: 1, icon: "contact", title: "WhatsApp\u8054\u7CFB", description: "\u8054\u7CFB\u6211\u4EEC\u7684\u8D27\u8FD0\u878D\u8D44\u4E13\u5BB6\u3002\u6839\u636E\u8F66\u578B\u548C\u5408\u540C\u60C5\u51B5\u7ACB\u5373\u62A5\u4EF7\u3002" },
    { stepNumber: 2, icon: "document", title: "\u63D0\u4EA4\u6587\u4EF6", description: "\u8EAB\u4EFD\u8BC1\u30016\u4E2A\u6708\u94F6\u884C\u5BF9\u8D26\u5355\u3001SSM\u3001\u8239\u8FD0\u5408\u540C\uFF08\u5982\u6709\uFF09\u3002\u7B80\u5355\u6D41\u7A0B\u3002" },
    { stepNumber: 3, icon: "check", title: "\u5FEB\u901F\u6279\u51C6", description: "\u7D27\u6025\u60C5\u51B5\u5FEB\u901F\u5185\u6279\u51C6\u3002\u6807\u51C6\u7533\u8BF7\u5F53\u5929\u6279\u51C6\uFF08\u5B8C\u6574\u6587\u4EF6\uFF09\u3002" },
    { stepNumber: 4, icon: "clipboard", title: "\u7B7E\u7F72\u534F\u8BAE", description: "\u900F\u660E\u8D37\u6B3E\u6761\u6B3E\u3002\u65E0\u9690\u85CF\u8D39\u7528\u3002\u53EF\u9009GPS\u8FFD\u8E2A\u7CFB\u7EDF\u5408\u89C4\u5B89\u88C5\u3002" },
    { stepNumber: 5, icon: "truck", title: "\u53D6\u8F66\u8FD0\u8D27", description: "\u6536\u5230\u8D44\u91D1\uFF0C\u7ACB\u5373\u53D6\u8F66\u3002\u5F00\u59CB\u62C9\u96C6\u88C5\u7BB1\uFF0C\u7B2C\u4E00\u5929\u5C31\u6709\u6536\u5165\u3002" }
  ];
  const equipmentTypes = [
    {
      name: "6x4\u62D6\u8F66\u5934\uFF08\u6807\u51C6\u578B\uFF09",
      description: "\u6700\u5E38\u89C1\u768420\u5C3A/40\u5C3A\u96C6\u88C5\u7BB1\u8FD0\u8F93\u914D\u7F6E\u3002\u9002\u5408\u5DF4\u751F\u6E2F-\u5409\u9686\u5761-\u96EA\u5170\u83AA\u8DEF\u7EBF\u3002\u7701\u6CB9\u65E5\u5E38\u8FD0\u8425\u3002",
      applications: "\u96C6\u88C5\u7BB1\u8FD0\u8F93\u3001\u5DF4\u751F\u6E2F\u4F5C\u4E1A\u3001\u672C\u5730/\u533A\u57DF\u8FD0\u8F93"
    },
    {
      name: "6x2\u62D6\u8F66\u5934\uFF08\u8F7B\u578B\uFF09",
      description: "\u66F4\u8F7B\u91CD\u91CF\uFF0C\u66F4\u7701\u6CB9\u3002\u9002\u5408\u56FA\u5B9A\u8DEF\u7EBF\u7684\u6210\u672C\u610F\u8BC6\u8FD0\u8425\u5546\u3002",
      applications: "\u7A7A\u67DC/\u8F7B\u67DC\u79FB\u52A8\u3001\u57CE\u5E02\u7269\u6D41\u3001\u8282\u6CB9\u8FD0\u8425"
    },
    {
      name: "8x4\u62D6\u8F66\u5934\uFF08\u91CD\u578B\uFF09",
      description: "\u91CD\u8F7D\u914D\u7F6E\u7528\u4E8E\u8D85\u91CD\u8D27\u7269\u3001\u673A\u68B0\u8FD0\u8F93\u3001\u9879\u76EE\u7269\u6D41\u3002\u9AD8\u626D\u77E9\u5E94\u5BF9\u82DB\u523B\u8D1F\u8F7D\u3002",
      applications: "\u91CD\u578B\u673A\u68B0\u8FD0\u8F93\u3001\u8D85\u5927\u8D27\u7269\u3001\u77FF\u4E1A\u8BBE\u5907\u8FD0\u8F93"
    },
    {
      name: "\u5168\u65B0\u62D6\u8F66\u5934\uFF08Euro 5\uFF09",
      description: "\u6700\u65B0\u6392\u653E\u6807\u51C6\u3002\u66F4\u4F4E\u7EF4\u4FEE\uFF0C\u66F4\u7701\u6CB9\uFF0C\u8239\u8FD0\u516C\u53F8\u4F18\u5148\u9009\u62E9\u3002\u9002\u5408\u957F\u671F\u5408\u540C\u3002",
      applications: "\u6240\u6709\u8D27\u8FD0\u4F5C\u4E1A\u3001\u8239\u8FD0\u5408\u540C\u3001\u957F\u9014\u8FD0\u8F93"
    },
    {
      name: "\u4E8C\u624B\u62D6\u8F66\u5934\uFF085-10\u5E74\uFF09",
      description: "\u7ECF\u8FC7\u9A8C\u8BC1\u7684\u53EF\u9760\u6027\uFF0C\u6210\u672C\u66F4\u4F4E\u3002\u975E\u5E38\u9002\u5408\u8F66\u961F\u6269\u5C55\u6216\u9996\u6B21\u8FD0\u8425\u5546\u3002\u53EF\u878D\u8D4485%\u3002",
      applications: "\u8F66\u961F\u6269\u5C55\u3001\u9996\u6B21\u8F66\u4E3B-\u8FD0\u8425\u5546\u3001\u5907\u7528\u8F66"
    },
    {
      name: "\u4E8C\u624B\u62D6\u8F66\u5934\uFF0810-15\u5E74\uFF09",
      description: "\u7ECF\u6D4E\u5B9E\u60E0\u7684\u5165\u95E8\u9009\u62E9\u3002\u9002\u5408\u65B0\u8D27\u8FD0\u5546\u8D77\u6B65\u3002\u7EF4\u4FEE\u8F83\u9AD8\u4F46\u6708\u4F9B\u8D1F\u62C5\u8F7B\u3002",
      applications: "\u521B\u4E1A\u8D27\u8FD0\u5546\u3001\u517C\u804C\u8FD0\u8425\u3001\u5907\u7528/\u5F85\u547D\u8F66\u8F86"
    }
  ];
  const acceptedBrands = ["\u65AF\u582A\u5C3C\u4E9A Scania", "\u6C83\u5C14\u6C83 Volvo", "\u5954\u9A70 Mercedes-Benz", "\u65E5\u91CE Hino", "UD Trucks", "\u4E94\u5341\u94C3 Isuzu", "MAN", "DAF", "Iveco", "\u798F\u7530 Foton", "\u9655\u6C7D Shacman", "\u4E2D\u56FD\u91CD\u6C7D Sinotruk"];
  const testimonials = [
    {
      name: "\u674E\u4FCA\u8F89",
      company: "LCH\u7269\u6D41\u6709\u9650\u516C\u53F8",
      location: "\u96EA\u5170\u83AA\uFF0C\u5DF4\u751F\u6E2F",
      testimonial: "\u7D27\u6025\u9700\u89813\u53F0\u65AF\u582A\u5C3C\u4E9A\u62D6\u8F66\u5934\u7528\u4E8EMSC\u4E94\u5E74\u5408\u540C\u3002\u94F6\u884C\u8981\u6C4230%\u9996\u4ED8\u3002Ing Heng Credit\u5728\u5FEB\u901F\u5185\u6279\u51C6\u4E86RM 120\u4E07\uFF0C\u4EC5\u9700RM 13.5\u4E07\u9996\u4ED8\uFF0810%\uFF09\u3002\u8F66\u961F\u878D\u8D44\u6298\u6263\u7701\u4E861.5%\u5229\u606F\u3002\u73B0\u5728\u6BCF\u5929\u5904\u740615-20\u4E2A\u96C6\u88C5\u7BB1\uFF0C\u4E1A\u52A1\u84B8\u84B8\u65E5\u4E0A\u3002",
      rating: 5
    },
    {
      name: "\u9648\u4F1F\u660E",
      company: "WM\u96C6\u88C5\u7BB1\u8FD0\u8F93",
      location: "\u96EA\u5170\u83AA\uFF0C\u5DF4\u751F",
      testimonial: "\u4ECE\u4E00\u53F0\u4E8C\u624B\u6C83\u5C14\u6C83\uFF0812\u5E74\u8F66\u9F84\uFF09\u5F00\u59CB\uFF0C\u901A\u8FC7Ing Heng\u878D\u8D44\u3002\u5176\u4ED6\u91D1\u878D\u516C\u53F8\u56E0\u8F66\u9F84\u62D2\u7EDD\u300218\u4E2A\u6708\u540E\uFF0C\u5347\u7EA7\u52302\u53F0\u8F83\u65B0\u7684\u65E5\u91CE\u3002\u5B8C\u7F8E\u9002\u5408\u5DF4\u751F\u6E2F\u65E5\u5E38\u8FD0\u8425\u3002\u4ED6\u4EEC\u771F\u6B63\u7406\u89E3\u8D27\u8FD0\u4E1A\u7684\u6311\u6218\uFF0C\u50CF\u8001\u670B\u53CB\u4E00\u6837\u5E2E\u52A9\u6211\u4EEC\u6210\u957F\u3002",
      rating: 5
    },
    {
      name: "\u9EC4\u6587\u6770",
      company: "\u6587\u6770\u8FD0\u8F93\u670D\u52A1",
      location: "\u67D4\u4F5B\uFF0C\u5DF4\u897F\u53E4\u5F53",
      testimonial: "\u65B0\u52A0\u5761-\u9A6C\u6765\u897F\u4E9A\u8DE8\u5883\u8FD0\u8F93\u9700\u8981\u53EF\u9760\u7684\u8F66\u3002\u878D\u8D442\u53F0\u5954\u9A70Actros\uFF0C\u8FD8\u6B3E\u6761\u6B3E\u7075\u6D3B\u3002\u65FA\u5B63\u591A\u4ED8\uFF0C\u6DE1\u5B63\u5C11\u4ED8\u3002\u8FD9\u79CD\u73B0\u91D1\u6D41\u7075\u6D3B\u6027\u5728\u56F0\u96BE\u65F6\u671F\u6551\u4E86\u6211\u7684\u751F\u610F\u3002Ing Heng\u771F\u6B63\u7406\u89E3\u6211\u4EEC\u534E\u4EBA\u8D27\u8FD0\u5546\u7684\u9700\u6C42\u3002",
      rating: 5
    }
  ];
  const faqs = [
    {
      question: "\u53EF\u4EE5\u878D\u8D44\u4E8C\u624B\u62D6\u8F66\u5934\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF01\u6211\u4EEC\u63A5\u53D715\u5E74\u4EE5\u5185\u7684\u4E8C\u624B\u62D6\u8F66\u5934\uFF0C\u5305\u62EC\u65AF\u582A\u5C3C\u4E9A\u3001\u6C83\u5C14\u6C83\u3001\u5954\u9A70\u3001\u65E5\u91CE\u3001UD\u7B49\u77E5\u540D\u54C1\u724C\u30025-10\u5E74\u8F66\u9F84\uFF1A\u53EF\u878D\u8D4485%\u300210-15\u5E74\u8F66\u9F84\uFF1A\u6839\u636E\u8F66\u51B5\u53EF\u878D\u8D4480%\u3002\u8F66\u8F86\u5FC5\u987B\u901A\u8FC7\u57FA\u672C\u68C0\u67E5\u5E76\u5904\u4E8E\u5DE5\u4F5C\u72B6\u6001\u3002\u6211\u4EEC\u7406\u89E3\u5DF4\u751F\u6E2F\u8FD0\u8425\u5546\u5E38\u9009\u62E9\u7ECF\u8FC7\u9A8C\u8BC1\u7684\u4E8C\u624B\u8F66\uFF0C\u56E0\u4E3A\u53EF\u9760\u4E14\u6210\u672C\u66F4\u4F4E\u3002"
    },
    {
      question: "\u6709\u8F66\u961F\u878D\u8D44\u65B9\u6848\u5417\uFF08\u591A\u53F0\u62D6\u8F66\u5934\uFF09\uFF1F",
      answer: "\u5F53\u7136\u6709\uFF012\u53F0\u6216\u4EE5\u4E0A\u62D6\u8F66\u5934\u53EF\u4EAB\u8F66\u961F\u878D\u8D44\u7279\u522B\u4F18\u60E0\uFF1A(1) \u6279\u91CF\u6298\u6263\u5229\u73870.5-1.5%\uFF1B(2) \u5355\u4E00\u5408\u5E76\u4ED8\u6B3E\uFF0C\u4FBF\u4E8E\u73B0\u91D1\u6D41\u7BA1\u7406\uFF1B(3) \u8F66\u961F\u6269\u5C55\u5BA1\u6279\u6D41\u7A0B\u66F4\u5FEB\uFF1B(4) \u7075\u6D3B\u9996\u4ED8\u9009\u9879\uFF0810-15%\u89C6\u8F66\u961F\u89C4\u6A21\uFF09\u3002\u975E\u5E38\u9002\u5408\u6269\u5C55\u4EE5\u6EE1\u8DB3\u8239\u8FD0\u516C\u53F8\u5408\u540C\u8981\u6C42\u7684\u8D27\u8FD0\u5546\u3002\u6211\u4EEC\u66FE\u4E3A\u5DF4\u751F\u6E2F\u8001\u724C\u8FD0\u8425\u5546\u878D\u8D44\u591A\u8FBE20\u53F0\u8F66\u7684\u8F66\u961F\u3002"
    },
    {
      question: "\u5982\u679C\u6211\u6709\u8239\u8FD0\u516C\u53F8\u5408\u540C\u600E\u4E48\u529E\uFF1F",
      answer: "\u592A\u597D\u4E86\uFF01\u8239\u8FD0\u516C\u53F8\u5408\u540C\uFF08\u9A6C\u58EB\u57FA\u3001MSC\u3001\u8FBE\u98DE\u3001\u957F\u8363\u7B49\uFF09\u663E\u8457\u63D0\u9AD8\u6279\u51C6\u673A\u4F1A\u548C\u6761\u6B3E\u3002\u4F18\u52BF\u5305\u62EC\uFF1A(1) \u66F4\u9AD8\u8D37\u6B3E\u989D\u5EA6\uFF08\u6700\u9AD890% vs \u6807\u51C680%\uFF09\uFF1B(2) \u66F4\u4F18\u5229\u7387\uFF08\u6298\u62630.5-1%\uFF09\uFF1B(3) \u66F4\u5FEB\u6279\u51C6\uFF08\u7D27\u6025\u5408\u540C\u5FEB\u901F\u5185\uFF09\uFF1B(4) \u66F4\u957F\u8FD8\u6B3E\u671F\u9650\uFF08\u6700\u957F84\u4E2A\u6708\uFF09\u3002\u8BF7\u968F\u7533\u8BF7\u4E00\u8D77\u63D0\u4EA4\u5408\u540C\u4E66\u6216\u8BA2\u5355\u3002\u6211\u4EEC\u7406\u89E3\u57FA\u4E8E\u5408\u540C\u7684\u6536\u5165\u5E76\u76F8\u5E94\u8BBE\u8BA1\u878D\u8D44\u3002"
    },
    {
      question: "\u53EF\u4EE5\u4E3A\u5DF4\u751F\u6E2F\u8FD0\u8425\u878D\u8D44\u62D6\u8F66\u5934\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF01\u6211\u4EEC\u4E13\u6CE8\u4E8E\u5DF4\u751F\u6E2F\u96C6\u88C5\u7BB1\u8D27\u8FD0\u878D\u8D44\u3002\u6211\u4EEC\u8D85\u8FC760%\u7684\u62D6\u8F66\u5934\u5BA2\u6237\u5728\u5DF4\u751F\u8C37\u3001\u5DF4\u751F\u6E2F\u3001\u897F\u6E2F\u548C\u5317\u6E2F\u5730\u533A\u8FD0\u8425\u3002\u6211\u4EEC\u7406\u89E3\uFF1A(1) \u5DF4\u751F\u6E2F\u96C6\u88C5\u7BB1\u91CF\u5468\u671F\uFF08\u65FA\u5B6311-2\u6708\uFF0C\u6DE1\u5B63\u96E8\u5B63\uFF09\uFF1B(2) \u8239\u8FD0\u516C\u53F8\u5408\u540C\u8981\u6C42\uFF1B(3) \u6EDE\u7559\u8D39\u548C\u5EF6\u671F\u8D39\u98CE\u9669\uFF1B(4) GPS\u8FFD\u8E2A\u5408\u89C4LPK\uFF08\u5DF4\u751F\u6E2F\u52A1\u5C40\uFF09\u3002\u6211\u4EEC\u7684\u7075\u6D3B\u4ED8\u6B3E\u8BA1\u5212\u4E0E\u5DF4\u751F\u6E2F\u5B63\u8282\u6027\u9700\u6C42\u5BF9\u9F50\uFF0C\u5E2E\u52A9\u60A8\u5728\u6DE1\u5B63\u7BA1\u7406\u73B0\u91D1\u6D41\u3002"
    },
    {
      question: "\u63A5\u53D7\u54EA\u4E9B\u62D6\u8F66\u5934\u54C1\u724C\uFF1F",
      answer: "\u6211\u4EEC\u63A5\u53D7\u6240\u6709\u4E3B\u8981\u54C1\u724C\uFF1A\u6B27\u6D32\u8F66\uFF08\u65AF\u582A\u5C3C\u4E9A\u3001\u6C83\u5C14\u6C83\u3001\u5954\u9A70\u3001MAN\u3001DAF\u3001Iveco\uFF09\uFF0C\u65E5\u672C\u8F66\uFF08\u65E5\u91CE\u3001UD Trucks\u3001\u4E94\u5341\u94C3\uFF09\uFF0C\u4E2D\u56FD\u8F66\uFF08\u798F\u7530\u3001\u9655\u6C7D\u3001\u4E2D\u56FD\u91CD\u6C7D\uFF09\u3002\u6B27\u6D32\u54C1\u724C\u901A\u5E38\u83B7\u5F97\u66F4\u597D\u7684\u878D\u8D44\u6761\u6B3E\uFF0C\u56E0\u4E3A\u8F6C\u552E\u4EF7\u503C\u66F4\u9AD8\u3002\u4E2D\u56FD\u54C1\u724C\u53EF\u80FD\u9700\u898115-20%\u9996\u4ED8\u3002\u65B0\u65E7\u8F66\u8F86\u90FD\u63A5\u53D7\u3002\u6211\u4EEC\u6839\u636E\u8F66\u51B5\u3001\u91CC\u7A0B\u3001\u7EF4\u4FEE\u8BB0\u5F55\u548C\u5E02\u573A\u4EF7\u503C\u8BC4\u4F30\u3002"
    },
    {
      question: "\u6279\u51C6\u9700\u8981\u591A\u957F\u65F6\u95F4\uFF1F",
      answer: "\u6807\u51C6\u6279\u51C6\uFF1A\u5B8C\u6574\u7533\u8BF7\u5F53\u5929\u5185\uFF086-8\u5C0F\u65F6\u5185\uFF09\u3002\u7D27\u6025\u6279\u51C6\uFF1A\u6709\u5373\u65F6\u5408\u540C\u622A\u6B62\u671F\u6216\u6807\u4E66\u673A\u4F1A\u7684\u8D27\u8FD0\u5546\u5FEB\u901F\u5185\u3002\u6211\u4EEC\u4F18\u5148\u8003\u8651\u9700\u8981\u5FEB\u901F\u83B7\u5F97\u8F66\u8F86\u4EE5\u7B7E\u8BA2\u8239\u8FD0\u5408\u540C\u7684\u5DF4\u751F\u6E2F\u8FD0\u8425\u5546\u3002\u65E9\u4E0A\u63D0\u4EA4\u7533\u8BF7\uFF0C\u4E0B\u5348\u83B7\u5F97\u6279\u51C6\uFF0C3-5\u5929\u5185\u53D6\u8F66\u3002\u8FD9\u79CD\u901F\u5EA6\u5BF9\u96C6\u88C5\u7BB1\u8D27\u8FD0\u81F3\u5173\u91CD\u8981\uFF0C\u56E0\u4E3A\u5408\u540C\u7684\u8D62\u5F97\u6216\u5931\u53BB\u53D6\u51B3\u4E8E\u8BBE\u5907\u53EF\u7528\u6027\u3002"
    },
    {
      question: "\u62D6\u8F66\u5934\u878D\u8D44\u9700\u8981\u4EC0\u4E48\u6587\u4EF6\uFF1F",
      answer: "\u4E2A\u4EBA/\u72EC\u8D44\u7ECF\u8425\u8005\uFF1A(1) \u8EAB\u4EFD\u8BC1\u6216\u62A4\u7167\uFF1B(2) 6\u4E2A\u6708\u94F6\u884C\u5BF9\u8D26\u5355\uFF1B(3) \u6536\u5165\u8BC1\u660E\uFF08\u5408\u540C\u3001\u884C\u7A0B\u5355\u3001\u94F6\u884C\u5B58\u6B3E\uFF09\u3002\u516C\u53F8\uFF08Sdn Bhd\uFF09\uFF1A(1) SSM\u6CE8\u518C\uFF08\u8868\u683C9/24/49\uFF09\uFF1B(2) \u516C\u53F8\u94F6\u884C\u5BF9\u8D26\u5355\uFF086\u4E2A\u6708\uFF09\uFF1B(3) \u8463\u4E8B\u8EAB\u4EFD\u8BC1\u590D\u5370\u4EF6\uFF1B(4) \u8239\u8FD0\u5408\u540C\uFF08\u5982\u6709\uFF0C\u63D0\u9AD8\u6279\u51C6\u7387\uFF09\u3002\u53EF\u9009\u4F46\u6709\u5E2E\u52A9\uFF1A\u884C\u7A0B\u8BB0\u5F55\u3001GPS\u8FFD\u8E2A\u62A5\u544A\u3001\u73B0\u6709\u8F66\u8F86\u6240\u6709\u6743\u8BC1\u660E\u3001APAD\u8BB8\u53EF\u8BC1\u526F\u672C\u3002\u8D2D\u4E70\u4E8C\u624B\u8F66\u9700\u8981\u5356\u65B9\u7684grant/\u767B\u8BB0\u5361\u3002"
    },
    {
      question: "\u9996\u6B21\u8F66\u4E3B-\u8FD0\u8425\u5546\u53EF\u4EE5\u83B7\u5F97\u878D\u8D44\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF01\u8BB8\u591A\u6210\u529F\u7684\u5DF4\u751F\u6E2F\u8D27\u8FD0\u5546\u90FD\u662F\u4ECE\u53F8\u673A\u5F00\u59CB\uFF0C\u901A\u8FC7\u6211\u4EEC\u7684\u878D\u8D44\u6210\u4E3A\u8F66\u4E3B-\u8FD0\u8425\u5546\u3002\u6211\u4EEC\u8BC4\u4F30\uFF1A(1) \u60A8\u7684\u9A7E\u9A76\u7ECF\u9A8C\uFF08\u6700\u5C113\u5E74\u62D6\u8F66\u5934/\u91CD\u578B\u5361\u8F66\uFF09\uFF1B(2) \u5BA2\u6237\u5408\u540C\u6216\u6F5C\u5728\u5BA2\u6237\uFF1B(3) \u5546\u4E1A\u8BA1\u5212\u548C\u6536\u5165\u9884\u6D4B\uFF1B(4) \u4E2A\u4EBA\u8D22\u52A1\u7A33\u5B9A\u6027\u3002\u9996\u6B21\u8FD0\u8425\u5546\u901A\u5E38\u4ECE1\u53F0\u4E8C\u624B\u62D6\u8F66\u5934\uFF085-10\u5E74\u8F66\u9F84\uFF09\u5F00\u59CB\uFF0C\u6708\u4F9B\u53EF\u63A7\uFF08RM 2,500-4,500\uFF09\u3002\u826F\u597D\u4ED8\u6B3E\u8BB0\u5F5512-18\u4E2A\u6708\u540E\uFF0C\u8F66\u961F\u6269\u5C55\u878D\u8D44\u53D8\u5F97\u66F4\u5BB9\u6613\u3002"
    },
    {
      question: "\u5982\u679C\u6211\u6709\u4E0D\u826F\u4FE1\u7528\u6216CTOS\u8BB0\u5F55\u95EE\u9898\u600E\u4E48\u529E\uFF1F",
      answer: "\u6211\u4EEC\u4E13\u95E8\u6279\u51C6\u94F6\u884C\u62D2\u7EDD\u7684\u7533\u8BF7\u3002\u4E0D\u826F\u4FE1\u7528\u6216CTOS/CCRIS\u95EE\u9898\u4E0D\u610F\u5473\u7740\u81EA\u52A8\u62D2\u7EDD\u3002\u6211\u4EEC\u67E5\u770B\uFF1A(1) \u5F53\u524D\u8D22\u52A1\u72B6\u51B5\u548C\u73B0\u91D1\u6D41\uFF1B(2) \u73B0\u6709\u5408\u540C\u6216\u5BA2\u6237\uFF1B(3) \u8F66\u8F86\u4EF7\u503C\u548C\u72B6\u51B5\uFF08\u4F5C\u4E3A\u62B5\u62BC\uFF09\uFF1B(4) \u96C6\u88C5\u7BB1\u8D27\u8FD0\u4E1A\u52A1\u8BB0\u5F55\u3002\u8BB8\u591A\u6210\u529F\u5BA2\u6237\u4E4B\u524D\u90FD\u6709\u4FE1\u7528\u95EE\u9898\u3002\u62D6\u8F66\u5934\u7684\u4EF7\u503C\u4FDD\u8BC1\u4E86\u8D37\u6B3E\uFF0C\u964D\u4F4E\u4E86\u98CE\u9669\u3002\u4E25\u91CD\u4FE1\u7528\u95EE\u9898\u53EF\u80FD\u9700\u8981\u66F4\u9AD8\u9996\u4ED8\uFF0815-20%\uFF09\uFF0C\u4F46\u6279\u51C6\u662F\u53EF\u80FD\u7684\u3002"
    },
    {
      question: "\u53EF\u4EE5\u518D\u878D\u8D44\u73B0\u6709\u62D6\u8F66\u5934\u8D37\u6B3E\u5417\uFF1F",
      answer: "\u5F53\u7136\u53EF\u4EE5\uFF01\u5982\u679C\u60A8\u5728\u5176\u4ED6\u5730\u65B9\u652F\u4ED8\u9AD8\u5229\u606F\uFF0810%\u4EE5\u4E0A\uFF09\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4E70\u65AD\u60A8\u7684\u73B0\u6709\u8D37\u6B3E\u5E76\u63D0\u4F9B\u66F4\u597D\u7684\u6761\u6B3E\u3002\u518D\u878D\u8D44\u4F18\u52BF\uFF1A(1) \u66F4\u4F4E\u5229\u7387\uFF08\u6BCF\u5E74\u8282\u77012-4%\uFF09\uFF1B(2) \u66F4\u957F\u8FD8\u6B3E\u671F\u9650\u4EE5\u964D\u4F4E\u6708\u8D1F\u62C5\uFF1B(3) \u8F66\u8F86\u4EF7\u503C\u589E\u52A0\u7684\u73B0\u91D1\u5957\u73B0\u7528\u4E8E\u8425\u8FD0\u8D44\u91D1\uFF1B(4) \u5C06\u591A\u7B14\u8F66\u8F86\u8D37\u6B3E\u5408\u5E76\u4E3A\u4E00\u7B14\u4ED8\u6B3E\u3002\u8BB8\u591A\u5BA2\u6237\u5728\u4E1A\u52A1\u589E\u957F\u3001\u83B7\u5F97\u66F4\u597D\u5229\u7387\u8D44\u683C\u540E\u768412-18\u4E2A\u6708\u518D\u878D\u8D44\u3002\u6211\u4EEC\u7684\u8D37\u6B3E\u65E0\u63D0\u524D\u8FD8\u6B3E\u7F5A\u6B3E\u3002"
    },
    {
      question: "\u63D0\u524D\u8FD8\u6B3E\u6709\u7F5A\u6B3E\u5417\uFF1F",
      answer: "\u6CA1\u6709\u63D0\u524D\u8FD8\u6B3E\u7F5A\u6B3E\uFF01\u968F\u65F6\u8FD8\u6E05\u8D37\u6B3E\uFF0C\u65E0\u9700\u989D\u5916\u8D39\u7528\u3002\u8BB8\u591A\u8D27\u8FD0\u5546\u5728\u8F66\u961F\u589E\u957F\u5E76\u83B7\u5F97\u66F4\u597D\u5229\u7387\u8D44\u683C\u540E\u768412-24\u4E2A\u6708\u518D\u878D\u8D44\u3002\u60A8\u4E5F\u53EF\u4EE5\u5728\u65FA\u5B63\uFF08\u519C\u5386\u65B0\u5E74\u51B2\u523A\u3001\u5E74\u5E95\uFF09\u989D\u5916\u4ED8\u6B3E\u4EE5\u964D\u4F4E\u5229\u606F\u6210\u672C\u3002\u8FD9\u79CD\u7075\u6D3B\u6027\u5E2E\u52A9\u4ECE\u91CD\u5927\u5408\u540C\u6216\u9879\u76EE\u8D62\u5F97\u4E2D\u7ECF\u5386\u7A81\u7136\u6536\u5165\u589E\u957F\u7684\u8FD0\u8425\u5546\u3002\u4E00\u4E9B\u5BA2\u6237\u572818-24\u4E2A\u6708\u5185\u8FD8\u6E053\u5E74\u8D37\u6B3E\uFF0C\u5E76\u7ACB\u5373\u6269\u5C55\u8F66\u961F\u3002"
    },
    {
      question: "\u4F60\u4EEC\u7684\u5229\u7387\u662F\u591A\u5C11\uFF1F",
      answer: "\u5229\u7387\u8303\u56F4\u4E3A\u6BCF\u5E746.5%\u81F311%\uFF0C\u53D6\u51B3\u4E8E\uFF1A(1) \u4FE1\u7528\u72B6\u51B5\u548C\u8BC4\u5206\uFF08\u66F4\u597D\u7684\u4FE1\u7528=\u66F4\u4F4E\u5229\u7387\uFF09\uFF1B(2) \u9996\u4ED8\u91D1\u989D\uFF08\u66F4\u9AD8\u9996\u4ED8=\u66F4\u4F4E\u5229\u7387\uFF09\uFF1B(3) \u8D37\u6B3E\u671F\u9650\u957F\u5EA6\uFF08\u66F4\u77ED\u671F\u9650=\u66F4\u4F4E\u5229\u7387\uFF09\uFF1B(4) \u8F66\u8F86\u5E74\u9F84\u548C\u54C1\u724C\uFF08\u66F4\u65B0\u7684\u6B27\u6D32\u8F66=\u66F4\u4F4E\u5229\u7387\uFF09\uFF1B(5) \u73B0\u6709\u5408\u540C\uFF08\u8239\u8FD0\u5408\u540C\u83B7\u5F970.5-1%\u6298\u6263\uFF09\u3002\u4E0E\u94F6\u884C\uFF088-13%\uFF09\u548C\u7ECF\u9500\u5546\u878D\u8D44\uFF089-15%\uFF09\u76F8\u6BD4\uFF0C\u6211\u4EEC\u7684\u5229\u7387\u5177\u6709\u7ADE\u4E89\u529B\u3002\u8F66\u961F\u878D\u8D44\u989D\u5916\u83B7\u5F970.5-1.5%\u6298\u6263\u3002\u8054\u7CFB\u6211\u4EEC\u6839\u636E\u60A8\u7684\u60C5\u51B5\u83B7\u5F97\u4E2A\u6027\u5316\u62A5\u4EF7\u3002"
    },
    {
      question: "\u53EF\u4EE5\u5728\u5305\u88F9\u4E2D\u5305\u542B\u62D6\u8F66\u878D\u8D44\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF01\u6211\u4EEC\u63D0\u4F9B\u62D6\u8F66\u5934+\u62D6\u8F66\u7EC4\u5408\u878D\u8D44\u5305\u88F9\u3002\u9009\u9879\u5305\u62EC\uFF1A(1) \u62D6\u8F66\u5934+ 20\u5C3A/40\u5C3A\u96C6\u88C5\u7BB1\u5E95\u76D8\uFF1B(2) \u62D6\u8F66\u5934+\u5E73\u677F\u62D6\u8F66\uFF1B(3) \u62D6\u8F66\u5934+\u4F4E\u5E73\u677F\u62D6\u8F66\uFF1B(4) \u5305\u62ECGPS\u8FFD\u8E2A\u7CFB\u7EDF\u7684\u5B8C\u6574\u4EA4\u94A5\u5319\u5305\u88F9\u3002\u5305\u88F9\u4EA4\u6613\u901A\u5E38\u83B7\u5F97\u66F4\u597D\u7684\u5229\u7387\uFF080.5%\u6298\u6263\uFF09\u548C\u4E24\u4E2A\u5355\u4F4D\u7684\u5355\u4E00\u4ED8\u6B3E\u3002\u975E\u5E38\u9002\u5408\u9700\u8981\u5B8C\u6574\u8BBE\u7F6E\u7684\u65B0\u8FD0\u8425\u5546\u3002\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4E3A\u6BCF\u53F0\u62D6\u8F66\u5934\u878D\u8D44\u591A\u4E2A\u62D6\u8F66\uFF082-3\u4E2A\u5355\u4F4D\uFF09\uFF0C\u9002\u5408\u9700\u8981\u5907\u7528\u5E95\u76D8\u7684\u8FD0\u8425\u5546\u3002"
    },
    {
      question: "\u9700\u8981GPS\u8FFD\u8E2A\u7CFB\u7EDF\u5417\uFF1F",
      answer: "\u5EFA\u8BAE\u4F46\u4E0D\u5F3A\u5236GPS\u8FFD\u8E2A\u3002\u4F46\u662F\uFF0C\u5B89\u88C5GPS\u63D0\u4F9B\u4F18\u52BF\uFF1A(1) \u66F4\u4F18\u5229\u7387\uFF08\u6298\u62630.3-0.5%\uFF09\uFF1B(2) \u5DF4\u751F\u6E2FLPK/APAD\u5408\u89C4\u6240\u9700\uFF1B(3) \u4E3B\u8981\u8239\u8FD0\u516C\u53F8\uFF08\u9A6C\u58EB\u57FA\u3001MSC\uFF09\u8981\u6C42\uFF1B(4) \u63D0\u9AD8\u8F66\u961F\u6548\u7387\u548C\u8282\u6CB9\uFF1B(5) \u964D\u4F4E\u4FDD\u9669\u8D39\u3002\u6211\u4EEC\u53EF\u4EE5\u5728\u878D\u8D44\u5305\u88F9\u4E2D\u5305\u542BGPS\u7CFB\u7EDF\u6210\u672C\u3002\u6D41\u884C\u7CFB\u7EDF\uFF1AGPS Fleet\u3001KATSANA\u3001MYEZTRACKER\u30027.5\u5428\u53CA\u4EE5\u4E0A\u5728\u5DF4\u751F\u6E2F\u8FD0\u8425\u7684\u62D6\u8F66\u5934\uFF0C\u6CD5\u5F8B\u8981\u6C42GPS\u7528\u4E8EAPAD\u8BB8\u53EF\u8BC1\u3002"
    },
    {
      question: "\u96E8\u5B63\u6216\u6DE1\u5B63\u671F\u95F4\u4F1A\u600E\u6837\uFF1F"
    },
    {
      question: "\u5916\u56FD\u4EBA\u53EF\u4EE5\u7533\u8BF7\u62D6\u8F66\u5934\u878D\u8D44\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF0C\u6301\u6709\u6709\u6548\u5DE5\u4F5C\u8BB8\u53EF\u548C\u9A6C\u6765\u897F\u4E9A\u516C\u53F8\u6CE8\u518C\u7684\u5916\u56FD\u4EBA\u53EF\u4EE5\u7533\u8BF7\u3002\u8981\u6C42\uFF1A(1) \u6709\u6548\u62A4\u7167\u548C\u5DE5\u4F5C\u8BB8\u53EF/MM2H\u7B7E\u8BC1\uFF1B(2) \u9A6C\u6765\u897F\u4E9A\u4F01\u4E1A\u6CE8\u518C\uFF08Sdn Bhd\u6216Enterprise\u7684SSM\uFF09\uFF1B(3) \u672C\u5730\u62C5\u4FDD\u4EBA\uFF08\u9A6C\u6765\u897F\u4E9A\u516C\u6C11\u6216PR\uFF09\uFF1B(4) 6\u4E2A\u6708\u9A6C\u6765\u897F\u4E9A\u94F6\u884C\u5BF9\u8D26\u5355\uFF1B(5) \u66F4\u9AD8\u9996\u4ED8\uFF0815-20% vs \u516C\u6C1110%\uFF09\u3002\u5916\u56FD\u4EBA\u6279\u51C6\u7387\uFF1A80-85%\uFF08vs \u516C\u6C11Industry-Leading\uFF09\u3002\u8BB8\u591A\u7269\u6D41/\u8D27\u8FD0\u5916\u56FD\u6295\u8D44\u8005\u5DF2\u6210\u529F\u901A\u8FC7\u6211\u4EEC\u878D\u8D44\u8F66\u961F\u3002"
    },
    {
      question: "\u4F60\u4EEC\u670D\u52A1\u9A6C\u6765\u897F\u4E9A\u54EA\u4E9B\u5730\u533A\uFF1F",
      answer: "\u6211\u4EEC\u670D\u52A1\u6240\u6709\u9A6C\u6765\u897F\u4E9A\u5DDE\uFF0C\u91CD\u70B9\u5173\u6CE8\u4E3B\u8981\u7269\u6D41\u67A2\u7EBD\uFF1A(1) \u96EA\u5170\u83AA\u548C\u5409\u9686\u5761\uFF1A\u5DF4\u751F\u6E2F\u3001\u897F\u6E2F\u3001\u5317\u6E2F\u3001\u5DF4\u751F\u3001\u838E\u4E9A\u5357\u3001\u516B\u6253\u7075\u518D\u4E5F\uFF1B(2) \u67D4\u4F5B\uFF1A\u5DF4\u897F\u53E4\u5F53\u6E2F\u3001\u4E39\u7ED2\u67CF\u52D2\u5DF4\u65AF\u6E2F\u3001\u65B0\u5C71\uFF08\u65B0\u52A0\u5761\u8DE8\u5883\uFF09\uFF1B(3) \u69DF\u57CE\uFF1A\u69DF\u57CE\u6E2F\u3001\u5317\u6D77\u3001\u5CC7\u516D\u62DC\uFF1B(4) \u5176\u4ED6\u5DDE\uFF1A\u9A6C\u516D\u7532\u3001\u9739\u96F3\u3001\u5F6D\u4EA8\uFF08\u5173\u4E39\u6E2F\uFF09\u3001\u6C99\u5DF4\u3001\u7802\u62C9\u8D8A\u3002\u529E\u516C\u5BA4\u5728\u5DF4\u751F\uFF0C\u4F46\u901A\u8FC7WhatsApp\u548C\u5728\u7EBF\u5904\u7406\u5168\u56FD\u7533\u8BF7\u3002\u8FDC\u7A0B\u5730\u533A\u5904\u7406\u53EF\u7528\u3002\u8D85\u8FC770%\u7684\u62D6\u8F66\u5934\u5BA2\u6237\u4F4D\u4E8E\u5DF4\u751F\u6E2F\u3002"
    },
    {
      question: "\u62D6\u8F66\u5934\u53EF\u4EE5\u501F\u591A\u5C11\uFF1F",
      answer: "\u6700\u4F4E\u8D37\u6B3E\uFF1A\u8F83\u65E7\u4E8C\u624B\u8F66\uFF0810-15\u5E74\uFF09RM 40,000\u3002\u6700\u9AD8\u8D37\u6B3E\uFF1A\u8F66\u961F\u878D\u8D44\u6216\u9AD8\u7EA7\u65B0\u8F66RM 2,500,000\u3002\u5178\u578B\u878D\u8D44\uFF1A\u8F66\u8F86\u4EF7\u503C\u768480-90%\uFF0810-20%\u9996\u4ED8\uFF09\u3002\u65B0\u8F66\uFF1A\u6700\u9AD890%\u878D\u8D44\u3002\u4E8C\u624B\u8F665-10\u5E74\uFF1A\u6700\u9AD885%\u878D\u8D44\u3002\u4E8C\u624B\u8F6610-15\u5E74\uFF1A\u6700\u9AD880%\u878D\u8D44\u3002\u8D37\u6B3E\u91D1\u989D\u8FD8\u53D6\u51B3\u4E8E\u60A8\u7684\u6536\u5165/\u6536\u5165\u548C\u8FD8\u6B3E\u80FD\u529B\u3002\u6708\u4F9B\u4E0D\u5E94\u8D85\u8FC7\u8D27\u8FD0\u6536\u5165\u768440%\u4EE5\u5B9E\u73B0\u53EF\u6301\u7EED\u8FD0\u8425\u3002"
    },
    {
      question: "\u53EF\u4EE5\u4EE5\u65E7\u6362\u65B0\u6211\u7684\u65E7\u62D6\u8F66\u5934\u5417\uFF1F",
      answer: "\u53EF\u4EE5\uFF01\u63D0\u4F9B\u4EE5\u65E7\u6362\u65B0\u548C\u5347\u7EA7\u8BA1\u5212\u3002\u6D41\u7A0B\uFF1A(1) \u8BC4\u4F30\u60A8\u5F53\u524D\u7684\u8F66\uFF1B(2) \u7ED3\u6E05\u5269\u4F59\u8D37\u6B3E\u4F59\u989D\uFF1B(3) \u5C06\u4EE5\u65E7\u6362\u65B0\u4EF7\u503C\u5E94\u7528\u4E8E\u65B0/\u66F4\u65B0\u7684\u8F66\uFF1B(4) \u4E3A\u5DEE\u989D\u878D\u8D44\u3002\u826F\u597D\u53CA\u65F6\u4ED8\u6B3E12-18\u4E2A\u6708\u540E\uFF0C\u60A8\u53EF\u4EE5\u5347\u7EA7\u5230\u66F4\u5927\u3001\u66F4\u65B0\u6216\u66F4\u9AD8\u6548\u7684\u578B\u53F7\u3002\u8BB8\u591A\u5BA2\u6237\u4ECE\u4E8C\u624B\u65E5\u91CE/UD\u8F66\u5F00\u59CB\uFF0C\u968F\u7740\u4E1A\u52A1\u589E\u957F\u5347\u7EA7\u5230\u65AF\u582A\u5C3C\u4E9A/\u6C83\u5C14\u6C83\u3002\u4EE5\u65E7\u6362\u65B0\u5E2E\u52A9\u5728\u6CA1\u6709\u5927\u91CF\u65B0\u8D44\u672C\u6CE8\u5165\u7684\u60C5\u51B5\u4E0B\u6269\u5C55\u8F66\u961F\u3002\u6211\u4EEC\u4E0E\u5DF4\u751F\u6E2F\u5730\u533A\u7684\u4E8C\u624B\u8F66\u7ECF\u9500\u5546\u5408\u4F5C\u3002"
    }
  ];
  const productSchema = generateProductSchema({
    name: "\u62D6\u8F66\u5934\u878D\u8D44\u9A6C\u6765\u897F\u4E9A - \u5DF4\u751F\u6E2F\u4E13\u5BB6",
    description: "\u5FEB\u901F\u62D6\u8F66\u5934\u878D\u8D44\uFF0C\u4E13\u4E3A\u96C6\u88C5\u7BB1\u8D27\u8FD0\u8FD0\u8425\u5546\u8BBE\u8BA1\u3002\u5FEB\u901F\u6279\u51C6\uFF0C90%\u878D\u8D44\uFF0C\u8F66\u961F\u6298\u6263\u3002\u4E13\u95E8\u670D\u52A1\u5DF4\u751F\u6E2F\u96C6\u88C5\u7BB1\u8FD0\u8F93\uFF0C\u7075\u6D3B\u4ED8\u6B3E\u6761\u6B3E\u3002",
    imageUrl: `${SITE_CONFIG.url}/images/prime-mover-financing.jpg`,
    category: "\u91D1\u878D\u670D\u52A1 - \u5546\u7528\u8F66\u8F86\u878D\u8D44",
    offers: {
      price: "40000",
      currency: "MYR",
      availability: "https://schema.org/InStock"
    }
  });
  const faqSchema = generateFAQSchema(faqs);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u5DF4\u751F\u6E2F\u96C6\u88C5\u7BB1\u8D27\u8FD0\u5546\u62D6\u8F66\u5934\u878D\u8D44", "subtitle": "\u5FEB\u901F\u6279\u51C6 | 90%\u878D\u8D44 | \u8F66\u961F\u6298\u6263 | \u5DF4\u751F\u6E2F\u4E13\u5BB6 | 12-84\u4E2A\u6708\u671F\u9650", "ctaText": "WhatsApp\u514D\u8D39\u62A5\u4EF7", "ctaLink": "https://wa.me/60175700889?text=\u4F60\u597D\uFF01\u6211\u60F3\u83B7\u53D6\u62D6\u8F66\u5934\u878D\u8D44\u7684\u62A5\u4EF7\u3002", "ctaSecondaryText": "\u7ACB\u5373\u81F4\u7535: 017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "\u5DF4\u751F\u6E2F\u4E13\u5BB6", "\u670D\u52A14000+\u8D27\u8FD0\u5546", "90%\u878D\u8D44"] })}  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
巴生港蓬勃发展 - 您准备好扩大车队了吗？
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed mb-6">
巴生港2024年达到1464万标准箱，全球排名第10。西港扩建将在2028年前将容量翻倍至2800万标准箱。这为集装箱货运商创造了巨大机会。
</p> <div class="grid md:grid-cols-3 gap-6 text-center"> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="text-4xl font-bold text-primary mb-2">1464万</div> <div class="text-[#4F3E29]">2024年标准箱</div> <div class="text-sm text-green-600 mt-2">+7.1%增长</div> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="text-4xl font-bold text-primary mb-2">2800万</div> <div class="text-[#4F3E29]">2028年目标</div> <div class="text-sm text-green-600 mt-2">容量翻倍</div> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="text-4xl font-bold text-primary mb-2">RM 126亿</div> <div class="text-[#4F3E29]">西港投资</div> <div class="text-sm text-green-600 mt-2">长期增长</div> </div> </div> </div> <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810]"> <h3 class="text-2xl font-bold text-primary mb-4">对货运商的意义：</h3> <ul class="space-y-3 text-[#4F3E29]"> <li class="flex items-start space-x-3"> <span class="text-green-500 text-xl mt-1">✓</span> <span><strong>集装箱量翻倍 = 货运需求翻倍</strong> - 更多合同，更多收入机会</span> </li> <li class="flex items-start space-x-3"> <span class="text-green-500 text-xl mt-1">✓</span> <span><strong>船运公司寻找可靠的车队运营商</strong> - 马士基、MSC、达飞扩大运营</span> </li> <li class="flex items-start space-x-3"> <span class="text-green-500 text-xl mt-1">✓</span> <span><strong>早期车队扩展确保长期合同</strong> - 现在领先竞争对手</span> </li> <li class="flex items-start space-x-3"> <span class="text-green-500 text-xl mt-1">✓</span> <span><strong>非高峰奖励：每次双程多赚RM15</strong> - 夜间运营的政府补贴</span> </li> <li class="flex items-start space-x-3"> <span class="text-green-500 text-xl mt-1">✓</span> <span><strong>柴油补贴SKDS 2.0：每升省RM1.20</strong> - 降低运营成本提高盈利能力</span> </li> </ul> <div class="mt-6 p-4 bg-primary/10 border-l-4 border-primary"> <p class="text-sm text-gray-800"> <strong>行业洞察：</strong>巴生港扩建为货运商创造了黄金窗口期（2025-2028）扩大车队并确保船运合同。今天融资意味着为明天翻倍的容量做好准备。不要等到竞争加剧。
</p> </div> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="max-w-4xl mx-auto text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
集装箱货运商面临独特的融资挑战
</h2> <p class="text-xl text-[#4F3E29] leading-relaxed">
您有船运合同在手，但银行要求30%首付。设备经销商收取12-15%利息。您的竞争对手因为有5-10台车而赢得MSC和马士基合同，而您只有1-2台。这听起来熟悉吗？
</p> </div> <div class="grid md:grid-cols-3 gap-8 mb-12"> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="text-red-600 font-bold text-lg mb-3">常见问题</div> <ul class="space-y-2 text-[#4F3E29]"> <li class="flex items-start space-x-2"> <span class="text-red-500 mt-1">✗</span> <span>银行要求25-30%首付，耗尽营运资金</span> </li> <li class="flex items-start space-x-2"> <span class="text-red-500 mt-1">✗</span> <span>银行审批慢（2-4周）导致错过合同截止期</span> </li> <li class="flex items-start space-x-2"> <span class="text-red-500 mt-1">✗</span> <span>雨季/淡季（11-2月低潮）现金流紧张</span> </li> <li class="flex items-start space-x-2"> <span class="text-red-500 mt-1">✗</span> <span>无法扩展车队以满足船运公司最低要求</span> </li> <li class="flex items-start space-x-2"> <span class="text-red-500 mt-1">✗</span> <span>高柴油成本（RM3.35/升）和滞留费吞噬利润</span> </li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="text-green-600 font-bold text-lg mb-3">我们的解决方案</div> <ul class="space-y-2 text-[#4F3E29]"> <li class="flex items-start space-x-2"> <span class="text-green-500 mt-1">✓</span> <span>仅需10%首付（vs 银行25-30%）。保留现金用于柴油和运营</span> </li> <li class="flex items-start space-x-2"> <span class="text-green-500 mt-1">✓</span> <span>紧急合同快速批准。标准申请当天批准</span> </li> <li class="flex items-start space-x-2"> <span class="text-green-500 mt-1">✓</span> </li> <li class="flex items-start space-x-2"> <span class="text-green-500 mt-1">✓</span> <span>车队融资批量折扣（2台以上利率低0.5-1.5%）</span> </li> <li class="flex items-start space-x-2"> <span class="text-green-500 mt-1">✓</span> <span>SKDS 2.0柴油补贴指导和GPS合规支持</span> </li> </ul> </div> <div class="bg-white border-4 border-[#D4A574] p-6 rounded-lg shadow-[4px_4px_0_#2D1810]"> <div class="font-bold text-lg mb-3 text-yellow-600">真实成功案例</div> <div class="text-sm leading-relaxed text-gray-800"> <p class="mb-3"><strong class="text-primary">来自巴生的李先生</strong>需要3台斯堪尼亚拖车头（每台RM 45万）用于MSC五年合同。</p> <p class="mb-3"><strong class="text-red-600">银行拒绝。</strong>我们在快速内批准了RM 120万车队融资，仅需RM 13.5万首付（10%）。</p> <p class="font-semibold text-green-700">结果：确保了MSC合同，3台车每月赚RM 12万，2年内扩展到8台车。年收入现在RM 180万。</p> </div> </div> </div> <!-- ROI Calculator Section --> <div class="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-[6px_6px_0_#2D1810]"> <h3 class="text-2xl font-bold text-primary mb-4 text-center">计算您的拖车头投资回报</h3> <div class="grid md:grid-cols-2 gap-6 text-sm"> <div> <h4 class="font-bold text-gray-800 mb-2">投资示例（1台车）：</h4> <ul class="space-y-1 text-[#4F3E29]"> <li>• 二手斯堪尼亚6x4（8年车龄）：RM 180,000</li> <li>• 首付（10%）：RM 18,000</li> <li>• 月供（48个月）：RM 4,200</li> <li>• 总利息成本：RM 19,600</li> </ul> </div> <div> <h4 class="font-bold text-gray-800 mb-2">收入潜力（巴生港）：</h4> <ul class="space-y-1 text-[#4F3E29]"> <li>• 每趟费率：RM 180-280（40尺柜）</li> <li>• 每日趟数：2趟（港口-吉隆坡往返）</li> <li>• 月收入（25天）：RM 9,000-14,000</li> <li>• <strong class="text-green-600">回本期：2-3个月</strong></li> </ul> </div> </div> <div class="mt-4 p-4 bg-green-50 border-l-4 border-green-500"> <p class="text-sm text-gray-800"> <strong>关键洞察：</strong>平均每趟RM 200 x 每天2趟 x 25个工作日 = 月收入RM 10,000。扣除RM 4,200贷款、RM 2,500柴油（SKDS补贴）、RM 800维修、RM 1,000司机/费用 = 每台车每月利润RM 1,500。3台车 = RM 4,500/月 = 年利润RM 54,000。
</p> </div> </div> <!-- Trust Building Chinese Cultural Element --> <div class="max-w-3xl mx-auto mt-12 text-center p-6 bg-white rounded-lg shadow-[4px_4px_0_#2D1810]"> <h3 class="text-2xl font-bold text-primary mb-4">40年信誉，服务华人货运社区</h3> <p class="text-[#4F3E29] leading-relaxed mb-4">
我们深刻理解华人货运商的需求和挑战。从家族生意传承到车队扩展，从应对季节性波动到把握船运公司合同机会。我们不仅是金融公司，更是您生意成长路上的可靠伙伴和朋友。
</p> <p class="text-primary font-semibold text-lg">
超过70%的客户来自巴生港华人社区推荐 - 这是最好的信任证明（口碑相传）
</p> <p class="text-[#4F3E29] text-sm mt-2">
我们讲华语、理解关系、重视信誉。像家人一样对待每一位客户。
</p> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
为什么巴生港货运商选择Ing Heng Credit
</h2> <p class="text-xl text-[#4F3E29]">
我们理解集装箱货运，专门为巴生港运营商设计融资
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="max-w-3xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">计算您的月供</h2> <p class="text-[#4F3E29]">根据车价和贷款期限估算拖车头融资月供</p> </div> ${renderComponent($$result2, "Calculator", $$Calculator, { "lang": lang, "equipmentType": "\u62D6\u8F66\u5934", "defaultPrice": 18e4 })} </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
5个简单步骤获得您的拖车头
</h2> <p class="text-xl text-[#4F3E29]">
从申请到拉集装箱最快3-5天
</p> </div> <div class="grid md:grid-cols-5 gap-8"> ${steps.map((step) => renderTemplate`${renderComponent($$result2, "StepCard", $$StepCard, { "stepNumber": step.stepNumber, "icon": step.icon, "title": step.title, "description": step.description })}`)} </div> <!-- CTA after steps --> <div class="text-center mt-12"> <a href="https://wa.me/60175700889?text=你好！我想申请拖车头融资。" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg inline-block">
立即开始申请
</a> <p class="text-sm text-[#4F3E29] mt-3">快速内获得批准 | 无义务报价</p> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
我们融资的拖车头类型
</h2> <p class="text-xl text-[#4F3E29]">
从6x2轻型到8x4重载卡车的所有配置
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> ${equipmentTypes.map((equipment) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] transition-shadow"> <h3 class="text-lg font-bold text-primary mb-3">${equipment.name}</h3> <p class="text-[#4F3E29] mb-3">${equipment.description}</p> <div class="text-sm text-[#4F3E29] space-y-1"> <p><strong>应用：</strong> ${equipment.applications}</p> </div> </div>`)} </div> <!-- Accepted Brands --> <div class="text-center"> <h3 class="text-2xl font-bold text-primary mb-6">接受的拖车头品牌</h3> <div class="flex flex-wrap justify-center gap-4"> ${acceptedBrands.map((brand) => renderTemplate`<span class="px-4 py-2 bg-white rounded-full shadow-[2px_2px_0_#2D1810] text-[#4F3E29] font-medium hover:shadow-[4px_4px_0_#2D1810] transition-shadow"> ${brand} </span>`)} </div> <p class="text-[#4F3E29] mt-4">新旧车辆均接受。欧洲、日本和中国品牌都融资。</p> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
船运公司合同融资
</h2> <p class="text-xl text-[#4F3E29]">
有马士基、MSC、达飞合同？获得更好的融资条款
</p> </div> <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"> <div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810]"> <h3 class="text-2xl font-bold text-primary mb-6">巴生港主要船运公司</h3> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">MSC（地中海航运公司）</div> <div class="text-sm text-[#4F3E29]">全球847万标准箱容量。最大船队。2001年起在马来西亚。</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">马士基 Maersk</div> <div class="text-sm text-[#4F3E29]">1974年起在马来西亚。在吉隆坡、槟城、巴生港、丹绒柏勒巴斯设有办事处。</div> </div> </li> <li class="flex items-start space-x-3"> <svg class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-semibold text-gray-900">达飞轮船 CMA CGM</div> <div class="text-sm text-[#4F3E29]">在马来西亚有5个办事处。在巴生港和柔佛拥有集装箱堆场。</div> </div> </li> </ul> </div> <div class="bg-white border-4 border-[#D4A574] p-8 rounded-lg shadow-[6px_6px_0_#2D1810]"> <h3 class="text-2xl font-bold mb-6 text-yellow-600">基于合同融资的优势</h3> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <span class="text-xl mt-0.5 text-yellow-500">✓</span> <div> <div class="font-semibold text-gray-800">更高贷款金额</div> <div class="text-sm text-gray-800">高达90%融资 vs 标准80%（首付更少）</div> </div> </li> <li class="flex items-start space-x-3"> <span class="text-xl mt-0.5 text-yellow-500">✓</span> <div> <div class="font-semibold text-gray-800">更优利率</div> <div class="text-sm text-gray-800">已验证船运合同折扣0.5-1%</div> </div> </li> <li class="flex items-start space-x-3"> <span class="text-xl mt-0.5 text-yellow-500">✓</span> <div> <div class="font-semibold text-gray-800">更快批准</div> <div class="text-sm text-gray-800">紧急合同截止期快速批准</div> </div> </li> <li class="flex items-start space-x-3"> <span class="text-xl mt-0.5 text-yellow-500">✓</span> <div> <div class="font-semibold text-gray-800">灵活条款</div> <div class="text-sm text-gray-800">还款期限与合同期限对齐（最长84个月）</div> </div> </li> </ul> </div> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
巴生港货运商的成功故事
</h2> <p class="text-xl text-[#4F3E29]">
通过我们的融资扩大车队的真实集装箱运营商
</p> </div> <div class="grid md:grid-cols-3 gap-6"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { "name": testimonial.name, "company": testimonial.company, "location": testimonial.location, "testimonial": testimonial.testimonial, "rating": testimonial.rating })}`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
拖车头融资常见问题
</h2> <p class="text-xl text-[#4F3E29]">
巴生港货运商需要了解的关于融资拖车头的一切
</p> </div> <div class="max-w-4xl mx-auto space-y-4"> ${faqs.map((faq) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer })}`)} </div> </div> </section>  ${renderComponent($$result2, "RelatedEquipment", $$RelatedEquipment, { "lang": lang, "currentEquipment": "primeMover" })}  <section class="section bg-[#8B6F47] text-white"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
准备好扩大车队并发展货运生意了吗？
</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">
巴生港2028年前容量翻倍。现在是为大规模增长准备车队的时候。今天申请，快速内批准。加入4000+选择Ing Heng Credit的货运商。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"> <a href="https://wa.me/60175700889?text=你好！我想申请拖车头融资。" target="_blank" rel="noopener noreferrer" class="btn btn-accent text-lg px-8 py-4">
立即WhatsApp申请
</a> <a href="tel:+60175700889" class="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
致电: 017-570 0889
</a> </div> <div class="flex flex-wrap justify-center gap-6 text-sm"> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>无义务报价</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>快速批准</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>40年经验 | 巴生港专家</span> </div> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <h2 class="text-3xl font-bold text-primary mb-4">
或填写我们的在线申请表格
</h2> <p class="text-[#4F3E29]">
我们将在营业时间内快速内与您联系（周一至周五9AM-5PM，周六9AM-1PM）
</p> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(productSchema)), unescapeHTML(encodeJSONLD(faqSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/prime-mover.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/prime-mover.astro";
const $$url = "/zh/equipment/prime-mover";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PrimeMover,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
