"use client";

/**
 * Animated HR4EU logo (SVG inline).
 * Arrow path draws on view; whole logo fades in and scales up once when in viewport.
 * Hero usage: <AnimatedLogo className="mx-auto lg:mx-0" />
 */
import { motion, useReducedMotion } from "framer-motion";
import logoPaths from "./logo-paths.json";

const ARROW_PATH_INDEX = 6;
const BRAND_COLOR = "#3F36D1";

type AnimatedLogoProps = {
  className?: string;
};

export default function AnimatedLogo({ className = "" }: AnimatedLogoProps) {
  const reducedMotion = useReducedMotion();
  const paths = logoPaths as string[];

  const wrapperInitial = reducedMotion
    ? false
    : { opacity: 0, scale: 0.94 };
  const wrapperAnimate = { opacity: 1, scale: 1 };
  const wrapperTransition = { duration: 0.6 };

  const arrowInitial = reducedMotion ? false : { pathLength: 0 };
  const arrowAnimate = { pathLength: 1 };
  const arrowTransition = reducedMotion
    ? { duration: 0 }
    : { duration: 1.4, ease: "easeOut" as const };

  return (
    <div className={`w-full max-w-[420px] ${className}`.trim()}>
      <motion.div
        initial={wrapperInitial}
        animate={wrapperAnimate}
        transition={wrapperTransition}
        viewport={{ once: true }}
        style={{ width: "100%", height: "auto" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 599"
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="auto"
          role="img"
          aria-label="HR4EU Logo"
          fill="none"
          className="block"
        >
          <g
            transform="translate(0,599) scale(0.1,-0.1)"
            fill="#000000"
            stroke="none"
          >
            {paths.map((d, i) =>
              i === ARROW_PATH_INDEX ? (
                <motion.path
                  id="logo-arrow"
                  key="logo-arrow"
                  d={d}
                  fill="none"
                  stroke={BRAND_COLOR}
                  strokeWidth={35}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={arrowInitial}
                  animate={arrowAnimate}
                  transition={arrowTransition}
                />
              ) : (
                <path key={i} d={d} fill="#000000" stroke="none" />
              )
            )}
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
