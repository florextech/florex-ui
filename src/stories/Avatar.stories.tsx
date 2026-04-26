import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../components/Avatar/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] } },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = { args: { src: "https://i.pravatar.cc/80", name: "Ana", size: "md" } };
export const Initials: Story = { args: { name: "Cristian Florez", size: "lg" } };
