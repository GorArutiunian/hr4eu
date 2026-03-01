"use client";

import Link from "next/link";
import { HR4EUInline } from "@/components/HR4EUBrand";
import { useLocale } from "@/context/LocaleContext";

const footerLinks = [
  { href: "/services", key: "services" as const },
  { href: "/about", key: "about" as const },
  { href: "/benefits", key: "benefits" as const },
  { href: "/faq", key: "faq" as const },
  { href: "/contact", key: "contact" as const },
  { href: "/privacy", key: "privacy" as const },
  { href: "/terms", key: "terms" as const },
];

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer
      className="border-t border-palette bg-palette-card"
      role="contentinfo"
    >
      <div className="content-width section-pad">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold text-palette-fg transition-colors hover:text-palette-accent focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded-md"
              aria-label="HR4EU home"
            >
              <img src="/logo.png" alt="" className="h-14 w-auto sm:h-16" width={56} height={56} />
              <span className="flex items-baseline">
                <span>HR</span>
                <span className="mx-0.5 text-2xl font-bold text-[var(--accent)] leading-none">4</span>
                <span>EU</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-palette-muted leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-6"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-palette-muted transition-colors hover:text-palette-fg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded-md"
              >
                {t.footer.links[link.key]}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-palette pt-8">
          <p className="text-sm text-palette-muted">
            <HR4EUInline>{t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}</HR4EUInline>
          </p>
        </div>
      </div>
    </footer>
  );
}
