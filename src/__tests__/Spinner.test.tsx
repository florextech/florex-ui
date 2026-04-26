import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner } from "../components/Spinner/Spinner";

describe("Spinner", () => {
  it("renders an svg", () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("has animate-spin class", () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector("svg")).toHaveClass("animate-spin");
  });

  it("forwards className", () => {
    const { container } = render(<Spinner className="size-8" />);
    expect(container.querySelector("svg")).toHaveClass("size-8");
  });
});
