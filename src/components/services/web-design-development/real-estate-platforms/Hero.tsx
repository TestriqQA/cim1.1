import { Sparkles, ArrowRight, Home, ChevronRight, Building, MapPin, Search, Users, Shield, BarChart3 } from "lucide-react";
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
                        backgroundColor: "color-mix(in srgb, #0d9488 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, #14b8a6 12%, transparent)",
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
                        style={{ color: "var(--accent-teal-text)" }}
                    >
                        Real Estate Platforms
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
                                    "linear-gradient(90deg, color-mix(in srgb, #0d9488 8%, transparent), color-mix(in srgb, #14b8a6 8%, transparent))",
                                borderColor: "color-mix(in srgb, #0d9488 20%, transparent)",
                                color: "var(--accent-teal-text)",
                            }}
                        >
                            <Building className="w-4 h-4" style={{ color: "#0d9488" }} />
                            <span className="text-sm font-semibold">Real Estate Platform Development</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(135deg, #0d9488, #14b8a6)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Transform Your Real Estate Business
                            </span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-32 h-1.5 mb-8 rounded-full lg:mx-0 mx-auto"
                            style={{
                                background: "linear-gradient(90deg, #0d9488, #2dd4bf)",
                            }}
                        />

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl mb-8" style={{ color: "var(--secondary-text)" }}>
                            Build a <span style={{ color: "#0d9488", fontWeight: 700 }}>powerful property platform</span> that captures leads, showcases listings beautifully, and streamlines your real estate operations.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #0d9488 8%, transparent)",
                                }}
                            >
                                <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: "#0d9488" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Property Listings
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #0d9488 8%, transparent)",
                                }}
                            >
                                <Search className="w-5 h-5 flex-shrink-0" style={{ color: "#0d9488" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Advanced Search
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #0d9488 8%, transparent)",
                                }}
                            >
                                <Users className="w-5 h-5 flex-shrink-0" style={{ color: "#0d9488" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Lead Management
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #0d9488 8%, transparent)",
                                }}
                            >
                                <Shield className="w-5 h-5 flex-shrink-0" style={{ color: "#0d9488" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    MLS Integration
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #0d9488 8%, transparent)",
                                }}
                            >
                                <BarChart3 className="w-5 h-5 flex-shrink-0" style={{ color: "#0d9488" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Agent Portals
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #0d9488 8%, transparent)",
                                }}
                            >
                                <Sparkles className="w-5 h-5 flex-shrink-0" style={{ color: "#0d9488" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Virtual Tours
                                </span>
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
                                <div className="text-xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #2dd4bf, #0d9488)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    500K+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Properties Listed
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #2dd4bf, #0d9488)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    Growing
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Agents Served
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #2dd4bf, #0d9488)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    10M+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Leads Generated
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #0d9488, #14b8a6)",
                                }}
                            >
                                Launch Your Real Estate Platform
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
                                Get a Free Consultation
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
                                    "linear-gradient(135deg, color-mix(in srgb, #0d9488 15%, transparent), color-mix(in srgb, #14b8a6 15%, transparent))",
                            }}
                        />
                        <Image
                            src="/images/services-images/web-design-development/real-estate-platforms.svg"
                            alt="Real Estate Platform Development"
                            width={500}
                            height={400}
                            className="relative w-[90%] h-[90%] z-10 rounded-2xl"
                            priority
                        />

                        {/* Info Section Below Image */}
                        <div className="flex gap-4 justify-center w-full z-10 relative">
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(13, 148, 136, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <MapPin className="w-4 h-4" style={{ color: "#0d9488" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>MLS Ready</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(13, 148, 136, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Building className="w-4 h-4" style={{ color: "#0d9488" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>IDX Certified</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm" style={{ borderColor: "rgba(13, 148, 136, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Shield className="w-4 h-4" style={{ color: "#0d9488" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>RESO Compliant</span>
                            </div>
                        </div>

                        {/* Performance Metrics Section */}
                        <div className="mt-8 text-center w-full z-10 relative">
                            <p className="text-xs font-bold uppercase tracking-wider mb-4 opacity-70" style={{ color: "var(--foreground)" }}>Platform Performance</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <div className="flex flex-col items-center px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(13, 148, 136, 0.1)" }}>
                                    <span className="text-xl font-bold" style={{ color: "#0d9488" }}>Strong</span>
                                    <span className="text-xs" style={{ color: "var(--secondary-text)" }}>Lead Capture</span>
                                </div>
                                <div className="flex flex-col items-center px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(13, 148, 136, 0.1)" }}>
                                    <span className="text-xl font-bold" style={{ color: "#0d9488" }}>&lt;1s</span>
                                    <span className="text-xs" style={{ color: "var(--secondary-text)" }}>Search Speed</span>
                                </div>
                                <div className="flex flex-col items-center px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(13, 148, 136, 0.1)" }}>
                                    <span className="text-xl font-bold" style={{ color: "#0d9488" }}>Strong</span>
                                    <span className="text-xs" style={{ color: "var(--secondary-text)" }}>User Engagement</span>
                                </div>
                                <div className="flex flex-col items-center px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(13, 148, 136, 0.1)" }}>
                                    <span className="text-xl font-bold" style={{ color: "#0d9488" }}>High</span>
                                    <span className="text-xs" style={{ color: "var(--secondary-text)" }}>Uptime</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
