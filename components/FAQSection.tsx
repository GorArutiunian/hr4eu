"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function FAQSection() {
  const { t } = useLocale();
  const [openId, setOpenId] = useState<number | null>(0);
  const reducedMotion = useReducedMotion();
  const faqs = t.faq.items;

  return (
    <section
      className="bg-white px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          id="faq-heading"
          className="text-center text-3xl font-bold text-gray-900 sm:text-4xl"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
        >
          {t.faq.title}
        </motion.h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-lg text-gray-600">
          {t.faq.subtitle}
        </p>
        <ul className="mt-10 space-y-3" role="list">
          {faqs.map((faq, i) => (
            <li key={faq?.question ?? i}>
              <article
                className="rounded-xl border-2 border-[#3F36D1]/15 bg-white shadow-md ring-1 ring-black/5"
                aria-expanded={openId === i}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#3F36D1] focus:ring-inset rounded-xl"
                  onClick={() => setOpenId(openId === i ? null : i)}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span>{faq?.question ?? ""}</span>
                  <span
                    className={`shrink-0 text-[#3F36D1] transition-transform duration-200 ${
                      openId === i ? "rotate-180" : ""
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
                  {openId === i && (
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
                      <p className="border-t border-gray-100 px-5 pb-4 pt-2 text-gray-600">
                        {faq?.answer ?? ""}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
