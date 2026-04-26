import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  logo: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
}

function Navbar({ logo, children, actions, className, ...props }: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-[rgb(11_13_12/0.85)] backdrop-blur-md",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-6">
          {logo}
          {children && <nav className="hidden items-center gap-4 md:flex">{children}</nav>}
        </div>
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </header>
  );
}

export { Navbar, type NavbarProps };
