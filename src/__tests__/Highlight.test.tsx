import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Highlight } from "../components/Highlight/Highlight";

describe("Highlight", () => {
  it("highlights matching text", () => {
    const { container } = render(<Highlight text="Hello World" query="World" />);
    expect(container.querySelector("mark")).toHaveTextContent("World");
  });

  it("renders plain text when query is empty", () => {
    const { container } = render(<Highlight text="Hello" query="" />);
    expect(container.querySelector("mark")).toBeNull();
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("is case-insensitive", () => {
    const { container } = render(<Highlight text="Hello world" query="WORLD" />);
    expect(container.querySelector("mark")).toHaveTextContent("world");
  });
});
