import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/strapi-headless-cms/Hero";
import ServiceOverview from "@/components/services/web-design-development/strapi-headless-cms/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/strapi-headless-cms/SolutionTypes";
import TechStack from "@/components/services/web-design-development/strapi-headless-cms/TechStack";
import Process from "@/components/services/web-design-development/strapi-headless-cms/Process";
import WhyChooseUs from "@/components/services/web-design-development/strapi-headless-cms/WhyChooseUs";
import CTA from "@/components/services/web-design-development/strapi-headless-cms/CTA";

export const metadata: Metadata = {
    title: "Strapi Headless CMS Development Services | Testriq",
    description:
        "Expert Strapi headless CMS development services. Build flexible, API-first content infrastructure with REST, GraphQL, and seamless frontend integrations.",
    openGraph: {
        title: "Strapi Headless CMS Development Services | Testriq",
        description: "Expert Strapi headless CMS development services. Build flexible, API-first content infrastructure with REST, GraphQL, and seamless frontend integrations.",
        url: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms",
        type: "website",
        images: [
            {
                url: "/og-images/strapi-headless-cms.webp",
                width: 1200,
                height: 630,
                alt: "Strapi Headless CMS Development Services | Testriq by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Strapi Headless CMS Development Services | Testriq",
        description: "Expert Strapi headless CMS development services. Build flexible, API-first content infrastructure with REST, GraphQL, and seamless frontend integrations.",
        images: ["/og-images/strapi-headless-cms.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/web-design-development/strapi-headless-cms",
    },
};

export default function StrapiHeadlessCMSPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#4945FF" } as React.CSSProperties}>
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
