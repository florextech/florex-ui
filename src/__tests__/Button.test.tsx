import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "../components/Button/Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("is disabled when loading", () => {
    render(<Button loading>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toBeDisabled();
  });

  it("shows spinner when loading", () => {
    const { container } = render(<Button loading>Save</Button>);
    expect(container.querySelector("svg.animate-spin")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(<Button variant="danger">Delete</Button>);
    expect(screen.getByRole("button", { name: "Delete" })).toHaveClass("bg-(--danger)");
  });

  it("applies size classes", () => {
    render(<Button size="lg">Big</Button>);
    expect(screen.getByRole("button", { name: "Big" })).toHaveClass("h-12");
  });

  it("forwards className", () => {
    render(<Button className="custom">Test</Button>);
    expect(screen.getByRole("button", { name: "Test" })).toHaveClass("custom");
  });
});
