/** @jsxImportSource solid-js */
import { JSX, mergeProps, splitProps } from 'solid-js';

export interface DataTableProps extends JSX.HTMLAttributes<HTMLDivElement> {
  caption?: string;
  minWidth?: string;
}

export function DataTable(props: DataTableProps) {
  const merged = mergeProps({ minWidth: '600px' }, props);
  const [local, rest] = splitProps(merged, ['caption', 'minWidth', 'class', 'children']);

  return (
    <div
      {...rest}
      class={`relative rounded-2xl border border-[#181818] bg-black specular-rim-subtle overflow-hidden ${
        local.class || ''
      }`}
    >
      <div class="w-full overflow-x-auto overscroll-x-contain">
        <table class="w-full text-start border-collapse" style={{ 'min-width': local.minWidth }}>
          {local.caption && <caption class="sr-only">{local.caption}</caption>}
          {local.children}
        </table>
      </div>
    </div>
  );
}

export function TableHead(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
  const [local, rest] = splitProps(props, ['class', 'children']);
  return (
    <thead {...rest} class={`border-b border-[#181818] text-[11px] font-semibold tracking-wider text-[#52525b] uppercase select-none ${local.class || ''}`}>
      {local.children}
    </thead>
  );
}

export function TableBody(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
  const [local, rest] = splitProps(props, ['class', 'children']);
  return (
    <tbody {...rest} class={`divide-y divide-[#141414] ${local.class || ''}`}>
      {local.children}
    </tbody>
  );
}

export interface TableRowProps extends JSX.HTMLAttributes<HTMLTableRowElement> {
  interactive?: boolean;
}

export function TableRow(props: TableRowProps) {
  const [local, rest] = splitProps(props, ['interactive', 'class', 'children']);
  return (
    <tr
      {...rest}
      class={`transition-colors duration-150 ${
        local.interactive ? 'hover:bg-[#0c0c0e] cursor-pointer focus-ring' : 'hover:bg-[#070707]'
      } ${local.class || ''}`}
    >
      {local.children}
    </tr>
  );
}

export interface TableCellProps extends JSX.TdHTMLAttributes<HTMLTableCellElement> {
  align?: 'start' | 'end' | 'center';
  numeric?: boolean;
}

export function TableCell(props: TableCellProps) {
  const merged = mergeProps({ align: 'start' as const, numeric: false }, props);
  const [local, rest] = splitProps(merged, ['align', 'numeric', 'class', 'children']);

  const alignClass = () => {
    switch (local.align) {
      case 'end':
        return 'text-end';
      case 'center':
        return 'text-center';
      case 'start':
      default:
        return 'text-start';
    }
  };

  return (
    <td
      {...rest}
      class={`py-3.5 px-4 text-xs ${alignClass()} ${
        local.numeric ? 'font-mono tabular-nums' : ''
      } ${local.class || ''}`}
    >
      {local.children}
    </td>
  );
}

export interface TableHeaderCellProps extends JSX.ThHTMLAttributes<HTMLTableCellElement> {
  align?: 'start' | 'end' | 'center';
}

export function TableHeaderCell(props: TableHeaderCellProps) {
  const merged = mergeProps({ align: 'start' as const }, props);
  const [local, rest] = splitProps(merged, ['align', 'class', 'children']);

  const alignClass = () => {
    switch (local.align) {
      case 'end':
        return 'text-end';
      case 'center':
        return 'text-center';
      case 'start':
      default:
        return 'text-start';
    }
  };

  return (
    <th
      {...rest}
      scope="col"
      class={`py-3.5 px-4 font-semibold ${alignClass()} ${local.class || ''}`}
    >
      {local.children}
    </th>
  );
}
