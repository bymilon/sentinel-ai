/**
 * Design Tokens for SentinelAI Solid Component Library
 * High-contrast OLED dark system tokens.
 */

export const tokens = {
  colors: {
    canvas: '#000000',
    surface: {
      base: '#050505',
      raised: '#0a0a0a',
      overlay: '#121212',
      active: '#141414',
    },
    border: {
      subtle: '#141414',
      grid: '#181818',
      prominent: '#262626',
    },
    text: {
      primary: '#ffffff',
      secondary: '#8e8e93',
      muted: '#636366',
      dimmed: '#3a3a3c',
    },
    status: {
      critical: {
        text: '#ef4444',
        bg: '#1c080a',
        border: '#450a0a',
      },
      warning: {
        text: '#f59e0b',
        bg: '#1c1404',
        border: '#451a03',
      },
      secure: {
        text: '#22c55e',
        bg: '#051c10',
        border: '#0c4a2b',
      },
      info: {
        text: '#3b82f6',
        bg: '#081325',
        border: '#1e3a8a',
      },
    },
  },
  shadows: {
    specularRim: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
    specularRimSubtle: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.04)',
    elevation: '0 4px 20px -2px rgba(0, 0, 0, 0.9), 0 0 0 1px #1f1f1f',
  },
  radii: {
    sm: '0.25rem',  // 4px
    md: '0.5rem',   // 8px
    lg: '0.75rem',  // 12px
    xl: '1rem',     // 16px
    full: '9999px',
  },
} as const;

export type DesignTokens = typeof tokens;
