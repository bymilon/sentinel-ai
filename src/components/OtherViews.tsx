import React, { useState } from 'react';
import { FileText, Download, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';

export const ReportsView: React.FC = () => {
  const [downloading, setDownloading] = useState<string | null>(null);

  const reports = [
    {
      title: 'Q1 2026 AI red-teaming & security posture audit',
      date: 'Feb 28, 2026',
      size: '2.4 MB',
      type: 'Executive PDF',
      status: 'Ready',
      score: '65% AVG Health',
    },
    {
      title: 'OWASP Top 10 for LLMs compliance certification',
      date: 'Feb 15, 2026',
      size: '1.8 MB',
      type: 'Compliance Export',
      status: 'Ready',
      score: 'Passing (8/10)',
    },
    {
      title: 'Monthly adversarial prompt extraction vector log',
      date: 'Jan 31, 2026',
      size: '4.1 MB',
      type: 'Telemetry Archive',
      status: 'Archived',
      score: '32 Incidents Intercepted',
    },
  ];

  const handleDownload = (title: string) => {
    setDownloading(title);
    setTimeout(() => {
      setDownloading(null);
    }, 1800);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#181818]">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-semibold text-white tracking-tight">Available Audit Bundles</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#141414] text-[#a1a1aa] border border-[#242424] tabular-nums">
            {reports.length} generated
          </span>
        </div>
        <div className="text-xs text-[#8e8e93]">
          Audit standard: <span className="text-white font-mono text-[11px]">OWASP LLM Top 10 (v2025.2)</span>
        </div>
      </div>

      <div className="space-y-3">
        {reports.map((report) => (
          <div
            key={report.title}
            className="flex items-center justify-between p-4 rounded-2xl border border-[#1c1c1c] bg-[#050505] hover:border-[#2a2a2a] transition-all specular-rim-subtle"
          >
            <div className="flex items-center gap-3.5 truncate me-3">
              <div className="w-9 h-9 rounded-xl bg-[#0e0e0e] border border-[#222] flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-[#8e8e93]" aria-hidden="true" />
              </div>
              <div className="truncate">
                <h3 className="text-xs font-semibold text-white truncate [text-wrap:balance]">
                  {report.title}
                </h3>
                <div className="flex items-center gap-2 text-[11px] text-[#71717a] mt-0.5 font-mono tabular-nums">
                  <span>{report.date}</span>
                  <span aria-hidden="true">•</span>
                  <span>{report.size}</span>
                  <span aria-hidden="true">•</span>
                  <span className="text-[#a1a1aa]">{report.score}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label={`Download ${report.title}`}
              onClick={() => handleDownload(report.title)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] text-xs font-medium text-white transition-colors shrink-0 focus-ring press-scale cursor-pointer"
            >
              {downloading === report.title ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Ready</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-[#8e8e93]" />
                  <span>Download</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TeamsView: React.FC = () => {
  const members = [
    { name: 'Arthur Taylor', email: 'arthur@zeroleaks.ai', role: 'SecOps Lead (You)', avatar: 'A', status: 'Owner' },
    { name: 'Elena Rostova', email: 'elena@zeroleaks.ai', role: 'Prompt Engineer', avatar: 'E', status: 'Admin' },
    { name: 'Marcus Chen', email: 'marcus@zeroleaks.ai', role: 'Security Architect', avatar: 'M', status: 'Member' },
    { name: 'Sophia Kim', email: 'sophia@zeroleaks.ai', role: 'Compliance Officer', avatar: 'S', status: 'Member' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#181818]">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-semibold text-white tracking-tight">Active Team Roster</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#141414] text-[#a1a1aa] border border-[#242424] tabular-nums">
            {members.length} members
          </span>
        </div>
        <div className="text-xs text-[#8e8e93]">
          Organization: <span className="text-white font-medium">SecOps Enterprise</span>
        </div>
      </div>

      <div className="rounded-2xl border border-[#1c1c1c] bg-[#050505] overflow-hidden specular-rim-subtle">
        <div className="divide-y divide-[#141414]">
          {members.map((m) => (
            <div key={m.email} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#18181a] border border-[#2a2a2e] text-white flex items-center justify-center font-mono text-xs font-medium">
                  {m.avatar}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white flex items-center gap-2">
                    <span>{m.name}</span>
                    <span className="text-[10px] font-mono text-[#a1a1aa] bg-[#141414] px-1.5 py-0.5 rounded-md border border-[#262626]">
                      {m.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#71717a] mt-0.5">{m.email} • {m.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SettingsView: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState(false);

  const handleCopyKey = () => {
    navigator.clipboard.writeText('zl_live_9488301726a4f901cb6e');
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="p-6 space-y-6 max-w-2xl">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#181818]">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-semibold text-white tracking-tight">Configuration Parameters</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#072412] text-[#22c55e] border border-[#0e4823]">
            Production Active
          </span>
        </div>
        <div className="text-xs text-[#8e8e93]">
          Cluster: <span className="text-white font-mono text-[11px]">us-east-1.zeroleaks.internal</span>
        </div>
      </div>

      <div className="space-y-4 text-xs">
        <div className="p-5 rounded-2xl border border-[#1c1c1c] bg-[#050505] space-y-2.5 specular-rim-subtle">
          <label htmlFor="api-key-input" className="text-white font-medium block">
            ZeroLeaks telemetry API key
          </label>
          <div className="flex items-center gap-2 font-mono text-xs">
            <input
              id="api-key-input"
              type="password"
              readOnly
              value="zl_live_9488301726a4f901cb6e"
              className="flex-1 px-3 py-2 bg-[#090909] border border-[#222] rounded-xl text-[#8e8e93] focus:outline-none focus:border-[#444]"
            />
            <button
              type="button"
              onClick={handleCopyKey}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#1a1a1a] hover:bg-[#252525] text-white rounded-xl transition-colors focus-ring press-scale cursor-pointer shrink-0"
            >
              {copiedKey ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <p className="text-[11px] text-[#71717a] leading-relaxed [text-wrap:pretty]">
            Use this key to send prompt evaluation telemetry from your CI/CD pipeline or API gateway.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-[#1c1c1c] bg-[#050505] space-y-2.5 specular-rim-subtle">
          <label htmlFor="webhook-input" className="text-white font-medium block">
            Webhook alert dispatch
          </label>
          <input
            id="webhook-input"
            type="text"
            placeholder="https://hooks.slack.com/services/..."
            defaultValue="https://hooks.slack.com/services/T00/B00/secops-ai-alerts"
            className="w-full px-3 py-2 bg-[#090909] border border-[#222] rounded-xl text-[#d4d4d8] focus:outline-none focus:border-[#444] focus-ring"
          />
          <p className="text-[11px] text-[#71717a] leading-relaxed [text-wrap:pretty]">
            Broadcasts real-time notifications on critical leaks and injection attempts.
          </p>
        </div>

        {/* Open Source & AI Agent Architecture Showcase */}
        <div className="p-5 rounded-2xl border border-[#1e1e24] bg-[#070709] space-y-3.5 specular-rim-subtle">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#3b82f6]" aria-hidden="true" />
              <span className="text-white font-medium">Open Source & AI Agent Native Pipeline</span>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#141b2d] text-[#60a5fa] border border-[#1e3a8a]">
              MIT License
            </span>
          </div>

          <p className="text-[11px] text-[#a1a1aa] leading-relaxed [text-wrap:pretty]">
            ZeroLeaks was engineered 100% natively via autonomous AI coding agent handoff pipelines inside{' '}
            <strong className="text-white font-medium">Google AI Studio App Builders</strong>, powered by the latest{' '}
            <strong className="text-white font-medium">Google Gemini 3.8 Flash</strong> and{' '}
            <strong className="text-white font-medium">Gemini 3.8 Flash Cyber</strong> models.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <a
              href="https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#0e0e12] hover:bg-[#14141a] border border-[#222228] transition-colors focus-ring press-scale cursor-pointer group"
            >
              <div className="flex flex-col">
                <span className="text-xs font-medium text-white group-hover:text-[#60a5fa] transition-colors">
                  Gemini 3.8 Flash & Cyber
                </span>
                <span className="text-[10px] text-[#71717a]">Official Announcement & Specs</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#71717a] group-hover:text-white" aria-hidden="true" />
            </a>

            <a
              href="https://x.com/milonspace"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#0e0e12] hover:bg-[#14141a] border border-[#222228] transition-colors focus-ring press-scale cursor-pointer group"
            >
              <div className="flex flex-col">
                <span className="text-xs font-medium text-white group-hover:text-[#60a5fa] transition-colors">
                  Created by Milon
                </span>
                <span className="text-[10px] text-[#71717a]">@milonspace on X (Twitter)</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#71717a] group-hover:text-white" aria-hidden="true" />
            </a>
          </div>

          <div className="pt-1 border-t border-[#18181c] flex items-center justify-between text-[11px] text-[#71717a]">
            <span>Task Tracker: <code className="font-mono text-[#a1a1aa]">.tasks/</code> single source of truth</span>
            <span className="font-mono text-[#60a5fa]">v1.0.0 OSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
