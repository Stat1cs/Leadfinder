import { useLanguage } from "./LanguageContext";

/**
 * Framer Motion `x` is physical, not logical. Negate enter offsets under RTL
 * so slide-ins still feel like they come from the reading-start edge.
 */
export function useDirectionalX(magnitude = 24): number {
  const { lang } = useLanguage();
  return lang === "ar" ? magnitude : -magnitude;
}
