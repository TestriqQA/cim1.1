import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/android-app-development-company/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/android-app-development-company/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/android-app-development-company/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/android-app-development-company/TechStack";
import Process from "@/components/services/mobile-app-development/android-app-development-company/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/android-app-development-company/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/android-app-development-company/CTA";
import FAQ from "@/components/services/mobile-app-development/android-app-development-company/FAQ";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Android App Development Company | Cinute InfoMedia",
    description:
        "Custom Android app development in Kotlin and Jetpack Compose, tested on real devices and shipped to Play. Book a free consultation.",
    // This was the only one of the 59 service pages with no canonical tag, while
    // still being listed in sitemap.xml.
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company",
    },
    openGraph: {
        url: "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company",
        images: [
            {
                url: "/og-images/android-app-development-company.webp",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: ["/og-images/android-app-development-company.webp"],
    },
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
            { name: "Mobile Apps", url: "/services/mobile-app-development" },
            { name: "Android Development", url: "/services/mobile-app-development/android-app-development-company" },
        ],
        "https://www.cinuteinfomedia.com/services/mobile-app-development/android-app-development-company/#breadcrumb"
    ),
};

export default function AndroidAppDevelopmentPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#3DDC84" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <CTA />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            name: "Android App Development Services",
                            provider: { "@id": "https://www.cinuteinfomedia.com/#organization" },
                            serviceType: "Mobile App Development",
                            areaServed: "Global",
                            description:
                                "Android App Development Company offering custom native and cross-platform solutions. Expert Kotlin and Java developers delivering high-performance apps.",
                            offers: {
                                "@type": "Offer",
                                priceCurrency: "USD",
                                price: "5000",
                                url: "https://www.cinuteinfomedia.com/contact",
                            },
                            hasOfferCatalog: {
                                "@type": "OfferCatalog",
                                name: "Android Development Services",
                                itemListElement: [
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Custom Android App Development",
                                        },
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Android App Maintenance",
                                        },
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Android UI/UX Design",
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: [
                                {
                                    "@type": "Question",
                                    "name": "How much does it cost to develop an Android app?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "The cost varies based on complexity. A simple MVP starts from $10,000 to $25,000, while complex enterprise apps with AI/IoT features can range from $50,000 to $150,000+. We provide detailed, fixed-price quotes after our initial discovery call." },
                                },
                                {
                                    "@type": "Question",
                                    "name": "What is the best language for Android app development?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "Kotlin is currently the industry standard and Google's preferred language for Android development due to its conciseness and safety features. However, we also support Java for legacy code modernization and C++ for high-performance NDK modules." },
                                },
                                {
                                    "@type": "Question",
                                    "name": "How long does it take to build a custom Android app?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "A standard custom Android app takes 3 to 6 months from concept to launch. This includes design, development, testing, and deployment. We offer expedited \"Sprint\" packages for urgent MVP launches in as little as 8 weeks." },
                                },
                                {
                                    "@type": "Question",
                                    "name": "What are the benefits of native Android development vs hybrid?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "Native Android apps offer superior performance, better access to device hardware (camera, GPS), and a smoother UX compared to hybrid apps. However, hybrid solutions (Flutter/React Native) are faster to build and cost-effective if you need both iOS and Android apps simultaneously." },
                                },
                                {
                                    "@type": "Question",
                                    "name": "How do I publish my app on the Google Play Store?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "We handle the entire end-to-end publishing process. This includes creating your Developer Account, preparing high-res screenshots, writing SEO-optimized descriptions, ensuring Google Play Protect compliance, and managing the review process to maximize approval success." },
                                },
                                {
                                    "@type": "Question",
                                    "name": "Do you offer Android app migration and legacy code modernization?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "Yes! We specialize in Android app migration services, helping businesses upgrade from Java to Kotlin or move from monolithic architectures to scalable microservices, improving maintainability and performance." },
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can you integrate on-device AI and machine learning?",
                                    "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We harness the power of TensorFlow Lite and Google ML Kit to add smart features like image labeling, face detection, and text recognition directly on the device, ensuring privacy and offline capability." },
                                },
                            ],
                        },
                    ]),
                }}
            />
        </main>
    );
}
