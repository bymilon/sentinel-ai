/** @jsxImportSource solid-js */
import { JSX, mergeProps, splitProps, Show } from 'solid-js';

export interface BadgeProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'secure' | 'warning' | 'critical' | 'info';
  size?: 'sm' | 'md';
  pulse?: boolean;
}

export function Badge(props: BadgeProps) {
  const merged = mergeProps(
    {
      variant: 'neutral' as const,
      size: 'md' as const,
      pulse: false,
    },
    props
  );

  const [local, rest] = splitProps(merged, ['variant', 'size', 'pulse', 'class', 'children']);

  const variantClasses = () => {
    switch (local.variant) {
      case 'secure':
        return 'bg-[#051c10] text-[#22c55e] border-[#0c4a2b]';
      case 'warning':
        return 'bg-[#1c1404] text-[#f59e0b] border-[#451a03]';
      case 'critical':
        return 'bg-[#1c080a] text-[#ef4444] border-[#450a0a]';
      case 'info':
        return 'bg-[#081325] text-[#3b82f6] border-[#1e3a8a]';
      case 'neutral':
      default:
        return 'bg-[#141414] text-[#a1a1aa] border-[#262626]';
    }
  };

  const sizeClasses = () => {
    switch (local.size) {
      case 'sm':
        return 'text-[10px] px-2 py-0.5 rounded-full';
      case 'md':
      default:
        return 'text-[11px] px-2.5 py-0.5 rounded-full';
    }
  };

  return (
    <span
      {...rest}
      class={`inline-flex items-center gap-1.5 font-medium border select-none tabular-nums ${variantClasses()} ${sizeClasses()} ${
        local.class || ''
      }`}
    >
      <Show when={local.pulse}>
        <span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse shrink-0" aria-hidden="true" />
      </Show>
      {local.children}
    </span>
  );
}
