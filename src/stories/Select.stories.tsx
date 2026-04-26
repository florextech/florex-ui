import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components/Select/Select";
import { Label } from "../components/Label/Label";

const meta: Meta<typeof Select> = { title: "Components/Select", component: Select };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="max-w-xs space-y-1">
      <Label htmlFor="role">Role</Label>
      <Select id="role">
        <option>Admin</option>
        <option>Editor</option>
        <option>Viewer</option>
      </Select>
    </div>
  ),
};
