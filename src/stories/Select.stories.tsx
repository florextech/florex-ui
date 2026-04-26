import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components/Select/Select";
import { Label } from "../components/Label/Label";

const meta: Meta<typeof Select> = { title: "Components/Select", component: Select };
export default meta;

const roles = [
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
];

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="max-w-xs space-y-1">
        <Label>Role</Label>
        <Select options={roles} value={value} onChange={setValue} placeholder="Select a role…" />
      </div>
    );
  },
};

export const WithValue: StoryObj = {
  render: () => (
    <div className="max-w-xs space-y-1">
      <Label>Status</Label>
      <Select
        options={[
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
          { value: "suspended", label: "Suspended" },
        ]}
        value="active"
      />
    </div>
  ),
};
