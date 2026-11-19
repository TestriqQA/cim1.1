import type { Metadata } from "next";
import Hero from "@/components/services/seo-services/technical-seo-services/Hero";
import ServiceOverview from "@/components/services/seo-services/technical-seo-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/technical-seo-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/technical-seo-services/TechStack";
import Process from "@/components/services/seo-services/technical-seo-services/Process";
import WhyChooseUs from "@/components/services/seo-services/technical-seo-services/WhyChooseUs";
import CTA from "@/components/services/seo-services/technical-seo-services/CTA";
import Link from "next/link";
import ServiceGuide from "@/components/services/ServiceGuide";
import { technicalSeoChecklist } from "@/data/serviceGuides";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Technical SEO Agency | Audits & Fixes | Cinute InfoMedia",
    description:
        "Technical SEO agency fixing crawlability, speed and indexing: Core Web Vitals, schema and site architecture, tuned for global rankings.",
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services",
    },
    openGraph: {
        title: "Technical SEO Agency | Audits & Fixes | Cinute InfoMedia",
        description: "Technical SEO agency fixing crawlability, speed and indexing: Core Web Vitals, schema and site architecture, tuned for global rankings.",
        url: "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services",
        type: "website",
        images: [
            {
                url: "/og-images/technical-seo-services.webp",
                width: 1200,
                height: 630,
                alt: "Technical SEO Agency | Audits & Fixes | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Technical SEO Agency | Audits & Fixes | Cinute InfoMedia",
        description: "Technical SEO agency fixing crawlability, speed and indexing: Core Web Vitals, schema and site architecture, tuned for global rankings.",
        images: ["/og-images/technical-seo-services.webp"],
    },

};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Technical SEO Services",
    "provider": { "@id": "https://www.cinuteinfomedia.com/#organization" },
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

// T5 follow-up: this page emitted no BreadcrumbList, unlike the rest of the
// service tree. Added as a standalone block so the schema already on the page
// is left exactly as it was.
const breadcrumbLd = {
    "@context": "https://schema.org",
    ...generateBreadcrumbSchema(
        [
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "SEO", url: "/services/seo-services" },
            { name: "Technical SEO", url: "/services/seo-services/technical-seo-services" },
        ],
        "https://www.cinuteinfomedia.com/services/seo-services/technical-seo-services/#breadcrumb"
    ),
};

export default function TechnicalSEOPage() {
    return (
        <main style={{ "--page-selection-bg": "#8B5CF6" } as React.CSSProperties}>
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
            <ServiceGuide
                id="technical-seo-checklist"
                title="Our Technical SEO Checklist"
                intro="As a technical SEO agency, we check these eight areas on every site before we change anything, then fix the problems in order of impact."
                items={technicalSeoChecklist}
                accent="var(--accent-violet-text)"
                footer={<>Want to check your own site first? Use our <Link href="/blog/technical-seo-audit-checklist-2026" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)]">technical SEO audit checklist</Link>.</>}
            />
            <WhyChooseUs />
            <CTA />
        </main>
    );
}
