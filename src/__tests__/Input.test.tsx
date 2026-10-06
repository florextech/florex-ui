import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "../components/Input/Input";

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="Email" />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("supports disabled", () => {
    render(<Input disabled data-testid="inp" />);
    expect(screen.getByTestId("inp")).toBeDisabled();
  });

  it("forwards className", () => {
    render(<Input data-testid="inp" className="w-64" />);
    expect(screen.getByTestId("inp")).toHaveClass("w-64");
  });

  it("accepts type prop", () => {
    render(<Input type="password" data-testid="inp" />);
    expect(screen.getByTestId("inp")).toHaveAttribute("type", "password");
  });

  it("styles native date and time controls", () => {
    render(<Input type="datetime-local" data-testid="schedule" />);
    expect(screen.getByTestId("schedule")).toHaveAttribute("type", "datetime-local");
    expect(screen.getByTestId("schedule")).toHaveClass("tabular-nums");
  });
});
