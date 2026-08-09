import { Head } from "vite-react-ssg";
import { motion } from "framer-motion";
import { Nav, OrbField, Footer } from "../App";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";
import { FeatureEmoji } from "../lib/SubPagePrimitives";
import brand from "../brand.config";
import { useT } from "../i18n/useT";
import { dict } from "../i18n/dictionary";

const SUPPORT_EMAIL = brand.supportEmail;
const MAILTO = `mailto:${SUPPORT_EMAIL}`;
const CANONICAL = `${brand.siteUrl}/contact/`;

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.brandName,
  url: `${brand.siteUrl}/`,
  logo: `${brand.siteUrl}${brand.logo}`,
  description: brand.tagline,
  email: SUPPORT_EMAIL,
};

const CONTACT_POINT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: CANONICAL,
  mainEntity: {
    "@type": "Organization",
    name: brand.brandName,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: SUPPORT_EMAIL,
      },
      {
        "@type": "ContactPoint",
        contactType: "Sales",
        email: SUPPORT_EMAIL,
      },
    ],
  },
};

function ChannelCard({
  emoji,
  title,
  body,
  ctaLabel,
  ctaHref,
  external,
  accent,
}: {
  emoji: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  external?: boolean;
  accent?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      className={`relative rounded-3xl p-6 sm:p-7 flex flex-col h-full overflow-hidden ${
        accent
          ? "glass ring-2 ring-champ-500/60 shadow-[0_20px_60px_-20px_rgb(var(--brand-500)_/_0.45)]"
          : "glass"
      }`}
    >
      {accent && (
        <div
          aria-hidden
          className="featured-glow absolute -top-16 -right-16 w-48 h-48 rounded-full bg-champ-500/20 blur-3xl pointer-events-none"
        />
      )}
      <div className="relative flex flex-col h-full">
        <div className="mb-3">
          <FeatureEmoji src={emoji} size="md" />
        </div>
        <h3 className="font-clash text-xl font-semibold text-[#213856] mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-5">
          {body}
        </p>
        <a
          href={ctaHref}
          {...(external ? { target: "_blank", rel: "noopener" } : {})}
          className={
            accent
              ? "btn-primary text-sm font-semibold px-4 py-2.5 rounded-xl text-center inline-flex items-center justify-center gap-2"
              : "btn-ghost text-sm font-semibold px-4 py-2.5 rounded-xl text-center inline-flex items-center justify-center gap-2"
          }
        >
          {ctaLabel}
        </a>
      </div>
    </motion.div>
  );
}

export default function ContactPage() {
  const t = useT();
  const title = t(dict.contact.title);
  const meta = t(dict.contact.meta);
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
        <script type="application/ld+json">{JSON.stringify(ORG_JSONLD)}</script>
        <script type="application/ld+json">
          {JSON.stringify(CONTACT_POINT_JSONLD)}
        </script>
      </Head>

      <Nav />
      <div className="orb-stage relative">
        <OrbField />

        {/* ============== HERO ============== */}
        <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16">
          <motion.div
            className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.08)}
          >
            <motion.div
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.2em] text-champ-700 font-bold mb-4"
            >
              {t(dict.contact.eyebrow)}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-grotesk text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#213856] leading-tight tracking-tight mb-6 [text-wrap:balance]"
            >
              {t(dict.contact.h1a)}{" "}
              <span className="grad-text">{t(dict.contact.h1b)}</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              {t(dict.contact.intro)}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href={brand.whatsAppLink}
                target="_blank"
                rel="noopener"
                className="btn-primary pulse-glow w-full sm:w-auto text-base font-semibold px-6 py-3.5 rounded-2xl inline-flex items-center justify-center gap-2"
              >
                {t(dict.contact.waCta)}
              </a>
              <a
                href={MAILTO}
                className="btn-ghost w-full sm:w-auto text-base font-semibold px-6 py-3.5 rounded-2xl inline-flex items-center justify-center gap-2"
              >
                {t(dict.contact.emailCtaPrefix)} {SUPPORT_EMAIL}
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ============== CHANNELS ============== */}
        <section className="relative py-14 sm:py-18">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              variants={staggerContainer(0.08)}
              className="text-center mb-10"
            >
              <motion.div
                variants={fadeUp}
                className="text-xs uppercase tracking-[0.2em] text-champ-700 font-bold mb-3"
              >
                {t(dict.contact.pickChannel)}
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-clash text-3xl sm:text-4xl font-semibold leading-tight text-[#213856]"
              >
                {t(dict.contact.threeWays)}
              </motion.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              variants={staggerContainer(0.06)}
              className="grid md:grid-cols-3 gap-4"
            >
              <ChannelCard
                emoji="speech-balloon.png"
                title={t(dict.contact.waTitle)}
                body={t(dict.contact.waBody)}
                ctaLabel={t(dict.contact.waCta)}
                ctaHref={brand.whatsAppLink}
                accent
                external
              />
              <ChannelCard
                emoji="envelope.png"
                title={t(dict.contact.emailTitle)}
                body={t(dict.contact.emailBody)}
                ctaLabel={SUPPORT_EMAIL}
                ctaHref={MAILTO}
              />
              <ChannelCard
                emoji="rocket.png"
                title={t(dict.contact.appTitle)}
                body={t(dict.contact.appBody)}
                ctaLabel={t(dict.chrome.getStarted)}
                ctaHref={brand.appUrl}
                external
              />
            </motion.div>
          </div>
        </section>

        {/* ============== WHAT TO EXPECT ============== */}
        <section className="relative py-14 sm:py-18 bg-slate-50/40">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              variants={staggerContainer(0.08)}
            >
              <motion.div
                variants={fadeUp}
                className="text-xs uppercase tracking-[0.2em] text-champ-700 font-bold mb-3"
              >
                {t(dict.contact.expect)}
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-clash text-2xl sm:text-3xl font-semibold leading-tight text-[#213856] mb-6"
              >
                {t(dict.contact.expectH2)}
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-3"
              >
                {dict.contact.expectItems.map((item) => (
                  <div key={item.h.en} className="glass rounded-2xl p-4 sm:p-5">
                    <h3 className="font-clash text-base font-semibold text-[#213856] mb-1">
                      {t(item.h)}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t(item.b)}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ============== COMPANY ============== */}
        <section className="relative py-14 sm:py-18">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              variants={staggerContainer(0.08)}
            >
              <motion.div
                variants={fadeUp}
                className="text-xs uppercase tracking-[0.2em] text-champ-700 font-bold mb-3"
              >
                {t(dict.contact.company)}
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-clash text-2xl sm:text-3xl font-semibold leading-tight text-[#213856] mb-6"
              >
                {t(dict.contact.whoYouReach)}
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="glass rounded-3xl p-6 sm:p-7"
              >
                <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                  <div>
                    <dt className="text-slate-400 font-semibold uppercase tracking-wider text-[10px] mb-1">
                      {t(dict.contact.legalName)}
                    </dt>
                    <dd className="text-[#213856] font-semibold">
                      {brand.legalEntity}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-400 font-semibold uppercase tracking-wider text-[10px] mb-1">
                      {t(dict.contact.jurisdiction)}
                    </dt>
                    <dd className="text-[#213856] font-semibold">
                      {brand.legalJurisdiction}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-slate-400 font-semibold uppercase tracking-wider text-[10px] mb-1">
                      {t(dict.contact.emailLabel)}
                    </dt>
                    <dd className="text-[#213856] font-semibold">
                      <a
                        href={MAILTO}
                        className="hover:text-champ-700 transition-colors"
                      >
                        {SUPPORT_EMAIL}
                      </a>
                    </dd>
                  </div>
                </dl>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ============== BOTTOM CTA ============== */}
        <section className="relative py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              className="glass rounded-[28px] p-8 sm:p-12 text-center relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(80% 60% at 50% 0%, rgb(var(--brand-500) / 0.10) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <h2 className="font-clash text-2xl sm:text-3xl font-semibold leading-tight text-[#213856] mb-3 [text-wrap:balance]">
                  {t(dict.contact.bottomH2a)}{" "}
                  <span className="grad-text">{t(dict.contact.bottomH2b)}</span>
                </h2>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                  {t(dict.contact.bottomBody)}
                </p>
                <a
                  href={brand.appUrl}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary inline-flex items-center justify-center gap-2 text-base font-semibold px-6 py-3.5 rounded-2xl"
                >
                  {t(dict.chrome.getStarted)}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
