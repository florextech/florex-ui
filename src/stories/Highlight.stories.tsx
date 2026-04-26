import type { Meta, StoryObj } from "@storybook/react";
import { Highlight } from "../components/Highlight/Highlight";

const meta: Meta<typeof Highlight> = { title: "Components/Highlight", component: Highlight };
export default meta;
type Story = StoryObj<typeof Highlight>;

export const Default: Story = {
  render: () => <Highlight text="The quick brown fox jumps over the lazy dog" query="fox" />,
};

export const MultipleMatches: Story = {
  render: () => <Highlight text="React is great. I love React components in React apps." query="React" />,
};
