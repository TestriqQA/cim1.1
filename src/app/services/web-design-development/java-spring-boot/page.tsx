import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/java-spring-boot/Hero";
import ServiceOverview from "@/components/services/web-design-development/java-spring-boot/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/java-spring-boot/SolutionTypes";
import TechStack from "@/components/services/web-design-development/java-spring-boot/TechStack";
import Process from "@/components/services/web-design-development/java-spring-boot/Process";
import WhyChooseUs from "@/components/services/web-design-development/java-spring-boot/WhyChooseUs";
import CTA from "@/components/services/web-design-development/java-spring-boot/CTA";

export const metadata: Metadata = {
    title: "Java & Spring Boot Development Services | Testriq",
    description:
        "Expert Java and Spring Boot development services. We build scalable, secure enterprise applications, microservices, and high-performance APIs with the Spring ecosystem.",
    openGraph: {
        title: "Java & Spring Boot Development Services | Testriq",
        description: "Expert Java and Spring Boot development services. We build scalable, secure enterprise applications, microservices, and high-performance APIs with the Spring ecosystem.",
        url: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot",
        type: "website",
        images: [
            {
                url: "/og-images/java-spring-boot.webp",
                width: 1200,
                height: 630,
                alt: "Java & Spring Boot Development Services | Testriq by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Java & Spring Boot Development Services | Testriq",
        description: "Expert Java and Spring Boot development services. We build scalable, secure enterprise applications, microservices, and high-performance APIs with the Spring ecosystem.",
        images: ["/og-images/java-spring-boot.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/web-design-development/java-spring-boot",
    },
};

export default function JavaSpringBootPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#6DB33F" } as React.CSSProperties}>
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
