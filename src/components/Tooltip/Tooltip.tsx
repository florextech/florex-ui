import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface TooltipProps {
  content: string;
  children: ReactNode;
  className?: string;
}

function Tooltip({ content, children, className }: TooltipProps) {
  return (
    <span title={content} className={cn("inline-flex", className)}>
      {children}
    </span>
  );
}

export { Tooltip, type TooltipProps };
