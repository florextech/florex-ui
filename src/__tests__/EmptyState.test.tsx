import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EmptyState } from "../components/EmptyState/EmptyState";

describe("EmptyState", () => {
  it("renders title", () => {
    render(<EmptyState title="No items" />);
    expect(screen.getByText("No items")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<EmptyState title="Empty" description="Nothing here" />);
    expect(screen.getByText("Nothing here")).toBeInTheDocument();
  });

  it("renders action slot", () => {
    render(<EmptyState title="Empty" action={<button>Add</button>} />);
    expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
  });

  it("renders icon slot", () => {
    render(<EmptyState title="Empty" icon={<span data-testid="icon">📦</span>} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
