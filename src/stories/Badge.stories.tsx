import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge/Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: { tone: { control: "select", options: ["neutral", "brand", "success", "warning", "danger"] } },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = { args: { children: "Default", tone: "neutral" } };
export const Brand: Story = { args: { children: "New", tone: "brand" } };
export const Success: Story = { args: { children: "Active", tone: "success" } };
export const Warning: Story = { args: { children: "Beta", tone: "warning" } };
export const Danger: Story = { args: { children: "Error", tone: "danger" } };
