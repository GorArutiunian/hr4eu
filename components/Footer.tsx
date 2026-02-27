"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

const footerLinks = [
  { href: "/services", key: "services" as const },
  { href: "/about", key: "about" as const },
  { href: "/faq", key: "faq" as const },
  { href: "/contact", key: "contact" as const },
  { href: "/privacy", key: "privacy" as const },
  { href: "/terms", key: "terms" as const },
];

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer
      className="border-t border-gray-200 bg-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-lg font-bold text-[#3F36D1] focus:outline-none focus:ring-2 focus:ring-[#3F36D1] focus:ring-offset-2 rounded"
              aria-label="HR4EU home"
            >
              HR4EU
            </Link>
            <p className="mt-3 text-sm text-[#4B5563]">
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
                className="text-sm text-[#4B5563] transition-colors hover:text-[#3F36D1] focus:outline-none focus:ring-2 focus:ring-[#3F36D1] focus:ring-offset-2 rounded"
              >
                {t.footer.links[link.key]}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-[#4B5563]">
            {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
        </div>
      </div>
    </footer>
  );
}
