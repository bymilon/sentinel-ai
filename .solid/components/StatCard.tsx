/** @jsxImportSource solid-js */
import { JSX, mergeProps, splitProps, Show } from 'solid-js';

export interface StatCardProps extends JSX.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  icon?: JSX.Element;
  delta?: string;
  deltaType?: 'positive' | 'negative' | 'neutral';
  caption?: string;
}

export function StatCard(props: StatCardProps) {
  const merged = mergeProps(
    {
      deltaType: 'neutral' as const,
    },
    props
  );

  const [local, rest] = splitProps(merged, ['label', 'value', 'icon', 'delta', 'deltaType', 'caption', 'class']);

  const deltaClasses = () => {
    switch (local.deltaType) {
      case 'negative':
        return 'bg-[#220c0f] text-[#ef4444] border-[#451419]';
      case 'positive':
        return 'bg-[#051c10] text-[#22c55e] border-[#0c4a2b]';
      case 'neutral':
      default:
        return 'bg-[#141414] text-[#a1a1aa] border-[#262626]';
    }
  };

  return (
    <div
      {...rest}
      class={`p-6 transition-colors duration-150 hover:bg-[#070707] border border-[#181818] bg-black select-none ${
        local.class || ''
      }`}
    >
      {/* Top Row: Icon & Delta Badge */}
      <div class="flex items-center justify-between mb-3.5">
        <Show when={local.icon}>
          <div class="w-7 h-7 rounded-lg bg-[#0c0c0e] border border-[#202024] flex items-center justify-center shadow-xs text-[#a1a1aa]">
            {local.icon}
          </div>
        </Show>

        <Show when={local.delta}>
          <span class={`px-2 py-0.5 rounded text-[11px] font-medium tracking-tight border font-mono tabular-nums ${deltaClasses()}`}>
            {local.delta}
          </span>
        </Show>
      </div>

      {/* Label & Value */}
      <div class="space-y-1">
        <span class="text-[11px] font-semibold tracking-wider text-[#636366] uppercase block [text-wrap:balance]">
          {local.label}
        </span>
        <div class="text-3xl font-medium tracking-tight text-white font-mono tabular-nums">
          {local.value}
        </div>
        <Show when={local.caption}>
          <p class="text-[11px] text-[#71717a] mt-1">{local.caption}</p>
        </Show>
      </div>
    </div>
  );
}
