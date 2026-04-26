import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../components/Table/Table";
import { Badge } from "../components/Badge/Badge";

const meta: Meta = { title: "Components/Table" };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow><TableCell>Alice</TableCell><TableCell><Badge tone="success">Active</Badge></TableCell><TableCell>Admin</TableCell></TableRow>
        <TableRow><TableCell>Bob</TableCell><TableCell><Badge tone="warning">Pending</Badge></TableCell><TableCell>Editor</TableCell></TableRow>
        <TableRow><TableCell>Carol</TableCell><TableCell><Badge tone="danger">Banned</Badge></TableCell><TableCell>Viewer</TableCell></TableRow>
      </TableBody>
    </Table>
  ),
};
