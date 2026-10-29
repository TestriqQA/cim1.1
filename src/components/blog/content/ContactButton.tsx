"use client";

import Link from "next/link";
import { ContactButtonBlock as ContactButtonType } from "@/data/blog";

interface ContactButtonProps {
    block: ContactButtonType;
}

export default function ContactButton({ block }: ContactButtonProps) {
    const isPrimary = block.variant === 'primary';

    return (
        <div className="my-8 flex justify-center">
            <Link
                href="/contact"
                className={`
                    inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base
                    transition-all duration-200 transform hover:scale-105
                    ${isPrimary
                        ? 'bg-[var(--brand-purple-btn)] text-white hover:opacity-90 shadow-lg hover:shadow-xl'
                        : 'border-2 border-[var(--brand-purple)] text-[var(--brand-purple-text)] hover:bg-[var(--brand-purple-btn)] hover:text-white'
                    }
                `}
            >
                {block.text}
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </Link>
        </div>
    );
}
