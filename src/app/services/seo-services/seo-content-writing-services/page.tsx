import type { Metadata } from "next";
import Hero from "@/components/services/seo-services/seo-content-writing-services/Hero";
import ServiceOverview from "@/components/services/seo-services/seo-content-writing-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/seo-content-writing-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/seo-content-writing-services/TechStack";
import Process from "@/components/services/seo-services/seo-content-writing-services/Process";
import WhyChooseUs from "@/components/services/seo-services/seo-content-writing-services/WhyChooseUs";
import CTA from "@/components/services/seo-services/seo-content-writing-services/CTA";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "SEO Content Writing Services | Cinute InfoMedia",
    description: "SEO content writing services. High-E-E-A-T articles, blogs and landing pages built to rank on Google. Get a free quote today.",
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services",
    },
    openGraph: {
        title: "SEO Content Writing Services | Cinute InfoMedia",
        description: "SEO content writing services. High-E-E-A-T articles, blogs and landing pages built to rank on Google. Get a free quote today.",
        url: "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services",
        type: "website",
        images: [
            {
                url: "/og-images/seo-content-writing-services.webp",
                width: 1200,
                height: 630,
                alt: "SEO Content Writing Services | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SEO Content Writing Services | Cinute InfoMedia",
        description: "SEO content writing services. High-E-E-A-T articles, blogs and landing pages built to rank on Google. Get a free quote today.",
        images: ["/og-images/seo-content-writing-services.webp"],
    },

};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "name": "Cinute InfoMedia",
            "url": "https://www.cinuteinfomedia.com",
            "logo": "https://www.cinuteinfomedia.com/logo.png",
            "sameAs": [
                "https://twitter.com/cinuteinfomedia",
                "https://linkedin.com/company/cinuteinfomedia",
            ],
        },
        {
            "@type": "Service",
            "name": "SEO Content Services",
            "provider": {
                "@type": "Organization",
                "name": "Cinute InfoMedia",
            },
            "description":
                "Professional SEO content writing and optimization services designed for 2026 EEAT guidelines.",
            "areaServed": "Global",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "SEO Content Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "SEO Copywriting",
                        },
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Content Strategy Audit",
                        },
                    },
                ],
            },
        },

    ],
};

// T5 follow-up: this page emitted no BreadcrumbList, unlike the rest of the
// service tree. Added as a standalone block so the schema already on the page
// is left exactly as it was.
const breadcrumbLd = {
    "@context": "https://schema.org",
    ...generateBreadcrumbSchema(
        [
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "SEO Services", url: "/services/seo-services" },
            { name: "SEO Content Writing", url: "/services/seo-services/seo-content-writing-services" },
        ],
        "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services/#breadcrumb"
    ),
};

export default function ContentSEOPage() {
    return (
        <main style={{ "--page-selection-bg": "#10b981" } as React.CSSProperties}>
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
