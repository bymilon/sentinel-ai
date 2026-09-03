# Task Group: Collapsible Sidebar Audit & Aesthetic Harmony Refinement

**File:** `.tasks/2026-09-02-TSK-3-collapsible-sidebar-TASKS.md`  
**Date:** 2026-09-02  
**Skill:** `better-layout` & `anti-slop`  
**Status:** Completed  

---

## Objective

Audit and fix visual conflicts, element collisions, and aesthetic disharmony in the collapsible sidebar (`image.png`):
1. Resolve collision between ZeroLeaks logo mark and collapse toggle button in the header.
2. Fix asymmetrical left-aligned navigation icons by centering 40×40px target containers symmetrically within the 64px (`w-16`) rail.
3. Replace the cryptic isolated floating progress bar in the bottom section with an elegant, proportional circular gauge with `Zap` indicator and harmonized user profile avatar.
4. Provide tooltips and keyboard shortcut (`Cmd+B` / `Ctrl+B`) for seamless accessibility and expand/collapse control.

---

## Tasks (Linear-Style Tracker)

| Task ID | Title | Owner | Priority | Status | Dependencies | Completed At |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TSK-3.1** | Standardize collapsed sidebar width to 64px (`w-16`) with symmetric margins | `design-agent` | Urgent | Completed | None | 2026-09-02 |
| **TSK-3.2** | Redesign collapsed header to eliminate logo and toggle button overlap with interactive hover reveal | `design-agent` | Urgent | Completed | TSK-3.1 | 2026-09-02 |
| **TSK-3.3** | Center navigation icons symmetrically in 40×40 rounded targets with native tooltips | `design-agent` | High | Completed | TSK-3.1 | 2026-09-02 |
| **TSK-3.4** | Refactor bottom credits indicator from bare floating bar to high-fidelity circular meter | `design-agent` | High | Completed | TSK-3.1 | 2026-09-02 |
| **TSK-3.5** | Add global `Cmd+B` / `Ctrl+B` shortcut for sidebar toggle in `App.tsx` | `design-agent` | Medium | Completed | None | 2026-09-02 |
| **TSK-3.6** | Run linter and compiler verification to ensure zero regressions | `design-agent` | High | Completed | TSK-3.1-3.5 | 2026-09-02 |

---

## Verification & Audit Summary

1. **Header Overlap & Collision Fix:**
   - In collapsed mode (`w-16`, 64px), the previous header attempted to display both the logo and the collapse button simultaneously in `px-4 flex justify-between`, causing them to physically collide and squash against each other.
   - Re-engineered the collapsed header into a centered 36×36px interactive trigger button. At rest, it displays the ZeroLeaks logo mark centered. On hover, it smoothly transitions to the `PanelLeft` expand icon with an accessible tooltip (`Expand sidebar (Cmd+B)`), creating an intuitive interaction.

2. **Navigation Item Centering & Optical Alignment:**
   - In collapsed mode, previous items retained full-width horizontal padding (`px-3`) with empty label slots, shifting icons off-center towards the left border.
   - Rebuilt collapsed navigation items as dedicated 40×40px (`w-10 h-10 mx-auto`) rounded containers, centering icons along the vertical midpoint (x = 32px) with 12px margins on both sides. Native hover tooltips (`title={item.label}`) provide instant navigation context.

3. **Bottom Section Harmony:**
   - Removed the isolated, floating 28px horizontal line that lacked context.
   - Added a circular SVG progress gauge with centered `Zap` icon (showing 96/264 credits remaining at 36% fill) paired with the centered user profile avatar button (`w-10 h-10 mx-auto`). Both elements share the exact same 40px bounding box and vertical rhythm.

4. **Desktop Keyboard Ergonomics:**
   - Implemented standard `Cmd+B` / `Ctrl+B` keyboard shortcut to toggle sidebar collapse from anywhere in the application.
