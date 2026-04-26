import type { Meta, StoryObj } from "@storybook/react";
import { Robot, FolderOpen, MagnifyingGlass } from "@phosphor-icons/react";
import { EmptyState } from "../components/EmptyState/EmptyState";
import { Button } from "../components/Button/Button";
import { Plus } from "@phosphor-icons/react";

const meta: Meta<typeof EmptyState> = { title: "Components/EmptyState", component: EmptyState };
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    icon: <Robot size={48} weight="duotone" />,
    title: "No bots yet",
    description: "Create your first bot to get started.",
    action: <Button size="sm"><Plus size={14} weight="bold" /> Create Bot</Button>,
  },
};

export const NoResults: Story = {
  args: {
    icon: <MagnifyingGlass size={48} weight="duotone" />,
    title: "No results found",
    description: "Try adjusting your search or filters.",
  },
};

export const EmptyFolder: Story = {
  args: {
    icon: <FolderOpen size={48} weight="duotone" />,
    title: "No documents",
    description: "Upload documents to build your knowledge base.",
  },
};
