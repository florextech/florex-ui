import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "../layouts/Navbar/Navbar";

describe("Navbar", () => {
  it("renders logo", () => {
    render(<Navbar logo={<span>Florex</span>} />);
    expect(screen.getByText("Florex")).toBeInTheDocument();
  });

  it("renders nav children", () => {
    render(
      <Navbar logo={<span>Logo</span>}>
        <a href="/docs">Docs</a>
      </Navbar>,
    );
    expect(screen.getByText("Docs")).toBeInTheDocument();
  });

  it("renders actions", () => {
    render(<Navbar logo={<span>Logo</span>} actions={<button>Sign In</button>} />);
    expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
  });

  it("is sticky", () => {
    const { container } = render(<Navbar logo={<span>Logo</span>} />);
    expect(container.querySelector("header")).toHaveClass("sticky");
  });
});
