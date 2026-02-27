"use client";

import Link from "next/link";
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
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200/80 sm:p-10">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-[#4B5563]">{shortDesc}</p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#3F36D1] px-6 py-3 text-white font-medium hover:bg-[#352bb8] focus:outline-none focus:ring-2 focus:ring-[#3F36D1] focus:ring-offset-2"
        >
          {t.serviceDetail.getInTouch}
        </Link>
      </div>

      <section className="mt-12" aria-labelledby="roles-heading">
        <h2 id="roles-heading" className="text-xl font-semibold text-gray-900">
          {t.serviceDetail.rolesTitle}
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-[#4B5563]">
          {service.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="engagement-heading">
        <h2 id="engagement-heading" className="text-xl font-semibold text-gray-900">
          {t.serviceDetail.engagementTitle}
        </h2>
        <p className="mt-4 text-[#4B5563]">
          Team composition: {service.engagementModel.euLead},{" "}
          {service.engagementModel.specialists}.
        </p>
      </section>

      <section className="mt-12" aria-labelledby="why-heading">
        <h2 id="why-heading" className="text-xl font-semibold text-gray-900">
          {t.serviceDetail.whyTitle}
        </h2>
        <ul className="mt-4 space-y-3 text-[#4B5563]">
          {service.whyHr4eu.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#3F36D1]" aria-hidden="true">
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-14 rounded-2xl bg-[#3F36D1] p-8 text-center">
        <h2 className="text-xl font-semibold text-white">
          {t.serviceDetail.ctaTitle}
        </h2>
        <p className="mt-2 text-white/90">{t.serviceDetail.ctaSubtitle}</p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-medium text-[#3F36D1] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#3F36D1]"
        >
          {t.serviceDetail.contactUs}
        </Link>
      </div>
    </div>
  );
}
