import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ja", "ko", "de"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
