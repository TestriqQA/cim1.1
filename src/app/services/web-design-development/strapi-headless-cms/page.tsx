import { Metadata } from "next";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateServiceSchema,
    generateBreadcrumbSchema,
} from "@/lib/schema";
import Hero from "@/components/services/web-design-development/strapi-headless-cms/Hero";
import ServiceOverview from "@/components/services/web-design-development/strapi-headless-cms/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/strapi-headless-cms/SolutionTypes";
import TechStack from "@/components/services/web-design-development/strapi-headless-cms/TechStack";
import Process from "@/components/services/web-design-development/strapi-headless-cms/Process";
import WhyChooseUs from "@/components/services/web-design-development/strapi-headless-cms/WhyChooseUs";
import CTA from "@/components/services/web-design-development/strapi-headless-cms/CTA";

export const metadata: Metadata = {
    title: "Strapi Headless CMS Development | Cinute InfoMedia",
    description:
        "Expert Strapi headless CMS development services. Build flexible, API-first content infrastructure with REST, GraphQL, and seamless frontend integrations.",
    openGraph: {
        title: "Strapi Headless CMS Development | Cinute InfoMedia",
        description: "Expert Strapi headless CMS development services. Build flexible, API-first content infrastructure with REST, GraphQL, and seamless frontend integrations.",
        url: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms",
        type: "website",
        images: [
            {
                url: "/og-images/strapi-headless-cms.webp",
                width: 1200,
                height: 630,
                alt: "Strapi Headless CMS Development | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Strapi Headless CMS Development | Cinute InfoMedia",
        description: "Expert Strapi headless CMS development services. Build flexible, API-first content infrastructure with REST, GraphQL, and seamless frontend integrations.",
        images: ["/og-images/strapi-headless-cms.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms",
    },
};


// This page previously emitted no structured data, unlike the rest of the
// service tree. Same @graph shape the other service pages use: Organization and
// WebSite anchor the entity, WebPage describes this URL, Service describes what
// is sold here, BreadcrumbList gives the path back to the hub. (T5)
const jsonLd = generateGraphSchema(
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateWebPageSchema({
        name: "Strapi Headless CMS Development | Cinute InfoMedia",
        description: "Expert Strapi headless CMS development services. Build flexible, API-first content infrastructure with REST, GraphQL, and seamless frontend integrations.",
        urlPath: "/services/web-design-development/strapi-headless-cms",
        mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms/#service",
        breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms/#breadcrumb",
    }),
    generateServiceSchema({
        name: "Strapi Headless CMS Development",
        description: "Expert Strapi headless CMS development services. Build flexible, API-first content infrastructure with REST, GraphQL, and seamless frontend integrations.",
        urlPath: "/services/web-design-development/strapi-headless-cms",
        serviceType: "Headless CMS Development",
        areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates"],
    }),
    generateBreadcrumbSchema(
        [
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Strapi Headless CMS Development", url: "/services/web-design-development/strapi-headless-cms" },
        ],
        "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms/#breadcrumb"
    )
);

export default function StrapiHeadlessCMSPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#4945FF" } as React.CSSProperties}>
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
