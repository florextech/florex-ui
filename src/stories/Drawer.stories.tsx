import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "../components/Drawer/Drawer";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  argTypes: { side: { control: "select", options: ["left", "right"] } },
};
export default meta;
type Story = StoryObj<typeof Drawer>;

export const Right: Story = { args: { open: true, onClose: () => {}, side: "right", children: "Drawer content" } };
export const Left: Story = { args: { open: true, onClose: () => {}, side: "left", children: "Drawer content" } };
