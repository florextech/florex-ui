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
export const Warning: Story = { args: { value: "warning", children: "Degraded" } };
export const Danger: Story = { args: { value: "danger", children: "Offline" } };
export const Neutral: Story = { args: { value: "neutral", children: "Unknown" } };
export const Group: StoryObj = {
  render: () => (
    <div className="space-y-2">
      <Status value="success">API — Operational</Status>
      <Status value="warning">Database — Slow queries</Status>
      <Status value="danger">CDN — Down</Status>
      <Status value="neutral">Monitoring — Pending</Status>
    </div>
  ),
};
