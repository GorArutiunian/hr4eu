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
    <main className="min-h-screen bg-palette-section section-pad">
      <div className="content-width mx-auto max-w-xl px-4">
        <div className="rounded-2xl bg-[#eef2ff] px-6 py-5 shadow-md ring-2 ring-[var(--accent)]/20">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="" className="h-12 w-auto shrink-0" />
            <div>
          <span className="inline-block rounded-full bg-palette-accent px-4 py-1.5 text-sm font-semibold text-white">
            Get in touch
          </span>
          <h1 className="mt-4 text-3xl font-bold text-palette-fg sm:text-4xl">
            {t.contact.title}
          </h1>
          <p className="mt-3 text-lg text-palette-muted">{t.contact.subtitle}</p>
              <a
                href={`tel:${(t.contact as { phoneNumber?: string }).phoneNumber?.replace(/\s/g, "") ?? ""}`}
                className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-palette-accent hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded"
              >
                <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z" />
                </svg>
                {(t.contact as { phoneNumber?: string }).phoneNumber ?? ""}
              </a>
            </div>
          </div>
        </div>

        {status === "success" && (
          <div
            className="mt-6 rounded-xl bg-green-100 p-4 text-green-800 ring-2 ring-green-300"
            role="status"
            aria-live="polite"
          >
            <p className="font-medium">{t.contact.successTitle}</p>
            <p className="mt-1 text-sm">{t.contact.successText}</p>
          </div>
        )}

        <div className="mt-8 rounded-2xl border-2 border-[var(--accent-orange)]/40 bg-[var(--accent-orange-light)]/50 p-6 shadow-lg ring-2 ring-[var(--accent-orange)]/20 sm:p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-palette-fg">
                {t.contact.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-1 block w-full rounded-xl border-2 border-white bg-white/90 px-4 py-3 text-palette-fg shadow-sm focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-0"
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
              <label htmlFor="email" className="block text-sm font-medium text-palette-fg">
                {t.contact.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1 block w-full rounded-xl border-2 border-white bg-white/90 px-4 py-3 text-palette-fg shadow-sm focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-0"
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
              <label htmlFor="message" className="block text-sm font-medium text-palette-fg">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full rounded-xl border-2 border-white bg-white/90 px-4 py-3 text-palette-fg shadow-sm focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-0"
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
              className="w-full rounded-full bg-palette-accent px-6 py-3.5 font-semibold text-white shadow-md hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 sm:w-auto sm:px-8"
            >
              {t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
