import { type ComponentType, type ReactNode, createElement } from "react";

let phosphor: Record<string, ComponentType<{ size?: number; weight?: string; className?: string }>> | null = null;

try {
  // @ts-expect-error -- optional peer dependency, may not be installed
  phosphor = await import("@phosphor-icons/react");
} catch {
  phosphor = null;
}

function ph(name: string, props: { size?: number; weight?: string; className?: string } = {}): ReactNode {
  if (phosphor && phosphor[name]) {
    return createElement(phosphor[name], props);
  }
  return null;
}

export function ChevronLeft(props: Readonly<{ size?: number; className?: string }>) {
  return ph("CaretLeft", props) ?? <span className={props.className}>‹</span>;
}

export function ChevronRight(props: Readonly<{ size?: number; className?: string }>) {
  return ph("CaretRight", props) ?? <span className={props.className}>›</span>;
}

export function ChevronDown(props: Readonly<{ size?: number; className?: string }>) {
  return ph("CaretDown", props) ?? <span className={props.className}>▾</span>;
}

export function CloseIcon(props: Readonly<{ size?: number; className?: string }>) {
  return ph("X", { ...props, weight: "bold" }) ?? <span className={props.className}>✕</span>;
}

export function SlashIcon(props: Readonly<{ size?: number; className?: string }>) {
  return ph("CaretRight", { ...props, size: props.size ?? 12 }) ?? <span className={props.className}>/</span>;
}
