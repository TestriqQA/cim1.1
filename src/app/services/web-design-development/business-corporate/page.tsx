import Hero from '@/components/services/web-design-development/business-corporate/Hero';
import ServiceOverview from '@/components/services/web-design-development/business-corporate/ServiceOverview';
import WhyChooseUs from '@/components/services/web-design-development/business-corporate/WhyChooseUs';
import SolutionTypes from '@/components/services/web-design-development/business-corporate/SolutionTypes';
import Process from '@/components/services/web-design-development/business-corporate/Process';
import TechStack from '@/components/services/web-design-development/business-corporate/TechStack';
import UseCases from '@/components/services/web-design-development/business-corporate/UseCases';
import CTA from '@/components/services/web-design-development/business-corporate/CTA';

import { getPageMetadata } from '@/lib/metadata';
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateServiceSchema,
    generateItemListSchema,
    generateHowToSchema,
    generateNavigationSchema,
} from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Business & Corporate Website Development | Enterprise Web Solutions',
    description: 'Build a professional corporate website that establishes trust and authority. Our enterprise web development services deliver scalable, brand-aligned digital platforms for corporations, institutions, and established businesses.',
    url: '/services/web-design-development/business-corporate',
    keywords: [
        'Corporate Website Development',
        'Business Website Design',
        'Enterprise Web Solutions',
        'Professional Website Development',
        'Corporate Web Design',
    ],
    image: '/og-images/Business.webp',
});

export default function BusinessCorporatePage() {
    const corpSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Business & Corporate Website Development | Enterprise Web Solutions",
            description: "Build a professional corporate website that establishes trust and authority. Our enterprise web development services deliver scalable, brand-aligned digital platforms.",
            urlPath: "/services/web-design-development/business-corporate",
            datePublished: "2025-01-01",
            dateModified: "2026-03-17",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/business-corporate/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/business-corporate/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/business-corporate/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Business & Corporate", url: "/services/web-design-development/business-corporate" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/business-corporate/#breadcrumb"),

        generateServiceSchema({
            name: "Business & Corporate Website Development",
            description: "Build a professional corporate website that communicates trust, credibility, and brand excellence to stakeholders, investors, and clients. Enterprise-grade web solutions with high availability.",
            urlPath: "/services/web-design-development/business-corporate",
            serviceType: "Corporate Website Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Build your corporate website with enterprise-grade security and brand-aligned design. Schedule a free consultation.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/business-corporate/#itemList",
            name: "Corporate Web Solutions",
            description: "Comprehensive corporate website development solutions for enterprise businesses.",
            items: [
                { name: "Corporate Websites", description: "Flagship digital presence with brand storytelling, leadership profiles, and company history timelines." },
                { name: "Company Portals", description: "Secure internal platforms with employee directories, document repositories, and workflow tools." },
                { name: "Investor Relations Sites", description: "Platforms for financial reports, stock ticker integration, and ESG disclosures." },
                { name: "Brand-Focused Microsites", description: "Campaign-specific landing pages and product showcases for targeted marketing." },
                { name: "Compliance Websites", description: "Regulatory-compliant platforms meeting WCAG, GDPR, and SOX standards." },
                { name: "Multi-Regional Platforms", description: "Global corporate sites with multi-language CMS and localized content for international markets." },
            ],
        }),

        generateHowToSchema({
            name: "Our Corporate Website Development Process",
            description: "A proven 6-step methodology for building enterprise-grade corporate websites that establish digital authority.",
            steps: [
                { name: "Discovery & Alignment", text: "Executive interviews, brand audit, and requirements gathering to align the website vision with business objectives.", url: "https://www.cinuteinfomedia.com/services/web-design-development/business-corporate/#step-discovery" },
                { name: "Brand-Aligned Design", text: "Creating mood boards, wireframes, and high-fidelity designs that integrate with your brand identity and corporate standards.", url: "https://www.cinuteinfomedia.com/services/web-design-development/business-corporate/#step-design" },
                { name: "Enterprise Development", text: "CMS integration, API connections, and security implementation using enterprise-grade technology stacks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/business-corporate/#step-development" },
                { name: "QA & Compliance", text: "Cross-browser testing, WCAG accessibility audit, security scans, and compliance verification.", url: "https://www.cinuteinfomedia.com/services/web-design-development/business-corporate/#step-qa" },
                { name: "Controlled Launch", text: "Deployment plan execution, CDN configuration, and editor training for seamless handover.", url: "https://www.cinuteinfomedia.com/services/web-design-development/business-corporate/#step-launch" },
                { name: "Ongoing Partnership", text: "SLA agreements and quarterly enhancement roadmaps for continuous improvement and support.", url: "https://www.cinuteinfomedia.com/services/web-design-development/business-corporate/#step-partnership" },
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
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem", "--page-selection-bg": "#f97316" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(corpSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <SolutionTypes />
            <Process />
            <TechStack />
            <UseCases />
            <CTA />
        </main>
    );
}
