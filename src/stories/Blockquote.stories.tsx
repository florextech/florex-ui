import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote } from "../components/Blockquote/Blockquote";

const meta: Meta<typeof Blockquote> = { title: "Components/Blockquote", component: Blockquote };
export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  render: () => <Blockquote>The best way to predict the future is to invent it.</Blockquote>,
};

export const WithCite: Story = {
  render: () => (
    <Blockquote cite="Alan Kay">The best way to predict the future is to invent it.</Blockquote>
  ),
};
