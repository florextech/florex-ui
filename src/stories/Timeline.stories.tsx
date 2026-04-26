import type { Meta, StoryObj } from "@storybook/react";
import { Timeline, TimelineItem } from "../components/Timeline/Timeline";
import { Rocket, Bug, CheckCircle } from "@phosphor-icons/react";

const meta: Meta<typeof Timeline> = { title: "Components/Timeline", component: Timeline };
export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: () => (
    <Timeline>
      <TimelineItem title="Project created" icon={<Rocket size={14} />}>
        Initial repository setup and scaffolding.
      </TimelineItem>
      <TimelineItem title="Bug reported" icon={<Bug size={14} />}>
        Issue #42 opened by a contributor.
      </TimelineItem>
      <TimelineItem title="v1.0 released" icon={<CheckCircle size={14} />}>
        First stable release published to npm.
      </TimelineItem>
    </Timeline>
  ),
};
