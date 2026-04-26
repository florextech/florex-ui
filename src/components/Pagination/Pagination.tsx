import { cn } from "../../utils/cn";
import { ChevronLeft, ChevronRight } from "../../utils/icons";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

function Pagination({ page, totalPages, onPageChange, className }: Readonly<PaginationProps>) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav aria-label="Pagination" className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm text-(--muted) hover:text-(--foreground) disabled:opacity-50"
      >
        <ChevronLeft size={14} /> Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          className={cn(
            "size-8 rounded-lg text-sm transition-colors",
            p === page
              ? "bg-(--brand-600) text-[#111513] font-medium"
              : "text-(--muted) hover:text-(--foreground) hover:bg-[rgb(255_255_255/0.05)]",
          )}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm text-(--muted) hover:text-(--foreground) disabled:opacity-50"
      >
        Next <ChevronRight size={14} />
      </button>
    </nav>
  );
}

export { Pagination, type PaginationProps };
