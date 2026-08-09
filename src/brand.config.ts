/* =============================================================================
 *  brand.config.ts — LeadFinder (leadfinder.om) site content & branding
 * =============================================================================
 *  Identity, URLs, assets, theme/layout, and English fallbacks for sections
 *  still read from this file. Bilingual marketing copy lives in
 *  src/i18n/dictionary.ts. Product of Dynamic Business Solution (DBS.om).
 * ========================================================================== */

import type { ThemeName, ThemeColors } from "./themes";
import type { HomeLayoutName } from "./homeLayouts";

export interface BrandConfig {
  /* ---- Visual variant ----------------------------------------------------
   * The template ships with SIX complete looks — pick one word and the whole
   * site changes fonts, colours, card style and background:
   *   "original" — frosted glass + drifting grid, green, Space Grotesk
   *   "nebula"   — indigo/violet, solid elevated cards, Sora
   *   "bloom"    — rose serif (Fraunces), soft paper cards, boutique feel
   *   "ember"    — amber/orange, flat bordered cards, Bricolage Grotesque
   *   "tidal"    — sky/cyan, crisp minimal hairline cards, Manrope
   *   "mono"     — black & white minimalism, Inter (the Linear/Notion look)
   * Preview each by changing this value and reloading. Details: src/themes.ts */
  theme: ThemeName;

  /* ---- Home-page layout ---------------------------------------------------
   * Which sections the home page shows, in what order, and how it opens:
   *   "classic" — big hero + animated inbox, full story (the default)
   *   "split"   — copy left / live chat demo right, features first, leaner
   *   "vsl"     — video up top (hero.videoId), pricing early; for paid traffic
   * Layouts combine freely with any theme. Details: src/homeLayouts.ts */
  homeLayout: HomeLayoutName;

  /* ---- Identity ---------------------------------------------------------- */
  brandName: string;
  /** One-line product descriptor used in meta + footer. */
  tagline: string;
  /** Bare domain, no protocol. e.g. "yourbrand.com" */
  domain: string;
  /** Full canonical site URL, with protocol, no trailing slash. */
  siteUrl: string;
  /** Where "Log in" / dashboard CTAs point. */
  appUrl: string;
  supportEmail: string;
  /** Help / knowledge-base URL. Use appUrl or a docs subdomain. */
  helpUrl: string;
  /** Public WhatsApp deep-link (or any contact link) for the floating button. */
  whatsAppLink: string;

  /* ---- Legal (REPLACE — and have a lawyer review the Terms/Privacy) ------ */
  legalEntity: string;
  legalJurisdiction: string;
  legalEffectiveDate: string;

  /* ---- Infrastructure & sub-processors ----------------------------------
   * Pre-filled because the product runs on shared hosting/infrastructure that
   * is the same for everyone — so the hosting location and sub-processor list
   * are accurate out of the box and feed the Terms + Privacy pages directly.
   * Review with your lawyer and update if your setup differs. */
  infrastructure: {
    hostingRegion: string;
    hostingSummary: string;
    subProcessors: Array<{ name: string; purpose: string; location: string }>;
    transfersNote: string;
    retention: { conversations: string; backups: string; logs: string };
  };

  /* ---- Assets (paths under /public) -------------------------------------- */
  logo: string;
  logoAlt: string;
  favicon: string;
  ogImage: string;

  /* ---- Brand colours (optional) ------------------------------------------
   * null = use the accent colours that ship with your chosen theme (each
   * theme has its own — that's what makes the variants look different).
   * To use YOUR brand colour instead, set the six stops: they feed Tailwind's
   * `champ-*` classes and every gradient/button/accent in styles.css. Keep
   * them as a coherent light→dark ramp of ONE hue. Works with any theme. */
  colors: ThemeColors | null;

  /* ---- Navigation -------------------------------------------------------- */
  nav: {
    links: Array<{ href: string; label: string }>;
    /** Shows a "Themes" menu in the nav that live-previews every look
     *  (via ?theme= links — nothing changes until you set `theme` above).
     *  Handy while choosing a variant; set to false before going live. */
    themePicker: boolean;
    ctaLabel: string;
    ctaHref: string;
    loginLabel: string;
    loginHref: string;
  };

  /* ---- Channels shown as pills in the hero ------------------------------- */
  channels: Array<{ key: ChannelKey; label: string; soon?: boolean }>;

  /* ---- Hero -------------------------------------------------------------- */
  hero: {
    /** Optional small pill above the headline. Set to null to hide. */
    badge: string | null;
    /** Headline renders as: `${titleA} <gradient>${titleHighlight}</gradient> ${titleB}` */
    titleA: string;
    titleHighlight: string;
    titleB: string;
    subhead: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string } | null;
    /** YouTube video ID for the "vsl" layout's hero (the part after
     *  watch?v= — e.g. "dQw4w9WgXcQ"). null = the animated inbox showcase
     *  is shown instead until you add your video. */
    videoId: string | null;
    /** Four small stat chips. Keep these CAPABILITY facts, not customer-result
     *  claims (e.g. "24/7", "<30s reply") so they stay true for everyone. */
    kpis: Array<{ value: string; label: string; highlight?: boolean }>;
  };

  /* ---- "AI sales agent vs regular chatbot" comparison -------------------- */
  comparison: {
    eyebrow: string;
    heading: string;
    youLabel: string;
    themLabel: string;
    rows: Array<[string, Cell, Cell]>;
  };

  /* ---- How it works ------------------------------------------------------ */
  howItWorks: {
    eyebrow: string;
    heading: string;
    steps: Array<{ title: string; body: string }>;
  };

  /* ---- Feature bento ----------------------------------------------------- */
  features: {
    eyebrow: string;
    heading: string;
    /** `emoji` is a Fluent emoji filename that exists in /public/emoji
     *  (e.g. "brain.png") — rendered as a crisp animated-style image. A raw
     *  emoji character ("🧠") also works as a plain-text fallback. */
    items: Array<{ emoji: string; title: string; body: string }>;
  };

  /* ---- Problem / pain (the "problem" section) -----------------------------
   * The agitation block long-form funnels open with. Keep the claims
   * qualitative truths about slow replies, not invented statistics. */
  problem: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: Array<{ emoji: string; title: string; body: string }>;
  };

  /* ---- Live conversation demo (the "conversation" section) ---------------
   * Copy + checklist next to an animated deal-closing chat (the demo
   * conversation itself ships with the template). */
  conversation: {
    eyebrow: string;
    heading: string;
    sub: string;
    bullets: string[];
  };

  /* ---- Risk reversal (the "guarantee" section) ---------------------------
   * Why starting is safe. Defaults are capability-facts; if you add a
   * money-back promise here, make sure YOU actually honour it. */
  guarantee: {
    eyebrow: string;
    heading: string;
    points: Array<{ emoji: string; title: string; body: string }>;
  };

  /* ---- Security & privacy strip (the "trust" section) --------------------
   * Should stay consistent with the `infrastructure` block above — it's the
   * marketing-page version of the same facts. */
  trust: {
    eyebrow: string;
    heading: string;
    items: Array<{ emoji: string; title: string; body: string }>;
  };

  /* ---- Use cases / industries (the "useCases" section) -------------------
   * Who the product is for. Same emoji rule as features: a Fluent emoji
   * filename from /public/emoji, or a raw emoji character as fallback. */
  useCases: {
    eyebrow: string;
    heading: string;
    items: Array<{ emoji: string; title: string; body: string }>;
  };

  /* ---- Integrations strip (the "integrations" section) -------------------
   * Channels come from `channels` above automatically; `tools` lists what
   * else the product plugs into. Keep every entry TRUE for your offer. */
  integrations: {
    eyebrow: string;
    heading: string;
    sub: string;
    tools: string[];
  };

  /* ---- Testimonials (SHIP EMPTY — add only your OWN, with permission) ----
   * Leave the array empty and the whole section hides itself. */
  testimonials: {
    eyebrow: string;
    heading: string;
    items: Array<{
      quote: string;
      name: string;
      title: string;
      avatar?: string; // path under /public, optional
    }>;
  };

  /* ---- Pricing ----------------------------------------------------------- */
  pricing: {
    eyebrow: string;
    heading: string;
    subheading: string;
    note: string;
    tiers: Array<{
      name: string;
      price: string; // e.g. "$97" or "Custom"
      cadence: string; // e.g. "/mo"
      blurb: string;
      features: string[];
      cta: { label: string; href: string };
      featured?: boolean;
    }>;
  };

  /* ---- FAQ --------------------------------------------------------------- */
  faq: {
    heading: string;
    items: Array<[string, string]>;
  };

  /* ---- Final CTA --------------------------------------------------------- */
  finalCta: {
    headline: string;
    subhead: string;
    ctaLabel: string;
    ctaHref: string;
    trustLine: string[];
  };

  /* ---- Footer ------------------------------------------------------------ */
  footer: {
    tagline: string;
    columns: Array<{
      title: string;
      links: Array<{ href: string; label: string }>;
    }>;
    social: Array<{ label: string; href: string }>;
    copyright: string;
  };
}

export type ChannelKey =
  | "whatsapp"
  | "instagram"
  | "messenger"
  | "imessage"
  | "telegram"
  | "webchat"
  | "sms";
export type Cell = true | false | "partial";

/* =============================================================================
 *  YOUR CONFIG  —  edit everything below this line
 * ========================================================================== */
export const brand: BrandConfig = {
  /* Pick your look:
   * "original" | "nebula" | "bloom" | "ember" | "tidal" | "mono" */
  theme: "tidal",

  /* Pick your home-page layout: "classic" | "split" | "vsl" */
  homeLayout: "vsl",

  brandName: "LeadFinder",
  tagline:
    "Your digital compass towards your prospects.",
  domain: "leadfinder.om",
  siteUrl: "https://leadfinder.om",
  appUrl: "https://app.leadfinder.om",
  supportEmail: "support@leadfinder.om",
  helpUrl: "https://app.leadfinder.om",
  // Placeholder number — replace before go-live.
  whatsAppLink:
    "https://wa.me/00000000000?text=Hi%20LeadFinder%20%E2%80%94%20I%20have%20a%20question.",

  legalEntity: "Dynamic Business Solution",
  legalJurisdiction: "Sultanate of Oman",
  legalEffectiveDate: "1 January 2026",

  infrastructure: {
    hostingRegion: "the European Union",
    hostingSummary:
      "The service and your data are hosted on secure dedicated servers and cloud infrastructure located in the European Union (Germany, and the EU region of our cloud provider). Data is encrypted in transit using TLS, and sensitive credentials and account tokens are encrypted at rest.",
    subProcessors: [
      {
        name: "Cloud & server hosting (e.g. Hetzner, Google Cloud — EU regions)",
        purpose: "Application hosting, databases and encrypted backups",
        location: "European Union",
      },
      {
        name: "Payment processor (e.g. Stripe)",
        purpose: "Billing and fraud prevention",
        location: "EU / United States",
      },
      {
        name: "Email & analytics tools",
        purpose:
          "Transactional and marketing email, and product-usage analytics",
        location: "EU / United States",
      },
    ],
    transfersNote:
      "Our infrastructure is primarily located in the European Union. Where a sub-processor (such as a payment or email provider) processes data outside the EU, we rely on the European Commission's Standard Contractual Clauses or another lawful transfer mechanism.",
    retention: {
      conversations:
        "Saved searches, lead lists and account data are retained for the life of your account and deleted from active systems within 90 days of account closure, unless a longer period is required by law.",
      backups:
        "Encrypted backups are retained on a rolling basis for up to 30 days.",
      logs: "Server logs and security events are retained for up to 90 days.",
    },
  },

  logo: "/brand/leadfinder_logo.svg",
  logoAlt: "LeadFinder",
  favicon: "/brand/favicon.png",
  ogImage: "/brand/og.svg",

  /* null = Tidal theme accent ramp (MVP). LF hull/gold palette deferred. */
  colors: null,

  nav: {
    links: [
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
    ],
    themePicker: false,
    ctaLabel: "See plans",
    ctaHref: "/#pricing",
    loginLabel: "Log in",
    loginHref: "https://app.leadfinder.om",
  },

  // LeadFinder is not a messaging-channel product — hide hero channel pills.
  channels: [],

  hero: {
    badge: "Early access is open",
    titleA: "Your list doesn't exist yet.",
    titleHighlight: "Type,",
    titleB: "and we sail for it.",
    subhead:
      "Type a niche and a location. LeadFinder opens each business's own website right now, live, and takes the email published on it today. Businesses that have closed never reach your list.",
    primaryCta: {
      label: "Start finding leads",
      href: "https://app.leadfinder.om",
    },
    secondaryCta: { label: "See how it works", href: "/#how-it-works" },
    videoId: null,
    kpis: [
      { value: "Live", label: "site check at search time", highlight: true },
      { value: "Pay", label: "per lead with real contact details" },
      { value: "Active", label: "businesses only" },
      { value: "Early", label: "access — pricing TBA" },
    ],
  },

  comparison: {
    eyebrow: "The difference",
    heading: "A static file drifts. A live check does not.",
    youLabel: "LeadFinder",
    themLabel: "A resold list",
    rows: [
      ["Website checked at the moment of search", true, false],
      ["Inactive or closed firms filtered out", true, false],
      ["Results assembled for your search, not a shared file", true, false],
      ["Email taken from the live page", true, false],
      ["Pay only for leads returned, with a credit balance you control", true, false],
      ["Clear monthly plans — Scout or Captain", true, false],
    ],
  },

  howItWorks: {
    eyebrow: "How it works",
    heading: "Type a niche. Watch the list build itself.",
    steps: [
      {
        title: "Search",
        body: 'Type a niche and a location, like "dental clinics in Muscat." LeadFinder finds the matching local businesses with their live profile data: name, website, phone, address, category, rating, review count.',
      },
      {
        title: "Verify live site",
        body: "LeadFinder opens each business's actual website right now, live, not a cached snapshot from months ago, and confirms it's an active business before it reaches your results.",
      },
      {
        title: "Get real emails",
        body: "The email comes off the live page LeadFinder just checked. Found today, not scraped into a list two years ago.",
      },
    ],
  },

  features: {
    eyebrow: "Built on live data",
    heading: "Everything between a niche and a verified email.",
    items: [
      {
        emoji: "magnifying-glass.png",
        title: "Local business search",
        body: "Search by niche and location and get real local business profiles: name, website, phone, address, category, rating, review count.",
      },
      {
        emoji: "globe.png",
        title: "Live-site verification",
        body: "Before a lead reaches your results, LeadFinder opens the business's actual website right now — not a cached snapshot or a years-old directory listing.",
      },
      {
        emoji: "envelope.png",
        title: "Verified email enrichment",
        body: "The email is taken straight off that live page. Verified on-site at the moment you searched, not bought from a data broker.",
      },
      {
        emoji: "shield.png",
        title: "Active businesses only",
        body: "If a site is down, parked, or the business has closed, it never reaches your results. Every lead is tied to a business open right now.",
      },
      {
        emoji: "books.png",
        title: "Saved searches and lists",
        body: "Every search is saved with its results. Star the leads worth chasing and build lists that stay yours.",
      },
      {
        emoji: "coin.png",
        title: "Pay only for what you find",
        body: "Priced per lead with real contact details, not per seat. You cap every search before it runs. A lead with no email, phone, or social profile costs nothing.",
      },
    ],
  },

  problem: {
    eyebrow: "The problem with lead lists",
    heading:
      "A bought list is an old photograph. The sea has changed since it was taken.",
    sub: "Scraped once, sold many times, and nobody went back to check whether any of it is still true. LeadFinder skips all of it — every search runs live, straight off the business's own website.",
    items: [
      {
        emoji: "package.png",
        title: "Rented out to everyone in your niche",
        body: "A bought list isn't yours. The same rows are resold to every agency and freelancer chasing that exact niche and city.",
      },
      {
        emoji: "hourglass-done.png",
        title: "Nobody checked whether the business still exists",
        body: "Static exports don't know when a business closed, changed hands, or let its domain lapse. You find out the hard way, contact by contact.",
      },
      {
        emoji: "envelope.png",
        title: "Contact details nobody verified today",
        body: "Guessed email formats and years-old exports mean a chunk of any list is dead before you start working it.",
      },
    ],
  },

  conversation: {
    eyebrow: "Live verification",
    heading: "Found on their site today. Not a purchased list.",
    sub: "LeadFinder opens each business's website at the moment you search and takes the contact email from the page it's published on.",
    bullets: [
      "Checked live — not a cached snapshot",
      "Closed and parked sites never reach your list",
      "Pay only when a real contact detail is found",
    ],
  },

  guarantee: {
    eyebrow: "AI-powered Communication Channel",
    heading: "We chart the course. You make the crossing.",
    points: [
      {
        emoji: "magnifying-glass.png",
        title: "Verified prospects",
        body: "LeadFinder searches by niche and location and checks the live site — so you know the business is active and has a real contact path.",
      },
      {
        emoji: "speech-balloon.png",
        title: "From list to conversation",
        body: "On Captain, the AI-powered Communication Channel turns contacts into conversations: instant replies, qualification, and appointment booking.",
      },
      {
        emoji: "handshake.png",
        title: "One path to growth",
        body: "Search and lock your list in LeadFinder, then reply and book through your AI-powered communication channel — without juggling separate tools.",
      },
    ],
  },

  trust: {
    eyebrow: "Security & privacy",
    heading: "Your searches and lists, handled properly.",
    items: [
      {
        emoji: "globe.png",
        title: "EU hosting",
        body: "The service and your account data run on secure servers located in the European Union.",
      },
      {
        emoji: "key.png",
        title: "Encrypted",
        body: "Data is encrypted in transit; credentials and account tokens are encrypted at rest.",
      },
      {
        emoji: "balance-scale.png",
        title: "GDPR-ready",
        body: "Clear retention rules, EU standard contractual clauses for transfers and a transparent sub-processor list.",
      },
      {
        emoji: "shield.png",
        title: "You're in control",
        body: "Delete or export your account data when you need to — the tooling is built in.",
      },
    ],
  },

  useCases: {
    eyebrow: "Who it serves",
    heading: "For those who sell to businesses with a local footprint.",
    items: [
      {
        emoji: "briefcase.png",
        title: "Agencies & freelancers",
        body: "Assemble a fresh prospect set for a new niche or city without a data subscription you barely open.",
      },
      {
        emoji: "hammer-and-wrench.png",
        title: "Local service firms",
        body: "Locate firms in your area to partner with or sell to, confirmed open as of today.",
      },
      {
        emoji: "handshake.png",
        title: "Recruiters & staffing",
        body: "Search by category and place, then obtain a verified path to the right contact at each firm.",
      },
    ],
  },

  integrations: {
    eyebrow: "What you get",
    heading: "From niche to verified contact — in one flow.",
    sub: "Search, live-site check, verified email, saved lists. No seats. No purchased spreadsheets.",
    tools: [
      "Niche + location search",
      "Live website check",
      "Verified emails",
      "Saved searches",
      "Starred lists",
      "Spend caps",
    ],
  },

  testimonials: {
    eyebrow: "From early users",
    heading: "What people say.",
    // ⚠️ SHIPS EMPTY ON PURPOSE. Add only testimonials you have permission to
    // use. While this array is empty, the section is hidden automatically.
    items: [],
  },

  pricing: {
    eyebrow: "Plans & credits",
    heading: "Monthly plans. Credits included. Top up when you need more.",
    subheading:
      "Each monthly subscription includes credits for that cycle. Past your limit, buy more at 0.060 OMR per credit while your subscription continues.",
    note: "Lead estimates are approximate and vary by niche and location. Credits are used when a search runs.",
    tiers: [
      {
        name: "Scout",
        price: "10 OMR",
        cadence: "/mo",
        blurb: "100 credits included",
        features: [
          "400 leads approx",
          "Live-site check and verified email",
          "Saved searches and lists",
          "Email support",
          "Extra credits at 0.060 OMR each",
        ],
        cta: {
          label: "Start with Scout",
          href: "https://app.dmchamp.com/v1/checkout?id=sDHgSWkA7zaNUPIWq55NnQbLnHv1&tierIndex=3",
        },
        featured: false,
      },
      {
        name: "Captain",
        price: "30 OMR",
        cadence: "/mo",
        blurb: "250 credits included + AI-powered Communication Channel",
        features: [
          "1000 leads approx",
          "Live-site check and verified email",
          "Saved searches and lists",
          "AI-powered Communication Channel\n(email - whatsapp - instagram)",
          "3 channels",
          "Reply to comments",
          "Image, voice-note & document understanding",
          "AI appointment booking",
          "Real-time web search",
          "3 team seats · unlimited contacts",
          "Unlimited campaigns (in & out) · automatic follow-ups",
          "50 AI responses / chat",
          "Webhooks · 50K campaign context",
          "Extra credits at 0.060 OMR each",
        ],
        cta: {
          label: "Start with Captain",
          href: "https://app.dmchamp.com/v1/checkout?id=sDHgSWkA7zaNUPIWq55NnQbLnHv1&tierIndex=4",
        },
        featured: true,
      },
    ],
  },

  faq: {
    heading: "Questions people actually ask.",
    items: [
      [
        "Where does the business data come from?",
        "LeadFinder searches live local business listings by niche and location: name, website, phone, address, category, rating and review count. Every search runs at the moment you hit the button, so results reflect what's out there right now, not a database from last year.",
      ],
      [
        "Are the emails actually verified?",
        "Yes. LeadFinder opens each business's own website at the moment you search and takes the contact email from the page it's published on. Nothing here comes from a purchased list, and you know exactly which live page each email came from.",
      ],
      [
        "What if a business's website is down or they've closed?",
        "Then it doesn't make your list. LeadFinder only surfaces businesses whose website is live and reachable at the moment you search, so you're not chasing a contact at a business that already shut down.",
      ],
      [
        "Does it work outside Oman?",
        "LeadFinder works in most countries. Coverage and result density vary by region, so it's worth trying your target location first.",
      ],
      [
        "Where do my leads live?",
        "In LeadFinder. Every search is saved with its results, and you can star the leads you care about into lists. Your leads and lists stay in your account, ready whenever you are.",
      ],
      [
        "What does it cost?",
        "LeadFinder is subscription-based. Scout is 10 OMR/mo with 100 credits (~400 leads). Captain is 30 OMR/mo with 250 credits (~1000 leads) plus the AI-powered Communication Channel. Extra credits are 0.060 OMR each while your subscription continues.",
      ],
    ],
  },

  finalCta: {
    headline: "Cross oceans of data. Arrive at the client.",
    subhead:
      "Choose Scout or Captain. Start with credits included in your monthly plan, buy more when you need them — or add AI-powered Communication Channel on Captain to reach prospects after you find them.",
    ctaLabel: "See plans",
    ctaHref: "/#pricing",
    trustLine: [],
  },

  footer: {
    tagline:
      "Your digital compass towards your prospects.",
    columns: [
      {
        title: "Product",
        links: [
          { href: "/#how-it-works", label: "How it works" },
          { href: "/#pricing", label: "Pricing" },
          { href: "/#faq", label: "FAQ" },
        ],
      },
      {
        title: "Company",
        links: [{ href: "/contact", label: "Contact" }],
      },
      {
        title: "Legal",
        links: [
          { href: "/terms", label: "Terms" },
          { href: "/privacy-policy", label: "Privacy Policy" },
        ],
      },
    ],
    social: [],
    copyright: "© 2026 LeadFinder. All rights reserved.",
  },
};

export default brand;
