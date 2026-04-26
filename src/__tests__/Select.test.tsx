import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Select } from "../components/Select/Select";

describe("Select", () => {
  it("renders a select element", () => {
    render(<Select data-testid="sel"><option>A</option></Select>);
    expect(screen.getByTestId("sel").tagName).toBe("SELECT");
  });

  it("supports disabled", () => {
    render(<Select data-testid="sel" disabled><option>A</option></Select>);
    expect(screen.getByTestId("sel")).toBeDisabled();
  });
});
