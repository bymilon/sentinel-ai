# SentinelAI Agent Guidelines & AX Operational Protocol

This document defines the persistent instructions and operational rules for AI coding agents operating on the SentinelAI repository.

---

## 1. Project Identity & Architecture

- **Project**: SentinelAI (Enterprise AI Prompt Posture & Instruction Leak Firewall)
- **Foundation Engine**: Google Gemini 3.8 Flash & Gemini 3.8 Flash Cyber ([Research & Announcement Reference](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/))
- **Environment**: Google AI Studio App Builders
- **Creator & Maintainer**: Milon ([@milonspace](https://x.com/milonspace))
- **GitHub Repository**: [https://github.com/bymilon/sentinel-ai](https://github.com/bymilon/sentinel-ai)
- **Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS v4, Motion, Lucide Icons

---

## 2. Task Tracking & Single Source of Truth Mandate

1. **Linear-Style Task Groups**:
   - Always maintain `YYYY-MM-DD-TSK-{N}-{task-group-name}-TASKS.md` in `.tasks/` as the single source of truth for tracking, ownership, priorities, dependencies, status, and progress.
   - Do not scatter progress updates across random files or commit messages; record them in the task markdown file.

2. **Agent Team Roles**:
   When planning or executing work, organize by specialized sub-agent responsibilities:
   - `arch-agent`: Shell layout, grid system, responsive adaptivity, logical properties.
   - `data-agent`: Tables, numeric trailing alignment, sorting, telemetry.
   - `controls-agent`: Button affordances, cursor pointer fidelity, focus rings, touch targets.
   - `dx-agent`: Build scripts, environment variables, dependencies, performance.
   - `docs-agent`: Readme, license, citations, release notes.
   - `ui-branding-agent`: Visual polish, open source links, creator citation (@milonspace).

---

## 3. Design Token & UI Fidelity Rules

- **Source of Truth**: `src/tokens/designTokens.ts`. Never hardcode random colors or spacing.
- **Clickable Elements**: Every interactive element (`<button>`, `[role="button"]`, select, link) must have `cursor-pointer` and focus styling (`focus-ring`).
- **Logical Properties**: Use logical CSS properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `border-s`, `border-e`, `inset-inline-*`) to ensure seamless bidirectional RTL/LTR support.
- **Numbers in Tables**: Always align tabular numbers to the trailing edge (`text-end`) and labels/text to the leading edge (`text-start`).

---

## 4. Verification Protocol

Always execute the following verification steps before completing any task:
1. `lint_applet` (`npm run lint` / `tsc --noEmit`)
2. `compile_applet` (`npm run build`)
3. Ensure zero build warnings, missing imports, or type errors.
