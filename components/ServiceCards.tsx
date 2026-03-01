"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { useLocale } from "@/context/LocaleContext";

const icons: Record<string, React.ReactNode> = {
  code: (
    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  chart: (
    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  calculator: (
    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  megaphone: (
    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13a3 3 0 005.564 0M18 13v6a3 3 0 01-3 3h-4a3 3 0 01-3-3v-6M5.436 13v6a3 3 0 003 3h4a3 3 0 003-3" />
    </svg>
  ),
  cog: (
    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  clipboard: (
    <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
};

export default function ServiceCards() {
  const { t } = useLocale();

  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden bg-palette-card section-pad"
      aria-labelledby="services-heading"
    >
      <div className="content-width relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-4">
            <img src="/logo.png" alt="" className="h-20 w-auto sm:h-24" />
          </div>
          <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            {t.services.subtitle}
          </p>
        </motion.div>
        <motion.div
          className="mt-10 overflow-hidden rounded-2xl border-2 border-[var(--accent-orange)]/30 bg-white shadow-md"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85"
            alt=""
            className="h-48 w-full object-cover sm:h-56"
          />
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group box-frame-blue flex h-full flex-col p-6 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
              >
                <span className="text-palette-accent" aria-hidden="true">
                  {icons[service.icon] ?? icons.cog}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-palette-fg group-hover:text-palette-accent transition-colors sm:text-2xl">
                  {(t as { serviceTitles: Record<string, string> }).serviceTitles[service.slug] ?? service.title}
                </h3>
                <p className="mt-3 flex-1 text-base text-slate-600 leading-relaxed sm:text-lg">
                  {(t as { serviceShortDesc: Record<string, string> }).serviceShortDesc[service.slug] ?? service.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center text-base font-medium text-palette-accent group-hover:underline sm:text-lg">
                  {t.services.learnMore}
                  <svg className="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
