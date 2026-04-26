import { type ReactNode, Children } from "react";
import { cn } from "../../utils/cn";

interface StepsProps {
  children: ReactNode;
  current: number;
  className?: string;
}

function Steps({ children, current, className }: StepsProps) {
  const items = Children.toArray(children);
  return (
    <div className={cn("flex items-start gap-0", className)}>
      {items.map((child, i) => (
        <div key={i} className="flex flex-1 items-start">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-medium",
                i < current && "border-[var(--brand-600)] bg-[var(--brand-600)] text-[var(--bg)]",
                i === current && "border-[var(--brand-600)] text-[var(--brand-700)]",
                i > current && "border-[var(--border)] text-[var(--muted)]",
              )}
            >
              {i < current ? "✓" : i + 1}
            </div>
            <div className="mt-2 text-center">{child}</div>
          </div>
          {i < items.length - 1 && (
            <div className={cn("mt-4 h-px flex-1", i < current ? "bg-[var(--brand-600)]" : "bg-[var(--border)]")} />
          )}
        </div>
      ))}
    </div>
  );
}

function Step({ title, description }: { title: string; description?: string }) {
  return (
    <div className="px-1">
      <p className="text-xs font-medium text-[var(--foreground)]">{title}</p>
      {description && <p className="text-xs text-[var(--muted)]">{description}</p>}
    </div>
  );
}

export { Steps, Step, type StepsProps };
