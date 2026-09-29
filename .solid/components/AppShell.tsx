/** @jsxImportSource solid-js */
import { JSX, splitProps, Show } from 'solid-js';

export interface AppShellProps extends JSX.HTMLAttributes<HTMLDivElement> {
  sidebar?: JSX.Element;
  header?: JSX.Element;
}

export function AppShell(props: AppShellProps) {
  const [local, rest] = splitProps(props, ['sidebar', 'header', 'class', 'children']);

  return (
    <div
      {...rest}
      class={`flex h-screen w-screen bg-black text-white overflow-hidden antialiased select-none font-sans ${
        local.class || ''
      }`}
    >
      {/* Sidebar Slot */}
      <Show when={local.sidebar}>{local.sidebar}</Show>

      {/* Main Content Area */}
      <main class="flex-1 flex flex-col h-screen overflow-y-auto bg-black relative">
        {/* Header Slot */}
        <Show when={local.header}>{local.header}</Show>

        {/* Dynamic Body Content */}
        <div class="flex-1 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
          {local.children}
        </div>
      </main>
    </div>
  );
}
