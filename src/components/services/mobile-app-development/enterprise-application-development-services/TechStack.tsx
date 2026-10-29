"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("security");

    const categories = [
        { id: "security", label: "Security" },
        { id: "identity", label: "Identity & SSO" },
        { id: "cloud", label: "Cloud & MDM" },
        { id: "integration", label: "Integration" },
        { id: "backend", label: "Backend" },
    ];

    const technologies: Record<string, { name: string; description: React.ReactNode; logo: string }[]> = {
        security: [
            { name: "SSL/TLS", description: "Standard Encryption", logo: "" },
            { name: "AES-256", description: "Advanced Data Encryption", logo: "" },
            { name: "OWASP Top 10", description: "Security Standards", logo: "" },
            { name: "SOC 2 Type II", description: "Compliance Standard", logo: "" },
            { name: "HIPAA", description: "Healthcare Compliance", logo: "" },
            { name: "ISO 27001", description: "Information Security", logo: "" },
        ],
        identity: [
            { name: "Azure AD", description: "Microsoft Identity", logo: "/images/techstack_logos/azure-logo.svg" },
            { name: "Okta", description: "Identity Platform", logo: "/images/techstack_logos/okta-logo.svg" },
            { name: "Auth0", description: "Authentication", logo: "/images/techstack_logos/auth0-logo.png" },
            { name: "SAML", description: "SSO Protocol", logo: "/images/techstack_logos/saml-logo.svg" },
            { name: "OAuth 2.0", description: "Authorization", logo: "/images/techstack_logos/OAuth2-logo.jpg" },
            { name: "LDAP", description: "Directory Service", logo: "" },
        ],
        cloud: [
            { name: "AWS", description: "Cloud Platform", logo: "/images/techstack_logos/aws-logo.png" },
            { name: "Azure", description: "Microsoft Cloud", logo: "/images/techstack_logos/azure-logo.svg" },
            { name: "Google Cloud", description: "GCP", logo: "/images/techstack_logos/googlecloud-logo.svg" },
            { name: "VMware", description: "Enterprise MDM", logo: "/images/techstack_logos/VMware-logo.svg" },
            { name: "MobileIron", description: "MDM Platform", logo: "/images/techstack_logos/MobileIron-logo.png" },
            { name: "Intune", description: "Microsoft MDM", logo: "/images/techstack_logos/azure-logo.svg" },
        ],
        integration: [
            { name: "SAP", description: "ERP Integration", logo: "/images/ai_automation_logos/sap-logo.webp" },
            { name: "Salesforce", description: "CRM Integration", logo: "/images/techstack_logos/Salesforce-logo.png" },
            { name: "ServiceNow", description: "ITSM Integration", logo: "/images/techstack_logos/ServiceNow-logo.webp" },
            { name: "Workday", description: "HR Integration", logo: "/images/techstack_logos/Workday-logo.png" },
            { name: "Oracle", description: "Enterprise Suite", logo: "/images/techstack_logos/Oracle-logo.svg" },
            { name: "Microsoft 365", description: "Office Suite", logo: "/images/techstack_logos/Microsoft-365-logo.webp" },
        ],
        backend: [
            { name: "Node.js", description: <Link href="/services/web-design-development/nodejs-backend" className="hover:text-[var(--brand-blue-text)] transition-colors">API Backend</Link>, logo: "/images/techstack_logos/nodejs-logo.svg" },
            { name: ".NET", description: "Microsoft Stack", logo: "/images/techstack_logos/dotnet-logo.png" },
            { name: "Java Spring", description: <Link href="/services/web-design-development/java-spring-boot" className="hover:text-[var(--brand-blue-text)] transition-colors">Enterprise Java</Link>, logo: "/images/techstack_logos/spring-logo.svg" },
            { name: "PostgreSQL", description: "Database", logo: "/images/techstack_logos/postgresql-logo.svg" },
            { name: "MongoDB", description: "NoSQL Database", logo: "/images/techstack_logos/mongodb-logo.svg" },
            { name: "Redis", description: "Caching", logo: "/images/techstack_logos/redis-logo.svg" },
        ],
    };

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Cloud-Native Infrastructure &</span>{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Security Excellence
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Our technical architecture is built for Interoperability and Scalability. We utilize a Microservices and Containers approach to ensure your application can grow without performance degradation.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`
                                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                                ${activeTab === cat.id
                                    ? "text-white shadow-lg transform scale-105"
                                    : "hover:bg-accent"
                                }
                            `}
                            style={{
                                backgroundColor: activeTab === cat.id ? "#2563eb" : "var(--background)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                border: activeTab === cat.id ? "none" : "1px solid var(--border-color)",
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Technology Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies[activeTab].map((tech, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Logo */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: tech.logo ? "var(--card-bg)" : "#2563eb",
                                        border: tech.logo ? "1px solid var(--border-color)" : "none",
                                    }}
                                >
                                    {tech.logo ? (
                                        <Image
                                            src={tech.logo}
                                            alt={tech.name}
                                            width={32}
                                            height={32}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <span className="text-white font-bold text-lg">
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="font-semibold" style={{ color: "var(--foreground)" }}>
                                        {tech.name}
                                    </h3>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {tech.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
