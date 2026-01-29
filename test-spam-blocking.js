/**
 * Test Spam Blocking Configuration
 *
 * This script tests that spam URLs are properly blocked and return 410 Gone status
 *
 * Usage:
 *   node test-spam-blocking.js
 */

const DOMAIN = process.env.DOMAIN || 'https://www.inghengcredit.com';

const SPAM_URLS = [
  '/immediate-edge-review-in-the-uk-legit-or-a-scam-app-545/',
  '/immediate-edge-review-in-the-uk-legit-or-a-scam-app-939/',
  '/category/foreks-brokery-2/',
  '/tag/cos-play-porn/',
  '/exploring-the-rise-of-onlyfans-a-deep-dive-into-internet-content-subscription-services/',
  '/pocket-option-2024-the-ultimate-trading-platform-for-modern-investors/',
  '/bio-20-the-next-step/',
  '/?_g=239085',
  '/?_g=981923',
  '/?_g=561755',
];

const LEGITIMATE_URLS = [
  '/motor-insurance/',
  '/en/',
  '/ms/',
  '/zh/',
  '/en/services/insurance/',
  '/en/about/',
];

async function testURL(url, expectedStatus) {
  try {
    const response = await fetch(DOMAIN + url, {
      method: 'HEAD',
      redirect: 'manual',
    });

    const status = response.status;
    const statusText = response.statusText;
    const location = response.headers.get('location') || 'N/A';

    const passed = status === expectedStatus;
    const symbol = passed ? '✅' : '❌';

    console.log(`${symbol} ${url}`);
    console.log(`   Status: ${status} ${statusText} (expected ${expectedStatus})`);
    if (location !== 'N/A') {
      console.log(`   Redirect: ${location}`);
    }
    console.log('');

    return passed;
  } catch (error) {
    console.log(`❌ ${url}`);
    console.log(`   Error: ${error.message}`);
    console.log('');
    return false;
  }
}

async function main() {
  console.log('🧪 SPAM BLOCKING TEST');
  console.log('======================\n');
  console.log(`Testing domain: ${DOMAIN}\n`);

  console.log('📛 SPAM URLs (should return 410 Gone)');
  console.log('--------------------------------------\n');

  let spamPassed = 0;
  for (const url of SPAM_URLS) {
    const passed = await testURL(url, 410);
    if (passed) spamPassed++;
  }

  console.log('\n✅ LEGITIMATE URLs (should return 200 OK or 301/302 redirect)');
  console.log('--------------------------------------------------------------\n');

  let legitimatePassed = 0;
  for (const url of LEGITIMATE_URLS) {
    // Allow 200, 301, 302, 307, 308
    const response = await fetch(DOMAIN + url, {
      method: 'HEAD',
      redirect: 'manual',
    });

    const status = response.status;
    const passed = [200, 301, 302, 307, 308].includes(status);
    const symbol = passed ? '✅' : '❌';

    console.log(`${symbol} ${url}`);
    console.log(`   Status: ${status} ${response.statusText}`);
    const location = response.headers.get('location');
    if (location) {
      console.log(`   Redirect: ${location}`);
    }
    console.log('');

    if (passed) legitimatePassed++;
  }

  console.log('\n📊 RESULTS');
  console.log('==========\n');
  console.log(`Spam URLs blocked: ${spamPassed}/${SPAM_URLS.length}`);
  console.log(`Legitimate URLs working: ${legitimatePassed}/${LEGITIMATE_URLS.length}`);

  const allPassed = spamPassed === SPAM_URLS.length && legitimatePassed === LEGITIMATE_URLS.length;

  if (allPassed) {
    console.log('\n✅ ALL TESTS PASSED! Spam blocking is working correctly.\n');
    process.exit(0);
  } else {
    console.log('\n❌ SOME TESTS FAILED! Please check configuration.\n');
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
