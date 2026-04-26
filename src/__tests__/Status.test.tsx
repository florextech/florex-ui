import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Status } from "../components/Status/Status";

describe("Status", () => {
  it("renders label text", () => {
    render(<Status value="success">Online</Status>);
    expect(screen.getByText("Online")).toBeInTheDocument();
  });

  it("renders success dot color", () => {
    const { container } = render(<Status value="success">Active</Status>);
    expect(container.querySelector(".bg-\\[var\\(--success\\)\\]")).toBeInTheDocument();
  });

  it("renders danger dot color", () => {
    const { container } = render(<Status value="danger">Error</Status>);
    expect(container.querySelector(".bg-\\[var\\(--danger\\)\\]")).toBeInTheDocument();
  });
});
