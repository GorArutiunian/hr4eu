"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

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
  const industryList = (t.benefits as { industryList?: readonly string[] }).industryList ?? [];

  return (
    <section
      className="bg-white px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 id="benefits-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.benefits.title}
          </h2>
          <p className="mt-3 text-lg text-[#4B5563]">
            {t.benefits.subtitle}
          </p>
        </motion.div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefitKeys.map((b, i) => (
            <motion.div
              key={b.title}
              className="rounded-2xl border border-gray-200 bg-white p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <span className="text-[#3F36D1]" aria-hidden="true">
                {icons[i]}
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">{t.benefits[b.title]}</h3>
              <p className="mt-2 text-sm text-[#4B5563]">{t.benefits[b.desc]}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-900">
            {t.benefits.industries}
          </h3>
          <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {industryList.map((industry) => (
              <span
                key={industry}
                className="shrink-0 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#4B5563]"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
