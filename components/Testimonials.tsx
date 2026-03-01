"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

const testimonialImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=85",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=85",
];

export default function Testimonials() {
  const { t } = useLocale();
  const items = (t.testimonials as { items?: readonly { quote: string; role: string }[] }).items ?? [];

  return (
    <section
      className="relative overflow-hidden bg-palette-section section-pad"
      aria-labelledby="testimonials-heading"
    >
      <div className="content-width relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.testimonials.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            {t.testimonials.subtitle}
          </p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.blockquote
              key={item.role}
              className="box-frame-blue overflow-hidden p-0 transition-all duration-200 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="h-52 w-full shrink-0 overflow-hidden bg-slate-100">
                <img
                  src={testimonialImages[i % testimonialImages.length]}
                  alt=""
                  className="h-full w-full object-cover object-[center_28%]"
                />
              </div>
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-4 flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-200">
                    <img
                      src={testimonialImages[i % testimonialImages.length]}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </span>
                  — {item.role}
                </footer>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
