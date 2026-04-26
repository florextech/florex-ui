import type { Meta, StoryObj } from "@storybook/react";
import { Steps, Step } from "../components/Steps/Steps";

const meta: Meta<typeof Steps> = { title: "Components/Steps", component: Steps };
export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  render: () => (
    <Steps current={1}>
      <Step title="Account" description="Create your account" />
      <Step title="Profile" description="Set up your profile" />
      <Step title="Complete" description="All done" />
    </Steps>
  ),
};

export const AllComplete: Story = {
  render: () => (
    <Steps current={3}>
      <Step title="Step 1" />
      <Step title="Step 2" />
      <Step title="Step 3" />
    </Steps>
  ),
};
