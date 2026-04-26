import { cn } from "../../utils/cn";

interface DividerProps {
  className?: string;
  label?: string;
}

function Divider({ className, label }: DividerProps) {
  if (label) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <div className="h-px flex-1 bg-(--border)" />
        <span className="text-xs text-(--muted)">{label}</span>
        <div className="h-px flex-1 bg-(--border)" />
      </div>
    );
  }
  return <hr className={cn("border-t border-(--border)", className)} />;
}

export { Divider, type DividerProps };
