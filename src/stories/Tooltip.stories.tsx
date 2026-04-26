import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../components/Tooltip/Tooltip";

const meta: Meta<typeof Tooltip> = { title: "Components/Tooltip", component: Tooltip };
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = { args: { content: "This is a tooltip", children: "Hover me" } };
