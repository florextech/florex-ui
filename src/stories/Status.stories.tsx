import type { Meta, StoryObj } from "@storybook/react";
import { Status } from "../components/Status/Status";
import { Card } from "../components/Card/Card";

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

export const StatusPage: StoryObj = {
  render: () => (
    <Card padding="none" className="max-w-sm divide-y divide-[var(--border)]">
      <div className="flex items-center justify-between px-5 py-3">
        <span className="text-sm text-[var(--muted)]">API</span>
        <Status value="success">Operational</Status>
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <span className="text-sm text-[var(--muted)]">Database</span>
        <Status value="warning">Slow queries</Status>
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <span className="text-sm text-[var(--muted)]">CDN</span>
        <Status value="danger">Down</Status>
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <span className="text-sm text-[var(--muted)]">Monitoring</span>
        <Status value="neutral">Pending</Status>
      </div>
    </Card>
  ),
};
