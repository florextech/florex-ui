import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "../layouts/Section/Section";
import { Container } from "../layouts/Container/Container";
import { Navbar } from "../layouts/Navbar/Navbar";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";

export default { title: "Layouts" } as Meta;

export const ContainerStory: StoryObj = {
  name: "Container",
  render: () => (
    <Container className="border border-dashed border-[var(--brand-600)] py-8">
      <p>Content inside Container (max-w-1280px)</p>
    </Container>
  ),
};

export const SectionStory: StoryObj = {
  name: "Section",
  render: () => (
    <Section eyebrow="Features" title="Why Florex?" description="Built for developers." glow>
      <div className="grid grid-cols-2 gap-4">
        <Card variant="hover">Feature 1</Card>
        <Card variant="hover">Feature 2</Card>
      </div>
    </Section>
  ),
};

export const NavbarStory: StoryObj = {
  name: "Navbar",
  render: () => (
    <Navbar logo={<span className="text-lg font-bold">Florex</span>} actions={<Button size="sm">Sign In</Button>}>
      <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Docs</a>
      <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Blog</a>
    </Navbar>
  ),
};
