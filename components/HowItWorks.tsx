"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

const stepKeys = [
  { title: "step1Title" as const, desc: "step1Desc" as const },
  { title: "step2Title" as const, desc: "step2Desc" as const },
  { title: "step3Title" as const, desc: "step3Desc" as const },
];

export default function HowItWorks() {
  const { t } = useLocale();
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="how-hr4eu-works-heading"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#3F36D1]/[0.05]" style={{ filter: "blur(60px)" }} aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <h2
            id="how-hr4eu-works-heading"
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            {t.howItWorks.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4B5563]">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {stepKeys.map((step, i) => (
            <motion.article
              key={step.title}
              className="relative flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/80"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.1 }}
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3F36D1] text-sm font-bold text-white"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {t.howItWorks[step.title]}
              </h3>
              <p className="mt-2 text-[#4B5563]">{t.howItWorks[step.desc]}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
