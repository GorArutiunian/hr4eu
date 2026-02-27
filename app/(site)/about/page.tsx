"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        {t.about.title}
      </h1>
      <p className="mt-6 text-lg text-[#4B5563]">{t.about.p1}</p>
      <p className="mt-4 text-lg text-[#4B5563]">{t.about.p2}</p>
      <h2 className="mt-10 text-xl font-semibold text-gray-900">
        {t.about.missionTitle}
      </h2>
      <p className="mt-3 text-[#4B5563]">{t.about.missionP1}</p>
      <p className="mt-4 text-[#4B5563]">{t.about.missionP2}</p>
      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[#3F36D1] px-6 py-3 text-white font-medium hover:bg-[#352bb8] focus:outline-none focus:ring-2 focus:ring-[#3F36D1] focus:ring-offset-2"
        >
          {t.about.getInTouch}
        </Link>
      </div>
    </div>
  );
}
