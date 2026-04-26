import { cn } from "../../utils/cn";

const sizes = { sm: "size-8 text-xs", md: "size-10 text-sm", lg: "size-14 text-lg" };

interface AvatarProps {
  src?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function Avatar({ src, name, size = "md", className }: AvatarProps) {
  const initials = name?.slice(0, 2).toUpperCase() ?? "?";
  return src ? (
    <img
      src={src}
      alt={name ?? ""}
      className={cn("rounded-full object-cover", sizes[size], className)}
    />
  ) : (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[rgb(189_241_70/0.15)] font-medium text-(--brand-700)",
        sizes[size],
        className,
      )}
      aria-label={name}
    >
      {initials}
    </span>
  );
}

export { Avatar, type AvatarProps };
