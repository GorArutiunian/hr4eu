"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { useLocale } from "@/context/LocaleContext";
import { HR4EUInline } from "@/components/HR4EUBrand";

const coverImages: Record<string, string> = {
  it: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  analytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  accounting: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  marketing: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
  administrative: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80",
  operations: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
};

const ServiceIcon = ({ name }: { name: string }) => {
  const cls = "h-6 w-6";
  if (name === "code") return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
  if (name === "chart") return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
  if (name === "calculator") return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
  if (name === "megaphone") return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  );
  if (name === "clipboard") return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
  return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
};

export default function ServicesIndexPage() {
  const { t } = useLocale();

  return (
    <main className="min-h-screen bg-palette-section">

      {/* Header */}
      <div className="content-width mx-auto px-4 pt-10 pb-4 sm:pt-14 text-center">
        <div className="flex justify-center mb-5">
          <img src="/logo.png" alt="" className="h-20 w-auto sm:h-24 [mix-blend-mode:multiply]" aria-hidden />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          <HR4EUInline>{t.services.title}</HR4EUInline>
        </h1>
      </div>

      {/* Grid */}
      <div className="content-width mx-auto px-4 py-10 sm:py-12">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const title =
              (t as { serviceTitles?: Record<string, string> }).serviceTitles?.[service.slug] ?? service.title;
            const img = coverImages[service.slug] ?? coverImages.it;
            return (
              <motion.li
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-[var(--accent)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                >
                  {/* Cover image */}
                  <div className="relative h-40 overflow-hidden sm:h-44">
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    {/* Number badge */}
                    <span className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white backdrop-blur-sm">
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-white">
                        <ServiceIcon name={service.icon} />
                      </span>
                      <h2 className="text-base font-semibold text-slate-900 group-hover:text-[var(--accent)] transition-colors sm:text-lg">
                        {title}
                      </h2>
                    </div>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--accent)] group-hover:underline">
                      {t.services.learnMore}
                      <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>

    </main>
  );
}
