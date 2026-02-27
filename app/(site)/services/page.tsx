"use client";

import Link from "next/link";
import { services } from "@/lib/services";
import { useLocale } from "@/context/LocaleContext";

export default function ServicesIndexPage() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        {t.services.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-[#4B5563]">
        {t.services.subtitle}
      </p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const title =
            (t as { serviceTitles?: Record<string, string> }).serviceTitles?.[
              service.slug
            ] ?? service.title;
          const shortDesc =
            (t as { serviceShortDesc?: Record<string, string> }).serviceShortDesc?.[
              service.slug
            ] ?? service.shortDescription;
          return (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#3F36D1]/30 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3F36D1] focus:ring-offset-2"
              >
                <h2 className="text-lg font-semibold text-gray-900 hover:text-[#3F36D1]">
                  {title}
                </h2>
                <p className="mt-2 text-sm text-[#4B5563]">{shortDesc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[#3F36D1]">
                  {t.services.learnMore}
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
