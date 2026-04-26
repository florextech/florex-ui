import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../components/Skeleton/Skeleton";

const meta: Meta<typeof Skeleton> = { title: "Components/Skeleton", component: Skeleton };
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Line: Story = { args: { className: "h-4 w-48" } };
export const Circle: Story = { args: { circle: true } };
