/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    // next/font fetches Inter from Google at build time. Trust the machine's own
    // certificate store so the build also works behind a TLS-inspecting proxy.
    experimental: {
        turbopackUseSystemTlsCerts: true,
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**',
            },
        ],
    },
    async redirects() {
        // The 6 discontinued products (fake catalog entries) and the old /products
        // listing hub all now resolve to the single live product. Every source is
        // scoped to a retired slug, so the canonical /products/chimegenius-ai-pro
        // target is never itself matched — avoids the case-insensitive 308 loop
        // documented below. The per-slug `/:path*` catch-all added 2026-11-25 is
        // safe for the same reason: it can only match a retired slug's subtree.
        // It sends every subpath to the product's base URL rather than preserving
        // the path, because the live product has only /support and
        // /privacy-policy — a path-preserving rule would redirect strangers into
        // 404s.
        const productTarget = '/products/chimegenius-ai-pro';
        const removedProductSlugs = [
            'testriq-qa', 'cim-chatbot', 'cim-autoflow',
            'cim-analytics', 'cim-sitebuilder', 'cim-socialhub',
        ];
        // NOTE: '/products' is deliberately NOT redirected. There is no products
        // hub — the navbar dropdown is the way in — and with four products a
        // permanent redirect to one of them was arbitrary and made it the
        // declared breadcrumb parent of the other three. /products now 404s,
        // which is correct for a URL nothing links to and the sitemap omits.
        // The 308 that used to live here is browser-cached, so anyone who hit
        // /products before this change keeps being redirected until their cache
        // clears; that is expected and resolves itself.
        // Withdrawn 2026-10-26. These three were real products whose pages were
        // live and in the sitemap, so they redirect rather than 404 — unlike the
        // fabricated catalog entries above, which never had legitimate links.
        // Their copy and policies stay in src/data (see UNLISTED_PRODUCT_SLUGS);
        // only the routes are gone.
        const withdrawnProductSlugs = ['kruti-io', 'assetmon', 'topcareerlive'];
        const productRedirects = [
            ...[...removedProductSlugs, ...withdrawnProductSlugs].flatMap((slug) => [
                { source: `/products/${slug}`, destination: productTarget, permanent: true },
                { source: `/products/${slug}/support`, destination: productTarget, permanent: true },
                { source: `/products/${slug}/privacy-policy`, destination: productTarget, permanent: true },
                { source: `/products/${slug}/:path*`, destination: productTarget, permanent: true },
            ]),
        ];
        // The portfolio shipped with six case studies on 2026-09-07; five were
        // illustrative rather than real engagements and have been removed, so
        // /portfolio now holds the single Testriq QA Lab study. Their URLs were
        // live on main, so they redirect to the hub rather than 404.
        //
        // Exact-match sources, and /portfolio is not itself a redirect source,
        // so none of these can match its own destination — see the case-loop
        // warning below.
        // Two of the removed slugs now have a REAL successor rather than a
        // generic parent: the old CDPL entry covered Cinute Digital (CDPL is
        // Cinute Digital Pvt. Ltd.), and the old Ved Solutions entry covered
        // the same client we have since written up properly. Those land on the
        // matching case study; the three with no successor land on the hub.
        const portfolioSuccessors = {
            'cdpl-performance-marketing': '/portfolio/cinute-digital-nextjs-rebuild-seo',
            'ved-solutions-lead-gen': '/portfolio/ved-solutions-seo-lead-growth',
            'healthcare-plus-seo': '/portfolio',
            'maple-ai-automation': '/portfolio',
            'cloudscale-nextjs-platform': '/portfolio',
        };
        const portfolioRedirects = Object.entries(portfolioSuccessors).map(([slug, destination]) => ({
            source: `/portfolio/${slug}`,
            destination,
            permanent: true,
        }));
        // The 39 service routes renamed WITHOUT redirects (commit 13cec54 'slug
        // updates', 30 Jan 2026, plus later passes). Every source below was a live
        // route and 404s today, so an indexed result or an inbound link to it is a
        // dead end and its equity is discarded instead of passed on.
        //
        // None of these can 308-loop. The warning further down applies to CASE-ONLY
        // rules, which match their own destination because Next matches `source`
        // case-insensitively; each rule here changes the path itself, so no
        // destination equals its own source. Sources are exact-match (no `:path*`),
        // which is why every child route is listed rather than relying on its parent.
        //
        // /products is deliberately absent - see the note above; it stays a 404.
        const renamedServiceRoutes = {
            // hub pages
            '/services/ai-powered-chatbots':
                '/services/ai-chatbots-services',
            '/services/ai-workflows-automations':
                '/services/ai-workflows-automations-services',
            '/services/social-media-marketing':
                '/services/social-media-marketing-services',
            // mobile app development
            '/services/mobile-app-development/android-app-development':
                '/services/mobile-app-development/android-app-development-company',
            '/services/mobile-app-development/cross-platform-app-development':
                '/services/mobile-app-development/cross-platform-app-development-company',
            '/services/mobile-app-development/enterprise-app-development':
                '/services/mobile-app-development/enterprise-application-development-services',
            '/services/mobile-app-development/harmonyos-app-development':
                '/services/mobile-app-development/harmonyos-app-development-services',
            '/services/mobile-app-development/hybrid-app-development':
                '/services/mobile-app-development/hybrid-app-development-services',
            '/services/mobile-app-development/ios-app-development':
                '/services/mobile-app-development/ios-app-development-company',
            // seo services - two generations of dead slug
            '/services/organic-growth-seo/content-seo':
                '/services/seo-services/seo-content-writing-services',
            '/services/organic-growth-seo/ecommerce-seo':
                '/services/seo-services/ecommerce-seo-services',
            '/services/organic-growth-seo/link-building':
                '/services/seo-services/link-building',
            '/services/organic-growth-seo/on-page-seo':
                '/services/seo-services/on-page-seo-services',
            '/services/organic-growth-seo/technical-seo':
                '/services/seo-services/technical-seo-services',
            '/services/seo-services/content-seo':
                '/services/seo-services/seo-content-writing-services',
            '/services/seo-services/ecommerce-seo':
                '/services/seo-services/ecommerce-seo-services',
            '/services/seo-services/local-seo':
                '/services/seo-services/local-seo-services',
            '/services/seo-services/on-page-seo':
                '/services/seo-services/on-page-seo-services',
            '/services/seo-services/technical-seo':
                '/services/seo-services/technical-seo-services',
            // social media marketing
            '/services/social-media-marketing/facebook-advertising':
                '/services/social-media-marketing-services/facebook-marketing-services',
            '/services/social-media-marketing/facebook-marketing':
                '/services/social-media-marketing-services/facebook-marketing-services',
            '/services/social-media-marketing/instagram-marketing':
                '/services/social-media-marketing-services/instagram-marketing-services',
            '/services/social-media-marketing/linkedin-marketing':
                '/services/social-media-marketing-services/linkedin-marketing-services',
            '/services/social-media-marketing/pinterest-marketing':
                '/services/social-media-marketing-services/pinterest-marketing',
            '/services/social-media-marketing/x-twitter-marketing':
                '/services/social-media-marketing-services/twitter-ads-management',
            '/services/social-media-marketing/youtube-advertising':
                '/services/social-media-marketing-services/video-marketing-agency',
            '/services/social-media-marketing/youtube-marketing':
                '/services/social-media-marketing-services/video-marketing-agency',
            '/services/social-media-marketing-services/instagram-marketing':
                '/services/social-media-marketing-services/instagram-marketing-services',
            '/services/social-media-marketing-services/linkedin-marketing':
                '/services/social-media-marketing-services/linkedin-marketing-services',
            '/services/social-media-marketing-services/x-twitter-marketing':
                '/services/social-media-marketing-services/twitter-ads-management',
            '/services/social-media-marketing-services/youtube-marketing':
                '/services/social-media-marketing-services/video-marketing-agency',
            // web design & development
            '/services/web-design-development/astro-framework':
                '/services/web-design-development/astro-framework-services',
            '/services/web-design-development/blogs-news-portals':
                '/services/web-design-development/blog-design-services',
            '/services/web-design-development/ecommerce-stores':
                '/services/web-design-development/ecommerce-development-company',
            '/services/web-design-development/nextjs-react':
                '/services/web-design-development/nextjs-development-services',
            '/services/web-design-development/shopify-ecommerce':
                '/services/web-design-development/shopify-development-services',
            '/services/web-design-development/travel-hospitality':
                '/services/web-design-development/travel-and-hospitality-services',
            '/services/web-design-development/web-applications-saas':
                '/services/web-design-development/saas-development-services',
            '/services/web-design-development/wordpress-development':
                '/services/web-design-development/wordpress-development-services',
        };
        const renamedServiceRedirects = Object.entries(renamedServiceRoutes).map(
            ([source, destination]) => ({ source, destination, permanent: true })
        );
        // Paths that blog posts in Sanity link to but that never existed as pages
        // (SEO 4-week plan, section 5: 404s). Each has a clear equivalent page, so
        // it redirects there. The links should still be corrected in the CMS so no
        // internal link goes through a redirect. Exact-match sources and no
        // destination equals its own source, so none can loop.
        // /industries/healthcare, /industries/b2b-saas and /products have no
        // equivalent page and stay 404 until those links are fixed in Sanity.
        const deadBlogLinkTargets = {
            '/services/paid-search': '/services/performance-marketing',
            '/services/ppc-management': '/services/performance-marketing',
            '/services/google-ads': '/services/performance-marketing/google-ads',
            '/services/microsoft-ads': '/services/performance-marketing/microsoft-ads',
            '/services/linkedin-ads': '/services/performance-marketing/linkedin-ads',
            '/services/ecommerce-design': '/services/web-design-development/ecommerce-development-company',
            '/content-marketing-services': '/services/seo-services/seo-content-writing-services',
            '/case-studies': '/portfolio',
            // Old blog category slugs still known to Google (Search Console
            // "Not found (404)", 19 Nov 2026); the categories were renamed.
            '/blog/category/enterprise-ai-automation': '/blog/category/enterprise-ai-and-automation',
            '/blog/category/ppc-paid-ads': '/blog/category/ppc-and-paid-ads',
        };
        const deadBlogLinkRedirects = Object.entries(deadBlogLinkTargets).map(
            ([source, destination]) => ({ source, destination, permanent: true })
        );
        return [
            ...renamedServiceRedirects,
            ...deadBlogLinkRedirects,
            ...productRedirects,
            ...portfolioRedirects,
            {
                source: '/social-media-services',
                destination: '/services/social-media-marketing-services',
                permanent: true,
            },
            {
                source: '/social-media',
                destination: '/services/social-media-marketing-services',
                permanent: true,
            },
            // NOTE: case-only redirects (lowercase -> mixed-case) were removed — Next/Vercel
            // matches `source` case-insensitively, so the mixed-case canonical URL also matched
            // its own lowercase source and 308-looped infinitely (harmony-OS service page +
            // organic-growth-seo-Guide blog were dead in prod). The service page is now fixed
            // properly: the route is lowercase one-word (harmonyos-...) and the old path 301s to
            // it above — a rename, not a case rule, so it cannot loop. organic-growth-seo-Guide is
            // a Sanity slug and still needs renaming in the CMS before a redirect can be added.
            {
                // harmony-OS -> harmonyos: not a case-only rule (the hyphen goes too), so the
                // canonical lowercase path does not match this source and cannot 308-loop.
                source: '/services/mobile-app-development/harmony-OS-app-development-services',
                destination: '/services/mobile-app-development/harmonyos-app-development-services',
                permanent: true,
            },
            {
                source: '/services/web-design-development/portfolio-personal',
                destination: '/services/web-design-development/branding-services',
                permanent: true,
            },
            // organic-growth-seo was renamed to seo-services; both old paths 404 in prod
            // while Google still has them indexed. Full path renames (not case-only), so
            // neither source matches its own destination and they cannot 308-loop.
            // The child is listed first; `source` matches the whole path, so the parent
            // rule below does not also catch /organic-growth-seo/local-seo.
            {
                source: '/services/organic-growth-seo/local-seo',
                destination: '/services/seo-services/local-seo-services',
                permanent: true,
            },
            {
                source: '/services/organic-growth-seo',
                destination: '/services/seo-services',
                permanent: true,
            },
            {
                source: '/cookie-policy',
                destination: '/privacy-policy',
                permanent: true,
            },
            {
                source: '/blog/linkedin-organic-hacks-grow-fast',
                destination: '/blog/7-best-linkedin-organic-hacks-to-grow-fast',
                permanent: true,
            },
            {
                source: '/blogecommerce-seo-for-high-conversion',
                destination: '/blog/ecommerce-seo-for-high-conversion',
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            // The Sanity Studio is an editor surface, not content. Authentication is
            // the real protection; this only keeps it out of the index if it is hit.
            {
                source: '/cms/:path*',
                headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
            },
            // Baseline security headers. HSTS is safe here because the site is
            // already HTTPS-only behind Vercel; `preload` is deliberately omitted
            // since that submission is irreversible and belongs to the domain owner.
            {
                source: '/(.*)',
                headers: [
                    { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                ],
            },
        ];
    },
};

export default nextConfig;
