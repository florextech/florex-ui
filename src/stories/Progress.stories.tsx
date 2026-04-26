import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "../components/Progress/Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  argTypes: { size: { control: "select", options: ["sm", "md"] } },
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = { args: { value: 60, size: "md" } };
export const Small: Story = { args: { value: 30, size: "sm" } };
