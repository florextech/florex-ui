import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: "left" | "right";
  children: ReactNode;
  className?: string;
}

function Drawer({ open, onClose, side = "right", children, className }: DrawerProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      className={cn(
        "fixed inset-0 m-0 h-full max-h-full w-80 max-w-full border-(--border) bg-(--surface) p-6 text-(--foreground) backdrop:bg-black/60",
        side === "right" ? "ml-auto border-l" : "mr-auto border-r",
        className,
      )}
    >
      {children}
    </dialog>
  );
}

export { Drawer, type DrawerProps };
