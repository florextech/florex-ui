import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "../components/Code/Code";

const meta: Meta<typeof Code> = { title: "Components/Code", component: Code };
export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = { args: { children: "npm install @florex/ui" } };
