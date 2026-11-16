import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/saas-development-services/Hero';
import ServiceOverview from '@/components/services/web-design-development/saas-development-services/ServiceOverview';
import WhyChooseUs from '@/components/services/web-design-development/saas-development-services/WhyChooseUs';
import Process from '@/components/services/web-design-development/saas-development-services/Process';
import TechStack from '@/components/services/web-design-development/saas-development-services/TechStack';
import CTA from '@/components/services/web-design-development/saas-development-services/CTA';

// Lazy load below-the-fold client components for better performance
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/saas-development-services/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/saas-development-services/UseCases'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/web-design-development/saas-development-services/FAQ'), {
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
    title: 'Custom SaaS Development Company | SaaS Web App Services',
    description: 'Expert SaaS development company building scalable web applications with multi-tenant architecture, subscription billing & enterprise security. Get free audit!',
    url: '/services/web-design-development/saas-development-services',
    keywords: [
        'SaaS Development Company',
        'Custom SaaS Development',
        'SaaS Web Application Development',
        'SaaS App Development Services',
        'Multi-Tenant Architecture',
        'MVP Development Services',
    ],
    image: '/og-images/Saas.webp',
});

export default function WebApplicationsSaaSPage() {
    const saasSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Custom SaaS Development Company | SaaS Web App Services",
            description: "Expert SaaS development company building scalable web applications with multi-tenant architecture, subscription billing & enterprise security. Get free audit!",
            urlPath: "/services/web-design-development/saas-development-services",
            datePublished: "2025-01-01",
            dateModified: "2026-03-17",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "SaaS Development Services", url: "/services/web-design-development/saas-development-services" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services/#breadcrumb"),

        generateServiceSchema({
            name: "Custom SaaS Development Services",
            description: "Your trusted SaaS development company for building scalable, high-performance web applications. We specialize in custom SaaS platform development, multi-tenant architectures, and secure cloud solutions.",
            urlPath: "/services/web-design-development/saas-development-services",
            serviceType: "SaaS Application Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Book a free SaaS strategy call. Custom SaaS MVP development starting from 4-8 weeks.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/saas-development-services/#itemList",
            name: "SaaS Development Solution Types",
            description: "End-to-end SaaS development solutions from MVP to enterprise-grade platforms.",
            items: [
                { name: "Custom Web Applications", description: "Bespoke SaaS web app development in 3-6 months using React, Node.js, PostgreSQL, and AWS." },
                { name: "SaaS Platforms (Multi-Tenant)", description: "Production-ready multi-tenant SaaS platforms in 6-12 months using Next.js, FastAPI, PostgreSQL, and Redis." },
                { name: "SaaS MVP Development", description: "Rapid prototyping and MVP development in 4-8 weeks using Vite, Supabase, Vercel, and Stripe." },
                { name: "Dashboards & Admin Panels", description: "Data visualization and admin interfaces in 2-4 months using React Admin, Recharts, and Node.js." },
                { name: "Billing & Subscription Systems", description: "Complex billing logic and subscription management in 2-3 months using Stripe Billing and Chargebee." },
                { name: "API-Driven Applications", description: "Backend services and RESTful/GraphQL APIs in 2-4 months using Node.js, FastAPI, and GraphQL." },
            ],
        }),

        // Mirrors the visible accordion copy in
        // src/components/services/web-design-development/saas-development-services/FAQ.tsx verbatim.
        // Google requires FAQPage markup to match the on-page text, so these two
        // must be edited together — paraphrasing here costs the rich result.
        generateFAQSchema([
            { question: "What is SaaS web application development?", answer: "SaaS web application development is the process of building cloud-based software platforms delivered over the internet via subscription models. Unlike traditional software, SaaS applications are hosted on cloud infrastructure (AWS, GCP, Azure), support multiple users (multi-tenancy), and offer features like automated billing, user management, and API integrations. Examples include Salesforce, Slack, and Zoom." },
            { question: "How much does SaaS development cost in India?", answer: "SaaS development costs in India range from $15,000 for a basic MVP (6-8 weeks) to $100,000+ for enterprise-grade platforms with advanced features like AI/ML, microservices architecture, and custom integrations. Factors affecting cost include feature complexity (50-100+ user stories), tech stack, third-party integrations, and team composition. Average hourly rates: $25-50/hour for mid-senior developers in India vs. $100-200/hour in the US." },
            { question: "What are the best SaaS development companies in Mumbai?", answer: "Top SaaS development companies in Mumbai include firms with proven track records in cloud-based SaaS platforms, multi-tenant architecture, and agile methodologies. Key selection criteria: Portfolio of successfully launched SaaS products, technical expertise in React/Node.js/AWS, and security certifications (ISO 27001, SOC 2). Hire SaaS developers Mumbai with experience in your industry for faster time-to-market." },
            { question: "How to build a scalable SaaS app?", answer: "To build a scalable SaaS application, follow these steps: 1) Choose microservices or modular architecture, 2) Implement database sharding, 3) Use managed cloud services (AWS RDS, Lambda), 4) Optimize database queries with caching (Redis), 5) Configure load balancing, 6) Integrate CDN for static assets, 7) Set up monitoring & alerting (Datadog), and 8) Configure auto-scaling policies with Kubernetes or AWS Auto Scaling Groups." },
            { question: "What are the steps to develop a custom SaaS platform?", answer: "Steps to develop custom SaaS platform: 1) Discovery & Requirements Gathering, 2) Technical Architecture Design (multi-tenancy approach), 3) UI/UX Prototyping, 4) Agile Development with 2-week sprints, 5) Quality Assurance using automated testing, 6) Beta Launch, 7) Production Deployment on cloud infrastructure, and 8) Iterative Feature Development based on user analytics. Timeline: 3-6 months for MVP, 6-12 months for full-featured SaaS platform." },
            { question: "How long does it take to build a SaaS MVP?", answer: "A SaaS MVP typically takes 6-12 weeks to develop with a focused scope of 10-15 core features. Timeline depends on feature complexity (auth, billing, dashboards), user roles, third-party integrations, and team size. Using modern frameworks like Next.js, Supabase, and Vercel can reduce development time to 4-6 weeks." },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services/#faq"),

        generateHowToSchema({
            name: "Our SaaS Development Process",
            description: "A proven 6-step methodology for building scalable SaaS products that serve 1M+ end users with high availability.",
            steps: [
                { name: "Discovery & Product Strategy", text: "Define the problem, target users, and create a detailed product roadmap with feature prioritization.", url: "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services/#step-discovery" },
                { name: "UX/UI Design & Prototyping", text: "Create wireframes and high-fidelity interactive prototypes to validate the user experience before development.", url: "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services/#step-design" },
                { name: "Agile Development Sprints", text: "2-week development sprints with CI/CD pipelines, regular demos, and iterative feedback loops.", url: "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services/#step-agile" },
                { name: "Quality Assurance & Testing", text: "Comprehensive unit, integration, and automated testing to ensure rigorously tested delivery.", url: "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services/#step-qa" },
                { name: "Deployment & Launch", text: "Cloud infrastructure setup, security audits, and zero-downtime deployment to production.", url: "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services/#step-launch" },
                { name: "Iteration & Growth", text: "Post-launch support, performance monitoring, analytics integration, and continuous feature iteration.", url: "https://www.cinuteinfomedia.com/services/web-design-development/saas-development-services/#step-growth" },
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
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem", "--page-selection-bg": "#008ac1" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(saasSchema) }}
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
