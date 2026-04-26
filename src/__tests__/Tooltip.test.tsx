import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Tooltip } from "../components/Tooltip/Tooltip";

describe("Tooltip", () => {
  it("renders children", () => {
    render(<Tooltip content="Help text">Hover me</Tooltip>);
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("renders tooltip content with role", () => {
    render(<Tooltip content="Help text">Hover me</Tooltip>);
    expect(screen.getByRole("tooltip")).toHaveTextContent("Help text");
  });

  it("tooltip is hidden by default (opacity-0)", () => {
    render(<Tooltip content="Tip">Target</Tooltip>);
    expect(screen.getByRole("tooltip")).toHaveClass("opacity-0");
  });

  it("supports side prop", () => {
    render(<Tooltip content="Tip" side="bottom">Target</Tooltip>);
    expect(screen.getByRole("tooltip")).toHaveClass("top-full");
  });
});
