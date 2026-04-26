import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Steps, Step } from "../components/Steps/Steps";

describe("Steps", () => {
  it("renders step titles", () => {
    render(
      <Steps current={0}>
        <Step title="First" />
        <Step title="Second" />
      </Steps>,
    );
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("shows checkmark for completed steps", () => {
    render(
      <Steps current={1}>
        <Step title="Done" />
        <Step title="Current" />
      </Steps>,
    );
    expect(screen.getByText("✓")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <Steps current={0}>
        <Step title="Step" description="Details here" />
      </Steps>,
    );
    expect(screen.getByText("Details here")).toBeInTheDocument();
  });
});
