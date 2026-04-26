import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Tag } from "../components/Tag/Tag";

describe("Tag", () => {
  it("renders children", () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("shows close button when onClose provided", () => {
    render(<Tag onClose={() => {}}>Vue</Tag>);
    expect(screen.getByRole("button", { name: "Remove" })).toBeInTheDocument();
  });

  it("calls onClose on click", () => {
    const onClose = vi.fn();
    render(<Tag onClose={onClose}>Svelte</Tag>);
    fireEvent.click(screen.getByRole("button", { name: "Remove" }));
    expect(onClose).toHaveBeenCalled();
  });
});
