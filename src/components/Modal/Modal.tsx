import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

function Modal({ open, onClose, children, className }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className={cn(
        "m-auto max-w-lg rounded-2xl border bg-[var(--surface)] p-6 text-[var(--foreground)] backdrop:bg-black/60 backdrop:backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </dialog>
  );
}

export { Modal, type ModalProps };
