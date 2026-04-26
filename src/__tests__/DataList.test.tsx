import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DataList, DataListItem } from "../components/DataList/DataList";

describe("DataList", () => {
  it("renders label and value", () => {
    render(<DataList><DataListItem label="Name">John</DataListItem></DataList>);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();
  });

  it("uses dl/dt/dd elements", () => {
    const { container } = render(
      <DataList><DataListItem label="Key">Value</DataListItem></DataList>,
    );
    expect(container.querySelector("dl")).toBeInTheDocument();
    expect(container.querySelector("dt")).toHaveTextContent("Key");
    expect(container.querySelector("dd")).toHaveTextContent("Value");
  });
});
