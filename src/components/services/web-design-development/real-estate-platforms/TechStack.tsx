import { Code2, Map, Eye, Users, Database, Cloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const technologies = [
        {
            category: "Frontend Frameworks",
            icon: Code2,
            items: [
                { name: <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:underline">React/Next.js</Link>, description: "Fast, SEO-friendly apps", logos: ["/images/techstack_logos/react-logo.svg", "/images/techstack_logos/nextjs-logo.svg"] },
                { name: "Vue.js/Nuxt", description: "Progressive web apps", logos: ["/images/techstack_logos/vuejs-logo.svg", "/images/techstack_logos/nuxt-logo.png"] },
                { name: "TypeScript", description: "Type-safe development", logos: ["/images/techstack_logos/typescript-logo.svg"] },
            ],
        },
        {
            category: "Maps & Location",
            icon: Map,
            items: [
                { name: "Google Maps API", description: "Property mapping", logos: ["/images/techstack_logos/googlecloud-logo.svg"] },
                { name: "Mapbox", description: "Custom map styling", logos: ["/images/techstack_logos/mapbox-logo.webp"] },
                { name: "OpenStreetMap", description: "Open-source maps", logos: ["/images/techstack_logos/Openstreetmap-logo.png"] },
            ],
        },
        {
            category: "Virtual Tours",
            icon: Eye,
            items: [
                { name: "Matterport", description: "3D property scans", logos: ["/images/techstack_logos/Matterport-logo.png"] },
                { name: "3D Vista", description: "Virtual tour creation", logos: ["/images/techstack_logos/3D-Vista-logo.webp"] },
                { name: "Cloudpano", description: "360° experiences", logos: ["/images/techstack_logos/Cloudpano-logo.png"] },
            ],
        },
        {
            category: "CRM Integration",
            icon: Users,
            items: [
                { name: <Link href="/services/ai-workflows-automations-services" className="underline underline-offset-2 hover:underline">Salesforce</Link>, description: "Enterprise CRM", logos: ["/images/ai_automation_logos/salesforce-logo.png"] },
                { name: "HubSpot", description: "Marketing automation", logos: ["/images/ai_automation_logos/hubspot-logo.png"] },
                { name: "Follow Up Boss", description: "Real estate CRM", logos: ["/images/techstack_logos/Follow-Up-Boss-logo.png"] },
            ],
        },
        {
            category: "MLS & Data",
            icon: Database,
            items: [
                { name: "RETS/RESO", description: "MLS data standards", logos: ["/images/techstack_logos/RESO-logo.png"] },
                { name: "IDX Integration", description: "Listing syndication", logos: [] },
                { name: "Zillow API", description: "Property estimates", logos: ["/images/techstack_logos/Zillow-API-logo.png"] },
            ],
        },
        {
            category: "Cloud & Hosting",
            icon: Cloud,
            items: [
                { name: "AWS", description: "Scalable infrastructure", logos: ["/images/techstack_logos/aws-logo.png"] },
                { name: "Vercel", description: "Edge deployment", logos: ["/images/techstack_logos/vercel-logo.webp"] },
                { name: "Cloudflare", description: "Global CDN", logos: ["/images/techstack_logos/Cloudflare-logo.webp"] },
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
                        <span style={{ color: "#0d9488" }}>Real Estate</span> Tech Stack
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We leverage modern technologies to build powerful, scalable real estate platforms.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #0d9488, #2dd4bf)",
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
                                            background: "linear-gradient(135deg, #0d9488, #14b8a6)",
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
