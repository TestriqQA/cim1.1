import Hero from "@/components/services/web-design-development/headless-traditional-cms/Hero";
import ServiceOverview from "@/components/services/web-design-development/headless-traditional-cms/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/headless-traditional-cms/SolutionTypes";
import TechStack from "@/components/services/web-design-development/headless-traditional-cms/TechStack";
import Process from "@/components/services/web-design-development/headless-traditional-cms/Process";
import WhyChooseUs from "@/components/services/web-design-development/headless-traditional-cms/WhyChooseUs";
import CTA from "@/components/services/web-design-development/headless-traditional-cms/CTA";

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
    title: 'Headless & Traditional CMS Development | WordPress, Strapi, Contentful',
    description: 'Expert CMS development for headless and traditional platforms. From Contentful, Strapi, and Sanity to WordPress and Drupal - we build CMS solutions that empower your content teams.',
    url: '/services/web-design-development/headless-traditional-cms',
    keywords: [
        'headless cms development',
        'wordpress development',
        'contentful development',
        'strapi development',
        'sanity cms',
        'drupal development',
        'cms integration',
        'content management system',
    ],
    image: '/og-images/Headless.webp',
});

export default function HeadlessTraditionalCMSPage() {
    const cmsSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Headless & Traditional CMS Development | WordPress, Strapi, Contentful",
            description: "Expert CMS development for headless and traditional platforms. From Contentful, Strapi, and Sanity to WordPress and Drupal - we build CMS solutions that empower your content teams.",
            urlPath: "/services/web-design-development/headless-traditional-cms",
            datePublished: "2025-01-01",
            dateModified: "2026-03-17",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/headless-traditional-cms/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/headless-traditional-cms/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/headless-traditional-cms/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Headless & Traditional CMS Development", url: "/services/web-design-development/headless-traditional-cms" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/headless-traditional-cms/#breadcrumb"),

        generateServiceSchema({
            name: "Headless & Traditional CMS Development Services",
            description: "From headless platforms like Contentful, Strapi, and Sanity to traditional powerhouses like WordPress and Drupal - we build CMS solutions that empower your content teams. API-first architecture with multi-channel content delivery.",
            urlPath: "/services/web-design-development/headless-traditional-cms",
            serviceType: "CMS Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Custom CMS development for headless and traditional platforms. 50+ projects completed with significant reduction in content publishing time. Get in touch for a custom quote.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/headless-traditional-cms/#itemList",
            name: "CMS Development Solutions",
            description: "Comprehensive CMS development services covering both headless and traditional platforms for modern content management.",
            items: [
                { name: "Contentful Projects", description: "Enterprise content infrastructure for global brands with structured content, powerful APIs, and scalable architecture." },
                { name: "Strapi Development", description: "Open-source headless CMS with full customization, self-hosted control, and enterprise-grade features." },
                { name: "Sanity CMS", description: "Real-time content collaboration with structured data and flexible schemas for modern digital products." },
                { name: "WordPress Development", description: "Traditional CMS offering endless possibilities with custom themes, plugins, and tailored development solutions." },
                { name: "Drupal Enterprise", description: "Robust security and complex content workflows, ideal for government, healthcare, and enterprise organizations." },
                { name: "Custom CMS Solutions", description: "Tailored content management platforms built for unique requirements when off-the-shelf solutions don't fit." },
            ],
        }),

        generateHowToSchema({
            name: "Our CMS Implementation Process",
            description: "A structured 6-step methodology for CMS development that has delivered 50+ projects with significant reduction in content publishing time.",
            steps: [
                { name: "Discovery & Strategy", text: "Deep dive into content needs, workflow mapping, stakeholder interviews, and integration requirements analysis.", url: "https://www.cinuteinfomedia.com/services/web-design-development/headless-traditional-cms/#step-discovery" },
                { name: "CMS Selection", text: "Optimal platform selection based on requirements, feature matching, scalability assessment, and cost analysis.", url: "https://www.cinuteinfomedia.com/services/web-design-development/headless-traditional-cms/#step-selection" },
                { name: "Content Architecture", text: "Design of content models, type definitions, schema structure, taxonomy planning, and relationship mapping.", url: "https://www.cinuteinfomedia.com/services/web-design-development/headless-traditional-cms/#step-architecture" },
                { name: "Development & Integration", text: "API-first development with frontend integration, building connections to the modern tech stack.", url: "https://www.cinuteinfomedia.com/services/web-design-development/headless-traditional-cms/#step-development" },
                { name: "Content Migration", text: "Systematic migration of existing content from legacy systems ensuring complete data integrity.", url: "https://www.cinuteinfomedia.com/services/web-design-development/headless-traditional-cms/#step-migration" },
                { name: "Training & Launch", text: "Comprehensive training for content teams, editorial workflow setup, and successful production launch.", url: "https://www.cinuteinfomedia.com/services/web-design-development/headless-traditional-cms/#step-launch" },
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
        <main style={{ "--page-selection-bg": "#9333ea" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(cmsSchema) }}
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
