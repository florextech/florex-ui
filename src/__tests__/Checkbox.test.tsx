import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Checkbox } from "../components/Checkbox/Checkbox";

describe("Checkbox", () => {
  it("renders as checkbox input", () => {
    render(<Checkbox label="Accept" />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders label text", () => {
    render(<Checkbox label="Terms" />);
    expect(screen.getByText("Terms")).toBeInTheDocument();
  });

  it("forwards checked prop", () => {
    render(<Checkbox label="On" defaultChecked />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });
});
