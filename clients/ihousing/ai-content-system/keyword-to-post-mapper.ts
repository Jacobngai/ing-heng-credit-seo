/**
 * KEYWORD-TO-POST MAPPER
 * Auto-assigns keywords to content posts based on category, language, and priority
 *
 * Production: 180 posts/month = 60 EN + 60 ZH + 60 MS
 */

// ============ DATA STRUCTURES ============

export interface Keyword {
  id: number;
  keyword: string;
  language: "en" | "zh" | "ms";
  category: KeywordCategory;
  subCategory?: string;
  searchVolume: number;
  kd: number;
  intent: SearchIntent;
  targetCondo?: string;
  status: "pending" | "assigned" | "published";
  assignedPostId?: string;
  priority: 1 | 2 | 3 | 4 | 5;
}

export type KeywordCategory =
  | "problem-aware-empty"
  | "problem-aware-tenant"
  | "solution-aware"
  | "product-aware"
  | "decision-stage"
  | "financial-roi"
  | "legal-regulatory"
  | "location-specific"
  | "condo-specific"
  | "operational"
  | "seasonal"
  | "furnishing-buying"
  | "setup-operational"
  | "cost-budget";

export type SearchIntent =
  | "problem-solving"
  | "pain-awareness"
  | "solution-seeking"
  | "commercial-investigation"
  | "market-research"
  | "how-to"
  | "due-diligence"
  | "decision-evaluation"
  | "price-shopping"
  | "action-oriented";

export interface ContentPost {
  id: string;
  slug: string;
  title: string;
  language: "en" | "zh" | "ms";
  type: "blog" | "landing" | "comparison" | "guide";
  category: KeywordCategory;
  targetKeyword: string; // Primary keyword
  secondaryKeywords: string[];
  stage: AwarenessStage;
  status: "draft" | "review" | "published";
  targetCondo?: string;
  assignedDate: Date;
  publishDate?: Date;
}

export type AwarenessStage =
  | "unaware"
  | "problem-aware"
  | "solution-aware"
  | "product-aware"
  | "decision"
  | "implementation";

// ============ CATEGORY TO STAGE MAPPING ============

const CATEGORY_STAGE_MAP: Record<KeywordCategory, AwarenessStage> = {
  "problem-aware-empty": "problem-aware",
  "problem-aware-tenant": "problem-aware",
  "solution-aware": "solution-aware",
  "product-aware": "product-aware",
  "decision-stage": "decision",
  "financial-roi": "solution-aware",
  "legal-regulatory": "solution-aware",
  "location-specific": "solution-aware",
  "condo-specific": "product-aware",
  "operational": "implementation",
  "seasonal": "solution-aware",
  "furnishing-buying": "implementation",
  "setup-operational": "implementation",
  "cost-budget": "solution-aware",
};

// ============ KEYWORD DATABASE (Sample from research) ============

export const KEYWORD_DATABASE: Keyword[] = [
  // ENGLISH - Category 1: Problem-Aware - Empty Property Issues
  { id: 1, keyword: "what to do with empty condo in melaka", language: "en", category: "problem-aware-empty", searchVolume: 20, kd: 8, intent: "problem-solving", priority: 1, status: "pending" },
  { id: 2, keyword: "empty condo costing me money melaka", language: "en", category: "problem-aware-empty", searchVolume: 10, kd: 5, intent: "pain-awareness", priority: 1, status: "pending" },
  { id: 3, keyword: "condo sitting empty maintenance costs malaysia", language: "en", category: "problem-aware-empty", searchVolume: 15, kd: 8, intent: "financial-concern", priority: 2, status: "pending" },

  // ENGLISH - Category 2: Problem-Aware - Tenant Nightmares
  { id: 13, keyword: "tenant not paying rent what to do malaysia", language: "en", category: "problem-aware-tenant", searchVolume: 30, kd: 12, intent: "problem-solving", priority: 1, status: "pending" },
  { id: 14, keyword: "nightmare tenant stories malaysia condo", language: "en", category: "problem-aware-tenant", searchVolume: 15, kd: 8, intent: "validation-seeking", priority: 2, status: "pending" },

  // ENGLISH - Category 3: Solution-Aware
  { id: 23, keyword: "how much can i earn from airbnb in melaka", language: "en", category: "solution-aware", searchVolume: 20, kd: 8, intent: "commercial-investigation", priority: 1, status: "pending" },
  { id: 24, keyword: "is airbnb still profitable in malaysia 2025", language: "en", category: "solution-aware", searchVolume: 40, kd: 12, intent: "market-research", priority: 1, status: "pending" },
  { id: 27, keyword: "how to start airbnb in melaka beginner guide", language: "en", category: "solution-aware", searchVolume: 30, kd: 12, intent: "how-to", priority: 1, status: "pending" },

  // ENGLISH - Category 4: Product-Aware
  { id: 38, keyword: "self manage airbnb vs hire company malaysia", language: "en", category: "product-aware", searchVolume: 60, kd: 18, intent: "decision-evaluation", priority: 1, status: "pending" },
  { id: 40, keyword: "how much do airbnb managers charge malaysia", language: "en", category: "product-aware", searchVolume: 45, kd: 18, intent: "price-shopping", priority: 1, status: "pending" },

  // ENGLISH - Category 5: Decision-Stage
  { id: 50, keyword: "switch airbnb manager malaysia", language: "en", category: "decision-stage", searchVolume: 30, kd: 12, intent: "action-oriented", priority: 1, status: "pending" },
  { id: 54, keyword: "airbnb management melaka flat fee", language: "en", category: "decision-stage", searchVolume: 10, kd: 5, intent: "price-shopping", priority: 2, status: "pending" },

  // ENGLISH - Category 6: Financial & ROI
  { id: 60, keyword: "cost to furnish condo for airbnb malaysia", language: "en", category: "financial-roi", searchVolume: 45, kd: 18, intent: "commercial-investigation", priority: 1, status: "pending" },
  { id: 63, keyword: "airbnb roi calculator melaka malaysia", language: "en", category: "financial-roi", searchVolume: 18, kd: 8, intent: "commercial-investigation", priority: 2, status: "pending" },

  // ENGLISH - Category 12: Furnishing & Buying
  { id: 121, keyword: "buying furniture for airbnb malaysia", language: "en", category: "furnishing-buying", searchVolume: 45, kd: 18, intent: "commercial-investigation", priority: 1, status: "pending" },
  { id: 122, keyword: "best furniture for airbnb rental melaka", language: "en", category: "furnishing-buying", searchVolume: 15, kd: 8, intent: "product-selection", priority: 2, status: "pending" },

  // ENGLISH - Category 13: Setup & Operational
  { id: 146, keyword: "how to set up airbnb condo step by step", language: "en", category: "setup-operational", searchVolume: 45, kd: 18, intent: "how-to", priority: 1, status: "pending" },
  { id: 147, keyword: "airbnb checklist for hosts malaysia", language: "en", category: "setup-operational", searchVolume: 45, kd: 18, intent: "planning-tool", priority: 1, status: "pending" },

  // ENGLISH - Category 14: Cost & Budget
  { id: 171, keyword: "airbnb startup costs breakdown malaysia", language: "en", category: "cost-budget", searchVolume: 30, kd: 12, intent: "financial-planning", priority: 1, status: "pending" },

  // CONDO-SPECIFIC - Silverscape Residence
  { id: 88, keyword: "silverscape residence airbnb melaka", language: "en", category: "condo-specific", searchVolume: 8, kd: 5, intent: "property-specific", targetCondo: "Silverscape Residence", priority: 3, status: "pending" },
  { id: 90, keyword: "switch airbnb manager silverscape residence", language: "en", category: "condo-specific", searchVolume: 5, kd: 5, intent: "action-oriented", targetCondo: "Silverscape Residence", priority: 3, status: "pending" },

  // CONDO-SPECIFIC - Parkland Avenue
  { id: 93, keyword: "parkland avenue by the sea investment guide", language: "en", category: "condo-specific", searchVolume: 15, kd: 8, intent: "pre-launch-interest", targetCondo: "Parkland Avenue", priority: 1, status: "pending" },

  // CHINESE - Problem-Aware
  { id: 191, keyword: "马六甲空房子怎么办", language: "zh", category: "problem-aware-empty", searchVolume: 40, kd: 8, intent: "problem-solving", priority: 1, status: "pending" },
  { id: 192, keyword: "马六甲租不出去的房子怎么办", language: "zh", category: "problem-aware-empty", searchVolume: 30, kd: 8, intent: "frustration", priority: 1, status: "pending" },

  // CHINESE - Solution-Aware
  { id: 199, keyword: "马六甲民宿投资回报多少", language: "zh", category: "solution-aware", searchVolume: 40, kd: 8, intent: "roi-research", priority: 1, status: "pending" },
  { id: 200, keyword: "做民宿需要多少钱马六甲", language: "zh", category: "solution-aware", searchVolume: 55, kd: 12, intent: "startup-cost", priority: 1, status: "pending" },

  // MALAY - Problem-Aware
  { id: 241, keyword: "apa nak buat dengan rumah kosong melaka", language: "ms", category: "problem-aware-empty", searchVolume: 55, kd: 8, intent: "problem-solving", priority: 1, status: "pending" },
  { id: 242, keyword: "rumah tak dapat disewa melaka", language: "ms", category: "problem-aware-empty", searchVolume: 40, kd: 8, intent: "frustration", priority: 1, status: "pending" },

  // MALAY - Solution-Aware
  { id: 249, keyword: "pelaburan kondominium melaka untung ke", language: "ms", category: "solution-aware", searchVolume: 55, kd: 12, intent: "profit-analysis", priority: 1, status: "pending" },
  { id: 250, keyword: "macam mana nak dapat duit dari rumah sewa", language: "ms", category: "solution-aware", searchVolume: 55, kd: 12, intent: "income-strategy", priority: 1, status: "pending" },

  // Add more keywords as needed from the full research
];

// ============ POST GENERATION FUNCTIONS ============

/**
 * Generate content post from keyword
 */
export function generatePostFromKeyword(keyword: Keyword): ContentPost {
  const stage = CATEGORY_STAGE_MAP[keyword.category];
  const slug = generateSlug(keyword.keyword, keyword.language);

  return {
    id: `post-${Date.now()}-${keyword.id}`,
    slug,
    title: generateTitle(keyword.keyword, keyword.language),
    language: keyword.language,
    type: getPostType(keyword.category),
    category: keyword.category,
    targetKeyword: keyword.keyword,
    secondaryKeywords: findRelatedKeywords(keyword),
    stage,
    status: "draft",
    targetCondo: keyword.targetCondo,
    assignedDate: new Date(),
  };
}

/**
 * Generate URL-friendly slug from keyword
 */
function generateSlug(keyword: string, language: string): string {
  const langPrefix = language === "en" ? "en" : language === "zh" ? "zh" : "ms";

  // Remove special characters, lowercase, replace spaces with hyphens
  const slug = keyword
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();

  return `/${langPrefix}/blog/${slug}/`;
}

/**
 * Generate SEO-optimized title from keyword
 */
function generateTitle(keyword: string, language: string): string {
  // For blog posts, we often want to add the current year or make it more engaging
  const year = new Date().getFullYear();

  if (language === "en") {
    if (keyword.includes("?")) {
      return keyword.replace("?", `: Complete Guide (${year})`);
    }
    return `${keyword} (${year})`;
  }

  if (language === "zh") {
    return `${keyword} (${year}年完整指南)`;
  }

  if (language === "ms") {
    return `${keyword} (${year})`;
  }

  return keyword;
}

/**
 * Determine post type based on category
 */
function getPostType(category: KeywordCategory): ContentPost["type"] {
  if (category === "condo-specific") return "landing";
  if (category === "decision-stage") return "comparison";
  if (category === "setup-operational") return "guide";
  return "blog";
}

/**
 * Find related keywords for secondary targeting
 */
function findRelatedKeywords(keyword: Keyword): string[] {
  return KEYWORD_DATABASE
    .filter(k =>
      k.id !== keyword.id &&
      k.language === keyword.language &&
      (k.category === keyword.category || k.intent === keyword.intent)
    )
    .slice(0, 5)
    .map(k => k.keyword);
}

// ============ ASSIGNMENT FUNCTIONS ============

/**
 * Assign pending keywords to posts for a specific language
 */
export function assignKeywordsForMonth(language: "en" | "zh" | "ms", month: number, year: number): ContentPost[] {
  const posts: ContentPost[] = [];

  // Get pending keywords for this language, sorted by priority
  const pendingKeywords = KEYWORD_DATABASE
    .filter(k => k.language === language && k.status === "pending")
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 60); // 60 posts per language per month

  // Generate posts from keywords
  for (const keyword of pendingKeywords) {
    const post = generatePostFromKeyword(keyword);
    posts.push(post);

    // Mark keyword as assigned
    keyword.status = "assigned";
    keyword.assignedPostId = post.id;
  }

  return posts;
}

/**
 * Get condo-specific keywords for "Switch to Us" pages
 */
export function getCondoSwitchKeywords(): Keyword[] {
  return KEYWORD_DATABASE.filter(k =>
    k.category === "condo-specific" &&
    k.keyword.toLowerCase().includes("switch")
  );
}

/**
 * Get Parkland Avenue specific keywords
 */
export function getParklandKeywords(): Keyword[] {
  return KEYWORD_DATABASE.filter(k =>
    k.targetCondo?.toLowerCase().includes("parkland") ||
    k.keyword.toLowerCase().includes("parkland")
  );
}

// ============ ANALYTICS FUNCTIONS ============

/**
 * Get keyword assignment statistics
 */
export function getKeywordStats() {
  const totalByLanguage = {
    en: KEYWORD_DATABASE.filter(k => k.language === "en").length,
    zh: KEYWORD_DATABASE.filter(k => k.language === "zh").length,
    ms: KEYWORD_DATABASE.filter(k => k.language === "ms").length,
  };

  const statusByLanguage = {
    en: { pending: 0, assigned: 0, published: 0 },
    zh: { pending: 0, assigned: 0, published: 0 },
    ms: { pending: 0, assigned: 0, published: 0 },
  };

  for (const keyword of KEYWORD_DATABASE) {
    statusByLanguage[keyword.language][keyword.status]++;
  }

  return { totalByLanguage, statusByLanguage };
}

/**
 * Find keyword by search term
 */
export function findKeyword(searchTerm: string): Keyword | undefined {
  return KEYWORD_DATABASE.find(k =>
    k.keyword.toLowerCase() === searchTerm.toLowerCase()
  );
}

/**
 * Get keywords by category for a language
 */
export function getKeywordsByCategory(language: "en" | "zh" | "ms", category: KeywordCategory): Keyword[] {
  return KEYWORD_DATABASE.filter(k =>
    k.language === language && k.category === category
  );
}

// ============ MONTHLY SCHEDULE GENERATOR ============

export interface MonthlySchedule {
  month: number;
  year: number;
  language: "en" | "zh" | "ms";
  posts: ContentPost[];
  keywordsAssigned: number;
  categoriesCovered: KeywordCategory[];
}

/**
 * Generate full monthly content schedule for all languages
 */
export function generateMonthlySchedule(month: number, year: number): MonthlySchedule[] {
  const schedules: MonthlySchedule[] = [];

  for (const language of ["en", "zh", "ms"] as const) {
    const posts = assignKeywordsForMonth(language, month, year);
    const categoriesCovered = [...new Set(posts.map(p => p.category))];

    schedules.push({
      month,
      year,
      language,
      posts,
      keywordsAssigned: posts.length,
      categoriesCovered,
    });
  }

  return schedules;
}

// ============ EXPORT FOR USE IN CONTENT GENERATION ============

export default {
  KEYWORD_DATABASE,
  generatePostFromKeyword,
  assignKeywordsForMonth,
  getCondoSwitchKeywords,
  getParklandKeywords,
  getKeywordStats,
  findKeyword,
  getKeywordsByCategory,
  generateMonthlySchedule,
};
