import Hero from "@/components/services/web-design-development/nextjs-development-services/Hero";
import ServiceOverview from "@/components/services/web-design-development/nextjs-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/nextjs-development-services/SolutionTypes";
import TechStack from "@/components/services/web-design-development/nextjs-development-services/TechStack";
import Process from "@/components/services/web-design-development/nextjs-development-services/Process";
import WhyChooseUs from "@/components/services/web-design-development/nextjs-development-services/WhyChooseUs";
import FAQ from "@/components/services/web-design-development/nextjs-development-services/FAQ";
import CTA from "@/components/services/web-design-development/nextjs-development-services/CTA";

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
    title: 'Next.js Development Agency | Expert React JS Development Company 2026',
    description: 'Expert Next.js development services for high-performance apps. Hire React developers for Enterprise, SaaS & E-commerce.',
    url: '/services/web-design-development/nextjs-development-services',
    keywords: [
        'next.js development agency',
        'react js development company',
        'next.js development services',
        'react development services',
        'next.js for enterprise',
        'next.js for saas',
        'next.js for e-commerce',
        'core web vitals optimization',
        'react development agency',
        'next.js server-side rendering',
    ],
    image: '/og-images/nextjs-development-services.webp',
});

export default function NextjsReactPage() {
    const nextjsSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Next.js Development Agency | Expert React JS Development Company 2026",
            description: "Expert Next.js development services for high-performance apps. Hire React developers for Enterprise, SaaS & E-commerce.",
            urlPath: "/services/web-design-development/nextjs-development-services",
            datePublished: "2025-01-01",
            dateModified: "2026-03-17",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/nextjs-development-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/nextjs-development-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/nextjs-development-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Next.js Development Services", url: "/services/web-design-development/nextjs-development-services" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/nextjs-development-services/#breadcrumb"),

        generateServiceSchema({
            name: "Next.js Development Services & React JS Development Company",
            description: "Expert Next.js development agency and React JS development company building lightning-fast, SEO-optimized, and highly scalable web applications. Expert React development services delivering seamless user experiences with React 19 and Next.js 16.",
            urlPath: "/services/web-design-development/nextjs-development-services",
            serviceType: "Next.js & React Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "5000",
                validFrom: "2025-01-01",
                description: "Next.js development services starting from $5,000 for simple sites up to $50,000+ for complex enterprise SaaS/E-commerce solutions. Book your free strategy session today.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/nextjs-development-services/#itemList",
            name: "Next.js & React Development Solutions",
            description: "Comprehensive Next.js and React development services from enterprise applications to headless CMS and migration services.",
            items: [
                { name: "Enterprise React Development", description: "Scalable, multi-tenant architectures for large-scale operations. Robust systems built to handle high traffic and complex business logic." },
                { name: "Next.js Ecommerce", description: "High-performance storefronts with Shopify or BigCommerce integration, optimized for conversion and SEO." },
                { name: "SaaS Product Development", description: "Specialized agency services for building SaaS products and dashboards with subscription management and analytics." },
                { name: "Next.js Headless CMS", description: "Integration with Contentful, Strapi, or Sanity for dynamic content management with blazing-fast frontend delivery." },
                { name: "React Native Mobile Apps", description: "Cross-platform mobile solutions with shared logic for iOS and Android using React Native framework." },
                { name: "Next.js Migration Services", description: "Seamless transition from legacy React, Vue, or Angular applications to Next.js with minimal downtime." },
            ],
        }),

        generateFAQSchema([
            { question: "What are the benefits of Next.js development in 2026?", answer: "Next.js offers superior performance, better SEO through Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR), and instant load times that are crucial for conversion optimization and search rankings." },
            { question: "How much does Next.js development cost?", answer: "Next.js development costs range from $5,000 for simple websites to $50,000+ for complex enterprise SaaS and E-commerce solutions, depending on the scope and features required." },
            { question: "How to choose the right Next.js development agency?", answer: "Look for agencies demonstrating E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), expertise in App Router and Server Components, and partnerships with platforms like Vercel and AWS." },
            { question: "What is the difference between Next.js and React?", answer: "React is the UI library for building components, while Next.js is a full-stack framework built on top of React that provides routing, server-side rendering, API routes, and other production-ready features out of the box." },
            { question: "How long does Next.js development take?", answer: "Development typically takes 4 to 12 weeks. Small websites take 4-6 weeks, while complex SaaS applications can take 3-6+ months depending on features and integrations required." },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/nextjs-development-services/#faq"),

        generateHowToSchema({
            name: "Our Next.js Development Process",
            description: "A proven 6-step methodology for building high-performance Next.js applications that achieve ultra-fast load times and near-perfect Lighthouse scores.",
            steps: [
                { name: "Strategic Discovery", text: "Analyzing business goals and technical requirements. Creating roadmaps, defining success metrics, and planning the project architecture.", url: "https://www.cinuteinfomedia.com/services/web-design-development/nextjs-development-services/#step-discovery" },
                { name: "Architecture Design", text: "Designing component libraries, state management patterns, routing architecture, and system planning for scalable applications.", url: "https://www.cinuteinfomedia.com/services/web-design-development/nextjs-development-services/#step-architecture" },
                { name: "Agile Development", text: "Sprint-based iterative development focused on feature implementation, API integrations, and React component development.", url: "https://www.cinuteinfomedia.com/services/web-design-development/nextjs-development-services/#step-development" },
                { name: "Performance Optimization", text: "Optimizing Core Web Vitals, bundle size reduction, speed tuning, and achieving near-perfect Lighthouse scores.", url: "https://www.cinuteinfomedia.com/services/web-design-development/nextjs-development-services/#step-optimization" },
                { name: "Deployment & Hosting", text: "Zero-downtime launches with CI/CD pipelines on Vercel, GitHub Actions, and cloud infrastructure setup.", url: "https://www.cinuteinfomedia.com/services/web-design-development/nextjs-development-services/#step-deployment" },
                { name: "SEO & Integration", text: "Implementing SEO audits, analytics integration, metadata optimization, and market visibility strategies.", url: "https://www.cinuteinfomedia.com/services/web-design-development/nextjs-development-services/#step-seo" },
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
        <main style={{ "--page-selection-bg": "#61dafb" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(nextjsSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <CTA />
        </main>
    );
}
