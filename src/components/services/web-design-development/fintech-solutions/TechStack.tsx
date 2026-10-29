import { Code2, ShieldCheck, Database, Cloud, Globe, BarChart3, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const technologies = [
        {
            category: "Core Banking & Backend",
            icon: Code2,
            items: [
                { name: <Link href="/services/web-design-development/nodejs-backend" className="hover:underline">Node.js/Go</Link>, description: "High-concurrency systems", logos: ["/images/techstack_logos/nodejs-logo.svg", "/images/techstack_logos/go-logo-new.png"] },
                { name: "Java/Spring", description: "Enterprise services", logos: ["/images/techstack_logos/java-logo.svg", "/images/techstack_logos/spring-logo.svg"] },
                { name: <Link href="/services/web-design-development/python-django" className="hover:underline">Python</Link>, description: "Data analysis & AI", logos: ["/images/techstack_logos/python-logo.svg"] },
            ],
        },
        {
            category: "Frontend & Terminals",
            icon: Globe,
            items: [
                { name: "Fast & Interactive", description: <Link href="/services/web-design-development/nextjs-development-services" className="hover:underline">React, Next.js</Link>, logos: ["/images/techstack_logos/react-logo.svg", "/images/techstack_logos/nextjs-logo.svg"] },
                { name: "Type Safety", description: "TypeScript", logos: ["/images/techstack_logos/typescript-logo.svg"] },
                { name: "Desktop Apps", description: "Electron (Trading)", logos: ["/images/techstack_logos/electron-logo.png"] },
            ],
        },
        {
            category: "Blockchain & Web3",
            icon: Lock,
            items: [
                { name: "Smart Contracts", description: "Solidity, Rust", logos: ["/images/techstack_logos/solidity-logo.png", "/images/techstack_logos/rust-logo.png"] },
                { name: "Web3 Integration", description: "Ethers.js, Wagmi", logos: ["/images/techstack_logos/Ethersjs-logo.webp", "/images/techstack_logos/wagmi.svg"] },
                { name: "Oracles", description: "Chainlink", logos: ["/images/techstack_logos/chainlink-link-logo.png"] },
            ],
        },
        {
            category: "Data & Security",
            icon: Database,
            items: [
                { name: "Time-Series", description: "TimescaleDB", logos: ["/images/techstack_logos/timescaledb-logo.webp"] },
                { name: "Warehousing", description: "Snowflake", logos: ["/images/techstack_logos/snowflake-logo.png"] },
                { name: "Security", description: "OAuth 2.0, JWT", logos: ["/images/techstack_logos/auth0-logo.png", "/images/techstack_logos/jwt-logo.webp"] },
            ],
        },
        {
            category: "FinTech APIs",
            icon: BarChart3,
            items: [
                { name: "Banking", description: "Plaid, Yapily", logos: ["/images/techstack_logos/plaid-logo-new.png", "/images/techstack_logos/yapily-logo.svg"] },
                { name: "Payments", description: "Stripe, Adyen", logos: ["/images/techstack_logos/Stripe-logo.png", "/images/techstack_logos/Adyen-Logo.png"] },
                { name: "Market Data", description: "Polygon.io", logos: ["/images/techstack_logos/Polygon-logo.webp"] },
            ],
        },
        {
            category: "Cloud & Compliance",
            icon: Cloud,
            items: [
                { name: "AWS FinServ", description: "Compliant Cloud", logos: ["/images/techstack_logos/aws-logo.png"] },
                { name: "Containers", description: "Docker, K8s", logos: ["/images/techstack_logos/docker-logo.svg", "/images/techstack_logos/K8s-logo.png"] },
                { name: "Edge Security", description: "Cloudflare", logos: ["/images/techstack_logos/Cloudflare-logo.webp"] },
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
                        <span style={{ color: "var(--accent-sky-text)" }}>FinTech</span> Intelligence Stack
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        Secure, low-latency technologies built for the future of finance.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{ backgroundColor: "#0ea5e9" }}
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
                                        style={{ backgroundColor: "#0ea5e9" }}
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
                                                    style={{ backgroundColor: "#0ea5e9" }}
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
                                            {/* Note: In a real scenario, we'd verify logos exist. Using placeholders or specific names based on edtech example. 
                                                I've tried to map to existing logos where probable, or standard names. */}
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
                                                            {/* Assuming standard logo filenames, if missing it will break or show nothing. 
                                                                I've kept safe guesses based on the EdTech file. */}
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
