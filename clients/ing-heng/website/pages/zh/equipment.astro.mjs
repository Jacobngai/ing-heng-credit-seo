/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { $ as $$BaseLayout, e as encodeJSONLD } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Hero } from '../../chunks/Hero_Byd6UBmX.mjs';
import { $ as $$BenefitCard } from '../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$StepCard } from '../../chunks/StepCard_CWNcWtHa.mjs';
import { $ as $$ProductCard } from '../../chunks/ProductCard_J8Pa6XB0.mjs';
import { $ as $$FAQItem } from '../../chunks/FAQItem_CTpbqvJe.mjs';
import { $ as $$Calculator } from '../../chunks/Calculator_BS1M0nbC.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_C7ZIfdIQ.mjs';
import { S as SITE_CONFIG } from '../../chunks/Footer_BoPJ3uP5.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u878D\u8D44 | \u6316\u6398\u673A\u3001\u5361\u8F66\u3001\u53C9\u8F66\u3001\u8D77\u91CD\u673A\u8D37\u6B3E";
  const pageDescription = "\u878D\u8D44\u4EFB\u4F55\u5EFA\u7B51\u3001\u7269\u6D41\u6216\u5DE5\u4E1A\u8BBE\u5907\u3002\u5FEB\u901F\u5FEB\u901F\u6279\u51C6\uFF0CIndustry-Leading\u6279\u51C6\u7387\uFF0C\u7075\u6D3B\u8FD8\u6B3E\u3002\u6316\u6398\u673A\u3001\u5361\u8F66\u3001\u53C9\u8F66\u3001\u8D77\u91CD\u673A\u7B49\u8BBE\u5907\u8D37\u6B3E\u3002";
  const keywords = ["\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u878D\u8D44", "\u91CD\u578B\u8BBE\u5907\u8D37\u6B3E", "\u5EFA\u7B51\u8BBE\u5907\u8D37\u6B3E", "\u673A\u68B0\u878D\u8D44", "\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u79DF\u8D41"];
  const breadcrumbs = [
    { label: "\u9996\u9875", url: "/zh" },
    { label: "\u8BBE\u5907\u878D\u8D44", url: "/zh/equipment" }
  ];
  const equipmentCategories = [
    {
      name: "\u5EFA\u7B51\u8BBE\u5907",
      description: "\u571F\u65B9\u3001\u6316\u6398\u548C\u5EFA\u7B51\u5DE5\u7A0B\u7684\u91CD\u578B\u673A\u68B0",
      icon: "construction",
      items: ["\u6316\u6398\u673A", "\u63A8\u571F\u673A", "\u8D77\u91CD\u673A", "\u88C5\u8F7D\u673A", "\u6DF7\u51DD\u571F\u6405\u62CC\u673A"],
      link: "#construction-equipment"
    },
    {
      name: "\u7269\u6D41\u8FD0\u8F93\u8BBE\u5907",
      description: "\u8D27\u8FD0\u3001\u7269\u6D41\u548C\u914D\u9001\u4E1A\u52A1\u7684\u5546\u7528\u8F66\u8F86",
      icon: "truck",
      items: ["\u5546\u7528\u5361\u8F66", "\u7275\u5F15\u8F66", "\u51B7\u85CF\u8F66", "\u53A2\u5F0F\u8D27\u8F66", "\u6CB9\u7F50\u8F66"],
      link: "#logistics-equipment"
    },
    {
      name: "\u5DE5\u4E1A\u4ED3\u50A8\u8BBE\u5907",
      description: "\u5DE5\u5382\u7269\u6599\u642C\u8FD0\u548C\u5236\u9020\u8BBE\u5907",
      icon: "warehouse",
      items: ["\u53C9\u8F66", "\u6570\u63A7\u673A\u5E8A", "\u6258\u76D8\u8F66", "\u8F93\u9001\u7CFB\u7EDF", "\u5DE5\u4E1A\u5DE5\u5177"],
      link: "#industrial-equipment"
    }
  ];
  const featuredEquipment = [
    {
      name: "\u6316\u6398\u673A",
      description: "\u5C0F\u578B\u5230\u5927\u578B\u6316\u6398\u673A\uFF081-30\u5428\uFF09\uFF0C\u9002\u7528\u4E8E\u5EFA\u7B51\u3001\u571F\u65B9\u548C\u62C6\u9664\u5DE5\u7A0B\u3002\u63A5\u53D7\u4E8C\u624B\u578B\u53F7\u3002",
      image: "/images/equipment/excavator.jpg",
      link: "/zh/equipment/excavator",
      badge: "\u4E8C\u624B\u8BBE\u5907"
    },
    {
      name: "\u5546\u7528\u5361\u8F66",
      description: "\u8F7B\u578B\u5230\u91CD\u578B\u5361\u8F66\uFF081-40\u5428\uFF09\uFF0C\u7528\u4E8E\u7269\u6D41\u3001\u914D\u9001\u548C\u8D27\u8FD0\u4E1A\u52A1\u3002\u9002\u5408\u521D\u521B\u4F01\u4E1A\u3002",
      image: "/images/equipment/lorry.jpg",
      link: "/zh/equipment/lorry",
      badge: "\u521D\u521B\u53CB\u597D"
    },
    {
      name: "\u53C9\u8F66",
      description: "\u7535\u52A8\u548C\u67F4\u6CB9\u53C9\u8F66\uFF081-10\u5428\uFF09\uFF0C\u7528\u4E8E\u4ED3\u5E93\u3001\u5DE5\u5382\u548C\u7269\u6D41\u64CD\u4F5C\u3002",
      image: "/images/equipment/forklift.jpg",
      link: "/zh/equipment/forklift"
    },
    {
      name: "\u79FB\u52A8\u5F0F\u8D77\u91CD\u673A",
      description: "\u6DB2\u538B\u8D77\u91CD\u673A\uFF085-100\u5428\uFF09\uFF0C\u7528\u4E8E\u5EFA\u7B51\u3001\u57FA\u7840\u8BBE\u65BD\u548C\u91CD\u578B\u8D77\u540A\u5DE5\u7A0B\u3002",
      image: "/images/equipment/crane.jpg",
      link: "/zh/equipment/crane"
    },
    {
      name: "\u7275\u5F15\u8F66",
      description: "\u62D6\u8F66\u7275\u5F15\u8F66\uFF0C\u7528\u4E8E\u62D6\u8F66\u8FD0\u8F93\u3001\u96C6\u88C5\u7BB1\u8FD0\u8F93\u548C\u957F\u9014\u8D27\u8FD0\u3002\u6B27\u6D32\u54C1\u8D28\u3002",
      image: "/images/equipment/prime-mover.jpg",
      link: "/zh/equipment/prime-mover"
    },
    {
      name: "\u63A8\u571F\u673A",
      description: "\u5C65\u5E26\u5F0F\u63A8\u571F\u673A\uFF0C\u7528\u4E8E\u6E05\u5730\u3001\u5E73\u6574\u548C\u91CD\u578B\u571F\u65B9\u4F5C\u4E1A\u3002",
      image: "/images/equipment/bulldozer.jpg",
      link: "/zh/equipment/bulldozer"
    },
    {
      name: "\u51B7\u85CF\u8F66",
      description: "\u51B7\u94FE\u7269\u6D41\u51B7\u85CF\u8F66\uFF0C\u7528\u4E8E\u98DF\u54C1\u914D\u9001\u548C\u6E29\u63A7\u8FD0\u8F93\u3002",
      image: "/images/equipment/reefer-truck.jpg",
      link: "/zh/equipment/refrigerated-truck"
    },
    {
      name: "\u6570\u63A7\u673A\u5E8A",
      description: "\u8BA1\u7B97\u673A\u63A7\u5236\u673A\u5E8A\uFF0C\u7528\u4E8E\u7CBE\u5BC6\u5236\u9020\u3001\u94E3\u524A\u548C\u5DE5\u4E1A\u751F\u4EA7\u3002",
      image: "/images/equipment/cnc-machine.jpg",
      link: "/zh/equipment/cnc-machinery"
    },
    // ===== 新增设备来自图片简介 =====
    {
      name: "\u5361\u7279\u5F7C\u52D2966C\u8F6E\u5F0F\u88C5\u8F7D\u673A",
      description: "\u91CD\u578B\u8F6E\u5F0F\u88C5\u8F7D\u673A\uFF0C\u7528\u4E8E\u7269\u6599\u642C\u8FD0\u3001\u91C7\u77F3\u573A\u548C\u5927\u89C4\u6A21\u571F\u65B9\u4F5C\u4E1A\u3002",
      image: "/images/equipment/caterpillar-966c.jpg",
      link: "/zh/equipment/wheel-loader",
      badge: "\u91CD\u578B"
    },
    {
      name: "\u5C0F\u677EPC350\u6316\u6398\u673A",
      description: "35\u5428\u6DB2\u538B\u6316\u6398\u673A\uFF0C\u7528\u4E8E\u91C7\u77F3\u573A\u3001\u91C7\u77FF\u548C\u5927\u578B\u5EFA\u7B51\u9879\u76EE\u3002",
      image: "/images/equipment/komatsu-pc350.jpg",
      link: "/zh/equipment/komatsu-pc350",
      badge: "\u91C7\u77F3\u573A\u89C4\u683C"
    },
    {
      name: "\u65E5\u4EA7\u81EA\u5378\u8F66",
      description: "6\u8F6E\u81EA\u5378\u8F66\uFF0C\u7528\u4E8E\u571F\u65B9\u5DE5\u7A0B\u3001\u6C99\u5B50\u8FD0\u8F93\u548C\u5EFA\u7B51\u6750\u6599\u8FD0\u8F93\u3002",
      image: "/images/equipment/nissan-tipper.jpg",
      link: "/zh/equipment/tipper-truck"
    },
    {
      name: "\u4E09\u83F1FD250\u53C9\u8F66",
      description: "2.5\u5428\u5BB9\u91CF\u53C9\u8F66\uFF0C\u7528\u4E8E\u4ED3\u5E93\u3001\u5DE5\u5382\u548C\u7269\u6D41\u64CD\u4F5C\u3002",
      image: "/images/equipment/mitsubishi-fd250.jpg",
      link: "/zh/equipment/forklift"
    },
    {
      name: "\u51EF\u65AFSuper M\u6316\u6398\u88C5\u8F7D\u673A",
      description: "\u591A\u529F\u80FD\u6316\u6398\u88C5\u8F7D\u673A\uFF0C\u7528\u4E8E\u5EFA\u7B51\u5DE5\u5730\u7684\u6316\u6398\u3001\u88C5\u8F7D\u548C\u7269\u6599\u642C\u8FD0\u30022\u54081\u673A\u5668\u3002",
      image: "/images/equipment/case-backhoe.jpg",
      link: "/zh/equipment/backhoe",
      badge: "2\u54081\u673A\u5668"
    },
    {
      name: "\u6C83\u5C14\u6C83\u7275\u5F15\u8F66\u5934",
      description: "\u91CD\u578B\u7275\u5F15\u8F66\u5934\uFF0C\u7528\u4E8E\u96C6\u88C5\u7BB1\u8FD0\u8F93\u3001\u957F\u9014\u8D27\u8FD0\u548C\u7269\u6D41\u64CD\u4F5C\u3002\u6B27\u6D32\u54C1\u8D28\u3002",
      image: "/images/equipment/volvo-prime-mover.jpg",
      link: "/zh/equipment/prime-mover",
      badge: "\u4F18\u8D28\u54C1\u724C"
    },
    {
      name: "40\u82F1\u5C3A\u96C6\u88C5\u7BB1\u62D6\u8F66",
      description: "\u9AA8\u67B6\u96C6\u88C5\u7BB1\u5E95\u76D8\uFF0C\u7528\u4E8E\u6E2F\u53E3\u5230\u4ED3\u5E93\u7684\u96C6\u88C5\u7BB1\u8FD0\u8F93\u548C\u591A\u5F0F\u8054\u8FD0\u7269\u6D41\u3002",
      image: "/images/equipment/40ft-trailer.jpg",
      link: "/zh/equipment/container-trailer"
    },
    {
      name: "\u96C6\u88C5\u7BB1\u4FA7\u88C5\u8F66",
      description: "\u5177\u6709\u4FA7\u88C5\u529F\u80FD\u7684\u4E13\u7528\u62D6\u8F66\uFF0C\u7528\u4E8E\u9AD8\u6548\u7684\u96C6\u88C5\u7BB1\u5904\u7406\u64CD\u4F5C\u3002",
      image: "/images/equipment/side-loader.jpg",
      link: "/zh/equipment/side-loader"
    },
    {
      name: "\u65E5\u4EA7\u81EA\u88C5\u5378\u8F66",
      description: "\u5361\u8F66\u5B89\u88C5\u5F0F\u8D77\u91CD\u673A\uFF0C\u7528\u4E8E\u88C5\u5378\u8D27\u7269\u3001\u5EFA\u7B51\u6750\u6599\u548C\u673A\u68B0\u8BBE\u5907\u3002",
      image: "/images/equipment/nissan-self-loader.jpg",
      link: "/zh/equipment/self-loader"
    },
    {
      name: "\u82F1\u683C\u7D22\u5170\u538B\u8DEF\u673A",
      description: "\u632F\u52A8\u538B\u8DEF\u673A\uFF0C\u7528\u4E8E\u571F\u58E4\u538B\u5B9E\u3001\u9053\u8DEF\u5EFA\u8BBE\u548C\u6CA5\u9752\u94FA\u88C5\u9879\u76EE\u3002",
      image: "/images/equipment/ingersoll-compactor.jpg",
      link: "/zh/equipment/compactor"
    },
    {
      name: "25\u5428\u9065\u63A7\u6293\u6597",
      description: "\u91CD\u578B\u9065\u63A7\u6293\u6597\uFF0C\u7528\u4E8E\u5E9F\u91D1\u5C5E\u3001\u62C6\u9664\u5E9F\u6599\u548C\u6563\u88C5\u7269\u6599\u5904\u7406\u3002",
      image: "/images/equipment/remote-grab.jpg",
      link: "/zh/equipment/remote-grab"
    },
    {
      name: "\u989A\u5F0F\u7834\u788E\u673A",
      description: "\u77F3\u6599\u7834\u788E\u8BBE\u5907\uFF0C\u7528\u4E8E\u91C7\u77F3\u573A\u64CD\u4F5C\u3001\u9AA8\u6599\u751F\u4EA7\u548C\u91C7\u77FF\u4E1A\u3002",
      image: "/images/equipment/jaw-crusher.jpg",
      link: "/zh/equipment/jaw-crusher"
    },
    {
      name: "\u6CF0\u5D0E\u6570\u63A7\u673A\u5E8A",
      description: "\u7CBE\u5BC6\u6570\u63A7\u8F66\u5E8A\uFF0C\u7528\u4E8E\u91D1\u5C5E\u52A0\u5DE5\u3001\u5236\u9020\u548C\u5DE5\u4E1A\u751F\u4EA7\u64CD\u4F5C\u3002",
      image: "/images/equipment/takisawa-cnc.jpg",
      link: "/zh/equipment/cnc-machinery"
    },
    {
      name: "Pivotal\u7802\u6D46\u6405\u62CC\u673A",
      description: "\u5DE5\u4E1A\u8FDE\u7EED\u7802\u6D46\u6405\u62CC\u673A\uFF0C\u7528\u4E8E\u6DF7\u51DD\u571F\u751F\u4EA7\u3001\u5EFA\u7B51\u548C\u5236\u9020\u3002",
      image: "/images/equipment/sand-mixer.jpg",
      link: "/zh/equipment/sand-mixer"
    },
    {
      name: "\u4E0D\u9508\u94A2\u5316\u5DE5\u50A8\u7F50",
      description: "\u5DE5\u4E1A\u50A8\u7F50\uFF0C\u7528\u4E8E\u5316\u5DE5\u52A0\u5DE5\u3001\u98DF\u54C1\u751F\u4EA7\u548C\u5236\u836F\u884C\u4E1A\u3002",
      image: "/images/equipment/chemical-tank.jpg",
      link: "/zh/equipment/chemical-tank"
    },
    {
      name: "\u4E0D\u9508\u94A2\u98DF\u54C1\u644A\u4F4D",
      description: "\u5546\u4E1A\u7EA7\u79FB\u52A8\u98DF\u54C1\u644A\u4F4D\uFF0C\u7528\u4E8E\u5927\u6392\u6863\u3001\u591C\u5E02\u548C\u9910\u996E\u670D\u52A1\u4E1A\u3002\u9002\u5408\u521D\u521B\u4F01\u4E1A\u3002",
      image: "/images/equipment/food-stall.jpg",
      link: "/zh/equipment/food-stall",
      badge: "\u521D\u521B\u53CB\u597D"
    },
    {
      name: "\u7ED7\u7F1D\u673A",
      description: "\u5DE5\u4E1A\u7ED7\u7F1D\u673A\uFF0C\u7528\u4E8E\u7EBA\u7EC7\u5236\u9020\u3001\u5E8A\u57AB\u751F\u4EA7\u548C\u670D\u88C5\u5382\u3002",
      image: "/images/equipment/quilting-machine.jpg",
      link: "/zh/equipment/quilting-machine"
    },
    {
      name: "Robinson R66\u76F4\u5347\u673A",
      description: "\u8F7B\u578B\u6DA1\u8F6E\u76F4\u5347\u673A\uFF0C\u7528\u4E8E\u7A7A\u4E2D\u4F5C\u4E1A\u3001\u65C5\u6E38\u3001\u533B\u7597\u8FD0\u8F93\u548C\u884C\u653F\u51FA\u884C\u3002",
      image: "/images/equipment/robinson-r66.jpg",
      link: "/zh/equipment/helicopter",
      badge: "\u4E13\u4E1A"
    }
  ];
  const benefits = [
    { icon: "clock", title: "\u5FEB\u901F\u5FEB\u901F\u6279\u51C6", description: "\u7D27\u6025\u8BBE\u5907\u9700\u6C42\u53EF\u5728\u5FEB\u901F\u5185\u83B7\u5F97\u521D\u6B65\u6279\u51C6\u3002" },
    { icon: "percentage", title: "Industry-Leading\u6279\u51C6\u7387", description: "\u884C\u4E1A\u9886\u5148\u7684\u6279\u51C6\u7387\u3002\u6211\u4EEC\u6279\u51C6\u5176\u4ED6\u673A\u6784\u62D2\u7EDD\u7684\u7533\u8BF7\u3002" },
    { icon: "calendar", title: "\u7075\u6D3B12-60\u6708\u671F\u9650", description: "\u9009\u62E9\u7B26\u5408\u60A8\u4E1A\u52A1\u73B0\u91D1\u6D41\u7684\u8FD8\u6B3E\u671F\u9650\u3002" },
    { icon: "shield", title: "\u6240\u6709\u8BBE\u5907\u7C7B\u578B", description: "\u878D\u8D44\u4EFB\u4F55\u8BBE\u5907\uFF0C\u4ECE\u6316\u6398\u673A\u5230\u6570\u63A7\u673A\u5E8A\uFF0C\u65B0\u65E7\u7686\u53EF\u3002" },
    { icon: "users", title: "\u4F4E\u81F310%\u9996\u4ED8", description: "\u6700\u4F4E\u524D\u671F\u6295\u8D44\u3002\u4FDD\u7559\u8425\u8FD0\u8D44\u91D1\u3002" },
    { icon: "lightning", title: "\u8F66\u961F\u878D\u8D44", description: "\u591A\u53F0\u8BBE\u5907\u878D\u8D44\u4EAB\u53D7\u6298\u6263\u5229\u7387\u548C\u7B80\u5316\u6D41\u7A0B\u3002" }
  ];
  const steps = [
    { stepNumber: 1, icon: "contact", title: "\u9009\u62E9\u8BBE\u5907", description: "\u6D4F\u89C8\u6211\u4EEC\u7684\u76EE\u5F55\u6216\u5E26\u4E0A\u60A8\u81EA\u5DF1\u7684\u8BBE\u5907\u4F9B\u5E94\u5546\u3002" },
    { stepNumber: 2, icon: "document", title: "\u63D0\u4EA4\u7533\u8BF7", description: "5\u5206\u949F\u5B8C\u6210\u5728\u7EBF\u8868\u683C\u6216WhatsApp\u7533\u8BF7\u3002" },
    { stepNumber: 3, icon: "check", title: "\u5FEB\u901F\u6279\u51C6", description: "\u5FEB\u901F\u521D\u6B65\u6279\u51C6\uFF0C\u8FC5\u901F\u6700\u7EC8\u786E\u8BA4\u3002" },
    { stepNumber: 4, icon: "truck", title: "\u6536\u5230\u8BBE\u5907", description: "\u8D44\u91D1\u76F4\u63A5\u53D1\u653E\u7ED9\u4F9B\u5E94\u5546\u3002\u7ACB\u5373\u5F00\u59CB\u8FD0\u8425\u3002" }
  ];
  const industries = [
    { name: "\u5EFA\u7B51\u4E0E\u571F\u6728\u5DE5\u7A0B", icon: "building", equipment: "\u6316\u6398\u673A\u3001\u63A8\u571F\u673A\u3001\u8D77\u91CD\u673A\u3001\u6DF7\u51DD\u571F\u6405\u62CC\u673A" },
    { name: "\u7269\u6D41\u4E0E\u8FD0\u8F93", icon: "truck", equipment: "\u5361\u8F66\u3001\u7275\u5F15\u8F66\u3001\u62D6\u8F66\u3001\u914D\u9001\u8F66" },
    { name: "\u5236\u9020\u4E0E\u751F\u4EA7", icon: "factory", equipment: "\u6570\u63A7\u673A\u5E8A\u3001\u5DE5\u4E1A\u5DE5\u5177\u3001\u751F\u4EA7\u7EBF" },
    { name: "\u4ED3\u50A8\u4E0E\u914D\u9001", icon: "warehouse", equipment: "\u53C9\u8F66\u3001\u6258\u76D8\u8F66\u3001\u7269\u6599\u642C\u8FD0\u8BBE\u5907" },
    { name: "\u519C\u4E1A\u4E0E\u79CD\u690D\u56ED", icon: "leaf", equipment: "\u62D6\u62C9\u673A\u3001\u6536\u5272\u673A\u3001\u68D5\u6CB9\u8BBE\u5907" },
    { name: "\u91C7\u77FF\u4E0E\u91C7\u77F3", icon: "mountain", equipment: "\u81EA\u5378\u8F66\u3001\u6316\u6398\u673A\u3001\u7834\u788E\u8BBE\u5907" }
  ];
  const faqs = [
    { question: "\u4F60\u4EEC\u53EF\u4EE5\u878D\u8D44\u54EA\u4E9B\u8BBE\u5907\u7C7B\u578B\uFF1F", answer: "\u6211\u4EEC\u878D\u8D44\u6240\u6709\u7C7B\u578B\u7684\u5546\u7528\u548C\u5DE5\u4E1A\u8BBE\u5907\uFF0C\u5305\u62EC\u5EFA\u7B51\u673A\u68B0\uFF08\u6316\u6398\u673A\u3001\u63A8\u571F\u673A\u3001\u8D77\u91CD\u673A\uFF09\u3001\u7269\u6D41\u8F66\u8F86\uFF08\u5361\u8F66\u3001\u7275\u5F15\u8F66\u3001\u8D27\u8F66\uFF09\u3001\u5DE5\u4E1A\u8BBE\u5907\uFF08\u53C9\u8F66\u3001\u6570\u63A7\u673A\u5E8A\u3001\u5236\u9020\u5DE5\u5177\uFF09\u548C\u4E13\u7528\u8BBE\u5907\u3002\u53EA\u8981\u8BBE\u5907\u80FD\u4E3A\u60A8\u7684\u4E1A\u52A1\u521B\u9020\u6536\u5165\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u878D\u8D44\u3002" },
    { question: "\u6279\u51C6\u9700\u8981\u591A\u957F\u65F6\u95F4\uFF1F", answer: "\u521D\u6B65\u6279\u51C6\uFF1A\u5FEB\u901F\u3002\u6700\u7EC8\u6279\u51C6\uFF1A\u63D0\u4EA4\u5B8C\u6574\u6587\u4EF6\u540E\u8FC5\u901F\u8FDB\u884C\u3002\u7D27\u6025\u60C5\u51B5\u53EF\u52A0\u6025\u5904\u7406\uFF0C\u6EE1\u8DB3\u5173\u952E\u9879\u76EE\u622A\u6B62\u65E5\u671F\u3002" },
    { question: "\u53EF\u4EE5\u878D\u8D44\u4E8C\u624B\u8BBE\u5907\u5417\uFF1F", answer: "\u53EF\u4EE5\uFF01\u6211\u4EEC\u878D\u8D44\u4EFB\u4F55\u4FE1\u8A89\u826F\u597D\u54C1\u724C\u768410\u5E74\u5185\u4E8C\u624B\u8BBE\u5907\u3002\u8BBE\u5907\u5FC5\u987B\u5904\u4E8E\u826F\u597D\u5DE5\u4F5C\u72B6\u6001\u5E76\u901A\u8FC7\u6211\u4EEC\u7684\u68C0\u67E5\u3002\u4E8C\u624B\u8BBE\u5907\u901A\u5E38\u53EF\u83B7\u5F97\u4E0E\u65B0\u8BBE\u5907\u76F8\u540C\u7684\u5229\u7387\u3002" },
    { question: "\u6700\u4F4E\u548C\u6700\u9AD8\u8D37\u6B3E\u91D1\u989D\u662F\u591A\u5C11\uFF1F", answer: "\u6700\u4F4E\uFF1ARM 30,000\u3002\u6700\u9AD8\uFF1ARM 2,000,000\uFF0C\u53D6\u51B3\u4E8E\u8BBE\u5907\u7C7B\u578B\u548C\u60A8\u7684\u8D22\u52A1\u72B6\u51B5\u3002\u6211\u4EEC\u53EF\u4EE5\u878D\u8D44\u8BBE\u5907\u4EF7\u503C\u768490%\uFF0C\u9996\u4ED810%\u3002" },
    { question: "\u53EF\u4EE5\u878D\u8D44\u591A\u53F0\u8BBE\u5907\u5417\uFF1F", answer: "\u53EF\u4EE5\uFF012\u53F0\u4EE5\u4E0A\u8BBE\u5907\u4EAB\u53D7\u8F66\u961F\u878D\u8D44\u6298\u6263\u5229\u7387\u3002\u6279\u91CF\u91C7\u8D2D\u6587\u4EF6\u7B80\u5316\u3002\u9002\u5408\u6269\u5C55\u4E1A\u52A1\u7684\u627F\u5305\u5546\u548C\u7269\u6D41\u516C\u53F8\u3002" },
    { question: "\u5982\u679C\u6211\u6709\u4E0D\u826F\u4FE1\u7528\u6216\u8D37\u6B3E\u8FDD\u7EA6\u600E\u4E48\u529E\uFF1F", answer: "\u6211\u4EEC\u9010\u4E00\u8003\u8651\u6BCF\u4E2A\u7533\u8BF7\u3002\u4E0D\u826F\u4FE1\u7528\u4E0D\u610F\u5473\u7740\u81EA\u52A8\u62D2\u7EDD\u3002\u6211\u4EEC\u5173\u6CE8\u60A8\u5F53\u524D\u7684\u4E1A\u52A1\u8868\u73B0\u3001\u9879\u76EE\u5408\u540C\u548C\u8BBE\u5907\u4EF7\u503C\u3002Industry-Leading\u7684\u6279\u51C6\u7387\u5305\u62EC\u8BB8\u591A\u6709\u4FE1\u7528\u95EE\u9898\u7684\u5BA2\u6237\u3002" },
    { question: "\u53EF\u4EE5\u4EE5\u65E7\u6362\u65B0\u5417\uFF1F", answer: "\u5F53\u7136\u53EF\u4EE5\uFF01\u63D0\u4F9B\u4EE5\u65E7\u6362\u65B0\u548C\u5347\u7EA7\u8BA1\u5212\u3002\u6211\u4EEC\u53EF\u4EE5\u4E3A\u60A8\u73B0\u6709\u8BBE\u5907\u518D\u878D\u8D44\uFF0C\u5E76\u63D0\u4F9B\u989D\u5916\u8D44\u91D1\u8D2D\u4E70\u66F4\u65B0/\u66F4\u5927\u7684\u673A\u5668\u3002\u5305\u542B\u514D\u8D39\u8BBE\u5907\u4F30\u503C\u670D\u52A1\u3002" },
    { question: "\u9700\u8981\u54EA\u4E9B\u6587\u4EF6\uFF1F", answer: "\u4E2A\u4EBA\uFF1A\u8EAB\u4EFD\u8BC1\u30016\u4E2A\u6708\u94F6\u884C\u5BF9\u8D26\u5355\u3001\u6536\u5165\u8BC1\u660E\u3002\u516C\u53F8\uFF1ASSM\u6CE8\u518C\u3001\u516C\u53F8\u94F6\u884C\u5BF9\u8D26\u5355\u3001\u8463\u4E8B\u8EAB\u4EFD\u8BC1\u3001\u8D22\u52A1\u62A5\u8868\uFF08\u5982\u6709\uFF09\u3002\u7B80\u5355\u76F4\u63A5\u7684\u6D41\u7A0B\u3002" },
    { question: "\u4F60\u4EEC\u670D\u52A1\u9A6C\u6765\u897F\u4E9A\u6240\u6709\u5DDE\u5417\uFF1F", answer: "\u662F\u7684\uFF01\u6211\u4EEC\u670D\u52A1\u6240\u6709\u5DDE\uFF1A\u96EA\u5170\u83AA\u3001\u5409\u9686\u5761\u3001\u67D4\u4F5B\u3001\u69DF\u57CE\u3001\u9739\u96F3\u3001\u5F6D\u4EA8\u3001\u6C99\u5DF4\u3001\u7802\u62C9\u8D8A\u7B49\u3002\u504F\u8FDC\u5730\u533A\u7533\u8BF7\u53EF\u901A\u8FC7\u5728\u7EBF\u548CWhatsApp\u5904\u7406\u3002\u5168\u56FD\u8986\u76D6\uFF0C\u672C\u5730\u4E13\u4E1A\u77E5\u8BC6\u3002" },
    { question: "\u63D0\u524D\u8FD8\u6B3E\u6709\u7F5A\u6B3E\u5417\uFF1F", answer: "\u6CA1\u6709\u63D0\u524D\u8FD8\u6B3E\u7F5A\u6B3E\uFF01\u968F\u65F6\u8FD8\u6E05\u8D37\u6B3E\u65E0\u9700\u989D\u5916\u8D39\u7528\u3002\u8BB8\u591A\u5BA2\u6237\u572812-18\u4E2A\u6708\u540E\u4E1A\u52A1\u589E\u957F\u65F6\u518D\u878D\u8D44\uFF0C\u83B7\u5F97\u66F4\u597D\u7684\u5229\u7387\u3002" }
  ];
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "\u8BBE\u5907\u878D\u8D44\u76EE\u5F55",
    description: "\u9A6C\u6765\u897F\u4E9A\u5EFA\u7B51\u3001\u7269\u6D41\u548C\u5DE5\u4E1A\u8BBE\u5907\u7684\u5168\u9762\u878D\u8D44\u9009\u9879",
    itemListElement: featuredEquipment.map((equipment, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: equipment.name,
        description: equipment.description,
        image: `${SITE_CONFIG.url}${equipment.image}`,
        offers: {
          "@type": "Offer",
          priceCurrency: "MYR",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Ing Heng Credit & Leasing"
          }
        }
      }
    }))
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "\u9A6C\u6765\u897F\u4E9A\u8BBE\u5907\u878D\u8D44",
    description: "\u5EFA\u7B51\u3001\u7269\u6D41\u548C\u5DE5\u4E1A\u8BBE\u5907\u7684\u5168\u9762\u878D\u8D44\uFF0C\u5FEB\u901F\u6279\u51C6\u548C\u7075\u6D3B\u6761\u6B3E",
    provider: {
      "@type": "Organization",
      name: "Ing Heng Credit & Leasing"
    },
    areaServed: {
      "@type": "Country",
      name: "Malaysia"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "\u8BBE\u5907\u878D\u8D44\u9009\u9879",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "\u5EFA\u7B51\u8BBE\u5907\u878D\u8D44",
            description: "\u6316\u6398\u673A\u3001\u63A8\u571F\u673A\u3001\u8D77\u91CD\u673A\u548C\u91CD\u578B\u673A\u68B0\u878D\u8D44"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "\u7269\u6D41\u8BBE\u5907\u878D\u8D44",
            description: "\u5546\u7528\u5361\u8F66\u3001\u7275\u5F15\u8F66\u3001\u8D27\u8F66\u548C\u914D\u9001\u8F66\u8F86"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "\u5DE5\u4E1A\u8BBE\u5907\u878D\u8D44",
            description: "\u53C9\u8F66\u3001\u6570\u63A7\u673A\u5E8A\u3001\u5236\u9020\u8BBE\u5907\u548C\u5DE5\u5177"
          }
        }
      ]
    }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="container-custom py-4"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "lang": lang })} </div>  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u878D\u8D44\u4EFB\u4F55\u8BBE\u5907 - \u5FEB\u901F\u5FEB\u901F\u6279\u51C6", "subtitle": "\u5EFA\u7B51\u3001\u7269\u6D41\u548C\u5DE5\u4E1A\u8BBE\u5907 | Industry-Leading\u6279\u51C6\u7387 | \u7075\u6D3B12-60\u6708\u671F\u9650 | RM 30,000 - RM 2,000,000", "ctaText": "WhatsApp\u514D\u8D39\u62A5\u4EF7", "ctaLink": "https://wa.me/60175700889?text=\u60A8\u597D\uFF01\u6211\u60F3\u54A8\u8BE2\u8BBE\u5907\u878D\u8D44\u62A5\u4EF7\u3002", "ctaSecondaryText": "\u81F4\u7535\uFF1A017-570 0889", "ctaSecondaryLink": "tel:+60175700889", "lang": lang, "trustSignals": ["40\u5E74\u7ECF\u9A8C", "KPKT\u6301\u724C", "Industry-Leading\u6279\u51C6\u7387", "\u5FEB\u901F\u5FEB\u901F\u6279\u51C6"] })}  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
我们融资的设备类别
</h2> <p class="text-xl text-[#4F3E29]">
从建筑机械到物流车辆和工业设备
</p> </div> <div class="grid md:grid-cols-3 gap-8"> ${equipmentCategories.map((category) => renderTemplate`<div class="bg-white p-8 rounded-lg shadow-[6px_6px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow"> <div class="text-4xl mb-4"> ${category.icon === "construction" && "\u{1F3D7}\uFE0F"} ${category.icon === "truck" && "\u{1F69B}"} ${category.icon === "warehouse" && "\u{1F3ED}"} </div> <h3 class="text-2xl font-bold text-primary mb-3">${category.name}</h3> <p class="text-[#4F3E29] mb-4">${category.description}</p> <ul class="space-y-2 mb-6"> ${category.items.map((item) => renderTemplate`<li class="text-sm text-[#4F3E29] flex items-center space-x-2"> <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>${item}</span> </li>`)} </ul> <a${addAttribute(category.link, "href")} class="text-[#D4A574] font-semibold hover:text-primary transition-colors">
查看设备 →
</a> </div>`)} </div> </div> </section>  <section class="section" id="construction-equipment"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
特色融资设备
</h2> <p class="text-xl text-[#4F3E29]">
热门设备选择，具有竞争力的月付款率
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${featuredEquipment.map((equipment) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "name": equipment.name, "description": equipment.description, "features": equipment.features, "link": equipment.link, "lang": lang, "image": equipment.image, "badge": equipment.badge })}`)} </div> <!-- Additional Equipment Note --> <div class="mt-12 text-center p-6 bg-[#F5F5DC] rounded-lg"> <h3 class="text-xl font-bold text-primary mb-3">没看到您的设备？</h3> <p class="text-[#4F3E29] mb-4">
我们融资所有类型的商用和工业设备。联系我们获取专用机械、农业设备、采矿工具等的定制报价。
</p> <a href="https://wa.me/60175700889?text=您好！我想咨询设备融资。" class="btn btn-primary inline-block" target="_blank" rel="noopener noreferrer">
联系我们获取定制报价
</a> </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
为什么选择荣兴信贷设备融资？
</h2> <p class="text-xl text-[#4F3E29]">
快速批准、灵活条款和所有设备类型的竞争利率
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${benefits.map((benefit) => renderTemplate`${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description })}`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-8"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
计算您的月付款
</h2> <p class="text-xl text-[#4F3E29]">
看看设备融资对您的业务有多实惠
</p> </div> <div class="max-w-3xl mx-auto"> ${renderComponent($$result2, "Calculator", $$Calculator, { "lang": lang, "equipmentType": "\u8BBE\u5907", "defaultPrice": 15e4 })} </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
设备融资流程
</h2> <p class="text-xl text-[#4F3E29]">
从申请到设备交付的简单4步流程
</p> </div> <div class="grid md:grid-cols-4 gap-8"> ${steps.map((step) => renderTemplate`${renderComponent($$result2, "StepCard", $$StepCard, { "stepNumber": step.stepNumber, "icon": step.icon, "title": step.title, "description": step.description })}`)} </div> <div class="text-center mt-12"> <a href="https://wa.me/60175700889?text=您好！我想申请设备融资。" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg inline-block">
立即开始申请
</a> </div> </div> </section>  <section class="section bg-[#F5F5DC]" id="logistics-equipment"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
我们服务的行业
</h2> <p class="text-xl text-[#4F3E29]">
每个商业领域的专业融资解决方案
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${industries.map((industry) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[6px_6px_0_#2D1810] transition-shadow"> <div class="text-3xl mb-3"> ${industry.icon === "building" && "\u{1F3D7}\uFE0F"} ${industry.icon === "truck" && "\u{1F69B}"} ${industry.icon === "factory" && "\u{1F3ED}"} ${industry.icon === "warehouse" && "\u{1F4E6}"} ${industry.icon === "leaf" && "\u{1F33E}"} ${industry.icon === "mountain" && "\u26CF\uFE0F"} </div> <h3 class="text-xl font-bold text-primary mb-2">${industry.name}</h3> <p class="text-sm text-[#4F3E29]">${industry.equipment}</p> </div>`)} </div> </div> </section>  <section class="section bg-[#8B6F47] text-white" id="industrial-equipment"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">
4,000多家马来西亚企业的信赖之选
</h2> <p class="text-xl opacity-90">
40年设备融资卓越经验
</p> </div> <div class="grid md:grid-cols-4 gap-8 text-center"> <div> <div class="text-5xl font-bold mb-2">Industry-Leading</div> <div class="text-lg opacity-90">批准率</div> </div> <div> <div class="text-5xl font-bold mb-2">迅速</div> <div class="text-lg opacity-90">批准时间</div> </div> <div> <div class="text-5xl font-bold mb-2">4,000+</div> <div class="text-lg opacity-90">企业融资</div> </div> <div> <div class="text-5xl font-bold mb-2">40年</div> <div class="text-lg opacity-90">行业经验</div> </div> </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
常见问题
</h2> <p class="text-xl text-[#4F3E29]">
关于设备融资您需要了解的一切
</p> </div> <div class="max-w-4xl mx-auto space-y-4"> ${faqs.map((faq) => renderTemplate`${renderComponent($$result2, "FAQItem", $$FAQItem, { "question": faq.question, "answer": faq.answer })}`)} </div> </div> </section>  <section class="section bg-[#F5F5DC]"> <div class="container-custom text-center"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
准备融资您的设备了吗？
</h2> <p class="text-xl text-[#4F3E29] mb-8 max-w-2xl mx-auto">
快速快速批准。加入4,000多家选择荣兴信贷满足设备融资需求的企业。
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://wa.me/60175700889?text=您好！我想申请设备融资。" target="_blank" rel="noopener noreferrer" class="btn btn-primary text-lg px-8 py-4">
通过WhatsApp申请
</a> <a href="tel:+60175700889" class="btn btn-secondary text-lg px-8 py-4">
致电：017-570 0889
</a> </div> <div class="flex flex-wrap justify-center gap-6 text-sm text-[#4F3E29] mt-8"> <div class="flex items-center space-x-2"> <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>无义务报价</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>快速快速批准</span> </div> <div class="flex items-center space-x-2"> <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>KPKT持牌</span> </div> </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(encodeJSONLD(itemListSchema)), unescapeHTML(encodeJSONLD(serviceSchema)), unescapeHTML(encodeJSONLD(faqSchema))) })}` })}`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/index.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/equipment/index.astro";
const $$url = "/zh/equipment";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
