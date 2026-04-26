import type { Meta, StoryObj } from "@storybook/react";
import { TreeView, TreeNode } from "../components/TreeView/TreeView";
import { Folder, File } from "@phosphor-icons/react";

const meta: Meta<typeof TreeView> = { title: "Components/TreeView", component: TreeView };
export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
  render: () => (
    <TreeView>
      <TreeNode label="src" defaultOpen>
        <TreeNode label="components">
          <TreeNode label="Button.tsx" />
          <TreeNode label="Input.tsx" />
        </TreeNode>
        <TreeNode label="index.ts" />
      </TreeNode>
    </TreeView>
  ),
};
