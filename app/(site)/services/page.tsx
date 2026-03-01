"use client";

import Link from "next/link";
import { services } from "@/lib/services";
import { useLocale } from "@/context/LocaleContext";

export default function ServicesIndexPage() {
  const { t } = useLocale();

  return (
    <main className="min-h-screen bg-palette-section section-pad">
      <div className="content-width mx-auto px-4">
        <div className="rounded-2xl bg-white/80 px-6 py-5 shadow-md ring-1 ring-[var(--accent)]/20">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="" className="h-12 w-auto shrink-0" />
            <div>
          <span className="inline-block rounded-full bg-palette-accent px-4 py-1.5 text-sm font-semibold text-white">
            What we offer
          </span>
          <h1 className="mt-4 text-3xl font-bold text-palette-fg sm:text-4xl">
            {t.services.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-palette-muted">
            {t.services.subtitle}
          </p>
            </div>
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border-2 border-[var(--accent-orange)] shadow-md ring-2 ring-[var(--accent-orange)]/20">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85"
            alt=""
            className="h-48 w-full object-cover sm:h-56"
          />
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
