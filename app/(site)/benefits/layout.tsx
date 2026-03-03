import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why us",
  description:
    "Discover all HR4EU benefits: cost savings, no employment overhead, transparent pricing, and how we help European companies build hybrid EU–Armenia teams.",
};

export default function BenefitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
