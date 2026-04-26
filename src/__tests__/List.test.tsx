import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { List, ListItem } from "../components/List/List";

describe("List", () => {
  it("renders an unordered list by default", () => {
    const { container } = render(<List><ListItem>Item</ListItem></List>);
    expect(container.querySelector("ul")).toBeInTheDocument();
  });

  it("renders an ordered list when ordered is true", () => {
    const { container } = render(<List ordered><ListItem>Item</ListItem></List>);
    expect(container.querySelector("ol")).toBeInTheDocument();
  });

  it("renders list items", () => {
    render(<List><ListItem>First</ListItem><ListItem>Second</ListItem></List>);
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });
});
