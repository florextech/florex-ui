import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Tooltip } from "../components/Tooltip/Tooltip";

describe("Tooltip", () => {
  it("renders children", () => {
    render(<Tooltip content="Help"><button>Hover</button></Tooltip>);
    expect(screen.getByRole("button", { name: "Hover" })).toBeInTheDocument();
  });

  it("sets title attribute with content", () => {
    const { container } = render(<Tooltip content="Help text"><span>Icon</span></Tooltip>);
    expect(container.firstChild).toHaveAttribute("title", "Help text");
  });
});
