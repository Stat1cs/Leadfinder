import { useLanguage } from "./LanguageContext";
import type { Bi } from "./types";

/** Resolve a bilingual leaf to the active language. */
export function useT() {
  const { lang } = useLanguage();
  return (node: Bi): string => node[lang];
}
