/** @jsxImportSource solid-js */
import { JSX, mergeProps, splitProps, Show, createEffect, onCleanup } from 'solid-js';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  variant?: 'modal' | 'drawer';
  size?: 'sm' | 'md' | 'lg';
  children: JSX.Element;
  class?: string;
}

export function Dialog(props: DialogProps) {
  const merged = mergeProps(
    {
      variant: 'modal' as const,
      size: 'md' as const,
    },
    props
  );

  const [local] = splitProps(merged, ['open', 'onClose', 'title', 'subtitle', 'variant', 'size', 'class', 'children']);

  // Handle Escape key
  createEffect(() => {
    if (!local.open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        local.onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    onCleanup(() => window.removeEventListener('keydown', handleKeyDown));
  });

  const sizeClasses = () => {
    switch (local.size) {
      case 'sm':
        return 'max-w-md';
      case 'lg':
        return 'max-w-2xl';
      case 'md':
      default:
        return 'max-w-lg';
    }
  };

  return (
    <Show when={local.open}>
      <dialog
        open
        class={`fixed inset-0 z-50 flex bg-black/80 backdrop-blur-sm m-0 border-0 max-w-none max-h-none w-full h-full p-4 overflow-y-auto overscroll-contain ${
          local.variant === 'drawer' ? 'justify-end p-0' : 'items-center justify-center'
        }`}
        aria-modal="true"
        aria-label={local.title}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            local.onClose();
          }
        }}
      >
        <div
          class={`relative bg-black border shadow-2xl flex flex-col overflow-hidden specular-rim ${
            local.variant === 'drawer'
              ? 'w-full max-w-lg h-full border-s border-[#202020] animate-in slide-in-from-right duration-200'
              : `w-full rounded-2xl border-[#222222] ${sizeClasses()} animate-in fade-in zoom-in-95 duration-150`
          } ${local.class || ''}`}
        >
          {/* Header */}
          <div class="flex items-center justify-between px-6 py-4 border-b border-[#1c1c1c] bg-[#050505] shrink-0">
            <div>
              <h2 class="text-sm font-semibold text-white [text-wrap:balance]">
                {local.title}
              </h2>
              <Show when={local.subtitle}>
                <p class="text-xs text-[#71717a] mt-0.5 [text-wrap:pretty]">
                  {local.subtitle}
                </p>
              </Show>
            </div>

            <button
              type="button"
              aria-label="Close dialog"
              onClick={local.onClose}
              class="p-1.5 rounded-lg text-[#71717a] hover:text-white hover:bg-[#181818] transition-colors focus-ring press-scale cursor-pointer"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body Content */}
          <div class="flex-1 overflow-y-auto p-6 text-xs text-[#d4d4d8]">
            {local.children}
          </div>
        </div>
      </dialog>
    </Show>
  );
}
