import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "../components/Kbd/Kbd";

const meta: Meta<typeof Kbd> = { title: "Components/Kbd", component: Kbd };
export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = { args: { children: "⌘K" } };
export const Escape: Story = { args: { children: "Esc" } };
