import { Heart, Shield, Clock, Users, FileText, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const deliverables = [
        { icon: Heart, title: "Patient Portals", description: "Self-service portals for appointments, records, and billing" },
        { icon: Shield, title: "HIPAA Compliance", description: "End-to-end encryption and audit logging" },
        { icon: Clock, title: <Link href="/services/mobile-app-development" className="hover:underline">Telehealth Integration</Link>, description: "Secure video consultations and remote monitoring" },
        { icon: Users, title: "Provider Dashboards", description: "Clinical workflows and patient management" },
        { icon: FileText, title: <Link href="/services/web-design-development/saas-development-services" className="hover:underline">EHR/EMR Integration</Link>, description: "Seamless data exchange with existing systems" },
        { icon: Activity, title: "Analytics & Reporting", description: "Population health and outcome tracking" },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--foreground)" }}>
                            Healthcare Platforms That{" "}
                            <span style={{ color: "#3b82f6" }}>Transform Patient Care</span>
                        </h2>

                        <p className="text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            We build secure, scalable healthcare solutions that connect patients with providers,
                            streamline clinical workflows, and ensure regulatory compliance. Our platforms are
                            designed for the unique demands of healthcare organizations.
                        </p>

                        <p className="text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            From patient engagement portals to comprehensive practice management systems,
                            we deliver solutions that improve health outcomes while maintaining the highest
                            standards of data security and privacy.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                        >
                            Discuss Your Healthcare Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Right Content - Deliverables */}
                    <div>
                        <h3 className="text-xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            What We Deliver
                        </h3>

                        <div className="grid gap-4">
                            {deliverables.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                                        style={{
                                            backgroundColor: "var(--background)",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                                        >
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                                {item.title}
                                            </h4>
                                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
