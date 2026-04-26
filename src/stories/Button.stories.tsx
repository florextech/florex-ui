import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost", "danger"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: "Save changes", variant: "primary" } };
export const Secondary: Story = { args: { children: "Cancel", variant: "secondary" } };
export const Ghost: Story = { args: { children: "Edit", variant: "ghost", size: "sm" } };
export const Danger: Story = { args: { children: "Delete", variant: "danger" } };
export const Loading: Story = { args: { children: "Saving…", variant: "primary", loading: true } };
export const Large: Story = { args: { children: "Get Started", variant: "primary", size: "lg" } };
