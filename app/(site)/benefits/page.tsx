"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { HR4EUInline } from "@/components/HR4EUBrand";

const benefitKeys = [
  "benefit1",
  "benefit2",
  "benefit3",
  "benefit4",
  "benefit5",
  "benefit6",
] as const;

const totalBenefits = benefitKeys.length;

function getBenefitTitleAndDesc(
  key: string,
  bp: Record<string, string>,
): { title: string; desc: string } {
  const titleKey = `${key}Title`;
  const descKey = `${key}Desc`;
  return {
    title: typeof bp[titleKey] === "string" ? bp[titleKey] : "",
    desc: typeof bp[descKey] === "string" ? bp[descKey] : "",
  };
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
      {/* Header with background image */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--accent)]/75" />
        <div className="relative content-width mx-auto px-4 pt-16 pb-14 sm:pt-20 sm:pb-16 text-center">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="" className="h-20 w-auto sm:h-24 md:h-28 brightness-0 invert" aria-hidden />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl" id="benefits-list-heading">
            <HR4EUInline>{(bp as { titleWithBrand?: string }).titleWithBrand ?? bp.title}</HR4EUInline>
          </h1>
        </div>
      </div>

      {/* Full list of benefits – all 4 cards, not separated */}
      <section className="content-width mx-auto px-4 pb-14 sm:pb-20" aria-labelledby="benefits-list-heading">
        <h2 id="benefits-list-heading" className="sr-only">
          Benefit details
        </h2>
        <ul className="w-full space-y-6 sm:space-y-8">
          {benefitKeys.map((key, i) => {
            const isSelected = i === selectedIndex;
            const { title, desc } = getBenefitTitleAndDesc(key, bp as unknown as Record<string, string>);
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
                    {!!((bp as unknown as Record<string, unknown>)[`${key}Desc2`]) && (
                      <p className="mt-3 text-slate-600 leading-relaxed sm:text-lg">
                        {String((bp as unknown as Record<string, unknown>)[`${key}Desc2`])}
                      </p>
                    )}
                    {Array.isArray((bp as unknown as Record<string, unknown>)[`${key}List`]) && (
                      <div className="mt-4">
                        {!!((bp as unknown as Record<string, unknown>)[`${key}ListTitle`]) && (
                          <p className="font-semibold text-slate-700 sm:text-lg">
                            {String((bp as unknown as Record<string, unknown>)[`${key}ListTitle`])}
                          </p>
                        )}
                        <ul className="mt-2 space-y-1.5">
                          {((bp as unknown as Record<string, unknown>)[`${key}List`] as string[]).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-600 sm:text-lg">
                              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* CTA */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="rounded-2xl bg-[var(--accent)] p-8 text-center text-white sm:p-10">
          <h2 className="text-xl font-semibold sm:text-2xl">{bp.ctaTitle}</h2>
          {bp.ctaSubtitle ? <p className="mt-2 text-white/90">{bp.ctaSubtitle}</p> : null}
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
