import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "../components/List/List";

const meta: Meta<typeof List> = { title: "Components/List", component: List };
export default meta;
type Story = StoryObj<typeof List>;

export const Unordered: Story = {
  render: () => (
    <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
  ),
};

export const Ordered: Story = {
  render: () => (
    <List ordered>
      <ListItem>Install dependencies</ListItem>
      <ListItem>Configure project</ListItem>
      <ListItem>Start development</ListItem>
    </List>
  ),
};
