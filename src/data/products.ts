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
  privacyUrl: string;
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

    icon: "MessageCircle",
    color: "bg-gradient-to-br from-[#FF6B35] to-[#F72585]",
    accentColor: "#F72585",
    features: [
      { icon: "Sparkles", title: "AI-Powered Comment Generation", description: "Analyzes post context — text, images, hashtags, and sentiment — to generate relevant, natural-sounding comments and replies in one click." },
      { icon: "Palette", title: "Custom Tone AI Comment Styles", description: "Choose Bold, Professional, Funny, Supportive, Witty, Casual, or Thought-Provoking tones, or create your own custom tone preset for consistent brand voice." },
      { icon: "MousePointerClick", title: "One-Click AI Comment Toolbar", description: "Click any comment box on a supported platform and the ChimeGenius AI toolbar appears automatically — no tab-switching required." },
      { icon: "PenLine", title: "Editable AI-Generated Replies", description: "Every AI comment is fully editable. Refine the suggestion, add a personal touch, or rewrite it entirely before posting." },
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
