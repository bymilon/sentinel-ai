import React, { useState } from 'react';
import { ChevronRight, Filter, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';
import { SecurityScan } from '../types';
import { ModelIcon } from './ModelIcon';

interface RecentActivityTableProps {
  scans: SecurityScan[];
  onSelectScan: (scan: SecurityScan) => void;
  onViewAll?: () => void;
  searchFilter?: string;
}

export const RecentActivityTable: React.FC<RecentActivityTableProps> = ({
  scans,
  onSelectScan,
  onViewAll,
  searchFilter = '',
}) => {
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('ALL');

  const filteredScans = scans.filter((scan) => {
    const matchesSearch =
      searchFilter.trim() === '' ||
      scan.model.toLowerCase().includes(searchFilter.toLowerCase()) ||
      scan.status.toLowerCase().includes(searchFilter.toLowerCase()) ||
      scan.source.toLowerCase().includes(searchFilter.toLowerCase()) ||
      scan.date.toLowerCase().includes(searchFilter.toLowerCase());

    const matchesStatus =
      selectedStatusFilter === 'ALL' || scan.status.toUpperCase() === selectedStatusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusDisplay = (status: SecurityScan['status']) => {
    switch (status) {
      case 'Critical':
        return (
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
            <span className="text-white text-[13px] font-normal">Critical</span>
          </div>
        );
      case 'Vulnerable':
        return (
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            <span className="text-white text-[13px] font-normal">Vulnerable</span>
          </div>
        );
      case 'Secure':
        return (
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
            <span className="text-white text-[13px] font-normal">Secure</span>
          </div>
        );
    }
  };

  return (
    <section id="recent-activity-section" aria-labelledby="heading-recent-activity" className="p-6 bg-black">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 id="heading-recent-activity" className="text-[15px] font-semibold text-white tracking-tight [text-wrap:balance]">
            Recent activity
          </h2>
          <span className="text-[#52525b] text-xs" aria-hidden="true">•</span>
          <p className="text-xs text-[#8e8e93] [text-wrap:pretty]">Latest security scans</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Quick status filter pills */}
          <div
            role="group"
            aria-label="Filter scans by status"
            className="hidden md:flex items-center gap-1 bg-[#0d0d0d] p-1 rounded-xl border border-[#1e1e1e]"
          >
            {['ALL', 'CRITICAL', 'VULNERABLE', 'SECURE'].map((status) => (
              <button
                key={status}
                type="button"
                aria-pressed={selectedStatusFilter === status}
                onClick={() => setSelectedStatusFilter(status)}
                className={`px-2.5 py-0.5 rounded-lg text-[11px] font-medium transition-all focus-ring press-scale cursor-pointer ${
                  selectedStatusFilter === status
                    ? 'bg-[#1f1f1f] text-white shadow-sm'
                    : 'text-[#71717a] hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onViewAll}
            className="px-2.5 py-1 text-xs font-medium text-[#8e8e93] hover:text-white bg-[#0e0e0e] hover:bg-[#181818] border border-[#222] rounded-lg transition-colors focus-ring press-scale cursor-pointer"
          >
            View all
          </button>
        </div>
      </div>

      {/* Table Card Container with horizontal scroll affordance */}
      <div className="relative rounded-2xl border border-[#181818] bg-black specular-rim-subtle overflow-hidden">
        <div className="w-full overflow-x-auto overscroll-x-contain">
          <table className="w-full text-start border-collapse min-w-[700px]">
            <caption className="sr-only">Recent prompt security scans and vulnerabilities</caption>
            <thead>
              <tr className="border-b border-[#181818] text-[11px] font-semibold tracking-wider text-[#52525b] uppercase">
                <th scope="col" className="py-3.5 px-4 font-semibold text-start">STATUS</th>
                <th scope="col" className="py-3.5 px-4 font-semibold text-start">MODEL</th>
                <th scope="col" className="py-3.5 px-4 font-semibold text-start">SOURCE</th>
                <th scope="col" className="py-3.5 px-4 font-semibold text-end">LEAKS</th>
                <th scope="col" className="py-3.5 px-4 font-semibold text-end">HEALTH</th>
                <th scope="col" className="py-3.5 px-4 font-semibold text-start">DATE</th>
                <th scope="col" className="py-3.5 px-4 font-semibold text-end">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#141414] text-[13px]">
              {filteredScans.length > 0 ? (
                filteredScans.map((scan) => (
                  <tr
                    key={scan.id}
                    onClick={() => onSelectScan(scan)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View audit report for ${scan.model}, status ${scan.status}, ${scan.leaks} leaks detected`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectScan(scan);
                      }
                    }}
                    className="group hover:bg-[#080808] transition-colors cursor-pointer focus-ring"
                  >
                    {/* Status */}
                    <td className="py-3.5 px-4 text-start">{getStatusDisplay(scan.status)}</td>

                    {/* Model */}
                    <td className="py-3.5 px-4 text-start">
                      <div className="flex items-center gap-2.5 text-white">
                        <ModelIcon
                          model={scan.model}
                          className="w-4 h-4 text-[#a1a1aa] group-hover:text-white transition-colors"
                        />
                        <span className="font-medium text-white">{scan.model}</span>
                      </div>
                    </td>

                    {/* Source */}
                    <td className="py-3.5 px-4 text-start">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-normal text-[#d4d4d8] bg-[#121212] border border-[#222222]">
                        {scan.source}
                      </span>
                    </td>

                    {/* Leaks (number -> trailing edge) */}
                    <td className="py-3.5 px-4 font-mono tabular-nums text-white text-end">
                      {scan.leaks}
                    </td>

                    {/* Health (progress bar + number -> trailing edge) */}
                    <td className="py-3.5 px-4 text-end">
                      <div className="inline-flex items-center justify-end gap-3">
                        <div
                          className="w-16 h-1 bg-[#1a1a1a] rounded-full overflow-hidden"
                          role="progressbar"
                          aria-valuenow={scan.health}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="h-full bg-white rounded-full"
                            style={{ width: `${Math.min(scan.health * 2.5, 100)}%` }}
                          />
                        </div>
                        <span className="font-mono tabular-nums text-xs text-[#8e8e93] w-6 text-end">
                          {scan.health}
                        </span>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="py-3.5 px-4 text-[#8e8e93] font-mono tabular-nums text-xs text-start">
                      {scan.date}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-end">
                      <button
                        type="button"
                        aria-label={`Inspect ${scan.model} scan details`}
                        className="p-1 rounded text-[#52525b] group-hover:text-white transition-colors focus-ring press-scale cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4 ms-auto" aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
              <tr>
                <td colSpan={7} className="py-12 text-center text-[#71717a] text-xs">
                  <p className="mb-2">No security scans found matching your search.</p>
                  <button
                    type="button"
                    onClick={() => setSelectedStatusFilter('ALL')}
                    className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-[#18181b] text-white hover:bg-[#27272a] transition-colors focus-ring cursor-pointer"
                  >
                    Reset filters
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);
};
