import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4 py-16 text-center", className)}>
      {icon && <div className="text-[var(--muted)]">{icon}</div>}
      <h3 className="text-lg font-semibold text-[var(--foreground)]">{title}</h3>
      {description && <p className="max-w-sm text-sm text-[var(--muted)]">{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}

export { EmptyState, type EmptyStateProps };
