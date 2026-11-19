// Data for the "Related services" block under every service page
// (src/components/services/RelatedServices.tsx, rendered by
// src/app/services/layout.tsx). SEO change report, section 2.1: three normal
// links per service page so each page is linked from its neighbours.
//
// A sub-page links to the next three pages in its own group (wrapping round),
// so every sub-page also receives exactly three links from its siblings.
// A category hub links to three related hubs, listed explicitly below.
// Groups follow the footer's order. Add new service pages here.

export type RelatedService = { href: string; name: string; category: string };

type Group = { category: string; items: Array<[slug: string, name: string]> };

const WEB = "/services/web-design-development";
const APPS = "/services/mobile-app-development";
const SEO = "/services/seo-services";
const ADS = "/services/performance-marketing";
const SOCIAL = "/services/social-media-marketing-services";

const groups: Array<Group & { base: string }> = [
    {
        base: WEB,
        category: "Web Development",
        items: [
            ["wordpress-development-services", "WordPress Development"],
            ["shopify-development-services", "Shopify Development Services"],
            ["nextjs-development-services", "Next.js Development Services"],
            ["laravel-php", "Laravel & PHP Development"],
            ["nodejs-backend", "Node.js & Backend Development"],
            ["python-django", "Python & Django Development"],
            ["java-spring-boot", "Java & Spring Boot Development"],
            ["astro-framework-services", "Astro Framework Development"],
            ["headless-traditional-cms", "Headless & Traditional CMS Development"],
            ["strapi-headless-cms", "Strapi Headless CMS Development"],
            ["contentful-headless-cms", "Contentful Headless CMS Development"],
            ["drupal-cms", "Drupal CMS Development"],
        ],
    },
    {
        base: WEB,
        category: "Website Types",
        items: [
            ["ecommerce-development-company", "E-commerce Development"],
            ["business-corporate", "Business & Corporate Websites"],
            ["landing-pages", "Landing Pages"],
            ["saas-development-services", "SaaS Development Services"],
            ["blog-design-services", "Blog & News Portal Design"],
            ["healthcare-portals", "Healthcare Portal Development"],
            ["edtech-lms", "EdTech & LMS Development"],
            ["fintech-solutions", "FinTech Solutions"],
            ["real-estate-platforms", "Real Estate Platform Development"],
            ["travel-and-hospitality-services", "Travel & Hospitality Services"],
            ["entertainment-media", "Entertainment & Media Development"],
            ["branding-services", "Personal Branding & Portfolio Design"],
        ],
    },
    {
        base: APPS,
        category: "Mobile Apps",
        items: [
            ["ios-app-development-company", "iOS App Development"],
            ["android-app-development-company", "Android App Development"],
            ["cross-platform-app-development-company", "Cross-Platform App Development"],
            ["enterprise-application-development-services", "Enterprise Application Development"],
            ["hybrid-app-development-services", "Hybrid App Development"],
            ["harmonyos-app-development-services", "HarmonyOS App Development"],
        ],
    },
    {
        base: SEO,
        category: "SEO",
        items: [
            ["technical-seo-services", "Technical SEO"],
            ["on-page-seo-services", "On-Page SEO"],
            ["local-seo-services", "Local SEO"],
            ["seo-content-writing-services", "SEO Content Writing"],
            ["ecommerce-seo-services", "E-commerce SEO"],
            ["link-building", "Link Building Services"],
        ],
    },
    {
        base: ADS,
        category: "Paid Advertising",
        items: [
            ["google-ads", "Google Ads"],
            ["meta-ads", "Meta Ads"],
            ["linkedin-ads", "LinkedIn Ads"],
            ["amazon-ads", "Amazon Ads"],
            ["tiktok-ads", "TikTok Ads"],
            ["microsoft-ads", "Microsoft Advertising (Bing Ads)"],
            ["x-ads", "X (Twitter) Ads"],
            ["youtube-ads", "YouTube Ads"],
        ],
    },
    {
        base: SOCIAL,
        category: "Social Media",
        items: [
            ["facebook-marketing-services", "Facebook Marketing"],
            ["instagram-marketing-services", "Instagram Marketing"],
            ["linkedin-marketing-services", "LinkedIn Marketing"],
            ["pinterest-marketing", "Pinterest Marketing"],
            ["twitter-ads-management", "X (Twitter) Marketing"],
            ["video-marketing-agency", "YouTube Marketing"],
        ],
    },
];

// Category hubs, named as in the footer.
const hubs: Record<string, string> = {
    [WEB]: "Web Design & Development",
    [APPS]: "Mobile App Development",
    [SOCIAL]: "Social Media Marketing",
    "/services/ai-workflows-automations-services": "AI Workflows & Automations",
    "/services/ai-chatbots-services": "AI-Powered Chatbots",
    [SEO]: "Organic Growth & SEO",
    [ADS]: "Performance Marketing",
    "/services/brand-identity-design": "Brand Identity & Design",
    "/services/additional-support-services": "Additional Support Services",
};

const hubRelated: Record<string, string[]> = {
    [WEB]: [APPS, SEO, "/services/additional-support-services"],
    [APPS]: [WEB, "/services/ai-chatbots-services", "/services/ai-workflows-automations-services"],
    [SEO]: [ADS, SOCIAL, WEB],
    [ADS]: [SEO, SOCIAL, "/services/brand-identity-design"],
    [SOCIAL]: [ADS, SEO, "/services/brand-identity-design"],
    "/services/ai-workflows-automations-services": ["/services/ai-chatbots-services", WEB, APPS],
    "/services/ai-chatbots-services": ["/services/ai-workflows-automations-services", WEB, APPS],
    "/services/brand-identity-design": [WEB, SOCIAL, ADS],
    "/services/additional-support-services": [WEB, SEO, APPS],
};

export function getRelatedServices(pathname: string | null): RelatedService[] {
    if (!pathname) return [];
    const path = pathname.replace(/\/+$/, "");

    if (hubRelated[path]) {
        return hubRelated[path].map((href) => ({ href, name: hubs[href], category: "Services" }));
    }

    for (const group of groups) {
        const i = group.items.findIndex(([slug]) => `${group.base}/${slug}` === path);
        if (i === -1) continue;
        const n = group.items.length;
        return [1, 2, 3].map((step) => {
            const [slug, name] = group.items[(i + step) % n];
            return { href: `${group.base}/${slug}`, name, category: group.category };
        });
    }
    return [];
}
