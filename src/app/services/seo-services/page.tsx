import dynamic from 'next/dynamic';
import Hero from '@/components/services/seo-services/Hero';
import ServiceOverview from '@/components/services/seo-services/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/seo-services/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const Techniques = dynamic(() => import('@/components/services/seo-services/Techniques'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/seo-services/Process'), {
    loading: () => <div className="py-20" />,
});
const ToolsReporting = dynamic(() => import('@/components/services/seo-services/ToolsReporting'), {
    loading: () => <div className="py-20" />,
});
const Industries = dynamic(() => import('@/components/services/seo-services/Industries'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/seo-services/CTA'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/seo-services/FAQ'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateServiceSchema,
    generateItemListSchema,
    generateFAQSchema,
    generateHowToSchema,
    generateNavigationSchema,
} from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'SEO Services | Expert SEO Agency for Organic Growth & Rankings 2026',
    description: 'Results-driven SEO services to dominate search rankings. Expert technical SEO, content strategy, link building, and AI-search optimization. sustained organic traffic growth, 500+ keywords ranked on page 1, strong ROI, strong client retention.',
    url: '/services/seo-services',
    keywords: [
        'SEO services',
        'SEO agency',
        'organic SEO services',
        'technical SEO',
        'link building services',
        'content strategy SEO',
        'AI search optimization',
        'local SEO services',
    ],
    image: '/og-images/organic_growth_seo.webp',
});

export default function OrganicGrowthSEOPage() {
    const seoSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "SEO Services | Expert SEO Agency for Organic Growth & Rankings 2026",
            description: "Results-driven SEO services to dominate search rankings. Expert technical SEO, content strategy, link building, and AI-search optimization. sustained organic traffic growth, 500+ keywords ranked on page 1, strong ROI, strong client retention.",
            urlPath: "/services/seo-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/seo-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/seo-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/seo-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "SEO Services", url: "/services/seo-services" },
        ], "https://www.cinuteinfomedia.com/services/seo-services/#breadcrumb"),

        generateServiceSchema({
            name: "SEO Services",
            description: "Results-driven SEO services to dominate search rankings in the 2026 AI-search era. We don't just optimize — we engineer sustainable organic growth engines. Expert technical SEO, E-E-A-T content strategy, authority link building, and AI Overview optimization. sustained organic traffic growth, 500+ keywords ranked on page 1, strong ROI, strong client retention, 50+ industries served.",
            urlPath: "/services/seo-services",
            serviceType: "Search Engine Optimization (SEO)",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "1500",
                validFrom: "2025-01-01",
                description: "SEO services from $1,500 to $10,000+ per month. Free comprehensive SEO audit included. Packages cover technical SEO, on-page optimization, content strategy, link building, local SEO, and monthly reporting.",
            },
        }),

        generateItemListSchema({
            id: "/services/seo-services/#coreServicesList",
            name: "Core SEO Services",
            description: "Comprehensive SEO solutions from technical audits and on-page optimization to content strategy, link building, local SEO, e-commerce SEO, and AI-search optimization.",
            items: [
                { name: "Technical SEO", description: "Site architecture, Core Web Vitals optimization, crawlability, indexation, schema markup, and site speed improvements." },
                { name: "On-Page SEO", description: "Keyword research, meta optimization, content siloing, internal linking, and E-E-A-T signal enhancement." },
                { name: "Content Strategy & Creation", description: "Topical authority building with pillar pages, cluster content, and AI-optimized long-form articles." },
                { name: "Link Building & Digital PR", description: "High-authority backlink acquisition through digital PR, guest posting, and broken link building." },
                { name: "Local SEO", description: "Google Business Profile optimization, local citations, review management, and map pack ranking." },
                { name: "E-commerce SEO", description: "Product page optimization, category structure, Shopify/WooCommerce SEO, and conversion rate optimization." },
                { name: "AI Search & SGE Optimization", description: "Optimization for Google AI Overviews, Bing Copilot, and emerging AI-first search experiences." },
            ],
        }),

        generateItemListSchema({
            id: "/services/seo-services/#industrySolutionsList",
            name: "Industry-Specific SEO Solutions",
            description: "Tailored SEO strategies for SaaS & technology, healthcare, e-commerce, real estate, finance, and education industries.",
            items: [
                { name: "SaaS & Technology", description: "Product-led SEO with feature page optimization, comparison content, and developer documentation SEO." },
                { name: "Healthcare & Medical", description: "YMYL-compliant SEO with medical content review, HIPAA-safe strategies, and patient acquisition funnels." },
                { name: "E-commerce & Retail", description: "Product schema, category optimization, and conversion-focused SEO for online stores." },
                { name: "Real Estate", description: "Local SEO dominance with neighborhood pages, listing optimization, and Google Maps ranking." },
                { name: "Finance & Fintech", description: "YMYL authority building with trust signals, regulatory compliance content, and financial education SEO." },
                { name: "Education & EdTech", description: "Course page optimization, academic content strategy, and student acquisition funnels." },
            ],
        }),

        generateFAQSchema([
            { question: "How much do SEO services cost?", answer: "SEO services typically range from $1,500 to $10,000+ per month depending on the scope, competition level, and number of target keywords. A free comprehensive audit is included." },
            { question: "How long does it take to see SEO results?", answer: "Initial improvements in technical health and indexation are visible within 4-6 weeks. Significant ranking and traffic gains typically materialize within 3-6 months of consistent optimization." },
            { question: "What is the difference between on-page and off-page SEO?", answer: "On-page SEO focuses on optimizing content, meta tags, internal linking, and site structure on your website. Off-page SEO involves building external authority through backlinks, digital PR, and brand mentions." },
            { question: "Why is technical SEO important?", answer: "Technical SEO ensures search engines can crawl, index, and render your pages efficiently. Issues like slow load times, broken links, and poor Core Web Vitals can prevent even the best content from ranking." },
            { question: "How does AI affect SEO in 2026?", answer: "AI Overviews, SGE, and conversational search are reshaping SEO. We optimize for entity-based search, structured data, and E-E-A-T signals to ensure visibility in both traditional and AI-powered search results." },
            { question: "Do you guarantee first-page rankings?", answer: "No ethical SEO agency can guarantee specific rankings as Google's algorithm considers 200+ factors. We guarantee transparent reporting, proven methodologies, and measurable ROI improvements." },
        ]),

        generateHowToSchema({
            name: "Our 6-Phase SEO Growth Process",
            description: "A proven 6-phase SEO methodology that has delivered sustained organic traffic growth, 500+ page-1 keywords, and strong ROI for clients across 50+ industries.",
            steps: [
                { name: "Comprehensive SEO Audit", text: "Deep technical audit covering crawlability, Core Web Vitals, indexation, schema gaps, and competitor analysis. Timeline: Week 1-2.", url: "https://www.cinuteinfomedia.com/services/seo-services/#step-audit" },
                { name: "Keyword & Content Strategy", text: "Data-driven keyword research, topical mapping, content gap analysis, and pillar-cluster architecture design. Timeline: Week 2-3.", url: "https://www.cinuteinfomedia.com/services/seo-services/#step-strategy" },
                { name: "Technical Optimization", text: "Fixing crawl issues, improving site speed, implementing schema markup, and optimizing Core Web Vitals. Timeline: Week 3-4.", url: "https://www.cinuteinfomedia.com/services/seo-services/#step-technical" },
                { name: "Content Creation & On-Page", text: "Publishing E-E-A-T optimized content, meta tag optimization, internal linking, and content siloing. Ongoing.", url: "https://www.cinuteinfomedia.com/services/seo-services/#step-content" },
                { name: "Authority Building & Link Acquisition", text: "Digital PR campaigns, high-authority guest posts, broken link building, and HARO outreach. Ongoing.", url: "https://www.cinuteinfomedia.com/services/seo-services/#step-links" },
                { name: "Reporting & Continuous Optimization", text: "Monthly performance reports, ranking tracking, traffic analysis, and strategy refinement based on data. Monthly.", url: "https://www.cinuteinfomedia.com/services/seo-services/#step-reporting" },
            ],
        }),

        generateNavigationSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Blog", url: "/blog" },
            { name: "About", url: "/about" },
            { name: "Careers", url: "/careers" },
            { name: "Contact", url: "/contact" },
        ])
    );

    return (
        <main data-page-theme="seo" className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <Techniques />
            <Process />
            <ToolsReporting />
            <Industries />
            <FAQ />
            <CTA />
        </main>
    );
}
