import Hero from "@/components/services/web-design-development/travel-and-hospitality-services/Hero";
import ServiceOverview from "@/components/services/web-design-development/travel-and-hospitality-services/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/travel-and-hospitality-services/SolutionTypes";
import TechStack from "@/components/services/web-design-development/travel-and-hospitality-services/TechStack";
import Process from "@/components/services/web-design-development/travel-and-hospitality-services/Process";
import WhyChooseUs from "@/components/services/web-design-development/travel-and-hospitality-services/WhyChooseUs";
import FAQ from "@/components/services/web-design-development/travel-and-hospitality-services/FAQ";
import CTA from "@/components/services/web-design-development/travel-and-hospitality-services/CTA";

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
    title: 'Travel & Hospitality Services | Custom Tech Solutions',
    description: 'Scale with expert Travel and Hospitality Services. We build custom travel technology solutions and ROI-driven marketing campaigns.',
    url: '/services/web-design-development/travel-and-hospitality-services',
    keywords: [
        'travel and hospitality services',
        'travel software development services',
        'hospitality marketing agency',
        'travel technology solutions',
        'custom travel booking platform development',
        'digital marketing for luxury hotels and resorts',
        'hospitality revenue management services',
        'travel API integration services',
        'hotel property management system integration',
        'travel and tourism market research',
    ],
    image: '/og-images/travel-and-hospitality.jpeg',
});

export default function TravelHospitalityPage() {
    const travelSchema = generateGraphSchema(
        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Travel & Hospitality Services | Custom Tech Solutions",
            description: "Scale with expert Travel and Hospitality Services. We build custom travel technology solutions and ROI-driven marketing campaigns.",
            urlPath: "/services/web-design-development/travel-and-hospitality-services",
            datePublished: "2025-01-01",
            dateModified: "2026-03-17",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/travel-and-hospitality-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/travel-and-hospitality-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/travel-and-hospitality-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design", url: "/services/web-design-development" },
            { name: "Travel & Hospitality", url: "/services/web-design-development/travel-and-hospitality-services" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/travel-and-hospitality-services/#breadcrumb"),

        generateServiceSchema({
            name: "Travel & Hospitality Technology Services",
            description: "Expert Travel and Hospitality Services designed for the 2026 digital ecosystem. As an expert Travel Software Development Services provider and Hospitality Marketing Agency, we build intelligent, ROI-driven Travel Technology Solutions that drive more bookings.",
            urlPath: "/services/web-design-development/travel-and-hospitality-services",
            serviceType: "Travel & Hospitality Technology Development",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Get a free consultation for custom travel technology solutions. Hotel booking engines, tour platforms, vacation rental management, and GDS/OTA integrations.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/travel-and-hospitality-services/#itemList",
            name: "Travel & Hospitality Solutions We Build",
            description: "Comprehensive travel technology solutions from hotel booking engines to transport logistics platforms.",
            items: [
                { name: "Hotel & Resort Websites", description: "Fast-loading websites for luxury resorts with Hotel PMS integration, real-time booking engines, and VR/360° virtual tours." },
                { name: "Tour & Activity Platforms", description: "Scalable platforms for tour operators with itinerary builders, group booking management, and activity scheduling." },
                { name: "Travel Agency Portals", description: "Custom travel agency portals with GDS/OTA API integration, B2B/B2C modules, and commission tracking dashboards." },
                { name: "Vacation Rental Management", description: "End-to-end vacation rental platforms with channel management, smart lock sync, and owner reporting systems." },
                { name: "Restaurant & Dining Systems", description: "Online reservations, QR menus, POS integration, and kitchen display systems for hospitality dining operations." },
                { name: "Transport & Logistics Booking", description: "Fleet management platforms with real-time GPS tracking, driver apps, and automated dispatch systems." },
            ],
        }),

        // Mirrors the visible accordion copy in
        // src/components/services/web-design-development/travel-and-hospitality-services/FAQ.tsx verbatim.
        // Google requires FAQPage markup to match the on-page text, so these two
        // must be edited together — paraphrasing here costs the rich result.
        generateFAQSchema([
            { question: "What are travel and hospitality services in the context of digital development?", answer: "Travel and hospitality services encompass the strategic design, development, and marketing of digital solutions for the tourism industry. This includes building custom booking engines, hotel management software, OTA platforms, and implementing Travel Technology Solutions that streamline operations and enhance the guest experience." },
            { question: "How can technology improve hospitality services for hotels and agencies?", answer: "Technology improves hospitality services by automating routine tasks, personalizing guest interactions, and optimizing revenue. Tools like Hotel Property Management Systems (PMS), AI-driven chatbots, and Travel Data Analytics allow businesses to offer seamless booking experiences, real-time support, and tailored recommendations, directly boosting satisfaction and loyalty." },
            { question: "What makes a top-tier Hospitality Marketing Agency?", answer: "A top-tier Hospitality Marketing Agency combines creative storytelling with data-driven strategies. Look for an agency that specializes in Digital Marketing for Luxury Hotels and Resorts, uses advanced SEO for Travel Lead Generation, and has a proven track record of increasing direct bookings through Hospitality Social Media Management Services and paid campaigns." },
            { question: "Why is custom Travel Software Development Services better than off-the-shelf solutions?", answer: "Custom Travel Software Development Services offer flexibility and scalability that off-the-shelf products cannot match. A custom solution is tailored to your specific business workflows, brands, and customer needs, allowing for unique features like specialized Travel API integration services and proprietary Hospitality Revenue Management algorithms that provide a competitive edge." },
            { question: "What are the key Hospitality Technology Trends for 2026?", answer: "The key Hospitality Technology Trends 2026 include the rise of hyper-personalization via AI, the adoption of sustainable travel tech for Sustainable Travel and Tourism Consulting, biometric authentication for seamless check-ins, and the increased use of immersive AR/VR in Travel Agency Website Design to provide virtual \"try-before-you-buy\" experiences." },
            { question: "How do you handle Travel API Integration Services (GDS/OTA)?", answer: "We consider Travel API Integration Services a core competency. Our team has extensive experience connecting with major GDS providers like Amadeus and Sabre, as well as OTAs like Expedia. We ensure secure, real-time data exchange for inventory and pricing, handling the technical complexity so you can focus on your business." },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/travel-and-hospitality-services/#faq"),

        generateHowToSchema({
            name: "Our Travel Tech Development Journey",
            description: "A proven 7-step methodology for building travel technology platforms that deliver sustained traffic growth and more bookings.",
            steps: [
                { name: "Discovery & Strategy", text: "Market research, competitor audit, and digital transformation roadmap for your travel or hospitality business.", url: "https://www.cinuteinfomedia.com/services/web-design-development/travel-and-hospitality-services/#step-discovery" },
                { name: "UX/UI Design", text: "Intuitive mobile-first prototypes aligned with hospitality brand identity and guest experience principles.", url: "https://www.cinuteinfomedia.com/services/web-design-development/travel-and-hospitality-services/#step-design" },
                { name: "Agile Development", text: "Sprint-based iterations using clean, scalable code and security best practices for travel platforms.", url: "https://www.cinuteinfomedia.com/services/web-design-development/travel-and-hospitality-services/#step-development" },
                { name: "Integration Excellence", text: "Connecting GDS/OTA APIs, PMS systems, payment gateways, and third-party services for a unified ecosystem.", url: "https://www.cinuteinfomedia.com/services/web-design-development/travel-and-hospitality-services/#step-integration" },
                { name: "Quality Assurance", text: "Rigorous automated and manual testing for rigorously tested delivery across all devices and platforms.", url: "https://www.cinuteinfomedia.com/services/web-design-development/travel-and-hospitality-services/#step-qa" },
                { name: "Launch & Training", text: "Production deployment plus comprehensive staff training and documentation for smooth operations.", url: "https://www.cinuteinfomedia.com/services/web-design-development/travel-and-hospitality-services/#step-launch" },
                { name: "Growth & Optimization", text: "2026 trend updates, SEO refinement, continuous monitoring, and data-driven feature enhancements.", url: "https://www.cinuteinfomedia.com/services/web-design-development/travel-and-hospitality-services/#step-growth" },
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
        <main style={{ "--page-selection-bg": "#0d9488" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(travelSchema) }}
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
