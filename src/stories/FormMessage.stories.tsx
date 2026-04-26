import type { Meta, StoryObj } from "@storybook/react";
import { FormMessage } from "../components/FormMessage/FormMessage";
import { Label } from "../components/Label/Label";
import { Input } from "../components/Input/Input";

const meta: Meta<typeof FormMessage> = { title: "Components/FormMessage", component: FormMessage };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="max-w-xs space-y-1">
      <Label htmlFor="name">Name</Label>
      <Input id="name" className="border-(--danger)" />
      <FormMessage message="This field is required" />
    </div>
  ),
};
