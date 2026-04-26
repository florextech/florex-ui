import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "../components/Modal/Modal";

describe("Modal", () => {
  it("renders children when open", () => {
    // jsdom doesn't support dialog.showModal(), mock it
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();

    const { getByText } = render(
      <Modal open onClose={() => {}}>
        <p>Modal content</p>
      </Modal>,
    );
    expect(getByText("Modal content")).toBeInTheDocument();
  });

  it("calls showModal when open=true", () => {
    const showModal = vi.fn();
    HTMLDialogElement.prototype.showModal = showModal;
    HTMLDialogElement.prototype.close = vi.fn();

    render(
      <Modal open onClose={() => {}}>
        Content
      </Modal>,
    );
    expect(showModal).toHaveBeenCalled();
  });
});
