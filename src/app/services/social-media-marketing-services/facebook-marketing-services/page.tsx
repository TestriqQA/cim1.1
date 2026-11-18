import type { Metadata } from "next";
import Hero from "@/components/services/social-media-marketing-services/facebook-marketing-services/Hero";
import ServiceOverview from "@/components/services/social-media-marketing-services/facebook-marketing-services/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing-services/facebook-marketing-services/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing-services/facebook-marketing-services/TechStack";
import Process from "@/components/services/social-media-marketing-services/facebook-marketing-services/Process";
import WhyChooseUs from "@/components/services/social-media-marketing-services/facebook-marketing-services/WhyChooseUs";
import CTA from "@/components/services/social-media-marketing-services/facebook-marketing-services/CTA";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Facebook Marketing Services | Cinute InfoMedia",
    description:
        "Facebook marketing services with expert Meta ads management, creative testing and a strong ROAS focus. Get a free audit today.",
    openGraph: {
        title: "Facebook Marketing Services | Cinute InfoMedia",
        description: "Facebook marketing services with expert Meta ads management, creative testing and a strong ROAS focus. Get a free audit today.",
        url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services",
        type: "website",
        images: [
            {
                url: "/og-images/facebook-marketing-services.webp",
                width: 1200,
                height: 630,
                alt: "Facebook Marketing Services | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Facebook Marketing Services | Cinute InfoMedia",
        description: "Facebook marketing services with expert Meta ads management, creative testing and a strong ROAS focus. Get a free audit today.",
        images: ["/og-images/facebook-marketing-services.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facebook Marketing Services",
    "provider": { "@id": "https://www.cinuteinfomedia.com/#organization" },
    "serviceType": "Digital Marketing",
    "areaServed": ["US", "EU", "IN", "APAC"],
    "description": "Expert Facebook marketing agency providing Meta ads management, lead generation, and e-commerce scaling services with a focus on high ROAS and technical E-E-A-T optimization.",
    "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "url": "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Meta Advertising Solutions",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Facebook Ads Management"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Facebook Lead Generation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Facebook Ads Scaling"
                }
            }
        ]
    }
};

// FAQPage markup removed 2026-11-18: this page shows no FAQ, and Google requires
// FAQ markup to match visible questions and answers.

// T5 follow-up: this page emitted no BreadcrumbList, unlike the rest of the
// service tree. Added as a standalone block so the schema already on the page
// is left exactly as it was.
const breadcrumbLd = {
    "@context": "https://schema.org",
    ...generateBreadcrumbSchema(
        [
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Social Media", url: "/services/social-media-marketing-services" },
            { name: "Facebook Ads", url: "/services/social-media-marketing-services/facebook-marketing-services" },
        ],
        "https://www.cinuteinfomedia.com/services/social-media-marketing-services/facebook-marketing-services/#breadcrumb"
    ),
};

export default function FacebookMarketingPage() {
    return (
        <main style={{ "--page-selection-bg": "#1877F2" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
