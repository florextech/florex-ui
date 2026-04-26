import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stat } from "../components/Stat/Stat";

describe("Stat", () => {
  it("renders label and value", () => {
    render(<Stat label="Revenue" value="$12,345" />);
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("$12,345")).toBeInTheDocument();
  });

  it("renders trend arrow", () => {
    render(<Stat label="Users" value={100} trend="up" />);
    expect(screen.getByText("↑")).toBeInTheDocument();
  });

  it("renders helpText", () => {
    render(<Stat label="Sales" value={42} helpText="Last 30 days" />);
    expect(screen.getByText("Last 30 days")).toBeInTheDocument();
  });
});
