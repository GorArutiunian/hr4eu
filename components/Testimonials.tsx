"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function Testimonials() {
  const { t } = useLocale();
  const items = (t.testimonials as { items?: readonly { quote: string; role: string }[] }).items ?? [];

  return (
    <section
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#3F36D1]/[0.04]" style={{ filter: "blur(70px)" }} aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 id="testimonials-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t.testimonials.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-[#4B5563]">
            {t.testimonials.subtitle}
          </p>
        </motion.div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.blockquote
              key={item.role}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/80"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <p className="text-[#4B5563]">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-medium text-gray-700">
                — {item.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
