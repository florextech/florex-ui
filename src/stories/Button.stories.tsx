import type { Meta, StoryObj } from "@storybook/react";
import { Plus, FloppyDisk, TrashSimple, PencilSimple, Rocket } from "@phosphor-icons/react";
import { Button } from "../components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost", "danger"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: <><FloppyDisk size={16} weight="bold" /> Save changes</>, variant: "primary" } };
export const Secondary: Story = { args: { children: "Cancel", variant: "secondary" } };
export const Ghost: Story = { args: { children: <><PencilSimple size={14} /> Edit</>, variant: "ghost", size: "sm" } };
export const Danger: Story = { args: { children: <><TrashSimple size={16} weight="bold" /> Delete</>, variant: "danger" } };
export const Loading: Story = { args: { children: "Saving…", variant: "primary", loading: true } };
export const Large: Story = { args: { children: <><Rocket size={18} weight="bold" /> Get Started</>, variant: "primary", size: "lg" } };
export const WithIcon: Story = { args: { children: <><Plus size={16} weight="bold" /> Create Bot</>, variant: "primary" } };
