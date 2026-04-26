import { cn } from "../../utils/cn";

interface DividerProps {
  className?: string;
  label?: string;
}

function Divider({ className, label }: DividerProps) {
  if (label) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <div className="h-px flex-1 bg-[var(--border)]" />
        <span className="text-xs text-[var(--muted)]">{label}</span>
        <div className="h-px flex-1 bg-[var(--border)]" />
      </div>
    );
  }
  return <hr className={cn("border-t border-[var(--border)]", className)} />;
}

export { Divider, type DividerProps };
