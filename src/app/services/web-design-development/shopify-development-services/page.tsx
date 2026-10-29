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
    title: 'Expert Shopify Development Services | Shopify Marketing Agency 2026',
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
            name: "Expert Shopify Development Services | Shopify Marketing Agency 2026",
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
            description: "Professional Shopify development services for high-growth global brands. From high-converting store setup to enterprise-grade Shopify Plus solutions, we deliver precision-engineered experiences that dominate search rankings and drive sustainable ROI. 100+ stores built, high sales volume processed, high availability.",
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

        generateFAQSchema([
            { question: "What are the benefits of Shopify for e-commerce in 2026?", answer: "Shopify offers unparalleled reliability, security, and a massive app ecosystem in 2026. It provides enterprise-grade infrastructure with high availability, built-in payment processing, and a thriving developer community." },
            { question: "How much does Shopify development cost?", answer: "Shopify development costs vary by business size: Startups typically range from $5,000 to $15,000, while mid-market and enterprise solutions range from $25,000 to $100,000+ depending on complexity and customization needs." },
            { question: "How to choose the right Shopify development agency?", answer: "Look for certified Shopify Partners who prioritize performance, speed optimization, and SEO best practices. Verify their portfolio, client testimonials, and expertise with Shopify Plus and headless commerce." },
            { question: "What does a Shopify marketing package include?", answer: "Our Shopify marketing package includes comprehensive Shopify SEO, PPC advertising, Klaviyo email automation, and Conversion Rate Optimization (CRO) strategies tailored for e-commerce growth." },
            { question: "How long does it take to launch a Shopify store?", answer: "Standard Shopify store development takes 6-10 weeks. Enterprise and headless commerce implementations typically require 3-5 months depending on customization complexity and integrations." },
            { question: "Can you integrate Shopify with POS systems?", answer: "Yes, we specialize in syncing Shopify online stores with physical retail locations for real-time inventory management, unified reporting, and seamless omnichannel customer experiences." },
            { question: "What post-launch support do you provide?", answer: "Our post-launch support includes monthly security audits, theme updates, performance monitoring, bug fixes, and ongoing optimization to ensure your store runs smoothly." },
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
