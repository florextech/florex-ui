import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../components/Spinner/Spinner";

const meta: Meta<typeof Spinner> = { title: "Components/Spinner", component: Spinner };
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = { args: { className: "size-6 text-(--brand-600)" } };
export const Small: Story = { args: { className: "size-4 text-(--muted)" } };
