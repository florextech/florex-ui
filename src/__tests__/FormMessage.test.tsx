import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FormMessage } from "../components/FormMessage/FormMessage";

describe("FormMessage", () => {
  it("renders message", () => {
    render(<FormMessage message="Required field" />);
    expect(screen.getByText("Required field")).toBeInTheDocument();
  });

  it("renders nothing when no message", () => {
    const { container } = render(<FormMessage />);
    expect(container.innerHTML).toBe("");
  });
});
