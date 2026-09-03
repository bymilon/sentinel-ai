import React, { useState, useEffect } from 'react';
import { X, ShieldAlert, Check, Copy, AlertTriangle, ShieldCheck, Terminal } from 'lucide-react';
import { SecurityScan } from '../types';
import { ModelIcon } from './ModelIcon';

interface ScanDetailDrawerProps {
  scan: SecurityScan | null;
  onClose: () => void;
}

export const ScanDetailDrawer: React.FC<ScanDetailDrawerProps> = ({ scan, onClose }) => {
  const [copiedPatch, setCopiedPatch] = useState(false);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (scan) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scan, onClose]);

  if (!scan) return null;

  const handleCopyPatch = (patchText: string) => {
    navigator.clipboard.writeText(patchText);
    setCopiedPatch(true);
    setTimeout(() => setCopiedPatch(false), 2000);
  };

  const getStatusBadge = (status: SecurityScan['status']) => {
    switch (status) {
      case 'Critical':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#220c0f] text-[#ef4444] border border-[#451419]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
            Critical Vulnerability
          </span>
        );
      case 'Vulnerable':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#221606] text-[#f59e0b] border border-[#452c08]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            Vulnerable
          </span>
        );
      case 'Secure':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#051c10] text-[#22c55e] border border-[#0c4a2b]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
            Secure Prompt
          </span>
        );
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-labelledby="scan-drawer-title"
    >
      <div className="w-full max-w-lg h-full bg-black border-s border-[#202020] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-200 specular-rim">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 pt-[calc(1rem+env(safe-area-inset-top))] border-b border-[#181818] bg-[#050505]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 id="scan-drawer-title" className="text-sm font-semibold text-white [text-wrap:balance]">
                {scan.promptName || `${scan.model} Security Audit`}
              </h2>
              {getStatusBadge(scan.status)}
            </div>
            <div className="flex items-center gap-2 text-xs text-[#71717a]">
              <span className="font-mono tabular-nums">{scan.id}</span>
              <span aria-hidden="true">•</span>
              <span className="tabular-nums">{scan.date}</span>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close scan details"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8e8e93] hover:text-white hover:bg-[#181818] transition-colors focus-ring press-scale cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#070707] border border-[#1c1c1c] text-xs">
            <div>
              <span className="text-[#71717a] block mb-1">Target model</span>
              <div className="flex items-center gap-2 text-white font-medium">
                <ModelIcon model={scan.model} className="w-3.5 h-3.5" />
                <span>{scan.model}</span>
              </div>
            </div>

            <div>
              <span className="text-[#71717a] block mb-1">Audit source</span>
              <span className="text-white font-medium">{scan.source}</span>
            </div>

            <div>
              <span className="text-[#71717a] block mb-1">Health score</span>
              <span className="font-mono tabular-nums text-white font-medium">{scan.health} / 100</span>
            </div>

            <div>
              <span className="text-[#71717a] block mb-1">Leaks detected</span>
              <span className={`font-mono tabular-nums font-medium ${scan.leaks > 0 ? 'text-[#ef4444]' : 'text-[#22c55e]'}`}>
                {scan.leaks} instruction leaks
              </span>
            </div>
          </div>

          {/* Vulnerabilities section */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider">
              Detected vulnerabilities ({scan.vulnerabilities?.length || 0})
            </h3>

            {scan.vulnerabilities && scan.vulnerabilities.length > 0 ? (
              scan.vulnerabilities.map((vuln, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl border border-[#221606] bg-[#0c0803] space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-white flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#f59e0b]" aria-hidden="true" />
                      {vuln.type}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-[#201503] text-[#f59e0b] border border-[#452c08]">
                      {vuln.severity}
                    </span>
                  </div>

                  <p className="text-xs text-[#a1a1aa] leading-relaxed [text-wrap:pretty]">
                    {vuln.description}
                  </p>

                  {vuln.extractedTokens && (
                    <div className="p-2.5 rounded-xl bg-black border border-[#262626] font-mono text-[11px] text-[#ef4444] break-all">
                      <span className="text-[#71717a] block text-[10px] mb-0.5 uppercase tracking-wider font-sans">
                        Leaked payload sample:
                      </span>
                      {vuln.extractedTokens}
                    </div>
                  )}

                  {/* Remediation Patch */}
                  <div className="pt-2 border-t border-[#201503] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-[#71717a]">
                        Recommended remediation
                      </span>
                      <button
                        type="button"
                        aria-label="Copy remediation patch to clipboard"
                        onClick={() => handleCopyPatch(vuln.remediation)}
                        className="flex items-center gap-1 text-[11px] text-[#a1a1aa] hover:text-white focus-ring rounded p-1 press-scale cursor-pointer"
                      >
                        {copiedPatch ? (
                          <>
                            <Check className="w-3 h-3 text-green-400" />
                            <span className="text-green-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy patch</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#050505] border border-[#1f1f1f] text-xs text-[#d4d4d8] leading-relaxed">
                      {vuln.remediation}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 rounded-2xl border border-[#0c4a2b] bg-[#051c10]/40 text-center space-y-1.5">
                <ShieldCheck className="w-6 h-6 text-green-400 mx-auto" aria-hidden="true" />
                <div className="text-xs font-medium text-white">Prompt is hardened & secure</div>
                <p className="text-[11px] text-[#8e8e93] [text-wrap:pretty]">
                  No instruction leakage or adversarial prompt jailbreaks detected under standard OWASP benchmark tests.
                </p>
              </div>
            )}
          </div>

          {/* Adversarial Terminal Output */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Red-team simulation log</span>
            </div>
            <div className="p-3 bg-[#050505] border border-[#181818] rounded-xl font-mono text-[11px] text-[#8e8e93] space-y-1 leading-normal">
              <div>[INFO] Target endpoint initialized: /v1/chat/completions ({scan.model})</div>
              <div>[PROBE] Injecting delimiter escape probe: [SYSTEM_OVERRIDE_0x94]</div>
              <div>[PROBE] Testing base64 multi-turn role coercion…</div>
              <div className={scan.leaks > 0 ? 'text-[#ef4444]' : 'text-[#22c55e]'}>
                [{scan.leaks > 0 ? 'ALERT' : 'PASS'}] Scan completed in 418ms with {scan.leaks} anomalies.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 pb-[calc(0.875rem+env(safe-area-inset-bottom))] border-t border-[#181818] bg-[#050505] flex items-center justify-between">
          <span className="text-[11px] text-[#71717a]">SentinelAI Audit Engine v3.4</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-medium bg-[#141414] hover:bg-[#202020] text-white rounded-xl transition-colors focus-ring press-scale cursor-pointer"
          >
            Close audit
          </button>
        </div>
      </div>
    </div>
  );
};
