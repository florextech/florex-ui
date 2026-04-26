import type { Meta, StoryObj } from "@storybook/react";
import { House } from "@phosphor-icons/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "../components/Breadcrumb/Breadcrumb";

const meta: Meta = { title: "Components/Breadcrumb" };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem><BreadcrumbLink href="#"><House size={14} /> Home</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbItem><BreadcrumbLink href="#">Organizations</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbItem><BreadcrumbLink href="#">Florex Labs</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbItem><span className="text-[var(--foreground)]">Settings</span></BreadcrumbItem>
    </Breadcrumb>
  ),
};
