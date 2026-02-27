"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useLocale } from "@/context/LocaleContext";

export default function ContactPage() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(
    name: string,
    email: string,
    message: string
  ): Record<string, string> {
    const err: Record<string, string> = {};
    if (!name.trim()) err.name = t.contact.nameRequired;
    if (!email.trim()) err.email = t.contact.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      err.email = t.contact.emailInvalid;
    if (!message.trim()) err.message = t.contact.messageRequired;
    return err;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    setErrors({});
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    const err = validate(name, email, message);
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    setStatus("success");
    form.reset();
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        {t.contact.title}
      </h1>
      <p className="mt-4 text-lg text-[#4B5563]">{t.contact.subtitle}</p>

      {status === "success" && (
        <div
          className="mt-6 rounded-xl bg-green-50 p-4 text-green-800 ring-1 ring-green-200"
          role="status"
          aria-live="polite"
        >
          <p className="font-medium">{t.contact.successTitle}</p>
          <p className="mt-1 text-sm">{t.contact.successText}</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
        noValidate
        aria-label="Contact form"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            {t.contact.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-[#3F36D1] focus:ring-1 focus:ring-[#3F36D1]"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {t.contact.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-[#3F36D1] focus:ring-1 focus:ring-[#3F36D1]"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            {t.contact.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-[#3F36D1] focus:ring-1 focus:ring-[#3F36D1]"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-[#3F36D1] px-6 py-3.5 font-medium text-white hover:bg-[#352bb8] focus:outline-none focus:ring-2 focus:ring-[#3F36D1] focus:ring-offset-2 sm:w-auto sm:px-8"
        >
          {t.contact.send}
        </button>
      </form>
    </div>
  );
}
