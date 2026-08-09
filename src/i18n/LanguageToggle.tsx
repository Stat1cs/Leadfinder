import { useLanguage } from "./LanguageContext";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-xl ring-1 ring-slate-200/80 bg-white/80 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        aria-pressed={lang === "ar"}
        aria-label="العربية"
        onClick={() => setLang("ar")}
        className={`px-2.5 py-1.5 rounded-[10px] text-[12.5px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champ-700 focus-visible:ring-offset-2 ${
          lang === "ar"
            ? "bg-champ-700 text-white"
            : "text-slate-500 hover:text-champ-700 opacity-70 hover:opacity-100"
        }`}
      >
        عربي
      </button>
      <button
        type="button"
        aria-pressed={lang === "en"}
        aria-label="English"
        onClick={() => setLang("en")}
        className={`px-2.5 py-1.5 rounded-[10px] text-[12.5px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champ-700 focus-visible:ring-offset-2 ${
          lang === "en"
            ? "bg-champ-700 text-white"
            : "text-slate-500 hover:text-champ-700 opacity-70 hover:opacity-100"
        }`}
      >
        EN
      </button>
    </div>
  );
}
