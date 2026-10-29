import Hero from '@/components/contact/Hero';
// import ContactInfo from '@/components/contact/ContactInfo';
import Location from '@/components/contact/Location';
import { Metadata } from 'next';
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateContactPageSchema,
    generateProfessionalServiceSchema,
    generateBreadcrumbSchema,
    generateNavigationSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
    title: 'Contact Us | Cinute InfoMedia - Get in Touch',
    description: 'Get in touch with Cinute InfoMedia. We are ready to help you build your next digital success story. Reach out for consultations and quotes.',
    openGraph: {
        title: 'Contact Us | Cinute InfoMedia - Get in Touch',
        description: 'Get in touch with Cinute InfoMedia. We are ready to help you build your next digital success story. Reach out for consultations and quotes.',
        url: 'https://www.cinuteinfomedia.com/contact',
        images: [
            {
                url: '/og-images/Contact.webp',
                width: 1200,
                height: 630,
                alt: 'Contact Cinute InfoMedia - Get in Touch',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us | Cinute InfoMedia - Get in Touch',
        description: 'Get in touch with Cinute InfoMedia. We are ready to help you build your next digital success story. Reach out for consultations and quotes.',
        images: ['/og-images/Contact.webp'],
    },
    alternates: {
        canonical: 'https://www.cinuteinfomedia.com/contact',
    },
};

export default function ContactPage() {
    const contactSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses scale through technical excellence and data-driven marketing.",
            slogan: "Build. Market. Scale.",
            locationId: "https://www.cinuteinfomedia.com/contact/#professional-service",
        }),

        generateProfessionalServiceSchema({
            name: "Cinute InfoMedia - Web Development & Digital Marketing Agency",
            urlPath: "/contact",
            telephone: "+919004988859",
            hasMap: "https://www.google.com/maps/search/?api=1&query=Cinute+InfoMedia+Ashley+Tower+Mira+Road",
        }),

        generateWebSiteSchema(),

        generateContactPageSchema({
            name: "Contact Us | Cinute InfoMedia - Get in Touch for Free Consultation",
            description: "Get in touch with Cinute InfoMedia for professional web development, mobile apps, and digital marketing services. Located in Mira Road, Mumbai.",
            urlPath: "/contact",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact Us", url: "/contact" },
        ], "https://www.cinuteinfomedia.com/contact/#breadcrumb"),

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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <Hero />
            {/* <ContactInfo /> */}
            <Location />
        </main>
    );
}
