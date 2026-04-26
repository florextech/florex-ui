import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stack } from "../components/Stack/Stack";

describe("Stack", () => {
  it("renders as column by default", () => {
    const { container } = render(<Stack><span>A</span></Stack>);
    expect(container.firstChild).toHaveClass("flex-col");
  });

  it("renders as row", () => {
    const { container } = render(<Stack direction="row"><span>A</span></Stack>);
    expect(container.firstChild).toHaveClass("flex-row");
  });

  it("applies gap class", () => {
    const { container } = render(<Stack gap="lg"><span>A</span></Stack>);
    expect(container.firstChild).toHaveClass("gap-6");
  });
});
