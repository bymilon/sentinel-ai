# Task Group: Rebrand Application to SentinelAI

**File:** `.tasks/2026-09-02-TSK-5-rebrand-sentinelai-TASKS.md`  
**Date:** 2026-09-02  
**Framework:** Open Source Community Standards, Agent Experience (AX), Developer Experience (DX), Google AI Studio App Builders  
**Foundation Model:** Google Gemini 3.8 Flash & Gemini 3.8 Flash Cyber  
**Creator & Citation:** Milon ([@milonspace on X](https://x.com/milonspace))  
**Status:** In Progress  

---

## Agent Teams & Ownership

| Agent Team | Role & Focus Area |
| :--- | :--- |
| **Team UI & Branding (`ui-branding-agent`)** | Visual identity update across Sidebar, Design System inspector, Scan Detail Drawer, Agent Guard view, and Settings view. |
| **Team Metadata & Manifests (`dx-agent`)** | `metadata.json`, `index.html`, `package.json`, and licensing/CI manifests. |
| **Team Documentation & Specs (`docs-agent`)** | Comprehensive updates to `README.md`, `CONTRIBUTING.md`, `LICENSE`, `AGENTS.md`, and task tracking records. |

---

## Tasks (Linear-Style Tracker)

| Task ID | Title | Owner | Priority | Status | Dependencies | Completed At |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TSK-5.1** | Update `metadata.json` and `index.html` entry points with SentinelAI branding | `dx-agent` | Urgent | Completed | None | 2026-09-03 |
| **TSK-5.2** | Update `package.json` and `LICENSE` manifests to `sentinelai` / SentinelAI | `dx-agent` | High | Completed | None | 2026-09-03 |
| **TSK-5.3** | Update UI components (`Sidebar.tsx`, `DesignSystemModal.tsx`, `ScanDetailDrawer.tsx`, `AgentGuardView.tsx`, `OtherViews.tsx`, `designTokens.ts`) with SentinelAI branding | `ui-branding-agent` | Urgent | Completed | None | 2026-09-03 |
| **TSK-5.4** | Update documentation files (`README.md`, `CONTRIBUTING.md`, `AGENTS.md`) to SentinelAI | `docs-agent` | High | Completed | None | 2026-09-03 |
| **TSK-5.5** | Execute linting & build verification suite ensuring zero regressions | `dx-agent` | Urgent | Completed | TSK-5.1-5.4 | 2026-09-03 |
| **TSK-5.6** | Update GitHub repository endpoint to `https://github.com/bymilon/sentinel-ai` across package.json, README, CONTRIBUTING, AGENTS, Header, and Settings view | `dx-agent` | Urgent | Completed | None | 2026-09-03 |
