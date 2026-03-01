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
          <div className="flex flex-col justify-center">
            <motion.h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-[3.5rem]"
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {t.hero.slogan}
            </motion.h1>
            <motion.p
              className="mt-4 text-lg font-medium text-slate-500 sm:text-xl"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {t.hero.tagline}
            </motion.p>
            <motion.div
              className="mt-5 flex flex-wrap gap-4"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-palette-accent px-7 py-4 text-base font-semibold text-white transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                aria-label={t.hero.ctaPrimary}
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--accent-orange)] bg-transparent px-7 py-4 text-base font-semibold text-[var(--accent-orange)] transition-all hover:bg-[var(--accent-orange-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)] focus:ring-offset-2"
                aria-label={t.hero.ctaSecondary}
              >
                {t.hero.ctaSecondary}
              </Link>
            </motion.div>

            {/* List – 4 benefit sentences (logo + graph not in list); all clickable */}
            <div className="mt-6 flex flex-col gap-4" aria-label="Key benefits">
              {costPointKeys.map((key, i) => {
                const isActive = i + 2 === activeIndex; // slides 2–5 match list items 0–3
                return (
                  <Link
                    key={key}
                    href={`/benefits#benefit-${i + 1}`}
                    className={`group flex w-full items-center gap-4 text-left transition-all duration-300 focus:outline-none py-2 ${
                      isActive ? "opacity-100" : "opacity-60 hover:opacity-90"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all ${
                        isActive ? "bg-[var(--accent)] text-white" : "bg-slate-200 text-slate-600 group-hover:bg-slate-300"
                      }`}
                      aria-hidden
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span
                      className={`flex-1 min-w-0 text-base font-semibold leading-snug transition-colors sm:text-lg ${
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
                    <div className="absolute inset-0 flex items-center justify-center bg-[var(--hero-bright-blue)] p-2 sm:p-4">
                      <img src="/logo.png" alt="HR4EU" className="h-full w-auto max-w-full object-contain [mix-blend-mode:multiply]" />
                    </div>
                  ) : activeIndex === 1 ? (
                    <div className="absolute inset-0">
                      <CostComparisonGraph />
                    </div>
                  ) : activeIndex === 2 ? (
                    /* Cost saving slide: graph only + sentence overlay (no image) */
                    <>
                      <div className="absolute inset-0">
                        <CostComparisonGraph />
                      </div>
                      <div className="absolute inset-0 bg-slate-900/30 flex flex-col items-center justify-end pb-12 pt-8">
                        <p className="max-w-lg text-center text-lg font-bold leading-snug drop-shadow-lg text-white sm:text-xl">
                          {t.hero[costPointKeys[0]]}
                        </p>
                      </div>
                    </>
                  ) : (
                    <img
                      src={carouselImages[activeIndex - 3]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  {/* Text overlay only for cost-saving graph (2) and photo slides (3–5) */}
                  {activeIndex >= 3 && (
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
                  )}
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
