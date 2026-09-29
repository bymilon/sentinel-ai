/** @jsxImportSource solid-js */
import { JSX, mergeProps, splitProps, Show } from 'solid-js';

export interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  leading?: JSX.Element;
  trailing?: JSX.Element;
  error?: string;
}

export function Input(props: InputProps) {
  const merged = mergeProps(
    {
      type: 'text' as const,
    },
    props
  );

  const [local, rest] = splitProps(merged, ['leading', 'trailing', 'error', 'class']);

  return (
    <div class="relative flex flex-col gap-1 w-full">
      <div class="relative flex items-center w-full">
        <Show when={local.leading}>
          <div class="absolute start-2.5 flex items-center justify-center pointer-events-none text-[#71717a]">
            {local.leading}
          </div>
        </Show>

        <input
          {...rest}
          class={`w-full text-xs text-white placeholder-[#71717a] bg-[#0f0f0f] border border-[#2a2a2e] rounded-xl focus:border-[#52525b] focus:outline-none transition-colors duration-150 focus-ring ${
            local.leading ? 'ps-8' : 'ps-3'
          } ${local.trailing ? 'pe-8' : 'pe-3'} py-2 ${
            local.error ? 'border-[#ef4444] focus:border-[#ef4444]' : ''
          } ${local.class || ''}`}
        />

        <Show when={local.trailing}>
          <div class="absolute end-2.5 flex items-center justify-center text-[#71717a]">
            {local.trailing}
          </div>
        </Show>
      </div>

      <Show when={local.error}>
        <span class="text-[11px] text-[#ef4444] ps-1">{local.error}</span>
      </Show>
    </div>
  );
}

export interface SearchInputProps extends Omit<InputProps, 'leading' | 'type'> {
  onClear?: () => void;
}

export function SearchInput(props: SearchInputProps) {
  const [local, rest] = splitProps(props, ['onClear', 'class', 'value']);

  return (
    <Input
      {...rest}
      value={local.value}
      type="search"
      leading={
        <svg
          class="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      }
      trailing={
        <Show when={local.value && local.onClear}>
          <button
            type="button"
            aria-label="Clear search"
            onClick={local.onClear}
            class="p-0.5 text-[#71717a] hover:text-white rounded-full cursor-pointer focus-ring"
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </Show>
      }
      class={`rounded-full ${local.class || ''}`}
    />
  );
}
