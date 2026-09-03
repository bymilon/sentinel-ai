# ZeroLeaks 🛡️⚡

> **Open-Source Enterprise AI Instruction Firewall & Prompt Posture Platform**  
> Engineered 100% natively via autonomous **AI Coding Agent Handoff Pipelines** in **Google AI Studio App Builders**, powered by the latest **Google Gemini 3.8 Flash** and **Gemini 3.8 Flash Cyber** models.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Model: Google Gemini 3.8 Flash](https://img.shields.io/badge/Engine-Gemini%203.8%20Flash%20%26%20Cyber-8E75FF.svg)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
[![Platform: Google AI Studio](https://img.shields.io/badge/Platform-Google%20AI%20Studio-4285F4.svg)](https://ai.studio)
[![Creator: @milonspace](https://img.shields.io/badge/Creator-%40milonspace-000000.svg?logo=x)](https://x.com/milonspace)

---

## 🌟 Overview

**ZeroLeaks** is a high-performance, dark-mode security console designed to evaluate, test, and protect enterprise LLM applications against system prompt extraction, indirect prompt injection, instruction leaks, and adversarial jailbreaks.

Built with obsessive attention to design tokens, sub-pixel alignment, and accessible typography, ZeroLeaks demonstrates what is possible when human intent pairs with state-of-the-art AI coding agents using structured handoff workflows.

### 🔬 Powered by Gemini 3.8 Flash & Gemini 3.8 Flash Cyber
ZeroLeaks leverages Google DeepMind's newest frontier models:
- **[Gemini 3.8 Flash & Gemini 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)**: Optimized for near-instant inference, advanced automated vulnerability discovery, cybersecurity heuristics, and real-time prompt protection firewall evaluation.
- **Google AI Studio App Builders**: The entire platform—from system architecture, layout math, color palettes, and component states to accessibility and automated test suites—was built end-to-end directly in Google AI Studio.

---

## 🚀 The AI Agent-Native Experience: DX & AX

ZeroLeaks represents a case study in **Agent Experience (AX)** and **Developer Experience (DX)** co-design:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      Google AI Studio Agent Pipeline                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [Human Intent] ──────► [Gemini 3.8 Flash Engine]                          │
│                               │                                             │
│       ┌───────────────────────┼─────────────────────────┐                   │
│       ▼                       ▼                         ▼                   │
│  [arch-agent]           [data-agent]             [controls-agent]           │
│   Layout math            Column alignment         Hover/focus loops         │
│   Bidi logicals          Trailing-edge numbers    Touch targets             │
│       │                       │                         │                   │
│       └───────────────────────┼─────────────────────────┘                   │
│                               ▼                                             │
│                 [.tasks/ Tracking Single Source]                            │
│                 Continuous validation: lint + build                         │
│                               │                                             │
│                               ▼                                             │
│                 [Production ZeroLeaks Artifact]                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1. Developer Experience (DX)
- **Zero Configuration Friction**: Runs instantly with Vite + React 19 + Tailwind CSS v4.
- **Pixel-Accurate Design Tokens**: Every spacing unit, color hex, and specular rim border is tokenized in `src/tokens/designTokens.ts` and inspectable in the live token modal.
- **Strict Verification Loops**: Incremental verification via `npm run lint` and `npm run build` at every single pipeline stage.

### 2. Agent Experience (AX)
- **Agent Handoff Contracts**: Defined in `AGENTS.md` and tracked using Linear-style markdown files under `.tasks/`.
- **Single Source of Truth**: All progress, blockers, priority, and agent ownership are maintained in versioned `YYYY-MM-DD-TSK-{N}-{name}-TASKS.md` matrices.
- **Domain Specialization**: Agent roles are partitioned into focused teams (`arch-agent`, `data-agent`, `controls-agent`, `docs-agent`, `dx-agent`).

---

## 🎯 Key Features

- **Real-Time Security Posture Score**: Live index (0–100) assessing instructions against OWASP Top 10 for LLMs.
- **Attack Vector Timeline**: Real-time incident stream tracking jailbreaks, roleplay subversions, delimiter leaks, and encoding bypasses.
- **Agent Guard Firewall**: Active pre-flight and post-execution guardrail toggles to block prompt exfiltration before it reaches customer endpoints.
- **Interactive Preset Scans**: Test prompts instantly against multiple foundation models with simulated adversarial injections.
- **Cryptographic Audit Reports**: Compliance reports ready for SOC 2 and enterprise security governance.
- **Full Design System Inspector**: Built-in inspector exporting tokens to CSS variables and Tailwind theme configurations.
- **Universal Logical Properties & Cursor Fidelity**: Full bidirectional RTL/LTR layout support and complete interactive cursor feedback.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) with [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Backend**: `@google/genai` TypeScript SDK (Gemini 3.8 Flash & Gemini 3.8 Flash Cyber)
- **Runtime**: Node.js 20+ / Containerized Cloud Run

---

## 📦 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/milonspace/zeroleaks.git
cd zeroleaks
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy the example environment template:
```bash
cp .env.example .env
```

Add your Gemini API key (optional for local UI development, required for live model execution):
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
```

---

## 📋 Task & Agent Tracking Methodology

ZeroLeaks adheres to a strict agent task pipeline. Every milestone or architectural refactor is recorded in the `.tasks/` directory:

```
.tasks/
├── 2026-09-02-TSK-1-layout-refinement-TASKS.md
├── 2026-09-02-TSK-2-aesthetic-harmony-TASKS.md
├── 2026-09-02-TSK-3-collapsible-sidebar-TASKS.md
└── 2026-09-02-TSK-4-open-source-dx-ax-pipeline-TASKS.md
```

Each file contains:
1. Agent Team ownership tables
2. Linear-style status tracker tables (Priority, Status, Dependencies, Completed Date)
3. Granular technical specifications and acceptance criteria

---

## 👤 Author & Citation

Created with passion by **Milon**:
- **X (Twitter)**: [@milonspace](https://x.com/milonspace)
- **GitHub**: [github.com/milonspace](https://github.com/milonspace)

If you find ZeroLeaks or the Agent Experience (AX) methodology helpful, please cite or tag [@milonspace](https://x.com/milonspace) and share your experience with the community!

---

## 📄 License

ZeroLeaks is released under the permissive [MIT License](LICENSE).  
Copyright (c) 2026 Milon ([@milonspace](https://x.com/milonspace)) & ZeroLeaks Contributors.
