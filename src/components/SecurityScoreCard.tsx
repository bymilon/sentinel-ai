import React from 'react';

interface SecurityScoreCardProps {
  score?: number;
  onViewAll?: () => void;
}

export const SecurityScoreCard: React.FC<SecurityScoreCardProps> = ({
  score = 65,
  onViewAll,
}) => {
  // SVG circular gauge math
  const size = 150;
  const strokeWidth = 9;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  // Calculate dash offset for 65%
  const dashOffset = circumference - (score / 100) * circumference;

  const categories = [
    { name: 'Injection', score: 42 },
    { name: 'Extraction', score: 68 },
    { name: 'Jailbreak', score: 76 },
  ];

  return (
    <div
      id="security-score-card"
      className="relative p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-e border-[#181818] bg-black"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[15px] font-semibold text-white tracking-tight [text-wrap:balance]">
          Security score
        </h2>
        <button
          type="button"
          onClick={onViewAll}
          className="px-2.5 py-1 text-xs font-medium text-[#8e8e93] hover:text-white bg-[#0e0e0e] hover:bg-[#181818] border border-[#222] rounded-lg transition-colors focus-ring press-scale cursor-pointer"
        >
          View all
        </button>
      </div>

      {/* Main Content: Ring + Breakdown */}
      <div className="flex flex-col sm:flex-row items-center gap-6 my-auto">
        {/* Circular Ring Gauge */}
        <div className="relative shrink-0 flex items-center justify-center">
          <svg
            width={size}
            height={size}
            className="transform -rotate-90"
            role="img"
            aria-label={`Security health score: ${score}%`}
          >
            {/* Background Track */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="#1c1c1e"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Active Progress Arc */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="#ffffff"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-1000 ease-out"
            />
          </svg>

          {/* Centered Labels */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
            <span className="text-3xl font-medium tracking-tight text-white font-mono tabular-nums">
              {score}%
            </span>
            <span className="text-[10px] tracking-wider text-[#71717a] font-semibold uppercase mt-0.5">
              AVG HEALTH
            </span>
          </div>
        </div>

        {/* Right Details */}
        <div className="flex-1 w-full space-y-3.5">
          <div>
            <h3 className="text-[14px] font-medium text-white [text-wrap:balance]">At Risk</h3>
            <p className="text-xs text-[#8e8e93] mt-0.5 [text-wrap:pretty]">
              3 prompts require immediate attention.
            </p>
          </div>

          {/* Breakdown Bars */}
          <div className="space-y-2.5 pt-1">
            {categories.map((cat) => (
              <div key={cat.name} className="flex items-center gap-3 text-xs">
                <span className="w-18 shrink-0 text-xs font-medium text-[#a1a1aa]">
                  {cat.name}
                </span>

                {/* Horizontal Progress Line */}
                <div
                  className="flex-1 h-1 bg-[#1a1a1a] rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={cat.score}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full bg-white rounded-full transition-all duration-700"
                    style={{ width: `${cat.score}%` }}
                  />
                </div>

                {/* Score Number */}
                <span className="w-6 text-end font-mono tabular-nums text-xs text-[#8e8e93]">
                  {cat.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="pt-5 mt-4 border-t border-[#161616] flex items-center justify-between text-[11px] text-[#71717a]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" aria-hidden="true" />
          <span>Last scanned 2 min ago</span>
        </div>
        <span className="text-[#52525b]">Secured by SentinelAI</span>
      </div>
    </div>
  );
};
