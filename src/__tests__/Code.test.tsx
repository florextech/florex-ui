import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Code } from "../components/Code/Code";

describe("Code", () => {
  it("renders children", () => {
    render(<Code>npm install</Code>);
    expect(screen.getByText("npm install")).toBeInTheDocument();
  });

  it("renders as code element", () => {
    render(<Code>const x = 1</Code>);
    expect(screen.getByText("const x = 1").tagName).toBe("CODE");
  });

  it("applies monospace font", () => {
    render(<Code>fn()</Code>);
    expect(screen.getByText("fn()")).toHaveClass("font-mono");
  });
});
