"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function CTASection() {
  const { t } = useLocale();

  return (
    <section
      className="bg-hero-bright-blue section-pad"
      aria-labelledby="cta-heading"
    >
      <div className="content-width max-w-4xl mx-auto text-center">
        <motion.h2
          id="cta-heading"
          className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.cta.title}
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-slate-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {t.cta.subtitle}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--hero-bright-blue)]"
            aria-label={t.cta.bookCall}
          >
            {t.cta.bookCall}
          </Link>
          <a
            href="mailto:hello@hr4eu.com"
            className="inline-flex items-center justify-center rounded-full border-2 border-slate-700 bg-transparent px-6 py-3.5 text-base font-medium text-slate-900 transition-all hover:bg-slate-800 hover:text-white hover:border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-[var(--hero-bright-blue)]"
            aria-label={t.cta.emailUs}
          >
            {t.cta.emailUs}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
