import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

const dotStyles = {
  success: "bg-[var(--success)] shadow-[0_0_6px_var(--success)]",
  warning: "bg-[var(--warning)] shadow-[0_0_6px_var(--warning)]",
  danger: "bg-[var(--danger)] shadow-[0_0_6px_var(--danger)]",
  neutral: "bg-[var(--muted)]",
};

interface StatusProps {
  value: keyof typeof dotStyles;
  children: ReactNode;
  className?: string;
}

function Status({ value, children, className }: StatusProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-sm text-[var(--foreground)]", className)}>
      <span className={cn("size-2.5 shrink-0 rounded-full", dotStyles[value])} />
      {children}
    </span>
  );
}

export { Status, type StatusProps };
