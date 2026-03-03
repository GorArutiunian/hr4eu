"use client";

import Link from "next/link";
import { HR4EUInline } from "@/components/HR4EUBrand";
import { useLocale } from "@/context/LocaleContext";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <main className="flex min-h-screen flex-col bg-palette-section section-pad">
      <div className="content-width mx-auto flex flex-1 flex-col px-4">
        {/* Centered header like Services / Benefits */}
        <div className="mx-auto max-w-6xl text-center">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="" className="h-20 w-auto sm:h-24 md:h-28 [mix-blend-mode:multiply]" aria-hidden />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            <HR4EUInline>{t.about.title}</HR4EUInline>
          </h1>
        </div>
        <div className="mx-auto mt-8 flex max-w-6xl flex-1 flex-col min-h-screen pb-16">
        <div className="overflow-hidden rounded-2xl border-2 border-[var(--accent-orange)] shadow-lg ring-2 ring-[var(--accent-orange)]/20">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
            alt=""
            className="h-72 w-full object-cover sm:h-80 md:h-96"
          />
          <div className="bg-[var(--accent)]/90 px-5 py-4 text-white font-medium">
            European companies & Armenian talent — one team.
          </div>
        </div>
        <div className="mt-10 rounded-2xl bg-white/90 p-8 shadow-md ring-1 ring-[var(--border)]">
          <p className="text-lg leading-relaxed text-palette-muted sm:text-xl"><HR4EUInline>{t.about.p1}</HR4EUInline></p>
          <p className="mt-6 text-lg leading-relaxed text-palette-muted sm:text-xl"><HR4EUInline>{t.about.p2}</HR4EUInline></p>
        </div>
        <div className="mt-12 rounded-2xl border-2 border-[var(--accent)] bg-[#eef2ff] p-8 shadow-md">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-palette-fg sm:text-2xl">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-palette-accent text-sm font-bold text-white">!</span>
            {t.about.missionTitle}
          </h2>
          <p className="mt-4 text-palette-muted leading-relaxed sm:text-lg">{t.about.missionP1}</p>
          <p className="mt-5 text-palette-muted leading-relaxed sm:text-lg">{t.about.missionP2}</p>
        </div>
        <div className="min-h-[1rem] flex-1" aria-hidden />
        <div className="mt-12 rounded-2xl bg-palette-accent px-8 py-10 text-center text-white shadow-lg">
          <p className="font-medium opacity-90">{t.about.ctaPrompt}</p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-palette-accent hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--accent)]"
          >
            {t.about.getInTouch}
          </Link>
        </div>
        </div>
      </div>
    </main>
  );
}
