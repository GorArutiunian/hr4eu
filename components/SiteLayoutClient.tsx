"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
