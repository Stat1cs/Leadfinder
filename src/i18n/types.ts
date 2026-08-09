export type Lang = "ar" | "en";

/** Every translatable leaf must have both languages — missing keys fail at compile time. */
export type Bi = { readonly ar: string; readonly en: string };

export function bi(ar: string, en: string): Bi {
  return { ar, en };
}
