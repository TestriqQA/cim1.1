import type { Metadata } from "next";
import Hero from "@/components/services/seo-services/seo-content-writing-services/Hero";
import ServiceOverview from "@/components/services/seo-services/seo-content-writing-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/seo-content-writing-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/seo-content-writing-services/TechStack";
import Process from "@/components/services/seo-services/seo-content-writing-services/Process";
import WhyChooseUs from "@/components/services/seo-services/seo-content-writing-services/WhyChooseUs";
import CTA from "@/components/services/seo-services/seo-content-writing-services/CTA";

export const metadata: Metadata = {
    title: "SEO Content Writing Services | Cinute InfoMedia",
    description: "Drive traffic and engagement with our SEO content writing services. High-E-E-A-T articles, blogs, and landing pages that rank higher on Google. Get a free quote!",
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/seo-services/seo-content-writing-services",
    },
    openGraph: {
        title: "SEO Content Writing Services | Cinute InfoMedia",
        description: "Drive traffic and engagement with our SEO content writing services. High-E-E-A-T articles, blogs, and landing pages that rank higher on Google. Get a free quote!",
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
        description: "Drive traffic and engagement with our SEO content writing services. High-E-E-A-T articles, blogs, and landing pages that rank higher on Google. Get a free quote!",
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

export default function ContentSEOPage() {
    return (
        <main style={{ "--page-selection-bg": "#10b981" } as React.CSSProperties}>
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
