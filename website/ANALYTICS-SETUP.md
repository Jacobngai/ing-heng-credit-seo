# Google Analytics 4 Setup Guide for Ing Heng Credit & Leasing

## Overview
This comprehensive guide walks you through setting up Google Analytics 4 (GA4) for the Ing Heng Credit website, including event tracking, conversion goals, and multilingual analytics.

**Website:** https://ingheng-credit.vercel.app
**Languages:** English (EN), Mandarin (ZH), Bahasa Malaysia (MS)
**Business Type:** Equipment Financing Services

---

## Table of Contents
1. [Initial GA4 Setup](#1-initial-ga4-setup)
2. [Property Configuration](#2-property-configuration)
3. [Data Streams](#3-data-streams)
4. [Event Tracking](#4-event-tracking)
5. [Conversion Goals](#5-conversion-goals)
6. [Custom Dimensions](#6-custom-dimensions)
7. [Audiences](#7-audiences)
8. [Reports Configuration](#8-reports-configuration)
9. [Integration with Website](#9-integration-with-website)
10. [Testing & Verification](#10-testing--verification)
11. [Advanced Features](#11-advanced-features)
12. [Maintenance & Optimization](#12-maintenance--optimization)

---

## 1. Initial GA4 Setup

### Step 1.1: Create Google Account
**Use business email for consistency:**
- Primary: analytics@inghengcredit.com
- Or: enquiry@inghengcredit.com

### Step 1.2: Access Google Analytics
1. Go to: https://analytics.google.com
2. Sign in with Google account
3. Click "Start measuring" or "Create Account"

### Step 1.3: Create Account
1. **Account Name:** Ing Heng Credit & Leasing
2. **Account Data Sharing Settings:**
   - ✅ Google products & services
   - ✅ Benchmarking
   - ✅ Technical support
   - ⚠ Account specialists (optional)

3. Click "Next"

### Step 1.4: Create Property
1. **Property Name:** Ing Heng Credit Website
2. **Reporting Time Zone:** (GMT+08:00) Kuala Lumpur
3. **Currency:** Malaysian Ringgit (MYR)
4. Click "Next"

### Step 1.5: Business Information
1. **Industry:** Finance & Insurance
2. **Business Size:** Small (1-10 employees) - adjust as needed
3. **Business Objectives:** Select all that apply:
   - ✅ Generate leads
   - ✅ Raise brand awareness
   - ✅ Examine user behavior
   - ✅ Get baseline reports

4. Click "Create" and accept Terms of Service

---

## 2. Property Configuration

### Step 2.1: Data Stream Setup
1. Select platform: **Web**
2. **Website URL:** https://ingheng-credit.vercel.app
3. **Stream Name:** Ing Heng Credit Production Website
4. Click "Create stream"

### Step 2.2: Get Measurement ID
- You'll see a Measurement ID like: `G-XXXXXXXXXX`
- **Copy this ID** - you'll need it for website integration
- Keep this page open for reference

### Step 2.3: Enhanced Measurement
**Location:** Data stream > Enhanced measurement

**Enable these automatic tracking features:**
- ✅ **Page views:** Automatically tracked
- ✅ **Scrolls:** Track 90% scroll depth
- ✅ **Outbound clicks:** Track external link clicks
- ✅ **Site search:** Track internal searches (if applicable)
- ✅ **Video engagement:** Track YouTube video plays
- ✅ **File downloads:** Track PDF, DOC, ZIP downloads
- ⚠ **Form interactions:** May conflict with custom form tracking

**Click "Save"**

### Step 2.4: Data Collection Settings
**Location:** Admin > Data Settings > Data Collection

**Enable:**
- ✅ **Google signals:** For cross-device tracking
- ✅ **User data collection:** For remarketing
- ⚠ Ensure compliance with Malaysian data protection laws

---

## 3. Data Streams

### Step 3.1: Production Stream (Already Created)
- **Stream Name:** Ing Heng Credit Production
- **Stream URL:** https://ingheng-credit.vercel.app
- **Measurement ID:** G-XXXXXXXXXX

### Step 3.2: Development Stream (Optional)
**For testing before production:**
1. Add another data stream
2. **Stream Name:** Ing Heng Credit Development
3. **Stream URL:** https://ing-heng-credit-dev.vercel.app (or localhost)
4. **Measurement ID:** G-YYYYYYYYYY
5. Use conditional loading in code to switch between IDs

**Environment variable setup:**
```env
# Production
PUBLIC_GA_ID=G-XXXXXXXXXX

# Development (optional)
PUBLIC_GA_ID_DEV=G-YYYYYYYYYY
```

---

## 4. Event Tracking

### Step 4.1: Default Events (Automatic)
**Already tracked by GA4:**
- `page_view` - Page views
- `session_start` - Session starts
- `first_visit` - First-time visitors
- `user_engagement` - Engaged sessions
- `scroll` - 90% scroll depth

### Step 4.2: Custom Events (Implemented in GoogleAnalytics.astro)

#### Event: WhatsApp Click
```javascript
gtag('event', 'whatsapp_click', {
  event_category: 'engagement',
  event_label: 'WhatsApp Contact',
  value: 1
});
```

**When:** User clicks WhatsApp button/link
**Value:** 1 (counts as engagement)

---

#### Event: Phone Call Click
```javascript
gtag('event', 'phone_call_click', {
  event_category: 'engagement',
  event_label: 'Phone Call',
  phone_number: '+60175700889',
  value: 1
});
```

**When:** User clicks phone number link
**Value:** 1 (counts as engagement)

---

#### Event: Email Click
```javascript
gtag('event', 'email_click', {
  event_category: 'engagement',
  event_label: 'Email Contact',
  value: 1
});
```

**When:** User clicks email address link
**Value:** 1 (counts as engagement)

---

#### Event: Form Submission
```javascript
gtag('event', 'form_submission', {
  event_category: 'conversion',
  event_label: 'Contact Form',
  value: 10
});
```

**When:** User submits any form
**Value:** 10 (higher value for conversions)

---

#### Event: Equipment View
```javascript
gtag('event', 'equipment_view', {
  event_category: 'engagement',
  event_label: 'excavator',
  equipment_type: 'excavator',
  value: 1
});
```

**When:** User views equipment page
**Value:** 1 (product interest)
**Types:** excavator, lorry, forklift, crane, etc.

---

#### Event: Blog Reading Time
```javascript
// 30 seconds
gtag('event', 'blog_reading_time', {
  event_category: 'engagement',
  event_label: '30_seconds',
  value: 30
});

// 60 seconds
gtag('event', 'blog_reading_time', {
  event_category: 'engagement',
  event_label: '60_seconds',
  value: 60
});

// 120 seconds
gtag('event', 'blog_reading_time', {
  event_category: 'engagement',
  event_label: '120_seconds',
  value: 120
});
```

**When:** User spends time reading blog post
**Value:** Seconds spent (30, 60, 120)

---

#### Event: Scroll Depth
```javascript
gtag('event', 'scroll_depth', {
  event_category: 'engagement',
  event_label: '75_percent',
  value: 75
});
```

**When:** User scrolls 25%, 50%, 75%, 100%
**Value:** Percentage scrolled

---

#### Event: Outbound Link Click
```javascript
gtag('event', 'outbound_link_click', {
  event_category: 'engagement',
  event_label: 'https://example.com',
  value: 1
});
```

**When:** User clicks external link
**Value:** 1 (external engagement)

---

#### Event: Language Change
```javascript
gtag('event', 'language_change', {
  event_category: 'engagement',
  event_label: 'zh',
  value: 1
});
```

**When:** User switches language (EN/ZH/MS)
**Value:** 1 (user preference)

---

### Step 4.3: Verify Events in GA4
1. Go to **Reports** > **Realtime**
2. Click "Event count by Event name"
3. Test website interactions (click WhatsApp, scroll, etc.)
4. Events should appear in real-time (within 30 seconds)

---

## 5. Conversion Goals

### Step 5.1: Mark Events as Conversions
**Location:** Admin > Events > Mark as conversion

**Mark these events as conversions:**
1. ✅ **form_submission** - Primary conversion
2. ✅ **whatsapp_click** - High-intent lead
3. ✅ **phone_call_click** - High-intent lead
4. ✅ **email_click** - Medium-intent lead
5. ⚠ **equipment_view** - Optional (micro-conversion)

### Step 5.2: Assign Conversion Values
**Location:** Admin > Events > Click event > Edit

**Recommended values:**
- **form_submission:** MYR 100 (potential customer)
- **whatsapp_click:** MYR 80 (very likely customer)
- **phone_call_click:** MYR 80 (very likely customer)
- **email_click:** MYR 40 (interested lead)
- **equipment_view:** MYR 10 (browsing)

**Why assign values?**
- Calculate ROI for marketing campaigns
- Prioritize high-value conversions
- Compare performance of different actions

### Step 5.3: Create Custom Conversions (Advanced)

#### Conversion: Qualified Lead
**Create conversion when:**
- User submits form AND views equipment page
- User clicks WhatsApp AND spends 120+ seconds on site

**Setup:**
1. Go to **Admin** > **Conversions**
2. Click "New conversion event"
3. **Event name:** `qualified_lead`
4. Add matching conditions
5. Save

---

## 6. Custom Dimensions

### Step 6.1: Create Custom Dimensions
**Location:** Admin > Custom definitions > Create custom dimension

#### Dimension 1: Language
- **Dimension name:** Language
- **Scope:** Event
- **Description:** Website language (en/zh/ms)
- **Event parameter:** `language`
- Click "Save"

#### Dimension 2: Page Category
- **Dimension name:** Page Category
- **Scope:** Event
- **Description:** Type of page (home/equipment/blog/contact)
- **Event parameter:** `page_category`
- Click "Save"

#### Dimension 3: Equipment Type
- **Dimension name:** Equipment Type
- **Scope:** Event
- **Description:** Type of equipment viewed
- **Event parameter:** `equipment_type`
- Click "Save"

#### Dimension 4: User Persona (Advanced)
- **Dimension name:** User Persona
- **Scope:** User
- **Description:** Identified user type (contractor/logistics/warehouse)
- **User property:** `user_persona`
- Click "Save"

### Step 6.2: Update Tracking Code
**Add custom dimensions to page_view event:**

```javascript
gtag('event', 'page_view', {
  language: 'en', // or 'zh', 'ms'
  page_category: 'equipment', // or 'blog', 'contact', 'home'
  equipment_type: 'excavator', // if applicable
});
```

**This is already implemented in GoogleAnalytics.astro component**

---

## 7. Audiences

### Step 7.1: Create Audiences
**Location:** Admin > Audiences > Create audience

#### Audience 1: Engaged Users
**Conditions:**
- User engaged with site for 10+ seconds OR
- Viewed 2+ pages per session OR
- Triggered conversion event

**Use case:** Remarketing campaigns

---

#### Audience 2: Equipment Interest - Excavator
**Conditions:**
- Event: `equipment_view`
- Event parameter `equipment_type` equals `excavator`
- In last 30 days

**Use case:** Target excavator financing ads

---

#### Audience 3: Equipment Interest - Lorry
**Conditions:**
- Event: `equipment_view`
- Event parameter `equipment_type` equals `lorry`
- In last 30 days

**Use case:** Target lorry financing ads

---

#### Audience 4: Equipment Interest - Forklift
**Conditions:**
- Event: `equipment_view`
- Event parameter `equipment_type` equals `forklift`
- In last 30 days

**Use case:** Target forklift financing ads

---

#### Audience 5: High-Intent Leads
**Conditions:**
- Event: `whatsapp_click` OR `phone_call_click` OR `form_submission`
- Did NOT convert to customer (if tracking enabled)
- In last 7 days

**Use case:** Follow-up campaigns, sales team prioritization

---

#### Audience 6: Blog Readers
**Conditions:**
- Page path contains `/blogs/`
- Session duration > 60 seconds
- In last 30 days

**Use case:** Content marketing, newsletter signups

---

#### Audience 7: Language Preference - Mandarin
**Conditions:**
- Custom dimension `language` equals `zh`
- In last 30 days

**Use case:** Chinese-language campaigns

---

#### Audience 8: Language Preference - Malay
**Conditions:**
- Custom dimension `language` equals `ms`
- In last 30 days

**Use case:** Malay-language campaigns

---

### Step 7.2: Export Audiences (Optional)
- Link GA4 with Google Ads for remarketing
- Export to Google Tag Manager for advanced targeting

---

## 8. Reports Configuration

### Step 8.1: Standard Reports
**Location:** Reports (left sidebar)

**Default reports available:**
1. **Realtime:** Current active users and events
2. **Acquisition:** How users find your site
3. **Engagement:** How users interact with content
4. **Monetization:** Revenue tracking (not applicable for this business)
5. **Retention:** User return rates
6. **Demographics:** Age, gender, interests (if Google signals enabled)
7. **Tech:** Device, browser, OS

### Step 8.2: Custom Reports
**Location:** Explore (left sidebar) > Create new exploration

#### Report 1: Language Performance Comparison
**Template:** Free form
**Dimensions:**
- Language (custom dimension)
- Page path

**Metrics:**
- Sessions
- Engaged sessions
- Conversions
- Conversion rate

**Use:** Compare EN/ZH/MS performance

---

#### Report 2: Equipment Interest Analysis
**Template:** Funnel exploration
**Steps:**
1. Page view (any page)
2. Equipment page view
3. WhatsApp/phone/form conversion

**Breakdown by:** Equipment type
**Use:** Identify drop-off points in conversion funnel

---

#### Report 3: Conversion Path Analysis
**Template:** Path exploration
**Starting point:** Landing page
**Ending point:** Conversion event
**Nodes:** Page views, events
**Use:** Understand user journey to conversion

---

#### Report 4: Blog Performance
**Template:** Free form
**Dimensions:**
- Page path (filter: contains `/blogs/`)
- Language

**Metrics:**
- Views
- Average engagement time
- Bounce rate
- Conversions

**Use:** Identify best-performing blog content

---

### Step 8.3: Save and Share Reports
1. Click "Save" on custom exploration
2. **Name:** Descriptive title
3. Share with team members
4. Schedule email reports (coming to GA4)

---

## 9. Integration with Website

### Step 9.1: Add Measurement ID to Environment File
1. Create `.env` file in project root:
   ```env
   PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

2. Add `.env` to `.gitignore`:
   ```
   .env
   .env.local
   .env.production
   ```

3. **Security:** Never commit `.env` to version control

### Step 9.2: Verify GoogleAnalytics.astro Component
**File location:** `src/components/GoogleAnalytics.astro`

**Component is already created with:**
- GA4 tracking code
- Custom event tracking
- Production-only loading
- Cookie consent ready

### Step 9.3: Add Component to Layout
**File to edit:** `src/layouts/BaseLayout.astro`

**Add to `<head>` section:**
```astro
---
import GoogleAnalytics from '@/components/GoogleAnalytics.astro';
---

<html lang={lang}>
  <head>
    <GoogleAnalytics />
    <!-- Other head elements -->
  </head>
  <body>
    <!-- Body content -->
  </body>
</html>
```

### Step 9.4: Deploy to Production
1. Commit changes (excluding `.env`)
2. Push to Git repository
3. Vercel will automatically deploy
4. Add `PUBLIC_GA_ID` to Vercel environment variables:
   - Go to Vercel dashboard
   - Select project
   - Settings > Environment Variables
   - Add: `PUBLIC_GA_ID` = `G-XXXXXXXXXX`
   - Redeploy

---

## 10. Testing & Verification

### Step 10.1: Real-time Testing
1. Visit website: https://ingheng-credit.vercel.app
2. Open GA4 dashboard: Reports > Realtime
3. **Verify:**
   - Active users count increases
   - Page views appear
   - Location shows Malaysia (or your location)

### Step 10.2: Event Testing
**Test each event:**

1. **WhatsApp Click:**
   - Click WhatsApp button on site
   - Check Realtime > Events
   - Event `whatsapp_click` should appear within 30 seconds

2. **Phone Call Click:**
   - Click phone number
   - Verify `phone_call_click` event

3. **Email Click:**
   - Click email address
   - Verify `email_click` event

4. **Scroll:**
   - Scroll down page to 75%+
   - Verify `scroll_depth` event with label `75_percent`

5. **Blog Reading:**
   - Visit blog post
   - Stay for 30+ seconds
   - Verify `blog_reading_time` event

### Step 10.3: DebugView (Advanced)
**Location:** Admin > DebugView

**Enable debug mode:**
1. Install Google Analytics Debugger extension (Chrome/Firefox)
2. Visit website with extension enabled
3. View detailed event parameters in DebugView
4. Verify all custom dimensions are passing correctly

### Step 10.4: Tag Assistant (Chrome Extension)
1. Install Google Tag Assistant
2. Visit website
3. Click extension icon
4. Verify GA4 tag is firing correctly
5. Check for errors or warnings

---

## 11. Advanced Features

### Step 11.1: User-ID Tracking (Optional)
**If you have user accounts:**

**Benefits:**
- Track users across devices
- More accurate user journey
- Better conversion attribution

**Implementation:**
```javascript
gtag('config', 'G-XXXXXXXXXX', {
  'user_id': 'USER_ID_HERE'
});
```

**Privacy:** Ensure user consent and PDPA compliance

### Step 11.2: E-commerce Tracking (Future)
**If you sell products/services online:**

**Track:**
- Product impressions
- Add to cart
- Checkout process
- Purchases

**Implementation:** Requires additional code (not needed currently)

### Step 11.3: Google Ads Integration
**Location:** Admin > Google Ads links

**Benefits:**
- Import conversions to Google Ads
- Create remarketing audiences
- Measure ad campaign ROI

**Setup:**
1. Link GA4 property to Google Ads account
2. Enable auto-tagging in Google Ads
3. Import GA4 conversions as Google Ads conversions

### Step 11.4: BigQuery Export (Enterprise)
**For large-scale data analysis:**
- Export raw GA4 data to BigQuery
- Run custom SQL queries
- Create advanced reports
- **Cost:** BigQuery storage and query fees

---

## 12. Maintenance & Optimization

### Step 12.1: Daily Monitoring
**Check:**
- Realtime report (ensure tracking working)
- Active users count (expect traffic)
- Event count (verify custom events firing)

### Step 12.2: Weekly Review
**Check:**
- Acquisition report (traffic sources)
- Engagement report (top pages)
- Conversion report (goal completions)
- Identify trends and anomalies

**Action items:**
- Investigate traffic drops
- Analyze high-performing content
- Optimize low-performing pages

### Step 12.3: Monthly Analysis
**Reports to review:**
1. **Acquisition Overview:**
   - Top traffic sources (organic, direct, referral)
   - Channel performance (which channels drive conversions)
   - Campaign performance (if running ads)

2. **Engagement Overview:**
   - Top pages by views and engagement
   - Average engagement time per page
   - Bounce rate by page

3. **Conversion Overview:**
   - Total conversions by type
   - Conversion rate by traffic source
   - Conversion value (if assigned)

4. **Language Performance:**
   - Sessions per language (EN/ZH/MS)
   - Conversion rate per language
   - Engagement time per language

5. **Equipment Interest:**
   - Most viewed equipment types
   - Equipment pages with highest conversion rates
   - User journey from equipment view to conversion

**Create monthly report document:**
- Traffic summary (sessions, users, page views)
- Top performing content
- Conversion metrics
- Areas for improvement
- Action items for next month

### Step 12.4: Quarterly Deep Dive
**Comprehensive analysis:**
1. **User Journey Analysis:**
   - How users discover site
   - Path to conversion
   - Drop-off points

2. **Content Performance:**
   - Blog posts driving most traffic
   - Equipment pages with highest engagement
   - Landing pages with best conversion rates

3. **Audience Insights:**
   - Demographics (if available)
   - Interests (if available)
   - Device usage (mobile vs desktop)
   - Geographic distribution

4. **Technical Performance:**
   - Page load speed impact on engagement
   - Browser and device issues
   - Error pages (track 404 events)

5. **Conversion Optimization:**
   - Test different CTAs
   - Optimize high-traffic, low-conversion pages
   - Improve user experience based on data

**Action items:**
- Update SEO strategy based on top queries
- Create more content on successful topics
- Optimize conversion funnel
- Adjust marketing budget allocation

### Step 12.5: Annual Review
**Strategic planning:**
1. Year-over-year comparison
2. Goal achievement analysis
3. ROI calculation (if ad spend tracked)
4. Technology stack review (GA4 updates)
5. Privacy compliance review (PDPA)

---

## 13. Privacy & Compliance

### Step 13.1: Malaysian PDPA Compliance
**Personal Data Protection Act 2010:**

**Requirements:**
- ✅ Display privacy policy
- ✅ Inform users about data collection
- ✅ Obtain consent for cookies
- ✅ Allow users to opt-out
- ✅ Secure data storage

### Step 13.2: Cookie Consent Banner
**Implement cookie consent banner:**

**Options:**
1. **CookieYes** (free tier available)
2. **OneTrust** (enterprise)
3. **Custom implementation**

**Features needed:**
- Clear explanation of cookie use
- Accept/Reject buttons
- Cookie preferences management
- Remember user choice

**Update GoogleAnalytics.astro:**
```javascript
const cookieConsentGiven = checkCookieConsent(); // Implement this function
if (cookieConsentGiven) {
  // Load GA4
}
```

### Step 13.3: Data Retention
**Location:** Admin > Data Settings > Data Retention

**Options:**
- 2 months (minimum)
- 14 months (default)
- 26 months (recommended)
- 38 months
- 50 months (maximum)

**Recommendation:** 26 months for historical analysis

### Step 13.4: IP Anonymization
**Already enabled in GoogleAnalytics.astro:**
```javascript
gtag('config', GA_ID, {
  anonymize_ip: true
});
```

---

## 14. Troubleshooting

### Issue: No data appearing in GA4
**Solutions:**
- Check Measurement ID is correct in `.env`
- Verify GoogleAnalytics component is imported in layout
- Ensure site is deployed to production (not dev mode)
- Check browser console for JavaScript errors
- Disable ad blockers during testing

### Issue: Events not tracking
**Solutions:**
- Verify event names match exactly (case-sensitive)
- Check browser console for gtag errors
- Use DebugView to see events in real-time
- Ensure event code is executing (add console.log for testing)
- Check that user hasn't blocked tracking

### Issue: Conversions not appearing
**Solutions:**
- Verify events are marked as conversions in Admin
- Allow 24-48 hours for conversion reports to populate
- Check event names are correct
- Ensure conversion events are actually firing

### Issue: Custom dimensions not showing data
**Solutions:**
- Allow 24-48 hours for custom dimensions to populate
- Verify event parameters match dimension names exactly
- Check data is being sent (use DebugView)
- Rebuild reports to include custom dimensions

---

## 15. Resources

### Official Google Resources:
- **GA4 Help Center:** https://support.google.com/analytics
- **GA4 Setup Guide:** https://support.google.com/analytics/answer/9304153
- **Event Reference:** https://support.google.com/analytics/answer/9267735
- **GA4 YouTube Channel:** https://www.youtube.com/c/GoogleAnalytics

### Recommended Tools:
- **Google Tag Manager:** Advanced tracking without code changes
- **Google Data Studio:** Custom GA4 dashboards (free)
- **GA4 BigQuery Export:** Advanced analytics (enterprise)

### Community:
- **Reddit r/GoogleAnalytics:** https://reddit.com/r/GoogleAnalytics
- **Google Analytics Community:** https://support.google.com/analytics/community

---

## 16. Quick Reference

### Essential URLs:
- **GA4 Dashboard:** https://analytics.google.com
- **Your Property:** https://analytics.google.com/analytics/web/#/pXXXXXXXX (replace with your property ID)
- **Realtime Report:** Reports > Realtime
- **Event Configuration:** Admin > Events
- **Conversion Tracking:** Admin > Conversions

### Key Metrics:
- **Sessions:** Number of visits
- **Users:** Unique visitors
- **Engaged sessions:** Sessions lasting 10s+ or with conversion/2+ page views
- **Engagement rate:** Engaged sessions / Total sessions
- **Conversions:** Total goal completions
- **Conversion rate:** Conversions / Sessions

### Custom Events (Ing Heng Credit):
- `whatsapp_click` - WhatsApp button click
- `phone_call_click` - Phone number click
- `email_click` - Email address click
- `form_submission` - Form submission
- `equipment_view` - Equipment page view
- `blog_reading_time` - Blog engagement (30s, 60s, 120s)
- `scroll_depth` - Page scroll (25%, 50%, 75%, 100%)
- `language_change` - Language switcher use

---

## Setup Completion Checklist

- [ ] GA4 account created
- [ ] Property created (Ing Heng Credit Website)
- [ ] Data stream configured
- [ ] Measurement ID obtained (G-XXXXXXXXXX)
- [ ] Enhanced measurement enabled
- [ ] Measurement ID added to `.env`
- [ ] GoogleAnalytics component added to BaseLayout
- [ ] Deployed to production with environment variable
- [ ] Verified tracking in Realtime report
- [ ] Tested all custom events
- [ ] Custom dimensions created (Language, Page Category, Equipment Type)
- [ ] Conversion events marked (form, WhatsApp, phone, email)
- [ ] Conversion values assigned
- [ ] Audiences created (Engaged Users, Equipment Interest, etc.)
- [ ] Custom reports created (Language Performance, Equipment Interest)
- [ ] Privacy policy updated with GA4 mention
- [ ] Cookie consent banner implemented (optional but recommended)
- [ ] Team members added with appropriate access
- [ ] Weekly monitoring schedule established

---

**Last Updated:** 2025-10-10
**Version:** 1.0
**Maintainer:** Ing Heng Credit Analytics Team

This guide should be reviewed quarterly and updated when Google releases new GA4 features or changes.
