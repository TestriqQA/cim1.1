import type { Metadata } from "next";
import Hero from "@/components/services/seo-services/technical-seo-services/Hero";
import ServiceOverview from "@/components/services/seo-services/technical-seo-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/technical-seo-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/technical-seo-services/TechStack";
import Process from "@/components/services/seo-services/technical-seo-services/Process";
import WhyChooseUs from "@/components/services/seo-services/technical-seo-services/WhyChooseUs";
import CTA from "@/components/services/seo-services/technical-seo-services/CTA";

export const metadata: Metadata = {
    title: "Technical SEO Services | Cinute InfoMedia",
    description:
        "Boost crawlability & speed with our expert Technical SEO company. Optimize Core Web Vitals, Schema, and site architecture for global rankings. Get a free audit today!",
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services",
    },
    openGraph: {
        title: "Technical SEO Services | Cinute InfoMedia",
        description: "Boost crawlability & speed with our expert Technical SEO company. Optimize Core Web Vitals, Schema, and site architecture for global rankings. Get a free audit today!",
        url: "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services",
        type: "website",
        images: [
            {
                url: "/og-images/technical-seo-services.webp",
                width: 1200,
                height: 630,
                alt: "Technical SEO Services | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Technical SEO Services | Cinute InfoMedia",
        description: "Boost crawlability & speed with our expert Technical SEO company. Optimize Core Web Vitals, Schema, and site architecture for global rankings. Get a free audit today!",
        images: ["/og-images/technical-seo-services.webp"],
    },

};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Technical SEO Services",
    "provider": {
        "@type": "Organization",
        "name": "Cinute InfoMedia",
        "url": "https://www.cinuteinfomedia.com"
    },
    "areaServed": "Global",
    "description": "Expert technical SEO services including performance analysis, Core Web Vitals optimization, schema markup implementation, and site architecture audits.",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technical SEO Solutions",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Technical SEO Audit for Ecommerce"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Core Web Vitals Optimization"
                }
            }
        ]
    },
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is included in a technical SEO audit?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A technical SEO audit includes site speed analysis, crawlability checks, indexation monitoring, and schema markup verification."
                }
            },
            {
                "@type": "Question",
                "name": "How much do technical SEO services cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Professional technical SEO services in 2026 typically range from $2,500 to $10,000 depending on the site size and complexity."
                }
            }
        ]
    }
};

export default function TechnicalSEOPage() {
    return (
        <main style={{ "--page-selection-bg": "#8B5CF6" } as React.CSSProperties}>
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
