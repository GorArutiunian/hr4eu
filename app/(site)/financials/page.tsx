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
      {/* Hero banner */}
      <div className="relative flex min-h-[280px] flex-col overflow-hidden text-white lg:flex-row">
        <div className="flex flex-1 items-center bg-gradient-to-br from-[var(--accent)] to-[#1a3fa8] px-8 py-14 sm:px-12 lg:py-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">HR4EU</p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{fp.title}</h1>
          </div>
        </div>
        <div className="relative h-56 w-full lg:h-auto lg:w-1/2 lg:shrink-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
            alt="Financial analysis"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="content-width mx-auto px-4 pt-10 pb-14 sm:pt-14 sm:pb-20">

        <div className="mt-10 mx-auto max-w-3xl overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-lg">
          <CostComparisonGraph />
        </div>

        <div className="mt-10 mx-auto max-w-3xl overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg sm:p-8">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{fp.exampleTitle}</h2>
          <div className="mt-6 space-y-6 border-t border-slate-200 pt-6">
            <div>
              <h3 className="font-semibold text-slate-800">{fp.classicEmployee}</h3>
              <ul className="mt-2 space-y-1 text-slate-700">
                <li>{fp.classicGross}</li>
                <li>{fp.classicCosts}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">{fp.ourSolution}</h3>
              <ul className="mt-2 space-y-1 text-slate-700">
                <li>{fp.ourSolutionPrice}</li>
                <li>{fp.ourSolutionVacation}</li>
                <li>{fp.ourSolutionSick}</li>
              </ul>
            </div>
            <div className="rounded-xl bg-[#eef2ff] p-4">
              <h3 className="font-semibold text-[var(--accent)]">{fp.yourSavings}</h3>
              <ul className="mt-2 space-y-1 font-medium text-slate-800">
                <li>{fp.savingsMonthly}</li>
                <li>{fp.savingsYearly}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-[var(--accent)] p-8 text-center text-white sm:p-10">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">{t.cta.title}</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-[var(--accent)] transition-all hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--accent)]"
              aria-label={t.cta.bookCall}
            >
              {t.cta.bookCall}
            </Link>
            <a
              href="mailto:info@hr4eu.cz"
              className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-4 font-medium text-white transition-all hover:bg-white hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--accent)]"
              aria-label={t.cta.emailUs}
            >
              {t.cta.emailUs}
            </a>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}
