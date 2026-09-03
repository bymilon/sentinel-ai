# Task Group: React Doctor Audit Remediation & Performance/A11y Optimization

**File:** `.tasks/2026-09-03-TSK-7-react-doctor-audit-remediation-TASKS.md`  
**Date:** 2026-09-03  
**Auditor Tool:** `react-doctor@latest` (oxlint, millionco engine)  
**Initial Score:** 41 / 100 Critical (42 issues: 2 errors, 40 warnings)  
**Final Score:** 100 / 100 Great (0 issues: 0 errors, 0 warnings)  
**Status:** Completed  

---

## Agent Teams & Ownership

| Agent Team | Role & Focus Area |
| :--- | :--- |
| **Team Reliability & Security (`dx-agent`)** | Fix uncleaned timer effects (`Header.tsx`), sanitize test credentials, and purge stale `dist/` artifacts. |
| **Team Performance & React Architecture (`arch-agent`)** | Replace `transition-all` with explicit transition properties, modularize `DesignSystemModal`, lift pure functions and static values to module scope, and stabilize effect callbacks without render ref mutations. |
| **Team Accessibility & Semantics (`controls-agent`)** | Replace custom `role="dialog"` with semantic `<dialog open>`, add accessible names/labels, eliminate nested interactive controls, and associate form labels. |
| **Team Data & Keying (`data-agent`)** | Replace array index keys with stable entity identifiers across all lists. |

---

## Tasks (Linear-Style Tracker)

| Task ID | Title | Owner | Priority | Status | Dependencies | Completed At |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TSK-7.1** | Fix effect cleanup in `Header.tsx` and purge stale `dist/` artifacts | `dx-agent` | Urgent | Completed | None | 2026-09-03 |
| **TSK-7.2** | Replace `transition-all` with targeted transitions across all component elements | `arch-agent` | High | Completed | None | 2026-09-03 |
| **TSK-7.3** | Lift static values and pure helper functions to module scope to avoid re-allocation on every render | `arch-agent` | High | Completed | None | 2026-09-03 |
| **TSK-7.4** | Fix accessibility issues: adopt `<dialog>` elements, button aria-labels, label associations, and nested interactive controls | `controls-agent` | High | Completed | None | 2026-09-03 |
| **TSK-7.5** | Stabilize effect event handlers (using ref updated in effect) and replace array index keys with stable keys | `data-agent` | Medium | Completed | None | 2026-09-03 |
| **TSK-7.6** | Re-run `npx react-doctor@latest`, lint, and compile to verify score improvement and zero regressions | `dx-agent` | High | Completed | TSK-7.1-7.5 | 2026-09-03 |

---

## Verification Results

1. **`npx react-doctor@latest .`**: 100 / 100 Great (Scanned 22 files, 0 issues).
2. **`npm run lint` (`tsc --noEmit`)**: Clean (0 errors, 0 warnings).
3. **`npm run build` (`vite build`)**: Clean (Compiled successfully).
4. **`npm run clean`**: Successfully purged build artifacts.
