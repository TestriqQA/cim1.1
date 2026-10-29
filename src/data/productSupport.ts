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
    // ==========================================================================
    // AssetMon — support runs through Cinute InfoMedia.
    //
    // AssetMon's own pages list five addresses on assetmon.app (hello@,
    // support@, security@, enterprise@, status@). That domain returns NXDOMAIN
    // from both 8.8.8.8 and 1.1.1.1, so mail sent to any of them cannot be
    // delivered. Publishing them here would hand customers dead addresses, so
    // every channel routes to CIM on the same line and SLA as the other
    // products. Restore the product addresses if and when the domain resolves.
    // ==========================================================================
    {
        slug: "assetmon",
        productName: "AssetMon",
        supportEmail: "support@cinuteinfomedia.com",
        supportPhone: "+91-9004988859",
        responseTime: "Within 4 business hours",
        intro: "Need help with your AssetMon workspace, a CSV import, the API, SSO or billing? Email support@cinuteinfomedia.com and the Cinute InfoMedia team will help.",
        channels: [
            { icon: "Mail", title: "Email Support", description: "Email support@cinuteinfomedia.com with your workspace name and a description of the issue. For an import problem, attach a few sample rows from the CSV.", action: "Email support@cinuteinfomedia.com", href: "mailto:support@cinuteinfomedia.com" },
            { icon: "HelpCircle", title: "Product FAQ", description: "Answers on setup time, importing an existing inventory, how tenant isolation works, what the trial includes and how billing runs.", action: "Read the FAQ", href: "https://assetm.cinuteinfomedia.com/#faq" },
            { icon: "BookOpen", title: "Guides & Glossary", description: "Long-form guides on IT asset management practice, plus a glossary of the terms that come up in audits, licensing and depreciation.", action: "Read the guides", href: "https://assetm.cinuteinfomedia.com/blog" },
            { icon: "Zap", title: "Security & Compliance", description: "How tenant isolation, encryption, audit logging and access control work, and how to request a DPA or an InfoSec review.", action: "Read the security page", href: "https://assetm.cinuteinfomedia.com/security" },
            { icon: "MessageSquare", title: "Work With Us", description: "Rolling AssetMon out across several sites or teams, or want it integrated with what you already run? Start a conversation.", action: "Contact us", href: "/contact" },
        ],
        commonIssues: [
            { question: "How do I import my existing asset spreadsheet?", answer: "Use the CSV import. AssetMon auto-maps category, location and department by name, so an existing spreadsheet comes across without being rebuilt. If a column does not map cleanly, email support@cinuteinfomedia.com with a few sample rows and we will help you shape the file." },
            { question: "What is on the free Starter plan, and what needs Business?", answer: "Starter is free and covers up to 5 users and 50 assets with core asset tracking, CSV import and export, and email support. Service tickets, maintenance schedules, procurement, the depreciation engine, the API and webhooks, and SSO are Business features. A 30-day trial opens up everything in Business with no card required." },
            { question: "How is my workspace separated from other customers?", answer: "Each workspace runs in its own isolated PostgreSQL database rather than sharing tables behind a tenant column. Data is encrypted in transit with TLS 1.2 or higher and at rest with AES-256, and backups are encrypted with separate keys. Access is role-based, and every asset event is written to an immutable audit log." },
            { question: "What happens to my data at the end of the trial, or if I cancel?", answer: "At the end of the trial the workspace pauses for 14 days while you decide, and you can export everything during that window. After a cancellation, workspace data is deleted within 30 days, so take your CSV or API export before then if you want to keep it." },
            { question: "How do I connect SSO or use the API?", answer: "SSO through Google, Microsoft Entra ID or SAML is available on Business and above, and SCIM 2.0 user provisioning on Enterprise. API access uses tenant-scoped keys that are hashed at rest and can be read-only or read-write, with revocation and expiry; webhooks are HMAC-SHA256 signed and retried three times. The OpenAPI documentation covers both." },
        ],
    },
    // ==========================================================================
    // TopCareerLive — support runs through Cinute InfoMedia.
    //
    // topcareerlive.com publishes NO contact details at all: no email, no phone,
    // no contact page (/contact and /contact-us both 404). Every channel here is
    // CIM's, and the answers stay within what the platform verifiably does —
    // the site's own five FAQ answers are one repeated block of boilerplate that
    // answers none of the questions asked, so none of it is reproduced.
    // ==========================================================================
    {
        slug: "topcareerlive",
        productName: "TopCareerLive",
        supportEmail: "support@cinuteinfomedia.com",
        supportPhone: "+91-9004988859",
        responseTime: "Within 4 business hours",
        intro: "Questions about posting a role, managing applicants, your candidate profile or a job alert? Email support@cinuteinfomedia.com and the Cinute InfoMedia team will help.",
        channels: [
            { icon: "Mail", title: "Email Support", description: "Email support@cinuteinfomedia.com with the email address on your TopCareerLive account and a description of the issue. For a problem with a specific listing, include its link.", action: "Email support@cinuteinfomedia.com", href: "mailto:support@cinuteinfomedia.com" },
            { icon: "Users", title: "For Employers", description: "Company profiles, posting a role, and filtering, ranking and tracking applicants through your own hiring stages.", action: "Employer overview", href: "https://topcareerlive.com/employers" },
            { icon: "HelpCircle", title: "For Candidates", description: "Create a profile, search roles by location, experience and freshness, and set up job alerts by email or WhatsApp.", action: "Browse jobs", href: "https://topcareerlive.com/search" },
            { icon: "BookOpen", title: "Career Insights", description: "Articles on building a career, written for candidates working out what to apply for next.", action: "Read the blog", href: "https://topcareerlive.com/blog" },
            { icon: "MessageSquare", title: "Work With Us", description: "Hiring at volume, or want TopCareerLive fitted to how your team already recruits? Start a conversation.", action: "Contact us", href: "/contact" },
        ],
        commonIssues: [
            { question: "How do I create an account?", answer: "Register with an email address and password, or continue with a Google account. The candidate flow collects your name, email, mobile number and current location, and lets you upload a CV as a PDF, DOC or DOCX file, then walks you through employment, education and job preferences." },
            { question: "How do I get told about new roles?", answer: "Job alerts are delivered by email and on WhatsApp, so a matching role reaches you without you having to keep checking. Alert preferences are set during registration and can be changed from your profile." },
            { question: "How do I narrow a job search?", answer: "Filter by location, experience level from fresher upwards, and how recently a role was posted — any time, the last 24 hours, the last 7 days, or the last 30 days. Results can also be narrowed by category and role type." },
            { question: "How do I edit, renew or pause a job I have posted?", answer: "From the employer dashboard, any live listing can be edited, renewed or paused in a single click, so a role comes down as soon as it is filled and goes back up if the hire falls through." },
            { question: "How much does it cost to post a job?", answer: "TopCareerLive does not currently publish pricing for job postings. Email support@cinuteinfomedia.com and we will put you in touch with the right person." },
        ],
    },
];

export function getProductSupportBySlug(slug: string): ProductSupport | undefined {
    return productSupportData.find((p) => p.slug === slug);
}
