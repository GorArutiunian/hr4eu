import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about HR4EU and the EU–Armenia team model.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-palette-section">
      {/* Hero banner */}
      <div className="relative flex min-h-[280px] flex-col overflow-hidden text-white lg:flex-row">
        <div className="flex flex-1 items-center bg-gradient-to-br from-[var(--accent)] to-[#1a3fa8] px-8 py-14 sm:px-12 lg:py-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">HR4EU</p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">FAQ</h1>
          </div>
        </div>
        <div className="relative h-56 w-full lg:h-auto lg:w-1/2 lg:shrink-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
            alt="Team discussion"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="content-width mx-auto max-w-4xl px-4 section-pad">
        <FAQSection />
      </div>
    </main>
  );
}
