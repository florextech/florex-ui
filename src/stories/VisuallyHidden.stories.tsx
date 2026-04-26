import type { Meta, StoryObj } from "@storybook/react";
import { VisuallyHidden } from "../components/VisuallyHidden/VisuallyHidden";

const meta: Meta<typeof VisuallyHidden> = { title: "Components/VisuallyHidden", component: VisuallyHidden };
export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  render: () => (
    <div>
      <span>Visible text</span>
      <VisuallyHidden>Screen reader only</VisuallyHidden>
    </div>
  ),
};
