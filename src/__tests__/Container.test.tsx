import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "../layouts/Container/Container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container>Wrapped</Container>);
    expect(screen.getByText("Wrapped")).toBeInTheDocument();
  });

  it("has max-width class", () => {
    render(<Container>Content</Container>);
    expect(screen.getByText("Content")).toHaveClass("max-w-[1280px]");
  });

  it("forwards className", () => {
    render(<Container className="py-8">Content</Container>);
    expect(screen.getByText("Content")).toHaveClass("py-8");
  });
});
