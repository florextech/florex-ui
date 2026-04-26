import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { VisuallyHidden } from "../components/VisuallyHidden/VisuallyHidden";

describe("VisuallyHidden", () => {
  it("renders children in the DOM", () => {
    render(<VisuallyHidden>Hidden label</VisuallyHidden>);
    expect(screen.getByText("Hidden label")).toBeInTheDocument();
  });

  it("applies sr-only class", () => {
    render(<VisuallyHidden>Hidden</VisuallyHidden>);
    expect(screen.getByText("Hidden")).toHaveClass("sr-only");
  });
});
