"use client";

import { useLocale } from "@/context/LocaleContext";

/**
 * Strong comparison: Classic 68 000 vs With us 29 500.
 * Shows clearly that the lower cost is much better (savings, %, visual drop).
 */
export default function CostComparisonGraph() {
  const { t } = useLocale();
  const g = t.costGraph;
  const classic = 68000;
  const withUs = 29500;
  const savingsPerMonth = classic - withUs;
  const savingsPerYear = savingsPerMonth * 12; // 462 000 CZK
  const maxVal = 72000;
  const savingsFormatted = savingsPerYear.toLocaleString("cs-CZ");
  const savingsText = g.savingsLine.replace("{{amount}}", savingsFormatted);

  const w = 560;
  const h = 400;
  const padding = { top: 36, right: 48, bottom: 112, left: 52 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;

  const barWidth = 100;
  const gap = (chartW - 2 * barWidth) / 3;
  const xClassic = padding.left + gap;
  const xWithUs = padding.left + gap + barWidth + gap;

  const y = (v: number) => padding.top + chartH - (v / maxVal) * chartH;
  const hBar = (v: number) => (v / maxVal) * chartH;

  const classicH = hBar(classic);
  const withUsH = hBar(withUs);
  const classicY = padding.top + chartH - classicH;
  const withUsY = padding.top + chartH - withUsH;

  return (
    <div className="flex h-full w-full min-h-[340px] items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-6">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="h-full w-full min-h-[300px] max-h-[500px]"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <text x={w / 2} y="14" textAnchor="middle" fill="white" fontSize="20" fontWeight="700">
          {g.title}
        </text>

        {/* Y-axis */}
        <line x1={padding.left} y1={padding.top} x2={padding.left} y2={padding.top + chartH} stroke="#475569" strokeWidth="2" />
        <line x1={padding.left} y1={padding.top + chartH} x2={padding.left + chartW} y2={padding.top + chartH} stroke="#475569" strokeWidth="2" />
        <text x={padding.left - 10} y={padding.top + 5} textAnchor="end" fill="#94a3b8" fontSize="14" fontWeight="600">72k</text>
        <text x={padding.left - 10} y={padding.top + chartH / 2 + 5} textAnchor="end" fill="#94a3b8" fontSize="14">36k</text>
        <text x={padding.left - 10} y={padding.top + chartH + 5} textAnchor="end" fill="#94a3b8" fontSize="14">0</text>

        {/* Classic bar – tall, muted */}
        <rect x={xClassic} y={classicY} width={barWidth} height={classicH} rx="8" fill="#475569" />
        <rect x={xClassic} y={classicY} width={barWidth} height={classicH} rx="8" fill="#64748b" opacity="0.9" />
        <text x={xClassic + barWidth / 2} y={classicY - 12} textAnchor="middle" fill="#e2e8f0" fontSize="18" fontWeight="800">68 000</text>
        <text x={xClassic + barWidth / 2} y={padding.top + chartH + 24} textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="700">{g.classicLabel}</text>
        <text x={xClassic + barWidth / 2} y={padding.top + chartH + 44} textAnchor="middle" fill="#64748b" fontSize="12">{g.highCost}</text>

        {/* With us bar – shorter, bright, "better" */}
        <rect x={xWithUs} y={withUsY} width={barWidth} height={withUsH} rx="8" fill="#2563eb" />
        <rect x={xWithUs} y={withUsY} width={barWidth} height={withUsH} rx="8" fill="#3b82f6" opacity="0.85" />
        <text x={xWithUs + barWidth / 2} y={withUsY - 12} textAnchor="middle" fill="white" fontSize="18" fontWeight="800">29 500</text>
        <text x={xWithUs + barWidth / 2} y={padding.top + chartH + 24} textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="700">{g.withUs}</text>
        <text x={xWithUs + barWidth / 2} y={padding.top + chartH + 44} textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="700">{g.lowerCost}</text>

        {/* "Better" badge */}
        <rect x={xWithUs - 4} y={withUsY - 52} width={barWidth + 8} height="22" rx="6" fill="#22c55e" />
        <text x={xWithUs + barWidth / 2} y={withUsY - 37} textAnchor="middle" fill="white" fontSize="12" fontWeight="800">{g.betterChoice}</text>

        {/* Bottom sentence: yearly savings */}
        <text x={w / 2} y={h - 24} textAnchor="middle" fill="#4ade80" fontSize="16" fontWeight="700">
          {savingsText}
        </text>
      </svg>
    </div>
  );
}
