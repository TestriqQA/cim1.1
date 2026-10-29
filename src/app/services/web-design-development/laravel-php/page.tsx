import type { Metadata } from "next";
import Hero from "@/components/services/web-design-development/laravel-php/Hero";
import ServiceOverview from "@/components/services/web-design-development/laravel-php/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/laravel-php/SolutionTypes";
import TechStack from "@/components/services/web-design-development/laravel-php/TechStack";
import Process from "@/components/services/web-design-development/laravel-php/Process";
import WhyChooseUs from "@/components/services/web-design-development/laravel-php/WhyChooseUs";
import CTA from "@/components/services/web-design-development/laravel-php/CTA";

export const metadata: Metadata = {
    title: "Laravel & PHP Development Services - Enterprise Solutions",
    description: "Expert Laravel and PHP development services for scalable, secure, and high-performance web applications. Custom solutions tailored to your business needs.",
    openGraph: {
        title: "Laravel & PHP Development Services - Enterprise Solutions",
        description: "Expert Laravel and PHP development services for scalable, secure, and high-performance web applications. Custom solutions tailored to your business needs.",
        url: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php",
        type: "website",
        images: [
            {
                url: "/og-images/laravel-php.webp",
                width: 1200,
                height: 630,
                alt: "Laravel & PHP Development Services - Enterprise Solutions by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Laravel & PHP Development Services - Enterprise Solutions",
        description: "Expert Laravel and PHP development services for scalable, secure, and high-performance web applications. Custom solutions tailored to your business needs.",
        images: ["/og-images/laravel-php.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/web-design-development/laravel-php",
    },
};

export default function LaravelPhpPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#FF2D20" } as React.CSSProperties}>
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
