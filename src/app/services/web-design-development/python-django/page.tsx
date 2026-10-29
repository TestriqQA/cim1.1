import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/python-django/Hero";
import ServiceOverview from "@/components/services/web-design-development/python-django/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/python-django/SolutionTypes";
import TechStack from "@/components/services/web-design-development/python-django/TechStack";
import Process from "@/components/services/web-design-development/python-django/Process";
import WhyChooseUs from "@/components/services/web-design-development/python-django/WhyChooseUs";
import CTA from "@/components/services/web-design-development/python-django/CTA";

export const metadata: Metadata = {
    title: "Python & Django Development Services | Testriq",
    description:
        "Expert Python and Django web development services. We build scalable, secure web applications, REST APIs, and enterprise solutions with Python's powerful ecosystem.",
    openGraph: {
        title: "Python & Django Development Services | Testriq",
        description: "Expert Python and Django web development services. We build scalable, secure web applications, REST APIs, and enterprise solutions with Python's powerful ecosystem.",
        url: "https://www.cinuteinfomedia.com/services/web-design-development/python-django",
        type: "website",
        images: [
            {
                url: "/og-images/python-django.webp",
                width: 1200,
                height: 630,
                alt: "Python & Django Development Services | Testriq by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Python & Django Development Services | Testriq",
        description: "Expert Python and Django web development services. We build scalable, secure web applications, REST APIs, and enterprise solutions with Python's powerful ecosystem.",
        images: ["/og-images/python-django.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/web-design-development/python-django",
    },
};

export default function PythonDjangoPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#306998" } as React.CSSProperties}>
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
