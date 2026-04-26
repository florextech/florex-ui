import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "../components/Stack/Stack";

const meta: Meta<typeof Stack> = {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    direction: { control: "select", options: ["row", "column"] },
    gap: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Stack>;

export const Column: Story = {
  args: { direction: "column", gap: "md" },
  render: (args) => (
    <Stack {...args}>
      <div className="rounded bg-[var(--surface-muted)] p-4">Item 1</div>
      <div className="rounded bg-[var(--surface-muted)] p-4">Item 2</div>
      <div className="rounded bg-[var(--surface-muted)] p-4">Item 3</div>
    </Stack>
  ),
};

export const Row: Story = {
  args: { direction: "row", gap: "sm" },
  render: (args) => (
    <Stack {...args}>
      <div className="rounded bg-[var(--surface-muted)] p-4">A</div>
      <div className="rounded bg-[var(--surface-muted)] p-4">B</div>
    </Stack>
  ),
};
