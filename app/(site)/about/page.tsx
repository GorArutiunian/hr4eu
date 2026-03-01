"use client";

import Link from "next/link";
import { HR4EUInline } from "@/components/HR4EUBrand";
import { useLocale } from "@/context/LocaleContext";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <main className="min-h-screen bg-palette-section section-pad">
      <div className="content-width mx-auto max-w-3xl px-4">
        <div className="rounded-2xl bg-[var(--accent-orange-light)]/80 px-6 py-4 ring-2 ring-[var(--accent-orange)]/30">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="" className="h-14 w-auto shrink-0" />
            <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-palette-orange">About us</span>
          <h1 className="mt-2 text-3xl font-bold text-palette-fg sm:text-4xl">
            <HR4EUInline>{t.about.title}</HR4EUInline>
          </h1>
            </div>
          </div>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border-2 border-[var(--accent-orange)] shadow-lg ring-2 ring-[var(--accent-orange)]/20">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
            alt=""
            className="h-56 w-full object-cover sm:h-64"
          />
          <div className="bg-[var(--accent)]/90 px-5 py-3 text-white font-medium">
            European companies & Armenian talent — one team.
          </div>
        </div>
        <div className="mt-8 rounded-2xl bg-white/90 p-6 shadow-md ring-1 ring-[var(--border)]">
          <p className="text-lg text-palette-muted"><HR4EUInline>{t.about.p1}</HR4EUInline></p>
          <p className="mt-4 text-lg text-palette-muted"><HR4EUInline>{t.about.p2}</HR4EUInline></p>
        </div>
        <div className="mt-10 rounded-2xl border-2 border-[var(--accent)] bg-[#eef2ff] p-6 shadow-md">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-palette-fg">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-palette-accent text-sm font-bold text-white">!</span>
            {t.about.missionTitle}
          </h2>
          <p className="mt-3 text-palette-muted">{t.about.missionP1}</p>
          <p className="mt-4 text-palette-muted">{t.about.missionP2}</p>
        </div>
        <div className="mt-10 rounded-2xl bg-palette-accent px-6 py-8 text-center text-white shadow-lg">
          <p className="font-medium opacity-90">Ready to get started?</p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-palette-accent hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--accent)]"
          >
            {t.about.getInTouch}
          </Link>
        </div>
      </div>
    </main>
  );
}
