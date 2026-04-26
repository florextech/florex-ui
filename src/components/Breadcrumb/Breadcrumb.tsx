import { type ReactNode } from "react";
import { cn } from "../../utils/cn";

function Breadcrumb({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex items-center gap-1.5">{children}</ol>
    </nav>
  );
}

function BreadcrumbItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center gap-1.5 text-[var(--muted)] [&:last-child]:text-[var(--foreground)]">
      {children}
    </li>
  );
}

function BreadcrumbSeparator() {
  return <span className="text-[var(--muted)]">/</span>;
}

function BreadcrumbLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={cn("hover:text-[var(--brand-700)] transition-colors", className)}>
      {children}
    </a>
  );
}

export { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink };
