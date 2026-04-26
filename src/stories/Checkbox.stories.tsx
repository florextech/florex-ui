import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/Checkbox/Checkbox";

const meta: Meta<typeof Checkbox> = { title: "Components/Checkbox", component: Checkbox };
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { label: "Accept terms" } };
export const Checked: Story = { args: { label: "Subscribed", defaultChecked: true } };
