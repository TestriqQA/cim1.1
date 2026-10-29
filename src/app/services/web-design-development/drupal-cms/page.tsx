import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/drupal-cms/Hero";
import ServiceOverview from "@/components/services/web-design-development/drupal-cms/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/drupal-cms/SolutionTypes";
import TechStack from "@/components/services/web-design-development/drupal-cms/TechStack";
import Process from "@/components/services/web-design-development/drupal-cms/Process";
import WhyChooseUs from "@/components/services/web-design-development/drupal-cms/WhyChooseUs";
import CTA from "@/components/services/web-design-development/drupal-cms/CTA";

export const metadata: Metadata = {
    title: "Drupal CMS Development Services | Testriq",
    description:
        "Expert Drupal CMS development services. We build secure, scalable, and accessible enterprise websites for government, education, healthcare, and large organizations.",
    openGraph: {
        title: "Drupal CMS Development Services | Testriq",
        description: "Expert Drupal CMS development services. We build secure, scalable, and accessible enterprise websites for government, education, healthcare, and large organizations.",
        url: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms",
        type: "website",
        images: [
            {
                url: "/og-images/drupal-cms.webp",
                width: 1200,
                height: 630,
                alt: "Drupal CMS Development Services | Testriq by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Drupal CMS Development Services | Testriq",
        description: "Expert Drupal CMS development services. We build secure, scalable, and accessible enterprise websites for government, education, healthcare, and large organizations.",
        images: ["/og-images/drupal-cms.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/web-design-development/drupal-cms",
    },
};

export default function DrupalCMSPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#0678BE" } as React.CSSProperties}>
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
