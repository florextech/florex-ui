import type { Meta, StoryObj } from "@storybook/react";
import { Stat } from "../components/Stat/Stat";

const meta: Meta<typeof Stat> = { title: "Components/Stat", component: Stat };
export default meta;
type Story = StoryObj<typeof Stat>;

export const Default: Story = {
  render: () => <Stat label="Total Revenue" value="$45,231" helpText="+20.1% from last month" trend="up" />,
};

export const AllTrends: Story = {
  render: () => (
    <div className="flex gap-8">
      <Stat label="Users" value="2,350" trend="up" helpText="+180 this week" />
      <Stat label="Bounce Rate" value="24.5%" trend="down" helpText="-3.2% from last month" />
      <Stat label="Avg. Session" value="2m 45s" trend="neutral" />
    </div>
  ),
};
