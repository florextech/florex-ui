import type { Meta, StoryObj } from "@storybook/react";
import { Info, CheckCircle, Warning, XCircle } from "@phosphor-icons/react";
import { Alert } from "../components/Alert/Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  argTypes: { variant: { control: "select", options: ["info", "success", "warning", "danger"] } },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const InfoAlert: Story = { args: { children: "This is an informational message.", variant: "info", icon: <Info size={18} weight="bold" /> } };
export const Success: Story = { args: { children: "Operation completed successfully.", variant: "success", icon: <CheckCircle size={18} weight="bold" /> } };
export const WarningAlert: Story = { args: { children: "Please review before continuing.", variant: "warning", icon: <Warning size={18} weight="bold" /> } };
export const Danger: Story = { args: { children: "Something went wrong.", variant: "danger", icon: <XCircle size={18} weight="bold" /> } };
