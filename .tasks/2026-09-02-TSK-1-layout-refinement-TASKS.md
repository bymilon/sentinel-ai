# Task Group: Layout Architecture & Visual Refinement (better-layout)

**File:** `.tasks/2026-09-02-TSK-1-layout-refinement-TASKS.md`  
**Date:** 2026-09-02  
**Skill:** `better-layout` (Grouping, Alignment, Directional Logic, Adaptivity, Progressive Disclosure)  
**Status:** Completed  

---

## Agent Teams & Ownership

| Agent Team | Role & Focus Area |
| :--- | :--- |
| **Team Architecture (`arch-agent`)** | Global layout shell, grid structure, spacing ratios (2× intra vs inter-group), safe area insets, responsive viewport boundaries |
| **Team Directional & Bidi (`bidi-agent`)** | Logical properties migration (`inline-start`/`inline-end`, `ms-*`, `pe-*`, `text-start`, `text-end`), RTL mirror robustness |
| **Team Data Density & Alignment (`data-agent`)** | Table column alignment (numeric trailing edge, text leading edge), card alignment baselines, crosshair precision |
| **Team Adaptivity & Controls (`controls-agent`)** | Touch targets breathing room (12px filled / 24px borderless), progressive disclosure affordances, horizontal overflow indicators |

---

## Tasks (Linear-Style Tracker)

| Task ID | Title | Owner | Priority | Status | Dependencies | Completed At |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TSK-1.1** | Audit & replace physical layout properties with CSS logical properties across all components | `bidi-agent` | High | Completed | None | 2026-09-02 |
| **TSK-1.2** | Harmonize table alignment rules: align numeric columns (Leaks, Health) to trailing edge | `data-agent` | High | Completed | TSK-1.1 | 2026-09-02 |
| **TSK-1.3** | Implement horizontal scroll cues & progressive disclosure affordance for data tables | `controls-agent` | Medium | Completed | TSK-1.2 | 2026-09-02 |
| **TSK-1.4** | Refine spacing hierarchy & group ratios (2× rule: 8px intra vs 16px/24px inter) across cards | `arch-agent` | High | Completed | None | 2026-09-02 |
| **TSK-1.5** | Standardize control affordances (distinct ghost buttons for "View all", action buttons) | `controls-agent` | Medium | Completed | None | 2026-09-02 |
| **TSK-1.6** | Mobile responsiveness & adaptive viewport reflow for Sidebar, Header, and Metric grid | `arch-agent` | High | Completed | TSK-1.1, TSK-1.4 | 2026-09-02 |
| **TSK-1.7** | Inset actions, drawer safe-area padding (`env(safe-area-inset-bottom)`), modal margins | `arch-agent` | Medium | Completed | None | 2026-09-02 |
| **TSK-1.8** | Verification with lint, build, and layout audit report conforming to `better-layout` standard | `arch-agent` | High | Completed | TSK-1.1-1.7 | 2026-09-02 |

---

## Detailed Task Specifications

### TSK-1.1: Logical Properties Migration
- **Objective:** Replace physical properties (`left`, `right`, `ml-*`, `mr-*`, `pl-*`, `pr-*`, `border-l`, `border-r`) with logical properties (`inset-inline-start`, `inset-inline-end`, `ms-*`, `me-*`, `ps-*`, `pe-*`, `border-s`, `border-e`).
- **Files Affected:** `src/App.tsx`, `src/components/Header.tsx`, `src/components/Sidebar.tsx`, `src/components/MetricCards.tsx`, `src/components/SecurityScoreCard.tsx`, `src/components/AttackTimelineCard.tsx`, `src/components/RecentActivityTable.tsx`, `src/components/OtherViews.tsx`, `src/components/ScanDetailDrawer.tsx`, `src/components/NewScanModal.tsx`, `src/components/AttackDetailModal.tsx`.
- **Acceptance Criteria:** Layout mirrors cleanly under `dir="rtl"` without broken margins or clipping.

### TSK-1.2: Table Column Alignment
- **Objective:** Numbers in tables must align to trailing edge (`text-end`), while identifying text aligns to leading edge (`text-start`), according to `grouping-and-alignment.md`.
- **Files Affected:** `src/components/RecentActivityTable.tsx`.
- **Acceptance Criteria:** `LEAKS` header and cells align `text-end`, `HEALTH` header and values align `text-end`. `ACTIONS` remains `text-end`.

### TSK-1.3: Table Progressive Disclosure & Scroll Cues
- **Objective:** Data table horizontal overflow on smaller screens must have visible affordance so users know content continues off-screen (`spacing-and-adaptivity.md`).
- **Files Affected:** `src/components/RecentActivityTable.tsx`, `src/index.css`.
- **Acceptance Criteria:** Visual fade indicator or cue when table is scrollable; scroll snap or padding insets.

### TSK-1.4: Spacing Hierarchy & 2× Group Rule
- **Objective:** Space groups first, lines second. Inter-group gap >= 2× intra-group gap. Grouping must read clearly without visual clutter.
- **Files Affected:** `src/components/SecurityScoreCard.tsx`, `src/components/AttackTimelineCard.tsx`, `src/components/MetricCards.tsx`, `src/components/AgentGuardView.tsx`.
- **Acceptance Criteria:** Visual hierarchy established by space; quiet hairlines used only where necessary.

### TSK-1.5: Control vs Content Distinction
- **Objective:** Ensure all interactive elements have visible boundaries, hover/focus feedback, and consistent control zones.
- **Files Affected:** `src/components/SecurityScoreCard.tsx`, `src/components/AttackTimelineCard.tsx`, `src/components/RecentActivityTable.tsx`, `src/components/Sidebar.tsx`.
- **Acceptance Criteria:** No control looks identical to static body text; "View all" has subtle button styling.

### TSK-1.6: Mobile Adaptivity & Viewport Protection
- **Objective:** Responsive layout holds until it breaks, collapse late; prevent content overlap or horizontal blowout on screens < 768px.
- **Files Affected:** `src/App.tsx`, `src/components/Header.tsx`, `src/components/Sidebar.tsx`.
- **Acceptance Criteria:** Header search doesn't overflow mobile header; Sidebar collapses gracefully or offers overlay on narrow mobile viewports.

### TSK-1.7: Safe Area Insets & Button Insets
- **Objective:** Actions inset from viewport edges with visible radius; drawers and modals include `env(safe-area-inset-bottom)` and `env(safe-area-inset-top)`.
- **Files Affected:** `src/components/ScanDetailDrawer.tsx`, `src/components/NewScanModal.tsx`, `src/components/AttackDetailModal.tsx`.
- **Acceptance Criteria:** No buttons clipped at screen boundaries or touch gestures.

### TSK-1.8: Final Layout Verification & Reporting
- **Objective:** Run linter and compiler, perform stress-tests against `better-layout` criteria, and generate the final severity report.
- **Acceptance Criteria:** Clean build, 0 layout errors, complete markdown report table.

---

## Verification & Audit Summary

- **TypeScript Compilation:** `npm run build` passed with zero compilation errors.
- **Lint Check:** `npm run lint` (tsc --noEmit) passed cleanly with zero type or syntax issues.
- **Directional Logic:** 100% replacement of directional physical properties (`ml`, `mr`, `pl`, `pr`, `left`, `right`, `border-l`, `border-r`) with logical properties (`ms`, `me`, `ps`, `pe`, `start`, `end`, `border-s`, `border-e`).
- **Data Alignment:** Table numeric columns (`LEAKS`, `HEALTH`) and corresponding column headers align to the trailing edge (`text-end`), while identifying text and status badges align to the leading edge (`text-start`).
- **Control Distinction:** Replaced understated underline text links with bordered secondary ghost buttons (`bg-[#0e0e0e]`, `border-[#222]`, `rounded-lg`, `press-scale`) for consistent affordance.
- **Touch & Insets:** Modal and drawer footers include `env(safe-area-inset-bottom)` and `env(safe-area-inset-top)` safe-area padding; scrollers feature overscroll containment and horizontal affordances.
