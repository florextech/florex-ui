import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../components/Divider/Divider";

const meta: Meta<typeof Divider> = { title: "Components/Divider", component: Divider };
export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};
export const WithLabel: Story = { args: { label: "or continue with" } };
