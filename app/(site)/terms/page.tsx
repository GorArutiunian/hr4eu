"use client";

import { useLocale } from "@/context/LocaleContext";

export default function TermsPage() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">{t.terms.title}</h1>
      <p className="mt-4 text-[#4B5563]">{t.terms.placeholder}</p>
    </div>
  );
}
