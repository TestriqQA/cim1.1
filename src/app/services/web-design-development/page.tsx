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
    title: 'Web Development Company | Custom Website Development 2026',
    description: 'Expert Web Development Agency delivering custom web design services, responsive websites & scalable solutions. strong client satisfaction. Get free audit today!',
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
            name: "Web Development Company | Custom Website Development 2026",
            description: "Expert Web Development Agency delivering custom web design services, responsive websites & scalable solutions. strong client satisfaction. Get free audit today!",
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

        generateFAQSchema([
            { question: "How do I choose the right web development partner for my business?", answer: "Evaluate their portfolio for projects similar to yours, assess technical expertise in modern frameworks like React and Next.js, look for process transparency through Agile methodology, and ensure they offer comprehensive post-launch support and maintenance." },
            { question: "What should I look for in a professional web development company?", answer: "Key factors include technical capabilities like cloud deployment and full-stack development, design excellence in UI/UX and accessibility standards, use of Agile methodology for iterative delivery, and proven track records with certifications from Google or AWS." },
            { question: "How can I evaluate a web design agency's past work and quality?", answer: "Review their case studies and portfolio for measurable results, check client references and testimonials, verify industry certifications from Google or AWS, and test the agency's own website for performance, load speed, and mobile responsiveness." },
            { question: "What questions should I ask before hiring a web developer?", answer: "Ask about their recommended technology stack for your specific use case, security protocols and data protection measures, mobile responsiveness strategy, approach to SEO including technical SEO and schema markup, and their ongoing support model after launch." },
            { question: "How do I ensure my website development supports long-term business growth?", answer: "Ensure the agency plans for architecture scalability from day one, uses modular code that can grow with your business, provides proactive performance monitoring, and offers continuous optimization based on real-time data and analytics." },
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
