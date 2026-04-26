import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/Accordion/Accordion";

const meta: Meta<typeof Accordion> = { title: "Components/Accordion", component: Accordion };
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem>
        <AccordionTrigger>What is Florex UI?</AccordionTrigger>
        <AccordionContent>A dark-first component library.</AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes, it uses native HTML elements.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
