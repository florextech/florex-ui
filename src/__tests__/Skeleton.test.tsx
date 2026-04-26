import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Skeleton } from "../components/Skeleton/Skeleton";

describe("Skeleton", () => {
  it("renders with pulse animation", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass("animate-pulse");
  });

  it("renders circle variant", () => {
    const { container } = render(<Skeleton circle />);
    expect(container.firstChild).toHaveClass("rounded-full");
  });

  it("forwards className", () => {
    const { container } = render(<Skeleton className="h-8 w-32" />);
    expect(container.firstChild).toHaveClass("h-8");
  });
});
