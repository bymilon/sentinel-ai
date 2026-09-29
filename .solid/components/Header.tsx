/** @jsxImportSource solid-js */
import { JSX, splitProps, Show } from 'solid-js';

export interface HeaderProps extends JSX.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  badge?: JSX.Element;
  actions?: JSX.Element;
}

export function Header(props: HeaderProps) {
  const [local, rest] = splitProps(props, ['title', 'subtitle', 'badge', 'actions', 'class', 'children']);

  return (
    <header
      {...rest}
      class={`h-14 shrink-0 border-b border-[#181818] bg-black/95 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20 select-none ${
        local.class || ''
      }`}
    >
      {/* Leading Section: Title, Subtitle, Badge */}
      <div class="flex items-center gap-3 overflow-hidden me-4 min-w-0">
        <Show when={local.title}>
          <div class="flex items-center gap-2.5 shrink-0">
            <h1 class="text-[15px] font-semibold text-white tracking-tight shrink-0 [text-wrap:balance]">
              {local.title}
            </h1>
            <Show when={local.badge}>{local.badge}</Show>
          </div>
        </Show>

        <Show when={local.subtitle}>
          <span class="text-[#3f3f46] text-xs shrink-0 hidden sm:inline" aria-hidden="true">
            /
          </span>
          <p class="text-[13px] text-[#8e8e93] truncate hidden sm:block [text-wrap:pretty]">
            {local.subtitle}
          </p>
        </Show>

        {local.children}
      </div>

      {/* Trailing Section: Controls & Actions */}
      <Show when={local.actions}>
        <div class="flex items-center gap-3 shrink-0">{local.actions}</div>
      </Show>
    </header>
  );
}
