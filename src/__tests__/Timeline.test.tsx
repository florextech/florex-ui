import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Timeline, TimelineItem } from "../components/Timeline/Timeline";

describe("Timeline", () => {
  it("renders timeline items", () => {
    render(
      <Timeline>
        <TimelineItem title="Created">Initial commit</TimelineItem>
        <TimelineItem title="Updated">Bug fix</TimelineItem>
      </Timeline>,
    );
    expect(screen.getByText("Created")).toBeInTheDocument();
    expect(screen.getByText("Updated")).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(
      <Timeline><TimelineItem title="Event">Details here</TimelineItem></Timeline>,
    );
    expect(screen.getByText("Details here")).toBeInTheDocument();
  });
});
