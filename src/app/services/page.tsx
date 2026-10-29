import Hero from '@/components/services/Hero';
import ServicesList from '@/components/services/ServicesList';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import Process from '@/components/services/Process';
import CTA from '@/components/services/CTA';
import { getPageMetadata } from '@/lib/metadata';
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateItemListSchema,
    generateOfferCatalogSchema,
    generateHowToSchema,
    generateNavigationSchema,
} from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Digital Solutions & Services | Cinute InfoMedia',
    description: 'Explore our comprehensive digital services including web development, mobile apps, SEO, social media marketing, AI automation, and more. Transform your business with CIM.',
    url: '/services',
    keywords: ['web development services', 'mobile app solutions', 'SEO agency', 'AI automation consultants'],
    image: '/og-images/Services.webp',
});

export default function ServicesPage() {
    const servicesSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
            hasOfferCatalogId: "https://www.cinuteinfomedia.com/services/#offerCatalog",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Full-Service Digital Solutions | Cinute InfoMedia",
            description: "Explore our comprehensive range of digital services including Web Design, Mobile Apps, SEO, Performance Marketing, and AI Solutions. 50+ projects successfully delivered.",
            urlPath: "/services",
            datePublished: "2025-01-01",
            dateModified: "2026-03-02",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
        ], "https://www.cinuteinfomedia.com/services/#breadcrumb"),

        generateItemListSchema({
            id: "/services/#itemList",
            name: "Our Core Service Categories",
            description: "We provide end-to-end digital services designed to accelerate business growth and technical efficiency.",
            items: [
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
        }),

        generateOfferCatalogSchema({
            id: "/services/#offerCatalog",
            name: "Digital Growth Services Catalog",
            offers: [
                { name: "Web Design & Development", description: "Create stunning, high-performance websites that captivate users and drive conversions." },
                { name: "Mobile App Development", description: "Build native and cross-platform mobile apps that deliver exceptional user experiences." },
                { name: "Social Media Marketing", description: "Grow your brand presence and engage your audience across all social platforms." },
                { name: "AI Workflows & Automations", description: "Streamline operations with intelligent automation and workflow optimization." },
                { name: "AI-Powered Chatbots", description: "Deploy intelligent chatbots that enhance customer experience and reduce support costs." },
                { name: "Organic Growth & SEO", description: "Boost your search rankings and drive sustainable organic traffic to your website." },
                { name: "Performance Marketing", description: "Maximize ROI with data-driven paid advertising campaigns across platforms." },
                { name: "Brand Identity & Design", description: "Create a memorable brand identity that resonates with your target audience." },
                { name: "Additional Support Services", description: "Comprehensive support and maintenance to keep your digital assets running smoothly." },
            ],
        }),

        generateHowToSchema({
            name: "How We Work - Our 4-Step Strategic Process",
            description: "We follow a proven methodology to ensure clarity, quality, and measurable results for every digital project.",
            steps: [
                { name: "Discovery & Consultation", text: "Understanding business goals and challenges through in-depth discussions.", url: "https://www.cinuteinfomedia.com/services/#step-discovery" },
                { name: "Strategy & Planning", text: "Developing a comprehensive strategy and roadmap tailored to specific needs.", url: "https://www.cinuteinfomedia.com/services/#step-strategy" },
                { name: "Design & Development", text: "Bringing the vision to life with cutting-edge design and development practices.", url: "https://www.cinuteinfomedia.com/services/#step-design" },
                { name: "Launch & Optimize", text: "Continuous monitoring, analysis, and optimization after launch.", url: "https://www.cinuteinfomedia.com/services/#step-launch" },
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
        <main style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
            <Hero />
            <ServicesList />
            <WhyChooseUs />
            <Process />
            <CTA />
        </main>
    );
}
