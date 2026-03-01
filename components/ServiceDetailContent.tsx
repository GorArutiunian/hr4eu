"use client";

import Link from "next/link";
import { HR4EUInline } from "@/components/HR4EUBrand";
import { useLocale } from "@/context/LocaleContext";
import type { ServiceItem } from "@/lib/services";

export default function ServiceDetailContent({
  service,
}: {
  service: ServiceItem;
}) {
  const { t } = useLocale();
  const title =
    (t as { serviceTitles?: Record<string, string> }).serviceTitles?.[
      service.slug
    ] ?? service.title;
  const shortDesc =
    (t as { serviceShortDesc?: Record<string, string> }).serviceShortDesc?.[
      service.slug
    ] ?? service.shortDescription;

  return (
    <main className="min-h-screen bg-palette-section section-pad">
      <div className="content-width mx-auto max-w-4xl px-4">
      <div className="box-frame-blue p-8 sm:p-10">
        <h1 className="text-3xl font-bold text-palette-fg sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-palette-muted">{shortDesc}</p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-palette-accent px-6 py-3 text-white font-medium hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
        >
          {t.serviceDetail.getInTouch}
        </Link>
      </div>

      <section className="mt-12" aria-labelledby="roles-heading">
<h2 id="roles-heading" className="text-xl font-semibold text-palette-fg">
        {t.serviceDetail.rolesTitle}
      </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-palette-muted">
          {service.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="engagement-heading">
<h2 id="engagement-heading" className="text-xl font-semibold text-palette-fg">
        {t.serviceDetail.engagementTitle}
      </h2>
        <p className="mt-4 text-palette-muted">
          Team composition: {service.engagementModel.euLead},{" "}
          {service.engagementModel.specialists}.
        </p>
      </section>

      <section className="mt-12" aria-labelledby="why-heading">
<h2 id="why-heading" className="text-xl font-semibold text-palette-fg">
        <HR4EUInline>{t.serviceDetail.whyTitle}</HR4EUInline>
      </h2>
        <ul className="mt-4 space-y-3 text-palette-muted">
          {service.whyHr4eu.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-palette-accent" aria-hidden="true">
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-14 rounded-2xl bg-palette-accent p-8 text-center">
        <h2 className="text-xl font-semibold text-white">
          {t.serviceDetail.ctaTitle}
        </h2>
        <p className="mt-2 text-white/90">{t.serviceDetail.ctaSubtitle}</p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-medium text-palette-accent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--accent)]"
        >
          {t.serviceDetail.contactUs}
        </Link>
      </div>
      </div>
    </main>
  );
}
