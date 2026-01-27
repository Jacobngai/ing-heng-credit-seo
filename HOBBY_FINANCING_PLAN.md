# Hobby Financing Strategy Plan
## ING Heng Credit - New Category Expansion

**Date:** January 27, 2026  
**Status:** DRAFT - For Discussion  
**Goal:** Capture untapped market of enthusiasts who want to finance older collectible/hobby equipment that banks won't touch

---

## ✅ Confirmed Details (Jan 27, 2026)
| Parameter | Value |
|-----------|-------|
| **Max Loan Amount** | RM1,000,000 |
| **Age Limit** | NO AGE LIMIT |
| **Valuation** | ING Heng specialist assessment (case-by-case) |
| **Insurance** | Arranged separately (not on website) |

---

## 🎨 UI STRUCTURE & NAVIGATION

### Main Menu Structure (Header Navigation)

```
┌─────────────────────────────────────────────────────────────────────┐
│  LOGO   │ Home │ Equipment ▼ │ HOBBY ▼ │ Services │ About │ Contact│
└─────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │       HOBBY DROPDOWN          │
                    ├───────────────────────────────┤
                    │ 🚗 Classic Cars              │
                    │ 🏍️ Motorcycles               │
                    │ 🚤 Boats & Yachts            │
                    │ 🎿 Recreational Vehicles     │
                    │ 🚁 Aircraft (Coming Soon)    │
                    │ ─────────────────────────────│
                    │ 📋 All Hobby Financing       │
                    └───────────────────────────────┘
```

---

## 📁 PAGE STRUCTURE (URL Paths)

### English (/en/hobby/)
```
/en/hobby/
│
├── index.astro                    ← Main Hobby Hub Page
│   "Hobby & Collector Financing"
│   Shows all 5 categories with cards
│
├── /classic-cars/
│   ├── index.astro               ← Classic Cars Landing
│   │   "Classic Car Financing Malaysia"
│   │   Cards for: JDM, European, American
│   │
│   ├── jdm-legends.astro         ← JDM Page (GTR, Supra, NSX, RX-7)
│   ├── european-classics.astro   ← European (Porsche, BMW, Mercedes)
│   └── american-muscle.astro     ← American (Mustang, Corvette)
│
├── /motorcycles/
│   ├── index.astro               ← Motorcycles Landing
│   │   "Classic Motorcycle Financing"
│   │
│   ├── harley-davidson.astro     ← Harley Specialists
│   ├── japanese-vintage.astro    ← Honda CB, Kawasaki Z, Yamaha
│   └── european-bikes.astro      ← Ducati, BMW, Triumph
│
├── /marine/
│   ├── index.astro               ← Marine Landing
│   │   "Boat & Yacht Financing"
│   │
│   ├── yachts.astro              ← Yacht Financing
│   ├── speedboats.astro          ← Speedboat & Fishing Boats
│   └── jet-ski.astro             ← Jet Ski & Personal Watercraft
│
├── /recreational/
│   ├── index.astro               ← Recreational Landing
│   │   "Recreational Vehicle Financing"
│   │
│   ├── motorhomes.astro          ← RV, Campervan, Caravan
│   └── offroad.astro             ← ATV, UTV, Golf Carts
│
└── /aircraft/
    └── index.astro               ← Aircraft Landing (Phase 2)
        "Helicopter & Aircraft Financing"
```

### Malay (/ms/hobi/)
```
/ms/hobi/
├── index.astro                    ← "Pembiayaan Hobi & Koleksi"
├── /kereta-klasik/                ← Classic Cars
├── /motosikal/                    ← Motorcycles
├── /marin/                        ← Marine
├── /rekreasi/                     ← Recreational
└── /pesawat/                      ← Aircraft
```

### Chinese (/zh/爱好/) or (/zh/hobby/)
```
/zh/hobby/
├── index.astro                    ← "收藏品融资"
├── /经典车/                        ← Classic Cars
├── /摩托车/                        ← Motorcycles
├── /船艇/                          ← Marine
├── /休闲车/                        ← Recreational
└── /飞机/                          ← Aircraft
```

---

## 🖼️ PAGE LAYOUTS

### 1. Hobby Hub Page (/hobby/index.astro)

```
┌─────────────────────────────────────────────────────────────────────┐
│                          HERO SECTION                               │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  "Finance Your Passion"                                      │   │
│  │  "Banks Say No to Old Cars. We Say Yes."                    │   │
│  │                                                               │   │
│  │  [Financing up to RM1 Million] [No Age Limit] [Fast Approval]│   │
│  │                                                               │   │
│  │  [ WhatsApp Now ]  [ Check Eligibility ]                     │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
│                                                                     │
│                      CATEGORY CARDS (Grid 3x2)                      │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                   │
│  │  🚗         │ │  🏍️         │ │  🚤         │                   │
│  │ CLASSIC     │ │ MOTORCYCLES │ │ BOATS &     │                   │
│  │ CARS        │ │             │ │ YACHTS      │                   │
│  │             │ │ Harley,     │ │             │                   │
│  │ GTR, Supra, │ │ Ducati,     │ │ Yachts,     │                   │
│  │ Porsche,BMW │ │ Vintage     │ │ Speedboats  │                   │
│  │             │ │             │ │ Jet Skis    │                   │
│  │ [View More] │ │ [View More] │ │ [View More] │                   │
│  └─────────────┘ └─────────────┘ └─────────────┘                   │
│                                                                     │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                   │
│  │  🎿         │ │  🚁         │ │  📞         │                   │
│  │ RECREATIONAL│ │ AIRCRAFT    │ │ CAN'T FIND  │                   │
│  │ VEHICLES    │ │             │ │ YOURS?      │                   │
│  │             │ │ Helicopters │ │             │                   │
│  │ RV, ATV,    │ │ Small Planes│ │ Contact us  │                   │
│  │ Golf Carts  │ │ (Coming)    │ │ for custom  │                   │
│  │             │ │             │ │ assessment  │                   │
│  │ [View More] │ │ [View More] │ │ [WhatsApp]  │                   │
│  └─────────────┘ └─────────────┘ └─────────────┘                   │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                      WHY CHOOSE US SECTION                          │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐   │
│  │ No Age      │ │ Up to       │ │ Specialist  │ │ Fast        │   │
│  │ Limit       │ │ RM1 Million │ │ Assessment  │ │ Approval    │   │
│  │             │ │             │ │             │ │             │   │
│  │ We finance  │ │ Finance your│ │ Our experts │ │ Decision    │   │
│  │ vintage &   │ │ dream       │ │ assess real │ │ within      │   │
│  │ collectibles│ │ collectible │ │ value       │ │ 48 hours    │   │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘   │
├─────────────────────────────────────────────────────────────────────┤
│                      FAQ SECTION                                    │
│  "Can I finance a 30 year old car?"                                │
│  "What documents do I need?"                                        │
│  "How is the car valued?"                                          │
├─────────────────────────────────────────────────────────────────────┤
│                      CTA SECTION                                    │
│  "Ready to Finance Your Dream?"                                     │
│  [ WhatsApp Now ] [ Call Us ] [ Apply Online ]                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 2. Category Page (e.g., /hobby/classic-cars/index.astro)

```
┌─────────────────────────────────────────────────────────────────────┐
│  Breadcrumb: Home > Hobby Financing > Classic Cars                 │
├─────────────────────────────────────────────────────────────────────┤
│                          HERO SECTION                               │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  "Classic Car Financing Malaysia"                            │   │
│  │  "Your GTR, Supra, Porsche Dream - Funded"                  │   │
│  │                                                               │   │
│  │  [ Apply Now ]  [ WhatsApp ]                                 │   │
│  └─────────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────────┤
│                      SUBCATEGORY CARDS                              │
│  ┌───────────────────┐ ┌───────────────────┐ ┌──────────────────┐  │
│  │  🇯🇵 JDM LEGENDS  │ │ 🇩🇪 EUROPEAN      │ │ 🇺🇸 AMERICAN     │  │
│  │                   │ │    CLASSICS       │ │    MUSCLE        │  │
│  │  • GTR R34/R33   │ │                   │ │                  │  │
│  │  • Toyota Supra  │ │  • Porsche 911    │ │  • Ford Mustang  │  │
│  │  • Honda NSX     │ │  • BMW M3 E30/E46 │ │  • Corvette      │  │
│  │  • Mazda RX-7    │ │  • Mercedes SL    │ │  • Challenger    │  │
│  │  • Evo/STI       │ │  • Jaguar E-Type  │ │                  │  │
│  │                   │ │                   │ │                  │  │
│  │  [Learn More]    │ │  [Learn More]     │ │  [Learn More]    │  │
│  └───────────────────┘ └───────────────────┘ └──────────────────┘  │
├─────────────────────────────────────────────────────────────────────┤
│                      POPULAR MODELS SECTION                         │
│  Grid of car cards with images:                                     │
│  - Nissan GTR R34 (RM400K-800K)                                    │
│  - Toyota Supra MK4 (RM300K-600K)                                  │
│  - Porsche 911 964 (RM400K-900K)                                   │
│  - BMW E30 M3 (RM300K-600K)                                        │
├─────────────────────────────────────────────────────────────────────┤
│                      FINANCING DETAILS                              │
│  • Loan up to RM1,000,000                                          │
│  • No age limit - we finance 30+ year old cars                     │
│  • Flexible tenure 1-7 years                                        │
│  • Competitive rates                                                │
├─────────────────────────────────────────────────────────────────────┤
│                      BLOG POSTS (Latest)                            │
│  "How to Finance a GTR R34 in Malaysia 2026"                       │
│  "Classic Car Investment: Supra vs Porsche"                        │
│  "Banks Rejected? Here's Your JDM Solution"                        │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📝 BLOG CONTENT PLAN

### Blog URL Structure
```
/en/blog/hobby/
├── classic-cars/
│   ├── how-to-finance-gtr-r34-malaysia-2026.astro
│   ├── toyota-supra-mk4-financing-guide.astro
│   ├── porsche-911-classic-financing.astro
│   ├── jdm-car-investment-malaysia.astro
│   └── banks-rejected-classic-car-solution.astro
│
├── motorcycles/
│   ├── harley-davidson-financing-malaysia.astro
│   ├── vintage-motorcycle-loan-guide.astro
│   └── old-superbike-financing.astro
│
├── marine/
│   ├── yacht-financing-malaysia-guide.astro
│   ├── used-boat-loan-malaysia.astro
│   └── jet-ski-financing-options.astro
│
└── recreational/
    ├── rv-motorhome-financing-malaysia.astro
    └── atv-golf-cart-loan.astro
```

### Blog Post Topics (Phase 1 - 15 Posts per Language)

#### Classic Cars (5 posts)
1. "How to Finance a Nissan GTR R34 in Malaysia (2026 Guide)"
2. "Toyota Supra MK4 Financing: Banks Won't Help, We Will"
3. "Classic Porsche 911 Financing Malaysia - No Age Limit"
4. "JDM Investment 2026: Which Classic Cars Hold Value?"
5. "Bank Rejected Your Classic Car Loan? Here's What To Do"

#### Motorcycles (5 posts)
1. "Harley Davidson Financing Malaysia - Old Bikes Welcome"
2. "Vintage Motorcycle Loans: Honda CB750, Kawasaki Z1"
3. "Big Bike Over 10 Years? We Can Finance It"
4. "Ducati & European Classic Motorcycle Financing"
5. "How to Get a Loan for a 20 Year Old Harley"

#### Marine (3 posts)
1. "Yacht Financing Malaysia - Used Boats Accepted"
2. "Jet Ski Loan Malaysia - Older Models OK"
3. "Fishing Boat Financing for Enthusiasts"

#### Recreational (2 posts)
1. "RV & Motorhome Financing Malaysia Guide"
2. "ATV, UTV & Golf Cart Loans"

---

## 🔧 TECHNICAL IMPLEMENTATION

### New Files to Create

#### Constants Update (constants.ts)
```typescript
export const HOBBY_CATEGORIES = {
  CLASSIC_CARS: {
    id: 'classic-cars',
    name: {
      en: 'Classic Cars',
      zh: '经典车',
      ms: 'Kereta Klasik',
    },
    icon: '🚗',
    items: ['JDM Legends', 'European Classics', 'American Muscle'],
  },
  MOTORCYCLES: {
    id: 'motorcycles',
    name: {
      en: 'Motorcycles',
      zh: '摩托车',
      ms: 'Motosikal',
    },
    icon: '🏍️',
    items: ['Harley-Davidson', 'Japanese Vintage', 'European Bikes'],
  },
  MARINE: {
    id: 'marine',
    name: {
      en: 'Boats & Yachts',
      zh: '船艇',
      ms: 'Bot & Kapal',
    },
    icon: '🚤',
    items: ['Yachts', 'Speedboats', 'Jet Ski'],
  },
  RECREATIONAL: {
    id: 'recreational',
    name: {
      en: 'Recreational',
      zh: '休闲车',
      ms: 'Rekreasi',
    },
    icon: '🎿',
    items: ['Motorhomes', 'ATV/UTV', 'Golf Carts'],
  },
  AIRCRAFT: {
    id: 'aircraft',
    name: {
      en: 'Aircraft',
      zh: '飞机',
      ms: 'Pesawat',
    },
    icon: '🚁',
    items: ['Helicopters', 'Small Planes'],
    comingSoon: true,
  },
};

export const HOBBY_NAV_ITEMS = [
  { label: 'All Hobby Financing', href: '/hobby', icon: '📋' },
  { label: 'Classic Cars', href: '/hobby/classic-cars', icon: '🚗' },
  { label: 'Motorcycles', href: '/hobby/motorcycles', icon: '🏍️' },
  { label: 'Boats & Yachts', href: '/hobby/marine', icon: '🚤' },
  { label: 'Recreational', href: '/hobby/recreational', icon: '🎿' },
  { label: 'Aircraft', href: '/hobby/aircraft', icon: '🚁', comingSoon: true },
];
```

### Components Needed
1. `HobbyHero.astro` - Hero section for hobby pages
2. `HobbyCard.astro` - Category/equipment card
3. `HobbyDropdown.astro` - Navigation dropdown menu
4. Update `Header.astro` - Add Hobby menu item

---

## 📊 IMPLEMENTATION PHASES

### Phase 1 (Week 1-2): Foundation
- [ ] Add HOBBY_CATEGORIES to constants.ts
- [ ] Create HobbyDropdown component
- [ ] Update Header with Hobby menu
- [ ] Create /hobby/index.astro (hub page)
- [ ] Create 3 main category landing pages:
  - [ ] /hobby/classic-cars/index.astro
  - [ ] /hobby/motorcycles/index.astro
  - [ ] /hobby/marine/index.astro

### Phase 2 (Week 3-4): Subcategories
- [ ] Create subcategory pages:
  - [ ] jdm-legends.astro, european-classics.astro, american-muscle.astro
  - [ ] harley-davidson.astro, japanese-vintage.astro, european-bikes.astro
  - [ ] yachts.astro, speedboats.astro, jet-ski.astro
- [ ] Create /hobby/recreational/ pages
- [ ] Replicate for MS and ZH

### Phase 3 (Week 5-6): Blog Content
- [ ] Create 15 blog posts (5 per language)
- [ ] Internal linking between pages
- [ ] FAQ schema for SEO

### Phase 4 (Month 2+): Expansion
- [ ] Add more blog posts
- [ ] Aircraft section (when ready)
- [ ] Community building (car club partnerships)

---

## 📋 SUMMARY

### What We're Building:
| Component | Count | Languages |
|-----------|-------|-----------|
| Main Hub Page | 1 | EN, MS, ZH |
| Category Landing Pages | 4 | EN, MS, ZH |
| Subcategory Pages | 12 | EN, MS, ZH |
| Blog Posts | 45 | EN, MS, ZH |
| **Total Pages** | **57** | **x3 = 171 pages** |

### Menu Structure:
```
HOBBY ▼
├── 🚗 Classic Cars
├── 🏍️ Motorcycles  
├── 🚤 Boats & Yachts
├── 🎿 Recreational
├── 🚁 Aircraft (Coming Soon)
└── 📋 All Hobby Financing
```

---

*Plan updated: January 27, 2026*
*Ready for approval before implementation*
