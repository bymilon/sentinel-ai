import React, { useState, useEffect } from 'react';
import { X, Layers, Code, Palette, Type, Space, Shield } from 'lucide-react';
import {
  ColorsTab,
  TypographyTab,
  SpacingTab,
  ShadowsTab,
  CodeExportTab,
} from './DesignSystemTabs';

interface DesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CSS_VARIABLES_EXPORT = `:root {
  /* ==========================================================================
     SentinelAI Design Tokens (Reverse Engineered & Extracted)
     ========================================================================== */

  /* Surfaces & Canvas */
  --color-canvas-black: #000000;
  --color-surface-base: #050505;
  --color-surface-raised: #0a0a0a;
  --color-surface-overlay: #121212;
  --color-surface-active: #171717;

  /* Architectural Grid & Borders */
  --color-border-subtle: #141414;
  --color-border-grid: #1c1c1c;
  --color-border-prominent: #262626;
  --color-border-crosshair: #3a3a3c;

  /* Typography Colors */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #8e8e93;
  --color-text-muted: #636366;
  --color-text-dimmed: #3a3a3c;

  /* Status Semantics */
  --color-status-critical: #EF4444;
  --color-status-critical-bg: #1f090b;
  --color-status-critical-border: #450a0a;

  --color-status-warning: #F59E0B;
  --color-status-warning-bg: #1e1405;
  --color-status-warning-border: #451a03;

  --color-status-secure: #22C55E;
  --color-status-secure-bg: #051b10;
  --color-status-secure-border: #064e3b;

  --color-status-info: #3B82F6;
  --color-status-info-bg: #091526;
  --color-status-info-border: #1e3a8a;

  /* Typography Stack */
  --font-sf-rounded: "SF Pro Rounded", "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;

  /* Spacing Scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* Shadows & Specular Bevels */
  --shadow-inner-bevel: inset 0 1px 0 0 rgba(255, 255, 255, 0.07);
  --shadow-subtle: 0 4px 20px -2px rgba(0, 0, 0, 0.9), 0 0 0 1px #1f1f1f;
  --shadow-glow-critical: 0 0 14px rgba(239, 68, 68, 0.15);
  --shadow-glow-secure: 0 0 14px rgba(34, 197, 94, 0.15);
}`;

const TAILWIND_THEME_EXPORT = `@theme {
  --color-canvas-black: #000000;
  --color-surface-base: #050505;
  --color-surface-raised: #0a0a0a;
  --color-surface-overlay: #121212;
  --color-border-grid: #1c1c1c;
  --color-text-secondary: #8e8e93;
  --color-status-critical: #ef4444;
  --color-status-warning: #f59e0b;
  --color-status-secure: #22c55e;
  --font-sans: "SF Pro Rounded", "Plus Jakarta Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}`;

type TabKey = 'colors' | 'typography' | 'spacing' | 'shadows' | 'code';

const TABS: { id: TabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'colors', label: 'Color Tokens', icon: Palette },
  { id: 'typography', label: 'Typography (SF Pro)', icon: Type },
  { id: 'spacing', label: 'Spacing & Grid', icon: Space },
  { id: 'shadows', label: 'Shadows & Bevels', icon: Shield },
  { id: 'code', label: 'Export Code', icon: Code },
];

export const DesignSystemModal: React.FC<DesignSystemModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('colors');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const onCloseRef = React.useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseRef.current();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <dialog
      open
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm m-0 border-0 max-w-none max-h-none w-full h-full"
      aria-modal="true"
      aria-labelledby="design-system-modal-title"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-black border border-[#222222] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1c1c1c] bg-[#050505]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
              <Layers className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="design-system-modal-title" className="text-base font-semibold text-white">
                  SentinelAI Design System & Tokens
                </h2>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#1f1f1f] text-neutral-300 border border-[#333]">
                  v1.0 Extracted
                </span>
              </div>
              <p className="text-xs text-[#8e8e93]">
                Audited & reverse-engineered from production interface
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close design system modal"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8e8e93] hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 border-b border-[#1c1c1c] bg-[#080808] overflow-x-auto">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2.5 text-xs font-medium border-b-2 transition-colors duration-150 shrink-0 cursor-pointer ${
                  isActive
                    ? 'border-white text-white'
                    : 'border-transparent text-[#71717a] hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'colors' && (
            <ColorsTab copiedKey={copiedKey} onCopy={copyToClipboard} />
          )}
          {activeTab === 'typography' && <TypographyTab />}
          {activeTab === 'spacing' && <SpacingTab />}
          {activeTab === 'shadows' && (
            <ShadowsTab copiedKey={copiedKey} onCopy={copyToClipboard} />
          )}
          {activeTab === 'code' && (
            <CodeExportTab
              copiedKey={copiedKey}
              onCopy={copyToClipboard}
              cssVariables={CSS_VARIABLES_EXPORT}
              tailwindTheme={TAILWIND_THEME_EXPORT}
            />
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] border-t border-[#1c1c1c] bg-[#050505] flex items-center justify-between text-xs text-[#71717a]">
          <span>SentinelAI Enterprise Design System v1.0</span>
          <button
            type="button"
            aria-label="Close design system inspector"
            onClick={onClose}
            className="px-3.5 py-1.5 bg-[#1a1a1a] hover:bg-[#252525] text-white rounded-xl transition-colors focus-ring press-scale cursor-pointer"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </dialog>
  );
};
