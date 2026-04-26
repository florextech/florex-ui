import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Text } from "../components/Text/Text";

describe("Text", () => {
  it("renders as p by default", () => {
    const { container } = render(<Text>Hello</Text>);
    expect(container.querySelector("p")).toBeInTheDocument();
  });

  it("renders as span", () => {
    const { container } = render(<Text as="span">Inline</Text>);
    expect(container.querySelector("span")).toBeInTheDocument();
  });

  it("applies muted variant", () => {
    render(<Text variant="muted">Muted</Text>);
    expect(screen.getByText("Muted")).toHaveClass("text-[var(--muted)]");
  });

  it("applies size and weight", () => {
    render(<Text size="lg" weight="bold">Big</Text>);
    const el = screen.getByText("Big");
    expect(el).toHaveClass("text-lg");
    expect(el).toHaveClass("font-bold");
  });
});
