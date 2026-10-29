

import { Sparkles, Home, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// Optimized for LCP: Removed client-side fade-in delay

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background (dark/light adaptive via CSS vars) */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-purple) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 py-12 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div
                        className="text-center lg:text-left"
                    >
                        {/* Breadcrumbs */}
                        <nav
                            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mb-6 justify-center lg:justify-start"
                            aria-label="Breadcrumb"
                        >
                            <Link
                                href="/"
                                className="flex items-center gap-1 hover:underline transition-colors p-2"
                                style={{ color: "var(--secondary-text)" }}
                            >
                                <Home className="w-4 h-4" />
                                Home
                            </Link>

                            <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                            <span
                                className="font-semibold p-2"
                                style={{ color: "var(--brand-blue-text)" }}
                            >
                                About Us
                            </span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border transition-colors"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, var(--brand-blue) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                                borderColor: "color-mix(in srgb, var(--brand-blue) 20%, transparent)",
                                color: "var(--brand-blue-text)",
                            }}
                        >
                            <Sparkles className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                            <span className="text-sm font-semibold">Digital Growth Agency</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background:
                                        "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan), var(--brand-teal))", WebkitBackgroundClip: "text", color: "transparent",
                                }}
                            >
                                Who We Are
                            </span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-32 h-1.5 mb-8 rounded-full lg:mx-0 mx-auto"
                            style={{
                                background:
                                    "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan), var(--brand-teal))",
                            }}
                        />

                        {/* Text Content */}
                        <div className="space-y-6 text-base md:text-xl leading-relaxed">
                            <p style={{ color: "var(--foreground)", fontWeight: 500 }}>
                                <span style={{ color: "var(--brand-blue-text)", fontWeight: 700 }}>
                                    Cinute InfoMedia (CIM)
                                </span>{" "}
                                is a digital growth agency that helps businesses build, market, and scale through{" "}
                                <span style={{ color: "var(--brand-purple-text)", fontWeight: 600 }}>
                                    creativity, data, and technology
                                </span>
                                .
                            </p>

                            <p style={{ color: "var(--secondary-text)" }}>
                                We don't just execute isolated campaigns or build standalone websites. We architect comprehensive{" "}
                                <span className="relative inline-block">
                                    <span
                                        className="relative z-10"
                                        style={{ fontWeight: 700, color: "var(--brand-blue-text)" }}
                                    >
                                        growth ecosystems
                                    </span>
                                    <span
                                        className="absolute bottom-0 left-0 w-full h-3 -z-0 rounded-md"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, var(--brand-cyan) 18%, transparent)",
                                        }}
                                    />
                                </span>{" "}
                                that seamlessly connect <Link href="/services/web-design-development" className="hover:text-[var(--brand-blue-text)] transition-colors">web development</Link>, <Link href="/services/brand-identity-design" className="hover:text-[var(--brand-purple-text)] transition-colors">brand identity</Link>, <Link href="/services/seo-services" className="hover:text-[var(--brand-blue-text)] transition-colors">SEO</Link>, <Link href="/services/performance-marketing" className="hover:text-[var(--accent-orange-text)] transition-colors">performance marketing</Link>, <Link href="/services/ai-workflows-automations-services" className="hover:text-[var(--accent-amber-text)] transition-colors">AI-powered automations</Link>, and <Link href="/services/ai-chatbots-services" className="hover:text-[var(--accent-teal-text)] transition-colors">intelligent chatbot systems</Link> into a unified revenue engine.
                            </p>

                            <p
                                style={{
                                    color: "var(--foreground)",
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                }}
                            >
                                Our mission is simple: create scalable, sustainable systems that help brands grow{" "}
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, var(--brand-purple), var(--brand-yellow))", WebkitBackgroundClip: "text", color: "transparent",
                                    }}
                                >
                                    faster, smarter, and more profitably
                                </span>{" "}
                                in an increasingly competitive digital landscape.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT LOGO SECTION */}
                    <div
                        className="relative flex items-center justify-center"
                    >
                        <div
                            className="absolute inset-0 rounded-3xl blur-2xl"
                            style={{
                                background:
                                    "linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 10%, transparent), color-mix(in srgb, var(--brand-purple) 10%, transparent), color-mix(in srgb, var(--brand-cyan) 10%, transparent))",
                            }}
                        />

                        {/* LOGO CARD */}
                        <div
                            className="relative rounded-3xl p-8 md:p-14 shadow-2xl border hover:scale-105 transition-transform duration-300"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                backdropFilter: "blur(6px)",
                            }}
                        >
                            {/* Glow inside */}
                            <div
                                className="absolute inset-0 rounded-3xl"
                                style={{
                                    opacity: 0.15,
                                    background:
                                        "linear-gradient(90deg, var(--brand-blue), var(--brand-purple), var(--brand-cyan))",
                                    filter: "blur(22px)",
                                }}
                            />

                            {/* LOGO */}
                            <div
                                style={{
                                    position: "relative",
                                    zIndex: 10,
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Image
                                    src="/images/CIM_Brand_Logo.png"
                                    alt="CIM logo"
                                    width={300}
                                    height={300}
                                    priority
                                />
                            </div>

                            {/* Company Name */}
                            <div className="mt-8 text-center" style={{ position: "relative", zIndex: 10 }}>
                                <h2 className="text-3xl md:text-5xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                    <span
                                        className="bg-clip-text text-transparent"
                                        style={{
                                            background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))",
                                            WebkitBackgroundClip: "text",
                                            color: "transparent",
                                        }}
                                    >
                                        Cinute
                                    </span>
                                </h2>

                                <p
                                    style={{
                                        color: "var(--secondary-text)",
                                        fontSize: "1.35rem",
                                        fontWeight: 600,
                                    }}
                                >
                                    InfoMedia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
