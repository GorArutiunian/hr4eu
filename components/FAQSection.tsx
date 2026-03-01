"use client";

import { useState } from "react";
import { HR4EUInline } from "@/components/HR4EUBrand";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function FAQSection() {
  const { t } = useLocale();
  const [openId, setOpenId] = useState<number | null>(0);
  const reducedMotion = useReducedMotion();
  const faqs = t.faq.items;

  return (
    <section
      className="rounded-2xl bg-white/90 px-6 py-8 shadow-lg ring-2 ring-[var(--accent)]/20 sm:px-8"
      aria-labelledby="faq-heading"
    >
      <div className="content-width max-w-3xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <img src="/logo.png" alt="" className="h-10 w-auto" />
          </div>
          <span className="inline-block rounded-full bg-palette-accent px-4 py-1.5 text-sm font-semibold text-white">
            FAQ
          </span>
          <motion.h2
            id="faq-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            {t.faq.title}
          </motion.h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-slate-600">
            <HR4EUInline>{t.faq.subtitle}</HR4EUInline>
          </p>
        </div>
        <ul className="mt-10 space-y-3" role="list">
          {faqs.map((faq, i) => {
            const isOpen = openId === i;
            return (
              <li key={faq?.question ?? i}>
                <article
                  className={`rounded-xl border-2 border-[var(--accent)]/30 bg-[#eef2ff]/60 transition-all duration-200 overflow-hidden hover:bg-[#eef2ff] ${
                    isOpen ? "ring-2 ring-offset-2 ring-[var(--accent)]" : ""
                  }`}
                  aria-expanded={isOpen}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-palette-fg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-inset rounded-xl transition-colors"
                    onClick={() => setOpenId(isOpen ? null : i)}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)] text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <HR4EUInline>{faq?.question ?? ""}</HR4EUInline>
                    </span>
                    <span
                      className={`shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-palette-accent" : "text-palette-muted"
                      }`}
                      aria-hidden
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-question-${i}`}
                        initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-white/60 bg-white/50 px-5 pb-4 pt-2 text-slate-600 leading-relaxed">
                          <HR4EUInline>{faq?.answer ?? ""}</HR4EUInline>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
