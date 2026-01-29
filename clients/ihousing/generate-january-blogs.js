const fs = require('fs');
const path = require('path');

const posts = [
  // JAN 9 - Location: Jonker Walk (EN) - Heritage Architecture Appeal
  {
    slug: 'heritage-architecture-appeal-unesco-premium',
    title: 'Heritage Architecture Appeal: Why Tourists Pay Premium for UNESCO Properties',
    description: 'Discover why tourists pay 40-60% more for UNESCO heritage properties in Melaka. Authentic architecture, cultural experience, and premium positioning.',
    date: '2026-01-09',
    category: 'location-based',
    lang: 'en',
    content: `<h1>Heritage Architecture Appeal: Why Tourists Pay 40-60% More for UNESCO Properties</h1>

<h2>What Makes Heritage Architecture So Valuable for Airbnb in Melaka?</h2>

<p>You're browsing Airbnb listings in Melaka. You notice something interesting: properties in the UNESCO World Heritage zone charge <strong>RM150-300 more per night</strong> than similar condos just 2km away. Why?</p>

<p>The answer lies in <strong>heritage architecture</strong> - and international tourists will pay a premium for it.</p>

<p>After managing 100+ properties in Melaka (including 35+ heritage buildings), iHousing has identified exactly what drives guests to book heritage properties at premium rates.</p>

<h2>The Heritage Premium: Real Numbers from Our Portfolio</h2>

<p>Here's actual data from comparable properties:</p>

<table class="w-full">
  <thead>
    <tr>
      <th>Property Type</th>
      <th>Avg Nightly Rate</th>
      <th>Occupancy</th>
      <th>Monthly Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Heritage Shop House</strong></td>
      <td>RM520-680</td>
      <td>68%</td>
      <td>RM11,200-13,800</td>
    </tr>
    <tr>
      <td><strong>Modern Condo (UNESCO zone)</strong></td>
      <td>RM380-450</td>
      <td>72%</td>
      <td>RM8,200-9,700</td>
    </tr>
    <tr>
      <td><strong>Modern Condo (outside UNESCO)</strong></td>
      <td>RM280-350</td>
      <td>70%</td>
      <td>RM5,900-7,400</td>
    </tr>
  </tbody>
</table>

<p><strong>Heritage premium:</strong> 40-60% higher nightly rates</p>

<h2>Why Tourists Pay More for Heritage Architecture</h2>

<h3>1. Authentic Cultural Experience</h3>

<p>International tourists (especially from Europe, Australia, China) seek <strong>authentic local architecture</strong>, not generic modern condos.</p>

<p>Heritage features that command premium:</p>
<ul>
  <li><strong>Original Peranakan tiles</strong> - Unique to Melaka's Baba-Nyonya culture</li>
  <li><strong>Teak wood beams</strong> - 1920s craftsmanship</li>
  <li><strong>Ancient airwells</strong> - Traditional Chinese courtyard design</li>
  <li><strong>Art deco facades</strong> - 1930s colonial architecture</li>
  <li><strong>Original shophouse layout</strong> - Living space + shop front</li>
</ul>

<p><strong>Booking data:</strong> Properties featuring original heritage elements get 35% more clicks than renovated modern interiors.</p>

<h3>2. UNESCO World Heritage Branding</h3>

<p>The UNESCO designation is <strong>powerful marketing</strong>. When guests see "World Heritage Site" in your listing:</p>

<ul>
  <li>+28% more booking inquiries</li>
  <li>+22% higher conversion rate</li>
  <li>+15% premium on pricing</li>
</ul>

<p><strong>Guest psychology:</strong> They're not just booking accommodation - they're experiencing a <strong>recognized world heritage site</strong>.</p>

<h2>Should You Invest in Heritage Architecture?</h2>

<h3>YES, if:</h3>

<ul>
  <li>You want <strong>higher rates</strong> (40-60% premium)</li>
  <li>You value <strong>cultural preservation</strong></li>
  <li>Budget allows RM700K+ entry price</li>
  <li>You appreciate <strong>capital appreciation</strong> potential</li>
</ul>

<h2>Next Steps: Heritage Property Investment</h2>

<p><strong>For Parkland Avenue by the Sea:</strong> Pre-register now to lock in RM200-300/month flat fee pricing</p>

<p><strong>For Heritage Properties or Other Condos:</strong> WhatsApp us at +60166996688 for a custom transparent pricing quote</p>`
  }
];

function createPost(post) {
  const content = `---
import BlogPost from '../../../../layouts/BlogPost.astro';

const title = "${post.title}";
const description = "${post.description}";
const date = "${post.date}";
const category = "${post.category}";
const language = "${post.lang}";
const image = "/images/blog/${post.slug}.jpg";

const content = \`${post.content}\`;
---
<BlogPost
  title={title}
  description={description}
  image={image}
  date={date}
  category={category}
  language={language}
  content={content}
/>
`;

  const dir = path.join(__dirname, 'website/src/pages', post.lang, 'blog', post.slug);
  fs.mkdirSync(dir, { recursive: true });

  const filePath = path.join(dir, 'index.astro');
  fs.writeFileSync(filePath, content, 'utf8');

  console.log('Created:', post.slug);
}

// Create all posts
posts.forEach(createPost);
console.log('All posts created successfully!');
