import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { IconButton } from "../components/IconButton/IconButton";

describe("IconButton", () => {
  it("renders with aria-label", () => {
    render(<IconButton icon={<span>✕</span>} aria-label="Close" />);
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  it("renders icon content", () => {
    render(<IconButton icon={<span data-testid="icon">★</span>} aria-label="Star" />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(<IconButton icon={<span>+</span>} aria-label="Add" variant="primary" />);
    expect(screen.getByRole("button", { name: "Add" })).toHaveClass("text-[#111513]");
  });
});
