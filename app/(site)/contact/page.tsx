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

  const phoneNumber = (t.contact as { phoneNumber?: string }).phoneNumber ?? "";

  return (
    <main className="min-h-screen bg-palette-section">
      {/* Hero banner */}
      <div className="relative flex min-h-[340px] flex-col overflow-hidden text-white lg:flex-row">
        <div className="flex flex-1 items-center bg-gradient-to-br from-[var(--accent)] to-[#1a3fa8] px-8 py-16 sm:px-12 sm:py-20 lg:py-24">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">
              HR4EU
            </p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              {t.contact.title}
            </h1>
            <p className="mt-4 text-lg text-white/80">{t.contact.subtitle}</p>
          </div>
        </div>
        <div className="relative h-64 w-full lg:h-auto lg:w-1/2 lg:shrink-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
            alt="Team at work"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Left: contact info cards */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Phone card */}
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="group flex items-start gap-4 rounded-2xl border border-[var(--accent)]/20 bg-white p-6 shadow-md transition hover:shadow-lg hover:border-[var(--accent)]/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] transition group-hover:bg-[var(--accent)] group-hover:text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-palette-muted">{t.contact.phone}</p>
                <p className="mt-0.5 text-lg font-bold text-palette-fg">{phoneNumber}</p>
              </div>
            </a>

            {/* Email card */}
            <a
              href="mailto:info@hr4eu.cz"
              className="group flex items-start gap-4 rounded-2xl border border-[var(--accent)]/20 bg-white p-6 shadow-md transition hover:shadow-lg hover:border-[var(--accent)]/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] transition group-hover:bg-[var(--accent)] group-hover:text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-palette-muted">E-mail</p>
                <p className="mt-0.5 text-lg font-bold text-palette-fg">info@hr4eu.cz</p>
              </div>
            </a>

            {/* Location card */}
            <div className="flex items-start gap-4 rounded-2xl border border-[var(--accent)]/20 bg-white p-6 shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-palette-muted">Praha</p>
                <p className="mt-0.5 text-base font-semibold text-palette-fg">Česká republika</p>
              </div>
            </div>

          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-green-50 p-10 text-center ring-2 ring-green-300">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-green-800">{t.contact.successTitle}</h2>
                <p className="mt-2 text-green-700">{t.contact.successText}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-full bg-green-600 px-6 py-2.5 font-semibold text-white hover:bg-green-700"
                >
                  {t.contact.send === "Odeslat zprávu" ? "Napsat znovu" : "Send another"}
                </button>
              </div>
            ) : (
              <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5 sm:p-10">
                <h2 className="mb-6 text-xl font-bold text-palette-fg">
                  {t.contact.send === "Odeslat zprávu" ? "Napište nám zprávu" : "Send us a message"}
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                  aria-label="Contact form"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-palette-fg">
                        {t.contact.name}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder={t.contact.name === "Jméno" ? "Jan Novák" : "John Doe"}
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-palette-fg placeholder-gray-400 transition focus:border-[var(--accent)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
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
                        placeholder="vas@email.cz"
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-palette-fg placeholder-gray-400 transition focus:border-[var(--accent)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-palette-fg">
                      {t.contact.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder={t.contact.message === "Zpráva" ? "Jak vám můžeme pomoci?" : "How can we help you?"}
                      className="mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-palette-fg placeholder-gray-400 transition focus:border-[var(--accent)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
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
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 sm:w-auto"
                  >
                    {t.contact.send}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
