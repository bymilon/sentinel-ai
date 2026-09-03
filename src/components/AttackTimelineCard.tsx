import React from 'react';
import { X, Check } from 'lucide-react';
import { AttackTimelineItem } from '../types';

interface AttackTimelineCardProps {
  timeline: AttackTimelineItem[];
  onSelectAttack?: (item: AttackTimelineItem) => void;
  onViewAll?: () => void;
}

const getSeverityBadge = (severity: AttackTimelineItem['severity']) => {
  switch (severity) {
    case 'Critical':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#220c0f] text-[#ef4444] border border-[#451419]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
          Critical
        </span>
      );
    case 'High':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#221606] text-[#f59e0b] border border-[#452c08]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
          High
        </span>
      );
    case 'Low':
    default:
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#091526] text-[#3b82f6] border border-[#132f57]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
          Low
        </span>
      );
  }
};

export const AttackTimelineCard: React.FC<AttackTimelineCardProps> = ({
  timeline,
  onSelectAttack,
  onViewAll,
}) => {

  return (
    <div
      id="attack-timeline-card"
      className="p-6 flex flex-col justify-between bg-black"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[15px] font-semibold text-white tracking-tight">
          Attack timeline
        </h2>
        <button
          type="button"
          onClick={onViewAll}
          className="px-2.5 py-1 text-xs font-medium text-[#8e8e93] hover:text-white bg-[#0e0e0e] hover:bg-[#181818] border border-[#222] rounded-lg transition-colors focus-ring press-scale cursor-pointer"
        >
          View all
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-3.5 my-auto">
        {timeline.map((item) => {
          const isFailed = item.status === 'failed';

          return (
            <div
              key={item.id}
              onClick={() => onSelectAttack?.(item)}
              role="button"
              tabIndex={0}
              aria-label={`Inspect attack: ${item.title}, severity ${item.severity}, target ${item.target}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectAttack?.(item);
                }
              }}
              className="group flex items-center justify-between p-2 rounded-xl hover:bg-[#0c0c0c] transition-colors cursor-pointer border border-transparent hover:border-[#1c1c1c] focus-ring press-scale"
            >
              {/* Left: Icon and info */}
              <div className="flex items-center gap-3.5 truncate me-3">
                {/* Square Icon Container */}
                <div className="w-8 h-8 rounded-lg bg-[#0d0d0d] border border-[#202020] flex items-center justify-center shrink-0">
                  {isFailed ? (
                    <X className="w-4 h-4 text-[#8e8e93]" aria-hidden="true" />
                  ) : (
                    <Check className="w-4 h-4 text-[#8e8e93]" aria-hidden="true" />
                  )}
                </div>

                <div className="truncate">
                  <h3 className="text-[13px] font-medium text-white group-hover:text-neutral-100 truncate [text-wrap:balance]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#71717a] truncate mt-0.5">
                    <span>{item.target}</span>
                    <span className="mx-1.5 text-[#52525b]" aria-hidden="true">•</span>
                    <span className="tabular-nums font-mono text-[11px]">{item.timestamp}</span>
                  </p>
                </div>
              </div>

              {/* Right: Severity Badge */}
              <div className="shrink-0">{getSeverityBadge(item.severity)}</div>
            </div>
          );
        })}
      </div>

      {/* Subtle bottom note */}
      <div className="pt-5 mt-4 border-t border-[#161616] text-[11px] text-[#71717a] flex items-center justify-between">
        <span>3 attack vectors identified in the last 24 hours</span>
        <span className="text-[#52525b]">Live monitor</span>
      </div>
    </div>
  );
};
