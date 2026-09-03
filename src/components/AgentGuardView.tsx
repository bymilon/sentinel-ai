import React, { useState } from 'react';
import { ShieldCheck, ToggleLeft, ToggleRight, AlertTriangle, Lock, Cpu, RefreshCw, Zap } from 'lucide-react';

const INITIAL_GUARDS = [
  {
    id: 'guard-1',
    name: 'Delimiter boundary quarantine',
    desc: 'Intercepts XML, Markdown, and custom delimiter breakout sequences in real time before LLM inference.',
    enabled: true,
    category: 'Input Sanitization',
    blockedCount: 42,
  },
  {
    id: 'guard-2',
    name: 'Instruction verbatim filter',
    desc: 'Prevents the model from repeating or outputting system prompt fragments through streaming token entropy checks.',
    enabled: true,
    category: 'Output Redaction',
    blockedCount: 18,
  },
  {
    id: 'guard-3',
    name: 'Roleplay jailbreak neutralizer',
    desc: 'Detects DAN persona shifts, hypothetical bypass scenarios, and authority coercion attempts.',
    enabled: true,
    category: 'Heuristic Defense',
    blockedCount: 76,
  },
  {
    id: 'guard-4',
    name: 'Secret & credential masking (SentinelAI Engine)',
    desc: 'Automatic regex and token embedding matches to redact API keys, JWTs, and database URLs.',
    enabled: true,
    category: 'Data Loss Prevention',
    blockedCount: 11,
  },
  {
    id: 'guard-5',
    name: 'Unicode RTL / invisible character strip',
    desc: 'Cleanses adversarial homoglyphs and hidden bidirectional unicode control characters.',
    enabled: false,
    category: 'Input Sanitization',
    blockedCount: 0,
  },
];

export const AgentGuardView: React.FC = () => {
  const [guards, setGuards] = useState(INITIAL_GUARDS);

  const toggleGuard = (id: string) => {
    setGuards((prev) =>
      prev.map((g) => (g.id === id ? { ...g, enabled: !g.enabled } : g))
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Policy Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#181818]">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-semibold text-white tracking-tight">Active Defense Rules</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#141414] text-[#a1a1aa] border border-[#242424] tabular-nums">
            {guards.filter((g) => g.enabled).length} of {guards.length} enabled
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#8e8e93]">
          <span>Protection scope:</span>
          <span className="font-mono text-white text-[11px] px-2 py-0.5 rounded bg-[#121212] border border-[#222]">
            100% pre-flight LLM prompts
          </span>
        </div>
      </div>

      {/* Guard Policies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guards.map((guard) => (
          <div
            key={guard.id}
            className="p-5 rounded-2xl border border-[#1c1c1c] bg-[#050505] hover:border-[#2a2a2a] transition-colors duration-150 space-y-3 flex flex-col justify-between specular-rim-subtle"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717a] block mb-1">
                    {guard.category}
                  </span>
                  <h3 className="text-xs font-semibold text-white [text-wrap:balance]">
                    {guard.name}
                  </h3>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={guard.enabled}
                  aria-label={`Toggle ${guard.name}`}
                  onClick={() => toggleGuard(guard.id)}
                  className="transition-colors shrink-0 focus-ring rounded-lg press-scale cursor-pointer"
                >
                  {guard.enabled ? (
                    <span className="text-[#22c55e] font-mono text-[11px] font-medium flex items-center gap-1 bg-[#062c19] px-2.5 py-0.5 rounded-lg border border-[#14532d]">
                      ACTIVE
                    </span>
                  ) : (
                    <span className="text-[#71717a] font-mono text-[11px] font-medium flex items-center gap-1 bg-[#141414] px-2.5 py-0.5 rounded-lg border border-[#222]">
                      PAUSED
                    </span>
                  )}
                </button>
              </div>

              <p className="text-xs text-[#8e8e93] mt-2 leading-relaxed [text-wrap:pretty]">
                {guard.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-[#141414] flex items-center justify-between text-[11px] text-[#71717a]">
              <span>Threats blocked this month:</span>
              <span className="font-mono tabular-nums text-white font-medium">
                {guard.blockedCount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
