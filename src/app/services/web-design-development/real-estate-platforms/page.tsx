import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/real-estate-platforms/Hero';
import ServiceOverview from '@/components/services/web-design-development/real-estate-platforms/ServiceOverview';
import TechStack from '@/components/services/web-design-development/real-estate-platforms/TechStack';
import CTA from '@/components/services/web-design-development/real-estate-platforms/CTA';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/web-design-development/real-estate-platforms/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/real-estate-platforms/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/web-design-development/real-estate-platforms/Process'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/real-estate-platforms/UseCases'), {
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
    generateHowToSchema,
    generateNavigationSchema,
} from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Real Estate Platform Development | Property Listing & IDX Websites',
    description: 'Build powerful real estate platforms that showcase properties beautifully, capture leads, and integrate with MLS systems. Custom property listing portals, broker platforms, and virtual tour solutions.',
    url: '/services/web-design-development/real-estate-platforms',
    keywords: [
        'Real Estate Website Development',
        'Property Listing Platform',
        'IDX Website Development',
        'MLS Integration',
        'Real Estate Portal Development',
    ],
    image: '/og-images/real-estate.jpeg',
});

export default function RealEstatePlatformsPage() {
    const realEstateSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Real Estate Platform Development | Property Listing & IDX Websites",
            description: "Build powerful real estate platforms that showcase properties beautifully, capture leads, and integrate with MLS systems. Custom property listing portals, broker platforms, and virtual tour solutions.",
            urlPath: "/services/web-design-development/real-estate-platforms",
            datePublished: "2025-01-01",
            dateModified: "2026-03-17",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/real-estate-platforms/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/real-estate-platforms/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/real-estate-platforms/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Real Estate Platform Development", url: "/services/web-design-development/real-estate-platforms" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/real-estate-platforms/#breadcrumb"),

        generateServiceSchema({
            name: "Real Estate Platform Development Services",
            description: "Build a powerful property platform that captures leads, showcases listings beautifully, and streamlines your real estate operations. Custom property listing portals, broker platforms, MLS/IDX integration, and virtual tour solutions.",
            urlPath: "/services/web-design-development/real-estate-platforms",
            serviceType: "Real Estate Platform Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Transform your real estate business with a custom property platform. Schedule a demo or start your project today.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/real-estate-platforms/#itemList",
            name: "Real Estate Solutions We Build",
            description: "Comprehensive real estate technology solutions from property listing portals to virtual tour platforms.",
            items: [
                { name: "Property Listing Portals", description: "Feature-rich websites with advanced search, interactive maps, and real-time MLS/IDX synchronization for property listings." },
                { name: "Broker & Agent Platforms", description: "Multi-agent systems with individual profiles, commission tracking, and lead distribution dashboards." },
                { name: "Real Estate Marketplaces", description: "Multi-vendor platforms connecting buyers, sellers, and agents with secure transaction tools and escrow management." },
                { name: "Property Management Systems", description: "Comprehensive portals for lease tracking, tenant management, maintenance requests, and rent collection." },
                { name: "Virtual Tours & 3D Showcase", description: "Immersive 360° property experiences with Matterport integration, interactive floor plans, and 3D walkthroughs." },
            ],
        }),

        generateHowToSchema({
            name: "Our Real Estate Platform Development Process",
            description: "A proven 6-step methodology for building real estate platforms that achieve +85% lead capture and <1s search speed.",
            steps: [
                { name: "Market Research & Discovery", text: "Market analysis, user persona mapping, competitor research, and feature prioritization for your real estate platform.", url: "https://www.cinuteinfomedia.com/services/web-design-development/real-estate-platforms/#step-discovery" },
                { name: "UX Design & Presentation", text: "Mobile-first design, wireframes, interactive map UX, and property listing layout optimization.", url: "https://www.cinuteinfomedia.com/services/web-design-development/real-estate-platforms/#step-design" },
                { name: "Platform Development", text: "Building with MLS/IDX integration, CRM connections, virtual tour embeds, and advanced search functionality.", url: "https://www.cinuteinfomedia.com/services/web-design-development/real-estate-platforms/#step-development" },
                { name: "Testing & QA", text: "Validation of search algorithms, lead capture workflows, map integrations, and cross-device performance.", url: "https://www.cinuteinfomedia.com/services/web-design-development/real-estate-platforms/#step-testing" },
                { name: "Launch & Optimization", text: "SEO configuration, analytics setup, property feed verification, and go-live management.", url: "https://www.cinuteinfomedia.com/services/web-design-development/real-estate-platforms/#step-launch" },
                { name: "Growth & Analytics", text: "Monitoring conversion rates, lead quality metrics, and data-driven enhancements for continuous improvement.", url: "https://www.cinuteinfomedia.com/services/web-design-development/real-estate-platforms/#step-growth" },
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
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem", "--page-selection-bg": "#0d9488" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
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
