import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Warning } from "@phosphor-icons/react";
import { Modal } from "../components/Modal/Modal";
import { Button } from "../components/Button/Button";

const meta: Meta<typeof Modal> = { title: "Components/Modal", component: Modal };
export default meta;

export const Default: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="flex items-start gap-3">
            <Warning size={24} weight="fill" className="mt-0.5 shrink-0 text-[var(--warning)]" />
            <div>
              <h2 className="mb-1 text-lg font-semibold">Confirm action</h2>
              <p className="mb-4 text-sm text-[var(--muted)]">Are you sure you want to delete this bot? This action cannot be undone.</p>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="danger" size="sm" onClick={() => setOpen(false)}>Delete</Button>
          </div>
        </Modal>
      </>
    );
  },
};
