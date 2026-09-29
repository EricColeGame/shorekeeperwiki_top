export type NavItem = {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "build", path: "/build", isContentType: true },
  { key: "combat", path: "/combat", isContentType: true },
  { key: "lore", path: "/lore", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "media", path: "/media", isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
