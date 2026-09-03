import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, Plus, Layers, X, ShieldAlert, CheckCheck, ExternalLink } from 'lucide-react';

interface HeaderProps {
  currentTab?: string;
  onOpenNewScan: () => void;
  onOpenDesignSystem: () => void;
  onSearchClick: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

const TAB_CONFIG: Record<string, { title: string; subtitle: string; badge?: string; badgeColor?: string }> = {
  overview: {
    title: 'Overview',
    subtitle: 'Real-time security posture of your AI instructions.',
    badge: 'Live posture',
    badgeColor: 'text-[#22c55e] bg-[#072412] border-[#0e4823]',
  },
  'agent-guard': {
    title: 'Agent Guard',
    subtitle: 'Active pre-flight firewall and output protection heuristics.',
    badge: 'Firewall active',
    badgeColor: 'text-[#22c55e] bg-[#072412] border-[#0e4823]',
  },
  reports: {
    title: 'Reports & Compliance',
    subtitle: 'Cryptographically signed red-team assessments and instruction leak audits.',
    badge: 'OWASP aligned',
    badgeColor: 'text-[#60a5fa] bg-[#0a192f] border-[#1e3a8a]',
  },
  teams: {
    title: 'Teams & RBAC',
    subtitle: 'Role-based access control for prompt registries and firewall configurations.',
    badge: '4 members',
    badgeColor: 'text-[#a1a1aa] bg-[#141414] border-[#262626]',
  },
  settings: {
    title: 'Settings',
    subtitle: 'Global security parameters, API credentials, and notification webhooks.',
    badge: 'Production',
    badgeColor: 'text-[#eab308] bg-[#211d04] border-[#423708]',
  },
};

const DEFAULT_NOTIFICATIONS = [
  {
    id: 'notif-1',
    title: 'Critical leak intercepted',
    desc: 'Claude Haiku blocked a prompt exfiltration attempt.',
    time: '12m ago',
    critical: true,
  },
  {
    id: 'notif-2',
    title: 'Weekly compliance ready',
    desc: 'OWASP LLM Top 10 automated report has finished.',
    time: '1h ago',
    critical: false,
  },
  {
    id: 'notif-3',
    title: 'Agent Guard rule updated',
    desc: 'Delimiter boundary quarantine heuristic tuned.',
    time: '3h ago',
    critical: false,
  },
];

export const Header: React.FC<HeaderProps> = ({
  currentTab = 'overview',
  onOpenNewScan,
  onOpenDesignSystem,
  searchQuery,
  onSearchChange,
  isSearchOpen,
  setIsSearchOpen,
}) => {
  const activeConfig = TAB_CONFIG[currentTab] || TAB_CONFIG['overview'];
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input when search opens
  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  // Keyboard shortcut: Cmd+K / Ctrl+K to toggle search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        if (isNotificationsOpen) setIsNotificationsOpen(false);
        if (isSearchOpen && !searchQuery) setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isNotificationsOpen, isSearchOpen, searchQuery, setIsSearchOpen]);

  // Click outside to close notifications
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    };
    if (isNotificationsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNotificationsOpen]);

  const notifications = DEFAULT_NOTIFICATIONS;

  return (
    <header
      id="top-header"
      className="h-14 shrink-0 border-b border-[#181818] bg-black/95 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20"
    >
      {/* Title & Subtitle */}
      <div className="flex items-center gap-3 overflow-hidden me-4 min-w-0">
        <div className="flex items-center gap-2.5 shrink-0">
          <h1 className="text-[15px] font-semibold text-white tracking-tight shrink-0 [text-wrap:balance]">
            {activeConfig.title}
          </h1>
          {activeConfig.badge && (
            <span
              className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border ${activeConfig.badgeColor}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" aria-hidden="true" />
              {activeConfig.badge}
            </span>
          )}
        </div>
        <span className="text-[#3f3f46] text-xs shrink-0 hidden sm:inline" aria-hidden="true">/</span>
        <p className="text-[13px] text-[#8e8e93] truncate hidden sm:block [text-wrap:pretty]">
          {activeConfig.subtitle}
        </p>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3 shrink-0 relative">
        {/* Search Bar / Trigger */}
        {isSearchOpen ? (
          <div className="relative flex items-center animate-in fade-in duration-150">
            <Search className="w-3.5 h-3.5 text-[#71717a] absolute start-2.5" aria-hidden="true" />
            <input
              ref={searchInputRef}
              type="text"
              aria-label="Search scans, models, and attack vectors"
              autoFocus
              placeholder="Search scans, models, vectors… (Esc to exit)"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onBlur={() => {
                if (!searchQuery) setIsSearchOpen(false);
              }}
              className="ps-8 pe-7 py-1 text-xs sm:text-xs text-base bg-[#0f0f0f] border border-[#2a2a2e] rounded-full text-white placeholder-[#71717a] focus:outline-none focus:border-[#52525b] w-44 sm:w-64 transition-colors duration-150 focus-ring"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear search query"
                onClick={() => onSearchChange('')}
                className="absolute end-2 text-[#71717a] hover:text-white p-0.5 rounded-full cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        ) : (
          <button
            id="btn-header-search"
            type="button"
            aria-label="Search scans (Press Command K)"
            onClick={() => {
              setIsSearchOpen(true);
              setTimeout(() => searchInputRef.current?.focus(), 50);
            }}
            title="Search scans (⌘K)"
            className="h-8 px-2 rounded-lg flex items-center gap-1.5 text-[#8e8e93] hover:text-white hover:bg-[#121212] transition-colors focus-ring press-scale border border-transparent hover:border-[#222] cursor-pointer"
          >
            <Search className="w-4 h-4" aria-hidden="true" />
            <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-[#71717a] bg-[#141414] border border-[#27272a] rounded">
              ⌘K
            </kbd>
          </button>
        )}

        {/* Open Source / GitHub Link Badge */}
        <a
          href="https://github.com/bymilon/sentinel-ai"
          target="_blank"
          rel="noopener noreferrer"
          title="SentinelAI Open Source Repository (https://github.com/bymilon/sentinel-ai)"
          className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#a1a1aa] hover:text-white bg-[#0e0e0e] hover:bg-[#161616] border border-[#222222] transition-colors focus-ring press-scale specular-rim-subtle cursor-pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[#d4d4d8]">GitHub</span>
          <span className="text-[#71717a]">bymilon/sentinel-ai</span>
        </a>

        {/* Design Tokens Inspector Trigger */}
        <button
          id="btn-design-tokens"
          type="button"
          aria-label="Open Design Tokens & System Audit Inspector"
          onClick={onOpenDesignSystem}
          title="Extracted Design Tokens & Standards"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#a1a1aa] hover:text-white bg-[#0e0e0e] hover:bg-[#161616] border border-[#222222] transition-colors focus-ring press-scale specular-rim-subtle cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5 text-[#3b82f6]" aria-hidden="true" />
          <span className="hidden md:inline">Design tokens</span>
        </button>

        {/* Notifications Trigger & Dropdown */}
        <div className="relative" ref={notificationsRef}>
          <button
            id="btn-notifications"
            type="button"
            aria-label="Security notifications"
            aria-expanded={isNotificationsOpen}
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            title="Security notifications"
            className="relative w-8 h-8 rounded-lg flex items-center justify-center text-[#8e8e93] hover:text-white hover:bg-[#121212] transition-colors focus-ring press-scale cursor-pointer"
          >
            <Bell className="w-4 h-4" aria-hidden="true" />
            {hasUnread && (
              <span className="absolute top-2 end-2 w-1.5 h-1.5 bg-[#ef4444] rounded-full ring-2 ring-black" />
            )}
          </button>

          {/* Notifications Flyout */}
          {isNotificationsOpen && (
            <div
              role="region"
              aria-label="Security Notifications"
              className="absolute end-0 mt-2 w-80 rounded-2xl bg-[#09090b] border border-[#27272a] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 specular-rim"
            >
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#1c1c1e]">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-white">Security Alerts</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-[#27272a] text-[#d4d4d8]">
                    3
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setHasUnread(false)}
                  className="text-[11px] text-[#8e8e93] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <CheckCheck className="w-3 h-3" />
                  <span>Mark read</span>
                </button>
              </div>

              <div className="divide-y divide-[#18181b] max-h-72 overflow-y-auto">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Notification: ${n.title}. ${n.desc}`}
                    className="p-2.5 rounded-lg hover:bg-[#121215] transition-colors cursor-pointer focus-ring"
                    onClick={() => setIsNotificationsOpen(false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsNotificationsOpen(false);
                      }
                    }}
                  >
                    <div className="flex items-start gap-2.5">
                      <div
                        className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                          n.critical ? 'bg-[#ef4444]' : 'bg-[#3b82f6]'
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-medium text-white truncate">{n.title}</h4>
                          <span className="text-[10px] font-mono text-[#71717a] shrink-0 tabular-nums">
                            {n.time}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#8e8e93] mt-0.5 line-clamp-2">
                          {n.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* "+ New scan" Primary Button */}
        <button
          id="btn-new-scan"
          type="button"
          aria-label="Launch new security scan"
          onClick={onOpenNewScan}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors duration-150 font-medium text-[13px] shadow-[0_1px_8px_rgba(255,255,255,0.12)] press-scale focus-ring cursor-pointer"
        >
          <div className="w-4 h-4 rounded-full border border-black/40 flex items-center justify-center">
            <Plus className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
          </div>
          <span>New scan</span>
        </button>
      </div>
    </header>
  );
};
