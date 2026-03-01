"use client";

/**
 * Section separator with optional background band – each "separated part" gets its own color.
 * Use background to match the next section so the divider area has a clear color change.
 */
export default function SectionSeparator({
  variant = "line",
  background = "warm",
  lineColor = "default",
  className = "",
}: {
  variant?: "line" | "center-accent" | "double" | "accent-line";
  background?: "white" | "warm" | "orange" | "accent" | "none";
  lineColor?: "default" | "accent" | "orange";
  className?: string;
}) {
  const bgClass =
    background === "white"
      ? "separator-bg-white"
      : background === "orange"
        ? "separator-bg-orange"
        : background === "accent"
          ? "separator-bg-accent"
          : background === "none"
            ? ""
            : "separator-bg-warm";

  const lineClass =
    lineColor === "accent"
      ? "separator-line-accent"
      : lineColor === "orange"
        ? "separator-line-orange"
        : "border-[var(--border)]";

  const wrapperClass = `w-full ${bgClass ? `${bgClass} py-6` : "py-2"} ${className}`;

  if (variant === "double") {
    return (
      <div className={`${wrapperClass}`} aria-hidden>
        <div className="content-width flex flex-col items-center gap-3">
          <div
            className={`h-0.5 w-20 rounded-full ${
              lineColor === "orange" ? "bg-[var(--accent-orange)]" : "bg-[var(--accent)]"
            }`}
            style={{ opacity: 0.7 }}
          />
          <div className={`h-px w-full max-w-2xl ${lineColor === "accent" ? "bg-[var(--accent)]" : "bg-[var(--border)]"}`} style={lineColor === "accent" ? { opacity: 0.3 } : undefined} />
        </div>
      </div>
    );
  }

  if (variant === "center-accent") {
    return (
      <div className={`${wrapperClass}`} aria-hidden>
        <div className="content-width flex items-center justify-center gap-6 px-4">
          <span className={`h-px flex-1 ${lineColor === "accent" ? "bg-[var(--accent)]" : lineColor === "orange" ? "bg-[var(--accent-orange)]" : "bg-[var(--border)]"}`} style={lineColor !== "default" ? { opacity: 0.5 } : undefined} />
          <span
            className={`h-2 w-2 shrink-0 rotate-45 rounded-sm ${lineColor === "orange" ? "bg-[var(--accent-orange)]" : "bg-[var(--accent)]"}`}
            style={{ opacity: 0.8 }}
          />
          <span className={`h-px flex-1 ${lineColor === "accent" ? "bg-[var(--accent)]" : lineColor === "orange" ? "bg-[var(--accent-orange)]" : "bg-[var(--border)]"}`} style={lineColor !== "default" ? { opacity: 0.5 } : undefined} />
        </div>
      </div>
    );
  }

  if (variant === "accent-line") {
    return (
      <div className={`${wrapperClass}`} aria-hidden>
        <div className="content-width px-4">
          <hr className={`border-0 border-t-2 ${lineColor === "orange" ? "border-[var(--accent-orange)]" : "border-[var(--accent)]"}`} style={{ opacity: 0.4 }} />
        </div>
      </div>
    );
  }

  return (
    <div className={`${wrapperClass}`} aria-hidden>
      <div className="content-width px-4">
        <hr className={`border-0 border-t ${lineClass}`} />
      </div>
    </div>
  );
}
