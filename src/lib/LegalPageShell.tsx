import { useEffect, useState, type ReactNode } from "react";
import { Head } from "vite-react-ssg";
import { Nav, OrbField, Footer } from "../App";
import brand from "../brand.config";
import { useCopy } from "../i18n/useCopy";
import { useT } from "../i18n/useT";
import { dict } from "../i18n/dictionary";

const OG_IMAGE_URL = `${brand.siteUrl}${brand.ogImage}`;

export type LegalTocItem = { id: string; label: string };

export interface LegalPageShellProps {
  title: string;
  lastUpdated: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  intro?: ReactNode;
  toc: LegalTocItem[];
  children: ReactNode;
}

export default function LegalPageShell({
  title,
  lastUpdated,
  metaTitle,
  metaDescription,
  canonical,
  intro,
  toc,
  children,
}: LegalPageShellProps) {
  const t = useT();
  const copy = useCopy();
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    )
      return;
    const ids = toc.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-96px 0px -65% 0px",
        threshold: [0, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [toc]);

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
      </Head>

      <Nav ctaLabel={copy.nav.ctaLabel} />

      <div className="orb-stage relative">
        <OrbField />

        <section className="relative pt-32 sm:pt-40 pb-10 sm:pb-14">
          <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
            <div className="text-xs uppercase tracking-[0.22em] text-champ-700 font-bold mb-4">
              {t(dict.legalShell.eyebrow)}
            </div>
            <h1 className="font-grotesk text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#213856] leading-[1.05] tracking-tight mb-5 [text-wrap:balance]">
              {title}
            </h1>
            <p className="text-sm text-slate-500 mb-6">
              {t(dict.legalShell.lastUpdated)}{" "}
              <span className="text-slate-700 font-medium">{lastUpdated}</span>{" "}
              &middot; {t(dict.legalShell.effectiveDate)}{" "}
              <span className="text-slate-700 font-medium">{lastUpdated}</span>
            </p>
            {intro && (
              <div className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed space-y-4">
                {intro}
              </div>
            )}
          </div>
        </section>

        <section className="relative pb-20">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">
              <details className="lg:hidden glass rounded-2xl p-4">
                <summary className="cursor-pointer font-clash text-base font-semibold text-[#213856] select-none">
                  {t(dict.legalShell.tocMobile)}
                </summary>
                <nav className="mt-4 space-y-1.5 text-sm">
                  {toc.map((item, i) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block px-3 py-1.5 rounded-lg text-slate-600 hover:text-champ-700 hover:bg-white/70 transition"
                    >
                      <span className="text-slate-400 tabular-nums me-2">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                      {item.label}
                    </a>
                  ))}
                </nav>
              </details>

              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <div className="glass rounded-2xl p-5">
                    <div className="text-xs uppercase tracking-[0.18em] text-champ-700 font-bold mb-4">
                      {t(dict.legalShell.onThisPage)}
                    </div>
                    <nav className="space-y-1 text-sm max-h-[70vh] overflow-y-auto pe-1">
                      {toc.map((item, i) => {
                        const active = activeId === item.id;
                        return (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={
                              "flex items-start gap-2 px-3 py-1.5 rounded-lg transition leading-snug " +
                              (active
                                ? "bg-white text-champ-700 font-semibold ring-1 ring-champ-500/30"
                                : "text-slate-600 hover:text-champ-700 hover:bg-white/70")
                            }
                          >
                            <span
                              className={
                                "tabular-nums mt-[1px] " +
                                (active ? "text-champ-600" : "text-slate-400")
                              }
                            >
                              {(i + 1).toString().padStart(2, "0")}
                            </span>
                            <span>{item.label}</span>
                          </a>
                        );
                      })}
                    </nav>
                  </div>
                </div>
              </aside>

              <article className="legal-prose min-w-0">
                <div className="space-y-2">{children}</div>

                <div className="glass rounded-2xl p-6 sm:p-7 mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="font-clash text-lg font-semibold text-[#213856]">
                      {t(dict.legalShell.questionsTitle)}
                    </div>
                    <p className="text-sm text-slate-600 mt-1">
                      {t(dict.legalShell.questionsBody)}{" "}
                      <a
                        href={`mailto:${brand.supportEmail}`}
                        className="text-champ-700 font-medium underline-offset-2 hover:underline"
                      >
                        {brand.supportEmail}
                      </a>{" "}
                      {t(dict.legalShell.questionsBodyEnd)}
                    </p>
                  </div>
                  <a
                    href={`mailto:${brand.supportEmail}`}
                    className="btn-primary text-sm font-semibold px-4 py-2.5 rounded-xl inline-flex items-center justify-center gap-1.5 shrink-0"
                  >
                    {t(dict.legalShell.emailUs)}
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 pt-10 first:pt-2">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="font-clash text-sm font-semibold text-champ-600 tabular-nums">
          {number.toString().padStart(2, "0")}
        </span>
        <h2 className="font-clash text-2xl sm:text-[1.75rem] font-semibold text-[#213856] leading-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-slate-700 leading-relaxed">{children}</div>
    </section>
  );
}

export function LegalSub({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-clash text-lg font-semibold text-[#213856] mt-7 mb-2">
      {children}
    </h3>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p className="text-slate-700 leading-relaxed">{children}</p>;
}

export function LegalUl({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc list-outside ms-5 space-y-1.5 text-slate-700 leading-relaxed">
      {children}
    </ul>
  );
}

export function LegalOl({ children }: { children: ReactNode }) {
  return (
    <ol className="list-decimal list-outside ms-5 space-y-1.5 text-slate-700 leading-relaxed">
      {children}
    </ol>
  );
}

export function LegalCallout({ children }: { children: ReactNode }) {
  const t = useT();
  return (
    <div className="glass-soft rounded-2xl px-5 py-4 text-sm text-slate-700 leading-relaxed border-s-4 border-champ-500/70">
      <span className="font-semibold text-[#213856]">
        {t(dict.legalShell.inShort)}{" "}
      </span>
      {children}
    </div>
  );
}

export function LegalTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: Array<string[]>;
}) {
  return (
    <div className="overflow-x-auto -mx-2 sm:mx-0 my-2">
      <table className="min-w-full text-sm border-separate border-spacing-0 rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white">
        <thead className="bg-slate-50/80">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-start font-semibold text-[#213856] px-4 py-2.5 border-b border-slate-200"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="align-top">
              {r.map((cell, j) => (
                <td
                  key={j}
                  className={
                    "px-4 py-2.5 text-slate-700 " +
                    (i < rows.length - 1 ? "border-b border-slate-100" : "")
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
