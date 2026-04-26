import type { Meta, StoryObj } from "@storybook/react";
import { Menu, MenuTrigger, MenuContent, MenuItem } from "../components/Menu/Menu";
import { PencilSimple, Trash, Copy } from "@phosphor-icons/react";

const meta: Meta<typeof Menu> = { title: "Components/Menu", component: Menu };
export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger>Actions</MenuTrigger>
      <MenuContent>
        <MenuItem icon={<PencilSimple size={16} />} onClick={() => alert("Edit")}>Edit</MenuItem>
        <MenuItem icon={<Copy size={16} />} onClick={() => alert("Copy")}>Duplicate</MenuItem>
        <MenuItem icon={<Trash size={16} />} onClick={() => alert("Delete")}>Delete</MenuItem>
      </MenuContent>
    </Menu>
  ),
};
