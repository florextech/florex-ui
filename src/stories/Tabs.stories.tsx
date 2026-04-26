import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs/Tabs";

const meta: Meta = { title: "Components/Tabs" };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Tabs defaultValue="general">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="general"><p className="text-sm text-(--muted)">General settings here.</p></TabsContent>
      <TabsContent value="security"><p className="text-sm text-(--muted)">Security settings here.</p></TabsContent>
      <TabsContent value="billing"><p className="text-sm text-(--muted)">Billing settings here.</p></TabsContent>
    </Tabs>
  ),
};
