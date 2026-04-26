import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../components/Tag/Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  argTypes: { variant: { control: "select", options: ["subtle", "solid"] } },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Subtle: Story = { args: { children: "React", variant: "subtle" } };
export const Closable: Story = { args: { children: "Removable", variant: "subtle", onClose: () => {} } };
