/** @jsxImportSource solid-js */
import { JSX, mergeProps, splitProps, Show } from 'solid-js';

export interface SidebarProps extends JSX.HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  brandTitle?: string;
  brandIcon?: JSX.Element;
  footer?: JSX.Element;
}

export function Sidebar(props: SidebarProps) {
  const merged = mergeProps({ collapsed: false }, props);
  const [local, rest] = splitProps(merged, [
    'collapsed',
    'onToggleCollapse',
    'brandTitle',
    'brandIcon',
    'footer',
    'class',
    'children',
  ]);

  return (
    <aside
      {...rest}
      class={`relative flex flex-col justify-between h-screen bg-black border-e border-[#181818] select-none transition-[width] duration-300 z-30 ${
        local.collapsed ? 'w-16' : 'w-64'
      } ${local.class || ''}`}
    >
      {/* Brand & Top Bar */}
      <div>
        <div
          class={`flex items-center h-14 shrink-0 border-b border-[#181818] ${
            local.collapsed ? 'justify-center' : 'justify-between px-4'
          }`}
        >
          <div class="flex items-center gap-2.5 overflow-hidden">
            <Show when={local.brandIcon}>
              <div class="shrink-0">{local.brandIcon}</div>
            </Show>
            <Show when={!local.collapsed && local.brandTitle}>
              <span class="font-semibold text-[15px] tracking-tight text-white truncate">
                {local.brandTitle}
              </span>
            </Show>
          </div>

          <Show when={local.onToggleCollapse}>
            <button
              type="button"
              onClick={local.onToggleCollapse}
              aria-label={local.collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              title={local.collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              class="p-1.5 rounded-lg text-[#71717a] hover:text-white hover:bg-[#141414] transition-colors focus-ring press-scale cursor-pointer"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d={local.collapsed ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'}
                />
              </svg>
            </button>
          </Show>
        </div>

        {/* Navigation Content */}
        <nav
          aria-label="Sidebar Navigation"
          class={`space-y-1 ${local.collapsed ? 'px-2 py-3' : 'p-3'}`}
        >
          {local.children}
        </nav>
      </div>

      {/* Footer Area */}
      <Show when={local.footer}>
        <div class="p-3 border-t border-[#181818]">{local.footer}</div>
      </Show>
    </aside>
  );
}

export interface SidebarItemProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  collapsed?: boolean;
  icon?: JSX.Element;
  label: string;
  badge?: string | number;
}

export function SidebarItem(props: SidebarItemProps) {
  const merged = mergeProps({ active: false, collapsed: false, type: 'button' as const }, props);
  const [local, rest] = splitProps(merged, ['active', 'collapsed', 'icon', 'label', 'badge', 'class']);

  return (
    <button
      {...rest}
      aria-current={local.active ? 'page' : undefined}
      aria-label={local.label}
      title={local.collapsed ? local.label : undefined}
      class={`transition-colors duration-150 focus-ring press-scale cursor-pointer select-none ${
        local.collapsed
          ? 'w-10 h-10 mx-auto flex items-center justify-center rounded-xl'
          : 'w-full flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-medium'
      } ${
        local.active
          ? 'bg-[#141414] text-white border border-[#222222]/90 shadow-[0_1px_3px_rgba(0,0,0,0.5)] specular-rim-subtle'
          : 'text-[#8e8e93] hover:text-white hover:bg-[#0c0c0c] border border-transparent'
      } ${local.class || ''}`}
    >
      <div class="flex items-center gap-3 truncate">
        <Show when={local.icon}>
          <div class={`shrink-0 ${local.active ? 'text-white' : 'text-[#71717a]'}`}>
            {local.icon}
          </div>
        </Show>
        <Show when={!local.collapsed}>
          <span class="truncate">{local.label}</span>
        </Show>
      </div>

      <Show when={!local.collapsed && local.badge !== undefined}>
        <span class="px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-[#1c1c1c] text-[#a1a1aa] border border-[#2a2a2a] tabular-nums">
          {local.badge}
        </span>
      </Show>
    </button>
  );
}
