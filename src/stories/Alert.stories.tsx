import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../components/Alert/Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  argTypes: { variant: { control: "select", options: ["info", "success", "warning", "danger"] } },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = { args: { children: "This is an informational message.", variant: "info" } };
export const Success: Story = { args: { children: "Operation completed successfully.", variant: "success" } };
export const Warning: Story = { args: { children: "Please review before continuing.", variant: "warning" } };
export const Danger: Story = { args: { children: "Something went wrong.", variant: "danger" } };
