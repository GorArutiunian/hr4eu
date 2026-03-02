"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { HR4EUInline } from "@/components/HR4EUBrand";

const benefitKeys = [
  "benefit1",
  "benefit2",
  "benefit3",
  "benefit5",
  "benefit4",
  "benefit6",
  "benefit7",
  "benefit8",
] as const;

const totalBenefits = benefitKeys.length;

const heroPillKeys = ["costPoint1", "costPoint2", "costPoint3", "costPoint5"] as const;
const pageOnlyPillKeys = ["pill4", "pill6", "pill7", "pill8"] as const;

function getPillLabel(bp: Record<string, string>, hero: Record<string, string>, i: number): string {
  if (i < heroPillKeys.length) return hero[heroPillKeys[i]] ?? "";
  const pageKey = pageOnlyPillKeys[i - heroPillKeys.length];
  return bp[pageKey] ?? "";
}

function getInitialIndex(): number {
  if (typeof window === "undefined") return -1;
  const hash = window.location.hash;
  const m = hash?.match(/^#benefit-(\d+)$/);
  if (m) {
    const n = parseInt(m[1], 10);
    if (n >= 1 && n <= totalBenefits) return n - 1;
  }
  return -1;
}

export default function BenefitsPage() {
  const { t } = useLocale();
  const bp = t.benefitsPage;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);

  function scrollToCenterCard(i: number) {
    if (i >= 0) cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  useEffect(() => {
    const i = getInitialIndex();
    setSelectedIndex(i);
    const onHashChange = () => {
      const idx = getInitialIndex();
      setSelectedIndex(idx);
      if (idx >= 0) scrollToCenterCard(idx);
    };
    window.addEventListener("hashchange", onHashChange);
    if (i >= 0) {
      const timeoutId = setTimeout(() => scrollToCenterCard(i), 100);
      return () => {
        window.removeEventListener("hashchange", onHashChange);
        clearTimeout(timeoutId);
      };
    }
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function handleSelect(i: number) {
    setSelectedIndex(i);
    window.history.replaceState(null, "", `#benefit-${i + 1}`);
    scrollToCenterCard(i);
  }

  return (
    <main className="min-h-screen bg-palette-section">
      {/* Header like How HR4EU Works: logo + title with company name */}
      <div className="content-width mx-auto px-4 pt-10 pb-8 sm:pt-14 sm:pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="" className="h-20 w-auto sm:h-24 md:h-28 [mix-blend-mode:multiply]" aria-hidden />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl" id="benefits-list-heading">
            <HR4EUInline>{(bp as { titleWithBrand?: string }).titleWithBrand ?? bp.title}</HR4EUInline>
          </h1>
          <p className="mt-4 text-lg text-slate-600 sm:text-xl">
            {bp.subtitle}
          </p>
          <p className="mt-6 text-base text-slate-600 leading-relaxed">
            <HR4EUInline>{bp.intro}</HR4EUInline>
          </p>
        </div>

        {/* Benefit selector pills – side by side, chosen one highlighted */}
        <div className="mt-10 mx-auto max-w-4xl">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 text-center">
            Choose a benefit
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {benefitKeys.map((_, i) => {
              const isActive = i === selectedIndex;
              const label = getPillLabel(bp as Record<string, string>, t.hero as Record<string, string>, i);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelect(i)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[var(--accent)] text-white shadow-md"
                      : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-[var(--accent)] hover:text-slate-900"
                  }`}
                >
                  {label.length > 28 ? label.slice(0, 27) + "…" : label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full list of benefits – all 4 cards, not separated */}
      <section className="content-width mx-auto px-4 pb-14 sm:pb-20" aria-labelledby="benefits-list-heading">
        <h2 id="benefits-list-heading" className="sr-only">
          Benefit details
        </h2>
        <ul className="w-full space-y-6 sm:space-y-8">
          {benefitKeys.map((key, i) => {
            const titleKey = `${key}Title` as keyof typeof bp;
            const descKey = `${key}Desc` as keyof typeof bp;
            const isSelected = i === selectedIndex;
            const title = typeof bp[titleKey] === "string" ? bp[titleKey] : "";
            const desc = typeof bp[descKey] === "string" ? bp[descKey] : "";
            return (
              <li
                key={key}
                ref={(el) => { cardRefs.current[i] = el; }}
                id={`benefit-${i + 1}`}
                className={`rounded-2xl border-2 bg-white p-6 shadow-sm transition-all sm:p-8 ${
                  isSelected ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/20" : "border-slate-200"
                }`}
              >
                <div className="flex gap-4 sm:gap-6">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold sm:h-14 sm:w-14 ${
                      isSelected ? "bg-[var(--accent)] text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed sm:text-lg">
                      <HR4EUInline>{desc}</HR4EUInline>
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* What we do */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-14" aria-labelledby="what-we-do-heading">
        <div className="rounded-2xl bg-[#eef2ff] p-6 sm:p-8 md:p-10">
          <h2 id="what-we-do-heading" className="text-xl font-bold text-slate-900 sm:text-2xl">
            {bp.whatWeDo}
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed sm:text-lg">
            <HR4EUInline>{bp.whatWeDoDesc}</HR4EUInline>
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="rounded-2xl bg-[var(--accent)] p-8 text-center text-white sm:p-10">
          <h2 className="text-xl font-semibold sm:text-2xl">{bp.ctaTitle}</h2>
          <p className="mt-2 text-white/90">{bp.ctaSubtitle}</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-[var(--accent)] transition-all hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--accent)]"
          >
            {bp.bookCall}
          </Link>
        </div>
      </div>
    </main>
  );
}
