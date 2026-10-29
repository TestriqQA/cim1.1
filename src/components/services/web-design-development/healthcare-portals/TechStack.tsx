import { Code2, Shield, Database, Cloud, Video, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const technologies = [
        {
            category: "Frontend Frameworks",
            icon: Code2,
            items: [
                { name: <Link href="/services/web-design-development/nextjs-development-services" className="hover:underline">React/Next.js</Link>, description: "Fast, accessible apps", logos: ["/images/techstack_logos/react-logo.svg", "/images/techstack_logos/nextjs-logo.svg"] },
                { name: "TypeScript", description: "Type-safe development", logos: ["/images/techstack_logos/typescript-logo.svg"] },
                { name: <Link href="/services/mobile-app-development" className="hover:underline">React Native</Link>, description: "Mobile applications", logos: ["/images/techstack_logos/react-logo.svg"] },
            ],
        },
        {
            category: "Security & Compliance",
            icon: Shield,
            items: [
                { name: "Auth0", description: "Identity management", logos: ["/images/techstack_logos/auth0-logo.png"] },
                { name: "AWS KMS", description: "Key management", logos: ["/images/techstack_logos/aws-logo.png"] },
                { name: "Clerk", description: "User authentication", logos: ["/images/techstack_logos/clerk-logo.png"] },
            ],
        },
        {
            category: "Telehealth",
            icon: Video,
            items: [
                { name: "Twilio", description: "Video & messaging", logos: ["/images/techstack_logos/twilio-icon.webp"] },
                { name: "Daily.co", description: "Video conferencing", logos: ["/images/techstack_logos/dailyco-logo.png"] },
                { name: "Vonage", description: "Communications API", logos: ["/images/techstack_logos/Vonage-Logo.webp"] },
            ],
        },
        {
            category: "Data & Integration",
            icon: Database,
            items: [
                { name: "HL7 FHIR", description: "Healthcare standards", logos: [] },
                { name: <Link href="/services/web-design-development/nodejs-backend" className="hover:underline">PostgreSQL</Link>, description: "Secure database", logos: ["/images/techstack_logos/postgresql-logo.svg"] },
                { name: "Redis", description: "Caching layer", logos: ["/images/techstack_logos/redis-logo.svg"] },
            ],
        },
        {
            category: "Analytics",
            icon: Activity,
            items: [
                { name: "Mixpanel", description: "Product analytics", logos: ["/images/techstack_logos/mixpanel-logo.png"] },
                { name: "Segment", description: "Data pipeline", logos: ["/images/techstack_logos/Segment-logo.png"] },
                { name: "Datadog", description: "Monitoring", logos: ["/images/techstack_logos/datadog-logo.webp"] },
            ],
        },
        {
            category: "Cloud Infrastructure",
            icon: Cloud,
            items: [
                { name: "AWS", description: "HIPAA-eligible cloud", logos: ["/images/techstack_logos/aws-logo.png"] },
                { name: "Azure", description: "Healthcare cloud", logos: ["/images/techstack_logos/azure-logo.svg"] },
                { name: "Google Cloud", description: "Healthcare API", logos: ["/images/techstack_logos/googlecloud-logo.svg"] },
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
                        <span style={{ color: "#3b82f6" }}>Healthcare</span> Tech Stack
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        HIPAA-compliant technologies for secure, scalable healthcare solutions.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, #3b82f6, #6366f1)" }}
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
                                        style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
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
                                                    style={{ backgroundColor: "#3b82f6" }}
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
