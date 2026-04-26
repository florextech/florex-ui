import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../components/Divider/Divider";
import { Text } from "../components/Text/Text";
import { Alert } from "../components/Alert/Alert";
import { Switch } from "../components/Switch/Switch";

export default { title: "Components/Misc" } as Meta;

export const DividerDefault: StoryObj = {
  name: "Divider",
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-[var(--foreground)]">Above</p>
      <Divider />
      <p className="text-sm text-[var(--foreground)]">Below</p>
      <Divider label="or continue with" />
      <p className="text-sm text-[var(--foreground)]">More content</p>
    </div>
  ),
};

export const TextVariants: StoryObj = {
  name: "Text",
  render: () => (
    <div className="space-y-2">
      <Text size="2xl" weight="bold">Heading text</Text>
      <Text variant="muted">Muted paragraph text</Text>
      <Text variant="brand" weight="semibold">Brand accent text</Text>
      <Text variant="danger" size="sm">Error message</Text>
    </div>
  ),
};

export const AlertVariants: StoryObj = {
  name: "Alert",
  render: () => (
    <div className="space-y-3">
      <Alert variant="info">This is an informational message.</Alert>
      <Alert variant="success">Operation completed successfully.</Alert>
      <Alert variant="warning">Please review before continuing.</Alert>
      <Alert variant="danger">Something went wrong.</Alert>
    </div>
  ),
};

export const SwitchDefault: StoryObj = {
  name: "Switch",
  render: () => (
    <div className="space-y-3">
      <Switch id="s1" label="Enable notifications" />
      <Switch id="s2" label="Dark mode" defaultChecked />
      <Switch id="s3" label="Disabled" disabled />
    </div>
  ),
};
