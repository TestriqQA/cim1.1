// ============================================================================
// PRODUCT SUPPORT DATA
// ============================================================================

export interface SupportChannel {
    icon: string; // lucide icon name
    title: string;
    description: string;
    action?: string; // link label
    href?: string;
}

export interface SupportFAQ {
    question: string;
    answer: string;
}

export interface ProductSupport {
    slug: string;
    productName: string;
    supportEmail: string;
    // Optional: a product whose team publishes no phone number, or no
    // response-time commitment, omits these rather than borrowing CIM's. The
    // support page guards both, so it drops the call button and the response
    // badge instead of rendering an empty `tel:` link or an invented SLA.
    supportPhone?: string;
    responseTime?: string;
    intro: string;
    channels: SupportChannel[];
    commonIssues: SupportFAQ[];
}

export const productSupportData: ProductSupport[] = [
    {
        slug: "chimegenius-ai-pro",
        productName: "ChimeGenius AI Pro",
        supportEmail: "support@cinuteinfomedia.com",
        supportPhone: "+91-9004988859",
        responseTime: "Within 4 business hours",
        intro: "Need help with the browser extension, comment generation, tone customization, or account settings? Our support team is here to ensure your ChimeGenius experience is smooth and productive.",
        channels: [
            { icon: "Mail", title: "Email Support", description: "Describe your issue with the extension version and browser details. Our team responds within 4 business hours.", action: "Send Email", href: "mailto:support@cinuteinfomedia.com" },
            { icon: "MessageSquare", title: "Live Chat", description: "Get real-time help with extension setup, tone configuration, and generation issues (Mon–Fri, 9 AM – 7 PM IST).", action: "Start Chat", href: "/contact" },
            { icon: "BookOpen", title: "User Guide", description: "Step-by-step guide for installing the extension, configuring tones, using on different platforms, and managing your account.", action: "Read Guide", href: "/contact" },
            { icon: "HelpCircle", title: "FAQ & Troubleshooting", description: "Browse answers to commonly asked questions and quick fixes for known issues with the browser extension.", action: "View FAQ", href: "/contact" },
        ],
        commonIssues: [
            { question: "The toolbar is not appearing when I click the comment box", answer: "Ensure the ChimeGenius extension is enabled in your browser's extension settings. Try refreshing the page. If the issue persists, check if another extension is conflicting by disabling other extensions temporarily." },
            { question: "Generated comments seem generic or irrelevant", answer: "Make sure the post has visible text content for the AI to analyze. For image-only posts, the AI may generate broader responses. Try selecting a more specific tone preset for better results." },
            { question: "The extension is not working on a specific platform", answer: "ChimeGenius currently supports LinkedIn, Instagram, Facebook, X (Twitter), YouTube, and Reddit. Ensure you're using the latest extension version. Some platform UI updates may temporarily affect compatibility — we release patches quickly." },
            { question: "I've reached my daily generation limit", answer: "Free tier users have a daily limit on comment generations. Upgrade to Pro or Business plan for unlimited generations. Your limit resets at midnight UTC daily." },
        ],
    },
    // ==========================================================================
    // Kruti.io — Cinute InfoMedia is the support desk.
    //
    // Kruti.io is built and operated by Cinute Digital Pvt. Ltd., but CIM fields
    // enquiries for it on the same line and the same SLA as ChimeGenius. The
    // phone and response time below are CIM's own commitments, not figures
    // borrowed from kruti.io — kruti.io publishes no phone number and no general
    // support SLA (only a 24-hour grievance acknowledgement and a 3-business-day
    // refund reply, neither of which is a support-desk promise).
    //
    // The support@kruti.io addresses that remain are the ones tied to actions
    // inside Kruti.io's own systems — cancelling a subscription, a Razorpay
    // refund, account deletion, data export. CIM cannot execute those, and
    // Kruti.io publishes its own timings for them, so routing them here would
    // publish an instruction that quietly fails.
    // ==========================================================================
    {
        slug: "kruti-io",
        productName: "Kruti.io",
        // Cinute InfoMedia is the front door for Kruti.io enquiries, same as it
        // is for ChimeGenius. The addresses that stay pointed at support@kruti.io
        // below are the ones tied to actions inside Kruti.io's own systems —
        // cancelling a subscription, a Razorpay refund, deleting an account —
        // which CIM cannot execute and which Kruti.io publishes its own SLA for.
        // Sending those here would publish an instruction that quietly fails.
        supportEmail: "support@cinuteinfomedia.com",
        supportPhone: "+91-9004988859",
        responseTime: "Within 4 business hours",
        intro: "Need help with your Kruti.io subscription, LinkedIn connection or content generation? Email support@cinuteinfomedia.com and the Cinute InfoMedia team will help. Kruti.io is built and operated by Cinute Digital Pvt. Ltd., so actions that run inside the platform itself — cancellations, refunds and account deletion — are handled by that team at support@kruti.io.",
        channels: [
            { icon: "Mail", title: "Email Support", description: "Email support@cinuteinfomedia.com with the email address on your Kruti.io account and a description of the issue. For billing questions, include the date of the payment in question.", action: "Email support@cinuteinfomedia.com", href: "mailto:support@cinuteinfomedia.com" },
            { icon: "HelpCircle", title: "Product FAQ", description: "Answers on how the AI learns your voice, editing posts before they publish, what happens after the 7-day trial, and how billing works.", action: "Read the FAQ", href: "https://kruti.io/#faq" },
            { icon: "BookOpen", title: "The Kruti Journal", description: "Long-form guides on LinkedIn strategy, personal branding, content analytics and lead generation, published by the Kruti.io team.", action: "Read the blog", href: "https://kruti.io/blog" },
            { icon: "Zap", title: "Manage Your Subscription", description: "Cancel or change your plan from Settings, under Subscription, in your Kruti.io account — or email support@kruti.io. Access continues to the end of the current billing period.", action: "Go to Kruti.io", href: "https://kruti.io/" },
            { icon: "MessageSquare", title: "Work With Us", description: "Rolling Kruti.io out across a team, or looking for the digital marketing and web work Cinute InfoMedia builds around it? Start a conversation.", action: "Contact us", href: "/contact" },
        ],
        commonIssues: [
            { question: "How do I sign in? I don't see an email or password option.", answer: "LinkedIn OAuth is the only sign-in method. There is no email and password, Google or magic-link login, and no separate sign-up page — authorising Kruti.io on LinkedIn creates your account. One Kruti.io account per LinkedIn profile is permitted." },
            { question: "How do I cancel my subscription?", answer: "Go to Settings, then Subscription, then Cancel Subscription in the app, or email a cancellation request to support@kruti.io. Your subscription stays active until the end of the current billing period and you keep full access until it expires. No partial-month refunds are provided for mid-cycle cancellations." },
            { question: "Can I get a refund?", answer: "Refunds are available in three cases: within 48 hours of your first subscription payment if you have not generated any content; a pro-rated refund if the platform is unavailable for more than 72 consecutive hours in a billing period due to issues on Kruti.io's end, excluding maintenance announced in advance; and a full refund for billing errors such as duplicate or incorrect charges. Email support@kruti.io with the subject line \"Refund Request\", your registered email address, the reason and the payment date. Requests are reviewed within 3 business days, approved refunds are processed within 5 to 7 business days via Razorpay, and the bank-side credit typically takes a further 5 to 10 business days. Dissatisfaction with AI content quality is not eligible for a refund." },
            { question: "How do I delete my account, export my data, or disconnect LinkedIn?", answer: "Account deletion and data export are handled by email — contact support@kruti.io. On deletion, all user data, content plans, posts and newsletters are permanently deleted from the database, and the deletion cascades through all related records. You can revoke Kruti.io's LinkedIn access yourself at any time from LinkedIn's Settings, under Data Privacy and Permitted Services." },
            { question: "My payment failed, or my account says past due.", answer: "If a payment fails, your account status changes to past due. After repeated failures, access to the dashboard may be restricted until the payment is resolved. Billing runs monthly through Razorpay on the anniversary of your subscription start date. Note that chargebacks filed without contacting support first may result in temporary suspension pending investigation." },
        ],
    },
];

export function getProductSupportBySlug(slug: string): ProductSupport | undefined {
    return productSupportData.find((p) => p.slug === slug);
}
