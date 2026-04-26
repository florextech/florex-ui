import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../components/IconButton/IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Ghost: Story = { args: { icon: "✕", "aria-label": "Close", variant: "ghost" } };
export const Primary: Story = { args: { icon: "+", "aria-label": "Add", variant: "primary" } };
