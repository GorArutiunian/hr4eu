"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold text-gray-900">{t.notFound.title}</h1>
      <p className="mt-2 text-[#4B5563]">{t.notFound.text}</p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-[#3F36D1] px-6 py-3 text-white font-medium hover:bg-[#352bb8] focus:outline-none focus:ring-2 focus:ring-[#3F36D1] focus:ring-offset-2"
      >
        {t.notFound.back}
      </Link>
    </div>
  );
}
