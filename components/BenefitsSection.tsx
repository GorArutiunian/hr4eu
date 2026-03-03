"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { HR4EUInline } from "@/components/HR4EUBrand";

const benefitKeys = [
  { title: "faster" as const, desc: "fasterDesc" as const },
  { title: "lowerCost" as const, desc: "lowerCostDesc" as const },
  { title: "dedicated" as const, desc: "dedicatedDesc" as const },
  { title: "scalable" as const, desc: "scalableDesc" as const },
];

const icons = [
  <svg key="1" className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="2" className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="3" className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>,
  <svg key="4" className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>,
];

export default function BenefitsSection() {
  const { t } = useLocale();

  return (
    <section
      className="bg-palette-card section-pad"
      aria-labelledby="benefits-heading"
    >
      <div className="content-width">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="benefits-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            <HR4EUInline>{t.benefits.title}</HR4EUInline>
          </h2>
          {t.benefits.subtitle ? (
            <p className="mt-4 text-lg text-slate-600">
              {t.benefits.subtitle}
            </p>
          ) : null}
        </motion.div>
        <motion.div
          className="mt-6 overflow-hidden rounded-2xl border-2 border-[var(--accent-orange)]/30 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85"
            alt=""
            className="h-56 w-full object-cover object-center sm:h-64"
          />
        </motion.div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefitKeys.map((b, i) => (
            <motion.div
              key={b.title}
              className="box-frame-blue p-6 transition-all duration-200 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className="text-palette-accent" aria-hidden="true">
                {icons[i]}
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{t.benefits[b.title]}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{t.benefits[b.desc]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
