import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Progress } from "../components/Progress/Progress";

describe("Progress", () => {
  it("renders with correct aria value", () => {
    render(<Progress value={60} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "60");
  });

  it("clamps value to 0-100", () => {
    render(<Progress value={150} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "100");
  });

  it("applies size class", () => {
    render(<Progress value={50} size="sm" />);
    expect(screen.getByRole("progressbar")).toHaveClass("h-1.5");
  });
});
