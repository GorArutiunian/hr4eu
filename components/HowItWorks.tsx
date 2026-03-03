"use client";

import { HR4EUInline } from "@/components/HR4EUBrand";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

const stepKeys = [
  { title: "step1Title" as const, desc: "step1Desc" as const, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=85" },
  { title: "step2Title" as const, desc: "step2Desc" as const, img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&q=85" },
  { title: "step3Title" as const, desc: "step3Desc" as const, img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&q=85" },
];

export default function HowItWorks() {
  const { t } = useLocale();
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-palette-section section-pad !pt-8"
      aria-labelledby="how-hr4eu-works-heading"
    >
      <div className="content-width relative">
        <motion.div
          className="text-center"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="how-hr4eu-works-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            <HR4EUInline>{t.howItWorks.title}</HR4EUInline>
          </h2>
        </motion.div>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {stepKeys.map((step, i) => (
            <motion.article
              key={step.title}
              className="relative flex flex-col box-frame overflow-hidden p-0 transition-all duration-200 hover:shadow-md h-full"
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: reducedMotion ? 0 : i * 0.08 }}
            >
              <div className="relative h-32 w-full shrink-0 overflow-hidden sm:h-36">
                <img src={step.img} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-5 min-h-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]" aria-hidden="true">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 text-base font-semibold text-slate-900">
                  {t.howItWorks[step.title]}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{t.howItWorks[step.desc]}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
