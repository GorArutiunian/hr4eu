"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import AnimatedLogo from "@/components/AnimatedLogo";

const valueChipKeys = ["chip1", "chip2", "chip3", "chip4"] as const;

export default function Hero() {
  const { t } = useLocale();
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-white px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#3F36D1]/[0.06]"
          style={{ filter: "blur(40px)" }}
        />
        <div
          className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#3F36D1]/[0.05]"
          style={{ filter: "blur(50px)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3F36D1]/[0.04]"
          style={{ filter: "blur(60px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(63, 54, 209, 0.07) 0%, transparent 45%),
              radial-gradient(circle at 85% 75%, rgba(63, 54, 209, 0.06) 0%, transparent 40%)`,
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(rgba(63, 54, 209, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(63, 54, 209, 0.03) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <motion.h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight text-[#3F36D1] sm:text-5xl lg:text-6xl xl:text-7xl"
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {t.hero.slogan}
            </motion.h1>
            <motion.p
              className="mt-4 text-lg font-medium text-gray-600 sm:text-xl"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              {t.hero.tagline}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#3F36D1] px-6 py-3.5 text-base font-medium text-white shadow-md transition-colors hover:bg-[#352bb8] focus:outline-none focus:ring-2 focus:ring-[#3F36D1] focus:ring-offset-2"
                aria-label={t.hero.ctaPrimary}
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#3F36D1] bg-white px-6 py-3.5 text-base font-medium text-[#3F36D1] shadow-sm transition-colors hover:bg-[#3F36D1]/5 focus:outline-none focus:ring-2 focus:ring-[#3F36D1] focus:ring-offset-2"
                aria-label={t.hero.ctaSecondary}
              >
                {t.hero.ctaSecondary}
              </Link>
            </motion.div>
            <motion.ul
              className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              aria-label="Value propositions"
            >
              {valueChipKeys.map((key) => (
                <li key={key} className="flex">
                  <span className="flex min-h-[4.5rem] w-full items-center gap-3 rounded-xl border-2 border-[#3F36D1]/12 bg-white px-5 py-4 text-base font-semibold text-gray-800 shadow-sm">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3F36D1] text-white"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-800">{t.hero[key]}</span>
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>
          <div className="flex min-h-[280px] items-center justify-center lg:min-h-[380px] lg:justify-end">
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-4px_rgba(63,54,209,0.12),0_8px_32px_-8px_rgba(0,0,0,0.08)] lg:size-[320px] lg:rounded-3xl">
              <span className="absolute left-0 right-0 top-0 h-0.5 bg-[#3F36D1]" aria-hidden />
              <div className="flex w-full max-w-[280px] shrink-0 items-center justify-center px-6 py-6 sm:max-w-[320px] lg:max-w-[280px] lg:px-8 lg:py-8">
                <AnimatedLogo className="mx-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
