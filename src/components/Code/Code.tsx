import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface CodeProps {
  children: ReactNode;
  className?: string;
}

function Code({ children, className }: CodeProps) {
  return (
    <code
      className={cn(
        "rounded-md border border-(--border) bg-(--surface-muted) px-1.5 py-0.5 font-mono text-sm text-(--brand-700)",
        className,
      )}
    >
      {children}
    </code>
  );
}

export { Code, type CodeProps };
