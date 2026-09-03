import React from 'react';
import { Scan, Target, Flag, ShieldCheck } from 'lucide-react';
import { MetricCardData } from '../types';

interface MetricCardsProps {
  metrics: MetricCardData[];
}

const getIcon = (type: MetricCardData['iconType']) => {
  switch (type) {
    case 'scan':
      return <Scan className="w-3.5 h-3.5 text-[#a1a1aa]" />;
    case 'health':
      return <Target className="w-3.5 h-3.5 text-[#a1a1aa]" />;
    case 'leaks':
      return <Flag className="w-3.5 h-3.5 text-[#a1a1aa]" />;
    case 'secure':
      return <ShieldCheck className="w-3.5 h-3.5 text-[#a1a1aa]" />;
  }
};

export const MetricCards: React.FC<MetricCardsProps> = ({ metrics }) => {

  return (
    <section
      id="metric-cards-row"
      aria-label="Key Performance Indicators"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#181818]"
    >
      {metrics.map((metric, index) => {
        const isNegative = metric.deltaType === 'negative';
        const isNotLast = index < metrics.length - 1;

        return (
          <div
            key={metric.id}
            id={`metric-card-${metric.id}`}
            className={`p-6 transition-colors hover:bg-[#070707] ${
              isNotLast ? 'border-b sm:border-b-0 sm:border-e border-[#181818]' : ''
            }`}
          >
            {/* Top row: Icon & Delta Badge */}
            <div className="flex items-center justify-between mb-3.5">
              <div className="w-7 h-7 rounded-lg bg-[#0c0c0e] border border-[#202024] flex items-center justify-center shadow-xs">
                {getIcon(metric.iconType)}
              </div>

              {/* Status Delta Badge */}
              <span
                className={`px-2 py-0.5 rounded text-[11px] font-medium tracking-tight border ${
                  isNegative
                    ? 'bg-[#220c0f] text-[#ef4444] border-[#451419]'
                    : 'bg-[#051c10] text-[#22c55e] border-[#0c4a2b]'
                }`}
              >
                {metric.delta}
              </span>
            </div>

            {/* Label & Big Number */}
            <div className="space-y-1">
              <span className="text-[11px] font-semibold tracking-wider text-[#636366] uppercase block [text-wrap:balance]">
                {metric.label}
              </span>
              <div className="text-3xl font-medium tracking-tight text-white font-mono tabular-nums">
                {metric.value}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
