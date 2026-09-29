export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Shorekeeper Wiki",
  shortName: "Shorekeeper",
  logoText: "S",
  tagline: "Builds, Echoes, Teams & Guides",
  description: "Explore Shorekeeper Wiki with complete builds, weapons, echoes, skills, materials, teams, and gameplay guides for Wuthering Waves players!",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shorekeeperwiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shorekeeperwiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://wutheringwaves.kurogames.com/",
  heroVideoId: "FQEyNpQnK60", // Wuthering Waves | Resonator Showcase | The Shorekeeper
  social: {
    discord: "https://discord.com/servers/wuthering-waves-official-963760374543450182",
    youtube: "https://www.youtube.com/@WutheringWaves",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
