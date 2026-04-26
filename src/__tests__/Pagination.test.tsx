import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Pagination } from "../components/Pagination/Pagination";

describe("Pagination", () => {
  it("renders page buttons", () => {
    render(<Pagination page={1} totalPages={3} onPageChange={() => {}} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("disables prev on first page", () => {
    render(<Pagination page={1} totalPages={3} onPageChange={() => {}} />);
    expect(screen.getByText("Prev").closest("button")).toBeDisabled();
  });

  it("calls onPageChange on click", () => {
    const onChange = vi.fn();
    render(<Pagination page={1} totalPages={3} onPageChange={onChange} />);
    fireEvent.click(screen.getByText("2"));
    expect(onChange).toHaveBeenCalledWith(2);
  });
});
