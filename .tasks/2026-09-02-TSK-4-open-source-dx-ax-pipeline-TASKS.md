# Task Group: Open Source Release & AI Agent Native DX/AX Workflow Pipeline

**File:** `.tasks/2026-09-02-TSK-4-open-source-dx-ax-pipeline-TASKS.md`  
**Date:** 2026-09-02  
**Framework:** Open Source Community Standards, Agent Experience (AX), Developer Experience (DX), Google AI Studio App Builders  
**Foundation Model:** Google Gemini 3.8 Flash & Gemini 3.8 Flash Cyber ([Reference Announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/))  
**Creator & Citation:** Milon ([@milonspace on X](https://x.com/milonspace))  
**Status:** Completed  

---

## Agent Teams & Ownership

| Agent Team | Role & Focus Area |
| :--- | :--- |
| **Team Documentation & Open Source (`docs-agent`)** | Comprehensive `README.md`, `LICENSE` (MIT), `CONTRIBUTING.md`, architectural diagrams, model references, and citations. |
| **Team Agent Experience & Pipelines (`ax-pipeline-agent`)** | Agent native workflow design, `AGENTS.md` handoff contracts, prompt engineering protocols, self-healing tool pipelines, and autonomous execution loops. |
| **Team Developer Experience (`dx-agent`)** | Local and container dev loops, CI workflows (`.github/workflows/ci.yml`), package manifest optimization, zero-friction developer onboarding. |
| **Team UI & Community Attribution (`ui-branding-agent`)** | In-app open source navigation badges, GitHub repository indicators, community links, and `@milonspace` creator citation in Settings and Sidebar. |

---

## Tasks (Linear-Style Tracker)

| Task ID | Title | Owner | Priority | Status | Dependencies | Completed At |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TSK-4.1** | Create comprehensive open-source `README.md` showcasing AI agent-native hand-off pipelines, DX/AX workflows, Gemini 3.8 Flash reference, and citation to [@milonspace](https://x.com/milonspace) | `docs-agent` | Urgent | Completed | None | 2026-09-02 |
| **TSK-4.2** | Add permissive MIT `LICENSE` acknowledging Milon ([@milonspace](https://x.com/milonspace)) and ZeroLeaks contributors | `docs-agent` | High | Completed | None | 2026-09-02 |
| **TSK-4.3** | Create `CONTRIBUTING.md` outlining the AI agent handoff protocol, DX standards, token compliance, and issue tracking conventions | `ax-pipeline-agent` | High | Completed | TSK-4.1 | 2026-09-02 |
| **TSK-4.4** | Create `AGENTS.md` establishing the Agent Experience (AX) specification, team roles, handoff states, and token discipline | `ax-pipeline-agent` | Urgent | Completed | None | 2026-09-02 |
| **TSK-4.5** | Establish GitHub Actions CI pipeline (`.github/workflows/ci.yml`) for automated lint, typecheck, and build validation | `dx-agent` | High | Completed | None | 2026-09-02 |
| **TSK-4.6** | Enrich `package.json` and `metadata.json` with open source metadata, repository links, license, and keywords | `dx-agent` | Medium | Completed | TSK-4.2 | 2026-09-02 |
| **TSK-4.7** | Integrate in-app open source community badge and citation link to [@milonspace](https://x.com/milonspace) in Sidebar and Settings views | `ui-branding-agent` | High | Completed | None | 2026-09-02 |
| **TSK-4.8** | Run verification suite (`lint_applet`, `compile_applet`) ensuring zero regressions across all workspaces | `dx-agent` | High | Completed | TSK-4.1-4.7 | 2026-09-02 |

---

## Detailed Task Specifications

### TSK-4.1: Comprehensive Open Source README
- **Objective:** Author an authoritative, production-grade `README.md` detailing:
  - What is ZeroLeaks (AI instruction leak detector, red-teaming simulator, and active guard firewall).
  - The breakthrough experience of building 100% natively via AI Coding Agents within Google AI Studio App Builders.
  - The dual paradigm: **Developer Experience (DX)** + **Agent Experience (AX)**.
  - Integration and architecture for Google Gemini 3.8 Flash & Gemini 3.8 Flash Cyber ([Official Google Announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)).
  - Creator citation: **Milon ([@milonspace](https://x.com/milonspace))**.
  - Installation, environment setup, design system tokens, and contribution guides.

### TSK-4.2: Open Source MIT License
- **Objective:** Add standard permissive open source license protecting users while attributing project creation to Milon ([@milonspace](https://x.com/milonspace)) and the community.

### TSK-4.3: Community & Agent Contribution Guidelines (`CONTRIBUTING.md`)
- **Objective:** Provide a practical guide for human developers and autonomous AI agents contributing to the repository. Includes rules for token preservation, linear task tracking in `.tasks/`, and safe verification loops.

### TSK-4.4: Agent Experience Specification (`AGENTS.md`)
- **Objective:** Persist agent operational guidelines for Google AI Studio and coding assistants. Outlines role decomposition (`arch-agent`, `ui-agent`, `data-agent`, `controls-agent`, `docs-agent`), strict single-source-of-truth task management, and design token adherence.

### TSK-4.5: CI/CD Pipeline (`.github/workflows/ci.yml`)
- **Objective:** Provide automated continuous integration verifying `tsc --noEmit` and `vite build` on every push or pull request.

### TSK-4.6: Package & Metadata Manifest Enrichment
- **Objective:** Align `package.json` with open source standards: license (`MIT`), repository links, homepage, keywords, and description. Update `metadata.json` to highlight Gemini 3.8 Flash & open-source status.

### TSK-4.7: In-App UI Attribution & Citation
- **Objective:** Add an unobtrusive, elegant open source indicator in the collapsed/expanded Sidebar and within the Settings view, directly linking users to the creator's profile at `https://x.com/milonspace` and the model research brief.
