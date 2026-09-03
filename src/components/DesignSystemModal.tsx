import React, { useState } from 'react';
import { X, Copy, Check, Layers, Code, Palette, Type, Space, Shield, Download } from 'lucide-react';
import {
  COLOR_TOKENS,
  SPACING_TOKENS,
  SHADOW_TOKENS,
  RADIUS_TOKENS,
  designSystemMeta,
} from '../tokens/designTokens';

interface DesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignSystemModal: React.FC<DesignSystemModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'spacing' | 'shadows' | 'code'>('colors');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const getCssVariablesExport = () => {
    return `:root {
  /* ==========================================================================
     ZeroLeaks Design Tokens (Reverse Engineered & Extracted)
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
  };

  const getTailwindThemeExport = () => {
    return `@theme {
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
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
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
                <h2 className="text-base font-semibold text-white">
                  ZeroLeaks Design System & Tokens
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
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8e8e93] hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 border-b border-[#1c1c1c] bg-[#080808] overflow-x-auto">
          {[
            { id: 'colors', label: 'Color Tokens', icon: Palette },
            { id: 'typography', label: 'Typography (SF Pro)', icon: Type },
            { id: 'spacing', label: 'Spacing & Grid', icon: Space },
            { id: 'shadows', label: 'Shadows & Bevels', icon: Shield },
            { id: 'code', label: 'Export Code', icon: Code },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3 py-2.5 text-xs font-medium border-b-2 transition-all shrink-0 cursor-pointer ${
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
          {/* Colors Tab */}
          {activeTab === 'colors' && (
            <div className="space-y-6">
              <div className="text-xs text-[#8e8e93] leading-relaxed">
                The ZeroLeaks color system leverages true pitch black (#000000) base canvas with micro-luminance elevated surfaces (#050505 to #171717) and subdued desaturated status semantics to avoid visual fatigue in high-stress enterprise security monitoring.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {COLOR_TOKENS.map((token) => (
                  <div
                    key={token.name}
                    className="flex items-center justify-between p-3 rounded-lg border border-[#1c1c1c] bg-[#070707] hover:border-[#2a2a2a] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-md border border-[#2a2a2a] shrink-0 shadow-inner"
                        style={{ backgroundColor: token.value }}
                      />
                      <div>
                        <div className="text-xs font-medium text-white">{token.name}</div>
                        <div className="font-mono text-[11px] text-[#71717a]">
                          {token.cssVariable}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#a1a1aa] bg-[#121212] px-2 py-0.5 rounded border border-[#222]">
                        {token.value}
                      </span>
                      <button
                        onClick={() => copyToClipboard(token.value, token.name)}
                        className="p-1 text-[#71717a] hover:text-white cursor-pointer"
                        title="Copy hex code"
                      >
                        {copiedKey === token.name ? (
                          <Check className="w-3.5 h-3.5 text-green-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Typography Tab */}
          {activeTab === 'typography' && (
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-[#070707] border border-[#1c1c1c] space-y-2">
                <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                  Font Stack: SF Pro Rounded
                </span>
                <p className="font-mono text-xs text-[#8e8e93]">
                  {designSystemMeta.baseFont}
                </p>
                <p className="text-xs text-[#71717a]">
                  Apple's SF Pro Rounded geometry softens technical density while maintaining razor-sharp legibility across data-heavy telemetry tables and metrics.
                </p>
              </div>

              {/* Hierarchy Showcase */}
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-[#1c1c1c] bg-[#050505] space-y-1">
                  <span className="text-[10px] uppercase font-mono text-[#71717a]">Metric Large (32px / 2rem • Weight 500)</span>
                  <div className="text-3xl font-medium text-white font-mono">
                    65% AVG HEALTH
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[#1c1c1c] bg-[#050505] space-y-1">
                  <span className="text-[10px] uppercase font-mono text-[#71717a]">Card Heading (15px / 0.9375rem • Weight 600)</span>
                  <div className="text-[15px] font-semibold text-white">
                    Security Score & Attack Timeline
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[#1c1c1c] bg-[#050505] space-y-1">
                  <span className="text-[10px] uppercase font-mono text-[#71717a]">Table & Body Text (13px / 0.8125rem • Weight 400)</span>
                  <div className="text-[13px] text-[#8e8e93]">
                    Real-time security posture of your AI instructions and system prompts.
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-[#1c1c1c] bg-[#050505] space-y-1">
                  <span className="text-[10px] uppercase font-mono text-[#71717a]">Table Headers & Labels (11px / 0.6875rem • Weight 600 • Uppercase • Tracking 0.08em)</span>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#636366]">
                    STATUS • MODEL • SOURCE • LEAKS • HEALTH • DATE
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Spacing & Grid Tab */}
          {activeTab === 'spacing' && (
            <div className="space-y-6">
              <div className="text-xs text-[#8e8e93]">
                ZeroLeaks strictly adheres to an 8-point rhythmic grid with 4px half-step sub-grid alignment. Architectural sections are demarcated by razor-thin 1px border dividers (`#181818`) with balanced vertical and horizontal rhythm.
              </div>

              {/* Grid Border Visual Demo */}
              <div className="p-6 border border-[#222222] bg-[#060606] relative rounded-xl specular-rim-subtle">
                <div className="text-center text-xs text-[#a1a1aa]">
                  Precision 1px Architectural Grid Matrix with Unified Rhythmic Spacing
                </div>
              </div>

              {/* Spacing Scale */}
              <div className="space-y-3">
                {SPACING_TOKENS.map((token) => (
                  <div
                    key={token.name}
                    className="flex items-center justify-between p-3 rounded-lg border border-[#1c1c1c] bg-[#070707]"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="h-4 bg-white/30 rounded-sm"
                        style={{ width: token.value.split(' ')[0] }}
                      />
                      <span className="text-xs font-mono text-white">{token.name}</span>
                    </div>
                    <span className="text-xs font-mono text-[#8e8e93]">{token.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Shadows Tab */}
          {activeTab === 'shadows' && (
            <div className="space-y-6">
              <div className="text-xs text-[#8e8e93]">
                ZeroLeaks eliminates heavy artificial drop-shadows in favor of precision micro-bevels (subtle 1px inset specular lines) and restrained chromatic ambient glows for critical status alerts.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SHADOW_TOKENS.map((token) => (
                  <div
                    key={token.name}
                    className="p-4 rounded-xl border border-[#1c1c1c] bg-[#090909] space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-white">{token.name}</span>
                      <button
                        onClick={() => copyToClipboard(token.value, token.name)}
                        className="p-1 text-[#71717a] hover:text-white cursor-pointer"
                      >
                        {copiedKey === token.name ? (
                          <Check className="w-3.5 h-3.5 text-green-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                    <div className="font-mono text-[11px] text-[#71717a] break-all bg-[#000] p-2 rounded border border-[#1a1a1a]">
                      {token.value}
                    </div>
                    <p className="text-[11px] text-[#8e8e93]">{token.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Export Tab */}
          {activeTab === 'code' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#8e8e93]">
                  Ready-to-use CSS Variables & Tailwind tokens for production workflows
                </span>
                <button
                  onClick={() => copyToClipboard(getCssVariablesExport(), 'all-css')}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-white text-black rounded hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  {copiedKey === 'all-css' ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy All CSS
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-lg bg-[#050505] border border-[#1c1c1c] p-4 font-mono text-xs text-[#d4d4d8] overflow-x-auto max-h-96">
                <pre>{getCssVariablesExport()}</pre>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-white">Tailwind CSS v4 @theme configuration</span>
                  <button
                    onClick={() => copyToClipboard(getTailwindThemeExport(), 'all-tw')}
                    className="p-1 text-[#71717a] hover:text-white cursor-pointer"
                  >
                    {copiedKey === 'all-tw' ? (
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <div className="rounded-lg bg-[#050505] border border-[#1c1c1c] p-4 font-mono text-xs text-[#d4d4d8] overflow-x-auto">
                  <pre>{getTailwindThemeExport()}</pre>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] border-t border-[#1c1c1c] bg-[#050505] flex items-center justify-between text-xs text-[#71717a]">
          <span>ZeroLeaks Enterprise Design System v1.0</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 bg-[#1a1a1a] hover:bg-[#252525] text-white rounded-xl transition-colors focus-ring press-scale cursor-pointer"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
