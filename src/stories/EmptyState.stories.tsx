import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "../components/EmptyState/EmptyState";
import { Button } from "../components/Button/Button";

const meta: Meta<typeof EmptyState> = { title: "Components/EmptyState", component: EmptyState };
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "No bots yet",
    description: "Create your first bot to get started.",
    action: <Button size="sm">Create Bot</Button>,
  },
};
