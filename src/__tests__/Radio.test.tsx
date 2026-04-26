import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RadioGroup, RadioItem } from "../components/Radio/Radio";

describe("Radio", () => {
  it("renders radio inputs", () => {
    render(
      <RadioGroup name="color" value="red">
        <RadioItem value="red" label="Red" />
        <RadioItem value="blue" label="Blue" />
      </RadioGroup>,
    );
    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });

  it("checks the selected value", () => {
    render(
      <RadioGroup name="color" value="blue">
        <RadioItem value="red" label="Red" />
        <RadioItem value="blue" label="Blue" />
      </RadioGroup>,
    );
    expect(screen.getByLabelText("Blue")).toBeChecked();
    expect(screen.getByLabelText("Red")).not.toBeChecked();
  });

  it("calls onChange on click", () => {
    const onChange = vi.fn();
    render(
      <RadioGroup name="color" value="red" onChange={onChange}>
        <RadioItem value="red" label="Red" />
        <RadioItem value="blue" label="Blue" />
      </RadioGroup>,
    );
    fireEvent.click(screen.getByLabelText("Blue"));
    expect(onChange).toHaveBeenCalledWith("blue");
  });
});
