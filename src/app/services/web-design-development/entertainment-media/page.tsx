import Hero from "@/components/services/web-design-development/entertainment-media/Hero";
import ServiceOverview from "@/components/services/web-design-development/entertainment-media/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/entertainment-media/SolutionTypes";
import TechStack from "@/components/services/web-design-development/entertainment-media/TechStack";
import Process from "@/components/services/web-design-development/entertainment-media/Process";
import WhyChooseUs from "@/components/services/web-design-development/entertainment-media/WhyChooseUs";
import CTA from "@/components/services/web-design-development/entertainment-media/CTA";

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
    title: 'Entertainment & Media Website Development | Streaming Platforms',
    description: 'Build powerful streaming platforms and content management systems. Create immersive digital entertainment experiences that captivate audiences and drive subscriber growth.',
    url: '/services/web-design-development/entertainment-media',
    keywords: [
        'entertainment website development',
        'streaming platform development',
        'video on demand platform',
        'music streaming website',
        'podcast platform development',
        'OTT platform development',
        'live streaming website',
        'media content management',
    ],
    image: '/og-images/entertainment.jpeg',
});

export default function EntertainmentMediaPage() {
    const entertainmentSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Entertainment & Media Website Development | Streaming Platforms",
            description: "Build powerful streaming platforms and content management systems. Create immersive digital entertainment experiences that captivate audiences and drive subscriber growth.",
            urlPath: "/services/web-design-development/entertainment-media",
            datePublished: "2025-01-01",
            dateModified: "2026-03-17",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/entertainment-media/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/entertainment-media/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/entertainment-media/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Entertainment & Media Development", url: "/services/web-design-development/entertainment-media" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/entertainment-media/#breadcrumb"),

        generateServiceSchema({
            name: "Entertainment & Media Website Development",
            description: "Build powerful streaming platforms, content management systems, and engaging entertainment experiences that captivate audiences and drive subscriber growth. 4K streaming ready with adaptive bitrate delivery and higher user engagement.",
            urlPath: "/services/web-design-development/entertainment-media",
            serviceType: "Entertainment & Media Platform Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Start your entertainment platform project. Custom streaming platforms, music apps, live broadcasting, podcast hubs, and gaming sites with 4K streaming and DRM protection.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/entertainment-media/#itemList",
            name: "Entertainment & Media Solutions We Build",
            description: "Comprehensive entertainment technology solutions from video streaming to gaming and esports platforms.",
            items: [
                { name: "Video Streaming Platforms", description: "VOD platforms with watchlists, personalized recommendations, adaptive bitrate streaming, and 4K content delivery." },
                { name: "Music & Audio Platforms", description: "Music streaming services with playlists, artist pages, audio players, and subscription management." },
                { name: "Live Streaming Solutions", description: "Real-time broadcasting platforms with live chat, donations, viewer analytics, and multi-stream support." },
                { name: "News & Magazine Portals", description: "Digital publications with paywalls, dynamic content delivery, subscriber management, and editorial workflows." },
                { name: "Podcast Platforms", description: "Audio content hubs with episode management, RSS feeds, analytics dashboards, and monetization tools." },
                { name: "Gaming & Esports Sites", description: "Interactive gaming platforms with leaderboards, tournaments, player profiles, and real-time multiplayer features." },
            ],
        }),

        generateHowToSchema({
            name: "Our Entertainment Platform Development Process",
            description: "A proven 7-step methodology for building entertainment platforms that have delivered 100M+ content views across 50+ media platforms.",
            steps: [
                { name: "Discovery & Content Strategy", text: "Content audit, audience mapping, and competitor analysis to define your entertainment platform vision.", url: "https://www.cinuteinfomedia.com/services/web-design-development/entertainment-media/#step-discovery" },
                { name: "Platform Architecture", text: "System architecture design, CDN planning, and database schema for scalable content delivery.", url: "https://www.cinuteinfomedia.com/services/web-design-development/entertainment-media/#step-architecture" },
                { name: "UI/UX Design", text: "Wireframes, interactive prototypes, visual design system, and motion specs for immersive experiences.", url: "https://www.cinuteinfomedia.com/services/web-design-development/entertainment-media/#step-design" },
                { name: "Development & Integration", text: "Frontend and backend development, video player integration, payment gateway setup, and API connections.", url: "https://www.cinuteinfomedia.com/services/web-design-development/entertainment-media/#step-development" },
                { name: "Content Delivery Setup", text: "CDN configuration, video transcoding, DRM implementation, and adaptive bitrate streaming setup.", url: "https://www.cinuteinfomedia.com/services/web-design-development/entertainment-media/#step-cdn" },
                { name: "Launch & Go-Live", text: "Production deployment, load testing, real-time monitoring, and performance validation.", url: "https://www.cinuteinfomedia.com/services/web-design-development/entertainment-media/#step-launch" },
                { name: "Analytics & Growth", text: "Analytics dashboards, A/B testing, recommendation engine optimization, and subscriber growth strategies.", url: "https://www.cinuteinfomedia.com/services/web-design-development/entertainment-media/#step-growth" },
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
        <main style={{ "--page-selection-bg": "#8b5cf6" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(entertainmentSchema) }}
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
