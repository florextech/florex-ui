import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Textarea } from "../components/Textarea/Textarea";

describe("Textarea", () => {
  it("renders with placeholder", () => {
    render(<Textarea placeholder="Message" />);
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
  });

  it("supports disabled", () => {
    render(<Textarea disabled data-testid="ta" />);
    expect(screen.getByTestId("ta")).toBeDisabled();
  });

  it("forwards rows prop", () => {
    render(<Textarea rows={6} data-testid="ta" />);
    expect(screen.getByTestId("ta")).toHaveAttribute("rows", "6");
  });
});
