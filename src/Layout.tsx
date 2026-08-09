import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { WhatsAppFab } from "./lib/WhatsAppCTA";
import brand from "./brand.config";
import { brandThemeCss, themeCssFor, activeTheme } from "./lib/brandTheme";
import { themes, type ThemeName } from "./themes";
import { homeLayouts, type HomeLayoutName } from "./homeLayouts";
import { previewTheme, previewLayout, exitPreview } from "./lib/previewMode";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { useCopy } from "./i18n/useCopy";

function LayoutInner() {
  const { pathname, hash, search } = useLocation();
  const { lang, dir } = useLanguage();
  const copy = useCopy();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  const [preview, setPreview] = useState<{
    theme: ThemeName | null;
    layout: HomeLayoutName | null;
  }>({ theme: null, layout: null });

  useEffect(() => {
    const t = previewTheme(search);
    const l = previewLayout(search);
    setPreview({ theme: t, layout: l });
    if (t) {
      let link = document.getElementById(
        "theme-preview-fonts",
      ) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.id = "theme-preview-fonts";
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }
      link.href = themes[t].fonts.googleHref;
    }
  }, [search, pathname]);

  const themeCss = preview.theme
    ? themeCssFor(themes[preview.theme])
    : brandThemeCss();

  const previewLabel = [
    preview.theme && `Theme: ${themes[preview.theme].label}`,
    preview.layout && `Layout: ${homeLayouts[preview.layout].label}`,
  ]
    .filter(Boolean)
    .join(" · ");

  const title = copy.meta.title;
  const description = copy.meta.description;
  const ogImageUrl = brand.ogImage.startsWith("http")
    ? brand.ogImage
    : brand.siteUrl + brand.ogImage;
  const canonicalPath =
    pathname === "/" ? "/" : pathname.endsWith("/") ? pathname : `${pathname}/`;
  const canonicalUrl = `${brand.siteUrl}${canonicalPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.brandName,
    legalName: brand.legalEntity,
    url: brand.siteUrl,
    logo: `${brand.siteUrl}${brand.logo}`,
    email: brand.supportEmail,
    description,
    areaServed: ["OM", "AE", "SA", "KW", "BH", "QA"],
    parentOrganization: {
      "@type": "Organization",
      name: "Dynamic Business Solution",
      url: "https://dbs.om",
    },
  };

  return (
    <>
      <style id="brand-theme" dangerouslySetInnerHTML={{ __html: themeCss }} />
      <Head>
        <link rel="stylesheet" href={activeTheme.fonts.googleHref} />
        <link rel="icon" href={brand.favicon} type="image/png" />
        <link
          rel="icon"
          href="/brand/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href={brand.favicon} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="LeadFinder, local leads, verified contact data, Oman, GCC, lead generation, live site verification, Muscat"
        />
        <meta name="author" content="Dynamic Business Solution" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content={brand.brandName} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta
          property="og:locale"
          content={lang === "ar" ? "ar_OM" : "en_US"}
        />
        <meta
          property="og:locale:alternate"
          content={lang === "ar" ? "en_US" : "ar_OM"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImageUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      {/* Remount on language change so RTL/LTR layout + motion state reset cleanly. */}
      <div key={lang} lang={lang} dir={dir}>
        <Outlet />
      </div>
      {previewLabel && (
        <div className="fixed bottom-4 start-4 z-50">
          <div className="glass-pill rounded-full ps-4 pe-2 py-2 flex items-center gap-2 text-[12.5px] font-semibold text-slate-700 shadow-lg">
            <span className="relative inline-flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-champ-500 opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-champ-500" />
            </span>
            Previewing — {previewLabel}
            <button
              type="button"
              onClick={exitPreview}
              className="ms-1 px-2.5 py-1 rounded-full bg-slate-900/5 hover:bg-slate-900/10 text-slate-600 text-[11.5px] font-bold transition-colors"
            >
              Exit
            </button>
          </div>
        </div>
      )}
      <WhatsAppFab />
    </>
  );
}

export default function Layout() {
  return (
    <LanguageProvider>
      <LayoutInner />
    </LanguageProvider>
  );
}
