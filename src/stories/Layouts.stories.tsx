import type { Meta, StoryObj } from "@storybook/react";
import { SignIn, Rocket } from "@phosphor-icons/react";
import { Navbar } from "../layouts/Navbar/Navbar";
import { Button } from "../components/Button/Button";

export default { title: "Layouts/Navbar" } as Meta;

export const Default: StoryObj = {
  render: () => (
    <Navbar
      logo={<span className="flex items-center gap-2 text-lg font-bold"><Rocket size={22} weight="fill" className="text-[var(--brand-600)]" /> Florex</span>}
      actions={<Button size="sm"><SignIn size={16} /> Sign In</Button>}
    >
      <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Docs</a>
      <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Blog</a>
      <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Pricing</a>
    </Navbar>
  ),
};
