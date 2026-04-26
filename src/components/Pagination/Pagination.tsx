import { cn } from "../../utils/cn";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

function Pagination({ page, totalPages, onPageChange, className }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav aria-label="Pagination" className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="rounded-lg px-2 py-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)] disabled:opacity-50"
      >
        ← Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          className={cn(
            "size-8 rounded-lg text-sm transition-colors",
            p === page
              ? "bg-[var(--brand-600)] text-[#111513] font-medium"
              : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[rgb(255_255_255/0.05)]",
          )}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="rounded-lg px-2 py-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)] disabled:opacity-50"
      >
        Next →
      </button>
    </nav>
  );
}

export { Pagination, type PaginationProps };
