# Task Group: Unslop README Refactor & Cross-Platform Best Practices

**File:** `.tasks/2026-09-03-TSK-6-unslop-readme-refactor-TASKS.md`  
**Date:** 2026-09-03  
**Framework:** Open Source Standards, Cross-Platform OS Compatibility, Unslop Guidelines  
**Foundation Model:** Google Gemini 3.8 Flash & Gemini 3.8 Flash Cyber  
**Creator & Citation:** Milon ([@milonspace on X](https://x.com/milonspace))  
**Status:** Completed  

---

## Agent Teams & Ownership

| Agent Team | Role & Focus Area |
| :--- | :--- |
| **Team Documentation & Specs (`docs-agent`)** | Refactor `README.md` to remove AI slop, em dashes, mid-sentence colons, and marketing puffery. |
| **Team DX & Tooling (`dx-agent`)** | Make build scripts cross-platform (Windows, macOS, Linux) and document OS-specific setup steps. |

---

## Tasks (Linear-Style Tracker)

| Task ID | Title | Owner | Priority | Status | Dependencies | Completed At |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TSK-6.1** | Make `clean` script in `package.json` cross-platform for Windows, macOS, and Linux using Node.js APIs | `dx-agent` | High | Completed | None | 2026-09-03 |
| **TSK-6.2** | Refactor `README.md` applying unslop rules (no em dashes, sentence case, no decorative emojis, concrete metrics) | `docs-agent` | Urgent | Completed | TSK-6.1 | 2026-09-03 |
| **TSK-6.3** | Add cross-platform OS requirements and environment setup commands for macOS, Linux, and Windows | `dx-agent` | High | Completed | TSK-6.1 | 2026-09-03 |
| **TSK-6.4** | Validate codebase with lint and production build suites | `dx-agent` | High | Completed | TSK-6.2, TSK-6.3 | 2026-09-03 |
