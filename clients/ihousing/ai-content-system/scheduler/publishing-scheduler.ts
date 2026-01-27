/**
 * PUBLISHING SCHEDULER
 * Automates the scheduling of 180 posts/month across 3 languages
 *
 * Production: 60 EN + 60 ZH + 60 MS per month
 */

import type { ContentPost, KeywordCategory } from "../keyword-to-post-mapper";

// ============ SCHEDULING DATA STRUCTURES ============

export interface MonthlySchedule {
  month: number;
  year: number;
  totalPosts: number;
  byLanguage: LanguageSchedule;
  weeklyBreakdown: WeekSchedule[];
  calendar: PostDate[];
}

export interface LanguageSchedule {
  en: number;
  zh: number;
  ms: number;
}

export interface WeekSchedule {
  week: number;
  dates: { start: Date; end: Date };
  posts: {
    en: number;
    zh: number;
    ms: number;
    total: number;
  };
  focus: string; // Theme for the week
}

export interface PostDate {
  date: Date;
  language: "en" | "zh" | "ms";
  category: KeywordCategory;
  postId: string;
  status: "scheduled" | "published" | "skipped";
}

// ============ MONTHLY CONTENT ALLOCATION ============

/**
 * Generate monthly content schedule
 * Goal: 60 posts per language per month = 2 posts/day (excluding Sundays)
 */
export function generateMonthlySchedule(month: number, year: number): MonthlySchedule {
  const posts: PostDate[] = [];
  const weeks: WeekSchedule[] = [];

  // Get working days (exclude Sundays)
  const workingDays = getWorkingDays(month, year);
  const totalDays = workingDays.length;

  // Calculate posts per day
  // 60 posts / ~22 working days = ~2.7 posts/day
  // Round to 3 posts per day = 66 posts per language
  const postsPerDayPerLanguage = 3;
  const totalPosts = totalDays * postsPerDayPerLanguage * 3; // 3 languages

  // Define weekly themes
  const weeklyThemes = [
    "Problem-Aware: Empty Property Pain Points",
    "Problem-Aware: Tenant Nightmares",
    "Solution-Aware: Airbnb Education",
    "Financial: ROI & Earnings Potential",
  ];

  // Generate daily schedule
  let dayIndex = 0;
  let weekNumber = 1;

  for (let day = 1; day <= totalDays; day++) {
    const currentDate = workingDays[dayIndex];

    // Assign posts for each language on this day
    for (const lang of ["en", "zh", "ms"] as const) {
      for (let i = 0; i < postsPerDayPerLanguage; i++) {
        const category = getCategoryForDay(day, i, weekNumber);
        posts.push({
          date: new Date(currentDate),
          language: lang,
          category,
          postId: `scheduled-${year}-${month}-${day}-${lang}-${i}`,
          status: "scheduled",
        });
      }
    }

    dayIndex++;

    // Check if new week starts
    if (currentDate.getDay() === 6 || day === totalDays) { // Saturday or last day
      weeks.push({
        week: weekNumber,
        dates: {
          start: workingDays[dayIndex - (dayIndex > 0 ? Math.min(dayIndex, 7) : dayIndex)],
          end: currentDate,
        },
        posts: {
          en: 7 * postsPerDayPerLanguage,
          zh: 7 * postsPerDayPerLanguage,
          ms: 7 * postsPerDayPerLanguage,
          total: 21 * postsPerDayPerLanguage,
        },
        focus: weeklyThemes[(weekNumber - 1) % weeklyThemes.length],
      });
      weekNumber++;
    }
  }

  return {
    month,
    year,
    totalPosts,
    byLanguage: {
      en: totalDays * postsPerDayPerLanguage,
      zh: totalDays * postsPerDayPerLanguage,
      ms: totalDays * postsPerDayPerLanguage,
    },
    weeklyBreakdown: weeks,
    calendar: posts,
  };
}

/**
 * Get working days (Monday-Saturday) for a month
 */
function getWorkingDays(month: number, year: number): Date[] {
  const days: Date[] = [];
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  for (let d = new Date(firstDay); d <= lastDay; d.setDate(d.getDate() + 1)) {
    // Exclude Sundays (0 = Sunday)
    if (d.getDay() !== 0) {
      days.push(new Date(d));
    }
  }

  return days;
}

/**
 * Determine content category based on day and post index
 */
function getCategoryForDay(day: number, postIndex: number, weekNumber: number): KeywordCategory {
  // Rotate through categories to ensure variety
  const categories: KeywordCategory[] = [
    "problem-aware-empty",
    "problem-aware-tenant",
    "solution-aware",
    "product-aware",
    "decision-stage",
    "financial-roi",
    "condo-specific",
    "furnishing-buying",
    "setup-operational",
    "cost-budget",
  ];

  // Week 1: Problem-aware focus
  if (weekNumber === 1) {
    return postIndex % 2 === 0 ? "problem-aware-empty" : "problem-aware-tenant";
  }

  // Week 2: Solution-aware + financial
  if (weekNumber === 2) {
    return postIndex % 2 === 0 ? "solution-aware" : "financial-roi";
  }

  // Week 3: Product-aware + decision
  if (weekNumber === 3) {
    return postIndex % 2 === 0 ? "product-aware" : "decision-stage";
  }

  // Week 4+: Mix of all categories
  const categoryIndex = (day + postIndex) % categories.length;
  return categories[categoryIndex];
}

// ============ PUBLISHING WORKFLOW ============

export interface PublishTask {
  id: string;
  postId: string;
  language: "en" | "zh" | "ms";
  targetDate: Date;
  status: "pending" | "generating" | "ready" | "published" | "failed";
  content?: {
    title: string;
    slug: string;
    content: string;
    metaDescription: string;
  };
  error?: string;
}

/**
 * Queue content for generation
 */
export function queueContentForGeneration(schedule: MonthlySchedule): PublishTask[] {
  const tasks: PublishTask[] = [];

  for (const postDate of schedule.calendar) {
    tasks.push({
      id: `task-${postDate.postId}`,
      postId: postDate.postId,
      language: postDate.language,
      targetDate: postDate.date,
      status: "pending",
    });
  }

  // Sort by date
  tasks.sort((a, b) => a.targetDate.getTime() - b.targetDate.getTime());

  return tasks;
}

/**
 * Get posts due today
 */
export function getPostsDueToday(tasks: PublishTask[]): PublishTask[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tasks.filter(task => {
    const taskDate = new Date(task.targetDate);
    taskDate.setHours(0, 0, 0, 0);
    return taskDate >= today && taskDate < tomorrow;
  });
}

/**
 * Get posts due this week
 */
export function getPostsDueThisWeek(tasks: PublishTask[]): PublishTask[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(today);
  endOfWeek.setDate(endOfWeek.getDate() + (7 - today.getDay())); // Next Saturday

  return tasks.filter(task => {
    const taskDate = new Date(task.targetDate);
    taskDate.setHours(0, 0, 0, 0);
    return taskDate >= today && taskDate <= endOfWeek;
  });
}

// ============ CONTENT PRIORITIZATION ============

/**
 * Prioritize content based on strategic value
 */
export function prioritizePosts(posts: ContentPost[]): ContentPost[] {
  const priorityScore = (post: ContentPost): number => {
    let score = 0;

    // Category priority
    const categoryPriority: Record<KeywordCategory, number> = {
      "problem-aware-empty": 10, // High pain = high conversion
      "problem-aware-tenant": 10,
      "decision-stage": 9,
      "condo-specific": 8, // Zero competition
      "solution-aware": 7,
      "financial-roi": 7,
      "product-aware": 6,
      "furnishing-buying": 5,
      "setup-operational": 5,
      "cost-budget": 5,
      "legal-regulatory": 4,
      "location-specific": 4,
      "operational": 3,
      "seasonal": 3,
    };

    score += categoryPriority[post.category] || 0;

    // Parkland Avenue gets highest priority
    if (post.targetCondo?.toLowerCase().includes("parkland")) {
      score += 5;
    }

    // Condo-specific pages
    if (post.type === "landing") {
      score += 3;
    }

    return score;
  };

  return [...posts].sort((a, b) => priorityScore(b) - priorityScore(a));
}

// ============ BATCH PUBLISHING ============

export interface BatchPublishConfig {
  batchSize: number; // Posts per batch
  intervalHours: number; // Hours between batches
  languages: ("en" | "zh" | "ms")[];
  categories?: KeywordCategory[]; // Filter by category
}

/**
 * Generate batch publishing schedule
 */
export function generateBatchSchedule(
  tasks: PublishTask[],
  config: BatchPublishConfig
): PublishTask[][] {
  const batches: PublishTask[][] = [];

  // Filter by languages if specified
  let filteredTasks = tasks;
  if (config.languages.length > 0) {
    filteredTasks = tasks.filter(t => config.languages.includes(t.language));
  }

  // Filter by categories if specified
  if (config.categories && config.categories.length > 0) {
    filteredTasks = filteredTasks.filter(t =>
      config.categories!.includes(t.category)
    );
  }

  // Sort by target date
  filteredTasks.sort((a, b) => a.targetDate.getTime() - b.targetDate.getTime());

  // Create batches
  for (let i = 0; i < filteredTasks.length; i += config.batchSize) {
    batches.push(filteredTasks.slice(i, i + config.batchSize));
  }

  return batches;
}

// ============ PUBLISHING STATUS TRACKING ============

export interface PublishingStats {
  total: number;
  pending: number;
  generating: number;
  ready: number;
  published: number;
  failed: number;
  byLanguage: {
    en: { [key: string]: number };
    zh: { [key: string]: number };
    ms: { [key: string]: number };
  };
}

/**
 * Calculate publishing statistics
 */
export function calculatePublishingStats(tasks: PublishTask[]): PublishingStats {
  const stats: PublishingStats = {
    total: tasks.length,
    pending: 0,
    generating: 0,
    ready: 0,
    published: 0,
    failed: 0,
    byLanguage: {
      en: { total: 0, pending: 0, generating: 0, ready: 0, published: 0, failed: 0 },
      zh: { total: 0, pending: 0, generating: 0, ready: 0, published: 0, failed: 0 },
      ms: { total: 0, pending: 0, generating: 0, ready: 0, published: 0, failed: 0 },
    },
  };

  for (const task of tasks) {
    // Overall stats
    stats[task.status]++;

    // Language stats
    stats.byLanguage[task.language].total++;
    stats.byLanguage[task.language][task.status]++;
  }

  return stats;
}

// ============ DEPLOYMENT PREPARATION ============

/**
 * Prepare content bundle for deployment
 * Groups posts by language for separate Vercel deployments
 */
export interface DeploymentBundle {
  language: "en" | "zh" | "ms";
  posts: ContentPost[];
  deploymentDate: Date;
  environmentVariables: Record<string, string>;
}

export function prepareDeploymentBundles(
  posts: ContentPost[],
  month: number,
  year: number
): DeploymentBundle[] {
  const bundles: DeploymentBundle[] = [];

  // Environment variables for each language
  const envVars = {
    en: {
      PUBLIC_DEFAULT_LOCALE: "en",
      DEFAULT_LOCALE: "en",
      PUBLIC_SITE_URL: "https://www.ihousing-temp.vercel.app",
      SITE_URL: "https://www.ihousing-temp.vercel.app",
    },
    zh: {
      PUBLIC_DEFAULT_LOCALE: "zh",
      DEFAULT_LOCALE: "zh",
      PUBLIC_SITE_URL: "https://zh.ihousing-temp.vercel.app",
      SITE_URL: "https://zh.ihousing-temp.vercel.app",
    },
    ms: {
      PUBLIC_DEFAULT_LOCALE: "ms",
      DEFAULT_LOCALE: "ms",
      PUBLIC_SITE_URL: "https://ms.ihousing-temp.vercel.app",
      SITE_URL: "https://ms.ihousing-temp.vercel.app",
    },
  };

  // Group posts by language
  for (const lang of ["en", "zh", "ms"] as const) {
    const langPosts = posts.filter(p => p.language === lang);

    bundles.push({
      language: lang,
      posts: langPosts,
      deploymentDate: new Date(year, month, 1), // Deploy on 1st of month
      environmentVariables: envVars[lang],
    });
  }

  return bundles;
}

/**
 * Generate deployment script for a language
 */
export function generateDeploymentScript(bundle: DeploymentBundle): string {
  const { language, environmentVariables } = bundle;
  const projectId = getProjectId(language);
  const orgId = "team_ZRACGuujUQkB6IRfNtWpe0T6";

  return `#!/bin/bash
# Deployment script for iHousing ${language.toUpperCase()} - ${bundle.deploymentDate.toISOString().split("T")[0]}

# Set Vercel project
echo '{"projectId":"${projectId}","orgId":"${orgId}"}' > clients/ihousing/website/.vercel/project.json

# Deploy to production
cd clients/ihousing/website
vercel --prod --yes \\
  --env PUBLIC_DEFAULT_LOCALE=${environmentVariables.PUBLIC_DEFAULT_LOCALE} \\
  --env DEFAULT_LOCALE=${environmentVariables.DEFAULT_LOCALE} \\
  --env PUBLIC_SITE_URL=${environmentVariables.PUBLIC_SITE_URL} \\
  --env SITE_URL=${environmentVariables.SITE_URL}

echo "Deployment complete for ${language.toUpperCase()}!"
`;
}

function getProjectId(language: string): string {
  const projectIds = {
    en: "prj_FyozN2vmJ0OwPbgH3GhzOwW4jXnw",
    zh: "prj_z3Fq1Al7iR5MTrsZEVct5Zj2JZl7",
    ms: "prj_eKJtQcTcOd69sER92xq8NeS1SD4y",
  };
  return projectIds[language as keyof typeof projectIds] || "";
}

// ============ QUALITY CONTROL CHECKLIST ============

export interface QualityCheck {
  postId: string;
  checks: {
    seoPassed: boolean;
    contentPassed: boolean;
    brandPassed: boolean;
    ctaPassed: boolean;
  };
  issues: string[];
  approved: boolean;
}

/**
 * Run quality checks on generated content
 */
export function runQualityChecks(post: ContentPost): QualityCheck {
  const issues: string[] = [];
  const checks = {
    seoPassed: false,
    contentPassed: false,
    brandPassed: false,
    ctaPassed: false,
  };

  // SEO checks
  const hasKeywordInTitle = post.title.toLowerCase().includes(post.targetKeyword.toLowerCase().split(" ")[0]);
  const hasMetaDescription = post.metaDescription && post.metaDescription.length >= 150;
  checks.seoPassed = hasKeywordInTitle && hasMetaDescription;

  if (!hasKeywordInTitle) issues.push("Title doesn't include target keyword");
  if (!hasMetaDescription) issues.push("Meta description missing or too short");

  // Content checks
  const hasEnoughContent = post.content ? post.content.length >= 800 : false;
  const hasHeadings = post.content ? post.content.includes("##") : false;
  checks.contentPassed = hasEnoughContent && hasHeadings;

  if (!hasEnoughContent) issues.push("Content too short (<800 words)");
  if (!hasHeadings) issues.push("Missing H2 headings");

  // Brand checks
  const mentionsIHousing = post.content ? post.content.toLowerCase().includes("ihousing") : false;
  const hasDataPoints = post.content ? (post.content.match(/RM\d/g) || []).length >= 3 : false;
  checks.brandPassed = mentionsIHousing && hasDataPoints;

  if (!mentionsIHousing) issues.push("Doesn't mention iHousing");
  if (!hasDataPoints) issues.push("Missing specific RM amounts");

  // CTA checks
  const hasWhatsAppCTA = post.content ? post.content.toLowerCase().includes("whatsapp") : false;
  const hasCTA = post.content ? post.content.includes("WhatsApp us") || post.content.includes("Enter your phone") : false;
  checks.ctaPassed = hasWhatsAppCTA || hasCTA;

  if (!checks.ctaPassed) issues.push("Missing WhatsApp CTA");

  // Special check for Parkland vs other condos
  if (post.targetCondo && !post.targetCondo.toLowerCase().includes("parkland")) {
    const hasFlatFeeMention = post.content ? post.content.toLowerCase().includes("flat fee") : false;
    if (hasFlatFeeMention) {
      issues.push("WARNING: Flat fee mentioned for non-Parkland condo. Should use 'WhatsApp for custom pricing'");
      checks.brandPassed = false;
    }
  }

  return {
    postId: post.id,
    checks,
    issues,
    approved: issues.length === 0,
  };
}

// ============ GSC FEEDBACK LOOP ============

/**
 * Track content performance in GSC and adjust strategy
 */
export interface GSCFeedback {
  postId: string;
  url: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
  date: string;
}

export interface ContentAdjustment {
  postId: string;
  action: "update" | "rewrite" | "delete" | "keep";
  reason: string;
}

/**
 * Analyze GSC data and suggest content adjustments
 */
export function analyzeGSCFeedback(
  feedback: GSCFeedback[],
  thresholdImpressions: number = 100,
  thresholdCTR: number = 0.02
): ContentAdjustment[] {
  const adjustments: ContentAdjustment[] = [];

  for (const data of feedback) {
    // Low impressions: might need better SEO
    if (data.impressions < thresholdImpressions && data.position > 20) {
      adjustments.push({
        postId: data.postId,
        action: "update",
        reason: "Low impressions (${data.impressions}) and poor ranking (position ${data.position}). Consider: 1) Improve keyword targeting, 2) Add internal links, 3) Enhance meta description.",
      });
    }

    // Good impressions but low CTR: title/description issue
    if (data.impressions >= thresholdImpressions && data.ctr < thresholdCTR) {
      adjustments.push({
        postId: data.postId,
        action: "update",
        reason: "Good impressions (${data.impressions}) but low CTR (${(data.ctr * 100).toFixed(1)}%). Consider: 1) Rewrite title for more clicks, 2) Improve meta description, 3) Add compelling numbers.",
      });
    }

    // Good position but low clicks: keyword mismatch?
    if (data.position <= 10 && data.clicks < 10) {
      adjustments.push({
        postId: data.postId,
        action: "update",
        reason: "Ranking well (position ${data.position}) but low clicks (${data.clicks}). Consider: 1) Check if keyword matches search intent, 2) Add more compelling CTA.",
      });
    }

    // Excellent performance: create similar content
    if (data.clicks >= 50 && data.ctr >= 0.05) {
      adjustments.push({
        postId: data.postId,
        action: "keep",
        reason: "Excellent performance! ${data.clicks} clicks at ${(data.ctr * 100).toFixed(1)}% CTR. Consider creating: 1) Follow-up article, 2) Condo-specific variation, 3) Language translation.",
      });
    }
  }

  return adjustments;
}

// ============ EXPORTS ============

export default {
  generateMonthlySchedule,
  queueContentForGeneration,
  getPostsDueToday,
  getPostsDueThisWeek,
  prioritizePosts,
  generateBatchSchedule,
  calculatePublishingStats,
  prepareDeploymentBundles,
  generateDeploymentScript,
  runQualityChecks,
  analyzeGSCFeedback,
};
