import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components/Pagination/Pagination";

const meta: Meta<typeof Pagination> = { title: "Components/Pagination", component: Pagination };
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = { args: { page: 2, totalPages: 5, onPageChange: () => {} } };
export const FirstPage: Story = { args: { page: 1, totalPages: 5, onPageChange: () => {} } };
