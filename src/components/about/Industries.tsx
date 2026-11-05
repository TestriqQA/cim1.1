

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Industries() {
    const industries = [
        { name: "IT, SaaS & Software Development", href: "/services/web-design-development/saas-development-services" },
        { name: "EdTech & E-Learning", href: "/services/web-design-development/edtech-lms" },
        { name: "HR & Recruitment", href: "/services/web-design-development/business-corporate" },
        { name: "Healthcare & Wellness", href: "/services/web-design-development/healthcare-portals" },
        { name: "Retail, Jewelry & E-Commerce", href: "/services/web-design-development/ecommerce-development-company" },
        { name: "Entertainment & Media", href: "/services/web-design-development/entertainment-media" },
        { name: "Finance & Banking", href: "/services/web-design-development/fintech-solutions" },
        { name: "Real Estate", href: "/services/web-design-development/real-estate-platforms" },
        { name: "Travel & Hospitality", href: "/services/web-design-development/travel-and-hospitality-services" },
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-[var(--background)] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[var(--foreground)]">
                        Industries We Serve
                    </h2>

                    {/* decorative underline uses brand gradient */}
                    <div
                        className="mx-auto mb-4 sm:mb-6 w-20 h-1 sm:w-28 sm:h-1.5 rounded-full"
                        style={{
                            background:
                                "linear-gradient(90deg,var(--brand-yellow),var(--brand-orange))",
                        }}
                    />

                    <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[var(--secondary-text)]">
                        CIM has experience across multiple sectors, delivering tailored
                        solutions for diverse business needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                    {industries.map((item, index) => (
                        <div
                            key={item.name}
                            // note: using arbitrary animate shorthand so each item delays slightly
                            className={`
                group relative rounded-2xl p-5 sm:p-6 transition-all duration-300
                bg-[var(--card-bg)] border-2 border-[var(--border-color)]
                shadow-md hover:shadow-xl flex items-center gap-4
                hover:scale-[1.02]
                animate-[fadeInUp_0.5s_ease_both] motion-reduce:animate-none
              `}
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            {/* Icon badge - gradient driven by CSS brand vars */}
                            <div
                                className={`
                  flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center
                  transition-all duration-300 shadow-lg
                  group-hover:scale-110 group-hover:rotate-6
                `}
                                style={{
                                    background:
                                        "linear-gradient(135deg, var(--brand-blue), var(--brand-teal))",
                                }}
                                aria-hidden
                            >
                                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>

                            <p className="text-base font-semibold transition-colors duration-300 text-[var(--foreground)] group-hover:text-[var(--brand-blue-text)]">
                                <Link
                                    href={item.href}
                                    className="hover:text-[var(--brand-blue-text)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] rounded"
                                >
                                    {item.name}
                                </Link>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
