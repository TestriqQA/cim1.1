// The main accent colour each service page uses (the text-colour token its own
// components use most), so shared blocks such as RelatedServices can match the
// page they sit on. Exact route first, then the section the route belongs to,
// then the site default.

const DEFAULT_ACCENT = "--brand-blue-text";

const ACCENTS: Record<string, string> = {
    "/services/additional-support-services": "--accent-violet-text",
    "/services/ai-chatbots-services": "--accent-indigo-text",
    "/services/ai-workflows-automations-services": "--accent-orange-text",
    "/services/brand-identity-design": "--accent-amber-text",

    "/services/mobile-app-development": "--brand-purple-text",
    "/services/mobile-app-development/android-app-development-company": "--accent-green-text",
    "/services/mobile-app-development/cross-platform-app-development-company": "--accent-indigo-text",
    "/services/mobile-app-development/enterprise-application-development-services": "--brand-blue-text",
    "/services/mobile-app-development/harmonyos-app-development-services": "--accent-red-text",
    "/services/mobile-app-development/hybrid-app-development-services": "--accent-cyan-text",
    "/services/mobile-app-development/ios-app-development-company": "--brand-blue-text",

    "/services/performance-marketing": "--accent-orange-text",
    "/services/performance-marketing/amazon-ads": "--accent-orange-text",
    "/services/performance-marketing/google-ads": "--brand-blue-text",
    "/services/performance-marketing/linkedin-ads": "--brand-blue-text",
    "/services/performance-marketing/meta-ads": "--brand-blue-text",
    "/services/performance-marketing/microsoft-ads": "--brand-blue-text",
    "/services/performance-marketing/tiktok-ads": "--accent-pink-text",
    "/services/performance-marketing/x-ads": "--brand-blue-text",
    "/services/performance-marketing/youtube-ads": "--accent-red-text",

    "/services/seo-services": "--accent-green-text",
    "/services/seo-services/ecommerce-seo-services": "--accent-sky-text",
    "/services/seo-services/link-building": "--accent-cyan-text",
    "/services/seo-services/local-seo-services": "--accent-amber-text",
    "/services/seo-services/on-page-seo-services": "--accent-green-text",
    "/services/seo-services/seo-content-writing-services": "--accent-green-text",
    "/services/seo-services/technical-seo-services": "--accent-violet-text",

    "/services/social-media-marketing-services": "--accent-teal-text",
    "/services/social-media-marketing-services/facebook-marketing-services": "--brand-blue-text",
    "/services/social-media-marketing-services/instagram-marketing-services": "--accent-pink-text",
    "/services/social-media-marketing-services/linkedin-marketing-services": "--brand-blue-text",
    "/services/social-media-marketing-services/pinterest-marketing": "--accent-red-text",
    "/services/social-media-marketing-services/twitter-ads-management": "--brand-blue-text",
    "/services/social-media-marketing-services/video-marketing-agency": "--accent-red-text",

    "/services/web-design-development": "--brand-blue-text",
    "/services/web-design-development/astro-framework-services": "--accent-orange-text",
    "/services/web-design-development/blog-design-services": "--brand-purple-text",
    "/services/web-design-development/branding-services": "--accent-cyan-text",
    "/services/web-design-development/business-corporate": "--accent-orange-text",
    "/services/web-design-development/contentful-headless-cms": "--accent-sky-text",
    "/services/web-design-development/drupal-cms": "--accent-sky-text",
    "/services/web-design-development/ecommerce-development-company": "--accent-cyan-text",
    "/services/web-design-development/edtech-lms": "--brand-purple-text",
    "/services/web-design-development/entertainment-media": "--brand-purple-text",
    "/services/web-design-development/fintech-solutions": "--accent-sky-text",
    "/services/web-design-development/headless-traditional-cms": "--accent-violet-text",
    "/services/web-design-development/healthcare-portals": "--brand-blue-text",
    "/services/web-design-development/java-spring-boot": "--accent-green-text",
    "/services/web-design-development/landing-pages": "--accent-green-text",
    "/services/web-design-development/laravel-php": "--accent-red-text",
    "/services/web-design-development/nextjs-development-services": "--accent-cyan-text",
    "/services/web-design-development/nodejs-backend": "--accent-green-text",
    "/services/web-design-development/python-django": "--brand-blue-text",
    "/services/web-design-development/real-estate-platforms": "--accent-teal-text",
    "/services/web-design-development/saas-development-services": "--brand-blue-text",
    "/services/web-design-development/shopify-development-services": "--accent-lime-text",
    "/services/web-design-development/strapi-headless-cms": "--accent-indigo-text",
    "/services/web-design-development/travel-and-hospitality-services": "--accent-teal-text",
    "/services/web-design-development/wordpress-development-services": "--brand-blue-text",
};

/** CSS colour, e.g. "var(--accent-orange-text)", for the service page at `pathname`. */
export function getServiceAccent(pathname: string | null | undefined): string {
    const path = (pathname || "").replace(/\/+$/, "");
    let token = ACCENTS[path];
    if (!token) {
        const section = path.split("/").slice(0, 3).join("/");
        token = ACCENTS[section] ?? DEFAULT_ACCENT;
    }
    return `var(${token})`;
}
