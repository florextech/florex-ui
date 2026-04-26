import type { Meta, StoryObj } from "@storybook/react";
import { Gear, TrashSimple, Plus, MagnifyingGlass, X } from "@phosphor-icons/react";
import { IconButton } from "../components/IconButton/IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = { args: { icon: <Plus size={18} weight="bold" />, "aria-label": "Add", variant: "primary" } };
export const Secondary: Story = { args: { icon: <Gear size={18} />, "aria-label": "Settings", variant: "secondary" } };
export const Ghost: Story = { args: { icon: <MagnifyingGlass size={18} />, "aria-label": "Search", variant: "ghost" } };
export const Danger: Story = { args: { icon: <TrashSimple size={18} weight="bold" />, "aria-label": "Delete", variant: "ghost", className: "text-[var(--danger)] hover:bg-[rgb(239_68_68/0.1)]" } };
export const Close: Story = { args: { icon: <X size={16} weight="bold" />, "aria-label": "Close", variant: "ghost", size: "sm" } };
