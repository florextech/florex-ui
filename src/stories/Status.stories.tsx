import type { Meta, StoryObj } from "@storybook/react";
import { Status } from "../components/Status/Status";

const meta: Meta<typeof Status> = {
  title: "Components/Status",
  component: Status,
  argTypes: { value: { control: "select", options: ["success", "warning", "danger", "neutral"] } },
};
export default meta;
type Story = StoryObj<typeof Status>;

export const Success: Story = { args: { value: "success", children: "Online" } };
export const Danger: Story = { args: { value: "danger", children: "Offline" } };
