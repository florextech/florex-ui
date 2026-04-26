import { useState, useRef, useEffect, type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

function Popover({ trigger, children, className }: PopoverProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative inline-block">
      <button type="button" onClick={() => setOpen(!open)}>{trigger}</button>
      {open && (
        <div
          className={cn(
            "absolute left-0 top-full z-50 mt-2 rounded-xl border border-(--border) bg-(--surface) p-4 text-sm text-(--foreground) shadow-lg",
            className,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export { Popover, type PopoverProps };
