import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Blockquote } from "../components/Blockquote/Blockquote";

describe("Blockquote", () => {
  it("renders children", () => {
    render(<Blockquote>A wise quote</Blockquote>);
    expect(screen.getByText("A wise quote")).toBeInTheDocument();
  });

  it("renders cite when provided", () => {
    render(<Blockquote cite="Author">Quote</Blockquote>);
    expect(screen.getByText("— Author")).toBeInTheDocument();
  });

  it("does not render cite when omitted", () => {
    const { container } = render(<Blockquote>Quote</Blockquote>);
    expect(container.querySelector("figcaption")).toBeNull();
  });
});
