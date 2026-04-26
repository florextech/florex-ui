import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioItem } from "../components/Radio/Radio";

const meta: Meta<typeof RadioGroup> = { title: "Components/Radio", component: RadioGroup };
export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup name="plan" value="pro">
      <RadioItem value="free" label="Free" />
      <RadioItem value="pro" label="Pro" />
      <RadioItem value="enterprise" label="Enterprise" />
    </RadioGroup>
  ),
};
