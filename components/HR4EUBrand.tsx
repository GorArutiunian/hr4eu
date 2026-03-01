"use client";

/**
 * Renders "HR4EU" in toolbar style: HR + 4 (accent) + EU
 */
export function HR4EUBrand({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span>HR</span>
      <span className="mx-0.5 text-[1.2em] font-bold text-[var(--accent)] leading-none">4</span>
      <span>EU</span>
    </span>
  );
}

/**
 * Renders text with "HR4EU" replaced by the styled brand component
 */
export function HR4EUInline({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const parts = children.split("HR4EU");
  return (
    <span className={className}>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <HR4EUBrand />}
        </span>
      ))}
    </span>
  );
}
