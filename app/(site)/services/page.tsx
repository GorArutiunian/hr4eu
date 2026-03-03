"use client";

import Link from "next/link";
import { services } from "@/lib/services";
import { useLocale } from "@/context/LocaleContext";
import { HR4EUInline } from "@/components/HR4EUBrand";

export default function ServicesIndexPage() {
  const { t } = useLocale();

  return (
    <main className="min-h-screen bg-palette-section section-pad">
      <div className="content-width mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 mt-8 flex justify-center">
            <img src="/logo.png" alt="" className="h-20 w-auto sm:h-24 md:h-28 [mix-blend-mode:multiply]" aria-hidden />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-palette-fg sm:text-4xl md:text-5xl">
            <HR4EUInline className="text-4xl sm:text-5xl md:text-6xl">{t.services.title}</HR4EUInline>
          </h1>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const title =
              (t as { serviceTitles?: Record<string, string> }).serviceTitles?.[
                service.slug
              ] ?? service.title;
            const shortDesc =
              (t as { serviceShortDesc?: Record<string, string> }).serviceShortDesc?.[
                service.slug
              ] ?? service.shortDescription;
            return (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block rounded-2xl border-2 border-[var(--accent)] bg-[#eef2ff] p-6 transition-all hover:shadow-lg hover:bg-[#e0e7ff] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                >
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] text-white"
                    aria-hidden
                  >
                    <span className="text-sm font-bold">{i + 1}</span>
                  </span>
                  <h2 className="mt-4 text-lg font-semibold text-palette-fg hover:text-palette-accent transition-colors">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm text-palette-muted">{shortDesc}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-palette-accent">
                    {t.services.learnMore}
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
