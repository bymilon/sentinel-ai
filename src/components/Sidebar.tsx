import React from 'react';
import {
  LayoutGrid,
  ScanLine,
  ShieldAlert,
  FileText,
  Users,
  Settings,
  ChevronRight,
  PanelLeftClose,
  PanelLeft,
  Zap,
  ExternalLink,
} from 'lucide-react';

interface SidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  onOpenNewScan: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  collapsed,
  onToggleCollapse,
  onOpenNewScan,
}) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutGrid, hasChevron: true },
    { id: 'new-scan', label: 'New scan', icon: ScanLine, action: onOpenNewScan },
    { id: 'agent-guard', label: 'Agent Guard', icon: ShieldAlert },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'teams', label: 'Teams', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside
      id="sidebar-navigation"
      className={`relative flex flex-col justify-between h-screen bg-black border-e border-[#181818] select-none transition-all duration-300 z-30 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Top Header & Brand */}
      <div>
        {collapsed ? (
          <div className="flex items-center justify-center h-14 shrink-0 border-b border-[#181818]">
            <button
              id="btn-toggle-sidebar"
              type="button"
              onClick={onToggleCollapse}
              title="Expand sidebar (Cmd+B)"
              aria-label="Expand sidebar"
              className="group relative w-9 h-9 rounded-xl flex items-center justify-center hover:bg-[#141414] transition-all focus-ring press-scale cursor-pointer"
            >
              {/* SentinelAI Custom Logo Mark */}
              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center shrink-0 shadow-sm transition-opacity duration-200 group-hover:opacity-0 absolute">
                <div className="w-2.5 h-2.5 rounded-full bg-black flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-white" />
                </div>
              </div>
              {/* Expand PanelLeft Icon shown cleanly on hover */}
              <PanelLeft className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between h-14 shrink-0 px-4 border-b border-[#181818]">
            <div className="flex items-center gap-2.5 overflow-hidden">
              {/* SentinelAI Custom Logo Mark */}
              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center shrink-0 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-black flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-white" />
                </div>
              </div>
              <span className="font-semibold text-[15px] tracking-tight text-white truncate">
                SentinelAI
              </span>
            </div>

            <button
              id="btn-toggle-sidebar"
              type="button"
              onClick={onToggleCollapse}
              title="Collapse sidebar (Cmd+B)"
              aria-label="Collapse sidebar"
              className="p-1.5 rounded-lg text-[#71717a] hover:text-white hover:bg-[#141414] transition-colors focus-ring cursor-pointer"
            >
              <PanelLeftClose className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Navigation Items */}
        <nav
          aria-label="Primary Navigation"
          className={`space-y-1 ${collapsed ? 'px-2 py-3' : 'p-3'}`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;

            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                aria-label={item.label}
                title={collapsed ? item.label : undefined}
                onClick={() => {
                  if (item.action) {
                    item.action();
                  } else {
                    onSelectTab(item.id);
                  }
                }}
                className={`transition-all focus-ring press-scale cursor-pointer ${
                  collapsed
                    ? 'w-10 h-10 mx-auto flex items-center justify-center rounded-xl'
                    : 'w-full flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-medium'
                } ${
                  isActive
                    ? 'bg-[#141414] text-white border border-[#222222]/90 shadow-[0_1px_3px_rgba(0,0,0,0.5)] specular-rim-subtle'
                    : 'text-[#8e8e93] hover:text-white hover:bg-[#0c0c0c] border border-transparent'
                }`}
              >
                {collapsed ? (
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      isActive ? 'text-white' : 'text-[#71717a]'
                    }`}
                    aria-hidden="true"
                  />
                ) : (
                  <>
                    <div className="flex items-center gap-3 truncate">
                      <Icon
                        className={`w-4 h-4 shrink-0 ${
                          isActive ? 'text-white' : 'text-[#71717a]'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.hasChevron && (
                      <ChevronRight className="w-3.5 h-3.5 text-[#52525b] shrink-0" aria-hidden="true" />
                    )}
                  </>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: Credits & User Profile */}
      <div
        className={`border-t border-[#181818] ${
          collapsed
            ? 'py-3 px-2 flex flex-col items-center space-y-2'
            : 'p-3 space-y-3'
        }`}
      >
        {/* Credits Indicator */}
        {!collapsed ? (
          <div className="p-2.5 rounded-xl bg-[#080808] border border-[#1a1a1a] space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#8e8e93] font-mono tabular-nums">96 / 264 Credits</span>
              <button
                type="button"
                onClick={() => onSelectTab('settings')}
                className="text-white hover:text-neutral-300 transition-colors font-medium text-[11px] underline-offset-2 hover:underline focus-ring rounded cursor-pointer"
              >
                Upgrade
              </button>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-1 bg-[#1c1c1c] rounded-full overflow-hidden" role="progressbar" aria-valuenow={96} aria-valuemin={0} aria-valuemax={264}>
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${(96 / 264) * 100}%` }}
              />
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => onSelectTab('settings')}
            title="96 / 264 Credits remaining (Click to upgrade)"
            aria-label="96 of 264 Credits remaining. Click to upgrade."
            className="w-10 h-10 mx-auto flex items-center justify-center rounded-xl hover:bg-[#111] border border-transparent hover:border-[#222] transition-colors focus-ring press-scale cursor-pointer"
          >
            <div className="relative w-7 h-7 flex items-center justify-center">
              <svg className="w-7 h-7 -rotate-90" viewBox="0 0 28 28" aria-hidden="true">
                <circle
                  cx="14"
                  cy="14"
                  r="10"
                  fill="none"
                  stroke="#1c1c1c"
                  strokeWidth="2"
                />
                <circle
                  cx="14"
                  cy="14"
                  r="10"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray={2 * Math.PI * 10}
                  strokeDashoffset={2 * Math.PI * 10 * (1 - 96 / 264)}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              <Zap className="w-3 h-3 text-[#a1a1aa] absolute" aria-hidden="true" />
            </div>
          </button>
        )}

        {/* Open Source / Creator Citation */}
        {!collapsed ? (
          <a
            href="https://x.com/milonspace"
            target="_blank"
            rel="noopener noreferrer"
            title="Open-Source AI Security by @milonspace (Gemini 3.8 Flash)"
            aria-label="Open Source project created by @milonspace. Powered by Gemini 3.8 Flash."
            className="flex items-center justify-between p-2 rounded-xl bg-[#09090b] hover:bg-[#121215] border border-[#1e1e22] transition-colors focus-ring press-scale cursor-pointer group"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
              <div className="flex flex-col truncate">
                <span className="text-[11px] font-medium text-[#e4e4e7] group-hover:text-white truncate">
                  Open Source • Gemini 3.8
                </span>
                <span className="text-[10px] text-[#71717a] group-hover:text-[#a1a1aa] truncate">
                  by @milonspace
                </span>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#52525b] group-hover:text-white shrink-0" aria-hidden="true" />
          </a>
        ) : (
          <a
            href="https://x.com/milonspace"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Source by @milonspace • Gemini 3.8 Flash"
            aria-label="Open Source by @milonspace"
            className="w-10 h-10 mx-auto flex items-center justify-center rounded-xl bg-[#09090b] hover:bg-[#121215] border border-[#1e1e22] text-[#8e8e93] hover:text-white transition-colors focus-ring press-scale cursor-pointer"
          >
            <span className="text-[10px] font-bold font-mono text-blue-400">OSS</span>
          </a>
        )}

        {/* User Profile Row */}
        {!collapsed ? (
          <div
            id="sidebar-user-profile"
            role="button"
            tabIndex={0}
            aria-label="User profile: Arthur Taylor, Pro plan"
            onClick={() => onSelectTab('settings')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectTab('settings');
              }
            }}
            className="flex items-center justify-between p-2 rounded-xl hover:bg-[#0f0f0f] border border-transparent hover:border-[#1c1c1c] transition-colors cursor-pointer focus-ring press-scale"
          >
            <div className="flex items-center gap-2.5 truncate">
              <div className="w-7 h-7 rounded-full bg-[#1c1c1e] text-white flex items-center justify-center font-medium text-xs shrink-0 border border-[#2c2c2e]">
                A
              </div>
              <div className="flex items-center gap-2 truncate">
                <span className="text-[13px] font-medium text-white truncate">
                  Arthur Taylor
                </span>
                <span className="text-[10px] uppercase font-semibold text-[#a1a1aa] bg-[#1a1a1a] px-1.5 py-0.2 rounded-md border border-[#27272a] tabular-nums">
                  PRO
                </span>
              </div>
            </div>

            <ChevronRight className="w-3.5 h-3.5 text-[#52525b] shrink-0" aria-hidden="true" />
          </div>
        ) : (
          <button
            id="sidebar-user-profile"
            type="button"
            aria-label="User profile: Arthur Taylor, Pro plan"
            title="Arthur Taylor (Pro Plan)"
            onClick={() => onSelectTab('settings')}
            className="w-10 h-10 mx-auto flex items-center justify-center rounded-xl hover:bg-[#0f0f0f] border border-transparent hover:border-[#1c1c1c] transition-colors cursor-pointer focus-ring press-scale"
          >
            <div className="w-7 h-7 rounded-full bg-[#1c1c1e] text-white flex items-center justify-center font-medium text-xs shrink-0 border border-[#2c2c2e]">
              A
            </div>
          </button>
        )}
      </div>
    </aside>
  );
};
