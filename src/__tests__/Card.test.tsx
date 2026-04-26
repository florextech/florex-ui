import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "../components/Card/Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies default padding", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toHaveClass("p-6");
  });

  it("applies hover variant", () => {
    render(<Card variant="hover">Hover</Card>);
    expect(screen.getByText("Hover")).toHaveClass("transition-all");
  });

  it("applies muted variant", () => {
    render(<Card variant="muted">Muted</Card>);
    expect(screen.getByText("Muted")).toHaveClass("bg-[rgb(23_28_25/0.7)]");
  });

  it("forwards className", () => {
    render(<Card className="custom">Test</Card>);
    expect(screen.getByText("Test")).toHaveClass("custom");
  });
});
