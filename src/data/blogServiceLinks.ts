// Three service pages shown as "Related services" under each blog post (SEO
// 4-week plan: each priority page needs at least 3 links from blog posts, with
// descriptive anchor text). Chosen in this order:
//   1. BY_POST: hand-picked pages for posts about a specific platform (the Astro
//      article links to the Astro page, CMS articles to the CMS pages, ...);
//   2. TOPICS: for new posts, a platform named in the slug goes first;
//   3. BY_CATEGORY, then DEFAULT.

export type BlogServiceLink = { href: string; name: string };

const S = {
    web: { href: "/services/web-design-development", name: "Website Development Company" },
    saas: { href: "/services/web-design-development/saas-development-services", name: "SaaS Development Services" },
    headless: { href: "/services/web-design-development/headless-traditional-cms", name: "Headless CMS Development Services" },
    strapi: { href: "/services/web-design-development/strapi-headless-cms", name: "Strapi Headless CMS Development" },
    contentful: { href: "/services/web-design-development/contentful-headless-cms", name: "Contentful Headless CMS Development" },
    drupal: { href: "/services/web-design-development/drupal-cms", name: "Drupal CMS Development" },
    astro: { href: "/services/web-design-development/astro-framework-services", name: "Astro Development Agency" },
    nextjs: { href: "/services/web-design-development/nextjs-development-services", name: "Next.js Development Services" },
    shopify: { href: "/services/web-design-development/shopify-development-services", name: "Shopify Development Services" },
    ecommerce: { href: "/services/web-design-development/ecommerce-development-company", name: "E-commerce Development" },
    ecommerceSeo: { href: "/services/seo-services/ecommerce-seo-services", name: "E-commerce SEO Services" },
    landing: { href: "/services/web-design-development/landing-pages", name: "Landing Page Design" },
    branding: { href: "/services/web-design-development/branding-services", name: "Personal Branding & Portfolio Design" },
    wordpress: { href: "/services/web-design-development/wordpress-development-services", name: "WordPress Development" },
    healthcare: { href: "/services/web-design-development/healthcare-portals", name: "Healthcare Portal Development" },
    fintech: { href: "/services/web-design-development/fintech-solutions", name: "FinTech Solutions" },
    edtech: { href: "/services/web-design-development/edtech-lms", name: "EdTech & LMS Development" },
    seo: { href: "/services/seo-services", name: "Organic Growth & SEO Services" },
    seoContent: { href: "/services/seo-services/seo-content-writing-services", name: "SEO Content Writing Services" },
    technicalSeo: { href: "/services/seo-services/technical-seo-services", name: "Technical SEO Agency" },
    links: { href: "/services/seo-services/link-building", name: "SEO Backlink Agency" },
    localSeo: { href: "/services/seo-services/local-seo-services", name: "Local Maps SEO Services" },
    smm: { href: "/services/social-media-marketing-services", name: "Social Media Marketing (SMM) Services" },
    xAds: { href: "/services/social-media-marketing-services/twitter-ads-management", name: "X (Twitter) Ads Management" },
    pinterest: { href: "/services/social-media-marketing-services/pinterest-marketing", name: "Pinterest Marketing Services" },
    linkedinMarketing: { href: "/services/social-media-marketing-services/linkedin-marketing-services", name: "LinkedIn Marketing Services" },
    ads: { href: "/services/performance-marketing", name: "Performance Marketing Services" },
    microsoftAds: { href: "/services/performance-marketing/microsoft-ads", name: "Microsoft Advertising (Bing Ads)" },
    googleAds: { href: "/services/performance-marketing/google-ads", name: "Google Ads Management" },
    linkedinAds: { href: "/services/performance-marketing/linkedin-ads", name: "LinkedIn Ads Management" },
    aiWorkflows: { href: "/services/ai-workflows-automations-services", name: "AI Workflow Automation Services" },
    chatbots: { href: "/services/ai-chatbots-services", name: "AI Chatbot Development" },
    apps: { href: "/services/mobile-app-development", name: "Mobile App Development" },
    enterprise: { href: "/services/mobile-app-development/enterprise-application-development-services", name: "Enterprise Application Development" },
    crossPlatform: { href: "/services/mobile-app-development/cross-platform-app-development-company", name: "Cross-Platform App Development" },
    ios: { href: "/services/mobile-app-development/ios-app-development-company", name: "iOS App Development" },
    android: { href: "/services/mobile-app-development/android-app-development-company", name: "Android App Development" },
    brand: { href: "/services/brand-identity-design", name: "Brand Identity Design" },
    support: { href: "/services/additional-support-services", name: "Website Support & Maintenance" },
} satisfies Record<string, BlogServiceLink>;

const BY_CATEGORY: Record<string, BlogServiceLink[]> = {
    "web-development": [S.web, S.saas, S.headless],
    "digital-marketing": [S.seoContent, S.smm, S.microsoftAds],
    "ai-automation": [S.aiWorkflows, S.chatbots, S.enterprise],
    "social-media-marketing": [S.smm, S.xAds, S.pinterest],
    "seo": [S.seoContent, S.technicalSeo, S.links],
    "ui-ux-design": [S.web, S.landing, S.brand],
    "brand-identity-design": [S.brand, S.branding, S.web],
    "ai-chatbots-services": [S.chatbots, S.aiWorkflows, S.enterprise],
    "industry-specific-web": [S.healthcare, S.fintech, S.edtech],
    "seo-services": [S.seo, S.localSeo, S.technicalSeo],
    "mobile-app-development": [S.apps, S.enterprise, S.crossPlatform],
    "performance-marketing": [S.ads, S.microsoftAds, S.linkedinAds],
    "business-strategy": [S.web, S.seo, S.ads],
    "enterprise-ai-and-automation": [S.aiWorkflows, S.enterprise, S.chatbots],
    "case-studies": [S.web, S.seo, S.ads],
    "mobile-apps": [S.apps, S.ios, S.android],
    "website-security": [S.wordpress, S.support, S.web],
    "ppc-and-paid-ads": [S.microsoftAds, S.googleAds, S.ads],
    "digital-skills-and-career": [S.linkedinMarketing, S.seo, S.web],
};

const DEFAULT: BlogServiceLink[] = [S.web, S.seo, S.ads];

// Posts about one platform link to that platform's service page. This also
// gives Strapi, Contentful, Drupal, Astro and Shopify at least 3 blog links each.
const BY_POST: Record<string, BlogServiceLink[]> = {
    "astro-framework-fastest-sites": [S.astro, S.nextjs, S.headless],
    "future-web-development-nextjs": [S.nextjs, S.astro, S.headless],
    "nextjs-performance-optimization-2026-guide": [S.nextjs, S.astro, S.technicalSeo],
    "web-performance-optimization-speed": [S.astro, S.technicalSeo, S.web],
    "core-web-vitals-fixes-guide-developers": [S.technicalSeo, S.astro, S.nextjs],
    "lazy-loading-image-optimization-core-web-vitals": [S.nextjs, S.technicalSeo, S.web],
    "react-best-practices-2026": [S.nextjs, S.strapi, S.saas],
    "headless-cms-sanity-nextjs-decoupled-frontends-2026": [S.headless, S.strapi, S.contentful],
    "sanity-vs-wordpress-headless-comparison": [S.headless, S.contentful, S.strapi],
    "blog-design-high-traffic": [S.headless, S.contentful, S.strapi],
    "entertainment-media-sites-guide": [S.contentful, S.drupal, S.headless],
    "business-corporate-intranets": [S.drupal, S.enterprise, S.headless],
    "edtech-lms-platforms-digital-learning-strategy": [S.edtech, S.drupal, S.headless],
    "wordpress-hosting-migration": [S.wordpress, S.drupal, S.support],
    "security-plugins-hardening-the-definitive-website-protection-guide": [S.wordpress, S.drupal, S.support],
    "speed-optimization-plugins-guide": [S.wordpress, S.technicalSeo, S.web],
    "shopify-ux-fixes-india-d2c-2026": [S.shopify, S.ecommerce, S.landing],
    "ecommerce-ux-designing-conversion": [S.shopify, S.ecommerce, S.landing],
    "ecommerce-seo-for-high-conversion": [S.ecommerceSeo, S.shopify, S.ecommerce],
    "top-10-saas-development-tools": [S.saas, S.web, S.headless],
};

// For posts not listed above: a platform named in the slug is linked first.
const TOPICS: [RegExp, BlogServiceLink][] = [
    [/\bastro\b/, S.astro],
    [/\bshopify\b/, S.shopify],
    [/\bstrapi\b/, S.strapi],
    [/\bcontentful\b/, S.contentful],
    [/\bdrupal\b/, S.drupal],
    [/\bwordpress\b/, S.wordpress],
    [/\bnext-?js\b/, S.nextjs],
    [/\bheadless\b/, S.headless],
];

export function getServicesForBlogPost(categorySlug: string | undefined, postSlug: string | undefined): BlogServiceLink[] {
    if (postSlug && BY_POST[postSlug]) return BY_POST[postSlug];
    const base = (categorySlug && BY_CATEGORY[categorySlug]) || DEFAULT;
    const topic = postSlug ? TOPICS.find(([re]) => re.test(postSlug))?.[1] : undefined;
    if (!topic) return base;
    return [topic, ...base.filter((s) => s.href !== topic.href)].slice(0, 3);
}
