/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CFtfKdet.mjs';
import 'piccolore';
import { $ as $$BaseLayout, b as generateOrganizationSchema } from '../../chunks/BaseLayout_BSmrehMn.mjs';
import { $ as $$Calculator$1 } from '../../chunks/Calculator_BS1M0nbC.mjs';
import { $ as $$BenefitCard } from '../../chunks/BenefitCard_DV4ZNQbs.mjs';
import { $ as $$StructuredData } from '../../chunks/StructuredData_BEy59xv7.mjs';
import { C as COMPANY_INFO } from '../../chunks/Footer_BoPJ3uP5.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Calculator = createComponent(($$result, $$props, $$slots) => {
  const lang = "zh";
  const pageTitle = "\u8BBE\u5907\u878D\u8D44\u8BA1\u7B97\u5668 - \u5373\u65F6\u4ED8\u6B3E\u4F30\u7B97 | Ing Heng Credit";
  const pageDescription = "\u5373\u65F6\u8BA1\u7B97\u60A8\u7684\u8BBE\u5907\u878D\u8D44\u4ED8\u6B3E\u3002\u514D\u8D39\u5728\u7EBF\u8BA1\u7B97\u5668\uFF0C\u7528\u4E8E\u6316\u6398\u673A\u3001\u8D27\u8F66\u3001\u53C9\u8F66\u7B49\u3002\u83B7\u5F9712-60\u4E2A\u6708\u7075\u6D3B\u6761\u6B3E\u7684\u51C6\u786E\u6BCF\u6708\u4ED8\u6B3E\u4F30\u7B97\u3002";
  const keywords = [
    "\u8BBE\u5907\u878D\u8D44\u8BA1\u7B97\u5668\u9A6C\u6765\u897F\u4E9A",
    "\u79DF\u8D2D\u4ED8\u6B3E\u8BA1\u7B97\u5668",
    "\u8BBE\u5907\u8D37\u6B3E\u8BA1\u7B97\u5668",
    "\u6316\u6398\u673A\u878D\u8D44\u8BA1\u7B97\u5668",
    "\u8D27\u8F66\u878D\u8D44\u8BA1\u7B97\u5668",
    "\u53C9\u8F66\u4ED8\u6B3E\u8BA1\u7B97\u5668",
    "\u5EFA\u7B51\u8BBE\u5907\u8BA1\u7B97\u5668",
    "\u6708\u4ED8\u6B3E\u4F30\u7B97\u5668"
  ];
  const schema = generateOrganizationSchema();
  const benefits = [
    {
      icon: "calculator",
      title: "\u5373\u65F6\u4F30\u7B97",
      description: "\u5728\u5B9E\u65F6\u8C03\u6574\u878D\u8D44\u53C2\u6570\u65F6\u83B7\u5F97\u51C6\u786E\u7684\u6708\u5EA6\u4ED8\u6B3E\u8BA1\u7B97"
    },
    {
      icon: "chart-bar",
      title: "\u900F\u660E\u5B9A\u4EF7",
      description: "\u67E5\u770B\u60A8\u7684\u4ED8\u6B3E\u3001\u5229\u7387\u548C\u603B\u6210\u672C\u7684\u5B8C\u6574\u660E\u7EC6\uFF0C\u65E0\u9690\u85CF\u8D39\u7528"
    },
    {
      icon: "adjustments",
      title: "\u7075\u6D3B\u9009\u62E9",
      description: "\u81EA\u5B9A\u4E49\u9996\u4ED8\uFF080-50%\uFF09\u548C\u8D37\u6B3E\u671F\u9650\uFF0812-60\u4E2A\u6708\uFF09\u4EE5\u7B26\u5408\u60A8\u7684\u9884\u7B97"
    },
    {
      icon: "lightning",
      title: "\u5FEB\u901F\u6279\u51C6",
      description: "\u627E\u5230\u5408\u9002\u7684\u8BA1\u5212\u540E\uFF0C\u901A\u8FC7WhatsApp\u7533\u8BF7\uFF0C\u8FC5\u901F\u83B7\u5F97\u6279\u51C6"
    }
  ];
  const tips = [
    {
      title: "\u4F18\u5316\u60A8\u7684\u9996\u4ED8\u6B3E",
      description: "\u66F4\u9AD8\u7684\u9996\u4ED8\u6B3E\uFF0820-30%\uFF09\u53EF\u964D\u4F4E\u6BCF\u6708\u4ED8\u6B3E\u548C\u603B\u5229\u606F\u3002\u4F46\u662F\uFF0C\u6211\u4EEC\u7075\u6D3B\u76840%\u6700\u4F4E\u9650\u989D*\u786E\u4FDD\u4E86\u5927\u591A\u6570\u4F01\u4E1A\u7684\u53EF\u8BBF\u95EE\u6027\u3002\uFF08*\u9700\u83B7\u5F97\u6279\u51C6\u5E76\u9075\u5B88\u6761\u6B3E\uFF09"
    },
    {
      title: "\u9009\u62E9\u5408\u9002\u7684\u671F\u9650",
      description: "\u8F83\u77ED\u7684\u671F\u9650\uFF0812-24\u4E2A\u6708\uFF09\u8282\u7701\u603B\u5229\u606F\uFF0C\u4F46\u6BCF\u6708\u4ED8\u6B3E\u8F83\u9AD8\u3002\u8F83\u957F\u7684\u671F\u9650\uFF0848-60\u4E2A\u6708\uFF09\u63D0\u4F9B\u8F83\u4F4E\u7684\u6708\u4ED8\u6B3E\uFF0C\u4F46\u603B\u6210\u672C\u8F83\u9AD8\u3002"
    },
    {
      title: "\u8003\u8651\u73B0\u91D1\u6D41\u91CF",
      description: "\u5C06\u8D37\u6B3E\u671F\u9650\u4E0E\u8BBE\u5907\u7684\u6536\u76CA\u5468\u671F\u76F8\u5339\u914D\u3002\u5177\u6709\u5B63\u8282\u6027\u5DE5\u4F5C\u7684\u5EFA\u7B51\u8BBE\u5907\u53EF\u80FD\u53D7\u76CA\u4E8E\u7075\u6D3B\u7684\u4ED8\u6B3E\u5B89\u6392\u3002"
    },
    {
      title: "\u7A0E\u6536\u4F18\u60E0",
      description: "\u8BBE\u5907\u878D\u8D44\u4E3A\u5229\u606F\u4ED8\u6B3E\u548C\u6F5C\u5728\u8D44\u672C\u6D25\u8D34\u63D0\u4F9B\u7A0E\u6536\u51CF\u514D\u3002\u54A8\u8BE2\u60A8\u7684\u4F1A\u8BA1\u5E08\u4EE5\u6700\u5927\u5316\u6536\u76CA\u3002"
    }
  ];
  const equipmentExamples = [
    {
      name: "\u6316\u6398\u673A (\u5C0F\u677E PC200)",
      price: 25e4,
      link: "/zh/equipment/excavator"
    },
    {
      name: "\u5546\u7528\u8D27\u8F66 (3\u5428)",
      price: 12e4,
      link: "/zh/equipment/lorry"
    },
    {
      name: "\u53C9\u8F66 (2.5\u5428)",
      price: 8e4,
      link: "/zh/equipment/forklift"
    },
    {
      name: "\u7275\u5F15\u8F66 (\u6C83\u5C14\u6C83)",
      price: 35e4,
      link: "/zh/equipment/prime-mover"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "lang": lang, "keywords": keywords, "ogType": "website", "data-astro-cid-l4laqgpy": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StructuredData", $$StructuredData, { "schema": schema, "data-astro-cid-l4laqgpy": true })}  ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white overflow-hidden" data-astro-cid-l4laqgpy> <!-- Industrial Pattern Background --> <div class="absolute inset-0 opacity-10" data-astro-cid-l4laqgpy> <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px);" data-astro-cid-l4laqgpy></div> </div> <div class="container-custom relative z-10 py-16 md:py-24" data-astro-cid-l4laqgpy> <div class="max-w-4xl mx-auto text-center" data-astro-cid-l4laqgpy> <!-- Bold Uppercase Headline (Bebas Neue style) --> <h1 class="text-5xl md:text-7xl font-extrabold uppercase tracking-wider mb-6" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-l4laqgpy> <span class="text-white" data-astro-cid-l4laqgpy>设备融资</span><br data-astro-cid-l4laqgpy> <span class="text-[#D4A574]" data-astro-cid-l4laqgpy>付款计算器</span> </h1> <!-- Industrial Divider --> <div class="flex items-center justify-center gap-4 mb-6" data-astro-cid-l4laqgpy> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-l4laqgpy></div> <div class="h-2 w-2 bg-[#D4A574] rotate-45" data-astro-cid-l4laqgpy></div> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-l4laqgpy></div> </div> <p class="text-xl md:text-2xl text-white leading-relaxed mb-8" data-astro-cid-l4laqgpy>
即时计算您的每月付款。自定义您的融资计划。<br data-astro-cid-l4laqgpy> <strong class="text-[#D4A574]" data-astro-cid-l4laqgpy>几秒钟内获得准确估算。</strong> </p> <!-- Trust Signals with Industrial Badge Style --> <div class="flex flex-wrap justify-center gap-4 mb-8" data-astro-cid-l4laqgpy> <div class="bg-blue-950/50 border-2 border-[#D4A574] px-6 py-3 backdrop-blur-sm" data-astro-cid-l4laqgpy> <div class="text-[#D4A574] font-bold text-sm uppercase tracking-wider" data-astro-cid-l4laqgpy>KPKT 许可</div> </div> <div class="bg-blue-950/50 border-2 border-[#D4A574] px-6 py-3 backdrop-blur-sm" data-astro-cid-l4laqgpy> <div class="text-[#D4A574] font-bold text-sm uppercase tracking-wider" data-astro-cid-l4laqgpy>快速处理</div> </div> <div class="bg-blue-950/50 border-2 border-[#D4A574] px-6 py-3 backdrop-blur-sm" data-astro-cid-l4laqgpy> <div class="text-[#D4A574] font-bold text-sm uppercase tracking-wider" data-astro-cid-l4laqgpy>40+ 年</div> </div> </div> </div> </div> <!-- Angled Bottom Edge --> <div class="absolute bottom-0 left-0 right-0 h-16 bg-white" style="clip-path: polygon(0 100%, 100% 100%, 100% 0);" data-astro-cid-l4laqgpy></div> </section>  <section class="section bg-gray-50 -mt-8 relative z-20" data-astro-cid-l4laqgpy> <div class="container-custom" data-astro-cid-l4laqgpy> <div class="max-w-4xl mx-auto" data-astro-cid-l4laqgpy> <!-- Calculator Card with Industrial Border Style --> <div class="bg-white rounded-lg shadow-[8px_8px_0_#2D1810] border-8 border-blue-900 relative" data-astro-cid-l4laqgpy> <!-- Yellow Corner Accent --> <div class="absolute top-0 left-0 w-20 h-20 bg-[#D4A574] clip-triangle" data-astro-cid-l4laqgpy></div> <div class="absolute bottom-0 right-0 w-20 h-20 bg-[#D4A574] clip-triangle-br" data-astro-cid-l4laqgpy></div> <div class="p-8 md:p-12" data-astro-cid-l4laqgpy> ${renderComponent($$result2, "Calculator", $$Calculator$1, { "lang": lang, "minDownPayment": 0, "data-astro-cid-l4laqgpy": true })} </div> </div> <!-- Quick Equipment Examples --> <div class="mt-12" data-astro-cid-l4laqgpy> <h3 class="text-2xl font-bold text-center mb-6 text-gray-900" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-l4laqgpy>
热门设备融资示例
</h3> <div class="grid md:grid-cols-2 gap-4" data-astro-cid-l4laqgpy> ${equipmentExamples.map((equipment) => renderTemplate`<a${addAttribute(equipment.link, "href")} class="bg-white p-6 rounded-lg border-4 border-blue-900 hover:border-[#D4A574] transition-all hover:shadow-[8px_8px_0_#2D1810] group" data-astro-cid-l4laqgpy> <div class="flex justify-between items-center" data-astro-cid-l4laqgpy> <div data-astro-cid-l4laqgpy> <div class="font-bold text-lg text-gray-900 group-hover:text-blue-900" data-astro-cid-l4laqgpy>${equipment.name}</div> <div class="text-sm text-gray-600" data-astro-cid-l4laqgpy>典型价格范围</div> </div> <div class="text-right" data-astro-cid-l4laqgpy> <div class="text-2xl font-bold text-blue-900" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif;" data-astro-cid-l4laqgpy>
RM ${equipment.price.toLocaleString()} </div> </div> </div> </a>`)} </div> </div> </div> </div> </section>  <section class="section bg-white" data-astro-cid-l4laqgpy> <div class="container-custom" data-astro-cid-l4laqgpy> <div class="text-center mb-12" data-astro-cid-l4laqgpy> <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-l4laqgpy>
为什么使用我们的计算器?
</h2> <div class="flex items-center justify-center gap-4 mb-6" data-astro-cid-l4laqgpy> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-l4laqgpy></div> <div class="h-2 w-2 bg-[#D4A574] rotate-45" data-astro-cid-l4laqgpy></div> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-l4laqgpy></div> </div> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-l4laqgpy>
使用我们的透明易用计算器做出明智的融资决策
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" data-astro-cid-l4laqgpy> ${benefits.map((benefit) => renderTemplate`<div class="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border-4 border-blue-900 hover:border-[#D4A574] transition-all" data-astro-cid-l4laqgpy> ${renderComponent($$result2, "BenefitCard", $$BenefitCard, { "icon": benefit.icon, "title": benefit.title, "description": benefit.description, "data-astro-cid-l4laqgpy": true })} </div>`)} </div> </div> </section>  <section class="section bg-gradient-to-br from-blue-50 to-yellow-50" data-astro-cid-l4laqgpy> <div class="container-custom" data-astro-cid-l4laqgpy> <div class="max-w-5xl mx-auto" data-astro-cid-l4laqgpy> <div class="text-center mb-12" data-astro-cid-l4laqgpy> <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-l4laqgpy>
聪明融资技巧
</h2> <div class="flex items-center justify-center gap-4 mb-6" data-astro-cid-l4laqgpy> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-l4laqgpy></div> <div class="h-2 w-2 bg-[#D4A574] rotate-45" data-astro-cid-l4laqgpy></div> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-l4laqgpy></div> </div> <p class="text-xl text-gray-600" data-astro-cid-l4laqgpy>
最大化您的设备融资优势的专家建议
</p> </div> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-l4laqgpy> ${tips.map((tip, index) => renderTemplate`<div class="bg-white p-8 rounded-lg border-l-8 border-blue-900 shadow-[6px_6px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-shadow" data-astro-cid-l4laqgpy> <div class="flex items-start gap-4" data-astro-cid-l4laqgpy> <div class="flex-shrink-0 w-12 h-12 bg-[#D4A574] flex items-center justify-center font-bold text-2xl text-blue-900" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif;" data-astro-cid-l4laqgpy> ${index + 1} </div> <div data-astro-cid-l4laqgpy> <h3 class="text-xl font-bold text-blue-900 mb-3" data-astro-cid-l4laqgpy>${tip.title}</h3> <p class="text-gray-700 leading-relaxed" data-astro-cid-l4laqgpy>${tip.description}</p> </div> </div> </div>`)} </div> </div> </div> </section>  <section class="section bg-white" data-astro-cid-l4laqgpy> <div class="container-custom" data-astro-cid-l4laqgpy> <div class="max-w-5xl mx-auto" data-astro-cid-l4laqgpy> <div class="text-center mb-12" data-astro-cid-l4laqgpy> <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-l4laqgpy>
从计算器到批准
</h2> <div class="flex items-center justify-center gap-4 mb-6" data-astro-cid-l4laqgpy> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-l4laqgpy></div> <div class="h-2 w-2 bg-[#D4A574] rotate-45" data-astro-cid-l4laqgpy></div> <div class="h-1 w-20 bg-[#D4A574]" data-astro-cid-l4laqgpy></div> </div> <p class="text-xl text-gray-600" data-astro-cid-l4laqgpy>
获得设备融资的四个简单步骤
</p> </div> <div class="relative" data-astro-cid-l4laqgpy> <!-- Connection Line --> <div class="hidden md:block absolute top-24 left-0 right-0 h-1 bg-blue-200" style="top: 4rem;" data-astro-cid-l4laqgpy></div> <div class="grid md:grid-cols-4 gap-8 relative" data-astro-cid-l4laqgpy> <div class="text-center" data-astro-cid-l4laqgpy> <div class="w-24 h-24 bg-blue-900 text-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold border-8 border-white shadow-[8px_8px_0_#2D1810]" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif;" data-astro-cid-l4laqgpy>
1
</div> <h3 class="text-xl font-bold text-blue-900 mb-2" data-astro-cid-l4laqgpy>计算</h3> <p class="text-gray-600" data-astro-cid-l4laqgpy>使用我们的计算器估算每月付款</p> </div> <div class="text-center" data-astro-cid-l4laqgpy> <div class="w-24 h-24 bg-blue-900 text-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold border-8 border-white shadow-[8px_8px_0_#2D1810]" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif;" data-astro-cid-l4laqgpy>
2
</div> <h3 class="text-xl font-bold text-blue-900 mb-2" data-astro-cid-l4laqgpy>申请</h3> <p class="text-gray-600" data-astro-cid-l4laqgpy>通过WhatsApp以最少的文件提交</p> </div> <div class="text-center" data-astro-cid-l4laqgpy> <div class="w-24 h-24 bg-blue-900 text-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold border-8 border-white shadow-[8px_8px_0_#2D1810]" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif;" data-astro-cid-l4laqgpy>
3
</div> <h3 class="text-xl font-bold text-blue-900 mb-2" data-astro-cid-l4laqgpy>获得批准</h3> <p class="text-gray-600" data-astro-cid-l4laqgpy>迅速获得决定</p> </div> <div class="text-center" data-astro-cid-l4laqgpy> <div class="w-24 h-24 bg-[#D4A574] text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold border-8 border-white shadow-[8px_8px_0_#2D1810]" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif;" data-astro-cid-l4laqgpy>
4
</div> <h3 class="text-xl font-bold text-blue-900 mb-2" data-astro-cid-l4laqgpy>获得设备</h3> <p class="text-gray-600" data-astro-cid-l4laqgpy>立即开始使用您的设备</p> </div> </div> </div> </div> </div> </section>  <section class="section bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white relative overflow-hidden" data-astro-cid-l4laqgpy> <!-- Industrial Pattern Background --> <div class="absolute inset-0 opacity-10" data-astro-cid-l4laqgpy> <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px);" data-astro-cid-l4laqgpy></div> </div> <div class="container-custom relative z-10 text-center" data-astro-cid-l4laqgpy> <h2 class="text-4xl md:text-5xl font-bold mb-6 uppercase" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-l4laqgpy>
准备好融资您的设备了吗?
</h2> <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white" data-astro-cid-l4laqgpy>
找到完美的付款计划？现在通过WhatsApp申请并迅速获得<br data-astro-cid-l4laqgpy> <strong class="text-[#D4A574]" data-astro-cid-l4laqgpy>批准决定</strong>。
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center mb-8" data-astro-cid-l4laqgpy> <a${addAttribute(COMPANY_INFO.whatsapp.link, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 bg-[#D4A574] hover:bg-yellow-300 text-blue-900 font-bold px-10 py-5 text-xl uppercase transition-all shadow-[8px_8px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] border-4 border-blue-900" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-l4laqgpy> <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-l4laqgpy> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-l4laqgpy></path> </svg>
通过WhatsApp申请
</a> <a href="/zh/contact" class="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white font-bold px-10 py-5 text-xl uppercase transition-all border-4 border-[#D4A574] hover:border-white" style="font-family: 'Noto Sans SC', 'Bebas Neue', sans-serif; letter-spacing: 0.05em;" data-astro-cid-l4laqgpy>
联系我们
</a> </div> <div class="flex flex-wrap justify-center gap-8 text-sm" data-astro-cid-l4laqgpy> <div class="flex items-center gap-2" data-astro-cid-l4laqgpy> <svg class="w-6 h-6 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-l4laqgpy> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-l4laqgpy></path> </svg> <span data-astro-cid-l4laqgpy>快速批准</span> </div> <div class="flex items-center gap-2" data-astro-cid-l4laqgpy> <svg class="w-6 h-6 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-l4laqgpy> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-l4laqgpy></path> </svg> </div> <div class="flex items-center gap-2" data-astro-cid-l4laqgpy> <svg class="w-6 h-6 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-l4laqgpy> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-l4laqgpy></path> </svg> <span data-astro-cid-l4laqgpy>KPKT 许可</span> </div> <div class="flex items-center gap-2" data-astro-cid-l4laqgpy> <svg class="w-6 h-6 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-l4laqgpy> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-l4laqgpy></path> </svg> <span data-astro-cid-l4laqgpy>40+ 年经验</span> </div> </div> </div> </section> ` })} `;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/calculator.astro", void 0);

const $$file = "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/pages/zh/calculator.astro";
const $$url = "/zh/calculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calculator,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
