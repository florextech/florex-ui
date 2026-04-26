import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../components/Switch/Switch";

const meta: Meta<typeof Switch> = { title: "Components/Switch", component: Switch };
export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = { args: { id: "s1", label: "Enable notifications" } };
export const Checked: Story = { args: { id: "s2", label: "Dark mode", defaultChecked: true } };
export const Disabled: Story = { args: { id: "s3", label: "Disabled option", disabled: true } };
