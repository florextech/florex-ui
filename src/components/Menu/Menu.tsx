import { useState, useRef, useEffect, type ReactNode, createContext, useContext } from "react";
import { cn } from "../../utils/cn";

const MenuCtx = createContext<{ open: boolean; setOpen: (v: boolean) => void }>({ open: false, setOpen: () => {} });

function Menu({ children, className }: { children: ReactNode; className?: string }) {
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
    <MenuCtx.Provider value={{ open, setOpen }}>
      <div ref={ref} className={cn("relative inline-block", className)}>{children}</div>
    </MenuCtx.Provider>
  );
}

function MenuTrigger({ children, className }: { children: ReactNode; className?: string }) {
  const { open, setOpen } = useContext(MenuCtx);
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className={cn("inline-flex items-center gap-1 rounded-xl border bg-(--surface) px-3 py-2 text-sm text-(--foreground) transition hover:border-[rgb(189_241_70/0.28)]", className)}
    >
      {children}
    </button>
  );
}

function MenuContent({ children, className }: { children: ReactNode; className?: string }) {
  const { open } = useContext(MenuCtx);
  if (!open) return null;
  return (
    <div className={cn("absolute left-0 z-50 mt-1 min-w-[10rem] overflow-hidden rounded-xl border bg-(--surface) py-1 shadow-lg", className)}>
      {children}
    </div>
  );
}

interface MenuItemProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
}

function MenuItem({ children, onClick, icon, className }: MenuItemProps) {
  const { setOpen } = useContext(MenuCtx);
  return (
    <button
      type="button"
      onClick={() => { onClick?.(); setOpen(false); }}
      className={cn("flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-(--foreground) transition-colors hover:bg-[rgb(255_255_255/0.05)]", className)}
    >
      {icon && <span className="shrink-0 text-(--muted)">{icon}</span>}
      {children}
    </button>
  );
}

export { Menu, MenuTrigger, MenuContent, MenuItem };
