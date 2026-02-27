"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

const navLinks = [
  { href: "/services", key: "services" as const },
  { href: "/about", key: "about" as const },
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
      className="sticky top-0 z-50 w-full border-b border-[#3F36D1]/10 bg-white/90 backdrop-blur-md shadow-sm"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#3F36D1] focus:outline-none focus:ring-2 focus:ring-[#3F36D1] focus:ring-offset-2 rounded"
          aria-label="HR4EU home"
        >
          HR4EU
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#4B5563] transition-colors hover:text-[#3F36D1] focus:outline-none focus:ring-2 focus:ring-[#3F36D1] focus:ring-offset-2 rounded"
            >
              {t.nav[link.key]}
            </Link>
          ))}
          <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded px-2.5 py-1.5 text-sm font-medium transition-colors ${
                locale === "en"
                  ? "bg-[#3F36D1] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              aria-label="English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("cs")}
              className={`rounded px-2.5 py-1.5 text-sm font-medium transition-colors ${
                locale === "cs"
                  ? "bg-[#3F36D1] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              aria-label="Čeština"
            >
              CZ
            </button>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-[#3F36D1] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#352bb8] focus:outline-none focus:ring-2 focus:ring-[#3F36D1] focus:ring-offset-2"
            aria-label={t.nav.bookCall}
          >
            {t.nav.bookCall}
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#4B5563] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#3F36D1] md:hidden"
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
            className="border-t border-gray-200 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-[#4B5563] hover:bg-gray-100 hover:text-[#3F36D1]"
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
                    locale === "en" ? "bg-[#3F36D1] text-white" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("cs")}
                  className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-medium ${
                    locale === "cs" ? "bg-[#3F36D1] text-white" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  CZ
                </button>
              </div>
              <Link
                href="/contact"
                className="mt-2 rounded-full bg-[#3F36D1] px-5 py-3 text-center font-medium text-white hover:bg-[#352bb8]"
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
