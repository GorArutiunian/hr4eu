"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import CostComparisonGraph from "@/components/CostComparisonGraph";
import { useLocale } from "@/context/LocaleContext";

function WritingPencilSticker({ text, reducedMotion }: { text: string; reducedMotion: boolean | null }) {
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setVisibleLength(text.length);
      return;
    }
    if (visibleLength >= text.length) return;
    const t = setTimeout(() => setVisibleLength((n) => n + 1), 90);
    return () => clearTimeout(t);
  }, [visibleLength, text.length, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => setVisibleLength(0), 3500);
    return () => clearInterval(id);
  }, [reducedMotion]);

  const visible = text.slice(0, visibleLength);

  return (
    <div className="card-3d relative inline-flex w-full items-center justify-center gap-1 rounded-2xl bg-white px-5 py-3 ring-1 ring-slate-200/80">
      <span className="text-xl font-bold text-slate-800 sm:text-2xl" style={{ fontFamily: "Georgia, serif" }}>
        {visible}
        <motion.span
          className="inline-block align-middle text-slate-800"
          animate={{ opacity: [1, 0.3] }}
          transition={{ duration: 0.4, repeat: Infinity }}
        >
          |
        </motion.span>
      </span>
      <motion.div
        className="shrink-0 text-slate-600"
        animate={{ x: [0, 1, 0], rotate: [-45, -43, -45] }}
        transition={{ duration: 0.12, repeat: Infinity }}
      >
        <svg className="h-6 w-6 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </motion.div>
    </div>
  );
}

const costPointKeys = ["costPoint1", "costPoint2", "costPoint3", "costPoint5"] as const;

const carouselImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=85",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85",
];

export default function Hero() {
  const { t } = useLocale();
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = 2 + costPointKeys.length; // logo + graph + 4 benefits

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 8000); // 8 seconds per slide
    return () => clearInterval(interval);
  }, [reducedMotion, totalSlides]);

  return (
    <section
      className="relative overflow-hidden bg-hero-bright-blue py-10 lg:py-14"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 content-width mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:items-stretch">
          {/* Left: slogan, tagline, CTAs, benefit list */}
          <div className="flex min-w-0 flex-col justify-center">
            <motion.h1
              id="hero-heading"
              className="max-w-full uppercase text-[var(--accent-orange)] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl [font-family:var(--font-graffiti-smooth),var(--font-graffiti),system-ui,sans-serif]"
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="block">{(t.hero as { sloganLine1?: string }).sloganLine1 ?? t.hero.slogan.split(" ")[0]}</span>
              <span className="mt-0.5 block pl-[28%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" aria-hidden>
                {(t.hero as { sloganLine2?: string }).sloganLine2 ?? t.hero.slogan.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            {/* List – 4 benefit sentences + Financial examples (all clickable) */}
            <div className="mt-6 flex flex-col gap-5" aria-label="Key benefits">
              {costPointKeys.map((key, i) => {
                const isActive = i + 2 === activeIndex; // slides 2–5 match list items 0–3
                return (
                  <Link
                    key={key}
                    href={`/benefits#benefit-${i + 1}`}
                    className={`group flex w-full items-center gap-4 text-left transition-all duration-300 focus:outline-none py-2.5 ${
                      isActive ? "opacity-100" : "opacity-60 hover:opacity-90"
                    }`}
                  >
                    <motion.span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isActive ? "bg-[var(--accent-orange)] text-white" : "bg-slate-200 text-slate-600 group-hover:bg-slate-300"
                      }`}
                      aria-hidden
                      animate={{ scale: isActive ? 1.35 : 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.span>
                    <span
                      className={`flex-1 min-w-0 text-lg font-semibold leading-snug transition-colors sm:text-xl md:text-2xl ${
                        isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                      }`}
                    >
                      {t.hero[key]}
                    </span>
                    {isActive && (
                      <span className="shrink-0 rounded-full bg-[var(--accent-orange)] px-3 py-1.5 text-xs font-bold text-white" aria-hidden>
                        {t.hero.nowShowing}
                      </span>
                    )}
                  </Link>
                );
              })}
              <Link
                href="/financials"
                className="group flex w-full items-center gap-4 text-left transition-all duration-300 focus:outline-none py-2.5 opacity-60 hover:opacity-90"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-colors group-hover:bg-slate-300"
                  aria-hidden
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="flex-1 min-w-0 text-lg font-semibold leading-snug text-slate-600 transition-colors group-hover:text-slate-900 sm:text-xl md:text-2xl">
                  {t.hero.ctaFinancialsExample}
                </span>
              </Link>
            </div>
          </div>

          {/* Right: Carousel + pencil sticker */}
          <motion.div
            className="relative flex w-full min-w-0 flex-col items-stretch"
            initial={reducedMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xl sm:h-[420px] lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  {activeIndex === 0 ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-white p-2 sm:p-4">
                      <img src="/logo.png" alt="HR4EU" className="h-full w-auto max-w-full object-contain" />
                    </div>
                  ) : activeIndex === 1 ? (
                    <div className="absolute inset-0">
                      <CostComparisonGraph />
                    </div>
                  ) : activeIndex === 2 ? (
                    /* Save 40–60 slide: image only, no text overlay */
                    <img
                      src={carouselImages[0]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={carouselImages[activeIndex - 2]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  {activeIndex >= 3 ? (
                    <>
                      <div className="absolute inset-0 bg-slate-900/50" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8">
                        <span className="mb-4 text-sm font-bold uppercase tracking-widest text-white/90">
                          {activeIndex + 1} / {totalSlides}
                        </span>
                        <p className="max-w-md text-center text-xl font-bold leading-relaxed drop-shadow-md text-white sm:text-2xl lg:text-3xl">
                          {t.hero[costPointKeys[activeIndex - 2]]}
                        </p>
                      </div>
                    </>
                  ) : null}
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2" aria-label="Carousel position">
                {Array.from({ length: totalSlides }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${
                      i === activeIndex ? "h-2.5 w-10 bg-white" : "h-2.5 w-2.5 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === activeIndex ? "true" : undefined}
                  />
                ))}
              </div>

              {/* Clickable overlay: carousel links to benefits page */}
              <Link
                href="/benefits"
                className="absolute inset-0 z-[5]"
                aria-label="View all benefits"
              />
            </div>

            {/* Animated pencil sticker – symmetric to image width */}
            <div className="mt-4 w-full">
              <WritingPencilSticker text={t.hero.stickerText} reducedMotion={reducedMotion} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
