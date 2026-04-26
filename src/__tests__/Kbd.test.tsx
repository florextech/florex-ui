import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Kbd } from "../components/Kbd/Kbd";

describe("Kbd", () => {
  it("renders children", () => {
    render(<Kbd>⌘K</Kbd>);
    expect(screen.getByText("⌘K")).toBeInTheDocument();
  });

  it("renders as kbd element", () => {
    render(<Kbd>Esc</Kbd>);
    expect(screen.getByText("Esc").tagName).toBe("KBD");
  });

  it("forwards className", () => {
    render(<Kbd className="custom">A</Kbd>);
    expect(screen.getByText("A")).toHaveClass("custom");
  });
});
