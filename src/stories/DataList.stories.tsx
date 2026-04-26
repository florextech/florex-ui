import type { Meta, StoryObj } from "@storybook/react";
import { DataList, DataListItem } from "../components/DataList/DataList";
import { Badge } from "../components/Badge/Badge";

const meta: Meta<typeof DataList> = { title: "Components/DataList", component: DataList };
export default meta;
type Story = StoryObj<typeof DataList>;

export const Default: Story = {
  render: () => (
    <DataList>
      <DataListItem label="Name">Cristian Florez</DataListItem>
      <DataListItem label="Email">cristian@florex.dev</DataListItem>
      <DataListItem label="Role">Admin</DataListItem>
      <DataListItem label="Status">Active</DataListItem>
    </DataList>
  ),
};
