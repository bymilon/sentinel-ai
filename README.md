# SentinelAI

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Repository](https://img.shields.io/badge/GitHub-bymilon%2Fsentinel--ai-181717.svg?logo=github)](https://github.com/bymilon/sentinel-ai)
[![Engine: Gemini 3.8 Flash](https://img.shields.io/badge/Engine-Gemini%203.8%20Flash%20%26%20Cyber-8E75FF.svg)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
[![Platform: Google AI Studio](https://img.shields.io/badge/Platform-Google%20AI%20Studio-4285F4.svg)](https://ai.studio)
[![Creator: @milonspace](https://img.shields.io/badge/Creator-%40milonspace-000000.svg?logo=x)](https://x.com/milonspace)

SentinelAI is an open-source security console for evaluating, testing, and protecting large language model applications against system prompt extraction, indirect prompt injection, instruction leaks, and adversarial jailbreaks.

Built with Google Gemini 3.8 Flash and Gemini 3.8 Flash Cyber, the platform provides real-time prompt posture auditing, pre-flight safety guardrails, and compliance inspection.

---

## Overview

Large language models deployed in production face adversarial prompt extraction and indirect injection attacks. SentinelAI acts as an inspection layer between user inputs and downstream LLM endpoints. It detects extraction patterns, evaluates instruction defense robustness, and provides actionable remediation guidance.

### Foundation models

- **[Gemini 3.8 Flash and Gemini 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)**: Low-latency inference, automated vulnerability discovery, cybersecurity heuristics, and real-time firewall evaluation.
- **Google AI Studio**: Cloud development environment where architecture, component states, accessibility, and automated verification suites were built.

---

## Features

- **Security posture score.** Calculates a live index from 0 to 100 based on prompt exposure risk and OWASP Top 10 for LLMs.
- **Attack vector timeline.** Logs adversarial jailbreak attempts, indirect injections, roleplay bypasses, and delimiter leaks.
- **Agent Guard firewall.** Configures active rules to block sensitive credential exfiltration and system instruction leaks before responses reach end users.
- **Interactive scan console.** Runs prompt injection tests against live models with custom adversarial payloads.
- **Audit reports.** Generates structured compliance exports for security governance and SOC 2 audits.
- **Design system inspector.** Displays token definitions and exports variables to CSS and Tailwind formats.
- **Bidirectional layout support.** Uses CSS logical properties to render LTR and RTL directions cleanly.

---

## Tech stack

- **Frontend framework**: [React 19](https://react.dev/) with [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI SDK**: `@google/genai` TypeScript SDK (Gemini 3.8 Flash and Gemini 3.8 Flash Cyber)
- **Runtime**: Node.js 20 or later

---

## Prerequisites and system requirements

Before installing, ensure your machine meets the following requirements:

- **Node.js**: Version 20.0.0 or higher. Check with `node -v`.
- **Package manager**: npm 10+, pnpm 9+, or yarn 1.22+. Check with `npm -v`.
- **Supported operating systems**:
  - macOS: 12.0 Monterey or later (Apple Silicon and Intel).
  - Linux: Ubuntu 20.04+, Debian 11+, Fedora 38+, Arch Linux, or any distribution with glibc 2.31+.
  - Windows: Windows 10 or 11 running PowerShell 7+, Command Prompt, or WSL2 (Ubuntu recommended).

---

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/bymilon/sentinel-ai.git
cd sentinel-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create your local environment configuration file:

**macOS and Linux:**
```bash
cp .env.example .env
```

**Windows (PowerShell):**
```powershell
Copy-Item .env.example .env
```

**Windows (Command Prompt):**
```cmd
copy .env.example .env
```

Add your Gemini API key to `.env`. The key is optional for reviewing the UI and mock telemetry, but required for live model execution:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Start the development server

```bash
npm run dev
```

The application starts on `http://localhost:3000`.

### 5. Build for production

```bash
npm run build
```

The output compiles into the `dist/` directory.

---

## Available scripts

All scripts run across macOS, Linux, and Windows:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server on port 3000 bound to `0.0.0.0`. |
| `npm run build` | Compiles TypeScript and packages production assets into `dist/`. |
| `npm run lint` | Runs `tsc --noEmit` to verify type safety across all files. |
| `npm run preview` | Serves the production build locally for verification. |
| `npm run clean` | Removes the `dist/` directory using Node.js file system APIs. |

---

## Architecture and agent workflow

The platform was built with autonomous AI coding agents inside Google AI Studio App Builders. Tasks were partitioned across specialized roles:

- `arch-agent`: Shell layout, grid structure, and CSS logical properties.
- `data-agent`: Tables, trailing number alignment, and telemetry models.
- `controls-agent`: Focus rings, touch target dimensions, and interactive states.
- `dx-agent`: Scripts, build configuration, and environment setup.
- `docs-agent`: Specifications, task records, and licensing.
- `ui-branding-agent`: Token fidelity and attribution links.

```
+-----------------------------------------------------------------------------+
|                       Google AI Studio Agent Pipeline                       |
+-----------------------------------------------------------------------------+
|                                                                             |
|   Human Intent --------> Gemini 3.8 Flash Engine                            |
|                                |                                            |
|        +-----------------------+-----------------------+                    |
|        |                       |                       |                    |
|        v                       v                       v                    |
|   arch-agent              data-agent              controls-agent            |
|   Layout math             Column alignment        Focus rings               |
|   Logical properties      Trailing numbers        Touch targets             |
|        |                       |                       |                    |
|        +-----------------------+-----------------------+                    |
|                                |                                            |
|                                v                                            |
|                 .tasks/ tracking single source                              |
|                 Continuous validation: lint + build                         |
|                                |                                            |
|                                v                                            |
|                 Production SentinelAI Artifact                              |
|                                                                             |
+-----------------------------------------------------------------------------+
```

---

## Task tracking

All project changes are recorded in versioned markdown files inside `.tasks/`. Each file specifies task ownership, priority, dependency trees, and completion timestamps:

```
.tasks/
├── 2026-09-02-TSK-1-layout-refinement-TASKS.md
├── 2026-09-02-TSK-2-aesthetic-harmony-TASKS.md
├── 2026-09-02-TSK-3-collapsible-sidebar-TASKS.md
├── 2026-09-02-TSK-4-open-source-dx-ax-pipeline-TASKS.md
├── 2026-09-02-TSK-5-rebrand-sentinelai-TASKS.md
└── 2026-09-03-TSK-6-unslop-readme-refactor-TASKS.md
```

---

## Author and citation

SentinelAI is created and maintained by **Milon**:
- GitHub repository: [github.com/bymilon/sentinel-ai](https://github.com/bymilon/sentinel-ai)
- GitHub profile: [@bymilon](https://github.com/bymilon)
- X (Twitter): [@milonspace](https://x.com/milonspace)

If you reference SentinelAI in research or security benchmarks, cite this repository or tag [@milonspace](https://x.com/milonspace).

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.  
Copyright (c) 2026 Milon ([@milonspace](https://x.com/milonspace)) and SentinelAI Contributors.
