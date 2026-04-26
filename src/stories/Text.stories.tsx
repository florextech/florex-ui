import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../components/Text/Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    variant: { control: "select", options: ["default", "muted", "brand", "danger"] },
    size: { control: "select", options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl"] },
    weight: { control: "select", options: ["normal", "medium", "semibold", "bold"] },
  },
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = { args: { children: "Default text" } };
export const Muted: Story = { args: { children: "Muted paragraph", variant: "muted" } };
export const Brand: Story = { args: { children: "Brand accent", variant: "brand", weight: "semibold" } };
export const Heading: Story = { args: { children: "Large heading", size: "2xl", weight: "bold" } };
export const Danger: Story = { args: { children: "Error message", variant: "danger", size: "sm" } };
