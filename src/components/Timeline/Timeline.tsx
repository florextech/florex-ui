import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

function Timeline({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("space-y-0", className)}>{children}</div>;
}

interface TimelineItemProps {
  title: string;
  children?: ReactNode;
  icon?: ReactNode;
}

function TimelineItem({ title, children, icon }: TimelineItemProps) {
  return (
    <div className="relative flex gap-4 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--brand-600)] bg-[var(--surface)] text-[var(--brand-600)]">
          {icon ?? <div className="h-2 w-2 rounded-full bg-[var(--brand-600)]" />}
        </div>
        <div className="w-px flex-1 bg-[var(--brand-600)]/30" />
      </div>
      <div className="pt-0.5">
        <p className="text-sm font-medium text-[var(--foreground)]">{title}</p>
        {children && <div className="mt-1 text-sm text-[var(--muted)]">{children}</div>}
      </div>
    </div>
  );
}

export { Timeline, TimelineItem };
