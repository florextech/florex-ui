import { type ComponentType, type ReactNode, createElement, lazy, Suspense } from "react";

let phosphor: Record<string, ComponentType<{ size?: number; weight?: string; className?: string }>> | null = null;

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  phosphor = require("@phosphor-icons/react");
} catch {
  phosphor = null;
}

function ph(name: string, props: { size?: number; weight?: string; className?: string } = {}): ReactNode {
  if (phosphor && phosphor[name]) {
    return createElement(phosphor[name], props);
  }
  return null;
}

export function ChevronLeft(props: { size?: number; className?: string }) {
  return ph("CaretLeft", props) ?? <span className={props.className}>‹</span>;
}

export function ChevronRight(props: { size?: number; className?: string }) {
  return ph("CaretRight", props) ?? <span className={props.className}>›</span>;
}

export function ChevronDown(props: { size?: number; className?: string }) {
  return ph("CaretDown", props) ?? <span className={props.className}>▾</span>;
}

export function CloseIcon(props: { size?: number; className?: string }) {
  return ph("X", { ...props, weight: "bold" }) ?? <span className={props.className}>✕</span>;
}

export function SlashIcon(props: { size?: number; className?: string }) {
  return ph("CaretRight", { ...props, size: props.size ?? 12 }) ?? <span className={props.className}>/</span>;
}
