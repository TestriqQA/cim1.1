import { Sparkles, ArrowRight, Home, ChevronRight, Building2, Shield, Award, Users, Globe, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, #f97316 12%, transparent)", // Orange-500
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, #ea580c 12%, transparent)", // Orange-600
                        animationDelay: "1s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 py-12 relative">
                {/* Breadcrumbs */}
                <nav
                    className="flex items-center gap-1 text-sm mb-5 justify-center lg:justify-start flex-wrap"
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
                    <Link
                        href="/services"
                        className="hover:underline transition-colors p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Services
                    </Link>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                    <Link
                        href="/services/web-design-development"
                        className="hover:underline transition-colors p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Web Design
                    </Link>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                    <span
                        className="font-semibold p-2"
                        style={{ color: "var(--accent-orange-text)" }}
                    >
                        Business & Corporate
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, #f97316 8%, transparent), color-mix(in srgb, #ea580c 8%, transparent))",
                                borderColor: "color-mix(in srgb, #f97316 20%, transparent)",
                                color: "var(--accent-orange-text)",
                            }}
                        >
                            <Building2 className="w-4 h-4" style={{ color: "var(--accent-orange-text)" }} />
                            <span className="text-sm font-semibold">Business & Corporate Websites</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Establish Digital Authority
                            </span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-32 h-1.5 mb-8 rounded-full lg:mx-0 mx-auto"
                            style={{
                                background: "linear-gradient(90deg, #f97316, #ea580c)",
                            }}
                        />

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl mb-8" style={{ color: "var(--secondary-text)" }}>
                            Build a <span style={{ color: "var(--accent-orange-text)", fontWeight: 700 }}>professional corporate website</span> that communicates trust, credibility, and brand excellence to stakeholders, investors, and clients.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #f97316 8%, transparent)",
                                }}
                            >
                                <Shield className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-orange-text)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Trust Building
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #f97316 8%, transparent)",
                                }}
                            >
                                <Award className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-orange-text)" }} />
                                <Link href="/services/web-design-development/branding-services" className="text-sm font-semibold hover:underline" style={{ color: "var(--foreground)" }}>
                                    Brand Authority
                                </Link>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #f97316 8%, transparent)",
                                }}
                            >
                                <Users className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-orange-text)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Stakeholder Focus
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #f97316 8%, transparent)",
                                }}
                            >
                                <Globe className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-orange-text)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Global Reach
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #f97316 8%, transparent)",
                                }}
                            >
                                <Briefcase className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-orange-text)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Enterprise Ready
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #f97316 8%, transparent)",
                                }}
                            >
                                <Sparkles className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-orange-text)" }} />
                                <Link href="/services/web-design-development" className="text-sm font-semibold hover:underline" style={{ color: "var(--foreground)" }}>
                                    Premium Design
                                </Link>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-4 mb-8 p-6 rounded-2xl"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #f97316, #ea580c)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    200+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Corporate Sites Built
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #f97316, #ea580c)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    Fortune
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    500 Clients Served
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #f97316, #ea580c)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    99%
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    High Availability
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                                }}
                            >
                                Build Your Corporate Website
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold border transition-all duration-300"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                }}
                            >
                                Schedule Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL ELEMENT */}
                    <div className="relative hidden lg:flex flex-col items-center justify-center">
                        <div
                            className="absolute inset-0 rounded-3xl blur-2xl"
                            style={{
                                background:
                                    "linear-gradient(135deg, color-mix(in srgb, #f97316 15%, transparent), color-mix(in srgb, #ea580c 15%, transparent))",
                            }}
                        />
                        <Image
                            src="/images/services-images/web-design-development/business-corporate.svg"
                            alt="Business and Corporate Website Development"
                            width={500}
                            height={400}
                            className="relative z-10 rounded-2xl"
                            priority
                        />

                        {/* Info Section Below Image */}
                        <div className="mt-12 flex gap-4 justify-center w-full z-10 relative">
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(249, 115, 22, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Shield className="w-4 h-4" style={{ color: "var(--accent-orange-text)" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>ISO 27001</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(249, 115, 22, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Award className="w-4 h-4" style={{ color: "var(--accent-orange-text)" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>Award Winner</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(249, 115, 22, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Briefcase className="w-4 h-4" style={{ color: "var(--accent-orange-text)" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>Enterprise</span>
                            </div>
                        </div>

                        {/* Trusted By Section */}
                        <div className="mt-8 text-center w-full z-10 relative">
                            <p className="text-xs font-bold uppercase tracking-wider mb-4 opacity-70" style={{ color: "var(--foreground)" }}>Trusted by Industry Leaders</p>
                            <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Simple Text Logos for Demo */}
                                <span className="text-lg font-black" style={{ color: "var(--secondary-text)" }}>ACME<span style={{ color: "var(--accent-orange-text)" }}>CORP</span></span>
                                <span className="text-lg font-bold tracking-tight" style={{ color: "var(--secondary-text)" }}>Global<span className="font-light">Tech</span></span>
                                <span className="text-lg font-serif italic font-bold" style={{ color: "var(--secondary-text)" }}>Nexus</span>
                                <span className="text-lg font-bold" style={{ color: "var(--secondary-text)" }}>STAR<span style={{ color: "var(--accent-orange-text)" }}>LIGHT</span></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
