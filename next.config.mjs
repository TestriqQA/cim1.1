/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
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
        // listing hub all now resolve to the single live product. Sources are
        // exact-match (no :path*), so the canonical /products/chimegenius-ai-pro
        // target is never itself matched — avoids the case-insensitive 308 loop
        // documented below.
        const productTarget = '/products/chimegenius-ai-pro';
        const removedProductSlugs = [
            'testriq-qa', 'cim-chatbot', 'cim-autoflow',
            'cim-analytics', 'cim-sitebuilder', 'cim-socialhub',
        ];
        const productRedirects = [
            { source: '/products', destination: productTarget, permanent: true },
            ...removedProductSlugs.flatMap((slug) => [
                { source: `/products/${slug}`, destination: productTarget, permanent: true },
                { source: `/products/${slug}/support`, destination: productTarget, permanent: true },
                { source: `/products/${slug}/privacy-policy`, destination: productTarget, permanent: true },
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
        const removedProjectSlugs = [
            'cdpl-performance-marketing', 'healthcare-plus-seo', 'ved-solutions-lead-gen',
            'maple-ai-automation', 'cloudscale-nextjs-platform',
        ];
        const portfolioRedirects = removedProjectSlugs.map((slug) => ({
            source: `/portfolio/${slug}`,
            destination: '/portfolio',
            permanent: true,
        }));
        return [
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
            // organic-growth-seo-Guide blog were dead in prod). Canonical pages now serve 200;
            // lowercase variants 404 (acceptable — not in sitemap). Ideal long-term: lowercase slugs.
            {
                source: '/services/web-design-development/portfolio-personal',
                destination: '/services/web-design-development/branding-services',
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
};

export default nextConfig;
