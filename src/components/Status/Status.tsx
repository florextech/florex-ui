import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

const dotColors = {
  success: "bg-[var(--success)]",
  warning: "bg-[var(--warning)]",
  danger: "bg-[var(--danger)]",
  neutral: "bg-[var(--muted)]",
};

interface StatusProps {
  value: keyof typeof dotColors;
  children: ReactNode;
  className?: string;
}

function Status({ value, children, className }: StatusProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-sm text-[var(--foreground)]", className)}>
      <span className={cn("size-2 rounded-full", dotColors[value])} />
      {children}
    </span>
  );
}

export { Status, type StatusProps };
