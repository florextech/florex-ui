import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../components/Textarea/Textarea";

const meta: Meta<typeof Textarea> = { title: "Components/Textarea", component: Textarea };
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: { placeholder: "Write a message…", rows: 4 } };
export const Disabled: Story = { args: { placeholder: "Disabled", disabled: true } };
