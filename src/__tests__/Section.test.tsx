import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Section } from "../layouts/Section/Section";

describe("Section", () => {
  it("renders children", () => {
    render(<Section>Content</Section>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders eyebrow", () => {
    render(<Section eyebrow="Features">Content</Section>);
    expect(screen.getByText("Features")).toBeInTheDocument();
  });

  it("renders title", () => {
    render(<Section title="Why Florex?">Content</Section>);
    expect(screen.getByText("Why Florex?")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<Section description="Built for devs">Content</Section>);
    expect(screen.getByText("Built for devs")).toBeInTheDocument();
  });

  it("renders glow element when glow=true", () => {
    const { container } = render(<Section glow>Content</Section>);
    expect(container.querySelector("[aria-hidden='true']")).toBeInTheDocument();
  });
});
