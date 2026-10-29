import { Code2, Globe, Database, Cloud, CreditCard, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const technologies = [
        {
            category: "Backend & Cloud",
            icon: Code2,
            items: [
                { name: <Link href="/services/web-design-development/nodejs-backend" className="hover:underline">Node.js / NestJS</Link>, description: "Scalable booking microservices", logos: ["/images/techstack_logos/nodejs-logo.svg"] },
                { name: <Link href="/services/web-design-development/python-django" className="hover:underline">Python / Django</Link>, description: "AI/ML & complex processing", logos: ["/images/techstack_logos/python-logo.svg", "/images/techstack_logos/django-logo.svg"] },
                { name: "AWS / Google Cloud", description: "99.99% uptime infrastructure", logos: ["/images/techstack_logos/aws-logo.png", "/images/techstack_logos/googlecloud-logo.svg"] },
            ],
        },
        {
            category: "Frontend & Mobile",
            icon: Globe,
            items: [
                { name: <Link href="/services/web-design-development/nextjs-development-services" className="hover:underline">React / Next.js</Link>, description: "SEO-optimized interfaces", logos: ["/images/techstack_logos/react-logo.svg", "/images/techstack_logos/nextjs-logo.svg"] },
                { name: "React Native / Flutter", description: "Cross-platform mobile apps", logos: ["/images/techstack_logos/react-logo.svg"] },
                { name: "TypeScript", description: "Type-safe development", logos: ["/images/techstack_logos/typescript-logo.svg"] },
            ],
        },
        {
            category: "Database & Storage",
            icon: Database,
            items: [
                { name: "PostgreSQL", description: "Transactional integrity", logos: ["/images/techstack_logos/postgresql-logo.svg"] },
                { name: "MongoDB", description: "Flexible content storage", logos: ["/images/techstack_logos/mongodb-logo.svg"] },
                { name: "Redis", description: "Real-time cache checks", logos: ["/images/techstack_logos/redis-logo.svg"] },
            ],
        },
        {
            category: "APIs & Integrations",
            icon: Code2,
            items: [
                { name: "Stripe / PayPal", description: "Secure global payments", logos: ["/images/techstack_logos/Stripe-logo.png", "/images/techstack_logos/paypal-logo.png"] },
                { name: "Google Maps Platform", description: "Immersive location services", logos: ["/images/techstack_logos/googlecloud-logo.svg"] },
            ],
        },
        {
            category: "CMS & Content",
            icon: Cloud,
            items: [
                { name: <Link href="/services/web-design-development/wordpress-development-services" className="hover:underline">WordPress (Headless)</Link>, description: "Flexible content management", logos: ["/images/techstack_logos/wordpress-logo.svg"] },
                { name: <span><Link href="/services/web-design-development/strapi-headless-cms" className="hover:underline">Sanity / Strapi</Link></span>, description: "Omnichannel delivery", logos: ["/images/techstack_logos/Sanity-square-logo.png", "/images/techstack_logos/Strapi-logo.png"] },
                { name: <Link href="/services/web-design-development/contentful-headless-cms" className="hover:underline">Contentful</Link>, description: "Enterprise infrastructure", logos: ["/images/techstack_logos/Contentful-logo.webp"] },
            ],
        },
        {
            category: "Analytics & Growth",
            icon: Database,
            items: [
                { name: "GA4 / Mixpanel", description: "Travel Data Analytics", logos: ["/images/organic_growth_and_seo/google-analytics-logo.webp", "/images/techstack_logos/mixpanel-logo.png"] },
                { name: "Segment / HubSpot", description: "Lead generation & BI", logos: ["/images/techstack_logos/Segment-logo.png", "/images/ai_automation_logos/hubspot-logo.png"] },
            ],
        },
    ];

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--accent-teal-text)" }}>Travel</span> Technology Stack
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        Modern, scalable technologies built for global hospitality demands.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, #0d9488, #f97316)" }}
                    />
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech, idx) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: "#0d9488" }}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                                        {tech.category}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {tech.items.map((item, iidx) => (
                                        <div key={iidx} className="flex items-center justify-between gap-4">
                                            <div className="flex items-start gap-3 flex-1 min-w-0">
                                                <div
                                                    className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                                                    style={{ backgroundColor: "#0d9488" }}
                                                />
                                                <div className="min-w-0">
                                                    <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                                                        {item.name}
                                                    </p>
                                                    <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                            {item.logos.length > 0 && (
                                                <div className="flex items-center gap-2 flex-shrink-0">
                                                    {item.logos.map((logo, lidx) => (
                                                        <div
                                                            key={lidx}
                                                            className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                                                            style={{
                                                                backgroundColor: "var(--background)",
                                                                border: "1px solid var(--border-color)",
                                                            }}
                                                        >
                                                            <Image
                                                                src={logo}
                                                                alt={`${item.name} logo`}
                                                                width={32}
                                                                height={32}
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
