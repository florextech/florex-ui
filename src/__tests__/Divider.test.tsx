import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Divider } from "../components/Divider/Divider";

describe("Divider", () => {
  it("renders an hr by default", () => {
    const { container } = render(<Divider />);
    expect(container.querySelector("hr")).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<Divider label="or" />);
    expect(screen.getByText("or")).toBeInTheDocument();
  });
});
