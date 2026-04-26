import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Drawer } from "../components/Drawer/Drawer";

describe("Drawer", () => {
  it("renders children", () => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();

    const { getByText } = render(
      <Drawer open onClose={() => {}}>Drawer content</Drawer>,
    );
    expect(getByText("Drawer content")).toBeInTheDocument();
  });

  it("calls showModal when open", () => {
    const showModal = vi.fn();
    HTMLDialogElement.prototype.showModal = showModal;
    HTMLDialogElement.prototype.close = vi.fn();

    render(<Drawer open onClose={() => {}}>Content</Drawer>);
    expect(showModal).toHaveBeenCalled();
  });

  it("applies left side class", () => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();

    const { container } = render(
      <Drawer open onClose={() => {}} side="left">Content</Drawer>,
    );
    expect(container.querySelector("dialog")).toHaveClass("mr-auto");
  });
});
