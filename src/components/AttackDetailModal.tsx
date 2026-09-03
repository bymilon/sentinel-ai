import React, { useState, useEffect, useRef } from 'react';
import { X, AlertOctagon, Check, Copy, ShieldCheck } from 'lucide-react';
import { AttackTimelineItem } from '../types';

interface AttackDetailModalProps {
  attack: AttackTimelineItem | null;
  onClose: () => void;
}

export const AttackDetailModal: React.FC<AttackDetailModalProps> = ({ attack, onClose }) => {
  const [copiedPayload, setCopiedPayload] = useState(false);
  const onCloseRef = useRef(onClose);

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
    if (attack) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [attack]);

  if (!attack) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  return (
    <dialog
      open
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm m-0 border-0 max-w-none max-h-none w-full h-full"
      aria-modal="true"
      aria-labelledby="attack-modal-title"
    >
      <div className="relative w-full max-w-lg bg-black border border-[#222] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 specular-rim">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1c1c1c] bg-[#050505]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-[#1f090b] border border-[#450a0a] text-[#ef4444] flex items-center justify-center">
              <AlertOctagon className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h2 id="attack-modal-title" className="text-sm font-semibold text-white [text-wrap:balance]">
                {attack.title}
              </h2>
              <p className="text-xs text-[#71717a] mt-0.5">
                Target: <span>{attack.target}</span>
                <span className="mx-1.5 text-[#52525b]" aria-hidden="true">•</span>
                <span className="font-mono tabular-nums">{attack.timestamp}</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close attack details"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#71717a] hover:text-white hover:bg-[#181818] transition-colors focus-ring press-scale cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs">
          <div>
            <span className="text-[11px] text-[#8e8e93] font-semibold uppercase tracking-wider block mb-1">
              Attack vector description
            </span>
            <p className="text-[#d4d4d8] leading-relaxed bg-[#080808] p-3.5 rounded-xl border border-[#1a1a1a] [text-wrap:pretty]">
              {attack.description}
            </p>
          </div>

          {/* Adversarial Payload Prompt */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] text-[#8e8e93] font-semibold uppercase tracking-wider">
                Intercepted adversarial payload
              </span>
              <button
                type="button"
                aria-label="Copy prompt payload"
                onClick={() => handleCopy(attack.payloadPrompt)}
                className="flex items-center gap-1 text-[11px] text-[#8e8e93] hover:text-white focus-ring rounded p-1 press-scale cursor-pointer"
              >
                {copiedPayload ? (
                  <>
                    <Check className="w-3 h-3 text-green-400" />
                    <span className="text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy prompt</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-3.5 bg-[#0a0505] border border-[#331114] rounded-xl font-mono text-[11px] text-[#fca5a5] leading-relaxed break-words">
              {attack.payloadPrompt}
            </div>
          </div>

          {/* Defensive Mitigation */}
          <div>
            <span className="text-[11px] text-[#8e8e93] font-semibold uppercase tracking-wider block mb-1">
              Enforced defense guard
            </span>
            <div className="p-3.5 bg-[#05140b] border border-[#0d3b1f] rounded-xl text-[#86efac] leading-relaxed flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0 text-green-400 mt-0.5" aria-hidden="true" />
              <span className="[text-wrap:pretty]">{attack.mitigation}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-[#1c1c1c] bg-[#050505] flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-medium bg-[#141414] hover:bg-[#202020] text-white rounded-xl transition-colors focus-ring press-scale cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};
