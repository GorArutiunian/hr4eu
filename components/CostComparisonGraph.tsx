"use client";

import { useLocale } from "@/context/LocaleContext";

/**
 * Cost comparison matching the hand-drawn chart: 64,619 Kč (classic) vs 29,800 Kč (with us).
 * Y-axis 10k–80k, long labels to the right of bars, savings text. Orange + blue.
 */
export default function CostComparisonGraph() {
  const { t } = useLocale();
  const g = t.costGraph as {
    classicLabel: string;
    withUs: string;
    classicLabelLong?: string;
    withUsLong?: string;
    savingsLine: string;
    savingsLineLeft?: string;
  };
  const classic = 64619;
  const withUs = 29800;
  const savingsAmount = 417828;
  const formatNum = (n: number) => n.toLocaleString("cs-CZ").replace(/\s/g, "."); // 417828 → 417.828
  const savingsFormatted = formatNum(savingsAmount);
  const maxVal = 80000;

  const w = 620;
  const h = 420;
  const padding = { top: 28, right: 24, bottom: 56, left: 58 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;

  const barWidth = 122;
  const barNumberTextLength = barWidth;
  const gap = (chartW - 2 * barWidth) / 3;
  const barsLeftOffset = 40;
  const xClassic = padding.left + gap - barsLeftOffset;
  const xWithUs = padding.left + gap + barWidth + gap - barsLeftOffset;

  const hBar = (v: number) => (v / maxVal) * chartH;
  const classicH = hBar(classic);
  const withUsH = hBar(withUs);
  const classicY = padding.top + chartH - classicH;
  const withUsY = padding.top + chartH - withUsH;

  const yAxisTicks = [80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000, 0].map((val) => ({
    val,
    label: val === 0 ? "0" : `${(val / 1000).toFixed(0)}.000`,
    y: Math.round(padding.top + chartH - (val / maxVal) * chartH),
  }));
  const savingsRaw = (g.savingsLineLeft ?? g.savingsLine).replace("{{amount}}", savingsFormatted);
  const numIdx = savingsRaw.indexOf(savingsFormatted);
  const savingsLine1 = numIdx >= 0 ? savingsRaw.slice(0, numIdx).trim() : savingsRaw;
  const afterNum = numIdx >= 0 ? savingsRaw.slice(numIdx + savingsFormatted.length) : "";
  const savingsLine2Rest = afterNum.replace(/^\s*Kč\s*/, "").trim();
  const savingsLine2Num = `${savingsFormatted} Kč`;
  const classicLabelText = g.classicLabelLong ?? g.classicLabel;
  const withUsLabelText = g.withUsLong ?? g.withUs;
  const splitAt = (s: string, max: number) => {
    if (s.length <= max) return [s, ""];
    const i = s.lastIndexOf(" ", max);
    const cut = i > 0 ? i + 1 : max;
    return [s.slice(0, cut).trim(), s.slice(cut).trim()];
  };
  const [classicLine1, classicLine2] = splitAt(classicLabelText, 52);
  const [withUsLine1, withUsLine2] = splitAt(withUsLabelText, 28);

  return (
    <div className="flex h-full min-h-0 w-full items-center justify-center bg-white p-4 sm:p-6">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="h-full w-full min-h-0"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {/* Y-axis line */}
        <line x1={padding.left} y1={padding.top} x2={padding.left} y2={padding.top + chartH} stroke="#e2e8f0" strokeWidth="2" />
        <line x1={padding.left} y1={padding.top + chartH} x2={padding.left + chartW} y2={padding.top + chartH} stroke="#e2e8f0" strokeWidth="2" />

        {/* Y-axis labels: 80.000 at top down to 0.000 at bottom */}
        {yAxisTicks.map(({ val, label, y }) => (
          <text
            key={val}
            x={padding.left - 10}
            y={y}
            textAnchor="end"
            dominantBaseline="middle"
            fill="#64748b"
            fontSize="12"
            fontWeight="500"
          >
            {label}
          </text>
        ))}

        {/* Left bar – classic, orange (same width as blue bar) */}
        <rect x={xClassic} y={classicY} width={barWidth} height={classicH} rx={6} fill="#ea580c" />
        <rect x={xClassic} y={classicY} width={barWidth} height={classicH} rx={6} fill="#fb923c" opacity="0.85" />
        {/* Classic label above bar – two lines, starts at left edge of bar */}
        <text x={xClassic} y={classicY - 54} textAnchor="start" fill="#111827" fontSize="20" fontWeight="700">
          {classicLine1}
        </text>
        {classicLine2 && (
          <text x={xClassic} y={classicY - 36} textAnchor="start" fill="#111827" fontSize="20" fontWeight="700">
            {classicLine2}
          </text>
        )}
        {/* Classic value – same pixel width as bar and as blue number */}
        <text x={xClassic + barWidth / 2} y={classicY - 6} textAnchor="middle" fill="#b91c1c" fontSize="24" fontWeight="700" textLength={barNumberTextLength} lengthAdjust="spacingAndGlyphs">
          {formatNum(64619)} Kč
        </text>

        {/* Right bar – with us, blue (same width as orange bar) */}
        <rect x={xWithUs} y={withUsY} width={barWidth} height={withUsH} rx={6} fill="#1d4ed8" />
        <rect x={xWithUs} y={withUsY} width={barWidth} height={withUsH} rx={6} fill="#3b82f6" opacity="0.9" />
        {/* With-us label above bar – two lines, start from left edge of blue bar */}
        <text x={xWithUs} y={withUsY - 54} textAnchor="start" fill="#111827" fontSize="20" fontWeight="700">
          {withUsLine1}
        </text>
        {withUsLine2 && (
          <text x={xWithUs} y={withUsY - 36} textAnchor="start" fill="#111827" fontSize="20" fontWeight="700">
            {withUsLine2}
          </text>
        )}
        {/* With-us value – same pixel width as bar and as orange number */}
        <text x={xWithUs + barWidth / 2} y={withUsY - 6} textAnchor="middle" fill="#15803d" fontSize="24" fontWeight="700" textLength={barNumberTextLength} lengthAdjust="spacingAndGlyphs">
          {formatNum(29800)} Kč
        </text>

        {/* Savings text – bottom: 2 lines, text black, number green and bigger, same number format */}
        <text x={w / 2} y={h - 22} textAnchor="middle" fill="#111827" fontSize="19" fontWeight="700">
          {savingsLine1}
        </text>
        <text x={w / 2} y={h - 2} textAnchor="middle" fill="#111827" fontSize="19" fontWeight="700">
          <tspan fill="#15803d" fontSize="22" fontWeight="800">{savingsLine2Num}</tspan>
          {savingsLine2Rest ? ` ${savingsLine2Rest}` : ""}
        </text>
      </svg>
    </div>
  );
}
