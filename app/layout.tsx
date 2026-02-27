import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/context/LocaleContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HR4EU — European Teams Powered by Armenian Talent",
    template: "%s | HR4EU",
  },
  description:
    "Reduce hiring costs while scaling faster with managed EU–Armenia specialist teams.",
  openGraph: {
    title: "HR4EU — European Teams Powered by Armenian Talent",
    description:
      "Reduce hiring costs while scaling faster with managed EU–Armenia specialist teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-gray-800 antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
