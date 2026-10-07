// ============================================================================
// PRODUCT DATA — Static product catalog for Cinute InfoMedia
// ============================================================================

export interface ProductFeature {
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export interface ProductStep {
  step: number;
  title: string;
  description: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

// A single commercial offer, emitted as a schema.org Offer in the product
// page's SoftwareApplication node. Products list every price they actually
// publish; a product that publishes none simply omits `offers` and the node
// carries no price at all, rather than inheriting another product's terms.
export interface ProductOffer {
  price: string;
  priceCurrency: string; // ISO 4217, e.g. "INR", "USD"
  description?: string;
  url?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string; // lucide icon name
  color: string; // gradient CSS
  accentColor: string; // single brand color
  features: ProductFeature[];
  techStack: string[];
  process: ProductStep[];
  faqs: ProductFAQ[];
  stats: { label: string; value: string }[];
  supportUrl: string;
  // Optional: a product whose operator has not published a privacy policy links
  // to no policy at all rather than to a page we invented for them. A privacy
  // policy is a binding statement about data handling — it is not ours to write
  // on a product's behalf. ProductLinks hides the button when this is absent.
  privacyUrl?: string;
  demoVideoUrl?: string; // Optional URL for product video demo
  extensionUrl?: string; // Optional Chrome Web Store / Edge Add-ons URL for browser-extension products
  // Canonical home of a product that lives on its own domain. When set, the
  // hero and closing CTAs point here instead of /contact, so the primary
  // action is "use the product" rather than "email the agency".
  externalUrl?: string;
  // SoftwareApplication JSON-LD, per product. Both used to be hard-coded in
  // the route to ChimeGenius's shape — a browser extension on a free plan —
  // which silently published those commercial terms for every other product.
  // Omit `offers` when a product publishes no price we can cite.
  applicationCategory?: string; // schema.org, e.g. "WebApplication"
  offers?: ProductOffer[];
  // Currently published release, e.g. "1.2.0". Rendered as a pill in the hero
  // and emitted as `softwareVersion` in the SoftwareApplication JSON-LD, so both
  // read from this single value. Omit for products that are not versioned.
  version?: string;

  // --- Optional SEO / page-copy overrides -----------------------------------
  // When omitted, the page falls back to its derived defaults (meta title built
  // from name + tagline) and to the components' built-in section headings, so
  // products that don't set these render exactly as before.
  seoTitle?: string;          // explicit <title>, replaces "{name} — {tagline} | Cinute InfoMedia"
  seoDescription?: string;    // explicit meta description, replaces `description`
  heroHeadline?: string;      // <h1> — keyword-led headline instead of the brand name
  heroSubheadline?: string;   // supporting line directly under the <h1>
  heroBody?: string[];        // hero paragraphs, replaces `longDescription` in the hero
  ctaPrimaryLabel?: string;   // hero primary button label
  ctaSecondaryLabel?: string; // hero secondary button label
  featuresHeading?: string;
  featuresIntro?: string;
  howItWorksHeading?: string;
  faqHeading?: string;
  closingCtaHeading?: string;
  closingCtaBody?: string;
  closingCtaLabel?: string;
}

// ============================================================================
// PRODUCT CATALOG
// ============================================================================

export const products: Product[] = [
  {
    id: "chimegenius-ai-pro",
    name: "ChimeGenius AI Pro",
    slug: "chimegenius-ai-pro",
    tagline: "Smart Comment & Reply Generator",
    description:
      "Generate smart, context-aware comments & replies on LinkedIn, Instagram, Facebook, X and YouTube instantly. Free AI Chrome extension — try it now.",
    longDescription:
      "ChimeGenius AI Pro is an AI comment generator and browser extension that helps you write smarter replies on LinkedIn, Instagram, Facebook, X (Twitter), and YouTube in seconds. Click any comment box and a smart AI toolbar appears instantly — generating relevant, human-sounding comments based on the original post's context. Choose from tones like professional, bold, funny, supportive, or witty, then edit the AI-generated comment before posting. Whether you're a creator, a brand manager, or a professional growing your LinkedIn presence, this AI reply generator helps you engage authentically at scale — without spending hours typing.",

    // --- SEO / page copy (from the ChimeGenius AI Pro SEO rewrite) ----------
    seoTitle: "ChimeGenius AI Pro – AI Comment Generator Chrome Extension",
    seoDescription:
      "Generate smart, context-aware comments & replies on LinkedIn, Instagram, Facebook, X and YouTube instantly. Free AI Chrome extension — try it now.",
    heroHeadline: "AI Comment & Reply Generator for LinkedIn, Instagram & More",
    heroSubheadline:
      "ChimeGenius AI Pro — the AI-powered Chrome extension for smarter social media engagement",
    heroBody: [
      "ChimeGenius AI Pro is an AI comment generator and browser extension that helps you write smarter replies on LinkedIn, Instagram, Facebook, X (Twitter), and YouTube in seconds. Click any comment box and a smart AI toolbar appears instantly — generating relevant, human-sounding comments based on the original post's context.",
      "Choose from tones like professional, bold, funny, supportive, or witty, then edit the AI-generated comment before posting. Whether you're a creator, a brand manager, or a professional growing your LinkedIn presence, this AI reply generator helps you engage authentically at scale — without spending hours typing.",
    ],
    ctaPrimaryLabel: "Add to Chrome — Free AI Comment Generator",
    ctaSecondaryLabel: "Schedule a Demo",
    featuresHeading: "AI Comment Generator Features Built for Social Media Growth",
    featuresIntro:
      "Everything you need to automate social engagement — powered by advanced AI models and built for speed.",
    howItWorksHeading: "How the AI Comment Generator Works",
    faqHeading: "ChimeGenius AI Pro FAQs",
    closingCtaHeading: "Try the Free AI Comment Generator Today",
    closingCtaBody:
      "Join thousands of creators, brands, and professionals using ChimeGenius AI Pro to save time and grow their social media presence with AI-powered comments and replies.",
    closingCtaLabel: "Get Started Free",

    icon: "MessageSquare",
    color: "bg-gradient-to-br from-[#FF6B35] to-[#F72585]",
    accentColor: "#F72585",
    features: [
      { icon: "Sparkles", title: "AI-Powered Comment Generation", description: "Analyzes post context — text, images, hashtags, and sentiment — to generate relevant, natural-sounding comments and replies in one click." },
      { icon: "Wand2", title: "Custom Tone AI Comment Styles", description: "Choose Bold, Professional, Funny, Supportive, Witty, Casual, or Thought-Provoking tones, or create your own custom tone preset for consistent brand voice." },
      { icon: "MousePointer2", title: "One-Click AI Comment Toolbar", description: "Click any comment box on a supported platform and the ChimeGenius AI toolbar appears automatically — no tab-switching required." },
      { icon: "FileText", title: "Editable AI-Generated Replies", description: "Every AI comment is fully editable. Refine the suggestion, add a personal touch, or rewrite it entirely before posting." },
      { icon: "Globe", title: "Multi-Platform Comment Generator", description: "Works across LinkedIn, Instagram, Facebook, X (Twitter), YouTube, Reddit, and more — one AI tool for all your social engagement." },
      { icon: "Zap", title: "Instant AI Reply Generation", description: "Built on advanced LLMs with sub-second response times — generate, review, and post faster than typing manually." },
    ],
    techStack: ["React", "TypeScript", "Chrome Extension API", "OpenAI", "Claude AI", "Node.js", "Redis", "PostgreSQL", "Vercel", "TailwindCSS"],
    process: [
      { step: 1, title: "Install the Chrome Extension", description: "Add ChimeGenius AI Pro from the Chrome Web Store or Edge Add-ons. One-click install, zero setup." },
      { step: 2, title: "Click Any Comment Box", description: "Go to any LinkedIn, Instagram, or X post and click the comment field. The AI toolbar appears automatically." },
      { step: 3, title: "Choose a Tone & Generate", description: "Pick Professional, Funny, Bold, Supportive, or Custom, then generate a context-aware comment instantly." },
      { step: 4, title: "Edit & Post", description: "Review, personalize, and post your AI-generated reply in seconds." },
    ],
    faqs: [
      { question: "What social media platforms does the AI comment generator support?", answer: "ChimeGenius AI Pro works on LinkedIn, Instagram, Facebook, X (Twitter), YouTube, and Reddit, with more platforms added regularly. The Chrome extension integrates directly into each platform's native comment box." },
      { question: "Can I customize the tone of AI-generated comments?", answer: "Yes — choose from Professional, Bold, Funny, Supportive, Witty, or Casual tones, or create unlimited custom tone presets for your brand voice." },
      { question: "Does the AI read the post before generating a comment?", answer: "Yes. ChimeGenius AI analyzes the full post context — text, hashtags, mentions, and sentiment — before generating a relevant, natural response." },
      { question: "Can I edit AI-generated comments before posting?", answer: "Absolutely. Every comment appears in the comment box, fully editable, so you stay in control before you post." },
      { question: "Is my data safe with ChimeGenius AI Pro?", answer: "Yes. ChimeGenius processes post context only for generation and does not permanently store post content. See our Privacy Policy for details." },
      { question: "Is there a free AI comment generator plan?", answer: "Yes — a free tier is available with a daily generation limit. Pro and Business plans unlock unlimited AI comment generation, custom tones, and team features." },
    ],
    stats: [
      { label: "Comments Generated", value: "At Scale" },
      { label: "Active Users", value: "Growing" },
      { label: "Social Platforms Supported", value: "7+" },
      { label: "Avg. Time Saved", value: "Significant" },
    ],
    supportUrl: "/products/chimegenius-ai-pro/support",
    privacyUrl: "/products/chimegenius-ai-pro/privacy-policy",
    extensionUrl: "https://chromewebstore.google.com/detail/pnolpjljedjpmbjimpkhhimapgffidbk?utm_source=item-share-cb",
    version: "1.2.0",
    // Previously hard-coded in the product route for EVERY product. It is
    // ChimeGenius's own free-tier offer, so it lives on ChimeGenius.
    applicationCategory: "BrowserApplication",
    offers: [
      {
        price: "0",
        priceCurrency: "USD",
        description:
          "Free plan with a daily generation limit. Pro and Business plans unlock unlimited generations, custom tones, and team features.",
        url: "https://www.cinuteinfomedia.com/contact",
      },
    ],
  },
  // ==========================================================================
  // Kruti.io — ATTRIBUTION IS LOAD-BEARING HERE.
  //
  // Kruti.io is built and operated by Cinute Digital Pvt. Ltd., Mumbai — a
  // sibling company in the Cinute group, NOT Cinute InfoMedia. The string
  // "Cinute InfoMedia" appears nowhere on kruti.io. CIM lists this product;
  // it does not operate it, bill for it, or answer its support. No copy in
  // this entry may imply otherwise.
  //
  // Every claim below is sourced from Kruti.io's own published pages (landing,
  // /terms, /privacy, /refund, /disclaimer). Deliberate omissions, each of
  // which would be a false statement if added:
  //   - There is NO free plan. There is a 7-day free trial, then one paid plan.
  //   - The rupee and dollar prices are two separately quoted prices, not an FX
  //     conversion. Never write one as an approximation of the other.
  //   - No outcome is promised. Their /disclaimer rules out guaranteeing
  //     likes, impressions, follower growth, leads or business results, so all
  //     copy here is capability-framed.
  //   - No LinkedIn partnership or endorsement. The API is official; the
  //     relationship is not — Kruti.io is an independent product.
  //   - The AI models are exactly "Google Gemini 2.5 Pro" and "Google Imagen 3".
  //     Google is the only AI provider named anywhere on the product.
  // ==========================================================================
  {
    id: "kruti-io",
    name: "Kruti.io",
    slug: "kruti-io",
    tagline: "AI-Powered LinkedIn Content Platform",
    description:
      "Kruti.io is an AI-powered LinkedIn content platform by Cinute Digital Pvt. Ltd. — a personalised strategy, 30 ready-to-publish posts, AI images and newsletter drafts every month, published straight to LinkedIn.",
    longDescription:
      "Kruti.io is an AI-powered platform for creating, managing and publishing LinkedIn content. It reads your LinkedIn profile — headline, about section and experience — to build a personalised content plan, then generates a month of posts, images and newsletter drafts that you review before anything goes live. Kruti.io is built and operated by Cinute Digital Pvt. Ltd., Mumbai.",

    // --- SEO / page copy ----------------------------------------------------
    seoTitle: "Kruti.io — AI-Powered LinkedIn Content Platform",
    seoDescription:
      "Kruti.io turns your LinkedIn profile into a content engine: 30 AI-generated posts, images and newsletter drafts a month. 7-day free trial, then ₹999/month (or $19/month international).",
    heroHeadline: "AI LinkedIn Content Platform — a Month of Posts in One Sitting",
    heroSubheadline:
      "Kruti.io — AI-generated LinkedIn strategy, posts, images and newsletters, built and operated by Cinute Digital Pvt. Ltd.",
    heroBody: [
      "Kruti.io turns your LinkedIn profile into a content engine, generating 30 strategic posts, professional images and newsletter drafts every month in your own professional voice.",
      "Text is generated with Google Gemini 2.5 Pro and images with Google Imagen 3. Sign-in and publishing run on LinkedIn's official API via OAuth 2.0, and every post is created as a draft you can review, edit or discard before it goes live.",
    ],
    ctaPrimaryLabel: "Start your 7-day free trial",
    ctaSecondaryLabel: "Talk to us about Kruti.io",
    featuresHeading: "What Kruti.io Does",
    featuresIntro:
      "A personalised strategy, a month of posts, AI images, a content calendar and newsletter drafts — all reviewed by you before anything publishes.",
    howItWorksHeading: "How Kruti.io Works",
    faqHeading: "Kruti.io FAQs",
    closingCtaHeading: "See Kruti.io in Action",
    closingCtaBody:
      "Kruti.io starts with a 7-day free trial and no card required. After the trial it is one plan at ₹999/month, or $19/month for international users, billed monthly through Razorpay and cancellable anytime. Prices are exclusive of applicable taxes.",
    closingCtaLabel: "Start your free trial",

    icon: "Share2",
    color: "bg-gradient-to-br from-[#008ac1] to-[#4e51d2]",
    accentColor: "#4e51d2",
    features: [
      { icon: "Target", title: "Strategy Built From Your Profile", description: "A data-driven content roadmap shaped by your expertise, industry and audience, so every post has a reason to exist." },
      { icon: "FileText", title: "30 Ready-to-Publish Posts a Month", description: "Thought leadership, tips, stories, questions and listicles — drafted in your own professional voice, every month." },
      { icon: "Wand2", title: "Professional AI Images", description: "On-brand visuals generated for each post with Google Imagen 3. No design work and no stock-photo hunting." },
      { icon: "CalendarDays", title: "Visual Content Calendar", description: "Plan, schedule and track a full month of LinkedIn content in a single view." },
      { icon: "Mail", title: "Newsletter Drafts", description: "Complete LinkedIn newsletter editions — hook, sections, insights and a closing call to action — ready for you to review and send." },
      { icon: "Rocket", title: "One-Click Publishing", description: "Review, refine and publish straight to LinkedIn through the official API, with no copy-paste between tabs." },
    ],
    // Only technologies Kruti.io itself names. The first five also feed the
    // page keywords, so the most defensible sit first. Deliberately NOT listed:
    // the host (their privacy policy leaves it unnamed on purpose), and every
    // vendor ChimeGenius uses — none of them is published for Kruti.io.
    techStack: ["Google Gemini 2.5 Pro", "Google Imagen 3", "LinkedIn OAuth 2.0", "Razorpay", "Resend", "Next.js"],
    process: [
      { step: 1, title: "Connect Your LinkedIn", description: "Sign in with LinkedIn OAuth. Kruti.io reads your profile, headline and experience to learn your professional voice — there is no password to hand over." },
      { step: 2, title: "Generate Your Strategy", description: "The platform builds a personalised content plan — themes, pillars and post types — automatically from your profile and industry. No prompts to write." },
      { step: 3, title: "Review Your Drafts", description: "Every post is created as a draft first. Review, edit, rewrite or discard anything before it is marked ready." },
      { step: 4, title: "Publish & Schedule", description: "Add an image in one click and publish straight to LinkedIn, or schedule the whole month from the content calendar." },
    ],
    // These answers are published verbatim as FAQPage structured data, so each
    // one is a claim CIM makes on the record. The account-safety answer is
    // deliberately NOT Kruti.io's own — their landing page says the account is
    // never at risk, which their own /disclaimer contradicts. The sourced
    // mechanics are stated instead.
    faqs: [
      { question: "Will the AI-generated posts sound like me?", answer: "Kruti.io reads your LinkedIn profile — headline, about section, experience and activity — to learn your tone, expertise and audience, and drafts each post to match that professional voice rather than generic AI phrasing. Every post is a draft you can rewrite before it publishes." },
      { question: "Can I edit posts before publishing?", answer: "Always. Every post is created as a draft first. You can review, edit, rewrite or discard any post before marking it ready, so you stay in full control of what goes live." },
      { question: "Do I need to write prompts or instructions?", answer: "No. Kruti.io builds your content strategy automatically from your LinkedIn profile and industry — there are no prompts to write. You click generate and then review what comes back." },
      { question: "How does Kruti.io connect to my LinkedIn account?", answer: "Through LinkedIn's official API using OAuth 2.0, with the scopes openid, profile, email and w_member_social. Kruti.io never stores your LinkedIn password, uses no scrapers or automation, and publishes only the posts you have explicitly approved. You can disconnect it at any time from LinkedIn's Settings, under Data Privacy and Permitted Services. Kruti.io is an independent product and is not affiliated with, endorsed by, or sponsored by LinkedIn Corporation." },
      { question: "What happens after the 7-day free trial?", answer: "After the trial it is one plan at ₹999/month, or $19/month for international users — everything included, with no tiers or add-ons. You can cancel anytime from your account settings with no lock-in. All prices are exclusive of applicable taxes." },
      { question: "How does billing work, and can I cancel anytime?", answer: "Payments are processed by Razorpay and billed monthly on the anniversary of your subscription start date. You can cancel or manage your subscription anytime from your account settings, and you keep access until the end of the current billing period." },
      { question: "Who operates Kruti.io?", answer: "Kruti.io is built and operated by Cinute Digital Pvt. Ltd., Mumbai, India. Cinute InfoMedia handles enquiries and support for it at support@cinuteinfomedia.com. Billing, refunds, account deletion and privacy requests run inside the platform itself and are handled by the Kruti.io team at support@kruti.io." },
    ],
    // Only figures Kruti.io actually documents. Their hero also advertises
    // "~5 min" and "100% your authentic voice"; both are marketing figures with
    // no published methodology, and restating them here would turn Kruti.io's
    // marketing into Cinute InfoMedia's factual claim.
    stats: [
      { label: "AI posts every month", value: "30" },
      { label: "Free trial, no card", value: "7 days" },
      { label: "Plan, everything included", value: "1" },
      { label: "Prompts to write", value: "0" },
    ],
    supportUrl: "/products/kruti-io/support",
    privacyUrl: "/products/kruti-io/privacy-policy",
    // The product lives on its own domain, so the primary CTA sends people to
    // the trial rather than to CIM's contact form. No `extensionUrl`: it is a
    // web platform, and setting one would render a Chrome icon and flip the
    // JSON-LD to operatingSystem "Chrome, Edge".
    externalUrl: "https://kruti.io/",
    applicationCategory: "WebApplication",
    // Two separately published prices — NOT one price converted. The dollar
    // price is specifically the international one, and the currency cannot be
    // changed after activation without cancelling and resubscribing.
    offers: [
      {
        price: "999",
        priceCurrency: "INR",
        description:
          "One plan, everything included. 7-day free trial with no card required, then ₹999/month billed monthly. Exclusive of applicable taxes.",
        url: "https://kruti.io/#pricing",
      },
      {
        price: "19",
        priceCurrency: "USD",
        description:
          "International pricing for the same single plan. 7-day free trial with no card required, then $19/month billed monthly. Exclusive of applicable taxes.",
        url: "https://kruti.io/#pricing",
      },
    ],
  },

  // ==========================================================================
  // AssetMon — multi-tenant IT asset management, at assetm.cinuteinfomedia.com.
  //
  // Everything below comes from the product's own pages. Deliberately NOT
  // carried across, each of which would be a false or unsupported claim here:
  //
  //   - The "4.8 / 5, 127 reviews" aggregateRating in their homepage JSON-LD.
  //     No review is published anywhere on the site, and republishing a rating
  //     with nothing behind it is the kind of thing Search Console penalises.
  //   - The homepage dashboard and terminal mockups (1,284 assets, $284K book
  //     value, tenants "acme"/"beta"/"globex") and the ROI calculator's default
  //     output. All illustrative; the ROI page says so itself.
  //   - The Northwind testimonial, which is attributed to a company that does
  //     not exist.
  //   - The five @assetmon social accounts, all of which 404.
  //   - The support addresses on assetmon.app: that domain does not resolve, so
  //     mail to it cannot be delivered. Support routes to CIM instead — see the
  //     productSupport entry.
  //
  // PRICING: the canonical /pricing page quotes INR (₹0 Starter, ₹699 Business,
  // Enterprise custom). A separate $8/user/month figure appears on the two
  // /compare pages and implicitly in the ROI calculator. Only the INR prices
  // are published here, because those are the ones the pricing page itself
  // states; the two are NOT converted into one another.
  //
  // TRIAL WORDING: the homepage says data is "exportable any time, even after",
  // which their own Terms contradict ("We delete workspace data within 30 days
  // of cancellation"). The conservative, Terms-consistent version is used.
  // ==========================================================================
  {
    id: "assetmon",
    name: "AssetMon",
    slug: "assetmon",
    tagline: "Multi-Tenant IT Asset Management",
    description:
      "AssetMon is a browser-based IT asset management platform: hardware inventory, service tickets, preventive maintenance, software licences, procurement and depreciation in one workspace, with every tenant in its own isolated database.",
    longDescription:
      "AssetMon tracks everything an IT or operations team is responsible for — hardware, software licences, tickets, maintenance schedules, purchase orders and depreciation — in a single browser-based workspace. Each customer workspace runs in its own isolated PostgreSQL database rather than sharing tables behind a tenant column, so one workspace's data cannot be read from another. Modules switch on and off as a team needs them, and everything is reachable through a documented REST API with signed webhooks.",

    // --- SEO / page copy ----------------------------------------------------
    seoTitle: "AssetMon — Multi-Tenant IT Asset Management Software",
    seoDescription:
      "Track hardware, software licences, tickets, maintenance, procurement and depreciation in one workspace. Database-per-tenant isolation, open REST API, free Starter plan and a 30-day trial.",
    heroHeadline: "IT Asset Management With Real Tenant Isolation",
    heroSubheadline:
      "AssetMon — hardware, licences, tickets, maintenance, procurement and depreciation in a single workspace",
    heroBody: [
      "AssetMon replaces the asset spreadsheet with a system that knows what you own, who has it, what it cost, what it is worth now, and what is due for maintenance next.",
      "Every workspace runs in its own PostgreSQL database rather than sharing tables behind a tenant column, so a missed filter cannot leak one customer's data into another's. Assets carry QR labels you print from the browser and audit from any phone, and every event is captured in an immutable, exportable log.",
    ],
    ctaPrimaryLabel: "Start your 30-day free trial",
    ctaSecondaryLabel: "Talk to us about AssetMon",
    featuresHeading: "What AssetMon Does",
    featuresIntro:
      "One workspace for the whole asset lifecycle — from purchase order to disposal — with each module switched on only if you need it.",
    howItWorksHeading: "How AssetMon Works",
    faqHeading: "AssetMon FAQs",
    closingCtaHeading: "See AssetMon in Action",
    closingCtaBody:
      "Start on the free Starter plan — up to 5 users and 50 assets, no card required — or take a 30-day trial of everything in Business. Paid plans are ₹699 per user per month, billed through Razorpay, with 20% off annual billing.",
    closingCtaLabel: "Start free",

    icon: "Monitor",
    color: "bg-gradient-to-br from-[#008ac1] to-[#00b5ca]",
    accentColor: "#008ac1",
    features: [
      { icon: "LayoutDashboard", title: "A Living Inventory", description: "Custom fields per category, photos, QR-coded labels and an immutable audit trail, with full CSV import and export. The spreadsheet retires." },
      { icon: "Inbox", title: "Service Tickets", description: "Raise a ticket and the asset flips to In Repair on its own. Priority-routed, vendor-aware, and tied to the asset's own history." },
      { icon: "CalendarDays", title: "Preventive Maintenance", description: "Recurring schedules that bump their own next due date, so servicing is something the system remembers rather than someone's calendar." },
      { icon: "TrendingUp", title: "Depreciation Engine", description: "Straight-line and double-declining methods, a fleet-level report and CSV export, so finance and IT work from the same numbers." },
      { icon: "Shield", title: "Software & Licence Compliance", description: "Seats used against seats owned, with expiry alerts and audit-ready records — before a vendor audit rather than during one." },
      { icon: "ShoppingCart", title: "Procurement, End to End", description: "Purchase request to purchase order to receipt, creating the asset record automatically the moment a delivery is booked in." },
    ],
    // Only technologies AssetMon's own pages name.
    techStack: ["PostgreSQL", "Prisma", "REST API", "OpenAPI", "SAML 2.0", "SCIM 2.0"],
    process: [
      { step: 1, title: "Sign Up", description: "Your dedicated database is provisioned in seconds, with sensible default asset categories already seeded." },
      { step: 2, title: "Import or Add Assets", description: "Bring a CSV across with auto-mapping for category, location and department, or add assets by hand. QR labels print from a normal printer." },
      { step: 3, title: "Switch On the Modules You Need", description: "Tickets, maintenance, procurement, depreciation, reservations and audits each toggle on or off in two clicks, and the UI and API stay in sync." },
      { step: 4, title: "Run Your Operation", description: "Scan to audit from any phone, watch discrepancies surface live, and pull any of it out again through the REST API or a CSV export." },
    ],
    // These answers publish as FAQPage structured data. Where AssetMon's own
    // homepage and pricing page answer the same question differently, the more
    // conservative version is used — and where the homepage contradicts the
    // Terms, the Terms win.
    faqs: [
      { question: "How long does setup take?", answer: "About five minutes. You sign up, your tenant database is provisioned, default asset categories are seeded, and you can start adding assets straight away — or import a CSV from your existing spreadsheet in one step." },
      { question: "Can I import my existing inventory?", answer: "Yes. AssetMon imports CSV files with auto-mapping for category, location and department by name, so an existing asset spreadsheet comes across without being rebuilt by hand." },
      { question: "Do I need to install anything?", answer: "No. AssetMon runs entirely in the browser. Asset QR labels print from a regular printer and scan from any phone camera, so there is no app to roll out." },
      { question: "How is my data kept separate from other customers?", answer: "Every workspace runs in its own isolated PostgreSQL database rather than sharing tables behind a tenant column. Data is encrypted with TLS 1.2 or higher in transit and AES-256 at rest, and backups are encrypted with separate keys." },
      { question: "Is there a free plan, and how does the trial work?", answer: "There is a free Starter plan — up to 5 users and 50 assets, with core asset tracking, CSV import and export, and email support. Separately, a 30-day trial opens up everything in the Business plan with no card required. Service tickets, maintenance, procurement, the depreciation engine, the API and SSO are Business features rather than Starter ones." },
      { question: "What happens at the end of the trial?", answer: "Your workspace pauses for 14 days while you decide. Choose a plan and pick up where you left off, or export your data and close the workspace. Exports are available while the workspace is live or paused; after cancellation, workspace data is deleted within 30 days." },
      { question: "How does billing work, and can I cancel anytime?", answer: "Business is ₹699 per user per month, billed through Razorpay, which accepts UPI, netbanking, major debit and credit cards, wallets and e-mandate. Annual billing takes 20% off, and registered nonprofits and student or academic projects get 50%. You can cancel from the dashboard in two clicks and keep access to the end of the billing period." },
    ],
    // Product facts, not metrics. AssetMon's own site advertises a 4.8 rating
    // with 127 reviews and a dashboard full of sample figures; none of it has
    // anything behind it, so none of it is repeated here.
    stats: [
      { label: "Free trial, no card", value: "30 days" },
      { label: "Starter plan, forever", value: "₹0" },
      { label: "Database per tenant", value: "1" },
      { label: "To toggle a module", value: "2 clicks" },
    ],
    supportUrl: "/products/assetmon/support",
    privacyUrl: "/products/assetmon/privacy-policy",
    externalUrl: "https://assetm.cinuteinfomedia.com",
    applicationCategory: "BusinessApplication",
    // The INR prices from AssetMon's own /pricing page. A $8/user/month figure
    // appears on the two /compare pages; it is not published here, and the two
    // are not treated as conversions of each other. Enterprise is quoted on
    // application, so it carries no Offer.
    offers: [
      {
        price: "0",
        priceCurrency: "INR",
        description:
          "Starter — free forever. Up to 5 users and 50 assets, with core asset tracking, CSV import and export, and email support.",
        url: "https://assetm.cinuteinfomedia.com/pricing",
      },
      {
        price: "699",
        priceCurrency: "INR",
        description:
          "Business — ₹699 per user per month. Unlimited users and assets, service tickets, maintenance, procurement, depreciation, licence compliance, reservations, audits, API, webhooks and SSO. 20% off annual billing.",
        url: "https://assetm.cinuteinfomedia.com/pricing",
      },
    ],
  },

  // ==========================================================================
  // TopCareerLive — job board at topcareerlive.com.
  //
  // This entry is deliberately SPARSE, and it should stay that way until the
  // product publishes more. What the site advertises but this page does not
  // repeat, and why:
  //
  //   - The homepage "Trusted by world class companies" band showing Google,
  //     Microsoft, Amazon, Netflix and Stripe logos. The site states no
  //     customer, client or partner relationship with any of them. Reproducing
  //     that association on cinuteinfomedia.com would be the single most
  //     damaging claim on this page.
  //   - Every advertised figure: "5M+ verified professionals", "50K+ active job
  //     seekers", "15K+ careers launched", "1,200+ employer partners", "4.8
  //     rating", "reduce time-to-hire by 40%", "14K+", "SINCE 2014". These are
  //     hardcoded strings, several mutually inconsistent — "15K+" labels two
  //     different metrics on one page, and "since 2014" sits under a 2026
  //     copyright.
  //   - "Seamless ATS integrations with Workday, Greenhouse & more", which
  //     names two third-party products with nothing to support the claim.
  //   - The site's own five FAQ answers, which are one identical block of
  //     boilerplate that answers none of the five questions asked.
  //
  // NO `offers`: no price is published anywhere. /pricing 404s, the footer
  // "Pricing Plans" link is a dead anchor, and the employers FAQ answers "how
  // much does it cost" without naming a figure. An empty `offers` is correct —
  // the JSON-LD then asserts no price at all.
  //
  // NO `privacyUrl`: the site publishes no privacy policy, terms or contact
  // details — /privacy, /terms and /contact all 404. A privacy policy is a
  // binding statement about data handling and is not ours to write on the
  // product's behalf, so the Privacy button is simply absent until one exists.
  // ==========================================================================
  {
    id: "topcareerlive",
    name: "TopCareerLive",
    slug: "topcareerlive",
    tagline: "Job Board for Candidates and Employers",
    description:
      "TopCareerLive is a job board connecting candidates with verified employers: search and apply with filters for location, experience and freshness, or post roles and manage applicants through a hiring pipeline.",
    longDescription:
      "TopCareerLive is a two-sided job platform. Candidates build a profile through a guided four-step onboarding, search roles filtered by location, experience and how recently a job was posted, and apply directly. Employers create a company page, post roles, and filter, rank and track applicants through their own hiring stages, exporting candidate details and CVs as PDFs for offline review.",

    // --- SEO / page copy ----------------------------------------------------
    seoTitle: "TopCareerLive — Job Board for Candidates & Employers",
    seoDescription:
      "Search and apply for roles with filters for location, experience and freshness, or post jobs and manage applicants through a hiring pipeline with CV export.",
    heroHeadline: "A Job Board Built Around the Hiring Pipeline",
    heroSubheadline:
      "TopCareerLive — candidates find roles that fit, employers manage applicants in one place",
    heroBody: [
      "TopCareerLive connects candidates with employers whose listings have been through a verification process, so the search results are roles that actually exist.",
      "Candidates filter by location, experience level and how recently a role was posted, and can have alerts delivered by email or WhatsApp. Employers post roles from a company profile, then filter, rank and move applicants through their own hiring stages, exporting candidate details and CVs as PDFs when they need to review offline.",
    ],
    ctaPrimaryLabel: "Visit TopCareerLive",
    ctaSecondaryLabel: "Talk to us about TopCareerLive",
    featuresHeading: "What TopCareerLive Does",
    featuresIntro:
      "One platform for both sides of a hire — searching and applying on one, posting and shortlisting on the other.",
    howItWorksHeading: "How Hiring Works on TopCareerLive",
    faqHeading: "TopCareerLive FAQs",
    closingCtaHeading: "See TopCareerLive in Action",
    closingCtaBody:
      "Create an account to search and apply, or set up a company profile and post your first role. Talk to us if you would like a walkthrough first.",
    closingCtaLabel: "Visit TopCareerLive",

    icon: "Workflow",
    color: "bg-gradient-to-br from-[#6db75c] to-[#00b5ca]",
    accentColor: "#6db75c",
    features: [
      { icon: "Sparkles", title: "Matching by Skills and Goals", description: "Candidates are connected to roles that fit their skills, experience and career goals rather than to everything that shares a job title." },
      { icon: "UserCheck", title: "Verified Employers Only", description: "Every employer goes through a verification process before their listings appear, so candidates are not sorting real roles from fake ones." },
      { icon: "Search", title: "Search That Narrows Properly", description: "Filter by location, experience level from fresher upwards, and freshness — last 24 hours, last 7 days, last 30 days — plus category and role type." },
      { icon: "LayoutDashboard", title: "Job Management", description: "Full control over live listings. Edit, renew or pause a position in a single click from the employer dashboard." },
      { icon: "Inbox", title: "Applicant Pipeline", description: "A central list of everyone who has applied, tracked through hiring stages you define, so nobody sits unreviewed." },
      { icon: "FileText", title: "CV and Candidate Export", description: "Export candidate details and CVs as PDFs for offline review or to share with a hiring manager who does not use the platform." },
    ],
    // Only capabilities the site itself demonstrates or names.
    techStack: ["Google Sign-In", "Email & WhatsApp alerts", "PDF CV export", "Applicant tracking"],
    process: [
      { step: 1, title: "Create Your Profile", description: "Employers build a company page that candidates can research. Candidates complete a guided four-step profile covering account, employment, education and preferences." },
      { step: 2, title: "Post a Role or Search", description: "Employers write a detailed job description and publish it. Candidates search with filters for location, experience and how recently a role went live." },
      { step: 3, title: "Review Applicants", description: "Filter, rank and move applicants through your own hiring stages from the review dashboard, exporting CVs as PDFs where a reviewer needs them offline." },
    ],
    // Written from what the platform verifiably does. The site's own FAQ
    // answers are a single block of boilerplate repeated under all five
    // questions, answering none of them, so none of it is reproduced.
    faqs: [
      { question: "How do candidates sign up?", answer: "Either with an email address and password, or with a Google account. Registration collects your name, email, mobile number and current location, and lets you upload a CV as a PDF, DOC or DOCX file." },
      { question: "What can I filter job searches by?", answer: "Location, experience level from fresher through senior, and freshness — any time, the last 24 hours, the last 7 days or the last 30 days — alongside category and role type." },
      { question: "How do I hear about new roles?", answer: "Job alerts can be delivered by email and on WhatsApp, so a matching role reaches you without you having to check the board." },
      { question: "What does an employer get?", answer: "A company profile page, job posting with full descriptions, and a review dashboard where applicants can be filtered, ranked and moved through your own hiring stages. Candidate details and CVs export as PDFs." },
      { question: "Can I edit or pause a live job posting?", answer: "Yes. Listings can be edited, renewed or paused in a single click from the employer dashboard, so a role can come down the moment it is filled." },
      { question: "How much does it cost to post a job?", answer: "TopCareerLive does not currently publish pricing for job postings. Get in touch with Cinute InfoMedia and we will put you in contact with the right person." },
    ],
    // Capabilities, not metrics. TopCareerLive advertises a number of figures —
    // active seekers, placements, a satisfaction rating, a time-to-hire
    // reduction — that are hardcoded into the markup and in places contradict
    // each other, so none of them appears here.
    stats: [
      { label: "Hiring process", value: "3 steps" },
      { label: "Guided candidate onboarding", value: "4 steps" },
      { label: "Alerts: email & WhatsApp", value: "2 channels" },
      { label: "CV export format", value: "PDF" },
    ],
    supportUrl: "/products/topcareerlive/support",
    externalUrl: "https://topcareerlive.com",
    applicationCategory: "WebApplication",
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
