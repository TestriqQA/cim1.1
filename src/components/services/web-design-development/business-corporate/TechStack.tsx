import { Database, Globe, Search, Shield, Settings, Zap } from "lucide-react";
import Link from "next/link";

export default function TechStack() {
    const technologies = [
        {
            category: "Content Management",
            icon: Settings,
            items: [
                { name: "WordPress Enterprise", description: "Scalable CMS for marketing teams" },
                { name: "Contentful", description: "Headless CMS for flexibility" },
                { name: "Strapi", description: "Open-source enterprise CMS" },
            ],
        },
        {
            category: "Performance",
            icon: Zap,
            items: [
                { name: "Next.js", description: "Server-side rendering for speed" },
                { name: "CDN Integration", description: "Global content delivery" },
                { name: "Image Optimization", description: "Automatic format selection" },
            ],
        },
        {
            category: "SEO & Analytics",
            icon: Search,
            items: [
                { name: "Schema Markup", description: "Rich search results" },
                { name: "Core Web Vitals", description: "Google ranking factors" },
                { name: "Google Analytics 4", description: "Enterprise analytics" },
            ],
        },
        {
            category: "Security & Compliance",
            icon: Shield,
            items: [
                { name: "SSL/TLS", description: "Encrypted connections" },
                { name: "WAF Protection", description: "Web application firewall" },
                { name: "GDPR Tools", description: "Privacy compliance" },
            ],
        },
        {
            category: "Infrastructure",
            icon: Database,
            items: [
                { name: "AWS/Azure", description: "Enterprise cloud hosting" },
                { name: "Load Balancing", description: "High availability" },
                { name: "Backup Systems", description: "Disaster recovery" },
            ],
        },
        {
            category: "Integrations",
            icon: Globe,
            items: [
                { name: "CRM Systems", description: "Salesforce, HubSpot" },
                { name: "ERP Connections", description: "SAP, Oracle integration" },
                { name: "SSO/LDAP", description: "Enterprise authentication" },
            ],
        },
    ];

    const getLink = (name: string) => {
        switch (name) {
            case "WordPress Enterprise": return "/services/web-design-development/wordpress-development-services";
            case "Contentful": return "/services/web-design-development/contentful-headless-cms";
            case "Strapi": return "/services/web-design-development/strapi-headless-cms";
            case "Next.js": return "/services/web-design-development/nextjs-development-services";
            case "Schema Markup": return "/services/seo-services/technical-seo-services";
            case "Google Analytics 4": return "/services/seo-services";
            default: return null;
        }
    };

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--accent-orange-text)" }}>Enterprise-Grade</span> Technology Stack
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We leverage proven enterprise technologies that scale with your organization while maintaining the security and compliance standards you require.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #f97316, #ea580c)",
                        }}
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
                                        style={{
                                            background: "linear-gradient(135deg, #f97316, #ea580c)",
                                        }}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                                        {tech.category}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {tech.items.map((item, iidx) => (
                                        <div key={iidx} className="flex items-start gap-3">
                                            <div
                                                className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                                                style={{ backgroundColor: "#f97316" }}
                                            />
                                            <div>
                                                <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                                                    {getLink(item.name) ? (
                                                        <Link href={getLink(item.name)!} className="hover:underline">
                                                            {item.name}
                                                        </Link>
                                                    ) : (
                                                        item.name
                                                    )}
                                                </p>
                                                <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                                    {item.description}
                                                </p>
                                            </div>
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
