import dynamic from 'next/dynamic';
import Hero from '@/components/about/Hero';

// Lazy load below-the-fold components
const Services = dynamic(() => import('@/components/about/Services'));
const Process = dynamic(() => import('@/components/about/Process'));
const WhyChooseUs = dynamic(() => import('@/components/about/WhyChooseUs'));
const Industries = dynamic(() => import('@/components/about/Industries'));
const Impact = dynamic(() => import('@/components/about/Impact'));
const LeadJourney = dynamic(() => import('@/components/about/LeadJourney'));
const CTA = dynamic(() => import('@/components/about/CTA'));

import { getPageMetadata } from '@/lib/metadata';
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateAboutPageSchema,
    generateBreadcrumbSchema,
    generateItemListSchema,
    generateHowToSchema,
    generateNavigationSchema,
} from "@/lib/schema";

export const metadata = getPageMetadata({
    title: 'About Us | Cinute InfoMedia - Digital Growth Agency',
    description: 'Learn about Cinute InfoMedia (CIM), a digital growth agency helping businesses build, market, and scale with creativity, data, and technology. 300+ global projects. strong client retention.',
    url: '/about',
    image: '/og-images/About.webp',
});

export default function AboutPage() {
    const aboutSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency that helps businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateAboutPageSchema({
            name: "About Us | Cinute InfoMedia - Digital Growth Agency",
            description: "Learn about Cinute InfoMedia (CIM), a digital growth agency helping businesses build, market, and scale with creativity, data, and technology. 300+ global projects. strong client retention.",
            urlPath: "/about",
            datePublished: "2025-11-21",
            dateModified: "2026-03-02",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About Us", url: "/about" },
        ], "https://www.cinuteinfomedia.com/about/#breadcrumb"),

        generateItemListSchema({
            id: "/about/#industries-list",
            name: "Industries We Serve",
            description: "CIM has experience across multiple sectors, delivering tailored strategies that deliver results.",
            items: [
                { name: "IT, SaaS & Software Development", url: "/services/web-design-development/saas-development-services" },
                { name: "EdTech & E-Learning", url: "/services/web-design-development/edtech-lms" },
                { name: "HR & Recruitment", url: "/services/web-design-development/business-corporate" },
                { name: "Healthcare & Wellness", url: "/services/web-design-development/healthcare-portals" },
                { name: "Retail, Jewelry & E-Commerce", url: "/services/web-design-development/ecommerce-development-company" },
                { name: "Entertainment & Media", url: "/services/web-design-development/entertainment-media" },
                { name: "Finance & Banking", url: "/services/web-design-development/fintech-solutions" },
                { name: "Real Estate", url: "/services/web-design-development/real-estate-platforms" },
                { name: "Travel & Hospitality", url: "/services/web-design-development/travel-and-hospitality-services" },
            ],
        }),

        generateHowToSchema({
            name: "How We Work - Our 4-Step Growth Framework",
            description: "Every project begins with clarity and strategy. Our structured approach ensures measurable, sustainable growth.",
            totalTime: "PT8W",
            steps: [
                { name: "Discover", text: "Understand your business, goals, market positioning, and target audience through comprehensive discovery sessions and competitive analysis.", url: "https://www.cinuteinfomedia.com/about/#step-discover" },
                { name: "Design", text: "Build digital assets, brand touchpoints, and user experiences that resonate with your audience and align with business objectives.", url: "https://www.cinuteinfomedia.com/about/#step-design" },
                { name: "Deploy", text: "Launch campaigns backed by data-driven targeting, technical precision, and performance optimization strategies.", url: "https://www.cinuteinfomedia.com/about/#step-deploy" },
                { name: "Optimize", text: "Continuously analyze performance metrics, automate workflows, refine strategies, and scale growth based on real-time insights.", url: "https://www.cinuteinfomedia.com/about/#step-optimize" },
            ],
        }),

        generateNavigationSchema([
            { name: "Home", url: "/" },
            {
                name: "Services",
                url: "/services",
                children: [
                    { name: "Web Design & Development", url: "/services/web-design-development" },
                    { name: "Mobile App Development", url: "/services/mobile-app-development" },
                    { name: "Social Media Marketing", url: "/services/social-media-marketing-services" },
                    { name: "AI Workflows & Automations", url: "/services/ai-workflows-automations-services" },
                    { name: "AI-Powered Chatbots", url: "/services/ai-chatbots-services" },
                    { name: "Organic Growth & SEO", url: "/services/seo-services" },
                    { name: "Performance Marketing", url: "/services/performance-marketing" },
                    { name: "Brand Identity & Design", url: "/services/brand-identity-design" },
                    { name: "Additional Support Services", url: "/services/additional-support-services" },
                ],
            },
            { name: "Blog", url: "/blog" },
            { name: "About", url: "/about" },
            { name: "Careers", url: "/careers" },
            { name: "Contact", url: "/contact" },
        ])
    );

    return (
        <main className="bg-white" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
            />
            <Hero />
            <Services />
            <Process />
            <WhyChooseUs />
            <Industries />
            <Impact />
            <LeadJourney />
            <CTA />
        </main>
    );
}
