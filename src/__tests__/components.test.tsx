import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import { Badge } from "../components/Badge/Badge";
import { Input } from "../components/Input/Input";
import { Textarea } from "../components/Textarea/Textarea";
import { EmptyState } from "../components/EmptyState/EmptyState";
import { Spinner } from "../components/Spinner/Spinner";
import { Container } from "../layouts/Container/Container";

afterEach(cleanup);

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("is disabled when loading", () => {
    render(<Button loading>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toBeDisabled();
  });

  it("applies danger variant", () => {
    render(<Button variant="danger">Delete</Button>);
    expect(screen.getByRole("button", { name: "Delete" })).toHaveClass("bg-[var(--danger)]");
  });
});

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies hover variant", () => {
    render(<Card variant="hover">Hover</Card>);
    expect(screen.getByText("Hover")).toHaveClass("transition-all");
  });
});

describe("Badge", () => {
  it("renders with brand tone", () => {
    render(<Badge tone="brand">New</Badge>);
    expect(screen.getByText("New")).toHaveClass("text-[var(--brand-700)]");
  });
});

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="Email" />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("supports disabled", () => {
    render(<Input disabled data-testid="inp" />);
    expect(screen.getByTestId("inp")).toBeDisabled();
  });
});

describe("Textarea", () => {
  it("renders with placeholder", () => {
    render(<Textarea placeholder="Message" />);
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
  });
});

describe("EmptyState", () => {
  it("renders title and description", () => {
    render(<EmptyState title="No items" description="Nothing here" />);
    expect(screen.getByText("No items")).toBeInTheDocument();
    expect(screen.getByText("Nothing here")).toBeInTheDocument();
  });
});

describe("Spinner", () => {
  it("renders svg", () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});

describe("Container", () => {
  it("renders children", () => {
    render(<Container>Wrapped</Container>);
    expect(screen.getByText("Wrapped")).toBeInTheDocument();
  });
});
