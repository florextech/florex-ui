import type { Meta, StoryObj } from "@storybook/react";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { Popover } from "../components/Popover/Popover";
import { IconButton } from "../components/IconButton/IconButton";

const meta: Meta<typeof Popover> = { title: "Components/Popover", component: Popover };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Popover trigger={<IconButton icon={<DotsThreeVertical size={18} />} aria-label="More options" variant="ghost" />}>
      <div className="space-y-1 p-1">
        <button className="w-full rounded-lg px-3 py-1.5 text-left text-sm text-[var(--foreground)] hover:bg-[rgb(255_255_255/0.05)]">Edit</button>
        <button className="w-full rounded-lg px-3 py-1.5 text-left text-sm text-[var(--foreground)] hover:bg-[rgb(255_255_255/0.05)]">Duplicate</button>
        <button className="w-full rounded-lg px-3 py-1.5 text-left text-sm text-[var(--danger)] hover:bg-[rgb(239_68_68/0.1)]">Delete</button>
      </div>
    </Popover>
  ),
};
