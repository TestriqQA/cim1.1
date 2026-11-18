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
    title: 'Next.js Development Services | Cinute InfoMedia',
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
        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Next.js Development Services | Cinute InfoMedia",
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
            { name: "Web Design", url: "/services/web-design-development" },
            { name: "Next.js & React", url: "/services/web-design-development/nextjs-development-services" },
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

        // Mirrors the visible accordion copy in
        // src/components/services/web-design-development/nextjs-development-services/FAQ.tsx verbatim.
        // Google requires FAQPage markup to match the on-page text, so these two
        // must be edited together — paraphrasing here costs the rich result.
        generateFAQSchema([
            { question: "What are the benefits of using Next.js for business in 2026?", answer: "Next.js offers superior performance, better SEO through Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR), and improved developer experience. In 2026, its ability to deliver near-instant load times and optimize Core Web Vitals is crucial for maintaining top search rankings and high user conversion rates." },
            { question: "How much does it cost to build a custom Next.js website?", answer: "The cost vary significantly depending on complexity, features, and integrations. Typically, a professional Next.js project can range from $5,000 for a straightforward marketing site to $50,000+ for complex enterprise SaaS platforms or large-scale e-commerce solutions. We provide tailored quotes after a strategic discovery phase." },
            { question: "How do I choose the best React development agency?", answer: "Look for an agency with a proven track record (E-E-A-T), deep expertise in the latest React/Next.js features (like App Router and Server Components), certified Vercel/AWS partnerships, and a focus on performance-driven results rather than just 'making it work'." },
            { question: "What is the difference between Next.js and React?", answer: "React is a library for building user interfaces, while Next.js is a framework built on top of React. Next.js provides additional features like routing, server-side rendering, static site generation, and API routes out of the box, which are not included in core React. Next.js is essential for building production-ready, SEO-friendly applications." },
            { question: "How long does it take to develop a Next.js web application?", answer: "A standard Next.js project typically takes between 4 to 12 weeks. Small marketing sites might take 4-6 weeks, while complex SaaS products or enterprise applications can take 3-6 months or more, depending on the scope of work and integration requirements." },
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
