import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Switch } from "../components/Switch/Switch";

describe("Switch", () => {
  it("renders a checkbox input", () => {
    render(<Switch id="s" />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders label text", () => {
    render(<Switch id="s" label="Dark mode" />);
    expect(screen.getByText("Dark mode")).toBeInTheDocument();
  });

  it("toggles on click", () => {
    render(<Switch id="s" />);
    const input = screen.getByRole("checkbox");
    expect(input).not.toBeChecked();
    fireEvent.click(input);
    expect(input).toBeChecked();
  });

  it("supports disabled", () => {
    render(<Switch id="s" disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });
});
