import React from 'react';
import { Copy, Check } from 'lucide-react';
import {
  COLOR_TOKENS,
  SPACING_TOKENS,
  SHADOW_TOKENS,
  designSystemMeta,
} from '../tokens/designTokens';

interface TabProps {
  copiedKey: string | null;
  onCopy: (text: string, key: string) => void;
}

export const ColorsTab: React.FC<TabProps> = ({ copiedKey, onCopy }) => {
  return (
    <div className="space-y-6">
      <div className="text-xs text-[#8e8e93] leading-relaxed">
        The SentinelAI color system leverages true pitch black (#000000) base canvas with micro-luminance elevated surfaces (#050505 to #171717) and subdued desaturated status semantics to avoid visual fatigue in high-stress enterprise security monitoring.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {COLOR_TOKENS.map((token) => (
          <div
            key={token.name}
            className="flex items-center justify-between p-3 rounded-lg border border-[#1c1c1c] bg-[#070707] hover:border-[#2a2a2a] transition-colors duration-150"
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
                type="button"
                aria-label={`Copy hex code for ${token.name}`}
                onClick={() => onCopy(token.value, token.name)}
                className="p-1 text-[#71717a] hover:text-white cursor-pointer"
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
  );
};

export const TypographyTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 rounded-lg bg-[#070707] border border-[#1c1c1c] space-y-2">
        <span className="text-xs font-semibold text-white uppercase tracking-wider block">
          Font Stack: SF Pro Rounded
        </span>
        <p className="font-mono text-xs text-[#8e8e93]">
          {designSystemMeta.baseFont}
        </p>
        <p className="text-xs text-[#71717a]">
          Apple&apos;s SF Pro Rounded geometry softens technical density while maintaining razor-sharp legibility across data-heavy telemetry tables and metrics.
        </p>
      </div>

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
  );
};

export const SpacingTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-xs text-[#8e8e93]">
        SentinelAI strictly adheres to an 8-point rhythmic grid with 4px half-step sub-grid alignment. Architectural sections are demarcated by razor-thin 1px border dividers (`#181818`) with balanced vertical and horizontal rhythm.
      </div>

      <div className="p-6 border border-[#222222] bg-[#060606] relative rounded-xl specular-rim-subtle">
        <div className="text-center text-xs text-[#a1a1aa]">
          Precision 1px Architectural Grid Matrix with Unified Rhythmic Spacing
        </div>
      </div>

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
  );
};

export const ShadowsTab: React.FC<TabProps> = ({ copiedKey, onCopy }) => {
  return (
    <div className="space-y-6">
      <div className="text-xs text-[#8e8e93]">
        SentinelAI eliminates heavy artificial drop-shadows in favor of precision micro-bevels (subtle 1px inset specular lines) and restrained chromatic ambient glows for critical status alerts.
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
                type="button"
                aria-label={`Copy ${token.name} token value`}
                onClick={() => onCopy(token.value, token.name)}
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
  );
};

interface CodeExportTabProps extends TabProps {
  cssVariables: string;
  tailwindTheme: string;
}

export const CodeExportTab: React.FC<CodeExportTabProps> = ({
  copiedKey,
  onCopy,
  cssVariables,
  tailwindTheme,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#8e8e93]">
          Ready-to-use CSS Variables & Tailwind tokens for production workflows
        </span>
        <button
          type="button"
          aria-label="Copy all CSS variables"
          onClick={() => onCopy(cssVariables, 'all-css')}
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
        <pre>{cssVariables}</pre>
      </div>

      <div className="pt-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-white">Tailwind CSS v4 @theme configuration</span>
          <button
            type="button"
            aria-label="Copy Tailwind CSS v4 theme configuration"
            onClick={() => onCopy(tailwindTheme, 'all-tw')}
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
          <pre>{tailwindTheme}</pre>
        </div>
      </div>
    </div>
  );
};
