"use client";

import Link from "next/link";
import { HR4EUInline } from "@/components/HR4EUBrand";
import { useLocale } from "@/context/LocaleContext";
import type { ServiceItem } from "@/lib/services";

const coverImages: Record<string, string> = {
  it: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=85",
  analytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
  accounting: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=85",
  marketing: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=85",
  administrative: "https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=85",
  operations: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85",
};

const ServiceIcon = ({ name }: { name: string }) => {
  const cls = "h-10 w-10";
  if (name === "code") return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
  if (name === "chart") return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
  if (name === "calculator") return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </svg>
  );
  if (name === "megaphone") return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  );
  if (name === "clipboard") return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
  // cog / AI
  return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
};

export default function ServiceDetailContent({ service }: { service: ServiceItem }) {
  const { t } = useLocale();
  const title =
    (t as { serviceTitles?: Record<string, string> }).serviceTitles?.[service.slug] ?? service.title;
  const shortDesc =
    (t as { serviceShortDesc?: Record<string, string> }).serviceShortDesc?.[service.slug] ?? service.shortDescription;
  const coverImg = coverImages[service.slug] ?? coverImages.it;

  return (
    <main className="min-h-screen bg-palette-section">

      {/* ── Hero banner ── */}
      <div className="relative h-52 w-full overflow-hidden sm:h-64 md:h-72">
        <img src={coverImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-7 sm:px-10">
          <Link
            href="/services"
            className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm hover:bg-white/30"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t.services.title}
          </Link>
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
              <ServiceIcon name={service.icon} />
            </span>
            <h1 className="text-2xl font-bold text-white drop-shadow sm:text-3xl md:text-4xl">{title}</h1>
          </div>
        </div>
      </div>

      <div className="content-width mx-auto max-w-4xl px-4 py-10 space-y-8 sm:py-12">

        {/* ── Description + CTA ── */}
        <div className="rounded-2xl border-2 border-[var(--accent)]/20 bg-white p-6 shadow-md sm:p-8">
          <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">{shortDesc}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{service.description}</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
          >
            {t.serviceDetail.getInTouch}
          </Link>
        </div>

        {/* ── Roles ── */}
        <section aria-labelledby="roles-heading">
          <h2 id="roles-heading" className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
            {t.serviceDetail.rolesTitle}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {service.roles.map((role) => (
              <div
                key={role}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-slate-700">{role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Team model ── */}
        <section aria-labelledby="engagement-heading">
          <h2 id="engagement-heading" className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
            {t.serviceDetail.engagementTitle}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl border-2 border-[var(--accent)] bg-[#eef2ff] p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">EU Lead</p>
                <p className="mt-1 text-sm font-medium text-slate-800">{service.engagementModel.euLead}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Team</p>
                <p className="mt-1 text-sm font-medium text-slate-800">{service.engagementModel.specialists}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why HR4EU ── */}
        <section aria-labelledby="why-heading">
          <h2 id="why-heading" className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
            <HR4EUInline>{t.serviceDetail.whyTitle}</HR4EUInline>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.whyHr4eu.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-orange)]/15 text-[var(--accent-orange)]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm leading-relaxed text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="rounded-2xl bg-[var(--accent)] p-8 text-center text-white sm:p-10">
          <h2 className="text-xl font-semibold sm:text-2xl">{t.serviceDetail.ctaTitle}</h2>
          <p className="mt-2 text-white/80">{t.serviceDetail.ctaSubtitle}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-[var(--accent)] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--accent)]"
            >
              {t.serviceDetail.contactUs}
            </Link>
            <a
              href="mailto:hello@hr4eu.com"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/60 px-7 py-3 font-medium text-white hover:border-white hover:bg-white/10 focus:outline-none"
            >
              hello@hr4eu.com
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
