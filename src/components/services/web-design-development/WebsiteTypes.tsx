"use client";

import { useState } from "react";
import {
    Globe, ShoppingCart, Zap, BookOpen, Image as ImageIcon, Layout, Code, Code2, Settings,
    Building2, Stethoscope, GraduationCap, Calculator, Plane, Clapperboard,
    Server, Database, Smartphone, Laptop, Rocket, Coffee, Droplets, Boxes, Layers
} from "lucide-react";
import Link from "next/link";

export default function WebsiteTypes() {
    const [activeTab, setActiveTab] = useState<"core" | "industry" | "tech">("core");

    const coreTypes = [
        {
            icon: Building2,
            title: "Business & Corporate",
            description: "High-authority platforms engineered for global brands to establish credibility and capture high-value enterprise leads.",
            features: ["Brand authority", "Lead generation", "Professional design", "Trust building"],
            color: "from-[#f97316] to-[#ea580c]",
            href: "/services/web-design-development/business-corporate",
        },
        {
            icon: Code,
            title: "Web Applications & SaaS",
            description: "Complex, scalable software solutions built with modern stacks (React, Node.js) for multi-tenant global platforms.",
            features: ["Real-time interactions", "Complex logic", "Scalable", "Subscription ready"],
            color: "from-[#008ac1] to-[#bc3feb]",
            href: "/services/web-design-development/saas-development-services",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce Ecosystems",
            description: "Advanced online stores with global payment gateways, multi-currency support, and seamless omnichannel fulfillment.",
            features: ["Global payments", "Inventory sync", "Conversion optimized", "Scalable architecture"],
            color: "from-[#00b5ca] to-[#00efd6]",
            href: "/services/web-design-development/ecommerce-development-company",
        },
        {
            icon: Zap,
            title: "Blogs & News Portals",
            description: "High-traffic content platforms with advanced CMS integration, engineered for speed and global reader engagement.",
            features: ["Content management", "Database-driven", "High performance", "Engagement tools"],
            color: "from-[#a855f7] to-[#ec4899]",
            href: "/services/web-design-development/blog-design-services",
        },
        {
            icon: ImageIcon,
            title: "Portfolio & Personal",
            description: "Visually stunning showcases for creators and professionals, designed to highlight global achievements and case studies.",
            features: ["Visual showcase", "Case studies", "Professional presentation", "Client testimonials"],
            color: "from-[#06b6d4] to-[#0891b2]",
            href: "/services/web-design-development/branding-services",
        },
    ];

    const industryTypes = [
        {
            icon: GraduationCap,
            title: "EdTech & LMS",
            description: "Global learning platforms with interactive course delivery, student tracking, and automated certification systems.",
            features: ["Course management", "Progress tracking", "Video streaming", "Certificates"],
            color: "from-[#a855f7] to-[#ec4899]",
            href: "/services/web-design-development/edtech-lms",
        },
        {
            icon: Stethoscope,
            title: "Healthcare Portals",
            description: "Secure, HIPAA-compliant web solutions for medical providers, featuring patient management and telemedicine.",
            features: ["Appointment scheduling", "Patient records", "Telemedicine", "Secure messaging"],
            color: "from-[#3b82f6] to-[#6366f1]",
            href: "/services/web-design-development/healthcare-portals",
        },
        {
            icon: Building2,
            title: "Real Estate Platforms",
            description: "Advanced property portals with multi-region support, virtual tours, and CRM-integrated lead management.",
            features: ["Map integration", "Virtual tours", "Advanced filters", "Lead management"],
            color: "from-[#0d9488] to-[#14b8a6]",
            href: "/services/web-design-development/real-estate-platforms",
        },
        {
            icon: Calculator,
            title: "FinTech Solutions",
            description: "Secure financial platforms for global banking, investment tracking, and high-volume payment processing.",
            features: ["Bank-grade security", "Real-time data", "Encryption", "Payment integration"],
            color: "from-[#ee6500] to-[#fab900]",
            href: "/services/web-design-development/fintech-solutions",
        },
        {
            icon: Plane,
            title: "Travel & Hospitality",
            description: "Booking engines with dynamic global pricing, inventory management, and multi-language support.",
            features: ["Booking engine", "Inventory sync", "Payment gateway", "Reviews & ratings"],
            color: "from-[#fab900] to-[#00efd6]",
            href: "/services/web-design-development/travel-and-hospitality-services",
        },
        {
            icon: Clapperboard,
            title: "Entertainment & Media",
            description: "High-performance streaming and media platforms designed for global distribution and mass engagement.",
            features: ["Video streaming", "Content delivery", "Subscription models", "Live chat"],
            color: "from-[#bc3feb] to-[#008ac1]",
            href: "/services/web-design-development/entertainment-media",
        },
    ];

    const techTypes = [
        {
            icon: Layout,
            title: "Next.js & React",
            description: "High-performance, server-rendered applications for maximum speed and SEO.",
            features: ["Server-side rendering", "Static generation", "Optimized performance", "SEO friendly"],
            color: "from-[#000000] to-[#333333]",
            href: "/services/web-design-development/nextjs-development-services",
        },
        {
            icon: Settings,
            title: "Headless & Traditional CMS",
            description: "Flexible content management solutions (WordPress, Strapi, Contentful) giving you full control.",
            features: ["Easy content updates", "No coding required", "Flexible", "Scalable"],
            color: "from-[#21759b] to-[#00b5ca]",
            href: "/services/web-design-development/headless-traditional-cms",
        },
        {
            icon: ShoppingCart,
            title: "Shopify & E-commerce",
            description: "Custom themes and functionality for robust online stores on Shopify or WooCommerce.",
            features: ["Custom themes", "App integration", "Store setup", "Optimization"],
            color: "from-[#96bf48] to-[#96bf48]",
            href: "/services/web-design-development/shopify-development-services",
        },
        {
            icon: Server,
            title: "Node.js & Backend Systems",
            description: "Scalable backend systems and APIs to power your web and mobile applications.",
            features: ["Microservices", "REST/GraphQL APIs", "Real-time data", "Database design"],
            color: "from-[#339933] to-[#68a063]",
            href: "/services/web-design-development/nodejs-backend",
        },
        {
            icon: Code2,
            title: "Laravel & PHP Development",
            description: "Robust, scalable, and secure web applications built with the PHP ecosystem.",
            features: ["Custom Web Apps", "SaaS Platforms", "API Development", "Enterprise Solutions"],
            color: "from-[#FF2D20] to-[#F05340]",
            href: "/services/web-design-development/laravel-php",
        },
        {
            icon: Globe,
            title: "WordPress Development",
            description: "Custom WordPress themes, plugins, and WooCommerce stores for businesses of all sizes.",
            features: ["Custom Themes", "WooCommerce", "Plugin Development", "Performance Optimization"],
            color: "from-[#0073AA] to-[#0096D6]",
            href: "/services/web-design-development/wordpress-development-services",
        },
        {
            icon: Code2,
            title: "Python & Django Development",
            description: "Scalable, secure web applications and APIs built with Python's most powerful framework.",
            features: ["Custom Web Apps", "REST APIs", "SaaS Platforms", "Data Dashboards"],
            color: "from-[#306998] to-[#FFD43B]",
            href: "/services/web-design-development/python-django",
        },
        {
            icon: Rocket,
            title: "Astro Framework Development",
            description: "Lightning-fast content sites with Islands Architecture and zero JavaScript by default.",
            features: ["Zero JS Default", "Islands Architecture", "Multi-Framework", "SSG & SSR"],
            color: "from-[#7C3AED] to-[#FF5D01]",
            href: "/services/web-design-development/astro-framework-services",
        },
        {
            icon: Coffee,
            title: "Java & Spring Boot Development",
            description: "Enterprise-grade applications with Java and Spring Boot for scalability and security.",
            features: ["Microservices", "REST APIs", "Enterprise Apps", "Cloud Native"],
            color: "from-[#6DB33F] to-[#F89820]",
            href: "/services/web-design-development/java-spring-boot",
        },
        {
            icon: Droplets,
            title: "Drupal CMS Development",
            description: "Enterprise-grade CMS for government, education, and large organizations requiring security and scalability.",
            features: ["Enterprise Security", "Multilingual", "Accessibility", "Multisite"],
            color: "from-[#0678BE] to-[#29A8DF]",
            href: "/services/web-design-development/drupal-cms",
        },
        {
            icon: Boxes,
            title: "Strapi Headless CMS Development",
            description: "API-first headless CMS for omnichannel content delivery with REST and GraphQL.",
            features: ["API-First", "TypeScript Native", "Open Source", "Customizable"],
            color: "from-[#4945FF] to-[#7B79FF]",
            href: "/services/web-design-development/strapi-headless-cms",
        },
        {
            icon: Layers,
            title: "Contentful Headless CMS Development",
            description: "Enterprise composable content platform for omnichannel experiences with GraphQL and REST.",
            features: ["Composable", "Enterprise SaaS", "High Availability", "Global CDN"],
            color: "from-[#0286FF] to-[#4DA3FF]",
            href: "/services/web-design-development/contentful-headless-cms",
        },
    ];

    type WebsiteType = {
        icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & { title?: string; titleId?: string }>;
        title: string;
        description: string;
        features: string[];
        color: string;
        href?: string;
    };

    const renderGrid = (data: WebsiteType[]) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {data.map((type, idx) => {
                const Icon = type.icon;
                const cardContent = (
                    <div
                        className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 h-full flex flex-col"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        {/* Header with Icon */}
                        <div
                            className={`flex gap-3 p-6 bg-gradient-to-br ${type.color} relative overflow-hidden`}
                        >
                            <div className="absolute inset-0 opacity-10" style={{ background: "linear-gradient(135deg, white, transparent)" }} />
                            <Icon className="w-8 h-8 text-white relative z-10" />
                            <h3 className="text-lg font-bold mb-3 text-white relative z-10 flex items-center h-8">
                                {type.title}
                            </h3>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                            <p className="text-sm mb-6 flex-1" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                {type.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {type.features.map((feature, fidx) => (
                                    <li key={fidx} className="flex items-start gap-2 text-sm">
                                        <span
                                            className={`w-4 h-4 rounded-full flex-shrink-0 mt-0.5 bg-gradient-to-br ${type.color}`}
                                        />
                                        <span style={{ color: "var(--secondary-text)" }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );

                return 'href' in type && type.href ? (
                    <Link key={idx} href={type.href} className="h-full">
                        {cardContent}
                    </Link>
                ) : (
                    <div key={idx}>{cardContent}</div>
                );
            })}
        </div>
    );

    return (
        <section
            className="py-10 lg:py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.4s ease-out forwards;
                }
            `}</style>
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 138, 193, 0.05)",
                            borderColor: "rgba(0, 138, 193, 0.2)",
                        }}
                    >
                        <Globe className="w-4 h-4" style={{ color: "var(--brand-blue)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Website Types
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Comprehensive <span style={{ color: "var(--brand-blue-text)", fontWeight: 700 }}>Custom Website Development</span> Solutions
                    </h2>

                    <p className="text-xl max-w-4xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        As a professional <span className="text-[var(--brand-blue-text)] font-bold">web design agency</span>, we offer full-spectrum digital engineering. Our <span className="text-[var(--accent-teal-text)] font-bold">web development agency</span> delivers scalable, secure, and SEO-optimized platforms for global markets.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                        }}
                    />
                </div>

                {/* Tab Controls */}
                <div className="flex justify-center mb-12">
                    <div
                        className="inline-flex p-1.5 rounded-2xl border bg-[var(--card-bg)]"
                        style={{ borderColor: "var(--border-color)" }}
                    >
                        <button
                            onClick={() => setActiveTab("core")}
                            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === "core" ? "shadow-md scale-105" : "hover:bg-[var(--hover-bg)]"
                                }`}
                            style={{
                                background: activeTab === "core" ? "var(--brand-blue-btn)" : "transparent",
                                color: activeTab === "core" ? "white" : "var(--secondary-text)"
                            }}
                        >
                            Core Types
                        </button>
                        <button
                            onClick={() => setActiveTab("industry")}
                            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === "industry" ? "shadow-md scale-105" : "hover:bg-[var(--hover-bg)]"
                                }`}
                            style={{
                                background: activeTab === "industry" ? "var(--brand-blue-btn)" : "transparent",
                                color: activeTab === "industry" ? "white" : "var(--secondary-text)"
                            }}
                        >
                            Industry Solutions
                        </button>
                        <button
                            onClick={() => setActiveTab("tech")}
                            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === "tech" ? "shadow-md scale-105" : "hover:bg-[var(--hover-bg)]"
                                }`}
                            style={{
                                background: activeTab === "tech" ? "var(--brand-blue-btn)" : "transparent",
                                color: activeTab === "tech" ? "white" : "var(--secondary-text)"
                            }}
                        >
                            Tech Stack
                        </button>
                    </div>
                </div>

                {/* Dynamic Content Grid */}
                <div key={activeTab}>
                    {activeTab === "core" && renderGrid(coreTypes)}
                    {activeTab === "industry" && renderGrid(industryTypes)}
                    {activeTab === "tech" && renderGrid(techTypes)}
                </div>

                {/* Info Box */}
                <div
                    className="mt-16 rounded-2xl p-8 md:p-12 border"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                        Not Sure Which Type You Need?
                    </h3>

                    <p className="mb-6" style={{ color: "var(--secondary-text)", lineHeight: "1.8" }}>
                        Our team of experts can help you determine the best solution for your specific business needs. Whether you need a simple landing page, a complex web application, or an e-commerce platform, we have the expertise to deliver.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Schedule a Consultation
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
