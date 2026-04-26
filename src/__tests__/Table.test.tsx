import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../components/Table/Table";

describe("Table", () => {
  it("renders a table with data", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow><TableHead>Name</TableHead></TableRow>
        </TableHeader>
        <TableBody>
          <TableRow><TableCell>Alice</TableCell></TableRow>
        </TableBody>
      </Table>,
    );
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
  });

  it("renders proper table structure", () => {
    const { container } = render(
      <Table><TableBody><TableRow><TableCell>Cell</TableCell></TableRow></TableBody></Table>,
    );
    expect(container.querySelector("table")).toBeInTheDocument();
    expect(container.querySelector("td")).toBeInTheDocument();
  });
});
