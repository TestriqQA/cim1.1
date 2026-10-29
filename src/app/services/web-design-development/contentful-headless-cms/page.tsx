import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/contentful-headless-cms/Hero";
import ServiceOverview from "@/components/services/web-design-development/contentful-headless-cms/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/contentful-headless-cms/SolutionTypes";
import TechStack from "@/components/services/web-design-development/contentful-headless-cms/TechStack";
import Process from "@/components/services/web-design-development/contentful-headless-cms/Process";
import WhyChooseUs from "@/components/services/web-design-development/contentful-headless-cms/WhyChooseUs";
import CTA from "@/components/services/web-design-development/contentful-headless-cms/CTA";

export const metadata: Metadata = {
    title: "Contentful Headless CMS Development Services | Testriq",
    description:
        "Expert Contentful headless CMS development services. Build composable content platforms with GraphQL, REST APIs, and seamless frontend integrations.",
    openGraph: {
        title: "Contentful Headless CMS Development Services | Testriq",
        description: "Expert Contentful headless CMS development services. Build composable content platforms with GraphQL, REST APIs, and seamless frontend integrations.",
        url: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms",
        type: "website",
        images: [
            {
                url: "/og-images/contentful-headless-cms.webp",
                width: 1200,
                height: 630,
                alt: "Contentful Headless CMS Development Services | Testriq by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contentful Headless CMS Development Services | Testriq",
        description: "Expert Contentful headless CMS development services. Build composable content platforms with GraphQL, REST APIs, and seamless frontend integrations.",
        images: ["/og-images/contentful-headless-cms.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/web-design-development/contentful-headless-cms",
    },
};

export default function ContentfulHeadlessCMSPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#0286FF" } as React.CSSProperties}>
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
