"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

const navLinks = [
  { href: "/services", key: "services" as const },
  { href: "/about", key: "about" as const },
  { href: "/benefits", key: "benefits" as const },
  { href: "/faq", key: "faq" as const },
  { href: "/contact", key: "contact" as const },
];

export default function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-palette bg-white backdrop-blur-sm"
      role="banner"
    >
      <nav
        className="content-width mx-auto flex items-center justify-between px-4 py-4 md:py-5"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-900 transition-colors hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded-md"
          aria-label="HR4EU home"
        >
          <img src="/logo.png" alt="" className="h-14 w-auto sm:h-16 [mix-blend-mode:multiply]" width={56} height={56} />
          <span className="flex items-baseline">
            <span>HR</span>
            <span className="mx-0.5 text-3xl font-bold text-[var(--accent)] leading-none">4</span>
            <span>EU</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded-md"
            >
              {t.nav[link.key]}
            </Link>
          ))}
          <div className="flex items-center gap-1 border-l border-slate-200 pl-6">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                locale === "en"
                  ? "bg-[var(--accent)] text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              aria-label="English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("cs")}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                locale === "cs"
                  ? "bg-[var(--accent)] text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              aria-label="Čeština"
            >
              CZ
            </button>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
            aria-label={t.nav.bookCall}
          >
            {t.nav.bookCall}
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-200 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav[link.key]}
                </Link>
              ))}
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-medium ${
                    locale === "en" ? "bg-[var(--accent)] text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("cs")}
                  className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-medium ${
                    locale === "cs" ? "bg-[var(--accent)] text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  CZ
                </button>
              </div>
              <Link
                href="/contact"
                className="mt-2 rounded-full bg-[var(--accent)] px-5 py-3 text-center font-medium text-white hover:bg-[var(--accent-hover)]"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.bookCall}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
