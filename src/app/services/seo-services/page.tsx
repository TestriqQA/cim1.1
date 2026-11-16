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
    title: 'SEO Services & Organic Growth | Cinute InfoMedia',
    description: 'Technical SEO, content and link building for organic growth, tracked in Search Console and GA4. Start with a free SEO audit.',
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
            name: "SEO Services & Organic Growth | Cinute InfoMedia",
            description: "Technical SEO, content and link building for organic growth, tracked in Search Console and GA4. Start with a free SEO audit.",
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
            description: "Results-driven SEO services to dominate search rankings in the 2026 AI-search era. We don't just optimize — we engineer sustainable organic growth engines. Expert technical SEO, E-E-A-T content strategy, authority link building, and AI Overview optimization: sustained organic traffic growth, keywords ranked on page 1, strong ROI and strong client retention across a broad range of industries.",
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

        // Mirrors the visible accordion copy in
        // src/components/services/seo-services/FAQ.tsx verbatim.
        // Google requires FAQPage markup to match the on-page text, so these two
        // must be edited together — paraphrasing here costs the rich result.
        generateFAQSchema([
            { question: "What is organic growth SEO?", answer: "Organic growth SEO (Search Engine Optimization) is the strategic process of improving a website's visibility in unpaid search engine results (SERPs). Unlike paid ads, it focuses on long-term, sustainable traffic by optimizing content, technical architecture, and authority signals to match search intent and Google's E-E-A-T guidelines." },
            { question: "How long does it take to see results from organic SEO?", answer: "Typically, meaningful results from Organic SEO services are seen within 4 to 6 months. However, technical fixes can show impact in weeks, while competitive keywords may take 6-12 months. We focus on \"quick wins\" to show early momentum while building toward long-term organic search visibility." },
            { question: "Why is organic growth important for SEO?", answer: "Organic growth is crucial because it provides sustainable, cost-effective traffic. It builds brand authority and trust, which paid ads cannot buy. Users trust organic results more, leading to higher click-through rates (CTR) and better conversion rates for organic SEO for lead generation." },
            { question: "How do you measure organic SEO growth?", answer: "We measure growth using Data-driven organic growth SEO metrics: Organic Traffic (Total non-paid visits), Keyword Rankings (Positions for primary and secondary terms), Conversions (leads, sales, or sign-ups attributed to organic search), and CTR (Percentage of impressions that result in clicks)." },
            { question: "What are the best strategies for organic SEO growth in 2026?", answer: "The best strategies for How to grow organic traffic in 2026 include: Prioritizing User Experience (UX) for SEO, Creating high-E-E-A-T content that answers direct questions (optimizing for AI Overviews), Building Topical Authority through clusters, and Focusing on Organic SEO for mobile and voice search." },
        ]),

        generateHowToSchema({
            name: "Our 6-Phase SEO Growth Process",
            description: "A proven 6-phase SEO methodology that has delivered sustained organic traffic growth, page-1 keywords, and strong ROI for clients across a broad range of industries.",
            steps: [
                { name: "Organic SEO Audit and Growth Roadmap", text: "Deep technical audit covering crawlability, Core Web Vitals, indexation, schema gaps, and competitor analysis. Timeline: Week 1-2.", url: "https://www.cinuteinfomedia.com/services/seo-services/#step-audit" },
                { name: "Strategic Keyword Research", text: "Data-driven keyword research, topical mapping, content gap analysis, and pillar-cluster architecture design. Timeline: Week 2-3.", url: "https://www.cinuteinfomedia.com/services/seo-services/#step-strategy" },
                { name: "Technical Fixes & Enhancements", text: "Fixing crawl issues, improving site speed, implementing schema markup, and optimizing Core Web Vitals. Timeline: Week 3-4.", url: "https://www.cinuteinfomedia.com/services/seo-services/#step-technical" },
                { name: "Content Optimization & Creation", text: "Publishing E-E-A-T optimized content, meta tag optimization, internal linking, and content siloing. Ongoing.", url: "https://www.cinuteinfomedia.com/services/seo-services/#step-content" },
                { name: "Authority Building", text: "Digital PR campaigns, high-authority guest posts, broken link building, and HARO outreach. Ongoing.", url: "https://www.cinuteinfomedia.com/services/seo-services/#step-links" },
                { name: "Performance Tracking & Transparency", text: "Monthly performance reports, ranking tracking, traffic analysis, and strategy refinement based on data. Monthly.", url: "https://www.cinuteinfomedia.com/services/seo-services/#step-reporting" },
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
