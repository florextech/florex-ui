import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Gear, X } from "@phosphor-icons/react";
import { Drawer } from "../components/Drawer/Drawer";
import { Button } from "../components/Button/Button";
import { IconButton } from "../components/IconButton/IconButton";

const meta: Meta<typeof Drawer> = { title: "Components/Drawer", component: Drawer };
export default meta;

export const Right: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="secondary" onClick={() => setOpen(true)}><Gear size={16} /> Settings</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="right">
          <div className="flex items-center justify-between border-b border-(--border) p-4">
            <h2 className="text-lg font-semibold">Settings</h2>
            <IconButton icon={<X size={16} />} aria-label="Close" variant="ghost" size="sm" onClick={() => setOpen(false)} />
          </div>
          <div className="p-4 text-sm text-(--muted)">Drawer content goes here.</div>
        </Drawer>
      </>
    );
  },
};
