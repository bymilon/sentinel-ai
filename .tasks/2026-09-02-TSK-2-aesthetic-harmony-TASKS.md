# Task Group: Aesthetic Harmony & Visual Fidelity Refinement

**File:** `.tasks/2026-09-02-TSK-2-aesthetic-harmony-TASKS.md`  
**Date:** 2026-09-02  
**Owner:** `design-agent`  
**Status:** Completed  

---

## Objective

Resolve visual inconsistencies, jarring artifacts, and layout disharmony highlighted in user feedback (`image.png`), specifically removing misaligned ASCII `+` crosshair artifacts at grid boundaries and harmonizing header spacing, footer baselines, category breakdown typography, and card item fidelity between `SecurityScoreCard` and `AttackTimelineCard`.

---

## Tasks (Linear-Style Tracker)

| Task ID | Title | Owner | Priority | Status | Dependencies | Completed At |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TSK-2.1** | Remove floating/misaligned `+` text characters from `App.tsx` and `MetricCards.tsx` | `design-agent` | Urgent | Completed | None | 2026-09-02 |
| **TSK-2.2** | Harmonize card headers (margins, tracking, view-all controls) across analytics cards | `design-agent` | High | Completed | None | 2026-09-02 |
| **TSK-2.3** | Fix floating dot and layout disharmony in `SecurityScoreCard` and `AttackTimelineCard` footers | `design-agent` | High | Completed | None | 2026-09-02 |
| **TSK-2.4** | Refine category breakdown typography and progress bar contrast in `SecurityScoreCard` | `design-agent` | Medium | Completed | None | 2026-09-02 |
| **TSK-2.5** | Clean up unused `.grid-crosshair` CSS and design tokens references | `design-agent` | Low | Completed | TSK-2.1 | 2026-09-02 |
| **TSK-2.6** | Compile, lint, and verify high-fidelity visual presentation across all viewports | `design-agent` | High | Completed | TSK-2.1-2.5 | 2026-09-02 |

---

## Verification & Visual Audit Summary

- **Crosshair Artifact Elimination:** Removed all raw text `+` characters (`div` overlays) from `App.tsx` and `MetricCards.tsx`. The layout now displays seamless, crisp 1px borders (`#181818`), eliminating floating characters and visual noise.
- **Card Header Harmonization:** Standardized `mb-6` bottom margins across both `SecurityScoreCard` and `AttackTimelineCard` with matching typography and secondary ghost button affordances.
- **Footer Baseline & Typographic Symmetry:** Fixed the `justify-between` bug in `SecurityScoreCard` where a separator dot was pushed into the center of the card. Both cards now feature identical `pt-5 mt-4 border-t border-[#161616]` divider lines, matching `text-[11px] text-[#71717a]` typography, and aligned status metadata.
- **Breakdown Cleanliness:** Removed redundant bullet glyphs (`•`) before category names in `SecurityScoreCard`, providing clean baseline-aligned labels and progress bars.
- **Codebase Cleanliness:** Removed obsolete `.grid-crosshair` CSS definitions and updated design tokens. Build and linter passed with zero errors.

---

## Task Details

### TSK-2.1: Remove Floating Crosshairs
- **File(s):** `/src/App.tsx`, `/src/components/MetricCards.tsx`
- Eliminate the absolute-positioned `+` monospace markers that float awkwardly over the 1px grid borders and cause visual clutter/inconsistency.

### TSK-2.2: Harmonize Card Headers
- **File(s):** `/src/components/SecurityScoreCard.tsx`, `/src/components/AttackTimelineCard.tsx`
- Standardize header bottom margin to `mb-6`, title font size `text-[15px]` font-semibold tracking-tight, and consistent ghost button styling for "View all".

### TSK-2.3: Harmonize Footers
- **File(s):** `/src/components/SecurityScoreCard.tsx`, `/src/components/AttackTimelineCard.tsx`
- Resolve the `justify-between` 3-child spacing bug in `SecurityScoreCard` where the separator dot was pushed into the center of the card. Align both card footers with cohesive status indicator, timestamp, and metadata.

### TSK-2.4: Category Breakdown Typography
- **File(s):** `/src/components/SecurityScoreCard.tsx`
- Remove redundant bullet point symbols preceding category names; align category labels, progress track indicators, and score readouts cleanly.
