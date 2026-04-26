import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../components/Modal/Modal";
import { Button } from "../components/Button/Button";

const meta: Meta<typeof Modal> = { title: "Components/Modal", component: Modal };
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <h2 className="mb-2 text-lg font-semibold">Confirm action</h2>
          <p className="mb-4 text-sm text-[var(--muted)]">Are you sure you want to proceed?</p>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
            <Button size="sm" onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        </Modal>
      </>
    );
  },
};
