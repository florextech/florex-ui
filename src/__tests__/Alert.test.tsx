import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Alert } from "../components/Alert/Alert";

describe("Alert", () => {
  it("renders with role alert", () => {
    render(<Alert>Message</Alert>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("applies danger variant", () => {
    render(<Alert variant="danger">Error</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("text-(--danger)");
  });

  it("renders icon", () => {
    render(<Alert icon={<span data-testid="ico">⚠</span>}>Warn</Alert>);
    expect(screen.getByTestId("ico")).toBeInTheDocument();
  });
});
