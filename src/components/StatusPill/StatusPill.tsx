import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const statusPillVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-elevated,rgba(23,28,25,0.7))] px-2.5 py-1 text-xs font-medium",
  {
    variants: {
      status: {
        online: "text-[var(--success,#bdf146)]",
        offline: "text-[var(--muted,#8b9a8e)]",
        busy: "text-[var(--warning,#f59e0b)]",
        error: "text-[var(--danger,#ef4444)]",
        info: "text-[var(--info,#60a5fa)]",
      },
    },
    defaultVariants: { status: "online" },
  },
);

const dotColors: Record<string, string> = {
  online: "bg-[var(--success,#bdf146)]",
  offline: "bg-[var(--muted,#8b9a8e)]",
  busy: "bg-[var(--warning,#f59e0b)]",
  error: "bg-[var(--danger,#ef4444)]",
  info: "bg-[var(--info,#60a5fa)]",
};

type StatusPillProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof statusPillVariants> & {
    label?: string;
    pulse?: boolean;
  };

const StatusPill = forwardRef<HTMLSpanElement, StatusPillProps>(
  ({ className, status = "online", label, pulse, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(statusPillVariants({ status }), className)}
      {...props}
    >
      <span
        className={cn("size-2 rounded-full", dotColors[status ?? "online"], pulse && "animate-pulse")}
        aria-hidden
      />
      {label ?? status}
    </span>
  ),
);
StatusPill.displayName = "StatusPill";

export { StatusPill, statusPillVariants, type StatusPillProps };
