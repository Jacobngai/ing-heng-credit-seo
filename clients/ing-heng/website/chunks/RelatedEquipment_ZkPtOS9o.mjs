import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_CFtfKdet.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://ingheng-credit.vercel.app");
const $$RelatedEquipment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RelatedEquipment;
  const { lang, currentEquipment } = Astro2.props;
  const allEquipment = {
    excavator: {
      en: {
        name: "Excavator",
        description: "Mini to large excavators (1-30 tons) for construction and earthmoving.",
        url: "/en/equipment/excavator",
        badge: "Most Popular"
      },
      ms: {
        name: "Jengkaut",
        description: "Jengkaut mini hingga besar (1-30 tan) untuk pembinaan dan tanah kerja.",
        url: "/ms/equipment/excavator",
        badge: "Paling Popular"
      },
      zh: {
        name: "\u6316\u6398\u673A",
        description: "\u8FF7\u4F60\u81F3\u5927\u578B\u6316\u6398\u673A\uFF081-30\u5428\uFF09\u7528\u4E8E\u5EFA\u7B51\u548C\u571F\u65B9\u5DE5\u7A0B\u3002",
        url: "/zh/equipment/excavator",
        badge: "\u6700\u53D7\u6B22\u8FCE"
      }
    },
    lorry: {
      en: {
        name: "Commercial Lorry",
        description: "Light to heavy-duty lorries (1-40 tons) for logistics and delivery.",
        url: "/en/equipment/lorry",
        badge: "Fast Approval"
      },
      ms: {
        name: "Lori Komersial",
        description: "Lori ringan hingga berat (1-40 tan) untuk logistik dan penghantaran.",
        url: "/ms/equipment/lorry",
        badge: "Kelulusan Pantas"
      },
      zh: {
        name: "\u5546\u7528\u7F57\u91CC",
        description: "\u8F7B\u578B\u81F3\u91CD\u578B\u7F57\u91CC\uFF081-40\u5428\uFF09\u7528\u4E8E\u7269\u6D41\u548C\u914D\u9001\u3002",
        url: "/zh/equipment/lorry",
        badge: "\u5FEB\u901F\u6279\u51C6"
      }
    },
    forklift: {
      en: {
        name: "Forklift",
        description: "Electric and diesel forklifts (1-10 tons) for warehouse operations.",
        url: "/en/equipment/forklift"
      },
      ms: {
        name: "Forklift",
        description: "Forklift elektrik dan diesel (1-10 tan) untuk operasi gudang.",
        url: "/ms/equipment/forklift"
      },
      zh: {
        name: "\u53C9\u8F66",
        description: "\u7535\u52A8\u548C\u67F4\u6CB9\u53C9\u8F66\uFF081-10\u5428\uFF09\u7528\u4E8E\u4ED3\u5E93\u64CD\u4F5C\u3002",
        url: "/zh/equipment/forklift"
      }
    },
    crane: {
      en: {
        name: "Mobile Crane",
        description: "Hydraulic cranes (5-100 tons) for construction and heavy lifting.",
        url: "/en/equipment/crane"
      },
      ms: {
        name: "Kren Mudah Alih",
        description: "Kren hidraulik (5-100 tan) untuk pembinaan dan angkat berat.",
        url: "/ms/equipment/crane"
      },
      zh: {
        name: "\u79FB\u52A8\u5F0F\u8D77\u91CD\u673A",
        description: "\u6DB2\u538B\u8D77\u91CD\u673A\uFF085-100\u5428\uFF09\u7528\u4E8E\u5EFA\u7B51\u548C\u91CD\u7269\u540A\u88C5\u3002",
        url: "/zh/equipment/crane"
      }
    },
    bulldozer: {
      en: {
        name: "Bulldozer",
        description: "Heavy-duty bulldozers for earthmoving and land clearing projects.",
        url: "/en/equipment/bulldozer"
      },
      ms: {
        name: "Jentolak",
        description: "Jentolak berat untuk projek tanah kerja dan pembersihan tanah.",
        url: "/ms/equipment/bulldozer"
      },
      zh: {
        name: "\u63A8\u571F\u673A",
        description: "\u91CD\u578B\u63A8\u571F\u673A\u7528\u4E8E\u571F\u65B9\u5DE5\u7A0B\u548C\u6E05\u7406\u571F\u5730\u9879\u76EE\u3002",
        url: "/zh/equipment/bulldozer"
      }
    },
    primeMover: {
      en: {
        name: "Prime Mover",
        description: "Tractor units for trailer hauling and long-distance freight.",
        url: "/en/equipment/prime-mover"
      },
      ms: {
        name: "Prime Mover",
        description: "Unit traktor untuk mengangkut treler dan pengangkutan jarak jauh.",
        url: "/ms/equipment/prime-mover"
      },
      zh: {
        name: "\u7275\u5F15\u8F66",
        description: "\u62D6\u8F66\u5355\u5143\u7528\u4E8E\u62D6\u8F66\u8FD0\u8F93\u548C\u957F\u9014\u8D27\u8FD0\u3002",
        url: "/zh/equipment/prime-mover"
      }
    },
    refrigeratedTruck: {
      en: {
        name: "Refrigerated Truck",
        description: "Temperature-controlled trucks for frozen and fresh goods transport.",
        url: "/en/equipment/refrigerated-truck"
      },
      ms: {
        name: "Trak Peti Sejuk",
        description: "Trak kawalan suhu untuk pengangkutan barangan beku dan segar.",
        url: "/ms/equipment/refrigerated-truck"
      },
      zh: {
        name: "\u51B7\u85CF\u8F66",
        description: "\u6E29\u63A7\u5361\u8F66\u7528\u4E8E\u51B7\u51BB\u548C\u65B0\u9C9C\u8D27\u7269\u8FD0\u8F93\u3002",
        url: "/zh/equipment/refrigerated-truck"
      }
    }
  };
  const relatedEquipment = Object.entries(allEquipment).filter(([key]) => key !== currentEquipment).slice(0, 3).map(([, data]) => data[lang] || data["en"]).filter((item) => item && item.url);
  const translations = {
    en: {
      title: "Looking for Other Equipment?",
      subtitle: "Explore our full range of equipment financing solutions",
      viewAll: "View All Equipment"
    },
    ms: {
      title: "Mencari Peralatan Lain?",
      subtitle: "Terokai rangkaian penuh penyelesaian pembiayaan peralatan kami",
      viewAll: "Lihat Semua Peralatan"
    },
    zh: {
      title: "\u5BFB\u627E\u5176\u4ED6\u8BBE\u5907\uFF1F",
      subtitle: "\u63A2\u7D22\u6211\u4EEC\u5168\u7CFB\u5217\u8BBE\u5907\u878D\u8D44\u89E3\u51B3\u65B9\u6848",
      viewAll: "\u67E5\u770B\u6240\u6709\u8BBE\u5907"
    }
  };
  const t = translations[lang] || translations["en"];
  return renderTemplate`${maybeRenderHead()}<section class="section bg-[#F5F5DC]"> <div class="container-custom"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4"> ${t.title} </h2> <p class="text-xl text-[#4F3E29]"> ${t.subtitle} </p> </div> <div class="grid md:grid-cols-3 gap-6 mb-8"> ${relatedEquipment.map((equipment) => renderTemplate`<a${addAttribute(equipment.url, "href")} class="bg-white p-6 rounded-lg shadow-[4px_4px_0_#2D1810] hover:shadow-[8px_8px_0_#2D1810] transition-all hover:-translate-y-1 block"> ${equipment.badge && renderTemplate`<span class="inline-block px-3 py-1 bg-[#D4A574] text-[#2D1810] text-xs font-bold uppercase rounded-full mb-3"> ${equipment.badge} </span>`} <h3 class="text-xl font-bold text-primary mb-2">${equipment.name}</h3> <p class="text-[#4F3E29] text-sm">${equipment.description}</p> <div class="mt-4 text-primary font-bold flex items-center"> <span class="mr-2">Learn More</span> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </div> </a>`)} </div> <div class="text-center"> <a${addAttribute(`/${lang}/equipment`, "href")} class="btn btn-primary btn-lg inline-block"> ${t.viewAll} </a> </div> </div> </section>`;
}, "C:/Users/MSI/ing heng/ing-heng-credit-seo/clients/ing-heng/website/src/components/RelatedEquipment.astro", void 0);

export { $$RelatedEquipment as $ };
