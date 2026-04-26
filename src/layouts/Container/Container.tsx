import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10", className)}
      {...props}
    />
  ),
);
Container.displayName = "Container";

export { Container, type ContainerProps };
