import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../components/Tag/Tag";

const meta: Meta<typeof Tag> = { title: "Components/Tag", component: Tag };
export default meta;
type Story = StoryObj<typeof Tag>;

export const Subtle: Story = { args: { children: "React", variant: "subtle" } };
export const Solid: Story = { args: { children: "TypeScript", variant: "solid" } };
export const Closable: Story = { args: { children: "Removable", onClose: () => alert("closed") } };
export const Group: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="subtle">React</Tag>
      <Tag variant="subtle">TypeScript</Tag>
      <Tag variant="subtle">Tailwind</Tag>
      <Tag variant="solid">New</Tag>
      <Tag onClose={() => {}}>Removable</Tag>
    </div>
  ),
};
