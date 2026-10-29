"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { TwitterX } from "./Icons";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ChevronDown, ArrowRight } from "lucide-react";

export default function Footer() {
    // Main service list (matching reference image column 1)
    const ourServices = [
        { name: "Web Design & Development", href: "/services/web-design-development" },
        { name: "Mobile App Development", href: "/services/mobile-app-development" },
        { name: "Social Media Marketing", href: "/services/social-media-marketing-services" },
        { name: "AI Workflows & Automations", href: "/services/ai-workflows-automations-services" },
        { name: "AI-Powered Chatbots", href: "/services/ai-chatbots-services" },
        { name: "Organic Growth & SEO", href: "/services/seo-services" },
        { name: "Performance Marketing", href: "/services/performance-marketing" },
        { name: "Brand Identity & Design", href: "/services/brand-identity-design" },
        { name: "Additional Support Services", href: "/services/additional-support-services" },
    ];

    // Quick Links (matching reference image)
    const quickLinks = [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/our-team" },
        { name: "Careers", href: "/careers" },
        { name: "Our Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Products", href: "/products/chimegenius-ai-pro" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "CMS Login", href: "/cms" },
    ];

    // Service sub-categories for expanded grid
    const serviceCategories = [
        {
            title: "Web Technologies",
            href: "/services/web-design-development",
            items: [
                { name: "WordPress", href: "/services/web-design-development/wordpress-development-services" },
                { name: "Shopify", href: "/services/web-design-development/shopify-development-services" },
                { name: "Next.js & React", href: "/services/web-design-development/nextjs-development-services" },
                { name: "Laravel & PHP", href: "/services/web-design-development/laravel-php" },
                { name: "Node.js", href: "/services/web-design-development/nodejs-backend" },
                { name: "Python & Django", href: "/services/web-design-development/python-django" },
                { name: "Java Spring", href: "/services/web-design-development/java-spring-boot" },
                { name: "Astro Framework", href: "/services/web-design-development/astro-framework-services" },
                { name: "Headless CMS", href: "/services/web-design-development/headless-traditional-cms" },
                { name: "Strapi CMS", href: "/services/web-design-development/strapi-headless-cms" },
                { name: "Contentful", href: "/services/web-design-development/contentful-headless-cms" },
                { name: "Drupal CMS", href: "/services/web-design-development/drupal-cms" },
            ],
        },
        {
            title: "Website Types",
            href: "/services/web-design-development",
            items: [
                { name: "E-commerce Stores", href: "/services/web-design-development/ecommerce-development-company" },
                { name: "Business & Corporate", href: "/services/web-design-development/business-corporate" },
                { name: "Landing Pages", href: "/services/web-design-development/landing-pages" },
                { name: "Web Apps & SaaS", href: "/services/web-design-development/saas-development-services" },
                { name: "Blogs & Portals", href: "/services/web-design-development/blog-design-services" },
                { name: "Healthcare", href: "/services/web-design-development/healthcare-portals" },
                { name: "EdTech & LMS", href: "/services/web-design-development/edtech-lms" },
                { name: "FinTech", href: "/services/web-design-development/fintech-solutions" },
                { name: "Real Estate", href: "/services/web-design-development/real-estate-platforms" },
                { name: "Travel & Hospitality", href: "/services/web-design-development/travel-and-hospitality-services" },
                { name: "Entertainment", href: "/services/web-design-development/entertainment-media" },
                { name: "Portfolio Sites", href: "/services/web-design-development/branding-services" },
            ],
        },
        {
            title: "App Development",
            href: "/services/mobile-app-development",
            items: [
                { name: "iOS Apps", href: "/services/mobile-app-development/ios-app-development-company" },
                { name: "Android Apps", href: "/services/mobile-app-development/android-app-development-company" },
                { name: "Cross-Platform", href: "/services/mobile-app-development/cross-platform-app-development-company" },
                { name: "Enterprise", href: "/services/mobile-app-development/enterprise-application-development-services" },
                { name: "Hybrid Apps", href: "/services/mobile-app-development/hybrid-app-development-services" },
                { name: "HarmonyOS", href: "/services/mobile-app-development/harmony-OS-app-development-services" },
            ],
        },
        {
            title: "SEO & Growth",
            href: "/services/seo-services",
            items: [
                { name: "Technical SEO", href: "/services/seo-services/technical-seo-services" },
                { name: "On-Page SEO", href: "/services/seo-services/on-page-seo-services" },
                { name: "Local SEO", href: "/services/seo-services/local-seo-services" },
                { name: "Content SEO", href: "/services/seo-services/seo-content-writing-services" },
                { name: "eCommerce SEO", href: "/services/seo-services/ecommerce-seo-services" },
                { name: "Link Building", href: "/services/seo-services/link-building" },
            ],
        },
        {
            title: "Paid Advertising",
            href: "/services/performance-marketing",
            items: [
                { name: "Google Ads", href: "/services/performance-marketing/google-ads" },
                { name: "Meta Ads", href: "/services/performance-marketing/meta-ads" },
                { name: "LinkedIn Ads", href: "/services/performance-marketing/linkedin-ads" },
                { name: "Amazon Ads", href: "/services/performance-marketing/amazon-ads" },
                { name: "TikTok Ads", href: "/services/performance-marketing/tiktok-ads" },
                { name: "Microsoft Ads", href: "/services/performance-marketing/microsoft-ads" },
                { name: "X Ads", href: "/services/performance-marketing/x-ads" },
                { name: "YouTube Ads", href: "/services/performance-marketing/youtube-ads" },
            ],
        },
        {
            title: "Social Media",
            href: "/services/social-media-marketing-services",
            items: [
                { name: "Facebook Marketing", href: "/services/social-media-marketing-services/facebook-marketing-services" },
                { name: "Instagram Marketing", href: "/services/social-media-marketing-services/instagram-marketing-services" },
                { name: "LinkedIn Marketing", href: "/services/social-media-marketing-services/linkedin-marketing-services" },
                { name: "Pinterest Marketing", href: "/services/social-media-marketing-services/pinterest-marketing" },
                { name: "Twitter Ads Management", href: "/services/social-media-marketing-services/twitter-ads-management" },
                { name: "YouTube Marketing", href: "/services/social-media-marketing-services/video-marketing-agency" },
            ],
        },
    ];

    // Theme
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [expandedSection, setExpandedSection] = useState<number | null>(null);

    useEffect(() => {
        requestAnimationFrame(() => setMounted(true));
    }, []);

    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const isDark = currentTheme === "dark";
    const year = new Date().getFullYear();

    const toggleSection = (index: number) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    const styles = {
        footerBg: { backgroundColor: "var(--card-bg)" },
        heading: { color: "var(--foreground)" },
        text: { color: "var(--secondary-text)" },
        link: { color: "var(--secondary-text)" },
        border: { borderColor: "var(--border-color)" },
    } as const;

    // SSR-safe placeholder — includes navigation links for Googlebot crawlability
    if (!mounted) {
        return (
            <footer className="w-full border-t">
                <div className="mx-auto px-6 md:px-12 xl:px-16 py-12">
                    {/* SSR footer links — visible to Googlebot's HTML crawl */}
                    <nav aria-label="Footer navigation">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Our Services</h3>
                                <ul className="space-y-2">
                                    {ourServices.map((service, i) => (
                                        <li key={i}><Link href={service.href} className="text-sm">{service.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    {quickLinks.map((link, i) => (
                                        <li key={i}><Link href={link.href} className="text-sm">{link.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Service Categories</h3>
                                <ul className="space-y-2">
                                    {serviceCategories.map((category, idx) => (
                                        <li key={idx}>
                                            <Link href={category.href} className="text-sm font-medium">{category.title}</Link>
                                            <ul className="ml-3 mt-1 space-y-1">
                                                {category.items.map((item, i) => (
                                                    <li key={i}><Link href={item.href} className="text-xs">{item.name}</Link></li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="mt-8 pt-6 border-t flex flex-wrap gap-4 text-xs">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-of-service">Terms of Service</Link>
                        <Link href="/cookies-policy">Cookies Policy</Link>
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer className="w-full border-t" style={{ ...styles.footerBg, ...styles.border }}>
            <div className="mx-auto px-6 md:px-12 xl:px-16">
                {/* Main Footer Content - 4 Column Layout like reference */}
                <div className="py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                        {/* Column 1: Brand (from reference image) */}
                        <div className="lg:col-span-1">
                            <Link href="/" className="inline-block mb-6">
                                <Image
                                    src={isDark ? "/images/CIM-LOGO-White.png" : "/images/CIM-LOGO-Black.png"}
                                    alt="CIM Logo"
                                    height={100}
                                    width={250}
                                    className="h-20 w-auto"
                                />
                            </Link>
                            <p className="text-sm leading-relaxed mb-6" style={styles.text}>
                                Empowering businesses with cutting-edge digital solutions. From web design to AI automation, we are your partner in growth.
                            </p>

                            {/* Social Icons */}
                            <div className="flex items-center gap-4">
                                <Link href="https://www.linkedin.com/company/cinute-infomedia/" target="_blank" rel="noopener noreferrer" aria-label="Cinute InfoMedia on LinkedIn (opens in a new tab)" className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-[var(--hover-bg)] hover:!bg-[#0A66C2] group">
                                    <Linkedin className="h-6 w-6 group-hover:text-white transition-colors" style={{ color: "var(--foreground)" }} />
                                </Link>
                                <Link href="https://www.instagram.com/cinuteinfomedia/" target="_blank" rel="noopener noreferrer" aria-label="Cinute InfoMedia on Instagram (opens in a new tab)" className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-[var(--hover-bg)] hover:!bg-[#E1306C] group">
                                    <Instagram className="h-6 w-6 group-hover:text-white transition-colors" style={{ color: "var(--foreground)" }} />
                                </Link>
                                <Link href="https://x.com/cinuteinfomedia" target="_blank" rel="noopener noreferrer" aria-label="Cinute InfoMedia on X (Twitter) (opens in a new tab)" className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-[var(--hover-bg)] hover:!bg-[#1DA1F2] group">
                                    <TwitterX className="h-6 w-6 group-hover:text-white transition-colors" style={{ color: "var(--foreground)" }} />
                                </Link>
                                <Link href="https://www.facebook.com/cinuteinfomedia/" target="_blank" rel="noopener noreferrer" aria-label="Cinute InfoMedia on Facebook (opens in a new tab)" className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-[var(--hover-bg)] hover:!bg-[#1877F2] group">
                                    <Facebook className="h-6 w-6 group-hover:text-white transition-colors" style={{ color: "var(--foreground)" }} />
                                </Link>
                            </div>
                        </div>

                        {/* Column 2: Our Services */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-6" style={styles.heading}>
                                Our Services
                            </h3>
                            <ul className="space-y-3">
                                {ourServices.map((service, index) => (
                                    <li key={index}>
                                        <Link href={service.href} className="text-sm hover:underline transition-colors" style={styles.link}>
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Quick Links */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-6" style={styles.heading}>
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="text-sm hover:underline transition-colors" style={styles.link}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Get In Touch (from reference image) */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-6" style={styles.heading}>
                                Get In Touch
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "var(--brand-blue)" }} />
                                    <a href="mailto:contact@cinuteinfomedia.com" className="text-sm hover:underline" style={styles.link}>
                                        contact@cinuteinfomedia.com
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "var(--brand-teal)" }} />
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+919004988859" className="text-sm hover:underline" style={styles.link}>+91 9004988859</a>
                                        <a href="tel:+917700995410" className="text-sm hover:underline" style={styles.link}>+91 7700995410</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "var(--brand-purple)" }} />
                                    <span className="text-sm leading-relaxed" style={styles.text}>
                                        Office #3, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai, Maharashtra 401107
                                    </span>
                                </li>
                            </ul>
                            <Link href="/contact" className="mt-6 inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105" style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))" }}>
                                Start Your Project
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sub-pages Section */}
                <div className="py-10 border-t" style={styles.border}>
                    {/* Desktop: 6-Column Grid */}
                    <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {serviceCategories.map((category, idx) => (
                            <div key={idx}>
                                <Link href={category.href} className="text-sm font-bold uppercase tracking-wider mb-4 block hover:underline" style={styles.heading}>
                                    {category.title}
                                </Link>
                                <ul className="space-y-2">
                                    {category.items.map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.href} className="text-sm flex items-center group hover:underline" style={styles.link}>
                                                <ArrowRight className="h-3 w-3 mr-1.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Accordion */}
                    <div className="md:hidden space-y-2">
                        {serviceCategories.map((category, idx) => (
                            <div key={idx} className="border rounded-lg overflow-hidden" style={styles.border}>
                                <button
                                    onClick={() => toggleSection(idx)}
                                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold uppercase tracking-wider"
                                    style={{ ...styles.heading, backgroundColor: expandedSection === idx ? "var(--hover-bg)" : "transparent" }}
                                >
                                    {category.title}
                                    <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === idx ? "rotate-180" : ""}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${expandedSection === idx ? "max-h-96" : "max-h-0"}`}>
                                    <ul className="px-4 pb-3 space-y-2">
                                        <li>
                                            <Link href={category.href} className="text-sm font-medium hover:underline" style={{ color: "var(--brand-blue)" }}>
                                                View All {category.title} →
                                            </Link>
                                        </li>
                                        {category.items.map((item, i) => (
                                            <li key={i}>
                                                <Link href={item.href} className="text-sm hover:underline" style={styles.link}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t" style={styles.border}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs" style={styles.text}>
                            © {year} Cinute Infomedia. All rights reserved.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
                            <Link href="/privacy-policy" className="hover:underline" style={styles.link}>Privacy Policy</Link>
                            <span style={styles.text}>|</span>
                            <Link href="/terms-of-service" className="hover:underline" style={styles.link}>Terms of Service</Link>
                            <span style={styles.text}>|</span>
                            <Link href="/cookies-policy" className="hover:underline" style={styles.link}>Cookies Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
