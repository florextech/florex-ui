import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface KbdProps {
  children: ReactNode;
  className?: string;
}

function Kbd({ children, className }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--surface-muted)] px-1.5 py-0.5 text-xs font-mono text-[var(--muted)] shadow-[0_1px_0_1px_var(--bg)]",
        className,
      )}
    >
      {children}
    </kbd>
  );
}

export { Kbd, type KbdProps };
