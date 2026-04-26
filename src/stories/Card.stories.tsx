import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card/Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    variant: { control: "select", options: ["default", "muted", "hover"] },
    padding: { control: "select", options: ["none", "sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = { args: { children: "Default card content" } };
export const Hover: Story = { args: { children: "Hover me for glow effect", variant: "hover" } };
export const Muted: Story = { args: { children: "Muted surface card", variant: "muted" } };
