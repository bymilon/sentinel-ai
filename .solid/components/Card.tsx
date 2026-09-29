/** @jsxImportSource solid-js */
import { JSX, mergeProps, splitProps } from 'solid-js';

export interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {
  variant?: 'base' | 'raised' | 'interactive';
  specular?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card(props: CardProps) {
  const merged = mergeProps(
    {
      variant: 'base' as const,
      specular: true,
      padding: 'md' as const,
    },
    props
  );

  const [local, rest] = splitProps(merged, ['variant', 'specular', 'padding', 'class', 'children']);

  const bgClasses = () => {
    switch (local.variant) {
      case 'raised':
        return 'bg-[#0a0a0a] border-[#1c1c1c]';
      case 'interactive':
        return 'bg-[#050505] hover:bg-[#0a0a0a] border-[#181818] hover:border-[#262626] transition-colors duration-150 cursor-pointer';
      case 'base':
      default:
        return 'bg-[#050505] border-[#181818]';
    }
  };

  const paddingClasses = () => {
    switch (local.padding) {
      case 'none':
        return 'p-0';
      case 'sm':
        return 'p-4';
      case 'lg':
        return 'p-6';
      case 'md':
      default:
        return 'p-5';
    }
  };

  return (
    <div
      {...rest}
      class={`rounded-2xl border ${bgClasses()} ${
        local.specular ? 'specular-rim-subtle' : ''
      } ${paddingClasses()} ${local.class || ''}`}
    >
      {local.children}
    </div>
  );
}

export interface CardHeaderProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export function CardHeader(props: CardHeaderProps) {
  const [local, rest] = splitProps(props, ['class', 'children']);
  return (
    <div {...rest} class={`flex items-center justify-between gap-3 pb-3 mb-4 border-b border-[#161616] ${local.class || ''}`}>
      {local.children}
    </div>
  );
}

export interface CardTitleProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
}

export function CardTitle(props: CardTitleProps) {
  const [local, rest] = splitProps(props, ['level', 'class', 'children']);
  return (
    <h3 {...rest} class={`text-sm font-semibold text-white tracking-tight [text-wrap:balance] ${local.class || ''}`}>
      {local.children}
    </h3>
  );
}

export interface CardDescriptionProps extends JSX.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription(props: CardDescriptionProps) {
  const [local, rest] = splitProps(props, ['class', 'children']);
  return (
    <p {...rest} class={`text-xs text-[#8e8e93] [text-wrap:pretty] ${local.class || ''}`}>
      {local.children}
    </p>
  );
}

export interface CardFooterProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export function CardFooter(props: CardFooterProps) {
  const [local, rest] = splitProps(props, ['class', 'children']);
  return (
    <div {...rest} class={`pt-4 mt-4 border-t border-[#161616] flex items-center justify-between text-xs text-[#71717a] ${local.class || ''}`}>
      {local.children}
    </div>
  );
}
