import { DesignToken } from '../types';

export interface DesignSystemMetadata {
  name: string;
  version: string;
  archetype: string;
  baseFont: string;
  monoFont: string;
}

export const designSystemMeta: DesignSystemMetadata = {
  name: 'SentinelAI Design System',
  version: '1.0.0',
  archetype: 'Enterprise Developer Security Platform',
  baseFont: 'SF Pro Rounded, Plus Jakarta Sans, system-ui, sans-serif',
  monoFont: 'JetBrains Mono, SFMono-Regular, Menlo, monospace',
};

export const COLOR_TOKENS: DesignToken[] = [
  // Surfaces
  {
    category: 'Surfaces',
    name: 'Canvas Black',
    cssVariable: '--color-canvas-black',
    value: '#000000',
    description: 'Pitch black base canvas for high-contrast enterprise cybersecurity aesthetics.',
    type: 'color',
  },
  {
    category: 'Surfaces',
    name: 'Surface Base',
    cssVariable: '--color-surface-base',
    value: '#050505',
    description: 'Level 1 card background under normal state.',
    type: 'color',
  },
  {
    category: 'Surfaces',
    name: 'Surface Raised',
    cssVariable: '--color-surface-raised',
    value: '#0a0a0a',
    description: 'Elevated components, table hover rows, and interactive container backgrounds.',
    type: 'color',
  },
  {
    category: 'Surfaces',
    name: 'Surface Overlay',
    cssVariable: '--color-surface-overlay',
    value: '#121212',
    description: 'Modal surfaces, dropdowns, and pill badge backgrounds.',
    type: 'color',
  },
  {
    category: 'Surfaces',
    name: 'Surface Active',
    cssVariable: '--color-surface-active',
    value: '#171717',
    description: 'Active sidebar navigation pill, pressed controls.',
    type: 'color',
  },

  // Borders
  {
    category: 'Borders & Grids',
    name: 'Border Subtle',
    cssVariable: '--color-border-subtle',
    value: '#141414',
    description: 'Divider lines between secondary list items and soft separation.',
    type: 'color',
  },
  {
    category: 'Borders & Grids',
    name: 'Border Grid Matrix',
    cssVariable: '--color-border-grid',
    value: '#1c1c1c',
    description: 'Architectural structural grid borders and card boundaries.',
    type: 'color',
  },
  {
    category: 'Borders & Grids',
    name: 'Border Prominent',
    cssVariable: '--color-border-prominent',
    value: '#262626',
    description: 'Focus states, active item boundaries, and badge borders.',
    type: 'color',
  },
  {
    category: 'Borders & Grids',
    name: 'Grid Divider Subtle',
    cssVariable: '--color-border-grid',
    value: '#181818',
    description: 'Precision 1px architectural grid boundary dividers.',
    type: 'color',
  },

  // Text Hierarchy
  {
    category: 'Typography & Text',
    name: 'Text Primary',
    cssVariable: '--color-text-primary',
    value: '#FFFFFF',
    description: 'Highest hierarchy: metric values, primary headers, active tab labels.',
    type: 'color',
  },
  {
    category: 'Typography & Text',
    name: 'Text Secondary',
    cssVariable: '--color-text-secondary',
    value: '#8e8e93',
    description: 'Supporting descriptions, breadcrumbs, and timestamp details.',
    type: 'color',
  },
  {
    category: 'Typography & Text',
    name: 'Text Muted',
    cssVariable: '--color-text-muted',
    value: '#636366',
    description: 'Table headers, uppercase metric captions, subtle separators.',
    type: 'color',
  },
  {
    category: 'Typography & Text',
    name: 'Text Dimmed',
    cssVariable: '--color-text-dimmed',
    value: '#3a3a3c',
    description: 'Inactive icon states and structural guidelines.',
    type: 'color',
  },

  // Status Colors
  {
    category: 'Status Semantics',
    name: 'Critical Red',
    cssVariable: '--color-status-critical',
    value: '#EF4444',
    description: 'Active leaks, critical vulnerabilities, failed attack defense.',
    type: 'color',
  },
  {
    category: 'Status Semantics',
    name: 'Critical Background',
    cssVariable: '--color-status-critical-bg',
    value: '#1f090b',
    description: 'Dark crimson pill background for critical alerts.',
    type: 'color',
  },
  {
    category: 'Status Semantics',
    name: 'Warning Amber',
    cssVariable: '--color-status-warning',
    value: '#F59E0B',
    description: 'Vulnerable prompts, partial overrides, medium risk vector.',
    type: 'color',
  },
  {
    category: 'Status Semantics',
    name: 'Warning Background',
    cssVariable: '--color-status-warning-bg',
    value: '#1e1405',
    description: 'Deep amber badge background.',
    type: 'color',
  },
  {
    category: 'Status Semantics',
    name: 'Secure Green',
    cssVariable: '--color-status-secure',
    value: '#22C55E',
    description: 'Verified immune prompts, passing checks, positive deltas.',
    type: 'color',
  },
  {
    category: 'Status Semantics',
    name: 'Secure Background',
    cssVariable: '--color-status-secure-bg',
    value: '#051b10',
    description: 'Forest deep badge background for secure items.',
    type: 'color',
  },
  {
    category: 'Status Semantics',
    name: 'Info Blue',
    cssVariable: '--color-status-info',
    value: '#3B82F6',
    description: 'Low severity detections, informational signals, telemetry.',
    type: 'color',
  },
  {
    category: 'Status Semantics',
    name: 'Info Background',
    cssVariable: '--color-status-info-bg',
    value: '#091526',
    description: 'Deep navy background for informational pills.',
    type: 'color',
  },
];

export const SPACING_TOKENS: DesignToken[] = [
  { category: 'Spacing', name: 'space-1', cssVariable: '--space-1', value: '4px (0.25rem)', description: 'Icon gaps, badge padding vertical', type: 'spacing' },
  { category: 'Spacing', name: 'space-2', cssVariable: '--space-2', value: '8px (0.5rem)', description: 'Badge padding horizontal, input padding', type: 'spacing' },
  { category: 'Spacing', name: 'space-3', cssVariable: '--space-3', value: '12px (0.75rem)', description: 'List item gap, table cell vertical padding', type: 'spacing' },
  { category: 'Spacing', name: 'space-4', cssVariable: '--space-4', value: '16px (1rem)', description: 'Standard container inner padding, sidebar items', type: 'spacing' },
  { category: 'Spacing', name: 'space-5', cssVariable: '--space-5', value: '20px (1.25rem)', description: 'Card section separations', type: 'spacing' },
  { category: 'Spacing', name: 'space-6', cssVariable: '--space-6', value: '24px (1.5rem)', description: 'Card outer padding, metric tile padding', type: 'spacing' },
  { category: 'Spacing', name: 'space-8', cssVariable: '--space-8', value: '32px (2rem)', description: 'Major section vertical breaks', type: 'spacing' },
];

export const SHADOW_TOKENS: DesignToken[] = [
  {
    category: 'Shadows & Bevels',
    name: 'Inner Bevel',
    cssVariable: '--shadow-inner-bevel',
    value: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.07)',
    description: 'Top rim specular highlight for dark UI buttons and cards.',
    type: 'shadow',
  },
  {
    category: 'Shadows & Bevels',
    name: 'Subtle Elevation',
    cssVariable: '--shadow-elevation',
    value: '0 4px 20px -2px rgba(0, 0, 0, 0.9), 0 0 0 1px #1f1f1f',
    description: 'Elevated popovers, menus, and inspection drawers.',
    type: 'shadow',
  },
  {
    category: 'Shadows & Bevels',
    name: 'Critical Glow',
    cssVariable: '--shadow-glow-critical',
    value: '0 0 14px rgba(239, 68, 68, 0.15)',
    description: 'Subtle ambient light on critical breach indicators.',
    type: 'shadow',
  },
  {
    category: 'Shadows & Bevels',
    name: 'Secure Glow',
    cssVariable: '--shadow-glow-secure',
    value: '0 0 14px rgba(34, 197, 94, 0.15)',
    description: 'Subtle ambient light on protected prompt badges.',
    type: 'shadow',
  },
];

export const RADIUS_TOKENS: DesignToken[] = [
  { category: 'Border Radius', name: 'radius-sm', cssVariable: '--radius-sm', value: '4px', description: 'Internal tiny indicators, checkboxes', type: 'radius' },
  { category: 'Border Radius', name: 'radius-md', cssVariable: '--radius-md', value: '8px', description: 'Action buttons, icon containers, badges', type: 'radius' },
  { category: 'Border Radius', name: 'radius-lg', cssVariable: '--radius-lg', value: '12px', description: 'Standard content cards and popups', type: 'radius' },
  { category: 'Border Radius', name: 'radius-full', cssVariable: '--radius-full', value: '9999px', description: 'Pills, status tags, avatars', type: 'radius' },
];

export const ALL_DESIGN_TOKENS = [
  ...COLOR_TOKENS,
  ...SPACING_TOKENS,
  ...SHADOW_TOKENS,
  ...RADIUS_TOKENS,
];
