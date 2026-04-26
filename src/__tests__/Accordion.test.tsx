import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/Accordion/Accordion";

describe("Accordion", () => {
  it("renders trigger text", () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionTrigger>Question</AccordionTrigger>
          <AccordionContent>Answer</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(screen.getByText("Question")).toBeInTheDocument();
  });

  it("uses details/summary elements", () => {
    const { container } = render(
      <Accordion>
        <AccordionItem>
          <AccordionTrigger>Q</AccordionTrigger>
          <AccordionContent>A</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(container.querySelector("details")).toBeInTheDocument();
    expect(container.querySelector("summary")).toBeInTheDocument();
  });
});
