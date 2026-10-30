import { Metadata } from "next";
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateServiceSchema,
    generateBreadcrumbSchema,
} from "@/lib/schema";
import Hero from "@/components/services/web-design-development/contentful-headless-cms/Hero";
import ServiceOverview from "@/components/services/web-design-development/contentful-headless-cms/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/contentful-headless-cms/SolutionTypes";
import TechStack from "@/components/services/web-design-development/contentful-headless-cms/TechStack";
import Process from "@/components/services/web-design-development/contentful-headless-cms/Process";
import WhyChooseUs from "@/components/services/web-design-development/contentful-headless-cms/WhyChooseUs";
import CTA from "@/components/services/web-design-development/contentful-headless-cms/CTA";

export const metadata: Metadata = {
    title: "Contentful Headless CMS Development | Cinute InfoMedia",
    description:
        "Expert Contentful headless CMS development services. Build composable content platforms with GraphQL, REST APIs, and seamless frontend integrations.",
    openGraph: {
        title: "Contentful Headless CMS Development | Cinute InfoMedia",
        description: "Expert Contentful headless CMS development services. Build composable content platforms with GraphQL, REST APIs, and seamless frontend integrations.",
        url: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms",
        type: "website",
        images: [
            {
                url: "/og-images/contentful-headless-cms.webp",
                width: 1200,
                height: 630,
                alt: "Contentful Headless CMS Development | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contentful Headless CMS Development | Cinute InfoMedia",
        description: "Expert Contentful headless CMS development services. Build composable content platforms with GraphQL, REST APIs, and seamless frontend integrations.",
        images: ["/og-images/contentful-headless-cms.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms",
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
        name: "Contentful Headless CMS Development | Cinute InfoMedia",
        description: "Expert Contentful headless CMS development services. Build composable content platforms with GraphQL, REST APIs, and seamless frontend integrations.",
        urlPath: "/services/web-design-development/contentful-headless-cms",
        mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms/#service",
        breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms/#breadcrumb",
    }),
    generateServiceSchema({
        name: "Contentful Headless CMS Development",
        description: "Expert Contentful headless CMS development services. Build composable content platforms with GraphQL, REST APIs, and seamless frontend integrations.",
        urlPath: "/services/web-design-development/contentful-headless-cms",
        serviceType: "Headless CMS Development",
        areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates"],
    }),
    generateBreadcrumbSchema(
        [
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Contentful Headless CMS Development", url: "/services/web-design-development/contentful-headless-cms" },
        ],
        "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms/#breadcrumb"
    )
);

export default function ContentfulHeadlessCMSPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#0286FF" } as React.CSSProperties}>
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
