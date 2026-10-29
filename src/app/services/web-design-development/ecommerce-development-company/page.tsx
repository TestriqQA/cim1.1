import Hero from '@/components/services/web-design-development/ecommerce-development-company/Hero';
import ServiceOverview from '@/components/services/web-design-development/ecommerce-development-company/ServiceOverview';
import WhyChooseUs from '@/components/services/web-design-development/ecommerce-development-company/WhyChooseUs';
import SolutionTypes from '@/components/services/web-design-development/ecommerce-development-company/SolutionTypes';
import Process from '@/components/services/web-design-development/ecommerce-development-company/Process';
import TechStack from '@/components/services/web-design-development/ecommerce-development-company/TechStack';
import UseCases from '@/components/services/web-design-development/ecommerce-development-company/UseCases';
import FAQ from '@/components/services/web-design-development/ecommerce-development-company/FAQ';
import CTA from '@/components/services/web-design-development/ecommerce-development-company/CTA';

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
    title: 'E-commerce Website Development Services | Top Custom Store Agency',
    description: 'Scale your brand with our expert E-commerce Website Development Services. expert teams building high-ROI Magento, Shopify, & custom stores. Get a fast quote!',
    url: '/services/web-design-development/ecommerce-development-company',
    keywords: [
        'E-commerce Development',
        'Online Store Development',
        'Shopify Development',
        'WooCommerce Development',
        'E-commerce Website Design',
    ],
    image: '/og-images/E-commerce.webp',
});

export default function EcommerceStoresPage() {
    const ecomSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "E-commerce Website Development Services | Top Custom Store Agency",
            description: "Scale your brand with our expert E-commerce Website Development Services. expert teams building high-ROI Magento, Shopify, & custom stores. Get a fast quote!",
            urlPath: "/services/web-design-development/ecommerce-development-company",
            datePublished: "2025-01-01",
            dateModified: "2026-03-17",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/ecommerce-development-company/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/ecommerce-development-company/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/ecommerce-development-company/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "E-commerce Development", url: "/services/web-design-development/ecommerce-development-company" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/ecommerce-development-company/#breadcrumb"),

        generateServiceSchema({
            name: "E-commerce Website Development Services",
            description: "Expert E-commerce Development Company for global brands. We build high-ROI online stores with Shopify, Magento, WooCommerce, and custom headless commerce solutions that scale your revenue.",
            urlPath: "/services/web-design-development/ecommerce-development-company",
            serviceType: "E-commerce Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Book your free e-commerce strategy call. Custom store development with transparent pricing tailored to your needs.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/ecommerce-development-company/#itemList",
            name: "E-commerce Solutions We Build",
            description: "End-to-end e-commerce development solutions from D2C stores to multi-vendor marketplaces.",
            items: [
                { name: "B2C Online Stores", description: "Direct-to-consumer store development designed for high conversions, including AI-powered search and social commerce features." },
                { name: "B2B E-commerce Platforms", description: "Custom portals for wholesalers and manufacturers featuring bulk ordering, tiered pricing, and credit limits." },
                { name: "Marketplace Solutions", description: "Multi-vendor marketplace builds with vendor dashboards, commission management, and split payments." },
                { name: "Subscription Commerce", description: "Predictable revenue streams with flexible billing engines, churn-reduction tools, and renewal reminders." },
                { name: "Headless Commerce", description: "Future-proof API-first design with custom frontends and omnichannel-ready stack for maximum flexibility." },
            ],
        }),

        generateFAQSchema([
            { question: "How much does it cost to build an ecommerce store?", answer: "Pricing varies based on complexity. A basic Shopify store development project might start at $3k, while a custom enterprise B2B e-commerce solution can range from $20k to $100k+. We offer transparent pricing tailored to your specific feature needs." },
            { question: "What is the best ecommerce platform for small businesses?", answer: "For most small businesses, WooCommerce or Shopify offers the best balance of ease-of-use and scalability. We help you choose the right platform to minimize overhead while maximizing growth potential." },
            { question: "How can I improve my ecommerce store's conversion rate?", answer: "Start with speed and trust. Our e-commerce conversion rate optimization (CRO) audits often reveal that speeding up page loads and adding clear trust signals like security badges and reviews are the quickest wins for improving conversions." },
            { question: "How long does it take to launch a custom ecommerce store?", answer: "A template-based store can go live in 2-4 weeks. A fully custom e-commerce website design project typically takes 8-12 weeks, depending on the number of custom API integrations and unique design requirements." },
            { question: "Do you offer post-launch support and maintenance?", answer: "Yes! We provide ongoing e-commerce management services, including security patches, feature updates, and performance monitoring to ensure your store remains competitive and up-to-date." },
            { question: "Can you help migrate my store from Magento to Shopify?", answer: "Absolutely. Our Magento to Shopify migration services ensure that your product data, customer history, and SEO rankings are preserved during the transition, with minimal downtime." },
            { question: "Is my e-commerce store ADA compliant?", answer: "We prioritize e-commerce accessibility during the design and development phase. Every custom e-commerce developer at Cinute InfoMedia follows WCAG 2.1 guidelines to ensure your store is usable by everyone and protected from legal risks." },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/ecommerce-development-company/#faq"),

        generateHowToSchema({
            name: "Our E-commerce Development Process",
            description: "A proven 7-step methodology for building high-converting e-commerce stores that have generated significant revenue for our clients.",
            steps: [
                { name: "Commerce Strategy & Discovery", text: "Define business goals, competitor audit, persona mapping, and technology stack selection for your e-commerce project.", url: "https://www.cinuteinfomedia.com/services/web-design-development/ecommerce-development-company/#step-strategy" },
                { name: "UX Design & Product Merchandising", text: "Revenue-focused UX design, mobile-first layouts, and conversion triggers to maximize sales.", url: "https://www.cinuteinfomedia.com/services/web-design-development/ecommerce-development-company/#step-design" },
                { name: "Platform Development", text: "Custom store build, backend architecture, performance tuning, and platform-specific optimizations.", url: "https://www.cinuteinfomedia.com/services/web-design-development/ecommerce-development-company/#step-development" },
                { name: "Integration & Migration", text: "ERP and CRM sync, payment gateway integration, and shipping automation setup.", url: "https://www.cinuteinfomedia.com/services/web-design-development/ecommerce-development-company/#step-integration" },
                { name: "Testing & Quality Assurance", text: "Security audits, load testing, checkout flow verification, and cross-device compatibility checks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/ecommerce-development-company/#step-qa" },
                { name: "Launch & Optimization", text: "SEO setup, analytics configuration, social pixels installation, and go-live execution.", url: "https://www.cinuteinfomedia.com/services/web-design-development/ecommerce-development-company/#step-launch" },
                { name: "Growth & Iteration", text: "Continuous improvement based on real user data, A/B testing, and conversion rate optimization.", url: "https://www.cinuteinfomedia.com/services/web-design-development/ecommerce-development-company/#step-growth" },
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
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem", "--page-selection-bg": "#00b5ca" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ecomSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <SolutionTypes />
            <Process />
            <TechStack />
            <UseCases />
            <FAQ />
            <CTA />
        </main>
    );
}
