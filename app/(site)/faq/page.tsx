import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about HR4EU and the EU–Armenia team model.",
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <FAQSection />
    </div>
  );
}
