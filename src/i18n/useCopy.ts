import brand from "../brand.config";
import { dict } from "./dictionary";
import { useT } from "./useT";

/** Localized marketing copy + stable URLs from brand.config. */
export function useCopy() {
  const t = useT();

  return {
    meta: {
      title: t(dict.meta.title),
      description: t(dict.meta.description),
      tagline: t(dict.meta.tagline),
    },
    nav: {
      links: [
        { href: "/#how-it-works", label: t(dict.nav.howItWorks) },
        { href: "/#pricing", label: t(dict.nav.pricing) },
        { href: "/#faq", label: t(dict.nav.faq) },
      ],
      loginLabel: t(dict.nav.login),
      loginHref: brand.nav.loginHref,
      ctaLabel: t(dict.nav.cta),
      ctaHref: brand.appUrl,
      openMenu: t(dict.nav.openMenu),
      closeMenu: t(dict.nav.closeMenu),
    },
    hero: {
      badge: t(dict.hero.badge),
      titleA: t(dict.hero.titleA),
      titleHighlight: t(dict.hero.titleHighlight),
      titleB: t(dict.hero.titleB),
      subhead: t(dict.hero.subhead),
      primaryCta: { label: t(dict.hero.primaryCta), href: "/#pricing" },
      secondaryCta: {
        label: t(dict.hero.secondaryCta),
        href: "/#how-it-works",
      },
      trustLine: t(dict.hero.trustLine),
      videoId: brand.hero.videoId,
      videoPlaceholder: t(dict.hero.videoPlaceholder),
      kpis: [
        {
          value: t(dict.hero.kpiLiveValue),
          label: t(dict.hero.kpiLive),
          highlight: true,
        },
        { value: t(dict.hero.kpiPayValue), label: t(dict.hero.kpiPay) },
        { value: t(dict.hero.kpiActiveValue), label: t(dict.hero.kpiActive) },
        { value: t(dict.hero.kpiEarlyValue), label: t(dict.hero.kpiEarly) },
      ],
    },
    problem: {
      eyebrow: t(dict.problem.eyebrow),
      heading: t(dict.problem.heading),
      sub: t(dict.problem.sub),
      items: dict.problem.items.map((item, i) => ({
        emoji: brand.problem.items[i]?.emoji ?? "package.png",
        title: t(item.title),
        body: t(item.body),
      })),
    },
    howItWorks: {
      eyebrow: t(dict.howItWorks.eyebrow),
      heading: t(dict.howItWorks.heading),
      sub: t(dict.howItWorks.sub),
      steps: dict.howItWorks.steps.map((s) => ({
        title: t(s.title),
        body: t(s.body),
      })),
    },
    useCases: {
      eyebrow: t(dict.useCases.eyebrow),
      heading: t(dict.useCases.heading),
      items: dict.useCases.items.map((item, i) => ({
        emoji: brand.useCases.items[i]?.emoji ?? "briefcase.png",
        title: t(item.title),
        body: t(item.body),
      })),
    },
    pricing: {
      eyebrow: t(dict.pricing.eyebrow),
      heading: t(dict.pricing.heading),
      subheading: t(dict.pricing.subheading),
      note: t(dict.pricing.note),
      mostPopular: t(dict.pricing.mostPopular),
      tiers: [
        {
          name: t(dict.pricing.tierScout.name),
          price: t(dict.pricing.tierScout.price),
          cadence: t(dict.pricing.tierScout.cadence),
          blurb: t(dict.pricing.tierScout.blurb),
          features: dict.pricing.tierScout.features.map((f) => t(f)),
          cta: {
            label: t(dict.pricing.tierScout.cta),
            href: brand.pricing.tiers[0]!.cta.href,
          },
        },
        {
          name: t(dict.pricing.tierCaptain.name),
          price: t(dict.pricing.tierCaptain.price),
          cadence: t(dict.pricing.tierCaptain.cadence),
          blurb: t(dict.pricing.tierCaptain.blurb),
          features: dict.pricing.tierCaptain.features.map((f) => t(f)),
          cta: {
            label: t(dict.pricing.tierCaptain.cta),
            href: brand.pricing.tiers[1]!.cta.href,
          },
          featured: true as const,
        },
      ],
    },
    guarantee: {
      eyebrow: t(dict.guarantee.eyebrow),
      channels: t(dict.guarantee.channels),
      heading: t(dict.guarantee.heading),
      points: dict.guarantee.points.map((p, i) => ({
        emoji: brand.guarantee.points[i]?.emoji ?? "coin.png",
        title: t(p.title),
        body: t(p.body),
      })),
    },
    faq: {
      heading: t(dict.faq.heading),
      items: dict.faq.items.map(
        ([q, a]) => [t(q), t(a)] as [string, string],
      ),
    },
    finalCta: {
      headline: t(dict.finalCta.headline),
      subhead: t(dict.finalCta.subhead),
      ctaLabel: t(dict.finalCta.cta),
      ctaHref: "/#pricing",
      trustLine: [] as string[],
    },
    footer: {
      tagline: t(dict.footer.tagline),
      product: t(dict.footer.product),
      company: t(dict.footer.company),
      legal: t(dict.footer.legal),
      contact: t(dict.footer.contact),
      terms: t(dict.footer.terms),
      privacy: t(dict.footer.privacy),
      copyright: t(dict.footer.copyright),
      poweredBy: t(dict.footer.poweredBy),
      poweredByChannels: t(dict.footer.poweredByChannels),
      productOf: t(dict.footer.productOf),
      productOfName: t(dict.footer.productOfName),
    },
    chrome: {
      whatsAppFab: t(dict.chrome.whatsAppFab),
      whatsAppAria: t(dict.chrome.whatsAppAria),
      getStarted: t(dict.chrome.getStarted),
    },
  };
}
