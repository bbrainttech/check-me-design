type NavLinkType = {
  title: string;
  href: string;
  hasDropDown?: boolean;
}[];

export const NAV_LINKS = [
  {
    title: "home",
    href: "/",
  },
  { title: "about us", href: "/about-us" },
  {
    title: "services",
    hasDropDown: true,
    href: "/services-dropdown",
  },
  {
    title: "blog",
    href: "/blog",
  },
  {
    title: "careers",
    href: "/careers",
  },
] as const satisfies NavLinkType;

type Languages = "English" | "French" | "Kinyarwanda" | "Swahili";

export const LANGUAGES = ["English",'French','Kinyarwanda','Swahili'] as const satisfies Languages[];
