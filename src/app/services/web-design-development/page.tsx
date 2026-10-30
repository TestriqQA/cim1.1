import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/Hero';
import ServiceOverview from '@/components/services/web-design-development/ServiceOverview';
import SEOPerformance from '@/components/services/web-design-development/SEOPerformance';
import CTA from '@/components/services/web-design-development/CTA';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const WebsiteTypes = dynamic(() => import('@/components/services/web-design-development/WebsiteTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/web-design-development/Technologies'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/web-design-development/WebDesignFAQ'), {
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
    title: 'Web Design & Development Company | Cinute InfoMedia',
    description: 'Custom web design and development in Next.js, WordPress and Shopify. SEO-ready builds with clear KPIs. Book a free website audit.',
    url: '/services/web-design-development',
    keywords: [
        'Web Development Company',
        'Custom Website Development',
        'Web Design Services',
        'Responsive Web Design',
        'Professional Web Design Agency',
        'Custom Web Development Agency',
        'Affordable Website Development',
    ],
    image: '/og-images/web-design-development.webp',
});

export default function WebDesignDevelopmentPage() {
    const webDevSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Web Design & Development Company | Cinute InfoMedia",
            description: "Custom web design and development in Next.js, WordPress and Shopify. SEO-ready builds with clear KPIs. Book a free website audit.",
            urlPath: "/services/web-design-development",
            datePublished: "2025-01-01",
            dateModified: "2026-03-17",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/#breadcrumb"),

        generateServiceSchema({
            name: "Web Design & Development Services",
            description: "Transform your business with expert web development services. We deliver custom, high-performance websites engineered for global markets with sub-2s load times and sustained organic growth.",
            urlPath: "/services/web-design-development",
            serviceType: "Web Design & Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Get a free website audit and custom quote for your web development project.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/#itemList",
            name: "Web Design & Development Sub-Services",
            description: "Comprehensive web development solutions — from industry-specific platforms to technology-specific development services.",
            items: [
                { name: "Business & Corporate Websites", url: "/services/web-design-development/business-corporate" },
                { name: "Web Applications & SaaS Development", url: "/services/web-design-development/saas-development-services" },
                { name: "E-commerce Store Development", url: "/services/web-design-development/ecommerce-development-company" },
                { name: "Blogs & News Portal Development", url: "/services/web-design-development/blog-design-services" },
                { name: "Personal Branding & Custom Portfolio Website Design", url: "/services/web-design-development/branding-services" },
                { name: "EdTech & LMS Development", url: "/services/web-design-development/edtech-lms" },
                { name: "Healthcare Portal Development", url: "/services/web-design-development/healthcare-portals" },
                { name: "Real Estate Platform Development", url: "/services/web-design-development/real-estate-platforms" },
                { name: "FinTech & Banking Solutions", url: "/services/web-design-development/fintech-solutions" },
                { name: "Travel & Hospitality Solutions", url: "/services/web-design-development/travel-and-hospitality-services" },
                { name: "Entertainment & Media Solutions", url: "/services/web-design-development/entertainment-media" },
                { name: "Modern React & Next.js Development", url: "/services/web-design-development/nextjs-development-services" },
                { name: "CMS Development Experts", url: "/services/web-design-development/headless-traditional-cms" },
                { name: "Shopify Development Services", url: "/services/web-design-development/shopify-development-services" },
                { name: "Node.js & Backend Development", url: "/services/web-design-development/nodejs-backend" },
                { name: "Laravel & PHP Development", url: "/services/web-design-development/laravel-php" },
                { name: "WordPress Development Services", url: "/services/web-design-development/wordpress-development-services" },
                { name: "Python & Django Development", url: "/services/web-design-development/python-django" },
                { name: "Astro Framework Development", url: "/services/web-design-development/astro-framework-services" },
                { name: "Java & Spring Boot Development", url: "/services/web-design-development/java-spring-boot" },
                { name: "Drupal CMS Development", url: "/services/web-design-development/drupal-cms" },
                { name: "Strapi Headless CMS Development", url: "/services/web-design-development/strapi-headless-cms" },
                { name: "Contentful Headless CMS Development", url: "/services/web-design-development/contentful-headless-cms" },
            ],
        }),

        // These five mirror the questions WebDesignFAQ.tsx actually renders, word
        // for word. They used to be a separate, differently-worded set, so the
        // FAQPage markup described content that appeared nowhere on the page.
        // Answers here are plain-text equivalents of the rendered ones (those
        // carry inline links, which JSON-LD cannot hold).
        // Still open for the content team: audit finding #15 — all five ask how
        // to choose an agency, while buyers ask about cost, timeline, technology,
        // ownership, support and SEO. Change the pair in both places together.
        generateFAQSchema([
            { question: "How do I choose the right web design and development partner?", answer: "Selecting the right web development company requires evaluating several critical factors: Portfolio & Case Studies (review their previous work in your industry), Technical Expertise (ensure they master modern technologies like React, Next.js, Node.js), Process (a professional web design agency should have a clear development process), and Post-Launch Support (maintenance, security updates). We recommend scheduling consultations with 3-5 agencies to compare technical approaches." },
            { question: "What should I look for in a web design and development agency?", answer: "Key evaluation criteria include Technical Capabilities (modern framework expertise, full-stack skills, cloud deployment), Design Excellence (UI/UX portfolio, accessibility compliance), Business Understanding (industry experience, ROI-focused approach), and Project Management (Agile methodology, budget transparency)." },
            { question: "How to evaluate a professional web design agency?", answer: "Our 10-point evaluation framework includes: requesting case studies with documented results, technical assessment of their tech stack, checking client references, reviewing code quality, assessing communication clarity, verifying certifications (Google Partner, AWS), testing their own website for speed and SEO, and evaluating cultural fit. Beware of red flags like no portfolio, unwilling to sign NDAs, or unrealistic promises." },
            { question: "What questions should I ask before hiring a web design agency?", answer: "Essential questions cover Technical aspects (recommended stack, security, mobile responsiveness, Core Web Vitals), Process (timeline, revisions, communication), Business (references, pricing, ownership), and SEO & Marketing (SEO approach, analytics readiness, scalability)." },
            { question: "How to choose a web design company for long-term growth?", answer: "Think beyond the initial launch. Evaluate scalability factors (architecture, modularity, framework support) and partnership indicators (retention programs, regular updates, proactive performance suggests). Our long-term model includes quarterly performance reviews, monthly analytics reports, and flexible retainer options for continuous improvement." },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/#faq"),

        generateHowToSchema({
            name: "Our Professional Web Development Process",
            description: "Our proven 6-step methodology ensures every web development project delivers measurable results with rigorously tested delivery.",
            totalTime: "PT12W",
            steps: [
                { name: "Expert Audit & Discovery", text: "Deep analysis of your competition and global market trends. We define technical requirements for enterprise scalability.", url: "https://www.cinuteinfomedia.com/services/web-design-development/#step-audit" },
                { name: "Strategic Architecture", text: "Planning for Core Web Vitals and global accessibility. We design high-fidelity UI/UX that reflects brand authority.", url: "https://www.cinuteinfomedia.com/services/web-design-development/#step-architecture" },
                { name: "Agile Engineering", text: "rigorously tested delivery using modern, secure tech stacks (Next.js, TypeScript). Clean, modular code for future growth.", url: "https://www.cinuteinfomedia.com/services/web-design-development/#step-engineering" },
                { name: "Global SEO & Performance", text: "Rigorous QA with built-in technical SEO that has delivered sustained organic traffic growth for global clients.", url: "https://www.cinuteinfomedia.com/services/web-design-development/#step-seo" },
                { name: "Seamless Deployment", text: "Zero-downtime launch with AWS/Vercel integration and final cross-region performance monitoring.", url: "https://www.cinuteinfomedia.com/services/web-design-development/#step-deployment" },
                { name: "Continuous Optimization", text: "24/7 technical support and performance tuning based on real-time data to maintain your competitive edge.", url: "https://www.cinuteinfomedia.com/services/web-design-development/#step-optimization" },
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
        <main data-page-theme="blue" className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <WebsiteTypes />
            <Process />
            <Technologies />
            <SEOPerformance />
            <FAQ />
            <CTA />
        </main>
    );
}
