import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about HR4EU and the EU–Armenia team model.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-palette-section section-pad">
      <div className="content-width mx-auto max-w-4xl px-4">
        <FAQSection />
      </div>
    </main>
  );
}
