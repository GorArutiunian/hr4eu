import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial examples",
  description:
    "See why working with HR4EU is much better: cost comparison, lower monthly cost per employee, and simple explanation of savings.",
};

export default function FinancialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
