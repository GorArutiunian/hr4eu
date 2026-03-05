"use client";

import Link from "next/link";
import { HR4EUInline } from "@/components/HR4EUBrand";
import { useLocale } from "@/context/LocaleContext";

export default function AboutPage() {
  const { t } = useLocale();
  const a = t.about as typeof t.about & {
    p3: string;
    whatItMeansTitle: string;
    whatItMeansList: string[];
    whatItMeansClose: string;
    differenceIntro1: string;
    differenceIntro2: string;
    differenceP1: string;
    differenceP2: string;
    differenceP3: string;
    differenceList: string[];
    differenceClose1: string;
    differenceClose2: string;
  };

  return (
    <main className="flex min-h-screen flex-col bg-palette-section section-pad">
      <div className="content-width mx-auto flex flex-1 flex-col px-4">

        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="" className="h-20 w-auto sm:h-24 md:h-28 [mix-blend-mode:multiply]" aria-hidden />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            <HR4EUInline>{a.title}</HR4EUInline>
          </h1>
        </div>

        <div className="mt-8 w-full space-y-6 pb-16">

          {/* Hero image */}
          <div className="overflow-hidden rounded-2xl border-2 border-[var(--accent-orange)] shadow-lg ring-2 ring-[var(--accent-orange)]/20">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
              alt=""
              className="h-48 w-full object-cover sm:h-56 md:h-64"
            />
          </div>

          {/* Origin / history */}
          <div className="rounded-2xl bg-white/90 p-6 shadow-md ring-1 ring-[var(--border)] sm:p-8">
            <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
              <HR4EUInline>{a.p1}</HR4EUInline>
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-700 sm:text-xl">
              <HR4EUInline>{a.p2}</HR4EUInline>
            </p>
            <p className="mt-5 text-lg font-semibold leading-relaxed text-slate-800 sm:text-xl">
              <HR4EUInline>{a.p3}</HR4EUInline>
            </p>
          </div>

          {/* What it means for you */}
          <div className="rounded-2xl border-2 border-[var(--accent)] bg-[#eef2ff] p-6 shadow-md sm:p-8">
            <h2 className="text-xl font-bold text-[var(--accent)] sm:text-2xl">
              {a.whatItMeansTitle}
            </h2>
            <ul className="mt-4 space-y-2">
              {a.whatItMeansList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 sm:text-lg">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base font-medium italic text-slate-600 sm:text-lg">
              {a.whatItMeansClose}
            </p>
          </div>

          {/* Why HR4EU is different */}
          <div className="rounded-2xl bg-white/90 p-6 shadow-md ring-1 ring-[var(--border)] sm:p-8">
            <p className="text-lg font-semibold leading-relaxed text-slate-800 sm:text-xl">
              {a.differenceIntro1}
            </p>
            <p className="mt-2 text-lg font-bold leading-relaxed text-[var(--accent)] sm:text-xl">
              {a.differenceIntro2}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
              <HR4EUInline>{a.differenceP1}</HR4EUInline>
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              <HR4EUInline>{a.differenceP2}</HR4EUInline>
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              {a.differenceP3}
            </p>
            <ul className="mt-3 space-y-1.5 ml-1">
              {a.differenceList.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-700 sm:text-lg">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="text-base font-bold text-slate-900 sm:text-lg">{a.differenceClose1}</p>
              <p className="mt-1 text-base font-semibold text-[var(--accent)] sm:text-lg">{a.differenceClose2}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-palette-accent px-8 py-10 text-center text-white shadow-lg">
            <p className="font-medium opacity-90">{a.ctaPrompt}</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-palette-accent hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--accent)]"
            >
              {a.getInTouch}
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
