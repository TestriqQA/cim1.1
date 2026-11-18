// FAQs added for the SEO 4-week plan (Group A pages without an FAQ, and the
// Microsoft Ads page). Each list feeds BOTH the visible FAQ (ServiceFaq) and the
// FAQPage structured data on the same page, so the markup always matches the
// text on the page — Google requires that. Plain text only, for that reason.

export type ServiceFaq = { question: string; answer: string };

export const seoContentWritingFaqs: ServiceFaq[] = [
    {
        question: "What do your SEO content writing services include?",
        answer: "Keyword and search-intent research, a topic plan, writing, and on-page optimisation of titles, headings, meta descriptions and internal links. We write blog posts, service pages, landing pages and product copy, and we refresh existing content that is losing traffic.",
    },
    {
        question: "How do you make content that ranks and still reads well?",
        answer: "Every piece starts from what people actually search for and what already ranks for that query. We then write for the reader first, with clear headings, short paragraphs, real examples and one clear next step. Optimisation comes after the draft, not instead of it.",
    },
    {
        question: "Can you write for our industry?",
        answer: "We write for B2B technology and SaaS, e-commerce, legal, healthcare, real estate and education. For specialist topics we work from your subject-matter experts' input and send every draft for your review before it is published.",
    },
    {
        question: "Can you improve our existing content instead of writing new pages?",
        answer: "Yes. A content audit shows which pages are losing rankings or competing with each other. Refreshing, merging or redirecting those pages is often faster and cheaper than writing new ones.",
    },
    {
        question: "How do you measure the results of SEO content?",
        answer: "We track rankings, impressions and clicks in Google Search Console, plus engagement and conversions in your analytics, and report what changed after each piece is published or refreshed.",
    },
];

export const strapiFaqs: ServiceFaq[] = [
    {
        question: "What is Strapi headless CMS?",
        answer: "Strapi is an open-source headless CMS built on Node.js. Editors manage content in an admin panel, and Strapi delivers it through REST or GraphQL APIs to any frontend: a website, a mobile app or several channels at once.",
    },
    {
        question: "What do your custom Strapi development services include?",
        answer: "Content modelling, custom APIs and plugins, roles and permissions, integration with frontends such as Next.js, migration from another CMS, and ongoing support and upgrades.",
    },
    {
        question: "Should we self-host Strapi or use Strapi Cloud?",
        answer: "Both work. Strapi Cloud is the quickest way to run Strapi with managed hosting. Self-hosting on your own cloud gives more control over cost, data location and scaling. We recommend one after looking at your traffic, team and compliance needs.",
    },
    {
        question: "Can you migrate our content from WordPress or another CMS to Strapi?",
        answer: "Yes. We map your existing content types to a Strapi content model, move the content with scripts, keep your URLs or set up redirects, and check the migrated pages before launch.",
    },
    {
        question: "Strapi or Contentful: which should we choose?",
        answer: "Strapi is open source and can be self-hosted, which suits teams that want full control and predictable costs. Contentful is a fully managed platform, which suits larger content teams that do not want to run any hosting. Both work well with modern frontends.",
    },
];

export const linkBuildingFaqs: ServiceFaq[] = [
    {
        question: "What does an SEO backlink agency do?",
        answer: "It earns links to your website from other relevant sites. Those links help search engines judge how trustworthy and useful your pages are. We do this through outreach, digital PR, guest articles, resource pages and broken-link building.",
    },
    {
        question: "Do you buy links or use private blog networks?",
        answer: "No. Paid links and private blog networks break Google's spam policies and can lead to penalties. We only build editorial links that a site owner chooses to give because the content is useful to their readers.",
    },
    {
        question: "How long does link building take to show results?",
        answer: "New links usually take a few weeks to be found by Google and longer to affect rankings. It is best to judge a campaign over three to six months rather than week by week.",
    },
    {
        question: "How do you choose which sites to get links from?",
        answer: "Relevance comes first: sites that cover your industry or topic and have real readers. We check each site's traffic, content quality and existing links, and skip anything that looks like a link farm.",
    },
    {
        question: "Will I see every link you build?",
        answer: "Yes. Our reports list every live link, the page it is on and the page on your site it points to, together with ranking and traffic changes for those pages.",
    },
];

export const contentfulFaqs: ServiceFaq[] = [
    {
        question: "What is Contentful headless CMS?",
        answer: "Contentful is a managed headless CMS. Content is stored as structured entries and delivered through APIs and a global CDN, so the same content can power websites, apps and other channels.",
    },
    {
        question: "What do your Contentful development services include?",
        answer: "Content modelling, custom Contentful apps built with the App Framework, frontend integration with frameworks such as Next.js, migration from your current CMS, and editor training and support.",
    },
    {
        question: "Is Contentful a good fit for a multi-language or multi-region site?",
        answer: "Yes. Contentful supports several locales per entry, so translations sit alongside the original content, and content is served through a CDN so pages load quickly in each region.",
    },
    {
        question: "Can you migrate our existing website to Contentful?",
        answer: "Yes. We design the content model first, move your content with migration scripts, keep your URLs or set up redirects, and check every migrated page before launch.",
    },
    {
        question: "Contentful or Strapi: which should we choose?",
        answer: "Contentful is fully managed, which suits larger content teams that do not want to run hosting. Strapi is open source and can be self-hosted, which suits teams that want full control and predictable costs. Both work well with modern frontends.",
    },
];

export const headlessCmsFaqs: ServiceFaq[] = [
    {
        question: "What is a headless CMS?",
        answer: "A headless CMS stores and manages content but does not control how it is displayed. Content is delivered through APIs, so developers can build the frontend with any framework and reuse the same content on a website, an app or other channels.",
    },
    {
        question: "Headless or traditional CMS: which do we need?",
        answer: "A traditional CMS such as WordPress or Drupal suits teams that want an all-in-one site with built-in themes and plugins. A headless CMS suits teams that need faster frontends, several channels or more control over design. Some projects run WordPress or Drupal headless to get both.",
    },
    {
        question: "Which CMS platforms do you work with?",
        answer: "Contentful, Strapi and Sanity for headless builds, WordPress and Drupal for traditional or hybrid sites, and custom CMS solutions when an off-the-shelf platform does not fit.",
    },
    {
        question: "Will moving to a headless CMS affect our SEO?",
        answer: "It can help, because headless sites are usually faster, but the move needs care: keep your URLs or add redirects, carry over titles and meta descriptions, and render pages on the server so search engines see the full content.",
    },
    {
        question: "Can our marketing team still edit pages without developers?",
        answer: "Yes. We set up content models, previews and reusable components so editors can create and update pages themselves, and we train the team before launch.",
    },
];

export const drupalFaqs: ServiceFaq[] = [
    {
        question: "Why choose Drupal CMS development?",
        answer: "Drupal suits large, content-heavy sites that need detailed user roles, multilingual content, strong security and accessibility, which is why it is common for government, higher-education and healthcare websites.",
    },
    {
        question: "What do your Drupal development services include?",
        answer: "Custom Drupal builds, module and theme development, migrations and version upgrades, multisite setups, API integrations, and ongoing support and maintenance.",
    },
    {
        question: "Can you upgrade our site from Drupal 7?",
        answer: "Yes. Drupal 7 reached end of life in January 2025 and no longer receives security updates. We audit your modules and content, rebuild anything without a modern equivalent, migrate the content and test everything before switching over.",
    },
    {
        question: "Is Drupal secure?",
        answer: "Drupal has a dedicated security team and publishes regular security advisories and updates. We keep core and modules up to date, follow those advisories and set up user roles and permissions carefully.",
    },
    {
        question: "Can Drupal run several websites from one installation?",
        answer: "Yes. Drupal's multisite feature lets several sites share one codebase while keeping separate content and settings, which suits organisations with many departments or brands.",
    },
];

export const microsoftAdsFaqs: ServiceFaq[] = [
    {
        question: "What is Microsoft Advertising (Bing Ads)?",
        answer: "Microsoft Advertising, formerly Bing Ads, is Microsoft's pay-per-click platform. Your search ads appear on Bing and on partner sites such as Yahoo, AOL and DuckDuckGo, and you pay only when someone clicks.",
    },
    {
        question: "Is Microsoft Advertising worth it if we already run Google Ads?",
        answer: "Often, yes. Bing reaches a different audience that is more desktop-heavy and includes many professional searchers, and clicks are often cheaper because fewer advertisers compete. Running both reaches searchers that Google Ads alone misses.",
    },
    {
        question: "Can you import our Google Ads campaigns into Microsoft Advertising?",
        answer: "Yes. Microsoft Advertising has a Google Ads import tool. We use it as a starting point, then adjust bids, budgets, keywords and ad copy for the Bing audience instead of copying everything unchanged.",
    },
    {
        question: "What is LinkedIn profile targeting in Microsoft Ads?",
        answer: "Because Microsoft owns LinkedIn, Microsoft Advertising can target ads by LinkedIn profile data such as company, industry and job function in supported markets. It is useful for B2B campaigns that need to reach decision-makers.",
    },
    {
        question: "How much budget do we need for Microsoft Ads?",
        answer: "There is no fixed minimum. The right budget depends on your keywords, competition and goals. A sensible approach is to start with a test budget, measure the cost per lead or sale, and then scale the campaigns that perform.",
    },
    {
        question: "How do you track conversions from Microsoft Ads?",
        answer: "We install Microsoft's Universal Event Tracking (UET) tag, set up conversion goals for forms, calls or purchases, and report cost per conversion alongside your other channels.",
    },
];
