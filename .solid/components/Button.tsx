/** @jsxImportSource solid-js */
import { JSX, mergeProps, splitProps } from 'solid-js';

export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button(props: ButtonProps) {
  const merged = mergeProps(
    {
      variant: 'secondary' as const,
      size: 'md' as const,
      type: 'button' as const,
    },
    props
  );

  const [local, rest] = splitProps(merged, ['variant', 'size', 'fullWidth', 'class', 'children', 'disabled']);

  const variantClasses = () => {
    switch (local.variant) {
      case 'primary':
        return 'bg-white text-black hover:bg-neutral-200 border border-transparent shadow-[0_1px_8px_rgba(255,255,255,0.12)]';
      case 'secondary':
        return 'bg-[#0e0e0e] text-[#d4d4d8] hover:text-white hover:bg-[#181818] border border-[#222222] specular-rim-subtle';
      case 'outline':
        return 'bg-transparent text-[#a1a1aa] hover:text-white hover:bg-[#141414] border border-[#262626]';
      case 'ghost':
        return 'bg-transparent text-[#8e8e93] hover:text-white hover:bg-[#141414] border border-transparent';
      case 'danger':
        return 'bg-[#1f090b] text-[#ef4444] hover:bg-[#2e0e11] border border-[#450a0a] shadow-[0_0_12px_rgba(239,68,68,0.12)]';
      default:
        return 'bg-[#0e0e0e] text-[#d4d4d8] border border-[#222222]';
    }
  };

  const sizeClasses = () => {
    switch (local.size) {
      case 'sm':
        return 'text-xs py-1 px-2.5 rounded-lg gap-1.5';
      case 'lg':
        return 'text-sm py-2 px-4 rounded-xl gap-2.5';
      case 'md':
      default:
        return 'text-[13px] py-1.5 px-3.5 rounded-xl gap-2';
    }
  };

  return (
    <button
      {...rest}
      disabled={local.disabled}
      class={`inline-flex items-center justify-center font-medium transition-colors duration-150 focus-ring press-scale select-none ${
        local.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
      } ${local.fullWidth ? 'w-full' : ''} ${variantClasses()} ${sizeClasses()} ${local.class || ''}`}
    >
      {local.children}
    </button>
  );
}

export interface IconButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export function IconButton(props: IconButtonProps) {
  const merged = mergeProps(
    {
      variant: 'ghost' as const,
      size: 'md' as const,
      type: 'button' as const,
    },
    props
  );

  const [local, rest] = splitProps(merged, ['variant', 'size', 'class', 'children', 'disabled']);

  const variantClasses = () => {
    switch (local.variant) {
      case 'primary':
        return 'bg-white text-black hover:bg-neutral-200 border border-transparent';
      case 'secondary':
        return 'bg-[#0e0e0e] text-[#8e8e93] hover:text-white hover:bg-[#181818] border border-[#222222] specular-rim-subtle';
      case 'outline':
        return 'bg-transparent text-[#8e8e93] hover:text-white hover:bg-[#141414] border border-[#262626]';
      case 'danger':
        return 'bg-[#1f090b] text-[#ef4444] hover:bg-[#2e0e11] border border-[#450a0a]';
      case 'ghost':
      default:
        return 'bg-transparent text-[#8e8e93] hover:text-white hover:bg-[#141414] border border-transparent';
    }
  };

  const sizeClasses = () => {
    switch (local.size) {
      case 'sm':
        return 'w-7 h-7 text-xs rounded-lg';
      case 'lg':
        return 'w-10 h-10 text-base rounded-xl';
      case 'md':
      default:
        return 'w-8 h-8 text-sm rounded-lg';
    }
  };

  return (
    <button
      {...rest}
      disabled={local.disabled}
      class={`inline-flex items-center justify-center transition-colors duration-150 focus-ring press-scale select-none ${
        local.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
      } ${variantClasses()} ${sizeClasses()} ${local.class || ''}`}
    >
      {local.children}
    </button>
  );
}
