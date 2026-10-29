import dynamic from 'next/dynamic';
import Hero from '@/components/services/brand-identity-design/Hero';
import ServiceOverview from '@/components/services/brand-identity-design/ServiceOverview';

// Lazy load below-the-fold components for better performance
const BrandElements = dynamic(() => import('@/components/services/brand-identity-design/BrandElements'), {
    loading: () => <div className="py-20" />,
});
const WhyChooseUs = dynamic(() => import('@/components/services/brand-identity-design/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const DesignProcess = dynamic(() => import('@/components/services/brand-identity-design/DesignProcess'), {
    loading: () => <div className="py-20" />,
});
const DesignTools = dynamic(() => import('@/components/services/brand-identity-design/DesignTools'), {
    loading: () => <div className="py-20" />,
});
const BrandPackages = dynamic(() => import('@/components/services/brand-identity-design/BrandPackages'), {
    loading: () => <div className="py-20" />,
});
const Faq = dynamic(() => import('@/components/services/brand-identity-design/Faq'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/brand-identity-design/CTA'), {
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
    title: 'Global Brand Identity Design Services | Award-Winning Agency (2026)',
    description: 'Transform your business with expert brand identity design services. We craft custom logos, visual systems, and strategies for startups and enterprises. 500+ successful brand launches, strong average ROI, strong client retention. More than just a logo — we build scalable brand ecosystems using 2026 EEAT principles.',
    url: '/services/brand-identity-design',
    keywords: [
        'brand identity design',
        'logo design agency',
        'visual identity services',
        'brand guidelines design',
        'creative branding agency',
        'rebranding services',
        'corporate identity design',
        'brand style guide',
        'startup branding',
        'brand strategy consulting',
    ],
    image: '/og-images/brand_identity_design.webp',
});

export default function BrandIdentityDesignPage() {
    const brandSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Global Brand Identity Design Services | Award-Winning Agency (2026)",
            description: "Transform your business with expert brand identity design services. We craft custom logos, visual systems, and strategies for startups and enterprises. 500+ successful brand launches, strong average ROI, strong client retention. More than just a logo — we build scalable brand ecosystems using 2026 EEAT principles.",
            urlPath: "/services/brand-identity-design",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/brand-identity-design/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/brand-identity-design/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/brand-identity-design/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Brand Identity Design", url: "/services/brand-identity-design" },
        ], "https://www.cinuteinfomedia.com/services/brand-identity-design/#breadcrumb"),

        {
            "@type": "Service",
            "@id": "https://www.cinuteinfomedia.com/services/brand-identity-design/#service",
            "name": "Brand Identity Design Services",
            "description": "More than just a logo — we build scalable brand ecosystems. As a Brand Identity Design Agency, we engineer comprehensive brand experiences that drive recognition, trust, and revenue. Custom brand design frameworks built on 2026 EEAT principles. 500+ successful brand launches, sustained traffic growth, strong client retention. Specialized in brand identity design for SaaS products, ecommerce platforms, and luxury brands delivering pixel-perfect assets across web, mobile, and print. WCAG 2.1 compliant typography, SEO-first design optimized for Core Web Vitals.",
            "url": "https://www.cinuteinfomedia.com/services/brand-identity-design",
            "serviceType": "Brand Identity Design & Visual Branding",
            "provider": {
                "@id": "https://www.cinuteinfomedia.com/#organization"
            },
            "areaServed": ["IN", "US", "GB", "AU", "AE"],
            "offers": {
                "@type": "Offer",
                "@id": "https://www.cinuteinfomedia.com/services/brand-identity-design/#offer",
                "url": "https://www.cinuteinfomedia.com/contact",
                "priceCurrency": "USD",
                "price": "1500",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01",
                "priceSpecification": {
                    "@type": "PriceSpecification",
                    "priceCurrency": "USD",
                    "minPrice": "1500",
                    "maxPrice": "3000",
                    "description": "Startup/SME packages from $1,500–$3,000. Growth/Corporate and Enterprise/Global packages available at higher tiers."
                },
                "description": "Free Brand Audit included. Three pricing tiers: Startup/SME (from $1,500–$3,000), Growth/Corporate for SaaS & Healthcare companies, and Enterprise/Global for multi-national & luxury brands. Custom quotes available.",
                "seller": {
                    "@id": "https://www.cinuteinfomedia.com/#organization"
                }
            }
        },

        generateItemListSchema({
            id: "/services/brand-identity-design/#coreServicesList",
            name: "Core Brand Identity Design Services",
            description: "Six core brand identity design deliverables: Strategic Logo Design, Typography Systems, Color Architecture, Brand Messaging, Illustration Style, and Brand Style Guide.",
            items: [
                { name: "Strategic Logo Design", description: "Primary marks, secondary lockups, and responsive favicons. The cornerstone of your brand identity." },
                { name: "Typography Systems", description: "Custom typefaces that embody your brand voice with WCAG 2.1 compliant readability and accessibility." },
                { name: "Color Architecture", description: "Strategic color palettes that evoke the right emotions with defined HEX, RGB, CMYK, and Pantone codes." },
                { name: "Brand Messaging", description: "Custom brand voice and visual identity guides defining how your brand speaks — from marketing copy to documentation." },
                { name: "Illustration Style", description: "Unique imagery styles — custom illustrations, icon sets, and photography guidelines that separate you from stock photos." },
                { name: "Brand Style Guide", description: "Detailed 30–50+ page Brand Style Guide covering usage rules, do's and don'ts, and grid systems to protect brand equity." },
            ],
        }),

        generateItemListSchema({
            id: "/services/brand-identity-design/#pricingTiersList",
            name: "Brand Identity Pricing Tiers",
            description: "Three pricing tiers for brand identity design: Startup/SME for new launches, Growth/Corporate for SaaS & Healthcare, and Enterprise/Global for multi-national luxury brands.",
            items: [
                { name: "Startup / SME", description: "Perfect for startups and small businesses launching their brand. From $1,500–$3,000." },
                { name: "Growth / Corporate", description: "Complete brand identity for SaaS and Healthcare companies. Custom quote based on scope." },
                { name: "Enterprise / Global", description: "Premium brand ecosystem for multi-national and luxury brands. Custom enterprise pricing." },
            ],
        }),

        generateFAQSchema([
            { question: "What is brand identity design and why is it important?", answer: "Brand identity design is the creation of all visual and verbal elements that represent your company, including your logo, color palette, typography, and voice. It is crucial because it builds Brand Recognition and Awareness, creates trust with customers, and differentiates you from competitors in a crowded global market. A strong identity directly influences purchasing decisions and customer loyalty." },
            { question: "What is the difference between branding and brand identity?", answer: "Branding is the holistic process of shaping how your audience perceives your company (the 'why' and 'feeling'). Brand identity is the tangible collection of visual tools (the 'what') — logo, fonts, colors — that you use to communicate that brand. Think of branding as the personality and brand identity as the clothes and style." },
            { question: "How long does the brand identity design process take?", answer: "For a standard brand identity design for startups, the timeline is typically 2–4 weeks. Complex projects involving extensive market research, multiple brand applications, and detailed brand guidelines can take 6–8 weeks. We prioritize quality while maintaining efficiency to meet your business launch goals." },
            { question: "How much does brand identity design cost?", answer: "Costs vary based on the project's scope. An affordable brand identity design service for a small business might start from $1,500 – $3,000, while comprehensive corporate branding packages range higher. We offer custom quotes based on your specific needs, deliverables, and business size." },
            { question: "What are the key elements of a brand identity?", answer: "Core elements include a Professional Logo Design, a strategic color palette, typography that reflects your brand voice, imagery style, and a Brand Style Guide. Advanced identities also include iconography, stationery design, and social media templates to ensure consistency across all touchpoints." },
            { question: "Do you offer rebranding services for established companies?", answer: "Yes, we specialize in rebranding services for small businesses and large enterprises. We carefully audit your existing brand equity to ensure we retain what works while modernizing your visual language to meet current market standards and Graphic Design Principles." },
            { question: "Will I own the copyright to my brand files?", answer: "Absolutely. Upon final payment, you receive full ownership and copyright of all approved brand designs. We provide all necessary source files (AI, EPS, SVG) and high-resolution exports (PNG, JPG) for both digital and print use, giving you complete control over your brand's future." },
        ], "https://www.cinuteinfomedia.com/services/brand-identity-design/#faq"),

        generateHowToSchema({
            name: "Our 5-Step Brand Identity Design Process",
            description: "A proven 5-step journey from concept to launch, designed to create brands that truly resonate. Timeline: 2–8 weeks depending on project complexity.",
            steps: [
                { name: "Discovery & Brand Audit", text: "Deep dive into your market. Analyze competitors, interview stakeholders, and audit existing assets to define your Brand Strategy.", url: "https://www.cinuteinfomedia.com/services/brand-identity-design/#step-discovery" },
                { name: "Strategy & Conceptualization", text: "Synthesize data into a creative brief. Brainstorm Visual Communication Design concepts, exploring multiple territories for your unique brand.", url: "https://www.cinuteinfomedia.com/services/brand-identity-design/#step-strategy" },
                { name: "Design & Iteration", text: "Move to high-fidelity design using industry-standard tools. Interactive presentations with opportunity to refine the direction.", url: "https://www.cinuteinfomedia.com/services/brand-identity-design/#step-design" },
                { name: "Systematization & Guidelines", text: "Build the full system — color codes, type scales, and brand guidelines design. Ensure every asset is production-ready.", url: "https://www.cinuteinfomedia.com/services/brand-identity-design/#step-systematization" },
                { name: "Delivery & Launch Support", text: "Hand over all source files (AI, EPS, SVG, PNG) and support your team during rollout to ensure a flawless launch.", url: "https://www.cinuteinfomedia.com/services/brand-identity-design/#step-delivery" },
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
        <main data-page-theme="yellow" className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <BrandElements />
            <WhyChooseUs />
            <DesignProcess />
            <DesignTools />
            <BrandPackages />
            <Faq />
            <CTA />
        </main>
    );
}
