import type { Metadata } from "next";
import { Inter, Permanent_Marker, Caveat } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/context/LocaleContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-graffiti",
  display: "swap",
});

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-graffiti-smooth",
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
    <html lang="en" className={`${inter.variable} ${permanentMarker.variable} ${caveat.variable}`}>
      <body className="min-h-screen text-slate-900 antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
