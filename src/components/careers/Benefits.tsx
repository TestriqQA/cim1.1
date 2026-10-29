"use client";

import { useRef, useState } from "react";
import { Heart, Globe, Zap, Coffee, Laptop, Trophy } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, MotionValue } from "framer-motion";

const benefits = [
    {
        icon: Globe,
        title: "Remote First",
        description: "Work from anywhere in the world. We believe in output over hours.",
        color: "14, 165, 233" // brand-blue rgb-like
    },
    {
        icon: Zap,
        title: "Fast-Paced Growth",
        description: "Accelerate your career with challenging projects and rapid learning curves.",
        color: "231, 176, 10" // brand-yellow
    },
    {
        icon: Heart,
        title: "Comprehensive Health",
        description: "Standard health coverage for you and your family.",
        color: "188, 63, 235" // brand-purple
    },
    {
        icon: Laptop,
        title: "Top-Tier Equipment",
        description: "We provide the latest MacBook Pros and accessories for your home office.",
        color: "0, 239, 214" // brand-cyan
    },
    {
        icon: Coffee,
        title: "Flexible Hours",
        description: "Set your own schedule. We respect your time and work-life balance.",
        color: "238, 101, 0" // brand-orange
    },
    {
        icon: Trophy,
        title: "Performance Bonuses",
        description: "Competitive salary with performance-based bonuses and equity options.",
        color: "0, 181, 202" // brand-teal
    }
];

function Card({ benefit }: { benefit: typeof benefits[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative border border-[var(--border-color)] bg-[var(--card-bg)] px-8 py-10 rounded-3xl overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          650px circle at ${mouseX}px ${mouseY}px,
                          rgba(${benefit.color}, 0.15),
                          transparent 80%
                        )
                    `
                }}
            />

            {/* Spotlight Border */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          600px circle at ${mouseX}px ${mouseY}px,
                          rgba(${benefit.color}, 0.4),
                          transparent 40%
                        )
                    `,
                    maskImage: "linear-gradient(black, black)",
                    WebkitMaskImage: "linear-gradient(black, black)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px", // This padding simulates the border width
                    boxSizing: "border-box" // Ensures padding is included in the element's total width and height
                }}
            />
            {/* Since the mask trick is complex with inset, let's try a simpler overlay border approach for the spotlight border effect */}
            <div className="absolute inset-px rounded-[23px] bg-[var(--card-bg)]" />

            {/* Content */}
            <div className="relative h-full flex flex-col">
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 ring-1 ring-[var(--border-color)] bg-[var(--background)] group-hover:bg-[var(--card-bg)] transition-colors"
                >
                    <benefit.icon
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: `rgb(${benefit.color})` }}
                    />
                </div>

                <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">
                    {benefit.title}
                </h3>

                <p className="text-[var(--secondary-text)] leading-relaxed text-sm flex-grow">
                    {benefit.description}
                </p>

                {/* Decorative Pattern just for this card */}
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(rgb(${benefit.color}) 1px, transparent 1px)`,
                        backgroundSize: '24px 24px'
                    }}
                />
            </div>
        </div>
    );
}


export default function Benefits() {
    return (
        <section className="py-24 relative overflow-hidden bg-[var(--background)]">

            {/* Global Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, var(--foreground) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)`,
                    backgroundSize: '64px 64px'
                }}
            />

            <div className="relative mx-auto px-6 md:px-12 xl:px-16 z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-blue)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-blue)]"></span>
                        </span>
                        <span className="text-xs font-medium text-[var(--secondary-text)] uppercase tracking-wide">Perks & Benefits</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[var(--foreground)]">
                        Why Join <span className="bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-purple)] bg-clip-text text-transparent">CIM?</span>
                    </h2>
                    <p className="text-[var(--secondary-text)] text-lg max-w-2xl mx-auto leading-relaxed">
                        We don&apos;t just offer a job, we offer a platform to launch your career.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <Card key={index} benefit={benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
}
