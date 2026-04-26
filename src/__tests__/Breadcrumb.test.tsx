import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "../components/Breadcrumb/Breadcrumb";

describe("Breadcrumb", () => {
  it("renders navigation landmark", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeInTheDocument();
  });

  it("renders links with auto separator", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbItem><span>Settings</span></BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });
});
