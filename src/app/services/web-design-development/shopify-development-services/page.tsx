import Hero from "@/components/services/web-design-development/shopify-development-services/Hero";
import ServiceOverview from "@/components/services/web-design-development/shopify-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/shopify-development-services/SolutionTypes";
import TechStack from "@/components/services/web-design-development/shopify-development-services/TechStack";
import Process from "@/components/services/web-design-development/shopify-development-services/Process";
import WhyChooseUs from "@/components/services/web-design-development/shopify-development-services/WhyChooseUs";
import CTA from "@/components/services/web-design-development/shopify-development-services/CTA";

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
    title: 'Shopify Development Services | Cinute InfoMedia',
    description: 'Scale your brand with expert Shopify development services. From custom theme design to Shopify Plus migration & SEO optimization.',
    url: '/services/web-design-development/shopify-development-services',
    keywords: [
        'Shopify services',
        'Shopify development services',
        'Shopify store design services',
        'Shopify marketing agency',
        'Shopify SEO services',
        'Shopify Plus development',
        'Hire Shopify expert',
    ],
});

export default function ShopifyEcommercePage() {
    const shopifySchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Shopify Development Services | Cinute InfoMedia",
            description: "Scale your brand with expert Shopify development services. From custom theme design to Shopify Plus migration & SEO optimization.",
            urlPath: "/services/web-design-development/shopify-development-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/shopify-development-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/shopify-development-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/shopify-development-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Shopify Development Services", url: "/services/web-design-development/shopify-development-services" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/shopify-development-services/#breadcrumb"),

        generateServiceSchema({
            name: "Shopify Development Services & Shopify Marketing Agency",
            description: "Professional Shopify development services for high-growth global brands. From high-converting store setup to enterprise-grade Shopify Plus solutions, we deliver precision-engineered experiences that dominate search rankings and drive sustainable ROI. Shopify stores built, high sales volume processed, high availability.",
            urlPath: "/services/web-design-development/shopify-development-services",
            serviceType: "Shopify Development & E-commerce",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "5000",
                validFrom: "2025-01-01",
                description: "Shopify development starting from $5,000 for startups up to $100,000+ for enterprise/Shopify Plus. Book your free Shopify audit today.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/shopify-development-services/#itemList",
            name: "Core Shopify Development Services",
            description: "Comprehensive Shopify development services from store design to Shopify Plus enterprise solutions and headless commerce.",
            items: [
                { name: "Shopify Store Design", description: "Conversion-optimized themes and UX tailored for Shopify Online Store 2.0 with mobile-first design principles." },
                { name: "Shopify Plus Development", description: "Enterprise-grade solutions for high-volume brands needing advanced customization, checkout extensibility, and multi-store management." },
                { name: "Headless & Hydrogen Commerce", description: "Blazing-fast decoupled storefronts using Shopify's Hydrogen and Oxygen framework for maximum performance." },
                { name: "Seamless Platform Migration", description: "Zero-downtime migration from Magento, WooCommerce, or BigCommerce to Shopify with full data integrity." },
                { name: "App Development & Integration", description: "Custom Shopify apps and seamless integration with ERP, CRM, and logistics systems." },
                { name: "Mobile App Development", description: "High-converting iOS and Android apps synced with your Shopify backend for omnichannel commerce." },
            ],
        }),

        // Mirrors the visible accordion copy in
        // src/components/services/web-design-development/shopify-development-services/CTA.tsx verbatim.
        // Google requires FAQPage markup to match the on-page text, so these two
        // must be edited together — paraphrasing here costs the rich result.
        generateFAQSchema([
            { question: "What are the benefits of using Shopify for ecommerce?", answer: "Shopify remains the world's leading e-commerce platform in 2026 due to its unparalleled reliability, security, and massive app ecosystem. It offers a user-friendly backend for merchants while allowing developers the flexibility to build highly customized stores via Shopify Plus and Headless Commerce architectures." },
            { question: "How much do professional Shopify development services cost in 2026?", answer: "The Shopify ecommerce cost for startups typically ranges from $5,000 to $15,000 for a custom store setup. Mid-market and enterprise projects involving Shopify Plus development or complex migrations can range from $25,000 to $100,000+. The ROI usually pays for itself within 6-12 months." },
            { question: "How do I choose the best Shopify agency for my business?", answer: "Look for a certified Shopify Partner with a deep understanding of both technical development and digital marketing. The best agency should prioritize performance (speed) and SEO, as these are the primary drivers of e-commerce revenue in the 2026 search era." },
            { question: "What is included in a full-service Shopify marketing package?", answer: "A comprehensive package usually includes Shopify SEO services, PPC management (Google/Meta Ads), email marketing automation (Klaviyo), and Conversion Rate Optimization (CRO) to handle every stage of the funnel - from attraction to retention." },
            { question: "How long does it take to launch a custom Shopify store?", answer: "A standard custom store launch usually takes 6-10 weeks, covering strategy, design, development, and testing. More complex enterprise projects or headless builds may take 3-5 months to ensure every integration is perfectly optimized." },
            { question: "Can you integrate Shopify POS with my existing retail software?", answer: "Yes, we specialize in Shopify POS integration for retail businesses. We can sync your online Shopify store with physical retail locations, ensuring real-time inventory management, unified customer profiles, and consistent pricing across all channels." },
            { question: "Do you offer ongoing Shopify maintenance and support?", answer: "Absolutely. Our Shopify maintenance and ongoing support services include monthly security audits, theme updates, app performance monitoring, and fresh SEO implementation to keep your store operational, secure, and ahead of competitors 24/7." },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/shopify-development-services/#faq"),

        generateHowToSchema({
            name: "Our Shopify Development Process",
            description: "A proven 6-step methodology for building Shopify stores that have processed high sales volume with high availability and thoroughly tested deployment.",
            steps: [
                { name: "Discovery & Strategic Audit", text: "Analysis of current performance, competitor benchmarking, conversion bottleneck identification, and strategic roadmap creation.", url: "https://www.cinuteinfomedia.com/services/web-design-development/shopify-development-services/#step-discovery" },
                { name: "Design & UX Prototyping", text: "Mobile-first designs focused on user psychology, brand storytelling, and conversion-optimized layouts.", url: "https://www.cinuteinfomedia.com/services/web-design-development/shopify-development-services/#step-design" },
                { name: "Custom Development", text: "Clean, scalable code using latest Shopify APIs, Liquid templating, and Hydrogen architecture for high-performance stores.", url: "https://www.cinuteinfomedia.com/services/web-design-development/shopify-development-services/#step-development" },
                { name: "Third-Party Integrations", text: "Connecting your store to ERPs, CRMs, payment gateways, shipping providers, and marketing automation tools.", url: "https://www.cinuteinfomedia.com/services/web-design-development/shopify-development-services/#step-integration" },
                { name: "Rigorous Testing & QA", text: "Multi-device testing, speed optimization, security audits, and performance validation across all platforms.", url: "https://www.cinuteinfomedia.com/services/web-design-development/shopify-development-services/#step-testing" },
                { name: "Launch & SEO Deployment", text: "Strategic go-live support with 2026-ready SEO indexing, analytics setup, and post-launch monitoring.", url: "https://www.cinuteinfomedia.com/services/web-design-development/shopify-development-services/#step-launch" },
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
        <main style={{ "--page-selection-bg": "#96bf48" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(shopifySchema) }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <CTA />
        </main>
    );
}
