import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Popover } from "../components/Popover/Popover";

describe("Popover", () => {
  it("does not show content initially", () => {
    render(<Popover trigger="Open">Content</Popover>);
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("shows content on trigger click", () => {
    render(<Popover trigger="Open">Content</Popover>);
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("hides content on second click", () => {
    render(<Popover trigger="Open">Content</Popover>);
    fireEvent.click(screen.getByText("Open"));
    fireEvent.click(screen.getByText("Open"));
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });
});
