import { type ComponentType, type ReactNode, createElement } from "react";

type IconComponent = ComponentType<{ size?: number; weight?: string; className?: string }>;
type IconProps = Readonly<{ size?: number; className?: string }>;

declare const require: ((id: string) => Record<string, unknown>) | undefined;

let _loaded = false;
let _phosphor: Record<string, IconComponent> | null = null;

function getPhosphor(): Record<string, IconComponent> | null {
  if (_loaded) return _phosphor;
  _loaded = true;
  try {
    _phosphor = typeof require !== "undefined"
      ? (require("@phosphor-icons/react") as Record<string, IconComponent>)
      : null;
  } catch {
    _phosphor = null;
  }
  return _phosphor;
}

function ph(name: string, props: { size?: number; weight?: string; className?: string } = {}): ReactNode {
  const lib = getPhosphor();
  return lib?.[name] ? createElement(lib[name], props) : null;
}

export function ChevronLeft(props: IconProps) {
  return ph("CaretLeft", props) ?? <span className={props.className}>‹</span>;
}

export function ChevronRight(props: IconProps) {
  return ph("CaretRight", props) ?? <span className={props.className}>›</span>;
}

export function ChevronDown(props: IconProps) {
  return ph("CaretDown", props) ?? <span className={props.className}>▾</span>;
}

export function CloseIcon(props: IconProps) {
  return ph("X", { ...props, weight: "bold" }) ?? <span className={props.className}>✕</span>;
}

export function SlashIcon(props: IconProps) {
  return ph("CaretRight", { ...props, size: props.size ?? 12 }) ?? <span className={props.className}>/</span>;
}
