"use client";

import Link from "next/link";
import CostComparisonGraph from "@/components/CostComparisonGraph";
import { HR4EUInline } from "@/components/HR4EUBrand";
import { useLocale } from "@/context/LocaleContext";

export default function FinancialsPage() {
  const { t } = useLocale();
  const fp = t.financialsPage;

  return (
    <main className="min-h-screen bg-palette-section">
      <div className="content-width mx-auto px-4 pt-10 pb-14 sm:pt-14 sm:pb-20">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {fp.title}
          </h1>
          <p className="mt-4 text-xl font-semibold text-[var(--accent)] sm:text-2xl">
            {fp.subtitle}
          </p>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            <HR4EUInline>{fp.intro}</HR4EUInline>
          </p>
        </header>

        <div className="mt-10 mx-auto max-w-3xl overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-lg">
          <CostComparisonGraph />
        </div>

        <div className="mt-10 mx-auto max-w-2xl space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700 leading-relaxed">
              <HR4EUInline>{fp.point1}</HR4EUInline>
            </p>
          </div>
          <div className="rounded-2xl border-2 border-[var(--accent)] bg-[#eef2ff]/50 p-6 shadow-sm">
            <p className="text-slate-800 font-medium leading-relaxed">
              <HR4EUInline>{fp.point2}</HR4EUInline>
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700 leading-relaxed">
              <HR4EUInline>{fp.point3}</HR4EUInline>
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-[var(--accent)] p-8 text-center text-white sm:p-10">
          <h2 className="text-xl font-semibold sm:text-2xl">{fp.ctaTitle}</h2>
          <p className="mt-2 text-white/90">{fp.ctaSubtitle}</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-[var(--accent)] transition-all hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--accent)]"
          >
            {fp.bookCall}
          </Link>
        </div>
      </div>
    </main>
  );
}
