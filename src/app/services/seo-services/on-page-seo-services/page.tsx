import type { Metadata } from "next";
import Hero from "@/components/services/seo-services/on-page-seo-services/Hero";
import ServiceOverview from "@/components/services/seo-services/on-page-seo-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/on-page-seo-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/on-page-seo-services/TechStack";
import Process from "@/components/services/seo-services/on-page-seo-services/Process";
import WhyChooseUs from "@/components/services/seo-services/on-page-seo-services/WhyChooseUs";
import FAQ from "@/components/services/seo-services/on-page-seo-services/FAQ";
import CTA from "@/components/services/seo-services/on-page-seo-services/CTA";

export const metadata: Metadata = {
    title: "Hire Expert On-Page SEO Services | Boost Organic Traffic 2026",
    description:
        "Scaling ROI with data-backed On-page SEO optimization. Rank higher, fix Core Web Vitals, and dominate SERPs with high-E-E-A-T technical audits. Get a free audit today!",
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/seo-services/on-page-seo-services",
    },
    keywords: [
        "on-page SEO",
        "on-page SEO services",
        "title tag optimization",
        "meta description optimization",
        "content optimization",
        "internal linking",
        "header tags SEO",
        "image optimization SEO",
        "schema markup",
        "core web vitals",
    ],
    openGraph: {
        title: "Hire Expert On-Page SEO Services | Boost Organic Traffic 2026",
        description: "Scaling ROI with data-backed On-page SEO optimization. Rank higher, fix Core Web Vitals, and dominate SERPs with high-E-E-A-T technical audits. Get a free audit today!",
        url: "https://www.cinuteinfomedia.com/services/seo-services/on-page-seo-services",
        type: "website",
        images: [
            {
                url: "/og-images/on-page-seo-services.webp",
                width: 1200,
                height: 630,
                alt: "Hire Expert On-Page SEO Services | Boost Organic Traffic 2026 by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hire Expert On-Page SEO Services | Boost Organic Traffic 2026",
        description: "Scaling ROI with data-backed On-page SEO optimization. Rank higher, fix Core Web Vitals, and dominate SERPs with high-E-E-A-T technical audits. Get a free audit today!",
        images: ["/og-images/on-page-seo-services.webp"],
    },

};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "On-Page SEO Services",
    "provider": {
        "@type": "Organization",
        "name": "Cinute Infomedia",
        "url": "https://www.cinuteinfomedia.com"
    },
    "areaServed": "Global",
    "description": "Professional on-page SEO optimization services including technical audits, keyword mapping, content optimization, and schema implementation to boost search rankings.",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "On-page SEO Technical Audit"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce SEO Optimization"
                }
            }
        ]
    },
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is included in on-page SEO services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our services include technical audits, keyword mapping, content optimization, image SEO, and schema markup."
                }
            }
        ]
    }
};

export default function OnPageSEOPage() {
    return (
        <main style={{ "--page-selection-bg": "#22C55E" } as React.CSSProperties}>
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
            <FAQ />
            <CTA />
        </main>
    );
}
