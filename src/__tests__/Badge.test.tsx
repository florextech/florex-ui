import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "../components/Badge/Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>Tag</Badge>);
    expect(screen.getByText("Tag")).toBeInTheDocument();
  });

  it("applies brand tone", () => {
    render(<Badge tone="brand">New</Badge>);
    expect(screen.getByText("New")).toHaveClass("text-(--brand-700)");
  });

  it("applies danger tone", () => {
    render(<Badge tone="danger">Error</Badge>);
    expect(screen.getByText("Error")).toHaveClass("text-(--danger)");
  });

  it("applies warning tone", () => {
    render(<Badge tone="warning">Beta</Badge>);
    expect(screen.getByText("Beta")).toHaveClass("text-(--warning)");
  });

  it("defaults to neutral", () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText("Default")).toHaveClass("text-(--muted)");
  });
});
