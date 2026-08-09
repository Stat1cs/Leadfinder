import { Head } from "vite-react-ssg";
import { motion } from "framer-motion";
import { Nav, OrbField, Pricing, FAQSection, FinalCta, Footer } from "../App";
import { fadeUp, popIn, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";
import { SectionHeader, FeatureEmoji } from "../lib/SubPagePrimitives";
import brand from "../brand.config";
import { useCopy } from "../i18n/useCopy";
import { dict } from "../i18n/dictionary";
import { useT } from "../i18n/useT";

const CANONICAL = `${brand.siteUrl}/pricing/`;

export default function PricingPage() {
  const t = useT();
  const copy = useCopy();
  const title = t(dict.pricingPage.title);
  const meta = t(dict.pricingPage.meta);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.brandName,
    url: `${brand.siteUrl}/`,
    logo: `${brand.siteUrl}${brand.logo}`,
    description: copy.meta.tagline,
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: brand.brandName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: meta,
    url: CANONICAL,
    inLanguage: ["ar", "en"],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={meta} />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={meta} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          property="og:image"
          content={`${brand.siteUrl}${brand.ogImage}`}
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta name="twitter:description" content={meta} />
        <meta
          name="twitter:image"
          content={`${brand.siteUrl}${brand.ogImage}`}
        />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">
          {JSON.stringify(softwareJsonLd)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      <Nav />

      <div className="orb-stage relative">
        <OrbField />

        {/* ============== HERO ============== */}
        <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16">
          <motion.div
            className="relative max-w-5xl mx-auto px-5 sm:px-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.08)}
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-5">
              <FeatureEmoji src="money-wings.png" size="lg" />
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-grotesk text-center text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#213856] leading-tight tracking-tight mb-6 [text-wrap:balance]"
            >
              {copy.pricing.heading}{" "}
              <span className="grad-text">{copy.pricing.eyebrow}</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-center text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-2 whitespace-pre-line"
            >
              {copy.pricing.subheading}
              {"\n"}
              {copy.pricing.note}
            </motion.p>
          </motion.div>
        </section>

        {/* ============== EXISTING PRICING COMPONENT ============== */}
        <Pricing />

        {/* ============== WHAT'S INCLUDED ============== */}
        <section className="relative py-16 sm:py-20 bg-slate-50/40">
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeader
              eyebrow={t(dict.pricingPage.sectionEyebrow)}
              emoji="magnifying-glass.png"
              title={t(dict.pricingPage.sectionTitle)}
              titleAccent={t(dict.pricingPage.sectionAccent)}
              sub={t(dict.pricingPage.sectionSub)}
              align="center"
              maxWidth="max-w-3xl"
            />

            <div className="grid md:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                className="glass rounded-3xl p-6 sm:p-7"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FeatureEmoji src="high-voltage.png" size="sm" />
                  <div className="text-xs uppercase tracking-wider text-champ-700 font-bold">
                    {t(dict.pricingPage.includedLabel)}
                  </div>
                </div>
                <h3 className="font-clash text-xl font-semibold text-[#213856] mb-5">
                  {t(dict.pricingPage.includedHeading)}
                </h3>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_ONCE}
                  variants={staggerContainer(0.04)}
                  className="space-y-3"
                >
                  {dict.pricingPage.included.map((item) => (
                    <motion.li
                      key={item.t.en}
                      variants={popIn}
                      className="flex items-start gap-3"
                    >
                      <span className="accent-glow shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-champ-500 text-white shadow-md shadow-champ-500/30 mt-0.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-clash text-sm font-semibold text-[#213856] mb-0.5">
                          {t(item.t)}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {t(item.b)}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ delay: 0.05 }}
                className="glass rounded-3xl p-6 sm:p-7"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FeatureEmoji src="link.png" size="sm" />
                  <div className="text-xs uppercase tracking-wider text-champ-700 font-bold">
                    {t(dict.pricingPage.modelLabel)}
                  </div>
                </div>
                <h3 className="font-clash text-xl font-semibold text-[#213856] mb-5">
                  {t(dict.pricingPage.modelHeading)}
                </h3>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_ONCE}
                  variants={staggerContainer(0.04)}
                  className="space-y-3"
                >
                  {dict.pricingPage.scale.map((item) => (
                    <motion.li
                      key={item.t.en}
                      variants={popIn}
                      className="flex items-start gap-3"
                    >
                      <span className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-500 mt-0.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-clash text-sm font-semibold text-[#213856] mb-0.5">
                          {t(item.t)}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {t(item.b)}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============== PRICING FAQ ============== */}
        <FAQSection />

        {/* ============== FINAL CTA ============== */}
        <FinalCta />

        {/* ============== FOOTER ============== */}
        <Footer />
      </div>
    </>
  );
}
