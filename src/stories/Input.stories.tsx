import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input/Input";

const meta: Meta<typeof Input> = { title: "Components/Input", component: Input };
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: "Enter your email" } };
export const Disabled: Story = { args: { placeholder: "Disabled", disabled: true } };
