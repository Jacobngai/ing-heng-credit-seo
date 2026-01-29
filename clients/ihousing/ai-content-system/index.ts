/**
 * AI Content Generation System - Main Entry Point
 *
 * This file ties together all components for easy usage
 */

// ============ EXPORTS FROM ALL MODULES ============

export * from "./keyword-to-post-mapper";
export * from "./templates/content-templates";
export * from "./prompts/ai-prompt-library";
export * from "./scheduler/publishing-scheduler";

// ============ CONVENIENCE FUNCTIONS ============

import {
  assignKeywordsForMonth,
  generatePostFromKeyword,
  getKeywordStats,
  type Keyword,
  type ContentPost,
} from "./keyword-to-post-mapper";

import {
  getTemplate,
  type ContentTemplate,
} from "./templates/content-templates";

import {
  generateContentPrompt,
  type AIPrompt,
} from "./prompts/ai-prompt-library";

import {
  generateMonthlySchedule,
  queueContentForGeneration,
  prioritizePosts,
  runQualityChecks,
  prepareDeploymentBundles,
  generateDeploymentScript,
  type MonthlySchedule,
  type PublishTask,
  type QualityCheck,
  type DeploymentBundle,
} from "./scheduler/publishing-scheduler";

// ============ ONE-FUNCTION WORKFLOW ============

/**
 * Complete workflow: Generate scheduled content for a month
 */
export async function generateMonthContent(
  month: number,
  year: number,
  options: {
    languages?: ("en" | "zh" | "ms")[];
    skipQualityCheck?: boolean;
    dryRun?: boolean;
  } = {}
): Promise<{
    schedule: MonthlySchedule;
    posts: ContentPost[];
    qualityChecks: QualityCheck[];
    deploymentBundles: DeploymentBundle[];
  }> {
  const {
    languages = ["en", "zh", "ms"],
    skipQualityCheck = false,
    dryRun = false,
  } = options;

  console.log(`\n🚀 Generating content for ${year}-${month}...\n`);

  // Step 1: Generate schedule
  console.log("📅 Step 1: Generating monthly schedule...");
  const schedule = generateMonthlySchedule(month, year);
  console.log(`   Total posts: ${schedule.totalPosts}`);
  console.log(`   EN: ${schedule.byLanguage.en}, ZH: ${schedule.byLanguage.zh}, MS: ${schedule.byLanguage.ms}\n`);

  // Step 2: Assign keywords to posts
  console.log("🔑 Step 2: Assigning keywords to posts...");
  const allPosts: ContentPost[] = [];

  for (const lang of languages) {
    const langPosts = assignKeywordsForMonth(lang, month, year);
    allPosts.push(...langPosts);
    console.log(`   ${lang.toUpperCase()}: ${langPosts.length} posts assigned`);
  }
  console.log();

  // Step 3: Prioritize by strategic value
  console.log("⭐ Step 3: Prioritizing posts by strategic value...");
  const prioritizedPosts = prioritizePosts(allPosts);
  console.log(`   Top priority: ${prioritizedPosts[0]?.targetKeyword}\n`);

  // Step 4: Generate content for each post
  console.log("✍️  Step 4: Generating content (this would call AI)...");
  const generatedPosts: ContentPost[] = [];

  for (const post of prioritizedPosts) {
    // In real implementation, this would call AI
    // For now, just mark as ready
    const generatedPost = {
      ...post,
      status: "draft" as const,
    };
    generatedPosts.push(generatedPost);

    if (dryRun) {
      console.log(`   [DRY RUN] Would generate: "${post.title}"`);
    }
  }
  console.log(`   Generated: ${generatedPosts.length} posts\n`);

  // Step 5: Quality checks
  let qualityChecks: QualityCheck[] = [];
  if (!skipQualityCheck) {
    console.log("✅ Step 5: Running quality checks...");
    qualityChecks = generatedPosts.map(post => runQualityChecks(post));

    const passed = qualityChecks.filter(q => q.approved).length;
    const failed = qualityChecks.length - passed;
    console.log(`   Passed: ${passed}, Failed: ${failed}\n`);

    if (failed > 0) {
      console.log("   Issues found:");
      for (const check of qualityChecks.filter(q => !q.approved)) {
        console.log(`   - ${check.postId}: ${check.issues.join(", ")}`);
      }
      console.log();
    }
  }

  // Step 6: Prepare deployment bundles
  console.log("📦 Step 6: Preparing deployment bundles...");
  const deploymentBundles = prepareDeploymentBundles(generatedPosts, month, year);

  for (const bundle of deploymentBundles) {
    console.log(`   ${bundle.language.toUpperCase()}: ${bundle.posts.length} posts`);
    console.log(`   Deploy date: ${bundle.deploymentDate.toISOString().split("T")[0]}`);
  }
  console.log();

  console.log("✨ Content generation complete!\n");

  return {
    schedule,
    posts: generatedPosts,
    qualityChecks,
    deploymentBundles,
  };
}

/**
 * Generate a single blog post from keyword
 */
export async function generateSinglePost(
  keyword: string,
  language: "en" | "zh" | "ms"
): Promise<{
  post: ContentPost;
  template: ContentTemplate;
  prompt: string;
}> {
  // Find keyword in database
  const keywordData = findKeyword(keyword);
  if (!keywordData) {
    throw new Error(`Keyword not found: ${keyword}`);
  }

  // Generate post from keyword
  const post = generatePostFromKeyword(keywordData);

  // Get template
  const template = getTemplate(post.category, language);
  if (!template) {
    throw new Error(`No template found for category: ${post.category}`);
  }

  // Generate AI prompt
  const prompt = generateContentPrompt(post, template);

  return { post, template, prompt };
}

/**
 * Quick stats for the system
 */
export function getSystemStats() {
  const stats = getKeywordStats();

  return {
    keywords: {
      total: stats.totalByLanguage.en + stats.totalByLanguage.zh + stats.totalByLanguage.ms,
      en: stats.totalByLanguage.en,
      zh: stats.totalByLanguage.zh,
      ms: stats.totalByLanguage.ms,
    },
    status: {
      pending: stats.statusByLanguage.en.pending + stats.statusByLanguage.zh.pending + stats.statusByLanguage.ms.pending,
      assigned: stats.statusByLanguage.en.assigned + stats.statusByLanguage.zh.assigned + stats.statusByLanguage.ms.assigned,
      published: stats.statusByLanguage.en.published + stats.statusByLanguage.zh.published + stats.statusByLanguage.ms.published,
    },
    production: {
      monthlyTarget: 180, // 60 per language
      dailyTarget: 6, // ~3 per day × 2 batches
      languages: 3,
    },
  };
}

// ============ CLI HELPERS ============

/**
 * Print system status to console
 */
export function printSystemStatus() {
  const stats = getSystemStats();

  console.log("\n📊 iHousing AI Content System Status\n");
  console.log("Keywords:");
  console.log(`  Total: ${stats.keywords.total}`);
  console.log(`  EN: ${stats.keywords.en} | ZH: ${stats.keywords.zh} | MS: ${stats.keywords.ms}`);
  console.log("\nKeyword Status:");
  console.log(`  Pending: ${stats.status.pending}`);
  console.log(`  Assigned: ${stats.status.assigned}`);
  console.log(`  Published: ${stats.status.published}`);
  console.log("\nProduction Targets:");
  console.log(`  Monthly: ${stats.production.monthlyTarget} posts`);
  console.log(`  Daily: ${stats.production.dailyTarget} posts`);
  console.log(`  Languages: ${stats.production.languages}\n`);
}

/**
 * Print monthly schedule to console
 */
export function printMonthlySchedule(schedule: MonthlySchedule) {
  console.log(`\n📅 Content Schedule: ${schedule.year}-${schedule.month}\n`);
  console.log(`Total Posts: ${schedule.totalPosts}`);
  console.log(`EN: ${schedule.byLanguage.en} | ZH: ${schedule.byLanguage.zh} | MS: ${schedule.byLanguage.ms}\n`);

  console.log("Weekly Breakdown:");
  for (const week of schedule.weeklyBreakdown) {
    console.log(`\nWeek ${week.week}: ${week.focus}`);
    console.log(`  ${week.dates.start.toISOString().split("T")[0]} - ${week.dates.end.toISOString().split("T")[0]}`);
    console.log(`  Posts: ${week.posts.total} (EN: ${week.posts.en}, ZH: ${week.posts.zh}, MS: ${week.posts.ms})`);
  }
  console.log();
}

// ============ DEFAULT EXPORT ============

export default {
  // Main workflow
  generateMonthContent,
  generateSinglePost,

  // Stats & info
  getSystemStats,
  printSystemStatus,
  printMonthlySchedule,

  // Individual components (re-exported)
  generateMonthlySchedule,
  assignKeywordsForMonth,
  getTemplate,
  generateContentPrompt,
  runQualityChecks,
  prepareDeploymentBundles,
  generateDeploymentScript,
};
