import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Select } from "../components/Select/Select";

const options = [
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
];

describe("Select", () => {
  it("renders placeholder when no value", () => {
    render(<Select options={options} placeholder="Pick role" />);
    expect(screen.getByText("Pick role")).toBeInTheDocument();
  });

  it("shows options on click", () => {
    render(<Select options={options} />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(screen.getByText("Editor")).toBeInTheDocument();
  });

  it("calls onChange on option click", () => {
    const onChange = vi.fn();
    render(<Select options={options} onChange={onChange} />);
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Editor"));
    expect(onChange).toHaveBeenCalledWith("editor");
  });

  it("shows selected value", () => {
    render(<Select options={options} value="viewer" />);
    expect(screen.getByText("Viewer")).toBeInTheDocument();
  });
});
