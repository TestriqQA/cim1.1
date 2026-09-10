import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { client } from "@/sanity/lib/client";
import { allPostsQuery, categoriesQuery } from "@/sanity/lib/queries";
import { products } from "@/data/products";
import { productPrivacyPolicies } from "@/data/productPrivacy";
import { productSupportData } from "@/data/productSupport";
import { clientProjects } from "@/data/portfolio";

// ISR: regenerate the sitemap periodically so newly-published Sanity blog posts
// appear without a full redeploy. Uses the public read client (no token).
export const revalidate = 3600; // hourly

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.cinuteinfomedia.com';

    // Build-time constant — only update when static content actually changes
    const staticLastModified = '2026-09-10T00:00:00.000Z';

    // 1. Static Routes (with realistic, stable lastModified dates)
    const staticRoutes: MetadataRoute.Sitemap = [
        { route: '', priority: 1, changeFrequency: 'weekly' as const },
        { route: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
        { route: '/our-team', priority: 0.7, changeFrequency: 'monthly' as const },
        { route: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
        { route: '/get-in-touch', priority: 0.7, changeFrequency: 'monthly' as const },
        { route: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
        { route: '/blog/categories', priority: 0.6, changeFrequency: 'weekly' as const },
        { route: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
        { route: '/portfolio', priority: 0.8, changeFrequency: 'monthly' as const },
        { route: '/careers', priority: 0.7, changeFrequency: 'weekly' as const },
        { route: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
        { route: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
        { route: '/cookies-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    ].map((item) => ({
        url: `${baseUrl}${item.route}`,
        lastModified: staticLastModified,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
    }));

    // 2. Dynamic Service Routes (Recursive Crawler with file mtime)
    const servicesPath = path.join(process.cwd(), 'src/app/services');
    const serviceRoutes: MetadataRoute.Sitemap = [];

    function crawlServices(currentPath: string, routePrefix: string) {
        if (!fs.existsSync(currentPath)) return;

        const items = fs.readdirSync(currentPath);
        items.forEach((item) => {
            const fullPath = path.join(currentPath, item);
            const relativeRoute = path.join(routePrefix, item).replace(/\\/g, '/');

            if (fs.statSync(fullPath).isDirectory()) {
                const pagePath = path.join(fullPath, 'page.tsx');
                // If it's a directory with a page.tsx, add to sitemap
                if (fs.existsSync(pagePath)) {
                    // Use actual file modification time for reliable lastmod
                    const stat = fs.statSync(pagePath);
                    // Tiered priority by depth: hub (0.9) > sub-service (0.8) > deeper (0.7)
                    const depth = relativeRoute.split('/').length;
                    const servicePriority = depth <= 1 ? 0.9 : depth === 2 ? 0.8 : 0.7;
                    serviceRoutes.push({
                        url: `${baseUrl}/services/${relativeRoute}`,
                        lastModified: stat.mtime.toISOString(),
                        changeFrequency: 'weekly' as const,
                        priority: servicePriority,
                    });
                }
                // Recurse into subdirectories
                crawlServices(fullPath, relativeRoute);
            }
        });
    }

    crawlServices(servicesPath, '');

    // Fetch data from Sanity (with error handling for build resilience)
    let blogPostRoutes: MetadataRoute.Sitemap = [];
    let blogCategoryRoutes: MetadataRoute.Sitemap = [];
    // I-3: author archives are noindex,follow -> intentionally excluded from sitemap.

    try {
        const [posts, categories] = await Promise.all([
            client.fetch(allPostsQuery),
            client.fetch(categoriesQuery),
        ]);

        // 3. Dynamic Blog Routes (using actual publishedAt dates)
        blogPostRoutes = posts.map((post: any) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.publishedAt).toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

        // 4. Dynamic Category Routes
        blogCategoryRoutes = categories.map((cat: any) => ({
            url: `${baseUrl}/blog/category/${cat.slug}`,
            lastModified: staticLastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        }));

        // 5. Author routes intentionally omitted (noindex,follow — see I-3).
    } catch (error) {
        console.warn('Warning: Failed to fetch Sanity data for sitemap. Blog routes will be excluded.', error);
    }

    // 6. Product Routes
    const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: staticLastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // 7. Product Privacy Policy Routes
    const productPrivacyRoutes: MetadataRoute.Sitemap = productPrivacyPolicies.map((policy) => ({
        url: `${baseUrl}/products/${policy.slug}/privacy-policy`,
        lastModified: staticLastModified,
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    }));

    // 8. Product Support Routes
    const productSupportRoutes: MetadataRoute.Sitemap = productSupportData.map((support) => ({
        url: `${baseUrl}/products/${support.slug}/support`,
        lastModified: staticLastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }));

    // 9. Portfolio Case Study Routes (the /portfolio hub itself is a static route)
    const portfolioRoutes: MetadataRoute.Sitemap = clientProjects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: staticLastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [
        ...staticRoutes,
        ...serviceRoutes,
        ...productRoutes,
        ...productPrivacyRoutes,
        ...productSupportRoutes,
        ...portfolioRoutes,
        ...blogPostRoutes,
        ...blogCategoryRoutes,
    ];
}
