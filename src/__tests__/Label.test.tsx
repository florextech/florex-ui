import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "../components/Label/Label";

describe("Label", () => {
  it("renders text", () => {
    render(<Label>Email</Label>);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders as label element", () => {
    const { container } = render(<Label>Name</Label>);
    expect(container.querySelector("label")).toBeInTheDocument();
  });

  it("forwards htmlFor", () => {
    const { container } = render(<Label htmlFor="email">Email</Label>);
    expect(container.querySelector("label")).toHaveAttribute("for", "email");
  });
});
