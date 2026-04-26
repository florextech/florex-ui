import type { Meta, StoryObj } from "@storybook/react";
import { Gear, Info, TrashSimple } from "@phosphor-icons/react";
import { Tooltip } from "../components/Tooltip/Tooltip";
import { IconButton } from "../components/IconButton/IconButton";
import { Button } from "../components/Button/Button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: { side: { control: "select", options: ["top", "bottom", "left", "right"] } },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  render: () => (
    <div className="flex justify-center pt-12">
      <Tooltip content="Settings" side="top">
        <IconButton icon={<Gear size={18} />} aria-label="Settings" variant="secondary" />
      </Tooltip>
    </div>
  ),
};

export const Bottom: Story = {
  render: () => (
    <div className="flex justify-center pb-12">
      <Tooltip content="More info about this feature" side="bottom">
        <span className="inline-flex cursor-help items-center gap-1 text-sm text-[var(--muted)]">
          <Info size={14} /> What is this?
        </span>
      </Tooltip>
    </div>
  ),
};

export const AllSides: StoryObj = {
  render: () => (
    <div className="flex items-center justify-center gap-8 py-16">
      <Tooltip content="Left" side="left"><Button variant="secondary" size="sm">Left</Button></Tooltip>
      <Tooltip content="Top" side="top"><Button variant="secondary" size="sm">Top</Button></Tooltip>
      <Tooltip content="Bottom" side="bottom"><Button variant="secondary" size="sm">Bottom</Button></Tooltip>
      <Tooltip content="Right" side="right"><Button variant="secondary" size="sm">Right</Button></Tooltip>
    </div>
  ),
};

export const OnIconButton: StoryObj = {
  render: () => (
    <div className="flex gap-2 pt-12">
      <Tooltip content="Edit"><IconButton icon={<Gear size={16} />} aria-label="Edit" variant="ghost" /></Tooltip>
      <Tooltip content="Delete"><IconButton icon={<TrashSimple size={16} />} aria-label="Delete" variant="ghost" className="text-[var(--danger)]" /></Tooltip>
    </div>
  ),
};
