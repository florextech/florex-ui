import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Status } from "../components/Status/Status";

describe("Status", () => {
  it("renders label text", () => {
    render(<Status value="success">Online</Status>);
    expect(screen.getByText("Online")).toBeInTheDocument();
  });

  it("renders success dot", () => {
    const { container } = render(<Status value="success">Active</Status>);
    const dot = container.querySelector("span > span:first-child");
    expect(dot).toBeInTheDocument();
    expect(dot).toHaveClass("rounded-full");
  });

  it("renders danger dot", () => {
    const { container } = render(<Status value="danger">Error</Status>);
    const dot = container.querySelector("span > span:first-child");
    expect(dot).toBeInTheDocument();
  });
});
