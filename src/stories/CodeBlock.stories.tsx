import type { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "../components/CodeBlock/CodeBlock";

const meta: Meta<typeof CodeBlock> = { title: "Components/CodeBlock", component: CodeBlock };
export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const Default: Story = {
  render: () => <CodeBlock>{`const greeting = "Hello, world!";\nconsole.log(greeting);`}</CodeBlock>,
};

export const WithTitle: Story = {
  render: () => (
    <CodeBlock title="app.ts">{`import express from "express";\nconst app = express();\napp.listen(3000);`}</CodeBlock>
  ),
};
