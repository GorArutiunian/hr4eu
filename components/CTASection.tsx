"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function CTASection() {
  const { t } = useLocale();

  return (
    <section
      className="bg-[#3F36D1] px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          id="cta-heading"
          className="text-2xl font-bold text-white sm:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {t.cta.title}
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {t.cta.subtitle}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-medium text-[#3F36D1] shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#3F36D1]"
            aria-label={t.cta.bookCall}
          >
            {t.cta.bookCall}
          </Link>
          <a
            href="mailto:hello@hr4eu.com"
            className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#3F36D1]"
            aria-label={t.cta.emailUs}
          >
            {t.cta.emailUs}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
