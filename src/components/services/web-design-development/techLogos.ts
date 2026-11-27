// Tech Stack logos on the website-type pages without white backgrounds (user, 26 Nov
// 2026: "remove the white background from logos"). A logo whose image had a white
// background baked in, or a lot of empty padding, has a cleaned, trimmed copy in
// /images/techstack_logos/no-bg/ (the originals stay as they are for the other pages).
// invert "dark": a dark logo that would vanish on the dark-mode tile, so it is shown
// inverted there (hue kept). Logos not listed are used as they are.
export type TechLogo = { src: string; invert?: "dark" };

const cleaned: Record<string, TechLogo> = {
    "/images/ai_automation_logos/adobe-logo.png": { src: "/images/techstack_logos/no-bg/adobe-logo.webp" },
    "/images/ai_automation_logos/hubspot-logo.png": { src: "/images/techstack_logos/no-bg/hubspot-logo.webp" },
    "/images/ai_automation_logos/salesforce-logo.png": { src: "/images/techstack_logos/no-bg/salesforce-logo.webp" },
    "/images/ai_automation_logos/sap-logo.webp": { src: "/images/techstack_logos/no-bg/sap-logo.webp" },
    "/images/techstack_logos/Adyen-Logo.png": { src: "/images/techstack_logos/no-bg/Adyen-Logo.webp" },
    "/images/techstack_logos/algolia-logo.webp": { src: "/images/techstack_logos/no-bg/algolia-logo.webp" },
    "/images/techstack_logos/aws-logo.png": { src: "/images/techstack_logos/no-bg/aws-logo.webp" },
    "/images/techstack_logos/bigcommerce-logo.png": { src: "/images/techstack_logos/no-bg/bigcommerce-logo.webp", invert: "dark" },
    "/images/techstack_logos/chainlink-link-logo.png": { src: "/images/techstack_logos/no-bg/chainlink-link-logo.webp" },
    "/images/techstack_logos/clerk-logo.png": { src: "/images/techstack_logos/no-bg/clerk-logo.webp", invert: "dark" },
    "/images/techstack_logos/Cloudflare-logo.webp": { src: "/images/techstack_logos/no-bg/Cloudflare-logo.webp" },
    "/images/techstack_logos/django-logo.svg": { src: "/images/techstack_logos/django-logo.svg", invert: "dark" },
    "/images/techstack_logos/docker-logo.svg": { src: "/images/techstack_logos/no-bg/docker-logo.webp" },
    "/images/techstack_logos/Ethersjs-logo.webp": { src: "/images/techstack_logos/Ethersjs-logo.webp", invert: "dark" },
    "/images/techstack_logos/Ghost-logo.jpg": { src: "/images/techstack_logos/no-bg/Ghost-logo.webp" },
    "/images/techstack_logos/go-logo-new.png": { src: "/images/techstack_logos/no-bg/go-logo-new.webp" },
    "/images/techstack_logos/Google-Trends-logo.jpg": { src: "/images/techstack_logos/no-bg/Google-Trends-logo.webp" },
    "/images/techstack_logos/HLSjs-logo.png": { src: "/images/techstack_logos/no-bg/HLSjs-logo.webp" },
    "/images/techstack_logos/jwt-logo.webp": { src: "/images/techstack_logos/no-bg/jwt-logo.webp" },
    "/images/techstack_logos/Klaviyo-logo.png": { src: "/images/techstack_logos/no-bg/Klaviyo-logo.webp", invert: "dark" },
    "/images/techstack_logos/Matterport-logo.png": { src: "/images/techstack_logos/no-bg/Matterport-logo.webp" },
    "/images/techstack_logos/mongodb-logo.svg": { src: "/images/techstack_logos/no-bg/mongodb-logo.webp" },
    "/images/techstack_logos/mux-logo.png": { src: "/images/techstack_logos/no-bg/mux-logo.webp" },
    "/images/techstack_logos/nuxt-logo.png": { src: "/images/techstack_logos/no-bg/nuxt-logo.webp" },
    "/images/techstack_logos/OAuth2-logo.jpg": { src: "/images/techstack_logos/no-bg/OAuth2-logo.webp" },
    "/images/techstack_logos/Openstreetmap-logo.png": { src: "/images/techstack_logos/no-bg/Openstreetmap-logo.webp" },
    "/images/techstack_logos/paypal-logo.png": { src: "/images/techstack_logos/no-bg/paypal-logo.webp" },
    "/images/techstack_logos/plaid-logo-new.png": { src: "/images/techstack_logos/no-bg/plaid-logo-new.webp" },
    "/images/techstack_logos/RESO-logo.png": { src: "/images/techstack_logos/RESO-logo.png", invert: "dark" },
    // same logo as the AI-automation one; one copy (file names that differ only in case clash on Windows)
    "/images/techstack_logos/Salesforce-logo.png": { src: "/images/techstack_logos/no-bg/salesforce-logo.webp" },
    "/images/techstack_logos/Sanity-square-logo.png": { src: "/images/techstack_logos/no-bg/Sanity-square-logo.webp" },
    "/images/techstack_logos/Segment-logo.png": { src: "/images/techstack_logos/no-bg/Segment-logo.webp" },
    "/images/techstack_logos/SendGrid-logo.png": { src: "/images/techstack_logos/no-bg/SendGrid-logo.webp" },
    "/images/techstack_logos/sentry-logo.svg": { src: "/images/techstack_logos/sentry-logo.svg", invert: "dark" },
    "/images/techstack_logos/Shaka-Player-logo.png": { src: "/images/techstack_logos/no-bg/Shaka-Player-logo.webp" },
    "/images/techstack_logos/Shippo-logo.png": { src: "/images/techstack_logos/no-bg/Shippo-logo.webp" },
    "/images/techstack_logos/ShipStation-logo.png": { src: "/images/techstack_logos/no-bg/ShipStation-logo.webp" },
    "/images/techstack_logos/Socket-io-logo.png": { src: "/images/techstack_logos/no-bg/Socket-io-logo.webp" },
    "/images/techstack_logos/solidity-logo.png": { src: "/images/techstack_logos/no-bg/solidity-logo.webp" },
    "/images/techstack_logos/Spreedly-logo.webp": { src: "/images/techstack_logos/no-bg/Spreedly-logo.webp" },
    "/images/techstack_logos/Square-logo.png": { src: "/images/techstack_logos/no-bg/Square-logo.webp" },
    "/images/techstack_logos/Stripe-logo.png": { src: "/images/techstack_logos/no-bg/Stripe-logo.webp" },
    "/images/techstack_logos/Svelte-Logo.png": { src: "/images/techstack_logos/no-bg/Svelte-Logo.webp" },
    "/images/techstack_logos/THEOplayer-logo.webp": { src: "/images/techstack_logos/no-bg/THEOplayer-logo.webp" },
    "/images/techstack_logos/timescaledb-logo.webp": { src: "/images/techstack_logos/no-bg/timescaledb-logo.webp" },
    "/images/techstack_logos/Vimeo_Logo.png": { src: "/images/techstack_logos/no-bg/Vimeo_Logo.webp" },
    "/images/techstack_logos/vwo-logo.svg": { src: "/images/techstack_logos/no-bg/vwo-logo.webp" },
    "/images/techstack_logos/wagmi.svg": { src: "/images/techstack_logos/no-bg/wagmi.webp" },
    "/images/techstack_logos/wowza-logo.webp": { src: "/images/techstack_logos/no-bg/wowza-logo.webp" },
    "/images/techstack_logos/yapily-logo.svg": { src: "/images/techstack_logos/yapily-logo.svg", invert: "dark" },
    "/images/techstack_logos/Zillow-API-logo.png": { src: "/images/techstack_logos/no-bg/Zillow-API-logo.webp" },
};

export const techLogo = (path: string): TechLogo => cleaned[path] ?? { src: path };
