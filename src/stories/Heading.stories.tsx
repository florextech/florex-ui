import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "../components/Heading/Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    as: { control: "select", options: ["h1", "h2", "h3", "h4", "h5", "h6"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
  },
};
export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = { args: { as: "h1", size: "2xl", children: "Welcome to Florex" } };
export const Small: Story = { args: { as: "h3", size: "sm", children: "Section title" } };
