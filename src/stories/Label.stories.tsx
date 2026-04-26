import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../components/Label/Label";
import { Input } from "../components/Input/Input";

const meta: Meta<typeof Label> = { title: "Components/Label", component: Label };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="space-y-1">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" placeholder="you@example.com" />
    </div>
  ),
};
