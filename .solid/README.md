# SentinelAI SolidJS UI Component Library

A minimal, high-contrast, production-grade SolidJS UI component workspace extracted from SentinelAI.

Optimized for **copy-paste usability**, **agent comprehension**, and **low cognitive load**.

---

## Design Principles

1. **Minimal Surface Area**: Boring, predictable component APIs without boolean explosions.
2. **Native HTML Semantics**: Uses `<button>`, `<input>`, `<dialog>`, `<table>`, `<aside>`, `<header>`.
3. **Solid-Native Reactivity**: Proper getter access via `mergeProps` and `splitProps`; no React hook mental models.
4. **Accessible by Default**: Keyboard listeners (Escape, focus visible), visible focus rings, and proper ARIA relationships.
5. **Logical Properties**: RTL/LTR friendliness with `ps-*`, `pe-*`, `ms-*`, `me-*`, `border-s`, `border-e`, `text-start`, `text-end`.
6. **Numeric Alignment**: Numbers in tables always aligned to trailing edge (`text-end`) with `tabular-nums`.

---

## Directory Structure

```text
.solid/
├── components/
│   ├── index.ts          # Barrel exports for all components and types
│   ├── Button.tsx        # Button & IconButton
│   ├── Badge.tsx         # Status badge pills (secure, warning, critical, info, neutral)
│   ├── Input.tsx         # Text input & SearchInput with clear action
│   ├── Card.tsx          # Pitch-black surface cards (Card, CardHeader, CardTitle, CardDescription, CardFooter)
│   ├── StatCard.tsx      # KPI metric card with icon container and delta badge
│   ├── DataTable.tsx     # Semantic table with header, body, and trailing numeric alignment
│   ├── Dialog.tsx        # Accessible modal & drawer using native <dialog>
│   ├── Header.tsx        # Top navigation bar
│   ├── Sidebar.tsx       # Collapsible navigation drawer
│   └── AppShell.tsx      # Full-height application shell
├── tokens/
│   └── tokens.ts         # High-contrast OLED dark tokens (surfaces, borders, text, radii)
├── example/
│   └── DashboardExample.tsx # Runnable reference composition demonstrating all components
└── README.md             # This document
```

---

## Quick Start (Copy-Paste Usage)

### 1. Import Components

```tsx
/** @jsxImportSource solid-js */
import { createSignal } from 'solid-js';
import { Button, Badge, Card, StatCard, DataTable, Dialog } from './components';

export function MyWidget() {
  const [open, setOpen] = createSignal(false);

  return (
    <Card variant="base">
      <StatCard label="Total Scans" value="1,248" delta="+18%" deltaType="positive" />
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Details
      </Button>
      <Dialog open={open()} onClose={() => setOpen(false)} title="Audit Details">
        <p>Security scan complete.</p>
      </Dialog>
    </Card>
  );
}
```

---

## Component Reference

### Primitives

#### `Button` & `IconButton` (`Button.tsx`)
- **`variant`**: `'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'` (default: `'secondary'`)
- **`size`**: `'sm' | 'md' | 'lg'` (default: `'md'`)
- **`fullWidth`**: `boolean`
- **`IconButton`**: Requires `'aria-label'` string for accessibility.

#### `Badge` (`Badge.tsx`)
- **`variant`**: `'neutral' | 'secure' | 'warning' | 'critical' | 'info'`
- **`size`**: `'sm' | 'md'`
- **`pulse`**: `boolean` (renders an animated pulsing dot indicator)

#### `Input` & `SearchInput` (`Input.tsx`)
- **`leading`**: `JSX.Element` (leading icon slot)
- **`trailing`**: `JSX.Element` (trailing action or icon slot)
- **`error`**: `string` (validation error message)
- **`SearchInput`**: Specialized rounded-full input with built-in search icon and optional `onClear` callback.

#### `Card` (`Card.tsx`)
- Subcomponents: `<CardHeader>`, `<CardTitle>`, `<CardDescription>`, `<CardFooter>`.
- **`variant`**: `'base' | 'raised' | 'interactive'`
- **`specular`**: `boolean` (adds specular rim top highlight, default `true`)

---

### Composites

#### `StatCard` (`StatCard.tsx`)
- **`label`**: `string` (uppercase caption)
- **`value`**: `string | number` (tabular numeric display)
- **`delta`**: `string` (e.g. `"+12%"`)
- **`deltaType`**: `'positive' | 'negative' | 'neutral'`
- **`icon`**: `JSX.Element`

#### `DataTable` (`DataTable.tsx`)
- Subcomponents: `<TableHead>`, `<TableBody>`, `<TableRow>`, `<TableHeaderCell>`, `<TableCell>`.
- Strict alignment rules:
  - Header labels and text: `align="start"`
  - Numbers and counts: `align="end"` with `numeric={true}`

#### `Dialog` (`Dialog.tsx`)
- **`open`**: `boolean`
- **`onClose`**: `() => void`
- **`title`**: `string`
- **`subtitle`**: `string` (optional)
- **`variant`**: `'modal' | 'drawer'`
- Supports native Escape key dismissal and click-outside dismissal.

---

### Layout

#### `AppShell` (`AppShell.tsx`)
Root two-column viewport container with responsive grid behavior.
- **`sidebar`**: `JSX.Element`
- **`header`**: `JSX.Element`
- **`children`**: Page content

#### `Sidebar` & `SidebarItem` (`Sidebar.tsx`)
Collapsible navigation drawer with brand header and footer.
- **`collapsed`**: `boolean`
- **`onToggleCollapse`**: `() => void`
- **`brandTitle`**: `string`
- **`brandIcon`**: `JSX.Element`

#### `Header` (`Header.tsx`)
Sticky top app header with breadcrumb and trailing actions.
- **`title`**: `string`
- **`subtitle`**: `string`
- **`badge`**: `JSX.Element`
- **`actions`**: `JSX.Element`
