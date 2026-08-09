import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Lang } from "./types";

const STORAGE_KEY = "lf-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dir: "rtl" | "ltr";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): Lang | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") return stored;
  } catch {
    /* private mode / blocked storage */
  }
  return null;
}

function applyDocumentLang(lang: Lang) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  // RTL↔LTR can leave a non-zero scrollLeft in some browsers, which looks like
  // a blank / clipped page. Always pin horizontal scroll after a dir flip.
  document.documentElement.scrollLeft = 0;
  document.body.scrollLeft = 0;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // SSG + first paint: Arabic (matches index.html). Preference loads after mount.
  const [lang, setLangState] = useState<Lang>("ar");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readStoredLang() ?? "ar";
    setLangState(stored);
    applyDocumentLang(stored);
    setReady(true);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState((prev) => (prev === next ? prev : next));
  }, []);

  useEffect(() => {
    if (!ready || typeof window === "undefined") return;
    const y = window.scrollY;
    applyDocumentLang(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    requestAnimationFrame(() => {
      window.scrollTo({
        top: y,
        left: 0,
        behavior: "instant" as ScrollBehavior,
      });
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
    });
  }, [lang, ready]);

  const dir = (lang === "ar" ? "rtl" : "ltr") as "rtl" | "ltr";

  const value = useMemo(
    () => ({
      lang,
      setLang,
      dir,
    }),
    [lang, setLang, dir],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
