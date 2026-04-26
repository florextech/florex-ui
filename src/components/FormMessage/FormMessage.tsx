import { cn } from "../../utils/cn";

interface FormMessageProps {
  message?: string;
  className?: string;
}

function FormMessage({ message, className }: FormMessageProps) {
  if (!message) return null;
  return <p className={cn("mt-1 text-xs text-(--danger)", className)}>{message}</p>;
}

export { FormMessage, type FormMessageProps };
