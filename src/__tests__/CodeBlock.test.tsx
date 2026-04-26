import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CodeBlock } from "../components/CodeBlock/CodeBlock";

describe("CodeBlock", () => {
  it("renders code content", () => {
    render(<CodeBlock>{"const x = 1;"}</CodeBlock>);
    expect(screen.getByText("const x = 1;")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<CodeBlock title="example.ts">{"code"}</CodeBlock>);
    expect(screen.getByText("example.ts")).toBeInTheDocument();
  });

  it("copies text on button click", () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    render(<CodeBlock>{"hello"}</CodeBlock>);
    fireEvent.click(screen.getByText("Copy"));
    expect(writeText).toHaveBeenCalledWith("hello");
  });
});
