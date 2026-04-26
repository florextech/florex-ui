import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar } from "../components/Avatar/Avatar";

describe("Avatar", () => {
  it("renders image when src is provided", () => {
    render(<Avatar src="/photo.jpg" name="Ana" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "/photo.jpg");
  });

  it("shows initials fallback when no src", () => {
    render(<Avatar name="Cristian Florez" />);
    expect(screen.getByText("CR")).toBeInTheDocument();
  });

  it("applies size class", () => {
    render(<Avatar name="AB" size="lg" />);
    expect(screen.getByText("AB")).toHaveClass("size-14");
  });
});
